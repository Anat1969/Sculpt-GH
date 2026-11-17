import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import TopBar, { type Route } from './components/TopBar';
import type { MenuItem } from './components/AIMenu';
import Home from './pages/Home';
import Studio from './pages/Studio';
import Collection from './pages/Collection';
import Method from './pages/Method';
import { assess } from './lib/assess';
import { DEFAULT_DESIGN, designFromHash, designToHash, loadDesign, loadSaved, saveDesign, writeSaved } from './lib/store';
import type { Design, Saved } from './lib/types';

function parseHash(): { route: Route; d: string | null } {
  const h = window.location.hash.replace(/^#\/?/, '');
  const [path, query] = h.split('?');
  const route: Route = path === 'studio' || path === 'collection' || path === 'method' ? path : 'home';
  const d = new URLSearchParams(query ?? '').get('d');
  return { route, d };
}

const hhmm = (t: number) => new Date(t).toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });

export interface Confirm { text: string; action: string; run: () => void }

export default function App() {
  const [route, setRoute] = useState<Route>(() => parseHash().route);
  const [design, setDesign] = useState<Design>(() => {
    const { d } = parseHash();
    return (d && designFromHash(d)) || loadDesign();
  });
  const [judge, setJudge] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState<Saved[]>(loadSaved);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [toast, setToast] = useState<{ text: string; undo?: () => void } | null>(null);
  const [confirm, setConfirm] = useState<Confirm | null>(null);
  const snap = useRef<(() => string) | null>(null);

  useEffect(() => {
    const on = () => {
      const { route: r, d } = parseHash();
      setRoute(r);
      if (d) { const x = designFromHash(d); if (x) setDesign(x); }
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);

  // every change is saved, with a visible "saved" state
  useEffect(() => {
    const t = setTimeout(() => { if (saveDesign(design)) setSavedAt(Date.now()); }, 250);
    return () => clearTimeout(t);
  }, [design]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 6000);
    return () => clearTimeout(t);
  }, [toast]);

  const updateSaved = useCallback((list: Saved[]) => { setSaved(list); writeSaved(list); }, []);

  const saveToCollection = useCallback(() => {
    const r = assess(design);
    const tool: Record<string, boolean> = {};
    r.checks.filter((c) => c.verdict !== 'info').forEach((c) => { tool[c.id] = c.verdict === 'pass'; });
    const item: Saved = {
      id: `s${Date.now()}`,
      savedAt: Date.now(),
      design,
      thumb: snap.current ? snap.current() : '',
      tool,
      judge: { ...judge },
    };
    updateSaved([item, ...saved]);
    setToast({ text: `"${design.name}" נשמר באוסף` });
  }, [design, judge, saved, updateSaved]);

  const copyLink = useCallback(() => {
    const url = `${location.origin}${location.pathname}#/studio?d=${designToHash(design)}`;
    navigator.clipboard?.writeText(url).then(
      () => setToast({ text: 'הקישור לפסל הועתק' }),
      () => setToast({ text: 'ההעתקה נחסמה בדפדפן' }),
    );
  }, [design]);

  const reset = useCallback(() => {
    const before = design;
    const beforeJudge = judge;
    setConfirm({
      text: 'איפוס הסדנה מחזיר את כל הבחירות לברירת המחדל. הפסלים באוסף לא משתנים.',
      action: 'איפוס',
      run: () => {
        setDesign(DEFAULT_DESIGN);
        setJudge({});
        setToast({ text: 'הסדנה אופסה', undo: () => { setDesign(before); setJudge(beforeJudge); } });
      },
    });
  }, [design, judge]);

  const items: MenuItem[] = useMemo(() => {
    const list: MenuItem[] = [];
    if (route === 'studio') {
      list.push(
        { label: 'שמירה לאוסף', hint: 'עם תמונה ומדדים', onSelect: saveToCollection },
        { label: 'העתקת קישור לפסל', hint: 'הקישור פותח את אותו פסל', onSelect: copyLink },
        { label: 'גיליון להדפסה', hint: 'A4 לוועדה', onSelect: () => window.print() },
      );
    } else {
      list.push({ label: 'פתיחת הסדנה', onSelect: () => { location.hash = '#/studio'; } });
    }
    list.push({ label: 'איפוס הסדנה', hint: 'דורש אישור', danger: true, onSelect: reset });
    return list;
  }, [route, saveToCollection, copyLink, reset]);

  const status = savedAt ? `נשמר ${hhmm(savedAt)}` : '';

  return (
    <>
      <TopBar route={route} items={items} status={status} />
      {route === 'home' && <Home onStart={(p) => { setDesign({ ...DEFAULT_DESIGN, ...p }); setJudge({}); location.hash = '#/studio'; }} />}
      {route === 'studio' && (
        <Studio
          design={design}
          setDesign={setDesign}
          judge={judge}
          setJudge={setJudge}
          onSnap={(f) => { snap.current = f; }}
          status={status}
        />
      )}
      {route === 'collection' && (
        <Collection
          saved={saved}
          onOpen={(s) => { setDesign(s.design); setJudge(s.judge); location.hash = '#/studio'; }}
          onDelete={(s) => setConfirm({
            text: `למחוק את "${s.design.name}" מהאוסף?`,
            action: 'מחיקה',
            run: () => {
              const before = saved;
              updateSaved(saved.filter((x) => x.id !== s.id));
              setToast({ text: 'הפסל נמחק', undo: () => updateSaved(before) });
            },
          })}
          onStart={(p) => { setDesign({ ...DEFAULT_DESIGN, ...p }); setJudge({}); location.hash = '#/studio'; }}
        />
      )}
      {route === 'method' && <Method saved={saved} />}
      {confirm && (
        <div className="confirm" role="dialog" aria-modal="true" aria-label="אישור">
          <div>
            <p>{confirm.text}</p>
            <div className="row">
              <button className="btn danger" onClick={() => { confirm.run(); setConfirm(null); }}>{confirm.action}</button>
              <button className="btn" onClick={() => setConfirm(null)}>ביטול</button>
            </div>
          </div>
        </div>
      )}
      {toast && (
        <div className="toast" role="status">
          <span>{toast.text}</span>
          {toast.undo && <button onClick={() => { toast.undo?.(); setToast(null); }}>ביטול הפעולה</button>}
        </div>
      )}
    </>
  );
}
