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
  panorama: { position: [158, 112, 172], target: [0, 15, 0] },
  cbd: { position: [68, 56, 82], target: [9, 16, 4] },
  axis: { position: [2, 76, 196], target: [0, 12, -4] },
  top: { position: [0, 252, 0.1], target: [0, 0, 0] },
  horizon: { position: [214, 48, 2], target: [0, 18, 0] },
} satisfies Record<string, { position: [number, number, number]; target: [number, number, number] }>;

const districts = [
  { id: "dongcheng", label: "东城区", x: 7, z: -4, color: 0x4fffd0, text: "城市治理 92.7 · 感知设备在线率 99.9%" },
  { id: "xicheng", label: "西城区", x: -9, z: -5, color: 0x72f5ff, text: "政务协同 95.4 · 城市服务响应率 98.7%" },
  { id: "chaoyang", label: "朝阳区", x: 37, z: 4, color: 0x35efff, text: "商务活力 96.8 · 城市事件闭环率 98.1%" },
  { id: "haidian", label: "海淀区", x: -31, z: 19, color: 0x6a96ff, text: "科技创新 94.2 · 智算资源利用率 87.6%" },
  { id: "fengtai", label: "丰台区", x: -10, z: -31, color: 0xffa95f, text: "交通枢纽 89.6 · 路网运行状态平稳" },
  { id: "shijingshan", label: "石景山区", x: -43, z: -15, color: 0x8ca9ff, text: "城市更新 91.2 · 重点设施在线率 98.4%" },
  { id: "mentougou", label: "门头沟区", x: -72, z: -20, color: 0x47d9c5, text: "生态监测 93.1 · 山区感知节点覆盖率 96.5%" },
  { id: "fangshan", label: "房山区", x: -59, z: -56, color: 0x53e6a9, text: "园区运行 90.8 · 应急资源到位率 97.2%" },
  { id: "tongzhou", label: "通州区", x: 67, z: -13, color: 0x54c7ff, text: "副中心治理 95.7 · 政务数据协同率 98.9%" },
  { id: "shunyi", label: "顺义区", x: 58, z: 35, color: 0x4effe4, text: "临空经济 93.5 · 交通感知覆盖率 97.8%" },
  { id: "changping", label: "昌平区", x: -15, z: 50, color: 0x7d89ff, text: "科教融合 94.6 · 园区设备在线率 98.3%" },
  { id: "daxing", label: "大兴区", x: 17, z: -66, color: 0x4ed8ff, text: "机场联动 94.1 · 综合交通准点率 96.9%" },
  { id: "huairou", label: "怀柔区", x: 34, z: 69, color: 0xb18cff, text: "科学城运行 92.9 · 科研设施保障率 98.1%" },
  { id: "pinggu", label: "平谷区", x: 82, z: 51, color: 0x58f0b1, text: "农业智联 90.6 · 物联感知覆盖率 95.8%" },
  { id: "miyun", label: "密云区", x: 18, z: 91, color: 0x63b8ff, text: "水源保护 96.2 · 生态告警闭环率 99.1%" },
  { id: "yanqing", label: "延庆区", x: -51, z: 82, color: 0x8edbff, text: "生态涵养 95.1 · 林火监测覆盖率 98.6%" },
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
      camera.position.set(0, 252, 0.1);
      controls.target.set(0, 0, 0);
    } else {
      camera.position.set(158, 112, 172);
      controls.target.set(0, 15, 0);
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
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 920);
    camera.position.set(158, 112, 172);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.26;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    element.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.minDistance = 46;
    controls.maxDistance = 360;
    controls.maxPolarAngle = Math.PI * 0.48;
    controls.target.set(0, 15, 0);
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

    const ambient = new THREE.HemisphereLight(0xd8edff, 0x18324a, 1.68);
    scene.add(ambient);
    const sun = new THREE.DirectionalLight(0xe7f1ff, 2.65);
    sun.position.set(-70, 128, 68);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -185;
    sun.shadow.camera.right = 185;
    sun.shadow.camera.top = 185;
    sun.shadow.camera.bottom = -185;
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
      light.position.set(Math.cos(angle) * 112, 5.5, Math.sin(angle) * 112);
      const marker = new THREE.Mesh(
        new THREE.SphereGeometry(0.65, 14, 10),
        new THREE.MeshBasicMaterial({ color: tone, transparent: true, opacity: 0.42 }),
      );
      marker.position.copy(light.position);
      scene.add(light, marker);
      foundationLights.push(light);
      foundationLightMarkers.push(marker);
    }

    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x1b4b63,
      roughness: 0.78,
      metalness: 0.28,
    });
    const ground = new THREE.Mesh(new THREE.CircleGeometry(170, 160), groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0.65;
    ground.receiveShadow = true;
    scene.add(ground);

    const cityBaseMaterial = new THREE.MeshStandardMaterial({
      color: 0x123f5f,
      metalness: 0.64,
      roughness: 0.32,
      emissive: 0x0a3150,
      emissiveIntensity: 0.52,
    });
    const cityBase = new THREE.Mesh(new THREE.CylinderGeometry(164, 170, 2.4, 160), cityBaseMaterial);
    cityBase.position.y = -0.5;
    scene.add(cityBase);

    const grid = new THREE.GridHelper(324, 81, 0x58caff, 0x2e6388);
    grid.position.y = 1.02;
    const gridMaterials = Array.isArray(grid.material) ? grid.material : [grid.material];
    gridMaterials.forEach((material) => {
      material.transparent = true;
      material.opacity = 0.23;
      material.depthWrite = false;
    });
    scene.add(grid);

    const roadMaterial = new THREE.MeshStandardMaterial({
      color: 0x102b3e,
      roughness: 0.65,
      metalness: 0.35,
      emissive: 0x0a2436,
    });
    const laneMaterial = new THREE.MeshBasicMaterial({
      color: 0x8bd9ff,
      transparent: true,
      opacity: 0.28,
    });
    [-120, -96, -72, -48, -24, 0, 24, 48, 72, 96, 120].forEach((x, index) =>
      addRoad(scene, roadMaterial, laneMaterial, index === 5 ? 7.4 : 4.4, 312, x, 0, index % 2 ? 0.025 : -0.02),
    );
    [-120, -96, -72, -48, -24, 0, 24, 48, 72, 96, 120].forEach((z, index) =>
      addRoad(scene, roadMaterial, laneMaterial, index === 5 ? 7.4 : 4.4, 312, 0, z, Math.PI / 2 + (index % 2 ? 0.02 : -0.018)),
    );

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x5e8b91,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const dataRings: THREE.Mesh[] = [];
    [42, 76, 112, 145, 162].forEach((radius, index) => {
      const ring = new THREE.Mesh(new THREE.RingGeometry(radius - 0.18, radius + 0.18, 192), ringMaterial.clone());
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 1.58 + index * 0.01;
      scene.add(ring);
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
    const river = new THREE.Mesh(new THREE.PlaneGeometry(336, 11), riverMaterial);
    river.rotation.x = -Math.PI / 2;
    river.rotation.z = -0.12;
    river.position.set(0, 1.64, -121);
    scene.add(river);

    const skylineGeometry = new THREE.CylinderGeometry(0.62, 1.25, 1, 10);
    const skylineMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x4baee7,
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
      [-8, -2, 46], [-3, 2, 66], [3, 1, 54], [9, 4, 39], [15, -3, 31],
      [-16, 5, 29], [20, 9, 23], [-22, -7, 35], [5, -11, 28],
    ].forEach(([x, z, height], index) => {
      skylineMatrix.compose(
        new THREE.Vector3(x, 1.7 + height / 2, z),
        new THREE.Quaternion(),
        new THREE.Vector3(index % 3 === 1 ? 1.6 : 1, height, index % 3 === 1 ? 1.6 : 1),
      );
      skyline.setMatrixAt(index, skylineMatrix);
    });
    skyline.castShadow = true;
    scene.add(skyline);

    const interactive: THREE.Object3D[] = [];
    const districtHalos: THREE.Mesh[] = [];
    districts.forEach((item) => {
      const group = new THREE.Group();
      group.position.set(item.x, 1.65, item.z);
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
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 4, 0),
        new THREE.Vector3(item.x * 0.45, 13 + index * 1.5, item.z * 0.45),
        new THREE.Vector3(item.x, 3.5, item.z),
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
      const radius = 8 + Math.sqrt(Math.random()) * 154;
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
    scene.add(scan);

    const buildingMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x7ec8ff,
      roughness: 0.26,
      metalness: 0.38,
      clearcoat: 0.78,
      clearcoatRoughness: 0.18,
      emissive: 0x145d9b,
      emissiveIntensity: 0.5,
      vertexColors: true,
    });
    const buildingWindowStrength = { value: nightRef.current && lightsRef.current ? 1.8 : 0.78 };
    buildingMaterial.onBeforeCompile = (shader) => {
      shader.uniforms.windowStrength = buildingWindowStrength;
      shader.vertexShader = shader.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
          varying vec3 vBuildingLocal;
          varying float vBuildingSeed;`,
        )
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
          vBuildingLocal = position;
          #ifdef USE_INSTANCING
            vBuildingSeed = instanceMatrix[3].x * 0.071 + instanceMatrix[3].z * 0.113;
          #else
            vBuildingSeed = 0.0;
          #endif`,
        );
      shader.fragmentShader = shader.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
          varying vec3 vBuildingLocal;
          varying float vBuildingSeed;
          uniform float windowStrength;`,
        )
        .replace(
          "#include <emissivemap_fragment>",
          `#include <emissivemap_fragment>
          float wallCoordinate = abs(normal.x) > abs(normal.z) ? vBuildingLocal.z : vBuildingLocal.x;
          vec2 windowUV = vec2((wallCoordinate + 0.5) * 10.0, (vBuildingLocal.y + 0.5) * 22.0);
          vec2 windowCell = floor(windowUV);
          vec2 windowGrid = fract(windowUV);
          float sideSurface = step(abs(normal.y), 0.45);
          float windowShape = step(0.20, windowGrid.x) * step(windowGrid.x, 0.78)
            * step(0.22, windowGrid.y) * step(windowGrid.y, 0.72) * sideSurface;
          float windowNoise = fract(sin(dot(windowCell + vBuildingSeed, vec2(12.9898, 78.233))) * 43758.5453);
          float windowOn = step(0.34, windowNoise);
          vec3 windowColor = mix(vec3(0.18, 0.62, 1.0), vec3(0.48, 0.86, 1.0), step(0.82, windowNoise));
          totalEmissiveRadiance += windowColor * windowShape * windowOn * windowStrength;`,
        );
    };
    const buildingGeometry = new RoundedBoxGeometry(1, 1, 1, 2, 0.035);
    const buildingEdgeMaterial = new THREE.MeshBasicMaterial({
      color: 0x68d3ff,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });
    const roofGeometry = new RoundedBoxGeometry(1, 0.12, 1, 2, 0.035);
    const roofMaterial = new THREE.MeshStandardMaterial({
      color: 0x56b5f2,
      metalness: 0.5,
      roughness: 0.24,
      emissive: 0x1b6597,
      emissiveIntensity: 0.34,
      transparent: true,
      opacity: 0.95,
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
        const records = payload.buildings.filter((item) => item.points.length >= 3).slice(0, 6200);
        const mesh = new THREE.InstancedMesh(buildingGeometry, buildingMaterial, records.length);
        buildingMesh = mesh;
        buildingRecords = records;
        const edges = new THREE.InstancedMesh(buildingGeometry, buildingEdgeMaterial, records.length);
        const roofRecords = records.filter((item) => (item.heightMeters || 16) > 40).slice(0, 700);
        const roofs = new THREE.InstancedMesh(roofGeometry, roofMaterial, roofRecords.length);
        const detailRecords = records
          .filter((item) => item.core && (item.heightMeters || 16) > 32)
          .slice(0, 320);
        const podiums = new THREE.InstancedMesh(
          new RoundedBoxGeometry(1, 1, 1, 2, 0.045),
          new THREE.MeshPhysicalMaterial({
            color: 0x287fbd,
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
            color: 0x4ca8df,
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
            color: 0x94dcff,
            metalness: 0.78,
            roughness: 0.22,
            emissive: 0x246991,
            emissiveIntensity: 0.32,
          }),
          detailRecords.length,
        );
        const floorBands = new THREE.InstancedMesh(
          new RoundedBoxGeometry(1, 0.045, 1, 1, 0.018),
          new THREE.MeshPhysicalMaterial({
            color: 0x72cfff,
            metalness: 0.58,
            roughness: 0.34,
            transparent: true,
            opacity: 0.72,
            emissive: 0x287eae,
            emissiveIntensity: 0.3,
          }),
          detailRecords.length * 3,
        );
        const contactShadows = new THREE.InstancedMesh(
          new THREE.CircleGeometry(0.72, 24),
          new THREE.MeshBasicMaterial({
            color: 0x0b466b,
            transparent: true,
            opacity: 0.13,
            depthWrite: false,
          }),
          detailRecords.length,
        );
        contactShadows.renderOrder = 1;
        const matrix = new THREE.Matrix4();
        const edgeMatrix = new THREE.Matrix4();
        const color = new THREE.Color();
        const groundQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));

        const footprint = (item: Building) => {
          const xs = item.points.map((point) => point[0]);
          const zs = item.points.map((point) => point[1]);
          const x = (Math.min(...xs) + Math.max(...xs)) / 2.55;
          const z = (Math.min(...zs) + Math.max(...zs)) / 2.55;
          const width = Math.max(0.45, Math.min(7.2, (Math.max(...xs) - Math.min(...xs)) / 2.55));
          const depth = Math.max(0.45, Math.min(7.2, (Math.max(...zs) - Math.min(...zs)) / 2.55));
          const height = Math.max(1.2, Math.min(58, (item.heightMeters || 16) / 5.2));
          return { x, z, width, depth, height };
        };

        records.forEach((item, index) => {
          const { x, z, width, depth, height } = footprint(item);
          matrix.compose(
            new THREE.Vector3(x, 1.72 + height / 2, z),
            new THREE.Quaternion(),
            new THREE.Vector3(width, height, depth),
          );
          mesh.setMatrixAt(index, matrix);
          edgeMatrix.compose(
            new THREE.Vector3(x, 1.72 + height / 2, z),
            new THREE.Quaternion(),
            new THREE.Vector3(width * 1.018, height * 1.006, depth * 1.018),
          );
          edges.setMatrixAt(index, edgeMatrix);
          const distance = Math.min(1, Math.sqrt(x * x + z * z) / 110);
          color.setHSL(0.56 + distance * 0.025 + Math.random() * 0.012, 0.78, 0.54 + (1 - distance) * 0.12 + Math.random() * 0.045);
          mesh.setColorAt(index, color);
          buildingBaseColors.push(color.clone());
        });

        roofRecords.forEach((item, index) => {
          const { x, z, width, depth, height } = footprint(item);
          matrix.compose(
            new THREE.Vector3(x, 1.76 + height, z),
            new THREE.Quaternion(),
            new THREE.Vector3(width * 0.82, 1, depth * 0.82),
          );
          roofs.setMatrixAt(index, matrix);
        });

        detailRecords.forEach((item, index) => {
          const { x, z, width, depth, height } = footprint(item);
          matrix.compose(
            new THREE.Vector3(x + 0.24, 1.705, z + 0.28),
            groundQuaternion,
            new THREE.Vector3(width * 1.2, depth * 1.2, 1),
          );
          contactShadows.setMatrixAt(index, matrix);

          const podiumHeight = Math.max(0.55, Math.min(1.35, height * 0.09));
          matrix.compose(
            new THREE.Vector3(x, 1.72 + podiumHeight / 2, z),
            new THREE.Quaternion(),
            new THREE.Vector3(width * 1.14, podiumHeight, depth * 1.14),
          );
          podiums.setMatrixAt(index, matrix);

          const equipmentHeight = Math.max(0.32, Math.min(0.95, height * 0.045));
          matrix.compose(
            new THREE.Vector3(x, 1.78 + height + equipmentHeight / 2, z),
            new THREE.Quaternion(),
            new THREE.Vector3(
              Math.max(0.28, width * 0.34),
              equipmentHeight,
              Math.max(0.28, depth * 0.34),
            ),
          );
          mechanicalRooms.setMatrixAt(index, matrix);

          const antennaHeight = Math.max(0.9, Math.min(3.2, height * 0.12));
          matrix.compose(
            new THREE.Vector3(x, 1.82 + height + equipmentHeight + antennaHeight / 2, z),
            new THREE.Quaternion(),
            new THREE.Vector3(1, antennaHeight, 1),
          );
          roofAntennas.setMatrixAt(index, matrix);

          for (let band = 0; band < 3; band += 1) {
            const bandHeight = 1.72 + height * (0.28 + band * 0.22);
            matrix.compose(
              new THREE.Vector3(x, bandHeight, z),
              new THREE.Quaternion(),
              new THREE.Vector3(width * 1.018, 1, depth * 1.018),
            );
            floorBands.setMatrixAt(index * 3 + band, matrix);
          }
        });

        mesh.instanceMatrix.needsUpdate = true;
        mesh.instanceColor!.needsUpdate = true;
        edges.instanceMatrix.needsUpdate = true;
        roofs.instanceMatrix.needsUpdate = true;
        podiums.instanceMatrix.needsUpdate = true;
        mechanicalRooms.instanceMatrix.needsUpdate = true;
        roofAntennas.instanceMatrix.needsUpdate = true;
        floorBands.instanceMatrix.needsUpdate = true;
        contactShadows.instanceMatrix.needsUpdate = true;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        podiums.castShadow = true;
        podiums.receiveShadow = true;
        mechanicalRooms.castShadow = true;
        roofs.castShadow = true;
        mesh.receiveShadow = true;
        podiums.receiveShadow = true;
        mechanicalRooms.castShadow = true;
        mesh.userData.asset = {
          id: "beijing-building-network",
          label: "北京城市建筑群",
          category: "三维城市底座",
          details: `${records.length.toLocaleString()} 栋建筑已接入城市数字孪生，支持空间定位、态势叠加与运行监测。`,
          meta: "建筑高度 · 区位编码 · 能耗状态 · 实时同步",
        } satisfies SmartAsset;
        scene.add(contactShadows, mesh, edges, roofs, podiums, mechanicalRooms, roofAntennas, floorBands);
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
    const vehicleRoutes = Array.from({ length: 54 }, (_, index) => ({
      axis: index % 2,
      lane: [-120, -96, -72, -48, -24, 0, 24, 48, 72, 96, 120][index % 11] + (index % 3 - 1) * 1.15,
      offset: (index * 19) % 312,
      speed: 0.15 + (index % 7) * 0.017,
    }));

    applyModeRef.current = (night, lights) => {
      scene.background = new THREE.Color(night ? 0x0d2f4a : 0x3d7890);
      scene.fog = new THREE.FogExp2(night ? 0x12334b : 0x4d7180, night ? 0.0054 : 0.0038);
      renderer.toneMappingExposure = night ? 1.05 : 1.26;
      ambient.intensity = night ? 0.92 : 1.68;
      sun.intensity = night ? 0.62 : 2.65;
      rimLight.intensity = night ? 1.75 : 1.2;
      coreLight.intensity = night ? 24 : 16;
      foundationLights.forEach((light, index) => {
        light.intensity = night ? 9 + (index % 2) : 6.4;
      });
      groundMaterial.color.setHex(night ? 0x0e3550 : 0x1b4b63);
      cityBaseMaterial.emissiveIntensity = night ? 0.75 : 0.52;
      roadMaterial.emissive.setHex(night ? 0x0f3d57 : 0x0b2d42);
      skylineMaterial.color.setHex(night ? 0x399bd9 : 0x5abcf0);
      skylineMaterial.emissive.setHex(night ? 0x217bb3 : 0x1a689c);
      skylineMaterial.emissiveIntensity = night ? 0.78 : 0.52;
      buildingMaterial.emissive.setHex(lights ? (night ? 0x176dab : 0x145f9e) : 0x0d4878);
      buildingMaterial.emissiveIntensity = lights ? (night ? 0.78 : 0.56) : 0.28;
      buildingWindowStrength.value = lights ? (night ? 1.8 : 0.78) : 0.08;
      buildingEdgeMaterial.opacity = lights ? (night ? 0.14 : 0.08) : 0.035;
      roofMaterial.opacity = lights ? (night ? 1 : 0.95) : 0.62;
      roofMaterial.emissiveIntensity = lights ? (night ? 0.48 : 0.34) : 0.18;
      laneMaterial.opacity = night ? 0.72 : 0.62;
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
        const buildingId = building?.id ?? hit.instanceId + 1;
        const height = Math.round(building?.heightMeters || 16);
        onSelect({
          id: `building-${buildingId}`,
          label: building?.name || `北京城市建筑 ${String(buildingId).padStart(5, "0")}`,
          category: "北京三维建筑资产",
          details: `建筑高度约 ${height} 米，已接入北京城市数字孪生底座，可叠加能耗、安防、交通及应急态势数据。`,
          meta: `资产编号 BJ-${String(buildingId).padStart(6, "0")} · 实时在线 · 单击定位`,
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

    const resize = () => {
      const width = Math.max(1, element.clientWidth);
      const height = Math.max(1, element.clientHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    resize();

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
    const animate = (time: number) => {
      frame = requestAnimationFrame(animate);
      // A first requestAnimationFrame timestamp can precede performance.now()
      // by a fraction of a frame. Keep curve sampling inside [0, 1) so
      // CatmullRomCurve3 never receives a negative parameter.
      const elapsed = Math.max(0, (time - startTime) / 1000);
      const count = Math.min(54, trafficRef.current);
      vehicleRoutes.forEach((route, index) => {
        const vehicle = dashboardVehicles[index];
        vehicle.visible = index < count;
        if (index >= count) return;
        const progress = (route.offset + elapsed * route.speed * 30) % 312 - 156;
        const x = route.axis ? progress : route.lane;
        const z = route.axis ? route.lane : progress;
        vehicle.position.set(x, 1.46, z);
        vehicle.rotation.y = route.axis ? Math.PI / 2 : 0;
      });

      scan.scale.setScalar(1 + ((elapsed * 0.2) % 1) * 62);
      scanMaterial.opacity = 0.24 * (1 - ((elapsed * 0.2) % 1));
      sensorMaterial.opacity = 0.5 + Math.sin(elapsed * 2.2) * 0.22;
      dataRings.forEach((ring, index) => {
        ring.rotation.z = elapsed * (index % 2 ? -0.025 : 0.02);
        (ring.material as THREE.MeshBasicMaterial).opacity = 0.23 + Math.sin(elapsed * 1.4 + index) * 0.12;
      });
      hologramRings.forEach((ring, index) => {
        ring.rotation.z = elapsed * (index === 0 ? 0.08 : -0.055);
        (ring.material as THREE.MeshBasicMaterial).opacity = (index === 0 ? 0.62 : 0.4) + Math.sin(elapsed * 1.7 + index) * 0.12;
      });
      foundationLightMarkers.forEach((marker, index) => {
        const scale = 0.88 + Math.sin(elapsed * 2.4 + index * 0.7) * 0.22;
        marker.scale.setScalar(scale);
      });
      districtHalos.forEach((halo, index) => {
        const scale = 1 + Math.sin(elapsed * 2 + index) * 0.12;
        halo.scale.setScalar(scale);
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
        camera.position.x = Math.cos(elapsed * 0.075) * 150;
        camera.position.z = Math.sin(elapsed * 0.075) * 150;
        camera.position.y = 79 + Math.sin(elapsed * 0.11) * 14;
        controls.target.set(0, 12, 0);
      }
      controls.update();
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(hoverFrame);
      observer.disconnect();
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
