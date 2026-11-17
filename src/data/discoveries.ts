import type { Design } from '../lib/types';

export const OLAM_URL = 'https://olam-gh.vercel.app';

/**
 * The three discoveries the app rests on, from "עולם נעלם ומציאות מצויה" (olam-gh).
 * Each one becomes one decision in the studio: multiplicity, void, light.
 * Facts are as stated in the linked source. They were not re-fetched while building:
 * the build environment blocked wikipedia.org (17.11.2026).
 */
export interface Discovery {
  id: 'multiply' | 'void' | 'light';
  year: number;
  artist: string;
  artistEn: string;
  work: string;
  workEn: string;
  place: string;
  placeEn: string;
  material: string;
  move: string;
  moveVerb: string;
  insight: string;
  facts: string[];
  quote?: { text: string; by: string; source: string };
  haiku: [string, string, string];
  source: string;
  preset: Partial<Design>;
  /** the colour role this decision carries everywhere in the app */
  tone: 'mass' | 'void' | 'light';
}

export const DISCOVERIES: Discovery[] = [
  {
    id: 'multiply',
    year: 2010,
    artist: 'איי וייוויי',
    artistEn: 'Ai Weiwei',
    work: 'זרעי חמנייה',
    workEn: 'Sunflower Seeds',
    place: 'אולם הטורבינות, טייט מודרן, לונדון',
    placeEn: 'Turbine Hall, Tate Modern, London',
    material: 'חרסינה מצוירת ביד',
    move: 'ריבוי',
    moveVerb: 'להכפיל',
    insight: 'יחידה אחת היא חפץ. מיליון הן מקום.',
    facts: [
      'כ-100 מיליון זרעים מחרסינה, כל אחד נוצר וצויר ביד.',
      'הזרעים יוצרו בעיר ג\'ינגדה־ז\'ן שבסין, עיר החרסינה הקיסרית (Jingdezhen).',
      'השטיח פרש על רצפת אולם הטורבינות, והמבקרים הוזמנו לדרוך עליו.',
    ],
    haiku: ['זרע ועוד זרע', 'יד אחת ציירה כל אחד', 'השדה שותק'],
    source: 'https://en.wikipedia.org/wiki/Sunflower_Seeds_(artwork)',
    preset: { form: 'stone', holes: 0, flow: 0.2, height: 0.04, material: 'porcelain', count: 1000, light: 'sun', siteDepth: 20 },
    tone: 'mass',
  },
  {
    id: 'void',
    year: 1951,
    artist: 'הנרי מור',
    artistEn: 'Henry Moore',
    work: 'דמות שרועה: פסטיבל',
    workEn: 'Reclining Figure: Festival',
    place: 'פסטיבל בריטניה, לונדון',
    placeEn: 'Festival of Britain, London',
    material: 'ברונזה',
    move: 'חלל',
    moveVerb: 'לחורר',
    insight: 'החור הוא לא חסר. הוא חלק מהצורה.',
    facts: [
      'נוצר לפסטיבל בריטניה ב-1951, ויצוק בברונזה.',
      'הגוף שרוע ונשען, והחללים עוברים דרכו מצד לצד.',
      'הנוף והאור נראים דרך הפסל, ולכן הוא משתנה עם נקודת המבט.',
    ],
    quote: {
      text: 'The first hole made through a piece of stone is a revelation.',
      by: 'Henry Moore',
      source: '"The Sculptor Speaks", The Listener, 1937',
    },
    haiku: ['אבן נפתחת', 'הרוח עוברת בבטן', 'הגבעה נראית'],
    source: 'https://en.wikipedia.org/wiki/Henry_Moore',
    preset: { form: 'reclining', holes: 2, holeSize: 0.55, flow: 0.45, height: 1.2, material: 'bronze', count: 1, light: 'sun', siteDepth: 12 },
    tone: 'void',
  },
  {
    id: 'light',
    year: 1652,
    artist: "ג'ובאני לורנצו ברניני",
    artistEn: 'Gian Lorenzo Bernini',
    work: 'האקסטזה של תרזה הקדושה',
    workEn: 'Ecstasy of Saint Teresa',
    place: 'קפלת קורנארו, כנסיית סנטה מריה דלה ויטוריה, רומא',
    placeEn: 'Cappella Cornaro, Santa Maria della Vittoria, Roma',
    material: 'שיש וברונזה מוזהבת',
    move: 'אור',
    moveVerb: 'להאיר',
    insight: 'האור הוא חומר. ברניני פיסל גם אותו.',
    facts: [
      'הושלם ב-1652, אחרי עבודה שהחלה ב-1647.',
      'אור יום יורד על השיש מחלון נסתר מעל הקפלה, והצופה לא רואה את מקורו.',
      'מאחורי הדמויות קרניים מברונזה מוזהבת, שממשיכות את האור.',
    ],
    haiku: ['חלון שלא רואים', 'זהב יורד על שיש לבן', 'האבן נושמת'],
    source: 'https://en.wikipedia.org/wiki/Ecstasy_of_Saint_Teresa',
    preset: { form: 'column', holes: 1, holeSize: 0.35, flow: 0.7, twist: 0.6, height: 3.5, material: 'marble', count: 1, light: 'hidden', rays: true, siteDepth: 8 },
    tone: 'light',
  },
];
