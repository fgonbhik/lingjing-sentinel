import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,r as n}from"./framework-CXnKph_e.js";var r=e(t(),1),i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},a={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},o=1e3,s=1001,c=1002,l=1003,u=1004,d=1005,f=1006,p=1007,m=1008,h=1009,g=1010,_=1011,v=1012,y=1013,b=1014,x=1015,S=1016,C=1017,w=1018,T=1020,E=35902,D=35899,O=1021,k=1022,ee=1023,A=1026,te=1027,j=1028,M=1029,N=1030,P=1031,ne=1033,re=33776,ie=33777,ae=33778,oe=33779,se=35840,ce=35841,F=35842,le=35843,ue=36196,de=37492,fe=37496,pe=37488,me=37489,he=37490,ge=37491,_e=37808,ve=37809,ye=37810,be=37811,I=37812,xe=37813,Se=37814,Ce=37815,we=37816,Te=37817,Ee=37818,De=37819,Oe=37820,ke=37821,Ae=36492,je=36494,L=36495,Me=36283,Ne=36284,Pe=36285,R=36286,Fe=2300,z=2301,B=2302,Ie=2303,V=2400,Le=2401,Re=2402,ze=3200,Be=`srgb`,Ve=`srgb-linear`,He=`linear`,Ue=`srgb`,We=7680,Ge=35044,Ke=2e3;function qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Je(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ye(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Xe(){let e=Ye(`canvas`);return e.style.display=`block`,e}var Ze={},Qe=null;function $e(...e){let t=`THREE.`+e.shift();Qe?Qe(`log`,t,...e):console.log(t,...e)}function et(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function H(...e){e=et(e);let t=`THREE.`+e.shift();if(Qe)Qe(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function U(...e){e=et(e);let t=`THREE.`+e.shift();if(Qe)Qe(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function tt(...e){let t=e.join(` `);t in Ze||(Ze[t]=!0,H(...e))}function nt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var rt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},W=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},it=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),at=1234567,ot=Math.PI/180,st=180/Math.PI;function ct(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(it[e&255]+it[e>>8&255]+it[e>>16&255]+it[e>>24&255]+`-`+it[t&255]+it[t>>8&255]+`-`+it[t>>16&15|64]+it[t>>24&255]+`-`+it[n&63|128]+it[n>>8&255]+`-`+it[n>>16&255]+it[n>>24&255]+it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]).toLowerCase()}function lt(e,t,n){return Math.max(t,Math.min(n,e))}function ut(e,t){return(e%t+t)%t}function dt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ft(e,t,n){return e===t?0:(n-e)/(t-e)}function pt(e,t,n){return(1-n)*e+n*t}function mt(e,t,n,r){return pt(e,t,1-Math.exp(-n*r))}function ht(e,t=1){return t-Math.abs(ut(e,t*2)-t)}function gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function _t(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function vt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function yt(e,t){return e+Math.random()*(t-e)}function bt(e){return e*(.5-Math.random())}function xt(e){e!==void 0&&(at=e);let t=at+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function St(e){return e*ot}function Ct(e){return e*st}function wt(e){return(e&e-1)==0&&e!==0}function Tt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Et(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Dt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:H(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function kt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var At={DEG2RAD:ot,RAD2DEG:st,generateUUID:ct,clamp:lt,euclideanModulo:ut,mapLinear:dt,inverseLerp:ft,lerp:pt,damp:mt,pingpong:ht,smoothstep:gt,smootherstep:_t,randInt:vt,randFloat:yt,randFloatSpread:bt,seededRandom:xt,degToRad:St,radToDeg:Ct,isPowerOfTwo:wt,ceilPowerOfTwo:Tt,floorPowerOfTwo:Et,setQuaternionFromProperEuler:Dt,normalize:kt,denormalize:Ot},G=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:H(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mt.copy(this).projectOnVector(e),this.sub(Mt)}reflect(e){return this.sub(Mt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mt=new K,Nt=new jt,Pt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return tt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ft.makeScale(e,t)),this}rotate(e){return tt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ft.makeRotation(-e)),this}translate(e,t){return tt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ft.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ft=new Pt,It=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lt=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rt(){let e={enabled:!0,workingColorSpace:Ve,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Bt(e.r),e.g=Bt(e.g),e.b=Bt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?He:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return tt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return tt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ve]:{primaries:t,whitePoint:r,transfer:He,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),e}var zt=Rt();function Bt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Vt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ht,Ut=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ht===void 0&&(Ht=Ye(`canvas`)),Ht.width=e.width,Ht.height=e.height;let t=Ht.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ht}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ye(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Bt(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Bt(t[e]/255)*255):t[e]=Bt(t[e]);return{data:t,width:e.width,height:e.height}}else return H(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Wt=0,Gt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,`id`,{value:Wt++}),this.uuid=ct(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Kt(r[t].image)):e.push(Kt(r[t]))}else e=Kt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Kt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ut.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(H(`Texture: Unable to serialize Texture.`),{})}var qt=0,Jt=new K,Yt=class e extends W{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=s,i=s,a=f,o=m,c=ee,l=h,u=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,`id`,{value:qt++}),this.uuid=ct(),this.name=``,this.source=new Gt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jt).x}get height(){return this.source.getSize(Jt).y}get depth(){return this.source.getSize(Jt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){H(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){H(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case o:e.x-=Math.floor(e.x);break;case s:e.x=e.x<0?0:1;break;case c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case o:e.y-=Math.floor(e.y);break;case s:e.y=e.y<0?0:1;break;case c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=300,Yt.DEFAULT_ANISOTROPY=1;var Xt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zt=class extends W{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:f,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let r=new Yt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:f,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Gt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Qt=class extends Zt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$t=class extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=l,this.minFilter=l,this.wrapR=s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},en=class extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=l,this.minFilter=l,this.wrapR=s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/nn.setFromMatrixColumn(e,0).length(),i=1/nn.setFromMatrixColumn(e,1).length(),a=1/nn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(an,e,on)}lookAt(e,t,n){let r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),sn.crossVectors(n,ln),sn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),sn.crossVectors(n,ln)),sn.normalize(),cn.crossVectors(ln,sn),r[0]=sn.x,r[4]=cn.x,r[8]=ln.x,r[1]=sn.y,r[5]=cn.y,r[9]=ln.y,r[2]=sn.z,r[6]=cn.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],ee=r[6],A=r[10],te=r[14],j=r[3],M=r[7],N=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*j,i[4]=a*S+o*E+s*ee+c*M,i[8]=a*C+o*D+s*A+c*N,i[12]=a*w+o*O+s*te+c*P,i[1]=l*x+u*T+d*k+f*j,i[5]=l*S+u*E+d*ee+f*M,i[9]=l*C+u*D+d*A+f*N,i[13]=l*w+u*O+d*te+f*P,i[2]=p*x+m*T+h*k+g*j,i[6]=p*S+m*E+h*ee+g*M,i[10]=p*C+m*D+h*A+g*N,i[14]=p*w+m*O+h*te+g*P,i[3]=_*x+v*T+y*k+b*j,i[7]=_*S+v*E+y*ee+b*M,i[11]=_*C+v*D+y*A+b*N,i[15]=_*w+v*O+y*te+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ee=1/k;return e[0]=(o*O-s*D+c*E)*ee,e[1]=(r*D-n*O-i*E)*ee,e[2]=(m*S-h*x+g*b)*ee,e[3]=(d*x-u*S-f*b)*ee,e[4]=(s*T-a*O-c*w)*ee,e[5]=(t*O-r*T+i*w)*ee,e[6]=(h*y-p*S-g*v)*ee,e[7]=(l*S-d*y+f*v)*ee,e[8]=(a*D-o*T+c*C)*ee,e[9]=(n*T-t*D-i*C)*ee,e[10]=(p*x-m*y+g*_)*ee,e[11]=(u*y-l*x-f*_)*ee,e[12]=(o*w-a*E-s*C)*ee,e[13]=(t*E-n*w+r*C)*ee,e[14]=(m*v-p*b-h*_)*ee,e[15]=(l*b-u*v+d*_)*ee,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=nn.set(r[0],r[1],r[2]).length(),o=nn.set(r[4],r[5],r[6]).length(),s=nn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),rn.copy(this);let c=1/a,l=1/o,u=1/s;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=l,rn.elements[5]*=l,rn.elements[6]*=l,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nn=new K,rn=new tn,an=new K(0,0,0),on=new K(1,1,1),sn=new K,cn=new K,ln=new K,un=new tn,dn=new jt,fn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-lt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:H(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return un.makeRotationFromQuaternion(e),this.setFromRotationMatrix(un,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dn.setFromEuler(this),this.setFromQuaternion(dn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER=`XYZ`;var pn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},mn=0,hn=new K,gn=new jt,_n=new tn,vn=new K,yn=new K,bn=new K,xn=new jt,Sn=new K(1,0,0),Cn=new K(0,1,0),wn=new K(0,0,1),Tn={type:`added`},En={type:`removed`},Dn={type:`childadded`,child:null},On={type:`childremoved`,child:null},kn=class e extends W{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,`id`,{value:mn++}),this.uuid=ct(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new fn,r=new jt,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tn},normalMatrix:{value:new Pt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.multiply(gn),this}rotateOnWorldAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.premultiply(gn),this}rotateX(e){return this.rotateOnAxis(Sn,e)}rotateY(e){return this.rotateOnAxis(Cn,e)}rotateZ(e){return this.rotateOnAxis(wn,e)}translateOnAxis(e,t){return hn.copy(e).applyQuaternion(this.quaternion),this.position.add(hn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sn,e)}translateY(e){return this.translateOnAxis(Cn,e)}translateZ(e){return this.translateOnAxis(wn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vn.copy(e):vn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),yn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(yn,vn,this.up):_n.lookAt(vn,yn,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),gn.setFromRotationMatrix(_n),this.quaternion.premultiply(gn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(U(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null):U(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,e,bn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,xn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};kn.DEFAULT_UP=new K(0,1,0),kn.DEFAULT_MATRIX_AUTO_UPDATE=!0,kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends kn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},jn={type:`move`},Mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position),s=.02,l=.005;c.inputState.pinching&&o>s+l?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=s-l&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Fn={h:0,s:0,l:0};function In(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=zt.workingColorSpace){if(e=ut(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=In(i,r,e+1/3),this.g=In(i,r,e),this.b=In(i,r,e-1/3)}return zt.colorSpaceToWorking(this,r),this}setStyle(e,t=Be){function n(t){t!==void 0&&parseFloat(t)<1&&H(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:H(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);H(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Be){let n=Nn[e.toLowerCase()];return n===void 0?H(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bt(e.r),this.g=Bt(e.g),this.b=Bt(e.b),this}copyLinearToSRGB(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return zt.workingToColorSpace(Ln.copy(this),e),Math.round(lt(Ln.r*255,0,255))*65536+Math.round(lt(Ln.g*255,0,255))*256+Math.round(lt(Ln.b*255,0,255))}getHexString(e=Be){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,i=Ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Be){zt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Fn);let n=pt(Pn.h,Fn.h,t),r=pt(Pn.s,Fn.s,t),i=pt(Pn.l,Fn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new q;q.NAMES=Nn;var Rn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new q(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},zn=class extends kn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new K,Vn=new K,Hn=new K,Un=new K,Wn=new K,Gn=new K,Kn=new K,qn=new K,Jn=new K,Yn=new K,Xn=new Xt,Zn=new Xt,Qn=new Xt,$n=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new K,new K,new K,new K,new K,new K,new K,new K],nr=new K,rr=new er,ir=new K,ar=new K,or=new K,sr=new K,cr=new K,lr=new K,ur=new K,dr=new K,fr=new K,pr=new K;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=new K,gr=new G,_r=0,vr=class extends W{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,`id`,{value:_r++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ge,this.updateRanges=[],this.gpuType=x,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ot(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ot(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ot(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ot(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ot(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),r=kt(r,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},yr=class extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},br=class extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},xr=class extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sr=new er,Cr=new K,wr=new K,Tr=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Sr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Cr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(wr)),this.expandByPoint(Cr.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Er=0,Dr=new tn,Or=new kn,kr=new K,Ar=new er,jr=new er,Mr=new K,Nr=class e extends W{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,`id`,{value:Er++}),this.uuid=ct(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qe(e)?br:yr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Pt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dr.makeRotationFromQuaternion(e),this.applyMatrix4(Dr),this}rotateX(e){return Dr.makeRotationX(e),this.applyMatrix4(Dr),this}rotateY(e){return Dr.makeRotationY(e),this.applyMatrix4(Dr),this}rotateZ(e){return Dr.makeRotationZ(e),this.applyMatrix4(Dr),this}translate(e,t,n){return Dr.makeTranslation(e,t,n),this.applyMatrix4(Dr),this}scale(e,t,n){return Dr.makeScale(e,t,n),this.applyMatrix4(Dr),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new xr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&H(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){U(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(this.boundingBox.min,Ar.min),this.boundingBox.expandByPoint(Mr),Mr.addVectors(this.boundingBox.max,Ar.max),this.boundingBox.expandByPoint(Mr)):(this.boundingBox.expandByPoint(Ar.min),this.boundingBox.expandByPoint(Ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&U(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){U(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);return}if(e){let n=this.boundingSphere.center;if(Ar.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(Ar.min,jr.min),Ar.expandByPoint(Mr),Mr.addVectors(Ar.max,jr.max),Ar.expandByPoint(Mr)):(Ar.expandByPoint(jr.min),Ar.expandByPoint(jr.max))}Ar.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Mr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Mr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Mr.fromBufferAttribute(a,t),o&&(kr.fromBufferAttribute(e,t),Mr.add(kr)),r=Math.max(r,n.distanceToSquared(Mr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&U(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){U(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new vr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let c=new K,l=new K,u=new K,d=new G,f=new G,p=new G,m=new K,h=new K;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new K,y=new K,b=new K,x=new K;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mr.fromBufferAttribute(e,t),Mr.normalize(),e.setXYZ(t,Mr.x,Mr.y,Mr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vr(a,r,i)}if(this.index===null)return H(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ge,this.updateRanges=[],this.version=0,this.uuid=ct()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fr=new K,Ir=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix4(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyNormalMatrix(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.transformDirection(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ot(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ot(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ot(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ot(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ot(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),r=kt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),r=kt(r,this.array),i=kt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){$e(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new vr(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$e(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Lr=0,Rr=class extends W{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,`id`,{value:Lr++}),this.uuid=ct(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=We,this.stencilZFail=We,this.stencilZPass=We,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){H(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){H(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new q().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},zr=class extends Rr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new q(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Br,Vr=new K,Hr=new K,Ur=new K,Wr=new G,Gr=new G,Kr=new tn,qr=new K,Jr=new K,Yr=new K,Xr=new G,Zr=new G,Qr=new G,$r=class extends kn{constructor(e=new zr){if(super(),this.isSprite=!0,this.type=`Sprite`,Br===void 0){Br=new Nr;let e=new Pr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute(`position`,new Ir(e,3,0,!1)),Br.setAttribute(`uv`,new Ir(e,2,3,!1))}this.geometry=Br,this.material=e,this.center=new G(.5,.5),this.count=1}raycast(e,t){e.camera===null&&U(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Hr.setFromMatrixScale(this.matrixWorld),Kr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Ur.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ei(qr.set(-.5,-.5,0),Ur,a,Hr,r,i),ei(Jr.set(.5,-.5,0),Ur,a,Hr,r,i),ei(Yr.set(.5,.5,0),Ur,a,Hr,r,i),Xr.set(0,0),Zr.set(1,0),Qr.set(1,1);let o=e.ray.intersectTriangle(qr,Jr,Yr,!1,Vr);if(o===null&&(ei(Jr.set(-.5,.5,0),Ur,a,Hr,r,i),Zr.set(0,1),o=e.ray.intersectTriangle(qr,Yr,Jr,!1,Vr),o===null))return;let s=e.ray.origin.distanceTo(Vr);s<e.near||s>e.far||t.push({distance:s,point:Vr.clone(),uv:$n.getInterpolation(Vr,qr,Jr,Yr,Xr,Zr,Qr,new G),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ei(e,t,n,r,i,a){Wr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Gr.copy(Wr):(Gr.x=a*Wr.x-i*Wr.y,Gr.y=i*Wr.x+a*Wr.y),e.copy(t),e.x+=Gr.x,e.y+=Gr.y,e.applyMatrix4(Kr)}var ti=new K,ni=new K,ri=new K,ii=new K,ai=new K,oi=new K,si=new K,ci=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ni.copy(e).add(t).multiplyScalar(.5),ri.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(ni);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ri),o=ii.dot(this.direction),s=-ii.dot(ri),c=ii.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ni).addScaledVector(ri,d),f}intersectSphere(e,t){ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),r=ti.dot(ti)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,r,i){ai.subVectors(t,e),oi.subVectors(n,e),si.crossVectors(ai,oi);let a=this.direction.dot(si),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,e);let s=o*this.direction.dot(oi.crossVectors(ii,oi));if(s<0)return null;let c=o*this.direction.dot(ai.cross(ii));if(c<0||s+c>a)return null;let l=-o*ii.dot(si);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},J=class extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},li=new tn,ui=new ci,di=new Tr,fi=new K,pi=new K,mi=new K,hi=new K,gi=new K,_i=new K,vi=new K,yi=new K,Y=class extends kn{constructor(e=new Nr,t=new J){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){_i.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(gi.fromBufferAttribute(s,e),a?_i.addScaledVector(gi,r):_i.addScaledVector(gi.sub(t),r))}t.add(_i)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),di.copy(n.boundingSphere),di.applyMatrix4(i),ui.copy(e.ray).recast(e.near),!(di.containsPoint(ui.origin)===!1&&(ui.intersectSphere(di,fi)===null||ui.origin.distanceToSquared(fi)>(e.far-e.near)**2))&&(li.copy(i).invert(),ui.copy(e.ray).applyMatrix4(li),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=xi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=xi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=xi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=xi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function bi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;yi.copy(s),yi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(yi);return l<n.near||l>n.far?null:{distance:l,point:yi.clone(),object:e}}function xi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,pi),e.getVertexPosition(c,mi),e.getVertexPosition(l,hi);let u=bi(e,t,n,r,pi,mi,hi,vi);if(u){let e=new K;$n.getBarycoord(vi,pi,mi,hi,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};$n.getNormal(pi,mi,hi,t.normal),u.face=t,u.barycoord=e}return u}var Si=class extends Yt{constructor(e=null,t=1,n=1,r,i,a,o,s,c=l,u=l,d,f){super(null,a,o,s,c,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ci=class extends vr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wi=new tn,Ti=new tn,Ei=[],Di=new er,Oi=new tn,ki=new Y,Ai=new Tr,ji=class extends Y{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ci(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Oi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),Di.copy(e.boundingBox).applyMatrix4(wi),this.boundingBox.union(Di)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),Ai.copy(e.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(Ai)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ki.geometry=this.geometry,ki.material=this.material,ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ai.copy(this.boundingSphere),Ai.applyMatrix4(n),e.ray.intersectsSphere(Ai)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,wi),Ti.multiplyMatrices(n,wi),ki.matrixWorld=Ti,ki.raycast(e,Ei);for(let e=0,n=Ei.length;e<n;e++){let n=Ei[e];n.instanceId=i,n.object=this,t.push(n)}Ei.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Si(new Float32Array(r*this.count),r,this.count,j,x));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mi=new K,Ni=new K,Pi=new Pt,Fi=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Mi.subVectors(n,t).cross(Ni.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Mi),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pi.getNormalMatrix(e),r=this.coplanarPoint(Mi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ii=new Tr,Li=new G(.5,.5),Ri=new K,zi=class{constructor(e=new Fi,t=new Fi,n=new Fi,r=new Fi,i=new Fi,a=new Fi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ke,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476+Li.distanceTo(e.center),Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ri.x=r.normal.x>0?e.max.x:e.min.x,Ri.y=r.normal.y>0?e.max.y:e.min.y,Ri.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ri)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Bi=class extends Rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new q(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vi=new K,Hi=new K,Ui=new tn,Wi=new ci,Gi=new Tr,Ki=new K,qi=new K,Ji=class extends kn{constructor(e=new Nr,t=new Bi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Vi.fromBufferAttribute(t,e-1),Hi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Vi.distanceTo(Hi);e.setAttribute(`lineDistance`,new xr(n,1))}else H(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere),Gi.applyMatrix4(r),Gi.radius+=i,e.ray.intersectsSphere(Gi)===!1)return;Ui.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(Ui);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Yi(this,e,Wi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Yi(this,e,Wi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Yi(this,e,Wi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Yi(this,e,Wi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Yi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Vi.fromBufferAttribute(s,i),Hi.fromBufferAttribute(s,a),n.distanceSqToSegment(Vi,Hi,Ki,qi)>r)return;Ki.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ki);if(!(c<t.near||c>t.far))return{distance:c,point:qi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Xi=new K,Zi=new K,Qi=class extends Ji{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Xi.fromBufferAttribute(t,e),Zi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Xi.distanceTo(Zi);e.setAttribute(`lineDistance`,new xr(n,1))}else H(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},$i=class extends Rr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ea=new tn,ta=new ci,na=new Tr,ra=new K,ia=class extends kn{constructor(e=new Nr,t=new $i){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),na.radius+=i,e.ray.intersectsSphere(na)===!1)return;ea.copy(r).invert(),ta.copy(e.ray).applyMatrix4(ea);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ra.fromBufferAttribute(l,n),aa(ra,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ra.fromBufferAttribute(l,a),aa(ra,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function aa(e,t,n,r,i,a,o){let s=ta.distanceSqToPoint(e);if(s<n){let n=new K;ta.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var oa=class extends Yt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sa=class extends Yt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ca=class extends Yt{constructor(e,t,n=b,r,i,a,o=l,s=l,c,u=A,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,o,s,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},la=class extends ca{constructor(e,t=b,n=301,r,i,a=l,o=l,s,c=A){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,o,s,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ua=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},da=class e extends Nr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},fa=class e extends Nr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new K,l=new G;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new xr(a,3)),this.setAttribute(`normal`,new xr(o,3)),this.setAttribute(`uv`,new xr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},pa=class e extends Nr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new xr(u,3)),this.setAttribute(`normal`,new xr(d,3)),this.setAttribute(`uv`,new xr(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new G,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ma=class e extends pa{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ha=class e extends Nr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new xr(i,3)),this.setAttribute(`normal`,new xr(i.slice(),3)),this.setAttribute(`uv`,new xr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new K,r=new K,i=new K;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new K;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new K;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new K,t=new K,n=new K,r=new K,o=new G,s=new G,c=new G;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ga=new K,_a=new K,va=new K,ya=new $n,ba=class extends Nr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=10**4,r=Math.cos(ot*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=ya;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),ya.getNormal(va),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,!(l[0]===l[1]||l[1]===l[2]||l[2]===l[0]))for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=ya[c[e]],o=ya[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(va.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:va.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];ga.fromBufferAttribute(a,t),_a.fromBufferAttribute(a,n),d.push(ga.x,ga.y,ga.z),d.push(_a.x,_a.y,_a.z)}this.setAttribute(`position`,new xr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},xa=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){H(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new G:new K);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new K,r=[],i=[],a=[],o=new K,s=new tn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new K)}i[0]=new K,a[0]=new K;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(lt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(lt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sa=class extends xa{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new G){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ca=class extends Sa{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function wa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ta=new K,Ea=new K,Da=new wa,Oa=new wa,ka=new wa,Aa=class extends xa{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new K){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ea.subVectors(r[0],r[1]).add(r[0]),c=Ea);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ta.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ta),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Da.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Oa.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ka.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Da.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Oa.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ka.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Da.calc(s),Oa.calc(s),ka.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ja(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ma(e,t){let n=1-e;return n*n*t}function Na(e,t){return 2*(1-e)*e*t}function Pa(e,t){return e*e*t}function Fa(e,t,n,r){return Ma(e,t)+Na(e,n)+Pa(e,r)}function Ia(e,t){let n=1-e;return n*n*n*t}function La(e,t){let n=1-e;return 3*n*n*e*t}function Ra(e,t){return 3*(1-e)*e*e*t}function za(e,t){return e*e*e*t}function Ba(e,t,n,r,i){return Ia(e,t)+La(e,n)+Ra(e,r)+za(e,i)}var Va=class extends xa{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ba(e,r.x,i.x,a.x,o.x),Ba(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ha=class extends xa{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ba(e,r.x,i.x,a.x,o.x),Ba(e,r.y,i.y,a.y,o.y),Ba(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ua=class extends xa{constructor(e=new G,t=new G){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends xa{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends xa{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Fa(e,r.x,i.x,a.x),Fa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends xa{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Fa(e,r.x,i.x,a.x),Fa(e,r.y,i.y,a.y),Fa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qa=class extends xa{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new G){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ja(o,s.x,c.x,l.x,u.x),ja(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this}},Ja=Object.freeze({__proto__:null,ArcCurve:Ca,CatmullRomCurve3:Aa,CubicBezierCurve:Va,CubicBezierCurve3:Ha,EllipseCurve:Sa,LineCurve:Ua,LineCurve3:Wa,QuadraticBezierCurve:Ga,QuadraticBezierCurve3:Ka,SplineCurve:qa}),Ya=class extends xa{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Ja[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Ja[n.type]().fromJSON(n))}return this}},Xa=class extends Ya{constructor(e){super(),this.type=`Path`,this.currentPoint=new G,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ua(this.currentPoint.clone(),new G(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Ga(this.currentPoint.clone(),new G(e,t),new G(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Va(this.currentPoint.clone(),new G(e,t),new G(n,r),new G(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new qa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Sa(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Za=class extends Xa{constructor(e){super(e),this.uuid=ct(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Xa().fromJSON(n))}return this}};function Qa(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=$a(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=oo(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return to(a,o,n,s,c,l,0),o}function $a(e,t,n,r,i){let a;if(i===jo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Oo(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Oo(i/r|0,e[i],e[i+1],a);return a&&bo(a,a.next)&&(ko(a),a=a.next),a}function eo(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(bo(n,n.next)||yo(n.prev,n,n.next)===0)){if(ko(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function to(e,t,n,r,i,a,o){if(!e)return;!o&&a&&fo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ro(e,r,i,a):no(e)){t.push(c.i,e.i,l.i),ko(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=io(eo(e),t),to(e,t,n,r,i,a,2)):o===2&&ao(e,t,n,r,i,a):to(eo(e),t,n,r,i,a,1);break}}}function no(e){let t=e.prev,n=e,r=e.next;if(yo(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&_o(i,s,a,c,o,l,m.x,m.y)&&yo(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ro(e,t,n,r){let i=e.prev,a=e,o=e.next;if(yo(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=mo(p,m,t,n,r),v=mo(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&_o(s,u,c,d,l,f,y.x,y.y)&&yo(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&_o(s,u,c,d,l,f,b.x,b.y)&&yo(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&_o(s,u,c,d,l,f,y.x,y.y)&&yo(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&_o(s,u,c,d,l,f,b.x,b.y)&&yo(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function io(e,t){let n=e;do{let r=n.prev,i=n.next.next;!bo(r,i)&&xo(r,n,n.next,i)&&To(r,i)&&To(i,r)&&(t.push(r.i,n.i,i.i),ko(n),ko(n.next),n=e=i),n=n.next}while(n!==e);return eo(n)}function ao(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&vo(o,e)){let s=Do(o,e);o=eo(o,o.next),s=eo(s,s.next),to(o,t,n,r,i,a,0),to(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function oo(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=$a(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ho(o))}i.sort(so);for(let e=0;e<i.length;e++)n=co(i[e],n);return n}function so(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function co(e,t){let n=lo(e,t);if(!n)return t;let r=Do(n,e);return eo(r,r.next),eo(n,n.next)}function lo(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(bo(e,n))return n;do{if(bo(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&go(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);To(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&uo(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function uo(e,t){return yo(e.prev,e,t.prev)<0&&yo(t.next,e,e.next)<0}function fo(e,t,n,r){let i=e;do i.z===0&&(i.z=mo(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,po(i)}function po(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function mo(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ho(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function go(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function _o(e,t,n,r,i,a,o,s){return!(e===o&&t===s)&&go(e,t,n,r,i,a,o,s)}function vo(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!wo(e,t)&&(To(e,t)&&To(t,e)&&Eo(e,t)&&(yo(e.prev,e,t.prev)||yo(e,t.prev,t))||bo(e,t)&&yo(e.prev,e,e.next)>0&&yo(t.prev,t,t.next)>0)}function yo(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function bo(e,t){return e.x===t.x&&e.y===t.y}function xo(e,t,n,r){let i=Co(yo(e,t,n)),a=Co(yo(e,t,r)),o=Co(yo(n,r,e)),s=Co(yo(n,r,t));return!!(i!==a&&o!==s||i===0&&So(e,n,t)||a===0&&So(e,r,t)||o===0&&So(n,e,r)||s===0&&So(n,t,r))}function So(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Co(e){return e>0?1:e<0?-1:0}function wo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&xo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function To(e,t){return yo(e.prev,e,e.next)<0?yo(e,t,e.next)>=0&&yo(e,e.prev,t)>=0:yo(e,t,e.prev)<0||yo(e,e.next,t)<0}function Eo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Do(e,t){let n=Ao(e.i,e.x,e.y),r=Ao(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Oo(e,t,n,r){let i=Ao(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ko(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ao(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Mo=class{static triangulate(e,t,n=2){return Qa(e,t,n)}},No=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Po(e),Fo(n,e);let a=e.length;t.forEach(Po);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Fo(n,t[e]);let o=Mo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Po(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Fo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Io=class e extends Nr{constructor(e=new Za([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new xr(r,3)),this.setAttribute(`uv`,new xr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0?!0:t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Lo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new K,b=new K,x=new K}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!No.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];No.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=1e-10;t*t;let n=e[0];for(let t=1;t<=e.length;t++){let r=t%e.length,i=e[r],a=i.x-n.x,o=i.y-n.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(n.x),Math.abs(n.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),t--;continue}n=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||U(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function ee(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new G(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new G(r/a,i/a)}let A=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),A[e]=ee(D[e],D[n],D[r]);let te=[],j,M=A.concat();for(let e=0,t=E;e<t;e++){let t=w[e];j=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),j[e]=ee(t[e],t[r],t[i]);te.push(j),M=M.concat(j)}let N;if(p===0)N=No.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],A[t],a);oe(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];j=te[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],j[e],a);oe(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}N=No.triangulateShape(e,t)}let P=N.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],M[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),oe(x.x,x.y,x.z)):oe(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],M[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),oe(x.x,x.y,x.z)):oe(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],A[e],r);oe(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];j=te[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],j[e],r);_?oe(i.x,i.y+g[s-1].y,g[s-1].x+n):oe(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<P;e++){let n=N[e];se(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<P;e++){let n=N[e];se(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<P;e++){let t=N[e];se(t[2],t[1],t[0])}for(let e=0;e<P;e++){let t=N[e];se(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ce(t+r+n,t+i+n,t+i+a,t+r+a)}}}function oe(e,t,n){a.push(e),a.push(t),a.push(n)}function se(e,t,i){F(e),F(t),F(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);le(o[0]),le(o[1]),le(o[2])}function ce(e,t,i,a){F(e),F(t),F(a),F(t),F(i),F(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);le(s[0]),le(s[1]),le(s[3]),le(s[1]),le(s[2]),le(s[3])}function F(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function le(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ro(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ja[i.type]().fromJSON(i)),new e(r,t.options)}},Lo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new G(a,o),new G(s,c),new G(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new G(o,1-c),new G(l,1-d),new G(f,1-m),new G(h,1-_)]:[new G(s,1-c),new G(u,1-d),new G(p,1-m),new G(g,1-_)]}};function Ro(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var zo=class e extends ha{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Bo=class e extends Nr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Vo=class e extends Nr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new K,p=new G;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new xr(s,3)),this.setAttribute(`normal`,new xr(c,3)),this.setAttribute(`uv`,new xr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ho=class e extends Nr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new K,d=new K,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Uo=class e extends Nr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new K,f=new K,p=new K;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Wo=class e extends Nr{constructor(e=new Ka(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new K,s=new K,c=new G,l=new K,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new xr(u,3)),this.setAttribute(`normal`,new xr(d,3)),this.setAttribute(`uv`,new xr(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Ja[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Go(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(qo(i))i.isRenderTargetTexture?(H(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(qo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function Ko(e){let t={};for(let n=0;n<e.length;n++){let r=Go(e[n]);for(let e in r)t[e]=r[e]}return t}function qo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Jo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Yo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}var Xo={clone:Go,merge:Ko},Zo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$o=class extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zo,this.fragmentShader=Qo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Go(e.uniforms),this.uniformsGroups=Jo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new q().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Pt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new tn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},es=class extends $o{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},X=class extends Rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ts=class extends X{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new G(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,`reflectivity`,{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new q(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new q(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new q(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ns=class extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ze,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rs=class extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},is=class extends Bi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type=`LineDashedMaterial`,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function as(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var os=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ss=class extends os{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:V,endingEnd:V}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Le:i=e,o=2*t-n;break;case Re:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Le:a=e,s=2*n-t;break;case Re:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},cs=class extends os{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ls=class extends os{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},us=class extends os{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},ds=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=as(t,this.TimeBufferType),this.values=as(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:as(e.times,Array),values:as(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ls(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ss(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new us(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fe:t=this.InterpolantFactoryMethodDiscrete;break;case z:t=this.InterpolantFactoryMethodLinear;break;case B:t=this.InterpolantFactoryMethodSmooth;break;case Ie:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return H(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fe;case this.InterpolantFactoryMethodLinear:return z;case this.InterpolantFactoryMethodSmooth:return B;case this.InterpolantFactoryMethodBezier:return Ie}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(U(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(U(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){U(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){U(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Je(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){U(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===B,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ds.prototype.ValueTypeName=``,ds.prototype.TimeBufferType=Float32Array,ds.prototype.ValueBufferType=Float32Array,ds.prototype.DefaultInterpolation=z;var fs=class extends ds{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName=`bool`,fs.prototype.ValueBufferType=Array,fs.prototype.DefaultInterpolation=Fe,fs.prototype.InterpolantFactoryMethodLinear=void 0,fs.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends ds{constructor(e,t,n,r){super(e,t,n,r)}};ps.prototype.ValueTypeName=`color`;var ms=class extends ds{constructor(e,t,n,r){super(e,t,n,r)}};ms.prototype.ValueTypeName=`number`;var hs=class extends os{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)jt.slerpFlat(i,0,a,c-o,a,c,s);return i}},gs=class extends ds{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new hs(this.times,this.values,this.getValueSize(),e)}};gs.prototype.ValueTypeName=`quaternion`,gs.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends ds{constructor(e,t,n){super(e,t,n)}};_s.prototype.ValueTypeName=`string`,_s.prototype.ValueBufferType=Array,_s.prototype.DefaultInterpolation=Fe,_s.prototype.InterpolantFactoryMethodLinear=void 0,_s.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends ds{constructor(e,t,n,r){super(e,t,n,r)}};vs.prototype.ValueTypeName=`vector`;var ys={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(bs(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!bs(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function bs(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var xs=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Ss=class{constructor(e){this.manager=e===void 0?xs:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ss.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Cs=new WeakMap,ws=class extends Ss{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=ys.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Cs.get(a);e===void 0&&(e=[],Cs.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Ye(`img`);function s(){l(),t&&t(this);let n=Cs.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Cs.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),ys.remove(`image:${e}`);let n=Cs.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Cs.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ys.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Ts=class extends Ss{constructor(e){super(e)}load(e,t,n,r){let i=new Yt,a=new ws(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Es=class extends kn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new q(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ds=class extends Es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new q(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Os=new tn,ks=new K,As=new K,js=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=h,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zi,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ks.setFromMatrixPosition(e.matrixWorld),t.position.copy(ks),As.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(As),t.updateMatrixWorld(),Os.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Os,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Os)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ms=new K,Ns=new jt,Ps=new K,Fs=class extends kn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Ke,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ms,Ns,Ps),Ps.x===1&&Ps.y===1&&Ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ms,Ns,Ps.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ms,Ns,Ps),Ps.x===1&&Ps.y===1&&Ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ms,Ns,Ps.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Is=new K,Ls=new G,Rs=new G,zs=class extends Fs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=st*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ot*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return st*2*Math.atan(Math.tan(ot*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Is.x,Is.y).multiplyScalar(-e/Is.z),Is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Is.x,Is.y).multiplyScalar(-e/Is.z)}getViewSize(e,t){return this.getViewBounds(e,Ls,Rs),t.subVectors(Rs,Ls)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ot*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bs=class extends js{constructor(){super(new zs(90,1,.5,500)),this.isPointLightShadow=!0}},Vs=class extends Es{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Bs}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Hs=class extends Fs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Us=class extends js{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ws=class extends Es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new Us}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Gs=-90,Ks=1,qs=class extends kn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new zs(Gs,Ks,e,t);r.layers=this.layers,this.add(r);let i=new zs(Gs,Ks,e,t);i.layers=this.layers,this.add(i);let a=new zs(Gs,Ks,e,t);a.layers=this.layers,this.add(a);let o=new zs(Gs,Ks,e,t);o.layers=this.layers,this.add(o);let s=new zs(Gs,Ks,e,t);s.layers=this.layers,this.add(s);let c=new zs(Gs,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Js=class extends zs{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ys=`\\[\\]\\.:\\/`,Xs=RegExp(`[`+Ys+`]`,`g`),Zs=`[^`+Ys+`]`,Qs=`[^`+Ys.replace(`\\.`,``)+`]`,$s=`((?:WC+[\\/:])*)`.replace(`WC`,Zs),ec=`(WCOD+)?`.replace(`WCOD`,Qs),tc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Zs),nc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Zs),rc=RegExp(`^`+$s+ec+tc+nc+`$`),ic=[`material`,`materials`,`bones`,`map`],ac=class{constructor(e,t,n){let r=n||oc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},oc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Xs,``)}static parseTrackName(e){let t=rc.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ic.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){H(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){U(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){U(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){U(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){U(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){U(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;U(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oc.Composite=ac,oc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},oc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},oc.prototype.GetterByBindingType=[oc.prototype._getValue_direct,oc.prototype._getValue_array,oc.prototype._getValue_arrayElement,oc.prototype._getValue_toArray],oc.prototype.SetterByBindingTypeAndVersioning=[[oc.prototype._setValue_direct,oc.prototype._setValue_direct_setNeedsUpdate,oc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oc.prototype._setValue_array,oc.prototype._setValue_array_setNeedsUpdate,oc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oc.prototype._setValue_arrayElement,oc.prototype._setValue_arrayElement_setNeedsUpdate,oc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oc.prototype._setValue_fromArray,oc.prototype._setValue_fromArray_setNeedsUpdate,oc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sc=new tn,cc=class{constructor(e,t,n=0,r=1/0){this.ray=new ci(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new pn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):U(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return sc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sc),this}intersectObject(e,t=!0,n=[]){return uc(e,this,n,t),n.sort(lc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)uc(e[r],this,n,t);return n.sort(lc),n}};function lc(e,t){return e.distance-t.distance}function uc(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)uc(r[e],t,n,!0)}}var dc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,H(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},fc=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=lt(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var pc=class extends Qi{constructor(e=10,t=10,n=4473924,r=8947848){n=new q(n),r=new q(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new Nr;l.setAttribute(`position`,new xr(s,3)),l.setAttribute(`color`,new xr(c,3));let u=new Bi({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){this.geometry.dispose(),this.material.dispose()}},mc=class extends Qi{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],i=new Nr;i.setIndex(new vr(n,1)),i.setAttribute(`position`,new xr(r,3)),super(i,new Bi({color:t,toneMapped:!1})),this.box=e,this.type=`Box3Helper`,this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},hc=class extends W{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){H(`Controls: connect() now requires an element.`);return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function gc(e,t,n,r){let i=_c(r);switch(n){case O:return e*t;case j:return e*t/i.components*i.byteLength;case M:return e*t/i.components*i.byteLength;case N:return e*t*2/i.components*i.byteLength;case P:return e*t*2/i.components*i.byteLength;case k:return e*t*3/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case re:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ae:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ce:case le:return Math.max(e,16)*Math.max(t,8)/4;case se:case F:return Math.max(e,8)*Math.max(t,8)/2;case ue:case de:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fe:case he:case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ye:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case I:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ke:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ae:case je:case L:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pe:case R:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function _c(e){switch(e){case h:case g:return{byteLength:1,components:1};case v:case _:case S:return{byteLength:2,components:1};case C:case w:return{byteLength:2,components:4};case b:case y:case x:return{byteLength:4,components:1};case E:case D:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?H(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function vc(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function yc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var bc={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},xc={basic:{uniforms:Ko([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:bc.meshbasic_vert,fragmentShader:bc.meshbasic_frag},lambert:{uniforms:Ko([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new q(0)},envMapIntensity:{value:1}}]),vertexShader:bc.meshlambert_vert,fragmentShader:bc.meshlambert_frag},phong:{uniforms:Ko([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bc.meshphong_vert,fragmentShader:bc.meshphong_frag},standard:{uniforms:Ko([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bc.meshphysical_vert,fragmentShader:bc.meshphysical_frag},toon:{uniforms:Ko([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new q(0)}}]),vertexShader:bc.meshtoon_vert,fragmentShader:bc.meshtoon_frag},matcap:{uniforms:Ko([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:bc.meshmatcap_vert,fragmentShader:bc.meshmatcap_frag},points:{uniforms:Ko([Z.points,Z.fog]),vertexShader:bc.points_vert,fragmentShader:bc.points_frag},dashed:{uniforms:Ko([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bc.linedashed_vert,fragmentShader:bc.linedashed_frag},depth:{uniforms:Ko([Z.common,Z.displacementmap]),vertexShader:bc.depth_vert,fragmentShader:bc.depth_frag},normal:{uniforms:Ko([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:bc.meshnormal_vert,fragmentShader:bc.meshnormal_frag},sprite:{uniforms:Ko([Z.sprite,Z.fog]),vertexShader:bc.sprite_vert,fragmentShader:bc.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bc.background_vert,fragmentShader:bc.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:bc.backgroundCube_vert,fragmentShader:bc.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bc.cube_vert,fragmentShader:bc.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bc.equirect_vert,fragmentShader:bc.equirect_frag},distance:{uniforms:Ko([Z.common,Z.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bc.distance_vert,fragmentShader:bc.distance_frag},shadow:{uniforms:Ko([Z.lights,Z.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:bc.shadow_vert,fragmentShader:bc.shadow_frag}};xc.physical={uniforms:Ko([xc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:bc.meshphysical_vert,fragmentShader:bc.meshphysical_frag};var Sc={r:0,b:0,g:0},Cc=new tn,wc=new Pt;wc.set(-1,0,0,0,1,0,0,0,1);function Tc(e,t,n,r,i,a){let o=new q(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Y(new da(1,1,1),new $o({name:`BackgroundCubeMaterial`,uniforms:Go(xc.backgroundCube.uniforms),vertexShader:xc.backgroundCube.vertexShader,fragmentShader:xc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,`envMap`,{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Cc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(wc),l.material.toneMapped=zt.getTransfer(i.colorSpace)!==Ue,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Y(new Bo(2,2),new $o({name:`BackgroundMaterial`,uniforms:Go(xc.background.uniforms),vertexShader:xc.background.vertexShader,fragmentShader:xc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,`map`,{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=zt.getTransfer(i.colorSpace)!==Ue,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Sc,Yo(e)),n.buffers.color.setClear(Sc.r,Sc.g,Sc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ec(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Dc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Oc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(H(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&H(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function kc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Fi,s=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ac=4,jc=[.125,.215,.35,.446,.526,.582],Mc=20,Nc=256,Pc=new Hs,Fc=new q,Ic=null,Lc=0,Rc=0,zc=!1,Bc=new K,Vc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Bc}=i;Ic=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ic,Lc,Rc),this._renderer.xr.enabled=zc,e.scissorTest=!1,Wc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ic=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:f,minFilter:f,generateMipmaps:!1,type:S,format:ee,colorSpace:Ve,depthBuffer:!1},r=Uc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hc(r)),this._blurMaterial=Kc(r,e,t),this._ggxMaterial=Gc(r,e,t)}return r}_compileMaterial(e){let t=new Y(new Nr,e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,n,r,i){let a=new zs(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Fc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Y(new da,new J({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Fc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Wc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Wc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Pc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ac?n-d+Ac:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Wc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Pc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Wc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Pc)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&U(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Mc-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Mc;m>Mc&&H(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mc}`);let h=[],g=0;for(let e=0;e<Mc;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Wc(t,3*v*(r>_-Ac?r-_+Ac:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Pc)}};function Hc(e){let t=[],n=[],r=[],i=e,a=e-Ac+1+jc.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Ac?s=jc[o-e+Ac-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Nr;h.setAttribute(`position`,new vr(f,3)),h.setAttribute(`uv`,new vr(p,2)),h.setAttribute(`faceIndex`,new vr(m,1)),r.push(new Y(h,null)),i>Ac&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Uc(e,t,n){let r=new Qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Wc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Gc(e,t,n){return new $o({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Nc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Kc(e,t,n){let r=new Float32Array(Mc),i=new K(0,1,0);return new $o({name:`SphericalGaussianBlur`,defines:{n:Mc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qc(){return new $o({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jc(){return new $o({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xc=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new da(5,5,5),i=new $o({name:`CubemapFromEquirect`,uniforms:Go(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Y(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=f),new qs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Zc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new Xc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Vc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Vc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Qc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&tt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function $c(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?br:yr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function el(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function tl(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:U(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function nl(e,t,n){let r=new WeakMap,i=new Xt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new $t(h,p,m,u);g.type=x,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new G(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function rl(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var il={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function al(e,t,n,r,i,a){let o=new Qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new ca(t,n):void 0}),s=new Qt(t,n,{type:S,depthBuffer:!1,stencilBuffer:!1}),c=new Nr;c.setAttribute(`position`,new xr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new xr([0,2,0,0,2,0],2));let l=new es({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Y(c,l),d=new Hs(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},zt.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=il[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var ol=new Yt,sl=new ca(1,1),cl=new $t,ll=new en,ul=new oa,dl=[],fl=[],pl=new Float32Array(16),ml=new Float32Array(9),hl=new Float32Array(4);function gl(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=dl[i];if(a===void 0&&(a=new Float32Array(i),dl[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function _l(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function vl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function yl(e,t){let n=fl[t];n===void 0&&(n=new Int32Array(t),fl[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function bl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function xl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_l(n,t))return;e.uniform2fv(this.addr,t),vl(n,t)}}function Sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_l(n,t))return;e.uniform3fv(this.addr,t),vl(n,t)}}function Cl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_l(n,t))return;e.uniform4fv(this.addr,t),vl(n,t)}}function wl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(_l(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),vl(n,t)}else{if(_l(n,r))return;hl.set(r),e.uniformMatrix2fv(this.addr,!1,hl),vl(n,r)}}function Tl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(_l(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),vl(n,t)}else{if(_l(n,r))return;ml.set(r),e.uniformMatrix3fv(this.addr,!1,ml),vl(n,r)}}function El(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(_l(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),vl(n,t)}else{if(_l(n,r))return;pl.set(r),e.uniformMatrix4fv(this.addr,!1,pl),vl(n,r)}}function Dl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_l(n,t))return;e.uniform2iv(this.addr,t),vl(n,t)}}function kl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_l(n,t))return;e.uniform3iv(this.addr,t),vl(n,t)}}function Al(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_l(n,t))return;e.uniform4iv(this.addr,t),vl(n,t)}}function jl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ml(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_l(n,t))return;e.uniform2uiv(this.addr,t),vl(n,t)}}function Nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_l(n,t))return;e.uniform3uiv(this.addr,t),vl(n,t)}}function Pl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_l(n,t))return;e.uniform4uiv(this.addr,t),vl(n,t)}}function Fl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(sl.compareFunction=n.isReversedDepthBuffer()?518:515,a=sl):a=ol,n.setTexture2D(t||a,i)}function Il(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ll,i)}function Ll(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ul,i)}function Rl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||cl,i)}function zl(e){switch(e){case 5126:return bl;case 35664:return xl;case 35665:return Sl;case 35666:return Cl;case 35674:return wl;case 35675:return Tl;case 35676:return El;case 5124:case 35670:return Dl;case 35667:case 35671:return Ol;case 35668:case 35672:return kl;case 35669:case 35673:return Al;case 5125:return jl;case 36294:return Ml;case 36295:return Nl;case 36296:return Pl;case 35678:case 36198:case 36298:case 36306:case 35682:return Fl;case 35679:case 36299:case 36307:return Il;case 35680:case 36300:case 36308:case 36293:return Ll;case 36289:case 36303:case 36311:case 36292:return Rl}}function Bl(e,t){e.uniform1fv(this.addr,t)}function Vl(e,t){let n=gl(t,this.size,2);e.uniform2fv(this.addr,n)}function Hl(e,t){let n=gl(t,this.size,3);e.uniform3fv(this.addr,n)}function Ul(e,t){let n=gl(t,this.size,4);e.uniform4fv(this.addr,n)}function Wl(e,t){let n=gl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Gl(e,t){let n=gl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Kl(e,t){let n=gl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ql(e,t){e.uniform1iv(this.addr,t)}function Jl(e,t){e.uniform2iv(this.addr,t)}function Yl(e,t){e.uniform3iv(this.addr,t)}function Xl(e,t){e.uniform4iv(this.addr,t)}function Zl(e,t){e.uniform1uiv(this.addr,t)}function Ql(e,t){e.uniform2uiv(this.addr,t)}function $l(e,t){e.uniform3uiv(this.addr,t)}function eu(e,t){e.uniform4uiv(this.addr,t)}function tu(e,t,n){let r=this.cache,i=t.length,a=yl(n,i);_l(r,a)||(e.uniform1iv(this.addr,a),vl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?sl:ol;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function nu(e,t,n){let r=this.cache,i=t.length,a=yl(n,i);_l(r,a)||(e.uniform1iv(this.addr,a),vl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ll,a[e])}function ru(e,t,n){let r=this.cache,i=t.length,a=yl(n,i);_l(r,a)||(e.uniform1iv(this.addr,a),vl(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ul,a[e])}function iu(e,t,n){let r=this.cache,i=t.length,a=yl(n,i);_l(r,a)||(e.uniform1iv(this.addr,a),vl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||cl,a[e])}function au(e){switch(e){case 5126:return Bl;case 35664:return Vl;case 35665:return Hl;case 35666:return Ul;case 35674:return Wl;case 35675:return Gl;case 35676:return Kl;case 5124:case 35670:return ql;case 35667:case 35671:return Jl;case 35668:case 35672:return Yl;case 35669:case 35673:return Xl;case 5125:return Zl;case 36294:return Ql;case 36295:return $l;case 36296:return eu;case 35678:case 36198:case 36298:case 36306:case 35682:return tu;case 35679:case 36299:case 36307:return nu;case 35680:case 36300:case 36308:case 36293:return ru;case 36289:case 36303:case 36311:case 36292:return iu}}var ou=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zl(t.type)}},su=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=au(t.type)}},cu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},lu=/(\w+)(\])?(\[|\.)?/g;function uu(e,t){e.seq.push(t),e.map[t.id]=t}function du(e,t,n){let r=e.name,i=r.length;for(lu.lastIndex=0;;){let a=lu.exec(r),o=lu.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){uu(n,l===void 0?new ou(s,e,t):new su(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new cu(s),uu(n,e)),n=e}}}var fu=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);du(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function pu(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var mu=37297,hu=0;function gu(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var _u=new Pt;function vu(e){zt._getMatrix(_u,zt.workingColorSpace,e);let t=`mat3( ${_u.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(e)){case He:return[t,`LinearTransferOETF`];case Ue:return[t,`sRGBTransferOETF`];default:return H(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function yu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+gu(e.getShaderSource(t),r)}else return i}function bu(e,t){let n=vu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var xu={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Su(e,t){let n=xu[t];return n===void 0?(H(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Cu=new K;function wu(){return zt.getLuminanceCoefficients(Cu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Cu.x.toFixed(4)}, ${Cu.y.toFixed(4)}, ${Cu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Tu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ou).join(`
`)}function Eu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Du(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ou(e){return e!==``}function ku(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Au(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ju=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(e){return e.replace(ju,Pu)}var Nu=new Map;function Pu(e,t){let n=bc[t];if(n===void 0){let e=Nu.get(t);if(e!==void 0)n=bc[e],H(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Mu(n)}var Fu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(e){return e.replace(Fu,Lu)}function Lu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ru(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var zu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Bu(e){return zu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Vu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Hu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Vu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Uu={302:`ENVMAP_MODE_REFRACTION`};function Wu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Uu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Gu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ku(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Gu[e.combine]||`ENVMAP_BLENDING_NONE`}function qu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ju(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Bu(n),l=Hu(n),u=Wu(n),d=Ku(n),f=qu(n),p=Tu(n),m=Eu(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ou).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ou).join(`
`),_.length>0&&(_+=`
`)):(g=[Ru(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ou).join(`
`),_=[Ru(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:bc.tonemapping_pars_fragment,n.toneMapping===0?``:Su(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,bc.colorspace_pars_fragment,bu(`linearToOutputTexel`,n.outputColorSpace),wu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ou).join(`
`)),o=Mu(o),o=ku(o,n),o=Au(o,n),s=Mu(s),s=ku(s,n),s=Au(s,n),o=Iu(o),s=Iu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=pu(i,i.VERTEX_SHADER,y),S=pu(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=yu(i,x,`vertex`),n=yu(i,S,`fragment`);U(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):H(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new fu(i,h),T=Du(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,mu)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hu++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Yu=0,Xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zu(e),t.set(e,n)),n}},Zu=class{constructor(e){this.id=Yu++,this.code=e,this.usedTimes=0}};function Qu(e){return e===1030||e===37490||e===36285}function $u(e,t,n,r,i,a){let o=new pn,s=new Xu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&H(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,ee;if(C){let e=xc[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,ee=t.id}let A=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,N=!!i.map,P=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.dispersion>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=ue&&!!i.anisotropyMap,_e=de&&!!i.clearcoatMap,ve=de&&!!i.clearcoatNormalMap,ye=de&&!!i.clearcoatRoughnessMap,be=pe&&!!i.iridescenceMap,I=pe&&!!i.iridescenceThicknessMap,xe=me&&!!i.sheenColorMap,Se=me&&!!i.sheenRoughnessMap,Ce=!!i.specularMap,we=!!i.specularColorMap,Te=!!i.specularIntensityMap,Ee=he&&!!i.transmissionMap,De=he&&!!i.thicknessMap,Oe=!!i.gradientMap,ke=!!i.alphaMap,Ae=i.alphaTest>0,je=!!i.alphaHash,L=!!i.extensions,Me=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&Qu(i.normalMap.format),metalnessMap:F,roughnessMap:le,anisotropy:ue,anisotropyMap:ge,clearcoat:de,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:I,sheen:me,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:we,specularIntensityMap:Te,transmission:he,transmissionMap:Ee,thicknessMap:De,gradientMap:Oe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ae,alphaHash:je,combine:i.combine,mapUv:N&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:oe&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:F&&m(i.metalnessMap.channel),roughnessMapUv:le&&m(i.roughnessMap.channel),anisotropyMapUv:ge&&m(i.anisotropyMap.channel),clearcoatMapUv:_e&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:I&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(i.sheenRoughnessMap.channel),specularMapUv:Ce&&m(i.specularMap.channel),specularColorMapUv:we&&m(i.specularColorMap.channel),specularIntensityMapUv:Te&&m(i.specularIntensityMap.channel),transmissionMapUv:Ee&&m(i.transmissionMap.channel),thicknessMapUv:De&&m(i.thicknessMap.channel),alphaMapUv:ke&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(oe||ue),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(N||ke),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&zt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&zt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:L&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(L&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=xc[t];n=Xo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Ju(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ed(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function td(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function nd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function rd(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||td),r.length>1&&r.sort(t||nd),i.length>1&&i.sort(t||nd),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function id(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new rd,e.set(t,[i])):n>=r.length?(i=new rd,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ad(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new K,color:new q};break;case`SpotLight`:n={position:new K,direction:new K,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new q,groundColor:new q};break;case`RectAreaLight`:n={color:new q,position:new K,halfWidth:new K,halfHeight:new K};break}return e[t.id]=n,n}}}function od(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var sd=0;function cd(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ld(e){let t=new ad,n=od(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new tn,o=new tn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(cd);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=sd++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function ud(e){let t=new ld(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function dd(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ud(e),t.set(n,[a])):r>=i.length?(a=new ud(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var fd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,md=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],hd=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],gd=new tn,_d=new K,vd=new K;function yd(e,t,n){let r=new zi,i=new G,a=new G,o=new Xt,s=new ns,c=new rs,u={},d=n.maxTextureSize,p={0:1,1:0,2:2},m=new $o({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:fd,fragmentShader:pd}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new Nr;g.setAttribute(`position`,new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Y(g,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(H(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=y!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,u=t.length;c<u;c++){let u=t[c],p=u.shadow;if(p===void 0){H(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=_,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(u.isPointLight){H(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Qt(i.x,i.y,{format:N,type:S,minFilter:f,magFilter:f,generateMipmaps:!1}),p.map.texture.name=u.name+`.shadowMap`,p.map.depthTexture=new ca(i.x,i.y,x),p.map.depthTexture.name=u.name+`.shadowMapDepth`,p.map.depthTexture.format=A,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=l,p.map.depthTexture.magFilter=l}else u.isPointLight?(p.map=new Xc(i.x),p.map.depthTexture=new la(i.x,b)):(p.map=new Qt(i.x,i.y),p.map.depthTexture=new ca(i.x,i.y,b)),p.map.depthTexture.name=u.name+`.shadowMap`,p.map.depthTexture.format=A,this.type===1?(p.map.depthTexture.compareFunction=_?518:515,p.map.depthTexture.minFilter=f,p.map.depthTexture.magFilter=f):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=l,p.map.depthTexture.magFilter=l);p.camera.updateProjectionMatrix()}let v=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<v;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(o)}if(u.isPointLight){let e=p.camera,n=p.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),_d.setFromMatrixPosition(u.matrixWorld),e.position.copy(_d),vd.copy(e.position),vd.add(md[t]),e.up.copy(hd[t]),e.lookAt(vd),e.updateMatrixWorld(),n.makeTranslation(-_d.x,-_d.y,-_d.z),gd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(gd,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(u);r=p.getFrustum(),T(n,s,p.camera,u,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,s),p.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,u,p)};function C(n,r){let a=t.update(_);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Qt(i.x,i.y,{format:N,type:S})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function bd(e,t){function n(){let t=!1,n=new Xt,r=null,i=new Xt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=rt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),j=M>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Xt().fromArray(re),oe=new Xt().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),F(e.CULL_FACE),he(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(le(e.BLEND),g=!1);return}if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:U(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:U(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:U(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:U(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?le(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(j&&e.lineWidth(t),k=t)}function be(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(ee!==n||A!==r)&&(ee=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function I(t){t?F(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function xe(t){t===void 0&&(t=e.TEXTURE0+te-1),P!==t&&(e.activeTexture(t),P=t)}function Se(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+te-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function Ce(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function L(){try{e.texImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function R(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Fe(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function z(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function B(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,A=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:I,activeTexture:xe,bindTexture:Se,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:L,texImage3D:Me,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:z,uniformBlockBinding:B,texStorage2D:Ae,texStorage3D:je,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:R,viewport:Fe,reset:Ie}}function xd(e,t,n,r,i,a,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new G,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ye(`canvas`)}function T(e,t,n){let r=1,i=Ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),H(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&H(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];H(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||H(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?He:zt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function ee(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,H(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),N(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),ne(t)}function N(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&P(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function P(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],h.memory.textures--}function ne(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),r.remove(i[t])}r.remove(t)}let re=0;function ie(){re=0}function ae(){return re}function oe(e){re=e}function se(){let e=re;return e>=i.maxTextures&&H(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),re+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function F(t,i){let a=r.get(t);if(t.isVideoTexture&&L(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)H(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)H(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ye(a,t,i);return}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ye(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){be(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let fe={[o]:e.REPEAT,[s]:e.CLAMP_TO_EDGE,[c]:e.MIRRORED_REPEAT},pe={[l]:e.NEAREST,[u]:e.NEAREST_MIPMAP_NEAREST,[d]:e.NEAREST_MIPMAP_LINEAR,[f]:e.LINEAR,[p]:e.LINEAR_MIPMAP_NEAREST,[m]:e.LINEAR_MIPMAP_LINEAR},me={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function he(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&H(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,fe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,fe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,fe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,pe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,pe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,me[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ge(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,j));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=ce(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&P(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=_e(n.start,r.width,4),c=_e(t.start,r.width,4);n.start<=i+1&&a===c&&_e(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ye(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ge(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=zt.getPrimaries(zt.workingColorSpace),r=o.colorSpace===``?null:zt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Me(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);he(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=A(o,t);if(o.isDepthTexture)p=ee(o.format===te,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture)if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&ve(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023)if(r!==null)if(g){if(v)if(o.layerUpdates.size>0){let t=gc(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0);else H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data)}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}else if(o.isDataArrayTexture)if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v)if(o.layerUpdates.size>0){let i=gc(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_)if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ne(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Ne(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function be(t,o,s){if(o.image.length!==6)return;let c=ge(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=zt.getPrimaries(zt.workingColorSpace),r=o.colorSpace===``?null:zt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Me(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=k(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=A(o,h);he(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Ne(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function I(t,i,o,s,c,l){let u=a.convert(o.format,o.colorSpace),d=a.convert(o.type),f=k(o.internalFormat,u,d,o.normalized,o.colorSpace),p=r.get(i),m=r.get(o);if(m.__renderTarget=i,!p.__hasExternalTextures){let t=Math.max(1,i.width>>l),r=Math.max(1,i.height>>l);c===e.TEXTURE_3D||c===e.TEXTURE_2D_ARRAY?n.texImage3D(c,l,f,t,r,i.depth,0,u,d,null):n.texImage2D(c,l,f,t,r,0,u,d,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),je(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,c,m.__webglTexture,0,Ae(i)):(c===e.TEXTURE_2D||c>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&c<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,c,m.__webglTexture,l),n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ee(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;je(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],s=a.convert(o.format,o.colorSpace),c=a.convert(o.type),l=k(o.internalFormat,s,c,o.normalized,o.colorSpace);je(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),l,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),l,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,l,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Se(t,i,o){let s=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);if(c.__renderTarget=i,(!c.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),s){if(c.__webglInit===void 0&&(c.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,j)),c.__webglTexture===void 0){c.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),he(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else F(i.depthTexture,0);let l=c.__webglTexture,u=Ae(i),d=s?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,f=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)je(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,f,d,l,0,u):e.framebufferTexture2D(e.FRAMEBUFFER,f,d,l,0);else if(i.depthTexture.format===1027)je(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,f,d,l,0,u):e.framebufferTexture2D(e.FRAMEBUFFER,f,d,l,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ce(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer)if(a)for(let e=0;e<6;e++)Se(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Se(i.__webglFramebuffer[0],t,0):Se(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),xe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),xe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,i){let a=r.get(t);n!==void 0&&I(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ce(t)}function Te(t){let i=t.texture,o=r.get(t),s=r.get(i);t.addEventListener(`dispose`,M);let c=t.textures,l=t.isWebGLCubeRenderTarget===!0,u=c.length>1;if(u||(s.__webglTexture===void 0&&(s.__webglTexture=e.createTexture()),s.__version=i.version,h.memory.textures++),l){o.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){o.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)o.__webglFramebuffer[t][n]=e.createFramebuffer()}else o.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){o.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)o.__webglFramebuffer[t]=e.createFramebuffer()}else o.__webglFramebuffer=e.createFramebuffer();if(u)for(let t=0,n=c.length;t<n;t++){let n=r.get(c[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&je(t)===!1){o.__webglMultisampledFramebuffer=e.createFramebuffer(),o.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer);for(let n=0;n<c.length;n++){let r=c[n];o.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,o.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),s=a.convert(r.type),l=k(r.internalFormat,i,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ae(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,l,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,o.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(o.__webglDepthRenderbuffer=e.createRenderbuffer(),xe(o.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(l){n.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture),he(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)I(o.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else I(o.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(u){for(let i=0,a=c.length;i<a;i++){let a=c[i],s=r.get(a),l=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(l,s.__webglTexture),he(l,a),I(o.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,l,0),E(a)&&D(l)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,s.__webglTexture),he(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)I(o.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else I(o.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Ce(t)}function Ee(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let De=[],Oe=[];function ke(t){if(t.samples>0){if(je(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=r.get(t),u=i.length>1;if(u)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let d=t.texture.mipmaps;d&&d.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),u){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),_===!0&&(De.length=0,Oe.length=0,De.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(De.push(c),Oe.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Oe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),u)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ae(e){return Math.min(i.maxSamples,e.samples)}function je(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function L(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Me(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(zt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&H(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):U(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=F,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=we,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=I,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Sd(e,t){function n(n,r=``){let i,a=zt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Cd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ua(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $o({vertexShader:Cd,fragmentShader:wd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Y(new Bo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ed=class extends W{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,g=new Td,_={},v=t.getContextAttributes(),y=null,x=null,S=[],C=[],w=new G,E=null,D=new zs;D.viewport=new Xt;let O=new zs;O.viewport=new Xt;let k=[D,O],j=new Js,M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new Mn,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new Mn,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new Mn,S[e]=t),t.getHandSpace()};function P(e){let t=C.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,P),r.removeEventListener(`selectstart`,P),r.removeEventListener(`selectend`,P),r.removeEventListener(`squeeze`,P),r.removeEventListener(`squeezestart`,P),r.removeEventListener(`squeezeend`,P),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<S.length;e++){let t=C[e];t!==null&&(C[e]=null,S[e].disconnect(t))}M=null,N=null,g.reset();for(let e in _)delete _[e];e.setRenderTarget(y),f=null,d=null,u=null,r=null,x=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,P),r.addEventListener(`selectstart`,P),r.addEventListener(`selectend`,P),r.addEventListener(`squeeze`,P),r.addEventListener(`squeezestart`,P),r.addEventListener(`squeezeend`,P),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),v.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;v.depth&&(o=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=v.stencil?te:A,a=v.stencil?T:b);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Qt(d.textureWidth,d.textureHeight,{format:ee,type:h,depthTexture:new ca(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Qt(f.framebufferWidth,f.framebufferHeight,{format:ee,type:h,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=C.indexOf(n);r>=0&&(C[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=C.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=C.length){C.push(n),r=e;break}else if(C[e]===null){C[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}let ie=new K,ae=new K;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),j.near=O.near=D.near=t,j.far=O.far=D.far=n,(M!==j.near||N!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,N=j.far),j.layers.mask=e.layers.mask|6,D.layers.mask=j.layers.mask&-5,O.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;se(j,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?oe(j,D,O):j.projectionMatrix.copy(D.projectionMatrix),ce(e,j,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=st*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(d===null&&f===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)},this.getCameraTexture=function(e){return _[e]};let F=null;function le(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=k[n];o===void 0&&(o=new zs,o.layers.enable(n),o.viewport=new Xt,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new ua,_[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=C[e],n=S[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}F&&F(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ue=new vc;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){F=e},this.dispose=function(){}}},Dd=new tn,Od=new Pt;Od.set(-1,0,0,0,1,0,0,0,1);function kd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Yo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Dd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Od),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ad(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return U(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?H(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):H(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var jd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Md=null;function Nd(){return Md===null&&(Md=new Si(jd,16,16,N,S),Md.name=`DFG_LUT`,Md.minFilter=f,Md.magFilter=f,Md.wrapS=s,Md.wrapT=s,Md.generateMipmaps=!1,Md.needsUpdate=!0),Md}var Pd=class{constructor(e={}){let{canvas:t=Xe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=h}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let g=f,_=new Set([ne,P,M]),y=new Set([h,b,v,T,C,w]),x=new Uint32Array(4),E=new Int32Array(4),D=new K,O=null,k=null,ee=[],A=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,N=!1,re=null,ie=null,ae=null,oe=null;this._outputColorSpace=Be;let se=0,ce=0,F=null,le=-1,ue=null,de=new Xt,fe=new Xt,pe=null,me=new q(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,I=new Xt(0,0,ge,_e),xe=new Xt(0,0,ge,_e),Se=!1,Ce=new zi,we=!1,Te=!1,Ee=new tn,De=new K,Oe=new Xt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return F===null?ve:1}let L=n;function Me(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),L===null){let t=`webgl2`;if(L=Me(t,e),L===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw U(`WebGLRenderer: `+e.message),e}let Ne,Pe,R,Fe,z,B,Ie,V,Le,Re,ze,Ve,He,Ue,We,Ge,qe,Je,Ye,Ze,Qe,et,tt;function rt(){Ne=new Qc(L),Ne.init(),Qe=new Sd(L,Ne),Pe=new Oc(L,Ne,e,Qe),R=new bd(L,Ne),Pe.reversedDepthBuffer&&d&&R.buffers.depth.setReversed(!0),ie=L.createFramebuffer(),ae=L.createFramebuffer(),oe=L.createFramebuffer(),Fe=new tl(L),z=new ed,B=new xd(L,Ne,R,z,Pe,Qe,Fe),Ie=new Zc(j),V=new yc(L),et=new Ec(L,V),Le=new $c(L,V,Fe,et),Re=new rl(L,Le,V,et,Fe),Je=new nl(L,Pe,B),We=new kc(z),ze=new $u(j,Ie,Ne,Pe,et,We),Ve=new kd(j,z),He=new id,Ue=new dd(Ne),qe=new Tc(j,Ie,R,Re,p,s),Ge=new yd(j,Re,Pe),tt=new Ad(L,Fe,Pe,R),Ye=new Dc(L,Ne,Fe),Ze=new el(L,Ne,Fe),Fe.programs=ze.programs,j.capabilities=Pe,j.extensions=Ne,j.properties=z,j.renderLists=He,j.shadowMap=Ge,j.state=R,j.info=Fe}rt(),g!==1009&&(te=new al(g,t.width,t.height,o,r,i));let W=new Ed(j,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){if(W.isPresenting){H(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(g===1009){U(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){H(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(I)},this.setViewport=function(e,t,n,r){e.isVector4?I.set(e.x,e.y,e.z,e.w):I.set(e,t,n,r),R.viewport(de.copy(I).multiplyScalar(ve).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),R.scissor(fe.copy(xe).multiplyScalar(ve).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){R.setScissorTest(Se=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=_.has(t)}if(e){let e=F.texture.type,t=y.has(e),n=qe.getClearColor(),r=qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(x[0]=i,x[1]=a,x[2]=o,x[3]=r,L.clearBufferuiv(L.COLOR,0,x)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,L.clearBufferiv(L.COLOR,0,E))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),re=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),qe.dispose(),He.dispose(),Ue.dispose(),z.dispose(),Ie.dispose(),Re.dispose(),et.dispose(),tt.dispose(),ze.dispose(),W.dispose(),W.removeEventListener(`sessionstart`,pt),W.removeEventListener(`sessionend`,mt),ht.stop()};function it(e){e.preventDefault(),$e(`WebGLRenderer: Context Lost.`),N=!0}function at(){$e(`WebGLRenderer: Context Restored.`),N=!1;let e=Fe.autoReset,t=Ge.enabled,n=Ge.autoUpdate,r=Ge.needsUpdate,i=Ge.type;rt(),Fe.autoReset=e,Ge.enabled=t,Ge.autoUpdate=n,Ge.needsUpdate=r,Ge.type=i}function ot(e){U(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),ct(t)}function ct(e){lt(e),z.remove(e)}function lt(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){ze.releaseProgram(e)}),e.isShaderMaterial&&ze.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Tt(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Le.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Ye;if(c!==null&&(h=V.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*je()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*je()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh)if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?V.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,n),e.side=0,e.needsUpdate=!0,xt(e,t,n),e.side=2):xt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),k=Ue.get(n),k.init(t),A.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];ut(a,n,e),r.add(a)}else ut(t,n,e),r.add(t)}),k=A.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){z.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new vc;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,W.setAnimationLoop(e),e===null?ht.stop():ht.start()},W.addEventListener(`sessionstart`,pt),W.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){U(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(N===!0)return;re!==null&&re.renderStart(e,t);let n=W.enabled===!0&&W.isPresenting===!0,r=te!==null&&(F===null||n)&&te.begin(j,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(t),t=W.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,F),k=Ue.get(e,A.length),k.init(t),k.state.textureUnits=B.getTextureUnits(),A.push(k),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ce.setFromProjectionMatrix(Ee,Ke,t.reversedDepth),Te=this.localClippingEnabled,we=We.init(this.clippingPlanes,Te),O=He.get(e,ee.length),O.init(),ee.push(O),W.enabled===!0&&W.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,j.sortObjects)}gt(e,t,0,j.sortObjects),O.finish(),j.sortObjects===!0&&O.sort(ye,be,t.reversedDepth),Ae=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ae&&qe.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),we===!0&&We.beginShadows();let i=k.state.shadowsArray;if(Ge.render(i,e,t),we===!0&&We.endShadows(),(r&&te.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}Ae&&qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];_t(O,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),Ae&&qe.render(e),_t(O,e,t)}F!==null&&ce===0&&(B.updateMultisampleRenderTarget(F),B.updateRenderTargetMipmap(F)),r&&te.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),et.resetDefaultState(),le=-1,ue=null,A.pop(),A.length>0?(k=A[A.length-1],B.setTextureUnits(k.state.textureUnits),we===!0&&We.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,ee.pop(),O=ee.length>0?ee[ee.length-1]:null,re!==null&&re.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Ce.intersectsSprite(e)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let t=Re.update(e),i=e.material;i.visible&&O.push(e,t,i,n,Oe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Ce.intersectsObject(e))){let t=Re.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Oe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&O.push(e,t,s,n,Oe.z,o)}}else i.visible&&O.push(e,t,i,n,Oe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function _t(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),we===!0&&We.setGlobalState(j.clippingPlanes,n),r&&R.viewport(de.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Qt(1,1,{generateMipmaps:!0,type:e?S:h,minFilter:m,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(me),he=j.getClearAlpha(),he<1&&j.setClearColor(16777215,.5),j.clear(),Ae&&qe.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),we===!0&&We.setGlobalState(j.clippingPlanes,r),yt(e,n,r),B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(me,he),d!==void 0&&(r.viewport=d),j.toneMapping=u}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function xt(e,t,n){t.isScene!==!0&&(t=ke);let r=z.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=ze.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=ze.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ie.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ct(e,s),d}else s.uniforms=ze.getUniforms(e),re!==null&&e.isNodeMaterial&&re.build(e,n,s),e.onBeforeCompile(s,j),d=ze.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=We.uniform),Ct(e,s),r.needsLights=Dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function St(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=fu.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ct(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function wt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Tt(e,t,n,r,i){t.isScene!==!0&&(t=ke),B.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?j.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:zt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ie.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),y=k.state.lights;if(we===!0&&(Te===!0||e!==ue)){let t=e===ue&&r.id===le;We.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==We.numPlanes||v.numIntersection!==We.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=xt(r,t,i),re&&r.isNodeMaterial&&re.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(R.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==le&&(le=r.id,C=!0),v.needsLights){let e=wt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ue!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(L,`projectionMatrix`,e.projectionMatrix),T.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(L,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&T.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(L,`directionalShadowMap`,y.state.directionalShadowMap,B),y.state.spotShadowMap.length>0&&T.setValue(L,`spotShadowMap`,y.state.spotShadowMap,B),y.state.pointShadowMap.length>0&&T.setValue(L,`pointShadowMap`,y.state.pointShadowMap,B)),i.isSkinnedMesh){T.setOptional(L,i,`bindMatrix`),T.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(L,`boneTexture`,e.boneTexture,B))}i.isBatchedMesh&&(T.setOptional(L,i,`batchingTexture`),T.setValue(L,`batchingTexture`,i._matricesTexture,B),T.setOptional(L,i,`batchingIdTexture`),T.setValue(L,`batchingIdTexture`,i._indirectTexture,B),T.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(L,`batchingColorTexture`,i._colorsTexture,B));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Je.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Nd()),C){if(T.setValue(L,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Et(E,w),a&&r.fog===!0&&Ve.refreshFogUniforms(E,a),Ve.refreshMaterialUniforms(E,r,ve,_e,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}fu.upload(L,St(v),E,B)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(fu.upload(L,St(v),E,B),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(L,`center`,i.center),T.setValue(L,`modelViewMatrix`,i.modelViewMatrix),T.setValue(L,`normalMatrix`,i.normalMatrix),T.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,x),tt.bind(n,x)}}return x}function Et(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,R.viewport(de),R.scissor(fe),R.setScissorTest(pe),le=-1;return}else if(o.__webglFramebuffer===void 0)B.setupRenderTarget(e);else if(o.__hasExternalTextures)B.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);B.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&B.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(I).multiplyScalar(ve).floor(),fe.copy(xe).multiplyScalar(ve).floor(),pe=Se;if(n!==0&&(r=ie),R.bindFramebuffer(L.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(de),R.scissor(fe),R.setScissorTest(pe),i){let r=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}le=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){R.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s),!Pe.textureFormatReadable(c)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Pe.textureTypeReadable(l)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,Qe.convert(c),Qe.convert(l),a)}finally{let e=F===null?null:z.get(F).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s),!Pe.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Pe.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,d),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,Qe.convert(l),Qe.convert(u),0);let f=F===null?null:z.get(F).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,f);let p=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await nt(L,p,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,d),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.deleteBuffer(d),L.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;B.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Qe.convert(t.format),_=Qe.convert(t.type),v;t.isData3DTexture?(B.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(B.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(B.setTexture2D(t,0),v=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=R.getParameter(L.UNPACK_ROW_LENGTH),b=R.getParameter(L.UNPACK_IMAGE_HEIGHT),x=R.getParameter(L.UNPACK_SKIP_PIXELS),S=R.getParameter(L.UNPACK_SKIP_ROWS),C=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,l),R.pixelStorei(L.UNPACK_SKIP_ROWS,u),R.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,o,s,f,p,o,s,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);R.bindFramebuffer(L.READ_FRAMEBUFFER,ae),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,o,s,f,p,o,s,L.COLOR_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);R.pixelStorei(L.UNPACK_ROW_LENGTH,y),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(L.UNPACK_SKIP_PIXELS,x),R.pixelStorei(L.UNPACK_SKIP_ROWS,S),R.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&L.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&B.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?B.setTextureCube(e,0):e.isData3DTexture?B.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?B.setTexture2DArray(e,0):B.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){se=0,ce=0,F=null,R.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}},Fd={type:`change`},Id={type:`start`},Ld={type:`end`},Rd=new ci,zd=new Fi,Bd=Math.cos(70*At.DEG2RAD),Vd=new K,Hd=2*Math.PI,Ud={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wd=1e-6,Gd=class extends hc{constructor(e,t=null){super(e,t),this.state=Ud.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:i.ROTATE,MIDDLE:i.DOLLY,RIGHT:i.PAN},this.touches={ONE:a.ROTATE,TWO:a.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new jt,this._lastTargetPosition=new K,this._quat=new jt().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fc,this._sphericalDelta=new fc,this._scale=1,this._panOffset=new K,this._rotateStart=new G,this._rotateEnd=new G,this._rotateDelta=new G,this._panStart=new G,this._panEnd=new G,this._panDelta=new G,this._dollyStart=new G,this._dollyEnd=new G,this._dollyDelta=new G,this._dollyDirection=new K,this._mouse=new G,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qd.bind(this),this._onPointerDown=Kd.bind(this),this._onPointerUp=Jd.bind(this),this._onContextMenu=tf.bind(this),this._onMouseWheel=Zd.bind(this),this._onKeyDown=Qd.bind(this),this._onTouchStart=$d.bind(this),this._onTouchMove=ef.bind(this),this._onMouseDown=Yd.bind(this),this._onMouseMove=Xd.bind(this),this._interceptControlDown=nf.bind(this),this._interceptControlUp=rf.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=``}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fd),this.update(),this.state=Ud.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Vd.copy(t).sub(this.target),Vd.applyQuaternion(this._quat),this._spherical.setFromVector3(Vd),this.autoRotate&&this.state===Ud.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Hd:n>Math.PI&&(n-=Hd),r<-Math.PI?r+=Hd:r>Math.PI&&(r-=Hd),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Vd.setFromSpherical(this._spherical),Vd.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vd),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Vd.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new K(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new K(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Vd.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Rd.origin.copy(this.object.position),Rd.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rd.direction))<Bd?this.object.lookAt(this.target):(zd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rd.intersectPlane(zd,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Wd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wd||this._lastTargetPosition.distanceToSquared(this.target)>Wd?(this.dispatchEvent(Fd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Hd/60/60*this.autoRotateSpeed:Hd/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vd.setFromMatrixColumn(t,0),Vd.multiplyScalar(-e),this._panOffset.add(Vd)}_panUp(e,t){this.screenSpacePanning===!0?Vd.setFromMatrixColumn(t,1):(Vd.setFromMatrixColumn(t,0),Vd.crossVectors(this.object.up,Vd)),Vd.multiplyScalar(e),this._panOffset.add(Vd)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Vd.copy(r).sub(this.target);let i=Vd.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Hd*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hd*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Hd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Hd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Hd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Hd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Hd*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hd*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new G,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Kd(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function qd(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Jd(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Ld),this.state=Ud.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Yd(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Ud.DOLLY;break;case i.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Ud.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Ud.ROTATE}break;case i.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Ud.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Ud.PAN}break;default:this.state=Ud.NONE}this.state!==Ud.NONE&&this.dispatchEvent(Id)}function Xd(e){switch(this.state){case Ud.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Ud.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Ud.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Zd(e){this.enabled===!1||this.enableZoom===!1||this.state!==Ud.NONE||(e.preventDefault(),this.dispatchEvent(Id),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Ld))}function Qd(e){this.enabled!==!1&&this._handleKeyDown(e)}function $d(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case a.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Ud.TOUCH_ROTATE;break;case a.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Ud.TOUCH_PAN;break;default:this.state=Ud.NONE}break;case 2:switch(this.touches.TWO){case a.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Ud.TOUCH_DOLLY_PAN;break;case a.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Ud.TOUCH_DOLLY_ROTATE;break;default:this.state=Ud.NONE}break;default:this.state=Ud.NONE}this.state!==Ud.NONE&&this.dispatchEvent(Id)}function ef(e){switch(this._trackPointer(e),this.state){case Ud.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Ud.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Ud.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Ud.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Ud.NONE}}function tf(e){this.enabled!==!1&&e.preventDefault()}function nf(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function rf(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function af(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Nr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=of(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=of(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function of(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new vr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var sf=new K;function cf(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;sf.copy(t),sf[r]=0,sf.normalize();let l=.5*o/(o+s),u=1-sf.angleTo(e)/c;return Math.sign(sf[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Q=class e extends da{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new K,c=new K,l=new K(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new K,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=cf(m,c,`z`,`y`,i,n),f[a+1]=1-cf(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-cf(m,c,`z`,`y`,i,n),f[a+1]=1-cf(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-cf(m,c,`x`,`z`,i,e),f[a+1]=cf(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-cf(m,c,`x`,`z`,i,e),f[a+1]=1-cf(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-cf(m,c,`x`,`y`,i,e),f[a+1]=1-cf(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=cf(m,c,`x`,`y`,i,e),f[a+1]=1-cf(m,c,`y`,`x`,i,t);break}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},$=n();function lf(e,t){let n=document.createElement(`canvas`);n.width=420,n.height=82;let r=n.getContext(`2d`);r.fillStyle=`rgba(4,15,22,.88)`,r.fillRect(0,0,420,82),r.strokeStyle=t,r.lineWidth=3,r.strokeRect(2,2,416,78),r.fillStyle=`#e9fbff`,r.font=`600 29px Microsoft YaHei, sans-serif`,r.fillText(e,22,52);let i=new sa(n);i.colorSpace=Be;let a=new $r(new zr({map:i,transparent:!0,depthTest:!1}));return a.scale.set(17,3.3,1),a}function uf(e,t,n,r,i,a,o){let s=new An;s.position.set(i,0,a),s.userData.asset=n;let c=new Y(new pa(.22,.28,4.8,12),new X({color:o,emissive:o,emissiveIntensity:.25}));c.position.y=2.4,c.castShadow=!0;let l=new Y(new Ho(.8,18,12),new X({color:o,emissive:o,emissiveIntensity:.8}));l.position.y=5.2,l.userData.asset=n;let u=new Y(new Vo(1.05,1.3,32),new J({color:o,transparent:!0,opacity:.65,side:2}));u.rotation.x=-Math.PI/2,u.position.y=.15;let d=lf(r,`#${o.toString(16).padStart(6,`0`)}`);return d.position.set(0,7.1,0),s.add(c,l,u,d),e.add(s),t.push(l),s}function df(e,t){let n=new Y(new Wo(new Aa(e),48,.18,8,!1),new J({color:t,transparent:!0,opacity:.92}));return n.position.y=.3,n}function ff({running:e,blocked:t,blockedRoadId:n,showRisk:i,topView:a,nightMode:c,buildingLights:l,autoTour:u,suspended:d,scenarioPhase:f,scenarioTime:p,scenarioPlaying:m,trafficDensity:h,splitView:g,fireRoute:_,onSelect:v,onRealRoute:y,onSceneStatus:b,plume:x}){let S=(0,r.useRef)(null),C=(0,r.useRef)(e),w=(0,r.useRef)(v),T=(0,r.useRef)(y),E=(0,r.useRef)(b),D=(0,r.useRef)(null),O=(0,r.useRef)(null),k=(0,r.useRef)([]),ee=(0,r.useRef)(null),A=(0,r.useRef)([[1,1],[1,1],[1,1]]),te=(0,r.useRef)([]),j=(0,r.useRef)(t),M=(0,r.useRef)(n),N=(0,r.useRef)(()=>{}),P=(0,r.useRef)(f),ne=(0,r.useRef)(p),re=(0,r.useRef)(h),ie=(0,r.useRef)(g),ae=(0,r.useRef)(u),oe=(0,r.useRef)(d),se=(0,r.useRef)(i),ce=(0,r.useRef)(c),F=(0,r.useRef)(l),le=(0,r.useRef)(()=>{});(0,r.useEffect)(()=>{C.current=e},[e]),(0,r.useEffect)(()=>{w.current=v,T.current=y,E.current=b},[v,y,b]),(0,r.useEffect)(()=>{ce.current=c,F.current=l,le.current(c)},[c,l]),(0,r.useEffect)(()=>{ae.current=u},[u]),(0,r.useEffect)(()=>{oe.current=d},[d]),(0,r.useEffect)(()=>{P.current=f,ne.current=p},[f,p]),(0,r.useEffect)(()=>{re.current=h},[h]),(0,r.useEffect)(()=>{ie.current=g,O.current&&(O.current.enabled=!g)},[g]),(0,r.useEffect)(()=>{se.current=i,k.current.forEach(e=>e.visible=i)},[i]),(0,r.useEffect)(()=>{j.current=t,M.current=n,N.current(t,n)},[t,n]),(0,r.useEffect)(()=>{A.current=[[x.warning,x.warningWidth],[x.high,x.highWidth],[x.lethal,x.lethalWidth]].map(([e,t])=>[Math.max(1,e/80),Math.max(.8,t/80)]),k.current.forEach((e,t)=>{e.position.x=-3+A.current[t][0],e.position.z=-3+A.current[t][0]*.42})},[x]),(0,r.useEffect)(()=>{let e=D.current,t=O.current;!e||!t||(a?(e.position.set(0,172,.1),t.target.set(0,0,0)):(e.position.set(92,100,108),t.target.set(0,6,0)),t.update())},[a]),(0,r.useEffect)(()=>{E.current?.(`loading`);let e=S.current,t=new zn;t.background=new q(8829649),t.fog=new Rn(11125961,.0035);let n=new $o({side:1,depthWrite:!1,uniforms:{top:{value:new q(6860768)},horizon:{value:new q(14872304)}},vertexShader:`varying vec3 vPos;void main(){vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`uniform vec3 top;uniform vec3 horizon;varying vec3 vPos;void main(){float h=smoothstep(-.08,.55,normalize(vPos).y);gl_FragColor=vec4(mix(horizon,top,h),1.0);}`}),r=new Y(new Ho(310,32,18),n);t.add(r);let i=new zs(45,1,.1,700);i.position.set(92,100,108),D.current=i;let a=new Pd({antialias:!0,alpha:!1,powerPreference:`high-performance`});a.setPixelRatio(Math.min(devicePixelRatio||1,1.4)),a.shadowMap.enabled=!0,a.shadowMap.type=2,a.shadowMap.autoUpdate=!1,a.outputColorSpace=Be,a.toneMapping=4,a.toneMappingExposure=1.08,e.appendChild(a.domElement);let c=document.createElement(`div`);c.className=`scene-hover-tip`,e.appendChild(c);let l=new Gd(i,a.domElement);l.enableDamping=!0,l.dampingFactor=.075,l.minDistance=32,l.maxDistance=220,l.maxPolarAngle=Math.PI/2.08,l.target.set(0,6,0),O.current=l;let u=new Ds(12044490,4608068,2);t.add(u);let d=new Ws(14867659,2.2);d.position.set(-35,65,28),d.castShadow=!0,d.shadow.mapSize.set(1024,1024),d.shadow.bias=-25e-5,d.shadow.normalBias=.035,d.shadow.camera.left=-75,d.shadow.camera.right=75,d.shadow.camera.top=75,d.shadow.camera.bottom=-75,t.add(d);let f=new An;f.name=`北京城市远景`,t.add(f);let p=new Y(new fa(385,96),new X({color:727840,roughness:.96,metalness:.02}));p.rotation.x=-Math.PI/2,p.position.y=-.7,f.add(p);let m=new da(1,1,1),h=new X({color:1781816,roughness:.72,metalness:.2,emissive:663592,emissiveIntensity:.42}),g=new ji(m,h,132),_=new tn,v=new jt,y=new K,b=new K,x=new J({color:14132830,transparent:!0,opacity:.08}),ue=new ji(new da(1,1,.04),x,396),de=0;for(let e=0;e<132;e++){let t=e*2.3999632297,n=278+e*17%35,r=3.4+e*13%45/10,i=3.2+e*7%24/10,a=7+e*29%250/10;b.set(Math.cos(t)*n,a/2-.6,Math.sin(t)*n),v.setFromAxisAngle(new K(0,1,0),Math.PI/2-t),y.set(r,a,i),_.compose(b,v,y),g.setMatrixAt(e,_),g.setColorAt(e,new q(e%4==0?2374467:e%3==0?1650230:2110523));for(let e=1;e<=3;e++)b.set(Math.cos(t)*(n-i*.51),e/4*a-.4,Math.sin(t)*(n-i*.51)),y.set(r*.72,.08,1),_.compose(b,v,y),ue.setMatrixAt(de++,_)}g.instanceMatrix.needsUpdate=!0,ue.instanceMatrix.needsUpdate=!0,f.add(g,ue);let fe=new Y(new pa(265,325,38,96,1,!0),new J({color:3629931,transparent:!0,opacity:.07,side:2,depthWrite:!1}));fe.position.y=14,f.add(fe);let pe=document.createElement(`canvas`);pe.width=256,pe.height=256;let me=pe.getContext(`2d`),he=me.createRadialGradient(128,128,8,128,128,122);he.addColorStop(0,`rgba(255,244,198,1)`),he.addColorStop(.22,`rgba(255,185,94,.75)`),he.addColorStop(1,`rgba(255,133,66,0)`),me.fillStyle=he,me.fillRect(0,0,256,256);let ge=new $r(new zr({map:new sa(pe),transparent:!0,depthWrite:!1,opacity:.72}));ge.position.set(-155,82,-188),ge.scale.set(38,38,1),f.add(ge);let _e=document.createElement(`canvas`);_e.width=256,_e.height=256;let ve=_e.getContext(`2d`),ye=ve.createRadialGradient(128,128,12,128,128,122);ye.addColorStop(0,`rgba(235,247,255,1)`),ye.addColorStop(.2,`rgba(174,207,235,.72)`),ye.addColorStop(1,`rgba(103,158,211,0)`),ve.fillStyle=ye,ve.fillRect(0,0,256,256);let be=new $r(new zr({map:new sa(_e),transparent:!0,depthWrite:!1,opacity:.8}));be.position.set(150,96,-188),be.scale.set(30,30,1),be.visible=!1,f.add(be);let I=[];for(let e=0;e<420;e++){let t=e*2.3999632297,n=.14+e*37%80/100*Math.PI*.36;I.push(Math.cos(t)*Math.cos(n)*275,Math.sin(n)*275,Math.sin(t)*Math.cos(n)*275)}let xe=new Nr;xe.setAttribute(`position`,new xr(I,3));let Se=new ia(xe,new $i({color:14216703,size:.72,transparent:!0,opacity:.76,depthWrite:!1}));Se.visible=!1,f.add(Se);let Ce=new Ts().load(`./beijing-map-base.jpg`);Ce.colorSpace=Be,Ce.anisotropy=a.capabilities.getMaxAnisotropy(),Ce.wrapS=Ce.wrapT=s;let we=new X({map:Ce,roughness:.84,metalness:.07,color:12176592}),Te=new Y(new Bo(360,360),we);Te.rotation.x=-Math.PI/2,Te.receiveShadow=!0,t.add(Te);let Ee=new pc(360,72,6545392,6129555);Ee.position.y=.035,Ee.material.transparent=!0,Ee.material.opacity=.065,t.add(Ee);let De=new An;De.name=`北京真实建筑群`,t.add(De);let Oe=new An;Oe.name=`北京真实道路立体层`,t.add(Oe);let ke=[],Ae=[],je=[],L=[4283235,6385781,3493465,9142900,4810349,6119778],Me=[11643549,9869712,12629411,9015181,10787467],Ne=[6320245,7043192,5399658],Pe=e=>{let t=25.6,n=document.createElement(`canvas`);n.width=256,n.height=256;let r=n.getContext(`2d`),i=[`#18333d`,`#8d897f`,`#243f49`,`#9b9182`,`#314a54`],s=r.createLinearGradient(0,0,256,256);s.addColorStop(0,i[e%5]),s.addColorStop(.55,e===1||e===3?`#77746d`:`#142b35`),s.addColorStop(1,e===4?`#52606a`:i[e%5]),r.fillStyle=s,r.fillRect(0,0,256,256);for(let n=0;n<10;n++)for(let i=0;i<8;i++){let a=i*32,o=n*t,s=a+5,c=o+4,l=e===2?20:22,u=e===4?19:17;if(e===1)r.fillStyle=n%2?`#8f8b81`:`#a19b90`,r.fillRect(a+1,o+1,30,t-3),r.fillStyle=`#30474e`,r.fillRect(s+2,c+2,l-4,u-6),r.fillStyle=`rgba(220,218,203,.7)`,r.fillRect(a,c+18,32,3),r.fillStyle=`rgba(61,67,65,.45)`,r.fillRect(a,c+21,32,2);else if(e===3)r.fillStyle=(n+i)%2?`#8d8578`:`#a19787`,r.fillRect(a+1,o+1,30,t-2),r.fillStyle=`#3a5259`,r.fillRect(s+2,c+2,l-5,u-6),r.fillStyle=`rgba(77,66,55,.28)`,r.fillRect(a,o,2,t);else{let t=r.createLinearGradient(s,c,s+l,c+u);t.addColorStop(0,e===4?`#7e9da7`:`#79b7c4`),t.addColorStop(.42,`#193b47`),t.addColorStop(.72,`#315e69`),t.addColorStop(1,`#9ac6cc`),r.fillStyle=t,r.fillRect(s,c,l,u),r.fillStyle=`rgba(229,249,250,.28)`,r.fillRect(s+2,c+2,2,u-4),r.fillStyle=`rgba(9,30,38,.4)`,r.fillRect(s+l-2,c+1,2,u-2),r.fillRect(s+1,c+u-2,l-2,2)}(n*13+i*7+e*5)%17<3&&(r.fillStyle=(n+i)%2?`rgba(255,214,139,.74)`:`rgba(194,232,244,.56)`,r.fillRect(s+4,c+3,Math.max(8,l-8),Math.max(7,u-8)))}r.strokeStyle=e===1||e===3?`rgba(63,61,56,.34)`:`rgba(142,200,209,.4)`,r.lineWidth=e===2?2.5:1.2;for(let e=0;e<=256;e+=32)r.beginPath(),r.moveTo(e,0),r.lineTo(e,256),r.stroke();for(let e=0;e<=256;e+=t)r.beginPath(),r.moveTo(0,e),r.lineTo(256,e),r.stroke();if(e!==1&&e!==3){let e=r.createLinearGradient(0,0,256,0);e.addColorStop(.18,`rgba(255,255,255,0)`),e.addColorStop(.42,`rgba(205,241,246,.14)`),e.addColorStop(.55,`rgba(255,255,255,.27)`),e.addColorStop(.7,`rgba(255,255,255,0)`),r.save(),r.translate(50,-30),r.rotate(.28),r.fillStyle=e,r.fillRect(0,0,170,330),r.restore()}for(let t=0;t<180;t++){let n=(t*73+e*31)%256,i=(t*47+e*19)%256;r.fillStyle=t%3?`rgba(255,255,255,.025)`:`rgba(0,0,0,.035)`,r.fillRect(n,i,1,1)}let c=new sa(n);return c.colorSpace=Be,c.wrapS=c.wrapT=o,c.repeat.set(.38,.74),c.anisotropy=a.capabilities.getMaxAnisotropy(),c},R=()=>{let e=document.createElement(`canvas`);e.width=128,e.height=128;let t=e.getContext(`2d`);t.fillStyle=`#4a5a5e`,t.fillRect(0,0,128,128),t.strokeStyle=`rgba(163,194,197,.22)`,t.lineWidth=2;for(let e=0;e<128;e+=16)t.beginPath(),t.moveTo(e,0),t.lineTo(e,128),t.stroke(),t.beginPath(),t.moveTo(0,e),t.lineTo(128,e),t.stroke();t.fillStyle=`rgba(17,40,46,.6)`,t.fillRect(42,42,44,44),t.strokeStyle=`rgba(194,220,221,.38)`,t.strokeRect(45,45,38,38);let n=new sa(e);return n.colorSpace=Be,n.wrapS=n.wrapT=o,n.repeat.set(.08,.08),n.anisotropy=a.capabilities.getMaxAnisotropy(),n},Fe=e=>{let t=document.createElement(`canvas`);t.width=256,t.height=256;let n=t.getContext(`2d`);n.fillStyle=`#000`,n.fillRect(0,0,256,256);for(let t=0;t<10;t++)for(let r=0;r<8;r++){let i=r*32+5,a=t*25.6+4,o=e===2?20:22,s=e===4?19:17,c=(t*13+r*7+e*5)%17;c<7&&(n.fillStyle=c%3==0?`#bfe9ff`:c%3==1?`#ffd58a`:`#fff0c5`,n.fillRect(i+4,a+3,Math.max(8,o-8),Math.max(7,s-8)))}let r=new sa(t);return r.colorSpace=Be,r.wrapS=r.wrapT=o,r.repeat.set(.38,.74),r.anisotropy=a.capabilities.getMaxAnisotropy(),r},z=[0,1,2,3,4].map(Pe),B=[0,1,2,3,4].map(Fe),Ie=R(),V=[],Le=new Set,Re=[],ze=[],Ve=[],He=null,Ue=e=>{let r=F.current;t.background=new q(e?1390669:8829649),t.fog=new Rn(e?2312283:11125961,e?.0037:.0035),n.uniforms.top.value.set(e?1521486:8566991),n.uniforms.horizon.value.set(e?4287357:13951970),u.color.set(e?12179692:14214888),u.groundColor.set(e?3690836:5991006),u.intensity=e?1.72:2.7,d.color.set(e?14215413:15920352),d.intensity=e?1.5:2.8,a.toneMappingExposure=e?1.02:1.12,ge.visible=!e,be.visible=e,Se.visible=e,x.opacity=e&&r?.7:.12,x.needsUpdate=!0,fe.material.color.set(e?5671326:10929605),fe.material.opacity=.14,we.color.set(e?7902367:12176592),h.color.set(e?4417396:7306880),h.emissiveIntensity=e&&r?.44:.09,V.forEach(t=>t.emissiveIntensity=Le.has(t)?1:r?e?.88:.13:.035),Re.forEach(t=>{t.opacity=e&&r?.82:r?.13:0,t.needsUpdate=!0}),ze.forEach(t=>t.intensity=e&&r?2.15:0),Ve.forEach(t=>{t.material.opacity=e?.96:t.day*.94,t.material.needsUpdate=!0}),He&&(He.opacity=e?.96:.2)};le.current=Ue,Ue(ce.current);let We=[],Ge=[],Ke=[],qe=[new K(-64.181,.4,-2.804),new K(-34,.4,-5),new K(-3,.4,-3)],Je=[new K(-32.836,.4,28.859),new K(-20,.4,16),new K(-3,.4,-3)],Ye=[new K(19.766,.4,-19.999),new K(11,.4,-13),new K(-3,.4,-3)],Xe=df(qe,15779919),Ze=df(Je,5039025),Qe=df(Ye,4887039);Xe.visible=!1,Ze.visible=!1,Qe.visible=!1,t.add(Xe,Ze,Qe);let $e=new AbortController,et=null,H=null;fetch(`./beijing-buildings.json`,{signal:$e.signal}).then(e=>{if(!e.ok)throw Error(`地图数据响应异常：${e.status}`);return e.json()}).then(e=>{if(!Array.isArray(e.buildings)||!Array.isArray(e.roads))throw Error(`地图数据结构异常`);let n=new Map,r=new Map,i=(e,t)=>`${e.toFixed(3)},${t.toFixed(3)}`,a=e=>{let t=new Ya;for(let n=1;n<e.length;n++)t.add(new Wa(e[n-1],e[n]));return t};e.roads.forEach(e=>{for(let t=0;t<e.points.length;t++){let[a,o]=e.points[t],s=i(a,o);if(n.set(s,{x:a,z:o}),r.has(s)||r.set(s,[]),t===0)continue;let[c,l]=e.points[t-1],u=i(c,l),d=Math.hypot(a-c,o-l);r.get(u).push({to:s,cost:d,roadId:e.id,name:e.name}),r.get(s).push({to:u,cost:d,roadId:e.id,name:e.name})}});let o=e=>{let t=``,r=1/0;return n.forEach((n,i)=>{let a=Math.hypot(n.x-e.x,n.z-e.z);a<r&&(t=i,r=a)}),t},s=o({x:-35,z:-30}),c=o({x:-3,z:-3}),l=e=>{let t=new Set([s]),i=new Map,a=new Map([[s,0]]),o=new Map([[s,Math.hypot(n.get(s).x-n.get(c).x,n.get(s).z-n.get(c).z)]]),l=0;for(;t.size;){let s=``,u=1/0;if(t.forEach(e=>{let t=o.get(e)??1/0;t<u&&(u=t,s=e)}),l++,s===c){let e=[s],t=[];for(;i.has(s);){let n=i.get(s);t.unshift(n.edge),s=n.from,e.unshift(s)}return{path:e.map(e=>n.get(e)),edges:t,distance:a.get(c)??0,visited:l}}t.delete(s);for(let l of r.get(s)||[]){if(e!==null&&l.roadId===e)continue;let r=(a.get(s)??1/0)+l.cost;if(r<(a.get(l.to)??1/0)){i.set(l.to,{from:s,edge:l}),a.set(l.to,r);let e=n.get(l.to),u=n.get(c);o.set(l.to,r+Math.hypot(e.x-u.x,e.z-u.z)),t.add(l.to)}}}return{path:[],edges:[],distance:1/0,visited:l}},u=(e,t,i)=>{let a=new Set([e]),o=new Map,s=new Map([[e,0]]),c=n.get(t),l=0;for(;a.size;){let e=``,u=1/0;if(a.forEach(t=>{let r=n.get(t),i=(s.get(t)??1/0)+Math.hypot(r.x-c.x,r.z-c.z);i<u&&(u=i,e=t)}),l++,e===t){let r=[e],i=[];for(;o.has(e);){let t=o.get(e);i.unshift(t.edge),e=t.from,r.unshift(e)}return{path:r.map(e=>n.get(e)),edges:i,distance:s.get(t)??0,visited:l}}a.delete(e);for(let t of r.get(e)||[]){if(i!==null&&t.roadId===i)continue;let n=(s.get(e)??1/0)+t.cost;n<(s.get(t.to)??1/0)&&(o.set(t.to,{from:e,edge:t}),s.set(t.to,n),a.add(t.to))}}return{path:[],edges:[],distance:1/0,visited:l}},d=(e,t)=>{if(t.length<2)return;e.geometry.dispose();let n=t.map(e=>new K(e.x,.42,e.z));e.geometry=new Wo(a(n),Math.min(360,Math.max(60,n.length*3)),.13,7,!1)},f=l(null),p=(f.edges.find((e,t)=>t>f.edges.length*.45&&t<f.edges.length*.72&&e.name===`东二环`)||f.edges[Math.floor(f.edges.length*.58)])?.roadId??null,m=u(o({x:-64.181,z:-2.804}),c,null),h=u(o({x:-32.836,z:28.859}),c,null),g=u(o({x:19.766,z:-19.999}),c,null);We=m.path,Ge=h.path,Ke=g.path,d(Xe,We),d(Ze,Ge),d(Qe,Ke);let _=(e,t)=>{let n=e?t??p:null,r=e?l(n):f,i=r.path.length>1?r:f;te.current=i.path;let o=i.path.map(e=>new K(e.x,.4,e.z)),s=ee.current;s&&o.length>1&&(s.geometry.dispose(),s.geometry=new Wo(a(o),Math.min(420,Math.max(80,o.length*3)),.2,8,!1),s.material.color.set(e?5498792:2677231),s.visible=!0);let c=[...new Set(i.edges.map(e=>e.name).filter(Boolean))],u=Math.round(i.distance*15.2),d=i.path[0];d&&et&&(et.position.set(d.x,.65,d.z),H?.position&&(H.position.x=d.x,H.position.z=d.z)),H&&(H.details=`正在沿 OSM 真实道路中心线行驶：${c.slice(0,5).join(` → `)||`北京城市道路`}。`,H.meta=`真实路网 A* · ${i.path.length} 个道路节点 · ${u} 米${n?` · 已避开 OSM 道路 ${n}`:``}`),T.current?.({distance:u,eta:Math.max(4,Math.ceil(u/520)),visited:i.visited,roads:c.slice(0,6),blockedRoadId:n})};N.current=_,_(j.current,M.current);let v=[[],[],[]],y=new X({color:12107708,metalness:.28,roughness:.5}),b=new X({color:4217698,metalness:.78,roughness:.22}),x=new X({color:1588562,metalness:.66,roughness:.22,emissive:995394,emissiveIntensity:.16}),S=new X({color:8688535,metalness:.5,roughness:.5}),C=new ts({color:7910851,metalness:.48,roughness:.11,transmission:.12,transparent:!0,opacity:.82,clearcoat:.72}),w=new X({color:12503496,metalness:.76,roughness:.18}),D=new X({color:11108431,metalness:.82,roughness:.2}),O=new X({color:12038307,metalness:.08,roughness:.62}),k=new ts({color:7252149,metalness:.5,roughness:.1,transparent:!0,opacity:.76,clearcoat:.92,clearcoatRoughness:.08}),A=new X({color:5206871,roughness:.92,metalness:0}),P=new X({color:7827818,roughness:.72,metalness:.12}),ne=new X({color:5536859,roughness:.88}),re=new X({color:5796218,metalness:.64,roughness:.24,emissive:1589065,emissiveIntensity:.3}),ie=new ts({color:6066075,metalness:.56,roughness:.12,transparent:!0,opacity:.86,clearcoat:.88,emissive:2183003,emissiveIntensity:.44}),ae=new X({color:7438467,metalness:.42,roughness:.52}),oe=new J({color:16765578,transparent:!0,opacity:ce.current&&F.current?.9:.1}),se=new J({color:9366271,transparent:!0,opacity:ce.current&&F.current?.82:.08});Re.push(oe,se),e.buildings.forEach((e,n)=>{if(e.points.length<3)return;let r=new Za;e.points.forEach(([e,t],n)=>n?r.lineTo(e,-t):r.moveTo(e,-t)),r.closePath();let i=e.core&&e.height>2.4,a=new Io(r,{depth:e.height,bevelEnabled:i,bevelSize:i?.07:0,bevelThickness:i?.07:0,bevelSegments:1});if(a.rotateX(-Math.PI/2),!e.core){v[e.id%v.length].push(a);return}let o=[`apartments`,`residential`,`house`,`dormitory`].includes(e.type),s=e.height>8||[`office`,`commercial`,`retail`,`hotel`].includes(e.type),c=o||!s&&e.height<7.5,l=c?1:e.type===`hotel`?4:s?e.id%2?0:2:3,u=z[l],d=new ts({color:c?Me[e.id%Me.length]:L[e.id%L.length],map:u,bumpMap:u,bumpScale:s?.045:.11,emissiveMap:B[l],roughness:s?.24:.64,metalness:s?.5:.12,clearcoat:s?.48:.08,clearcoatRoughness:s?.2:.62,reflectivity:s?.82:.28,emissive:e.id%3==0?16766624:13167871,emissiveIntensity:F.current?ce.current?.64:.11:.02});V.push(d);let f=new X({color:Ne[e.id%Ne.length],map:Ie,bumpMap:Ie,bumpScale:.06,roughness:.74,metalness:.16}),p=e.points.reduce((t,n)=>[t[0]+n[0]/e.points.length,t[1]+n[1]/e.points.length],[0,0]),m={id:`building-${e.id}`,label:e.name||`北京建筑 ${e.id}`,category:`真实建筑 · ${{office:`写字楼`,commercial:`商业建筑`,retail:`商业综合体`,hotel:`酒店`,apartments:`住宅公寓`,residential:`住宅`,school:`教育建筑`,hospital:`医疗建筑`}[e.type]||`城市建筑`}`,details:`实际高度约 ${e.heightMeters.toFixed(1)} 米${e.levels?` · ${e.levels} 层`:``}。真实地图轮廓、高度与位置叠加精修幕墙、建筑收边及屋顶景观。`,meta:`OSM 建筑编号 ${e.id} · 精修立面 · 点击高亮 · 支持独立灯光控制`,action:`toggle-building-lights`,position:{x:p[0],y:Math.max(2,e.height*.55),z:p[1]}},h=new Y(a,[d,f]);h.name=m.label,h.userData={asset:m,isBuilding:!0},h.castShadow=e.height>4&&n%9==0,h.receiveShadow=!0,De.add(h),Ae.push(h),je.push(h);let g=e.points.map(e=>e[0]),_=e.points.map(e=>e[1]),T=Math.max(.45,Math.max(...g)-Math.min(...g)),E=Math.max(.45,Math.max(..._)-Math.min(..._));if(e.height>2.6&&T>.9&&n%6==0){let e=p[1]+Math.min(E*.53,3.8),t=Math.min(1.15,T*.35),n=new Y(new da(t,.78,.055),C);n.position.set(p[0],.42,e);let r=new Y(new da(Math.min(1.65,T*.5),.08,.58),w);r.position.set(p[0],.92,e+.2);let i=new Y(new da(Math.min(1.25,t*1.2),.055,.06),oe);i.position.set(p[0],.86,e+.49);let a=[-.46,.46].map(n=>{let r=new Y(new pa(.035,.045,.9,8),w);return r.position.set(p[0]+n*t,.45,e+.4),r});De.add(n,r,i,...a)}if(s&&e.height>7&&T>2.2&&n%9==0){let t=p[1]+Math.min(E*.515,3.6),n=Math.min(e.height*.72,8);for(let e=-2;e<=2;e++){let r=new Y(new da(.055,n,.28),w);r.position.set(p[0]+e*Math.min(.48,T*.12),n/2+.8,t+.12),De.add(r)}}if(s&&e.height>8&&T>1.8&&n%15==0){let t=p[1]+Math.min(E*.52,3.7),n=Math.min(e.height*.82,11),r=Math.min(T*.36,2.1);[-1,1].forEach(e=>{let i=new Y(new da(.14,n,.2),k);i.position.set(p[0]+e*r,n/2+.45,t+.09);let a=new Y(new da(.22,.1,.27),D);a.position.set(p[0]+e*r,n+.48,t+.09),De.add(i,a)})}if(e.height>5.5&&T>1.7&&E>1.2&&n%16==0){let t=Math.min(T*.88,6.2),n=Math.min(E*.78,5.2),r=Math.min(3,Math.max(2,Math.floor(e.height/4)));for(let i=1;i<=r;i++){let a=e.height*i/(r+1),o=new Y(new da(t,.08,.1),i%2?O:D),s=o.clone(),c=new Y(new da(.1,.08,n),i%2?O:D),l=c.clone();o.position.set(p[0],a,p[1]+n/2),s.position.set(p[0],a,p[1]-n/2),c.position.set(p[0]+t/2,a,p[1]),l.position.set(p[0]-t/2,a,p[1]),De.add(o,s,c,l)}}if(c&&e.height>2.8&&n%13==0){let t=Math.min(6,Math.max(2,Math.round(e.height/1.15))),n=Math.min(T*.48,2.4),r=p[1]+Math.min(E*.53,3.7);for(let i=1;i<=t;i++){let a=e.height*i/(t+1),o=new Y(new da(n,.06,.3),y);o.position.set(p[0],a,r);let s=new Y(new da(n,.22,.025),b);s.position.set(p[0],a+.14,r+.15),De.add(o,s)}}if([`commercial`,`retail`,`hotel`,`office`].includes(e.type)&&e.height>3.5&&T>2&&n%12==0){let e=p[1]+Math.min(E*.54,3.9),t=Math.min(.72,T*.18),n=Math.min(.9,T*.22);[-1,0,1].forEach(r=>{let i=new Y(new da(t,.07,.5),r===0?D:w);i.rotation.x=-.08,i.position.set(p[0]+r*n,.78,e+.22);let a=new Y(new da(t*.82,.58,.045),C);a.position.set(p[0]+r*n,.38,e+.03),De.add(i,a)})}if(e.height>7&&n%5==0){let t=Math.min(1.05,e.height*.1),n=new Y(new da(Math.min(T*1.08,7.5),t,Math.min(E*1.08,7.5)),new X({color:3491917,metalness:.3,roughness:.48,emissive:1586493,emissiveIntensity:.28}));n.position.set(p[0],t/2,p[1]),n.castShadow=!0,n.receiveShadow=!0,De.add(n);let r=new Y(new da(Math.min(T*.55,3.2),.14,.08),oe);r.position.set(p[0],.42,p[1]+Math.min(E*.54,3.8)),De.add(r)}if(e.height>3.2&&n%3==0){let e=new Qi(new ba(a,24),new Bi({color:7644848,transparent:!0,opacity:.2}));De.add(e)}if(e.height>6.5&&n%4==0){let t=new Y(new da(.95,.75,.95),new X({color:6715259,metalness:.55,roughness:.45}));t.position.set(p[0],e.height+.38,p[1]),De.add(t);let n=Math.min(2.2,e.height*.12),r=new Y(new pa(.025,.045,n,6),new X({color:12245984,emissive:6150632,emissiveIntensity:.35}));if(r.position.set(p[0],e.height+.75+n/2,p[1]),De.add(r),e.height>12){let t=new Y(new Ho(.075,10,8),new J({color:16730429}));t.position.set(p[0],e.height+.8+n,p[1]),De.add(t)}}if(e.height>2.2&&n%7==0){let t=new Y(new da(1.3,.42,.75),S);t.position.set(p[0]+.65,e.height+.22,p[1]-.35);let n=new Y(new Uo(.17,.025,6,14),b);n.rotation.x=Math.PI/2,n.position.set(p[0]+.65,e.height+.45,p[1]-.35),De.add(t,n)}if(e.height>4&&n%11==0){let t=new Y(new da(Math.min(1.6,T*.42),.06,.78),x);t.rotation.x=-.13,t.position.set(p[0]-.5,e.height+.16,p[1]+.25),De.add(t)}if(e.height>5&&T>1.8&&E>1.6&&n%23==0){let t=Math.min(T*.58,3.4),n=Math.min(E*.54,2.8),r=new Y(new da(t,.08,n),A);r.position.set(p[0],e.height+.13,p[1]),De.add(r),[-.32,0,.32].forEach((r,i)=>{let a=new Y(new pa(.16,.2,.18,8),P);a.position.set(p[0]+r*t,e.height+.25,p[1]+(i%2?.2:-.16)*n);let o=new Y(new zo(.25+i*.035,1),ne);o.position.set(a.position.x,e.height+.56,a.position.z),De.add(a,o)})}if(e.height>11&&T>2.4&&E>2&&n%18==0){let t=Math.min(T*.62,4.5),n=Math.min(E*.58,3.8),r=new Y(new da(t,.13,n),O);r.position.set(p[0],e.height+.1,p[1]);let i=new Y(new da(t*.62,.08,n*.32),D);i.position.set(p[0],e.height+.78,p[1]);let a=[[-1,-1],[-1,1],[1,-1],[1,1]].map(([r,i])=>{let a=new Y(new da(.055,.65,.055),D);return a.position.set(p[0]+r*t*.29,e.height+.44,p[1]+i*n*.13),a});De.add(r,i,...a)}if(e.height>5&&n%17==0){let t=new Y(new pa(.34,.38,.52,16),new X({color:9083291,metalness:.7,roughness:.34}));t.position.set(p[0]-.5,e.height+.28,p[1]-.35);let n=new Y(new Ho(.32,14,8,0,Math.PI*2,0,Math.PI/2),new X({color:12766155,metalness:.72,roughness:.25,side:2}));n.rotation.z=-.55,n.position.set(p[0]+.45,e.height+.42,p[1]+.25),De.add(t,n)}if(e.height>8&&n%14==0){let t=Math.min(T*.7,4),n=Math.min(E*.7,4),r=p[1]+n*.5,i=new Y(new da(t,.045,.045),se);i.position.set(p[0],e.height+.18,r),De.add(i)}if(e.height>6&&ze.length<12&&n%37==0){let e=p[1]+Math.min(E*.57,4.1),r=new Vs(n%2?16763001:12118527,ce.current&&F.current?2.4:0,10,2);r.position.set(p[0],1.25,e),ze.push(r),t.add(r)}if(e.height>4&&n%19==0){let t=.22,n=Math.min(T*.72,4.2),r=Math.min(E*.72,4.2),i=new Y(new da(n,t,.08),ae),a=i.clone(),o=new Y(new da(.08,t,r),ae),s=o.clone();i.position.set(p[0],e.height+t/2,p[1]+r/2),a.position.set(p[0],e.height+t/2,p[1]-r/2),o.position.set(p[0]+n/2,e.height+t/2,p[1]),s.position.set(p[0]-n/2,e.height+t/2,p[1]),De.add(i,a,o,s)}if(e.height>12&&n%3==0){let t=Math.min(T*.5,2.8),n=Math.min(E*.5,2.8),r=e.id%3;if(r===0){let r=new Y(new da(t,.46,n),re),i=new Y(new da(t*.68,.5,n*.68),ie);r.position.set(p[0],e.height+.23,p[1]),i.position.set(p[0],e.height+.71,p[1]),De.add(r,i)}else if(r===1){let n=new Y(new pa(t*.34,t*.46,.7,12),ie),r=new Y(new ma(t*.16,.75,8),D);n.position.set(p[0],e.height+.35,p[1]),r.position.set(p[0],e.height+1.05,p[1]),De.add(n,r)}else{let n=new Y(new ma(t*.48,1.05,4),re),r=new Y(new Ho(.09,10,8),se);n.rotation.y=Math.PI/4,n.position.set(p[0],e.height+.52,p[1]),r.position.set(p[0],e.height+1.08,p[1]),De.add(n,r)}}}),v.forEach((e,t)=>{let n=new X({color:L[(t+1)%L.length],map:z[t],bumpMap:z[t],bumpScale:.045,roughness:.46,metalness:.25,emissiveMap:B[t],emissive:t%2?16766624:13167871,emissiveIntensity:F.current?ce.current?.72:.06:.012});V.push(n);for(let t=0;t<e.length;t+=650){let r=e.slice(t,t+650),i=af(r,!1);if(r.forEach(e=>e.dispose()),i){let e=new Y(i,n);e.receiveShadow=!0,De.add(e)}}});let le={trunk:new X({color:12876614,roughness:.62,metalness:.1,emissive:4792590,emissiveIntensity:.24}),trunk_link:new X({color:11173981,roughness:.68,metalness:.08,emissive:3481878,emissiveIntensity:.14}),secondary:new X({color:5798277,roughness:.7,metalness:.12,emissive:1454652,emissiveIntensity:.18}),secondary_link:new X({color:4745846,roughness:.74,metalness:.1,emissive:1124916,emissiveIntensity:.15})},ue={trunk:[],trunk_link:[],secondary:[],secondary_link:[]},de=[];if((e.roads||[]).forEach((e,t)=>{if(e.points.length<2)return;let n=e.points.map(([e,t])=>new K(e,.13,t)),r=new Aa(n,!1,`centripetal`);if(ue[e.type]?.push(new Wo(r,Math.min(42,Math.max(6,n.length*3)),e.width,6,!1)),e.core&&e.name){let t=r.getPointAt(.5),i=new J({color:16731461,transparent:!0,opacity:.025,depthWrite:!1}),a=new Y(new Wo(r,Math.min(42,Math.max(6,n.length*3)),Math.max(.38,e.width*2.2),6,!1),i);a.userData={isRoad:!0,asset:{id:`road-${e.id}`,label:e.name,category:`真实道路 · 可交互封锁`,details:`道路类型：${e.type.includes(`trunk`)?`城市快速路`:`城市主干路`}。点击下方按钮可模拟封锁此道路，并触发应急车辆路径重规划。`,meta:`OSM 道路编号 ${e.id} · 实时交通状态：通行`,action:`block-road`,position:{x:t.x,y:1.2,z:t.z}}},Oe.add(a),Ae.push(a)}if((e.type===`trunk`||e.type===`secondary`)&&t%2==0)for(let e=1;e<n.length-1&&de.length<84;e+=2)de.push(n[e]);if(n.length>2&&t%3==0&&ke.length<54){let e=new An,t=ke.length,i=t%7,a=i===1,o=i===2,s=i===3,c=i===4,l=i===5,u=i===6,d=a?`北京巡游出租车`:o?`城市 SUV`:s?`城市配送车`:c?`城市公交小巴`:l?`新能源掀背车`:u?`运动轿跑`:`城市轿车`,f=a?14006063:c?4032457:l?6666400:[14175555,15132900,3902916,2370097,11035964][t%5],p=c?.42:s?.35:o?.3:u?.2:.24,m=c?1.22:s?.96:o?.84:u?.86:.78,h=c?.46:o?.42:.38,g={id:`traffic-${t+1}`,label:`${d} ${String(t+1).padStart(2,`0`)}`,category:`实时交通 · 可跟随车辆`,details:`车牌 京A·${String(7318+t*137).slice(-4)} · 当前速度 ${36+t%7*4} km/h · 沿北京真实道路行驶。`,meta:`实时轨迹更新 · 点击下方按钮进入车辆跟随视角`,action:`follow-vehicle`,position:{x:n[0].x,y:1.2,z:n[0].z}},_=new Y(new Q(h,p,m,3,.055),new ts({color:f,metalness:c?.38:.58,roughness:c?.34:.26,clearcoat:.72,clearcoatRoughness:.2}));_.position.y=.25,_.castShadow=t<12,_.userData={asset:g,isVehicle:!0,modelQuality:`competition-realism-v2`},Ae.push(_);let v=new Y(new Q(h*.86,c?.38:s?.34:o?.26:.2,c?.78:s?.54:u?.36:.4,3,.045),new ts({color:l?10211793:9353409,metalness:.72,roughness:.13,clearcoat:.9,transparent:!0,opacity:.88}));v.position.set(0,.43+(s||c?.08:0),c||s?.08:.03);let y=new J({color:16773040,transparent:!0,opacity:ce.current?1:.28}),b=new J({color:16724008,transparent:!0,opacity:ce.current?1:.56}),x=new J({color:16753951,transparent:!0,opacity:.18});Ve.push({material:y,day:.28},{material:b,day:.56});let S=new Y(new da(.25,.065,.04),y);S.position.set(0,.28,-m*.52);let C=new Y(new da(.25,.06,.035),b);C.position.set(0,.28,m*.52);let w=new Y(new da(.065,.055,.045),x),T=w.clone();w.position.set(-.145,.29,-m*.53),T.position.set(.145,.29,-m*.53);let E=[],D=new pa(c?.105:.09,c?.105:.09,.075,12),O=new X({color:1119513,roughness:.88}),k=new X({color:10332074,metalness:.8,roughness:.25});[[-h*.54,-m*.3],[h*.54,-m*.3],[-h*.54,m*.3],[h*.54,m*.3]].forEach(([t,n])=>{let r=new Y(D,O);r.rotation.z=Math.PI/2,r.position.set(t,.16,n),E.push(r);let i=new Y(new pa(.035,.035,.08,10),k);i.rotation.z=Math.PI/2,i.position.copy(r.position),e.add(r,i)});let ee=new Y(new da(.13,.04,.012),new J({color:2845102}));ee.position.set(0,.19,-m*.55);let A=new X({color:2305072,metalness:.55,roughness:.35}),te=new Y(new da(.08,.045,.08),A),j=te.clone();if(te.position.set(-h*.62,.42,-.1),j.position.set(h*.62,.42,-.1),e.add(_,v,S,C,w,T,ee,te,j),a){let t=new Y(new da(.17,.08,.1),new J({color:16773281}));t.position.set(0,.59,.04),e.add(t)}if(c&&[-.28,.05,.34].forEach(t=>{let n=new Y(new da(.02,.18,.2),new J({color:9426144})),r=n.clone();n.position.set(-h*.51,.52,t),r.position.set(h*.51,.52,t),e.add(n,r)}),l){let t=new Y(new da(.2,.035,.24),new J({color:6680786}));t.position.set(0,.57,.02),e.add(t)}if(u){let t=new Y(new da(.36,.035,.08),A);t.position.set(0,.43,m*.43),e.add(t)}Oe.add(e),ke.push({mesh:e,curve:r,speed:(c?.019:.025)+t%5*.004,travel:t*.137%2,wheels:E,indicator:x,asset:g,position:new K,ahead:new K})}}),Object.entries(ue).forEach(([e,t])=>{for(let n=0;n<t.length;n+=250){let r=t.slice(n,n+250),i=af(r,!1);if(r.forEach(e=>e.dispose()),i){let t=new Y(i,le[e]||le.secondary);t.receiveShadow=!0,Oe.add(t)}}}),de.length){let e=new ji(new pa(.025,.035,.9,6),new X({color:6058357,metalness:.65,roughness:.42}),de.length),t=new Ho(.07,8,6),n=new J({color:16767370,transparent:!0,opacity:ce.current?1:.12});He=n;let r=new ji(t,n,de.length),i=new tn;de.forEach((t,n)=>{i.makeTranslation(t.x,.57,t.z),e.setMatrixAt(n,i),i.makeTranslation(t.x,1.04,t.z),r.setMatrixAt(n,i)}),e.instanceMatrix.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0,Oe.add(e,r)}E.current?.(`ready`)}).catch(e=>{e?.name!==`AbortError`&&(console.warn(`北京建筑数据载入失败`,e),E.current?.(`degraded`))});for(let e=0;e<36;e++){let n=new Y(new pa(.12,.18,1.5,6),new X({color:4928548})),r=new Y(new ma(.8,2.2,8),new X({color:2318404})),i=29+e%9*3.1,a=22+Math.floor(e/9)*4;n.position.set(i,.75,a),r.position.set(i,2.1,a),t.add(n,r)}let U=uf(t,Ae,{id:`incident`,label:`危化品泄漏源`,category:`重大事故 · 实时监测`,details:`罐体尾阀受损 · 下风向浓度持续上升，风险扩散模型正在实时推演。`,meta:`事件由完整演示状态机实时驱动`},`危化品泄漏源`,-3,-3,16732489);U.visible=!1,uf(t,Ae,{id:`school`,label:`城北实验学校`,category:`重点保护目标`,details:`在校师生 2,146 人 · 东南侧上风向安全通道畅通。`,meta:`距事故点 480m · 预防性疏散状态实时更新`},`城北实验学校`,35,-23,4447985),uf(t,Ae,{id:`hospital`,label:`市第三人民医院`,category:`医疗救援资源`,details:`急诊绿色通道已启用 · 医疗队 3 组待命。`,meta:`三级医院 · 救治能力充足`},`市第三人民医院`,-37,28,4382114),uf(t,Ae,{id:`station`,label:`青岚消防站`,category:`消防救援资源`,details:`2 辆泡沫消防车、1 辆洗消车已出动。`,meta:`应急响应中 · 路径由 A* 算法规划`},`青岚消防站`,-35,-30,16753485);let tt=df([new K(-35,.4,-30),new K(-20,.4,-18),new K(-3,.4,-3)],2677231);tt.visible=!1,t.add(tt),ee.current=tt;let nt=[];[[1,16174922,.18],[1,16748349,.23],[1,16729413,.3]].forEach(([e,n,r])=>{let i=new Y(new fa(e,64),new J({color:n,transparent:!0,opacity:r,depthWrite:!1,side:2}));i.rotation.x=-Math.PI/2,i.position.set(-3,.18,-3),i.visible=se.current,t.add(i),nt.push(i)}),k.current=nt;let rt=new ts({color:13383727,metalness:.42,roughness:.28,clearcoat:.78,clearcoatRoughness:.18,emissive:5510415,emissiveIntensity:.24}),W=new Y(new Q(1.25,.46,2.4,4,.12),rt),it=new Y(new Q(1.08,.92,.76,4,.12),new ts({color:15289400,metalness:.38,roughness:.27,clearcoat:.82,clearcoatRoughness:.16}));it.position.set(0,.45,-.7);let at=new Y(new Q(.78,.35,.035,3,.04),new ts({color:8369091,metalness:.72,roughness:.1,clearcoat:1,transparent:!0,opacity:.9}));at.position.set(0,.54,-1.095);let ot=new Y(new Q(1.04,.76,1.12,3,.08),new X({color:13621463,metalness:.66,roughness:.3}));ot.position.set(0,.38,.42);let st=new Y(new pa(.18,.22,.12,12),new X({color:9148827,metalness:.7,roughness:.3}));st.position.set(0,.85,.42);let ct=new Y(new pa(.055,.07,.72,10),new X({color:12898513,metalness:.8,roughness:.22}));ct.rotation.x=Math.PI/2,ct.position.set(0,1.02,.18);let lt=new Y(new Q(.7,.12,.2,2,.035),new J({color:3845887}));lt.position.set(0,.98,-.7);let ut=new J({color:16773306}),dt=new Y(new Q(.62,.12,.035,2,.025),ut);dt.position.set(0,.05,-1.22);let ft=new X({color:12503497,metalness:.72,roughness:.3});[-.631,.631].forEach(e=>{for(let t=-.05;t<=.72;t+=.38){let n=new Y(new Q(.025,.52,.32,2,.02),ft);n.position.set(e,.32,t),W.add(n)}}),W.add(it,at,ot,st,ct,lt,dt);let pt=new pa(.22,.22,.14,18),mt=new X({color:1119513,roughness:.9}),ht=[];[[-.62,-.76],[.62,-.76],[-.62,.76],[.62,.76]].forEach(([e,t])=>{let n=new Y(pt,mt);n.rotation.z=Math.PI/2,n.position.set(e,-.32,t),ht.push(n),W.add(n)});let gt={id:`firetruck`,label:`泡沫消防车 01`,category:`动态应急车辆 · OSM 真实道路`,details:`真实道路网络正在加载，消防车将在道路中心线上执行任务。`,meta:`OSM 路网 A* · 实时轨迹和转向更新`,action:`follow-vehicle`,position:{x:-35,y:2,z:-30}};W.castShadow=!0,W.userData={asset:gt,modelQuality:`competition-realism-v2`},et=W,H=gt,t.add(W),Ae.push(W);let _t=new Y(new Q(1.2,.46,2.18,4,.12),new ts({color:15332594,metalness:.25,roughness:.33,clearcoat:.68,clearcoatRoughness:.2,emissive:1461055,emissiveIntensity:.16})),vt=new Y(new Q(1.02,1.02,1.66,4,.13),new ts({color:15923189,metalness:.18,roughness:.34,clearcoat:.72,clearcoatRoughness:.2}));vt.position.set(0,.46,.08);let yt=new Y(new Q(.76,.38,.035,3,.035),new ts({color:7711159,metalness:.7,roughness:.1,clearcoat:1,transparent:!0,opacity:.9}));yt.position.set(0,.6,-.77);let bt=new Y(new Q(1.23,.13,1.58,2,.025),new J({color:3127191}));bt.position.set(0,.43,.1);let xt=new Y(new Q(.62,.12,.2,2,.035),new J({color:3397887}));xt.position.set(0,1.03,-.3);let St=new Y(new Q(.62,.11,.035,2,.025),ut);St.position.set(0,.06,-1.11);let Ct=new Y(new Q(.48,.12,.42,2,.035),new X({color:14147807,metalness:.42,roughness:.42}));Ct.position.set(0,1.03,.43);let wt=new Y(new Q(.86,.08,.18,2,.025),ft);wt.position.set(0,-.08,1.15);let Tt=new J({color:15219509});[-.52,.52].forEach(e=>{let t=new Y(new da(.025,.42,.13),Tt),n=new Y(new da(.025,.13,.42),Tt);t.position.set(e,.55,.25),n.position.set(e,.55,.25),_t.add(t,n)}),_t.add(vt,yt,bt,xt,St,Ct,wt);let Et=[];[[-.6,-.68],[.6,-.68],[-.6,.68],[.6,.68]].forEach(([e,t])=>{let n=new Y(pt,mt);n.rotation.z=Math.PI/2,n.position.set(e,-.31,t),Et.push(n),_t.add(n)});let Dt={id:`ambulance`,label:`救护车 03`,category:`动态医疗车辆 · 可跟随`,details:`当前位置：体育中心 · 载员 4 人，正在前往临时分诊点。`,meta:`车辆状态：待命转运 · 支持近距离跟随观察`,action:`follow-vehicle`,position:{x:-28,y:2,z:23}};_t.position.set(-28,.7,23),_t.rotation.y=-.72,_t.userData={asset:Dt,modelQuality:`competition-realism-v2`},_t.castShadow=!0,t.add(_t),Ae.push(_t);let Ot=new An,kt=new Y(new Q(1.25,.38,2.55,3,.1),new X({color:2700344,metalness:.56,roughness:.36})),Mt=new Y(new Q(1.08,.92,.85,4,.12),new ts({color:14068015,metalness:.42,roughness:.28,clearcoat:.72,clearcoatRoughness:.18})),Nt=new Y(new pa(.48,.48,1.45,28),new ts({color:12174748,metalness:.4,roughness:.36,clearcoat:.42,clearcoatRoughness:.28,emissive:4082464,emissiveIntensity:.1}));Mt.position.set(0,.45,-.78),Nt.rotation.x=Math.PI/2,Nt.position.set(0,.54,.44),kt.position.y=-.02;let Pt=new Y(new Q(.76,.34,.04,3,.035),new ts({color:7577258,metalness:.74,roughness:.1,clearcoat:1,transparent:!0,opacity:.9}));Pt.position.set(0,.58,-1.22);let Ft=new Y(new Q(1.28,.13,1.48,2,.025),new J({color:15122743}));Ft.position.set(0,.39,.45);let It=new Y(new Q(.62,.11,.18,2,.03),new J({color:16753955}));It.position.set(0,.98,-.75);let Lt=[];[[-.62,-.78],[.62,-.78],[-.62,.78],[.62,.78]].forEach(([e,t])=>{let n=new Y(pt,mt);n.rotation.z=Math.PI/2,n.position.set(e,-.29,t),Lt.push(n),Ot.add(n)});let Rt={id:`chemical-truck`,label:`化学废料运输车 京A·WH2576`,category:`事故车辆 · 真实道路动态`,details:`装载含氯化学废料 12.6 吨，正在沿北京真实道路执行转运任务。`,meta:`车速 32 km/h · 罐体压力 0.42 MPa · 遥测在线`,action:`follow-vehicle`,position:{x:-29,y:1.5,z:-8}};kt.userData={asset:Rt,modelQuality:`competition-realism-v2`},Ot.add(kt,Mt,Nt,Pt,Ft,It),Ot.castShadow=!0,t.add(Ot),Ae.push(kt);let zt=new J({color:14080093,transparent:!0,opacity:.26,depthWrite:!1}),Bt=[],Vt=new An;for(let e=0;e<18;e++){let t=new Y(new Ho(.16+e%4*.055,10,8),zt);t.userData.seed=e,Bt.push(t),Vt.add(t)}let Ht=new Y(new Vo(.72,1.02,32),new J({color:16764739,transparent:!0,opacity:.72,side:2,depthWrite:!1}));Ht.rotation.x=-Math.PI/2,Ht.position.set(0,.04,.7),Vt.add(Ht),Vt.visible=!1,Ot.add(Vt);let Ut=new An,Wt=new Y(new Q(.92,.38,1.9,4,.11),new ts({color:15265776,metalness:.52,roughness:.26,clearcoat:.85,clearcoatRoughness:.16})),Gt=new Y(new Q(.78,.48,.78,4,.09),new ts({color:4682378,metalness:.7,roughness:.11,clearcoat:1,transparent:!0,opacity:.91}));Wt.position.y=.05,Gt.position.set(0,.43,.02);let Kt=new Y(new Q(.94,.17,1.25,2,.025),new J({color:2382248}));Kt.position.set(0,.18,.08);let qt=new Y(new Q(.28,.11,.18,2,.03),new J({color:16728378})),Jt=new Y(new Q(.28,.11,.18,2,.03),new J({color:2592255}));qt.position.set(-.17,.72,-.08),Jt.position.set(.17,.72,-.08);let Xt=[];[[-.48,-.58],[.48,-.58],[-.48,.58],[.48,.58]].forEach(([e,t])=>{let n=new Y(pt,mt);n.scale.set(.82,.82,.82),n.rotation.z=Math.PI/2,n.position.set(e,-.2,t),Xt.push(n),Ut.add(n)});let Zt={id:`police-car`,label:`公安疏散警车 07`,category:`交通管制车辆 · 可跟随`,details:`执行事故点周边道路封控、应急车道清空和下风向人员疏散。`,meta:`警力 4 人 · 3 个路口联动 · 疏散通道已规划`,action:`follow-vehicle`,position:{x:31,y:1.4,z:-28}};Wt.userData={asset:Zt,modelQuality:`competition-realism-v2`},Ut.add(Wt,Gt,Kt,qt,Jt),t.add(Ut),Ae.push(Wt);let Qt=new X({color:11977928,metalness:.88,roughness:.16}),$t=new X({color:1515815,metalness:.5,roughness:.36}),en=new ts({color:7645365,metalness:.72,roughness:.08,clearcoat:1,transparent:!0,opacity:.86}),nn=new J({color:16757549}),rn=new J({color:16727860}),an=(e,t)=>t.forEach(t=>{let n=new Y(new pa(.085,.085,.15,14),Qt);n.rotation.z=Math.PI/2,n.position.copy(t.position),n.scale.copy(t.scale),e.add(n)}),on=(e,t,n,r)=>{let i=new Y(new fa(1,32),new J({color:0,transparent:!0,opacity:.2,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.scale.set(t,n,1),i.position.y=r,i.renderOrder=1,e.add(i)};an(W,ht),an(_t,Et),an(Ot,Lt),an(Ut,Xt),on(W,.82,1.5,-.535),on(_t,.78,1.38,-.525),on(Ot,.82,1.52,-.515),on(Ut,.65,1.12,-.39);let sn=new An;sn.name=`消防车伸缩云梯与器材组`,[-.3,.3].forEach(e=>{let t=new Y(new pa(.025,.025,1.55,8),Qt);t.rotation.x=Math.PI/2,t.position.set(e,1.02,.35),sn.add(t)});for(let e=0;e<7;e++){let t=new Y(new pa(.018,.018,.62,7),Qt);t.rotation.z=Math.PI/2,t.position.set(0,1.02,-.26+e*.2),sn.add(t)}let cn=new X({color:1648428,metalness:.34,roughness:.55});[-.645,.645].forEach((e,t)=>{let n=new Y(new Uo(.18,.032,8,20),cn);n.rotation.y=Math.PI/2,n.position.set(e,.44,.42+t*.24),sn.add(n)});let ln=new Y(new Q(.68,.22,.035,2,.018),$t);ln.position.set(0,.13,-1.225);let un=new Y(new Q(1.12,.11,.12,2,.028),Qt);un.position.set(0,-.12,-1.22),W.add(sn,ln,un),[-.515,.515].forEach(e=>{[-.35,.2,.65].forEach(t=>{let n=new Y(new Q(.025,.26,.36,2,.025),en);n.position.set(e,.62,t),_t.add(n)})});let dn=new Y(new Q(.45,.72,.035,2,.02),new X({color:15266287,roughness:.36,metalness:.18})),fn=dn.clone();dn.position.set(-.24,.48,1.12),fn.position.set(.24,.48,1.12);let pn=new Y(new Q(.96,.1,.13,2,.03),Qt);pn.position.set(0,-.08,-1.08),_t.add(dn,fn,pn),[-.04,.44,.91].forEach(e=>{let t=new Y(new Uo(.49,.035,8,28),Qt);t.position.set(0,.54,e),Ot.add(t)});let mn=new Y(new Q(.34,.055,1.22,2,.02),$t);mn.position.set(0,1.04,.43);let hn=new Y(new pa(.08,.11,.24,12),Qt);hn.rotation.x=Math.PI/2,hn.position.set(0,.54,1.19);let gn=new Y(new Q(.025,.28,.28,2,.018),nn),_n=gn.clone();gn.position.set(-.64,.42,.42),_n.position.set(.64,.42,.42),gn.rotation.x=Math.PI/4,_n.rotation.x=Math.PI/4,Ot.add(mn,hn,gn,_n);let vn=new Y(new Q(.82,.16,.54,3,.06),new ts({color:15265776,metalness:.48,roughness:.25,clearcoat:.86}));vn.position.set(0,.29,-.63);let yn=vn.clone();yn.scale.z=.68,yn.position.z=.7,[-.405,.405].forEach(e=>{let t=new Y(new Q(.1,.07,.12,2,.025),$t);t.position.set(e,.46,-.15),Ut.add(t);let n=new Y(new Q(.025,.25,.42,2,.025),en);n.position.set(e,.48,.03),Ut.add(n)}),[-.22,.22].forEach(e=>{let t=new Y(new Q(.16,.08,.035,2,.02),ut);t.position.set(e,.19,-.96);let n=new Y(new Q(.14,.075,.035,2,.02),rn);n.position.set(e,.19,.96),Ut.add(t,n)});let bn=new Y(new Q(.84,.09,.1,2,.025),$t);bn.position.set(0,-.08,-.97),Ut.add(vn,yn,bn);let xn=[new K(5.8,6.2,8.4),new K(-5.8,6.2,8.4),new K(5.8,6.2,-8.4),new K(-5.8,6.2,-8.4)],Sn=[Ot,W,_t,Ut].map((e,t)=>({camera:new zs(49,1,.08,360),target:e,rawPosition:new K,stablePosition:new K,offset:xn[t],cameraGoal:new K,lookAt:new K,ready:!1})),Cn=e=>{e.target.getWorldPosition(e.rawPosition),e.ready?e.stablePosition.lerp(e.rawPosition,.12):(e.stablePosition.copy(e.rawPosition),e.camera.position.copy(e.rawPosition).add(e.offset),e.ready=!0),e.cameraGoal.copy(e.stablePosition).add(e.offset),e.camera.position.lerp(e.cameraGoal,.12),e.lookAt.copy(e.stablePosition),e.lookAt.y+=.5,e.camera.lookAt(e.lookAt),e.camera.updateMatrixWorld()},wn=new An,Tn=new X({color:16741437,emissive:7281416,emissiveIntensity:.25}),En=new X({color:5663344,metalness:.68,roughness:.32});[[-2.5,-1.1],[-1.6,-.75],[1.7,.75],[2.55,1.1]].forEach(([e,t])=>{let n=new Y(new ma(.16,.48,10),Tn);n.position.set(e,.24,t),wn.add(n)});let Dn=new Y(new da(3.3,.17,.12),new J({color:16765773}));Dn.position.set(0,.55,0);let On=new Y(new da(.1,.8,.1),En),kn=On.clone();On.position.set(-1.35,.38,0),kn.position.set(1.35,.38,0),wn.add(Dn,On,kn),wn.position.set(-1.8,.16,-1.5),wn.visible=!1,t.add(wn);let jn=[],Mn=new pa(.09,.12,.48,7),Nn=new Ho(.11,8,6),Pn=[4830952,15050570,6341002,12024785].map(e=>new X({color:e,roughness:.75})),Fn=new X({color:14200979,roughness:.8});for(let e=0;e<20;e++){let n=new An,r=new Y(Mn,Pn[e%Pn.length]),i=new Y(Nn,Fn);r.position.y=.27,i.position.y=.63,n.add(r,i),n.userData.offsetX=e%5*.42-1,n.userData.offsetZ=Math.floor(e/5)*.38-.6,n.visible=!1,t.add(n),jn.push(n)}let In=new An,Ln=new J({color:14023679,transparent:!0,opacity:.62,depthWrite:!1});for(let e=0;e<16;e++){let t=new Y(new Ho(.12+e%3*.05,9,7),Ln);t.userData.seed=e,In.add(t)}In.position.set(-3,.2,-3),In.visible=!1,t.add(In);let Bn=new An,Vn=new Y(new da(1.8,.08,1.35),new X({color:5017464,roughness:.72})),Hn=new Y(new ma(1.12,.75,4),new X({color:15135469,roughness:.55})),Un=new Y(new da(.12,.5,.05),Tt),Wn=new Y(new da(.46,.12,.05),Tt);Hn.rotation.y=Math.PI/4,Hn.position.y=.46,Un.position.set(0,.5,-.82),Wn.position.set(0,.5,-.82),Bn.add(Vn,Hn,Un,Wn),Bn.position.set(1.9,.1,1.6),Bn.visible=!1,t.add(Bn);let Gn=new cc,Kn=new G,qn=new mc(new er,6483711);qn.visible=!1,qn.material.transparent=!0,qn.material.opacity=.88,t.add(qn);let Jn=new Map,Yn=new cc,Xn=new K,Zn=new K,Qn=e=>{let t=Jn.get(e);t&&(t.forEach(e=>{e.material.opacity=e.opacity,e.material.transparent=e.transparent,e.material.depthWrite=e.depthWrite,e.material.needsUpdate=!0}),Jn.delete(e))},$n=e=>{if(Jn.has(e))return;let t=(Array.isArray(e.material)?e.material:[e.material]).map(e=>({material:e,opacity:e.opacity,transparent:e.transparent,depthWrite:e.depthWrite}));t.forEach(e=>{e.material.transparent=!0,e.material.opacity=.14,e.material.depthWrite=!1,e.material.needsUpdate=!0}),Jn.set(e,t)},tr=(e,t=i)=>{if(!e){[...Jn.keys()].forEach(Qn);return}Xn.copy(e),Zn.copy(t.position).sub(e);let n=Zn.length();if(n<1){[...Jn.keys()].forEach(Qn);return}Zn.normalize(),Yn.set(Xn,Zn),Yn.near=.55,Yn.far=Math.max(.6,n-.9);let r=new Set(Yn.intersectObjects(je,!1).slice(0,8).map(e=>e.object));[...Jn.keys()].forEach(e=>{r.has(e)||Qn(e)}),r.forEach($n)},nr=e=>{if(ie.current)return;let t=a.domElement.getBoundingClientRect();return Kn.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),Gn.setFromCamera(Kn,i),Gn.intersectObjects(Ae,!1)[0]},rr=0,ir=e=>{let t=performance.now();if(t-rr<45)return;rr=t;let n=nr(e)?.object.userData.asset;a.domElement.style.cursor=n?`pointer`:`grab`,n?(c.textContent=n.label,c.style.display=`block`,c.style.left=`${e.offsetX+14}px`,c.style.top=`${e.offsetY+14}px`):c.style.display=`none`},ar=()=>{c.style.display=`none`,a.domElement.style.cursor=`grab`},or=null,sr=null,cr=null,lr=e=>{let t=nr(e),n=t?.object.userData.asset;or&&=(or.opacity=.025,null),sr=t?.object||null,n?(w.current(n),t.object.userData.isRoad?(or=t.object.material,or.opacity=.82,qn.visible=!1):(qn.box.setFromObject(t.object),qn.visible=!0)):qn.visible=!1},ur=e=>{let t=nr(e)?.object.userData.asset;t?.position&&(cr=null,i.position.set(t.position.x+15,Math.max(t.position.y+13,18),t.position.z+15),l.target.set(t.position.x,t.position.y,t.position.z),l.update())};a.domElement.addEventListener(`pointermove`,ir),a.domElement.addEventListener(`pointerleave`,ar),a.domElement.addEventListener(`pointerup`,lr),a.domElement.addEventListener(`dblclick`,ur);let dr=e=>{let t=e.detail,n=typeof t==`string`?t:t?.action;if(n===`follow`&&(cr=t.assetId&&Ae.find(e=>e.userData.asset?.id===t.assetId)||null),n===`toggle-building-lights`&&t.assetId){let e=Ae.find(e=>e.userData.asset?.id===t.assetId&&e.userData.isBuilding);if(e){let t=(Array.isArray(e.material)?e.material:[e.material])[0];Le.has(t)?Le.delete(t):Le.add(t),Ue(ce.current)}}if(n===`zoomIn`&&i.position.multiplyScalar(.85),n===`zoomOut`&&i.position.multiplyScalar(1.15),n===`incident`&&(cr=null,i.position.set(38,48,42),l.target.set(-3,1.8,-3)),n===`focus`&&t.position){cr=null;let e=t.position;i.position.set(e.x+18,Math.max(e.y+17,22),e.z+18),l.target.set(e.x,e.y,e.z)}n===`reset`&&(cr=null,i.position.set(92,100,108),l.target.set(0,6,0)),l.update()};window.addEventListener(`city-camera`,dr);let fr=0,pr=0,mr=0,hr=()=>{cancelAnimationFrame(fr),fr=requestAnimationFrame(()=>{let t=Math.max(1,Math.round(e.clientWidth)),n=Math.max(1,Math.round(e.clientHeight));Math.abs(t-pr)<2&&Math.abs(n-mr)<2||(pr=t,mr=n,a.setSize(t,n,!1),i.aspect=t/n,i.updateProjectionMatrix())})},gr=new ResizeObserver(hr);gr.observe(e),hr();let _r=new WeakMap,vr=(e,t)=>{if(e.length<2){let t=e[0]||{x:-39.704,z:-31.899};return new K(t.x,.65,t.z)}let n=_r.get(e);if(!n){let t=[],r=0;for(let n=1;n<e.length;n++){let i=Math.hypot(e[n].x-e[n-1].x,e[n].z-e[n-1].z);t.push(i),r+=i}n={lengths:t,total:r},_r.set(e,n)}let r=Math.max(0,Math.min(.999999,t))*n.total;for(let t=0;t<n.lengths.length;t++){if(r<=n.lengths[t]){let i=n.lengths[t]?r/n.lengths[t]:0;return new K(At.lerp(e[t].x,e[t+1].x,i),.65,At.lerp(e[t].z,e[t+1].z,i))}r-=n.lengths[t]}let i=e[e.length-1];return new K(i.x,.65,i.z)},yr=new WeakSet,br=e=>Math.max(0,Math.min(1,e)),Sr=(e,t,n,r)=>{let i=br(n),a=vr(t,i),o=Math.min(.998,i+.006),s=vr(t,o);if(e.position.copy(a),o>i){let t=Math.atan2(s.x-a.x,s.z-a.z)+Math.PI;if(!yr.has(e))e.rotation.y=t,yr.add(e);else{let n=Math.atan2(Math.sin(t-e.rotation.y),Math.cos(t-e.rotation.y));e.rotation.y+=n*.14}e.rotation.x=0,e.rotation.z=0}return r?.position&&(r.position.x=a.x,r.position.y=1.5,r.position.z=a.z),a},Cr=[{x:-64.181,z:-2.804},{x:-34,z:-5},{x:-3,z:-3}],wr=[{x:-32.836,z:28.859},{x:-20,z:16},{x:-3,z:-3}],Tr=[{x:19.766,z:-19.999},{x:11,z:-13},{x:-3,z:-3}],Er=[{x:-35,z:-30},{x:-20,z:-18},{x:-3,z:-3}],Dr=new dc,Or=new K,kr=new K,Ar=new K,jr=new K,Mr=new K,Pr=new K,Fr=new K(0,5,0),Ir=0,Lr=0,Rr=0,Br=0,Vr=0,Hr=null,Ur=()=>{if(Ir=requestAnimationFrame(Ur),oe.current||document.hidden){Lr++%18==0&&(l.update(),a.render(t,i));return}let n=Dr.getElapsedTime(),r=Math.min(.05,Math.max(0,n-Br)),o=P.current,s=ne.current,c=s-Vr;Vr=Math.abs(c)>1.25?s:Vr+c*.16;let u=Vr,d=o>0,f=o===9?.36:1;if(Br=n,U.visible=d&&o>=2,ae.current){cr=null;let e=n*.055+.7;i.position.set(Math.cos(e)*142,78+Math.sin(n*.11)*9,Math.sin(e)*142),l.target.lerp(Fr,.08)}nt.forEach((e,t)=>{let r=1+Math.sin(n*1.6+t)*.035,i=A.current[t];e.scale.set(i[0]*r*f,i[1]*r*f,1),e.material.opacity=[.18,.23,.3][t]*(.8+Math.sin(n*1.8+t)*.2)*(o===9?.35:1)});let p=o>=6?Math.min(re.current,18):re.current;ke.forEach((e,t)=>{if(e.mesh.visible=t<p,!e.mesh.visible)return;let i=o>=2&&o<6?.62:1;e.travel=(e.travel+r*e.speed*i)%2;let a=e.travel<1,s=a?e.travel:2-e.travel,c=Math.max(0,Math.min(1,s+(a?.004:-.004)));e.curve.getPointAt(s,e.position),e.curve.getPointAt(c,e.ahead);let l=e.position,u=e.ahead;e.mesh.position.copy(l),Math.abs(c-s)>1e-4&&(e.mesh.lookAt(u),e.mesh.rotation.y+=Math.PI,e.mesh.rotation.x=0,e.mesh.rotation.z=0),e.wheels.forEach(e=>e.rotation.y-=r*(12+t%4)*i),e.indicator.opacity=Math.sin(n*4+t*.7)>.55?1:.16,e.asset.position&&(e.asset.position.x=l.x,e.asset.position.y=1.1,e.asset.position.z=l.z)});let m=We.length>1?We:Cr,h=Ge.length>1?Ge:wr,g=Ke.length>1?Ke:Tr,_=te.current.length>1?te.current:Er,v=d?br(u/7):0;if(Sr(Ot,m,v,Rt),Lt.forEach(e=>e.rotation.y=-u*8*v),It.visible=d&&o>=2&&Math.sin(n*11)>.05,Vt.visible=d&&o>=2,zt.opacity=o===9?.08:.28,Vt.visible){let e=Math.max(0,u-7);Bt.forEach((t,n)=>{let r=(e*.24+n*.113)%1,i=n*2.17;t.position.set(Math.cos(i)*(.22+r*1.5),.48+r*2.1,.68+Math.sin(i)*(.18+r*1.7)),t.scale.setScalar(.65+r*1.4)});let t=1+Math.sin(n*5)*.13;Ht.scale.setScalar(t)}Xe.visible=d&&o===1,Xe.material.opacity=.34,tt.visible=d?o>=4:C.current,Ze.visible=d&&o>=4,Qe.visible=d&&o>=4;let y=o===9?5564328:2677231;if(tt.material.color.setHex(y),Ze.material.color.setHex(o===9?5564328:5039025),Qe.material.color.setHex(o===9?5564328:4887039),d){let e=br((u-27)/22);Sr(W,_,e*.985,gt),ht.forEach(t=>t.rotation.y=-e*48);let t=br((u-27)/32);Sr(_t,h,t*.92,Dt),Et.forEach(e=>e.rotation.y=-t*52);let n=br((u-27)/13);Sr(Ut,g,n*.84,Zt),Xt.forEach(e=>e.rotation.y=-n*42)}else Sr(W,_,0,gt),Sr(_t,h,0,Dt),Sr(Ut,g,0,Zt);if(lt.visible=(d?o>=4:C.current)&&Math.sin(n*9)>-.2,xt.visible=d&&o>=4&&Math.sin(n*8+1)<.25,qt.visible=d&&o>=4&&Math.sin(n*12)>.05,Jt.visible=d&&o>=4&&Math.sin(n*12)<=.05,wn.visible=d&&o>=6,jn.forEach((e,t)=>{if(e.visible=d&&o>=6,!e.visible)return;let n=br((u-40)/9),r=e.userData.offsetX,i=e.userData.offsetZ;e.position.set(35+r+n*16,.02,-23+i-n*12+Math.sin(u*5+t)*.08),e.rotation.y=-.65,e.children[0].rotation.z=Math.sin(u*8+t)*.12}),In.visible=d&&o>=7,In.children.forEach((e,t)=>{let n=((u-49)*.5+t*.09)%1,r=t*.84;e.position.set(n*2.2*Math.cos(r),.18+n*.8,n*2.2*Math.sin(r)),e.scale.setScalar(.7+n*1.25)}),Bn.visible=d&&o>=8,d&&(Rt.details=o===1?`装载含氯化学废料 12.6 吨，沿 OSM 真实道路正常行驶。`:`动力系统故障，尾阀受冲击松动并发生含氯废料泄漏。`,Rt.meta=o===1?`车速 32 km/h · 罐体压力 0.42 MPa · 遥测正常`:`车辆已停车 · AI 告警生效 · 联合响应阶段 ${String(o).padStart(2,`0`)}/09`,Zt.meta=o>=6?`已到场 · 3 个路口封控 · 186 人向侧上风向疏散`:`警力 4 人 · 正沿真实道路赶赴现场`,Dt.meta=o>=8?`已到场 · 2 名轻度吸入人员完成检伤`:`医疗组 4 人 · 绿色通道已开启`),sr&&qn.visible&&qn.box.setFromObject(sr),cr&&!ae.current?(cr.getWorldPosition(Or),Hr===cr?kr.lerp(Or,.16):(kr.copy(Or),Hr=cr),Ar.set(7.6,7,10.8),jr.copy(kr).add(Ar),jr.y=Math.max(jr.y,kr.y+6.8),Mr.copy(kr),Mr.y+=.7,i.position.lerp(jr,.085),l.target.lerp(Mr,.14)):Hr=null,Ir%4==0&&!ie.current&&(cr&&!ae.current?(cr.getWorldPosition(Pr),Pr.y+=.65,tr(Pr)):d&&!ae.current?(Pr.set(-3,1.25,-3),tr(Pr)):tr(null)),l.update(),Lr++,!ie.current&&Lr%3==0&&(a.shadowMap.needsUpdate=!0),ie.current&&d){if(tr(null),Sn.forEach(Cn),Rr++%2==0){let n=Math.max(2,e.clientWidth),r=Math.max(2,e.clientHeight),i=Math.floor(n/2),o=Math.floor(r/2),s=[[0,o],[i,o],[0,0],[i,0]];a.setScissorTest(!0),Sn.forEach((e,n)=>{e.camera.aspect=i/Math.max(o,1),e.camera.updateProjectionMatrix();let[r,c]=s[n];a.setViewport(r,c,i,o),a.setScissor(r,c,i,o),a.render(t,e.camera)}),a.setScissorTest(!1),a.setViewport(0,0,n,r)}}else Rr=0,a.render(t,i)};return Ur(),()=>{le.current=()=>{},N.current=()=>{},$e.abort(),cancelAnimationFrame(Ir),cancelAnimationFrame(fr),gr.disconnect(),[...Jn.keys()].forEach(Qn),window.removeEventListener(`city-camera`,dr),a.domElement.removeEventListener(`pointermove`,ir),a.domElement.removeEventListener(`pointerleave`,ar),a.domElement.removeEventListener(`pointerup`,lr),a.domElement.removeEventListener(`dblclick`,ur),l.dispose();let n=new Set,r=new Set,i=new Set;t.traverse(e=>{if(e instanceof Y||e instanceof Qi||e instanceof $r||e instanceof ia){`geometry`in e&&e.geometry&&n.add(e.geometry);let t=`material`in e?e.material:null;(Array.isArray(t)?t:t?[t]:[]).forEach(e=>{r.add(e),Object.values(e).forEach(e=>{e instanceof Yt&&i.add(e)})})}}),n.forEach(e=>e.dispose()),r.forEach(e=>e.dispose()),i.forEach(e=>e.dispose()),a.renderLists.dispose(),a.dispose(),a.forceContextLoss(),e.innerHTML=``}},[]);let ue=(e,t)=>Math.round(Math.max(0,Math.min(1,(p-e)/(t-e)))*100),de=(e,t)=>m&&p>=e&&p<t,fe=ue(0,7),pe=ue(27,49),me=ue(27,59),he=ue(27,40),ge=_?.filter(Boolean).slice(0,4).join(` → `)||`青岚消防站 → 东三环应急车道 → 国贸桥`,_e=[{code:`HAZ-2576`,name:`危化品运输车`,plate:`京A·WH2576`,tone:`hazard`,speed:de(0,7)?32:0,progress:fe,status:f===0?`等待启动`:f===1?`正常运输`:f===2?`故障停车`:f===9?`现场受控`:`泄漏处置`,location:fe<100?`建国路东向`:`国贸桥西侧事故点`,route:`京通快速路 → 建国路 → 国贸桥`},{code:`FIRE-01`,name:`泡沫消防车`,plate:`京A·X119F`,tone:`fire`,speed:de(27,49)?42:0,progress:pe,status:f<4?`消防站待命`:f===4?`接收调度`:f<7?`赶赴现场`:f===9?`任务完成`:`水幕堵漏`,location:pe===0?`青岚消防站`:pe<100?`东三环应急车道`:`事故点上风向`,route:ge},{code:`MED-03`,name:`医疗救护车`,plate:`京A·E120M`,tone:`medical`,speed:de(27,59)?38:0,progress:me,status:f<4?`医院待命`:f===4?`绿色通道开启`:f<8?`赶赴现场`:f===9?`转运完成`:`现场检伤`,location:me===0?`市第三人民医院`:me<100?`建国门外大街`:`临时分诊点`,route:`市第三人民医院 → 建国门外大街 → 现场绿色通道`},{code:`POLICE-07`,name:`公安疏散警车`,plate:`京A·P0711`,tone:`police`,speed:de(27,40)?48:0,progress:he,status:f<4?`支队待命`:f===4?`接收封控指令`:f<6?`先期赶赴`:f===9?`封控解除`:`道路封控`,location:he===0?`朝阳交通支队`:he<100?`东三环辅路`:`事故点东侧路口`,route:`朝阳交通支队 → 东三环辅路 → 事故封控区`}];return(0,$.jsxs)(`div`,{className:`real-3d-scene ${c?`night`:`day`} ${g?`split-active`:``}`,ref:S,onClick:e=>e.stopPropagation(),children:[(0,$.jsxs)(`div`,{className:`scene-badge`,children:[(0,$.jsx)(`i`,{}),`北京核心区真实地图 · `,g?`四车战术分屏`:f>0?`全流程演示 ${String(f).padStart(2,`0`)}/09`:`精修建筑`,` · `,c?`夜间态势`:`白天态势`]}),(0,$.jsx)(`div`,{className:`scene-help`,children:g?`4 路实时跟随 · 速度 / 位置 / 路线同步`:`实时车流 `+h+` 辆 · 单击查看详情 · 双击快速聚焦 · `+(u?`自动巡航中`:`可自由旋转`)}),g&&f>=4&&(0,$.jsx)(`div`,{className:`vehicle-feed-grid`,role:`group`,"aria-label":`四车实时战术分屏`,children:_e.map((e,t)=>(0,$.jsxs)(`section`,{className:`vehicle-feed feed-${e.tone}`,"aria-label":`${e.name}实时画面`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{}),`CAM-`,String(t+1).padStart(2,`0`),` · LIVE`]}),(0,$.jsx)(`b`,{children:e.code})]}),(0,$.jsxs)(`div`,{className:`feed-focus`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`span`,{children:`TRACKING`})]}),(0,$.jsxs)(`div`,{className:`feed-data`,children:[(0,$.jsxs)(`div`,{className:`feed-identity`,children:[(0,$.jsx)(`span`,{children:e.name}),(0,$.jsx)(`strong`,{children:e.plate}),(0,$.jsx)(`em`,{children:e.status})]}),(0,$.jsxs)(`div`,{className:`feed-speed`,children:[(0,$.jsx)(`span`,{children:`当前时速`}),(0,$.jsx)(`b`,{children:e.speed}),(0,$.jsx)(`small`,{children:`km/h`})]}),(0,$.jsxs)(`div`,{className:`feed-location`,children:[(0,$.jsx)(`span`,{children:`当前位置`}),(0,$.jsx)(`b`,{children:e.location})]}),(0,$.jsxs)(`div`,{className:`feed-route`,children:[(0,$.jsx)(`span`,{children:`执行路线`}),(0,$.jsx)(`b`,{children:e.route}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{style:{width:`${e.progress}%`}}),(0,$.jsxs)(`em`,{children:[e.progress,`%`]})]})]})]})]},e.code))})]})}var pf=[{id:`EV-20260720-001`,level:`Ⅰ级`,tone:`danger`,status:`待响应`,title:`国贸桥西侧化学废料运输车泄漏`,location:`北京市朝阳区建国门外大街国贸桥西侧`,time:`14:32:07`,source:`AI 视觉 + 车辆遥测`,summary:`化学废料运输车动力系统失效，尾阀受冲击松动。含氯挥发气体向西北方向扩散，系统将联动消防、医疗与交通力量。`,people:`影响 186 人`,progress:0},{id:`EV-20260720-002`,level:`Ⅱ级`,tone:`warning`,status:`已控制`,title:`朝阳区物流仓储点火情`,location:`东四环南路辅路 18 号`,time:`12:18:42`,source:`热成像 + 烟感网络`,summary:`仓库外包装区出现明火，自动喷淋与园区消防队已控制火势，无人员伤亡。`,people:`疏散 42 人`,progress:94},{id:`EV-20260720-003`,level:`Ⅲ级`,tone:`cyan`,status:`监测中`,title:`通惠河局部油膜异常`,location:`大望路桥下游 320 米`,time:`10:46:15`,source:`无人机巡检`,summary:`水面发现约 35 平方米不明油膜，环境监测车已完成取样，溯源模型正在计算。`,people:`无人员风险`,progress:47},{id:`EV-20260719-014`,level:`Ⅳ级`,tone:`muted`,status:`已归档`,title:`CBD 地铁站瞬时客流拥堵`,location:`国贸站换乘大厅`,time:`昨日 18:07`,source:`客流感知网络`,summary:`晚高峰瞬时客流超过阈值，通过单向导流和临时限流于 12 分钟内恢复正常。`,people:`分流 1,260 人`,progress:100}],mf=[{id:`FIRE-01`,category:`消防`,icon:`消`,name:`泡沫消防车 01`,station:`青岚消防站`,eta:7,people:6,status:`available`,progress:0,capability:`A 类泡沫 4.2t · 水幕炮 · 堵漏工具组`,plate:`京消·A017`},{id:`FIRE-02`,category:`消防`,icon:`洗`,name:`危化洗消车 02`,station:`青岚消防站`,eta:9,people:5,status:`available`,progress:0,capability:`洗消液 2.8t · 防化服 12 套 · 检测仪`,plate:`京消·A026`},{id:`ROBOT-01`,category:`消防`,icon:`机`,name:`防爆消防机器人`,station:`青岚消防站`,eta:8,people:0,status:`available`,progress:0,capability:`耐高温侦察 · 遥控水炮 · 气体检测`,plate:`ROBOT-X1`},{id:`MED-03`,category:`医疗`,icon:`医`,name:`急救车 03`,station:`市第三人民医院`,eta:11,people:4,status:`available`,progress:0,capability:`呼吸支持 · 检伤分类 · 4 人转运`,plate:`京急·M103`},{id:`MED-06`,category:`医疗`,icon:`负`,name:`负压救护车 06`,station:`朝阳医疗中心`,eta:14,people:4,status:`available`,progress:0,capability:`负压隔离舱 · 中毒洗消 · 2 人转运`,plate:`京急·M206`},{id:`POLICE-07`,category:`交警`,icon:`警`,name:`疏散警车 07`,station:`建外派出所`,eta:5,people:4,status:`available`,progress:0,capability:`路口封控 · 人员疏散 · 应急车道清空`,plate:`京A·P707`},{id:`BIKE-02`,category:`交警`,icon:`骑`,name:`交通铁骑 02 组`,station:`国贸交通队`,eta:4,people:2,status:`available`,progress:0,capability:`快速抵达 · 先期侦察 · 绿波引导`,plate:`京警·R02`},{id:`DRONE-04`,category:`监测`,icon:`无`,name:`多光谱无人机 04`,station:`CBD 无人机巢`,eta:3,people:1,status:`available`,progress:0,capability:`热成像 · 气体云图 · 4K 实时回传`,plate:`UAV-04`},{id:`ENV-01`,category:`监测`,icon:`测`,name:`移动环境监测站`,station:`朝阳生态环境局`,eta:13,people:3,status:`available`,progress:0,capability:`氯气/氨气/挥发物连续监测`,plate:`京环·E011`},{id:`BUS-12`,category:`疏散`,icon:`疏`,name:`应急疏散大巴 12`,station:`北京站调度场`,eta:16,people:2,status:`available`,progress:0,capability:`核载 52 人 · 空调正压 · 应急物资`,plate:`京A·E512`}],hf=[{id:`ARC-0720-01`,date:`2026-07-20`,type:`危化品泄漏`,title:`化学废料运输车故障联合处置`,duration:`01:12`,score:`96.4`,status:`最新推演`,summary:`完整记录危废车辆行驶、突发故障、AI 识别、真实路网调度、人员疏散、堵漏与医疗转运。`,tags:[`9 阶段`,`OSM A*`,`186 人疏散`],replay:!0},{id:`ARC-0718-03`,date:`2026-07-18`,type:`仓储火灾`,title:`物流园锂电池仓库热失控推演`,duration:`02:36`,score:`91.8`,status:`已评审`,summary:`对比泡沫覆盖、干粉隔离和容器转移三种方案，最终选择分区冷却与隔离控制。`,tags:[`热失控`,`方案对比`,`无人机`],replay:!1},{id:`ARC-0715-08`,date:`2026-07-15`,type:`城市内涝`,title:`CBD 暴雨积水与交通疏导推演`,duration:`03:18`,score:`93.2`,status:`已归档`,summary:`模拟 50 年一遇降雨下的积水扩散、地铁口封控、公交绕行与泵站联动。`,tags:[`积水模型`,`交通重规划`,`地铁保护`],replay:!1},{id:`ARC-0711-02`,date:`2026-07-11`,type:`大型活动`,title:`体育中心万人活动应急疏散`,duration:`04:05`,score:`89.7`,status:`待复盘`,summary:`根据闸机客流、道路容量和医疗点位，推演 18,600 人分区分批疏散。`,tags:[`人群仿真`,`分区疏散`,`医疗布点`],replay:!1}],gf={available:`可调度`,enroute:`赶赴中`,onsite:`已到场`},_f=new Set([`FIRE-01`,`MED-03`,`POLICE-07`]);function vf({active:e,onClose:t,onStartScenario:n,onFocusIncident:i,onGenerateReport:a,onNotice:o,onTrackResource:s,scenarioPhase:c,scenarioTime:l,scenarioStatus:u}){let[d,f]=(0,r.useState)(`全部事件`),[p,m]=(0,r.useState)(``),[h,g]=(0,r.useState)(pf[0].id),[_,v]=(0,r.useState)(`全部资源`),[y,b]=(0,r.useState)(mf),[x,S]=(0,r.useState)(mf[0].id),[C,w]=(0,r.useState)([`14:32:20　AI 指挥智能体完成首轮资源匹配`,`14:32:21　3 条 OSM 真实道路路线已生成`]),[T,E]=(0,r.useState)(hf[0].id),[D,O]=(0,r.useState)(`全部档案`),k=(0,r.useRef)(null);(0,r.useEffect)(()=>{if(e===`overview`)return;let t=requestAnimationFrame(()=>k.current?.focus());return()=>cancelAnimationFrame(t)},[e]),(0,r.useEffect)(()=>{let e=window.setInterval(()=>b(e=>e.map(e=>e.status===`enroute`?e.progress>=94?{...e,status:`onsite`,progress:100}:{...e,progress:e.progress+6}:e)),900);return()=>window.clearInterval(e)},[]);let ee=u===`idle`?`待响应`:u===`complete`?`已控制`:c<2?`监测中`:`处置中`,A=u===`idle`?0:Math.round(Math.min(100,l/72*100)),te=(0,r.useMemo)(()=>pf.map((e,t)=>t?e:{...e,status:ee,progress:A,summary:u===`idle`?pf[0].summary:`化学废料运输车发生泄漏，AI 已完成研判，消防、医疗与交通力量正沿真实道路执行联合处置。`}),[A,ee,u]),j=(0,r.useMemo)(()=>y.map(e=>{if(c<4||!_f.has(e.id))return e;let[t,n]={"FIRE-01":[27,49],"MED-03":[27,59],"POLICE-07":[27,40]}[e.id],r=Math.max(6,Math.min(100,(l-t)/(n-t)*100));return{...e,status:r>=100?`onsite`:`enroute`,progress:r}}),[y,c,l]),M=te.find(e=>e.id===h)||te[0],N=j.find(e=>e.id===x)||j[0],P=hf.find(e=>e.id===T)||hf[0],ne=p.trim().toLowerCase(),re=te.filter(e=>(d===`全部事件`||e.status===d)&&(!ne||`${e.id} ${e.title} ${e.location}`.toLowerCase().includes(ne))),ie=j.filter(e=>_===`全部资源`||e.category===_),ae=hf.filter(e=>D===`全部档案`||e.type===D),oe=(0,r.useMemo)(()=>({available:j.filter(e=>e.status===`available`).length,enroute:j.filter(e=>e.status===`enroute`).length,onsite:j.filter(e=>e.status===`onsite`).length,people:j.filter(e=>e.status!==`available`).reduce((e,t)=>e+t.people,0)}),[j]);(0,r.useEffect)(()=>{re.length&&!re.some(e=>e.id===h)&&g(re[0].id)},[d,p,re,h]);let se=e=>{let t=j.find(t=>t.id===e);if(t){if(c>=4&&_f.has(e)){o(`${t.name} 正由完整推演导演脚本接管，无法单独召回`);return}t.status===`available`?(b(t=>t.map(t=>t.id===e?{...t,status:`enroute`,progress:8}:t)),w(e=>[`${new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})}　${t.name} 已接收出动指令`,...e].slice(0,6)),o(`${t.name} 已出动，预计 ${t.eta} 分钟到达`)):(b(t=>t.map(t=>t.id===e?{...t,status:`available`,progress:0}:t)),w(e=>[`${new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})}　${t.name} 已结束任务并返站`,...e].slice(0,6)),o(`${t.name} 已召回`))}},ce=()=>{let e=new Set([`FIRE-01`,`FIRE-02`,`MED-03`,`POLICE-07`,`BIKE-02`,`DRONE-04`,`ENV-01`]),t=y.filter(t=>e.has(t.id)&&t.status===`available`).length;if(!t){o(`联合编队已经全部出动，无需重复下达指令`);return}b(t=>t.map(t=>e.has(t.id)&&t.status===`available`?{...t,status:`enroute`,progress:8}:t)),w(e=>[`${new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})}　联合编队新增 ${t} 个单元出动`,...e].slice(0,6)),o(`联合编队新增 ${t} 个单元出动，绿波通道同步开启`)},F=()=>{let e=y.filter(e=>e.status!==`available`&&!(c>=4&&_f.has(e.id)));if(!e.length){o(`当前没有可召回的非脚本资源`);return}let t=new Set(e.map(e=>e.id));b(e=>e.map(e=>t.has(e.id)?{...e,status:`available`,progress:0}:e)),w(t=>[`${new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})}　${e.length} 个非脚本资源已结束任务`,...t].slice(0,6)),o(`已召回 ${e.length} 个资源单元`)};if(e===`overview`)return null;let le={events:`事件中心`,resources:`资源调度`,archives:`推演档案`}[e],ue={events:`INCIDENT CENTER`,resources:`RESOURCE DISPATCH`,archives:`SIMULATION ARCHIVE`}[e];return(0,$.jsx)(`div`,{className:`operations-backdrop`,onMouseDown:e=>{e.target===e.currentTarget&&t()},children:(0,$.jsxs)(`section`,{className:`operations-module module-${e}`,role:`dialog`,"aria-modal":`true`,"aria-label":le,children:[(0,$.jsxs)(`header`,{className:`module-header`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`span`,{children:[`LINGJING SENTINEL · `,ue]}),(0,$.jsx)(`h2`,{children:le}),(0,$.jsx)(`p`,{children:e===`events`?`统一接入城市感知事件，支持筛选、研判、定位与启动联动处置。`:e===`resources`?`面向消防、医疗、警力、监测和疏散力量的实时可视化调度。`:`完整保存推演参数、算法结果、时间线与处置报告，支持复盘重播。`})]}),(0,$.jsxs)(`div`,{className:`module-live`,children:[(0,$.jsx)(`i`,{}),`主推演状态同步 `,(0,$.jsx)(`b`,{children:u.toUpperCase()})]}),(0,$.jsx)(`button`,{ref:k,className:`module-close`,onClick:t,"aria-label":`关闭`,children:`×`})]}),e===`events`&&(0,$.jsxs)(`div`,{className:`module-content events-content`,children:[(0,$.jsxs)(`div`,{className:`module-kpis`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`今日事件`}),(0,$.jsx)(`strong`,{children:`14`}),(0,$.jsx)(`em`,{children:`较昨日 -12%`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`处置中`}),(0,$.jsx)(`strong`,{className:`orange`,children:`1`}),(0,$.jsx)(`em`,{children:`Ⅰ级响应`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`平均响应`}),(0,$.jsxs)(`strong`,{children:[`2.8`,(0,$.jsx)(`small`,{children:` min`})]}),(0,$.jsx)(`em`,{children:`目标 ≤ 5min`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`自动识别率`}),(0,$.jsxs)(`strong`,{className:`green`,children:[`96.8`,(0,$.jsx)(`small`,{children:`%`})]}),(0,$.jsx)(`em`,{children:`多模态融合`})]})]}),(0,$.jsxs)(`div`,{className:`module-toolbar`,children:[(0,$.jsx)(`div`,{children:[`全部事件`,`待响应`,`处置中`,`已控制`,`监测中`,`已归档`].map(e=>(0,$.jsx)(`button`,{className:d===e?`active`:``,"aria-pressed":d===e,onClick:()=>f(e),children:e},e))}),(0,$.jsxs)(`label`,{children:[`⌕`,(0,$.jsx)(`input`,{"aria-label":`搜索事件编号、标题或地点`,value:p,onChange:e=>m(e.target.value),placeholder:`搜索事件编号、标题或地点`})]})]}),(0,$.jsxs)(`div`,{className:`events-layout`,children:[(0,$.jsx)(`div`,{className:`event-list`,children:re.length?re.map(e=>(0,$.jsxs)(`button`,{className:h===e.id?`selected`:``,onClick:()=>g(e.id),children:[(0,$.jsx)(`i`,{className:e.tone,children:e.level}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`span`,{children:[e.id,` · `,e.time]}),(0,$.jsx)(`strong`,{children:e.title}),(0,$.jsx)(`p`,{children:e.location})]}),(0,$.jsx)(`em`,{children:e.status})]},e.id)):(0,$.jsxs)(`div`,{className:`module-empty`,children:[(0,$.jsx)(`i`,{children:`⌕`}),(0,$.jsx)(`strong`,{children:`未找到匹配事件`}),(0,$.jsx)(`span`,{children:`请调整筛选条件或搜索关键词`})]})}),(0,$.jsxs)(`article`,{className:`event-detail`,children:[(0,$.jsxs)(`div`,{className:`event-detail-head`,children:[(0,$.jsxs)(`span`,{children:[M.level,` · `,M.status]}),(0,$.jsx)(`strong`,{children:M.title}),(0,$.jsxs)(`p`,{children:[`⌖ `,M.location]})]}),(0,$.jsxs)(`div`,{className:`event-summary`,children:[(0,$.jsx)(`p`,{children:M.summary}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`span`,{children:[`事件来源`,(0,$.jsx)(`b`,{children:M.source})]}),(0,$.jsxs)(`span`,{children:[`人员影响`,(0,$.jsx)(`b`,{children:M.people})]}),(0,$.jsxs)(`span`,{children:[`处置进度`,(0,$.jsxs)(`b`,{children:[M.progress,`%`]})]})]}),(0,$.jsx)(`i`,{children:(0,$.jsx)(`span`,{style:{width:`${M.progress}%`}})})]}),(0,$.jsxs)(`div`,{className:`event-chain`,children:[(0,$.jsx)(`h3`,{children:`智能处置链`}),[`视觉与遥测完成交叉验证`,`风险扩散模型生成警戒区`,`消防医疗交警联合编队`,`真实路网计算三条救援路径`].map((e,t)=>(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:t+1}),(0,$.jsx)(`span`,{children:e}),(0,$.jsx)(`em`,{children:M.id===pf[0].id||t<2?`✓`:`待确认`})]},e))]}),(0,$.jsx)(`footer`,{children:M.id===pf[0].id?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`button`,{onClick:()=>{i(),t()},children:`◎ 地图定位`}),(0,$.jsx)(`button`,{className:`primary`,onClick:()=>{n(),t()},children:`▶ 启动联动处置`})]}):(0,$.jsx)(`button`,{className:`primary`,onClick:()=>o(`${M.title}：处置进度 ${M.progress}%，摘要已载入`),children:`查看处置摘要`})})]})]})]}),e===`resources`&&(0,$.jsxs)(`div`,{className:`module-content resources-content`,children:[(0,$.jsxs)(`div`,{className:`module-kpis`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`可调度`}),(0,$.jsx)(`strong`,{children:oe.available}),(0,$.jsx)(`em`,{children:`个资源单元`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`赶赴中`}),(0,$.jsx)(`strong`,{className:`orange`,children:oe.enroute}),(0,$.jsx)(`em`,{children:`实时轨迹回传`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`已到场`}),(0,$.jsx)(`strong`,{className:`green`,children:oe.onsite}),(0,$.jsx)(`em`,{children:`执行现场任务`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`已投入人员`}),(0,$.jsx)(`strong`,{children:oe.people}),(0,$.jsx)(`em`,{children:`跨部门协同`})]})]}),(0,$.jsxs)(`div`,{className:`module-toolbar resource-toolbar`,children:[(0,$.jsx)(`div`,{children:[`全部资源`,`消防`,`医疗`,`交警`,`监测`,`疏散`].map(e=>(0,$.jsx)(`button`,{className:_===e?`active`:``,"aria-pressed":_===e,onClick:()=>v(e),children:e},e))}),(0,$.jsx)(`button`,{className:`recall-all`,onClick:F,children:`↩ 批量召回`}),(0,$.jsx)(`button`,{className:`batch-dispatch`,onClick:ce,children:`⚡ 一键联合出动`})]}),(0,$.jsxs)(`div`,{className:`dispatch-layout`,children:[(0,$.jsx)(`div`,{className:`resource-list`,children:ie.map(e=>(0,$.jsxs)(`button`,{className:`${x===e.id?`selected`:``} ${e.status}`,onClick:()=>S(e.id),children:[(0,$.jsx)(`i`,{children:e.icon}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`span`,{children:[e.category,` · `,e.station]}),(0,$.jsx)(`strong`,{children:e.name}),(0,$.jsxs)(`p`,{children:[e.plate,` · `,e.people,` 人编组`]}),e.status!==`available`&&(0,$.jsx)(`em`,{children:(0,$.jsx)(`span`,{style:{width:`${e.progress}%`}})})]}),(0,$.jsxs)(`b`,{children:[gf[e.status],(0,$.jsx)(`small`,{children:e.status===`enroute`?`ETA ${Math.max(1,Math.ceil(e.eta*(1-e.progress/110)))} min`:e.status===`onsite`?`任务执行中`:`预计 ${e.eta} min`})]})]},e.id))}),(0,$.jsxs)(`section`,{className:`dispatch-board`,children:[(0,$.jsxs)(`div`,{className:`dispatch-map`,"aria-label":`资源编队态势示意图`,children:[(0,$.jsx)(`div`,{className:`map-road road-a`}),(0,$.jsx)(`div`,{className:`map-road road-b`}),(0,$.jsx)(`div`,{className:`map-road road-c`}),(0,$.jsx)(`i`,{className:`dispatch-incident`,children:`危`}),(0,$.jsx)(`i`,{className:`dispatch-station fire`,children:`消`}),(0,$.jsx)(`i`,{className:`dispatch-station medical`,children:`医`}),(0,$.jsx)(`i`,{className:`dispatch-station police`,children:`警`}),j.filter(e=>e.status!==`available`).slice(0,7).map((e,t)=>(0,$.jsx)(`span`,{className:`moving-unit unit-${t}`,children:e.icon},e.id)),(0,$.jsx)(`em`,{children:`RESOURCE FORMATION · SCHEMATIC`})]}),(0,$.jsxs)(`article`,{className:`resource-detail`,children:[(0,$.jsxs)(`span`,{children:[N.category,` · `,N.id]}),(0,$.jsx)(`h3`,{children:N.name}),(0,$.jsx)(`p`,{children:N.capability}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`span`,{children:[`所属站点`,(0,$.jsx)(`b`,{children:N.station})]}),(0,$.jsxs)(`span`,{children:[`到场时间`,(0,$.jsxs)(`b`,{children:[N.eta,` 分钟`]})]}),(0,$.jsxs)(`span`,{children:[`车辆编号`,(0,$.jsx)(`b`,{children:N.plate})]})]}),(0,$.jsxs)(`section`,{className:`resource-actions`,children:[(0,$.jsx)(`button`,{className:N.status===`available`?`primary`:`recall`,onClick:()=>se(N.id),children:c>=4&&_f.has(N.id)?`◉ 导演脚本接管中`:N.status===`available`?`→ 下达出动指令`:`↩ 结束任务并召回`}),(0,$.jsx)(`button`,{disabled:N.status===`available`,onClick:()=>{s(N.id),t()},children:N.status===`available`?`出动后可地图追踪`:`◎ 同步到真实地图`})]})]}),(0,$.jsxs)(`div`,{className:`dispatch-log`,children:[(0,$.jsxs)(`h3`,{children:[`调度指令流 `,(0,$.jsx)(`i`,{children:`LIVE`})]}),C.map((e,t)=>(0,$.jsx)(`p`,{children:e},`${e}-${t}`))]})]})]})]}),e===`archives`&&(0,$.jsxs)(`div`,{className:`module-content archives-content`,children:[(0,$.jsxs)(`div`,{className:`module-kpis`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`累计推演`}),(0,$.jsx)(`strong`,{children:`128`}),(0,$.jsx)(`em`,{children:`覆盖 9 类事件`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`形成报告`}),(0,$.jsx)(`strong`,{children:`116`}),(0,$.jsx)(`em`,{children:`自动归档率 90.6%`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`平均评分`}),(0,$.jsx)(`strong`,{className:`green`,children:`92.7`}),(0,$.jsx)(`em`,{children:`专家复核结果`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`算法可追溯`}),(0,$.jsxs)(`strong`,{children:[`100`,(0,$.jsx)(`small`,{children:`%`})]}),(0,$.jsx)(`em`,{children:`参数与路径完整保存`})]})]}),(0,$.jsxs)(`div`,{className:`module-toolbar`,children:[(0,$.jsx)(`div`,{children:[`全部档案`,`危化品泄漏`,`仓储火灾`,`城市内涝`,`大型活动`].map(e=>(0,$.jsx)(`button`,{className:D===e?`active`:``,onClick:()=>O(e),children:e},e))}),(0,$.jsx)(`button`,{onClick:a,children:`＋ 生成当前报告`})]}),(0,$.jsxs)(`div`,{className:`archives-layout`,children:[(0,$.jsx)(`div`,{className:`archive-grid`,children:ae.map(e=>(0,$.jsxs)(`button`,{className:T===e.id?`selected`:``,onClick:()=>E(e.id),children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:e.id}),(0,$.jsx)(`em`,{children:e.status})]}),(0,$.jsx)(`i`,{children:e.date}),(0,$.jsx)(`strong`,{children:e.title}),(0,$.jsx)(`p`,{children:e.summary}),(0,$.jsx)(`section`,{children:e.tags.map(e=>(0,$.jsx)(`span`,{children:e},e))}),(0,$.jsxs)(`footer`,{children:[(0,$.jsxs)(`b`,{children:[`综合评分 `,e.score]}),(0,$.jsxs)(`em`,{children:[`时长 `,e.duration]})]})]},e.id))}),(0,$.jsxs)(`article`,{className:`archive-detail`,children:[(0,$.jsxs)(`span`,{children:[P.type,` · `,P.id]}),(0,$.jsx)(`h3`,{children:P.title}),(0,$.jsxs)(`div`,{className:`archive-score`,children:[(0,$.jsx)(`strong`,{children:P.score}),(0,$.jsxs)(`span`,{children:[`综合评分`,(0,$.jsx)(`em`,{children:`响应速度 96　资源效率 94　风险控制 98`})]})]}),(0,$.jsxs)(`div`,{className:`archive-metrics`,children:[(0,$.jsxs)(`span`,{children:[`关键决策节点`,(0,$.jsxs)(`b`,{children:[P.replay?`9`:`12`,` 个`]})]}),(0,$.jsxs)(`span`,{children:[`算法调用`,(0,$.jsx)(`b`,{children:P.replay?`A* / 高斯烟羽`:`多模型协同`})]}),(0,$.jsxs)(`span`,{children:[`报告状态`,(0,$.jsx)(`b`,{children:`完整可追溯`})]})]}),(0,$.jsx)(`p`,{children:P.summary}),(0,$.jsxs)(`footer`,{children:[(0,$.jsx)(`button`,{onClick:()=>P.replay?a():o(`${P.title}：归档评分 ${P.score}，关键复盘摘要已显示`),children:P.replay?`查看处置报告`:`查看归档摘要`}),(0,$.jsx)(`button`,{className:`primary`,onClick:()=>{P.replay?(n(),t()):o(`${P.title}：${P.summary}`)},children:P.replay?`▶ 重播完整推演`:`查看复盘结论`})]})]})]})]})]})})}function yf({to:e,decimals:t=0,duration:n=1500,prefix:i=``,suffix:a=``,useGrouping:o=!0,className:s=``}){let[c,l]=(0,r.useState)(0),u=(0,r.useRef)(0);(0,r.useEffect)(()=>{let t=u.current,r=performance.now(),i=0;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||n<=0){u.current=e,l(e);return}let a=o=>{let s=Math.min(1,(o-r)/n),c=1-(1-s)**3,d=t+(e-t)*c;u.current=d,l(d),s<1&&(i=requestAnimationFrame(a))};return i=requestAnimationFrame(a),()=>cancelAnimationFrame(i)},[n,e]);let d=c.toLocaleString(`zh-CN`,{minimumFractionDigits:t,maximumFractionDigits:t,useGrouping:o});return(0,$.jsxs)(`span`,{className:`ani-num ${s}`.trim(),children:[i,d,a]})}var bf=[{id:`01`,title:`事故图片识别`,text:`本地视觉模型识别危化运输车、泄漏烟羽与现场人员，输出可解释置信度。`},{id:`02`,title:`风险扩散计算`,text:`高斯烟羽模型结合实时风向，动态生成致命区、高风险区与警戒区。`},{id:`03`,title:`真实道路重规划`,text:`封路后在北京 OSM 路网执行 A* 搜索，消防、医疗和警车同步调整路线。`},{id:`04`,title:`多智能体联合处置`,text:`消防、医疗、交通与指挥智能体完成出警、救援、疏散和报告闭环。`}];function xf({ready:e,onClose:t,onStart:n}){return(0,$.jsx)(`div`,{className:`demo-entry-backdrop`,onMouseDown:e=>e.target===e.currentTarget&&t(),children:(0,$.jsxs)(`section`,{className:`demo-entry`,role:`dialog`,"aria-modal":`true`,"aria-label":`灵境哨兵演示项目`,children:[(0,$.jsx)(`button`,{className:`demo-entry-close`,onClick:t,"aria-label":`关闭`,children:`×`}),(0,$.jsxs)(`header`,{children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`SMART CITY · FEATURED DEMO 01`}),(0,$.jsxs)(`h2`,{children:[`灵境哨兵：危化品运输事故`,(0,$.jsx)(`br`,{}),`全链路智能处置`]}),(0,$.jsx)(`p`,{children:`智慧城市 3D 大屏中的核心演示项目。72 秒完整呈现车辆故障、AI 告警、消防出警、救护车到场、警车疏散与应急报告生成。`})]}),(0,$.jsxs)(`div`,{className:`demo-entry-score`,children:[(0,$.jsx)(`span`,{children:`演示完成度`}),(0,$.jsx)(`strong`,{children:(0,$.jsx)(yf,{to:96.4,decimals:1})}),(0,$.jsx)(`em`,{children:`READY TO PRESENT`})]})]}),(0,$.jsxs)(`div`,{className:`demo-entry-kpis`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:(0,$.jsx)(yf,{to:6016})}),(0,$.jsx)(`span`,{children:`北京真实建筑`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:(0,$.jsx)(yf,{to:674})}),(0,$.jsx)(`span`,{children:`真实道路路段`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:(0,$.jsx)(yf,{to:72,suffix:`s`})}),(0,$.jsx)(`span`,{children:`全流程导演脚本`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:(0,$.jsx)(yf,{to:4})}),(0,$.jsx)(`span`,{children:`协同智能体`})]})]}),(0,$.jsxs)(`div`,{className:`demo-entry-body`,children:[(0,$.jsxs)(`section`,{children:[(0,$.jsxs)(`h3`,{children:[`AI 决策链 `,(0,$.jsx)(`b`,{children:`REAL-TIME PIPELINE`})]}),(0,$.jsx)(`div`,{className:`demo-flow`,children:bf.map(e=>(0,$.jsxs)(`article`,{children:[(0,$.jsx)(`i`,{children:e.id}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:e.title}),(0,$.jsx)(`p`,{children:e.text})]}),(0,$.jsx)(`em`,{children:`✓`})]},e.id))})]}),(0,$.jsxs)(`aside`,{children:[(0,$.jsx)(`span`,{children:`场景简介`}),(0,$.jsx)(`h3`,{children:`北京 CBD · 建国门外大街`}),(0,$.jsx)(`p`,{children:`一辆化学废料运输车在真实道路行驶中突发动力故障并发生含氯气体泄漏。平台自动调度消防、医疗与警力，完成封控、疏散、堵漏和转运。`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:`可旋转、缩放、俯视与自动巡航`}),(0,$.jsx)(`li`,{children:`建筑、车辆、道路均可点击交互`}),(0,$.jsx)(`li`,{children:`支持暂停、倍速和逐阶段讲解`}),(0,$.jsx)(`li`,{children:`可生成并下载完整处置报告`})]})]})]}),(0,$.jsxs)(`footer`,{children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{className:e?`ready`:``}),(0,$.jsx)(`span`,{children:e?`真实地图与演示资源已加载完成`:`正在加载北京真实地图与三维资源…`})]}),(0,$.jsx)(`button`,{onClick:t,children:`返回智慧城市大屏`}),(0,$.jsx)(`button`,{className:`primary`,disabled:!e,onClick:n,children:e?`▶ 进入并启动完整演示`:`资源加载中…`})]})]})})}var Sf={116944490:{src:`./building-photos/china-world.jpg`,alt:`中国国际贸易中心三期 A 座及所在建筑群实景`,caption:`中国国际贸易中心三期 A 座实景对照`,matchLabel:`建筑编号与实景已核验`,credit:`摄影：Temlsth · CC BY-SA 3.0 · 已离线缓存`,sourceUrl:`https://commons.wikimedia.org/wiki/File:China_World.jpg`,kind:`real`,assetId:`BJ-116944490`,provider:`verified-local`,configured:!0}},Cf=`https://kartaview.org/doc/faq`,wf=`https://api.openstreetcam.org/2.0/photo/`,Tf=180,Ef={minLat:39.879,minLng:116.419,maxLat:39.936,maxLng:116.485},Df=new Map;function Of(e){let t=e.points.reduce((e,[t,n])=>({x:e.x+t,z:e.z+n}),{x:0,z:0}),n=Math.max(1,e.points.length);return{x:t.x/n,z:t.z/n}}function kf(e,t){let n={x:e.x,z:e.z-1.4,roadName:`最近城市道路`,distance:1.4},r=1/0;return t.forEach(t=>{for(let i=1;i<t.points.length;i+=1){let[a,o]=t.points[i-1],[s,c]=t.points[i],l=s-a,u=c-o,d=l*l+u*u;if(d===0)continue;let f=Math.max(0,Math.min(1,((e.x-a)*l+(e.z-o)*u)/d)),p=a+l*f,m=o+u*f,h=(e.x-p)**2+(e.z-m)**2;h<r&&(r=h,n={x:p,z:m,roadName:t.name?.trim()||`OSM 道路 ${t.id}`,distance:Math.sqrt(h)})}}),n}function Af(e){return{longitude:Ef.minLng+(e.x+Tf)/(Tf*2)*(Ef.maxLng-Ef.minLng),latitude:Ef.minLat+(e.z+Tf)/(Tf*2)*(Ef.maxLat-Ef.minLat)}}function jf(e,t){let n=Df.get(e.id);if(n)return n;let r=Of(e),i=kf(r,t),{longitude:a,latitude:o}=Af(i),s=(Math.atan2(r.x-i.x,r.z-i.z)*180/Math.PI+360)%360,c=`BJ-${String(e.id).padStart(6,`0`)}`,l=e.name?.trim()||`北京城市建筑 ${c}`,u={src:``,lookupUrl:`${wf}?${new URLSearchParams({lat:o.toFixed(6),lng:a.toFixed(6),radius:`160`}).toString()}`,alt:`${l} 最近道路附近的 KartaView 真实街景`,caption:`${l} · KartaView 附近街景候选`,matchLabel:`建筑坐标独立检索 · 待人工核验`,credit:`查询视点：${i.roadName} · 朝向建筑 ${Math.round(s)}° · 点击建筑后按需检索`,sourceUrl:Cf,kind:`real`,assetId:c,provider:`kartaview`,configured:!0,position:{longitude:a,latitude:o,heading:s,roadName:i.roadName,distanceMeters:Math.round(i.distance*15.2)}};return Df.set(e.id,u),u}function Mf(e,t){return Sf[e.id]||jf(e,t)}var Nf={panorama:{position:[138,116,152],target:[0,18,0]},cbd:{position:[64,48,72],target:[11,22,5]},axis:{position:[2,104,218],target:[0,15,-5]},top:{position:[0,330,.1],target:[0,0,0]},horizon:{position:[238,58,2],target:[0,23,0]}},Pf=4959975,Ff=1.42,If=1.48,Lf=1.36,Rf=1.24,zf=286,Bf=zf-8,Vf=680,Hf=[-218,-191,-164,-137,-109,-82,-55,-27,0,27,55,82,109,137,164,191,218],Uf=552;function Wf(e){let t=e.points.map(e=>e[0]),n=e.points.map(e=>e[1]),r=(Math.min(...t)+Math.max(...t))/2,i=(Math.min(...n)+Math.max(...n))/2,a=0,o=0;e.points.forEach((t,n)=>{let r=e.points[(n+1)%e.points.length],i=r[0]-t[0],s=r[1]-t[1],c=i*i+s*s;c>o&&(o=c,a=Math.atan2(s,i))});let s=Math.cos(a),c=Math.sin(a),l=e.points.map(e=>(e[0]-r)*s+(e[1]-i)*c),u=e.points.map(e=>-(e[0]-r)*c+(e[1]-i)*s),d=r/.975*Ff,f=i/.975*Ff,p=Math.max(.7,Math.min(6.6,(Math.max(...l)-Math.min(...l))/2.75))*If,m=Math.max(.7,Math.min(6.6,(Math.max(...u)-Math.min(...u))/2.75))*If,h=Math.max(2.05,Math.min(52,(e.heightMeters||16)/5.2*Lf)),g=(8+Math.sqrt(p*m)*(e.core?9.2:7.6))*1.1;return{x:d,z:f,width:p,depth:m,height:Math.min(h,g),rotation:-a}}function Gf(e){let{x:t,z:n,width:r,depth:i}=Wf(e),a=Math.hypot(r,i)*.52;return Math.hypot(t,n)+a<=Bf}var Kf=[{id:`dongcheng`,label:`东城区`,x:9,z:-5,color:5242832,text:`城市治理 92.7 · 感知设备在线率 99.9%`},{id:`xicheng`,label:`西城区`,x:-12,z:-6,color:7534079,text:`政务协同 95.4 · 城市服务响应率 98.7%`},{id:`chaoyang`,label:`朝阳区`,x:47,z:5,color:3534847,text:`商务活力 96.8 · 城市事件闭环率 98.1%`},{id:`haidian`,label:`海淀区`,x:-40,z:24,color:6985471,text:`科技创新 94.2 · 智算资源利用率 87.6%`},{id:`fengtai`,label:`丰台区`,x:-13,z:-40,color:16755039,text:`交通枢纽 89.6 · 路网运行状态平稳`},{id:`shijingshan`,label:`石景山区`,x:-55,z:-19,color:9218559,text:`城市更新 91.2 · 重点设施在线率 98.4%`},{id:`mentougou`,label:`门头沟区`,x:-92,z:-25,color:4708805,text:`生态监测 93.1 · 山区感知节点覆盖率 96.5%`},{id:`fangshan`,label:`房山区`,x:-75,z:-71,color:5498537,text:`园区运行 90.8 · 应急资源到位率 97.2%`},{id:`tongzhou`,label:`通州区`,x:86,z:-17,color:5556223,text:`副中心治理 95.7 · 政务数据协同率 98.9%`},{id:`shunyi`,label:`顺义区`,x:74,z:45,color:5177316,text:`临空经济 93.5 · 交通感知覆盖率 97.8%`},{id:`changping`,label:`昌平区`,x:-19,z:64,color:8227327,text:`科教融合 94.6 · 园区设备在线率 98.3%`},{id:`daxing`,label:`大兴区`,x:22,z:-85,color:5167359,text:`机场联动 94.1 · 综合交通准点率 96.9%`},{id:`huairou`,label:`怀柔区`,x:43,z:88,color:11635967,text:`科学城运行 92.9 · 科研设施保障率 98.1%`},{id:`pinggu`,label:`平谷区`,x:104,z:65,color:5828785,text:`农业智联 90.6 · 物联感知覆盖率 95.8%`},{id:`miyun`,label:`密云区`,x:23,z:116,color:6535423,text:`水源保护 96.2 · 生态告警闭环率 99.1%`},{id:`yanqing`,label:`延庆区`,x:-65,z:104,color:9362431,text:`生态涵养 95.1 · 林火监测覆盖率 98.6%`}];function qf(e,t){let n=document.createElement(`canvas`);n.width=512,n.height=112;let r=n.getContext(`2d`),i=r.createLinearGradient(0,0,512,0);i.addColorStop(0,`rgba(3, 15, 28, .94)`),i.addColorStop(1,`rgba(5, 39, 55, .72)`),r.fillStyle=i,r.fillRect(0,0,512,112),r.strokeStyle=t,r.lineWidth=3,r.strokeRect(2,2,508,108),r.fillStyle=`#eaffff`,r.font=`600 32px Microsoft YaHei, sans-serif`,r.fillText(e,26,68),r.fillStyle=t,r.fillRect(26,82,160,3);let a=new sa(n);a.colorSpace=Be;let o=new $r(new zr({map:a,transparent:!0,depthTest:!1}));return o.scale.set(15.5,3.4,1),o}function Jf(e,t,n,r,i,a,o,s=0){let c=new Y(new Bo(r,i),t);c.rotation.x=-Math.PI/2,c.rotation.z=s,c.position.set(a,1.42,o),e.add(c);let l=new Y(new Bo(.1,i*.95),n);l.rotation.x=-Math.PI/2,l.rotation.z=s,l.position.set(a,1.46,o),e.add(l)}function Yf({nightMode:e,buildingLights:t,autoTour:n,topView:o,trafficDensity:s,onSelect:c,onSceneStatus:l}){let u=(0,r.useRef)(null),d=(0,r.useRef)(null),p=(0,r.useRef)(null),h=(0,r.useRef)(e),g=(0,r.useRef)(t),_=(0,r.useRef)(n),v=(0,r.useRef)(s),y=(0,r.useRef)(()=>{});return(0,r.useEffect)(()=>{h.current=e,g.current=t,y.current(e,t)},[e,t]),(0,r.useEffect)(()=>{_.current=n},[n]),(0,r.useEffect)(()=>{v.current=s},[s]),(0,r.useEffect)(()=>{let e=d.current,t=p.current;!e||!t||(o?(e.position.set(...Nf.top.position),t.target.set(0,0,0)):(e.position.set(...Nf.panorama.position),t.target.set(...Nf.panorama.target)),t.update())},[o]),(0,r.useEffect)(()=>{let e=u.current;if(!e){l(`degraded`);return}let t=!1;l(`loading`);let n=new zn,r=new zs(42,1,1,1120);r.position.set(...Nf.panorama.position),d.current=r;let o=new Pd({antialias:!0,alpha:!1,powerPreference:`high-performance`});o.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),o.outputColorSpace=Be,o.toneMapping=4,o.toneMappingExposure=1.26,o.shadowMap.enabled=!0,o.shadowMap.type=2,o.shadowMap.autoUpdate=!1,o.shadowMap.needsUpdate=!0,e.appendChild(o.domElement);let s=new Gd(r,o.domElement);s.enableDamping=!0,s.dampingFactor=.055,s.minDistance=46,s.maxDistance=560,s.maxPolarAngle=Math.PI*.48,s.target.set(...Nf.panorama.target),s.enableRotate=!0,s.enableZoom=!0,s.enablePan=!0,s.screenSpacePanning=!0,s.mouseButtons.LEFT=i.ROTATE,s.mouseButtons.MIDDLE=i.DOLLY,s.mouseButtons.RIGHT=i.PAN,s.touches.ONE=a.ROTATE,s.touches.TWO=a.DOLLY_PAN,p.current=s;let b={uSkyTime:{value:0},uSkyTop:{value:new q(399928)},uSkyHorizon:{value:new q(809602)},uSkyGlow:{value:new q(3721471)},uSkyIntensity:{value:.72}},x=new Y(new Ho(Vf,40,24),new $o({side:1,depthWrite:!1,fog:!1,toneMapped:!1,uniforms:b,vertexShader:`
          varying vec3 vSkyDirection;
          void main() {
            vSkyDirection = normalize(position);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
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
        `}));x.renderOrder=-10,n.add(x);let S=new Ds(15005183,1588050,1.8);n.add(S);let C=new Ws(15200767,2.65);C.position.set(-70,128,68),C.castShadow=!0,C.shadow.mapSize.set(1024,1024),C.shadow.camera.left=-310,C.shadow.camera.right=310,C.shadow.camera.top=310,C.shadow.camera.bottom=-310,C.shadow.bias=-28e-5,C.shadow.normalBias=.035,n.add(C);let w=new Ws(5618431,1.2);w.position.set(92,52,-78),n.add(w);let T=new Vs(3714804,16,138,1.65);T.position.set(0,45,0),n.add(T);let E=[],D=[];for(let e=0;e<12;e++){let t=e/12*Math.PI*2,r=e%3==0?4685311:3524863,i=new Vs(r,6.4,62,1.7);i.position.set(Math.cos(t)*202,5.5,Math.sin(t)*202);let a=new Y(new Ho(.65,14,10),new J({color:r,transparent:!0,opacity:.42}));a.position.copy(i.position),n.add(i,a),E.push(i),D.push(a)}let O=new Ts().load(`./beijing-map-base.jpg`);O.colorSpace=Be,O.anisotropy=o.capabilities.getMaxAnisotropy(),O.generateMipmaps=!0,O.minFilter=m,O.magFilter=f;let k=new X({color:8828615,map:O,emissiveMap:O,emissive:1195346,emissiveIntensity:.22,roughness:.82,metalness:.18}),ee=new Y(new fa(zf,224),k);ee.rotation.x=-Math.PI/2,ee.position.y=.65,ee.receiveShadow=!1,n.add(ee);let A={uFloorPrimary:{value:new q(2874623)},uFloorSecondary:{value:new q(6978815)},uFloorOpacity:{value:.68}},te=new Y(new fa(zf-3,224),new $o({transparent:!0,depthWrite:!1,side:2,blending:2,toneMapped:!1,uniforms:A,vertexShader:`
          varying vec2 vFloorPosition;
          void main() {
            vFloorPosition = position.xy;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
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
        `}));te.rotation.x=-Math.PI/2,te.position.y=.84,te.renderOrder=0,te.visible=!1,n.add(te);let j=new An,M=new J({color:5299711,transparent:!0,opacity:.62,blending:2,depthWrite:!1});for(let e=0;e<64;e+=1){let t=e/64*Math.PI*2,n=new Y(new da(e%4==0?5.4:2.8,.08,.3),M);n.position.set(Math.cos(t)*279,1.13,Math.sin(t)*279),n.rotation.y=-t,j.add(n)}j.visible=!1,n.add(j);let N=new X({color:1333373,metalness:.64,roughness:.32,emissive:737639,emissiveIntensity:.58}),P=new Y(new pa(280,zf,2.4,224),N);P.position.y=-.5,n.add(P);let ne=new pc(560,140,9167359,3766685);ne.position.y=1.02;let re=Array.isArray(ne.material)?ne.material:[ne.material];re.forEach(e=>{e.transparent=!0,e.opacity=0,e.depthWrite=!1}),ne.visible=!1,n.add(ne);let ie=new J({color:5623807,wireframe:!0,transparent:!0,opacity:.055,side:2,depthWrite:!1,toneMapped:!1}),ae=new Y(new pa(zf+18,zf+18,86,112,9,!0),ie);ae.position.y=42,ae.renderOrder=-1,n.add(ae);let oe=new J({color:4708607,transparent:!0,opacity:.32,blending:2,depthWrite:!1,toneMapped:!1}),se=new Y(new Uo(zf-5,.9,10,224),oe);se.rotation.x=Math.PI/2,se.position.y=2.1,n.add(se);let ce=new Float32Array(720*3);for(let e=0;e<720;e+=1){let t=e*2.399963229728653,n=205+e*47%109;ce[e*3]=Math.cos(t)*n,ce[e*3+1]=3+e*29%78,ce[e*3+2]=Math.sin(t)*n}let F=new Nr;F.setAttribute(`position`,new vr(ce,3));let le=new $i({color:8120319,size:.48,transparent:!0,opacity:.27,depthWrite:!1,blending:2,toneMapped:!1}),ue=new ia(F,le);n.add(ue);let de=new X({color:1390670,roughness:.58,metalness:.4,emissive:733256,emissiveIntensity:.46,transparent:!1,opacity:1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),fe=new J({color:12775423,transparent:!1,opacity:1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});Hf.forEach((e,t)=>Jf(n,de,fe,t===8?7.4:4.4,Uf,e,0,t%2?.025:-.02)),Hf.forEach((e,t)=>Jf(n,de,fe,t===8?7.4:4.4,Uf,0,e,Math.PI/2+(t%2?.02:-.018)));let pe=new J({color:6196113,transparent:!0,opacity:.18,side:2,depthWrite:!1}),me=[];[64,112,160,208,252,278].forEach((e,t)=>{let r=new Y(new Vo(e-.18,e+.18,192),pe.clone());r.rotation.x=-Math.PI/2,r.position.y=1.58+t*.01,n.add(r),r.visible=!1,me.push(r)});let he=[22,37,55].map((e,t)=>{let r=new Y(new Uo(e,t===0?.11:.07,10,180),new J({color:[4122879,6260735,4450235][t],transparent:!0,opacity:t===0?.34:.22,depthWrite:!1}));return r.rotation.x=Math.PI/2,r.position.y=2.05+t*.08,r.visible=!1,n.add(r),r}),ge=new X({color:480118,emissive:471357,emissiveIntensity:.16,roughness:.32,metalness:.24,transparent:!0,opacity:.82}),_e=new Y(new Bo(566,14),ge);_e.rotation.x=-Math.PI/2,_e.rotation.z=-.12,_e.position.set(0,1.64,-216),n.add(_e);let ve=new pa(1.05,2.1,1,10),ye=new ts({color:Pf,emissive:1929126,emissiveIntensity:.62,metalness:.46,roughness:.28,clearcoat:.68,clearcoatRoughness:.2}),be=new ji(ve,ye,9),I=new tn;[[-8,-2,36],[-3,2,48],[3,1,42],[9,4,34],[15,-3,28],[-16,5,26],[20,9,21],[-22,-7,30],[5,-11,25]].forEach(([e,t,n],r)=>{I.compose(new K(e,1.7+n/2,t),new jt,new K(r%3==1?1.35:1,n,r%3==1?1.35:1)),be.setMatrixAt(r,I)}),be.castShadow=!0,n.add(be);let xe=[],Se=[],Ce=[];Kf.forEach((e,t)=>{let r=new An;if(r.position.set(e.x*Rf,1.65,e.z*Rf),t<6){let n=new Y(new fa(11+t%3*2.4,72),new J({color:e.color,transparent:!0,opacity:.18,depthWrite:!1,blending:2}));n.rotation.x=-Math.PI/2,n.rotation.z=t*.42,n.position.y=.045,n.scale.set(1.65+t%2*.28,.92+t%3*.12,1),n.visible=!1;let i=new Y(new Vo(12.5+t%3*2.4,12.72+t%3*2.4,72),new J({color:e.color,transparent:!0,opacity:.46,depthWrite:!1,side:2}));i.rotation.x=-Math.PI/2,i.rotation.z=n.rotation.z,i.position.y=.075,i.scale.copy(n.scale),i.visible=!1;let a=new Y(new pa(1.2,7.5+t%3*1.4,17,32,1,!0),new J({color:e.color,transparent:!0,opacity:.055,depthWrite:!1,side:2,blending:2}));a.position.y=8.5,r.add(n,i,a),Ce.push(n,i,a)}let i=new Y(new pa(.11,.32,15,14),new J({color:e.color,transparent:!0,opacity:.42}));i.position.y=7.5;let a=new Y(new zo(.82,1),new X({color:e.color,emissive:e.color,emissiveIntensity:1.8,metalness:.6,roughness:.2}));a.position.y=15.7,a.userData.asset={id:e.id,label:e.label,category:`北京城市监管分区`,details:e.text,meta:`CITY AI · 实时推演 · 点击已定位`};let o=new Y(new Vo(1.25,1.62,48),new J({color:e.color,side:2,transparent:!0,opacity:.78}));o.rotation.x=-Math.PI/2,o.position.y=.22,o.visible=!1;let s=qf(e.label,`#${e.color.toString(16).padStart(6,`0`)}`);s.position.y=18.1,r.add(i,a,o,s),n.add(r),xe.push(a),Se.push(o)});let we=new is({color:5762303,transparent:!0,opacity:.48,dashSize:1.4,gapSize:.9}),Te=[];Kf.forEach((e,t)=>{let r=e.x*Rf,i=e.z*Rf,a=new Aa([new K(0,4,0),new K(r*.45,13+t*1.5,i*.45),new K(r,3.5,i)]),o=new Ji(new Nr().setFromPoints(a.getPoints(60)),we.clone());o.computeLineDistances(),o.userData.curve=a,n.add(o),Te.push(o)});let Ee=new J({color:13106175}),De=Kf.map((e,t)=>{let r=new Y(new Ho(.36,12,8),Ee);return n.add(r),r.userData.routeIndex=t,r}),Oe=new Float32Array(1080*3);for(let e=0;e<1080;e++){let t=Math.random()*Math.PI*2,n=8+Math.sqrt(Math.random())*258;Oe[e*3]=Math.cos(t)*n,Oe[e*3+1]=2.5+Math.random()*17,Oe[e*3+2]=Math.sin(t)*n}let ke=new Nr;ke.setAttribute(`position`,new vr(Oe,3));let Ae=new ia(ke,new $i({color:5631231,size:.34,transparent:!0,opacity:.72,depthWrite:!1}));n.add(Ae);let je=new J({color:3795711,transparent:!0,opacity:.2,side:2,depthWrite:!1}),L=new Y(new Vo(2,2.6,96),je);L.rotation.x=-Math.PI/2,L.position.y=1.88,L.visible=!1,n.add(L);let Me=new ts({color:Pf,roughness:.42,metalness:.26,clearcoat:.42,clearcoatRoughness:.36,emissive:1334683,emissiveIntensity:.5,vertexColors:!0}),Ne=new Q(1,1,1,2,.035),Pe=new J({color:6870015,transparent:!0,opacity:.035,side:1,blending:1,depthWrite:!1}),R=new Q(1,.2,1,2,.04),Fe=new X({color:Pf,metalness:.5,roughness:.31,emissive:1795479,emissiveIntensity:.34,transparent:!0,opacity:.95,vertexColors:!0}),z=null,B=[],Ie=[],V=[];(async()=>{try{let e=await fetch(`./beijing-buildings.json`);if(!e.ok)throw Error(`building dataset unavailable`);let r=await e.json();if(t)return;Ie=Array.isArray(r.roads)?r.roads.filter(e=>e.points.length>=2):[];let i=r.buildings.filter(e=>e.points.length>=3).slice(0,6200),a=i.filter(Gf),s=new ji(Ne,Me,a.length);z=s,B=a;let c=new ji(Ne,Pe,a.length),u=a,d=new ji(R,Fe,u.length),f=a,p=a.filter(e=>(e.heightMeters||16)>13&&e.id%6==0).slice(0,1050),m=a.filter(e=>e.core&&(e.heightMeters||16)>34||(e.heightMeters||16)>62).slice(0,520),h=a.filter(e=>{let t=e.heightMeters||16;return!e.core&&t>16&&t<=28&&e.id%4==0&&e.id%9!=0}).slice(0,850),g=new ji(new Q(1,1,1,2,.045),new ts({color:Pf,metalness:.38,roughness:.34,clearcoat:.52,emissive:1334161,emissiveIntensity:.32}),f.length),_=new ji(new Q(1,1,1,2,.06),new X({color:Pf,metalness:.48,roughness:.28,emissive:2190494,emissiveIntensity:.28}),f.length),v=new ji(new pa(.045,.07,1,7),new X({color:Pf,metalness:.78,roughness:.22,emissive:2386321,emissiveIntensity:.32}),f.length),y=new ji(new Q(1,.045,1,1,.018),new X({color:5617884,metalness:.34,roughness:.42,emissive:2260904,emissiveIntensity:.42,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),f.length*6),b=new ji(new Q(.06,1,1,1,.015),new X({color:8051199,metalness:.54,roughness:.3,emissive:1863583,emissiveIntensity:.38}),f.length*2),x=new ji(new Q(1,1,.06,1,.015),new X({color:6276590,metalness:.48,roughness:.34,emissive:1596553,emissiveIntensity:.34}),f.length*2),S=new ji(new Q(1,1,1,2,.055),new ts({color:3905224,metalness:.26,roughness:.38,clearcoat:.42,clearcoatRoughness:.28,emissive:1199995,emissiveIntensity:.38}),p.length),C=new ji(new pa(.54,.72,1,4,1,!1),new ts({color:7522799,metalness:.52,roughness:.27,clearcoat:.62,emissive:1797273,emissiveIntensity:.42}),m.length),w=new ji(new Q(1,1,1,2,.055),new ts({color:3904708,metalness:.32,roughness:.46,clearcoat:.28,emissive:1399688,emissiveIntensity:.3}),h.length),T=new ji(new Q(1,1,.045,1,.012),new X({color:3048621,metalness:.3,roughness:.4,emissive:1929112,emissiveIntensity:.38,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),f.length*16),E=new ji(new fa(.72,24),new J({color:404291,transparent:!0,opacity:.2,depthWrite:!1}),f.length);E.renderOrder=1,E.visible=!1;let D=new tn,O=new tn,k=new q,ee=new jt().setFromEuler(new fn(-Math.PI/2,0,0)),A=new K(0,1,0);a.forEach((e,t)=>{let{x:n,z:r,width:i,depth:a,height:o,rotation:l}=Wf(e),u=new jt().setFromAxisAngle(A,l);D.compose(new K(n,1.72+o/2,r),u,new K(i,o,a)),s.setMatrixAt(t,D),O.compose(new K(n,1.72+o/2,r),u,new K(i*1.012,o*1.004,a*1.012)),c.setMatrixAt(t,O);let d=e.id%11/10;k.setRGB(Math.min(1,.82+d*.1+(e.core?.05:0)),Math.min(1,.9+d*.075+(e.core?.035:0)),1),s.setColorAt(t,k),V.push(k.clone())}),u.forEach((e,t)=>{let{x:n,z:r,width:i,depth:a,height:o,rotation:s}=Wf(e),c=new jt().setFromAxisAngle(A,s);D.compose(new K(n,1.82+o,r),c,new K(i*.82,1,a*.82)),d.setMatrixAt(t,D);let l=e.id%7/6;k.setRGB(.84+l*.1,.92+l*.06,1),d.setColorAt(t,k)}),f.forEach((e,t)=>{let{x:n,z:r,width:i,depth:a,height:o,rotation:s}=Wf(e),c=new jt().setFromAxisAngle(A,s);D.compose(new K(n+.24,1.705,r+.28),ee,new K(i*1.2,a*1.2,1)),E.setMatrixAt(t,D);let l=Math.max(.55,Math.min(1.35,o*.09));D.compose(new K(n,1.72+l/2,r),c,new K(i*1.14,l,a*1.14)),g.setMatrixAt(t,D);let u=Math.max(.32,Math.min(.95,o*.045)),d=new K((e.id%3-1)*i*.12,0,(Math.floor(e.id/3)%3-1)*a*.1).applyQuaternion(c);D.compose(new K(n+d.x,1.78+o+u/2,r+d.z),c,new K(Math.max(.28,i*.34),u,Math.max(.28,a*.34))),_.setMatrixAt(t,D);let f=Math.max(.9,Math.min(3.2,o*.12));D.compose(new K(n-d.x*.55,1.82+o+u+f/2,r-d.z*.55),c,new K(1,f,1)),v.setMatrixAt(t,D);for(let e=0;e<6;e+=1){let s=1.72+o*(.14+e*.135);D.compose(new K(n,s,r),c,new K(i*1.018,1,a*1.018)),y.setMatrixAt(t*6+e,D)}for(let e=0;e<2;e+=1){let s=new K((e===0?-1:1)*i*.512,0,0).applyQuaternion(c);D.compose(new K(n+s.x,1.72+o*.51,r+s.z),c,new K(1,o*.78,a*.92)),b.setMatrixAt(t*2+e,D);let l=new K(0,0,(e===0?-1:1)*a*.512).applyQuaternion(c);D.compose(new K(n+l.x,1.72+o*.51,r+l.z),c,new K(i*.92,o*.78,1)),x.setMatrixAt(t*2+e,D)}for(let e=0;e<4;e+=1){let s=e>=2,l=e%2==0?-1:1,u=s?c.clone().multiply(new jt().setFromAxisAngle(A,Math.PI/2)):c;for(let d=0;d<2;d+=1)for(let f=0;f<2;f+=1){let p=s?new K(l*i*.518,0,(f===0?-1:1)*a*.22):new K((f===0?-1:1)*i*.22,0,l*a*.518);p.applyQuaternion(c);let m=t*16+e*4+d*2+f;D.compose(new K(n+p.x,1.72+o*(.35+d*.3),r+p.z),u,new K(Math.max(.14,(s?a:i)*.22),Math.max(.34,o*.17),1)),T.setMatrixAt(m,D)}}}),p.forEach((e,t)=>{let{x:n,z:r,width:i,depth:a,height:o,rotation:s}=Wf(e),c=new jt().setFromAxisAngle(A,s),l=Math.max(.75,Math.min(3.8,o*(.28+e.id%4*.035))),u=new K((e.id%2==0?-1:1)*i*.43,0,a*(e.id%3-1)*.12).applyQuaternion(c);D.compose(new K(n+u.x,1.72+l/2,r+u.z),c,new K(i*.52,l,a*.72)),S.setMatrixAt(t,D)}),m.forEach((e,t)=>{let{x:n,z:r,width:i,depth:a,height:o,rotation:s}=Wf(e),c=new jt().setFromAxisAngle(A,s+Math.PI/4),l=Math.max(.7,Math.min(2.4,o*.075));D.compose(new K(n,1.92+o+l/2,r),c,new K(i*.62,l,a*.62)),C.setMatrixAt(t,D)}),h.forEach((e,t)=>{let{x:n,z:r,width:i,depth:a,height:o,rotation:s}=Wf(e),c=new jt().setFromAxisAngle(A,s),l=Math.max(.75,Math.min(2.35,o*.18));D.compose(new K(n,1.76+o+l/2,r),c,new K(i*.68,l,a*.68)),w.setMatrixAt(t,D)}),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0,d.instanceColor.needsUpdate=!0,g.instanceMatrix.needsUpdate=!0,_.instanceMatrix.needsUpdate=!0,v.instanceMatrix.needsUpdate=!0,y.instanceMatrix.needsUpdate=!0,b.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,S.instanceMatrix.needsUpdate=!0,C.instanceMatrix.needsUpdate=!0,w.instanceMatrix.needsUpdate=!0,T.instanceMatrix.needsUpdate=!0,E.instanceMatrix.needsUpdate=!0,s.castShadow=!0,s.receiveShadow=!0,g.castShadow=!0,g.receiveShadow=!0,_.castShadow=!0,b.castShadow=!0,x.castShadow=!0,S.castShadow=!0,S.receiveShadow=!0,C.castShadow=!0,w.castShadow=!0,w.receiveShadow=!0,d.castShadow=!0,s.receiveShadow=!0,g.receiveShadow=!0,_.castShadow=!0,s.userData.asset={id:`beijing-building-network`,label:`北京城市建筑群`,category:`三维城市底座`,details:`${a.length.toLocaleString()} 栋建筑完整位于北京地图显示边界内；原始 ${i.length.toLocaleString()} 条建筑数据仍保留在本地数据集中。`,meta:`地图边界裁剪 · 建筑高度 · 区位编码 · 实时同步`},n.add(E,s,c,d,g,_,v,y,b,x,S,C,w,T),o.shadowMap.needsUpdate=!0,xe.push(s),l(`ready`)}catch{t||l(`degraded`)}})();let Le=[],Re=Array.from({length:54},(e,t)=>{let r=new An;r.name=`真实车流模型-${String(t+1).padStart(2,`0`)}`,r.userData.modelQuality=`competition-realism-v2`;let i=t%5,a=i===1,o=i===2,s=i===3,c=i===4,l=c?.82:s?.75:o?.72:.66,u=c?1.88:s?1.58:o?1.5:1.42,d=c?.46:s?.39:o?.34:.29,f=new ts({color:a?14006063:c?4164805:[15067623,13716290,3440043,2435889,6206366][t%5],metalness:.58,roughness:.24,clearcoat:.82,clearcoatRoughness:.18}),p=new Y(new Q(l,d,u,3,.1),f);p.position.y=.31,p.castShadow=t<18;let m=new Y(new Q(l*.84,c?.46:s?.38:.31,c?u*.76:s?u*.58:u*.5,3,.08),new ts({color:7907253,metalness:.62,roughness:.12,clearcoat:.9,transparent:!0,opacity:.9}));m.position.set(0,c?.69:s?.62:.54,s?.03:.08);let g=new X({color:1515559,metalness:.68,roughness:.3}),_=new Y(new Q(l*.88,.08,.09,2,.025),g);_.position.set(0,.22,-u*.51);let v=_.clone();v.position.z=u*.51;let y=new J({color:16773309,transparent:!0,opacity:h.current?1:.38}),b=new J({color:16724270,transparent:!0,opacity:h.current?.94:.5});Le.push(y,b),[-.23,.23].forEach(e=>{let t=new Y(new da(.13,.07,.035),y);t.position.set(e*l,.31,-u*.535);let n=new Y(new da(.12,.065,.035),b);n.position.set(e*l,.31,u*.535),r.add(t,n)});let x=new X({color:1053720,roughness:.88}),S=new X({color:10989747,metalness:.86,roughness:.2});[-1,1].forEach(e=>{[-.31,.31].forEach(t=>{let n=new Y(new pa(c?.15:.13,c?.15:.13,.1,16),x);n.rotation.z=Math.PI/2,n.position.set(e*l*.55,.18,t*u);let i=new Y(new pa(.055,.055,.105,12),S);i.rotation.z=Math.PI/2,i.position.copy(n.position),r.add(n,i)})});let C=new Y(new da(.23,.07,.025),new J({color:2320564}));if(C.position.set(0,.2,-u*.56),r.add(p,m,_,v,C),a){let e=new Y(new Q(.25,.1,.13,2,.025),new J({color:16773798}));e.position.set(0,.74,.05),r.add(e)}return n.add(r),r}),ze=Array.from({length:54},(e,t)=>({axis:t%2,lane:Hf[t%Hf.length]+(t%3-1)*1.15,offset:t*31%Uf,speed:.15+t%7*.017}));y.current=(e,t)=>{n.background=new q(e?1195355:4950692),n.fog=new Rn(e?1193033:6128786,e?.00215:.00155),o.toneMappingExposure=e?1.12:1.3,b.uSkyTop.value.setHex(e?267049:1527416),b.uSkyHorizon.value.setHex(e?672365:7916007),b.uSkyGlow.value.setHex(e?2862847:7462143),b.uSkyIntensity.value=e?.88:.58,A.uFloorPrimary.value.setHex(e?2482175:1746904),A.uFloorSecondary.value.setHex(e?7761407:3961054),A.uFloorOpacity.value=e?.56:.38,M.color.setHex(e?5299711:3313100),M.opacity=e?.72:.48,ie.color.setHex(e?4706303:9365759),ie.opacity=e?.072:.046,oe.color.setHex(e?3987199:8120575),oe.opacity=e?.42:.25,le.color.setHex(e?7202303:11858687),le.opacity=e?.34:.2,re.forEach(e=>{e.opacity=0}),S.intensity=e?1.08:1.8,C.intensity=e?.72:2.72,w.intensity=e?1.75:1.2,T.intensity=e?24:16,E.forEach((t,n)=>{t.intensity=e?9+n%2:6.4}),k.color.setHex(e?6524321:12048866),k.emissive.setHex(e?1523541:1521738),k.emissiveIntensity=e?.28:.14,N.emissiveIntensity=e?.82:.58,de.color.setHex(e?864327:1390670),de.emissive.setHex(e?998743:732482),ye.color.setHex(Pf),ye.emissive.setHex(e?2194355:1730716),ye.emissiveIntensity=e?.78:.52,Me.color.setHex(Pf),Me.emissive.setHex(t?e?1535403:1335198:870520),Me.emissiveIntensity=t?e?.72:.52:.3,Pe.opacity=t?e?.035:.022:.012,Fe.color.setHex(Pf),Fe.opacity=e?1:.96,Fe.emissiveIntensity=t?e?.48:.34:.18,ge.emissiveIntensity=e?.78:.42,Le.forEach((t,n)=>{t.opacity=n%2==0?e?1:.56:e?.96:.64,t.needsUpdate=!0})},y.current(h.current,g.current);let Ve=new cc,He=new G,Ue=new q(10420223),We=-1,Ge=null,Ke=0,qe={x:0,y:0},Je=e=>{let t=o.domElement.getBoundingClientRect();He.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1)},Ye=()=>{z&&We>=0&&V[We]&&(z.setColorAt(We,V[We]),z.instanceColor&&(z.instanceColor.needsUpdate=!0)),We=-1},Xe=()=>{Ge&&Ge.scale.setScalar(1),Ge=null},Ze=()=>{Ye(),Xe(),o.domElement.style.cursor=`grab`},Qe=e=>{let t=e.clientX,n=e.clientY;cancelAnimationFrame(Ke),Ke=requestAnimationFrame(()=>{let e=o.domElement.getBoundingClientRect();He.set((t-e.left)/e.width*2-1,-((n-e.top)/e.height)*2+1),Ve.setFromCamera(He,r);let i=Ve.intersectObjects(xe,!1)[0],a=i?.object===z&&i.instanceId!==void 0?i.instanceId:-1,s=i?.object.userData.asset&&i?.object!==z?i.object:null;a!==We&&(Ye(),z&&a>=0&&(z.setColorAt(a,Ue),z.instanceColor&&(z.instanceColor.needsUpdate=!0),We=a)),s!==Ge&&(Xe(),Ge=s,Ge?.scale.setScalar(1.35)),o.domElement.style.cursor=i?`pointer`:`grab`})},$e=e=>{if(Math.hypot(e.clientX-qe.x,e.clientY-qe.y)>5)return;Je(e),Ve.setFromCamera(He,r);let t=Ve.intersectObjects(xe,!1)[0];if(t?.object===z&&t.instanceId!==void 0){let e=B[t.instanceId];if(!e)return;let n=e?.id??t.instanceId+1,r=Math.round(e?.heightMeters||16),i=e?.name?.trim(),a=Mf(e,Ie),o=a.provider===`verified-local`?`当前显示与建筑编号核验过的本地实景照片。`:`打开详情后将从${a.position?.roadName||`最近道路`}按该建筑坐标查询 KartaView 真实街景候选；结果会标明待人工核验。`;c({id:`building-${n}`,label:i||`北京 CBD 楼宇 BJ-${String(n).padStart(6,`0`)}`,category:i?`北京三维建筑资产 · 公开名称`:`北京三维建筑资产 · 编号标识`,details:i?`公开地图数据标注名称为“${i}”，建筑高度约 ${r} 米。${o}`:`公开地图数据暂未标注该楼宇名称，系统以唯一资产编号和地理坐标匹配实景。建筑高度约 ${r} 米。${o}`,meta:`资产编号 BJ-${String(n).padStart(6,`0`)} · 高度 ${r} m · ${a.provider===`verified-local`?`实景已核验`:`实景按需查询`}`,photo:a});return}let n=t?.object.userData.asset;c(n||null)},et=e=>{qe={x:e.clientX,y:e.clientY}};o.domElement.addEventListener(`pointermove`,Qe),o.domElement.addEventListener(`pointerleave`,Ze),o.domElement.addEventListener(`pointerdown`,et),o.domElement.addEventListener(`pointerup`,$e);let H=0,U=0,tt=0,nt=()=>{cancelAnimationFrame(H),H=requestAnimationFrame(()=>{let t=Math.max(1,Math.round(e.clientWidth)),n=Math.max(1,Math.round(e.clientHeight));t===U&&n===tt||(U=t,tt=n,r.aspect=t/n,r.updateProjectionMatrix(),o.setSize(t,n,!1))})},rt=new ResizeObserver(nt);rt.observe(e),nt();let W=null,it=(e,t,n=1250)=>{W={from:r.position.clone(),to:new K(...e),targetFrom:s.target.clone(),targetTo:new K(...t),start:performance.now(),duration:n},s.enabled=!1},at=e=>{let t=e.detail;if(t===`zoomIn`||t===`zoomOut`){let e=t===`zoomIn`?.82:1.18,n=r.position.clone().sub(s.target).multiplyScalar(e);r.position.copy(s.target).add(n),s.update();return}if(t===`reset`){it(Nf.panorama.position,Nf.panorama.target);return}if(typeof t==`object`&&t.action===`view`&&t.view&&Nf[t.view]){let e=Nf[t.view];it(e.position,e.target);return}typeof t==`object`&&t.action===`focus`&&t.position&&t.target&&it(t.position,t.target,1050)};window.addEventListener(`smart-city-camera`,at);let ot=performance.now(),st=0,ct=e=>{st=requestAnimationFrame(ct);let t=Math.max(0,(e-ot)/1e3);j.rotation.y=t*.012;let i=Math.min(54,v.current);if(ze.forEach((e,n)=>{let r=Re[n];if(r.visible=n<i,n>=i)return;let a=(e.offset+t*e.speed*30)%Uf-Uf/2,o=e.axis?a:e.lane,s=e.axis?e.lane:a;r.position.set(o,1.46,s),r.rotation.y=e.axis?Math.PI/2:0}),me.forEach((e,n)=>{e.rotation.z=t*(n%2?-.025:.02)}),he.forEach((e,n)=>{e.rotation.z=t*(n===0?.08:-.055)}),Te.forEach((e,n)=>{e.material.dashOffset=-t*(.8+n*.14)}),De.forEach((e,n)=>{let r=Te[n].userData.curve;e.position.copy(r.getPoint((t*.13+n*.22)%1))}),W){let t=Math.min(1,(e-W.start)/W.duration),n=1-(1-t)**3;r.position.lerpVectors(W.from,W.to,n),s.target.lerpVectors(W.targetFrom,W.targetTo,n),t>=1&&(W=null,s.enabled=!0)}else _.current&&(r.position.x=Math.cos(t*.038)*142,r.position.z=Math.sin(t*.038)*142,r.position.y=118+Math.sin(t*.06)*4,s.target.set(0,17,0));s.update(),o.render(n,r)};return st=requestAnimationFrame(ct),()=>{t=!0,cancelAnimationFrame(st),cancelAnimationFrame(Ke),cancelAnimationFrame(H),rt.disconnect(),o.domElement.removeEventListener(`pointermove`,Qe),o.domElement.removeEventListener(`pointerleave`,Ze),o.domElement.removeEventListener(`pointerdown`,et),o.domElement.removeEventListener(`pointerup`,$e),window.removeEventListener(`smart-city-camera`,at),s.dispose(),o.dispose(),n.traverse(e=>{let t=e;t.geometry?.dispose?.(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material?.dispose?.()}),o.domElement.remove()}},[l,c]),(0,$.jsx)(`div`,{ref:u,className:`smart-city-scene`,"aria-label":`北京科幻智慧城市三维数字孪生场景`})}var Xf=new Map;function Zf(e,t){for(let n of t){let t=e[n];if(typeof t==`string`&&t.startsWith(`https://`))return t}return``}function Qf(e){if(!e||typeof e!=`object`)return null;let t=e.result;if(!t||typeof t!=`object`)return null;let n=t.data;if(!Array.isArray(n))return null;for(let e of n){if(!e||typeof e!=`object`)continue;let t=e,n=Zf(t,[`imageProcUrl`,`fileurlProc`,`imageLthUrl`,`fileurlLTh`,`imageThUrl`,`fileurlTh`]);if(!n)continue;let r=Number(t.distance),i=Number(t.heading??t.headers);return{src:n,distanceMeters:Number.isFinite(r)?Math.round(r):void 0,heading:Number.isFinite(i)?i:void 0,shotDate:typeof t.shotDate==`string`?t.shotDate:void 0,imageId:typeof t.id==`string`?t.id:void 0}}return null}var $f=[{label:`感知覆盖`,value:`98%`,percent:98},{label:`协同效率`,value:`94%`,percent:94},{label:`预测准确`,value:`96%`,percent:96},{label:`处置闭环`,value:`97%`,percent:97}],ep=[{label:`数字孪生覆盖`,value:`100%`,percent:100},{label:`数据完整率`,value:`99.8%`,percent:99.8},{label:`分钟级同步`,value:`128ms`,percent:88},{label:`趋势稳定度`,value:`96.2%`,percent:96.2}],tp=[{label:`感知可信度`,value:`97.8%`,percent:97.8},{label:`自动派单`,value:`已完成`,percent:100},{label:`处置进度`,value:`92%`,percent:92},{label:`闭环审计`,value:`可追溯`,percent:100}],np=[{label:`空气优良率`,value:`94.6%`,percent:94.6},{label:`监测站在线`,value:`99.4%`,percent:99.4},{label:`碳排强度`,value:`-4.8%`,percent:84},{label:`绿色空间`,value:`49.8%`,percent:49.8}],rp=[{label:`平均车速`,value:`41.8 km/h`,percent:78},{label:`信号协调率`,value:`92.7%`,percent:92.7},{label:`拥堵里程`,value:`28.6 km`,percent:36},{label:`路网在线率`,value:`99.2%`,percent:99.2}],ip=[{label:`城市感知`,value:`97.8`,percent:97.8},{label:`交通运行`,value:`94.2`,percent:94.2},{label:`公共服务`,value:`96.5`,percent:96.5},{label:`治理闭环`,value:`95.6`,percent:95.6}],ap=[{label:`设备在线率`,value:`99.97%`,percent:99.97},{label:`模型服务`,value:`24 / 24`,percent:100},{label:`数据延迟`,value:`128ms`,percent:91},{label:`安全状态`,value:`正常`,percent:100}],op={"brand-overview":{accent:`#4ce8ff`,secondary:`#4f8fff`,code:`P-01`,primary:`5,275`,primaryLabel:`地图内建筑`},"command-center":{accent:`#718fff`,secondary:`#aa91ff`,code:`P-02`,primary:`24 / 24`,primaryLabel:`城市模型服务`},"system-health":{accent:`#5ce8ae`,secondary:`#45cfff`,code:`P-03`,primary:`99.97%`,primaryLabel:`系统健康度`},"city-clock":{accent:`#ffbd67`,secondary:`#ff855c`,code:`P-04`,primary:`1s`,primaryLabel:`时间同步周期`},operator:{accent:`#b091ff`,secondary:`#668dff`,code:`P-05`,primary:`ADMIN`,primaryLabel:`演示权限`},"navigation-0":{accent:`#4ce8ff`,secondary:`#5f8fff`,code:`N-01`,primary:`全域`,primaryLabel:`城市态势总览`},"navigation-1":{accent:`#6e9aff`,secondary:`#b08fff`,code:`N-02`,primary:`96.8%`,primaryLabel:`事件闭环率`},"navigation-2":{accent:`#ffc769`,secondary:`#ff885c`,code:`N-03`,primary:`41.8`,primaryLabel:`平均车速 km/h`},"navigation-3":{accent:`#58eab0`,secondary:`#4fd9ff`,code:`N-04`,primary:`94.6%`,primaryLabel:`空气优良率`},"navigation-4":{accent:`#ff7866`,secondary:`#ffb65e`,code:`N-05`,primary:`99.3%`,primaryLabel:`应急资源在线`},area:{accent:`#4ce8ff`,secondary:`#4b8fff`,code:`V-01`,primary:`16,410`,primaryLabel:`平方公里`},gdp:{accent:`#b48bff`,secondary:`#657cff`,code:`V-02`,primary:`4.98`,primaryLabel:`万亿元`},rail:{accent:`#4f9dff`,secondary:`#45dcff`,code:`V-03`,primary:`879`,primaryLabel:`运营公里`},parks:{accent:`#55e9ad`,secondary:`#35bfcf`,code:`V-04`,primary:`1,064`,primaryLabel:`公园绿地`},pm25:{accent:`#68edaf`,secondary:`#42dce8`,code:`E-01`,primary:`28`,primaryLabel:`μg/m³`},air:{accent:`#54efc0`,secondary:`#48bcff`,code:`E-02`,primary:`94.6%`,primaryLabel:`空气优良率`},temperature:{accent:`#ffbd69`,secondary:`#ff7f5e`,code:`E-03`,primary:`26.3°C`,primaryLabel:`城市平均温度`},carbon:{accent:`#65e789`,secondary:`#39c7bd`,code:`E-04`,primary:`-4.8%`,primaryLabel:`同比变化`},"traffic-index":{accent:`#ffc769`,secondary:`#ff885c`,code:`T-01`,primary:`1.42`,primaryLabel:`全路网指数`},"traffic-flow":{accent:`#ff9f5d`,secondary:`#ffd266`,code:`T-02`,primary:`54`,primaryLabel:`动态车辆`},speed:{accent:`#54d9ff`,secondary:`#5f8fff`,code:`T-03`,primary:`41.8`,primaryLabel:`km/h`},congestion:{accent:`#ff7768`,secondary:`#ffad5d`,code:`T-04`,primary:`28.6`,primaryLabel:`拥堵公里`},signals:{accent:`#5ce8ae`,secondary:`#49cfff`,code:`T-05`,primary:`92.7%`,primaryLabel:`信号协调率`}};function sp(e){return e.replace(/^insight-/,``)}function cp(e){let t=sp(e.id),n=/^ai-(\d)$/.exec(t),r=/^event-(\d)$/.exec(t),i=/^district-(.+)$/.exec(t),a;if(t===`ai-score`||n){let e=n?Number(n[1]):void 0,t=e===void 0?`96.4`:$f[e]?.value.replace(`%`,``)??`96.4`;a={variant:`ai`,code:e===void 0?`AI-00`:`AI-0${e+1}`,eyebrow:`CITY AI INDEX · 智能指数详情`,status:e===void 0?`TOP 1`:`维度 ${e+1}/4`,accent:e===3?`#59e6b1`:e===2?`#55d9ff`:e===1?`#7892ff`:`#aa91ff`,secondary:`#52e0ff`,primary:t,primaryLabel:e===void 0?`综合智能指数`:$f[e]?.label??`能力得分`,metrics:$f,selectedMetric:e}}else if([`area`,`gdp`,`rail`,`parks`].includes(t))a={variant:`vital`,code:`V-00`,eyebrow:`URBAN VITAL SIGNS · 城市生命体征`,status:`LIVE`,accent:`#4ce8ff`,secondary:`#5f8fff`,primary:`99.8%`,primaryLabel:`数据完整率`,metrics:ep};else if(r){let t=Number(r[1]);a={variant:`event`,code:`EV-0${t+1}`,eyebrow:`AI EVENT STREAM · 城市事件中枢`,status:[`已闭环`,`运行正常`,`负荷稳定`,`空气优良`][t]??`处理中`,accent:[`#ff7666`,`#ffb65e`,`#56d8ff`,`#62e5ae`][t]??`#ff8d68`,secondary:t>1?`#56d8ff`:`#ffbd68`,primary:e.meta.match(/BJ-(\d+)/)?.[1]??`0${t+1}`,primaryLabel:`事件追踪编号`,metrics:tp,selectedMetric:t}}else if([`pm25`,`air`,`temperature`,`carbon`].includes(t)||e.category.includes(`生态`))a={variant:`eco`,code:`E-00`,eyebrow:`ECOLOGICAL MONITORING · 生态环境`,status:`优`,accent:`#58ebb0`,secondary:`#4fd9ff`,primary:`94.6%`,primaryLabel:`空气优良率`,metrics:np};else if([`traffic-index`,`traffic-flow`,`speed`,`congestion`,`signals`].includes(t)||e.category.includes(`交通`))a={variant:`traffic`,code:`T-00`,eyebrow:`TRAFFIC MOBILITY · 交通运行脉搏`,status:`畅通`,accent:`#ffc46b`,secondary:`#ff8b5b`,primary:`1.42`,primaryLabel:`全路网指数`,metrics:rp};else if(i){let t=i[1],n={朝阳:`#4bdcff`,海淀:`#788fff`,东城:`#5be6ad`,丰台:`#ffad5b`},r=e.meta.match(/(\d{2}\.\d)/)?.[1]??`95.6`;a={variant:`district`,code:`D-${t.slice(0,1)}`,eyebrow:`DISTRICT OPERATIONS · 城区运行态势`,status:`16 区联动`,accent:n[t]??`#58b7ff`,secondary:`#6f8fff`,primary:r,primaryLabel:`城区综合评分`,metrics:ip}}else a=e.photo?{variant:`asset`,code:`3D-ASSET`,eyebrow:`DIGITAL TWIN ASSET · 三维城市资产`,status:`已定位`,accent:`#4ce8ff`,secondary:`#4f8fff`,primary:e.meta.match(/(\d+)\s*m/)?.[1]??`ONLINE`,primaryLabel:e.meta.includes(` m`)?`建筑高度 / m`:`实时资产`,metrics:ap}:{variant:`platform`,code:`CITY-OPS`,eyebrow:`BEIJING CITY OPERATIONS · 城市运行详情`,status:`ONLINE`,accent:`#54e2f2`,secondary:`#718fff`,primary:e.meta.match(/(\d+(?:\.\d+)?%?)/)?.[1]??`99.97%`,primaryLabel:`系统运行值`,metrics:ap};return{...a,...op[t]}}function lp({profile:e}){return(0,$.jsx)(`div`,{className:`detail-metric-list`,children:e.metrics.map((t,n)=>(0,$.jsxs)(`div`,{className:e.selectedMetric===n?`selected`:``,style:{"--metric-progress":`${t.percent}%`},children:[(0,$.jsx)(`span`,{children:t.label}),(0,$.jsx)(`meter`,{min:`0`,max:`100`,value:t.percent,"aria-label":`${t.label} ${t.value}`}),(0,$.jsx)(`strong`,{children:t.value})]},t.label))})}function up({profile:e}){return e.variant===`ai`?(0,$.jsxs)(`section`,{className:`detail-visual detail-ai-visual`,"aria-label":`城市智能指数能力结构`,children:[(0,$.jsxs)(`div`,{className:`detail-ai-summary`,children:[(0,$.jsxs)(`div`,{className:`score-rings detail-score-rings`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`strong`,{children:e.primary}),(0,$.jsx)(`span`,{children:`综合评分`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`AI 城市大脑`}),(0,$.jsx)(`b`,{children:e.primaryLabel}),(0,$.jsx)(`em`,{children:e.status}),(0,$.jsx)(`p`,{children:`城市治理模型实时计算中`})]})]}),(0,$.jsx)(lp,{profile:e})]}):e.variant===`event`?(0,$.jsxs)(`section`,{className:`detail-visual detail-event-visual`,"aria-label":`城市事件处置链`,children:[(0,$.jsxs)(`div`,{className:`detail-event-sequence`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`01`}),(0,$.jsx)(`b`,{children:`感知发现`}),(0,$.jsx)(`em`,{children:`完成`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`02`}),(0,$.jsx)(`b`,{children:`模型研判`}),(0,$.jsx)(`em`,{children:`可信`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`03`}),(0,$.jsx)(`b`,{children:`联动派单`}),(0,$.jsx)(`em`,{children:`执行`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`04`}),(0,$.jsx)(`b`,{children:`闭环审计`}),(0,$.jsx)(`em`,{children:e.status})]})]}),(0,$.jsx)(lp,{profile:e})]}):e.variant===`traffic`?(0,$.jsxs)(`section`,{className:`detail-visual detail-traffic-visual`,"aria-label":`交通运行指标`,children:[(0,$.jsxs)(`div`,{className:`detail-primary-number`,children:[(0,$.jsx)(`span`,{children:e.primaryLabel}),(0,$.jsx)(`strong`,{children:e.primary}),(0,$.jsx)(`em`,{children:e.status})]}),(0,$.jsx)(`div`,{className:`detail-traffic-flow`,"aria-label":`近八小时车流趋势`,children:[38,54,46,67,83,72,91,64,76,58,69,43].map((e,t)=>(0,$.jsx)(`i`,{style:{height:`${e}%`}},t))}),(0,$.jsx)(lp,{profile:e})]}):e.variant===`eco`?(0,$.jsxs)(`section`,{className:`detail-visual detail-eco-visual`,"aria-label":`生态环境指标`,children:[(0,$.jsxs)(`div`,{className:`detail-eco-primary`,children:[(0,$.jsx)(`span`,{children:e.primaryLabel}),(0,$.jsx)(`strong`,{children:e.primary}),(0,$.jsx)(`em`,{children:e.status})]}),(0,$.jsx)(lp,{profile:e})]}):e.variant===`district`?(0,$.jsxs)(`section`,{className:`detail-visual detail-district-visual`,"aria-label":`城区运行评分`,children:[(0,$.jsxs)(`div`,{className:`detail-district-rank`,children:[(0,$.jsx)(`span`,{children:e.code}),(0,$.jsx)(`strong`,{children:e.primary}),(0,$.jsx)(`em`,{children:e.primaryLabel})]}),(0,$.jsx)(lp,{profile:e})]}):e.variant===`vital`?(0,$.jsxs)(`section`,{className:`detail-visual detail-vital-visual`,"aria-label":`城市生命体征指标`,children:[(0,$.jsxs)(`div`,{className:`detail-primary-number`,children:[(0,$.jsx)(`span`,{children:e.primaryLabel}),(0,$.jsx)(`strong`,{children:e.primary}),(0,$.jsx)(`em`,{children:e.status})]}),(0,$.jsx)(lp,{profile:e})]}):e.variant===`platform`?(0,$.jsxs)(`section`,{className:`detail-visual detail-platform-visual`,"aria-label":`城市平台运行状态`,children:[(0,$.jsxs)(`div`,{className:`detail-platform-status`,children:[(0,$.jsx)(`span`,{children:`核心服务`}),(0,$.jsx)(`strong`,{children:e.primary}),(0,$.jsx)(`em`,{children:e.status})]}),(0,$.jsx)(lp,{profile:e})]}):null}function dp({photo:e}){let t=e.lookupUrl&&Xf.has(e.lookupUrl)?Xf.get(e.lookupUrl)??null:null,[n,i]=(0,r.useState)(``),[a,o]=(0,r.useState)(()=>e.provider===`verified-local`?e.src?{src:e.src}:null:t),[s,c]=(0,r.useState)(()=>e.provider===`verified-local`?e.src?`ready`:`empty`:e.lookupUrl?Xf.has(e.lookupUrl)?t?`ready`:`empty`:`loading`:`error`),l=!!a?.src&&n===a?.src;return(0,r.useEffect)(()=>{if(e.provider!==`kartaview`||!e.lookupUrl||Xf.has(e.lookupUrl))return;let t=e.lookupUrl,n=new AbortController;return fetch(t,{signal:n.signal,headers:{Accept:`application/json`}}).then(async e=>{if(!e.ok)throw Error(`KartaView HTTP ${e.status}`);return await e.json()}).then(e=>{let n=Qf(e);Xf.set(t,n),o(n),c(n?`ready`:`empty`)}).catch(e=>{e instanceof DOMException&&e.name===`AbortError`||c(`error`)}),()=>n.abort()},[e.lookupUrl,e.provider]),(0,$.jsxs)(`figure`,{className:`data-detail-photo`,"data-photo-kind":e.kind,"data-photo-provider":e.provider,"data-asset-id":e.assetId,children:[s===`ready`&&a?.src&&!l?(0,$.jsxs)(`a`,{href:a.src,target:`_blank`,rel:`noreferrer`,"aria-label":`查看${e.caption}大图`,children:[(0,$.jsx)(`img`,{src:a.src,alt:e.alt,onError:()=>i(a.src)}),(0,$.jsx)(`span`,{children:`点击查看真实街景 ↗`})]}):(0,$.jsxs)(`div`,{className:`data-detail-photo-empty`,role:`status`,children:[(0,$.jsx)(`i`,{children:s===`loading`?`LOOKING UP`:s===`error`?`OFFLINE`:l?`IMAGE ERROR`:`NO COVERAGE`}),(0,$.jsx)(`strong`,{children:s===`loading`?`正在按建筑坐标检索 KartaView 街景`:s===`error`?`KartaView 在线查询暂不可用`:l?`实景图片加载失败`:`该建筑附近暂无 KartaView 街景覆盖`}),(0,$.jsx)(`span`,{children:s===`loading`?`仅在打开详情时发起一次查询`:`系统不会使用其他建筑照片替代`})]}),(0,$.jsxs)(`figcaption`,{children:[(0,$.jsx)(`b`,{children:e.matchLabel}),(0,$.jsx)(`strong`,{children:e.caption}),(0,$.jsx)(`small`,{children:e.credit}),e.provider===`kartaview`&&a&&(0,$.jsxs)(`small`,{className:`data-detail-photo-position`,children:[`KartaView 图片 `,a.imageId||`未编号`,a.shotDate?` · 拍摄 ${a.shotDate.slice(0,10)}`:``,a.distanceMeters===void 0?``:` · 距查询点 ${a.distanceMeters} m`]}),e.position&&(0,$.jsxs)(`small`,{className:`data-detail-photo-position`,children:[`WGS84 `,e.position.longitude.toFixed(6),`, `,e.position.latitude.toFixed(6),` · 查询视点距建筑 `,e.position.distanceMeters,` m`]}),e.sourceUrl?(0,$.jsx)(`a`,{href:e.sourceUrl,target:`_blank`,rel:`noreferrer`,children:e.provider===`kartaview`?`KartaView 数据与服务说明 ↗`:`图片授权与原始来源 ↗`}):(0,$.jsx)(`span`,{className:`data-detail-photo-source`,children:`已核验本地实景素材`})]})]})}function fp({data:e,onClose:t,tone:n=`cyan`}){let i=cp(e),a={"--detail-accent":i.accent,"--detail-secondary":i.secondary};return(0,r.useEffect)(()=>{let e=e=>{e.key===`Escape`&&t()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t]),(0,$.jsxs)(`div`,{className:`data-detail-layer ${n} variant-${i.variant}`,role:`presentation`,style:a,children:[(0,$.jsx)(`button`,{className:`data-detail-backdrop`,"aria-label":`关闭数据详情`,onClick:t}),(0,$.jsxs)(`section`,{className:`data-detail-dialog detail-${i.variant} ${e.photo?`has-photo`:``}`,role:`dialog`,"aria-modal":`true`,"aria-label":`${e.label}数据详情`,"data-detail-variant":i.variant,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsxs)(`div`,{className:`detail-header-title`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`span`,{children:i.eyebrow})]}),(0,$.jsxs)(`div`,{className:`detail-header-actions`,children:[(0,$.jsx)(`b`,{children:i.code}),(0,$.jsx)(`em`,{children:i.status}),(0,$.jsx)(`button`,{"aria-label":`关闭数据详情`,onClick:t,children:`×`})]})]}),(0,$.jsxs)(`div`,{className:`data-detail-body ${e.photo?`with-photo`:``}`,children:[(0,$.jsxs)(`div`,{className:`data-detail-copy`,children:[(0,$.jsxs)(`div`,{className:`detail-category`,children:[(0,$.jsx)(`span`,{children:e.category}),(0,$.jsx)(`em`,{children:i.status})]}),(0,$.jsx)(`h2`,{children:e.label}),(0,$.jsx)(up,{profile:i}),(0,$.jsx)(`p`,{children:e.details}),(0,$.jsxs)(`div`,{className:`data-detail-meta`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`数据状态`}),(0,$.jsxs)(`b`,{children:[(0,$.jsx)(`i`,{}),`实时更新`]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`研判结果`}),(0,$.jsx)(`b`,{children:e.meta})]})]})]}),e.photo&&(0,$.jsx)(dp,{photo:e.photo},e.photo.assetId)]}),(0,$.jsxs)(`footer`,{children:[(0,$.jsx)(`span`,{children:i.eyebrow}),(0,$.jsx)(`button`,{onClick:t,children:`关闭详情`})]})]})]})}var pp=[`全域态势`,`城市治理`,`交通脉搏`,`生态能源`,`公共安全`],mp=[{name:`朝阳`,score:97.2,tone:`cyan`,value:`商务活跃`},{name:`海淀`,score:95.8,tone:`blue`,value:`科技创新`},{name:`东城`,score:94.6,tone:`green`,value:`治理高效`},{name:`丰台`,score:91.9,tone:`orange`,value:`枢纽畅通`}],hp=[{time:`21:26:48`,level:`AI`,text:`朝阳区交通流量预测完成`,state:`已闭环`},{time:`21:25:32`,level:`感`,text:`海淀区感知节点状态巡检`,state:`正常`},{time:`21:24:16`,level:`能`,text:`全市电网负荷进入平稳区间`,state:`稳定`},{time:`21:22:09`,level:`环`,text:`城市空气质量模型已更新`,state:`优良`}],gp=[`全市感知设备在线率 99.97%`,`重点道路平均车速 41.8 km/h`,`轨道交通在途列车 1,284 列`,`空气质量优良率 94.6%`,`城市事件智能闭环率 96.8%`,`新能源消纳比例 38.7%`],_p=[{id:`panorama`,code:`01`,label:`全景`},{id:`cbd`,code:`02`,label:`CBD`},{id:`axis`,code:`03`,label:`中轴`},{id:`top`,code:`04`,label:`俯瞰`},{id:`horizon`,code:`05`,label:`天际`}],vp={朝阳:{position:[83,45,72],target:[38,9,18]},海淀:{position:[-88,48,82],target:[-48,9,40]},东城:{position:[-58,42,-58],target:[-22,9,-15]},丰台:{position:[52,43,-91],target:[12,8,-48]}};function yp({displayName:e,onOpenDemo:t,onLogout:n}){let[i,a]=(0,r.useState)(`全域态势`),[o,s]=(0,r.useState)(!0),[c,l]=(0,r.useState)(!0),[u,d]=(0,r.useState)(!1),[f,p]=(0,r.useState)(!1),[m,h]=(0,r.useState)(54),[g,_]=(0,r.useState)(null),[v,y]=(0,r.useState)(`loading`),[b,x]=(0,r.useState)(()=>new Date),[S,C]=(0,r.useState)(0),[w,T]=(0,r.useState)(!1),[E,D]=(0,r.useState)(!1),[O,k]=(0,r.useState)(`panorama`),[ee,A]=(0,r.useState)(`左键拖拽旋转 · 滚轮缩放 · 右键平移 · 点击建筑查看名称与实景照片`),[te,j]=(0,r.useState)(0);(0,r.useEffect)(()=>{let e=window.setInterval(()=>x(new Date),1e3),t=window.setInterval(()=>C(e=>(e+1)%8),2400),n=window.requestAnimationFrame(()=>T(!0)),r=()=>D(!!document.fullscreenElement);return document.addEventListener(`fullscreenchange`,r),()=>{window.clearInterval(e),window.clearInterval(t),window.cancelAnimationFrame(n),document.removeEventListener(`fullscreenchange`,r)}},[]);let M=(0,r.useCallback)(e=>{A(e),j(e=>e+1)},[]),N=(0,r.useCallback)((e,t,n,r,i)=>{_({id:`insight-${e}`,label:t,category:n,details:r,meta:i}),M(`已打开：${t} · 右侧详情卡片已更新`)},[M]),P=(0,r.useCallback)(e=>{_(e),e&&M(`已选中：${e.label} · 详情卡片已展开`)},[M]),ne=b.toLocaleTimeString(`zh-CN`,{hour12:!1}),re=b.toLocaleDateString(`zh-CN`,{year:`numeric`,month:`2-digit`,day:`2-digit`}),ie=[`星期日`,`星期一`,`星期二`,`星期三`,`星期四`,`星期五`,`星期六`][b.getDay()],ae=(0,r.useMemo)(()=>v===`loading`?`正在构建北京三维建筑群`:v===`degraded`?`城市基础模型已启用`:`5,275 栋地图内建筑在线 · OSM 城市底图已接入`,[v]),oe=e=>{d(!1),p(!1),k(`panorama`),_({id:`district-${e.name}`,label:`${e.name}区`,category:`城区运行态势`,details:`${e.value}，当前城区综合运行指数 ${e.score}，城市感知、交通与公共服务状态正常。`,meta:`AI 评分 ${e.score} · 数据刷新 128ms`});let t=vp[e.name];window.dispatchEvent(new CustomEvent(`smart-city-camera`,{detail:{action:`focus`,position:t.position,target:t.target}})),M(`正在聚焦${e.name}区 · 镜头已进入城区态势视角`)},se=e=>{d(!1),p(!1),k(e.id),window.dispatchEvent(new CustomEvent(`smart-city-camera`,{detail:{action:`view`,view:e.id}})),M(`视角切换：${e.label} · 镜头缓动飞行中`)},ce=()=>{d(!1),p(!1),k(`panorama`),window.dispatchEvent(new CustomEvent(`smart-city-camera`,{detail:`reset`})),M(`三维视角已复位至北京城市全景`)},F=(e,t)=>{let n=[[`全域态势总览`,`汇总人口、交通、生态、公共安全和城市智能指数，中央三维场景已恢复北京城市全景。`,`5,275 栋地图内建筑 · 6,016 条原始建筑数据`],[`城市治理专题`,`展示城市事件发现、派单、处置与闭环情况，当前重点事件闭环率为 96.8%。`,`事件闭环率 96.8% · 平均响应 4.2 分钟`],[`交通脉搏专题`,`联动道路车流、平均速度、拥堵里程和信号协调率，三维车流已调整至高密度观察状态。`,`平均车速 41.8 km/h · 信号协调率 92.7%`],[`生态能源专题`,`汇总空气质量、碳排强度、新能源消纳和重点生态空间监测结果。`,`空气优良率 94.6% · 碳排强度 -4.8%`],[`公共安全专题`,`聚合城市告警、应急资源和重点区域风险研判，可从右下角进入灵境哨兵完整演示。`,`在线资源 99.3% · 重点区域实时感知`]];a(e),d(!1),t===0&&ce(),t===2&&h(54),t===3&&(p(!0),k(`top`),window.dispatchEvent(new CustomEvent(`smart-city-camera`,{detail:{action:`view`,view:`top`}})));let[r,i,o]=n[t];N(`navigation-${t}`,r,e,i,o),M(`已进入${e}专题 · 三维场景与右侧详情同步更新`)};return(0,$.jsxs)(`main`,{className:`future-city ${o?`night`:`day`}`,children:[(0,$.jsx)(`div`,{className:`future-grid`,"aria-hidden":`true`}),(0,$.jsx)(`div`,{className:`future-aurora future-aurora-a`,"aria-hidden":`true`}),(0,$.jsx)(`div`,{className:`future-aurora future-aurora-b`,"aria-hidden":`true`}),(0,$.jsxs)(`div`,{className:`future-horizon`,"aria-hidden":`true`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{})]}),(0,$.jsxs)(`div`,{className:`future-atmosphere`,"aria-hidden":`true`,children:[(0,$.jsx)(`span`,{className:`future-beam future-beam-a`}),(0,$.jsx)(`span`,{className:`future-beam future-beam-b`}),(0,$.jsx)(`span`,{className:`future-beam future-beam-c`}),(0,$.jsx)(`b`,{}),(0,$.jsx)(`b`,{}),(0,$.jsx)(`b`,{}),(0,$.jsx)(`b`,{}),(0,$.jsx)(`b`,{}),(0,$.jsx)(`b`,{}),(0,$.jsx)(`b`,{}),(0,$.jsx)(`b`,{})]}),(0,$.jsxs)(`header`,{className:`future-header`,children:[(0,$.jsxs)(`button`,{type:`button`,className:`future-brand future-header-action`,onClick:()=>{ce(),N(`brand-overview`,`京域智城数字孪生底座`,`平台总览`,`平台融合城市建筑、道路交通、生态感知、公共安全和应急推演能力，所有核心数据卡片均支持点击查看。`,`北京城市数字孪生 · 在线运行`)},children:[(0,$.jsxs)(`span`,{className:`future-brand-symbol`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`b`,{})]}),(0,$.jsxs)(`span`,{className:`future-brand-copy`,children:[(0,$.jsx)(`strong`,{children:`京域智城`}),(0,$.jsx)(`span`,{children:`BEIJING URBAN INTELLIGENCE CENTER`})]})]}),(0,$.jsxs)(`button`,{type:`button`,className:`future-heading future-header-action`,onClick:()=>{d(e=>!e),N(`command-center`,`北京市智慧城市运行指挥中心`,`全域感知指挥中枢`,`点击标题可启动或暂停三维城市自动巡航；当前场景支持建筑选择、区域聚焦、视角切换与车流调节。`,`自动巡航：${u?`即将暂停`:`即将启动`} · 场景状态：${v}`),M(u?`标题交互：自动巡航已暂停`:`标题交互：自动巡航已启动`)},children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{}),` BEIJING DIGITAL TWIN · 2026`]}),(0,$.jsx)(`strong`,{className:`future-title`,children:`北京市智慧城市运行指挥中心`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`b`,{children:`全域感知`}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{})]})]}),(0,$.jsxs)(`div`,{className:`future-account`,children:[(0,$.jsxs)(`button`,{type:`button`,className:`future-system future-header-action`,onClick:()=>N(`system-health`,`城市系统健康度 99.97%`,`实时运行状态`,`建筑、道路、感知设备和城市指标数据链路运行正常，三维渲染与交互引擎已就绪。`,`数据延迟 128ms · 设备在线率 99.97%`),children:[(0,$.jsx)(`i`,{}),`系统正常`]}),(0,$.jsxs)(`button`,{type:`button`,className:`future-time future-header-action`,onClick:()=>N(`city-clock`,`城市运行时钟`,`实时数据基准`,`当前城市数字孪生时间为 ${re} ${ne}，所有动态指标以本地演示时钟同步刷新。`,`${ie} · 每秒同步`),children:[(0,$.jsx)(`strong`,{children:ne}),(0,$.jsxs)(`span`,{children:[re,` · `,ie]})]}),(0,$.jsxs)(`button`,{type:`button`,className:`future-user future-user-profile future-header-action`,onClick:()=>N(`operator`,e,`当前值班用户`,`当前账户具有城市态势浏览、三维交互、数据详情查看和应急演示入口权限。`,`本地演示会话 · 权限正常`),children:[(0,$.jsx)(`i`,{}),e]}),(0,$.jsx)(`button`,{type:`button`,className:`future-fullscreen future-header-action`,"aria-label":E?`退出全屏`:`进入全屏`,onClick:async()=>{try{document.fullscreenElement?(await document.exitFullscreen(),M(`已退出全屏演示`)):(await document.documentElement.requestFullscreen(),M(`已进入全屏演示 · 按 Esc 可退出`))}catch{M(`当前浏览器未开放全屏权限`)}},children:E?`收`:`全`}),(0,$.jsx)(`button`,{type:`button`,className:`future-logout`,onClick:n,children:`退出`})]})]}),(0,$.jsx)(`nav`,{className:`future-nav`,"aria-label":`智慧城市功能导航`,children:pp.map((e,t)=>(0,$.jsxs)(`button`,{className:i===e?`active`:``,onClick:()=>F(e,t),children:[(0,$.jsxs)(`i`,{children:[`0`,t+1]}),(0,$.jsx)(`span`,{children:e})]},e))}),(0,$.jsxs)(`section`,{className:`future-stage`,children:[(0,$.jsxs)(`aside`,{className:`future-column left`,children:[(0,$.jsxs)(`section`,{className:`future-panel city-vitals`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsx)(`span`,{children:`01`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{children:`城市生命体征`}),(0,$.jsx)(`em`,{children:`URBAN VITAL SIGNS`})]}),(0,$.jsx)(`i`,{children:`LIVE`})]}),(0,$.jsxs)(`div`,{className:`vital-primary`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`常住人口`}),(0,$.jsx)(`strong`,{children:(0,$.jsx)(yf,{to:2183.2,decimals:1})}),(0,$.jsx)(`em`,{children:`万人`})]}),(0,$.jsx)(`div`,{className:`vital-wave`,"aria-hidden":`true`,children:[34,52,41,68,48,76,57,82,61,72,55,88].map((e,t)=>(0,$.jsx)(`i`,{style:{height:`${e}%`}},t))})]}),(0,$.jsxs)(`div`,{className:`vital-grid`,children:[(0,$.jsxs)(`button`,{type:`button`,onClick:()=>N(`area`,`北京市域面积`,`城市生命体征`,`全市域面积 16,410 平方公里，数字孪生已覆盖核心城区、重点交通走廊和公共服务节点。`,`全域覆盖 · 数据更新 128ms`),children:[(0,$.jsx)(`span`,{children:`城市面积`}),(0,$.jsxs)(`b`,{children:[(0,$.jsx)(yf,{to:16410}),(0,$.jsx)(`small`,{children:` km²`})]}),(0,$.jsx)(`em`,{children:`全域覆盖`})]}),(0,$.jsxs)(`button`,{type:`button`,onClick:()=>N(`gdp`,`地区生产总值`,`城市生命体征`,`城市经济运行保持稳健，数字经济、科技服务和现代服务业构成主要增长动能。`,`4.98 万亿元 · 同比 +5.2%`),children:[(0,$.jsx)(`span`,{children:`地区生产总值`}),(0,$.jsxs)(`b`,{children:[(0,$.jsx)(yf,{to:4.98,decimals:2}),(0,$.jsx)(`small`,{children:` 万亿元`})]}),(0,$.jsx)(`em`,{children:`同比 +5.2%`})]}),(0,$.jsxs)(`button`,{type:`button`,onClick:()=>N(`rail`,`轨道交通网络`,`城市生命体征`,`轨道交通运营里程 879 公里，1,284 列列车在途，关键换乘枢纽运行正常。`,`线网联动 · 平均准点率 99.6%`),children:[(0,$.jsx)(`span`,{children:`轨道交通`}),(0,$.jsxs)(`b`,{children:[(0,$.jsx)(yf,{to:879}),(0,$.jsx)(`small`,{children:` km`})]}),(0,$.jsx)(`em`,{children:`在途 1,284 列`})]}),(0,$.jsxs)(`button`,{type:`button`,onClick:()=>N(`parks`,`公园绿地体系`,`城市生命体征`,`全市 1,064 处公园绿地接入生态监测，绿色空间覆盖率达到 49.8%。`,`生态感知 · 1,064 处在线`),children:[(0,$.jsx)(`span`,{children:`公园绿地`}),(0,$.jsxs)(`b`,{children:[(0,$.jsx)(yf,{to:1064}),(0,$.jsx)(`small`,{children:` 处`})]}),(0,$.jsx)(`em`,{children:`绿色空间 49.8%`})]})]})]}),(0,$.jsxs)(`section`,{className:`future-panel event-center`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsx)(`span`,{children:`02`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{children:`城市事件中枢`}),(0,$.jsx)(`em`,{children:`AI EVENT STREAM`})]}),(0,$.jsx)(`i`,{children:`04`})]}),(0,$.jsx)(`div`,{className:`event-list`,children:hp.map((e,t)=>(0,$.jsxs)(`button`,{type:`button`,className:`event-row ${S===t?`pulse`:``}`,onClick:()=>N(`event-${t}`,e.text,`城市事件中枢`,`${e.time} 由${e.level}类城市感知模型完成研判，当前处置状态为“${e.state}”。`,`事件编号 BJ-${e.time.replaceAll(`:`,``)} · ${e.state}`),children:[(0,$.jsx)(`time`,{children:e.time}),(0,$.jsx)(`i`,{children:e.level}),(0,$.jsxs)(`p`,{children:[e.text,(0,$.jsx)(`span`,{children:e.state})]})]},e.time))})]}),(0,$.jsxs)(`section`,{className:`future-panel eco-panel`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsx)(`span`,{children:`03`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{children:`生态环境监测`}),(0,$.jsx)(`em`,{children:`ECOLOGICAL MONITORING`})]}),(0,$.jsx)(`i`,{children:`优`})]}),(0,$.jsxs)(`div`,{className:`eco-content`,children:[(0,$.jsxs)(`button`,{type:`button`,className:`air-orbit`,onClick:()=>N(`pm25`,`PM2.5 实时监测`,`生态环境监测`,`北京市核心区 PM2.5 当前浓度为 28 μg/m³，空气质量等级为优。`,`气象与环境感知网 · 分钟级刷新`),children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`b`,{children:`28`}),(0,$.jsx)(`span`,{children:`PM2.5`})]}),(0,$.jsxs)(`div`,{className:`eco-stats`,children:[(0,$.jsxs)(`button`,{type:`button`,onClick:()=>N(`air`,`空气优良率`,`生态环境监测`,`全市空气质量优良率达到 94.6%，重点站点均处于正常监测状态。`,`94.6% · 较昨日 +1.2%`),children:[(0,$.jsx)(`span`,{children:`空气优良率`}),(0,$.jsx)(`b`,{children:`94.6%`})]}),(0,$.jsxs)(`button`,{type:`button`,onClick:()=>N(`temperature`,`城市平均温度`,`生态环境监测`,`当前城市平均温度 26.3°C，热岛强度处于可控区间。`,`26.3°C · 东南风 3.4m/s`),children:[(0,$.jsx)(`span`,{children:`平均温度`}),(0,$.jsx)(`b`,{children:`26.3°C`})]}),(0,$.jsxs)(`button`,{type:`button`,onClick:()=>N(`carbon`,`碳排强度`,`生态环境监测`,`城市单位产出碳排强度同比下降 4.8%，新能源消纳比例持续提升。`,`-4.8% · 绿色转型稳定`),children:[(0,$.jsx)(`span`,{children:`碳排强度`}),(0,$.jsx)(`b`,{children:`-4.8%`})]})]})]})]})]}),(0,$.jsxs)(`section`,{className:`future-center`,children:[(0,$.jsxs)(`div`,{className:`scene-head`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`span`,{children:i}),(0,$.jsx)(`b`,{children:`北京核心区三维数字孪生 · OSM 城市底图`})]}),(0,$.jsx)(`em`,{className:v,children:ae})]}),(0,$.jsxs)(`div`,{className:`future-scene`,children:[(0,$.jsx)(Yf,{topView:f,nightMode:o,buildingLights:c,autoTour:u,trafficDensity:m,onSelect:P,onSceneStatus:y}),(0,$.jsx)(`div`,{className:`scene-scanline`,"aria-hidden":`true`}),(0,$.jsxs)(`div`,{className:`scene-corners`,"aria-hidden":`true`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{})]}),(0,$.jsxs)(`div`,{className:`scene-coordinate`,children:[(0,$.jsx)(`span`,{children:`39°54′27″N`}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`span`,{children:`116°27′07″E`}),(0,$.jsx)(`b`,{children:`BEIJING`})]}),(0,$.jsxs)(`div`,{className:`scene-layer`,children:[(0,$.jsx)(`span`,{children:`DATA LAYERS`}),(0,$.jsx)(`i`,{className:`cyan`}),(0,$.jsx)(`em`,{children:`建筑`}),(0,$.jsx)(`i`,{className:`blue`}),(0,$.jsx)(`em`,{children:`交通`}),(0,$.jsx)(`i`,{className:`green`}),(0,$.jsx)(`em`,{children:`感知`})]}),(0,$.jsxs)(`div`,{className:`scene-orientation`,children:[(0,$.jsx)(`b`,{children:`N`}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`span`,{children:`024°`})]}),(0,$.jsx)(`div`,{className:`scene-districts`,children:mp.map(e=>(0,$.jsxs)(`button`,{onClick:()=>oe(e),children:[(0,$.jsx)(`i`,{className:e.tone}),(0,$.jsx)(`span`,{children:e.name}),(0,$.jsx)(`b`,{children:e.score})]},e.name))}),(0,$.jsxs)(`div`,{className:`scene-view-presets`,"aria-label":`预设三维视角`,children:[(0,$.jsx)(`span`,{children:`VIEW`}),_p.map(e=>(0,$.jsxs)(`button`,{className:O===e.id?`active`:``,onClick:()=>se(e),"aria-label":`切换至${e.label}视角`,children:[(0,$.jsx)(`i`,{children:e.code}),(0,$.jsx)(`b`,{children:e.label})]},e.id))]}),(0,$.jsxs)(`div`,{className:`scene-operation-tip`,role:`status`,"aria-live":`polite`,children:[(0,$.jsx)(`i`,{children:`⌁`}),(0,$.jsx)(`span`,{children:ee})]},te),(0,$.jsxs)(`div`,{className:`scene-controls`,children:[(0,$.jsxs)(`button`,{className:f?`on`:``,onClick:()=>{let e=!f;d(!1),p(e),k(e?`top`:`panorama`),M(e?`垂直俯视已开启 · 可滚轮缩放查看建筑分布`:`已恢复自由视角`)},children:[(0,$.jsx)(`i`,{children:`◇`}),f?`自由视角`:`垂直俯视`]}),(0,$.jsxs)(`button`,{className:u?`on`:``,onClick:()=>{let e=!u;d(e),p(!1),M(e?`自动巡航已启动 · 手动选视角可随时接管`:`自动巡航已暂停`)},children:[(0,$.jsx)(`i`,{children:u?`■`:`▶`}),u?`停止巡航`:`自动巡航`]}),(0,$.jsxs)(`button`,{className:c?`on`:``,onClick:()=>{let e=!c;l(e),M(e?`建筑光网已点亮`:`建筑光网已隐藏`)},children:[(0,$.jsx)(`i`,{children:`✦`}),`建筑光网`]}),(0,$.jsxs)(`button`,{onClick:()=>{let e=!o;s(e),M(e?`已切换至夜间城市模式`:`已切换至日间城市模式`)},children:[(0,$.jsx)(`i`,{children:o?`☀`:`☾`}),o?`日间模式`:`夜间模式`]}),(0,$.jsxs)(`button`,{onClick:()=>{let e=m===18?36:m===36?54:18;h(e),M(`动态车流密度已调整为 ${e} 辆`)},children:[(0,$.jsx)(`i`,{children:`⇄`}),`车流 `,m]}),(0,$.jsxs)(`button`,{"aria-label":`复位三维视角`,onClick:ce,children:[(0,$.jsx)(`i`,{children:`⌖`}),`视角复位`]})]}),(0,$.jsxs)(`div`,{className:`scene-zoom`,children:[(0,$.jsx)(`button`,{"aria-label":`放大城市模型`,onClick:()=>window.dispatchEvent(new CustomEvent(`smart-city-camera`,{detail:`zoomIn`})),children:`＋`}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`button`,{"aria-label":`缩小城市模型`,onClick:()=>window.dispatchEvent(new CustomEvent(`smart-city-camera`,{detail:`zoomOut`})),children:`−`})]})]})]}),(0,$.jsxs)(`aside`,{className:`future-column right`,children:[(0,$.jsxs)(`section`,{className:`future-panel ai-index`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsx)(`span`,{children:`04`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{children:`城市智能指数`}),(0,$.jsx)(`em`,{children:`CITY AI INDEX`})]}),(0,$.jsx)(`i`,{children:`TOP 1`})]}),(0,$.jsxs)(`button`,{type:`button`,className:`ai-score`,onClick:()=>N(`ai-score`,`城市智能指数 96.4`,`城市 AI 大脑`,`综合感知覆盖、协同效率、预测准确和处置闭环四项能力，当前城市智能指数为 96.4。`,`全国领先 · 较昨日 +1.8%`),children:[(0,$.jsxs)(`div`,{className:`score-rings`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`strong`,{children:(0,$.jsx)(yf,{to:96.4,decimals:1})}),(0,$.jsx)(`span`,{children:`综合评分`})]}),(0,$.jsxs)(`div`,{className:`score-copy`,children:[(0,$.jsx)(`span`,{children:`AI 城市大脑`}),(0,$.jsx)(`b`,{children:`运行卓越`}),(0,$.jsx)(`em`,{children:`较昨日 +1.8%`}),(0,$.jsx)(`p`,{children:`城市治理模型实时计算中`})]})]}),(0,$.jsx)(`div`,{className:`ai-dimensions`,children:[[`感知覆盖`,98],[`协同效率`,94],[`预测准确`,96],[`处置闭环`,97]].map(([e,t],n)=>(0,$.jsxs)(`button`,{type:`button`,onClick:()=>N(`ai-${n}`,`${e} ${t}%`,`城市 AI 能力维度`,`${e}能力已接入城市级模型评估，当前得分 ${t}%，运行状态稳定。`,`AI ENGINE · 第 ${n+1} 维度`),children:[(0,$.jsx)(`span`,{children:e}),(0,$.jsx)(`i`,{children:(0,$.jsx)(`b`,{style:{width:w?`${t}%`:`0%`,transitionDelay:`${n*120}ms`}})}),(0,$.jsxs)(`em`,{children:[t,`%`]})]},e))})]}),(0,$.jsxs)(`section`,{className:`future-panel traffic-panel`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsx)(`span`,{children:`05`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{children:`交通运行脉搏`}),(0,$.jsx)(`em`,{children:`TRAFFIC MOBILITY`})]}),(0,$.jsx)(`i`,{children:`畅通`})]}),(0,$.jsxs)(`button`,{type:`button`,className:`traffic-number`,onClick:()=>N(`traffic-index`,`全路网交通指数`,`交通运行脉搏`,`全路网交通指数 1.42，整体处于畅通等级，重点道路信号协调运行正常。`,`指数 1.42 · 畅通`),children:[(0,$.jsx)(`span`,{children:`全路网交通指数`}),(0,$.jsx)(`strong`,{children:(0,$.jsx)(yf,{to:1.42,decimals:2})}),(0,$.jsx)(`em`,{children:`畅通`})]}),(0,$.jsx)(`button`,{type:`button`,className:`traffic-flow`,"aria-label":`调整并查看交通流量趋势`,onClick:()=>{let e=m===18?36:m===36?54:18;h(e),N(`traffic-flow`,`近八小时交通流量`,`交通运行脉搏`,`已将三维城市动态车流调整为 ${e} 辆，可在中央地图观察道路车流变化。`,`点击循环调节 · 当前密度 ${e}`)},children:[31,43,52,47,68,76,64,83,71,62,54,59,46,39].map((e,t)=>(0,$.jsx)(`i`,{style:{height:w?`${e}%`:`0%`,transitionDelay:`${t*55}ms`}},t))}),(0,$.jsxs)(`div`,{className:`traffic-meta`,children:[(0,$.jsxs)(`button`,{type:`button`,onClick:()=>N(`speed`,`道路平均车速`,`交通运行脉搏`,`全市重点道路平均车速 41.8 km/h，当前车速变化处于模型预测范围内。`,`41.8 km/h · 实时计算`),children:[(0,$.jsx)(`span`,{children:`平均车速`}),(0,$.jsx)(`b`,{children:`41.8 km/h`})]}),(0,$.jsxs)(`button`,{type:`button`,onClick:()=>N(`congestion`,`拥堵道路里程`,`交通运行脉搏`,`当前拥堵道路总里程 28.6 km，拥堵主要集中于晚高峰重点走廊。`,`28.6 km · 动态监测`),children:[(0,$.jsx)(`span`,{children:`拥堵里程`}),(0,$.jsx)(`b`,{children:`28.6 km`})]}),(0,$.jsxs)(`button`,{type:`button`,onClick:()=>N(`signals`,`信号协调率`,`交通运行脉搏`,`城市信号控制协调率达到 92.7%，重点路口绿波方案处于自动优化状态。`,`92.7% · AI 信号控制`),children:[(0,$.jsx)(`span`,{children:`信号协调率`}),(0,$.jsx)(`b`,{children:`92.7%`})]})]})]}),(0,$.jsxs)(`section`,{className:`future-panel district-rank`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsx)(`span`,{children:`06`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{children:`城区运行排行`}),(0,$.jsx)(`em`,{children:`DISTRICT RANKING`})]}),(0,$.jsx)(`i`,{children:`16 区`})]}),(0,$.jsx)(`div`,{children:mp.map((e,t)=>(0,$.jsxs)(`button`,{onClick:()=>oe(e),children:[(0,$.jsx)(`i`,{children:String(t+1).padStart(2,`0`)}),(0,$.jsxs)(`span`,{children:[e.name,`区`,(0,$.jsx)(`em`,{children:(0,$.jsx)(`b`,{style:{width:w?`${e.score}%`:`0%`,transitionDelay:`${t*120}ms`}})})]}),(0,$.jsx)(`strong`,{children:e.score}),(0,$.jsx)(`small`,{children:e.value})]},e.name))})]}),(0,$.jsxs)(`button`,{className:`future-demo-card`,onClick:t,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`FEATURED AI DEMO`}),(0,$.jsx)(`em`,{children:`01`})]}),(0,$.jsx)(`strong`,{children:`灵境哨兵`}),(0,$.jsx)(`p`,{children:`危化品运输事故全链路智能处置`}),(0,$.jsx)(`b`,{children:`事故识别 · 扩散计算 · 路径重规划`}),(0,$.jsxs)(`i`,{children:[`立即进入演示项目 `,(0,$.jsx)(`span`,{children:`→`})]})]})]})]}),g&&(0,$.jsx)(fp,{data:g,onClose:()=>_(null)}),(0,$.jsxs)(`footer`,{className:`future-footer`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{}),`CITY DATA STREAM`]}),(0,$.jsx)(`section`,{children:(0,$.jsx)(`span`,{children:gp.join(`　　◇　　`)})}),(0,$.jsxs)(`em`,{children:[`DATA LATENCY `,(0,$.jsx)(`b`,{children:`128 ms`})]}),(0,$.jsxs)(`strong`,{children:[(0,$.jsx)(`i`,{}),`AI ENGINE ONLINE`]})]})]})}var bp=(e,t,n)=>Math.max(t,Math.min(n,e)),xp=null,Sp=null,Cp=()=>xp||(xp=new Promise((e,t)=>{let n=()=>{if(!window.ort){t(Error(`ONNX Runtime Web 未挂载`));return}window.ort.env.wasm.wasmPaths=new URL(`./models/`,document.baseURI).href,window.ort.env.wasm.numThreads=1,e(window.ort)};if(window.ort){n();return}let r=document.querySelector(`script[data-onnx-runtime="local"]`);if(r){r.addEventListener(`load`,n,{once:!0}),r.addEventListener(`error`,()=>t(Error(`ONNX Runtime Web 加载失败`)),{once:!0});return}let i=document.createElement(`script`);i.src=`./models/ort.min.js`,i.async=!0,i.dataset.onnxRuntime=`local`,i.onload=n,i.onerror=()=>t(Error(`ONNX Runtime Web 加载失败`)),document.head.appendChild(i)}).catch(e=>{throw xp=null,e}),xp),wp=async()=>(Sp||=Cp().then(e=>e.InferenceSession.create(`./models/fire-smoke-yolo26n.onnx`,{executionProviders:[`wasm`],graphOptimizationLevel:`all`})).catch(e=>{throw Sp=null,e}),Sp),Tp=async()=>{let e=performance.now();return await wp(),Math.round(performance.now()-e)};function Ep(e){let t=Math.max(120,Math.round(240*e.height/e.width)),n=document.createElement(`canvas`);n.width=240,n.height=t;let r=n.getContext(`2d`,{willReadFrequently:!0});r.drawImage(e,0,0,240,t);let i=r.getImageData(0,0,240,t).data,a=0,o=0,s=0,c=0,l=new Uint8Array(240*t);for(let e=0;e<240*t;e++){let t=i[e*4],n=i[e*4+1],r=i[e*4+2],s=Math.max(t,n,r),c=Math.min(t,n,r),u=s===0?0:(s-c)/s,d=(s+c)/510,f=u<.22&&d>.27&&d<.88,p=t>n*1.02&&n>r*1.12&&d>.32;(f||p)&&a++,t>165&&t>n*1.35&&n>r*1.15&&o++,l[e]=Math.round(t*.299+n*.587+r*.114)}for(let e=1;e<t;e+=2)for(let t=1;t<240;t+=2){let n=e*240+t;Math.abs(l[n]-l[n-1])+Math.abs(l[n]-l[n-240])>52&&s++,c++}let u=240*t;return{smokeRatio:a/u,flameRatio:o/u,edgeDensity:s/c}}async function Dp(e,t){let n=document.createElement(`canvas`);n.width=640,n.height=640;let r=n.getContext(`2d`,{willReadFrequently:!0});r.fillStyle=`rgb(114,114,114)`,r.fillRect(0,0,640,640);let i=Math.min(640/e.width,640/e.height),a=e.width*i,o=e.height*i;r.drawImage(e,(640-a)/2,(640-o)/2,a,o);let s=r.getImageData(0,0,640,640).data,c=640*640,l=new Float32Array(c*3);for(let e=0;e<c;e+=1)l[e]=s[e*4]/255,l[c+e]=s[e*4+1]/255,l[c*2+e]=s[e*4+2]/255;return new t.Tensor(`float32`,l,[1,3,640,640])}var Op=(e,t)=>{let n=Math.max(e.x,t.x),r=Math.max(e.y,t.y),i=Math.min(e.x+e.width,t.x+t.width),a=Math.min(e.y+e.height,t.y+t.height),o=Math.max(0,i-n)*Math.max(0,a-r),s=e.width*e.height+t.width*t.height-o;return s>0?o/s:0};function kp(e,t,n){let r=e.data,i=[],a=Math.min(640/t,640/n),o=(640-t*a)/2,s=(640-n*a)/2;for(let e=0;e<300;e+=1){let c=e*6,l=Number(r[c+4]??0),u=Math.round(Number(r[c+5]??-1));if(l<.25||u!==0&&u!==1)continue;let d=bp((Number(r[c]??0)-o)/a,0,t),f=bp((Number(r[c+1]??0)-s)/a,0,n),p=bp((Number(r[c+2]??0)-o)/a,0,t),m=bp((Number(r[c+3]??0)-s)/a,0,n),h=u;i.push({classId:h,label:h===0?`smoke`:`fire`,labelZh:h===0?`烟雾`:`明火`,confidence:l,box:{x:d/t*100,y:f/n*100,width:Math.max(0,p-d)/t*100,height:Math.max(0,m-f)/n*100}})}i.sort((e,t)=>t.confidence-e.confidence);let c=[];for(let e of i)if(!c.some(t=>t.classId===e.classId&&Op(t.box,e.box)>.45)&&(c.push(e),c.length>=8))break;return c}function Ap(e,t,n){let{smokeRatio:r,flameRatio:i,edgeDensity:a}=e;return{type:i>.045?`疑似明火特征`:r>.16?`疑似烟羽特征`:`未发现显著火烟特征`,confidence:bp(.52+r*.42+a*.12+i*.5,.52,.84),smokeRatio:r,flameRatio:i,edgeDensity:a,persons:0,modelMode:`explainable-fallback`,modelName:`端侧可解释视觉研判原型`,modelVersion:`PIXEL-FEATURE v1.1`,inferenceMs:Math.round(performance.now()-t),detections:[],summary:`本地 ONNX 模型未能加载，已明确降级为像素特征研判；烟羽辅助占比 ${(r*100).toFixed(1)}%，该结果不作为深度学习识别结论。`,explanation:[`使用色彩饱和度、亮度与边缘复杂度进行可解释判别`,`降级结果不会冒充深度学习模型输出`,`降级原因：${n instanceof Error?n.message:`未知运行时错误`}`]}}async function jp(e){let t=performance.now(),n=await createImageBitmap(e),r=Ep(n);try{let e=await Cp(),i=await wp(),a=await Dp(n,e),o=kp((await i.run({images:a})).output0,n.width,n.height),s=o.filter(e=>e.label===`smoke`),c=o.filter(e=>e.label===`fire`),l=o[0]?.confidence??0,u=s.length&&c.length?`烟雾与明火复合险情`:s.length?`烟雾/泄漏羽流`:c.length?`明火险情`:`未检出火焰或烟雾`,d=Math.round(performance.now()-t);return{type:u,confidence:l,smokeRatio:r.smokeRatio,flameRatio:r.flameRatio,edgeDensity:r.edgeDensity,persons:0,modelMode:`onnx`,modelName:`YOLO-26n Fire & Smoke`,modelVersion:`ONNX FP32 · 640×640`,inferenceMs:d,detections:o,summary:o.length?`本地 ONNX 模型检出 ${s.length} 个烟雾目标、${c.length} 个明火目标，最高置信度 ${(l*100).toFixed(1)}%。图片仅在浏览器本机推理。`:`本地 ONNX 模型未检出火焰或烟雾目标；像素辅助烟羽占比 ${(r.smokeRatio*100).toFixed(1)}%，建议结合现场传感器复核。`,explanation:[`输入图片缩放并填充为 640×640 RGB 张量`,`ONNX Runtime Web 使用 WASM 在浏览器本地执行`,`输出经 0.25 置信度阈值与 0.45 IoU 去重`]}}catch(e){return Ap(r,t,e)}finally{n.close()}}async function Mp(e){let t=await fetch(e);if(!t.ok)throw Error(`验证图片加载失败：${t.status}`);let n=await t.blob();return jp(new File([n],e.split(`/`).pop()||`benchmark.jpg`,{type:n.type||`image/jpeg`}))}function Np(e,t,n=8e4,r=2.5){let i=.08*e/Math.sqrt(1+1e-4*e),a=.06*e/Math.sqrt(1+.0015*e);return n/(2*Math.PI*t*i*a)*Math.exp(-(r*r)/(2*a*a))}function Pp(e,t,n){let r=Math.max(20,n*t*60),i=20;for(let t=20;t<=Math.min(r,3200);t+=10)Np(t,n)>=e&&(i=t);let a=.08*i/Math.sqrt(1+1e-4*i);return{distance:i,width:a*4.3}}function Fp(e,t=3.4){let n=Pp(145,e,t),r=Pp(29,e,t),i=Pp(2.9,e,t),a=Math.PI*(i.distance/2)*(i.width/2),o=Math.round(a*.0078);return{lethal:n.distance,high:r.distance,warning:i.distance,lethalWidth:n.width,highWidth:r.width,warningWidth:i.width,affectedPeople:o,model:`Gaussian Plume · Pasquill-D`}}var Ip=[{id:`S`,x:-35,z:-30},{id:`A`,x:-22,z:-17},{id:`B`,x:-13,z:-10},{id:`I`,x:-3,z:-3},{id:`C`,x:-42,z:-4},{id:`D`,x:-25,z:7},{id:`E`,x:-11,z:5},{id:`F`,x:-31,z:20}],Lp=[`S-A`,`A-B`,`B-I`,`S-C`,`C-D`,`D-E`,`E-I`,`C-F`,`F-E`],Rp=(e,t)=>Math.hypot(e.x-t.x,e.z-t.z);function zp(e=!1){let t=e?new Set([`B-I`,`I-B`]):new Set,n=new Set([`S`]),r=new Map,i=new Map(Ip.map(e=>[e.id,1/0])),a=new Map(Ip.map(e=>[e.id,1/0]));i.set(`S`,0),a.set(`S`,Rp(Ip[0],Ip[3]));let o=0;for(;n.size;){let e=[...n].sort((e,t)=>(a.get(e)??1/0)-(a.get(t)??1/0))[0];if(o++,e===`I`){let t=[e];for(;r.has(e);)e=r.get(e),t.unshift(e);let n=t.map(e=>Ip.find(t=>t.id===e)),a=Math.round((i.get(`I`)??0)*78);return{path:n,distance:a,eta:Math.ceil(a/520),visited:o,algorithm:`A* · Euclidean heuristic`}}n.delete(e);for(let o of Lp){let[s,c]=o.split(`-`),l;if(s===e&&(l=c),c===e&&(l=s),!l||t.has(`${e}-${l}`))continue;let u=Ip.find(t=>t.id===e),d=Ip.find(e=>e.id===l),f=(i.get(e)??1/0)+Rp(u,d);f<(i.get(l)??1/0)&&(r.set(l,e),i.set(l,f),a.set(l,f+Rp(d,Ip[3])),n.add(l))}}return{path:[],distance:0,eta:0,visited:o,algorithm:`A* · no path`}}var Bp=[{id:`fire-01`,title:`近景火焰`,image:`./ai-benchmark/fire-01-campfire-flames.jpg`,expected:`hazard`,source:`Wikimedia Commons · Public Domain`,initial:{predicted:`hazard`,label:`明火`,confidence:.6703,inferenceMs:82}},{id:`fire-02`,title:`户外明火`,image:`./ai-benchmark/fire-02-campfire.jpg`,expected:`hazard`,source:`Wikimedia Commons · Public Domain`,initial:{predicted:`hazard`,label:`明火`,confidence:.9171,inferenceMs:78}},{id:`smoke-01`,title:`建筑火灾烟雾`,image:`./ai-benchmark/fire-smoke-06-model-sample.webp`,expected:`hazard`,source:`模型仓库演示样本 · MIT`,initial:{predicted:`hazard`,label:`烟雾+明火`,confidence:.9099,inferenceMs:81}},{id:`normal-01`,title:`北京地图底图`,image:`./beijing-map-base.jpg`,expected:`normal`,source:`项目地图资产`,initial:{predicted:`normal`,label:`未检出`,confidence:0,inferenceMs:128}},{id:`normal-02`,title:`道路地图底图`,image:`./real-map-base.jpg`,expected:`normal`,source:`项目地图资产`,initial:{predicted:`normal`,label:`未检出`,confidence:0,inferenceMs:74}},{id:`normal-03`,title:`智慧城市预览`,image:`./og-future-city.png`,expected:`normal`,source:`项目视觉资产`,initial:{predicted:`normal`,label:`未检出`,confidence:0,inferenceMs:100}},{id:`false-positive-01`,title:`橙色城市灯光`,image:`./og.png`,expected:`normal`,source:`项目视觉资产 · 误判样本`,initial:{predicted:`hazard`,label:`烟雾`,confidence:.5557,inferenceMs:95}}];function Vp(e){let t=0,n=0,r=0,i=0;for(let a of Bp){let o=e[a.id]?.predicted??a.initial.predicted;a.expected===`hazard`&&o===`hazard`&&(t+=1),a.expected===`normal`&&o===`hazard`&&(n+=1),a.expected===`normal`&&o===`normal`&&(r+=1),a.expected===`hazard`&&o===`normal`&&(i+=1)}let a=t/Math.max(1,t+n),o=t/Math.max(1,t+i),s=2*a*o/Math.max(1e-4,a+o),c=(t+r)/Math.max(1,t+r+n+i);return{tp:t,fp:n,tn:r,fn:i,precision:a,recall:o,f1:s,accuracy:c}}function Hp({vision:e,onClose:t}){let[n,i]=(0,r.useState)(Object.fromEntries(Bp.map(e=>[e.id,e.initial]))),[a,o]=(0,r.useState)(!1),[s,c]=(0,r.useState)(0),[l,u]=(0,r.useState)(`已载入最近一次离线实测结果`),d=(0,r.useMemo)(()=>Vp(n),[n]),f=Math.round(Object.values(n).reduce((e,t)=>e+t.inferenceMs,0)/Math.max(1,Object.values(n).length));return(0,$.jsx)(`div`,{className:`evidence-layer`,role:`presentation`,onMouseDown:t,children:(0,$.jsxs)(`section`,{className:`evidence-dialog`,role:`dialog`,"aria-modal":`true`,"aria-label":`AI 可答辩证据中心`,onMouseDown:e=>e.stopPropagation(),children:[(0,$.jsxs)(`header`,{className:`evidence-head`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`AI EVIDENCE CENTER · LOCAL INFERENCE`}),(0,$.jsx)(`h2`,{children:`AI 可答辩证据中心`}),(0,$.jsx)(`p`,{children:`模型、数据、指标、误判和算法边界均可现场复核`})]}),(0,$.jsxs)(`div`,{className:`evidence-head-status`,children:[(0,$.jsx)(`b`,{className:e.modelMode===`explainable-fallback`?`warning`:``,children:e.modelMode===`onnx`?`ONNX 实时推理`:e.modelMode===`demo`?`模型待上传触发`:`已明确降级`}),(0,$.jsx)(`button`,{"aria-label":`关闭 AI 证据中心`,onClick:t,children:`×`})]})]}),(0,$.jsxs)(`div`,{className:`evidence-scroll`,children:[(0,$.jsxs)(`section`,{className:`model-proof`,children:[(0,$.jsxs)(`div`,{className:`model-identity`,children:[(0,$.jsx)(`div`,{className:`model-chip`,children:`ONNX`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`真实本地视觉模型`}),(0,$.jsx)(`h3`,{children:`YOLO-26n Fire & Smoke`}),(0,$.jsx)(`p`,{children:`FP32 · 输入 1×3×640×640 · 输出 300×6 · 模型文件 9.81 MB`})]}),(0,$.jsxs)(`dl`,{children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`dt`,{children:`运行位置`}),(0,$.jsx)(`dd`,{children:`浏览器本机 / WASM`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`dt`,{children:`网络依赖`}),(0,$.jsx)(`dd`,{children:`无 · 图片不上传`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`dt`,{children:`类别`}),(0,$.jsx)(`dd`,{children:`烟雾 / 明火`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`dt`,{children:`来源许可`}),(0,$.jsx)(`dd`,{children:`Hugging Face · MIT`})]})]})]}),(0,$.jsxs)(`div`,{className:`current-inference`,children:[(0,$.jsx)(`span`,{children:`当前上传图片`}),(0,$.jsx)(`strong`,{children:e.modelName}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{children:e.type}),(0,$.jsx)(`em`,{children:e.modelMode===`demo`?`等待上传`:`${(e.confidence*100).toFixed(1)}%`}),(0,$.jsxs)(`i`,{children:[e.inferenceMs||`—`,` ms`]})]}),(0,$.jsx)(`p`,{children:e.summary})]})]}),(0,$.jsxs)(`section`,{className:`metric-section`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`PROJECT SMOKE TEST`}),(0,$.jsx)(`h3`,{children:`项目内置 7 例小型验证集`})]}),(0,$.jsx)(`button`,{disabled:a,onClick:async()=>{o(!0),c(0),u(`正在初始化本地 ONNX 模型…`);try{await Tp();let e={};for(let t=0;t<Bp.length;t+=1){let n=Bp[t];u(`正在验证 ${t+1}/${Bp.length}：${n.title}`);let r=await Mp(n.image),a=r.detections[0];e[n.id]={predicted:r.detections.length?`hazard`:`normal`,label:r.detections.map(e=>e.labelZh).filter((e,t,n)=>n.indexOf(e)===t).join(`+`)||`未检出`,confidence:a?.confidence??0,inferenceMs:r.inferenceMs},i({...e}),c((t+1)/Bp.length*100)}u(`本地验证完成 · 指标由当前浏览器实时计算`)}catch(e){u(`验证中断：${e instanceof Error?e.message:`未知错误`}`)}finally{o(!1)}},children:a?`验证运行中…`:`重新运行本地验证`})]}),(0,$.jsxs)(`div`,{className:`benchmark-progress`,children:[(0,$.jsx)(`i`,{style:{width:`${s}%`}}),(0,$.jsx)(`span`,{children:l})]}),(0,$.jsxs)(`div`,{className:`metric-grid`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`Accuracy`}),(0,$.jsxs)(`b`,{children:[(d.accuracy*100).toFixed(1),`%`]}),(0,$.jsx)(`em`,{children:`准确率`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`Precision`}),(0,$.jsxs)(`b`,{children:[(d.precision*100).toFixed(1),`%`]}),(0,$.jsx)(`em`,{children:`精确率`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`Recall`}),(0,$.jsxs)(`b`,{children:[(d.recall*100).toFixed(1),`%`]}),(0,$.jsx)(`em`,{children:`召回率`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`F1 Score`}),(0,$.jsxs)(`b`,{children:[(d.f1*100).toFixed(1),`%`]}),(0,$.jsx)(`em`,{children:`平衡指标`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`Mean latency`}),(0,$.jsxs)(`b`,{children:[f,`ms`]}),(0,$.jsx)(`em`,{children:`当前设备均值`})]})]}),(0,$.jsxs)(`div`,{className:`confusion-matrix`,"aria-label":`混淆矩阵`,children:[(0,$.jsx)(`div`,{className:`matrix-axis`,children:`预测结果 →`}),(0,$.jsx)(`div`,{className:`matrix-label`,children:`实际险情`}),(0,$.jsxs)(`div`,{className:`matrix-cell good`,children:[(0,$.jsx)(`b`,{children:d.tp}),(0,$.jsx)(`span`,{children:`TP 正确告警`})]}),(0,$.jsxs)(`div`,{className:`matrix-cell bad`,children:[(0,$.jsx)(`b`,{children:d.fn}),(0,$.jsx)(`span`,{children:`FN 漏报`})]}),(0,$.jsx)(`div`,{className:`matrix-label`,children:`实际正常`}),(0,$.jsxs)(`div`,{className:`matrix-cell bad`,children:[(0,$.jsx)(`b`,{children:d.fp}),(0,$.jsx)(`span`,{children:`FP 误报`})]}),(0,$.jsxs)(`div`,{className:`matrix-cell good`,children:[(0,$.jsx)(`b`,{children:d.tn}),(0,$.jsx)(`span`,{children:`TN 正确排除`})]})]}),(0,$.jsx)(`p`,{className:`metric-disclaimer`,children:`该 7 例集合用于现场功能复核，不代表模型泛化能力。模型作者报告：Precision 73.6%、Recall 68.3%、AP50 74.3%；本系统不把作者指标冒充为自主测试结果。`})]}),(0,$.jsxs)(`section`,{className:`sample-section`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsx)(`span`,{children:`TEST CASES & ERROR ANALYSIS`}),(0,$.jsx)(`h3`,{children:`样本结果与真实误判案例`})]}),(0,$.jsx)(`div`,{className:`sample-grid`,children:Bp.map(e=>{let t=n[e.id]??e.initial,r=t.predicted===e.expected;return(0,$.jsxs)(`article`,{className:r?`pass`:`fail`,children:[(0,$.jsxs)(`div`,{className:`sample-image`,children:[(0,$.jsx)(`img`,{src:e.image,alt:e.title}),(0,$.jsx)(`i`,{children:r?`PASS`:`FALSE POSITIVE`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:e.title}),(0,$.jsxs)(`span`,{children:[`标注：`,e.expected===`hazard`?`险情`:`正常`,`　预测：`,t.label]}),(0,$.jsxs)(`em`,{children:[t.confidence?`${(t.confidence*100).toFixed(1)}%`:`无目标`,` · `,t.inferenceMs,`ms`]}),(0,$.jsx)(`small`,{children:e.source})]})]},e.id)})}),(0,$.jsxs)(`div`,{className:`error-analysis`,children:[(0,$.jsx)(`b`,{children:`误判解释`}),(0,$.jsx)(`p`,{children:`橙色城市灯光样本被模型识别为烟雾，说明颜色与局部纹理可能引发误报。因此系统将视觉模型定位为“告警触发器”，最终响应必须结合气体传感器、车辆遥测和人工复核。`})]})]}),(0,$.jsxs)(`section`,{className:`algorithm-boundary`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsx)(`span`,{children:`TECHNOLOGY BOUNDARY`}),(0,$.jsx)(`h3`,{children:`明确区分模型、物理计算与搜索算法`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`article`,{className:`ai`,children:[(0,$.jsx)(`i`,{children:`AI`}),(0,$.jsx)(`b`,{children:`视觉目标检测`}),(0,$.jsx)(`strong`,{children:`YOLO-26n · ONNX`}),(0,$.jsx)(`p`,{children:`由训练模型识别烟雾与明火，展示置信度、目标框和推理耗时。`})]}),(0,$.jsxs)(`article`,{children:[(0,$.jsx)(`i`,{children:`PHY`}),(0,$.jsx)(`b`,{children:`风险扩散计算`}),(0,$.jsx)(`strong`,{children:`Gaussian Plume · Pasquill-D`}),(0,$.jsx)(`p`,{children:`基于风速、源强和稳定度的物理模型，不宣称为人工智能。`})]}),(0,$.jsxs)(`article`,{children:[(0,$.jsx)(`i`,{children:`ALG`}),(0,$.jsx)(`b`,{children:`道路路径规划`}),(0,$.jsx)(`strong`,{children:`OSM Graph · A*`}),(0,$.jsx)(`p`,{children:`使用欧氏启发函数搜索真实道路图，不宣称为机器学习。`})]}),(0,$.jsxs)(`article`,{children:[(0,$.jsx)(`i`,{children:`AGT`}),(0,$.jsx)(`b`,{children:`协同任务编排`}),(0,$.jsx)(`strong`,{children:`Auditable deterministic agents`}),(0,$.jsx)(`p`,{children:`多角色软件智能体按任务和约束协作，保留消息与决策日志，不宣称为自由推理大模型。`})]})]})]})]})]})})}var Up=e=>{let t=2166136261;for(let n=0;n<e.length;n+=1)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return Math.abs(t>>>0).toString(16).padStart(8,`0`).toUpperCase()};function Wp({scenarioPhase:e,scenarioTime:t,vision:n,plume:r,route:i,blocked:a,onClose:o}){let s=[{phase:1,time:`14:32:00`,from:`VehicleAgent`,to:`EventAgent`,task:`持续读取危化运输车遥测`,message:`京A·WH2576 正沿北京 OSM 道路行驶，车速 32km/h，罐压 0.42MPa。`,basis:`车辆 CAN 遥测 + GPS 路段匹配`},{phase:2,time:`14:32:07`,from:`EventAgent`,to:`VisionAgent`,task:`验证异常并请求视觉检测`,message:`动力失效、尾阀冲击与挥发气体告警同时出现，提交现场帧进行本地推理。`,basis:`三源异常规则：动力 / 阀门 / 气体传感器`},{phase:3,time:`14:32:13`,from:`VisionAgent`,to:`PlumeAgent`,task:`输出可解释视觉证据`,message:`${n.modelName} 判定“${n.type}”，最高置信度 ${(n.confidence*100).toFixed(1)}%，目标数 ${n.detections.length}。`,basis:`${n.modelVersion} · 本机 ${n.inferenceMs||`—`}ms · ${n.modelMode}`},{phase:3,time:`14:32:15`,from:`PlumeAgent`,to:`CommandAgent`,task:`计算污染羽流边界`,message:`东南风 3.4m/s，警戒纵深 ${r.warning}m，预计风险暴露 ${r.affectedPeople} 人。`,basis:`${r.model} · Q=80g/s · 风向西北`},{phase:4,time:`14:32:20`,from:`RouteAgent`,to:`FireAgent`,task:a?`避开封闭道路重新规划`:`生成消防最短响应路径`,message:`${a?`封路后重规划`:`初始规划`}完成，距离 ${i.distance}m，ETA ${i.eta}min，搜索 ${i.visited} 个节点。`,basis:`OSM 道路图 + A* 欧氏启发函数${i.roads?.length?` · ${i.roads.slice(0,3).join(` → `)}`:``}`},{phase:4,time:`14:32:22`,from:`CommandAgent`,to:`Fire / Medical / Police`,task:`签发联合处置任务`,message:`消防执行堵漏与水幕，医疗开启绿色通道，交警建立 500m 封控并组织侧上风向疏散。`,basis:`优先级：人员安全 > 泄漏源控制 > 道路恢复`},{phase:6,time:`14:32:40`,from:`PoliceAgent`,to:`CommandAgent`,task:`执行道路封控与人群疏散`,message:`3 个路口完成管制，186 人向东南侧上风向疏散，应急绿波带已启用。`,basis:`风险区几何边界 + 路口容量 + 学校保护目标`},{phase:7,time:`14:32:49`,from:`FireAgent`,to:`CommandAgent`,task:`建立水幕并控制泄漏源`,message:`泡沫消防车到场，挥发气体受控，泄漏速率下降 68%。`,basis:`消防编组状态 + 现场处置阶段回执`},{phase:8,time:`14:32:59`,from:`MedicalAgent`,to:`CommandAgent`,task:`完成检伤与转运`,message:`2 名轻度吸入人员完成检伤，三级医院绿色通道保持开启。`,basis:`START 检伤规则 + 医疗资源容量`},{phase:9,time:`14:33:07`,from:`CommandAgent`,to:`AuditLedger`,task:`关闭事件并固化证据`,message:`联合响应闭环完成，模型输出、物理计算、路径结果和部门回执写入审计日志。`,basis:`全部强制任务完成 + 现场指挥员复核`}].map((t,n)=>({...t,id:`AUD-${String(n+1).padStart(2,`0`)}-${Up(`${t.time}${t.from}${t.task}`)}`,state:e>t.phase?`done`:e===t.phase?`active`:`pending`}));return(0,$.jsx)(`div`,{className:`audit-layer`,role:`presentation`,onMouseDown:o,children:(0,$.jsxs)(`section`,{className:`audit-dialog`,role:`dialog`,"aria-modal":`true`,"aria-label":`多智能体协同审计`,onMouseDown:e=>e.stopPropagation(),children:[(0,$.jsxs)(`header`,{className:`audit-head`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`MULTI-AGENT AUDIT LEDGER`}),(0,$.jsx)(`h2`,{children:`多智能体任务与决策审计`}),(0,$.jsx)(`p`,{children:`每条任务都有输入、接收方、决策依据、执行状态和不可混淆的审计编号`})]}),(0,$.jsx)(`button`,{"aria-label":`关闭多智能体审计`,onClick:o,children:`×`})]}),(0,$.jsxs)(`div`,{className:`audit-banner`,children:[(0,$.jsx)(`b`,{children:`能力边界声明`}),(0,$.jsx)(`p`,{children:`这是确定性、可审计的软件智能体任务图，不宣称为大语言模型自由推理。任何正式处置仍由现场指挥员批准。`}),(0,$.jsxs)(`em`,{children:[`PHASE `,String(e).padStart(2,`0`),`/09 · T+`,Math.floor(t),`s`]})]}),(0,$.jsxs)(`section`,{className:`task-inputs`,children:[(0,$.jsxs)(`article`,{children:[(0,$.jsx)(`span`,{children:`事件输入`}),(0,$.jsx)(`b`,{children:`危化车辆动力失效 + 尾阀泄漏`}),(0,$.jsx)(`small`,{children:`来源：车辆遥测 / 路侧摄像 / 气体传感器`})]}),(0,$.jsxs)(`article`,{children:[(0,$.jsx)(`span`,{children:`视觉证据`}),(0,$.jsx)(`b`,{children:n.modelName}),(0,$.jsxs)(`small`,{children:[n.type,` · `,(n.confidence*100).toFixed(1),`% · `,n.modelMode]})]}),(0,$.jsxs)(`article`,{children:[(0,$.jsx)(`span`,{children:`环境约束`}),(0,$.jsx)(`b`,{children:`东南风 3.4m/s · Pasquill-D`}),(0,$.jsxs)(`small`,{children:[`警戒纵深 `,r.warning,`m · 暴露 `,r.affectedPeople,` 人`]})]}),(0,$.jsxs)(`article`,{children:[(0,$.jsx)(`span`,{children:`道路约束`}),(0,$.jsx)(`b`,{children:a?`存在封闭道路 · 已重规划`:`路网正常 · 最短响应`}),(0,$.jsxs)(`small`,{children:[`OSM A* · `,i.distance,`m · ETA `,i.eta,`min`]})]})]}),(0,$.jsxs)(`div`,{className:`audit-content`,children:[(0,$.jsxs)(`section`,{className:`agent-map`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsx)(`span`,{children:`AGENT GRAPH`}),(0,$.jsx)(`h3`,{children:`协作角色与消息方向`})]}),(0,$.jsxs)(`div`,{className:`agent-graph-row`,children:[(0,$.jsx)(`i`,{children:`车辆`}),(0,$.jsx)(`b`,{children:`→`}),(0,$.jsx)(`i`,{children:`事件`}),(0,$.jsx)(`b`,{children:`→`}),(0,$.jsx)(`i`,{className:`ai`,children:`视觉 AI`}),(0,$.jsx)(`b`,{children:`→`}),(0,$.jsx)(`i`,{children:`扩散`})]}),(0,$.jsxs)(`div`,{className:`agent-graph-row second`,children:[(0,$.jsx)(`i`,{children:`指挥`}),(0,$.jsx)(`b`,{children:`→`}),(0,$.jsx)(`i`,{children:`消防`}),(0,$.jsx)(`b`,{children:`·`}),(0,$.jsx)(`i`,{children:`医疗`}),(0,$.jsx)(`b`,{children:`·`}),(0,$.jsx)(`i`,{children:`交警`}),(0,$.jsx)(`b`,{children:`→`}),(0,$.jsx)(`i`,{children:`审计`})]}),(0,$.jsxs)(`dl`,{children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`dt`,{children:`消息总数`}),(0,$.jsx)(`dd`,{children:s.length})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`dt`,{children:`已完成`}),(0,$.jsx)(`dd`,{children:s.filter(e=>e.state===`done`).length})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`dt`,{children:`执行中`}),(0,$.jsx)(`dd`,{children:s.filter(e=>e.state===`active`).length})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`dt`,{children:`待执行`}),(0,$.jsx)(`dd`,{children:s.filter(e=>e.state===`pending`).length})]})]}),(0,$.jsx)(`button`,{onClick:()=>{let o={incidentId:`LJ-BJ-20260720-001`,generatedAt:new Date().toISOString(),orchestrator:`Deterministic multi-agent task graph v1.0`,scenario:{phase:e,elapsedSeconds:Number(t.toFixed(2)),blocked:a},inputs:{vision:{model:n.modelName,mode:n.modelMode,result:n.type,confidence:n.confidence,detections:n.detections},plume:r,route:i},messages:s,disclaimer:`该编排为可审计确定性软件智能体，不宣称为大语言模型自主决策。`},c=document.createElement(`a`);c.href=URL.createObjectURL(new Blob([JSON.stringify(o,null,2)],{type:`application/json`})),c.download=`灵境哨兵-多智能体审计日志.json`,c.click(),window.setTimeout(()=>URL.revokeObjectURL(c.href),1e3)},children:`↓ 导出 JSON 审计日志`})]}),(0,$.jsxs)(`section`,{className:`audit-stream`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsx)(`span`,{children:`MESSAGE TRACE`}),(0,$.jsx)(`h3`,{children:`任务消息与决策依据`})]}),(0,$.jsx)(`div`,{children:s.map(e=>(0,$.jsxs)(`article`,{className:e.state,children:[(0,$.jsx)(`time`,{children:e.time}),(0,$.jsx)(`i`,{}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`header`,{children:[(0,$.jsx)(`b`,{children:e.from}),(0,$.jsx)(`span`,{children:`→`}),(0,$.jsx)(`strong`,{children:e.to}),(0,$.jsx)(`em`,{children:e.state===`done`?`已完成`:e.state===`active`?`执行中`:`待执行`})]}),(0,$.jsx)(`h4`,{children:e.task}),(0,$.jsx)(`p`,{children:e.message}),(0,$.jsxs)(`small`,{children:[`决策依据：`,e.basis]}),(0,$.jsx)(`code`,{children:e.id})]})]},e.id))})]})]})]})})}var Gp=[{icon:`焰`,name:`消防智能体`,text:`2 辆泡沫消防车已从青岚站出发`,tone:`orange`},{icon:`十`,name:`医疗智能体`,text:`三级医院开放绿色救援通道`,tone:`cyan`},{icon:`路`,name:`交通智能体`,text:`已建立 3.2 km 应急绿波带`,tone:`blue`},{icon:`盾`,name:`指挥智能体`,text:`建议启动学校二级疏散预案`,tone:`purple`}],Kp=[{id:`overview`,label:`态势总览`},{id:`events`,label:`事件中心`},{id:`resources`,label:`资源调度`},{id:`archives`,label:`推演档案`}],qp=[{id:0,start:0,end:0,clock:`14:32:00`,icon:`待`,title:`全流程演示就绪`,subtitle:`化学废料车辆事故联合处置`,detail:`一键播放车辆行驶、突发故障、AI 告警、消防出警、医疗救援与警力疏散完整链路。`,metric:`72 秒 · 9 阶段`},{id:1,start:0,end:7,clock:`14:32:00`,icon:`运`,title:`正常运输`,subtitle:`化学废料运输车沿北京真实道路行驶`,detail:`京A·WH2576 · 车速 32 km/h · 罐体压力与尾阀状态正常`,metric:`OSM 实时轨迹`},{id:2,start:7,end:13,clock:`14:32:07`,icon:`故`,title:`突发故障`,subtitle:`车辆动力系统失效并紧急制动`,detail:`罐体尾阀受冲击松动 · 双闪开启 · 检测到黄绿色挥发气体`,metric:`自动停车 · 遥测异常`},{id:3,start:13,end:20,clock:`14:32:13`,icon:`AI`,title:`AI 告警`,subtitle:`识别为含氯化学废料泄漏`,detail:`事故图片识别置信度 96.8% · 高斯烟羽模型开始风险扩散计算`,metric:`Ⅰ级联合响应`},{id:4,start:20,end:27,clock:`14:32:20`,icon:`调`,title:`联合调度`,subtitle:`消防、医疗和交警同步接收指令`,detail:`基于 OSM 真实路网生成三条应急路线 · 自动建立救援优先通行权`,metric:`A* 路径已生成`},{id:5,start:27,end:40,clock:`14:32:27`,icon:`驰`,title:`力量赶赴`,subtitle:`三支队伍沿真实道路接近现场`,detail:`警车先期抵达 · 消防车携带泡沫与洗消设备 · 医疗组开放绿色通道`,metric:`动态 ETA 更新`},{id:6,start:40,end:49,clock:`14:32:40`,icon:`警`,title:`交通疏散`,subtitle:`警车到场并建立 500 米封控区`,detail:`3 个路口完成管制 · 社会车流主动避让 · 186 人向侧上风向疏散`,metric:`应急通道畅通`},{id:7,start:49,end:59,clock:`14:32:49`,icon:`消`,title:`消防处置`,subtitle:`泡沫消防车到场建立水幕并堵漏`,detail:`消防员从上风向压制挥发气体 · 泄漏速率下降 68% · 核心区浓度回落`,metric:`风险持续下降`},{id:8,start:59,end:67,clock:`14:32:59`,icon:`医`,title:`医疗救援`,subtitle:`救护车抵达并完成现场检伤分类`,detail:`2 名轻度吸入人员接受吸氧 · 三级医院绿色通道保持开启`,metric:`检伤与转运完成`},{id:9,start:67,end:72,clock:`14:33:07`,icon:`联`,title:`响应完成`,subtitle:`风险受控，联合处置闭环形成`,detail:`重点区域疏散 186 人 · 2 人完成转运 · 事故处置报告可立即生成`,metric:`全链路可追溯`}],Jp=72,Yp=async e=>{let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,`0`)).join(``)};function Xp({onAuthenticated:e}){let[t,n]=(0,r.useState)(`login`),[i,a]=(0,r.useState)(!1),[o,s]=(0,r.useState)(!0),[c,l]=(0,r.useState)(!1),[u,d]=(0,r.useState)(``),[f,p]=(0,r.useState)({username:``,password:``}),[m,h]=(0,r.useState)({displayName:``,department:`北京市智慧城市运行中心`,username:``,password:``,confirm:``,agreement:!0}),g=e=>{n(e),d(``),a(!1)},_=()=>{try{return JSON.parse(localStorage.getItem(`lingjing-users`)||`[]`)}catch{return[]}};return(0,$.jsxs)(`main`,{className:`auth-shell`,children:[(0,$.jsx)(`div`,{className:`auth-grid`}),(0,$.jsx)(`div`,{className:`auth-glow auth-glow-a`}),(0,$.jsx)(`div`,{className:`auth-glow auth-glow-b`}),(0,$.jsxs)(`header`,{className:`auth-topbar`,children:[(0,$.jsxs)(`div`,{className:`auth-brand-mark`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{children:`京域智城`}),(0,$.jsx)(`span`,{children:`BEIJING SMART CITY DIGITAL TWIN`})]}),(0,$.jsxs)(`em`,{children:[(0,$.jsx)(`i`,{}),`北京市城市运行管理中心`]})]}),(0,$.jsxs)(`section`,{className:`auth-layout`,children:[(0,$.jsxs)(`div`,{className:`auth-hero`,children:[(0,$.jsxs)(`div`,{className:`auth-kicker`,children:[(0,$.jsx)(`i`,{}),`北京城市数字孪生统一入口`]}),(0,$.jsxs)(`h1`,{children:[`一屏感知北京`,(0,$.jsx)(`br`,{}),(0,$.jsx)(`span`,{children:`让城市实时可见`})]}),(0,$.jsx)(`p`,{children:`汇聚城市治理、交通运行、能源环保与公共安全数据，构建可旋转、可交互、可推演的北京智慧城市三维运行中心。`}),(0,$.jsxs)(`div`,{className:`auth-metrics`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:(0,$.jsx)(yf,{to:6016})}),(0,$.jsx)(`span`,{children:`三维建筑模型`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:(0,$.jsx)(yf,{to:86.4,decimals:1,suffix:`万`})}),(0,$.jsx)(`span`,{children:`城市感知节点`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:(0,$.jsx)(yf,{to:99.97,decimals:2,suffix:`%`})}),(0,$.jsx)(`span`,{children:`设备在线率`})]})]}),(0,$.jsxs)(`div`,{className:`auth-radar`,"aria-hidden":`true`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`span`,{}),(0,$.jsx)(`b`,{children:`AI`}),(0,$.jsxs)(`em`,{children:[`REAL-TIME`,(0,$.jsx)(`br`,{}),`SITUATION`]})]})]}),(0,$.jsxs)(`section`,{className:`auth-card`,"aria-label":t===`login`?`登录`:`注册`,children:[(0,$.jsx)(`div`,{className:`auth-card-line`}),(0,$.jsxs)(`div`,{className:`auth-tabs`,children:[(0,$.jsx)(`button`,{className:t===`login`?`active`:``,onClick:()=>g(`login`),children:`账号登录`}),(0,$.jsx)(`button`,{className:t===`register`?`active`:``,onClick:()=>g(`register`),children:`用户注册`})]}),(0,$.jsxs)(`div`,{className:`auth-heading`,children:[(0,$.jsx)(`span`,{children:t===`login`?`CITY OPERATION ACCESS`:`CREATE CITY ACCOUNT`}),(0,$.jsx)(`h2`,{children:t===`login`?`进入智慧城市运行中心`:`注册城市运行账号`}),(0,$.jsx)(`p`,{children:t===`login`?`登录后首先进入北京智慧城市 3D 大屏`:`注册信息仅保存在当前设备，用于比赛演示`})]}),t===`login`?(0,$.jsxs)(`form`,{onSubmit:async t=>{if(t.preventDefault(),d(``),!f.username.trim()||!f.password){d(`请输入账号和密码`);return}l(!0);try{let t=f.username.trim().toLowerCase();if(t===`admin`&&f.password===`123456`){e({username:`admin`,displayName:`城市运行管理员`},o);return}let n=await Yp(f.password),r=_().find(e=>e.username.toLowerCase()===t&&e.passwordHash===n);if(!r){d(`账号或密码不正确，可使用演示账号登录`);return}e({username:r.username,displayName:r.displayName},o)}finally{l(!1)}},children:[(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`span`,{children:`城市运行账号`}),(0,$.jsxs)(`div`,{className:`auth-input`,children:[(0,$.jsx)(`i`,{children:`城`}),(0,$.jsx)(`input`,{autoFocus:!0,autoComplete:`username`,value:f.username,onChange:e=>p({...f,username:e.target.value}),placeholder:`请输入城市运行账号`})]})]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`span`,{children:`登录密码`}),(0,$.jsxs)(`div`,{className:`auth-input`,children:[(0,$.jsx)(`i`,{children:`密`}),(0,$.jsx)(`input`,{type:i?`text`:`password`,autoComplete:`current-password`,value:f.password,onChange:e=>p({...f,password:e.target.value}),placeholder:`请输入密码`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>a(e=>!e),children:i?`隐藏`:`显示`})]})]}),(0,$.jsxs)(`div`,{className:`auth-options`,children:[(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:o,onChange:e=>s(e.target.checked)}),(0,$.jsx)(`i`,{}),`保持登录`]}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>d(`演示账号：admin　密码：123456`),children:`忘记密码？`})]}),u&&(0,$.jsx)(`div`,{className:`auth-message ${u.includes(`成功`)?`success`:``}`,children:u}),(0,$.jsxs)(`button`,{className:`auth-submit`,disabled:c,children:[c?`身份校验中…`:`进入智慧城市大屏`,(0,$.jsx)(`span`,{children:`→`})]}),(0,$.jsxs)(`button`,{className:`auth-demo`,type:`button`,onClick:()=>{p({username:`admin`,password:`123456`}),d(`已填入演示账号，点击上方按钮进入系统`)},children:[`一键填入演示账号 `,(0,$.jsx)(`b`,{children:`admin / 123456`})]})]}):(0,$.jsxs)(`form`,{onSubmit:async e=>{e.preventDefault(),d(``);let t=m.displayName.trim(),n=m.username.trim();if(!t||!n||!m.password||!m.confirm){d(`请完整填写注册信息`);return}if(!/^[a-zA-Z0-9_-]{3,20}$/.test(n)){d(`账号需为 3–20 位字母、数字、下划线或短横线`);return}if(m.password.length<6){d(`密码至少需要 6 位`);return}if(m.password!==m.confirm){d(`两次输入的密码不一致`);return}if(!m.agreement){d(`请先同意演示环境使用说明`);return}let r=_();if(n.toLowerCase()===`admin`||r.some(e=>e.username.toLowerCase()===n.toLowerCase())){d(`该账号已存在，请更换账号`);return}l(!0);try{r.push({username:n,displayName:t,department:m.department,passwordHash:await Yp(m.password)}),localStorage.setItem(`lingjing-users`,JSON.stringify(r)),p({username:n,password:``}),g(`login`),d(`注册成功，请使用新账号登录`)}finally{l(!1)}},children:[(0,$.jsxs)(`div`,{className:`auth-form-grid`,children:[(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`span`,{children:`姓名`}),(0,$.jsxs)(`div`,{className:`auth-input`,children:[(0,$.jsx)(`i`,{children:`名`}),(0,$.jsx)(`input`,{autoFocus:!0,value:m.displayName,onChange:e=>h({...m,displayName:e.target.value}),placeholder:`请输入真实姓名`})]})]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`span`,{children:`所属单位`}),(0,$.jsxs)(`div`,{className:`auth-input`,children:[(0,$.jsx)(`i`,{children:`部`}),(0,$.jsxs)(`select`,{value:m.department,onChange:e=>h({...m,department:e.target.value}),children:[(0,$.jsx)(`option`,{children:`北京市智慧城市运行中心`}),(0,$.jsx)(`option`,{children:`城市管理部门`}),(0,$.jsx)(`option`,{children:`交通运行部门`}),(0,$.jsx)(`option`,{children:`生态环境部门`}),(0,$.jsx)(`option`,{children:`公共安全与应急部门`})]})]})]})]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`span`,{children:`登录账号`}),(0,$.jsxs)(`div`,{className:`auth-input`,children:[(0,$.jsx)(`i`,{children:`指`}),(0,$.jsx)(`input`,{autoComplete:`username`,value:m.username,onChange:e=>h({...m,username:e.target.value}),placeholder:`3–20 位字母或数字`})]})]}),(0,$.jsxs)(`div`,{className:`auth-form-grid`,children:[(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`span`,{children:`设置密码`}),(0,$.jsxs)(`div`,{className:`auth-input`,children:[(0,$.jsx)(`i`,{children:`密`}),(0,$.jsx)(`input`,{type:i?`text`:`password`,autoComplete:`new-password`,value:m.password,onChange:e=>h({...m,password:e.target.value}),placeholder:`至少 6 位`})]})]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`span`,{children:`确认密码`}),(0,$.jsxs)(`div`,{className:`auth-input`,children:[(0,$.jsx)(`i`,{children:`验`}),(0,$.jsx)(`input`,{type:i?`text`:`password`,autoComplete:`new-password`,value:m.confirm,onChange:e=>h({...m,confirm:e.target.value}),placeholder:`再次输入`})]})]})]}),(0,$.jsxs)(`div`,{className:`auth-options register`,children:[(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:m.agreement,onChange:e=>h({...m,agreement:e.target.checked})}),(0,$.jsx)(`i`,{}),`同意本地演示环境使用说明`]}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>a(e=>!e),children:i?`隐藏密码`:`显示密码`})]}),u&&(0,$.jsx)(`div`,{className:`auth-message ${u.includes(`成功`)?`success`:``}`,children:u}),(0,$.jsxs)(`button`,{className:`auth-submit`,disabled:c,children:[c?`正在创建账号…`:`完成注册`,(0,$.jsx)(`span`,{children:`→`})]})]}),(0,$.jsxs)(`footer`,{className:`auth-card-footer`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{}),`SHA-256 LOCAL HASH`]}),(0,$.jsx)(`em`,{children:`演示环境 · 数据仅存本机`})]})]})]}),(0,$.jsxs)(`footer`,{className:`auth-footer`,children:[(0,$.jsx)(`span`,{children:`© 2026 京域智城 · 北京智慧城市创新实验室`}),(0,$.jsxs)(`span`,{children:[`城市数据链路 `,(0,$.jsx)(`i`,{}),` 正常　|　比赛演示版 v4.1.0`]})]})]})}function Zp(){let[e,t]=(0,r.useState)(!1),[n,i]=(0,r.useState)(null),[a,o]=(0,r.useState)(`city`),[s,c]=(0,r.useState)(!1),[l,u]=(0,r.useState)(`overview`),[d,f]=(0,r.useState)(!1),[p,m]=(0,r.useState)(``),[h,g]=(0,r.useState)(`loading`),[_,v]=(0,r.useState)(!1),[y,b]=(0,r.useState)(!1),[x,S]=(0,r.useState)(null),[C,w]=(0,r.useState)(null),[T,E]=(0,r.useState)(15),[D,O]=(0,r.useState)(!1),[k,ee]=(0,r.useState)(0),[A,te]=(0,r.useState)(!0),[j,M]=(0,r.useState)(!1),[N,P]=(0,r.useState)(!1),[ne,re]=(0,r.useState)(!0),[ie,ae]=(0,r.useState)(!1),[oe,se]=(0,r.useState)(null),[ce,F]=(0,r.useState)(null),[le,ue]=(0,r.useState)(null),[de,fe]=(0,r.useState)(!1),[pe,me]=(0,r.useState)(!1),[he,ge]=(0,r.useState)(`2026-07-20 14:32:26`),[_e,ve]=(0,r.useState)(null),[ye,be]=(0,r.useState)(!1),[I,xe]=(0,r.useState)({type:`演示预置：氯气泄漏`,confidence:.968,smokeRatio:.214,flameRatio:.008,edgeDensity:.182,persons:23,summary:`固定演示事件包用于保证 72 秒流程稳定；上传图片后将切换为真实本地 ONNX 推理。`,modelMode:`demo`,modelName:`演示预置事件包`,modelVersion:`SCENARIO FIXTURE v1.0`,inferenceMs:0,detections:[],explanation:[`预置结果仅用于固定比赛演示`,`上传任意图片可触发真实本地 ONNX 模型`]}),[Se,Ce]=(0,r.useState)(!1),[we,Te]=(0,r.useState)(!1),[Ee,De]=(0,r.useState)(`idle`),[Oe,ke]=(0,r.useState)(0),[Ae,je]=(0,r.useState)(1),[L,Me]=(0,r.useState)(!0),[Ne,Pe]=(0,r.useState)(36),[R,Fe]=(0,r.useState)(!1),z=(0,r.useRef)(!1),[B,Ie]=(0,r.useState)(``),V=Ee===`idle`?0:qp.find(e=>e.id>0&&Oe>=e.start&&Oe<e.end)?.id??9,Le=qp[V],Re=Ee===`idle`?0:Math.min(100,Oe/Jp*100),ze=V<=2&&V>0?`chemical-truck`:V===5?Oe<31?`police-car`:Oe<36?`firetruck`:`ambulance`:V===6?`police-car`:V===7?`firetruck`:V===8?`ambulance`:null,Be=(0,r.useMemo)(()=>Fp(T,3.4),[T]),Ve=(0,r.useMemo)(()=>zp(y),[y]),He=(0,r.useMemo)(()=>{let e=C?.distance??Ve.distance,t=C?.eta??Ve.eta,n=C?.roads.join(` → `)||`OSM 真实道路网络加载中`;return`灵境哨兵｜危化品泄漏应急处置报告\n报告编号：LJ-BJ-20260720-001\n生成时间：${he}\n响应等级：Ⅰ级应急响应\n\n一、事件概况\n事件地点：北京市朝阳区建国门外大街国贸桥西侧（演示坐标 39°54′27″N，116°27′07″E）\n事件类型：${I.type}\n视觉研判方式：${I.modelName}（${I.modelMode===`onnx`?`本地 ONNX 推理`:I.modelMode===`demo`?`演示预置事件包`:`端侧可解释特征研判`}）\n视觉置信度：${(I.confidence*100).toFixed(1)}%\n现场人员估计：约 ${I.persons} 人\n研判摘要：${I.summary}\n\n二、物理风险扩散计算\n气象条件：东南风 3.4 m/s，污染羽流吹向西北，Pasquill-D 稳定度\n致命区纵深：${Be.lethal} m\n高风险区纵深：${Be.high} m\n警戒区纵深：${Be.warning} m\n预计风险暴露人口：${Be.affectedPeople} 人\n物理模型：${Be.model}\n\n三、消防救援路径规划\n算法：OSM 真实路网 A*（欧氏距离启发，不属于 AI 识别）\n道路序列：${n}\n路线距离：${e} m\n预计到达：${t} min\n搜索道路节点：${C?.visited??Ve.visited} 个\n封路状态：${y?`已封锁 OSM 道路 ${C?.blockedRoadId??x??`自动选择路段`}，完成动态重规划`:`当前道路正常通行`}\n\n四、联合处置指令\n1. 交通智能体：立即封锁泄漏点周边 500 m 道路，建立 3.2 km 应急绿波带。\n2. 教育智能体：城北实验学校师生经东南侧上风向安全通道分批疏散，8 分钟内完成重点人员转移。\n3. 消防智能体：2 辆泡沫消防车沿 OSM 规划路线抵达，在上风向布置水幕并实施堵漏。\n4. 医疗智能体：市第三人民医院开放绿色通道，在体育中心设置临时分诊点。\n5. 环境监测组：在下风向 200 m、500 m、1000 m 设置连续监测点，每 2 分钟回传浓度。\n\n五、处置结论\n建议立即启动危化品泄漏Ⅰ级联合响应，优先完成学校疏散、道路管制和泄漏源控制。本结论由视觉模型、物理扩散计算、A* 路径规划与规则化协同流程联合生成，仅用于竞赛演示；正式行动应由现场指挥员复核确认。\n\n生成系统：灵境哨兵城市应急联合决策平台`},[y,x,Be,C,he,Ve,I]);(0,r.useEffect)(()=>{try{let e=localStorage.getItem(`lingjing-session`)||sessionStorage.getItem(`lingjing-session`);e&&i(JSON.parse(e))}catch{localStorage.removeItem(`lingjing-session`),sessionStorage.removeItem(`lingjing-session`)}t(!0)},[]),(0,r.useEffect)(()=>{if(!p)return;let e=window.setTimeout(()=>m(``),2800);return()=>window.clearTimeout(e)},[p]),(0,r.useEffect)(()=>{if(!B)return;let e=window.setTimeout(()=>Ie(``),2800);return()=>window.clearTimeout(e)},[B]),(0,r.useEffect)(()=>{if(!D||Ee===`playing`||Ee===`paused`)return;let e=window.setInterval(()=>E(e=>e>=30?1:e+1),520);return()=>window.clearInterval(e)},[D,Ee]),(0,r.useEffect)(()=>{if(Ee!==`playing`)return;let e=performance.now(),t=window.setInterval(()=>{let t=performance.now(),n=(t-e)/1e3*Ae;e=t,ke(e=>Math.min(Jp,e+n))},100);return()=>window.clearInterval(t)},[Ae,Ee]),(0,r.useEffect)(()=>{Ee===`playing`&&Oe>=Jp&&De(`complete`)},[Ee,Oe]),(0,r.useEffect)(()=>{V!==0&&(v(V>=4),M(V>=3),E(V<3?1:V===3?5:V<7?15:V===9?8:22))},[V]),(0,r.useEffect)(()=>{if(V<4){z.current=!1,Fe(!1);return}z.current||(z.current=!0,Fe(!0))},[V]),(0,r.useEffect)(()=>{!L||V===0||(ae(!1),ze?(se(ze),window.dispatchEvent(new CustomEvent(`city-camera`,{detail:{action:`follow`,assetId:ze}}))):(se(null),window.dispatchEvent(new CustomEvent(`city-camera`,{detail:{action:`follow`,assetId:null}})),window.dispatchEvent(new CustomEvent(`city-camera`,{detail:V===9?`reset`:`incident`}))))},[L,ze,V]),(0,r.useEffect)(()=>{let e=e=>{let t=e.target;if([`INPUT`,`TEXTAREA`,`SELECT`].includes(t.tagName))return;if(e.code===`Escape`){if(Se){Ce(!1);return}if(we){Te(!1);return}if(s){c(!1);return}if(de){fe(!1);return}if(d){f(!1);return}if(l!==`overview`){u(`overview`);return}if(ce){F(null);return}Me(!1),se(null),window.dispatchEvent(new CustomEvent(`city-camera`,{detail:{action:`follow`,assetId:null}}));return}let n={Digit1:`overview`,Digit2:`events`,Digit3:`resources`,Digit4:`archives`};if(n[e.code]){e.preventDefault(),u(n[e.code]),f(!1);return}if(!(V===0||l!==`overview`||de||Se||we)&&(e.code===`Space`&&(e.preventDefault(),De(e=>e===`playing`?`paused`:e===`paused`?`playing`:e)),e.code===`ArrowRight`)){e.preventDefault();let t=qp[Math.min(9,V+1)];ke(t.start+.01),De(t.id===9?`paused`:`playing`)}};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[d,l,we,Se,s,de,V,ce]),(0,r.useEffect)(()=>{if(!d)return;let e=e=>{e.target.closest(`.status`)||f(!1)};return window.addEventListener(`pointerdown`,e,!0),()=>window.removeEventListener(`pointerdown`,e,!0)},[d]),(0,r.useEffect)(()=>{if(!_)return;let e=setInterval(()=>ee(e=>(e+1)%4),900);return()=>clearInterval(e)},[_]);let Ue=()=>{if(h===`loading`){m(`真实北京路网仍在加载，请稍候一秒再启动`);return}h===`degraded`&&m(`真实路网数据异常，已启用内置完整路线继续演示`),ke(0),De(`playing`),Me(!0),v(!1),b(!1),S(null),E(1),O(!1),M(!1),ae(!1),se(null),Fe(!1),z.current=!1},We=()=>{c(!1),u(`overview`),window.setTimeout(Ue,120)},Ge=()=>De(e=>e===`playing`?`paused`:e===`paused`||e===`complete`?`playing`:e),Ke=()=>{let e=qp[Math.min(9,V+1)];ke(e.start+.01),De(e.id===9?`paused`:`playing`)},qe=()=>je(e=>e===1?1.5:e===1.5?2:1),Je=()=>Pe(e=>e===18?36:e===36?54:18),Ye=e=>{S(typeof e==`number`?e:null),b(!0),v(!0)},Xe=()=>{se(null),window.dispatchEvent(new CustomEvent(`city-camera`,{detail:{action:`follow`,assetId:null}}))},Ze=()=>{Xe(),Me(!1),ae(!1),window.dispatchEvent(new CustomEvent(`city-camera`,{detail:`incident`}))},Qe=(e,t,n,r,i)=>{Ie(e),ue({id:`side-${e}`,label:t,category:n,details:r,meta:i}),m(`已打开：${t}`)},$e=e=>{if(h===`loading`){m(`真实地图仍在加载，资源位置暂不可追踪`);return}let t={"FIRE-01":`firetruck`,"FIRE-02":`firetruck`,"ROBOT-01":`firetruck`,"MED-03":`ambulance`,"MED-06":`ambulance`,"POLICE-07":`police-car`,"BIKE-02":`police-car`}[e];F(null),ae(!1),Me(!1),(V<4||Ee===`complete`)&&(ke(20.01),De(`playing`),v(!0),M(!0)),t?(se(t),window.dispatchEvent(new CustomEvent(`city-camera`,{detail:{action:`follow`,assetId:t}})),m(`已同步到所属编队的真实道路跟随视角`)):(se(null),window.dispatchEvent(new CustomEvent(`city-camera`,{detail:`incident`})),m(`该资源已同步到事故现场任务区域`))},et=e=>{let t=oe===e.id?null:e.id;ae(!1),se(t),window.dispatchEvent(new CustomEvent(`city-camera`,{detail:{action:`follow`,assetId:t}}))},H=()=>{ge(new Date().toLocaleString(`zh-CN`,{hour12:!1}).replaceAll(`/`,`-`)),fe(!0),me(!0),window.setTimeout(()=>me(!1),700)},U=()=>{let e=URL.createObjectURL(new Blob([`﻿`,He],{type:`text/plain;charset=utf-8`})),t=document.createElement(`a`);t.href=e,t.download=`灵境哨兵-危化品泄漏应急处置报告.txt`,t.click(),window.setTimeout(()=>URL.revokeObjectURL(e),1e3)},tt=async e=>{if(!e)return;if(!e.type.startsWith(`image/`)){m(`请选择 JPG、PNG 或 WebP 图片`);return}if(e.size>15*1024*1024){m(`图片超过 15MB，请压缩后重试`);return}be(!0);let t=URL.createObjectURL(e);ve(e=>(e&&URL.revokeObjectURL(e),t));try{let t=await jp(e);xe(t),m(t.modelMode===`onnx`?`本地 ONNX 推理完成：${t.type} · ${(t.confidence*100).toFixed(1)}%`:`ONNX 不可用，已明确切换为可解释视觉降级模式`)}catch(e){m(`图片分析失败：${e instanceof Error?e.message:`未知错误`}`)}finally{be(!1)}},nt=(e,t)=>{localStorage.removeItem(`lingjing-session`),sessionStorage.removeItem(`lingjing-session`),(t?localStorage:sessionStorage).setItem(`lingjing-session`,JSON.stringify(e)),i(e)},rt=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen(),m(document.fullscreenElement?`已进入全屏演示`:`已退出全屏演示`)}catch{m(`当前浏览器未允许全屏，请使用 F11`)}},W=()=>{a===`emergency`&&(Ee===`playing`||Ee===`paused`)&&!window.confirm(`当前推演尚未结束，退出将中止本次演示。确定退出吗？`)||(localStorage.removeItem(`lingjing-session`),sessionStorage.removeItem(`lingjing-session`),f(!1),c(!1),u(`overview`),g(`loading`),o(`city`),i(null))};return e?n?a===`city`?(0,$.jsx)(yp,{displayName:n.displayName,onLogout:W,onOpenDemo:()=>{c(!1),u(`overview`),g(`loading`),o(`emergency`)}}):(0,$.jsxs)(`main`,{className:`shell emergency-shell`,children:[(0,$.jsxs)(`header`,{className:`topbar`,children:[(0,$.jsxs)(`div`,{className:`brand-mark`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{})]}),(0,$.jsxs)(`div`,{className:`brand`,children:[(0,$.jsx)(`b`,{children:`京域智城`}),(0,$.jsx)(`span`,{children:`北京智慧城市 3D 大屏 · SMART CITY DIGITAL TWIN`})]}),(0,$.jsxs)(`nav`,{"aria-label":`主功能导航`,children:[Kp.map(e=>(0,$.jsx)(`button`,{className:l===e.id&&!s?`active`:``,"aria-current":l===e.id&&!s?`page`:void 0,onClick:()=>{c(!1),u(e.id),f(!1)},children:e.label},e.id)),(0,$.jsx)(`button`,{className:`demo-nav`,onClick:()=>{c(!1),o(`city`),f(!1)},children:`返回智慧城市`})]}),(0,$.jsxs)(`div`,{className:`status`,children:[(0,$.jsx)(`span`,{className:`live-dot`}),`系统在线 `,(0,$.jsx)(`em`,{children:n.displayName}),(0,$.jsx)(`button`,{className:`avatar ${d?`open`:``}`,onClick:()=>f(e=>!e),title:`打开账号菜单`,"aria-label":`打开账号菜单`,"aria-expanded":d,"aria-haspopup":`menu`,"aria-controls":`account-menu`,children:n.displayName.slice(0,1)}),d&&(0,$.jsxs)(`div`,{className:`account-menu`,id:`account-menu`,role:`menu`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsx)(`i`,{children:n.displayName.slice(0,1)}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:n.displayName}),(0,$.jsxs)(`span`,{children:[n.username,` · 应急指挥中心`]})]})]}),(0,$.jsxs)(`button`,{onClick:rt,children:[(0,$.jsx)(`span`,{children:`⛶ 全屏演示`}),(0,$.jsx)(`b`,{children:typeof document<`u`&&document.fullscreenElement?`退出`:`进入`})]}),(0,$.jsxs)(`button`,{onClick:()=>{Me(e=>!e),m(L?`导演视角已关闭`:`导演视角已开启`)},children:[(0,$.jsx)(`span`,{children:`◉ 导演视角`}),(0,$.jsx)(`b`,{children:L?`开启`:`关闭`})]}),(0,$.jsxs)(`button`,{onClick:()=>m(`快捷键：1–4 切换模块　空格暂停/继续　→ 下一阶段　Esc 返回`),children:[(0,$.jsx)(`span`,{children:`? 演示快捷键`}),(0,$.jsx)(`b`,{children:`查看`})]}),(0,$.jsxs)(`button`,{onClick:()=>m(h===`ready`?`系统自检通过：真实地图、路网、AI 模型和调度模块均已就绪`:h===`loading`?`系统自检进行中：真实路网仍在加载`:`系统自检警告：真实路网已启用内置降级路线`),children:[(0,$.jsx)(`span`,{children:`✓ 演示自检`}),(0,$.jsx)(`b`,{children:h===`ready`?`通过`:h===`loading`?`检测中`:`降级`})]}),(0,$.jsxs)(`button`,{onClick:()=>{P(e=>!e),m(N?`已切换为白天态势`:`已切换为夜间态势`)},children:[(0,$.jsx)(`span`,{children:`◐ 显示模式`}),(0,$.jsx)(`b`,{children:N?`夜间`:`白天`})]}),(0,$.jsxs)(`button`,{onClick:()=>{re(e=>!e),m(ne?`已关闭楼宇灯光`:`已开启楼宇灯光`)},children:[(0,$.jsx)(`span`,{children:`✦ 楼宇灯光`}),(0,$.jsx)(`b`,{children:ne?`开启`:`关闭`})]}),(0,$.jsxs)(`button`,{onClick:()=>{u(`resources`),f(!1)},children:[(0,$.jsx)(`span`,{children:`⌘ 快速调度`}),(0,$.jsx)(`b`,{children:`进入`})]}),(0,$.jsxs)(`button`,{className:`logout`,onClick:W,children:[(0,$.jsx)(`span`,{children:`↪ 退出登录`}),(0,$.jsx)(`b`,{children:`EXIT`})]})]})]})]}),(0,$.jsxs)(`section`,{className:`command-strip`,children:[(0,$.jsx)(`div`,{className:`alert-tag scenario-alert phase-${V}`,children:V===0?`演示项目 01 · READY`:`${String(V).padStart(2,`0`)}/09 · ${Ee===`playing`?`LIVE`:Ee===`paused`?`PAUSED`:`COMPLETE`}`}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`strong`,{children:[Le.title,`｜`,Le.subtitle]}),(0,$.jsxs)(`span`,{children:[Le.clock,` · `,Le.detail]})]}),(0,$.jsxs)(`div`,{className:`command-actions`,children:[(0,$.jsx)(`span`,{children:h===`loading`?`正在装载 6,016 栋建筑与 674 段道路`:V===0?`智慧城市大屏已就绪 · 点击进入演示项目`:`T+${Oe.toFixed(1)}s · ${Le.metric}`}),(0,$.jsx)(`button`,{disabled:h===`loading`,onClick:V===0?()=>c(!0):Ue,children:h===`loading`?`正在加载真实路网…`:V===0?`进入演示项目 →`:Ee===`complete`?`↻ 再演示一次`:`↻ 从头重播`})]})]}),(0,$.jsx)(vf,{active:l,onClose:()=>u(`overview`),onStartScenario:Ue,onFocusIncident:Ze,onGenerateReport:H,onNotice:m,onTrackResource:$e,scenarioPhase:V,scenarioTime:Oe,scenarioStatus:Ee}),s&&(0,$.jsx)(xf,{ready:h!==`loading`,onClose:()=>c(!1),onStart:We}),p&&(0,$.jsxs)(`div`,{className:`system-toast ${/失败|异常|未允许/.test(p)?`error`:/召回|关闭|降级|加载/.test(p)?`warning`:`success`}`,role:`status`,"aria-live":`polite`,children:[(0,$.jsx)(`i`,{children:/失败|异常|未允许/.test(p)?`!`:/召回|关闭|降级|加载/.test(p)?`i`:`✓`}),(0,$.jsx)(`span`,{children:p})]}),(0,$.jsxs)(`section`,{className:`workspace`,children:[(0,$.jsxs)(`aside`,{className:`left-panel panel`,children:[(0,$.jsxs)(`div`,{className:`panel-title`,children:[(0,$.jsx)(`span`,{children:`01`}),`事件智能识别 `,(0,$.jsx)(`b`,{children:`AI VISION`})]}),(0,$.jsxs)(`div`,{className:`scene`,children:[_e&&(0,$.jsx)(`img`,{className:`scene-upload-preview`,src:_e,alt:`上传的事故现场`}),_e&&I.detections.map((e,t)=>(0,$.jsx)(`div`,{className:`vision-detection ${e.label}`,style:{left:`${e.box.x}%`,top:`${e.box.y}%`,width:`${e.box.width}%`,height:`${e.box.height}%`},children:(0,$.jsxs)(`span`,{children:[e.labelZh,` `,(e.confidence*100).toFixed(1),`%`]})},`${e.label}-${t}`)),(0,$.jsx)(`div`,{className:`sky`}),(0,$.jsx)(`div`,{className:`road-lines`}),(0,$.jsx)(`div`,{className:`truck ${V>=2?`failed`:``}`,children:(0,$.jsx)(`span`,{children:`化学废料`})}),V>=2&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`smoke s1`}),(0,$.jsx)(`div`,{className:`smoke s2`}),(0,$.jsx)(`div`,{className:`smoke s3`})]}),!_e&&V>=3&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`detect-box`,children:(0,$.jsx)(`label`,{children:`演示预置 · 危化车辆`})}),(0,$.jsx)(`div`,{className:`detect-smoke`,children:(0,$.jsx)(`label`,{children:`演示预置 · 氯气泄漏`})})]}),(0,$.jsx)(`div`,{className:`camera`,children:`CAM-07 · LIVE`}),(0,$.jsxs)(`label`,{className:`upload-image`,children:[ye?`ONNX 推理中…`:`上传图片 · 本地识别`,(0,$.jsx)(`input`,{type:`file`,accept:`image/jpeg,image/png,image/webp`,onChange:e=>{tt(e.target.files?.[0]),e.currentTarget.value=``}})]}),(0,$.jsx)(`div`,{className:`model-status-chip ${I.modelMode===`explainable-fallback`?`fallback`:``}`,children:I.modelMode===`onnx`?`ONNX LOCAL · ${I.inferenceMs}ms`:I.modelMode===`demo`?`SCENARIO FIXTURE · 可上传实测`:`EXPLAINABLE FALLBACK`})]}),(0,$.jsxs)(`div`,{className:`recognition`,children:[(0,$.jsxs)(`button`,{type:`button`,className:B===`vehicle`?`active`:``,onClick:()=>{Ze(),Qe(`vehicle`,`危化品车辆状态`,`事件智能识别`,V===0?`演示车辆已加载并等待启动。`:Le.detail,`京A·WH2576 · 阶段 ${String(V).padStart(2,`0`)}`)},children:[(0,$.jsx)(`span`,{children:`车辆状态`}),(0,$.jsx)(`strong`,{children:V===0?`等待演示`:V===1?`正常运输`:V===2?`动力故障`:`已停车处置`})]}),(0,$.jsxs)(`button`,{type:`button`,className:B===`confidence`?`active`:``,onClick:()=>{Ze(),Qe(`confidence`,`视觉模型置信度`,I.modelMode===`onnx`?`AI 视觉目标检测`:`演示/降级结果`,I.summary,`${I.modelName} · ${I.modelVersion}`)},children:[(0,$.jsx)(`span`,{children:`视觉模型置信度`}),(0,$.jsx)(`strong`,{children:_e||V>=3?(0,$.jsx)(yf,{to:I.confidence*100,decimals:1,suffix:`%`}):`—`})]}),(0,$.jsxs)(`button`,{type:`button`,className:B===`plume`?`active`:``,onClick:()=>{M(!0),Ze(),Qe(`plume`,`像素辅助特征与物理扩散`,`物理模型输入`,`像素辅助烟羽占比 ${(I.smokeRatio*100).toFixed(1)}%，物理模型计算警戒纵深 ${Be.warning} 米。`,`非 AI · ${Be.model}`)},children:[(0,$.jsx)(`span`,{children:`像素辅助占比`}),(0,$.jsx)(`strong`,{children:(0,$.jsx)(yf,{to:_e||V>=3?I.smokeRatio*100:0,decimals:1,suffix:`%`})})]}),(0,$.jsxs)(`button`,{type:`button`,className:B===`evacuated`?`active`:``,onClick:()=>Qe(`evacuated`,`人员疏散进度`,`联合处置态势`,V>=6?`重点区域 186 人已完成向侧上风向疏散。`:`人员疏散队伍已待命，将在交通封控完成后执行。`,V>=6?`186 人 · 已完成`:`0 人 · 等待执行`),children:[(0,$.jsx)(`span`,{children:`已疏散人员`}),(0,$.jsx)(`strong`,{children:(0,$.jsx)(yf,{to:V>=6?186:0,suffix:` 人`})})]})]}),(0,$.jsxs)(`button`,{type:`button`,className:`ai-note side-wide-action ${B===`ai-note`?`active`:``}`,onClick:()=>{M(!0),Ze(),Qe(`ai-note`,_e?`本地 ONNX 视觉研判`:V>=3?`演示预置研判`:`运输遥测状态`,_e&&I.modelMode===`onnx`?`AI 视觉模型输出`:V>=3?`演示预置事件`:`车辆遥测`,_e?I.summary:V===0?`等待启动完整演示，车辆与应急力量已加载。`:Le.detail,_e?`${I.modelName} · 图片未上传服务器`:V>=3?`固定比赛流程 · 非实时模型输出`:`车辆遥测 · 正常待命`)},children:[(0,$.jsx)(`b`,{children:_e?`本地 ONNX 视觉研判`:V>=3?`演示预置研判`:`运输遥测状态`}),(0,$.jsxs)(`p`,{children:[_e?I.summary:V===0?`等待启动完整演示，车辆与应急力量已加载。`:Le.detail,` `,!_e&&V>=3&&(0,$.jsxs)($.Fragment,{children:[`东南风 3.4 m/s（吹向西北），预计 `,(0,$.jsxs)(`em`,{children:[3,` 分钟`]}),`进入重点警戒区域。`]})]})]}),(0,$.jsxs)(`div`,{className:`panel-title compact`,children:[(0,$.jsx)(`span`,{children:`02`}),`智能体协同 `,(0,$.jsx)(`b`,{children:`MULTI-AGENT`})]}),(0,$.jsx)(`div`,{className:`agents`,children:Gp.map((e,t)=>{let n=[4,4,4,3][t],r=[7,8,6,9][t],i=V>=n,a=V>=r,o=[`FIRE-01`,`MED-03`,`POLICE-07`,`COMMAND`][t];return(0,$.jsxs)(`button`,{type:`button`,className:`agent ${e.tone} ${i?`scenario-active`:``} ${a?`scenario-done`:``} ${B===`agent-${t}`?`side-selected`:``}`,onClick:()=>{Ie(`agent-${t}`),o===`COMMAND`?(Ze(),Qe(`agent-${t}`,e.name,`多智能体协同`,e.text,`指挥中枢 · 联合处置`)):$e(o)},children:[(0,$.jsx)(`i`,{children:a?`✓`:e.icon}),(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`b`,{children:e.name}),(0,$.jsx)(`span`,{children:i?a?`阶段任务完成 · 点击查看位置`:_&&k===t?`正在执行当前处置任务…`:e.text:`系统待命 · 点击可提前追踪`})]}),(0,$.jsx)(`em`,{children:`●`})]},e.name)})}),(0,$.jsxs)(`div`,{className:`evidence-launches`,children:[(0,$.jsxs)(`button`,{type:`button`,onClick:()=>Ce(!0),children:[(0,$.jsx)(`span`,{children:`MODEL · DATA · METRICS`}),(0,$.jsx)(`b`,{children:`查看 AI 证据链`})]}),(0,$.jsxs)(`button`,{type:`button`,onClick:()=>Te(!0),children:[(0,$.jsx)(`span`,{children:`TASK · MESSAGE · BASIS`}),(0,$.jsx)(`b`,{children:`查看协同审计`})]})]})]}),(0,$.jsxs)(`section`,{className:`map-panel panel`,children:[(0,$.jsxs)(`div`,{className:`panel-title`,children:[(0,$.jsx)(`span`,{children:`03`}),`真实城市三维推演 `,(0,$.jsx)(`b`,{children:`REAL-WORLD DIGITAL TWIN`}),(0,$.jsxs)(`div`,{className:`map-tools`,children:[(0,$.jsx)(`button`,{"aria-label":`缩小`,onClick:()=>window.dispatchEvent(new CustomEvent(`city-camera`,{detail:`zoomOut`})),children:`−`}),(0,$.jsx)(`button`,{"aria-label":`放大`,onClick:()=>window.dispatchEvent(new CustomEvent(`city-camera`,{detail:`zoomIn`})),children:`＋`})]})]}),(0,$.jsxs)(`div`,{className:`map`,onClick:()=>F(null),children:[(0,$.jsx)(ff,{running:_,blocked:y,blockedRoadId:x,showRisk:j,topView:!A,nightMode:N,buildingLights:ne,autoTour:ie,suspended:s||l!==`overview`||de||Se||we,scenarioPhase:V,scenarioTime:Oe,scenarioPlaying:Ee===`playing`,trafficDensity:Ne,splitView:R,fireRoute:C?.roads,onSelect:F,onRealRoute:w,onSceneStatus:e=>{g(e),e===`degraded`&&m(`真实路网数据异常，已自动启用内置完整路线`)},plume:Be}),(0,$.jsxs)(`div`,{className:`map-layer-tools`,children:[(0,$.jsxs)(`button`,{className:A?`on`:``,onClick:()=>{Xe(),Me(!1),te(e=>!e)},children:[`◈ `,A?`自由三维`:`垂直俯视`]}),(0,$.jsx)(`button`,{className:j?`on`:``,onClick:()=>M(e=>!e),children:`◉ 风险热区`}),(0,$.jsx)(`button`,{className:N?`on`:``,onClick:()=>P(e=>!e),children:N?`☀ 白天`:`☾ 夜间`}),(0,$.jsx)(`button`,{className:ne?`on`:``,onClick:()=>re(e=>!e),children:`✦ 楼宇灯光`}),(0,$.jsx)(`button`,{className:ie?`on`:``,onClick:()=>{Xe(),Me(!1),ae(e=>!e)},children:ie?`■ 停止巡航`:`▶ 自动巡航`}),oe&&(0,$.jsx)(`button`,{className:`on`,onClick:Xe,children:`■ 停止跟随`}),(0,$.jsx)(`button`,{onClick:()=>{Xe(),Me(!1),ae(!1),window.dispatchEvent(new CustomEvent(`city-camera`,{detail:`incident`}))},children:`◎ 聚焦事故`}),(0,$.jsx)(`button`,{onClick:()=>{Xe(),Me(!1),ae(!1),window.dispatchEvent(new CustomEvent(`city-camera`,{detail:`reset`}))},children:`⌖ 复位`})]}),(0,$.jsx)(`div`,{className:`coordinates`,children:`39°54′27″N\xA0\xA0116°27′07″E　|　北京 CBD`}),(0,$.jsxs)(`div`,{className:`wind`,children:[`↖`,(0,$.jsxs)(`span`,{children:[`东南风 3.4m/s`,(0,$.jsx)(`br`,{}),`吹向西北`]})]}),(0,$.jsxs)(`div`,{className:`legend`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{className:`lg-red`}),`致命区`]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{className:`lg-orange`}),`高风险`]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{className:`lg-yellow`}),`警戒区`]})]}),(0,$.jsx)(`div`,{className:`map-attribution`,children:`© OpenStreetMap contributors · 北京核心区真实矢量数据`}),ce&&(0,$.jsxs)(`div`,{className:`asset-card`,onClick:e=>e.stopPropagation(),children:[(0,$.jsx)(`button`,{onClick:()=>F(null),children:`×`}),(0,$.jsx)(`span`,{children:ce.category}),(0,$.jsx)(`strong`,{children:ce.label}),(0,$.jsx)(`p`,{children:ce.details}),(0,$.jsx)(`em`,{children:ce.meta}),(0,$.jsxs)(`div`,{className:`asset-actions`,children:[ce.position&&(0,$.jsx)(`button`,{onClick:()=>{Xe(),ae(!1),window.dispatchEvent(new CustomEvent(`city-camera`,{detail:{action:`focus`,position:ce.position}}))},children:`◎ 定位观察`}),ce.action===`follow-vehicle`&&(0,$.jsx)(`button`,{className:oe===ce.id?`tracking`:``,onClick:()=>et(ce),children:oe===ce.id?`■ 停止跟随`:`◉ 跟随车辆`}),ce.action===`toggle-building-lights`&&(0,$.jsx)(`button`,{className:`lights`,onClick:()=>window.dispatchEvent(new CustomEvent(`city-camera`,{detail:{action:`toggle-building-lights`,assetId:ce.id}})),children:`✦ 切换楼层灯光`}),ce.action===`block-road`&&(0,$.jsx)(`button`,{className:`danger`,onClick:()=>Ye(Number(ce.id.replace(`road-`,``))),children:y?`✓ 已封锁并完成真实路网重规划`:`⊘ 封锁此路并按真实路网重规划`})]})]})]}),(0,$.jsxs)(`div`,{className:`scenario-console phase-${V} ${Ee}`,onClick:e=>e.stopPropagation(),children:[(0,$.jsxs)(`div`,{className:`scenario-now`,children:[(0,$.jsx)(`i`,{children:Le.icon}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`span`,{children:[`SCENARIO DIRECTOR · `,V===0?`READY`:`${String(V).padStart(2,`0`)}/09`]}),(0,$.jsx)(`strong`,{children:Le.title}),(0,$.jsx)(`p`,{children:Le.subtitle})]}),(0,$.jsx)(`em`,{children:V===0?`01:12`:`${Math.floor(Oe/60).toString().padStart(2,`0`)}:${Math.floor(Oe%60).toString().padStart(2,`0`)}`})]}),(0,$.jsxs)(`div`,{className:`scenario-progress`,children:[(0,$.jsx)(`span`,{style:{width:`${Re}%`}}),(0,$.jsx)(`i`,{style:{left:`${Re}%`}})]}),(0,$.jsx)(`div`,{className:`scenario-stage-rail`,children:qp.slice(1).map(e=>(0,$.jsxs)(`button`,{className:V===e.id?`active`:V>e.id?`done`:``,title:`${e.clock} ${e.title}`,onClick:()=>{ke(e.start+.01),De(`paused`)},children:[(0,$.jsx)(`i`,{children:e.id}),(0,$.jsx)(`span`,{children:e.title})]},e.id))}),(0,$.jsxs)(`div`,{className:`scenario-controls`,children:[(0,$.jsx)(`button`,{className:`primary`,disabled:h===`loading`,onClick:V===0||Ee===`complete`?Ue:Ge,children:h===`loading`?`路网加载中…`:V===0?`▶ 一键完整演示`:Ee===`playing`?`Ⅱ 暂停`:Ee===`complete`?`↻ 再演示`:`▶ 继续`}),(0,$.jsx)(`button`,{disabled:V===0||V===9,onClick:Ke,children:`下一阶段 →`}),(0,$.jsxs)(`button`,{onClick:qe,children:[Ae,`× 倍速`]}),(0,$.jsxs)(`button`,{onClick:Je,children:[`车流：`,Ne===18?`畅通`:Ne===36?`繁忙`:`拥堵`,` · `,Ne]}),(0,$.jsx)(`button`,{className:L?`on`:``,"aria-pressed":L,onClick:()=>Me(e=>!e),children:`◉ 导演视角`}),(0,$.jsx)(`button`,{className:R?`on split-toggle`:``,disabled:V<4,"aria-pressed":R,onClick:()=>Fe(e=>!e),children:`▦ 四车分屏`})]})]}),(0,$.jsxs)(`div`,{className:`time-control`,children:[(0,$.jsx)(`button`,{"aria-label":Ee===`playing`?`暂停完整推演`:Ee===`paused`?`继续完整推演`:D?`暂停风险扩散时间`:`播放风险扩散时间`,onClick:()=>Ee===`playing`||Ee===`paused`?Ge():O(e=>!e),children:Ee===`playing`||D?`Ⅱ`:`▶`}),(0,$.jsx)(`input`,{"aria-label":`风险扩散推演时间`,type:`range`,min:`1`,max:`30`,value:T,disabled:Ee===`playing`||Ee===`paused`,onChange:e=>{O(!1),E(Number(e.target.value))}}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`现在`}),(0,$.jsx)(`span`,{children:`+5min`}),(0,$.jsx)(`span`,{children:`+15min`}),(0,$.jsx)(`span`,{children:`+30min`})]}),(0,$.jsxs)(`strong`,{children:[Ee===`playing`||Ee===`paused`?`导演脚本联动 · `:``,`+`,T,`min · 警戒纵深 `,Be.warning,`m`]})]})]}),(0,$.jsxs)(`aside`,{className:`right-panel panel`,children:[(0,$.jsxs)(`div`,{className:`panel-title`,children:[(0,$.jsx)(`span`,{children:`04`}),`决策方案 `,(0,$.jsx)(`b`,{children:`AI COMMAND`})]}),(0,$.jsxs)(`button`,{type:`button`,className:`score-card ${B===`plan-score`?`side-selected`:``}`,onClick:()=>Qe(`plan-score`,y?`方案 B · A* 动态重规划`:`方案 A · 最短响应路径`,`AI 决策方案`,y?`东二环封闭后，系统已使用 OSM 真实路网完成避让重规划。`:`当前道路正常通行，系统选择消防最短响应路径。`,`综合评分 ${y?`92.4`:`95.1`} · 实时求解`),children:[(0,$.jsx)(`span`,{children:`当前最优方案 · 实时求解`}),(0,$.jsx)(`strong`,{children:y?`方案 B · A* 动态重规划`:`方案 A · 最短响应路径`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{children:(0,$.jsx)(yf,{to:y?92.4:95.1,decimals:1})}),(0,$.jsx)(`small`,{children:`综合评分`})]})]}),(0,$.jsxs)(`div`,{className:`metrics`,children:[(0,$.jsxs)(`button`,{type:`button`,className:B===`eta`?`active`:``,onClick:()=>{Ie(`eta`),$e(`FIRE-01`)},children:[(0,$.jsx)(`span`,{children:`OSM A* 预计响应`}),(0,$.jsx)(`b`,{className:`green`,children:(0,$.jsx)(yf,{to:C?.eta??Ve.eta,suffix:` min`})}),(0,$.jsxs)(`small`,{children:[`点击追踪消防车 · 搜索 `,C?.visited??Ve.visited,` 个节点`]})]}),(0,$.jsxs)(`button`,{type:`button`,className:B===`exposure`?`active`:``,onClick:()=>{M(!0),Ze(),Qe(`exposure`,`模型风险暴露`,`风险扩散计算`,`当前预计风险暴露人口 ${Be.affectedPeople} 人，警戒纵深 ${Be.warning} 米。`,Be.model)},children:[(0,$.jsx)(`span`,{children:`模型风险暴露`}),(0,$.jsx)(`b`,{children:(0,$.jsx)(yf,{to:Be.affectedPeople,suffix:` 人`})}),(0,$.jsxs)(`small`,{children:[`点击聚焦风险区 · `,Be.model]})]}),(0,$.jsxs)(`button`,{type:`button`,className:B===`route`?`active`:``,onClick:()=>Qe(`route`,`消防真实救援路径`,`OSM 路径规划`,C?.roads.join(` → `)||`正在加载 OSM 真实道路名称。`,`${((C?.distance??Ve.distance)/1e3).toFixed(2)} km · ETA ${C?.eta??Ve.eta} min`),children:[(0,$.jsx)(`span`,{children:`真实救援路径`}),(0,$.jsx)(`b`,{children:(0,$.jsx)(yf,{to:(C?.distance??Ve.distance)/1e3,decimals:2,suffix:` km`})}),(0,$.jsxs)(`small`,{children:[`点击查看道路序列 · `,C?.roads.slice(0,2).join(` → `)||`正在加载`]})]})]}),(0,$.jsx)(`div`,{className:`plan-steps`,children:[`封锁泄漏点周边 500m 道路`,`学校师生向东南侧上风向分批疏散`,`消防车沿 OSM 真实道路抵达`,`救护组在体育中心建立分诊点`].map((e,t)=>{let n=[6,6,7,8][t];return(0,$.jsxs)(`button`,{type:`button`,className:B===`step-${t}`?`active`:``,onClick:()=>{Ie(`step-${t}`),ke(qp[n].start+.01),De(`paused`),Me(!0),m(`已跳转到处置步骤：${e}`)},children:[(0,$.jsx)(`i`,{children:t+1}),(0,$.jsxs)(`p`,{children:[e,(0,$.jsxs)(`span`,{children:[[`交警 · 2分钟内`,`教育 · 8分钟完成`,`消防 · 预计${C?.eta??7}分钟`,`医疗 · 12分钟启用`][t],` · 点击定位`]})]}),(0,$.jsx)(`em`,{children:`→`})]},e)})}),(0,$.jsx)(`button`,{className:`block-button`,disabled:V>0&&Ee!==`complete`,onClick:()=>Ye(),children:V>0&&Ee!==`complete`?`完整演示进行中 · 道路决策已锁定`:y?`✓ OSM A* 已重规划：${C?.roads.slice(0,4).join(` → `)||`已避开封闭道路`}`:`模拟突发：封闭东二环路段并按真实道路重规划`}),(0,$.jsxs)(`div`,{className:`algorithm-proof`,children:[(0,$.jsxs)(`button`,{type:`button`,onClick:()=>{M(e=>!e),Ze(),m(j?`风险扩散图层已隐藏`:`风险扩散图层已开启`)},children:[(0,$.jsx)(`span`,{children:`扩散模型`}),(0,$.jsx)(`b`,{children:`高斯烟羽 / Pasquill-D`}),(0,$.jsx)(`em`,{children:`点击切换风险图层 · Q=80g/s`})]}),(0,$.jsxs)(`button`,{type:`button`,onClick:()=>Qe(`algorithm`,`OSM 真实路网 A*`,`路径算法`,`A* 已搜索 ${C?.visited??Ve.visited} 个道路节点，使用欧氏距离作为启发函数。`,`距离 ${C?.distance??Ve.distance}m · ETA ${C?.eta??Ve.eta}min`),children:[(0,$.jsx)(`span`,{children:`路径算法`}),(0,$.jsx)(`b`,{children:`OSM 真实路网 A* · Euclidean`}),(0,$.jsx)(`em`,{children:`点击查看求解结果`})]})]}),(0,$.jsxs)(`div`,{className:`panel-title compact`,children:[(0,$.jsx)(`span`,{children:`05`}),`决策时间线 `,(0,$.jsx)(`b`,{children:`TRACE`})]}),(0,$.jsx)(`div`,{className:`timeline scenario-timeline`,children:qp.slice(1).map(e=>(0,$.jsxs)(`button`,{type:`button`,className:`${V===e.id?`active`:V>e.id?`done`:``} ${B===`timeline-${e.id}`?`side-selected`:``}`,onClick:()=>{Ie(`timeline-${e.id}`),ke(e.start+.01),De(`paused`),Me(!0),m(`时间线已定位：${e.title}`)},children:[(0,$.jsx)(`time`,{children:e.clock}),(0,$.jsx)(`i`,{}),(0,$.jsxs)(`p`,{children:[(0,$.jsx)(`b`,{children:e.title}),(0,$.jsx)(`span`,{children:e.subtitle})]})]},e.id))}),(0,$.jsxs)(`button`,{className:`report`,onClick:H,children:[`生成应急处置报告 `,(0,$.jsx)(`span`,{children:`↗`})]})]})]}),le&&(0,$.jsx)(fp,{data:le,tone:`blue`,onClose:()=>ue(null)}),Se&&(0,$.jsx)(Hp,{vision:I,onClose:()=>Ce(!1)}),we&&(0,$.jsx)(Wp,{scenarioPhase:V,scenarioTime:Oe,vision:I,plume:Be,route:C??{distance:Ve.distance,eta:Ve.eta,visited:Ve.visited,roads:[]},blocked:y,onClose:()=>Te(!1)}),de&&(0,$.jsx)(`div`,{className:`report-overlay`,onClick:()=>fe(!1),children:(0,$.jsxs)(`section`,{className:`report-dialog`,role:`dialog`,"aria-modal":`true`,"aria-label":`应急处置报告`,onClick:e=>e.stopPropagation(),children:[(0,$.jsx)(`button`,{className:`report-close`,"aria-label":`关闭报告`,onClick:()=>fe(!1),children:`×`}),pe?(0,$.jsxs)(`div`,{className:`report-generating`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`strong`,{children:`系统正在生成应急处置报告`}),(0,$.jsx)(`p`,{children:`汇总视觉识别、物理扩散、A* 路径规划与协同决策结果…`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{}),(0,$.jsx)(`span`,{}),(0,$.jsx)(`span`,{}),(0,$.jsx)(`span`,{})]})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`header`,{className:`report-head`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`LINGJING SENTINEL · AUTO REPORT`}),(0,$.jsx)(`h2`,{children:`危化品泄漏应急处置报告`}),(0,$.jsxs)(`p`,{children:[`报告编号：LJ-BJ-20260720-001　生成时间：`,he]})]}),(0,$.jsx)(`b`,{children:`Ⅰ级响应`})]}),(0,$.jsxs)(`div`,{className:`report-paper`,children:[(0,$.jsxs)(`div`,{className:`report-summary`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`视觉模型判定`}),(0,$.jsx)(`strong`,{children:I.type}),(0,$.jsxs)(`em`,{children:[`置信度 `,(I.confidence*100).toFixed(1),`%`]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`警戒纵深`}),(0,$.jsxs)(`strong`,{children:[Be.warning,` m`]}),(0,$.jsx)(`em`,{children:`物理模型 · Pasquill-D`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`风险暴露`}),(0,$.jsxs)(`strong`,{children:[Be.affectedPeople,` 人`]}),(0,$.jsxs)(`em`,{children:[`现场估计 `,I.persons,` 人`]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`消防 ETA`}),(0,$.jsxs)(`strong`,{children:[C?.eta??Ve.eta,` min`]}),(0,$.jsxs)(`em`,{children:[`A* · `,C?.distance??Ve.distance,` m`]})]})]}),(0,$.jsxs)(`article`,{children:[(0,$.jsx)(`h3`,{children:`01　事件概况与视觉研判`}),(0,$.jsxs)(`p`,{children:[`北京市朝阳区建国门外大街国贸桥西侧发生危化品运输车泄漏。视觉模型识别为`,(0,$.jsx)(`strong`,{children:I.type}),`，烟羽像素占比 `,(I.smokeRatio*100).toFixed(1),`%，现场人员约 `,I.persons,` 人。`,I.summary]}),(0,$.jsxs)(`div`,{className:`report-callout danger`,children:[(0,$.jsx)(`b`,{children:`核心风险`}),(0,$.jsx)(`span`,{children:`东南风 3.4 m/s，污染羽流向西北扩散；学校位于事故点 500 米重点保护范围内，应启动预防性疏散。`})]})]}),(0,$.jsxs)(`article`,{children:[(0,$.jsx)(`h3`,{children:`02　物理风险扩散计算`}),(0,$.jsx)(`table`,{children:(0,$.jsxs)(`tbody`,{children:[(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`风险等级`}),(0,$.jsx)(`th`,{children:`纵深`}),(0,$.jsx)(`th`,{children:`处置要求`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:`致命区`}),(0,$.jsxs)(`td`,{children:[Be.lethal,` m`]}),(0,$.jsx)(`td`,{children:`仅允许专业防化力量进入`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:`高风险区`}),(0,$.jsxs)(`td`,{children:[Be.high,` m`]}),(0,$.jsx)(`td`,{children:`立即疏散并设置硬隔离`})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:`警戒区`}),(0,$.jsxs)(`td`,{children:[Be.warning,` m`]}),(0,$.jsx)(`td`,{children:`持续监测并准备扩大疏散`})]})]})})]}),(0,$.jsxs)(`article`,{children:[(0,$.jsx)(`h3`,{children:`03　A* 消防救援路径规划`}),(0,$.jsxs)(`p`,{children:[`系统使用 674 段北京 OSM 道路构图，并通过 A* 搜索 `,C?.visited??Ve.visited,` 个道路节点。当前路线：`]}),(0,$.jsx)(`div`,{className:`report-route`,children:C?.roads.join(`　→　`)||`正在载入真实道路名称`}),(0,$.jsx)(`p`,{children:y?`已封锁 OSM 道路 ${C?.blockedRoadId??x??`自动选择路段`}，消防车已避开该路段并完成动态重规划。`:`当前道路正常通行，消防车沿最短真实路网路线行驶。`})]}),(0,$.jsxs)(`article`,{children:[(0,$.jsx)(`h3`,{children:`04　规则化协同处置指令`}),(0,$.jsxs)(`ol`,{children:[(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`b`,{children:`交通：`}),`2 分钟内封锁事故点周边 500 m 道路，建立 3.2 km 应急绿波带。`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`b`,{children:`教育：`}),`城北实验学校师生经东南侧上风向安全通道分批疏散，8 分钟完成重点人员转移。`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`b`,{children:`消防：`}),`2 辆泡沫消防车沿 OSM 路线抵达，在上风向布置水幕并实施堵漏。`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`b`,{children:`医疗：`}),`开放三级医院绿色通道，在体育中心设置临时分诊点。`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`b`,{children:`监测：`}),`下风向 200 m、500 m、1000 m 设置监测点，每 2 分钟回传浓度。`]})]})]}),(0,$.jsxs)(`div`,{className:`report-conclusion`,children:[(0,$.jsx)(`b`,{children:`联合处置结论`}),(0,$.jsx)(`p`,{children:`立即启动危化品泄漏Ⅰ级联合响应，处置优先级为：学校疏散 → 道路封控 → 泄漏源控制 → 医疗救治 → 环境复测。`}),(0,$.jsx)(`small`,{children:`本报告由视觉模型、物理模型、路径算法与规则引擎联合生成，仅用于竞赛演示；正式行动须由现场指挥员复核。`})]})]}),(0,$.jsxs)(`footer`,{className:`report-actions`,children:[(0,$.jsx)(`button`,{onClick:U,children:`↓ 下载完整报告`}),(0,$.jsx)(`button`,{onClick:()=>fe(!1),children:`关闭报告`})]})]})]})}),(0,$.jsxs)(`footer`,{children:[(0,$.jsx)(`span`,{children:`数据源：城市感知网络 · 气象局 · 应急资源库`}),(0,$.jsxs)(`strong`,{children:[(0,$.jsx)(`i`,{}),` 模型与算法引擎运行正常 · 处理延迟 128ms`]}),(0,$.jsx)(`span`,{children:`灵境哨兵 v3.1 EVIDENCE · 离线演示环境`})]})]}):(0,$.jsx)(Xp,{onAuthenticated:nt}):(0,$.jsxs)(`main`,{className:`auth-boot`,children:[(0,$.jsxs)(`div`,{className:`auth-brand-mark`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{})]}),(0,$.jsx)(`span`,{children:`安全环境初始化中`})]})}export{Zp as default};