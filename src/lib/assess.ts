import { materialById } from '../data/materials';
import { buildField, hullArea, hullRadius, insideMargin, measure, type Shape } from './field';
import { viewDistanceFor } from './maertens';
import { SEASON_LABEL, shadowLength, sunPosition } from './solar';
import type { Design } from './types';

export type Verdict = 'pass' | 'fail' | 'info';

export interface Check {
  id: string;
  title: string;
  value: string;
  verdict: Verdict;
  /** one line: what it means for the decision */
  insight: string;
  /** what is measured */
  measures: string;
  /** how it is computed */
  how: string;
  /** the standard or source it rests on */
  standard: string;
  limit: string;
  confidence: 'גבוה' | 'בינוני' | 'נמוך';
}

export interface Report {
  shape: Shape;
  heightM: number;
  widthM: number;
  depthM: number;
  volumeM3: number;
  unitKg: number;
  totalKg: number;
  d45: number;
  d27: number;
  d18: number;
  fieldAreaM2: number;
  stableMargin: number;
  checks: Check[];
}

export const fmt = (n: number, digits = 1) =>
  Number.isFinite(n)
    ? n.toLocaleString('he-IL', { maximumFractionDigits: Math.abs(n) < 1 && n !== 0 ? Math.max(digits, 2) : digits, minimumFractionDigits: 0 })
    : 'אין';

export function weightLabel(kg: number): string {
  if (kg >= 1000) return `${fmt(kg / 1000, kg >= 10000 ? 0 : 1)} טון`;
  return `${fmt(kg, 0)} ק"ג`;
}

