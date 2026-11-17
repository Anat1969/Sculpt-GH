/**
 * Agreement between the tool and the professional on pass/fail checks.
 * Cohen's kappa (1960): κ = (po − pe) / (1 − pe).
 */
export interface Pair { tool: boolean; human: boolean }

export function agreement(pairs: Pair[]): { n: number; po: number; kappa: number | null } {
  const n = pairs.length;
  if (n === 0) return { n, po: 0, kappa: null };
  let agree = 0, toolYes = 0, humanYes = 0;
  for (const p of pairs) {
    if (p.tool === p.human) agree++;
    if (p.tool) toolYes++;
    if (p.human) humanYes++;
  }
  const po = agree / n;
  const pe = (toolYes / n) * (humanYes / n) + (1 - toolYes / n) * (1 - humanYes / n);
  const kappa = pe >= 1 ? null : (po - pe) / (1 - pe);
  return { n, po, kappa };
}

/** Landis and Koch (1977) bands. */
export function kappaLabel(k: number | null): string {
  if (k === null) return 'אין מספיק גיוון כדי לחשב';
  if (k < 0) return 'פחות ממקרי';
  if (k <= 0.2) return 'קלה';
  if (k <= 0.4) return 'סבירה';
  if (k <= 0.6) return 'בינונית';
  if (k <= 0.8) return 'משמעותית';
  return 'כמעט מלאה';
}
