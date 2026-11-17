import { useEffect, useRef } from 'react';

export const DEV_SESSION_URL = 'https://claude.ai/code/session_01UBnSCL3xChZV1edVeqE2i3';

export interface MenuItem {
  label: string;
  hint?: string;
  pressed?: boolean;
  disabled?: boolean;
  danger?: boolean;
  onSelect: () => unknown;
}

interface MenuElement extends HTMLElement {
  items: MenuItem[];
  status: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'ai-menu': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { chat?: string; research?: string };
    }
  }
}

/** The A&I logo button (appofapp-gh/ai-menu.js). Every editing and system action lives inside it. */
export default function AIMenu({ items, status }: { items: MenuItem[]; status: string }) {
  const ref = useRef<MenuElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const apply = () => {
      el.items = items;
      el.status = status;
    };
    apply();
    // the element may upgrade after React set the properties
    customElements.whenDefined('ai-menu').then(apply).catch(() => undefined);
  }, [items, status]);
  return <ai-menu ref={ref} chat={DEV_SESSION_URL} />;
}