export function assess(d: Design, shapeIn?: Shape): Report {
  const shape = shapeIn ?? measure(buildField(d));
  const res = 48;
  const spanY = Math.max(1e-6, shape.max[1] - shape.min[1]);
  const s = d.height / spanY; // metres per grid unit
  const widthM = (shape.max[0] - shape.min[0]) * s;
  const depthM = (shape.max[2] - shape.min[2]) * s;
  const step = 2 / (res - 1);
  const volumeM3 = shape.voxels * res * res * res * Math.pow(step * s, 3);
  const mat = materialById(d.material);
  const unitKg = volumeM3 * mat.density;
  const totalKg = unitKg * d.count;

  // A field of many units is read as a carpet: its view distance follows the largest dimension.
  const spacing = 1.6 * Math.max(widthM, depthM);
  const fieldAreaM2 = d.count > 1 ? d.count * spacing * spacing : hullArea(shape.hull) * s * s;
  const fieldSide = Math.sqrt(fieldAreaM2);
  const viewW = d.count > 1 ? fieldSide : widthM;
  const v45 = viewDistanceFor(d.height, viewW, 45);
  const v27 = viewDistanceFor(d.height, viewW, 27);
  const v18 = viewDistanceFor(d.height, viewW, 18);
  const d45 = v45.d, d27 = v27.d, d18 = v18.d;
  const byLabel = v27.by === 'width' ? `לפי הרוחב (${fmt(viewW)} מ')` : `לפי הגובה (${fmt(d.height)} מ')`;

  const margin = insideMargin([shape.com[0], shape.com[2]], shape.hull);
  const r = hullRadius(shape.hull);
  const marginShare = r > 0 ? margin / r : -1;

  const noon = sunPosition(d.season, 12);
  const now = sunPosition(d.season, d.hour);
  const shadowNoon = shadowLength(d.height, noon.altitude);
  const shadowNow = shadowLength(d.height, now.altitude);

  const checks: Check[] = [
    {
      id: 'whole',
      title: 'מבט שלם',
      value: `${fmt(d27)} מ'`,
      verdict: d.siteDepth >= d27 ? 'pass' : 'fail',
      insight: d.siteDepth >= d27
        ? `יש ${fmt(d.siteDepth, 0)} מ' פנויים: רואים את הפסל כדמות אחת.`
        : `חסרים ${fmt(d27 - d.siteDepth)} מ': מקרוב הפסל נקרא כקיר.`,
      measures: 'המרחק שממנו הפסל כולו נכנס בזווית מבט של 27 מעלות.',
      how: `גובה: d = (H − 1.6) / tan 27°, מגובה עין 1.6 מ'. רוחב: d = (W / 2) / tan 13.5°. נבחר הגדול, כאן ${byLabel}. בשדה של יחידות, W הוא צלע השדה.`,
      standard: 'Hermann Maertens, Der optische Maßstab, 1877: זווית 27° למבט על אובייקט שלם. ההרחבה לרוחב היא של הכלי.',
      limit: 'כלל אצבע של תכנון עירוני, לא תקן מחייב. לא מתחשב בשיפוע, בעצים ובתנועה.',
      confidence: 'גבוה',
    },
    {
      id: 'setting',
      title: 'מבט עם הסביבה',
      value: `${fmt(d18)} מ'`,
      verdict: d.siteDepth >= d18 ? 'pass' : 'fail',
      insight: d.siteDepth >= d18 ? 'הפסל והמקום נקראים יחד.' : 'אין מספיק מרחק לראות את הפסל בתוך המקום.',
      measures: 'המרחק שממנו הפסל נראה עם הרקע שלו, בזווית 18 מעלות.',
      how: 'אותו חישוב בזווית 18°: הגדול מבין הגובה והרוחב.',
      standard: 'Maertens, 1877: זווית 18° למבט על אובייקט בתוך סביבתו.',
      limit: 'כמו מבט שלם. בפסל נמוך מגובה העין משתמשים בגובה המלא.',
      confidence: 'גבוה',
    },
    {
      id: 'stable',
      title: 'יציבות על הקרקע',
      value: margin > 0 ? `${fmt(Math.max(0, marginShare) * 100, 0)}% מהבסיס` : 'מחוץ לבסיס',
      verdict: margin > 0 ? 'pass' : 'fail',
      insight: margin > 0 ? 'מרכז הכובד נופל בתוך הבסיס: הפסל עומד בלי עיגון.' : 'מרכז הכובד מחוץ לבסיס: הפסל יתהפך בלי עיגון.',
      measures: 'איפה נופל מרכז הכובד ביחס לטביעת הרגל של הפסל על הקרקע.',
      how: 'מרכז הכובד מכל הווקסלים המלאים, מול מעטפת קמורה של שתי השכבות התחתונות. המרווח מחולק ברדיוס החסום של הבסיס.',
      standard: 'סטטיקה של גוף קשיח: גוף עומד כשקו הכובד עובר בתוך בסיס התמיכה.',
      limit: 'בדיקה גאומטרית בלבד. רוח (ת"י 414), רעידות (ת"י 413) ועיגון: מהנדס קונסטרוקציה מחשב וחותם.',
      confidence: 'בינוני',
    },
    {
      id: 'kern',
      title: 'בשליש האמצעי',
      value: marginShare >= 1 / 3 ? 'כן' : 'לא',
      verdict: marginShare >= 1 / 3 ? 'pass' : 'fail',
      insight: marginShare >= 1 / 3 ? 'יש עתודה מול דחיפה ורוח.' : 'הפסל עומד, אבל קרוב לקצה. דחיפה תזיז אותו.',
      measures: 'האם מרכז הכובד רחוק מספיק מקצה הבסיס.',
      how: 'המרווח לפחות שליש מהרדיוס החסום של הבסיס.',
      standard: 'כלל השליש האמצעי (גרעין החתך) בבנייה מאבן ובקירות כובד.',
      limit: 'הכלל נכתב לחתך מלבני. בבסיס אורגני הוא קירוב.',
      confidence: 'בינוני',
    },
    {
      id: 'weight',
      title: 'משקל',
      value: weightLabel(totalKg),
      verdict: 'info',
      insight: totalKg > 2000 ? 'דורש עגורן ויסוד מתוכנן.' : totalKg > 300 ? 'דורש מלגזה ובסיס בטון.' : 'אפשר להציב בידיים, עם עיגון נגד גניבה.',
      measures: 'נפח הגוף כפול הצפיפות של החומר, כפול מספר היחידות.',
      how: `נפח ${fmt(volumeM3, 2)} מ"ק × ${mat.density.toLocaleString('he-IL')} ק"ג למ"ק × ${d.count.toLocaleString('he-IL')}.`,
      standard: 'צפיפות טיפוסית לפי Engineering ToolBox, Densities of Solids.',
      limit: `${mat.note} ספי העגורן והמלגזה הם סיווג של הכלי, לא תקן.`,
      confidence: 'בינוני',
    },
    {
      id: 'void',
      title: 'חלל נראה',
      value: `${fmt(shape.seeThrough * 100, 0)}%`,
      verdict: 'info',
      insight: shape.seeThrough > 0.12 ? 'החלל הוא חלק מהצורה: רואים דרך הפסל.' : 'הגוף סגור: הפסל נקרא כמסה אחת.',
      measures: 'כמה מהקו החיצוני של הפסל, במבט מהחזית, פתוח לאוויר.',
      how: 'הטלה של הגוף על מישור החזית. בכל שורה ובכל טור: פיקסלים ריקים בין הקצוות, מחולקים בשטח המתאר.',
      standard: 'מדד של הכלי, בהשראת החור אצל הנרי מור. אין לו תקן.',
      limit: 'סופר גם רווח פתוח בין איברים, ולא רק חור סגור.',
      confidence: 'בינוני',
    },
    {
      id: 'shadow',
      title: 'צל בצהריים',
      value: Number.isFinite(shadowNoon) ? `${fmt(shadowNoon)} מ'` : 'אין שמש',
      verdict: 'info',
      insight: Number.isFinite(shadowNow)
        ? `ב-${SEASON_LABEL[d.season]} בשעה ${d.hour}:00 הצל באורך ${fmt(shadowNow)} מ'.`
        : `ב-${SEASON_LABEL[d.season]} בשעה ${d.hour}:00 השמש מתחת לאופק.`,
      measures: 'אורך הצל של ראש הפסל על קרקע שטוחה, באשדוד.',
      how: `גובה השמש ${fmt(noon.altitude)}° בצהריים: sin(alt) = sin φ sin δ + cos φ cos δ cos H, φ = 31.8°. אורך = H / tan(alt).`,
      standard: 'משוואות מיקום השמש בשעון שמש מקומי. נטיית ציר כדור הארץ 23.44°.',
      limit: 'שעון שמש, לא שעון קיר. בלי שבירת אור ובלי צל של בניינים סמוכים.',
      confidence: 'גבוה',
    },
    {
      id: 'scale',
      title: 'קנה מידה',
      value: `פי ${fmt(d.height / 1.75)} מאדם`,
      verdict: 'info',
      insight: d.height < 1.2 ? 'קטן מאדם: פסל שמתכופפים אליו.' : d.height <= 2.6 ? 'בגובה אדם: פסל שעומדים מולו.' : 'גדול מאדם: פסל שמסתכלים אליו למעלה.',
      measures: 'גובה הפסל ביחס לאדם בגובה 1.75 מטר.',
      how: 'H / 1.75.',
      standard: 'סיווג של הכלי, לא תקן.',
      limit: 'הקריאה תלויה גם בבסיס, במרחק ובאור.',
      confidence: 'גבוה',
    },
  ];

  return { shape, heightM: d.height, widthM, depthM, volumeM3, unitKg, totalKg, d45, d27, d18, fieldAreaM2, stableMargin: marginShare, checks };
}

/** The field draws the sculpture and the report measures it: both from one build. */
export function compute(d: Design) {
  const field = buildField(d);
  const shape = measure(field);
  return { field, report: assess(d, shape) };
}
