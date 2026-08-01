import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Grid, Line, OrbitControls, Stars, Text } from "@react-three/drei";
import { geoMercator } from "d3-geo";
import { Fragment, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import beijingData from "./assets/beijing.json";
import "./beijing-map.css";

type Ring = number[][];
type Region = { name: string; center: THREE.Vector3; shapes: THREE.Shape[]; rings: THREE.Vector3[][] };
type SurfaceMode = "satellite" | "terrain" | "hud";

const SATELLITE_TILE = "./tiles/{z}/{x}/{y}.jpg";
const SATELLITE_SOURCE = "https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}";
const BEIJING_IMAGERY_BOUNDS = { west: 115.4, north: 41.1, east: 117.6, south: 39.4, zoom: 8 };

function normalizePolygons(coordinates: unknown): number[][][][] {
  if (!Array.isArray(coordinates)) return [];
  const first = coordinates[0];
  if (!Array.isArray(first)) return [];
  const second = first[0];
  if (!Array.isArray(second)) return [];
  const third = second[0];
  if (typeof third?.[0] === "number") return coordinates as number[][][][];
  return (coordinates as number[][][][][]).flat();
}

function createOfflineTerrainTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 768;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createLinearGradient(0, 0, 1024, 768);
  gradient.addColorStop(0, "#172d32");
  gradient.addColorStop(.46, "#294039");
  gradient.addColorStop(1, "#14252a");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1024, 768);
  const image = ctx.getImageData(0, 0, 1024, 768);
  for (let index = 0; index < image.data.length; index += 4) {
    const px = (index / 4) % 1024;
    const py = Math.floor(index / 4 / 1024);
    const ridge = Math.sin(px * .021) * 13 + Math.cos(py * .027) * 11 + Math.sin((px + py) * .009) * 18;
    const grain = ((px * 17 + py * 31) % 23) - 11;
    image.data[index] = Math.max(8, image.data[index] + ridge * .42 + grain * .22);
    image.data[index + 1] = Math.max(17, image.data[index + 1] + ridge * .62 + grain * .3);
    image.data[index + 2] = Math.max(19, image.data[index + 2] + ridge * .32);
  }
  ctx.putImageData(image, 0, 0);
  ctx.globalAlpha = .28;
  for (let line = 0; line < 38; line += 1) {
    ctx.beginPath();
    for (let x = 0; x <= 1024; x += 12) {
      const y = 90 + line * 16 + Math.sin(x * .014 + line * .7) * (13 + line % 4 * 4);
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = line % 3 === 0 ? "#9fbf9a" : "#54746b";
    ctx.lineWidth = line % 3 === 0 ? 1.2 : .55;
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

function useSurfaceTextures() {
  const terrain = useMemo(() => createOfflineTerrainTexture(), []);
  const [satellite, setSatellite] = useState<THREE.Texture>(terrain);
  const [online, setOnline] = useState(false);
  useEffect(() => {
    const { west, north, east, south, zoom } = BEIJING_IMAGERY_BOUNDS;
    const worldPixel = (lon: number, lat: number) => {
      const worldSize = 256 * 2 ** zoom;
      const sin = Math.sin(lat * Math.PI / 180);
      return { x: (lon + 180) / 360 * worldSize, y: (.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * worldSize };
    };
    const nw = worldPixel(west, north);
    const se = worldPixel(east, south);
    const minX = Math.floor(nw.x / 256);
    const maxX = Math.floor(se.x / 256);
    const minY = Math.floor(nw.y / 256);
    const maxY = Math.floor(se.y / 256);
    const mosaic = document.createElement("canvas");
    mosaic.width = (maxX - minX + 1) * 256;
    mosaic.height = (maxY - minY + 1) * 256;
    const context = mosaic.getContext("2d")!;
    const tasks: Promise<boolean>[] = [];
    for (let x = minX; x <= maxX; x += 1) for (let y = minY; y <= maxY; y += 1) {
      tasks.push(new Promise((resolve) => {
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.onload = () => { context.drawImage(image, (x - minX) * 256, (y - minY) * 256); resolve(true); };
        image.onerror = () => resolve(false);
        image.src = SATELLITE_TILE.replace("{x}", String(x)).replace("{y}", String(y)).replace("{z}", String(zoom));
      }));
    }
    Promise.all(tasks).then((results) => {
      if (!results.every(Boolean)) { setOnline(false); return; }
      const crop = document.createElement("canvas");
      crop.width = 1024;
      crop.height = 768;
      crop.getContext("2d")!.drawImage(mosaic, nw.x - minX * 256, nw.y - minY * 256, se.x - nw.x, se.y - nw.y, 0, 0, crop.width, crop.height);
      const loaded = new THREE.CanvasTexture(crop);
      loaded.colorSpace = THREE.SRGBColorSpace;
      loaded.wrapS = loaded.wrapT = THREE.ClampToEdgeWrapping;
      loaded.minFilter = THREE.LinearMipmapLinearFilter;
      loaded.magFilter = THREE.LinearFilter;
      setSatellite(loaded);
      setOnline(true);
    });
    return () => terrain.dispose();
  }, [terrain]);
  return { satellite, terrain, online };
}

function SweepSideMaterial() {
  const uniforms = useRef({ uSweep: { value: -0.4 }, uGlow: { value: new THREE.Color("#56d8ed") } });
  useFrame((_, delta) => { uniforms.current.uSweep.value = (uniforms.current.uSweep.value + delta * .22) % 1.8 - .4; });
  return <meshPhysicalMaterial attach="material-1" color="#173941" metalness={.68} roughness={.32} transparent opacity={.98} onBeforeCompile={(shader) => {
    Object.assign(shader.uniforms, uniforms.current);
    shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nvarying float vMapHeight;").replace("#include <begin_vertex>", "#include <begin_vertex>\nvMapHeight = transformed.z;");
    shader.fragmentShader = shader.fragmentShader.replace("#include <common>", "#include <common>\nuniform float uSweep;\nuniform vec3 uGlow;\nvarying float vMapHeight;").replace("#include <dithering_fragment>", "#include <dithering_fragment>\nfloat band = smoothstep(uSweep, uSweep + .12, vMapHeight) - smoothstep(uSweep + .12, uSweep + .26, vMapHeight);\ngl_FragColor.rgb += uGlow * band * 1.55;");
  }} />;
}

function ChaseOutline({ points }: { points: THREE.Vector3[] }) {
  const ref = useRef<any>(null);
  useFrame((_, delta) => { if (ref.current) ref.current.dashOffset -= delta * .7; });
  return <Line points={points} color="#dffb70" lineWidth={2.1} dashed dashSize={.32} gapSize={.19} transparent opacity={.94} material-ref={ref} />;
}

function RegionMesh({ region, texture, mode, hovered, onHover }: { region: Region; texture: THREE.Texture; mode: SurfaceMode; hovered: boolean; onHover: (name: string | null) => void }) {
  const group = useRef<THREE.Group>(null!);
  useFrame((_, delta) => { group.current.position.z = THREE.MathUtils.damp(group.current.position.z, hovered ? .2 : 0, 9, delta); });
  return <group ref={group}>
    <mesh castShadow receiveShadow onPointerOver={(event) => { event.stopPropagation(); onHover(region.name); document.body.style.cursor = "pointer"; }} onPointerOut={() => { onHover(null); document.body.style.cursor = "default"; }}>
      <extrudeGeometry args={[region.shapes, { depth: .9, bevelEnabled: true, bevelSize: .022, bevelThickness: .045, bevelSegments: 2 }]} />
      <meshPhysicalMaterial attach="material-0" map={mode === "hud" ? undefined : texture} color={hovered ? "#e9ffbb" : mode === "satellite" ? "#d4dad0" : mode === "terrain" ? "#9eb5a4" : "#183c43"} emissive={hovered ? "#314d24" : mode === "hud" ? "#0a2329" : "#071111"} emissiveIntensity={hovered ? .5 : .2} metalness={mode === "hud" ? .46 : .12} roughness={mode === "satellite" ? .72 : .6} clearcoat={.16} clearcoatRoughness={.72} />
      <SweepSideMaterial />
    </mesh>
    {region.rings.map((ring, index) => <Line key={index} points={ring} color={hovered ? "#edff73" : "#95eef4"} lineWidth={hovered ? 1.5 : .82} transparent opacity={hovered ? 1 : .66} />)}
  </group>;
}

function BeijingMap({ mode, onHover }: { mode: SurfaceMode; onHover: (name: string | null) => void }) {
  const group = useRef<THREE.Group>(null!);
  const { satellite, terrain, online } = useSurfaceTextures();
  const [hovered, setHovered] = useState<string | null>(null);
  const projection = useMemo(() => geoMercator().center([116.4, 40.08]).scale(430).translate([0, 0]), []);
  const regions = useMemo<Region[]>(() => (beijingData as any).features.map((feature: any) => {
    const centerCoord = feature.properties.centroid ?? feature.properties.center;
    const [cx, cy] = projection(centerCoord)!;
    const polygons = normalizePolygons(feature.geometry.coordinates);
    const shapes: THREE.Shape[] = [];
    const rings: THREE.Vector3[][] = [];
    polygons.forEach((polygon) => polygon.forEach((ring: Ring, ringIndex) => {
      const vectors = ring.map((coord) => {
        const [x, y] = projection(coord as [number, number])!;
        return new THREE.Vector2(x, -y);
      });
      if (ringIndex === 0) shapes.push(new THREE.Shape(vectors));
      rings.push(vectors.map((point) => new THREE.Vector3(point.x, point.y, .96)));
    }));
    return { name: feature.properties.name, center: new THREE.Vector3(cx, -cy, 1.18), shapes, rings };
  }), [projection]);

  const bounds = useMemo(() => {
    const points = regions.flatMap((region) => region.rings).flat();
    return { minX: Math.min(...points.map((point) => point.x)), maxX: Math.max(...points.map((point) => point.x)), minY: Math.min(...points.map((point) => point.y)), maxY: Math.max(...points.map((point) => point.y)) };
  }, [regions]);
  useEffect(() => {
    [satellite, terrain].forEach((texture) => {
      texture.repeat.set(1 / (bounds.maxX - bounds.minX), 1 / (bounds.maxY - bounds.minY));
      texture.offset.set(-bounds.minX / (bounds.maxX - bounds.minX), -bounds.minY / (bounds.maxY - bounds.minY));
      texture.needsUpdate = true;
    });
  }, [bounds, satellite, terrain]);

  const outer = useMemo(() => regions.flatMap((region) => region.rings).sort((a, b) => b.length - a.length)[0] ?? [], [regions]);
  const source = regions.find((region) => region.name.includes("朝阳")) ?? regions[0];
  const flyTargets = regions.filter((_, index) => index % 3 === 0).slice(0, 6);
  const surface = mode === "satellite" ? satellite : terrain;
  useLayoutEffect(() => {
    const tween = gsap.fromTo(group.current.rotation, { z: -.12 }, { z: 0, duration: 1.5, ease: "power3.out" });
    const scaleTween = gsap.fromTo(group.current.scale, { x: .72, y: .72, z: .72 }, { x: 1, y: 1, z: 1, duration: 1.7, ease: "expo.out" });
    return () => { tween.kill(); scaleTween.kill(); };
  }, []);
  useEffect(() => { document.documentElement.dataset.imagery = online ? "online" : "fallback"; }, [online]);

  return <group ref={group} rotation={[-Math.PI / 2, 0, 0]} scale={.68}>
    <group position={[0, 0, -.34]}>{regions.map((region) => <mesh key={`base-${region.name}`} castShadow><extrudeGeometry args={[region.shapes, { depth: .44, bevelEnabled: false }]} /><meshStandardMaterial color="#06151d" metalness={.38} roughness={.76} /></mesh>)}</group>
    {regions.map((region) => <Fragment key={region.name}>
      <RegionMesh region={region} texture={surface} mode={mode} hovered={hovered === region.name} onHover={(name) => { setHovered(name); onHover(name); }} />
      <Billboard position={region.center}><Text fontSize={.28} color="#f5ffff" outlineColor="#06131b" outlineWidth={.026} anchorX="center">{region.name}</Text></Billboard>
    </Fragment>)}
    {outer.length > 1 && <ChaseOutline points={outer} />}
    {flyTargets.map((target) => {
      const start = source.center.clone().setZ(1.04);
      const end = target.center.clone().setZ(1.04);
      const middle = start.clone().lerp(end, .5); middle.z += Math.max(1.1, start.distanceTo(end) * .18);
      return <Line key={`fly-${target.name}`} points={new THREE.QuadraticBezierCurve3(start, middle, end).getPoints(42)} color="#e6fa75" lineWidth={1.05} transparent opacity={.72} />;
    })}
    <pointLight position={[-3, 1, 9]} intensity={38} color="#9cefff" distance={30} />
  </group>;
}

const MODE_LABELS: Record<SurfaceMode, string> = { satellite: "卫星影像", terrain: "地形晕渲", hud: "科技底图" };

export default function App() {
  const [mode, setMode] = useState<SurfaceMode>("satellite");
  const [hovered, setHovered] = useState<string | null>(null);
  return <main className="sc-beijing-stage">
    <Canvas shadows camera={{ position: [0, 11.8, 13.8], fov: 39, near: .1, far: 120 }} dpr={[1, 1.65]} gl={{ antialias: true, alpha: false }}>
      <color attach="background" args={["#061116"]} />
      <fog attach="fog" args={["#061116", 21, 46]} />
      <ambientLight intensity={1.35} />
      <hemisphereLight args={["#badde4", "#071014", 1.05]} />
      <directionalLight castShadow position={[6, 14, 8]} intensity={2.8} color="#e8fbff" shadow-mapSize={[1024, 1024]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -.24, 0]} receiveShadow><planeGeometry args={[34, 34]} /><shadowMaterial transparent opacity={.38} /></mesh>
      <Grid infiniteGrid cellSize={.48} cellThickness={.38} sectionSize={2.4} sectionThickness={.95} sectionColor="#527f86" cellColor="#203b40" fadeDistance={34} fadeStrength={1.7} position={[0, -.23, 0]} />
      <Stars fade count={620} factor={4.2} saturation={.16} speed={.25} radius={44} depth={28} />
      <BeijingMap mode={mode} onHover={setHovered} />
      <OrbitControls makeDefault enablePan enableZoom enableRotate zoomSpeed={.35} minDistance={10} maxDistance={25} minPolarAngle={.45} maxPolarAngle={1.35} target={[0, 0, 0]} />
    </Canvas>
    <div className="sc-map-vignette" aria-hidden="true" />
    <div className="sc-map-id"><span>SAT-HUNTER IMAGERY</span><b>BEIJING / 110000</b><em>{mode === "satellite" ? "AMAP SATELLITE CACHE" : mode === "terrain" ? "OFFLINE TERRAIN RELIEF" : "SC-DATAV HUD SURFACE"}</em></div>
    <div className="sc-surface-switch" role="group" aria-label="地图底图模式">{(Object.keys(MODE_LABELS) as SurfaceMode[]).map((item) => <button key={item} className={item === mode ? "is-active" : ""} onClick={() => setMode(item)}>{MODE_LABELS[item]}</button>)}</div>
    <div className={`sc-hover-readout ${hovered ? "is-visible" : ""}`}><span>当前区县</span><strong>{hovered ?? "悬停地图查看"}</strong><em>三维地表 · 实时态势</em></div>
    <div className="sc-map-attribution" data-source={SATELLITE_SOURCE}>影像 © 高德地图 · 来源参考 knight-L/sat-hunter · Apache-2.0</div>
    <div className="sc-map-guide">拖拽旋转 · 滚轮缩放 · 右键平移</div>
  </main>;
}
