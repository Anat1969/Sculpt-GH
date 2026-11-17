/**
 * One field, two jobs: the same signed-distance grid draws the sculpture (marching cubes)
 * and measures it (volume, centre of mass, footprint, see-through void).
 * Pure TypeScript, no three.js: it runs in tests and in the browser alike.
 */
import type { Design, FormKind } from './types';

export const RES = 48; // voxels per axis over [-1, 1]

type V3 = [number, number, number];

const len3 = (x: number, y: number, z: number) => Math.sqrt(x * x + y * y + z * z);

/** Inigo Quilez's ellipsoid bound: good enough for a smooth, organic body. */
function ellipsoid(p: V3, c: V3, r: V3): number {
  const x = (p[0] - c[0]) / r[0];
  const y = (p[1] - c[1]) / r[1];
  const z = (p[2] - c[2]) / r[2];
  const k0 = len3(x, y, z);
  const k1 = len3(x / r[0], y / r[1], z / r[2]);
  return k1 === 0 ? -Math.min(...r) : (k0 * (k0 - 1)) / k1;
}

function smin(a: number, b: number, k: number): number {
  const h = Math.max(k - Math.abs(a - b), 0) / k;
  return Math.min(a, b) - (h * h * k) / 4;
}

function smax(a: number, b: number, k: number): number {
  return -smin(-a, -b, k);
}

interface Blob { c: V3; r: V3 }

function blobsFor(form: FormKind, twist: number): Blob[] {
  if (form === 'reclining') {
    return [
      { c: [-0.7, 0.02, 0], r: [0.15, 0.18, 0.15] }, // head
      { c: [-0.5, -0.22, 0], r: [0.16, 0.3, 0.2] }, // shoulders, propped
      { c: [-0.18, -0.4, 0], r: [0.36, 0.24, 0.28] }, // torso
      { c: [0.28, -0.2, 0], r: [0.3, 0.34, 0.25] }, // raised knees
      { c: [0.68, -0.5, 0], r: [0.28, 0.15, 0.22] }, // legs
    ];
  }
  if (form === 'column') {
    const out: Blob[] = [];
    const ys = [-0.56, -0.18, 0.2, 0.56, 0.84];
    const rs = [0.36, 0.3, 0.27, 0.22, 0.14];
    ys.forEach((y, i) => {
      const a = i * twist * 1.1;
      out.push({ c: [0.16 * Math.sin(a), y, 0.12 * Math.cos(a) - 0.12], r: [rs[i], 0.26, rs[i] * 0.8] });
    });
    return out;
  }
  return [{ c: [0, -0.02, 0], r: [0.56, 0.68, 0.38] }];
}

/** Hole centres in the x-y plane; every hole pierces the body along z, as Moore's do. */
export function holeCentres(form: FormKind, n: number): [number, number][] {
  if (n <= 0) return [];
  if (form === 'reclining') {
    const all: [number, number][] = [[-0.28, -0.34], [0.26, -0.18], [-0.56, -0.12]];
    return all.slice(0, n);
  }
  if (form === 'column') {
    const all: [number, number][] = [[0, -0.18], [0.05, 0.4], [0, -0.56]];
    return all.slice(0, n);
  }
  const all: [number, number][] = [[0, 0.12], [0.08, -0.36], [-0.12, 0.44]];
  return all.slice(0, n);
}

export const GROUND = -0.66;

export function sdf(p: V3, d: Design, blobs: Blob[], holes: [number, number][]): number {
  let v = Infinity;
  for (const b of blobs) v = v === Infinity ? ellipsoid(p, b.c, b.r) : smin(v, ellipsoid(p, b.c, b.r), 0.2);
  if (d.form === 'stone') {
    // superellipsoid feel: flatten the sides a little
    v = smax(v, Math.abs(p[2]) - 0.36, 0.12);
  }
  if (d.flow > 0) {
    const a = 0.055 * d.flow;
    v += a * Math.sin(5.1 * p[0] + 1.3) * Math.sin(4.3 * p[1] + 0.7) * Math.cos(3.7 * p[2]);
  }
  const hr = 0.06 + 0.17 * d.holeSize;
  for (const [hx, hy] of holes) {
    const cyl = Math.hypot(p[0] - hx, p[1] - hy) - hr;
    v = smax(v, -cyl, 0.07);
  }
  v = smax(v, GROUND - p[1], 0.02); // flat base on the ground
  return v;
}

export interface Field {
  res: number;
  /** signed distance per voxel, index = x + y*res + z*res*res, negative = inside */
  values: Float32Array;
}

/** The body is drawn at 88% of the grid, so marching cubes never clips it at the border cells. */
const FIT = 0.88;

export function buildField(d: Design, res = RES): Field {
  const blobs = blobsFor(d.form, d.twist);
  const holes = holeCentres(d.form, d.holes);
  const values = new Float32Array(res * res * res);
  const step = 2 / (res - 1);
  for (let z = 0; z < res; z++) {
    const pz = -1 + z * step;
    for (let y = 0; y < res; y++) {
      const py = -1 + y * step;
      for (let x = 0; x < res; x++) {
        const px = -1 + x * step;
        values[x + y * res + z * res * res] = sdf([px / FIT, py / FIT, pz / FIT], d, blobs, holes) * FIT;
      }
    }
  }
  return { res, values };
}

