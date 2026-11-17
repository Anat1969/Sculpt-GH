import AIMenu, { type MenuItem } from './AIMenu';

export type Route = 'home' | 'studio' | 'collection' | 'method';

const NAV: { id: Route; label: string }[] = [
  { id: 'studio', label: 'סדנה' },
  { id: 'collection', label: 'אוסף' },
  { id: 'method', label: 'שיטה ומקורות' },
];

export default function TopBar({ route, items, status }: { route: Route; items: MenuItem[]; status: string }) {
  return (
    <header className="bar">
      <a className="brand" href="#/" aria-label="פסל, לדף הבית">
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M10 50 C12 34 20 26 30 28 C36 29 38 20 46 20 C54 20 56 34 54 50 Z" fill="#8a5a2e" />
          <ellipse cx="34" cy="40" rx="6" ry="5" fill="#fff" />
          <rect x="6" y="50" width="52" height="3" fill="#2e2e2b" />
        </svg>
        <span>פסל</span>
      </a>
      <nav className="nav" aria-label="ניווט">
        {NAV.map((n) => (
          <a key={n.id} href={`#/${n.id}`} aria-current={route === n.id ? 'page' : undefined}>
            {n.label}
          </a>
        ))}
      </nav>
      <AIMenu items={items} status={status} />
    </header>
  );
}
