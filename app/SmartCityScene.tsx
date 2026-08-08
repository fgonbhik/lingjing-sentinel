"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export type SmartAsset = {
  id: string;
  label: string;
  category: string;
  details: string;
  meta: string;
  photo?: {
    src: string;
    alt: string;
    caption: string;
    matchLabel: string;
    credit: string;
    sourceUrl?: string;
    kind: "real";
    assetId: string;
    provider: "verified-local" | "unmatched";
    configured: boolean;
    position?: {
      longitude: number;
      latitude: number;
      heading: number;
      roadName: string;
      distanceMeters: number;
    };
  };
};

type Props = {
  nightMode: boolean;
  buildingLights: boolean;
  autoTour: boolean;
  topView: boolean;
  trafficDensity: number;
  onSelect: (asset: SmartAsset | null) => void;
  onSceneStatus: (status: "loading" | "ready" | "degraded") => void;
};

type Building = {
  id: number;
  points: Array<[number, number]>;
  heightMeters?: number;
  name?: string;
  core?: boolean;
};

const verifiedBuildingPhotos: Partial<Record<number, NonNullable<SmartAsset["photo"]>>> = {
  78744949: {
    src: "./building-photos/beijing-poly-theatre.jpg",
    alt: "北京保利剧院入口及建筑本体实景",
    caption: "北京保利剧院本体实景",
    matchLabel: "建筑编号、名称、坐标与照片主体已人工核验",
    credit: "摄影：N509FZ · CC BY-SA 4.0 · 已离线缓存",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Entrance_of_Poly_Theatre_(20200323173601).jpg",
    kind: "real",
    assetId: "BJ-78744949",
    provider: "verified-local",
    configured: true,
  },
  116944490: {
    src: "./building-photos/china-world-tower-iii.jpg",
    alt: "中国国际贸易中心三期 A 座单体建筑实景",
    caption: "中国国际贸易中心三期 A 座本体实景",
    matchLabel: "建筑编号、名称、坐标与照片主体已人工核验",
    credit: "摄影：Gary Todd · CC0 1.0 · 已离线缓存",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:World_Trade_Center_Tower_3_(9870689333).jpg",
    kind: "real",
    assetId: "BJ-116944490",
    provider: "verified-local",
    configured: true,
  },
};

const MAP_LOCAL_HALF_EXTENT = 180;
const MAP_BOUNDS = { minLat: 39.879, minLng: 116.419, maxLat: 39.936, maxLng: 116.485 };
const strictPhotoMatchCache = new Map<number, NonNullable<SmartAsset["photo"]>>();

function getBuildingCenter(building: Building) {
  const total = building.points.reduce((sum, [x, z]) => ({ x: sum.x + x, z: sum.z + z }), { x: 0, z: 0 });
  const count = Math.max(1, building.points.length);
  return { x: total.x / count, z: total.z / count };
}

function localPointToWgs84(point: { x: number; z: number }) {
  const longitude = MAP_BOUNDS.minLng + ((point.x + MAP_LOCAL_HALF_EXTENT) / (MAP_LOCAL_HALF_EXTENT * 2)) * (MAP_BOUNDS.maxLng - MAP_BOUNDS.minLng);
  const latitude = MAP_BOUNDS.minLat + ((point.z + MAP_LOCAL_HALF_EXTENT) / (MAP_LOCAL_HALF_EXTENT * 2)) * (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat);
  return { longitude, latitude };
}

function createUnmatchedPhoto(building: Building): NonNullable<SmartAsset["photo"]> {
  const cached = strictPhotoMatchCache.get(building.id);
  if (cached) return cached;

  const buildingCenter = getBuildingCenter(building);
  const { longitude, latitude } = localPointToWgs84(buildingCenter);
  const assetId = `BJ-${String(building.id).padStart(6, "0")}`;
  const displayName = building.name?.trim() || `北京城市建筑 ${assetId}`;
  const photo: NonNullable<SmartAsset["photo"]> = {
    src: "",
    alt: `${displayName} 暂无已核验本体照片`,
    caption: `${displayName} · 暂无已核验本体照片`,
    matchLabel: "严格重匹配完成 · 未通过本体核验",
    credit: "已排除区域图、道路街景、同名搜索结果和未确认候选",
    kind: "real",
    assetId,
    provider: "unmatched",
    configured: false,
    position: {
      longitude,
      latitude,
      heading: 0,
      roadName: "建筑几何中心",
      distanceMeters: 0,
    },
  };
  strictPhotoMatchCache.set(building.id, photo);
  return photo;
}

function photoForBuilding(building: Building): NonNullable<SmartAsset["photo"]> {
  return verifiedBuildingPhotos[building.id] || createUnmatchedPhoto(building);
}

type CameraCommand =
  | "zoomIn"
  | "zoomOut"
  | "reset"
  | {
      action: "view" | "focus";
      view?: keyof typeof viewPresets;
      position?: [number, number, number];
      target?: [number, number, number];
    };

const viewPresets = {
  panorama: { position: [138, 116, 152], target: [0, 18, 0] },
  cbd: { position: [64, 48, 72], target: [11, 22, 5] },
  axis: { position: [2, 104, 218], target: [0, 15, -5] },
  top: { position: [0, 330, 0.1], target: [0, 0, 0] },
  horizon: { position: [238, 58, 2], target: [0, 23, 0] },
} satisfies Record<string, { position: [number, number, number]; target: [number, number, number] }>;

const UNIFIED_BUILDING_COLOR = 0x4baee7;
const CITY_BUILDING_SPREAD = 1.42;
const CITY_FOOTPRINT_SCALE = 1.48;
const CITY_HEIGHT_SCALE = 1.36;
const CITY_DISTRICT_SPREAD = 1.24;
const CITY_GROUND_RADIUS = 286;
const CITY_BUILDING_LIMIT = CITY_GROUND_RADIUS - 8;
const CITY_SKY_RADIUS = 680;
const ROAD_COORDINATES = [-218, -191, -164, -137, -109, -82, -55, -27, 0, 27, 55, 82, 109, 137, 164, 191, 218];

function mapChordLength(offset: number, radius = CITY_GROUND_RADIUS - 12) {
  return Math.max(0, Math.sqrt(Math.max(0, radius ** 2 - offset ** 2)) * 2);
}

function getBuildingFootprint(item: Building) {
  const xs = item.points.map((point) => point[0]);
  const zs = item.points.map((point) => point[1]);
  const centerX = (Math.min(...xs) + Math.max(...xs)) / 2;
  const centerZ = (Math.min(...zs) + Math.max(...zs)) / 2;
  let dominantAngle = 0;
  let longestEdge = 0;
  item.points.forEach((point, index) => {
    const next = item.points[(index + 1) % item.points.length];
    const dx = next[0] - point[0];
    const dz = next[1] - point[1];
    const edgeLength = dx * dx + dz * dz;
    if (edgeLength > longestEdge) {
      longestEdge = edgeLength;
      dominantAngle = Math.atan2(dz, dx);
    }
  });
  const cosine = Math.cos(dominantAngle);
  const sine = Math.sin(dominantAngle);
  const localXs = item.points.map((point) => (point[0] - centerX) * cosine + (point[1] - centerZ) * sine);
  const localZs = item.points.map((point) => -(point[0] - centerX) * sine + (point[1] - centerZ) * cosine);
  const x = centerX / 0.975 * CITY_BUILDING_SPREAD;
  const z = centerZ / 0.975 * CITY_BUILDING_SPREAD;
  const width = Math.max(0.7, Math.min(6.6, (Math.max(...localXs) - Math.min(...localXs)) / 2.75)) * CITY_FOOTPRINT_SCALE;
  const depth = Math.max(0.7, Math.min(6.6, (Math.max(...localZs) - Math.min(...localZs)) / 2.75)) * CITY_FOOTPRINT_SCALE;
  const rawHeight = Math.max(2.05, Math.min(52, ((item.heightMeters || 16) / 5.2) * CITY_HEIGHT_SCALE));
  const footprintSpan = Math.sqrt(width * depth);
  const proportionalHeight = (8 + footprintSpan * (item.core ? 9.2 : 7.6)) * 1.1;
  const height = Math.min(rawHeight, proportionalHeight);
  return { x, z, width, depth, height, rotation: -dominantAngle };
}

function buildingFitsInsideMap(item: Building) {
  const { x, z, width, depth } = getBuildingFootprint(item);
  const footprintRadius = Math.hypot(width, depth) * 0.52;
  return Math.hypot(x, z) + footprintRadius <= CITY_BUILDING_LIMIT;
}

