export type FormKind = 'reclining' | 'column' | 'stone';
export type MaterialId = 'bronze' | 'marble' | 'limestone' | 'concrete' | 'corten' | 'porcelain';
export type Season = 'summer' | 'equinox' | 'winter';
export type LightMode = 'sun' | 'hidden';

/** Everything the user decides. One object, saved as is. */
export interface Design {
  name: string;
  form: FormKind;
  /** Moore: holes that pierce the body, 0..3 */
  holes: number;
  /** 0..1 */
  holeSize: number;
  /** organic surface movement, 0..1 */
  flow: number;
  /** column twist, 0..1 */
  twist: number;
  /** real height, metres */
  height: number;
  material: MaterialId;
  /** Ai Weiwei: how many units */
  count: number;
  /** Bernini: where the light comes from */
  light: LightMode;
  season: Season;
  /** solar hour 6..18 */
  hour: number;
  /** gilded rays behind the body */
  rays: boolean;
  /** free depth in front of the sculpture on site, metres */
  siteDepth: number;
}

export interface Saved {
  id: string;
  savedAt: number;
  design: Design;
  thumb: string;
  /** the tool's verdict per pass/fail check, at save time: true = passes */
  tool: Record<string, boolean>;
  /** the professional's own verdict per check: true = passes */
  judge: Record<string, boolean>;
}
