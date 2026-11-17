import { DISCOVERIES, OLAM_URL } from '../data/discoveries';
import { MATERIALS } from '../data/materials';
import { fmt } from '../lib/assess';
import { agreement, kappaLabel } from '../lib/kappa';
import type { Saved } from '../lib/types';
import { pairsOf } from './Collection';

const STANDARDS = [
  { what: 'מרחקי מבט: פרטים, שלם, עם הסביבה', rests: 'הרמן מרטנס, "קנה המידה האופטי", בון (Bonn), 1877: זוויות 45°, 27° ו-18°. במקור: Hermann Maertens, Der optische Maßstab.', reliability: 'נוסחה סגורה. ההרחבה לרוחב היא של הכלי, ומסומנת.', layer: 'קוד' },
  { what: 'מיקום השמש וצל', rests: 'משוואות מיקום השמש בשעון שמש מקומי. נטיית ציר 23.44°, קו רוחב אשדוד (Ashdod) 31.8°.', reliability: 'דיוק של כמעלה אחת. בלי שבירת אור ובלי צל בניינים.', layer: 'קוד' },
  { what: 'משקל', rests: 'נפח מהשדה התלת־ממדי כפול צפיפות טיפוסית, לפי Engineering ToolBox: Densities of Solids.', reliability: 'גוף מלא. יציקה חלולה ולוחות שוקלים פחות.', layer: 'קוד' },
  { what: 'יציבות', rests: 'סטטיקה של גוף קשיח: קו הכובד בתוך בסיס התמיכה. כלל השליש האמצעי.', reliability: 'גאומטריה בלבד. רוח (ת"י 414), רעידות (ת"י 413) ועיגון: מהנדס חותם.', layer: 'קוד, ואיש מקצוע מאשר' },
  { what: 'חלל נראה', rests: 'מדד של הכלי, בהשראת הנרי מור. הטלה של הגוף על מישור החזית.', reliability: 'סופר גם רווח בין איברים. אין לו תקן.', layer: 'קוד' },
  { what: 'הסכמה בין הכלי לאיש המקצוע', rests: 'קאפה של כהן (Cohen), 1960. סולם Landis ו-Koch, 1977.', reliability: 'משמעותי מעשרות הכרעות ומעלה.', layer: 'קוד, מול הכרעה אנושית' },
];

export default function Method({ saved }: { saved: Saved[] }) {
  const agr = agreement(pairsOf(saved));
  return (
    <main className="method">
      <div className="page-head">
        <div>
          <h1>שיטה ומקורות</h1>
          <p>
            <mark>אותו שדה תלת־ממדי מצייר את הפסל ומודד אותו.</mark>
            <br />
            מה שחושב בקוד, מה שמבוסס על מקור, ומה שנשאר להכרעה שלך: כל אחד בשורה משלו.
          </p>
        </div>
      </div>

      <section className="kappa">
        <div className="big"><span className="what">בדיקות בכל פסל</span><span className="num">8</span><span className="ins">4 עם הכרעה, 4 למידע.</span></div>
        <div className="big"><span className="what">הכרעות שלך באוסף</span><span className="num">{agr.n}</span><span className="ins">כל הכרעה נשמרת עם הפסל.</span></div>
        <div className="big"><span className="what">הסכמה עם הכלי</span><span className="num">{agr.n ? `${fmt(agr.po * 100, 0)}%` : 'אין עדיין'}</span><span className="ins">{agr.n ? `קאפה ${agr.kappa === null ? 'לא חושב' : fmt(agr.kappa, 2)}: ${kappaLabel(agr.kappa)}.` : 'מתמלא כשמדרגים בסדנה.'}</span></div>
      </section>

      <section>
        <h2 style={{ fontSize: '1.6rem', marginBottom: 10 }}>על מה כל מדד נשען</h2>
        <div className="table-wrap">
          <table className="std">
            <thead><tr><th>מדד</th><th>תקן או מקור</th><th>אמינות ומגבלה</th><th>מי קובע</th></tr></thead>
            <tbody>{STANDARDS.map((s) => <tr key={s.what}><td><b>{s.what}</b></td><td>{s.rests}</td><td>{s.reliability}</td><td>{s.layer}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '1.6rem', marginBottom: 10 }}>שלושת הגילויים</h2>
        <div className="table-wrap">
          <table className="std">
            <thead><tr><th>שנה</th><th>יצירה</th><th>מקום</th><th>עובדות</th><th>הפעולה בסדנה</th></tr></thead>
            <tbody>
              {DISCOVERIES.map((d) => (
                <tr key={d.id}>
                  <td className="mono">{d.year}</td>
                  <td><b>{d.artist}</b> ({d.artistEn})<br />{d.work} ({d.workEn})<br /><a href={d.source} target="_blank" rel="noreferrer">מקור</a></td>
                  <td>{d.place} <bdi dir="ltr">({d.placeEn})</bdi></td>
                  <td>{d.facts.map((f) => <div key={f}>{f}</div>)}{d.quote && <div><i>"{d.quote.text}"</i>, {d.quote.by}, {d.quote.source}</div>}</td>
                  <td>{d.move}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="status">
          העובדות כפי שהן במקור המקושר ובמאגר <a href={OLAM_URL} target="_blank" rel="noreferrer">עולם נעלם ומציאות מצויה</a>. בזמן הבנייה ויקיפדיה הייתה חסומה מסביבת העבודה, ולכן לא נבדקו מחדש מול המקור.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.6rem', marginBottom: 10 }}>חומרים</h2>
        <div className="table-wrap">
          <table className="std">
            <thead><tr><th>חומר</th><th>צפיפות (ק"ג למ"ק)</th><th>הערה</th></tr></thead>
            <tbody>{MATERIALS.map((m) => <tr key={m.id}><td><b>{m.label}</b></td><td className="mono">{m.density.toLocaleString('he-IL')}</td><td>{m.note}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '1.6rem', marginBottom: 10 }}>מה הכלי לא עושה</h2>
        <p>
          לא מחליף חישוב קונסטרוקציה, היתר או ועדה.
          <br />
          לא מעתיק יצירות: שלושת הגילויים הם החלטות, לא תבניות.
          <br />
          לא שומר דבר בשרת: האוסף נשמר בדפדפן הזה בלבד.
        </p>
      </section>
    </main>
  );
}
