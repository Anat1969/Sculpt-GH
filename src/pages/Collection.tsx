import { DISCOVERIES } from '../data/discoveries';
import { materialById } from '../data/materials';
import { fmt } from '../lib/assess';
import { agreement, kappaLabel } from '../lib/kappa';
import type { Design, Saved } from '../lib/types';

export function pairsOf(saved: Saved[]) {
  return saved.flatMap((s) => Object.keys(s.judge).filter((k) => k in s.tool).map((k) => ({ tool: s.tool[k], human: s.judge[k] })));
}

export default function Collection({ saved, onOpen, onDelete, onStart }: {
  saved: Saved[];
  onOpen: (s: Saved) => void;
  onDelete: (s: Saved) => void;
  onStart: (p: Partial<Design>) => void;
}) {
  const agr = agreement(pairsOf(saved));
  return (
    <main className="collection">
      <div className="page-head">
        <div>
          <h1>אוסף</h1>
          <p>כל פסל נשמר עם התמונה, הבחירות, הכרעת הכלי וההכרעה שלך. שמירה: מתוך הסדנה, בכפתור הלוגו A&amp;I.</p>
        </div>
        <div className="big" data-testid="kappa">
          <span className="what">הסכמה בין הכלי לבינך</span>
          <span className="num">{agr.n ? `${fmt(agr.po * 100, 0)}%` : 'אין עדיין'}</span>
          <span className="ins">
            {agr.n ? `${agr.n} הכרעות. קאפה של כהן ${agr.kappa === null ? 'לא חושב' : fmt(agr.kappa, 2)}: ${kappaLabel(agr.kappa)}.` : 'דרגי בדיקות בסדנה, והמדד יופיע כאן.'}
          </span>
        </div>
      </div>

      {saved.length === 0 ? (
        <>
          <p>האוסף ריק. שלוש התחלות, אחת מכל גילוי:</p>
          <div className="empty">
            {DISCOVERIES.map((d) => (
              <article key={d.id} className="move" data-tone={d.tone}>
                <span className="verb">{d.move}</span>
                <span className="year">{d.year}</span>
                <span className="who"><b>{d.artist}</b>, {d.work}</span>
                <span className="insight"><mark>{d.insight}</mark></span>
                <div className="haiku">{d.haiku.map((l) => <div key={l}>{l}</div>)}</div>
                <ul className="facts-list">{d.facts.map((f) => <li key={f}>{f}</li>)}</ul>
                <div className="row"><span /><button className="btn primary" onClick={() => onStart({ ...d.preset, name: `בהשראת ${d.artist}` })}>להתחיל מכאן</button></div>
              </article>
            ))}
          </div>
        </>
      ) : (
        <div className="grid-cards">
          {saved.map((s) => {
            const passed = Object.values(s.tool).filter(Boolean).length;
            const total = Object.keys(s.tool).length;
            return (
              <article key={s.id} className="card" data-testid="saved-card">
                {s.thumb ? <img src={s.thumb} alt={`תמונה של ${s.design.name}`} /> : <img alt="" />}
                <div className="body">
                  <h3>{s.design.name}</h3>
                  <span className="facts">
                    {fmt(s.design.height, 2)} מ' · {materialById(s.design.material).label}
                    {s.design.count > 1 ? ` · ${s.design.count.toLocaleString('he-IL')} יחידות` : ''} · עובר {passed} מתוך {total}
                  </span>
                  <span className="status">{new Date(s.savedAt).toLocaleString('he-IL', { dateStyle: 'short', timeStyle: 'short' })}</span>
                  <div className="row">
                    <button className="btn primary" onClick={() => onOpen(s)}>פתיחה בסדנה</button>
                    <button className="btn" onClick={() => onDelete(s)}>מחיקה</button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}