export interface Shape {
  /** fraction of voxels inside */
  voxels: number;
  /** bounding box of the solid, in grid units [-1, 1] */
  min: V3;
  max: V3;
  /** centre of mass, grid units */
  com: V3;
  /** footprint on the ground: convex hull in x-z, grid units */
  hull: [number, number][];
  /** front silhouette open area / outline area, 0..1 */
  seeThrough: number;
}

export function measure(f: Field): Shape {
  const { res, values } = f;
  const step = 2 / (res - 1);
  const at = (i: number) => -1 + i * step;
  let n = 0;
  let sx = 0, sy = 0, sz = 0;
  const min: V3 = [Infinity, Infinity, Infinity];
  const max: V3 = [-Infinity, -Infinity, -Infinity];
  let minY = res;
  const front = new Uint8Array(res * res); // x + y*res, solid seen along z
  for (let z = 0; z < res; z++)
    for (let y = 0; y < res; y++)
      for (let x = 0; x < res; x++) {
        if (values[x + y * res + z * res * res] >= 0) continue;
        n++;
        sx += at(x); sy += at(y); sz += at(z);
        const p: V3 = [at(x), at(y), at(z)];
        for (let k = 0; k < 3; k++) { if (p[k] < min[k]) min[k] = p[k]; if (p[k] > max[k]) max[k] = p[k]; }
        if (y < minY) minY = y;
        front[x + y * res] = 1;
      }
  if (n === 0) return { voxels: 0, min: [0, 0, 0], max: [0, 0, 0], com: [0, 0, 0], hull: [], seeThrough: 0 };

  // footprint: solid voxels in the two lowest layers
  const pts: [number, number][] = [];
  for (let z = 0; z < res; z++)
    for (let x = 0; x < res; x++)
      for (let y = minY; y <= minY + 1; y++)
        if (values[x + y * res + z * res * res] < 0) { pts.push([at(x), at(z)]); break; }

  // see-through: per row, fill between the outermost solid pixels, count the gaps
  let outline = 0, solid = 0;
  for (let y = 0; y < res; y++) {
    let lo = -1, hi = -1;
    for (let x = 0; x < res; x++) if (front[x + y * res]) { if (lo < 0) lo = x; hi = x; }
    if (lo < 0) continue;
    outline += hi - lo + 1;
    for (let x = lo; x <= hi; x++) solid += front[x + y * res];
  }
  // also columns, so a hole closed only left-right is still counted once
  let outlineC = 0, solidC = 0;
  for (let x = 0; x < res; x++) {
    let lo = -1, hi = -1;
    for (let y = 0; y < res; y++) if (front[x + y * res]) { if (lo < 0) lo = y; hi = y; }
    if (lo < 0) continue;
    for (let y = lo; y <= hi; y++) {
      // a pixel is "enclosed" only if it is inside both the row and the column outline
      outlineC += 1;
      solidC += front[x + y * res];
    }
  }
  const rowOpen = outline ? 1 - solid / outline : 0;
  const colOpen = outlineC ? 1 - solidC / outlineC : 0;
  const seeThrough = Math.max(0, Math.min(rowOpen, colOpen));

  return {
    voxels: n / (res * res * res),
    min, max,
    com: [sx / n, sy / n, sz / n],
    hull: convexHull(pts),
    seeThrough,
  };
}

/** Andrew's monotone chain. */
export function convexHull(points: [number, number][]): [number, number][] {
  const pts = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (pts.length < 3) return pts;
  const cross = (o: number[], a: number[], b: number[]) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lower: [number, number][] = [];
  for (const p of pts) { while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop(); lower.push(p); }
  const upper: [number, number][] = [];
  for (let i = pts.length - 1; i >= 0; i--) { const p = pts[i]; while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop(); upper.push(p); }
  upper.pop(); lower.pop();
  return lower.concat(upper);
}

/** Signed distance from a point to a convex polygon edge set: positive inside. */
export function insideMargin(pt: [number, number], hull: [number, number][]): number {
  if (hull.length < 3) return -1;
  let m = Infinity;
  // hull is counter-clockwise from monotone chain
  for (let i = 0; i < hull.length; i++) {
    const a = hull[i], b = hull[(i + 1) % hull.length];
    const ex = b[0] - a[0], ey = b[1] - a[1];
    const l = Math.hypot(ex, ey) || 1;
    const dist = (ex * (pt[1] - a[1]) - ey * (pt[0] - a[0])) / l;
    m = Math.min(m, dist);
  }
  return m;
}

/** Inradius-like scale of the footprint, to express the margin as a share. */
export function hullRadius(hull: [number, number][]): number {
  if (hull.length < 3) return 0;
  let area = 0, per = 0;
  for (let i = 0; i < hull.length; i++) {
    const a = hull[i], b = hull[(i + 1) % hull.length];
    area += a[0] * b[1] - b[0] * a[1];
    per += Math.hypot(b[0] - a[0], b[1] - a[1]);
  }
  return Math.abs(area) / per; // = 2A/P, the inradius for a tangential polygon
}

export function hullArea(hull: [number, number][]): number {
  let area = 0;
  for (let i = 0; i < hull.length; i++) {
    const a = hull[i], b = hull[(i + 1) % hull.length];
    area += a[0] * b[1] - b[0] * a[1];
  }
  return Math.abs(area) / 2;
}
