import type { Season } from './types';

/** Ashdod, city centre. */
export const SITE = { name: 'אשדוד', nameEn: 'Ashdod', lat: 31.8, lon: 34.65 };

/** Solar declination on the solstices and the equinox (Earth's axial tilt, 23.44°). */
export const DECLINATION: Record<Season, number> = { summer: 23.44, equinox: 0, winter: -23.44 };
export const SEASON_LABEL: Record<Season, string> = { summer: '21 ביוני', equinox: '21 במרץ', winter: '21 בדצמבר' };

const rad = (d: number) => (d * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;

export interface SunPos {
  /** degrees above the horizon */
  altitude: number;
  /** degrees from north, clockwise */
  azimuth: number;
}

/**
 * The standard solar-position equations in local solar time:
 * sin(alt) = sin(lat)sin(dec) + cos(lat)cos(dec)cos(H), H = 15° × (hour − 12).
 * No refraction, no equation of time: accurate to about one degree, which is what a shadow sketch needs.
 */
export function sunPosition(season: Season, hour: number, lat = SITE.lat): SunPos {
  const dec = rad(DECLINATION[season]);
  const phi = rad(lat);
  const H = rad(15 * (hour - 12));
  const sinAlt = Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(H);
  const alt = Math.asin(Math.max(-1, Math.min(1, sinAlt)));
  const cosAz = (Math.sin(dec) - Math.sin(alt) * Math.sin(phi)) / (Math.cos(alt) * Math.cos(phi) || 1e-9);
  let az = deg(Math.acos(Math.max(-1, Math.min(1, cosAz))));
  if (H > 0) az = 360 - az;
  return { altitude: deg(alt), azimuth: az };
}

/** Length of the shadow on flat ground, metres. Infinity when the sun is down. */
export function shadowLength(height: number, altitude: number): number {
  if (altitude <= 0.5) return Infinity;
  return height / Math.tan(rad(altitude));
}
