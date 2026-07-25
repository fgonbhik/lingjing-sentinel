"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export type SmartAsset={id:string;label:string;category:string;details:string;meta:string};
type Props={nightMode:boolean;buildingLights:boolean;autoTour:boolean;topView:boolean;trafficDensity:number;onSelect:(asset:SmartAsset|null)=>void;onSceneStatus:(status:"loading"|"ready"|"degraded")=>void};
type Building={id:number;points:Array<[number,number]>;heightMeters?:number;name?:string;core?:boolean};

const districts=[
  {id:"chaoyang",label:"朝阳区",x:35,z:18,color:0x36e1ef,text:"商务活力 96.8 · 交通畅通"},
  {id:"dongcheng",label:"东城区",x:-27,z:-12,color:0x5be2ae,text:"城市治理 92.7 · 设备在线"},
  {id:"haidian",label:"海淀区",x:-43,z:39,color:0x6d9fff,text:"科技创新 94.2 · 算力充足"},
  {id:"fengtai",label:"丰台区",x:8,z:-48,color:0xffa45c,text:"交通枢纽 89.6 · 运行平稳"},
];

function makeLabel(text:string,color:string){
  const canvas=document.createElement("canvas");canvas.width=420;canvas.height=88;
  const context=canvas.getContext("2d")!;context.fillStyle="rgba(3,17,26,.9)";context.fillRect(0,0,420,88);context.strokeStyle=color;context.lineWidth=3;context.strokeRect(2,2,416,84);context.fillStyle="#ecfdff";context.font="600 29px Microsoft YaHei, sans-serif";context.fillText(text,22,56);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
  const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,transparent:true,depthTest:false}));sprite.scale.set(18,3.8,1);return sprite;
}

