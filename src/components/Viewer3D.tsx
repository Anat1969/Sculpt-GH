import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes.js';
import { materialById } from '../data/materials';
import type { Report } from '../lib/assess';
import { buildField, type Field } from '../lib/field';
import { sunPosition } from '../lib/solar';
import type { Design } from '../lib/types';

export type ViewMode = 'object' | 'site';

interface Props {
  design: Design;
  field: Field;
  report: Report;
  mode: ViewMode;
  spin: boolean;
  /** called with a function that returns a JPEG snapshot of the current view */
  onReady?: (snap: () => string) => void;
  bare?: boolean;
}

const MAX_INSTANCES = 1500;
const LOW_RES = 18; // a unit in a field of many is small on screen: a coarse mesh is enough
const C = {
  ground: '#ffffff',
  band: '#e4e1d9',
  ring: '#3c5a78',
  ink: '#2e2e2b',
  gold: '#b8902f',
};

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function label(text: string, color: string): THREE.Sprite {
  const cv = document.createElement('canvas');
  cv.width = 512;
  cv.height = 128;
  const g = cv.getContext('2d')!;
  g.direction = 'rtl';
  g.font = '500 56px "IBM Plex Sans Hebrew", sans-serif';
  g.fillStyle = color;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(text, 256, 64);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  sp.renderOrder = 10;
  return sp;
}

function human(): THREE.Group {
  const g = new THREE.Group();
  const m = new THREE.MeshStandardMaterial({ color: '#4a4945', roughness: 0.9 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 1.12, 6, 12), m);
  body.position.y = 0.16 + 0.56;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 12), m);
  head.position.y = 1.75 - 0.12;
  body.castShadow = head.castShadow = true;
  g.add(body, head);
  return g;
}