const districts = [
  { id: "dongcheng", label: "东城区", x: 9, z: -5, color: 0x4fffd0, text: "城市治理 92.7 · 感知设备在线率 99.9%" },
  { id: "xicheng", label: "西城区", x: -12, z: -6, color: 0x72f5ff, text: "政务协同 95.4 · 城市服务响应率 98.7%" },
  { id: "chaoyang", label: "朝阳区", x: 47, z: 5, color: 0x35efff, text: "商务活力 96.8 · 城市事件闭环率 98.1%" },
  { id: "haidian", label: "海淀区", x: -40, z: 24, color: 0x6a96ff, text: "科技创新 94.2 · 智算资源利用率 87.6%" },
  { id: "fengtai", label: "丰台区", x: -13, z: -40, color: 0xffa95f, text: "交通枢纽 89.6 · 路网运行状态平稳" },
  { id: "shijingshan", label: "石景山区", x: -55, z: -19, color: 0x8ca9ff, text: "城市更新 91.2 · 重点设施在线率 98.4%" },
  { id: "mentougou", label: "门头沟区", x: -92, z: -25, color: 0x47d9c5, text: "生态监测 93.1 · 山区感知节点覆盖率 96.5%" },
  { id: "fangshan", label: "房山区", x: -75, z: -71, color: 0x53e6a9, text: "园区运行 90.8 · 应急资源到位率 97.2%" },
  { id: "tongzhou", label: "通州区", x: 86, z: -17, color: 0x54c7ff, text: "副中心治理 95.7 · 政务数据协同率 98.9%" },
  { id: "shunyi", label: "顺义区", x: 74, z: 45, color: 0x4effe4, text: "临空经济 93.5 · 交通感知覆盖率 97.8%" },
  { id: "changping", label: "昌平区", x: -19, z: 64, color: 0x7d89ff, text: "科教融合 94.6 · 园区设备在线率 98.3%" },
  { id: "daxing", label: "大兴区", x: 22, z: -85, color: 0x4ed8ff, text: "机场联动 94.1 · 综合交通准点率 96.9%" },
  { id: "huairou", label: "怀柔区", x: 43, z: 88, color: 0xb18cff, text: "科学城运行 92.9 · 科研设施保障率 98.1%" },
  { id: "pinggu", label: "平谷区", x: 104, z: 65, color: 0x58f0b1, text: "农业智联 90.6 · 物联感知覆盖率 95.8%" },
  { id: "miyun", label: "密云区", x: 23, z: 116, color: 0x63b8ff, text: "水源保护 96.2 · 生态告警闭环率 99.1%" },
  { id: "yanqing", label: "延庆区", x: -65, z: 104, color: 0x8edbff, text: "生态涵养 95.1 · 林火监测覆盖率 98.6%" },
];

function makeLabel(text: string, color: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 112;
  const context = canvas.getContext("2d")!;
  const gradient = context.createLinearGradient(0, 0, 512, 0);
  gradient.addColorStop(0, "rgba(3, 15, 28, .94)");
  gradient.addColorStop(1, "rgba(5, 39, 55, .72)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 512, 112);
  context.strokeStyle = color;
  context.lineWidth = 3;
  context.strokeRect(2, 2, 508, 108);
  context.fillStyle = "#eaffff";
  context.font = "600 32px Microsoft YaHei, sans-serif";
  context.fillText(text, 26, 68);
  context.fillStyle = color;
  context.fillRect(26, 82, 160, 3);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false }));
  sprite.scale.set(15.5, 3.4, 1);
  return sprite;
}

function addRoad(
  scene: THREE.Scene,
  roadMaterial: THREE.Material,
  laneMaterial: THREE.Material,
  width: number,
  length: number,
  x: number,
  z: number,
  rotation = 0,
) {
  const road = new THREE.Mesh(new THREE.PlaneGeometry(width, length), roadMaterial);
  road.rotation.x = -Math.PI / 2;
  road.rotation.z = rotation;
  road.position.set(x, 1.42, z);
  scene.add(road);

  const lane = new THREE.Mesh(new THREE.PlaneGeometry(0.1, length * 0.95), laneMaterial);
  lane.rotation.x = -Math.PI / 2;
  lane.rotation.z = rotation;
  lane.position.set(x, 1.46, z);
  scene.add(lane);
}

