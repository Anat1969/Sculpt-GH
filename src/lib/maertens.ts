/**
 * Hermann Maertens, "Der optische Maßstab" (Bonn, 1877): the angle under which an object is seen
 * decides how it is read. Used in urban design to size squares around monuments.
 *  45° - the object fills the view: details.
 *  27° - the object is seen whole, as one figure.
 *  18° - the object is seen together with its setting.
 */
export const EYE = 1.6; // metres, a standing adult's eye height

export const ANGLES = [
  { deg: 45, key: 'detail', label: 'פרטים', hint: 'הפסל ממלא את המבט' },
  { deg: 27, key: 'whole', label: 'שלם', hint: 'רואים את הפסל כדמות אחת' },
  { deg: 18, key: 'setting', label: 'עם הסביבה', hint: 'הפסל והמקום נקראים יחד' },
] as const;

/**
 * Horizontal distance at which the top of the sculpture is seen at the given vertical angle,
 * from eye height. For a sculpture lower than the eye, the whole height is used instead,
 * since the eye then looks down on it.
 */
export function viewDistance(height: number, angleDeg: number): number {
  const rise = height > EYE + 0.2 ? height - EYE : height;
  return rise / Math.tan((angleDeg * Math.PI) / 180);
}

/**
 * The tool's extension of the rule to width: the whole width fits inside the same angle,
 * centred on the eye. d = (W / 2) / tan(α / 2). For 27° this is about 2.1 × W,
 * close to the "twice the height" reading of the vertical rule.
 */
export function viewDistanceWide(width: number, angleDeg: number): number {
  return width / 2 / Math.tan((angleDeg * Math.PI) / 360);
}

export function viewDistanceFor(height: number, width: number, angleDeg: number): { d: number; by: 'height' | 'width' } {
  const v = viewDistance(height, angleDeg);
  const h = viewDistanceWide(width, angleDeg);
  return h > v ? { d: h, by: 'width' } : { d: v, by: 'height' };
}
