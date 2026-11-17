import type { Design, Saved } from './types';

const K_DESIGN = 'sculpt.design.v1';
const K_SAVED = 'sculpt.saved.v1';

export const DEFAULT_DESIGN: Design = {
  name: 'פסל ללא שם',
  form: 'reclining',
  holes: 2,
  holeSize: 0.55,
  flow: 0.45,
  twist: 0.4,
  height: 1.2,
  material: 'bronze',
  count: 1,
  light: 'sun',
  season: 'equinox',
  hour: 15,
  rays: false,
  siteDepth: 12,
};

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export const loadDesign = (): Design => ({ ...DEFAULT_DESIGN, ...read<Partial<Design>>(K_DESIGN, {}) });
export const saveDesign = (d: Design) => write(K_DESIGN, d);
export const loadSaved = (): Saved[] => read<Saved[]>(K_SAVED, []);
export const writeSaved = (list: Saved[]) => write(K_SAVED, list);

/** A design travels in the address, so a link opens the same sculpture. */
export function designToHash(d: Design): string {
  const s = JSON.stringify(d);
  return btoa(unescape(encodeURIComponent(s)));
}

export function designFromHash(h: string): Design | null {
  try {
    const d = JSON.parse(decodeURIComponent(escape(atob(h)))) as Partial<Design>;
    return { ...DEFAULT_DESIGN, ...d };
  } catch {
    return null;
  }
}