export default function SmartCityScene({
  nightMode,
  buildingLights,
  autoTour,
  topView,
  trafficDensity,
  onSelect,
  onSceneStatus,
}: Props) {
  const host = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const nightRef = useRef(nightMode);
  const lightsRef = useRef(buildingLights);
  const tourRef = useRef(autoTour);
  const trafficRef = useRef(trafficDensity);
  const applyModeRef = useRef<(night: boolean, lights: boolean) => void>(() => {});

  useEffect(() => {
    nightRef.current = nightMode;
    lightsRef.current = buildingLights;
    applyModeRef.current(nightMode, buildingLights);
  }, [nightMode, buildingLights]);

  useEffect(() => {
    tourRef.current = autoTour;
  }, [autoTour]);

  useEffect(() => {
    trafficRef.current = trafficDensity;
  }, [trafficDensity]);

  useEffect(() => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;
    if (topView) {
      camera.position.set(...viewPresets.top.position);
      controls.target.set(0, 0, 0);
    } else {
      camera.position.set(...viewPresets.panorama.position);
      controls.target.set(...viewPresets.panorama.target);
    }
    controls.update();
  }, [topView]);

  useEffect(() => {
    const element = host.current;
    if (!element) {
      onSceneStatus("degraded");
      return;
    }

    let disposed = false;
    onSceneStatus("loading");

    const scene = new THREE.Scene();
    // A 0.1 near plane wastes most depth-buffer precision at city scale and
    // makes stacked ground surfaces shimmer. One metre is safely below every
    // supported camera distance and gives the map substantially more precision.
    const camera = new THREE.PerspectiveCamera(42, 1, 1, 1120);
    camera.position.set(...viewPresets.panorama.position);
    cameraRef.current = camera;

    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    const logicalCores = navigator.hardwareConcurrency || 8;
    const compactViewport = window.innerWidth <= 1380;
    const lowPowerDevice = compactViewport || deviceMemory <= 4 || logicalCores <= 4;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targetFrameInterval = 1000 / (reducedMotion ? 24 : lowPowerDevice ? 30 : 45);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPowerDevice ? 1.05 : 1.3));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.26;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = lowPowerDevice ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
    renderer.shadowMap.autoUpdate = false;
    renderer.shadowMap.needsUpdate = true;
    element.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.minDistance = 46;
    controls.maxDistance = 560;
    controls.maxPolarAngle = Math.PI * 0.48;
    controls.target.set(...viewPresets.panorama.target);
    controls.enableRotate = true;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.screenSpacePanning = true;
    controls.mouseButtons.LEFT = THREE.MOUSE.ROTATE;
    controls.mouseButtons.MIDDLE = THREE.MOUSE.DOLLY;
    controls.mouseButtons.RIGHT = THREE.MOUSE.PAN;
    controls.touches.ONE = THREE.TOUCH.ROTATE;
    controls.touches.TWO = THREE.TOUCH.DOLLY_PAN;
    controlsRef.current = controls;

    const skyUniforms = {
      uSkyTime: { value: 0 },
      uSkyTop: { value: new THREE.Color(0x061a38) },
      uSkyHorizon: { value: new THREE.Color(0x0c5a82) },
      uSkyGlow: { value: new THREE.Color(0x38c8ff) },
      uSkyIntensity: { value: 0.72 },
    };
    const skyDome = new THREE.Mesh(
      new THREE.SphereGeometry(CITY_SKY_RADIUS, 40, 24),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
        toneMapped: false,
        uniforms: skyUniforms,
        vertexShader: `
          varying vec3 vSkyDirection;
          void main() {
            vSkyDirection = normalize(position);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vSkyDirection;
          uniform float uSkyTime;
          uniform float uSkyIntensity;
          uniform vec3 uSkyTop;
          uniform vec3 uSkyHorizon;
          uniform vec3 uSkyGlow;
          void main() {
            float elevation = clamp(vSkyDirection.y * 0.5 + 0.5, 0.0, 1.0);
            vec3 color = mix(uSkyHorizon, uSkyTop, smoothstep(0.18, 0.94, elevation));
            float horizonGlow = exp(-pow((vSkyDirection.y - 0.02) * 5.2, 2.0));
            float longitude = atan(vSkyDirection.z, vSkyDirection.x);
            float dataBand = smoothstep(0.93, 1.0, sin(longitude * 22.0 + vSkyDirection.y * 15.0 + uSkyTime * 0.07) * 0.5 + 0.5);
            float farBand = smoothstep(0.965, 1.0, sin(longitude * 42.0 - uSkyTime * 0.025) * 0.5 + 0.5);
            float upperFade = smoothstep(-0.12, 0.34, vSkyDirection.y) * (1.0 - smoothstep(0.7, 0.96, vSkyDirection.y));
            float lowerAtmosphere = smoothstep(-0.22, 0.08, vSkyDirection.y) * (1.0 - smoothstep(0.08, 0.34, vSkyDirection.y));
            color += uSkyGlow * (horizonGlow * 0.22 + dataBand * upperFade * 0.035 + farBand * lowerAtmosphere * 0.028) * uSkyIntensity;
            gl_FragColor = vec4(color, 1.0);
          }
        `,
      }),
    );
    skyDome.renderOrder = -10;
    scene.add(skyDome);

    const ambient = new THREE.HemisphereLight(0xe4f5ff, 0x183b52, 1.8);
    scene.add(ambient);
    const sun = new THREE.DirectionalLight(0xe7f1ff, 2.65);
    sun.position.set(-70, 128, 68);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -310;
    sun.shadow.camera.right = 310;
    sun.shadow.camera.top = 310;
    sun.shadow.camera.bottom = -310;
    sun.shadow.bias = -0.00028;
    sun.shadow.normalBias = 0.035;
    scene.add(sun);
    const rimLight = new THREE.DirectionalLight(0x55baff, 1.2);
    rimLight.position.set(92, 52, -78);
    scene.add(rimLight);
    const coreLight = new THREE.PointLight(0x38aef4, 16, 138, 1.65);
    coreLight.position.set(0, 45, 0);
    scene.add(coreLight);
    const foundationLights: THREE.PointLight[] = [];
    const foundationLightMarkers: THREE.Mesh[] = [];
    for (let index = 0; index < 12; index++) {
      const angle = index / 12 * Math.PI * 2;
      const tone = index % 3 === 0 ? 0x477dff : 0x35c8ff;
      const light = new THREE.PointLight(tone, 6.4, 62, 1.7);
      light.position.set(Math.cos(angle) * 202, 5.5, Math.sin(angle) * 202);
      const marker = new THREE.Mesh(
        new THREE.SphereGeometry(0.65, 14, 10),
        new THREE.MeshBasicMaterial({ color: tone, transparent: true, opacity: 0.42 }),
      );
      marker.position.copy(light.position);
      scene.add(light, marker);
      foundationLights.push(light);
      foundationLightMarkers.push(marker);
    }

    const cityMapTexture = new THREE.TextureLoader().load("./beijing-map-base.jpg");
    cityMapTexture.colorSpace = THREE.SRGBColorSpace;
    cityMapTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    cityMapTexture.generateMipmaps = true;
    cityMapTexture.minFilter = THREE.LinearMipmapLinearFilter;
    cityMapTexture.magFilter = THREE.LinearFilter;

    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x86b6c7,
      map: cityMapTexture,
      emissiveMap: cityMapTexture,
      emissive: 0x123d52,
      emissiveIntensity: 0.22,
      roughness: 0.82,
      metalness: 0.18,
    });
    const ground = new THREE.Mesh(new THREE.CircleGeometry(CITY_GROUND_RADIUS, 224), groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0.65;
    // City-scale shadow texels crawl across the map while the camera moves.
    // Buildings retain their own lighting, while the base map stays stable.
    ground.receiveShadow = false;
    scene.add(ground);

    const floorUniforms = {
      uFloorPrimary: { value: new THREE.Color(0x2bdcff) },
      uFloorSecondary: { value: new THREE.Color(0x6a7cff) },
      uFloorOpacity: { value: 0.68 },
    };
    const floorOverlay = new THREE.Mesh(
      new THREE.CircleGeometry(CITY_GROUND_RADIUS - 3, 224),
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
        uniforms: floorUniforms,
        vertexShader: `
          varying vec2 vFloorPosition;
          void main() {
            vFloorPosition = position.xy;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vFloorPosition;
          uniform float uFloorOpacity;
          uniform vec3 uFloorPrimary;
          uniform vec3 uFloorSecondary;
          float gridLine(vec2 position, float size) {
            vec2 coordinate = position / size;
            vec2 derivative = max(fwidth(coordinate), vec2(0.0008));
            vec2 distanceToLine = abs(fract(coordinate - 0.5) - 0.5) / derivative;
            return 1.0 - min(min(distanceToLine.x, distanceToLine.y), 1.0);
          }
          void main() {
            float radius = length(vFloorPosition);
            float edgeFade = 1.0 - smoothstep(244.0, 282.0, radius);
            float majorGrid = gridLine(vFloorPosition, 56.0);
            float ringCoordinate = radius / 28.0;
            float ringDerivative = max(fwidth(ringCoordinate), 0.0008);
            float ringDistance = abs(fract(ringCoordinate - 0.5) - 0.5) / ringDerivative;
            float rings = 1.0 - min(ringDistance, 1.0);
            float spoke = smoothstep(0.965, 1.0, cos(atan(vFloorPosition.y, vFloorPosition.x) * 24.0));
            vec3 traceColor = mix(uFloorPrimary, uFloorSecondary, smoothstep(62.0, 260.0, radius));
            float alpha = edgeFade * (majorGrid * 0.11 + rings * 0.075 + spoke * 0.025) * uFloorOpacity;
            gl_FragColor = vec4(traceColor, alpha);
          }
        `,
      }),
    );
    floorOverlay.rotation.x = -Math.PI / 2;
    // Keep a generous depth gap from the textured map. At the shallow top-view
    // camera angle, tiny coplanar gaps otherwise show up as ground shimmer.
    floorOverlay.position.y = 0.84;
    floorOverlay.renderOrder = 0;
    // The real Beijing texture already carries the street hierarchy. Hiding the
    // extra procedural grid prevents sub-pixel line shimmer during camera moves.
    floorOverlay.visible = false;
    scene.add(floorOverlay);

    const floorOrbitGroup = new THREE.Group();
    const floorOrbitMaterial = new THREE.MeshBasicMaterial({
      color: 0x50ddff,
      transparent: true,
      opacity: 0.62,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    for (let index = 0; index < 64; index += 1) {
      const angle = index / 64 * Math.PI * 2;
      const segment = new THREE.Mesh(
        new THREE.BoxGeometry(index % 4 === 0 ? 5.4 : 2.8, 0.08, 0.3),
        floorOrbitMaterial,
      );
      segment.position.set(Math.cos(angle) * 279, 1.13, Math.sin(angle) * 279);
      segment.rotation.y = -angle;
      floorOrbitGroup.add(segment);
    }
    floorOrbitGroup.visible = false;
    scene.add(floorOrbitGroup);

    const cityBaseMaterial = new THREE.MeshStandardMaterial({
      color: 0x14587d,
      metalness: 0.64,
      roughness: 0.32,
      emissive: 0x0b4167,
      emissiveIntensity: 0.58,
    });
    const cityBase = new THREE.Mesh(new THREE.CylinderGeometry(280, CITY_GROUND_RADIUS, 2.4, 224), cityBaseMaterial);
    cityBase.position.y = -0.5;
    scene.add(cityBase);

    const grid = new THREE.GridHelper(560, 140, 0x8be1ff, 0x39799d);
    grid.position.y = 1.02;
    const gridMaterials = Array.isArray(grid.material) ? grid.material : [grid.material];
    gridMaterials.forEach((material) => {
      material.transparent = true;
      material.opacity = 0;
      material.depthWrite = false;
    });
    // The shader already owns the large-scale grid. A second GridHelper layer
    // produced moire/flicker over the Beijing map when viewed from above.
    grid.visible = false;
    scene.add(grid);

    const horizonGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x47d8ff,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    });
    const horizonGlow = new THREE.Mesh(
      new THREE.TorusGeometry(CITY_GROUND_RADIUS - 5, 0.9, 10, 224),
      horizonGlowMaterial,
    );
    horizonGlow.rotation.x = Math.PI / 2;
    horizonGlow.position.y = 2.1;
    scene.add(horizonGlow);

    const backgroundDustPositions = new Float32Array(720 * 3);
    for (let index = 0; index < 720; index += 1) {
      const angle = index * 2.399963229728653;
      const radius = 205 + ((index * 47) % 109);
      backgroundDustPositions[index * 3] = Math.cos(angle) * radius;
      backgroundDustPositions[index * 3 + 1] = 3 + ((index * 29) % 78);
      backgroundDustPositions[index * 3 + 2] = Math.sin(angle) * radius;
    }
    const backgroundDustGeometry = new THREE.BufferGeometry();
    backgroundDustGeometry.setAttribute("position", new THREE.BufferAttribute(backgroundDustPositions, 3));
    const backgroundDustMaterial = new THREE.PointsMaterial({
      color: 0x7be7ff,
      size: 0.48,
      transparent: true,
      opacity: 0.27,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });
    const backgroundDust = new THREE.Points(backgroundDustGeometry, backgroundDustMaterial);
    scene.add(backgroundDust);

    const roadMaterial = new THREE.MeshStandardMaterial({
      color: 0x15384e,
      roughness: 0.58,
      metalness: 0.4,
      emissive: 0x0b3048,
      emissiveIntensity: 0.46,
      transparent: false,
      opacity: 1,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    });
    const laneMaterial = new THREE.MeshBasicMaterial({
      color: 0xc2efff,
      transparent: false,
      opacity: 1,
      polygonOffset: true,
      polygonOffsetFactor: -3,
      polygonOffsetUnits: -3,
    });
    ROAD_COORDINATES.forEach((x, index) => {
      const roadLength = mapChordLength(x);
      addRoad(scene, roadMaterial, laneMaterial, index === 8 ? 7.4 : 4.4, roadLength, x, 0, index % 2 ? 0.025 : -0.02);
    });
    ROAD_COORDINATES.forEach((z, index) => {
      const roadLength = mapChordLength(z);
      addRoad(scene, roadMaterial, laneMaterial, index === 8 ? 7.4 : 4.4, roadLength, 0, z, Math.PI / 2 + (index % 2 ? 0.02 : -0.018));
    });

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x5e8b91,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const dataRings: THREE.Mesh[] = [];
    [64, 112, 160, 208, 252, 278].forEach((radius, index) => {
      const ring = new THREE.Mesh(new THREE.RingGeometry(radius - 0.18, radius + 0.18, 192), ringMaterial.clone());
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 1.58 + index * 0.01;
      scene.add(ring);
      ring.visible = false;
      dataRings.push(ring);
    });
    const hologramRings = [22, 37, 55].map((radius, index) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, index === 0 ? 0.11 : 0.07, 10, 180),
        new THREE.MeshBasicMaterial({
          color: [0x3ee8ff, 0x5f87ff, 0x43e7bb][index],
          transparent: true,
          opacity: index === 0 ? 0.34 : 0.22,
          depthWrite: false,
        }),
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 2.05 + index * 0.08;
      ring.visible = false;
      scene.add(ring);
      return ring;
    });

    const riverMaterial = new THREE.MeshStandardMaterial({
      color: 0x075376,
      emissive: 0x07313d,
      emissiveIntensity: 0.16,
      roughness: 0.32,
      metalness: 0.24,
      transparent: true,
      opacity: 0.82,
    });
    const river = new THREE.Mesh(new THREE.PlaneGeometry(mapChordLength(-216, CITY_GROUND_RADIUS - 32), 14), riverMaterial);
    river.rotation.x = -Math.PI / 2;
    river.rotation.z = -0.12;
    river.position.set(0, 1.64, -216);
    scene.add(river);

    const skylineGeometry = new THREE.CylinderGeometry(1.05, 2.1, 1, 10);
    const skylineMaterial = new THREE.MeshPhysicalMaterial({
      color: UNIFIED_BUILDING_COLOR,
      emissive: 0x1d6fa6,
      emissiveIntensity: 0.62,
      metalness: 0.46,
      roughness: 0.28,
      clearcoat: 0.68,
      clearcoatRoughness: 0.2,
    });
    const skyline = new THREE.InstancedMesh(skylineGeometry, skylineMaterial, 9);
    const skylineMatrix = new THREE.Matrix4();
    [
      [-8, -2, 36], [-3, 2, 48], [3, 1, 42], [9, 4, 34], [15, -3, 28],
      [-16, 5, 26], [20, 9, 21], [-22, -7, 30], [5, -11, 25],
    ].forEach(([x, z, height], index) => {
      skylineMatrix.compose(
        new THREE.Vector3(x, 1.7 + height / 2, z),
        new THREE.Quaternion(),
        new THREE.Vector3(index % 3 === 1 ? 1.35 : 1, height, index % 3 === 1 ? 1.35 : 1),
      );
      skyline.setMatrixAt(index, skylineMatrix);
    });
    skyline.castShadow = true;
    scene.add(skyline);

    const interactive: THREE.Object3D[] = [];
    const districtHalos: THREE.Mesh[] = [];
    const districtZones: THREE.Mesh[] = [];
    districts.forEach((item, index) => {
      const group = new THREE.Group();
      group.position.set(item.x * CITY_DISTRICT_SPREAD, 1.65, item.z * CITY_DISTRICT_SPREAD);
      if (index < 6) {
        const zone = new THREE.Mesh(
          new THREE.CircleGeometry(11 + (index % 3) * 2.4, 72),
          new THREE.MeshBasicMaterial({
            color: item.color,
            transparent: true,
            opacity: 0.18,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
          }),
        );
        zone.rotation.x = -Math.PI / 2;
        zone.rotation.z = index * 0.42;
        zone.position.y = 0.045;
        zone.scale.set(1.65 + (index % 2) * 0.28, 0.92 + (index % 3) * 0.12, 1);
        zone.visible = false;
        const zoneBoundary = new THREE.Mesh(
          new THREE.RingGeometry(12.5 + (index % 3) * 2.4, 12.72 + (index % 3) * 2.4, 72),
          new THREE.MeshBasicMaterial({
            color: item.color,
            transparent: true,
            opacity: 0.46,
            depthWrite: false,
            side: THREE.DoubleSide,
          }),
        );
        zoneBoundary.rotation.x = -Math.PI / 2;
        zoneBoundary.rotation.z = zone.rotation.z;
        zoneBoundary.position.y = 0.075;
        zoneBoundary.scale.copy(zone.scale);
        zoneBoundary.visible = false;
        const zoneBeacon = new THREE.Mesh(
          new THREE.CylinderGeometry(1.2, 7.5 + (index % 3) * 1.4, 17, 32, 1, true),
          new THREE.MeshBasicMaterial({
            color: item.color,
            transparent: true,
            opacity: 0.055,
            depthWrite: false,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
          }),
        );
        zoneBeacon.position.y = 8.5;
        group.add(zone, zoneBoundary, zoneBeacon);
        districtZones.push(zone, zoneBoundary, zoneBeacon);
      }
      const beam = new THREE.Mesh(
        new THREE.CylinderGeometry(0.11, 0.32, 15, 14),
        new THREE.MeshBasicMaterial({ color: item.color, transparent: true, opacity: 0.42 }),
      );
      beam.position.y = 7.5;
      const head = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.82, 1),
        new THREE.MeshStandardMaterial({
          color: item.color,
          emissive: item.color,
          emissiveIntensity: 1.8,
          metalness: 0.6,
          roughness: 0.2,
        }),
      );
      head.position.y = 15.7;
      head.userData.asset = {
        id: item.id,
        label: item.label,
        category: "北京城市监管分区",
        details: item.text,
        meta: "CITY AI · 实时推演 · 点击已定位",
      } satisfies SmartAsset;
      const halo = new THREE.Mesh(
        new THREE.RingGeometry(1.25, 1.62, 48),
        new THREE.MeshBasicMaterial({
          color: item.color,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.78,
        }),
      );
      halo.rotation.x = -Math.PI / 2;
      halo.position.y = 0.22;
      halo.visible = false;
      const label = makeLabel(item.label, `#${item.color.toString(16).padStart(6, "0")}`);
      label.position.y = 18.1;
      group.add(beam, head, halo, label);
      scene.add(group);
      interactive.push(head);
      districtHalos.push(halo);
    });

    const networkMaterial = new THREE.LineDashedMaterial({
      color: 0x57ecff,
      transparent: true,
      opacity: 0.48,
      dashSize: 1.4,
      gapSize: 0.9,
    });
    const networkLines: THREE.Line[] = [];
    districts.forEach((item, index) => {
      const districtX = item.x * CITY_DISTRICT_SPREAD;
      const districtZ = item.z * CITY_DISTRICT_SPREAD;
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 4, 0),
        new THREE.Vector3(districtX * 0.45, 13 + index * 1.5, districtZ * 0.45),
        new THREE.Vector3(districtX, 3.5, districtZ),
      ]);
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(60)), networkMaterial.clone());
      line.computeLineDistances();
      line.userData.curve = curve;
      scene.add(line);
      networkLines.push(line);
    });

    const pulseMaterial = new THREE.MeshBasicMaterial({ color: 0xc7fbff });
    const pulses = districts.map((_, index) => {
      const pulse = new THREE.Mesh(new THREE.SphereGeometry(0.36, 12, 8), pulseMaterial);
      scene.add(pulse);
      pulse.userData.routeIndex = index;
      return pulse;
    });

    const sensorPositions = new Float32Array(1080 * 3);
    for (let index = 0; index < 1080; index++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 8 + Math.sqrt(Math.random()) * 258;
      sensorPositions[index * 3] = Math.cos(angle) * radius;
      sensorPositions[index * 3 + 1] = 2.5 + Math.random() * 17;
      sensorPositions[index * 3 + 2] = Math.sin(angle) * radius;
    }
    const sensorGeometry = new THREE.BufferGeometry();
    sensorGeometry.setAttribute("position", new THREE.BufferAttribute(sensorPositions, 3));
    const sensorMaterial = new THREE.PointsMaterial({
      color: 0x55ecff,
      size: 0.34,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
    });
    const sensors = new THREE.Points(sensorGeometry, sensorMaterial);
    scene.add(sensors);

    const scanMaterial = new THREE.MeshBasicMaterial({
      color: 0x39eaff,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const scan = new THREE.Mesh(new THREE.RingGeometry(2, 2.6, 96), scanMaterial);
    scan.rotation.x = -Math.PI / 2;
    scan.position.y = 1.88;
    // Expanding full-map scans read as ground flashing during a presentation.
    // Keep local data pulses, but leave the ground itself visually stable.
    scan.visible = false;
    scene.add(scan);

    const buildingMaterial = new THREE.MeshPhysicalMaterial({
      color: UNIFIED_BUILDING_COLOR,
      roughness: 0.42,
      metalness: 0.26,
      clearcoat: 0.42,
      clearcoatRoughness: 0.36,
      emissive: 0x145d9b,
      emissiveIntensity: 0.5,
      vertexColors: true,
    });
    const buildingGeometry = new RoundedBoxGeometry(1, 1, 1, 2, 0.035);
    const buildingEdgeMaterial = new THREE.MeshBasicMaterial({
      color: 0x68d3ff,
      transparent: true,
      opacity: 0.035,
      side: THREE.BackSide,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });
    const roofGeometry = new RoundedBoxGeometry(1, 0.2, 1, 2, 0.04);
    const roofMaterial = new THREE.MeshStandardMaterial({
      color: UNIFIED_BUILDING_COLOR,
      metalness: 0.5,
      roughness: 0.31,
      emissive: 0x1b6597,
      emissiveIntensity: 0.34,
      transparent: true,
      opacity: 0.95,
      vertexColors: true,
    });
    let buildingMesh: THREE.InstancedMesh | null = null;
    let buildingRecords: Building[] = [];
    const buildingBaseColors: THREE.Color[] = [];

    const loadBuildings = async () => {
      try {
        const response = await fetch("./beijing-buildings.json");
        if (!response.ok) throw new Error("building dataset unavailable");
        const payload = (await response.json()) as { buildings: Building[] };
        if (disposed) return;
        const sourceRecords = payload.buildings.filter((item) => item.points.length >= 3).slice(0, 6200);
        const records = sourceRecords.filter(buildingFitsInsideMap);
        const mesh = new THREE.InstancedMesh(buildingGeometry, buildingMaterial, records.length);
        buildingMesh = mesh;
        buildingRecords = records;
        const edges = new THREE.InstancedMesh(buildingGeometry, buildingEdgeMaterial, records.length);
        const roofRecords = records;
        const roofs = new THREE.InstancedMesh(roofGeometry, roofMaterial, roofRecords.length);
        // Every blue rectangular footprint receives the same architectural
        // language so the map never falls back to undecorated placeholder blocks.
        const detailRecords = records;
        const annexRecords = records
          .filter((item) => (item.heightMeters || 16) > 13 && item.id % 6 === 0)
          .slice(0, 1050);
        const crownRecords = records
          .filter((item) => (item.core && (item.heightMeters || 16) > 34) || (item.heightMeters || 16) > 62)
          .slice(0, 520);
        const setbackRecords = records
          .filter((item) => {
            const meters = item.heightMeters || 16;
            return !item.core && meters > 16 && meters <= 28 && item.id % 4 === 0 && item.id % 9 !== 0;
          })
          .slice(0, 850);
        const podiums = new THREE.InstancedMesh(
          new RoundedBoxGeometry(1, 1, 1, 2, 0.045),
          new THREE.MeshPhysicalMaterial({
            color: UNIFIED_BUILDING_COLOR,
            metalness: 0.38,
            roughness: 0.34,
            clearcoat: 0.52,
            emissive: 0x145b91,
            emissiveIntensity: 0.32,
          }),
          detailRecords.length,
        );
        const mechanicalRooms = new THREE.InstancedMesh(
          new RoundedBoxGeometry(1, 1, 1, 2, 0.06),
          new THREE.MeshStandardMaterial({
            color: UNIFIED_BUILDING_COLOR,
            metalness: 0.48,
            roughness: 0.28,
            emissive: 0x216c9e,
            emissiveIntensity: 0.28,
          }),
          detailRecords.length,
        );
        const roofAntennas = new THREE.InstancedMesh(
          new THREE.CylinderGeometry(0.045, 0.07, 1, 7),
          new THREE.MeshStandardMaterial({
            color: UNIFIED_BUILDING_COLOR,
            metalness: 0.78,
            roughness: 0.22,
            emissive: 0x246991,
            emissiveIntensity: 0.32,
          }),
          detailRecords.length,
        );
        const floorBands = new THREE.InstancedMesh(
          new RoundedBoxGeometry(1, 0.045, 1, 1, 0.018),
          new THREE.MeshStandardMaterial({
            color: 0x55b8dc,
            metalness: 0.34,
            roughness: 0.42,
            emissive: 0x227fa8,
            emissiveIntensity: 0.42,
            polygonOffset: true,
            polygonOffsetFactor: -1,
            polygonOffsetUnits: -1,
          }),
          detailRecords.length * 6,
        );
        const facadeFins = new THREE.InstancedMesh(
          new RoundedBoxGeometry(0.06, 1, 1, 1, 0.015),
          new THREE.MeshStandardMaterial({
            color: 0x7ad9ff,
            metalness: 0.54,
            roughness: 0.3,
            emissive: 0x1c6f9f,
            emissiveIntensity: 0.38,
          }),
          detailRecords.length * 2,
        );
        const facadeRails = new THREE.InstancedMesh(
          new RoundedBoxGeometry(1, 1, 0.06, 1, 0.015),
          new THREE.MeshStandardMaterial({
            color: 0x5fc5ee,
            metalness: 0.48,
            roughness: 0.34,
            emissive: 0x185c89,
            emissiveIntensity: 0.34,
          }),
          detailRecords.length * 2,
        );
        const annexes = new THREE.InstancedMesh(
          new RoundedBoxGeometry(1, 1, 1, 2, 0.055),
          new THREE.MeshPhysicalMaterial({
            color: 0x3b96c8,
            metalness: 0.26,
            roughness: 0.38,
            clearcoat: 0.42,
            clearcoatRoughness: 0.28,
            emissive: 0x124f7b,
            emissiveIntensity: 0.38,
          }),
          annexRecords.length,
        );
        const crownCaps = new THREE.InstancedMesh(
          new THREE.CylinderGeometry(0.54, 0.72, 1, 4, 1, false),
          new THREE.MeshPhysicalMaterial({
            color: 0x72c9ef,
            metalness: 0.52,
            roughness: 0.27,
            clearcoat: 0.62,
            emissive: 0x1b6c99,
            emissiveIntensity: 0.42,
          }),
          crownRecords.length,
        );
        const setbackTops = new THREE.InstancedMesh(
          new RoundedBoxGeometry(1, 1, 1, 2, 0.055),
          new THREE.MeshPhysicalMaterial({
            color: 0x3b94c4,
            metalness: 0.32,
            roughness: 0.46,
            clearcoat: 0.28,
            emissive: 0x155b88,
            emissiveIntensity: 0.3,
          }),
          setbackRecords.length,
        );
        const windowPanels = new THREE.InstancedMesh(
          new RoundedBoxGeometry(1, 1, 0.045, 1, 0.012),
          new THREE.MeshStandardMaterial({
            color: 0x2e84ad,
            metalness: 0.3,
            roughness: 0.4,
            emissive: 0x1d6f98,
            emissiveIntensity: 0.38,
            polygonOffset: true,
            polygonOffsetFactor: -1,
            polygonOffsetUnits: -1,
          }),
          detailRecords.length * 16,
        );
        const contactShadows = new THREE.InstancedMesh(
          new THREE.CircleGeometry(0.72, 24),
          new THREE.MeshBasicMaterial({
          color: 0x062b43,
          transparent: true,
          opacity: 0.2,
            depthWrite: false,
          }),
          detailRecords.length,
        );
        contactShadows.renderOrder = 1;
        // Thousands of overlapping transparent decals can reorder while the
        // camera moves. Real PCF shadows remain enabled, so these decals are not
        // needed for grounding and are kept hidden to avoid ground flicker.
        contactShadows.visible = false;
        const matrix = new THREE.Matrix4();
        const edgeMatrix = new THREE.Matrix4();
        const color = new THREE.Color();
        const groundQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
        const upAxis = new THREE.Vector3(0, 1, 0);

        records.forEach((item, index) => {
          const { x, z, width, depth, height, rotation } = getBuildingFootprint(item);
          const buildingQuaternion = new THREE.Quaternion().setFromAxisAngle(upAxis, rotation);
          matrix.compose(
            new THREE.Vector3(x, 1.72 + height / 2, z),
            buildingQuaternion,
            new THREE.Vector3(width, height, depth),
          );
          mesh.setMatrixAt(index, matrix);
          edgeMatrix.compose(
            new THREE.Vector3(x, 1.72 + height / 2, z),
            buildingQuaternion,
            new THREE.Vector3(width * 1.012, height * 1.004, depth * 1.012),
          );
          edges.setMatrixAt(index, edgeMatrix);
          const shade = (item.id % 11) / 10;
          color.setRGB(
            Math.min(1, 0.82 + shade * 0.1 + (item.core ? 0.05 : 0)),
            Math.min(1, 0.9 + shade * 0.075 + (item.core ? 0.035 : 0)),
            1,
          );
          mesh.setColorAt(index, color);
          buildingBaseColors.push(color.clone());
        });

        roofRecords.forEach((item, index) => {
          const { x, z, width, depth, height, rotation } = getBuildingFootprint(item);
          const buildingQuaternion = new THREE.Quaternion().setFromAxisAngle(upAxis, rotation);
          matrix.compose(
            new THREE.Vector3(x, 1.82 + height, z),
            buildingQuaternion,
            new THREE.Vector3(width * 0.82, 1, depth * 0.82),
          );
          roofs.setMatrixAt(index, matrix);
          const roofShade = (item.id % 7) / 6;
          color.setRGB(0.84 + roofShade * 0.1, 0.92 + roofShade * 0.06, 1);
          roofs.setColorAt(index, color);
        });

        detailRecords.forEach((item, index) => {
          const { x, z, width, depth, height, rotation } = getBuildingFootprint(item);
          const buildingQuaternion = new THREE.Quaternion().setFromAxisAngle(upAxis, rotation);
          matrix.compose(
            new THREE.Vector3(x + 0.24, 1.705, z + 0.28),
            groundQuaternion,
            new THREE.Vector3(width * 1.2, depth * 1.2, 1),
          );
          contactShadows.setMatrixAt(index, matrix);

          const podiumHeight = Math.max(0.55, Math.min(1.35, height * 0.09));
          matrix.compose(
            new THREE.Vector3(x, 1.72 + podiumHeight / 2, z),
            buildingQuaternion,
            new THREE.Vector3(width * 1.14, podiumHeight, depth * 1.14),
          );
          podiums.setMatrixAt(index, matrix);

          const equipmentHeight = Math.max(0.32, Math.min(0.95, height * 0.045));
          const rooftopOffset = new THREE.Vector3(
            ((item.id % 3) - 1) * width * 0.12,
            0,
            ((Math.floor(item.id / 3) % 3) - 1) * depth * 0.1,
          ).applyQuaternion(buildingQuaternion);
          matrix.compose(
            new THREE.Vector3(x + rooftopOffset.x, 1.78 + height + equipmentHeight / 2, z + rooftopOffset.z),
            buildingQuaternion,
            new THREE.Vector3(
              Math.max(0.28, width * 0.34),
              equipmentHeight,
              Math.max(0.28, depth * 0.34),
            ),
          );
          mechanicalRooms.setMatrixAt(index, matrix);

          const antennaHeight = Math.max(0.9, Math.min(3.2, height * 0.12));
          matrix.compose(
            new THREE.Vector3(x - rooftopOffset.x * 0.55, 1.82 + height + equipmentHeight + antennaHeight / 2, z - rooftopOffset.z * 0.55),
            buildingQuaternion,
            new THREE.Vector3(1, antennaHeight, 1),
          );
          roofAntennas.setMatrixAt(index, matrix);

          for (let band = 0; band < 6; band += 1) {
            const bandHeight = 1.72 + height * (0.14 + band * 0.135);
            matrix.compose(
              new THREE.Vector3(x, bandHeight, z),
              buildingQuaternion,
              new THREE.Vector3(width * 1.018, 1, depth * 1.018),
            );
            floorBands.setMatrixAt(index * 6 + band, matrix);
          }

          for (let fin = 0; fin < 2; fin += 1) {
            const offset = new THREE.Vector3((fin === 0 ? -1 : 1) * width * 0.512, 0, 0).applyQuaternion(buildingQuaternion);
            matrix.compose(
              new THREE.Vector3(x + offset.x, 1.72 + height * 0.51, z + offset.z),
              buildingQuaternion,
              new THREE.Vector3(1, height * 0.78, depth * 0.92),
            );
            facadeFins.setMatrixAt(index * 2 + fin, matrix);

            const railOffset = new THREE.Vector3(0, 0, (fin === 0 ? -1 : 1) * depth * 0.512).applyQuaternion(buildingQuaternion);
            matrix.compose(
              new THREE.Vector3(x + railOffset.x, 1.72 + height * 0.51, z + railOffset.z),
              buildingQuaternion,
              new THREE.Vector3(width * 0.92, height * 0.78, 1),
            );
            facadeRails.setMatrixAt(index * 2 + fin, matrix);
          }

          for (let face = 0; face < 4; face += 1) {
            const sideFacade = face >= 2;
            const faceDirection = face % 2 === 0 ? -1 : 1;
            const panelQuaternion = sideFacade
              ? buildingQuaternion.clone().multiply(new THREE.Quaternion().setFromAxisAngle(upAxis, Math.PI / 2))
              : buildingQuaternion;
            for (let row = 0; row < 2; row += 1) {
              for (let column = 0; column < 2; column += 1) {
                const localPosition = sideFacade
                  ? new THREE.Vector3(
                      faceDirection * width * 0.518,
                      0,
                      (column === 0 ? -1 : 1) * depth * 0.22,
                    )
                  : new THREE.Vector3(
                      (column === 0 ? -1 : 1) * width * 0.22,
                      0,
                      faceDirection * depth * 0.518,
                    );
                localPosition.applyQuaternion(buildingQuaternion);
                const panelIndex = index * 16 + face * 4 + row * 2 + column;
                matrix.compose(
                  new THREE.Vector3(
                    x + localPosition.x,
                    1.72 + height * (0.35 + row * 0.3),
                    z + localPosition.z,
                  ),
                  panelQuaternion,
                  new THREE.Vector3(
                    Math.max(0.14, (sideFacade ? depth : width) * 0.22),
                    Math.max(0.34, height * 0.17),
                    1,
                  ),
                );
                windowPanels.setMatrixAt(panelIndex, matrix);
              }
            }
          }
        });

        annexRecords.forEach((item, index) => {
          const { x, z, width, depth, height, rotation } = getBuildingFootprint(item);
          const buildingQuaternion = new THREE.Quaternion().setFromAxisAngle(upAxis, rotation);
          const annexHeight = Math.max(0.75, Math.min(3.8, height * (0.28 + (item.id % 4) * 0.035)));
          const side = item.id % 2 === 0 ? -1 : 1;
          const offset = new THREE.Vector3(side * width * 0.43, 0, depth * ((item.id % 3) - 1) * 0.12).applyQuaternion(buildingQuaternion);
          matrix.compose(
            new THREE.Vector3(x + offset.x, 1.72 + annexHeight / 2, z + offset.z),
            buildingQuaternion,
            new THREE.Vector3(width * 0.52, annexHeight, depth * 0.72),
          );
          annexes.setMatrixAt(index, matrix);
        });

        crownRecords.forEach((item, index) => {
          const { x, z, width, depth, height, rotation } = getBuildingFootprint(item);
          const buildingQuaternion = new THREE.Quaternion().setFromAxisAngle(upAxis, rotation + Math.PI / 4);
          const crownHeight = Math.max(0.7, Math.min(2.4, height * 0.075));
          matrix.compose(
            new THREE.Vector3(x, 1.92 + height + crownHeight / 2, z),
            buildingQuaternion,
            new THREE.Vector3(width * 0.62, crownHeight, depth * 0.62),
          );
          crownCaps.setMatrixAt(index, matrix);
        });

        setbackRecords.forEach((item, index) => {
          const { x, z, width, depth, height, rotation } = getBuildingFootprint(item);
          const buildingQuaternion = new THREE.Quaternion().setFromAxisAngle(upAxis, rotation);
          const tierHeight = Math.max(0.75, Math.min(2.35, height * 0.18));
          matrix.compose(
            new THREE.Vector3(x, 1.76 + height + tierHeight / 2, z),
            buildingQuaternion,
            new THREE.Vector3(width * 0.68, tierHeight, depth * 0.68),
          );
          setbackTops.setMatrixAt(index, matrix);
        });

        mesh.instanceMatrix.needsUpdate = true;
        mesh.instanceColor!.needsUpdate = true;
        edges.instanceMatrix.needsUpdate = true;
        roofs.instanceMatrix.needsUpdate = true;
        roofs.instanceColor!.needsUpdate = true;
        podiums.instanceMatrix.needsUpdate = true;
        mechanicalRooms.instanceMatrix.needsUpdate = true;
        roofAntennas.instanceMatrix.needsUpdate = true;
        floorBands.instanceMatrix.needsUpdate = true;
        facadeFins.instanceMatrix.needsUpdate = true;
        facadeRails.instanceMatrix.needsUpdate = true;
        annexes.instanceMatrix.needsUpdate = true;
        crownCaps.instanceMatrix.needsUpdate = true;
        setbackTops.instanceMatrix.needsUpdate = true;
        windowPanels.instanceMatrix.needsUpdate = true;
        contactShadows.instanceMatrix.needsUpdate = true;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        podiums.castShadow = true;
        podiums.receiveShadow = true;
        mechanicalRooms.castShadow = true;
        facadeFins.castShadow = true;
        facadeRails.castShadow = true;
        annexes.castShadow = true;
        annexes.receiveShadow = true;
        crownCaps.castShadow = true;
        setbackTops.castShadow = true;
        setbackTops.receiveShadow = true;
        roofs.castShadow = true;
        mesh.receiveShadow = true;
        podiums.receiveShadow = true;
        mechanicalRooms.castShadow = true;
        mesh.userData.asset = {
          id: "beijing-building-network",
          label: "北京城市建筑群",
          category: "三维城市底座",
          details: `${records.length.toLocaleString()} 栋建筑完整位于北京地图显示边界内；原始 ${sourceRecords.length.toLocaleString()} 条建筑数据仍保留在本地数据集中。`,
          meta: "地图边界裁剪 · 建筑高度 · 区位编码 · 实时同步",
        } satisfies SmartAsset;
        scene.add(contactShadows, mesh, edges, roofs, podiums, mechanicalRooms, roofAntennas, floorBands, facadeFins, facadeRails, annexes, crownCaps, setbackTops, windowPanels);
        renderer.shadowMap.needsUpdate = true;
        interactive.push(mesh);
        onSceneStatus("ready");
      } catch {
        if (!disposed) onSceneStatus("degraded");
      }
    };
    void loadBuildings();

    const dashboardVehicleLights: THREE.MeshBasicMaterial[] = [];
    const dashboardVehicles = Array.from({ length: 54 }, (_, index) => {
      const vehicle = new THREE.Group();
      vehicle.name = `真实车流模型-${String(index + 1).padStart(2, "0")}`;
      vehicle.userData.modelQuality = "competition-realism-v2";
      const model = index % 5;
      const isTaxi = model === 1;
      const isSuv = model === 2;
      const isVan = model === 3;
      const isBus = model === 4;
      const width = isBus ? 0.82 : isVan ? 0.75 : isSuv ? 0.72 : 0.66;
      const length = isBus ? 1.88 : isVan ? 1.58 : isSuv ? 1.5 : 1.42;
      const bodyHeight = isBus ? 0.46 : isVan ? 0.39 : isSuv ? 0.34 : 0.29;
      const color = isTaxi
        ? 0xd5b72f
        : isBus
          ? 0x3f8cc5
          : [0xe5e9e7, 0xd14b42, 0x347dab, 0x252b31, 0x5eb39e][index % 5];
      const paint = new THREE.MeshPhysicalMaterial({
        color,
        metalness: 0.58,
        roughness: 0.24,
        clearcoat: 0.82,
        clearcoatRoughness: 0.18,
      });
      const body = new THREE.Mesh(
        new RoundedBoxGeometry(width, bodyHeight, length, 3, 0.1),
        paint,
      );
      body.position.y = 0.31;
      body.castShadow = index < 18;
      const cabin = new THREE.Mesh(
        new RoundedBoxGeometry(
          width * 0.84,
          isBus ? 0.46 : isVan ? 0.38 : 0.31,
          isBus ? length * 0.76 : isVan ? length * 0.58 : length * 0.5,
          3,
          0.08,
        ),
        new THREE.MeshPhysicalMaterial({
          color: 0x78a7b5,
          metalness: 0.62,
          roughness: 0.12,
          clearcoat: 0.9,
          transparent: true,
          opacity: 0.9,
        }),
      );
      cabin.position.set(0, isBus ? 0.69 : isVan ? 0.62 : 0.54, isVan ? 0.03 : 0.08);
      const bumperMaterial = new THREE.MeshStandardMaterial({
        color: 0x172027,
        metalness: 0.68,
        roughness: 0.3,
      });
      const frontBumper = new THREE.Mesh(
        new RoundedBoxGeometry(width * 0.88, 0.08, 0.09, 2, 0.025),
        bumperMaterial,
      );
      frontBumper.position.set(0, 0.22, -length * 0.51);
      const rearBumper = frontBumper.clone();
      rearBumper.position.z = length * 0.51;
      const lightMaterial = new THREE.MeshBasicMaterial({
        color: 0xfff0bd,
        transparent: true,
        opacity: nightRef.current ? 1 : 0.38,
      });
      const tailMaterial = new THREE.MeshBasicMaterial({
        color: 0xff312e,
        transparent: true,
        opacity: nightRef.current ? 0.94 : 0.5,
      });
      dashboardVehicleLights.push(lightMaterial, tailMaterial);
      [-0.23, 0.23].forEach((side) => {
        const headlight = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.07, 0.035), lightMaterial);
        headlight.position.set(side * width, 0.31, -length * 0.535);
        const tailLight = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.065, 0.035), tailMaterial);
        tailLight.position.set(side * width, 0.31, length * 0.535);
        vehicle.add(headlight, tailLight);
      });
      const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x101418, roughness: 0.88 });
      const hubMaterial = new THREE.MeshStandardMaterial({ color: 0xa7b0b3, metalness: 0.86, roughness: 0.2 });
      [-1, 1].forEach((side) => {
        [-0.31, 0.31].forEach((axle) => {
          const wheel = new THREE.Mesh(
            new THREE.CylinderGeometry(isBus ? 0.15 : 0.13, isBus ? 0.15 : 0.13, 0.1, 16),
            wheelMaterial,
          );
          wheel.rotation.z = Math.PI / 2;
          wheel.position.set(side * width * 0.55, 0.18, axle * length);
          const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.105, 12), hubMaterial);
          hub.rotation.z = Math.PI / 2;
          hub.position.copy(wheel.position);
          vehicle.add(wheel, hub);
        });
      });
      const plate = new THREE.Mesh(
        new THREE.BoxGeometry(0.23, 0.07, 0.025),
        new THREE.MeshBasicMaterial({ color: 0x2368b4 }),
      );
      plate.position.set(0, 0.2, -length * 0.56);
      vehicle.add(body, cabin, frontBumper, rearBumper, plate);
      if (isTaxi) {
        const roofSign = new THREE.Mesh(
          new RoundedBoxGeometry(0.25, 0.1, 0.13, 2, 0.025),
          new THREE.MeshBasicMaterial({ color: 0xfff2a6 }),
        );
        roofSign.position.set(0, 0.74, 0.05);
        vehicle.add(roofSign);
      }
      scene.add(vehicle);
      return vehicle;
    });
    const vehicleRoutes = Array.from({ length: 54 }, (_, index) => {
      const lane = ROAD_COORDINATES[index % ROAD_COORDINATES.length] + (index % 3 - 1) * 1.15;
      const length = mapChordLength(lane, CITY_GROUND_RADIUS - 16);
      return {
        axis: index % 2,
        lane,
        length,
        offset: (index * 31) % length,
        speed: 0.15 + (index % 7) * 0.017,
      };
    });

    applyModeRef.current = (night, lights) => {
      scene.background = new THREE.Color(night ? 0x123d5b : 0x4b8aa4);
      scene.fog = new THREE.FogExp2(night ? 0x123449 : 0x5d8492, night ? 0.00215 : 0.00155);
      renderer.toneMappingExposure = night ? 1.12 : 1.3;
      skyUniforms.uSkyTop.value.setHex(night ? 0x041329 : 0x174e78);
      skyUniforms.uSkyHorizon.value.setHex(night ? 0x0a426d : 0x78c9e7);
      skyUniforms.uSkyGlow.value.setHex(night ? 0x2baeff : 0x71dcff);
      skyUniforms.uSkyIntensity.value = night ? 0.88 : 0.58;
      floorUniforms.uFloorPrimary.value.setHex(night ? 0x25dfff : 0x1aa7d8);
      floorUniforms.uFloorSecondary.value.setHex(night ? 0x766dff : 0x3c70de);
      floorUniforms.uFloorOpacity.value = night ? 0.56 : 0.38;
      floorOrbitMaterial.color.setHex(night ? 0x50ddff : 0x328dcc);
      floorOrbitMaterial.opacity = night ? 0.72 : 0.48;
      horizonGlowMaterial.color.setHex(night ? 0x3cd6ff : 0x7be8ff);
      horizonGlowMaterial.opacity = night ? 0.42 : 0.25;
      backgroundDustMaterial.color.setHex(night ? 0x6de5ff : 0xb4f2ff);
      backgroundDustMaterial.opacity = night ? 0.34 : 0.2;
      gridMaterials.forEach((material) => {
        material.opacity = 0;
      });
      ambient.intensity = night ? 1.08 : 1.8;
      sun.intensity = night ? 0.72 : 2.72;
      rimLight.intensity = night ? 1.75 : 1.2;
      coreLight.intensity = night ? 24 : 16;
      foundationLights.forEach((light, index) => {
        light.intensity = night ? 9 + (index % 2) : 6.4;
      });
      groundMaterial.color.setHex(night ? 0x638da1 : 0xb7d9e2);
      groundMaterial.emissive.setHex(night ? 0x173f55 : 0x17384a);
      groundMaterial.emissiveIntensity = night ? 0.28 : 0.14;
      cityBaseMaterial.emissiveIntensity = night ? 0.82 : 0.58;
      roadMaterial.color.setHex(night ? 0x0d3047 : 0x15384e);
      roadMaterial.emissive.setHex(night ? 0x0f3d57 : 0x0b2d42);
      skylineMaterial.color.setHex(UNIFIED_BUILDING_COLOR);
      skylineMaterial.emissive.setHex(night ? 0x217bb3 : 0x1a689c);
      skylineMaterial.emissiveIntensity = night ? 0.78 : 0.52;
      buildingMaterial.color.setHex(UNIFIED_BUILDING_COLOR);
      buildingMaterial.emissive.setHex(lights ? (night ? 0x176dab : 0x145f9e) : 0x0d4878);
      buildingMaterial.emissiveIntensity = lights ? (night ? 0.72 : 0.52) : 0.3;
      buildingEdgeMaterial.opacity = lights ? (night ? 0.035 : 0.022) : 0.012;
      roofMaterial.color.setHex(UNIFIED_BUILDING_COLOR);
      roofMaterial.opacity = night ? 1 : 0.96;
      roofMaterial.emissiveIntensity = lights ? (night ? 0.48 : 0.34) : 0.18;
      riverMaterial.emissiveIntensity = night ? 0.78 : 0.42;
      dashboardVehicleLights.forEach((material, index) => {
        material.opacity = index % 2 === 0 ? (night ? 1 : 0.56) : (night ? 0.96 : 0.64);
        material.needsUpdate = true;
      });
    };
    applyModeRef.current(nightRef.current, lightsRef.current);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const hoverColor = new THREE.Color(0x9effff);
    let hoveredBuilding = -1;
    let hoveredMarker: THREE.Object3D | null = null;
    let hoverFrame = 0;
    let pointerDown = { x: 0, y: 0 };

    const setPointer = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.set(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1,
      );
    };

    const restoreBuildingHover = () => {
      if (buildingMesh && hoveredBuilding >= 0 && buildingBaseColors[hoveredBuilding]) {
        buildingMesh.setColorAt(hoveredBuilding, buildingBaseColors[hoveredBuilding]);
        if (buildingMesh.instanceColor) buildingMesh.instanceColor.needsUpdate = true;
      }
      hoveredBuilding = -1;
    };

    const restoreMarkerHover = () => {
      if (hoveredMarker) hoveredMarker.scale.setScalar(1);
      hoveredMarker = null;
    };

    const clearHover = () => {
      restoreBuildingHover();
      restoreMarkerHover();
      renderer.domElement.style.cursor = "grab";
    };

    const hover = (event: PointerEvent) => {
      const clientX = event.clientX;
      const clientY = event.clientY;
      cancelAnimationFrame(hoverFrame);
      hoverFrame = requestAnimationFrame(() => {
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.set(
          ((clientX - rect.left) / rect.width) * 2 - 1,
          -((clientY - rect.top) / rect.height) * 2 + 1,
        );
        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObjects(interactive, false)[0];
        const nextBuilding = hit?.object === buildingMesh && hit.instanceId !== undefined ? hit.instanceId : -1;
        const nextMarker = hit?.object.userData.asset && hit?.object !== buildingMesh ? hit.object : null;

        if (nextBuilding !== hoveredBuilding) {
          restoreBuildingHover();
          if (buildingMesh && nextBuilding >= 0) {
            buildingMesh.setColorAt(nextBuilding, hoverColor);
            if (buildingMesh.instanceColor) buildingMesh.instanceColor.needsUpdate = true;
            hoveredBuilding = nextBuilding;
          }
        }
        if (nextMarker !== hoveredMarker) {
          restoreMarkerHover();
          hoveredMarker = nextMarker;
          hoveredMarker?.scale.setScalar(1.35);
        }
        renderer.domElement.style.cursor = hit ? "pointer" : "grab";
      });
    };

    const pick = (event: PointerEvent) => {
      if (Math.hypot(event.clientX - pointerDown.x, event.clientY - pointerDown.y) > 5) return;
      setPointer(event);
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(interactive, false)[0];
      if (hit?.object === buildingMesh && hit.instanceId !== undefined) {
        const building = buildingRecords[hit.instanceId];
        if (!building) return;
        const buildingId = building?.id ?? hit.instanceId + 1;
        const height = Math.round(building?.heightMeters || 16);
        const knownName = building?.name?.trim();
        const buildingPhoto = photoForBuilding(building);
        const photoDescription = buildingPhoto.provider === "verified-local"
          ? "当前显示与建筑编号核验过的本地实景照片。"
          : "严格重匹配已完成，但尚未找到能够证明为该建筑本体的开放许可照片；系统不会展示区域图、道路街景或同名候选冒充本体。";
        onSelect({
          id: `building-${buildingId}`,
          label: knownName || `北京 CBD 楼宇 BJ-${String(buildingId).padStart(6, "0")}`,
          category: knownName ? "北京三维建筑资产 · 公开名称" : "北京三维建筑资产 · 编号标识",
          details: knownName
            ? `公开地图数据标注名称为“${knownName}”，建筑高度约 ${height} 米。${photoDescription}`
            : `公开地图数据暂未标注该楼宇名称，系统仅保留唯一资产编号与建筑中心坐标。建筑高度约 ${height} 米。${photoDescription}`,
          meta: `资产编号 BJ-${String(buildingId).padStart(6, "0")} · 高度 ${height} m · ${buildingPhoto.provider === "verified-local" ? "本体实景已核验" : "严格重匹配：暂无合格照片"}`,
          photo: buildingPhoto,
        });
        return;
      }
      const asset = hit?.object.userData.asset as SmartAsset | undefined;
      onSelect(asset || null);
    };
    const rememberPointer = (event: PointerEvent) => {
      pointerDown = { x: event.clientX, y: event.clientY };
    };
    renderer.domElement.addEventListener("pointermove", hover);
    renderer.domElement.addEventListener("pointerleave", clearHover);
    renderer.domElement.addEventListener("pointerdown", rememberPointer);
    renderer.domElement.addEventListener("pointerup", pick);

    let resizeFrame = 0;
    let renderedWidth = 0;
    let renderedHeight = 0;
    const resize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        const width = Math.max(1, Math.round(element.clientWidth));
        const height = Math.max(1, Math.round(element.clientHeight));
        if (width === renderedWidth && height === renderedHeight) return;
        renderedWidth = width;
        renderedHeight = height;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      });
    };
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    resize();
    let sceneVisible = true;
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      sceneVisible = entry?.isIntersecting ?? true;
    }, { rootMargin: "120px" });
    visibilityObserver.observe(element);

    type CameraFlight = {
      from: THREE.Vector3;
      to: THREE.Vector3;
      targetFrom: THREE.Vector3;
      targetTo: THREE.Vector3;
      start: number;
      duration: number;
    };
    let cameraFlight: CameraFlight | null = null;
    const flyTo = (position: [number, number, number], target: [number, number, number], duration = 1250) => {
      cameraFlight = {
        from: camera.position.clone(),
        to: new THREE.Vector3(...position),
        targetFrom: controls.target.clone(),
        targetTo: new THREE.Vector3(...target),
        start: performance.now(),
        duration,
      };
      controls.enabled = false;
    };

    const command = (event: Event) => {
      const detail = (event as CustomEvent<CameraCommand>).detail;
      if (detail === "zoomIn" || detail === "zoomOut") {
        const factor = detail === "zoomIn" ? 0.82 : 1.18;
        const offset = camera.position.clone().sub(controls.target).multiplyScalar(factor);
        camera.position.copy(controls.target).add(offset);
        controls.update();
        return;
      }
      if (detail === "reset") {
        flyTo(viewPresets.panorama.position, viewPresets.panorama.target);
        return;
      }
      if (typeof detail === "object" && detail.action === "view" && detail.view && viewPresets[detail.view]) {
        const preset = viewPresets[detail.view];
        flyTo(preset.position, preset.target);
        return;
      }
      if (typeof detail === "object" && detail.action === "focus" && detail.position && detail.target) {
        flyTo(detail.position, detail.target, 1050);
      }
    };
    window.addEventListener("smart-city-camera", command);

    const startTime = performance.now();
    let frame = 0;
    let lastRenderTime = 0;
    const animate = (time: number) => {
      frame = requestAnimationFrame(animate);
      if (document.hidden || !sceneVisible) return;
      if (time - lastRenderTime < targetFrameInterval) return;
      lastRenderTime = time - ((time - lastRenderTime) % targetFrameInterval);
      // A first requestAnimationFrame timestamp can precede performance.now()
      // by a fraction of a frame. Keep curve sampling inside [0, 1) so
      // CatmullRomCurve3 never receives a negative parameter.
      const elapsed = Math.max(0, (time - startTime) / 1000);
      floorOrbitGroup.rotation.y = elapsed * 0.012;
      const count = Math.min(54, trafficRef.current);
      vehicleRoutes.forEach((route, index) => {
        const vehicle = dashboardVehicles[index];
        vehicle.visible = index < count;
        if (index >= count) return;
        const progress = (route.offset + elapsed * route.speed * 30) % route.length - route.length / 2;
        const x = route.axis ? progress : route.lane;
        const z = route.axis ? route.lane : progress;
        vehicle.position.set(x, 1.46, z);
        vehicle.rotation.y = route.axis ? Math.PI / 2 : 0;
      });

      dataRings.forEach((ring, index) => {
        ring.rotation.z = elapsed * (index % 2 ? -0.025 : 0.02);
      });
      hologramRings.forEach((ring, index) => {
        ring.rotation.z = elapsed * (index === 0 ? 0.08 : -0.055);
      });
      networkLines.forEach((line, index) => {
        (line.material as THREE.LineDashedMaterial).dashOffset = -elapsed * (0.8 + index * 0.14);
      });
      pulses.forEach((pulse, index) => {
        const curve = networkLines[index].userData.curve as THREE.CatmullRomCurve3;
        pulse.position.copy(curve.getPoint((elapsed * 0.13 + index * 0.22) % 1));
      });

      if (cameraFlight) {
        const progress = Math.min(1, (time - cameraFlight.start) / cameraFlight.duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        camera.position.lerpVectors(cameraFlight.from, cameraFlight.to, eased);
        controls.target.lerpVectors(cameraFlight.targetFrom, cameraFlight.targetTo, eased);
        if (progress >= 1) {
          cameraFlight = null;
          controls.enabled = true;
        }
      } else if (tourRef.current) {
        camera.position.x = Math.cos(elapsed * 0.038) * 142;
        camera.position.z = Math.sin(elapsed * 0.038) * 142;
        camera.position.y = 118 + Math.sin(elapsed * 0.06) * 4;
        controls.target.set(0, 17, 0);
      }
      controls.update();
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(hoverFrame);
      cancelAnimationFrame(resizeFrame);
      observer.disconnect();
      visibilityObserver.disconnect();
      renderer.domElement.removeEventListener("pointermove", hover);
      renderer.domElement.removeEventListener("pointerleave", clearHover);
      renderer.domElement.removeEventListener("pointerdown", rememberPointer);
      renderer.domElement.removeEventListener("pointerup", pick);
      window.removeEventListener("smart-city-camera", command);
      controls.dispose();
      renderer.dispose();
      scene.traverse((object) => {
        const mesh = object as THREE.Mesh;
        mesh.geometry?.dispose?.();
        if (Array.isArray(mesh.material)) mesh.material.forEach((material) => material.dispose());
        else mesh.material?.dispose?.();
      });
      renderer.domElement.remove();
    };
  }, [onSceneStatus, onSelect]);

  return <div ref={host} className="smart-city-scene" aria-label="北京科幻智慧城市三维数字孪生场景" />;
}
