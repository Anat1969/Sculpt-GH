import { lazy, Suspense, useDeferredValue, useMemo, useState } from 'react';
import { MATERIALS } from '../data/materials';
import { DISCOVERIES } from '../data/discoveries';
import { compute, fmt, weightLabel, type Check } from '../lib/assess';
import { agreement, kappaLabel } from '../lib/kappa';
import { SEASON_LABEL, SITE, sunPosition } from '../lib/solar';
import type { Design, FormKind, MaterialId, Season } from '../lib/types';
import VoiceButton from '../components/VoiceButton';
import type { ViewMode } from '../components/Viewer3D';

const Viewer3D = lazy(() => import('../components/Viewer3D'));

const FORMS: { id: FormKind; label: string }[] = [
  { id: 'reclining', label: 'שרוע' },
  { id: 'column', label: 'עומד' },
  { id: 'stone', label: 'גוש' },
];
const COUNTS = [1, 7, 100, 1000, 10000];
const SEASONS: Season[] = ['summer', 'equinox', 'winter'];

// height slider: 3 cm to 12 m on a log scale, so a seed and a monument share one control
const toH = (v: number) => Math.round(0.03 * Math.pow(400, v / 100) * 100) / 100;
const fromH = (h: number) => (100 * Math.log(h / 0.03)) / Math.log(400);

interface Props {
  design: Design;
  setDesign: (d: Design) => void;
  judge: Record<string, boolean>;
  setJudge: (j: Record<string, boolean>) => void;
  onSnap: (f: () => string) => void;
  status: string;
}

function Chip({ on, children, onClick, title }: { on: boolean; children: React.ReactNode; onClick: () => void; title?: string }) {
  return (
    <button type="button" className="chip" aria-pressed={on} onClick={onClick} title={title}>
      {children}
    </button>
  );
}

function Slider({ label, value, min, max, step, out, onChange }: { label: string; value: number; min: number; max: number; step: number; out: string; onChange: (v: number) => void }) {
  return (
    <label className="slider">
      <span>{label}</span>
      <output>{out}</output>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} aria-label={label} />
    </label>
  );
}

const TONE: Record<string, string> = { mass: 'var(--mass)', void: 'var(--void)', light: 'var(--light)' };