export default function Viewer3D({ design, field, report, mode, spin, onReady, bare }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const ctx = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;
    sun: THREE.DirectionalLight;
    hemi: THREE.HemisphereLight;
    world: THREE.Group;
    mc: MarchingCubes;
    material: THREE.MeshStandardMaterial;
    raf: number;
  } | null>(null);

  // one renderer for the life of the component
  useEffect(() => {
    const el = host.current!;
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#faf9f6');
    scene.fog = new THREE.Fog('#faf9f6', 30, 110);
    const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 400);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.maxPolarAngle = Math.PI / 2 - 0.03;
    controls.autoRotateSpeed = 0.6;

    const hemi = new THREE.HemisphereLight('#ffffff', '#d9d4c8', 0.75);
    const sun = new THREE.DirectionalLight('#fff6e8', 2.4);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.02;
    scene.add(hemi, sun, sun.target);

    const ground = new THREE.Mesh(new THREE.CircleGeometry(160, 64), new THREE.MeshStandardMaterial({ color: C.ground, roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    const material = new THREE.MeshStandardMaterial();
    const mc = new MarchingCubes(field.res, material, false, false, 120000);
    mc.isolation = 0;
    mc.castShadow = true;
    mc.receiveShadow = true;

    const world = new THREE.Group();
    scene.add(world);

    const resize = () => {
      const w = el.clientWidth || 1, h = el.clientHeight || 1;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();

    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      if (ctx.current) ctx.current.raf = requestAnimationFrame(loop);
    };
    ctx.current = { renderer, scene, camera, controls, sun, hemi, world, mc, material, raf: 0 };
    ctx.current.raf = requestAnimationFrame(loop);

    onReady?.(() => {
      renderer.render(scene, camera);
      const w = 480, h = Math.round((480 * renderer.domElement.height) / renderer.domElement.width);
      const cv = document.createElement('canvas');
      cv.width = w; cv.height = h;
      cv.getContext('2d')!.drawImage(renderer.domElement, 0, 0, w, h);
      return cv.toDataURL('image/jpeg', 0.82);
    });

    return () => {
      if (ctx.current) cancelAnimationFrame(ctx.current.raf);
      ctx.current = null;
      ro.disconnect();
      controls.dispose();
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // rebuild the sculpture, the field of units, the human, the rings and the site band
  useEffect(() => {
    const c = ctx.current;
    if (!c) return;
    const { world, mc, material } = c;
    const mat = materialById(design.material);
    material.color.set(mat.color);
    material.metalness = mat.metalness;
    material.roughness = mat.roughness;

    // field: inside is positive for marching cubes
    const n = field.values.length;
    for (let i = 0; i < n; i++) mc.field[i] = -field.values[i];
    mc.update();

    // marching cubes maps index i to -1 + 2i/res; the field used -1 + 2i/(res-1)
    const k = field.res / (field.res - 1);
    const sh = report.shape;
    const s = design.height / Math.max(1e-6, sh.max[1] - sh.min[1]);

    world.clear();
    const unit = new THREE.Group();
    const inner = new THREE.Group();
    inner.scale.setScalar(k);
    inner.position.setScalar(k - 1);

    const many = design.count > 1;
    if (!many) {
      inner.add(mc);
    } else {
      const low = buildField(design, LOW_RES);
      const lmc = new MarchingCubes(LOW_RES, material, false, false, 8000);
      lmc.isolation = 0;
      for (let i = 0; i < low.values.length; i++) lmc.field[i] = -low.values[i];
      lmc.update();
      const geo = (lmc.geometry as THREE.BufferGeometry).clone();
      geo.setDrawRange(0, lmc.count);
      const kl = LOW_RES / (LOW_RES - 1);
      const shown = Math.min(design.count, MAX_INSTANCES);
      const inst = new THREE.InstancedMesh(geo, material, shown);
      inst.castShadow = true;
      const side = Math.sqrt(report.fieldAreaM2);
      const spacing = side / Math.ceil(Math.sqrt(design.count));
      const per = Math.ceil(Math.sqrt(shown));
      const r = rng(7);
      const m4 = new THREE.Matrix4();
      const q = new THREE.Quaternion();
      const e = new THREE.Euler();
      const v = new THREE.Vector3();
      const sc = new THREE.Vector3(s * kl, s * kl, s * kl);
      const visSide = per * spacing;
      for (let i = 0; i < shown; i++) {
        const gx = (i % per) - per / 2 + 0.5;
        const gz = Math.floor(i / per) - per / 2 + 0.5;
        e.set(0, r() * Math.PI * 2, (r() - 0.5) * 0.5);
        q.setFromEuler(e);
        v.set(gx * spacing + (r() - 0.5) * spacing * 0.7, -sh.min[1] * s + (kl - 1) * s, gz * spacing + (r() - 0.5) * spacing * 0.7);
        m4.compose(v, q, sc);
        inst.setMatrixAt(i, m4);
      }
      inst.userData.visSide = visSide;
      world.add(inst);
    }
    unit.add(inner);
    unit.scale.setScalar(s);
    unit.position.y = -sh.min[1] * s;
    if (!many) world.add(unit);

    // human scale, beside the work
    const fieldHalf = many ? Math.sqrt(report.fieldAreaM2) / 2 : report.widthM / 2;
    const h = human();
    h.position.set(-(fieldHalf + 0.9), 0, 0.4);
    world.add(h);

    // Maertens rings: in front of the work, toward the viewer
    const rings: [number, string, string][] = [
      [report.d45, 'פרטים 45°', C.ring],
      [report.d27, 'שלם 27°', C.ring],
      [report.d18, 'עם הסביבה 18°', C.ring],
    ];
    const lw = Math.max(0.03, report.d18 * 0.006);
    rings.forEach(([d, text, col], i) => {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(d - lw, d + lw, 128, 1, Math.PI * 0.08, Math.PI * 0.84),
        new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: i === 1 ? 0.95 : 0.45, depthWrite: false }),
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.01;
      world.add(ring);
      const tag = label(text, col);
      const tw = Math.max(0.9, report.d18 * 0.16);
      tag.scale.set(tw, tw / 4, 1);
      tag.position.set(0, 0.05 + tw / 8, d);
      world.add(tag);
    });

    // free depth on site: a band in front of the work
    const depth = Math.max(0.1, design.siteDepth);
    const bandW = Math.max(1.4, (many ? Math.sqrt(report.fieldAreaM2) : report.widthM) * 0.9);
    const band = new THREE.Mesh(new THREE.PlaneGeometry(bandW, depth), new THREE.MeshBasicMaterial({ color: C.band, transparent: true, opacity: 0.8, depthWrite: false }));
    band.rotation.x = -Math.PI / 2;
    band.position.set(0, 0.005, depth / 2);
    world.add(band);
    const edge = new THREE.Mesh(new THREE.PlaneGeometry(bandW * 1.6, Math.max(0.05, depth * 0.01)), new THREE.MeshBasicMaterial({ color: C.ink }));
    edge.rotation.x = -Math.PI / 2;
    edge.position.set(0, 0.012, depth);
    world.add(edge);
    const edgeTag = label(`קצה המקום ${depth.toLocaleString('he-IL')} מ'`, C.ink);
    const ew = Math.max(0.9, report.d18 * 0.16);
    edgeTag.scale.set(ew, ew / 4, 1);
    edgeTag.position.set(bandW * 0.8 + ew * 0.4, 0.05 + ew / 8, depth);
    world.add(edgeTag);

    // Bernini: gilded rays behind the body
    if (design.rays) {
      const rays = new THREE.Group();
      const gm = new THREE.MeshStandardMaterial({ color: C.gold, metalness: 0.9, roughness: 0.25, emissive: '#5a4310', emissiveIntensity: 0.25 });
      const H = design.height;
      const rr = rng(3);
      for (let i = 0; i < 26; i++) {
        const len = H * (0.9 + rr() * 0.5);
        const rod = new THREE.Mesh(new THREE.CylinderGeometry(H * 0.006, H * 0.006, len, 6), gm);
        const a = ((i / 25) - 0.5) * 0.6;
        rod.position.set(Math.sin(a) * len * 0.5, H * 1.15 - Math.cos(a) * len * 0.5, -report.depthM * 0.7);
        rod.rotation.z = -a;
        rod.castShadow = true;
        rays.add(rod);
      }
      world.add(rays);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- the field already carries every shape decision
  }, [design.form, design.holes, design.holeSize, design.flow, design.twist, design.height, design.material, design.count, design.siteDepth, design.rays, field, report]);

  // light: the sun of Ashdod, or Bernini's hidden window
  useEffect(() => {
    const c = ctx.current;
    if (!c) return;
    const { sun, hemi, scene } = c;
    const span = Math.max(design.height, report.widthM, Math.sqrt(report.fieldAreaM2)) * 1.6 + 2;
    let alt: number, az: number;
    if (design.light === 'sun') {
      const p = sunPosition(design.season, design.hour);
      alt = Math.max(p.altitude, 3);
      az = p.azimuth;
      sun.color.set(p.altitude < 15 ? '#ffd6a0' : '#fff6e8');
      sun.intensity = p.altitude > 0 ? 2.6 : 0.3;
      hemi.intensity = 0.75;
      scene.background = new THREE.Color('#faf9f6');
    } else {
      alt = 72; // a window high above and behind, unseen
      az = 180;
      sun.color.set('#ffe2a6');
      sun.intensity = 3.4;
      hemi.intensity = 0.28;
      scene.background = new THREE.Color('#efede8');
    }
    const ra = (alt * Math.PI) / 180, rz = (az * Math.PI) / 180;
    // north is -z, east is +x
    const dir = new THREE.Vector3(Math.sin(rz) * Math.cos(ra), Math.sin(ra), -Math.cos(rz) * Math.cos(ra));
    sun.position.copy(dir.multiplyScalar(span * 3)).add(new THREE.Vector3(0, 0, 0));
    sun.target.position.set(0, design.height * 0.3, 0);
    const cam = sun.shadow.camera;
    const reach = Math.max(span, design.height / Math.tan(Math.max(ra, 0.12))) * 1.3;
    cam.left = -reach; cam.right = reach; cam.top = reach; cam.bottom = -reach;
    cam.near = 0.1; cam.far = span * 8;
    cam.updateProjectionMatrix();
  }, [design.light, design.season, design.hour, design.height, report]);

  // camera: the object up close, or the site with its rings
  useEffect(() => {
    const c = ctx.current;
    if (!c) return;
    const { camera, controls } = c;
    // the human (1.75 m) always stays in frame: it is the scale
    const size = Math.max(design.height, report.widthM, design.count > 1 ? Math.sqrt(report.fieldAreaM2) + 2.2 : 0, 1.9);
    if (mode === 'object') {
      const dist = size * 2.6 + 1.8;
      controls.target.set(0, Math.max(0.7, Math.min(design.height * 0.45, size * 0.4)), 0);
      camera.position.set(dist * 0.62, design.height * 0.55 + dist * 0.22, dist * 0.8);
    } else {
      const far = Math.max(report.d18, design.siteDepth) * 1.25 + size;
      controls.target.set(0, 0, far * 0.3);
      camera.position.set(far * 0.55, far * 0.9, far * 1.1);
    }
    camera.far = Math.max(400, size * 40);
    camera.updateProjectionMatrix();
    controls.update();
  }, [mode, design.height, design.count, design.siteDepth, report]);

  useEffect(() => {
    const c = ctx.current;
    if (!c) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    c.controls.autoRotate = spin && !reduce;
  }, [spin]);

  return <div ref={host} className={bare ? 'viewer bare' : 'viewer'} data-testid="viewer" />;
}
