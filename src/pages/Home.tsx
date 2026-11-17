import { lazy, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { DISCOVERIES, OLAM_URL } from '../data/discoveries';
import { compute, fmt, weightLabel } from '../lib/assess';
import { DEFAULT_DESIGN } from '../lib/store';
import type { Design } from '../lib/types';

const Viewer3D = lazy(() => import('../components/Viewer3D'));

export default function Home({ onStart }: { onStart: (p: Partial<Design>) => void }) {
  const hero = useMemo<Design>(() => ({ ...DEFAULT_DESIGN, ...DISCOVERIES[1].preset, season: 'equinox', hour: 15, name: 'דמות שרועה' }), []);
  const { field, report } = useMemo(() => compute(hero), [hero]);

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-text">
          <span className="label">יצירה · פיסול · מרחב ציבורי</span>
          <h1>פסל נמדד במבט,<br />לא רק בצורה</h1>
          <p className="lede">
            שלוש החלטות בונות פסל: <b>מסה</b>, <b>חלל</b> ו<b>אור</b>.
            <br />
            הסדנה מראה מיד <mark>מאיפה רואים אותו שלם</mark>, כמה הוא שוקל, ואם הוא עומד.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a className="btn primary big" href="#/studio">לסדנה</a>
            <a className="btn big" href="#/method">איך זה נמדד</a>
          </div>
        </div>
        <div className="hero-stage">
          <Suspense fallback={null}>
            <Viewer3D design={hero} field={field} report={report} mode="object" spin bare />
          </Suspense>
          <p className="stage-cap">
            בהשראת הנרי מור, 1951. בגובה <b>{fmt(hero.height)} מ'</b> בברונזה:
            <br />
            שלם מ-<b>{fmt(report.d27)} מ'</b>, שוקל <b>{weightLabel(report.totalKg)}</b> בגוף מלא.
          </p>
        </div>
      </section>

      <section className="moves" aria-label="שלוש החלטות, שלושה גילויים">
        {DISCOVERIES.map((d, i) => (
          <motion.article
            key={d.id}
            className="move"
            data-tone={d.tone}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
              <span className="verb">{d.move}</span>
              <span className="year">{d.year}</span>
            </div>
            <div className="who">
              <b>{d.artist}</b>, {d.work} <bdi dir="ltr" className="mono">({d.workEn})</bdi>
            </div>
            <div className="insight"><mark>{d.insight}</mark></div>
            <div className="haiku">{d.haiku.map((l) => <div key={l}>{l}</div>)}</div>
            <div className="row">
              <span className="src">
                <a href={d.source} target="_blank" rel="noreferrer">מקור</a> · <a href={OLAM_URL} target="_blank" rel="noreferrer">עולם נעלם</a>
              </span>
              <button className="btn primary" onClick={() => onStart({ ...d.preset, name: `בהשראת ${d.artist}` })}>
                {d.moveVerb}: להתחיל מכאן
              </button>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