export default function SmartCityScene({nightMode,buildingLights,autoTour,topView,trafficDensity,onSelect,onSceneStatus}:Props){
  const host=useRef<HTMLDivElement>(null),cameraRef=useRef<THREE.PerspectiveCamera|null>(null),controlsRef=useRef<OrbitControls|null>(null);
  const nightRef=useRef(nightMode),lightsRef=useRef(buildingLights),tourRef=useRef(autoTour),trafficRef=useRef(trafficDensity);
  const applyModeRef=useRef<(night:boolean,lights:boolean)=>void>(()=>{});
  useEffect(()=>{nightRef.current=nightMode;lightsRef.current=buildingLights;applyModeRef.current(nightMode,buildingLights)},[nightMode,buildingLights]);
  useEffect(()=>{tourRef.current=autoTour},[autoTour]);useEffect(()=>{trafficRef.current=trafficDensity},[trafficDensity]);
  useEffect(()=>{const camera=cameraRef.current,controls=controlsRef.current;if(!camera||!controls)return;if(topView){camera.position.set(0,178,.1);controls.target.set(0,0,0)}else{camera.position.set(98,90,118);controls.target.set(0,8,0)}controls.update()},[topView]);

  useEffect(()=>{
    const element=host.current!;onSceneStatus("loading");
    const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(44,1,.1,620);camera.position.set(98,90,118);cameraRef.current=camera;
    const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:"high-performance"});renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.4));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.12;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;element.appendChild(renderer.domElement);
    const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.06;controls.minDistance=48;controls.maxDistance=245;controls.maxPolarAngle=Math.PI*.47;controls.target.set(0,8,0);controlsRef.current=controls;

    const ambient=new THREE.HemisphereLight(0xd8efff,0x25442e,1.8);scene.add(ambient);
    const sun=new THREE.DirectionalLight(0xfff1cf,3.4);sun.position.set(-70,125,80);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-130;sun.shadow.camera.right=130;sun.shadow.camera.top=130;sun.shadow.camera.bottom=-130;scene.add(sun);
    const groundMaterial=new THREE.MeshStandardMaterial({color:0x35533f,roughness:.9}),ground=new THREE.Mesh(new THREE.PlaneGeometry(250,250),groundMaterial);ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;scene.add(ground);
    const cityBase=new THREE.Mesh(new THREE.CylinderGeometry(106,110,1.4,96),new THREE.MeshStandardMaterial({color:0x263d35,roughness:.82}));cityBase.position.y=.65;scene.add(cityBase);

    const roadMaterial=new THREE.MeshStandardMaterial({color:0x33383b,roughness:.76,metalness:.08}),laneMaterial=new THREE.MeshBasicMaterial({color:0xf0dd9c,transparent:true,opacity:.78});
    const makeRoad=(width:number,length:number,x:number,z:number,rotation=0)=>{const road=new THREE.Mesh(new THREE.PlaneGeometry(width,length),roadMaterial);road.rotation.x=-Math.PI/2;road.rotation.z=rotation;road.position.set(x,1.42,z);scene.add(road);const lane=new THREE.Mesh(new THREE.PlaneGeometry(.12,length*.94),laneMaterial);lane.rotation.x=-Math.PI/2;lane.rotation.z=rotation;lane.position.set(x,1.45,z);scene.add(lane)};
    [-58,-30,0,31,60].forEach((x,index)=>makeRoad(index===2?8:5.2,210,x,0,index%2?.04:-.03));
    [-55,-26,5,35,64].forEach((z,index)=>makeRoad(index===2?8:5.2,210,0,z,Math.PI/2+(index%2?.03:-.025)));
    const ringMaterial=new THREE.MeshBasicMaterial({color:0x43cbd8,transparent:true,opacity:.23});[36,67,96].forEach(radius=>{const ring=new THREE.Mesh(new THREE.RingGeometry(radius-.24,radius+.24,128),ringMaterial);ring.rotation.x=-Math.PI/2;ring.position.y=1.5;scene.add(ring)});
    const river=new THREE.Mesh(new THREE.PlaneGeometry(240,11),new THREE.MeshStandardMaterial({color:0x2b7390,roughness:.23,metalness:.18,transparent:true,opacity:.88}));river.rotation.x=-Math.PI/2;river.rotation.z=-.12;river.position.set(0,1.53,-78);scene.add(river);

    const interactive:THREE.Object3D[]=[];
    districts.forEach(item=>{const group=new THREE.Group();group.position.set(item.x,1.6,item.z);const beam=new THREE.Mesh(new THREE.CylinderGeometry(.12,.28,12,12),new THREE.MeshBasicMaterial({color:item.color,transparent:true,opacity:.48}));beam.position.y=6;const head=new THREE.Mesh(new THREE.SphereGeometry(.72,18,12),new THREE.MeshStandardMaterial({color:item.color,emissive:item.color,emissiveIntensity:1.3}));head.position.y=12.6;head.userData.asset={id:item.id,label:item.label,category:"城市监管分区",details:item.text,meta:"AI 城市运行指数 · 实时更新"} satisfies SmartAsset;const halo=new THREE.Mesh(new THREE.RingGeometry(1.2,1.48,36),new THREE.MeshBasicMaterial({color:item.color,side:THREE.DoubleSide,transparent:true,opacity:.72}));halo.rotation.x=-Math.PI/2;halo.position.y=.2;const label=makeLabel(item.label,`#${item.color.toString(16).padStart(6,"0")}`);label.position.y=15;group.add(beam,head,halo,label);scene.add(group);interactive.push(head)});

    const sensorPositions=new Float32Array(420*3);for(let index=0;index<420;index++){const angle=Math.random()*Math.PI*2,radius=8+Math.sqrt(Math.random())*94;sensorPositions[index*3]=Math.cos(angle)*radius;sensorPositions[index*3+1]=2+Math.random()*7;sensorPositions[index*3+2]=Math.sin(angle)*radius}
    const sensorGeometry=new THREE.BufferGeometry();sensorGeometry.setAttribute("position",new THREE.BufferAttribute(sensorPositions,3));const sensorMaterial=new THREE.PointsMaterial({color:0x48e7f2,size:.38,transparent:true,opacity:.78}),sensors=new THREE.Points(sensorGeometry,sensorMaterial);scene.add(sensors);

    const buildingMaterial=new THREE.MeshStandardMaterial({color:0xbac6c8,roughness:.48,metalness:.18,vertexColors:true}),buildingGeometry=new THREE.BoxGeometry(1,1,1);
    const loadBuildings=async()=>{try{const response=await fetch("./beijing-buildings.json");if(!response.ok)throw new Error();const payload=await response.json() as {buildings:Building[]},records=payload.buildings.filter(item=>item.points.length>=3).slice(0,3200),mesh=new THREE.InstancedMesh(buildingGeometry,buildingMaterial,records.length),matrix=new THREE.Matrix4(),color=new THREE.Color();mesh.castShadow=true;mesh.receiveShadow=true;records.forEach((item,index)=>{const xs=item.points.map(point=>point[0]),zs=item.points.map(point=>point[1]),x=(Math.min(...xs)+Math.max(...xs))/3.5,z=(Math.min(...zs)+Math.max(...zs))/3.5,width=Math.max(.55,Math.min(7,(Math.max(...xs)-Math.min(...xs))/3.5)),depth=Math.max(.55,Math.min(7,(Math.max(...zs)-Math.min(...zs))/3.5)),height=Math.max(1.4,Math.min(55,(item.heightMeters||16)/4.4));matrix.compose(new THREE.Vector3(x,1.45+height/2,z),new THREE.Quaternion(),new THREE.Vector3(width,height,depth));mesh.setMatrixAt(index,matrix);color.setHSL(.52+Math.random()*.035,.12+Math.random()*.14,(item.core?.72:.55)+Math.random()*.17);mesh.setColorAt(index,color)});mesh.instanceMatrix.needsUpdate=true;mesh.instanceColor!.needsUpdate=true;scene.add(mesh);onSceneStatus("ready")}catch{onSceneStatus("degraded")}};void loadBuildings();

    const vehicleGeometry=new THREE.BoxGeometry(1.3,.55,.7),vehicleMaterial=new THREE.MeshStandardMaterial({color:0xeaf3f4,emissive:0x355b66,emissiveIntensity:.28}),vehicles=new THREE.InstancedMesh(vehicleGeometry,vehicleMaterial,54);vehicles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);vehicles.castShadow=true;scene.add(vehicles);
    const vehicleMatrix=new THREE.Matrix4(),vehicleRoutes=Array.from({length:54},(_,index)=>({axis:index%2,lane:[-58,-30,0,31,60][index%5]+(index%3-1)*1.35,offset:(index*19)%210,speed:.16+(index%7)*.018}));

    applyModeRef.current=(night,lights)=>{scene.background=new THREE.Color(night?0x020812:0x9ed8f1);scene.fog=new THREE.FogExp2(night?0x07121d:0xb9dce8,night?.006:.004);ambient.intensity=night?.55:1.8;sun.intensity=night?.3:3.4;groundMaterial.color.setHex(night?0x14251f:0x35533f);roadMaterial.color.setHex(night?0x111b23:0x33383b);buildingMaterial.emissive.setHex(night&&lights?0x387f91:0);buildingMaterial.emissiveIntensity=night&&lights?.5:0;ringMaterial.opacity=night?.5:.23};applyModeRef.current(nightRef.current,lightsRef.current);

    const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),pick=(event:PointerEvent)=>{const rect=renderer.domElement.getBoundingClientRect();pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);onSelect(raycaster.intersectObjects(interactive,false)[0]?.object.userData.asset||null)};renderer.domElement.addEventListener("pointerdown",pick);
    const resize=()=>{const width=Math.max(1,element.clientWidth),height=Math.max(1,element.clientHeight);camera.aspect=width/height;camera.updateProjectionMatrix();renderer.setSize(width,height,false)},observer=new ResizeObserver(resize);observer.observe(element);resize();
    const command=(event:Event)=>{const detail=(event as CustomEvent).detail;if(detail==="zoomIn")camera.position.multiplyScalar(.82);if(detail==="zoomOut")camera.position.multiplyScalar(1.18);if(detail==="reset"){camera.position.set(98,90,118);controls.target.set(0,8,0)}controls.update()};window.addEventListener("smart-city-camera",command);
    const clock=new THREE.Clock();let frame=0;const animate=()=>{frame=requestAnimationFrame(animate);const elapsed=clock.getElapsedTime(),count=Math.min(54,trafficRef.current);vehicles.count=count;vehicleRoutes.forEach((route,index)=>{if(index>=count)return;const progress=(route.offset+elapsed*route.speed*28)%210-105,x=route.axis?progress:route.lane,z=route.axis?route.lane:progress,rotation=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,route.axis?Math.PI/2:0,0));vehicleMatrix.compose(new THREE.Vector3(x,2.05,z),rotation,new THREE.Vector3(1,1,1));vehicles.setMatrixAt(index,vehicleMatrix)});vehicles.instanceMatrix.needsUpdate=true;sensorMaterial.opacity=.55+Math.sin(elapsed*2)*.22;if(tourRef.current){camera.position.x=Math.cos(elapsed*.075)*142;camera.position.z=Math.sin(elapsed*.075)*142;camera.position.y=82+Math.sin(elapsed*.11)*12;controls.target.set(0,9,0)}controls.update();renderer.render(scene,camera)};animate();
    return()=>{cancelAnimationFrame(frame);observer.disconnect();renderer.domElement.removeEventListener("pointerdown",pick);window.removeEventListener("smart-city-camera",command);controls.dispose();renderer.dispose();scene.traverse(object=>{const mesh=object as THREE.Mesh;mesh.geometry?.dispose?.();if(Array.isArray(mesh.material))mesh.material.forEach(material=>material.dispose());else mesh.material?.dispose?.()});element.replaceChildren()};
  },[onSceneStatus,onSelect]);
  return <div className="smart-city-scene" aria-label="北京城市运行监管三维场景"/>;
}