export default function Studio({ design, setDesign, judge, setJudge, onSnap, status }: Props) {
  const set = <K extends keyof Design>(k: K, v: Design[K]) => setDesign({ ...design, [k]: v });
  const deferred = useDeferredValue(design);
  const { field, report } = useMemo(() => compute(deferred), [deferred]);
  const [mode, setMode] = useState<ViewMode>('object');
  const [spin, setSpin] = useState(false);
  const [lead, setLead] = useState<'tool' | 'me'>('tool');

  const byId = (id: string) => report.checks.find((c) => c.id === id)!;
  const whole = byId('whole');
  const stable = byId('stable');
  const judged = report.checks.filter((c) => c.verdict !== 'info' && judge[c.id] !== undefined);
  const agr = agreement(judged.map((c) => ({ tool: c.verdict === 'pass', human: judge[c.id] })));
  const sun = sunPosition(design.season, design.hour);
  const [voidD, multD, lightD] = [DISCOVERIES[1], DISCOVERIES[0], DISCOVERIES[2]];
  const hidden = (c: Check) => lead === 'me' && c.verdict !== 'info' && judge[c.id] === undefined;

  return (
    <main className="studio">
      {/* ---------- decisions ---------- */}
      <aside className="panel controls" aria-label="החלטות">
        <div className="group">
          <h3>שם הפסל</h3>
          <div className="name-row">
            <input type="text" value={design.name} onChange={(e) => set('name', e.target.value)} aria-label="שם הפסל" />
            <VoiceButton onText={(t) => set('name', t)} />
          </div>
        </div>

        <div className="group">
          <h3>גוף</h3>
          <div className="chips">
            {FORMS.map((f) => <Chip key={f.id} on={design.form === f.id} onClick={() => set('form', f.id)}>{f.label}</Chip>)}
          </div>
          <Slider label="גובה" value={fromH(design.height)} min={0} max={100} step={0.5} out={`${fmt(design.height, 2)} מ'`} onChange={(v) => set('height', toH(v))} />
          <Slider label="תנועה במשטח" value={design.flow} min={0} max={1} step={0.05} out={fmt(design.flow * 100, 0) + '%'} onChange={(v) => set('flow', v)} />
          {design.form === 'column' && (
            <Slider label="פיתול" value={design.twist} min={0} max={1} step={0.05} out={fmt(design.twist * 100, 0) + '%'} onChange={(v) => set('twist', v)} />
          )}
        </div>

        <div className="group">
          <h3><span className="tone" style={{ background: TONE.void }} />חלל <bdi dir="ltr" className="label">{voidD.artistEn}, {voidD.year}</bdi></h3>
          <div className="chips">
            {[0, 1, 2, 3].map((n) => <Chip key={n} on={design.holes === n} onClick={() => set('holes', n)}>{n === 0 ? 'בלי חור' : `${n} חורים`.replace('1 חורים', 'חור אחד')}</Chip>)}
          </div>
          {design.holes > 0 && (
            <Slider label="גודל החור" value={design.holeSize} min={0} max={1} step={0.05} out={fmt(design.holeSize * 100, 0) + '%'} onChange={(v) => set('holeSize', v)} />
          )}
        </div>

        <div className="group">
          <h3><span className="tone" style={{ background: TONE.mass }} />ריבוי <bdi dir="ltr" className="label">{multD.artistEn}, {multD.year}</bdi></h3>
          <div className="chips">
            {COUNTS.map((n) => <Chip key={n} on={design.count === n} onClick={() => set('count', n)}>{n === 1 ? 'יחיד' : n.toLocaleString('he-IL')}</Chip>)}
          </div>
        </div>

        <div className="group">
          <h3><span className="tone" style={{ background: TONE.light }} />אור <bdi dir="ltr" className="label">{lightD.artistEn}, {lightD.year}</bdi></h3>
          <div className="chips">
            <Chip on={design.light === 'sun'} onClick={() => set('light', 'sun')} title={`השמש של ${SITE.name} (${SITE.nameEn})`}>שמש אשדוד</Chip>
            <Chip on={design.light === 'hidden'} onClick={() => set('light', 'hidden')} title="אור מלמעלה, ממקור שלא רואים">חלון נסתר</Chip>
            <Chip on={design.rays} onClick={() => set('rays', !design.rays)}>קרני זהב</Chip>
          </div>
          {design.light === 'sun' && (
            <>
              <div className="chips">
                {SEASONS.map((s) => <Chip key={s} on={design.season === s} onClick={() => set('season', s)}>{SEASON_LABEL[s]}</Chip>)}
              </div>
              <Slider label="שעה (שעון שמש)" value={design.hour} min={6} max={18} step={0.5} out={`${Math.floor(design.hour)}:${design.hour % 1 ? '30' : '00'} · שמש ${fmt(sun.altitude, 0)}°`} onChange={(v) => set('hour', v)} />
            </>
          )}
        </div>

        <div className="group">
          <h3>חומר</h3>
          <div className="chips">
            {MATERIALS.map((m) => <Chip key={m.id} on={design.material === m.id} onClick={() => set('material', m.id as MaterialId)}>{m.label}</Chip>)}
          </div>
        </div>

        <div className="group">
          <h3>המקום</h3>
          <Slider label="עומק פנוי מול הפסל" value={design.siteDepth} min={2} max={80} step={1} out={`${design.siteDepth} מ'`} onChange={(v) => set('siteDepth', v)} />
        </div>
      </aside>

      {/* ---------- the work ---------- */}
      <section className="stage" aria-label="הפסל">
        <div className="stage-tools">
          <button className="chip" aria-pressed={mode === 'object'} onClick={() => setMode('object')}>הפסל</button>
          <button className="chip" aria-pressed={mode === 'site'} onClick={() => setMode('site')}>במקום</button>
          <button className="chip" aria-pressed={spin} onClick={() => setSpin(!spin)}>סיבוב</button>
        </div>
        <div className="stage-title">
          <h2 data-testid="title">{design.name || 'פסל ללא שם'}</h2>
          <div className="status">{status}</div>
        </div>
        <Suspense fallback={null}>
          <Viewer3D design={deferred} field={field} report={report} mode={mode} spin={spin} onReady={onSnap} />
        </Suspense>
        <div className="legend" aria-label="מקרא">
          <span><i style={{ background: 'var(--void)' }} />טבעות מבט: 45°, 27°, 18°</span>
          <span><i style={{ background: '#d4d0c6' }} />העומק הפנוי במקום</span>
          <span><i style={{ background: 'var(--ink)' }} />אדם, 1.75 מ'</span>
          <span><i style={{ background: 'var(--light)' }} />{design.light === 'sun' ? `שמש, ${SEASON_LABEL[design.season]}` : 'חלון נסתר'}</span>
        </div>
      </section>

      {/* ---------- what it means ---------- */}
      <aside className="panel metrics" aria-label="מדדים">
        <div className="big3">
          <div className="big" data-v={hidden(whole) ? 'info' : whole.verdict} data-testid="big-whole">
            <span className="what">מאיפה רואים אותו שלם</span>
            <span className="num">{fmt(report.d27)} מ'</span>
            <span className="ins">{hidden(whole) ? 'מוסתר עד שתדרגי' : whole.insight}</span>
          </div>
          <div className="big" data-v="info" data-testid="big-weight">
            <span className="what">כמה הוא שוקל{design.count > 1 ? `, ${design.count.toLocaleString('he-IL')} יחידות` : ''}</span>
            <span className="num">{weightLabel(report.totalKg)}</span>
            <span className="ins">{byId('weight').insight}</span>
          </div>
          <div className="big" data-v={hidden(stable) ? 'info' : stable.verdict} data-testid="big-stable">
            <span className="what">האם הוא עומד</span>
            <span className="num">{hidden(stable) ? '?' : stable.verdict === 'pass' ? 'עומד' : 'נופל'}</span>
            <span className="ins">{hidden(stable) ? 'מוסתר עד שתדרגי' : stable.insight}</span>
          </div>
        </div>

        <div className="group">
          <h3>הערכה אוטומטית <span className="label">כל בדיקה: מה, איך, תקן, מגבלה</span></h3>
          <div className="chips" aria-label="מי מוביל">
            <Chip on={lead === 'tool'} onClick={() => setLead('tool')} title="הכלי מציג הכרעה, ואת בוחנת">הכלי מוביל</Chip>
            <Chip on={lead === 'me'} onClick={() => setLead('me')} title="את מדרגת קודם, וההכרעה של הכלי נפתחת אחר כך">אני מובילה</Chip>
          </div>
          <div className="checks">
            {report.checks.map((c) => (
              <details key={c.id} className="check" data-v={hidden(c) ? 'info' : c.verdict} data-testid={`check-${c.id}`}>
                <summary>
                  <span className="dot" aria-hidden="true" />
                  <b>{c.title}</b>
                  <span className="v">{hidden(c) ? '?' : c.value}</span>
                </summary>
                {!hidden(c) && <p className="ins">{c.insight}</p>}
                <dl>
                  <dt>מה נמדד</dt><dd>{c.measures}</dd>
                  <dt>איך חושב</dt><dd>{c.how}</dd>
                  <dt>תקן</dt><dd>{c.standard}</dd>
                  <dt>מגבלה</dt><dd>{c.limit}</dd>
                  <dt>ביטחון</dt><dd>{c.confidence}</dd>
                </dl>
                {c.verdict !== 'info' && (
                  <div className="agree">
                    <span>ההכרעה שלך:</span>
                    <button className="chip" aria-pressed={judge[c.id] === true} onClick={() => setJudge({ ...judge, [c.id]: true })}>עובר</button>
                    <button className="chip" aria-pressed={judge[c.id] === false} onClick={() => setJudge({ ...judge, [c.id]: false })}>לא עובר</button>
                  </div>
                )}
              </details>
            ))}
          </div>
          <p className="status" data-testid="agreement">
            {agr.n === 0
              ? 'עוד לא דירגת. דירוג שלך מול הכלי נמדד כאן ובאוסף.'
              : `הסכמה בפסל הזה: ${agr.n - Math.round((1 - agr.po) * agr.n)} מתוך ${agr.n}.`}
            {agr.n > 0 && agr.kappa !== null && ` קאפה ${fmt(agr.kappa, 2)}: ${kappaLabel(agr.kappa)}.`}
          </p>
        </div>
        <p className="status">שמירה לאוסף, קישור לפסל וגיליון להדפסה: בכפתור הלוגו A&amp;I.</p>
      </aside>
    </main>
  );
}
