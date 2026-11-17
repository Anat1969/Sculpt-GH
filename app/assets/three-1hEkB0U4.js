/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ys="170",Fp={ROTATE:0,DOLLY:1,PAN:2},Op={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pc=0,pa=1,mc=2,So=1,_c=2,Qe=3,gn=0,xe=1,tn=2,pn=0,ii=1,ma=2,_a=3,ga=4,gc=5,Rn=100,vc=101,xc=102,Mc=103,Sc=104,yc=200,Ec=201,Tc=202,Ac=203,ss=204,as=205,bc=206,wc=207,Rc=208,Cc=209,Pc=210,Lc=211,Dc=212,Uc=213,Ic=214,os=0,cs=1,ls=2,ai=3,hs=4,us=5,fs=6,ds=7,yo=0,Nc=1,Fc=2,mn=0,Oc=1,Bc=2,zc=3,Hc=4,Vc=5,Gc=6,kc=7,Eo=300,oi=301,ci=302,ps=303,ms=304,Mr=306,_s=1e3,Pn=1001,gs=1002,Ee=1003,Wc=1004,Oi=1005,Ge=1006,Ar=1007,Ln=1008,rn=1009,To=1010,Ao=1011,Pi=1012,Js=1013,Dn=1014,ke=1015,Li=1016,Zs=1017,Ks=1018,li=1020,bo=35902,wo=1021,Ro=1022,Oe=1023,Co=1024,Po=1025,ri=1026,hi=1027,$s=1028,js=1029,Lo=1030,Qs=1031,ta=1033,hr=33776,ur=33777,fr=33778,dr=33779,vs=35840,xs=35841,Ms=35842,Ss=35843,ys=36196,Es=37492,Ts=37496,As=37808,bs=37809,ws=37810,Rs=37811,Cs=37812,Ps=37813,Ls=37814,Ds=37815,Us=37816,Is=37817,Ns=37818,Fs=37819,Os=37820,Bs=37821,pr=36492,zs=36494,Hs=36495,Do=36283,Vs=36284,Gs=36285,ks=36286,Xc=3200,qc=3201,Uo=0,Yc=1,dn="",Re="srgb",fi="srgb-linear",Sr="linear",qt="srgb",On=7680,va=519,Jc=512,Zc=513,Kc=514,Io=515,$c=516,jc=517,Qc=518,tl=519,Ws=35044,Bp=35048,xa="300 es",en=2e3,gr=2001;class In{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mr=Math.PI/180,Xs=180/Math.PI;function _n(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[i&255]+de[i>>8&255]+de[i>>16&255]+de[i>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function el(i,t){return(i%t+t)%t}function br(i,t,e){return(1-e)*i+e*t}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const zp={DEG2RAD:mr};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,r,s,a,o,c,l){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],p=n[5],g=n[8],x=r[0],m=r[3],h=r[6],T=r[1],A=r[4],S=r[7],N=r[2],b=r[5],w=r[8];return s[0]=a*x+o*T+c*N,s[3]=a*m+o*A+c*b,s[6]=a*h+o*S+c*w,s[1]=l*x+u*T+f*N,s[4]=l*m+u*A+f*b,s[7]=l*h+u*S+f*w,s[2]=d*x+p*T+g*N,s[5]=d*m+p*A+g*b,s[8]=d*h+p*S+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,d=o*c-u*s,p=l*s-a*c,g=e*f+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(r*l-u*n)*x,t[2]=(o*n-r*a)*x,t[3]=d*x,t[4]=(u*e-r*c)*x,t[5]=(r*s-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wr.makeScale(t,e)),this}rotate(t){return this.premultiply(wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wr=new Pt;function No(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nl(){const i=vr("canvas");return i.style.display="block",i}const Ma={};function bi(i){i in Ma||(Ma[i]=!0,console.warn(i))}function il(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function rl(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sl(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Vt={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===qt&&(i.r=nn(i.r),i.g=nn(i.g),i.b=nn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===qt&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===dn?Sr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Sa=[.64,.33,.3,.6,.15,.06],ya=[.2126,.7152,.0722],Ea=[.3127,.329],Ta=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Aa=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Vt.define({[fi]:{primaries:Sa,whitePoint:Ea,transfer:Sr,toXYZ:Ta,fromXYZ:Aa,luminanceCoefficients:ya,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:Sa,whitePoint:Ea,transfer:qt,toXYZ:Ta,fromXYZ:Aa,luminanceCoefficients:ya,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}});let Bn;class al{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bn===void 0&&(Bn=vr("canvas")),Bn.width=t.width,Bn.height=t.height;const n=Bn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=nn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(nn(e[n]/255)*255):e[n]=nn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ol=0;class Fo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ol++}),this.uuid=_n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Rr(r[a].image)):s.push(Rr(r[a]))}else s=Rr(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Rr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cl=0;class me extends In{constructor(t=me.DEFAULT_IMAGE,e=me.DEFAULT_MAPPING,n=Pn,r=Pn,s=Ge,a=Ln,o=Oe,c=rn,l=me.DEFAULT_ANISOTROPY,u=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cl++}),this.uuid=_n(),this.name="",this.source=new Fo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _s:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case gs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _s:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case gs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}me.DEFAULT_IMAGE=null;me.DEFAULT_MAPPING=Eo;me.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,r=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(l+1)/2,S=(p+1)/2,N=(h+1)/2,b=(u+d)/4,w=(f+x)/4,I=(g+m)/4;return A>S&&A>N?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=b/n,s=w/n):S>N?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=b/r,s=I/r):N<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),n=w/s,r=I/s),this.set(n,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-x)/T,this.z=(d-u)/T,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ll extends In{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new me(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends ll{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Oo extends me{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hl extends me{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==d||l!==p||u!==g){let m=1-o;const h=c*d+l*p+u*g+f*x,T=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){const N=Math.sqrt(A),b=Math.atan2(N,h*T);m=Math.sin(m*b)/N,o=Math.sin(o*b)/N}const S=o*T;if(c=c*m+d*S,l=l*m+p*S,u=u*m+g*S,f=f*m+x*S,m===1-o){const N=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=N,l*=N,u*=N,f*=N}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*f+c*p-l*d,t[e+1]=c*g+u*d+l*f-o*p,t[e+2]=l*g+u*p+o*d-c*f,t[e+3]=u*g-o*f-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"YZX":this._x=d*u*f+l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f-d*p*g;break;case"XZY":this._x=d*u*f-l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ba.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ba.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),u=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cr.copy(this).projectOnVector(t),this.sub(Cr)}reflect(t){return this.sub(Cr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cr=new P,ba=new Di;class Nn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ue.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ue.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ue.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ue):Ue.fromBufferAttribute(s,a),Ue.applyMatrix4(t.matrixWorld),this.expandByPoint(Ue);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bi.copy(n.boundingBox)),Bi.applyMatrix4(t.matrixWorld),this.union(Bi)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ue),Ue.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gi),zi.subVectors(this.max,gi),zn.subVectors(t.a,gi),Hn.subVectors(t.b,gi),Vn.subVectors(t.c,gi),on.subVectors(Hn,zn),cn.subVectors(Vn,Hn),Mn.subVectors(zn,Vn);let e=[0,-on.z,on.y,0,-cn.z,cn.y,0,-Mn.z,Mn.y,on.z,0,-on.x,cn.z,0,-cn.x,Mn.z,0,-Mn.x,-on.y,on.x,0,-cn.y,cn.x,0,-Mn.y,Mn.x,0];return!Pr(e,zn,Hn,Vn,zi)||(e=[1,0,0,0,1,0,0,0,1],!Pr(e,zn,Hn,Vn,zi))?!1:(Hi.crossVectors(on,cn),e=[Hi.x,Hi.y,Hi.z],Pr(e,zn,Hn,Vn,zi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ue).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ue).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Je=[new P,new P,new P,new P,new P,new P,new P,new P],Ue=new P,Bi=new Nn,zn=new P,Hn=new P,Vn=new P,on=new P,cn=new P,Mn=new P,gi=new P,zi=new P,Hi=new P,Sn=new P;function Pr(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Sn.fromArray(i,s);const o=r.x*Math.abs(Sn.x)+r.y*Math.abs(Sn.y)+r.z*Math.abs(Sn.z),c=t.dot(Sn),l=e.dot(Sn),u=n.dot(Sn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ul=new Nn,vi=new P,Lr=new P;class Ui{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ul.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vi.subVectors(t,this.center);const e=vi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(vi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vi.copy(t.center).add(Lr)),this.expandByPoint(vi.copy(t.center).sub(Lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ze=new P,Dr=new P,Vi=new P,ln=new P,Ur=new P,Gi=new P,Ir=new P;class fl{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.origin).addScaledVector(this.direction,e),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Dr.copy(t).add(e).multiplyScalar(.5),Vi.copy(e).sub(t).normalize(),ln.copy(this.origin).sub(Dr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Vi),o=ln.dot(this.direction),c=-ln.dot(Vi),l=ln.lengthSq(),u=Math.abs(1-a*a);let f,d,p,g;if(u>0)if(f=a*c-o,d=a*o-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Dr).addScaledVector(Vi,d),p}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);const n=Ze.dot(this.direction),r=Ze.dot(Ze)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,r,s){Ur.subVectors(e,t),Gi.subVectors(n,t),Ir.crossVectors(Ur,Gi);let a=this.direction.dot(Ir),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ln.subVectors(this.origin,t);const c=o*this.direction.dot(Gi.crossVectors(ln,Gi));if(c<0)return null;const l=o*this.direction.dot(Ur.cross(ln));if(l<0||c+l>a)return null;const u=-o*ln.dot(Ir);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,n,r,s,a,o,c,l,u,f,d,p,g,x,m){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,u,f,d,p,g,x,m)}set(t,e,n,r,s,a,o,c,l,u,f,d,p,g,x,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Gn.setFromMatrixColumn(t,0).length(),s=1/Gn.setFromMatrixColumn(t,1).length(),a=1/Gn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*u,p=a*f,g=o*u,x=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-o*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,p=c*f,g=l*u,x=l*f;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,p=c*f,g=l*u,x=l*f;e[0]=d-x*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=x-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,p=a*f,g=o*u,x=o*f;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*f,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=x-d*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*f+g,e[10]=d-x*f}else if(t.order==="XZY"){const d=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+x,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dl,t,pl)}lookAt(t,e,n){const r=this.elements;return Se.subVectors(t,e),Se.lengthSq()===0&&(Se.z=1),Se.normalize(),hn.crossVectors(n,Se),hn.lengthSq()===0&&(Math.abs(n.z)===1?Se.x+=1e-4:Se.z+=1e-4,Se.normalize(),hn.crossVectors(n,Se)),hn.normalize(),ki.crossVectors(Se,hn),r[0]=hn.x,r[4]=ki.x,r[8]=Se.x,r[1]=hn.y,r[5]=ki.y,r[9]=Se.y,r[2]=hn.z,r[6]=ki.z,r[10]=Se.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],h=n[14],T=n[3],A=n[7],S=n[11],N=n[15],b=r[0],w=r[4],I=r[8],y=r[12],M=r[1],R=r[5],H=r[9],z=r[13],k=r[2],Z=r[6],W=r[10],Q=r[14],G=r[3],it=r[7],ht=r[11],Mt=r[15];return s[0]=a*b+o*M+c*k+l*G,s[4]=a*w+o*R+c*Z+l*it,s[8]=a*I+o*H+c*W+l*ht,s[12]=a*y+o*z+c*Q+l*Mt,s[1]=u*b+f*M+d*k+p*G,s[5]=u*w+f*R+d*Z+p*it,s[9]=u*I+f*H+d*W+p*ht,s[13]=u*y+f*z+d*Q+p*Mt,s[2]=g*b+x*M+m*k+h*G,s[6]=g*w+x*R+m*Z+h*it,s[10]=g*I+x*H+m*W+h*ht,s[14]=g*y+x*z+m*Q+h*Mt,s[3]=T*b+A*M+S*k+N*G,s[7]=T*w+A*R+S*Z+N*it,s[11]=T*I+A*H+S*W+N*ht,s[15]=T*y+A*z+S*Q+N*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],h=t[15];return g*(+s*c*f-r*l*f-s*o*d+n*l*d+r*o*p-n*c*p)+x*(+e*c*p-e*l*d+s*a*d-r*a*p+r*l*u-s*c*u)+m*(+e*l*f-e*o*p-s*a*f+n*a*p+s*o*u-n*l*u)+h*(-r*o*u-e*c*f+e*o*d+r*a*f-n*a*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],h=t[15],T=f*m*l-x*d*l+x*c*p-o*m*p-f*c*h+o*d*h,A=g*d*l-u*m*l-g*c*p+a*m*p+u*c*h-a*d*h,S=u*x*l-g*f*l+g*o*p-a*x*p-u*o*h+a*f*h,N=g*f*c-u*x*c-g*o*d+a*x*d+u*o*m-a*f*m,b=e*T+n*A+r*S+s*N;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=T*w,t[1]=(x*d*s-f*m*s-x*r*p+n*m*p+f*r*h-n*d*h)*w,t[2]=(o*m*s-x*c*s+x*r*l-n*m*l-o*r*h+n*c*h)*w,t[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*p-n*c*p)*w,t[4]=A*w,t[5]=(u*m*s-g*d*s+g*r*p-e*m*p-u*r*h+e*d*h)*w,t[6]=(g*c*s-a*m*s-g*r*l+e*m*l+a*r*h-e*c*h)*w,t[7]=(a*d*s-u*c*s+u*r*l-e*d*l-a*r*p+e*c*p)*w,t[8]=S*w,t[9]=(g*f*s-u*x*s-g*n*p+e*x*p+u*n*h-e*f*h)*w,t[10]=(a*x*s-g*o*s+g*n*l-e*x*l-a*n*h+e*o*h)*w,t[11]=(u*o*s-a*f*s-u*n*l+e*f*l+a*n*p-e*o*p)*w,t[12]=N*w,t[13]=(u*x*r-g*f*r+g*n*d-e*x*d-u*n*m+e*f*m)*w,t[14]=(g*o*r-a*x*r-g*n*c+e*x*c+a*n*m-e*o*m)*w,t[15]=(a*f*r-u*o*r+u*n*c-e*f*c-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,f=o+o,d=s*l,p=s*u,g=s*f,x=a*u,m=a*f,h=o*f,T=c*l,A=c*u,S=c*f,N=n.x,b=n.y,w=n.z;return r[0]=(1-(x+h))*N,r[1]=(p+S)*N,r[2]=(g-A)*N,r[3]=0,r[4]=(p-S)*b,r[5]=(1-(d+h))*b,r[6]=(m+T)*b,r[7]=0,r[8]=(g+A)*w,r[9]=(m-T)*w,r[10]=(1-(d+x))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Gn.set(r[0],r[1],r[2]).length();const a=Gn.set(r[4],r[5],r[6]).length(),o=Gn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ie.copy(this);const l=1/s,u=1/a,f=1/o;return Ie.elements[0]*=l,Ie.elements[1]*=l,Ie.elements[2]*=l,Ie.elements[4]*=u,Ie.elements[5]*=u,Ie.elements[6]*=u,Ie.elements[8]*=f,Ie.elements[9]*=f,Ie.elements[10]*=f,e.setFromRotationMatrix(Ie),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=en){const c=this.elements,l=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let p,g;if(o===en)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===gr)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=en){const c=this.elements,l=1/(e-t),u=1/(n-r),f=1/(a-s),d=(e+t)*l,p=(n+r)*u;let g,x;if(o===en)g=(a+s)*f,x=-2*f;else if(o===gr)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gn=new P,Ie=new Zt,dl=new P(0,0,0),pl=new P(1,1,1),hn=new P,ki=new P,Se=new P,wa=new Zt,Ra=new Di;class We{constructor(t=0,e=0,n=0,r=We.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-he(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(he(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}We.DEFAULT_ORDER="XYZ";class Bo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ml=0;const Ca=new P,kn=new Di,Ke=new Zt,Wi=new P,xi=new P,_l=new P,gl=new Di,Pa=new P(1,0,0),La=new P(0,1,0),Da=new P(0,0,1),Ua={type:"added"},vl={type:"removed"},Wn={type:"childadded",child:null},Nr={type:"childremoved",child:null};class ue extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ml++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new P,e=new We,n=new Di,r=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Pt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.multiply(kn),this}rotateOnWorldAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.premultiply(kn),this}rotateX(t){return this.rotateOnAxis(Pa,t)}rotateY(t){return this.rotateOnAxis(La,t)}rotateZ(t){return this.rotateOnAxis(Da,t)}translateOnAxis(t,e){return Ca.copy(t).applyQuaternion(this.quaternion),this.position.add(Ca.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pa,t)}translateY(t){return this.translateOnAxis(La,t)}translateZ(t){return this.translateOnAxis(Da,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ke.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wi.copy(t):Wi.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ke.lookAt(xi,Wi,this.up):Ke.lookAt(Wi,xi,this.up),this.quaternion.setFromRotationMatrix(Ke),r&&(Ke.extractRotation(r.matrixWorld),kn.setFromRotationMatrix(Ke),this.quaternion.premultiply(kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ua),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vl),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ke.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ke.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ke),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ua),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,t,_l),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,gl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ue.DEFAULT_UP=new P(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ne=new P,$e=new P,Fr=new P,je=new P,Xn=new P,qn=new P,Ia=new P,Or=new P,Br=new P,zr=new P,Hr=new ie,Vr=new ie,Gr=new ie;class Ce{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ne.subVectors(t,e),r.cross(Ne);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ne.subVectors(r,e),$e.subVectors(n,e),Fr.subVectors(t,e);const a=Ne.dot(Ne),o=Ne.dot($e),c=Ne.dot(Fr),l=$e.dot($e),u=$e.dot(Fr),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,je)===null?!1:je.x>=0&&je.y>=0&&je.x+je.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,je)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,je.x),c.addScaledVector(a,je.y),c.addScaledVector(o,je.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return Hr.setScalar(0),Vr.setScalar(0),Gr.setScalar(0),Hr.fromBufferAttribute(t,e),Vr.fromBufferAttribute(t,n),Gr.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Hr,s.x),a.addScaledVector(Vr,s.y),a.addScaledVector(Gr,s.z),a}static isFrontFacing(t,e,n,r){return Ne.subVectors(n,e),$e.subVectors(t,e),Ne.cross($e).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ne.subVectors(this.c,this.b),$e.subVectors(this.a,this.b),Ne.cross($e).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ce.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ce.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ce.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ce.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ce.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Xn.subVectors(r,n),qn.subVectors(s,n),Or.subVectors(t,n);const c=Xn.dot(Or),l=qn.dot(Or);if(c<=0&&l<=0)return e.copy(n);Br.subVectors(t,r);const u=Xn.dot(Br),f=qn.dot(Br);if(u>=0&&f<=u)return e.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Xn,a);zr.subVectors(t,s);const p=Xn.dot(zr),g=qn.dot(zr);if(g>=0&&p<=g)return e.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(qn,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Ia.subVectors(s,r),o=(f-u)/(f-u+(p-g)),e.copy(r).addScaledVector(Ia,o);const h=1/(m+x+d);return a=x*h,o=d*h,e.copy(n).addScaledVector(Xn,a).addScaledVector(qn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Xi={h:0,s:0,l:0};function kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Vt.workingColorSpace){if(t=el(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=kr(a,s,t+1/3),this.g=kr(a,s,t),this.b=kr(a,s,t-1/3)}return Vt.toWorkingColorSpace(this,r),this}setStyle(t,e=Re){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=zo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=nn(t.r),this.g=nn(t.g),this.b=nn(t.b),this}copyLinearToSRGB(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Vt.fromWorkingColorSpace(pe.copy(this),t),Math.round(he(pe.r*255,0,255))*65536+Math.round(he(pe.g*255,0,255))*256+Math.round(he(pe.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.fromWorkingColorSpace(pe.copy(this),e);const n=pe.r,r=pe.g,s=pe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(pe.copy(this),e),t.r=pe.r,t.g=pe.g,t.b=pe.b,t}getStyle(t=Re){Vt.fromWorkingColorSpace(pe.copy(this),t);const e=pe.r,n=pe.g,r=pe.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(un),this.setHSL(un.h+t,un.s+e,un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(Xi);const n=br(un.h,Xi.h,e),r=br(un.s,Xi.s,e),s=br(un.l,Xi.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pe=new Bt;Bt.NAMES=zo;let xl=0;class di extends In{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=_n(),this.name="",this.blending=ii,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ss,this.blendDst=as,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=On,this.stencilZFail=On,this.stencilZPass=On,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ss&&(n.blendSrc=this.blendSrc),this.blendDst!==as&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==va&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==On&&(n.stencilFail=this.stencilFail),this.stencilZFail!==On&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==On&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ho extends di{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new P,qi=new lt;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ws,this.updateRanges=[],this.gpuType=ke,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qi.fromBufferAttribute(this,e),qi.applyMatrix3(t),this.setXY(e,qi.x,qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ve(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ve(e,this.array)),e}setX(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ve(e,this.array)),e}setY(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ve(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ve(e,this.array)),e}setW(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),r=Yt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ws&&(t.usage=this.usage),t}}class Vo extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Go extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ml=0;const we=new Zt,Wr=new ue,Yn=new P,ye=new Nn,Mi=new Nn,le=new P;class Te extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ml++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(No(t)?Go:Vo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return we.makeRotationFromQuaternion(t),this.applyMatrix4(we),this}rotateX(t){return we.makeRotationX(t),this.applyMatrix4(we),this}rotateY(t){return we.makeRotationY(t),this.applyMatrix4(we),this}rotateZ(t){return we.makeRotationZ(t),this.applyMatrix4(we),this}translate(t,e,n){return we.makeTranslation(t,e,n),this.applyMatrix4(we),this}scale(t,e,n){return we.makeScale(t,e,n),this.applyMatrix4(we),this}lookAt(t){return Wr.lookAt(t),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ye.setFromBufferAttribute(s),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,ye.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,ye.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(ye.min),this.boundingBox.expandByPoint(ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(ye.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Mi.setFromBufferAttribute(o),this.morphTargetsRelative?(le.addVectors(ye.min,Mi.min),ye.expandByPoint(le),le.addVectors(ye.max,Mi.max),ye.expandByPoint(le)):(ye.expandByPoint(Mi.min),ye.expandByPoint(Mi.max))}ye.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)le.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(le));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)le.fromBufferAttribute(o,l),c&&(Yn.fromBufferAttribute(t,l),le.add(Yn)),r=Math.max(r,n.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new P,c[I]=new P;const l=new P,u=new P,f=new P,d=new lt,p=new lt,g=new lt,x=new P,m=new P;function h(I,y,M){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,y),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),u.sub(l),f.sub(l),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),o[I].add(x),o[y].add(x),o[M].add(x),c[I].add(m),c[y].add(m),c[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let I=0,y=T.length;I<y;++I){const M=T[I],R=M.start,H=M.count;for(let z=R,k=R+H;z<k;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const A=new P,S=new P,N=new P,b=new P;function w(I){N.fromBufferAttribute(r,I),b.copy(N);const y=o[I];A.copy(y),A.sub(N.multiplyScalar(N.dot(y))).normalize(),S.crossVectors(b,y);const R=S.dot(c[I])<0?-1:1;a.setXYZW(I,A.x,A.y,A.z,R)}for(let I=0,y=T.length;I<y;++I){const M=T[I],R=M.start,H=M.count;for(let z=R,k=R+H;z<k;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new P,s=new P,a=new P,o=new P,c=new P,l=new P,u=new P,f=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let h=0;h<u;h++)d[g++]=l[p++]}return new Pe(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Na=new Zt,yn=new fl,Yi=new Ui,Fa=new P,Ji=new P,Zi=new P,Ki=new P,Xr=new P,$i=new P,Oa=new P,ji=new P;class Be extends ue{constructor(t=new Te,e=new Ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){$i.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Xr.fromBufferAttribute(f,t),a?$i.addScaledVector(Xr,u):$i.addScaledVector(Xr.sub(e),u))}e.add($i)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(s),yn.copy(t.ray).recast(t.near),!(Yi.containsPoint(yn.origin)===!1&&(yn.intersectSphere(Yi,Fa)===null||yn.origin.distanceToSquared(Fa)>(t.far-t.near)**2))&&(Na.copy(s).invert(),yn.copy(t.ray).applyMatrix4(Na),!(n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=a[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,N=A;S<N;S+=3){const b=o.getX(S),w=o.getX(S+1),I=o.getX(S+2);r=Qi(this,h,t,n,l,u,f,b,w,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const T=o.getX(m),A=o.getX(m+1),S=o.getX(m+2);r=Qi(this,a,t,n,l,u,f,T,A,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=a[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,N=A;S<N;S+=3){const b=S,w=S+1,I=S+2;r=Qi(this,h,t,n,l,u,f,b,w,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const T=m,A=m+1,S=m+2;r=Qi(this,a,t,n,l,u,f,T,A,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Sl(i,t,e,n,r,s,a,o){let c;if(t.side===xe?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===gn,o),c===null)return null;ji.copy(o),ji.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ji);return l<e.near||l>e.far?null:{distance:l,point:ji.clone(),object:i}}function Qi(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Ji),i.getVertexPosition(c,Zi),i.getVertexPosition(l,Ki);const u=Sl(i,t,e,n,Ji,Zi,Ki,Oa);if(u){const f=new P;Ce.getBarycoord(Oa,Ji,Zi,Ki,f),r&&(u.uv=Ce.getInterpolatedAttribute(r,o,c,l,f,new lt)),s&&(u.uv1=Ce.getInterpolatedAttribute(s,o,c,l,f,new lt)),a&&(u.normal=Ce.getInterpolatedAttribute(a,o,c,l,f,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new P,materialIndex:0};Ce.getNormal(Ji,Zi,Ki,d.normal),u.face=d,u.barycoord=f}return u}class Ii extends Te{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(f,2));function g(x,m,h,T,A,S,N,b,w,I,y){const M=S/w,R=N/I,H=S/2,z=N/2,k=b/2,Z=w+1,W=I+1;let Q=0,G=0;const it=new P;for(let ht=0;ht<W;ht++){const Mt=ht*R-z;for(let Ut=0;Ut<Z;Ut++){const Jt=Ut*M-H;it[x]=Jt*T,it[m]=Mt*A,it[h]=k,l.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[h]=b>0?1:-1,u.push(it.x,it.y,it.z),f.push(Ut/w),f.push(1-ht/I),Q+=1}}for(let ht=0;ht<I;ht++)for(let Mt=0;Mt<w;Mt++){const Ut=d+Mt+Z*ht,Jt=d+Mt+Z*(ht+1),q=d+(Mt+1)+Z*(ht+1),tt=d+(Mt+1)+Z*ht;c.push(Ut,Jt,tt),c.push(Jt,q,tt),G+=6}o.addGroup(p,G,y),p+=G,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ge(i){const t={};for(let e=0;e<i.length;e++){const n=ui(i[e]);for(const r in n)t[r]=n[r]}return t}function yl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ko(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}const El={clone:ui,merge:ge};var Tl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Al=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends di{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tl,this.fragmentShader=Al,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=yl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wo extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=en}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fn=new P,Ba=new lt,za=new lt;class Fe extends Wo{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fn.x,fn.y).multiplyScalar(-t/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fn.x,fn.y).multiplyScalar(-t/fn.z)}getViewSize(t,e){return this.getViewBounds(t,Ba,za),e.subVectors(za,Ba)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Jn=-90,Zn=1;class bl extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fe(Jn,Zn,t,e);r.layers=this.layers,this.add(r);const s=new Fe(Jn,Zn,t,e);s.layers=this.layers,this.add(s);const a=new Fe(Jn,Zn,t,e);a.layers=this.layers,this.add(a);const o=new Fe(Jn,Zn,t,e);o.layers=this.layers,this.add(o);const c=new Fe(Jn,Zn,t,e);c.layers=this.layers,this.add(c);const l=new Fe(Jn,Zn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===en)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xo extends me{constructor(t,e,n,r,s,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:oi,super(t,e,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wl extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Xo(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xe,blending:pn});s.uniforms.tEquirect.value=e;const a=new Be(r,s),o=e.minFilter;return e.minFilter===Ln&&(e.minFilter=Ge),new bl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const qr=new P,Rl=new P,Cl=new Pt;class bn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=qr.subVectors(n,e).cross(Rl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cl.getNormalMatrix(t),r=this.coplanarPoint(qr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const En=new Ui,tr=new P;class ea{constructor(t=new bn,e=new bn,n=new bn,r=new bn,s=new bn,a=new bn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=en){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],x=r[10],m=r[11],h=r[12],T=r[13],A=r[14],S=r[15];if(n[0].setComponents(c-s,d-l,m-p,S-h).normalize(),n[1].setComponents(c+s,d+l,m+p,S+h).normalize(),n[2].setComponents(c+a,d+u,m+g,S+T).normalize(),n[3].setComponents(c-a,d-u,m-g,S-T).normalize(),n[4].setComponents(c-o,d-f,m-x,S-A).normalize(),e===en)n[5].setComponents(c+o,d+f,m+x,S+A).normalize();else if(e===gr)n[5].setComponents(o,f,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),En.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),En.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(En)}intersectsSprite(t){return En.center.set(0,0,0),En.radius=.7071067811865476,En.applyMatrix4(t.matrixWorld),this.intersectsSphere(En)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(tr.x=r.normal.x>0?t.max.x:t.min.x,tr.y=r.normal.y>0?t.max.y:t.min.y,tr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qo(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Pl(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class yr extends Te{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=t/o,d=e/c,p=[],g=[],x=[],m=[];for(let h=0;h<u;h++){const T=h*d-a;for(let A=0;A<l;A++){const S=A*f-s;g.push(S,-T,0),x.push(0,0,1),m.push(A/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let T=0;T<o;T++){const A=T+l*h,S=T+l*(h+1),N=T+1+l*(h+1),b=T+1+l*h;p.push(A,S,b),p.push(S,N,b)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ll=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dl=`#ifdef USE_ALPHAHASH
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
#endif`,Ul=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Il=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ol=`#ifdef USE_AOMAP
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
#endif`,Bl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zl=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wl=`#ifdef USE_IRIDESCENCE
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
#endif`,Xl=`#ifdef USE_BUMPMAP
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
#endif`,ql=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$l=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ql=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,th=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,eh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nh=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ah=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ch=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ph=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vh=`#ifdef USE_GRADIENTMAP
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
}`,xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yh=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Eh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,Th=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Ch=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ph=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Dh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ih=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Oh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hh=`#if defined( USE_POINTS_UV )
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
#endif`,Vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qh=`#ifdef USE_MORPHTARGETS
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
#endif`,Yh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qh=`#ifdef USE_NORMALMAP
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
#endif`,tu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ru=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,su=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,au=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ou=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,du=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,mu=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,_u=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gu=`#ifdef USE_SKINNING
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
#endif`,vu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xu=`#ifdef USE_SKINNING
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
#endif`,Mu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Su=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tu=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Au=`#ifdef USE_TRANSMISSION
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
#endif`,bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lu=`uniform sampler2D t2D;
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
}`,Du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fu=`#include <common>
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
}`,Ou=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bu=`#define DISTANCE
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
}`,zu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gu=`uniform float scale;
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
}`,ku=`uniform vec3 diffuse;
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
}`,Wu=`#include <common>
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
}`,Xu=`uniform vec3 diffuse;
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
}`,qu=`#define LAMBERT
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
}`,Yu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Ju=`#define MATCAP
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
}`,Zu=`#define MATCAP
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
}`,Ku=`#define NORMAL
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
}`,$u=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ju=`#define PHONG
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
}`,Qu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,tf=`#define STANDARD
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
}`,ef=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,nf=`#define TOON
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
}`,rf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sf=`uniform float size;
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
}`,af=`uniform vec3 diffuse;
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
}`,of=`#include <common>
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
}`,cf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,lf=`uniform float rotation;
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
}`,hf=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:Ll,alphahash_pars_fragment:Dl,alphamap_fragment:Ul,alphamap_pars_fragment:Il,alphatest_fragment:Nl,alphatest_pars_fragment:Fl,aomap_fragment:Ol,aomap_pars_fragment:Bl,batching_pars_vertex:zl,batching_vertex:Hl,begin_vertex:Vl,beginnormal_vertex:Gl,bsdfs:kl,iridescence_fragment:Wl,bumpmap_pars_fragment:Xl,clipping_planes_fragment:ql,clipping_planes_pars_fragment:Yl,clipping_planes_pars_vertex:Jl,clipping_planes_vertex:Zl,color_fragment:Kl,color_pars_fragment:$l,color_pars_vertex:jl,color_vertex:Ql,common:th,cube_uv_reflection_fragment:eh,defaultnormal_vertex:nh,displacementmap_pars_vertex:ih,displacementmap_vertex:rh,emissivemap_fragment:sh,emissivemap_pars_fragment:ah,colorspace_fragment:oh,colorspace_pars_fragment:ch,envmap_fragment:lh,envmap_common_pars_fragment:hh,envmap_pars_fragment:uh,envmap_pars_vertex:fh,envmap_physical_pars_fragment:Eh,envmap_vertex:dh,fog_vertex:ph,fog_pars_vertex:mh,fog_fragment:_h,fog_pars_fragment:gh,gradientmap_pars_fragment:vh,lightmap_pars_fragment:xh,lights_lambert_fragment:Mh,lights_lambert_pars_fragment:Sh,lights_pars_begin:yh,lights_toon_fragment:Th,lights_toon_pars_fragment:Ah,lights_phong_fragment:bh,lights_phong_pars_fragment:wh,lights_physical_fragment:Rh,lights_physical_pars_fragment:Ch,lights_fragment_begin:Ph,lights_fragment_maps:Lh,lights_fragment_end:Dh,logdepthbuf_fragment:Uh,logdepthbuf_pars_fragment:Ih,logdepthbuf_pars_vertex:Nh,logdepthbuf_vertex:Fh,map_fragment:Oh,map_pars_fragment:Bh,map_particle_fragment:zh,map_particle_pars_fragment:Hh,metalnessmap_fragment:Vh,metalnessmap_pars_fragment:Gh,morphinstance_vertex:kh,morphcolor_vertex:Wh,morphnormal_vertex:Xh,morphtarget_pars_vertex:qh,morphtarget_vertex:Yh,normal_fragment_begin:Jh,normal_fragment_maps:Zh,normal_pars_fragment:Kh,normal_pars_vertex:$h,normal_vertex:jh,normalmap_pars_fragment:Qh,clearcoat_normal_fragment_begin:tu,clearcoat_normal_fragment_maps:eu,clearcoat_pars_fragment:nu,iridescence_pars_fragment:iu,opaque_fragment:ru,packing:su,premultiplied_alpha_fragment:au,project_vertex:ou,dithering_fragment:cu,dithering_pars_fragment:lu,roughnessmap_fragment:hu,roughnessmap_pars_fragment:uu,shadowmap_pars_fragment:fu,shadowmap_pars_vertex:du,shadowmap_vertex:pu,shadowmask_pars_fragment:mu,skinbase_vertex:_u,skinning_pars_vertex:gu,skinning_vertex:vu,skinnormal_vertex:xu,specularmap_fragment:Mu,specularmap_pars_fragment:Su,tonemapping_fragment:yu,tonemapping_pars_fragment:Eu,transmission_fragment:Tu,transmission_pars_fragment:Au,uv_pars_fragment:bu,uv_pars_vertex:wu,uv_vertex:Ru,worldpos_vertex:Cu,background_vert:Pu,background_frag:Lu,backgroundCube_vert:Du,backgroundCube_frag:Uu,cube_vert:Iu,cube_frag:Nu,depth_vert:Fu,depth_frag:Ou,distanceRGBA_vert:Bu,distanceRGBA_frag:zu,equirect_vert:Hu,equirect_frag:Vu,linedashed_vert:Gu,linedashed_frag:ku,meshbasic_vert:Wu,meshbasic_frag:Xu,meshlambert_vert:qu,meshlambert_frag:Yu,meshmatcap_vert:Ju,meshmatcap_frag:Zu,meshnormal_vert:Ku,meshnormal_frag:$u,meshphong_vert:ju,meshphong_frag:Qu,meshphysical_vert:tf,meshphysical_frag:ef,meshtoon_vert:nf,meshtoon_frag:rf,points_vert:sf,points_frag:af,shadow_vert:of,shadow_frag:cf,sprite_vert:lf,sprite_frag:hf},et={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},He={basic:{uniforms:ge([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:ge([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:ge([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:ge([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:ge([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:ge([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:ge([et.points,et.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:ge([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:ge([et.common,et.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:ge([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:ge([et.sprite,et.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:ge([et.common,et.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:ge([et.lights,et.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};He.physical={uniforms:ge([He.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const er={r:0,b:0,g:0},Tn=new We,uf=new Zt;function ff(i,t,e,n,r,s,a){const o=new Bt(0);let c=s===!0?0:1,l,u,f=null,d=0,p=null;function g(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?e:t).get(A)),A}function x(T){let A=!1;const S=g(T);S===null?h(o,c):S&&S.isColor&&(h(S,1),A=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,A){const S=g(A);S&&(S.isCubeTexture||S.mapping===Mr)?(u===void 0&&(u=new Be(new Ii(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:ui(He.backgroundCube.uniforms),vertexShader:He.backgroundCube.vertexShader,fragmentShader:He.backgroundCube.fragmentShader,side:xe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Tn.copy(A.backgroundRotation),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uf.makeRotationFromEuler(Tn)),u.material.toneMapped=Vt.getTransfer(S.colorSpace)!==qt,(f!==S||d!==S.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Be(new yr(2,2),new vn({name:"BackgroundMaterial",uniforms:ui(He.background.uniforms),vertexShader:He.background.vertexShader,fragmentShader:He.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Vt.getTransfer(S.colorSpace)!==qt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=S,d=S.version,p=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function h(T,A){T.getRGB(er,ko(i)),n.buffers.color.setClear(er.r,er.g,er.b,A,a)}return{getClearColor:function(){return o},setClearColor:function(T,A=1){o.set(T),c=A,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,h(o,c)},render:x,addToRenderList:m}}function df(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(M,R,H,z,k){let Z=!1;const W=f(z,H,R);s!==W&&(s=W,l(s.object)),Z=p(M,z,H,k),Z&&g(M,z,H,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(M,R,H,z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,R,H){const z=H.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let Z=k[R.id];Z===void 0&&(Z={},k[R.id]=Z);let W=Z[z];return W===void 0&&(W=d(c()),Z[z]=W),W}function d(M){const R=[],H=[],z=[];for(let k=0;k<e;k++)R[k]=0,H[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,R,H,z){const k=s.attributes,Z=R.attributes;let W=0;const Q=H.getAttributes();for(const G in Q)if(Q[G].location>=0){const ht=k[G];let Mt=Z[G];if(Mt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),ht===void 0||ht.attribute!==Mt||Mt&&ht.data!==Mt.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function g(M,R,H,z){const k={},Z=R.attributes;let W=0;const Q=H.getAttributes();for(const G in Q)if(Q[G].location>=0){let ht=Z[G];ht===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const Mt={};Mt.attribute=ht,ht&&ht.data&&(Mt.data=ht.data),k[G]=Mt,W++}s.attributes=k,s.attributesNum=W,s.index=z}function x(){const M=s.newAttributes;for(let R=0,H=M.length;R<H;R++)M[R]=0}function m(M){h(M,0)}function h(M,R){const H=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;H[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),k[M]!==R&&(i.vertexAttribDivisor(M,R),k[M]=R)}function T(){const M=s.newAttributes,R=s.enabledAttributes;for(let H=0,z=R.length;H<z;H++)R[H]!==M[H]&&(i.disableVertexAttribArray(H),R[H]=0)}function A(M,R,H,z,k,Z,W){W===!0?i.vertexAttribIPointer(M,R,H,k,Z):i.vertexAttribPointer(M,R,H,z,k,Z)}function S(M,R,H,z){x();const k=z.attributes,Z=H.getAttributes(),W=R.defaultAttributeValues;for(const Q in Z){const G=Z[Q];if(G.location>=0){let it=k[Q];if(it===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){const ht=it.normalized,Mt=it.itemSize,Ut=t.get(it);if(Ut===void 0)continue;const Jt=Ut.buffer,q=Ut.type,tt=Ut.bytesPerElement,gt=q===i.INT||q===i.UNSIGNED_INT||it.gpuType===Js;if(it.isInterleavedBufferAttribute){const rt=it.data,Tt=rt.stride,wt=it.offset;if(rt.isInstancedInterleavedBuffer){for(let It=0;It<G.locationSize;It++)h(G.location+It,rt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let It=0;It<G.locationSize;It++)m(G.location+It);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let It=0;It<G.locationSize;It++)A(G.location+It,Mt/G.locationSize,q,ht,Tt*tt,(wt+Mt/G.locationSize*It)*tt,gt)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)h(G.location+rt,it.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let rt=0;rt<G.locationSize;rt++)A(G.location+rt,Mt/G.locationSize,q,ht,Mt*tt,Mt/G.locationSize*rt*tt,gt)}}else if(W!==void 0){const ht=W[Q];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(G.location,ht);break;case 3:i.vertexAttrib3fv(G.location,ht);break;case 4:i.vertexAttrib4fv(G.location,ht);break;default:i.vertexAttrib1fv(G.location,ht)}}}}T()}function N(){I();for(const M in n){const R=n[M];for(const H in R){const z=R[H];for(const k in z)u(z[k].object),delete z[k];delete R[H]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const H in R){const z=R[H];for(const k in z)u(z[k].object),delete z[k];delete R[H]}delete n[M.id]}function w(M){for(const R in n){const H=n[R];if(H[M.id]===void 0)continue;const z=H[M.id];for(const k in z)u(z[k].object),delete z[k];delete H[M.id]}}function I(){y(),a=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:y,dispose:N,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function pf(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function o(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,n,1)}function c(l,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function mf(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Oe&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const I=w===Li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ke&&!I)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:N,maxSamples:b}}function _f(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new bn,o=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const T=s?0:n,A=T*4;let S=h.clippingState||null;c.value=S,S=u(g,d,A,p);for(let N=0;N!==A;++N)S[N]=e[N];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const h=p+x*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<h)&&(m=new Float32Array(h));for(let A=0,S=p;A!==x;++A,S+=4)a.copy(f[A]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function gf(i){let t=new WeakMap;function e(a,o){return o===ps?a.mapping=oi:o===ms&&(a.mapping=ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ps||o===ms)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new wl(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Yo extends Wo{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ni=4,Ha=[.125,.215,.35,.446,.526,.582],Cn=20,Yr=new Yo,Va=new Bt;let Jr=null,Zr=0,Kr=0,$r=!1;const wn=(1+Math.sqrt(5))/2,Kn=1/wn,Ga=[new P(-wn,Kn,0),new P(wn,Kn,0),new P(-Kn,0,wn),new P(Kn,0,wn),new P(0,wn,-Kn),new P(0,wn,Kn),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class ka{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Jr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jr,Zr,Kr),this._renderer.xr.enabled=$r,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Li,format:Oe,colorSpace:fi,depthBuffer:!1},r=Wa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wa(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vf(s)),this._blurMaterial=xf(s,t,e)}return r}_compileMaterial(t){const e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,Yr)}_sceneToCubeUV(t,e,n,r){const o=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Va),u.toneMapping=mn,u.autoClear=!1;const p=new Ho({name:"PMREM.Background",side:xe,depthWrite:!1,depthTest:!1}),g=new Be(new Ii,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Va),x=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):T===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const A=this._cubeSize;nr(r,T*A,h>2?A:0,A,A),u.setRenderTarget(r),x&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===oi||t.mapping===ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xa());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Be(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Yr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ga[(r-s-1)%Ga.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Be(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Cn-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Cn;m>Cn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cn}`);const h=[];let T=0;for(let w=0;w<Cn;++w){const I=w/x,y=Math.exp(-I*I/2);h.push(y),w===0?T+=y:w<m&&(T+=2*y)}for(let w=0;w<h.length;w++)h[w]=h[w]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-n;const S=this._sizeLods[r],N=3*S*(r>A-ni?r-A+ni:0),b=4*(this._cubeSize-S);nr(e,N,b,3*S,2*S),c.setRenderTarget(e),c.render(f,Yr)}}function vf(i){const t=[],e=[],n=[];let r=i;const s=i-ni+1+Ha.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-ni?c=Ha[a-i+ni-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,m=2,h=1,T=new Float32Array(x*g*p),A=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let b=0;b<p;b++){const w=b%3*2/3-1,I=b>2?0:-1,y=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];T.set(y,x*g*b),A.set(d,m*g*b);const M=[b,b,b,b,b,b];S.set(M,h*g*b)}const N=new Te;N.setAttribute("position",new Pe(T,x)),N.setAttribute("uv",new Pe(A,m)),N.setAttribute("faceIndex",new Pe(S,h)),t.push(N),r>ni&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wa(i,t,e){const n=new Un(i,t,e);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function xf(i,t,e){const n=new Float32Array(Cn),r=new P(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:na(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Xa(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:na(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function qa(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function na(){return`

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
	`}function Mf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ps||c===ms,u=c===oi||c===ci;if(l||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ka(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new ka(i)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Sf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&bi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function yf(i,t,e,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,h=x.length;m<h;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,h=x.length;m<h;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(f){const d=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let A=0,S=T.length;A<S;A+=3){const N=T[A+0],b=T[A+1],w=T[A+2];d.push(N,b,b,w,w,N)}}else if(g!==void 0){const T=g.array;x=g.version;for(let A=0,S=T.length/3-1;A<S;A+=3){const N=A+0,b=A+1,w=A+2;d.push(N,b,b,w,w,N)}}else return;const m=new(No(d)?Go:Vo)(d,1);m.version=x;const h=s.get(f);h&&t.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Ef(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*a),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*a,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];e.update(m,n,1)}function f(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)l(d[h]/a,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,x,0,g);let h=0;for(let T=0;T<g;T++)h+=p[T]*x[T];e.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Tf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Af(i,t,e){const n=new WeakMap,r=new ie;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let y=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let A=0;p===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let S=o.attributes.position.count*A,N=1;S>t.maxTextureSize&&(N=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const b=new Float32Array(S*N*4*f),w=new Oo(b,S,N,f);w.type=ke,w.needsUpdate=!0;const I=A*4;for(let M=0;M<f;M++){const R=m[M],H=h[M],z=T[M],k=S*N*4*M;for(let Z=0;Z<R.count;Z++){const W=Z*I;p===!0&&(r.fromBufferAttribute(R,Z),b[k+W+0]=r.x,b[k+W+1]=r.y,b[k+W+2]=r.z,b[k+W+3]=0),g===!0&&(r.fromBufferAttribute(H,Z),b[k+W+4]=r.x,b[k+W+5]=r.y,b[k+W+6]=r.z,b[k+W+7]=0),x===!0&&(r.fromBufferAttribute(z,Z),b[k+W+8]=r.x,b[k+W+9]=r.y,b[k+W+10]=r.z,b[k+W+11]=z.itemSize===4?r.w:1)}}d={count:f,texture:w,size:new lt(S,N)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function bf(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class Jo extends me{constructor(t,e,n,r,s,a,o,c,l,u=ri){if(u!==ri&&u!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ri&&(n=Dn),n===void 0&&u===hi&&(n=li),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ee,this.minFilter=c!==void 0?c:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zo=new me,Ya=new Jo(1,1),Ko=new Oo,$o=new hl,jo=new Xo,Ja=[],Za=[],Ka=new Float32Array(16),$a=new Float32Array(9),ja=new Float32Array(4);function pi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ja[r];if(s===void 0&&(s=new Float32Array(r),Ja[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Er(i,t){let e=Za[t];e===void 0&&(e=new Int32Array(t),Za[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2fv(this.addr,t),ce(e,t)}}function Cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(oe(e,t))return;i.uniform3fv(this.addr,t),ce(e,t)}}function Pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4fv(this.addr,t),ce(e,t)}}function Lf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(oe(e,n))return;ja.set(n),i.uniformMatrix2fv(this.addr,!1,ja),ce(e,n)}}function Df(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(oe(e,n))return;$a.set(n),i.uniformMatrix3fv(this.addr,!1,$a),ce(e,n)}}function Uf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(oe(e,n))return;Ka.set(n),i.uniformMatrix4fv(this.addr,!1,Ka),ce(e,n)}}function If(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2iv(this.addr,t),ce(e,t)}}function Ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;i.uniform3iv(this.addr,t),ce(e,t)}}function Of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4iv(this.addr,t),ce(e,t)}}function Bf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2uiv(this.addr,t),ce(e,t)}}function Hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;i.uniform3uiv(this.addr,t),ce(e,t)}}function Vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4uiv(this.addr,t),ce(e,t)}}function Gf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ya.compareFunction=Io,s=Ya):s=Zo,e.setTexture2D(t||s,r)}function kf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||$o,r)}function Wf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||jo,r)}function Xf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Ko,r)}function qf(i){switch(i){case 5126:return wf;case 35664:return Rf;case 35665:return Cf;case 35666:return Pf;case 35674:return Lf;case 35675:return Df;case 35676:return Uf;case 5124:case 35670:return If;case 35667:case 35671:return Nf;case 35668:case 35672:return Ff;case 35669:case 35673:return Of;case 5125:return Bf;case 36294:return zf;case 36295:return Hf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return Gf;case 35679:case 36299:case 36307:return kf;case 35680:case 36300:case 36308:case 36293:return Wf;case 36289:case 36303:case 36311:case 36292:return Xf}}function Yf(i,t){i.uniform1fv(this.addr,t)}function Jf(i,t){const e=pi(t,this.size,2);i.uniform2fv(this.addr,e)}function Zf(i,t){const e=pi(t,this.size,3);i.uniform3fv(this.addr,e)}function Kf(i,t){const e=pi(t,this.size,4);i.uniform4fv(this.addr,e)}function $f(i,t){const e=pi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jf(i,t){const e=pi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qf(i,t){const e=pi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function td(i,t){i.uniform1iv(this.addr,t)}function ed(i,t){i.uniform2iv(this.addr,t)}function nd(i,t){i.uniform3iv(this.addr,t)}function id(i,t){i.uniform4iv(this.addr,t)}function rd(i,t){i.uniform1uiv(this.addr,t)}function sd(i,t){i.uniform2uiv(this.addr,t)}function ad(i,t){i.uniform3uiv(this.addr,t)}function od(i,t){i.uniform4uiv(this.addr,t)}function cd(i,t,e){const n=this.cache,r=t.length,s=Er(e,r);oe(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Zo,s[a])}function ld(i,t,e){const n=this.cache,r=t.length,s=Er(e,r);oe(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||$o,s[a])}function hd(i,t,e){const n=this.cache,r=t.length,s=Er(e,r);oe(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||jo,s[a])}function ud(i,t,e){const n=this.cache,r=t.length,s=Er(e,r);oe(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Ko,s[a])}function fd(i){switch(i){case 5126:return Yf;case 35664:return Jf;case 35665:return Zf;case 35666:return Kf;case 35674:return $f;case 35675:return jf;case 35676:return Qf;case 5124:case 35670:return td;case 35667:case 35671:return ed;case 35668:case 35672:return nd;case 35669:case 35673:return id;case 5125:return rd;case 36294:return sd;case 36295:return ad;case 36296:return od;case 35678:case 36198:case 36298:case 36306:case 35682:return cd;case 35679:case 36299:case 36307:return ld;case 35680:case 36300:case 36308:case 36293:return hd;case 36289:case 36303:case 36311:case 36292:return ud}}class dd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qf(e.type)}}class pd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fd(e.type)}}class md{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function Qa(i,t){i.seq.push(t),i.map[t.id]=t}function _d(i,t,e){const n=i.name,r=n.length;for(jr.lastIndex=0;;){const s=jr.exec(n),a=jr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Qa(e,l===void 0?new dd(o,i,t):new pd(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new md(o),Qa(e,f)),e=f}}}class _r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);_d(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function to(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const gd=37297;let vd=0;function xd(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const eo=new Pt;function Md(i){Vt._getMatrix(eo,Vt.workingColorSpace,i);const t=`mat3( ${eo.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(i)){case Sr:return[t,"LinearTransferOETF"];case qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function no(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+xd(i.getShaderSource(t),a)}else return r}function Sd(i,t){const e=Md(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yd(i,t){let e;switch(t){case Oc:e="Linear";break;case Bc:e="Reinhard";break;case zc:e="Cineon";break;case Hc:e="ACESFilmic";break;case Gc:e="AgX";break;case kc:e="Neutral";break;case Vc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new P;function Ed(){Vt.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Td(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wi).join(`
`)}function Ad(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function wi(i){return i!==""}function io(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ro(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wd=/^[ \t]*#include +<([\w\d./]+)>/gm;function qs(i){return i.replace(wd,Cd)}const Rd=new Map;function Cd(i,t){let e=Dt[t];if(e===void 0){const n=Rd.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qs(e)}const Pd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function so(i){return i.replace(Pd,Ld)}function Ld(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ao(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Dd(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===So?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_c?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qe&&(t="SHADOWMAP_TYPE_VSM"),t}function Ud(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oi:case ci:t="ENVMAP_TYPE_CUBE";break;case Mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Id(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ci:t="ENVMAP_MODE_REFRACTION";break}return t}function Nd(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yo:t="ENVMAP_BLENDING_MULTIPLY";break;case Nc:t="ENVMAP_BLENDING_MIX";break;case Fc:t="ENVMAP_BLENDING_ADD";break}return t}function Fd(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Od(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Dd(e),l=Ud(e),u=Id(e),f=Nd(e),d=Fd(e),p=Td(e),g=Ad(s),x=r.createProgram();let m,h,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wi).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wi).join(`
`),h.length>0&&(h+=`
`)):(m=[ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),h=[ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==mn?yd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,Sd("linearToOutputTexel",e.outputColorSpace),Ed(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wi).join(`
`)),a=qs(a),a=io(a,e),a=ro(a,e),o=qs(o),o=io(o,e),o=ro(o,e),a=so(a),o=so(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=T+m+a,S=T+h+o,N=to(r,r.VERTEX_SHADER,A),b=to(r,r.FRAGMENT_SHADER,S);r.attachShader(x,N),r.attachShader(x,b),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(R){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(N).trim(),k=r.getShaderInfoLog(b).trim();let Z=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,N,b);else{const Q=no(r,N,"vertex"),G=no(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+Q+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||k==="")&&(W=!1);W&&(R.diagnostics={runnable:Z,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:k,prefix:h}})}r.deleteShader(N),r.deleteShader(b),I=new _r(r,x),y=bd(r,x)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,gd)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vd++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=b,this}let Bd=0;class zd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hd(t),e.set(t,n)),n}}class Hd{constructor(t){this.id=Bd++,this.code=t,this.usedTimes=0}}function Vd(i,t,e,n,r,s,a){const o=new Bo,c=new zd,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,M,R,H,z){const k=H.fog,Z=z.geometry,W=y.isMeshStandardMaterial?H.environment:null,Q=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),G=Q&&Q.mapping===Mr?Q.image.height:null,it=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mt=ht!==void 0?ht.length:0;let Ut=0;Z.morphAttributes.position!==void 0&&(Ut=1),Z.morphAttributes.normal!==void 0&&(Ut=2),Z.morphAttributes.color!==void 0&&(Ut=3);let Jt,q,tt,gt;if(it){const Xt=He[it];Jt=Xt.vertexShader,q=Xt.fragmentShader}else Jt=y.vertexShader,q=y.fragmentShader,c.update(y),tt=c.getVertexShaderID(y),gt=c.getFragmentShaderID(y);const rt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),wt=z.isInstancedMesh===!0,It=z.isBatchedMesh===!0,ee=!!y.map,zt=!!y.matcap,se=!!Q,U=!!y.aoMap,Ae=!!y.lightMap,Nt=!!y.bumpMap,Ft=!!y.normalMap,yt=!!y.displacementMap,jt=!!y.emissiveMap,St=!!y.metalnessMap,E=!!y.roughnessMap,_=y.anisotropy>0,F=y.clearcoat>0,Y=y.dispersion>0,K=y.iridescence>0,X=y.sheen>0,vt=y.transmission>0,st=_&&!!y.anisotropyMap,ut=F&&!!y.clearcoatMap,Ht=F&&!!y.clearcoatNormalMap,$=F&&!!y.clearcoatRoughnessMap,ft=K&&!!y.iridescenceMap,Et=K&&!!y.iridescenceThicknessMap,At=X&&!!y.sheenColorMap,dt=X&&!!y.sheenRoughnessMap,Ot=!!y.specularMap,Lt=!!y.specularColorMap,Kt=!!y.specularIntensityMap,C=vt&&!!y.transmissionMap,nt=vt&&!!y.thicknessMap,V=!!y.gradientMap,J=!!y.alphaMap,ct=y.alphaTest>0,at=!!y.alphaHash,Rt=!!y.extensions;let ne=mn;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ne=i.toneMapping);const fe={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:Jt,fragmentShader:q,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:It,batchingColor:It&&z._colorsTexture!==null,instancing:wt,instancingColor:wt&&z.instanceColor!==null,instancingMorph:wt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:fi,alphaToCoverage:!!y.alphaToCoverage,map:ee,matcap:zt,envMap:se,envMapMode:se&&Q.mapping,envMapCubeUVHeight:G,aoMap:U,lightMap:Ae,bumpMap:Nt,normalMap:Ft,displacementMap:d&&yt,emissiveMap:jt,normalMapObjectSpace:Ft&&y.normalMapType===Yc,normalMapTangentSpace:Ft&&y.normalMapType===Uo,metalnessMap:St,roughnessMap:E,anisotropy:_,anisotropyMap:st,clearcoat:F,clearcoatMap:ut,clearcoatNormalMap:Ht,clearcoatRoughnessMap:$,dispersion:Y,iridescence:K,iridescenceMap:ft,iridescenceThicknessMap:Et,sheen:X,sheenColorMap:At,sheenRoughnessMap:dt,specularMap:Ot,specularColorMap:Lt,specularIntensityMap:Kt,transmission:vt,transmissionMap:C,thicknessMap:nt,gradientMap:V,opaque:y.transparent===!1&&y.blending===ii&&y.alphaToCoverage===!1,alphaMap:J,alphaTest:ct,alphaHash:at,combine:y.combine,mapUv:ee&&x(y.map.channel),aoMapUv:U&&x(y.aoMap.channel),lightMapUv:Ae&&x(y.lightMap.channel),bumpMapUv:Nt&&x(y.bumpMap.channel),normalMapUv:Ft&&x(y.normalMap.channel),displacementMapUv:yt&&x(y.displacementMap.channel),emissiveMapUv:jt&&x(y.emissiveMap.channel),metalnessMapUv:St&&x(y.metalnessMap.channel),roughnessMapUv:E&&x(y.roughnessMap.channel),anisotropyMapUv:st&&x(y.anisotropyMap.channel),clearcoatMapUv:ut&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:At&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:dt&&x(y.sheenRoughnessMap.channel),specularMapUv:Ot&&x(y.specularMap.channel),specularColorMapUv:Lt&&x(y.specularColorMap.channel),specularIntensityMapUv:Kt&&x(y.specularIntensityMap.channel),transmissionMapUv:C&&x(y.transmissionMap.channel),thicknessMapUv:nt&&x(y.thicknessMap.channel),alphaMapUv:J&&x(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ft||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(ee||J),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Tt,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:ee&&y.map.isVideoTexture===!0&&Vt.getTransfer(y.map.colorSpace)===qt,decodeVideoTextureEmissive:jt&&y.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(y.emissiveMap.colorSpace)===qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===tn,flipSided:y.side===xe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Rt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&y.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function h(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(T(M,y),A(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function T(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function A(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const M=g[y.type];let R;if(M){const H=He[M];R=El.clone(H.uniforms)}else R=y.uniforms;return R}function N(y,M){let R;for(let H=0,z=u.length;H<z;H++){const k=u[H];if(k.cacheKey===M){R=k,++R.usedTimes;break}}return R===void 0&&(R=new Od(i,M,y,s),u.push(R)),R}function b(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function w(y){c.remove(y)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:N,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:I}}function Gd(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function kd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function oo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function co(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,d,p,g,x,m){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=x,h.group=m),t++,h}function o(f,d,p,g,x,m){const h=a(f,d,p,g,x,m);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):e.push(h)}function c(f,d,p,g,x,m){const h=a(f,d,p,g,x,m);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):e.unshift(h)}function l(f,d){e.length>1&&e.sort(f||kd),n.length>1&&n.sort(d||oo),r.length>1&&r.sort(d||oo)}function u(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Wd(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new co,i.set(n,[a])):r>=s.length?(a=new co,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Xd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Bt};break;case"SpotLight":e={position:new P,direction:new P,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function qd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Yd=0;function Jd(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zd(i){const t=new Xd,e=qd(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const r=new P,s=new Zt,a=new Zt;function o(l){let u=0,f=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,T=0,A=0,S=0,N=0,b=0,w=0;l.sort(Jd);for(let y=0,M=l.length;y<M;y++){const R=l[y],H=R.color,z=R.intensity,k=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=H.r*z,f+=H.g*z,d+=H.b*z;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],z);w++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,G=e.get(R);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=R.shadow.matrix,T++}n.directional[p]=W,p++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(H).multiplyScalar(z),W.distance=k,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[x]=W;const Q=R.shadow;if(R.map&&(n.spotLightMap[N]=R.map,N++,Q.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[x]=Q.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=Z,S++}x++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(H).multiplyScalar(z),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const Q=R.shadow,G=e.get(R);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=R.shadow.matrix,A++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(z),W.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[h]=W,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==h||I.numDirectionalShadows!==T||I.numPointShadows!==A||I.numSpotShadows!==S||I.numSpotMaps!==N||I.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=S+N-b,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=h,I.numDirectionalShadows=T,I.numPointShadows=A,I.numSpotShadows=S,I.numSpotMaps=N,I.numLightProbes=w,n.version=Yd++)}function c(l,u){let f=0,d=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let h=0,T=l.length;h<T;h++){const A=l[h];if(A.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(A.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(A.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function lo(i){const t=new Zd(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Kd(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new lo(i),t.set(r,[o])):s>=a.length?(o=new lo(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class $d extends di{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jd extends di{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Qd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ep(i,t,e){let n=new ea;const r=new lt,s=new lt,a=new ie,o=new $d({depthPacking:qc}),c=new jd,l={},u=e.maxTextureSize,f={[gn]:xe,[xe]:gn,[tn]:tn},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Qd,fragmentShader:tp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Te;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=So;let h=this.type;this.render=function(b,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),H=i.state;H.setBlending(pn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=h!==Qe&&this.type===Qe,k=h===Qe&&this.type!==Qe;for(let Z=0,W=b.length;Z<W;Z++){const Q=b[Z],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const it=G.getFrameExtents();if(r.multiply(it),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/it.x),r.x=s.x*it.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/it.y),r.y=s.y*it.y,G.mapSize.y=s.y)),G.map===null||z===!0||k===!0){const Mt=this.type!==Qe?{minFilter:Ee,magFilter:Ee}:{};G.map!==null&&G.map.dispose(),G.map=new Un(r.x,r.y,Mt),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ht=G.getViewportCount();for(let Mt=0;Mt<ht;Mt++){const Ut=G.getViewport(Mt);a.set(s.x*Ut.x,s.y*Ut.y,s.x*Ut.z,s.y*Ut.w),H.viewport(a),G.updateMatrices(Q,Mt),n=G.getFrustum(),S(w,I,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===Qe&&T(G,I),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,R)};function T(b,w){const I=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Un(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,I,d,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,I,p,x,null)}function A(b,w,I,y){let M=null;const R=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)M=R;else if(M=I.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=M.uuid,z=w.uuid;let k=l[H];k===void 0&&(k={},l[H]=k);let Z=k[z];Z===void 0&&(Z=M.clone(),k[z]=Z,w.addEventListener("dispose",N)),M=Z}if(M.visible=w.visible,M.wireframe=w.wireframe,y===Qe?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=I}return M}function S(b,w,I,y,M){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Qe)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const z=t.update(b),k=b.material;if(Array.isArray(k)){const Z=z.groups;for(let W=0,Q=Z.length;W<Q;W++){const G=Z[W],it=k[G.materialIndex];if(it&&it.visible){const ht=A(b,it,y,M);b.onBeforeShadow(i,b,w,I,z,ht,G),i.renderBufferDirect(I,null,z,ht,b,G),b.onAfterShadow(i,b,w,I,z,ht,G)}}}else if(k.visible){const Z=A(b,k,y,M);b.onBeforeShadow(i,b,w,I,z,Z,null),i.renderBufferDirect(I,null,z,Z,b,null),b.onAfterShadow(i,b,w,I,z,Z,null)}}const H=b.children;for(let z=0,k=H.length;z<k;z++)S(H[z],w,I,y,M)}function N(b){b.target.removeEventListener("dispose",N);for(const I in l){const y=l[I],M=b.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const np={[os]:cs,[ls]:fs,[hs]:ds,[ai]:us,[cs]:os,[fs]:ls,[ds]:hs,[us]:ai};function ip(i,t){function e(){let C=!1;const nt=new ie;let V=null;const J=new ie(0,0,0,0);return{setMask:function(ct){V!==ct&&!C&&(i.colorMask(ct,ct,ct,ct),V=ct)},setLocked:function(ct){C=ct},setClear:function(ct,at,Rt,ne,fe){fe===!0&&(ct*=ne,at*=ne,Rt*=ne),nt.set(ct,at,Rt,ne),J.equals(nt)===!1&&(i.clearColor(ct,at,Rt,ne),J.copy(nt))},reset:function(){C=!1,V=null,J.set(-1,0,0,0)}}}function n(){let C=!1,nt=!1,V=null,J=null,ct=null;return{setReversed:function(at){if(nt!==at){const Rt=t.get("EXT_clip_control");nt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);const ne=ct;ct=null,this.setClear(ne)}nt=at},getReversed:function(){return nt},setTest:function(at){at?rt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(at){V!==at&&!C&&(i.depthMask(at),V=at)},setFunc:function(at){if(nt&&(at=np[at]),J!==at){switch(at){case os:i.depthFunc(i.NEVER);break;case cs:i.depthFunc(i.ALWAYS);break;case ls:i.depthFunc(i.LESS);break;case ai:i.depthFunc(i.LEQUAL);break;case hs:i.depthFunc(i.EQUAL);break;case us:i.depthFunc(i.GEQUAL);break;case fs:i.depthFunc(i.GREATER);break;case ds:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=at}},setLocked:function(at){C=at},setClear:function(at){ct!==at&&(nt&&(at=1-at),i.clearDepth(at),ct=at)},reset:function(){C=!1,V=null,J=null,ct=null,nt=!1}}}function r(){let C=!1,nt=null,V=null,J=null,ct=null,at=null,Rt=null,ne=null,fe=null;return{setTest:function(Xt){C||(Xt?rt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(Xt){nt!==Xt&&!C&&(i.stencilMask(Xt),nt=Xt)},setFunc:function(Xt,Le,qe){(V!==Xt||J!==Le||ct!==qe)&&(i.stencilFunc(Xt,Le,qe),V=Xt,J=Le,ct=qe)},setOp:function(Xt,Le,qe){(at!==Xt||Rt!==Le||ne!==qe)&&(i.stencilOp(Xt,Le,qe),at=Xt,Rt=Le,ne=qe)},setLocked:function(Xt){C=Xt},setClear:function(Xt){fe!==Xt&&(i.clearStencil(Xt),fe=Xt)},reset:function(){C=!1,nt=null,V=null,J=null,ct=null,at=null,Rt=null,ne=null,fe=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,h=null,T=null,A=null,S=null,N=null,b=null,w=new Bt(0,0,0),I=0,y=!1,M=null,R=null,H=null,z=null,k=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=Q>=2);let it=null,ht={};const Mt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),Jt=new ie().fromArray(Mt),q=new ie().fromArray(Ut);function tt(C,nt,V,J){const ct=new Uint8Array(4),at=i.createTexture();i.bindTexture(C,at),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<V;Rt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(nt+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return at}const gt={};gt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(ai),Nt(!1),Ft(pa),rt(i.CULL_FACE),U(pn);function rt(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function Tt(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function wt(C,nt){return f[C]!==nt?(i.bindFramebuffer(C,nt),f[C]=nt,C===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=nt),C===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function It(C,nt){let V=p,J=!1;if(C){V=d.get(nt),V===void 0&&(V=[],d.set(nt,V));const ct=C.textures;if(V.length!==ct.length||V[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Rt=ct.length;at<Rt;at++)V[at]=i.COLOR_ATTACHMENT0+at;V.length=ct.length,J=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,J=!0);J&&i.drawBuffers(V)}function ee(C){return g!==C?(i.useProgram(C),g=C,!0):!1}const zt={[Rn]:i.FUNC_ADD,[vc]:i.FUNC_SUBTRACT,[xc]:i.FUNC_REVERSE_SUBTRACT};zt[Mc]=i.MIN,zt[Sc]=i.MAX;const se={[yc]:i.ZERO,[Ec]:i.ONE,[Tc]:i.SRC_COLOR,[ss]:i.SRC_ALPHA,[Pc]:i.SRC_ALPHA_SATURATE,[Rc]:i.DST_COLOR,[bc]:i.DST_ALPHA,[Ac]:i.ONE_MINUS_SRC_COLOR,[as]:i.ONE_MINUS_SRC_ALPHA,[Cc]:i.ONE_MINUS_DST_COLOR,[wc]:i.ONE_MINUS_DST_ALPHA,[Lc]:i.CONSTANT_COLOR,[Dc]:i.ONE_MINUS_CONSTANT_COLOR,[Uc]:i.CONSTANT_ALPHA,[Ic]:i.ONE_MINUS_CONSTANT_ALPHA};function U(C,nt,V,J,ct,at,Rt,ne,fe,Xt){if(C===pn){x===!0&&(Tt(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),C!==gc){if(C!==m||Xt!==y){if((h!==Rn||S!==Rn)&&(i.blendEquation(i.FUNC_ADD),h=Rn,S=Rn),Xt)switch(C){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ma:i.blendFunc(i.ONE,i.ONE);break;case _a:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ga:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ma:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _a:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ga:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,A=null,N=null,b=null,w.set(0,0,0),I=0,m=C,y=Xt}return}ct=ct||nt,at=at||V,Rt=Rt||J,(nt!==h||ct!==S)&&(i.blendEquationSeparate(zt[nt],zt[ct]),h=nt,S=ct),(V!==T||J!==A||at!==N||Rt!==b)&&(i.blendFuncSeparate(se[V],se[J],se[at],se[Rt]),T=V,A=J,N=at,b=Rt),(ne.equals(w)===!1||fe!==I)&&(i.blendColor(ne.r,ne.g,ne.b,fe),w.copy(ne),I=fe),m=C,y=!1}function Ae(C,nt){C.side===tn?Tt(i.CULL_FACE):rt(i.CULL_FACE);let V=C.side===xe;nt&&(V=!V),Nt(V),C.blending===ii&&C.transparent===!1?U(pn):U(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const J=C.stencilWrite;o.setTest(J),J&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),jt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(C){M!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),M=C)}function Ft(C){C!==pc?(rt(i.CULL_FACE),C!==R&&(C===pa?i.cullFace(i.BACK):C===mc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),R=C}function yt(C){C!==H&&(W&&i.lineWidth(C),H=C)}function jt(C,nt,V){C?(rt(i.POLYGON_OFFSET_FILL),(z!==nt||k!==V)&&(i.polygonOffset(nt,V),z=nt,k=V)):Tt(i.POLYGON_OFFSET_FILL)}function St(C){C?rt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function E(C){C===void 0&&(C=i.TEXTURE0+Z-1),it!==C&&(i.activeTexture(C),it=C)}function _(C,nt,V){V===void 0&&(it===null?V=i.TEXTURE0+Z-1:V=it);let J=ht[V];J===void 0&&(J={type:void 0,texture:void 0},ht[V]=J),(J.type!==C||J.texture!==nt)&&(it!==V&&(i.activeTexture(V),it=V),i.bindTexture(C,nt||gt[C]),J.type=C,J.texture=nt)}function F(){const C=ht[it];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(C){Jt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Jt.copy(C))}function dt(C){q.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),q.copy(C))}function Ot(C,nt){let V=l.get(nt);V===void 0&&(V=new WeakMap,l.set(nt,V));let J=V.get(C);J===void 0&&(J=i.getUniformBlockIndex(nt,C.name),V.set(C,J))}function Lt(C,nt){const J=l.get(nt).get(C);c.get(nt)!==J&&(i.uniformBlockBinding(nt,J,C.__bindingPointIndex),c.set(nt,J))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},it=null,ht={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,h=null,T=null,A=null,S=null,N=null,b=null,w=new Bt(0,0,0),I=0,y=!1,M=null,R=null,H=null,z=null,k=null,Jt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:rt,disable:Tt,bindFramebuffer:wt,drawBuffers:It,useProgram:ee,setBlending:U,setMaterial:Ae,setFlipSided:Nt,setCullFace:Ft,setLineWidth:yt,setPolygonOffset:jt,setScissorTest:St,activeTexture:E,bindTexture:_,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:ft,texImage3D:Et,updateUBOMapping:Ot,uniformBlockBinding:Lt,texStorage2D:Ht,texStorage3D:$,texSubImage2D:X,texSubImage3D:vt,compressedTexSubImage2D:st,compressedTexSubImage3D:ut,scissor:At,viewport:dt,reset:Kt}}function ho(i,t,e,n){const r=rp(n);switch(e){case wo:return i*t;case Co:return i*t;case Po:return i*t*2;case $s:return i*t/r.components*r.byteLength;case js:return i*t/r.components*r.byteLength;case Lo:return i*t*2/r.components*r.byteLength;case Qs:return i*t*2/r.components*r.byteLength;case Ro:return i*t*3/r.components*r.byteLength;case Oe:return i*t*4/r.components*r.byteLength;case ta:return i*t*4/r.components*r.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fr:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xs:case Ss:return Math.max(i,16)*Math.max(t,8)/4;case vs:case Ms:return Math.max(i,8)*Math.max(t,8)/2;case ys:case Es:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ts:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case As:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ws:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rs:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cs:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ps:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ls:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ds:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Us:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Is:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ns:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fs:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Os:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bs:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pr:case zs:case Hs:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Do:case Vs:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gs:case ks:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rp(i){switch(i){case rn:case To:return{byteLength:1,components:1};case Pi:case Ao:case Li:return{byteLength:2,components:1};case Zs:case Ks:return{byteLength:2,components:4};case Dn:case Js:case ke:return{byteLength:4,components:1};case bo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function sp(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):vr("canvas")}function x(E,_,F){let Y=1;const K=St(E);if((K.width>F||K.height>F)&&(Y=F/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(Y*K.width),vt=Math.floor(Y*K.height);f===void 0&&(f=g(X,vt));const st=_?g(X,vt):f;return st.width=X,st.height=vt,st.getContext("2d").drawImage(E,0,0,X,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+vt+")."),st}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps}function h(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(E,_,F,Y,K=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=_;if(_===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),_===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),_===i.RGBA){const vt=K?Sr:Vt.getTransfer(Y);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=vt===qt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function S(E,_){let F;return E?_===null||_===Dn||_===li?F=i.DEPTH24_STENCIL8:_===ke?F=i.DEPTH32F_STENCIL8:_===Pi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Dn||_===li?F=i.DEPTH_COMPONENT24:_===ke?F=i.DEPTH_COMPONENT32F:_===Pi&&(F=i.DEPTH_COMPONENT16),F}function N(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ee&&E.minFilter!==Ge?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function b(E){const _=E.target;_.removeEventListener("dispose",b),I(_),_.isVideoTexture&&u.delete(_)}function w(E){const _=E.target;_.removeEventListener("dispose",w),M(_)}function I(E){const _=n.get(E);if(_.__webglInit===void 0)return;const F=E.source,Y=d.get(F);if(Y){const K=Y[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(E),Object.keys(Y).length===0&&d.delete(F)}n.remove(E)}function y(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const F=E.source,Y=d.get(F);delete Y[_.__cacheKey],a.memory.textures--}function M(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let K=0;K<_.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=E.textures;for(let Y=0,K=F.length;Y<K;Y++){const X=n.get(F[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(E)}let R=0;function H(){R=0}function z(){const E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function k(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function Z(E,_){const F=n.get(E);if(E.isVideoTexture&&yt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,E,_);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function W(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){q(F,E,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function Q(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){q(F,E,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function G(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){tt(F,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const it={[_s]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[gs]:i.MIRRORED_REPEAT},ht={[Ee]:i.NEAREST,[Wc]:i.NEAREST_MIPMAP_NEAREST,[Oi]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[Ar]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},Mt={[Jc]:i.NEVER,[tl]:i.ALWAYS,[Zc]:i.LESS,[Io]:i.LEQUAL,[Kc]:i.EQUAL,[Qc]:i.GEQUAL,[$c]:i.GREATER,[jc]:i.NOTEQUAL};function Ut(E,_){if(_.type===ke&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ge||_.magFilter===Ar||_.magFilter===Oi||_.magFilter===Ln||_.minFilter===Ge||_.minFilter===Ar||_.minFilter===Oi||_.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,it[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,it[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,it[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ht[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Mt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ee||_.minFilter!==Oi&&_.minFilter!==Ln||_.type===ke&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Jt(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",b));const Y=_.source;let K=d.get(Y);K===void 0&&(K={},d.set(Y,K));const X=k(_);if(X!==E.__cacheKey){K[X]===void 0&&(K[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[X].usedTimes++;const vt=K[E.__cacheKey];vt!==void 0&&(K[E.__cacheKey].usedTimes--,vt.usedTimes===0&&y(_)),E.__cacheKey=X,E.__webglTexture=K[X].texture}return F}function q(E,_,F){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const K=Jt(E,_),X=_.source;e.bindTexture(Y,E.__webglTexture,i.TEXTURE0+F);const vt=n.get(X);if(X.version!==vt.__version||K===!0){e.activeTexture(i.TEXTURE0+F);const st=Vt.getPrimaries(Vt.workingColorSpace),ut=_.colorSpace===dn?null:Vt.getPrimaries(_.colorSpace),Ht=_.colorSpace===dn||st===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let $=x(_.image,!1,r.maxTextureSize);$=jt(_,$);const ft=s.convert(_.format,_.colorSpace),Et=s.convert(_.type);let At=A(_.internalFormat,ft,Et,_.colorSpace,_.isVideoTexture);Ut(Y,_);let dt;const Ot=_.mipmaps,Lt=_.isVideoTexture!==!0,Kt=vt.__version===void 0||K===!0,C=X.dataReady,nt=N(_,$);if(_.isDepthTexture)At=S(_.format===hi,_.type),Kt&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,At,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,At,$.width,$.height,0,ft,Et,null));else if(_.isDataTexture)if(Ot.length>0){Lt&&Kt&&e.texStorage2D(i.TEXTURE_2D,nt,At,Ot[0].width,Ot[0].height);for(let V=0,J=Ot.length;V<J;V++)dt=Ot[V],Lt?C&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,dt.width,dt.height,ft,Et,dt.data):e.texImage2D(i.TEXTURE_2D,V,At,dt.width,dt.height,0,ft,Et,dt.data);_.generateMipmaps=!1}else Lt?(Kt&&e.texStorage2D(i.TEXTURE_2D,nt,At,$.width,$.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,ft,Et,$.data)):e.texImage2D(i.TEXTURE_2D,0,At,$.width,$.height,0,ft,Et,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Lt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,At,Ot[0].width,Ot[0].height,$.depth);for(let V=0,J=Ot.length;V<J;V++)if(dt=Ot[V],_.format!==Oe)if(ft!==null)if(Lt){if(C)if(_.layerUpdates.size>0){const ct=ho(dt.width,dt.height,_.format,_.type);for(const at of _.layerUpdates){const Rt=dt.data.subarray(at*ct/dt.data.BYTES_PER_ELEMENT,(at+1)*ct/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,at,dt.width,dt.height,1,ft,Rt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,dt.width,dt.height,$.depth,ft,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,At,dt.width,dt.height,$.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,dt.width,dt.height,$.depth,ft,Et,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,At,dt.width,dt.height,$.depth,0,ft,Et,dt.data)}else{Lt&&Kt&&e.texStorage2D(i.TEXTURE_2D,nt,At,Ot[0].width,Ot[0].height);for(let V=0,J=Ot.length;V<J;V++)dt=Ot[V],_.format!==Oe?ft!==null?Lt?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,At,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?C&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,dt.width,dt.height,ft,Et,dt.data):e.texImage2D(i.TEXTURE_2D,V,At,dt.width,dt.height,0,ft,Et,dt.data)}else if(_.isDataArrayTexture)if(Lt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,At,$.width,$.height,$.depth),C)if(_.layerUpdates.size>0){const V=ho($.width,$.height,_.format,_.type);for(const J of _.layerUpdates){const ct=$.data.subarray(J*V/$.data.BYTES_PER_ELEMENT,(J+1)*V/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,$.width,$.height,1,ft,Et,ct)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ft,Et,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,$.width,$.height,$.depth,0,ft,Et,$.data);else if(_.isData3DTexture)Lt?(Kt&&e.texStorage3D(i.TEXTURE_3D,nt,At,$.width,$.height,$.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ft,Et,$.data)):e.texImage3D(i.TEXTURE_3D,0,At,$.width,$.height,$.depth,0,ft,Et,$.data);else if(_.isFramebufferTexture){if(Kt)if(Lt)e.texStorage2D(i.TEXTURE_2D,nt,At,$.width,$.height);else{let V=$.width,J=$.height;for(let ct=0;ct<nt;ct++)e.texImage2D(i.TEXTURE_2D,ct,At,V,J,0,ft,Et,null),V>>=1,J>>=1}}else if(Ot.length>0){if(Lt&&Kt){const V=St(Ot[0]);e.texStorage2D(i.TEXTURE_2D,nt,At,V.width,V.height)}for(let V=0,J=Ot.length;V<J;V++)dt=Ot[V],Lt?C&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ft,Et,dt):e.texImage2D(i.TEXTURE_2D,V,At,ft,Et,dt);_.generateMipmaps=!1}else if(Lt){if(Kt){const V=St($);e.texStorage2D(i.TEXTURE_2D,nt,At,V.width,V.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Et,$)}else e.texImage2D(i.TEXTURE_2D,0,At,ft,Et,$);m(_)&&h(Y),vt.__version=X.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function tt(E,_,F){if(_.image.length!==6)return;const Y=Jt(E,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const X=n.get(K);if(K.version!==X.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);const vt=Vt.getPrimaries(Vt.workingColorSpace),st=_.colorSpace===dn?null:Vt.getPrimaries(_.colorSpace),ut=_.colorSpace===dn||vt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Ht=_.isCompressedTexture||_.image[0].isCompressedTexture,$=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let J=0;J<6;J++)!Ht&&!$?ft[J]=x(_.image[J],!0,r.maxCubemapSize):ft[J]=$?_.image[J].image:_.image[J],ft[J]=jt(_,ft[J]);const Et=ft[0],At=s.convert(_.format,_.colorSpace),dt=s.convert(_.type),Ot=A(_.internalFormat,At,dt,_.colorSpace),Lt=_.isVideoTexture!==!0,Kt=X.__version===void 0||Y===!0,C=K.dataReady;let nt=N(_,Et);Ut(i.TEXTURE_CUBE_MAP,_);let V;if(Ht){Lt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Ot,Et.width,Et.height);for(let J=0;J<6;J++){V=ft[J].mipmaps;for(let ct=0;ct<V.length;ct++){const at=V[ct];_.format!==Oe?At!==null?Lt?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,at.width,at.height,At,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,Ot,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,at.width,at.height,At,dt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,Ot,at.width,at.height,0,At,dt,at.data)}}}else{if(V=_.mipmaps,Lt&&Kt){V.length>0&&nt++;const J=St(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Ot,J.width,J.height)}for(let J=0;J<6;J++)if($){Lt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ft[J].width,ft[J].height,At,dt,ft[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ot,ft[J].width,ft[J].height,0,At,dt,ft[J].data);for(let ct=0;ct<V.length;ct++){const Rt=V[ct].image[J].image;Lt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,Rt.width,Rt.height,At,dt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,Ot,Rt.width,Rt.height,0,At,dt,Rt.data)}}else{Lt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,At,dt,ft[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ot,At,dt,ft[J]);for(let ct=0;ct<V.length;ct++){const at=V[ct];Lt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,At,dt,at.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,Ot,At,dt,at.image[J])}}}m(_)&&h(i.TEXTURE_CUBE_MAP),X.__version=K.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function gt(E,_,F,Y,K,X){const vt=s.convert(F.format,F.colorSpace),st=s.convert(F.type),ut=A(F.internalFormat,vt,st,F.colorSpace),Ht=n.get(_),$=n.get(F);if($.__renderTarget=_,!Ht.__hasExternalTextures){const ft=Math.max(1,_.width>>X),Et=Math.max(1,_.height>>X);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,X,ut,ft,Et,_.depth,0,vt,st,null):e.texImage2D(K,X,ut,ft,Et,0,vt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Ft(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,$.__webglTexture,0,Nt(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,$.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(E,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const Y=_.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,X=S(_.stencilBuffer,K),vt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=Nt(_);Ft(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,X,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,X,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,E)}else{const Y=_.textures;for(let K=0;K<Y.length;K++){const X=Y[K],vt=s.convert(X.format,X.colorSpace),st=s.convert(X.type),ut=A(X.internalFormat,vt,st,X.colorSpace),Ht=Nt(_);F&&Ft(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,ut,_.width,_.height):Ft(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ut,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);const K=Y.__webglTexture,X=Nt(_);if(_.depthTexture.format===ri)Ft(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(_.depthTexture.format===hi)Ft(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function wt(E){const _=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=Y}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Tt(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(_.__webglDepthbuffer[Y],E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),rt(_.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(E,_,F){const Y=n.get(E);_!==void 0&&gt(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&wt(E)}function ee(E){const _=E.texture,F=n.get(E),Y=n.get(_);E.addEventListener("dispose",w);const K=E.textures,X=E.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let st=0;st<6;st++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[st]=[];for(let ut=0;ut<_.mipmaps.length;ut++)F.__webglFramebuffer[st][ut]=i.createFramebuffer()}else F.__webglFramebuffer[st]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let st=0;st<_.mipmaps.length;st++)F.__webglFramebuffer[st]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(vt)for(let st=0,ut=K.length;st<ut;st++){const Ht=n.get(K[st]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Ft(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let st=0;st<K.length;st++){const ut=K[st];F.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[st]);const Ht=s.convert(ut.format,ut.colorSpace),$=s.convert(ut.type),ft=A(ut.internalFormat,Ht,$,ut.colorSpace,E.isXRRenderTarget===!0),Et=Nt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ft,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,F.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,_);for(let st=0;st<6;st++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)gt(F.__webglFramebuffer[st][ut],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut);else gt(F.__webglFramebuffer[st],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(_)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let st=0,ut=K.length;st<ut;st++){const Ht=K[st],$=n.get(Ht);e.bindTexture(i.TEXTURE_2D,$.__webglTexture),Ut(i.TEXTURE_2D,Ht),gt(F.__webglFramebuffer,E,Ht,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),m(Ht)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(st=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,Y.__webglTexture),Ut(st,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)gt(F.__webglFramebuffer[ut],E,_,i.COLOR_ATTACHMENT0,st,ut);else gt(F.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,st,0);m(_)&&h(st),e.unbindTexture()}E.depthBuffer&&wt(E)}function zt(E){const _=E.textures;for(let F=0,Y=_.length;F<Y;F++){const K=_[F];if(m(K)){const X=T(E),vt=n.get(K).__webglTexture;e.bindTexture(X,vt),h(X),e.unbindTexture()}}}const se=[],U=[];function Ae(E){if(E.samples>0){if(Ft(E)===!1){const _=E.textures,F=E.width,Y=E.height;let K=i.COLOR_BUFFER_BIT;const X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(E),st=_.length>1;if(st)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const Ht=n.get(_[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,K,i.NEAREST),c===!0&&(se.length=0,U.length=0,se.push(i.COLOR_ATTACHMENT0+ut),E.depthBuffer&&E.resolveDepthBuffer===!1&&(se.push(X),U.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const Ht=n.get(_[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Nt(E){return Math.min(r.maxSamples,E.samples)}function Ft(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function yt(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function jt(E,_){const F=E.colorSpace,Y=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==fi&&F!==dn&&(Vt.getTransfer(F)===qt?(Y!==Oe||K!==rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function St(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=It,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ft}function ap(i,t){function e(n,r=dn){let s;const a=Vt.getTransfer(r);if(n===rn)return i.UNSIGNED_BYTE;if(n===Zs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ks)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===To)return i.BYTE;if(n===Ao)return i.SHORT;if(n===Pi)return i.UNSIGNED_SHORT;if(n===Js)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===ke)return i.FLOAT;if(n===Li)return i.HALF_FLOAT;if(n===wo)return i.ALPHA;if(n===Ro)return i.RGB;if(n===Oe)return i.RGBA;if(n===Co)return i.LUMINANCE;if(n===Po)return i.LUMINANCE_ALPHA;if(n===ri)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===$s)return i.RED;if(n===js)return i.RED_INTEGER;if(n===Lo)return i.RG;if(n===Qs)return i.RG_INTEGER;if(n===ta)return i.RGBA_INTEGER;if(n===hr||n===ur||n===fr||n===dr)if(a===qt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===hr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===hr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vs||n===xs||n===Ms||n===Ss)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ms)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ss)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ys||n===Es||n===Ts)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ys||n===Es)return a===qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ts)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===As||n===bs||n===ws||n===Rs||n===Cs||n===Ps||n===Ls||n===Ds||n===Us||n===Is||n===Ns||n===Fs||n===Os||n===Bs)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===As)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bs)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ws)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rs)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cs)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ps)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ls)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ds)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Us)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Is)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ns)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fs)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Os)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bs)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pr||n===zs||n===Hs)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===pr)return a===qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===Vs||n===Gs||n===ks)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===pr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Vs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ks)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class op extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rr extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cp={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),h=this._getHandJoint(l,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const lp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hp=`
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

}`;class up{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new me,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vn({vertexShader:lp,fragmentShader:hp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new yr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fp extends In{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,g=null;const x=new up,m=e.getContextAttributes();let h=null,T=null;const A=[],S=[],N=new lt;let b=null;const w=new Fe;w.viewport=new ie;const I=new Fe;I.viewport=new ie;const y=[w,I],M=new op;let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=A[q];return tt===void 0&&(tt=new Qr,A[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=A[q];return tt===void 0&&(tt=new Qr,A[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=A[q];return tt===void 0&&(tt=new Qr,A[q]=tt),tt.getHandSpace()};function z(q){const tt=S.indexOf(q.inputSource);if(tt===-1)return;const gt=A[tt];gt!==void 0&&(gt.update(q.inputSource,q.frame,l||a),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",Z);for(let q=0;q<A.length;q++){const tt=S[q];tt!==null&&(S[q]=null,A[q].disconnect(tt))}R=null,H=null,x.reset(),t.setRenderTarget(h),p=null,d=null,f=null,r=null,T=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",k),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(N),r.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Un(p.framebufferWidth,p.framebufferHeight,{format:Oe,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,gt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?hi:ri,gt=m.stencil?li:Dn);const Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Tt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Un(d.textureWidth,d.textureHeight,{format:Oe,type:rn,depthTexture:new Jo(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Jt.setContext(r),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(q){for(let tt=0;tt<q.removed.length;tt++){const gt=q.removed[tt],rt=S.indexOf(gt);rt>=0&&(S[rt]=null,A[rt].disconnect(gt))}for(let tt=0;tt<q.added.length;tt++){const gt=q.added[tt];let rt=S.indexOf(gt);if(rt===-1){for(let wt=0;wt<A.length;wt++)if(wt>=S.length){S.push(gt),rt=wt;break}else if(S[wt]===null){S[wt]=gt,rt=wt;break}if(rt===-1)break}const Tt=A[rt];Tt&&Tt.connect(gt)}}const W=new P,Q=new P;function G(q,tt,gt){W.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(gt.matrixWorld);const rt=W.distanceTo(Q),Tt=tt.projectionMatrix.elements,wt=gt.projectionMatrix.elements,It=Tt[14]/(Tt[10]-1),ee=Tt[14]/(Tt[10]+1),zt=(Tt[9]+1)/Tt[5],se=(Tt[9]-1)/Tt[5],U=(Tt[8]-1)/Tt[0],Ae=(wt[8]+1)/wt[0],Nt=It*U,Ft=It*Ae,yt=rt/(-U+Ae),jt=yt*-U;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(jt),q.translateZ(yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const St=It+yt,E=ee+yt,_=Nt-jt,F=Ft+(rt-jt),Y=zt*ee/E*St,K=se*ee/E*St;q.projectionMatrix.makePerspective(_,F,Y,K,St,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let tt=q.near,gt=q.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),M.near=I.near=w.near=tt,M.far=I.far=w.far=gt,(R!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,H=M.far),w.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,M.layers.mask=w.layers.mask|I.layers.mask;const rt=q.parent,Tt=M.cameras;it(M,rt);for(let wt=0;wt<Tt.length;wt++)it(Tt[wt],rt);Tt.length===2?G(M,w,I):M.projectionMatrix.copy(w.projectionMatrix),ht(q,M,rt)};function ht(q,tt,gt){gt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Mt=null;function Ut(q,tt){if(u=tt.getViewerPose(l||a),g=tt,u!==null){const gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let rt=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let wt=0;wt<gt.length;wt++){const It=gt[wt];let ee=null;if(p!==null)ee=p.getViewport(It);else{const se=f.getViewSubImage(d,It);ee=se.viewport,wt===0&&(t.setRenderTargetTextures(T,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(T))}let zt=y[wt];zt===void 0&&(zt=new Fe,zt.layers.enable(wt),zt.viewport=new ie,y[wt]=zt),zt.matrix.fromArray(It.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(It.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ee.x,ee.y,ee.width,ee.height),wt===0&&(M.matrix.copy(zt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(zt)}const Tt=r.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const wt=f.getDepthInformation(gt[0]);wt&&wt.isValid&&wt.texture&&x.init(t,wt,r.renderState)}}for(let gt=0;gt<A.length;gt++){const rt=S[gt],Tt=A[gt];rt!==null&&Tt!==void 0&&Tt.update(rt,tt,l||a)}Mt&&Mt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Jt=new qo;Jt.setAnimationLoop(Ut),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}}const An=new We,dp=new Zt;function pp(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,ko(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,T,A,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,T,A):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===xe&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===xe&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const T=t.get(h),A=T.envMap,S=T.envMapRotation;A&&(m.envMap.value=A,An.copy(S),An.x*=-1,An.y*=-1,An.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),m.envMapRotation.value.setFromMatrix4(dp.makeRotationFromEuler(An)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,T,A){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*T,m.scale.value=A*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,T){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===xe&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const T=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function mp(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,A){const S=A.program;n.uniformBlockBinding(T,S)}function l(T,A){let S=r[T.id];S===void 0&&(g(T),S=u(T),r[T.id]=S,T.addEventListener("dispose",m));const N=A.program;n.updateUBOMapping(T,N);const b=t.render.frame;s[T.id]!==b&&(d(T),s[T.id]=b)}function u(T){const A=f();T.__bindingPointIndex=A;const S=i.createBuffer(),N=T.__size,b=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,N,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,S),S}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const A=r[T.id],S=T.uniforms,N=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let b=0,w=S.length;b<w;b++){const I=Array.isArray(S[b])?S[b]:[S[b]];for(let y=0,M=I.length;y<M;y++){const R=I[y];if(p(R,b,y,N)===!0){const H=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let Z=0;Z<z.length;Z++){const W=z[Z],Q=x(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+k,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,k),k+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,A,S,N){const b=T.value,w=A+"_"+S;if(N[w]===void 0)return typeof b=="number"||typeof b=="boolean"?N[w]=b:N[w]=b.clone(),!0;{const I=N[w];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return N[w]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(T){const A=T.uniforms;let S=0;const N=16;for(let w=0,I=A.length;w<I;w++){const y=Array.isArray(A[w])?A[w]:[A[w]];for(let M=0,R=y.length;M<R;M++){const H=y[M],z=Array.isArray(H.value)?H.value:[H.value];for(let k=0,Z=z.length;k<Z;k++){const W=z[k],Q=x(W),G=S%N,it=G%Q.boundary,ht=G+it;S+=it,ht!==0&&N-ht<Q.storage&&(S+=N-ht),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=Q.storage}}}const b=S%N;return b>0&&(S+=N-b),T.__size=S,T.__cache={},this}function x(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){const A=T.target;A.removeEventListener("dispose",m);const S=a.indexOf(A.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function h(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class Hp{constructor(t={}){const{canvas:e=nl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const T=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=mn,this.toneMappingExposure=1;const S=this;let N=!1,b=0,w=0,I=null,y=-1,M=null;const R=new ie,H=new ie;let z=null;const k=new Bt(0);let Z=0,W=e.width,Q=e.height,G=1,it=null,ht=null;const Mt=new ie(0,0,W,Q),Ut=new ie(0,0,W,Q);let Jt=!1;const q=new ea;let tt=!1,gt=!1;const rt=new Zt,Tt=new Zt,wt=new P,It=new ie,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function se(){return I===null?G:1}let U=n;function Ae(v,L){return e.getContext(v,L)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ys}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",at,!1),U===null){const L="webgl2";if(U=Ae(L,v),U===null)throw Ae(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Nt,Ft,yt,jt,St,E,_,F,Y,K,X,vt,st,ut,Ht,$,ft,Et,At,dt,Ot,Lt,Kt,C;function nt(){Nt=new Sf(U),Nt.init(),Lt=new ap(U,Nt),Ft=new mf(U,Nt,t,Lt),yt=new ip(U,Nt),Ft.reverseDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),jt=new Tf(U),St=new Gd,E=new sp(U,Nt,yt,St,Ft,Lt,jt),_=new gf(S),F=new Mf(S),Y=new Pl(U),Kt=new df(U,Y),K=new yf(U,Y,jt,Kt),X=new bf(U,K,Y,jt),At=new Af(U,Ft,E),$=new _f(St),vt=new Vd(S,_,F,Nt,Ft,Kt,$),st=new pp(S,St),ut=new Wd,Ht=new Kd(Nt),Et=new ff(S,_,F,yt,X,p,c),ft=new ep(S,X,Ft),C=new mp(U,jt,Ft,yt),dt=new pf(U,Nt,jt),Ot=new Ef(U,Nt,jt),jt.programs=vt.programs,S.capabilities=Ft,S.extensions=Nt,S.properties=St,S.renderLists=ut,S.shadowMap=ft,S.state=yt,S.info=jt}nt();const V=new fp(S,U);this.xr=V,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const v=Nt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Nt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(W,Q,!1))},this.getSize=function(v){return v.set(W,Q)},this.setSize=function(v,L,O=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,Q=L,e.width=Math.floor(v*G),e.height=Math.floor(L*G),O===!0&&(e.style.width=v+"px",e.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(W*G,Q*G).floor()},this.setDrawingBufferSize=function(v,L,O){W=v,Q=L,G=O,e.width=Math.floor(v*O),e.height=Math.floor(L*O),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(Mt)},this.setViewport=function(v,L,O,B){v.isVector4?Mt.set(v.x,v.y,v.z,v.w):Mt.set(v,L,O,B),yt.viewport(R.copy(Mt).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(Ut)},this.setScissor=function(v,L,O,B){v.isVector4?Ut.set(v.x,v.y,v.z,v.w):Ut.set(v,L,O,B),yt.scissor(H.copy(Ut).multiplyScalar(G).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(v){yt.setScissorTest(Jt=v)},this.setOpaqueSort=function(v){it=v},this.setTransparentSort=function(v){ht=v},this.getClearColor=function(v){return v.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(v=!0,L=!0,O=!0){let B=0;if(v){let D=!1;if(I!==null){const j=I.texture.format;D=j===ta||j===Qs||j===js}if(D){const j=I.texture.type,ot=j===rn||j===Dn||j===Pi||j===li||j===Zs||j===Ks,pt=Et.getClearColor(),mt=Et.getClearAlpha(),bt=pt.r,Ct=pt.g,_t=pt.b;ot?(g[0]=bt,g[1]=Ct,g[2]=_t,g[3]=mt,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=bt,x[1]=Ct,x[2]=_t,x[3]=mt,U.clearBufferiv(U.COLOR,0,x))}else B|=U.COLOR_BUFFER_BIT}L&&(B|=U.DEPTH_BUFFER_BIT),O&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),Ht.dispose(),St.dispose(),_.dispose(),F.dispose(),X.dispose(),Kt.dispose(),C.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",aa),V.removeEventListener("sessionend",oa),xn.stop()};function J(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const v=jt.autoReset,L=ft.enabled,O=ft.autoUpdate,B=ft.needsUpdate,D=ft.type;nt(),jt.autoReset=v,ft.enabled=L,ft.autoUpdate=O,ft.needsUpdate=B,ft.type=D}function at(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Rt(v){const L=v.target;L.removeEventListener("dispose",Rt),ne(L)}function ne(v){fe(v),St.remove(v)}function fe(v){const L=St.get(v).programs;L!==void 0&&(L.forEach(function(O){vt.releaseProgram(O)}),v.isShaderMaterial&&vt.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,O,B,D,j){L===null&&(L=ee);const ot=D.isMesh&&D.matrixWorld.determinant()<0,pt=uc(v,L,O,B,D);yt.setMaterial(B,ot);let mt=O.index,bt=1;if(B.wireframe===!0){if(mt=K.getWireframeAttribute(O),mt===void 0)return;bt=2}const Ct=O.drawRange,_t=O.attributes.position;let Gt=Ct.start*bt,$t=(Ct.start+Ct.count)*bt;j!==null&&(Gt=Math.max(Gt,j.start*bt),$t=Math.min($t,(j.start+j.count)*bt)),mt!==null?(Gt=Math.max(Gt,0),$t=Math.min($t,mt.count)):_t!=null&&(Gt=Math.max(Gt,0),$t=Math.min($t,_t.count));const Qt=$t-Gt;if(Qt<0||Qt===1/0)return;Kt.setup(D,B,pt,O,mt);let ve,kt=dt;if(mt!==null&&(ve=Y.get(mt),kt=Ot,kt.setIndex(ve)),D.isMesh)B.wireframe===!0?(yt.setLineWidth(B.wireframeLinewidth*se()),kt.setMode(U.LINES)):kt.setMode(U.TRIANGLES);else if(D.isLine){let xt=B.linewidth;xt===void 0&&(xt=1),yt.setLineWidth(xt*se()),D.isLineSegments?kt.setMode(U.LINES):D.isLineLoop?kt.setMode(U.LINE_LOOP):kt.setMode(U.LINE_STRIP)}else D.isPoints?kt.setMode(U.POINTS):D.isSprite&&kt.setMode(U.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)kt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))kt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const xt=D._multiDrawStarts,Ye=D._multiDrawCounts,Wt=D._multiDrawCount,De=mt?Y.get(mt).bytesPerElement:1,Fn=St.get(B).currentProgram.getUniforms();for(let Me=0;Me<Wt;Me++)Fn.setValue(U,"_gl_DrawID",Me),kt.render(xt[Me]/De,Ye[Me])}else if(D.isInstancedMesh)kt.renderInstances(Gt,Qt,D.count);else if(O.isInstancedBufferGeometry){const xt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ye=Math.min(O.instanceCount,xt);kt.renderInstances(Gt,Qt,Ye)}else kt.render(Gt,Qt)};function Xt(v,L,O){v.transparent===!0&&v.side===tn&&v.forceSinglePass===!1?(v.side=xe,v.needsUpdate=!0,Fi(v,L,O),v.side=gn,v.needsUpdate=!0,Fi(v,L,O),v.side=tn):Fi(v,L,O)}this.compile=function(v,L,O=null){O===null&&(O=v),h=Ht.get(O),h.init(L),A.push(h),O.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),v!==O&&v.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),h.setupLights();const B=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const j=D.material;if(j)if(Array.isArray(j))for(let ot=0;ot<j.length;ot++){const pt=j[ot];Xt(pt,O,D),B.add(pt)}else Xt(j,O,D),B.add(j)}),A.pop(),h=null,B},this.compileAsync=function(v,L,O=null){const B=this.compile(v,L,O);return new Promise(D=>{function j(){if(B.forEach(function(ot){St.get(ot).currentProgram.isReady()&&B.delete(ot)}),B.size===0){D(v);return}setTimeout(j,10)}Nt.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let Le=null;function qe(v){Le&&Le(v)}function aa(){xn.stop()}function oa(){xn.start()}const xn=new qo;xn.setAnimationLoop(qe),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(v){Le=v,V.setAnimationLoop(v),v===null?xn.stop():xn.start()},V.addEventListener("sessionstart",aa),V.addEventListener("sessionend",oa),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(L),L=V.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,L,I),h=Ht.get(v,A.length),h.init(L),A.push(h),Tt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),q.setFromProjectionMatrix(Tt),gt=this.localClippingEnabled,tt=$.init(this.clippingPlanes,gt),m=ut.get(v,T.length),m.init(),T.push(m),V.enabled===!0&&V.isPresenting===!0){const j=S.xr.getDepthSensingMesh();j!==null&&Tr(j,L,-1/0,S.sortObjects)}Tr(v,L,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(it,ht),zt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,zt&&Et.addToRenderList(m,v),this.info.render.frame++,tt===!0&&$.beginShadows();const O=h.state.shadowsArray;ft.render(O,v,L),tt===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,D=m.transmissive;if(h.setupLights(),L.isArrayCamera){const j=L.cameras;if(D.length>0)for(let ot=0,pt=j.length;ot<pt;ot++){const mt=j[ot];la(B,D,v,mt)}zt&&Et.render(v);for(let ot=0,pt=j.length;ot<pt;ot++){const mt=j[ot];ca(m,v,mt,mt.viewport)}}else D.length>0&&la(B,D,v,L),zt&&Et.render(v),ca(m,v,L);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(S,v,L),Kt.resetDefaultState(),y=-1,M=null,A.pop(),A.length>0?(h=A[A.length-1],tt===!0&&$.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Tr(v,L,O,B){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||q.intersectsSprite(v)){B&&It.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Tt);const ot=X.update(v),pt=v.material;pt.visible&&m.push(v,ot,pt,O,It.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||q.intersectsObject(v))){const ot=X.update(v),pt=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),It.copy(v.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),It.copy(ot.boundingSphere.center)),It.applyMatrix4(v.matrixWorld).applyMatrix4(Tt)),Array.isArray(pt)){const mt=ot.groups;for(let bt=0,Ct=mt.length;bt<Ct;bt++){const _t=mt[bt],Gt=pt[_t.materialIndex];Gt&&Gt.visible&&m.push(v,ot,Gt,O,It.z,_t)}}else pt.visible&&m.push(v,ot,pt,O,It.z,null)}}const j=v.children;for(let ot=0,pt=j.length;ot<pt;ot++)Tr(j[ot],L,O,B)}function ca(v,L,O,B){const D=v.opaque,j=v.transmissive,ot=v.transparent;h.setupLightsView(O),tt===!0&&$.setGlobalState(S.clippingPlanes,O),B&&yt.viewport(R.copy(B)),D.length>0&&Ni(D,L,O),j.length>0&&Ni(j,L,O),ot.length>0&&Ni(ot,L,O),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function la(v,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new Un(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?Li:rn,minFilter:Ln,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const j=h.state.transmissionRenderTarget[B.id],ot=B.viewport||R;j.setSize(ot.z,ot.w);const pt=S.getRenderTarget();S.setRenderTarget(j),S.getClearColor(k),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),zt&&Et.render(O);const mt=S.toneMapping;S.toneMapping=mn;const bt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),tt===!0&&$.setGlobalState(S.clippingPlanes,B),Ni(v,O,B),E.updateMultisampleRenderTarget(j),E.updateRenderTargetMipmap(j),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let _t=0,Gt=L.length;_t<Gt;_t++){const $t=L[_t],Qt=$t.object,ve=$t.geometry,kt=$t.material,xt=$t.group;if(kt.side===tn&&Qt.layers.test(B.layers)){const Ye=kt.side;kt.side=xe,kt.needsUpdate=!0,ha(Qt,O,B,ve,kt,xt),kt.side=Ye,kt.needsUpdate=!0,Ct=!0}}Ct===!0&&(E.updateMultisampleRenderTarget(j),E.updateRenderTargetMipmap(j))}S.setRenderTarget(pt),S.setClearColor(k,Z),bt!==void 0&&(B.viewport=bt),S.toneMapping=mt}function Ni(v,L,O){const B=L.isScene===!0?L.overrideMaterial:null;for(let D=0,j=v.length;D<j;D++){const ot=v[D],pt=ot.object,mt=ot.geometry,bt=B===null?ot.material:B,Ct=ot.group;pt.layers.test(O.layers)&&ha(pt,L,O,mt,bt,Ct)}}function ha(v,L,O,B,D,j){v.onBeforeRender(S,L,O,B,D,j),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(S,L,O,B,v,j),D.transparent===!0&&D.side===tn&&D.forceSinglePass===!1?(D.side=xe,D.needsUpdate=!0,S.renderBufferDirect(O,L,B,D,v,j),D.side=gn,D.needsUpdate=!0,S.renderBufferDirect(O,L,B,D,v,j),D.side=tn):S.renderBufferDirect(O,L,B,D,v,j),v.onAfterRender(S,L,O,B,D,j)}function Fi(v,L,O){L.isScene!==!0&&(L=ee);const B=St.get(v),D=h.state.lights,j=h.state.shadowsArray,ot=D.state.version,pt=vt.getParameters(v,D.state,j,L,O),mt=vt.getProgramCacheKey(pt);let bt=B.programs;B.environment=v.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(v.isMeshStandardMaterial?F:_).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,bt===void 0&&(v.addEventListener("dispose",Rt),bt=new Map,B.programs=bt);let Ct=bt.get(mt);if(Ct!==void 0){if(B.currentProgram===Ct&&B.lightsStateVersion===ot)return fa(v,pt),Ct}else pt.uniforms=vt.getUniforms(v),v.onBeforeCompile(pt,S),Ct=vt.acquireProgram(pt,mt),bt.set(mt,Ct),B.uniforms=pt.uniforms;const _t=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(_t.clippingPlanes=$.uniform),fa(v,pt),B.needsLights=dc(v),B.lightsStateVersion=ot,B.needsLights&&(_t.ambientLightColor.value=D.state.ambient,_t.lightProbe.value=D.state.probe,_t.directionalLights.value=D.state.directional,_t.directionalLightShadows.value=D.state.directionalShadow,_t.spotLights.value=D.state.spot,_t.spotLightShadows.value=D.state.spotShadow,_t.rectAreaLights.value=D.state.rectArea,_t.ltc_1.value=D.state.rectAreaLTC1,_t.ltc_2.value=D.state.rectAreaLTC2,_t.pointLights.value=D.state.point,_t.pointLightShadows.value=D.state.pointShadow,_t.hemisphereLights.value=D.state.hemi,_t.directionalShadowMap.value=D.state.directionalShadowMap,_t.directionalShadowMatrix.value=D.state.directionalShadowMatrix,_t.spotShadowMap.value=D.state.spotShadowMap,_t.spotLightMatrix.value=D.state.spotLightMatrix,_t.spotLightMap.value=D.state.spotLightMap,_t.pointShadowMap.value=D.state.pointShadowMap,_t.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=Ct,B.uniformsList=null,Ct}function ua(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=_r.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function fa(v,L){const O=St.get(v);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function uc(v,L,O,B,D){L.isScene!==!0&&(L=ee),E.resetTextureUnits();const j=L.fog,ot=B.isMeshStandardMaterial?L.environment:null,pt=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fi,mt=(B.isMeshStandardMaterial?F:_).get(B.envMap||ot),bt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ct=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),_t=!!O.morphAttributes.position,Gt=!!O.morphAttributes.normal,$t=!!O.morphAttributes.color;let Qt=mn;B.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Qt=S.toneMapping);const ve=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,kt=ve!==void 0?ve.length:0,xt=St.get(B),Ye=h.state.lights;if(tt===!0&&(gt===!0||v!==M)){const be=v===M&&B.id===y;$.setState(B,v,be)}let Wt=!1;B.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==Ye.state.version||xt.outputColorSpace!==pt||D.isBatchedMesh&&xt.batching===!1||!D.isBatchedMesh&&xt.batching===!0||D.isBatchedMesh&&xt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&xt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&xt.instancing===!1||!D.isInstancedMesh&&xt.instancing===!0||D.isSkinnedMesh&&xt.skinning===!1||!D.isSkinnedMesh&&xt.skinning===!0||D.isInstancedMesh&&xt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&xt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&xt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&xt.instancingMorph===!1&&D.morphTexture!==null||xt.envMap!==mt||B.fog===!0&&xt.fog!==j||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==$.numPlanes||xt.numIntersection!==$.numIntersection)||xt.vertexAlphas!==bt||xt.vertexTangents!==Ct||xt.morphTargets!==_t||xt.morphNormals!==Gt||xt.morphColors!==$t||xt.toneMapping!==Qt||xt.morphTargetsCount!==kt)&&(Wt=!0):(Wt=!0,xt.__version=B.version);let De=xt.currentProgram;Wt===!0&&(De=Fi(B,L,D));let Fn=!1,Me=!1,mi=!1;const te=De.getUniforms(),ze=xt.uniforms;if(yt.useProgram(De.program)&&(Fn=!0,Me=!0,mi=!0),B.id!==y&&(y=B.id,Me=!0),Fn||M!==v){yt.buffers.depth.getReversed()?(rt.copy(v.projectionMatrix),rl(rt),sl(rt),te.setValue(U,"projectionMatrix",rt)):te.setValue(U,"projectionMatrix",v.projectionMatrix),te.setValue(U,"viewMatrix",v.matrixWorldInverse);const sn=te.map.cameraPosition;sn!==void 0&&sn.setValue(U,wt.setFromMatrixPosition(v.matrixWorld)),Ft.logarithmicDepthBuffer&&te.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&te.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Me=!0,mi=!0)}if(D.isSkinnedMesh){te.setOptional(U,D,"bindMatrix"),te.setOptional(U,D,"bindMatrixInverse");const be=D.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),te.setValue(U,"boneTexture",be.boneTexture,E))}D.isBatchedMesh&&(te.setOptional(U,D,"batchingTexture"),te.setValue(U,"batchingTexture",D._matricesTexture,E),te.setOptional(U,D,"batchingIdTexture"),te.setValue(U,"batchingIdTexture",D._indirectTexture,E),te.setOptional(U,D,"batchingColorTexture"),D._colorsTexture!==null&&te.setValue(U,"batchingColorTexture",D._colorsTexture,E));const _i=O.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&At.update(D,O,De),(Me||xt.receiveShadow!==D.receiveShadow)&&(xt.receiveShadow=D.receiveShadow,te.setValue(U,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ze.envMap.value=mt,ze.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(ze.envMapIntensity.value=L.environmentIntensity),Me&&(te.setValue(U,"toneMappingExposure",S.toneMappingExposure),xt.needsLights&&fc(ze,mi),j&&B.fog===!0&&st.refreshFogUniforms(ze,j),st.refreshMaterialUniforms(ze,B,G,Q,h.state.transmissionRenderTarget[v.id]),_r.upload(U,ua(xt),ze,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(_r.upload(U,ua(xt),ze,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&te.setValue(U,"center",D.center),te.setValue(U,"modelViewMatrix",D.modelViewMatrix),te.setValue(U,"normalMatrix",D.normalMatrix),te.setValue(U,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const be=B.uniformsGroups;for(let sn=0,an=be.length;sn<an;sn++){const da=be[sn];C.update(da,De),C.bind(da,De)}}return De}function fc(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function dc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,L,O){St.get(v.texture).__webglTexture=L,St.get(v.depthTexture).__webglTexture=O;const B=St.get(v);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,L){const O=St.get(v);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,O=0){I=v,b=L,w=O;let B=!0,D=null,j=!1,ot=!1;if(v){const mt=St.get(v);if(mt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(U.FRAMEBUFFER,null),B=!1;else if(mt.__webglFramebuffer===void 0)E.setupRenderTarget(v);else if(mt.__hasExternalTextures)E.rebindTextures(v,St.get(v.texture).__webglTexture,St.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const _t=v.depthTexture;if(mt.__boundDepthTexture!==_t){if(_t!==null&&St.has(_t)&&(v.width!==_t.image.width||v.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(v)}}const bt=v.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(ot=!0);const Ct=St.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ct[L])?D=Ct[L][O]:D=Ct[L],j=!0):v.samples>0&&E.useMultisampledRTT(v)===!1?D=St.get(v).__webglMultisampledFramebuffer:Array.isArray(Ct)?D=Ct[O]:D=Ct,R.copy(v.viewport),H.copy(v.scissor),z=v.scissorTest}else R.copy(Mt).multiplyScalar(G).floor(),H.copy(Ut).multiplyScalar(G).floor(),z=Jt;if(yt.bindFramebuffer(U.FRAMEBUFFER,D)&&B&&yt.drawBuffers(v,D),yt.viewport(R),yt.scissor(H),yt.setScissorTest(z),j){const mt=St.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,mt.__webglTexture,O)}else if(ot){const mt=St.get(v.texture),bt=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.__webglTexture,O||0,bt)}y=-1},this.readRenderTargetPixels=function(v,L,O,B,D,j,ot){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=St.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){yt.bindFramebuffer(U.FRAMEBUFFER,pt);try{const mt=v.texture,bt=mt.format,Ct=mt.type;if(!Ft.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-B&&O>=0&&O<=v.height-D&&U.readPixels(L,O,B,D,Lt.convert(bt),Lt.convert(Ct),j)}finally{const mt=I!==null?St.get(I).__webglFramebuffer:null;yt.bindFramebuffer(U.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(v,L,O,B,D,j,ot){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=St.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){const mt=v.texture,bt=mt.format,Ct=mt.type;if(!Ft.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=v.width-B&&O>=0&&O<=v.height-D){yt.bindFramebuffer(U.FRAMEBUFFER,pt);const _t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.bufferData(U.PIXEL_PACK_BUFFER,j.byteLength,U.STREAM_READ),U.readPixels(L,O,B,D,Lt.convert(bt),Lt.convert(Ct),0);const Gt=I!==null?St.get(I).__webglFramebuffer:null;yt.bindFramebuffer(U.FRAMEBUFFER,Gt);const $t=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await il(U,$t,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,j),U.deleteBuffer(_t),U.deleteSync($t),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,L=null,O=0){v.isTexture!==!0&&(bi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,v=arguments[1]);const B=Math.pow(2,-O),D=Math.floor(v.image.width*B),j=Math.floor(v.image.height*B),ot=L!==null?L.x:0,pt=L!==null?L.y:0;E.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,O,0,0,ot,pt,D,j),yt.unbindTexture()},this.copyTextureToTexture=function(v,L,O=null,B=null,D=0){v.isTexture!==!0&&(bi("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,v=arguments[1],L=arguments[2],D=arguments[3]||0,O=null);let j,ot,pt,mt,bt,Ct,_t,Gt,$t;const Qt=v.isCompressedTexture?v.mipmaps[D]:v.image;O!==null?(j=O.max.x-O.min.x,ot=O.max.y-O.min.y,pt=O.isBox3?O.max.z-O.min.z:1,mt=O.min.x,bt=O.min.y,Ct=O.isBox3?O.min.z:0):(j=Qt.width,ot=Qt.height,pt=Qt.depth||1,mt=0,bt=0,Ct=0),B!==null?(_t=B.x,Gt=B.y,$t=B.z):(_t=0,Gt=0,$t=0);const ve=Lt.convert(L.format),kt=Lt.convert(L.type);let xt;L.isData3DTexture?(E.setTexture3D(L,0),xt=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(E.setTexture2DArray(L,0),xt=U.TEXTURE_2D_ARRAY):(E.setTexture2D(L,0),xt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const Ye=U.getParameter(U.UNPACK_ROW_LENGTH),Wt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),De=U.getParameter(U.UNPACK_SKIP_PIXELS),Fn=U.getParameter(U.UNPACK_SKIP_ROWS),Me=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Qt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,bt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ct);const mi=v.isDataArrayTexture||v.isData3DTexture,te=L.isDataArrayTexture||L.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const ze=St.get(v),_i=St.get(L),be=St.get(ze.__renderTarget),sn=St.get(_i.__renderTarget);yt.bindFramebuffer(U.READ_FRAMEBUFFER,be.__webglFramebuffer),yt.bindFramebuffer(U.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let an=0;an<pt;an++)mi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.get(v).__webglTexture,D,Ct+an),v.isDepthTexture?(te&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.get(L).__webglTexture,D,$t+an),U.blitFramebuffer(mt,bt,j,ot,_t,Gt,j,ot,U.DEPTH_BUFFER_BIT,U.NEAREST)):te?U.copyTexSubImage3D(xt,D,_t,Gt,$t+an,mt,bt,j,ot):U.copyTexSubImage2D(xt,D,_t,Gt,$t+an,mt,bt,j,ot);yt.bindFramebuffer(U.READ_FRAMEBUFFER,null),yt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else te?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(xt,D,_t,Gt,$t,j,ot,pt,ve,kt,Qt.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(xt,D,_t,Gt,$t,j,ot,pt,ve,Qt.data):U.texSubImage3D(xt,D,_t,Gt,$t,j,ot,pt,ve,kt,Qt):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,D,_t,Gt,j,ot,ve,kt,Qt.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,D,_t,Gt,Qt.width,Qt.height,ve,Qt.data):U.texSubImage2D(U.TEXTURE_2D,D,_t,Gt,j,ot,ve,kt,Qt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ye),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Wt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,De),U.pixelStorei(U.UNPACK_SKIP_ROWS,Fn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Me),D===0&&L.generateMipmaps&&U.generateMipmap(xt),yt.unbindTexture()},this.copyTextureToTexture3D=function(v,L,O=null,B=null,D=0){return v.isTexture!==!0&&(bi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,v=arguments[2],L=arguments[3],D=arguments[4]||0),bi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,L,O,B,D)},this.initRenderTarget=function(v){St.get(v).__webglFramebuffer===void 0&&E.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?E.setTextureCube(v,0):v.isData3DTexture?E.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?E.setTexture2DArray(v,0):E.setTexture2D(v,0),yt.unbindTexture()},this.resetState=function(){b=0,w=0,I=null,yt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}}class Qo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new Qo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vp extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _p{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ws,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _e=new P;class xr{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ve(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Yt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ve(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ve(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ve(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ve(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),r=Yt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gp extends di{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let $n;const Si=new P,jn=new P,Qn=new P,ti=new lt,yi=new lt,tc=new Zt,sr=new P,Ei=new P,ar=new P,uo=new lt,ts=new lt,fo=new lt;class Gp extends ue{constructor(t=new gp){if(super(),this.isSprite=!0,this.type="Sprite",$n===void 0){$n=new Te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _p(e,5);$n.setIndex([0,1,2,0,2,3]),$n.setAttribute("position",new xr(n,3,0,!1)),$n.setAttribute("uv",new xr(n,2,3,!1))}this.geometry=$n,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jn.setFromMatrixScale(this.matrixWorld),tc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jn.multiplyScalar(-Qn.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;or(sr.set(-.5,-.5,0),Qn,a,jn,r,s),or(Ei.set(.5,-.5,0),Qn,a,jn,r,s),or(ar.set(.5,.5,0),Qn,a,jn,r,s),uo.set(0,0),ts.set(1,0),fo.set(1,1);let o=t.ray.intersectTriangle(sr,Ei,ar,!1,Si);if(o===null&&(or(Ei.set(-.5,.5,0),Qn,a,jn,r,s),ts.set(0,1),o=t.ray.intersectTriangle(sr,ar,Ei,!1,Si),o===null))return;const c=t.ray.origin.distanceTo(Si);c<t.near||c>t.far||e.push({distance:c,point:Si.clone(),uv:Ce.getInterpolation(Si,sr,Ei,ar,uo,ts,fo,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function or(i,t,e,n,r,s){ti.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(yi.x=s*ti.x-r*ti.y,yi.y=r*ti.x+s*ti.y):yi.copy(ti),i.copy(t),i.x+=yi.x,i.y+=yi.y,i.applyMatrix4(tc)}class vp extends me{constructor(t=null,e=1,n=1,r,s,a,o,c,l=Ee,u=Ee,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class po extends Pe{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ei=new Zt,mo=new Zt,cr=[],_o=new Nn,xp=new Zt,Ti=new Be,Ai=new Ui;class kp extends Be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new po(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,xp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ei),_o.copy(t.boundingBox).applyMatrix4(ei),this.boundingBox.union(_o)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ei),Ai.copy(t.boundingSphere).applyMatrix4(ei),this.boundingSphere.union(Ai)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Ti.geometry=this.geometry,Ti.material=this.material,Ti.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ai.copy(this.boundingSphere),Ai.applyMatrix4(n),t.ray.intersectsSphere(Ai)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ei),mo.multiplyMatrices(n,ei),Ti.matrixWorld=mo,Ti.raycast(t,cr);for(let a=0,o=cr.length;a<o;a++){const c=cr[a];c.instanceId=s,c.object=this,e.push(c)}cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new vp(new Float32Array(r*this.count),r,this.count,$s,ke));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Wp extends me{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xe{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,p=(a-u)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new lt:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,r=[],s=[],a=[],o=new P,c=new Zt;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(he(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(he(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ia extends Xe{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new lt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*f+this.aX,l=d*f+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mp extends ia{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ra(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,f){let d=(a-s)/l-(o-s)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+f)+(c-o)/f;d*=u,p*=u,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const lr=new P,es=new ra,ns=new ra,is=new ra;class Sp extends Xe{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new P){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(lr.subVectors(r[0],r[1]).add(r[0]),l=lr);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(lr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=lr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),es.initNonuniformCatmullRom(l.x,f.x,d.x,u.x,g,x,m),ns.initNonuniformCatmullRom(l.y,f.y,d.y,u.y,g,x,m),is.initNonuniformCatmullRom(l.z,f.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(es.initCatmullRom(l.x,f.x,d.x,u.x,this.tension),ns.initCatmullRom(l.y,f.y,d.y,u.y,this.tension),is.initCatmullRom(l.z,f.z,d.z,u.z,this.tension));return n.set(es.calc(c),ns.calc(c),is.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new P().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function go(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function yp(i,t){const e=1-i;return e*e*t}function Ep(i,t){return 2*(1-i)*i*t}function Tp(i,t){return i*i*t}function Ri(i,t,e,n){return yp(i,t)+Ep(i,e)+Tp(i,n)}function Ap(i,t){const e=1-i;return e*e*e*t}function bp(i,t){const e=1-i;return 3*e*e*i*t}function wp(i,t){return 3*(1-i)*i*i*t}function Rp(i,t){return i*i*i*t}function Ci(i,t,e,n,r){return Ap(i,t)+bp(i,e)+wp(i,n)+Rp(i,r)}class ec extends Xe{constructor(t=new lt,e=new lt,n=new lt,r=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new lt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ci(t,r.x,s.x,a.x,o.x),Ci(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cp extends Xe{constructor(t=new P,e=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new P){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ci(t,r.x,s.x,a.x,o.x),Ci(t,r.y,s.y,a.y,o.y),Ci(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nc extends Xe{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pp extends Xe{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ic extends Xe{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Ri(t,r.x,s.x,a.x),Ri(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lp extends Xe{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Ri(t,r.x,s.x,a.x),Ri(t,r.y,s.y,a.y),Ri(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rc extends Xe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(go(o,c.x,l.x,u.x,f.x),go(o,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new lt().fromArray(r))}return this}}var vo=Object.freeze({__proto__:null,ArcCurve:Mp,CatmullRomCurve3:Sp,CubicBezierCurve:ec,CubicBezierCurve3:Cp,EllipseCurve:ia,LineCurve:nc,LineCurve3:Pp,QuadraticBezierCurve:ic,QuadraticBezierCurve3:Lp,SplineCurve:rc});class Dp extends Xe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new vo[r.type]().fromJSON(r))}return this}}class Up extends Dp{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new nc(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new ic(this.currentPoint.clone(),new lt(t,e),new lt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new ec(this.currentPoint.clone(),new lt(t,e),new lt(n,r),new lt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new rc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new ia(t,e,n,r,s,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class sa extends Te{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=he(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],u=1/e,f=new P,d=new lt,p=new P,g=new P,x=new P;let m=0,h=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,h=t[T+1].y-t[T].y,p.x=h*1,p.y=-m,p.z=h*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[T+1].x-t[T].x,h=t[T+1].y-t[T].y,p.x=h*1,p.y=-m,p.z=h*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(g)}for(let T=0;T<=e;T++){const A=n+T*u*r,S=Math.sin(A),N=Math.cos(A);for(let b=0;b<=t.length-1;b++){f.x=t[b].x*S,f.y=t[b].y,f.z=t[b].x*N,a.push(f.x,f.y,f.z),d.x=T/e,d.y=b/(t.length-1),o.push(d.x,d.y);const w=c[3*b+0]*S,I=c[3*b+1],y=c[3*b+0]*N;l.push(w,I,y)}}for(let T=0;T<e;T++)for(let A=0;A<t.length-1;A++){const S=A+T*t.length,N=S,b=S+t.length,w=S+t.length+1,I=S+1;s.push(N,b,I),s.push(w,I,b)}this.setIndex(s),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.points,t.segments,t.phiStart,t.phiLength)}}class sc extends sa{constructor(t=1,e=1,n=4,r=8){const s=new Up;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new sc(t.radius,t.length,t.capSegments,t.radialSegments)}}class ac extends Te{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new P,u=new lt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const p=n+f/e*r;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ac(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oc extends Te{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let g=0;const x=[],m=n/2;let h=0;T(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(p,2));function T(){const S=new P,N=new P;let b=0;const w=(e-t)/n;for(let I=0;I<=s;I++){const y=[],M=I/s,R=M*(e-t)+t;for(let H=0;H<=r;H++){const z=H/r,k=z*c+o,Z=Math.sin(k),W=Math.cos(k);N.x=R*Z,N.y=-M*n+m,N.z=R*W,f.push(N.x,N.y,N.z),S.set(Z,w,W).normalize(),d.push(S.x,S.y,S.z),p.push(z,1-M),y.push(g++)}x.push(y)}for(let I=0;I<r;I++)for(let y=0;y<s;y++){const M=x[y][I],R=x[y+1][I],H=x[y+1][I+1],z=x[y][I+1];(t>0||y!==0)&&(u.push(M,R,z),b+=3),(e>0||y!==s-1)&&(u.push(R,H,z),b+=3)}l.addGroup(h,b,0),h+=b}function A(S){const N=g,b=new lt,w=new P;let I=0;const y=S===!0?t:e,M=S===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const R=g;for(let H=0;H<=r;H++){const k=H/r*c+o,Z=Math.cos(k),W=Math.sin(k);w.x=y*W,w.y=m*M,w.z=y*Z,f.push(w.x,w.y,w.z),d.push(0,M,0),b.x=Z*.5+.5,b.y=W*.5*M+.5,p.push(b.x,b.y),g++}for(let H=0;H<r;H++){const z=N+H,k=R+H;S===!0?u.push(k,k+1,z):u.push(k+1,k,z),I+=3}l.addGroup(h,I,S===!0?1:2),h+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cc extends Te{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let f=t;const d=(e-t)/r,p=new P,g=new lt;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){const h=s+m/n*a;p.x=f*Math.cos(h),p.y=f*Math.sin(h),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}f+=d}for(let x=0;x<r;x++){const m=x*(n+1);for(let h=0;h<n;h++){const T=h+m,A=T,S=T+n+1,N=T+n+2,b=T+1;o.push(A,S,b),o.push(S,N,b)}}this.setIndex(o),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class lc extends Te{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new P,d=new P,p=[],g=[],x=[],m=[];for(let h=0;h<=n;h++){const T=[],A=h/n;let S=0;h===0&&a===0?S=.5/e:h===n&&c===Math.PI&&(S=-.5/e);for(let N=0;N<=e;N++){const b=N/e;f.x=-t*Math.cos(r+b*s)*Math.sin(a+A*o),f.y=t*Math.cos(a+A*o),f.z=t*Math.sin(r+b*s)*Math.sin(a+A*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(b+S,1-A),T.push(l++)}u.push(T)}for(let h=0;h<n;h++)for(let T=0;T<e;T++){const A=u[h][T+1],S=u[h][T],N=u[h+1][T],b=u[h+1][T+1];(h!==0||a>0)&&p.push(A,S,b),(h!==n-1||c<Math.PI)&&p.push(S,N,b)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xp extends di{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hc extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class qp extends hc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const rs=new Zt,xo=new P,Mo=new P;class Ip{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xo.setFromMatrixPosition(t.matrixWorld),e.position.copy(xo),Mo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mo),e.updateMatrixWorld(),rs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Np extends Ip{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yp extends hc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new Np}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jp{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(he(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zp extends In{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ys}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ys);export{Hc as A,Te as B,Zp as C,Bp as D,We as E,Qo as F,rr as G,qp as H,kp as I,Fp as M,bn as P,Di as Q,fl as R,Jp as S,Op as T,P as V,Hp as W,lt as a,zp as b,Be as c,Pe as d,Ui as e,Bt as f,_c as g,Re as h,Vp as i,Fe as j,Yp as k,ac as l,Xp as m,Zt as n,cc as o,Ho as p,yr as q,oc as r,sc as s,lc as t,Wp as u,Gp as v,gp as w};
