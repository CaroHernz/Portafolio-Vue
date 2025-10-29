const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Inicio-DPlcPjXC.js","./Hero-BmFua2WY.js","./Hero-BiNETkZV.css","./Skills-DdcqK1dt.js","./Skills--5SPh92H.css","./Inicio-DsUq3PQa.css","./Proyectos-C1GE-Ffi.js","./Proyectos-V4Hj9KyT.css","./Experiencia-DqJpkuvq.js","./Experiencia-CKl55yHs.css","./Contacto-C90Wl0UU.js","./SobreMi-CgtBCGv6.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ga(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ie={},Es=[],Ft=()=>{},Vu=()=>!1,ki=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ma=t=>t.startsWith("onUpdate:"),Ue=Object.assign,_a=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jd=Object.prototype.hasOwnProperty,_e=(t,e)=>Jd.call(t,e),ne=Array.isArray,ws=t=>Di(t)==="[object Map]",ju=t=>Di(t)==="[object Set]",se=t=>typeof t=="function",Re=t=>typeof t=="string",Ln=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Bu=t=>(Te(t)||se(t))&&se(t.then)&&se(t.catch),Hu=Object.prototype.toString,Di=t=>Hu.call(t),Xd=t=>Di(t).slice(8,-1),$u=t=>Di(t)==="[object Object]",ya=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,sr=ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Li=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Yd=/-\w/g,yt=Li(t=>t.replace(Yd,e=>e.slice(1).toUpperCase())),Qd=/\B([A-Z])/g,as=Li(t=>t.replace(Qd,"-$1").toLowerCase()),xi=Li(t=>t.charAt(0).toUpperCase()+t.slice(1)),fo=Li(t=>t?`on${xi(t)}`:""),An=(t,e)=>!Object.is(t,e),ti=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Wu=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Bo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Zd=t=>{const e=Re(t)?Number(t):NaN;return isNaN(e)?t:e};let $c;const Mi=()=>$c||($c=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function va(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Re(s)?sp(s):va(s);if(r)for(const o in r)e[o]=r[o]}return e}else if(Re(t)||Te(t))return t}const ep=/;(?![^(]*\))/g,tp=/:([^]+)/,np=/\/\*[^]*?\*\//g;function sp(t){const e={};return t.replace(np,"").split(ep).forEach(n=>{if(n){const s=n.split(tp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ft(t){let e="";if(Re(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const s=ft(t[n]);s&&(e+=s+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const rp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ip=ga(rp);function Gu(t){return!!t||t===""}const Ku=t=>!!(t&&t.__v_isRef===!0),zn=t=>Re(t)?t:t==null?"":ne(t)||Te(t)&&(t.toString===Hu||!se(t.toString))?Ku(t)?zn(t.value):JSON.stringify(t,qu,2):String(t),qu=(t,e)=>Ku(e)?qu(t,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],o)=>(n[po(s,o)+" =>"]=r,n),{})}:ju(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>po(n))}:Ln(e)?po(e):Te(e)&&!ne(e)&&!$u(e)?String(e):e,po=(t,e="")=>{var n;return Ln(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ke;class zu{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ke,!e&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ke;try{return Ke=this,e()}finally{Ke=n}}}on(){++this._on===1&&(this.prevScope=Ke,Ke=this)}off(){this._on>0&&--this._on===0&&(Ke=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ju(t){return new zu(t)}function Xu(){return Ke}function op(t,e=!1){Ke&&Ke.cleanups.push(t)}let be;const go=new WeakSet;class Yu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ke&&Ke.active&&Ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,go.has(this)&&(go.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wc(this),eh(this);const e=be,n=St;be=this,St=!0;try{return this.fn()}finally{th(this),be=e,St=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ia(e);this.deps=this.depsTail=void 0,Wc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?go.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ho(this)&&this.run()}get dirty(){return Ho(this)}}let Qu=0,rr,ir;function Zu(t,e=!1){if(t.flags|=8,e){t.next=ir,ir=t;return}t.next=rr,rr=t}function Ea(){Qu++}function wa(){if(--Qu>0)return;if(ir){let e=ir;for(ir=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;rr;){let e=rr;for(rr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function eh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function th(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Ia(s),ap(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Ho(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(nh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function nh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===_r)||(t.globalVersion=_r,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ho(t))))return;t.flags|=2;const e=t.dep,n=be,s=St;be=t,St=!0;try{eh(t);const r=t.fn(t._value);(e.version===0||An(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{be=n,St=s,th(t),t.flags&=-3}}function Ia(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Ia(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ap(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let St=!0;const sh=[];function tn(){sh.push(St),St=!1}function nn(){const t=sh.pop();St=t===void 0?!0:t}function Wc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=be;be=void 0;try{e()}finally{be=n}}}let _r=0;class cp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ba{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!be||!St||be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==be)n=this.activeLink=new cp(be,this),be.deps?(n.prevDep=be.depsTail,be.depsTail.nextDep=n,be.depsTail=n):be.deps=be.depsTail=n,rh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=be.depsTail,n.nextDep=void 0,be.depsTail.nextDep=n,be.depsTail=n,be.deps===n&&(be.deps=s)}return n}trigger(e){this.version++,_r++,this.notify(e)}notify(e){Ea();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{wa()}}}function rh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)rh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const fi=new WeakMap,Yn=Symbol(""),$o=Symbol(""),yr=Symbol("");function qe(t,e,n){if(St&&be){let s=fi.get(t);s||fi.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new ba),r.map=s,r.key=n),r.track()}}function Jt(t,e,n,s,r,o){const a=fi.get(t);if(!a){_r++;return}const l=u=>{u&&u.trigger()};if(Ea(),e==="clear")a.forEach(l);else{const u=ne(t),f=u&&ya(n);if(u&&n==="length"){const d=Number(s);a.forEach((g,v)=>{(v==="length"||v===yr||!Ln(v)&&v>=d)&&l(g)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(yr)),e){case"add":u?f&&l(a.get("length")):(l(a.get(Yn)),ws(t)&&l(a.get($o)));break;case"delete":u||(l(a.get(Yn)),ws(t)&&l(a.get($o)));break;case"set":ws(t)&&l(a.get(Yn));break}}wa()}function lp(t,e){const n=fi.get(t);return n&&n.get(e)}function ps(t){const e=ge(t);return e===t?e:(qe(e,"iterate",yr),mt(t)?e:e.map(He))}function Ui(t){return qe(t=ge(t),"iterate",yr),t}const up={__proto__:null,[Symbol.iterator](){return mo(this,Symbol.iterator,He)},concat(...t){return ps(this).concat(...t.map(e=>ne(e)?ps(e):e))},entries(){return mo(this,"entries",t=>(t[1]=He(t[1]),t))},every(t,e){return $t(this,"every",t,e,void 0,arguments)},filter(t,e){return $t(this,"filter",t,e,n=>n.map(He),arguments)},find(t,e){return $t(this,"find",t,e,He,arguments)},findIndex(t,e){return $t(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $t(this,"findLast",t,e,He,arguments)},findLastIndex(t,e){return $t(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $t(this,"forEach",t,e,void 0,arguments)},includes(...t){return _o(this,"includes",t)},indexOf(...t){return _o(this,"indexOf",t)},join(t){return ps(this).join(t)},lastIndexOf(...t){return _o(this,"lastIndexOf",t)},map(t,e){return $t(this,"map",t,e,void 0,arguments)},pop(){return Xs(this,"pop")},push(...t){return Xs(this,"push",t)},reduce(t,...e){return Gc(this,"reduce",t,e)},reduceRight(t,...e){return Gc(this,"reduceRight",t,e)},shift(){return Xs(this,"shift")},some(t,e){return $t(this,"some",t,e,void 0,arguments)},splice(...t){return Xs(this,"splice",t)},toReversed(){return ps(this).toReversed()},toSorted(t){return ps(this).toSorted(t)},toSpliced(...t){return ps(this).toSpliced(...t)},unshift(...t){return Xs(this,"unshift",t)},values(){return mo(this,"values",He)}};function mo(t,e,n){const s=Ui(t),r=s[e]();return s!==t&&!mt(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=n(o.value)),o}),r}const hp=Array.prototype;function $t(t,e,n,s,r,o){const a=Ui(t),l=a!==t&&!mt(t),u=a[e];if(u!==hp[e]){const g=u.apply(t,o);return l?He(g):g}let f=n;a!==t&&(l?f=function(g,v){return n.call(this,He(g),v,t)}:n.length>2&&(f=function(g,v){return n.call(this,g,v,t)}));const d=u.call(a,f,s);return l&&r?r(d):d}function Gc(t,e,n,s){const r=Ui(t);let o=n;return r!==t&&(mt(t)?n.length>3&&(o=function(a,l,u){return n.call(this,a,l,u,t)}):o=function(a,l,u){return n.call(this,a,He(l),u,t)}),r[e](o,...s)}function _o(t,e,n){const s=ge(t);qe(s,"iterate",yr);const r=s[e](...n);return(r===-1||r===!1)&&Aa(n[0])?(n[0]=ge(n[0]),s[e](...n)):r}function Xs(t,e,n=[]){tn(),Ea();const s=ge(t)[e].apply(t,n);return wa(),nn(),s}const fp=ga("__proto__,__v_isRef,__isVue"),ih=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ln));function dp(t){Ln(t)||(t=String(t));const e=ge(this);return qe(e,"has",t),e.hasOwnProperty(t)}class oh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(r?o?bp:uh:o?lh:ch).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=ne(e);if(!r){let u;if(a&&(u=up[n]))return u;if(n==="hasOwnProperty")return dp}const l=Reflect.get(e,n,Oe(e)?e:s);if((Ln(n)?ih.has(n):fp(n))||(r||qe(e,"get",n),o))return l;if(Oe(l)){const u=a&&ya(n)?l:l.value;return r&&Te(u)?Go(u):u}return Te(l)?r?Go(l):Rr(l):l}}class ah extends oh{constructor(e=!1){super(!1,e)}set(e,n,s,r){let o=e[n];if(!this._isShallow){const u=Nn(o);if(!mt(s)&&!Nn(s)&&(o=ge(o),s=ge(s)),!ne(e)&&Oe(o)&&!Oe(s))return u||(o.value=s),!0}const a=ne(e)&&ya(n)?Number(n)<e.length:_e(e,n),l=Reflect.set(e,n,s,Oe(e)?e:r);return e===ge(r)&&(a?An(s,o)&&Jt(e,"set",n,s):Jt(e,"add",n,s)),l}deleteProperty(e,n){const s=_e(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Jt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ln(n)||!ih.has(n))&&qe(e,"has",n),s}ownKeys(e){return qe(e,"iterate",ne(e)?"length":Yn),Reflect.ownKeys(e)}}class pp extends oh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gp=new ah,mp=new pp,_p=new ah(!0);const Wo=t=>t,zr=t=>Reflect.getPrototypeOf(t);function yp(t,e,n){return function(...s){const r=this.__v_raw,o=ge(r),a=ws(o),l=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,f=r[t](...s),d=n?Wo:e?di:He;return!e&&qe(o,"iterate",u?$o:Yn),{next(){const{value:g,done:v}=f.next();return v?{value:g,done:v}:{value:l?[d(g[0]),d(g[1])]:d(g),done:v}},[Symbol.iterator](){return this}}}}function Jr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function vp(t,e){const n={get(r){const o=this.__v_raw,a=ge(o),l=ge(r);t||(An(r,l)&&qe(a,"get",r),qe(a,"get",l));const{has:u}=zr(a),f=e?Wo:t?di:He;if(u.call(a,r))return f(o.get(r));if(u.call(a,l))return f(o.get(l));o!==a&&o.get(r)},get size(){const r=this.__v_raw;return!t&&qe(ge(r),"iterate",Yn),r.size},has(r){const o=this.__v_raw,a=ge(o),l=ge(r);return t||(An(r,l)&&qe(a,"has",r),qe(a,"has",l)),r===l?o.has(r):o.has(r)||o.has(l)},forEach(r,o){const a=this,l=a.__v_raw,u=ge(l),f=e?Wo:t?di:He;return!t&&qe(u,"iterate",Yn),l.forEach((d,g)=>r.call(o,f(d),f(g),a))}};return Ue(n,t?{add:Jr("add"),set:Jr("set"),delete:Jr("delete"),clear:Jr("clear")}:{add(r){!e&&!mt(r)&&!Nn(r)&&(r=ge(r));const o=ge(this);return zr(o).has.call(o,r)||(o.add(r),Jt(o,"add",r,r)),this},set(r,o){!e&&!mt(o)&&!Nn(o)&&(o=ge(o));const a=ge(this),{has:l,get:u}=zr(a);let f=l.call(a,r);f||(r=ge(r),f=l.call(a,r));const d=u.call(a,r);return a.set(r,o),f?An(o,d)&&Jt(a,"set",r,o):Jt(a,"add",r,o),this},delete(r){const o=ge(this),{has:a,get:l}=zr(o);let u=a.call(o,r);u||(r=ge(r),u=a.call(o,r)),l&&l.call(o,r);const f=o.delete(r);return u&&Jt(o,"delete",r,void 0),f},clear(){const r=ge(this),o=r.size!==0,a=r.clear();return o&&Jt(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=yp(r,t,e)}),n}function Ta(t,e){const n=vp(t,e);return(s,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(_e(n,r)&&r in s?n:s,r,o)}const Ep={get:Ta(!1,!1)},wp={get:Ta(!1,!0)},Ip={get:Ta(!0,!1)};const ch=new WeakMap,lh=new WeakMap,uh=new WeakMap,bp=new WeakMap;function Tp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sp(t){return t.__v_skip||!Object.isExtensible(t)?0:Tp(Xd(t))}function Rr(t){return Nn(t)?t:Sa(t,!1,gp,Ep,ch)}function hh(t){return Sa(t,!1,_p,wp,lh)}function Go(t){return Sa(t,!0,mp,Ip,uh)}function Sa(t,e,n,s,r){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=Sp(t);if(o===0)return t;const a=r.get(t);if(a)return a;const l=new Proxy(t,o===2?s:n);return r.set(t,l),l}function Cn(t){return Nn(t)?Cn(t.__v_raw):!!(t&&t.__v_isReactive)}function Nn(t){return!!(t&&t.__v_isReadonly)}function mt(t){return!!(t&&t.__v_isShallow)}function Aa(t){return t?!!t.__v_raw:!1}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function Ca(t){return!_e(t,"__v_skip")&&Object.isExtensible(t)&&Wu(t,"__v_skip",!0),t}const He=t=>Te(t)?Rr(t):t,di=t=>Te(t)?Go(t):t;function Oe(t){return t?t.__v_isRef===!0:!1}function Me(t){return fh(t,!1)}function Ap(t){return fh(t,!0)}function fh(t,e){return Oe(t)?t:new Cp(t,e)}class Cp{constructor(e,n){this.dep=new ba,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ge(e),this._value=n?e:He(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||mt(e)||Nn(e);e=s?e:ge(e),An(e,n)&&(this._rawValue=e,this._value=s?e:He(e),this.dep.trigger())}}function Be(t){return Oe(t)?t.value:t}const Rp={get:(t,e,n)=>e==="__v_raw"?t:Be(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Oe(r)&&!Oe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function dh(t){return Cn(t)?t:new Proxy(t,Rp)}function Pp(t){const e=ne(t)?new Array(t.length):{};for(const n in t)e[n]=Np(t,n);return e}class Op{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return lp(ge(this._object),this._key)}}function Np(t,e,n){const s=t[e];return Oe(s)?s:new Op(t,e,n)}class kp{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ba(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_r-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Zu(this,!0),!0}get value(){const e=this.dep.track();return nh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Dp(t,e,n=!1){let s,r;return se(t)?s=t:(s=t.get,r=t.set),new kp(s,r,n)}const Xr={},pi=new WeakMap;let Wn;function Lp(t,e=!1,n=Wn){if(n){let s=pi.get(n);s||pi.set(n,s=[]),s.push(t)}}function xp(t,e,n=Ie){const{immediate:s,deep:r,once:o,scheduler:a,augmentJob:l,call:u}=n,f=G=>r?G:mt(G)||r===!1||r===0?Xt(G,1):Xt(G);let d,g,v,A,O=!1,x=!1;if(Oe(t)?(g=()=>t.value,O=mt(t)):Cn(t)?(g=()=>f(t),O=!0):ne(t)?(x=!0,O=t.some(G=>Cn(G)||mt(G)),g=()=>t.map(G=>{if(Oe(G))return G.value;if(Cn(G))return f(G);if(se(G))return u?u(G,2):G()})):se(t)?e?g=u?()=>u(t,2):t:g=()=>{if(v){tn();try{v()}finally{nn()}}const G=Wn;Wn=d;try{return u?u(t,3,[A]):t(A)}finally{Wn=G}}:g=Ft,e&&r){const G=g,X=r===!0?1/0:r;g=()=>Xt(G(),X)}const j=Xu(),H=()=>{d.stop(),j&&j.active&&_a(j.effects,d)};if(o&&e){const G=e;e=(...X)=>{G(...X),H()}}let V=x?new Array(t.length).fill(Xr):Xr;const q=G=>{if(!(!(d.flags&1)||!d.dirty&&!G))if(e){const X=d.run();if(r||O||(x?X.some((ie,S)=>An(ie,V[S])):An(X,V))){v&&v();const ie=Wn;Wn=d;try{const S=[X,V===Xr?void 0:x&&V[0]===Xr?[]:V,A];V=X,u?u(e,3,S):e(...S)}finally{Wn=ie}}}else d.run()};return l&&l(q),d=new Yu(g),d.scheduler=a?()=>a(q,!1):q,A=G=>Lp(G,!1,d),v=d.onStop=()=>{const G=pi.get(d);if(G){if(u)u(G,4);else for(const X of G)X();pi.delete(d)}},e?s?q(!0):V=d.run():a?a(q.bind(null,!0),!0):d.run(),H.pause=d.pause.bind(d),H.resume=d.resume.bind(d),H.stop=H,H}function Xt(t,e=1/0,n){if(e<=0||!Te(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Oe(t))Xt(t.value,e,n);else if(ne(t))for(let s=0;s<t.length;s++)Xt(t[s],e,n);else if(ju(t)||ws(t))t.forEach(s=>{Xt(s,e,n)});else if($u(t)){for(const s in t)Xt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Xt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pr(t,e,n,s){try{return s?t(...s):t()}catch(r){Fi(r,e,n)}}function At(t,e,n,s){if(se(t)){const r=Pr(t,e,n,s);return r&&Bu(r)&&r.catch(o=>{Fi(o,e,n)}),r}if(ne(t)){const r=[];for(let o=0;o<t.length;o++)r.push(At(t[o],e,n,s));return r}}function Fi(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ie;if(e){let l=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](t,u,f)===!1)return}l=l.parent}if(o){tn(),Pr(o,null,10,[t,u,f]),nn();return}}Mp(t,n,r,s,a)}function Mp(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Ze=[];let Dt=-1;const Is=[];let vn=null,ms=0;const ph=Promise.resolve();let gi=null;function Ra(t){const e=gi||ph;return t?e.then(this?t.bind(this):t):e}function Up(t){let e=Dt+1,n=Ze.length;for(;e<n;){const s=e+n>>>1,r=Ze[s],o=vr(r);o<t||o===t&&r.flags&2?e=s+1:n=s}return e}function Pa(t){if(!(t.flags&1)){const e=vr(t),n=Ze[Ze.length-1];!n||!(t.flags&2)&&e>=vr(n)?Ze.push(t):Ze.splice(Up(e),0,t),t.flags|=1,gh()}}function gh(){gi||(gi=ph.then(_h))}function Fp(t){ne(t)?Is.push(...t):vn&&t.id===-1?vn.splice(ms+1,0,t):t.flags&1||(Is.push(t),t.flags|=1),gh()}function Kc(t,e,n=Dt+1){for(;n<Ze.length;n++){const s=Ze[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ze.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function mh(t){if(Is.length){const e=[...new Set(Is)].sort((n,s)=>vr(n)-vr(s));if(Is.length=0,vn){vn.push(...e);return}for(vn=e,ms=0;ms<vn.length;ms++){const n=vn[ms];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vn=null,ms=0}}const vr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _h(t){try{for(Dt=0;Dt<Ze.length;Dt++){const e=Ze[Dt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Pr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dt<Ze.length;Dt++){const e=Ze[Dt];e&&(e.flags&=-2)}Dt=-1,Ze.length=0,mh(),gi=null,(Ze.length||Is.length)&&_h()}}let at=null,yh=null;function mi(t){const e=at;return at=t,yh=t&&t.type.__scopeId||null,e}function _i(t,e=at,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ei(-1);const o=mi(e);let a;try{a=t(...r)}finally{mi(o),s._d&&Ei(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function yo(t,e){if(at===null)return t;const n=$i(at),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,u=Ie]=e[r];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Xt(a),s.push({dir:o,instance:n,value:a,oldValue:void 0,arg:l,modifiers:u}))}return t}function jn(t,e,n,s){const r=t.dirs,o=e&&e.dirs;for(let a=0;a<r.length;a++){const l=r[a];o&&(l.oldValue=o[a].value);let u=l.dir[s];u&&(tn(),At(u,n,8,[t.el,l,t,e]),nn())}}const Vp=Symbol("_vte"),vh=t=>t.__isTeleport,qt=Symbol("_leaveCb"),Yr=Symbol("_enterCb");function jp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Oa(()=>{t.isMounted=!0}),Rh(()=>{t.isUnmounting=!0}),t}const ht=[Function,Array],Eh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ht,onEnter:ht,onAfterEnter:ht,onEnterCancelled:ht,onBeforeLeave:ht,onLeave:ht,onAfterLeave:ht,onLeaveCancelled:ht,onBeforeAppear:ht,onAppear:ht,onAfterAppear:ht,onAppearCancelled:ht},wh=t=>{const e=t.subTree;return e.component?wh(e.component):e},Bp={name:"BaseTransition",props:Eh,setup(t,{slots:e}){const n=xa(),s=jp();return()=>{const r=e.default&&Th(e.default(),!0);if(!r||!r.length)return;const o=Ih(r),a=ge(t),{mode:l}=a;if(s.isLeaving)return vo(o);const u=qc(o);if(!u)return vo(o);let f=Ko(u,a,s,n,g=>f=g);u.type!==et&&Er(u,f);let d=n.subTree&&qc(n.subTree);if(d&&d.type!==et&&!Kn(d,u)&&wh(n).type!==et){let g=Ko(d,a,s,n);if(Er(d,g),l==="out-in"&&u.type!==et)return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete g.afterLeave,d=void 0},vo(o);l==="in-out"&&u.type!==et?g.delayLeave=(v,A,O)=>{const x=bh(s,d);x[String(d.key)]=d,v[qt]=()=>{A(),v[qt]=void 0,delete f.delayedLeave,d=void 0},f.delayedLeave=()=>{O(),delete f.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function Ih(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==et){e=n;break}}return e}const Hp=Bp;function bh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ko(t,e,n,s,r){const{appear:o,mode:a,persisted:l=!1,onBeforeEnter:u,onEnter:f,onAfterEnter:d,onEnterCancelled:g,onBeforeLeave:v,onLeave:A,onAfterLeave:O,onLeaveCancelled:x,onBeforeAppear:j,onAppear:H,onAfterAppear:V,onAppearCancelled:q}=e,G=String(t.key),X=bh(n,t),ie=(m,b)=>{m&&At(m,s,9,b)},S=(m,b)=>{const I=b[1];ie(m,b),ne(m)?m.every(w=>w.length<=1)&&I():m.length<=1&&I()},_={mode:a,persisted:l,beforeEnter(m){let b=u;if(!n.isMounted)if(o)b=j||u;else return;m[qt]&&m[qt](!0);const I=X[G];I&&Kn(t,I)&&I.el[qt]&&I.el[qt](),ie(b,[m])},enter(m){let b=f,I=d,w=g;if(!n.isMounted)if(o)b=H||f,I=V||d,w=q||g;else return;let y=!1;const le=m[Yr]=Ae=>{y||(y=!0,Ae?ie(w,[m]):ie(I,[m]),_.delayedLeave&&_.delayedLeave(),m[Yr]=void 0)};b?S(b,[m,le]):le()},leave(m,b){const I=String(t.key);if(m[Yr]&&m[Yr](!0),n.isUnmounting)return b();ie(v,[m]);let w=!1;const y=m[qt]=le=>{w||(w=!0,b(),le?ie(x,[m]):ie(O,[m]),m[qt]=void 0,X[I]===t&&delete X[I])};X[I]=t,A?S(A,[m,y]):y()},clone(m){const b=Ko(m,e,n,s,r);return r&&r(b),b}};return _}function vo(t){if(Vi(t))return t=kn(t),t.children=null,t}function qc(t){if(!Vi(t))return vh(t.type)&&t.children?Ih(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&se(n.default))return n.default()}}function Er(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Er(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Th(t,e=!1,n){let s=[],r=0;for(let o=0;o<t.length;o++){let a=t[o];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:o);a.type===pt?(a.patchFlag&128&&r++,s=s.concat(Th(a.children,e,l))):(e||a.type!==et)&&s.push(l!=null?kn(a,{key:l}):a)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function Sh(t,e){return se(t)?Ue({name:t.name},e,{setup:t}):t}function Ah(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const yi=new WeakMap;function or(t,e,n,s,r=!1){if(ne(t)){t.forEach((O,x)=>or(O,e&&(ne(e)?e[x]:e),n,s,r));return}if(ar(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&or(t,e,n,s.component.subTree);return}const o=s.shapeFlag&4?$i(s.component):s.el,a=r?null:o,{i:l,r:u}=t,f=e&&e.r,d=l.refs===Ie?l.refs={}:l.refs,g=l.setupState,v=ge(g),A=g===Ie?Vu:O=>_e(v,O);if(f!=null&&f!==u){if(zc(e),Re(f))d[f]=null,A(f)&&(g[f]=null);else if(Oe(f)){f.value=null;const O=e;O.k&&(d[O.k]=null)}}if(se(u))Pr(u,l,12,[a,d]);else{const O=Re(u),x=Oe(u);if(O||x){const j=()=>{if(t.f){const H=O?A(u)?g[u]:d[u]:u.value;if(r)ne(H)&&_a(H,o);else if(ne(H))H.includes(o)||H.push(o);else if(O)d[u]=[o],A(u)&&(g[u]=d[u]);else{const V=[o];u.value=V,t.k&&(d[t.k]=V)}}else O?(d[u]=a,A(u)&&(g[u]=a)):x&&(u.value=a,t.k&&(d[t.k]=a))};if(a){const H=()=>{j(),yi.delete(t)};H.id=-1,yi.set(t,H),ot(H,n)}else zc(t),j()}}}function zc(t){const e=yi.get(t);e&&(e.flags|=8,yi.delete(t))}Mi().requestIdleCallback;Mi().cancelIdleCallback;const ar=t=>!!t.type.__asyncLoader,Vi=t=>t.type.__isKeepAlive;function $p(t,e){Ch(t,"a",e)}function Wp(t,e){Ch(t,"da",e)}function Ch(t,e,n=ze){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ji(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Vi(r.parent.vnode)&&Gp(s,e,n,r),r=r.parent}}function Gp(t,e,n,s){const r=ji(e,t,s,!0);Ph(()=>{_a(s[e],r)},n)}function ji(t,e,n=ze,s=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{tn();const l=Or(n),u=At(e,n,t,a);return l(),nn(),u});return s?r.unshift(o):r.push(o),o}}const on=t=>(e,n=ze)=>{(!Ir||t==="sp")&&ji(t,(...s)=>e(...s),n)},Kp=on("bm"),Oa=on("m"),qp=on("bu"),zp=on("u"),Rh=on("bum"),Ph=on("um"),Jp=on("sp"),Xp=on("rtg"),Yp=on("rtc");function Qp(t,e=ze){ji("ec",t,e)}const Oh="components";function Nh(t,e){return Dh(Oh,t,!0,e)||t}const kh=Symbol.for("v-ndc");function Zp(t){return Re(t)?Dh(Oh,t,!1)||t:t||kh}function Dh(t,e,n=!0,s=!1){const r=at||ze;if(r){const o=r.type;{const l=Hg(o,!1);if(l&&(l===e||l===yt(e)||l===xi(yt(e))))return o}const a=Jc(r[t]||o[t],e)||Jc(r.appContext[t],e);return!a&&s?o:a}}function Jc(t,e){return t&&(t[e]||t[yt(e)]||t[xi(yt(e))])}function eg(t,e,n,s){let r;const o=n,a=ne(t);if(a||Re(t)){const l=a&&Cn(t);let u=!1,f=!1;l&&(u=!mt(t),f=Nn(t),t=Ui(t)),r=new Array(t.length);for(let d=0,g=t.length;d<g;d++)r[d]=e(u?f?di(He(t[d])):He(t[d]):t[d],d,void 0,o)}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,o)}else if(Te(t))if(t[Symbol.iterator])r=Array.from(t,(l,u)=>e(l,u,void 0,o));else{const l=Object.keys(t);r=new Array(l.length);for(let u=0,f=l.length;u<f;u++){const d=l[u];r[u]=e(t[d],d,u,o)}}else r=[];return r}const qo=t=>t?Zh(t)?$i(t):qo(t.parent):null,cr=Ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qo(t.parent),$root:t=>qo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>xh(t),$forceUpdate:t=>t.f||(t.f=()=>{Pa(t.update)}),$nextTick:t=>t.n||(t.n=Ra.bind(t.proxy)),$watch:t=>Ig.bind(t)}),Eo=(t,e)=>t!==Ie&&!t.__isScriptSetup&&_e(t,e),tg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:o,accessCache:a,type:l,appContext:u}=t;let f;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(Eo(s,e))return a[e]=1,s[e];if(r!==Ie&&_e(r,e))return a[e]=2,r[e];if((f=t.propsOptions[0])&&_e(f,e))return a[e]=3,o[e];if(n!==Ie&&_e(n,e))return a[e]=4,n[e];zo&&(a[e]=0)}}const d=cr[e];let g,v;if(d)return e==="$attrs"&&qe(t.attrs,"get",""),d(t);if((g=l.__cssModules)&&(g=g[e]))return g;if(n!==Ie&&_e(n,e))return a[e]=4,n[e];if(v=u.config.globalProperties,_e(v,e))return v[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:o}=t;return Eo(r,e)?(r[e]=n,!0):s!==Ie&&_e(s,e)?(s[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:o,type:a}},l){let u,f;return!!(n[l]||t!==Ie&&l[0]!=="$"&&_e(t,l)||Eo(e,l)||(u=o[0])&&_e(u,l)||_e(s,l)||_e(cr,l)||_e(r.config.globalProperties,l)||(f=a.__cssModules)&&f[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xc(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let zo=!0;function ng(t){const e=xh(t),n=t.proxy,s=t.ctx;zo=!1,e.beforeCreate&&Yc(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:a,watch:l,provide:u,inject:f,created:d,beforeMount:g,mounted:v,beforeUpdate:A,updated:O,activated:x,deactivated:j,beforeDestroy:H,beforeUnmount:V,destroyed:q,unmounted:G,render:X,renderTracked:ie,renderTriggered:S,errorCaptured:_,serverPrefetch:m,expose:b,inheritAttrs:I,components:w,directives:y,filters:le}=e;if(f&&sg(f,s,null),a)for(const re in a){const ue=a[re];se(ue)&&(s[re]=ue.bind(n))}if(r){const re=r.call(n,n);Te(re)&&(t.data=Rr(re))}if(zo=!0,o)for(const re in o){const ue=o[re],nt=se(ue)?ue.bind(n,n):se(ue.get)?ue.get.bind(n,n):Ft,Pt=!se(ue)&&se(ue.set)?ue.set.bind(n):Ft,rt=st({get:nt,set:Pt});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Fe=>rt.value=Fe})}if(l)for(const re in l)Lh(l[re],s,n,re);if(u){const re=se(u)?u.call(n):u;Reflect.ownKeys(re).forEach(ue=>{ni(ue,re[ue])})}d&&Yc(d,t,"c");function ve(re,ue){ne(ue)?ue.forEach(nt=>re(nt.bind(n))):ue&&re(ue.bind(n))}if(ve(Kp,g),ve(Oa,v),ve(qp,A),ve(zp,O),ve($p,x),ve(Wp,j),ve(Qp,_),ve(Yp,ie),ve(Xp,S),ve(Rh,V),ve(Ph,G),ve(Jp,m),ne(b))if(b.length){const re=t.exposed||(t.exposed={});b.forEach(ue=>{Object.defineProperty(re,ue,{get:()=>n[ue],set:nt=>n[ue]=nt,enumerable:!0})})}else t.exposed||(t.exposed={});X&&t.render===Ft&&(t.render=X),I!=null&&(t.inheritAttrs=I),w&&(t.components=w),y&&(t.directives=y),m&&Ah(t)}function sg(t,e,n=Ft){ne(t)&&(t=Jo(t));for(const s in t){const r=t[s];let o;Te(r)?"default"in r?o=_t(r.from||s,r.default,!0):o=_t(r.from||s):o=_t(r),Oe(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Yc(t,e,n){At(ne(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Lh(t,e,n,s){let r=s.includes(".")?zh(n,s):()=>n[s];if(Re(t)){const o=e[t];se(o)&&bs(r,o)}else if(se(t))bs(r,t.bind(n));else if(Te(t))if(ne(t))t.forEach(o=>Lh(o,e,n,s));else{const o=se(t.handler)?t.handler.bind(n):e[t.handler];se(o)&&bs(r,o,t)}}function xh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,l=o.get(e);let u;return l?u=l:!r.length&&!n&&!s?u=e:(u={},r.length&&r.forEach(f=>vi(u,f,a,!0)),vi(u,e,a)),Te(e)&&o.set(e,u),u}function vi(t,e,n,s=!1){const{mixins:r,extends:o}=e;o&&vi(t,o,n,!0),r&&r.forEach(a=>vi(t,a,n,!0));for(const a in e)if(!(s&&a==="expose")){const l=rg[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const rg={data:Qc,props:Zc,emits:Zc,methods:er,computed:er,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:er,directives:er,watch:og,provide:Qc,inject:ig};function Qc(t,e){return e?t?function(){return Ue(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function ig(t,e){return er(Jo(t),Jo(e))}function Jo(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xe(t,e){return t?[...new Set([].concat(t,e))]:e}function er(t,e){return t?Ue(Object.create(null),t,e):e}function Zc(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:Ue(Object.create(null),Xc(t),Xc(e??{})):e}function og(t,e){if(!t)return e;if(!e)return t;const n=Ue(Object.create(null),t);for(const s in e)n[s]=Xe(t[s],e[s]);return n}function Mh(){return{app:null,config:{isNativeTag:Vu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ag=0;function cg(t,e){return function(s,r=null){se(s)||(s=Ue({},s)),r!=null&&!Te(r)&&(r=null);const o=Mh(),a=new WeakSet,l=[];let u=!1;const f=o.app={_uid:ag++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Wg,get config(){return o.config},set config(d){},use(d,...g){return a.has(d)||(d&&se(d.install)?(a.add(d),d.install(f,...g)):se(d)&&(a.add(d),d(f,...g))),f},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),f},component(d,g){return g?(o.components[d]=g,f):o.components[d]},directive(d,g){return g?(o.directives[d]=g,f):o.directives[d]},mount(d,g,v){if(!u){const A=f._ceVNode||Le(s,r);return A.appContext=o,v===!0?v="svg":v===!1&&(v=void 0),t(A,d,v),u=!0,f._container=d,d.__vue_app__=f,$i(A.component)}},onUnmount(d){l.push(d)},unmount(){u&&(At(l,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,g){return o.provides[d]=g,f},runWithContext(d){const g=Qn;Qn=f;try{return d()}finally{Qn=g}}};return f}}let Qn=null;function ni(t,e){if(ze){let n=ze.provides;const s=ze.parent&&ze.parent.provides;s===n&&(n=ze.provides=Object.create(s)),n[t]=e}}function _t(t,e,n=!1){const s=xa();if(s||Qn){let r=Qn?Qn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&se(e)?e.call(s&&s.proxy):e}}function lg(){return!!(xa()||Qn)}const Uh={},Fh=()=>Object.create(Uh),Vh=t=>Object.getPrototypeOf(t)===Uh;function ug(t,e,n,s=!1){const r={},o=Fh();t.propsDefaults=Object.create(null),jh(t,e,r,o);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=s?r:hh(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function hg(t,e,n,s){const{props:r,attrs:o,vnode:{patchFlag:a}}=t,l=ge(r),[u]=t.propsOptions;let f=!1;if((s||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let v=d[g];if(Bi(t.emitsOptions,v))continue;const A=e[v];if(u)if(_e(o,v))A!==o[v]&&(o[v]=A,f=!0);else{const O=yt(v);r[O]=Xo(u,l,O,A,t,!1)}else A!==o[v]&&(o[v]=A,f=!0)}}}else{jh(t,e,r,o)&&(f=!0);let d;for(const g in l)(!e||!_e(e,g)&&((d=as(g))===g||!_e(e,d)))&&(u?n&&(n[g]!==void 0||n[d]!==void 0)&&(r[g]=Xo(u,l,g,void 0,t,!0)):delete r[g]);if(o!==l)for(const g in o)(!e||!_e(e,g))&&(delete o[g],f=!0)}f&&Jt(t.attrs,"set","")}function jh(t,e,n,s){const[r,o]=t.propsOptions;let a=!1,l;if(e)for(let u in e){if(sr(u))continue;const f=e[u];let d;r&&_e(r,d=yt(u))?!o||!o.includes(d)?n[d]=f:(l||(l={}))[d]=f:Bi(t.emitsOptions,u)||(!(u in s)||f!==s[u])&&(s[u]=f,a=!0)}if(o){const u=ge(n),f=l||Ie;for(let d=0;d<o.length;d++){const g=o[d];n[g]=Xo(r,u,g,f[g],t,!_e(f,g))}}return a}function Xo(t,e,n,s,r,o){const a=t[n];if(a!=null){const l=_e(a,"default");if(l&&s===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&se(u)){const{propsDefaults:f}=r;if(n in f)s=f[n];else{const d=Or(r);s=f[n]=u.call(null,e),d()}}else s=u;r.ce&&r.ce._setProp(n,s)}a[0]&&(o&&!l?s=!1:a[1]&&(s===""||s===as(n))&&(s=!0))}return s}const fg=new WeakMap;function Bh(t,e,n=!1){const s=n?fg:e.propsCache,r=s.get(t);if(r)return r;const o=t.props,a={},l=[];let u=!1;if(!se(t)){const d=g=>{u=!0;const[v,A]=Bh(g,e,!0);Ue(a,v),A&&l.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!u)return Te(t)&&s.set(t,Es),Es;if(ne(o))for(let d=0;d<o.length;d++){const g=yt(o[d]);el(g)&&(a[g]=Ie)}else if(o)for(const d in o){const g=yt(d);if(el(g)){const v=o[d],A=a[g]=ne(v)||se(v)?{type:v}:Ue({},v),O=A.type;let x=!1,j=!0;if(ne(O))for(let H=0;H<O.length;++H){const V=O[H],q=se(V)&&V.name;if(q==="Boolean"){x=!0;break}else q==="String"&&(j=!1)}else x=se(O)&&O.name==="Boolean";A[0]=x,A[1]=j,(x||_e(A,"default"))&&l.push(g)}}const f=[a,l];return Te(t)&&s.set(t,f),f}function el(t){return t[0]!=="$"&&!sr(t)}const Na=t=>t==="_"||t==="_ctx"||t==="$stable",ka=t=>ne(t)?t.map(xt):[xt(t)],dg=(t,e,n)=>{if(e._n)return e;const s=_i((...r)=>ka(e(...r)),n);return s._c=!1,s},Hh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Na(r))continue;const o=t[r];if(se(o))e[r]=dg(r,o,s);else if(o!=null){const a=ka(o);e[r]=()=>a}}},$h=(t,e)=>{const n=ka(e);t.slots.default=()=>n},Wh=(t,e,n)=>{for(const s in e)(n||!Na(s))&&(t[s]=e[s])},pg=(t,e,n)=>{const s=t.slots=Fh();if(t.vnode.shapeFlag&32){const r=e._;r?(Wh(s,e,n),n&&Wu(s,"_",r,!0)):Hh(e,s)}else e&&$h(t,e)},gg=(t,e,n)=>{const{vnode:s,slots:r}=t;let o=!0,a=Ie;if(s.shapeFlag&32){const l=e._;l?n&&l===1?o=!1:Wh(r,e,n):(o=!e.$stable,Hh(e,r)),a=e}else e&&($h(t,e),a={default:1});if(o)for(const l in r)!Na(l)&&a[l]==null&&delete r[l]},ot=Og;function mg(t){return _g(t)}function _g(t,e){const n=Mi();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:a,createText:l,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:v,setScopeId:A=Ft,insertStaticContent:O}=t,x=(E,T,C,D=null,L=null,N=null,$=void 0,F=null,M=!!T.dynamicChildren)=>{if(E===T)return;E&&!Kn(E,T)&&(D=k(E),Fe(E,L,N,!0),E=null),T.patchFlag===-2&&(M=!1,T.dynamicChildren=null);const{type:U,ref:Z,shapeFlag:K}=T;switch(U){case Hi:j(E,T,C,D);break;case et:H(E,T,C,D);break;case si:E==null&&V(T,C,D,$);break;case pt:w(E,T,C,D,L,N,$,F,M);break;default:K&1?X(E,T,C,D,L,N,$,F,M):K&6?y(E,T,C,D,L,N,$,F,M):(K&64||K&128)&&U.process(E,T,C,D,L,N,$,F,M,J)}Z!=null&&L?or(Z,E&&E.ref,N,T||E,!T):Z==null&&E&&E.ref!=null&&or(E.ref,null,N,E,!0)},j=(E,T,C,D)=>{if(E==null)s(T.el=l(T.children),C,D);else{const L=T.el=E.el;T.children!==E.children&&f(L,T.children)}},H=(E,T,C,D)=>{E==null?s(T.el=u(T.children||""),C,D):T.el=E.el},V=(E,T,C,D)=>{[E.el,E.anchor]=O(E.children,T,C,D,E.el,E.anchor)},q=({el:E,anchor:T},C,D)=>{let L;for(;E&&E!==T;)L=v(E),s(E,C,D),E=L;s(T,C,D)},G=({el:E,anchor:T})=>{let C;for(;E&&E!==T;)C=v(E),r(E),E=C;r(T)},X=(E,T,C,D,L,N,$,F,M)=>{T.type==="svg"?$="svg":T.type==="math"&&($="mathml"),E==null?ie(T,C,D,L,N,$,F,M):m(E,T,L,N,$,F,M)},ie=(E,T,C,D,L,N,$,F)=>{let M,U;const{props:Z,shapeFlag:K,transition:Y,dirs:ee}=E;if(M=E.el=a(E.type,N,Z&&Z.is,Z),K&8?d(M,E.children):K&16&&_(E.children,M,null,D,L,wo(E,N),$,F),ee&&jn(E,null,D,"created"),S(M,E,E.scopeId,$,D),Z){for(const Ee in Z)Ee!=="value"&&!sr(Ee)&&o(M,Ee,null,Z[Ee],N,D);"value"in Z&&o(M,"value",null,Z.value,N),(U=Z.onVnodeBeforeMount)&&kt(U,D,E)}ee&&jn(E,null,D,"beforeMount");const ae=yg(L,Y);ae&&Y.beforeEnter(M),s(M,T,C),((U=Z&&Z.onVnodeMounted)||ae||ee)&&ot(()=>{U&&kt(U,D,E),ae&&Y.enter(M),ee&&jn(E,null,D,"mounted")},L)},S=(E,T,C,D,L)=>{if(C&&A(E,C),D)for(let N=0;N<D.length;N++)A(E,D[N]);if(L){let N=L.subTree;if(T===N||Xh(N.type)&&(N.ssContent===T||N.ssFallback===T)){const $=L.vnode;S(E,$,$.scopeId,$.slotScopeIds,L.parent)}}},_=(E,T,C,D,L,N,$,F,M=0)=>{for(let U=M;U<E.length;U++){const Z=E[U]=F?En(E[U]):xt(E[U]);x(null,Z,T,C,D,L,N,$,F)}},m=(E,T,C,D,L,N,$)=>{const F=T.el=E.el;let{patchFlag:M,dynamicChildren:U,dirs:Z}=T;M|=E.patchFlag&16;const K=E.props||Ie,Y=T.props||Ie;let ee;if(C&&Bn(C,!1),(ee=Y.onVnodeBeforeUpdate)&&kt(ee,C,T,E),Z&&jn(T,E,C,"beforeUpdate"),C&&Bn(C,!0),(K.innerHTML&&Y.innerHTML==null||K.textContent&&Y.textContent==null)&&d(F,""),U?b(E.dynamicChildren,U,F,C,D,wo(T,L),N):$||ue(E,T,F,null,C,D,wo(T,L),N,!1),M>0){if(M&16)I(F,K,Y,C,L);else if(M&2&&K.class!==Y.class&&o(F,"class",null,Y.class,L),M&4&&o(F,"style",K.style,Y.style,L),M&8){const ae=T.dynamicProps;for(let Ee=0;Ee<ae.length;Ee++){const pe=ae[Ee],We=K[pe],Ge=Y[pe];(Ge!==We||pe==="value")&&o(F,pe,We,Ge,L,C)}}M&1&&E.children!==T.children&&d(F,T.children)}else!$&&U==null&&I(F,K,Y,C,L);((ee=Y.onVnodeUpdated)||Z)&&ot(()=>{ee&&kt(ee,C,T,E),Z&&jn(T,E,C,"updated")},D)},b=(E,T,C,D,L,N,$)=>{for(let F=0;F<T.length;F++){const M=E[F],U=T[F],Z=M.el&&(M.type===pt||!Kn(M,U)||M.shapeFlag&198)?g(M.el):C;x(M,U,Z,null,D,L,N,$,!0)}},I=(E,T,C,D,L)=>{if(T!==C){if(T!==Ie)for(const N in T)!sr(N)&&!(N in C)&&o(E,N,T[N],null,L,D);for(const N in C){if(sr(N))continue;const $=C[N],F=T[N];$!==F&&N!=="value"&&o(E,N,F,$,L,D)}"value"in C&&o(E,"value",T.value,C.value,L)}},w=(E,T,C,D,L,N,$,F,M)=>{const U=T.el=E?E.el:l(""),Z=T.anchor=E?E.anchor:l("");let{patchFlag:K,dynamicChildren:Y,slotScopeIds:ee}=T;ee&&(F=F?F.concat(ee):ee),E==null?(s(U,C,D),s(Z,C,D),_(T.children||[],C,Z,L,N,$,F,M)):K>0&&K&64&&Y&&E.dynamicChildren?(b(E.dynamicChildren,Y,C,L,N,$,F),(T.key!=null||L&&T===L.subTree)&&Gh(E,T,!0)):ue(E,T,C,Z,L,N,$,F,M)},y=(E,T,C,D,L,N,$,F,M)=>{T.slotScopeIds=F,E==null?T.shapeFlag&512?L.ctx.activate(T,C,D,$,M):le(T,C,D,L,N,$,M):Ae(E,T,M)},le=(E,T,C,D,L,N,$)=>{const F=E.component=Ug(E,D,L);if(Vi(E)&&(F.ctx.renderer=J),Fg(F,!1,$),F.asyncDep){if(L&&L.registerDep(F,ve,$),!E.el){const M=F.subTree=Le(et);H(null,M,T,C),E.placeholder=M.el}}else ve(F,E,T,C,L,N,$)},Ae=(E,T,C)=>{const D=T.component=E.component;if(Rg(E,T,C))if(D.asyncDep&&!D.asyncResolved){re(D,T,C);return}else D.next=T,D.update();else T.el=E.el,D.vnode=T},ve=(E,T,C,D,L,N,$)=>{const F=()=>{if(E.isMounted){let{next:K,bu:Y,u:ee,parent:ae,vnode:Ee}=E;{const lt=Kh(E);if(lt){K&&(K.el=Ee.el,re(E,K,$)),lt.asyncDep.then(()=>{E.isUnmounted||F()});return}}let pe=K,We;Bn(E,!1),K?(K.el=Ee.el,re(E,K,$)):K=Ee,Y&&ti(Y),(We=K.props&&K.props.onVnodeBeforeUpdate)&&kt(We,ae,K,Ee),Bn(E,!0);const Ge=nl(E),it=E.subTree;E.subTree=Ge,x(it,Ge,g(it.el),k(it),E,L,N),K.el=Ge.el,pe===null&&Pg(E,Ge.el),ee&&ot(ee,L),(We=K.props&&K.props.onVnodeUpdated)&&ot(()=>kt(We,ae,K,Ee),L)}else{let K;const{el:Y,props:ee}=T,{bm:ae,m:Ee,parent:pe,root:We,type:Ge}=E,it=ar(T);Bn(E,!1),ae&&ti(ae),!it&&(K=ee&&ee.onVnodeBeforeMount)&&kt(K,pe,T),Bn(E,!0);{We.ce&&We.ce._def.shadowRoot!==!1&&We.ce._injectChildStyle(Ge);const lt=E.subTree=nl(E);x(null,lt,C,D,E,L,N),T.el=lt.el}if(Ee&&ot(Ee,L),!it&&(K=ee&&ee.onVnodeMounted)){const lt=T;ot(()=>kt(K,pe,lt),L)}(T.shapeFlag&256||pe&&ar(pe.vnode)&&pe.vnode.shapeFlag&256)&&E.a&&ot(E.a,L),E.isMounted=!0,T=C=D=null}};E.scope.on();const M=E.effect=new Yu(F);E.scope.off();const U=E.update=M.run.bind(M),Z=E.job=M.runIfDirty.bind(M);Z.i=E,Z.id=E.uid,M.scheduler=()=>Pa(Z),Bn(E,!0),U()},re=(E,T,C)=>{T.component=E;const D=E.vnode.props;E.vnode=T,E.next=null,hg(E,T.props,D,C),gg(E,T.children,C),tn(),Kc(E),nn()},ue=(E,T,C,D,L,N,$,F,M=!1)=>{const U=E&&E.children,Z=E?E.shapeFlag:0,K=T.children,{patchFlag:Y,shapeFlag:ee}=T;if(Y>0){if(Y&128){Pt(U,K,C,D,L,N,$,F,M);return}else if(Y&256){nt(U,K,C,D,L,N,$,F,M);return}}ee&8?(Z&16&&$e(U,L,N),K!==U&&d(C,K)):Z&16?ee&16?Pt(U,K,C,D,L,N,$,F,M):$e(U,L,N,!0):(Z&8&&d(C,""),ee&16&&_(K,C,D,L,N,$,F,M))},nt=(E,T,C,D,L,N,$,F,M)=>{E=E||Es,T=T||Es;const U=E.length,Z=T.length,K=Math.min(U,Z);let Y;for(Y=0;Y<K;Y++){const ee=T[Y]=M?En(T[Y]):xt(T[Y]);x(E[Y],ee,C,null,L,N,$,F,M)}U>Z?$e(E,L,N,!0,!1,K):_(T,C,D,L,N,$,F,M,K)},Pt=(E,T,C,D,L,N,$,F,M)=>{let U=0;const Z=T.length;let K=E.length-1,Y=Z-1;for(;U<=K&&U<=Y;){const ee=E[U],ae=T[U]=M?En(T[U]):xt(T[U]);if(Kn(ee,ae))x(ee,ae,C,null,L,N,$,F,M);else break;U++}for(;U<=K&&U<=Y;){const ee=E[K],ae=T[Y]=M?En(T[Y]):xt(T[Y]);if(Kn(ee,ae))x(ee,ae,C,null,L,N,$,F,M);else break;K--,Y--}if(U>K){if(U<=Y){const ee=Y+1,ae=ee<Z?T[ee].el:D;for(;U<=Y;)x(null,T[U]=M?En(T[U]):xt(T[U]),C,ae,L,N,$,F,M),U++}}else if(U>Y)for(;U<=K;)Fe(E[U],L,N,!0),U++;else{const ee=U,ae=U,Ee=new Map;for(U=ae;U<=Y;U++){const Ve=T[U]=M?En(T[U]):xt(T[U]);Ve.key!=null&&Ee.set(Ve.key,U)}let pe,We=0;const Ge=Y-ae+1;let it=!1,lt=0;const wt=new Array(Ge);for(U=0;U<Ge;U++)wt[U]=0;for(U=ee;U<=K;U++){const Ve=E[U];if(We>=Ge){Fe(Ve,L,N,!0);continue}let je;if(Ve.key!=null)je=Ee.get(Ve.key);else for(pe=ae;pe<=Y;pe++)if(wt[pe-ae]===0&&Kn(Ve,T[pe])){je=pe;break}je===void 0?Fe(Ve,L,N,!0):(wt[je-ae]=U+1,je>=lt?lt=je:it=!0,x(Ve,T[je],C,null,L,N,$,F,M),We++)}const ls=it?vg(wt):Es;for(pe=ls.length-1,U=Ge-1;U>=0;U--){const Ve=ae+U,je=T[Ve],xs=T[Ve+1],us=Ve+1<Z?xs.el||xs.placeholder:D;wt[U]===0?x(null,je,C,us,L,N,$,F,M):it&&(pe<0||U!==ls[pe]?rt(je,C,us,2):pe--)}}},rt=(E,T,C,D,L=null)=>{const{el:N,type:$,transition:F,children:M,shapeFlag:U}=E;if(U&6){rt(E.component.subTree,T,C,D);return}if(U&128){E.suspense.move(T,C,D);return}if(U&64){$.move(E,T,C,J);return}if($===pt){s(N,T,C);for(let K=0;K<M.length;K++)rt(M[K],T,C,D);s(E.anchor,T,C);return}if($===si){q(E,T,C);return}if(D!==2&&U&1&&F)if(D===0)F.beforeEnter(N),s(N,T,C),ot(()=>F.enter(N),L);else{const{leave:K,delayLeave:Y,afterLeave:ee}=F,ae=()=>{E.ctx.isUnmounted?r(N):s(N,T,C)},Ee=()=>{N._isLeaving&&N[qt](!0),K(N,()=>{ae(),ee&&ee()})};Y?Y(N,ae,Ee):Ee()}else s(N,T,C)},Fe=(E,T,C,D=!1,L=!1)=>{const{type:N,props:$,ref:F,children:M,dynamicChildren:U,shapeFlag:Z,patchFlag:K,dirs:Y,cacheIndex:ee}=E;if(K===-2&&(L=!1),F!=null&&(tn(),or(F,null,C,E,!0),nn()),ee!=null&&(T.renderCache[ee]=void 0),Z&256){T.ctx.deactivate(E);return}const ae=Z&1&&Y,Ee=!ar(E);let pe;if(Ee&&(pe=$&&$.onVnodeBeforeUnmount)&&kt(pe,T,E),Z&6)Et(E.component,C,D);else{if(Z&128){E.suspense.unmount(C,D);return}ae&&jn(E,null,T,"beforeUnmount"),Z&64?E.type.remove(E,T,C,J,D):U&&!U.hasOnce&&(N!==pt||K>0&&K&64)?$e(U,T,C,!1,!0):(N===pt&&K&384||!L&&Z&16)&&$e(M,T,C),D&&Ht(E)}(Ee&&(pe=$&&$.onVnodeUnmounted)||ae)&&ot(()=>{pe&&kt(pe,T,E),ae&&jn(E,null,T,"unmounted")},C)},Ht=E=>{const{type:T,el:C,anchor:D,transition:L}=E;if(T===pt){vt(C,D);return}if(T===si){G(E);return}const N=()=>{r(C),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:$,delayLeave:F}=L,M=()=>$(C,N);F?F(E.el,N,M):M()}else N()},vt=(E,T)=>{let C;for(;E!==T;)C=v(E),r(E),E=C;r(T)},Et=(E,T,C)=>{const{bum:D,scope:L,job:N,subTree:$,um:F,m:M,a:U}=E;tl(M),tl(U),D&&ti(D),L.stop(),N&&(N.flags|=8,Fe($,E,T,C)),F&&ot(F,T),ot(()=>{E.isUnmounted=!0},T)},$e=(E,T,C,D=!1,L=!1,N=0)=>{for(let $=N;$<E.length;$++)Fe(E[$],T,C,D,L)},k=E=>{if(E.shapeFlag&6)return k(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=v(E.anchor||E.el),C=T&&T[Vp];return C?v(C):T};let z=!1;const W=(E,T,C)=>{E==null?T._vnode&&Fe(T._vnode,null,null,!0):x(T._vnode||null,E,T,null,null,null,C),T._vnode=E,z||(z=!0,Kc(),mh(),z=!1)},J={p:x,um:Fe,m:rt,r:Ht,mt:le,mc:_,pc:ue,pbc:b,n:k,o:t};return{render:W,hydrate:void 0,createApp:cg(W)}}function wo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Bn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function yg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gh(t,e,n=!1){const s=t.children,r=e.children;if(ne(s)&&ne(r))for(let o=0;o<s.length;o++){const a=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=En(r[o]),l.el=a.el),!n&&l.patchFlag!==-2&&Gh(a,l)),l.type===Hi&&l.patchFlag!==-1&&(l.el=a.el),l.type===et&&!l.el&&(l.el=a.el)}}function vg(t){const e=t.slice(),n=[0];let s,r,o,a,l;const u=t.length;for(s=0;s<u;s++){const f=t[s];if(f!==0){if(r=n[n.length-1],t[r]<f){e[s]=r,n.push(s);continue}for(o=0,a=n.length-1;o<a;)l=o+a>>1,t[n[l]]<f?o=l+1:a=l;f<t[n[o]]&&(o>0&&(e[s]=n[o-1]),n[o]=s)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Kh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kh(e)}function tl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Eg=Symbol.for("v-scx"),wg=()=>_t(Eg);function bs(t,e,n){return qh(t,e,n)}function qh(t,e,n=Ie){const{immediate:s,deep:r,flush:o,once:a}=n,l=Ue({},n),u=e&&s||!e&&o!=="post";let f;if(Ir){if(o==="sync"){const A=wg();f=A.__watcherHandles||(A.__watcherHandles=[])}else if(!u){const A=()=>{};return A.stop=Ft,A.resume=Ft,A.pause=Ft,A}}const d=ze;l.call=(A,O,x)=>At(A,d,O,x);let g=!1;o==="post"?l.scheduler=A=>{ot(A,d&&d.suspense)}:o!=="sync"&&(g=!0,l.scheduler=(A,O)=>{O?A():Pa(A)}),l.augmentJob=A=>{e&&(A.flags|=4),g&&(A.flags|=2,d&&(A.id=d.uid,A.i=d))};const v=xp(t,e,l);return Ir&&(f?f.push(v):u&&v()),v}function Ig(t,e,n){const s=this.proxy,r=Re(t)?t.includes(".")?zh(s,t):()=>s[t]:t.bind(s,s);let o;se(e)?o=e:(o=e.handler,n=e);const a=Or(this),l=qh(r,o.bind(s),n);return a(),l}function zh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const bg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yt(e)}Modifiers`]||t[`${as(e)}Modifiers`];function Tg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ie;let r=n;const o=e.startsWith("update:"),a=o&&bg(s,e.slice(7));a&&(a.trim&&(r=n.map(d=>Re(d)?d.trim():d)),a.number&&(r=n.map(Bo)));let l,u=s[l=fo(e)]||s[l=fo(yt(e))];!u&&o&&(u=s[l=fo(as(e))]),u&&At(u,t,6,r);const f=s[l+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,At(f,t,6,r)}}const Sg=new WeakMap;function Jh(t,e,n=!1){const s=n?Sg:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const o=t.emits;let a={},l=!1;if(!se(t)){const u=f=>{const d=Jh(f,e,!0);d&&(l=!0,Ue(a,d))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!o&&!l?(Te(t)&&s.set(t,null),null):(ne(o)?o.forEach(u=>a[u]=null):Ue(a,o),Te(t)&&s.set(t,a),a)}function Bi(t,e){return!t||!ki(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,as(e))||_e(t,e))}function nl(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[o],slots:a,attrs:l,emit:u,render:f,renderCache:d,props:g,data:v,setupState:A,ctx:O,inheritAttrs:x}=t,j=mi(t);let H,V;try{if(n.shapeFlag&4){const G=r||s,X=G;H=xt(f.call(X,G,d,g,A,v,O)),V=l}else{const G=e;H=xt(G.length>1?G(g,{attrs:l,slots:a,emit:u}):G(g,null)),V=e.props?l:Ag(l)}}catch(G){lr.length=0,Fi(G,t,1),H=Le(et)}let q=H;if(V&&x!==!1){const G=Object.keys(V),{shapeFlag:X}=q;G.length&&X&7&&(o&&G.some(ma)&&(V=Cg(V,o)),q=kn(q,V,!1,!0))}return n.dirs&&(q=kn(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&Er(q,n.transition),H=q,mi(j),H}const Ag=t=>{let e;for(const n in t)(n==="class"||n==="style"||ki(n))&&((e||(e={}))[n]=t[n]);return e},Cg=(t,e)=>{const n={};for(const s in t)(!ma(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Rg(t,e,n){const{props:s,children:r,component:o}=t,{props:a,children:l,patchFlag:u}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?sl(s,a,f):!!a;if(u&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const v=d[g];if(a[v]!==s[v]&&!Bi(f,v))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===a?!1:s?a?sl(s,a,f):!0:!!a;return!1}function sl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(e[o]!==t[o]&&!Bi(n,o))return!0}return!1}function Pg({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Xh=t=>t.__isSuspense;function Og(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Fp(t)}const pt=Symbol.for("v-fgt"),Hi=Symbol.for("v-txt"),et=Symbol.for("v-cmt"),si=Symbol.for("v-stc"),lr=[];let ct=null;function dt(t=!1){lr.push(ct=t?null:[])}function Ng(){lr.pop(),ct=lr[lr.length-1]||null}let wr=1;function Ei(t,e=!1){wr+=t,t<0&&ct&&e&&(ct.hasOnce=!0)}function Yh(t){return t.dynamicChildren=wr>0?ct||Es:null,Ng(),wr>0&&ct&&ct.push(t),t}function zt(t,e,n,s,r,o){return Yh(Q(t,e,n,s,r,o,!0))}function Da(t,e,n,s,r){return Yh(Le(t,e,n,s,r,!0))}function wi(t){return t?t.__v_isVNode===!0:!1}function Kn(t,e){return t.type===e.type&&t.key===e.key}const Qh=({key:t})=>t??null,ri=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||Oe(t)||se(t)?{i:at,r:t,k:e,f:!!n}:t:null);function Q(t,e=null,n=null,s=0,r=null,o=t===pt?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qh(e),ref:e&&ri(e),scopeId:yh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:at};return l?(La(u,n),o&128&&t.normalize(u)):n&&(u.shapeFlag|=Re(n)?8:16),wr>0&&!a&&ct&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&ct.push(u),u}const Le=kg;function kg(t,e=null,n=null,s=0,r=null,o=!1){if((!t||t===kh)&&(t=et),wi(t)){const l=kn(t,e,!0);return n&&La(l,n),wr>0&&!o&&ct&&(l.shapeFlag&6?ct[ct.indexOf(t)]=l:ct.push(l)),l.patchFlag=-2,l}if($g(t)&&(t=t.__vccOpts),e){e=Dg(e);let{class:l,style:u}=e;l&&!Re(l)&&(e.class=ft(l)),Te(u)&&(Aa(u)&&!ne(u)&&(u=Ue({},u)),e.style=va(u))}const a=Re(t)?1:Xh(t)?128:vh(t)?64:Te(t)?4:se(t)?2:0;return Q(t,e,n,s,r,a,o,!0)}function Dg(t){return t?Aa(t)||Vh(t)?Ue({},t):t:null}function kn(t,e,n=!1,s=!1){const{props:r,ref:o,patchFlag:a,children:l,transition:u}=t,f=e?Lg(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&Qh(f),ref:e&&e.ref?n&&o?ne(o)?o.concat(ri(e)):[o,ri(e)]:ri(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==pt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kn(t.ssContent),ssFallback:t.ssFallback&&kn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&s&&Er(d,u.clone(d)),d}function ts(t=" ",e=0){return Le(Hi,null,t,e)}function rb(t,e){const n=Le(si,null,t);return n.staticCount=e,n}function ii(t="",e=!1){return e?(dt(),Da(et,null,t)):Le(et,null,t)}function xt(t){return t==null||typeof t=="boolean"?Le(et):ne(t)?Le(pt,null,t.slice()):wi(t)?En(t):Le(Hi,null,String(t))}function En(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kn(t)}function La(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),La(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Vh(e)?e._ctx=at:r===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:at},n=32):(e=String(e),s&64?(n=16,e=[ts(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ft([e.class,s.class]));else if(r==="style")e.style=va([e.style,s.style]);else if(ki(r)){const o=e[r],a=s[r];a&&o!==a&&!(ne(o)&&o.includes(a))&&(e[r]=o?[].concat(o,a):a)}else r!==""&&(e[r]=s[r])}return e}function kt(t,e,n,s=null){At(t,e,7,[n,s])}const xg=Mh();let Mg=0;function Ug(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||xg,o={uid:Mg++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bh(s,r),emitsOptions:Jh(s,r),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:s.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Tg.bind(null,o),t.ce&&t.ce(o),o}let ze=null;const xa=()=>ze||at;let Ii,Yo;{const t=Mi(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),o=>{r.length>1?r.forEach(a=>a(o)):r[0](o)}};Ii=e("__VUE_INSTANCE_SETTERS__",n=>ze=n),Yo=e("__VUE_SSR_SETTERS__",n=>Ir=n)}const Or=t=>{const e=ze;return Ii(t),t.scope.on(),()=>{t.scope.off(),Ii(e)}},rl=()=>{ze&&ze.scope.off(),Ii(null)};function Zh(t){return t.vnode.shapeFlag&4}let Ir=!1;function Fg(t,e=!1,n=!1){e&&Yo(e);const{props:s,children:r}=t.vnode,o=Zh(t);ug(t,s,o,e),pg(t,r,n||e);const a=o?Vg(t,e):void 0;return e&&Yo(!1),a}function Vg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,tg);const{setup:s}=n;if(s){tn();const r=t.setupContext=s.length>1?Bg(t):null,o=Or(t),a=Pr(s,t,0,[t.props,r]),l=Bu(a);if(nn(),o(),(l||t.sp)&&!ar(t)&&Ah(t),l){if(a.then(rl,rl),e)return a.then(u=>{il(t,u)}).catch(u=>{Fi(u,t,0)});t.asyncDep=a}else il(t,a)}else ef(t)}function il(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=dh(e)),ef(t)}function ef(t,e,n){const s=t.type;t.render||(t.render=s.render||Ft);{const r=Or(t);tn();try{ng(t)}finally{nn(),r()}}}const jg={get(t,e){return qe(t,"get",""),t[e]}};function Bg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,jg),slots:t.slots,emit:t.emit,expose:e}}function $i(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(dh(Ca(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in cr)return cr[n](t)},has(e,n){return n in e||n in cr}})):t.proxy}function Hg(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function $g(t){return se(t)&&"__vccOpts"in t}const st=(t,e)=>Dp(t,e,Ir);function Ma(t,e,n){try{Ei(-1);const s=arguments.length;return s===2?Te(e)&&!ne(e)?wi(e)?Le(t,null,[e]):Le(t,e):Le(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&wi(n)&&(n=[n]),Le(t,e,n))}finally{Ei(1)}}const Wg="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qo;const ol=typeof window<"u"&&window.trustedTypes;if(ol)try{Qo=ol.createPolicy("vue",{createHTML:t=>t})}catch{}const tf=Qo?t=>Qo.createHTML(t):t=>t,Gg="http://www.w3.org/2000/svg",Kg="http://www.w3.org/1998/Math/MathML",Kt=typeof document<"u"?document:null,al=Kt&&Kt.createElement("template"),qg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Kt.createElementNS(Gg,t):e==="mathml"?Kt.createElementNS(Kg,t):n?Kt.createElement(t,{is:n}):Kt.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Kt.createTextNode(t),createComment:t=>Kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,o){const a=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{al.innerHTML=tf(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=al.content;if(s==="svg"||s==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gn="transition",Ys="animation",br=Symbol("_vtc"),nf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},zg=Ue({},Eh,nf),Jg=t=>(t.displayName="Transition",t.props=zg,t),Xg=Jg((t,{slots:e})=>Ma(Hp,Yg(t),e)),Hn=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},cl=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function Yg(t){const e={};for(const w in t)w in nf||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:f=a,appearToClass:d=l,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:A=`${n}-leave-to`}=t,O=Qg(r),x=O&&O[0],j=O&&O[1],{onBeforeEnter:H,onEnter:V,onEnterCancelled:q,onLeave:G,onLeaveCancelled:X,onBeforeAppear:ie=H,onAppear:S=V,onAppearCancelled:_=q}=e,m=(w,y,le,Ae)=>{w._enterCancelled=Ae,$n(w,y?d:l),$n(w,y?f:a),le&&le()},b=(w,y)=>{w._isLeaving=!1,$n(w,g),$n(w,A),$n(w,v),y&&y()},I=w=>(y,le)=>{const Ae=w?S:V,ve=()=>m(y,w,le);Hn(Ae,[y,ve]),ll(()=>{$n(y,w?u:o),Wt(y,w?d:l),cl(Ae)||ul(y,s,x,ve)})};return Ue(e,{onBeforeEnter(w){Hn(H,[w]),Wt(w,o),Wt(w,a)},onBeforeAppear(w){Hn(ie,[w]),Wt(w,u),Wt(w,f)},onEnter:I(!1),onAppear:I(!0),onLeave(w,y){w._isLeaving=!0;const le=()=>b(w,y);Wt(w,g),w._enterCancelled?(Wt(w,v),dl(w)):(dl(w),Wt(w,v)),ll(()=>{w._isLeaving&&($n(w,g),Wt(w,A),cl(G)||ul(w,s,j,le))}),Hn(G,[w,le])},onEnterCancelled(w){m(w,!1,void 0,!0),Hn(q,[w])},onAppearCancelled(w){m(w,!0,void 0,!0),Hn(_,[w])},onLeaveCancelled(w){b(w),Hn(X,[w])}})}function Qg(t){if(t==null)return null;if(Te(t))return[Io(t.enter),Io(t.leave)];{const e=Io(t);return[e,e]}}function Io(t){return Zd(t)}function Wt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[br]||(t[br]=new Set)).add(e)}function $n(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[br];n&&(n.delete(e),n.size||(t[br]=void 0))}function ll(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Zg=0;function ul(t,e,n,s){const r=t._endId=++Zg,o=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(o,n);const{type:a,timeout:l,propCount:u}=em(t,e);if(!a)return s();const f=a+"end";let d=0;const g=()=>{t.removeEventListener(f,v),o()},v=A=>{A.target===t&&++d>=u&&g()};setTimeout(()=>{d<u&&g()},l+1),t.addEventListener(f,v)}function em(t,e){const n=window.getComputedStyle(t),s=O=>(n[O]||"").split(", "),r=s(`${gn}Delay`),o=s(`${gn}Duration`),a=hl(r,o),l=s(`${Ys}Delay`),u=s(`${Ys}Duration`),f=hl(l,u);let d=null,g=0,v=0;e===gn?a>0&&(d=gn,g=a,v=o.length):e===Ys?f>0&&(d=Ys,g=f,v=u.length):(g=Math.max(a,f),d=g>0?a>f?gn:Ys:null,v=d?d===gn?o.length:u.length:0);const A=d===gn&&/\b(?:transform|all)(?:,|$)/.test(s(`${gn}Property`).toString());return{type:d,timeout:g,propCount:v,hasTransform:A}}function hl(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>fl(n)+fl(t[s])))}function fl(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function dl(t){return(t?t.ownerDocument:document).body.offsetHeight}function tm(t,e,n){const s=t[br];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pl=Symbol("_vod"),nm=Symbol("_vsh"),sm=Symbol(""),rm=/(?:^|;)\s*display\s*:/;function im(t,e,n){const s=t.style,r=Re(n);let o=!1;if(n&&!r){if(e)if(Re(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&oi(s,l,"")}else for(const a in e)n[a]==null&&oi(s,a,"");for(const a in n)a==="display"&&(o=!0),oi(s,a,n[a])}else if(r){if(e!==n){const a=s[sm];a&&(n+=";"+a),s.cssText=n,o=rm.test(n)}}else e&&t.removeAttribute("style");pl in t&&(t[pl]=o?s.display:"",t[nm]&&(s.display="none"))}const gl=/\s*!important$/;function oi(t,e,n){if(ne(n))n.forEach(s=>oi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=om(t,e);gl.test(n)?t.setProperty(as(s),n.replace(gl,""),"important"):t[s]=n}}const ml=["Webkit","Moz","ms"],bo={};function om(t,e){const n=bo[e];if(n)return n;let s=yt(e);if(s!=="filter"&&s in t)return bo[e]=s;s=xi(s);for(let r=0;r<ml.length;r++){const o=ml[r]+s;if(o in t)return bo[e]=o}return e}const _l="http://www.w3.org/1999/xlink";function yl(t,e,n,s,r,o=ip(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(_l,e.slice(6,e.length)):t.setAttributeNS(_l,e,n):n==null||o&&!Gu(n)?t.removeAttribute(e):t.setAttribute(e,o?"":Ln(n)?String(n):n)}function vl(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?tf(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Gu(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function _s(t,e,n,s){t.addEventListener(e,n,s)}function am(t,e,n,s){t.removeEventListener(e,n,s)}const El=Symbol("_vei");function cm(t,e,n,s,r=null){const o=t[El]||(t[El]={}),a=o[e];if(s&&a)a.value=s;else{const[l,u]=lm(e);if(s){const f=o[e]=fm(s,r);_s(t,l,f,u)}else a&&(am(t,l,a,u),o[e]=void 0)}}const wl=/(?:Once|Passive|Capture)$/;function lm(t){let e;if(wl.test(t)){e={};let s;for(;s=t.match(wl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):as(t.slice(2)),e]}let To=0;const um=Promise.resolve(),hm=()=>To||(um.then(()=>To=0),To=Date.now());function fm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;At(dm(s,n.value),e,5,[s])};return n.value=t,n.attached=hm(),n}function dm(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Il=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pm=(t,e,n,s,r,o)=>{const a=r==="svg";e==="class"?tm(t,s,a):e==="style"?im(t,n,s):ki(e)?ma(e)||cm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gm(t,e,s,a))?(vl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yl(t,e,s,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Re(s))?vl(t,yt(e),s,o,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),yl(t,e,s,a))};function gm(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Il(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Il(e)&&Re(n)?!1:e in t}const bl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>ti(e,n):e};function mm(t){t.target.composing=!0}function Tl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const So=Symbol("_assign"),Ao={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[So]=bl(r);const o=s||r.props&&r.props.type==="number";_s(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),o&&(l=Bo(l)),t[So](l)}),n&&_s(t,"change",()=>{t.value=t.value.trim()}),e||(_s(t,"compositionstart",mm),_s(t,"compositionend",Tl),_s(t,"change",Tl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:o}},a){if(t[So]=bl(a),t.composing)return;const l=(o||t.type==="number")&&!/^0\d/.test(t.value)?Bo(t.value):t.value,u=e??"";l!==u&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===u)||(t.value=u))}},_m=["ctrl","shift","alt","meta"],ym={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>_m.some(n=>t[`${n}Key`]&&!e.includes(n))},vm=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...o)=>{for(let a=0;a<e.length;a++){const l=ym[e[a]];if(l&&l(r,e))return}return t(r,...o)}))},Em=Ue({patchProp:pm},qg);let Sl;function wm(){return Sl||(Sl=mg(Em))}const Im=((...t)=>{const e=wm().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Tm(s);if(!r)return;const o=e._component;!se(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,bm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function bm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Tm(t){return Re(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let sf;const Wi=t=>sf=t,rf=Symbol();function Zo(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ur;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ur||(ur={}));function Sm(){const t=Ju(!0),e=t.run(()=>Me({}));let n=[],s=[];const r=Ca({install(o){Wi(r),r._a=o,o.provide(rf,r),o.config.globalProperties.$pinia=r,s.forEach(a=>n.push(a)),s=[]},use(o){return this._a?n.push(o):s.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const of=()=>{};function Al(t,e,n,s=of){t.push(e);const r=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),s())};return!n&&Xu()&&op(r),r}function gs(t,...e){t.slice().forEach(n=>{n(...e)})}const Am=t=>t(),Cl=Symbol(),Co=Symbol();function ea(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Zo(r)&&Zo(s)&&t.hasOwnProperty(n)&&!Oe(s)&&!Cn(s)?t[n]=ea(r,s):t[n]=s}return t}const Cm=Symbol();function Rm(t){return!Zo(t)||!Object.prototype.hasOwnProperty.call(t,Cm)}const{assign:yn}=Object;function Pm(t){return!!(Oe(t)&&t.effect)}function Om(t,e,n,s){const{state:r,actions:o,getters:a}=e,l=n.state.value[t];let u;function f(){l||(n.state.value[t]=r?r():{});const d=Pp(n.state.value[t]);return yn(d,o,Object.keys(a||{}).reduce((g,v)=>(g[v]=Ca(st(()=>{Wi(n);const A=n._s.get(t);return a[v].call(A,A)})),g),{}))}return u=af(t,f,e,n,s,!0),u}function af(t,e,n={},s,r,o){let a;const l=yn({actions:{}},n),u={deep:!0};let f,d,g=[],v=[],A;const O=s.state.value[t];!o&&!O&&(s.state.value[t]={}),Me({});let x;function j(_){let m;f=d=!1,typeof _=="function"?(_(s.state.value[t]),m={type:ur.patchFunction,storeId:t,events:A}):(ea(s.state.value[t],_),m={type:ur.patchObject,payload:_,storeId:t,events:A});const b=x=Symbol();Ra().then(()=>{x===b&&(f=!0)}),d=!0,gs(g,m,s.state.value[t])}const H=o?function(){const{state:m}=n,b=m?m():{};this.$patch(I=>{yn(I,b)})}:of;function V(){a.stop(),g=[],v=[],s._s.delete(t)}const q=(_,m="")=>{if(Cl in _)return _[Co]=m,_;const b=function(){Wi(s);const I=Array.from(arguments),w=[],y=[];function le(re){w.push(re)}function Ae(re){y.push(re)}gs(v,{args:I,name:b[Co],store:X,after:le,onError:Ae});let ve;try{ve=_.apply(this&&this.$id===t?this:X,I)}catch(re){throw gs(y,re),re}return ve instanceof Promise?ve.then(re=>(gs(w,re),re)).catch(re=>(gs(y,re),Promise.reject(re))):(gs(w,ve),ve)};return b[Cl]=!0,b[Co]=m,b},G={_p:s,$id:t,$onAction:Al.bind(null,v),$patch:j,$reset:H,$subscribe(_,m={}){const b=Al(g,_,m.detached,()=>I()),I=a.run(()=>bs(()=>s.state.value[t],w=>{(m.flush==="sync"?d:f)&&_({storeId:t,type:ur.direct,events:A},w)},yn({},u,m)));return b},$dispose:V},X=Rr(G);s._s.set(t,X);const S=(s._a&&s._a.runWithContext||Am)(()=>s._e.run(()=>(a=Ju()).run(()=>e({action:q}))));for(const _ in S){const m=S[_];if(Oe(m)&&!Pm(m)||Cn(m))o||(O&&Rm(m)&&(Oe(m)?m.value=O[_]:ea(m,O[_])),s.state.value[t][_]=m);else if(typeof m=="function"){const b=q(m,_);S[_]=b,l.actions[_]=m}}return yn(X,S),yn(ge(X),S),Object.defineProperty(X,"$state",{get:()=>s.state.value[t],set:_=>{j(m=>{yn(m,_)})}}),s._p.forEach(_=>{yn(X,a.run(()=>_({store:X,app:s._a,pinia:s,options:l})))}),O&&o&&n.hydrate&&n.hydrate(X.$state,O),f=!0,d=!0,X}/*! #__NO_SIDE_EFFECTS__ */function Nm(t,e,n){let s;const r=typeof e=="function";s=r?n:e;function o(a,l){const u=lg();return a=a||(u?_t(rf,null):null),a&&Wi(a),a=sf,a._s.has(t)||(r?af(t,e,s,a):Om(t,s,a)),a._s.get(t)}return o.$id=t,o}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ys=typeof document<"u";function cf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function km(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cf(t.default)}const me=Object.assign;function Ro(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ct(r)?r.map(t):t(r)}return n}const hr=()=>{},Ct=Array.isArray;function Rl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const lf=/#/g,Dm=/&/g,Lm=/\//g,xm=/=/g,Mm=/\?/g,uf=/\+/g,Um=/%5B/g,Fm=/%5D/g,hf=/%5E/g,Vm=/%60/g,ff=/%7B/g,jm=/%7C/g,df=/%7D/g,Bm=/%20/g;function Ua(t){return t==null?"":encodeURI(""+t).replace(jm,"|").replace(Um,"[").replace(Fm,"]")}function Hm(t){return Ua(t).replace(ff,"{").replace(df,"}").replace(hf,"^")}function ta(t){return Ua(t).replace(uf,"%2B").replace(Bm,"+").replace(lf,"%23").replace(Dm,"%26").replace(Vm,"`").replace(ff,"{").replace(df,"}").replace(hf,"^")}function $m(t){return ta(t).replace(xm,"%3D")}function Wm(t){return Ua(t).replace(lf,"%23").replace(Mm,"%3F")}function Gm(t){return Wm(t).replace(Lm,"%2F")}function Tr(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Km=/\/$/,qm=t=>t.replace(Km,"");function Po(t,e,n="/"){let s,r={},o="",a="";const l=e.indexOf("#");let u=e.indexOf("?");return u=l>=0&&u>l?-1:u,u>=0&&(s=e.slice(0,u),o=e.slice(u,l>0?l:e.length),r=t(o.slice(1))),l>=0&&(s=s||e.slice(0,l),a=e.slice(l,e.length)),s=Ym(s??e,n),{fullPath:s+o+a,path:s,query:r,hash:Tr(a)}}function zm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Jm(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Rs(e.matched[s],n.matched[r])&&pf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Xm(t[n],e[n]))return!1;return!0}function Xm(t,e){return Ct(t)?Ol(t,e):Ct(e)?Ol(e,t):t===e}function Ol(t,e){return Ct(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Ym(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let o=n.length-1,a,l;for(a=0;a<s.length;a++)if(l=s[a],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(a).join("/")}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let na=(function(t){return t.pop="pop",t.push="push",t})({}),Oo=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function Qm(t){if(!t)if(ys){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qm(t)}const Zm=/^[^#]+#/;function e_(t,e){return t.replace(Zm,"#")+e}function t_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Gi=()=>({left:window.scrollX,top:window.scrollY});function n_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=t_(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Nl(t,e){return(history.state?history.state.position-e:-1)+t}const sa=new Map;function s_(t,e){sa.set(t,e)}function r_(t){const e=sa.get(t);return sa.delete(t),e}function i_(t){return typeof t=="string"||t&&typeof t=="object"}function gf(t){return typeof t=="string"||typeof t=="symbol"}let Ce=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const mf=Symbol("");Ce.MATCHER_NOT_FOUND+"",Ce.NAVIGATION_GUARD_REDIRECT+"",Ce.NAVIGATION_ABORTED+"",Ce.NAVIGATION_CANCELLED+"",Ce.NAVIGATION_DUPLICATED+"";function Ps(t,e){return me(new Error,{type:t,[mf]:!0},e)}function Gt(t,e){return t instanceof Error&&mf in t&&(e==null||!!(t.type&e))}const o_=["params","query","hash"];function a_(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of o_)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function c_(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(uf," "),o=r.indexOf("="),a=Tr(o<0?r:r.slice(0,o)),l=o<0?null:Tr(r.slice(o+1));if(a in e){let u=e[a];Ct(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function kl(t){let e="";for(let n in t){const s=t[n];if(n=$m(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ct(s)?s.map(r=>r&&ta(r)):[s&&ta(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function l_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ct(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const u_=Symbol(""),Dl=Symbol(""),Ki=Symbol(""),Fa=Symbol(""),ra=Symbol("");function Qs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function wn(t,e,n,s,r,o=a=>a()){const a=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,u)=>{const f=v=>{v===!1?u(Ps(Ce.NAVIGATION_ABORTED,{from:n,to:e})):v instanceof Error?u(v):i_(v)?u(Ps(Ce.NAVIGATION_GUARD_REDIRECT,{from:e,to:v})):(a&&s.enterCallbacks[r]===a&&typeof v=="function"&&a.push(v),l())},d=o(()=>t.call(s&&s.instances[r],e,n,f));let g=Promise.resolve(d);t.length<3&&(g=g.then(f)),g.catch(v=>u(v))})}function No(t,e,n,s,r=o=>o()){const o=[];for(const a of t)for(const l in a.components){let u=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(cf(u)){const f=(u.__vccOpts||u)[e];f&&o.push(wn(f,n,s,a,l,r))}else{let f=u();o.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const g=km(d)?d.default:d;a.mods[l]=d,a.components[l]=g;const v=(g.__vccOpts||g)[e];return v&&wn(v,n,s,a,l,r)()}))}}return o}function h_(t,e){const n=[],s=[],r=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const l=e.matched[a];l&&(t.matched.find(f=>Rs(f,l))?s.push(l):n.push(l));const u=t.matched[a];u&&(e.matched.find(f=>Rs(f,u))||r.push(u))}return[n,s,r]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let f_=()=>location.protocol+"//"+location.host;function _f(t,e){const{pathname:n,search:s,hash:r}=e,o=t.indexOf("#");if(o>-1){let a=r.includes(t.slice(o))?t.slice(o).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Pl(l,"")}return Pl(n,t)+s+r}function d_(t,e,n,s){let r=[],o=[],a=null;const l=({state:v})=>{const A=_f(t,location),O=n.value,x=e.value;let j=0;if(v){if(n.value=A,e.value=v,a&&a===O){a=null;return}j=x?v.position-x.position:0}else s(A);r.forEach(H=>{H(n.value,O,{delta:j,type:na.pop,direction:j?j>0?Oo.forward:Oo.back:Oo.unknown})})};function u(){a=n.value}function f(v){r.push(v);const A=()=>{const O=r.indexOf(v);O>-1&&r.splice(O,1)};return o.push(A),A}function d(){if(document.visibilityState==="hidden"){const{history:v}=window;if(!v.state)return;v.replaceState(me({},v.state,{scroll:Gi()}),"")}}function g(){for(const v of o)v();o=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:u,listen:f,destroy:g}}function Ll(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Gi():null}}function p_(t){const{history:e,location:n}=window,s={value:_f(t,n)},r={value:e.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(u,f,d){const g=t.indexOf("#"),v=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+u:f_()+t+u;try{e[d?"replaceState":"pushState"](f,"",v),r.value=f}catch(A){console.error(A),n[d?"replace":"assign"](v)}}function a(u,f){o(u,me({},e.state,Ll(r.value.back,u,r.value.forward,!0),f,{position:r.value.position}),!0),s.value=u}function l(u,f){const d=me({},r.value,e.state,{forward:u,scroll:Gi()});o(d.current,d,!0),o(u,me({},Ll(s.value,u,null),{position:d.position+1},f),!1),s.value=u}return{location:s,state:r,push:l,replace:a}}function g_(t){t=Qm(t);const e=p_(t),n=d_(t,e.state,e.location,e.replace);function s(o,a=!0){a||n.pauseListeners(),history.go(o)}const r=me({location:"",base:t,go:s,createHref:e_.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let Jn=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var De=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(De||{});const m_={type:Jn.Static,value:""},__=/[a-zA-Z0-9_]/;function y_(t){if(!t)return[[]];if(t==="/")return[[m_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(A){throw new Error(`ERR (${n})/"${f}": ${A}`)}let n=De.Static,s=n;const r=[];let o;function a(){o&&r.push(o),o=[]}let l=0,u,f="",d="";function g(){f&&(n===De.Static?o.push({type:Jn.Static,value:f}):n===De.Param||n===De.ParamRegExp||n===De.ParamRegExpEnd?(o.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:Jn.Param,value:f,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),f="")}function v(){f+=u}for(;l<t.length;){if(u=t[l++],u==="\\"&&n!==De.ParamRegExp){s=n,n=De.EscapeNext;continue}switch(n){case De.Static:u==="/"?(f&&g(),a()):u===":"?(g(),n=De.Param):v();break;case De.EscapeNext:v(),n=s;break;case De.Param:u==="("?n=De.ParamRegExp:__.test(u)?v():(g(),n=De.Static,u!=="*"&&u!=="?"&&u!=="+"&&l--);break;case De.ParamRegExp:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:n=De.ParamRegExpEnd:d+=u;break;case De.ParamRegExpEnd:g(),n=De.Static,u!=="*"&&u!=="?"&&u!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===De.ParamRegExp&&e(`Unfinished custom RegExp for param "${f}"`),g(),a(),r}const xl="[^/]+?",v_={sensitive:!1,strict:!1,start:!0,end:!0};var Ye=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Ye||{});const E_=/[.+*?^${}()[\]/\\]/g;function w_(t,e){const n=me({},v_,e),s=[];let r=n.start?"^":"";const o=[];for(const f of t){const d=f.length?[]:[Ye.Root];n.strict&&!f.length&&(r+="/");for(let g=0;g<f.length;g++){const v=f[g];let A=Ye.Segment+(n.sensitive?Ye.BonusCaseSensitive:0);if(v.type===Jn.Static)g||(r+="/"),r+=v.value.replace(E_,"\\$&"),A+=Ye.Static;else if(v.type===Jn.Param){const{value:O,repeatable:x,optional:j,regexp:H}=v;o.push({name:O,repeatable:x,optional:j});const V=H||xl;if(V!==xl){A+=Ye.BonusCustomRegExp;try{`${V}`}catch(G){throw new Error(`Invalid custom RegExp for param "${O}" (${V}): `+G.message)}}let q=x?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;g||(q=j&&f.length<2?`(?:/${q})`:"/"+q),j&&(q+="?"),r+=q,A+=Ye.Dynamic,j&&(A+=Ye.BonusOptional),x&&(A+=Ye.BonusRepeatable),V===".*"&&(A+=Ye.BonusWildcard)}d.push(A)}s.push(d)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=Ye.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function l(f){const d=f.match(a),g={};if(!d)return null;for(let v=1;v<d.length;v++){const A=d[v]||"",O=o[v-1];g[O.name]=A&&O.repeatable?A.split("/"):A}return g}function u(f){let d="",g=!1;for(const v of t){(!g||!d.endsWith("/"))&&(d+="/"),g=!1;for(const A of v)if(A.type===Jn.Static)d+=A.value;else if(A.type===Jn.Param){const{value:O,repeatable:x,optional:j}=A,H=O in f?f[O]:"";if(Ct(H)&&!x)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const V=Ct(H)?H.join("/"):H;if(!V)if(j)v.length<2&&(d.endsWith("/")?d=d.slice(0,-1):g=!0);else throw new Error(`Missing required param "${O}"`);d+=V}}return d||"/"}return{re:a,score:s,keys:o,parse:l,stringify:u}}function I_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===Ye.Static+Ye.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Ye.Static+Ye.Segment?1:-1:0}function yf(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const o=I_(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(Ml(s))return 1;if(Ml(r))return-1}return r.length-s.length}function Ml(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const b_={strict:!1,end:!0,sensitive:!1};function T_(t,e,n){const s=w_(y_(t.path),n),r=me(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function S_(t,e){const n=[],s=new Map;e=Rl(b_,e);function r(g){return s.get(g)}function o(g,v,A){const O=!A,x=Fl(g);x.aliasOf=A&&A.record;const j=Rl(e,g),H=[x];if("alias"in g){const G=typeof g.alias=="string"?[g.alias]:g.alias;for(const X of G)H.push(Fl(me({},x,{components:A?A.record.components:x.components,path:X,aliasOf:A?A.record:x})))}let V,q;for(const G of H){const{path:X}=G;if(v&&X[0]!=="/"){const ie=v.record.path,S=ie[ie.length-1]==="/"?"":"/";G.path=v.record.path+(X&&S+X)}if(V=T_(G,v,j),A?A.alias.push(V):(q=q||V,q!==V&&q.alias.push(V),O&&g.name&&!Vl(V)&&a(g.name)),vf(V)&&u(V),x.children){const ie=x.children;for(let S=0;S<ie.length;S++)o(ie[S],V,A&&A.children[S])}A=A||V}return q?()=>{a(q)}:hr}function a(g){if(gf(g)){const v=s.get(g);v&&(s.delete(g),n.splice(n.indexOf(v),1),v.children.forEach(a),v.alias.forEach(a))}else{const v=n.indexOf(g);v>-1&&(n.splice(v,1),g.record.name&&s.delete(g.record.name),g.children.forEach(a),g.alias.forEach(a))}}function l(){return n}function u(g){const v=R_(g,n);n.splice(v,0,g),g.record.name&&!Vl(g)&&s.set(g.record.name,g)}function f(g,v){let A,O={},x,j;if("name"in g&&g.name){if(A=s.get(g.name),!A)throw Ps(Ce.MATCHER_NOT_FOUND,{location:g});j=A.record.name,O=me(Ul(v.params,A.keys.filter(q=>!q.optional).concat(A.parent?A.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),g.params&&Ul(g.params,A.keys.map(q=>q.name))),x=A.stringify(O)}else if(g.path!=null)x=g.path,A=n.find(q=>q.re.test(x)),A&&(O=A.parse(x),j=A.record.name);else{if(A=v.name?s.get(v.name):n.find(q=>q.re.test(v.path)),!A)throw Ps(Ce.MATCHER_NOT_FOUND,{location:g,currentLocation:v});j=A.record.name,O=me({},v.params,g.params),x=A.stringify(O)}const H=[];let V=A;for(;V;)H.unshift(V.record),V=V.parent;return{name:j,path:x,params:O,matched:H,meta:C_(H)}}t.forEach(g=>o(g));function d(){n.length=0,s.clear()}return{addRoute:o,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:r}}function Ul(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Fl(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:A_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function A_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Vl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function C_(t){return t.reduce((e,n)=>me(e,n.meta),{})}function R_(t,e){let n=0,s=e.length;for(;n!==s;){const o=n+s>>1;yf(t,e[o])<0?s=o:n=o+1}const r=P_(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function P_(t){let e=t;for(;e=e.parent;)if(vf(e)&&yf(t,e)===0)return e}function vf({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function jl(t){const e=_t(Ki),n=_t(Fa),s=st(()=>{const u=Be(t.to);return e.resolve(u)}),r=st(()=>{const{matched:u}=s.value,{length:f}=u,d=u[f-1],g=n.matched;if(!d||!g.length)return-1;const v=g.findIndex(Rs.bind(null,d));if(v>-1)return v;const A=Bl(u[f-2]);return f>1&&Bl(d)===A&&g[g.length-1].path!==A?g.findIndex(Rs.bind(null,u[f-2])):v}),o=st(()=>r.value>-1&&L_(n.params,s.value.params)),a=st(()=>r.value>-1&&r.value===n.matched.length-1&&pf(n.params,s.value.params));function l(u={}){if(D_(u)){const f=e[Be(t.replace)?"replace":"push"](Be(t.to)).catch(hr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:st(()=>s.value.href),isActive:o,isExactActive:a,navigate:l}}function O_(t){return t.length===1?t[0]:t}const N_=Sh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:jl,setup(t,{slots:e}){const n=Rr(jl(t)),{options:s}=_t(Ki),r=st(()=>({[Hl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Hl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&O_(e.default(n));return t.custom?o:Ma("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),k_=N_;function D_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function L_(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ct(r)||r.length!==s.length||s.some((o,a)=>o!==r[a]))return!1}return!0}function Bl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hl=(t,e,n)=>t??e??n,x_=Sh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=_t(ra),r=st(()=>t.route||s.value),o=_t(Dl,0),a=st(()=>{let f=Be(o);const{matched:d}=r.value;let g;for(;(g=d[f])&&!g.components;)f++;return f}),l=st(()=>r.value.matched[a.value]);ni(Dl,st(()=>a.value+1)),ni(u_,l),ni(ra,r);const u=Me();return bs(()=>[u.value,l.value,t.name],([f,d,g],[v,A,O])=>{d&&(d.instances[g]=f,A&&A!==d&&f&&f===v&&(d.leaveGuards.size||(d.leaveGuards=A.leaveGuards),d.updateGuards.size||(d.updateGuards=A.updateGuards))),f&&d&&(!A||!Rs(d,A)||!v)&&(d.enterCallbacks[g]||[]).forEach(x=>x(f))},{flush:"post"}),()=>{const f=r.value,d=t.name,g=l.value,v=g&&g.components[d];if(!v)return $l(n.default,{Component:v,route:f});const A=g.props[d],O=A?A===!0?f.params:typeof A=="function"?A(f):A:null,j=Ma(v,me({},O,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(g.instances[d]=null)},ref:u}));return $l(n.default,{Component:j,route:f})||j}}});function $l(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const M_=x_;function U_(t){const e=S_(t.routes,t),n=t.parseQuery||c_,s=t.stringifyQuery||kl,r=t.history,o=Qs(),a=Qs(),l=Qs(),u=Ap(mn);let f=mn;ys&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ro.bind(null,k=>""+k),g=Ro.bind(null,Gm),v=Ro.bind(null,Tr);function A(k,z){let W,J;return gf(k)?(W=e.getRecordMatcher(k),J=z):J=k,e.addRoute(J,W)}function O(k){const z=e.getRecordMatcher(k);z&&e.removeRoute(z)}function x(){return e.getRoutes().map(k=>k.record)}function j(k){return!!e.getRecordMatcher(k)}function H(k,z){if(z=me({},z||u.value),typeof k=="string"){const C=Po(n,k,z.path),D=e.resolve({path:C.path},z),L=r.createHref(C.fullPath);return me(C,D,{params:v(D.params),hash:Tr(C.hash),redirectedFrom:void 0,href:L})}let W;if(k.path!=null)W=me({},k,{path:Po(n,k.path,z.path).path});else{const C=me({},k.params);for(const D in C)C[D]==null&&delete C[D];W=me({},k,{params:g(C)}),z.params=g(z.params)}const J=e.resolve(W,z),ce=k.hash||"";J.params=d(v(J.params));const E=zm(s,me({},k,{hash:Hm(ce),path:J.path})),T=r.createHref(E);return me({fullPath:E,hash:ce,query:s===kl?l_(k.query):k.query||{}},J,{redirectedFrom:void 0,href:T})}function V(k){return typeof k=="string"?Po(n,k,u.value.path):me({},k)}function q(k,z){if(f!==k)return Ps(Ce.NAVIGATION_CANCELLED,{from:z,to:k})}function G(k){return S(k)}function X(k){return G(me(V(k),{replace:!0}))}function ie(k,z){const W=k.matched[k.matched.length-1];if(W&&W.redirect){const{redirect:J}=W;let ce=typeof J=="function"?J(k,z):J;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=V(ce):{path:ce},ce.params={}),me({query:k.query,hash:k.hash,params:ce.path!=null?{}:k.params},ce)}}function S(k,z){const W=f=H(k),J=u.value,ce=k.state,E=k.force,T=k.replace===!0,C=ie(W,J);if(C)return S(me(V(C),{state:typeof C=="object"?me({},ce,C.state):ce,force:E,replace:T}),z||W);const D=W;D.redirectedFrom=z;let L;return!E&&Jm(s,J,W)&&(L=Ps(Ce.NAVIGATION_DUPLICATED,{to:D,from:J}),rt(J,J,!0,!1)),(L?Promise.resolve(L):b(D,J)).catch(N=>Gt(N)?Gt(N,Ce.NAVIGATION_GUARD_REDIRECT)?N:Pt(N):ue(N,D,J)).then(N=>{if(N){if(Gt(N,Ce.NAVIGATION_GUARD_REDIRECT))return S(me({replace:T},V(N.to),{state:typeof N.to=="object"?me({},ce,N.to.state):ce,force:E}),z||D)}else N=w(D,J,!0,T,ce);return I(D,J,N),N})}function _(k,z){const W=q(k,z);return W?Promise.reject(W):Promise.resolve()}function m(k){const z=vt.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(k):k()}function b(k,z){let W;const[J,ce,E]=h_(k,z);W=No(J.reverse(),"beforeRouteLeave",k,z);for(const C of J)C.leaveGuards.forEach(D=>{W.push(wn(D,k,z))});const T=_.bind(null,k,z);return W.push(T),$e(W).then(()=>{W=[];for(const C of o.list())W.push(wn(C,k,z));return W.push(T),$e(W)}).then(()=>{W=No(ce,"beforeRouteUpdate",k,z);for(const C of ce)C.updateGuards.forEach(D=>{W.push(wn(D,k,z))});return W.push(T),$e(W)}).then(()=>{W=[];for(const C of E)if(C.beforeEnter)if(Ct(C.beforeEnter))for(const D of C.beforeEnter)W.push(wn(D,k,z));else W.push(wn(C.beforeEnter,k,z));return W.push(T),$e(W)}).then(()=>(k.matched.forEach(C=>C.enterCallbacks={}),W=No(E,"beforeRouteEnter",k,z,m),W.push(T),$e(W))).then(()=>{W=[];for(const C of a.list())W.push(wn(C,k,z));return W.push(T),$e(W)}).catch(C=>Gt(C,Ce.NAVIGATION_CANCELLED)?C:Promise.reject(C))}function I(k,z,W){l.list().forEach(J=>m(()=>J(k,z,W)))}function w(k,z,W,J,ce){const E=q(k,z);if(E)return E;const T=z===mn,C=ys?history.state:{};W&&(J||T?r.replace(k.fullPath,me({scroll:T&&C&&C.scroll},ce)):r.push(k.fullPath,ce)),u.value=k,rt(k,z,W,T),Pt()}let y;function le(){y||(y=r.listen((k,z,W)=>{if(!Et.listening)return;const J=H(k),ce=ie(J,Et.currentRoute.value);if(ce){S(me(ce,{replace:!0,force:!0}),J).catch(hr);return}f=J;const E=u.value;ys&&s_(Nl(E.fullPath,W.delta),Gi()),b(J,E).catch(T=>Gt(T,Ce.NAVIGATION_ABORTED|Ce.NAVIGATION_CANCELLED)?T:Gt(T,Ce.NAVIGATION_GUARD_REDIRECT)?(S(me(V(T.to),{force:!0}),J).then(C=>{Gt(C,Ce.NAVIGATION_ABORTED|Ce.NAVIGATION_DUPLICATED)&&!W.delta&&W.type===na.pop&&r.go(-1,!1)}).catch(hr),Promise.reject()):(W.delta&&r.go(-W.delta,!1),ue(T,J,E))).then(T=>{T=T||w(J,E,!1),T&&(W.delta&&!Gt(T,Ce.NAVIGATION_CANCELLED)?r.go(-W.delta,!1):W.type===na.pop&&Gt(T,Ce.NAVIGATION_ABORTED|Ce.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),I(J,E,T)}).catch(hr)}))}let Ae=Qs(),ve=Qs(),re;function ue(k,z,W){Pt(k);const J=ve.list();return J.length?J.forEach(ce=>ce(k,z,W)):console.error(k),Promise.reject(k)}function nt(){return re&&u.value!==mn?Promise.resolve():new Promise((k,z)=>{Ae.add([k,z])})}function Pt(k){return re||(re=!k,le(),Ae.list().forEach(([z,W])=>k?W(k):z()),Ae.reset()),k}function rt(k,z,W,J){const{scrollBehavior:ce}=t;if(!ys||!ce)return Promise.resolve();const E=!W&&r_(Nl(k.fullPath,0))||(J||!W)&&history.state&&history.state.scroll||null;return Ra().then(()=>ce(k,z,E)).then(T=>T&&n_(T)).catch(T=>ue(T,k,z))}const Fe=k=>r.go(k);let Ht;const vt=new Set,Et={currentRoute:u,listening:!0,addRoute:A,removeRoute:O,clearRoutes:e.clearRoutes,hasRoute:j,getRoutes:x,resolve:H,options:t,push:G,replace:X,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:o.add,beforeResolve:a.add,afterEach:l.add,onError:ve.add,isReady:nt,install(k){k.component("RouterLink",k_),k.component("RouterView",M_),k.config.globalProperties.$router=Et,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Be(u)}),ys&&!Ht&&u.value===mn&&(Ht=!0,G(r.location).catch(J=>{}));const z={};for(const J in mn)Object.defineProperty(z,J,{get:()=>u.value[J],enumerable:!0});k.provide(Ki,Et),k.provide(Fa,hh(z)),k.provide(ra,u);const W=k.unmount;vt.add(k),k.unmount=function(){vt.delete(k),vt.size<1&&(f=mn,y&&y(),y=null,u.value=mn,Ht=!1,re=!1),W()}}};function $e(k){return k.reduce((z,W)=>z.then(()=>m(W)),Promise.resolve())}return Et}function F_(){return _t(Ki)}function Ef(t){return _t(Fa)}const V_=()=>{};var Wl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},j_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],a=t[n++],l=t[n++],u=((r&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},If={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const o=t[r],a=r+1<t.length,l=a?t[r+1]:0,u=r+2<t.length,f=u?t[r+2]:0,d=o>>2,g=(o&3)<<4|l>>4;let v=(l&15)<<2|f>>6,A=f&63;u||(A=64,a||(v=64)),s.push(n[d],n[g],n[v],n[A])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):j_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const f=r<t.length?n[t.charAt(r)]:64;++r;const g=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||l==null||f==null||g==null)throw new B_;const v=o<<2|l>>4;if(s.push(v),f!==64){const A=l<<4&240|f>>2;if(s.push(A),g!==64){const O=f<<6&192|g;s.push(O)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class B_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const H_=function(t){const e=wf(t);return If.encodeByteArray(e,!0)},bi=function(t){return H_(t).replace(/\./g,"")},bf=function(t){try{return If.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=()=>$_().__FIREBASE_DEFAULTS__,G_=()=>{if(typeof process>"u"||typeof Wl>"u")return;const t=Wl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},K_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bf(t[1]);return e&&JSON.parse(e)},Va=()=>{try{return V_()||W_()||G_()||K_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tf=t=>Va()?.emulatorHosts?.[t],q_=t=>{const e=Tf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Sf=()=>Va()?.config,Af=t=>Va()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cf(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[bi(JSON.stringify(n)),bi(JSON.stringify(a)),""].join(".")}const fr={};function X_(){const t={prod:[],emulator:[]};for(const e of Object.keys(fr))fr[e]?t.emulator.push(e):t.prod.push(e);return t}function Y_(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Gl=!1;function Rf(t,e){if(typeof window>"u"||typeof document>"u"||!Nr(window.location.host)||fr[t]===e||fr[t]||Gl)return;fr[t]=e;function n(v){return`__firebase__banner__${v}`}const s="__firebase__banner",o=X_().prod.length>0;function a(){const v=document.getElementById(s);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function u(v,A){v.setAttribute("width","24"),v.setAttribute("id",A),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function f(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Gl=!0,a()},v}function d(v,A){v.setAttribute("id",A),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=Y_(s),A=n("text"),O=document.getElementById(A)||document.createElement("span"),x=n("learnmore"),j=document.getElementById(x)||document.createElement("a"),H=n("preprendIcon"),V=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const q=v.element;l(q),d(j,x);const G=f();u(V,H),q.append(V,O,j,G),document.body.appendChild(q)}o?(O.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Q_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function Z_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ey(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ty(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ny(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sy(){try{return typeof indexedDB=="object"}catch{return!1}}function ry(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="FirebaseError";class an extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=iy,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?oy(o,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new an(r,l,s)}}function oy(t,e){return t.replace(ay,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ay=/\{\$([^}]+)}/g;function cy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ns(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const o=t[r],a=e[r];if(Kl(o)&&Kl(a)){if(!ns(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Kl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function tr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,o]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(o)}}),e}function nr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ly(t,e){const n=new uy(t,e);return n.subscribe.bind(n)}class uy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hy(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ko),r.error===void 0&&(r.error=ko),r.complete===void 0&&(r.complete=ko);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ko(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t){return t&&t._delegate?t._delegate:t}class ss{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new z_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(py(e))try{this.getOrInitializeService({instanceIdentifier:Gn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=Gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gn){return this.instances.has(e)}getOptions(e=Gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);s===l&&a.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gn){return this.component?this.component.multipleInstances?e:Gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dy(t){return t===Gn?void 0:t}function py(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const my={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},_y=ye.INFO,yy={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},vy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=yy[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ja{constructor(e){this.name=e,this._logLevel=_y,this._logHandler=vy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?my[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const Ey=(t,e)=>e.some(n=>t instanceof n);let ql,zl;function wy(){return ql||(ql=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Iy(){return zl||(zl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pf=new WeakMap,ia=new WeakMap,Of=new WeakMap,Do=new WeakMap,Ba=new WeakMap;function by(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(Rn(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Pf.set(n,t)}).catch(()=>{}),Ba.set(e,t),e}function Ty(t){if(ia.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});ia.set(t,e)}let oa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ia.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Of.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sy(t){oa=t(oa)}function Ay(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Lo(this),e,...n);return Of.set(s,e.sort?e.sort():[e]),Rn(s)}:Iy().includes(t)?function(...e){return t.apply(Lo(this),e),Rn(Pf.get(this))}:function(...e){return Rn(t.apply(Lo(this),e))}}function Cy(t){return typeof t=="function"?Ay(t):(t instanceof IDBTransaction&&Ty(t),Ey(t,wy())?new Proxy(t,oa):t)}function Rn(t){if(t instanceof IDBRequest)return by(t);if(Do.has(t))return Do.get(t);const e=Cy(t);return e!==t&&(Do.set(t,e),Ba.set(e,t)),e}const Lo=t=>Ba.get(t);function Ry(t,e,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(t,e),l=Rn(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Rn(a.result),u.oldVersion,u.newVersion,Rn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),r&&u.addEventListener("versionchange",f=>r(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Py=["get","getKey","getAll","getAllKeys","count"],Oy=["put","add","delete","clear"],xo=new Map;function Jl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xo.get(e))return xo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Oy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Py.includes(n)))return;const o=async function(a,...l){const u=this.transaction(a,r?"readwrite":"readonly");let f=u.store;return s&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),r&&u.done]))[0]};return xo.set(e,o),o}Sy(t=>({...t,get:(e,n,s)=>Jl(e,n)||t.get(e,n,s),has:(e,n)=>!!Jl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ky(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ky(t){return t.getComponent()?.type==="VERSION"}const aa="@firebase/app",Xl="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new ja("@firebase/app"),Dy="@firebase/app-compat",Ly="@firebase/analytics-compat",xy="@firebase/analytics",My="@firebase/app-check-compat",Uy="@firebase/app-check",Fy="@firebase/auth",Vy="@firebase/auth-compat",jy="@firebase/database",By="@firebase/data-connect",Hy="@firebase/database-compat",$y="@firebase/functions",Wy="@firebase/functions-compat",Gy="@firebase/installations",Ky="@firebase/installations-compat",qy="@firebase/messaging",zy="@firebase/messaging-compat",Jy="@firebase/performance",Xy="@firebase/performance-compat",Yy="@firebase/remote-config",Qy="@firebase/remote-config-compat",Zy="@firebase/storage",ev="@firebase/storage-compat",tv="@firebase/firestore",nv="@firebase/ai",sv="@firebase/firestore-compat",rv="firebase",iv="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="[DEFAULT]",ov={[aa]:"fire-core",[Dy]:"fire-core-compat",[xy]:"fire-analytics",[Ly]:"fire-analytics-compat",[Uy]:"fire-app-check",[My]:"fire-app-check-compat",[Fy]:"fire-auth",[Vy]:"fire-auth-compat",[jy]:"fire-rtdb",[By]:"fire-data-connect",[Hy]:"fire-rtdb-compat",[$y]:"fire-fn",[Wy]:"fire-fn-compat",[Gy]:"fire-iid",[Ky]:"fire-iid-compat",[qy]:"fire-fcm",[zy]:"fire-fcm-compat",[Jy]:"fire-perf",[Xy]:"fire-perf-compat",[Yy]:"fire-rc",[Qy]:"fire-rc-compat",[Zy]:"fire-gcs",[ev]:"fire-gcs-compat",[tv]:"fire-fst",[sv]:"fire-fst-compat",[nv]:"fire-vertex","fire-js":"fire-js",[rv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new Map,av=new Map,la=new Map;function Yl(t,e){try{t.container.addComponent(e)}catch(n){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Os(t){const e=t.name;if(la.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;la.set(e,t);for(const n of Ti.values())Yl(n,t);for(const n of av.values())Yl(n,t);return!0}function Ha(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new kr("app","Firebase",cv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=iv;function Nf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:ca,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Pn.create("bad-app-name",{appName:String(r)});if(n||(n=Sf()),!n)throw Pn.create("no-options");const o=Ti.get(r);if(o){if(ns(n,o.options)&&ns(s,o.config))return o;throw Pn.create("duplicate-app",{appName:r})}const a=new gy(r);for(const u of la.values())a.addComponent(u);const l=new lv(n,s,a);return Ti.set(r,l),l}function kf(t=ca){const e=Ti.get(t);if(!e&&t===ca&&Sf())return Nf();if(!e)throw Pn.create("no-app",{appName:t});return e}function On(t,e,n){let s=ov[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(a.join(" "));return}Os(new ss(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="firebase-heartbeat-database",hv=1,Sr="firebase-heartbeat-store";let Mo=null;function Df(){return Mo||(Mo=Ry(uv,hv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Sr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),Mo}async function fv(t){try{const n=(await Df()).transaction(Sr),s=await n.objectStore(Sr).get(Lf(t));return await n.done,s}catch(e){if(e instanceof an)sn.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e?.message});sn.warn(n.message)}}}async function Ql(t,e){try{const s=(await Df()).transaction(Sr,"readwrite");await s.objectStore(Sr).put(e,Lf(t)),await s.done}catch(n){if(n instanceof an)sn.warn(n.message);else{const s=Pn.create("idb-set",{originalErrorMessage:n?.message});sn.warn(s.message)}}}function Lf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=1024,pv=30;class gv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _v(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zl();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>pv){const r=yv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){sn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zl(),{heartbeatsToSend:n,unsentEntries:s}=mv(this._heartbeatsCache.heartbeats),r=bi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return sn.warn(e),""}}}function Zl(){return new Date().toISOString().substring(0,10)}function mv(t,e=dv){const n=[];let s=t.slice();for(const r of t){const o=n.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),eu(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),eu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _v{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sy()?ry().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fv(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ql(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ql(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function eu(t){return bi(JSON.stringify({version:2,heartbeats:t})).length}function yv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t){Os(new ss("platform-logger",e=>new Ny(e),"PRIVATE")),Os(new ss("heartbeat",e=>new gv(e),"PRIVATE")),On(aa,Xl,t),On(aa,Xl,"esm2020"),On("fire-js","")}vv("");function xf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ev=xf,Mf=new kr("auth","Firebase",xf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new ja("@firebase/auth");function wv(t,...e){Si.logLevel<=ye.WARN&&Si.warn(`Auth (${Ds}): ${t}`,...e)}function ai(t,...e){Si.logLevel<=ye.ERROR&&Si.error(`Auth (${Ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,...e){throw $a(t,...e)}function Vt(t,...e){return $a(t,...e)}function Uf(t,e,n){const s={...Ev(),[e]:n};return new kr("auth","Firebase",s).create(e,{appName:t.name})}function en(t){return Uf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $a(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Mf.create(t,...e)}function te(t,e,...n){if(!t)throw $a(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ai(e),new Error(e)}function rn(t,e){t||Qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(){return typeof self<"u"&&self.location?.href||""}function Iv(){return tu()==="http:"||tu()==="https:"}function tu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Iv()||ey()||"connection"in navigator)?navigator.onLine:!0}function Tv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Q_()||ty()}get(){return bv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Cv=new Lr(3e4,6e4);function xn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function cn(t,e,n,s,r={}){return Vf(t,r,async()=>{let o={},a={};s&&(e==="GET"?a=s:o={body:JSON.stringify(s)});const l=Dr({key:t.config.apiKey,...a}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const f={method:e,headers:u,...o};return Z_()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&Nr(t.emulatorConfig.host)&&(f.credentials="include"),Ff.fetch()(await jf(t,t.config.apiHost,n,l),f)})}async function Vf(t,e,n){t._canInitEmulator=!1;const s={...Sv,...e};try{const r=new Pv(t),o=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Qr(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,f]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qr(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Qr(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Qr(t,"user-disabled",a);const d=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Uf(t,d,f);Rt(t,d)}}catch(r){if(r instanceof an)throw r;Rt(t,"network-request-failed",{message:String(r)})}}async function xr(t,e,n,s,r={}){const o=await cn(t,e,n,s,r);return"mfaPendingCredential"in o&&Rt(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function jf(t,e,n,s){const r=`${e}${n}?${s}`,o=t,a=o.config.emulator?Wa(t.config,r):`${t.config.apiScheme}://${r}`;return Av.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function Rv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Vt(this.auth,"network-request-failed")),Cv.get())})}}function Qr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Vt(t,e,s);return r.customData._tokenResponse=n,r}function nu(t){return t!==void 0&&t.enterprise!==void 0}class Ov{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Rv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Nv(t,e){return cn(t,"GET","/v2/recaptchaConfig",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(t,e){return cn(t,"POST","/v1/accounts:delete",e)}async function Ai(t,e){return cn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dv(t,e=!1){const n=Bt(t),s=await n.getIdToken(e),r=Ga(s);te(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,a=o?.sign_in_provider;return{claims:r,token:s,authTime:dr(Uo(r.auth_time)),issuedAtTime:dr(Uo(r.iat)),expirationTime:dr(Uo(r.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Uo(t){return Number(t)*1e3}function Ga(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ai("JWT malformed, contained fewer than 3 sections"),null;try{const r=bf(n);return r?JSON.parse(r):(ai("Failed to decode base64 JWT payload"),null)}catch(r){return ai("Caught error parsing JWT payload as JSON",r?.toString()),null}}function su(t){const e=Ga(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof an&&Lv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Lv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=dr(this.lastLoginAt),this.creationTime=dr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t){const e=t.auth,n=await t.getIdToken(),s=await Ns(t,Ai(e,{idToken:n}));te(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=r.providerUserInfo?.length?Bf(r.providerUserInfo):[],a=Uv(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!a?.length,f=l?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ha(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function Mv(t){const e=Bt(t);await Ci(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Uv(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Bf(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(t,e){const n=await Vf(t,{},async()=>{const s=Dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,a=await jf(t,r,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:s};return t.emulatorConfig&&Nr(t.emulatorConfig.host)&&(u.credentials="include"),Ff.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Vv(t,e){return cn(t,"POST","/v2/accounts:revokeToken",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):su(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=su(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:o}=await Fv(e,n);this.updateTokensAndExpiration(s,r,Number(o))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:o}=n,a=new Ts;return s&&(te(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(te(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),o&&(te(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ts,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bt{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new xv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ha(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ns(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Dv(this,e)}reload(){return Mv(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ci(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gt(this.auth.app))return Promise.reject(en(this.auth));const e=await this.getIdToken();return await Ns(this,kv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,o=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,f=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:g,emailVerified:v,isAnonymous:A,providerData:O,stsTokenManager:x}=n;te(g&&x,e,"internal-error");const j=Ts.fromJSON(this.name,x);te(typeof g=="string",e,"internal-error"),_n(s,e.name),_n(r,e.name),te(typeof v=="boolean",e,"internal-error"),te(typeof A=="boolean",e,"internal-error"),_n(o,e.name),_n(a,e.name),_n(l,e.name),_n(u,e.name),_n(f,e.name),_n(d,e.name);const H=new bt({uid:g,auth:e,email:r,emailVerified:v,displayName:s,isAnonymous:A,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:j,createdAt:f,lastLoginAt:d});return O&&Array.isArray(O)&&(H.providerData=O.map(V=>({...V}))),u&&(H._redirectEventId=u),H}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ts;r.updateFromServerResponse(n);const o=new bt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ci(o),o}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];te(r.localId!==void 0,"internal-error");const o=r.providerUserInfo!==void 0?Bf(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!o?.length,l=new Ts;l.updateFromIdToken(s);const u=new bt({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ha(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!o?.length};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=new Map;function Zt(t){rn(t instanceof Function,"Expected a class definition");let e=ru.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ru.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hf.type="NONE";const iu=Hf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:o}=this.auth;this.fullUserKey=ci(this.userKey,r.apiKey,o),this.fullPersistenceKey=ci("persistence",r.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ai(this.auth,{idToken:e}).catch(()=>{});return n?bt._fromGetAccountInfoResponse(this.auth,n,e):null}return bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ss(Zt(iu),e,s);const r=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=r[0]||Zt(iu);const a=ci(s,e.config.apiKey,e.name);let l=null;for(const f of n)try{const d=await f._get(a);if(d){let g;if(typeof d=="string"){const v=await Ai(e,{idToken:d}).catch(()=>{});if(!v)break;g=await bt._fromGetAccountInfoResponse(e,v,d)}else g=bt._fromJSON(e,d);f!==o&&(l=g),o=f;break}}catch{}const u=r.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Ss(o,e,s):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new Ss(o,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($f(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zf(e))return"Blackberry";if(Jf(e))return"Webos";if(Wf(e))return"Safari";if((e.includes("chrome/")||Gf(e))&&!e.includes("edge/"))return"Chrome";if(qf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function $f(t=tt()){return/firefox\//i.test(t)}function Wf(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gf(t=tt()){return/crios\//i.test(t)}function Kf(t=tt()){return/iemobile/i.test(t)}function qf(t=tt()){return/android/i.test(t)}function zf(t=tt()){return/blackberry/i.test(t)}function Jf(t=tt()){return/webos/i.test(t)}function Ka(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jv(t=tt()){return Ka(t)&&!!window.navigator?.standalone}function Bv(){return ny()&&document.documentMode===10}function Xf(t=tt()){return Ka(t)||qf(t)||Jf(t)||zf(t)||/windows phone/i.test(t)||Kf(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t,e=[]){let n;switch(t){case"Browser":n=ou(tt());break;case"Worker":n=`${ou(tt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=o=>new Promise((a,l)=>{try{const u=e(o);a(u)}catch(u){l(u)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(t,e={}){return cn(t,"GET","/v2/passwordPolicy",xn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=6;class Gv{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Wv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new au(this),this.idTokenSubscription=new au(this),this.beforeStateQueue=new Hv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ai(this,{idToken:e}),s=await bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ci(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gt(this.app))return Promise.reject(en(this));const n=e?Bt(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gt(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gt(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $v(this),n=new Gv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new kr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Vv(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&wv(`Error while retrieving App Check token: ${e.error}`),e?.token}}function cs(t){return Bt(t)}class au{constructor(e){this.auth=e,this.observer=null,this.addObserver=ly(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qv(t){qi=t}function Qf(t){return qi.loadJS(t)}function zv(){return qi.recaptchaEnterpriseScript}function Jv(){return qi.gapiScript}function Xv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Yv{constructor(){this.enterprise=new Qv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Qv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Zv="recaptcha-enterprise",Zf="NO_RECAPTCHA";class eE{constructor(e){this.type=Zv,this.auth=cs(e)}async verify(e="verify",n=!1){async function s(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{Nv(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new Ov(u);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,a(f.siteKey)}}).catch(u=>{l(u)})})}function r(o,a,l){const u=window.grecaptcha;nu(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(f=>{a(f)}).catch(()=>{a(Zf)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Yv().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{s(this.auth).then(l=>{if(!n&&nu(window.grecaptcha))r(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=zv();u.length!==0&&(u+=l),Qf(u).then(()=>{r(l,o,a)}).catch(f=>{a(f)})}}).catch(l=>{a(l)})})}}async function cu(t,e,n,s=!1,r=!1){const o=new eE(t);let a;if(r)a=Zf;else try{a=await o.verify(n)}catch{a=await o.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,f=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:f,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function fa(t,e,n,s,r){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await cu(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await cu(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t,e){const n=Ha(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(ns(o,e??{}))return r;Rt(r,"already-initialized")}return n.initialize({options:e})}function nE(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Zt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function sE(t,e,n){const s=cs(t);te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,o=ed(e),{host:a,port:l}=rE(e),u=l===null?"":`:${l}`,f={url:`${o}//${a}${u}/`},d=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),te(ns(f,s.config.emulator)&&ns(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,Nr(a)?(Cf(`${o}//${a}${u}`),Rf("Auth",!0)):iE()}function ed(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rE(t){const e=ed(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const o=r[1];return{host:o,port:lu(s.substr(o.length+1))}}else{const[o,a]=s.split(":");return{host:o,port:lu(a)}}}function lu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function oE(t,e){return cn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(t,e){return xr(t,"POST","/v1/accounts:signInWithPassword",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(t,e){return xr(t,"POST","/v1/accounts:signInWithEmailLink",xn(t,e))}async function lE(t,e){return xr(t,"POST","/v1/accounts:signInWithEmailLink",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends qa{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ar(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ar(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fa(e,n,"signInWithPassword",aE);case"emailLink":return cE(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fa(e,s,"signUpPassword",oE);case"emailLink":return lE(e,{idToken:n,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t,e){return xr(t,"POST","/v1/accounts:signInWithIdp",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="http://localhost";class rs extends qa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...o}=n;if(!s||!r)return null;const a=new rs(s,r);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,As(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:uE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Dr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fE(t){const e=tr(nr(t)).link,n=e?tr(nr(e)).deep_link_id:null,s=tr(nr(t)).deep_link_id;return(s?tr(nr(s)).link:null)||s||n||e||t}class za{constructor(e){const n=tr(nr(e)),s=n.apiKey??null,r=n.oobCode??null,o=hE(n.mode??null);te(s&&r&&o,"argument-error"),this.apiKey=s,this.operation=o,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=fE(e);try{return new za(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.providerId=Ls.PROVIDER_ID}static credential(e,n){return Ar._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=za.parseLink(n);return te(s,"argument-error"),Ar._fromEmailAndCode(e,s.code,s.tenantId)}}Ls.PROVIDER_ID="password";Ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends td{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Mr{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return bn.credential(n,s)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Mr{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Mr{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(t,e){return xr(t,"POST","/v1/accounts:signUp",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const o=await bt._fromIdTokenResponse(e,s,r),a=uu(s);return new is({user:o,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=uu(s);return new is({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function uu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends an{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ri.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ri(e,n,s,r)}}function nd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ri._fromErrorAndOperation(t,o,e,s):o})}async function pE(t,e,n=!1){const s=await Ns(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return is._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(t,e,n=!1){const{auth:s}=t;if(gt(s.app))return Promise.reject(en(s));const r="reauthenticate";try{const o=await Ns(t,nd(s,r,e,t),n);te(o.idToken,s,"internal-error");const a=Ga(o.idToken);te(a,s,"internal-error");const{sub:l}=a;return te(t.uid===l,s,"user-mismatch"),is._forOperation(t,r,o)}catch(o){throw o?.code==="auth/user-not-found"&&Rt(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sd(t,e,n=!1){if(gt(t.app))return Promise.reject(en(t));const s="signIn",r=await nd(t,s,e),o=await is._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(o.user),o}async function mE(t,e){return sd(cs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rd(t){const e=cs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _E(t,e,n){if(gt(t.app))return Promise.reject(en(t));const s=cs(t),a=await fa(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dE).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&rd(t),u}),l=await is._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function yE(t,e,n){return gt(t.app)?Promise.reject(en(t)):mE(Bt(t),Ls.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&rd(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(t,e){return cn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hu(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Bt(t),o={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},a=await Ns(s,vE(s.auth,o));s.displayName=a.displayName||null,s.photoURL=a.photoUrl||null;const l=s.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(a)}function EE(t,e,n,s){return Bt(t).onIdTokenChanged(e,n,s)}function wE(t,e,n){return Bt(t).beforeAuthStateChanged(e,n)}function IE(t,e,n,s){return Bt(t).onAuthStateChanged(e,n,s)}function bE(t){return Bt(t).signOut()}const Pi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pi,"1"),this.storage.removeItem(Pi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=1e3,SE=10;class od extends id{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},o=this.storage.getItem(s);Bv()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,SE):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},TE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}od.type="LOCAL";const AE=od;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends id{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ad.type="SESSION";const cd=ad;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new zi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:o}=n.data,a=this.handlersMap[r];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(a).map(async f=>f(n.origin,o)),u=await CE(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const f=Ja("",20);r.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const v=g;if(v.data.eventId===f)switch(v.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(v.data.response);break;default:clearTimeout(d),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function PE(t){jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function OE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NE(){return navigator?.serviceWorker?.controller||null}function kE(){return ld()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="firebaseLocalStorageDb",DE=1,Oi="firebaseLocalStorage",hd="fbase_key";class Ur{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ji(t,e){return t.transaction([Oi],e?"readwrite":"readonly").objectStore(Oi)}function LE(){const t=indexedDB.deleteDatabase(ud);return new Ur(t).toPromise()}function da(){const t=indexedDB.open(ud,DE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Oi,{keyPath:hd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Oi)?e(s):(s.close(),await LE(),e(await da()))})})}async function fu(t,e,n){const s=Ji(t,!0).put({[hd]:e,value:n});return new Ur(s).toPromise()}async function xE(t,e){const n=Ji(t,!1).get(e),s=await new Ur(n).toPromise();return s===void 0?null:s.value}function du(t,e){const n=Ji(t,!0).delete(e);return new Ur(n).toPromise()}const ME=800,UE=3;class fd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await da(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>UE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ld()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zi._getInstance(kE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await OE(),!this.activeServiceWorker)return;this.sender=new RE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await da();return await fu(e,Pi,"1"),await du(e,Pi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>fu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>xE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>du(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=Ji(r,!1).getAll();return new Ur(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:o}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ME)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fd.type="LOCAL";const FE=fd;new Lr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e){return e?Zt(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends qa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jE(t){return sd(t.auth,new Xa(t),t.bypassAuthState)}function BE(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),gE(n,new Xa(t),t.bypassAuthState)}async function HE(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),pE(n,new Xa(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,s,r,o=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:s,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jE;case"linkViaPopup":case"linkViaRedirect":return HE;case"reauthViaPopup":case"reauthViaRedirect":return BE;default:Rt(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=new Lr(2e3,1e4);class vs extends dd{constructor(e,n,s,r,o){super(e,n,r,o),this.provider=s,this.authWindow=null,this.pollId=null,vs.currentPopupAction&&vs.currentPopupAction.cancel(),vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=Ja();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$E.get())};e()}}vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="pendingRedirect",li=new Map;class GE extends dd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=li.get(this.auth._key());if(!e){try{const s=await KE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}li.set(this.auth._key(),e)}return this.bypassAuthState||li.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KE(t,e){const n=JE(e),s=zE(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function qE(t,e){li.set(t._key(),e)}function zE(t){return Zt(t._redirectPersistence)}function JE(t){return ci(WE,t.config.apiKey,t.name)}async function XE(t,e,n=!1){if(gt(t.app))return Promise.reject(en(t));const s=cs(t),r=VE(s,e),a=await new GE(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=600*1e3;class QE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!pd(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Vt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YE&&this.cachedEventUids.clear(),this.cachedEventUids.has(pu(e))}saveEventToCache(e){this.cachedEventUids.add(pu(e)),this.lastProcessedEventTime=Date.now()}}function pu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pd({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function ZE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(t,e={}){return cn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nw=/^https?/;async function sw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ew(t);for(const n of e)try{if(rw(n))return}catch{}Rt(t,"unauthorized-domain")}function rw(t){const e=ua(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!nw.test(n))return!1;if(tw.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=new Lr(3e4,6e4);function gu(){const t=jt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ow(t){return new Promise((e,n)=>{function s(){gu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gu(),n(Vt(t,"network-request-failed"))},timeout:iw.get()})}if(jt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(jt().gapi?.load)s();else{const r=Xv("iframefcb");return jt()[r]=()=>{gapi.load?s():n(Vt(t,"network-request-failed"))},Qf(`${Jv()}?onload=${r}`).catch(o=>n(o))}}).catch(e=>{throw ui=null,e})}let ui=null;function aw(t){return ui=ui||ow(t),ui}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=new Lr(5e3,15e3),lw="__/auth/iframe",uw="emulator/auth/iframe",hw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dw(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wa(e,uw):`https://${t.config.authDomain}/${lw}`,s={apiKey:e.apiKey,appName:t.name,v:Ds},r=fw.get(t.config.apiHost);r&&(s.eid=r);const o=t._getFrameworks();return o.length&&(s.fw=o.join(",")),`${n}?${Dr(s).slice(1)}`}async function pw(t){const e=await aw(t),n=jt().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:dw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hw,dontclear:!0},s=>new Promise(async(r,o)=>{await s.restyle({setHideOnLeave:!1});const a=Vt(t,"network-request-failed"),l=jt().setTimeout(()=>{o(a)},cw.get());function u(){jt().clearTimeout(l),r(s)}s.ping(u).then(u,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mw=500,_w=600,yw="_blank",vw="http://localhost";class mu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ew(t,e,n,s=mw,r=_w){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const u={...gw,width:s.toString(),height:r.toString(),top:o,left:a},f=tt().toLowerCase();n&&(l=Gf(f)?yw:n),$f(f)&&(e=e||vw,u.scrollbars="yes");const d=Object.entries(u).reduce((v,[A,O])=>`${v}${A}=${O},`,"");if(jv(f)&&l!=="_self")return ww(e||"",l),new mu(null);const g=window.open(e||"",l,d);te(g,t,"popup-blocked");try{g.focus()}catch{}return new mu(g)}function ww(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="__/auth/handler",bw="emulator/auth/handler",Tw=encodeURIComponent("fac");async function _u(t,e,n,s,r,o){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ds,eventId:r};if(e instanceof td){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",cy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof Mr){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),f=u?`#${Tw}=${encodeURIComponent(u)}`:"";return`${Sw(t)}?${Dr(l).slice(1)}${f}`}function Sw({config:t}){return t.emulator?Wa(t,bw):`https://${t.authDomain}/${Iw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="webStorageSupport";class Aw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cd,this._completeRedirectFn=XE,this._overrideRedirectResult=qE}async _openPopup(e,n,s,r){rn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await _u(e,n,s,ua(),r);return Ew(e,o,Ja())}async _openRedirect(e,n,s,r){await this._originValidation(e);const o=await _u(e,n,s,ua(),r);return PE(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:o}=this.eventManagers[n];return r?Promise.resolve(r):(rn(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await pw(e),s=new QE(e);return n.register("authEvent",r=>(te(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fo,{type:Fo},r=>{const o=r?.[0]?.[Fo];o!==void 0&&n(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xf()||Wf()||Ka()}}const Cw=Aw;var yu="@firebase/auth",vu="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ow(t){Os(new ss("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yf(t)},f=new Kv(s,r,o,u);return nE(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Os(new ss("auth-internal",e=>{const n=cs(e.getProvider("auth").getImmediate());return(s=>new Rw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(yu,vu,Pw(t)),On(yu,vu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=300,kw=Af("authIdTokenMaxAge")||Nw;let Eu=null;const Dw=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>kw)return;const r=n?.token;Eu!==r&&(Eu=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function gd(t=kf()){const e=Ha(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tE(t,{popupRedirectResolver:Cw,persistence:[FE,AE,cd]}),s=Af("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(s,location.origin);if(location.origin===o.origin){const a=Dw(o.toString());wE(n,a,()=>a(n.currentUser)),EE(n,l=>a(l))}}const r=Tf("auth");return r&&sE(n,`http://${r}`),n}function Lw(){return document.getElementsByTagName("head")?.[0]??document}qv({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const o=Vt("internal-error");o.customData=r,n(o)},s.type="text/javascript",s.charset="UTF-8",Lw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ow("Browser");const md=Nm("auth",()=>{const t=Me(null),e=Me(null),n=Me(!0),s=gd();return IE(s,u=>{t.value=u,u?e.value={displayName:u.displayName,email:u.email,uid:u.uid}:e.value=null,n.value=!1}),{user:t,userData:e,loading:n,login:async(u,f)=>{try{const d=await yE(s,u,f);return t.value=d.user,e.value={displayName:d.user.displayName,email:d.user.email,uid:d.user.uid},{success:!0}}catch(d){switch(d.code){case"auth/invalid-email":break;case"auth/user-not-found":break;case"auth/wrong-password":break;case"auth/too-many-requests":break;default:d.message}return{success:!1,error:d.message}}},register:async(u,f,d)=>{try{const g=await _E(s,u,f);return await hu(g.user,{displayName:d}),t.value=g.user,e.value={displayName:d,email:u,uid:updatedUser.uid},{success:!0}}catch(g){switch(g.code){case"auth/email-already-in-use":break;case"auth/invalid-email":break;case"auth/weak-password":break;default:g.message}return{success:!1,error:g.message}}},logout:async()=>{try{return await bE(s),t.value=null,e.value=null,{success:!0}}catch(u){return{success:!1,error:u.message}}},updateUserProfile:async u=>{try{const f=s.currentUser;return await hu(f,{displayName:u}),e.value={...e.value,displayName:u},{success:!0}}catch(f){return{success:!1,error:f.message}}}}}),Xi=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},xw={key:0,class:"top-welcome-banner"},Mw={class:"container"},Uw={class:"banner-content"},Fw={class:"banner-text"},Vw={class:"welcome-name"},jw={__name:"Welcome",setup(t){const e=md();Me(!1);const n=st(()=>e.userData?.displayName||e.user?.email||"Usuario");return(s,r)=>Be(e).user&&Be(e).userData?(dt(),zt("div",xw,[Q("div",Mw,[Q("div",Uw,[Q("span",Fw,[r[0]||(r[0]=Q("span",{class:"icon has-text-warning-80"},[Q("i",{class:"fa-regular fa-smile-wink"})],-1)),r[1]||(r[1]=ts(" ¡Hola ",-1)),Q("strong",Vw,zn(n.value),1),r[2]||(r[2]=ts("! Bienvenid@ a mi rincón digital. ",-1))])])])])):ii("",!0)}},Bw=Xi(jw,[["__scopeId","data-v-267a7e09"]]),Hw={className:"floating-nav"},$w={className:"nav-container"},Ww=["title"],Gw={class:"modal-card"},Kw={class:"modal-card-head"},qw={class:"modal-card-title"},zw={class:"modal-card-body"},Jw={key:0},Xw={class:"tabs is-centered"},Yw={key:0,class:"field"},Qw={class:"control"},Zw={class:"field"},eI={class:"control"},tI={class:"field"},nI={class:"control"},sI={key:1,class:"notification is-danger is-light"},rI={class:"field"},iI={class:"control"},oI={key:1,class:"has-text-centered"},aI={class:"content"},cI={__name:"Navbar",setup(t){Ef();const e=md(),n=Me(!1),s=Me("login"),r=Me(""),o=Me(""),a=Me(""),l=Me(""),u=Me(""),f=Me(!1);Me(!1),st(()=>e.userData?.displayName||e.user?.email||"Usuario");const d=[{path:"/",label:"Inicio",icon:"fa-solid fa-house fa-xl py-3"},{path:"/sobre-mi",label:"Sobre Mí",icon:"fa-regular fa-user fa-xl py-3"},{path:"/experiencia",label:"Experiencia",icon:"fa-solid fa-briefcase fa-xl py-3"},{path:"/proyectos",label:"Proyectos",icon:"fa-regular fa-folder-open fa-xl py-3"},{path:"/contacto",label:"Contacto",icon:"fa-regular fa-envelope fa-xl py-3"}],g=()=>{e.user&&(o.value=e.userData?.displayName||""),n.value=!0},v=()=>{n.value=!1,u.value="",a.value="",l.value="",r.value="",o.value=""},A=async()=>{f.value=!0,u.value="";try{let x;s.value==="login"?x=await e.login(a.value,l.value):x=await e.register(a.value,l.value,r.value),x.success?v():u.value=x.error}catch{u.value="Error inesperado"}finally{f.value=!1}},O=async()=>{f.value=!0,await e.logout(),f.value=!1,v()};return(x,j)=>{const H=Nh("router-link");return dt(),zt(pt,null,[Q("nav",Hw,[Q("div",$w,[(dt(),zt(pt,null,eg(d,V=>Le(H,{key:V.path,to:V.path,class:ft([["nav-icon",{active:x.$route.path===V.path}],"navbar-item"]),title:V.label},{default:_i(()=>[Q("i",{class:ft(V.icon)},null,2)]),_:2},1032,["to","class","title"])),64)),Q("button",{onClick:g,class:ft(["navbar-item",["nav-icon","auth-button"]]),title:Be(e).user?"Cerrar Sesión":"Iniciar Sesión"},[Q("i",{class:ft(Be(e).user?"fa-solid fa-right-to-bracket fa-xl py-3":"fa-solid fa-key fa-xl py-3")},null,2)],8,Ww)])]),Q("div",{class:ft(["modal",{"is-active":n.value}])},[Q("div",{class:"modal-background",onClick:v}),Q("div",Gw,[Q("header",Kw,[Q("p",qw,zn(Be(e).user?"Cerrar Sesión":"Iniciar Sesión"),1),Q("button",{class:"delete","aria-label":"close",onClick:v})]),Q("section",zw,[Be(e).user?(dt(),zt("div",oI,[Q("div",aI,[Q("p",null,[j[8]||(j[8]=ts("Nos vemos ",-1)),Q("strong",null,zn(Be(e).userData.displayName||Be(e).userData.email),1),j[9]||(j[9]=ts("!",-1))])]),Q("button",{class:ft(["button is-danger",{"is-loading":f.value}]),onClick:O},"Cerrar Sesión",2)])):(dt(),zt("div",Jw,[Q("div",Xw,[Q("ul",null,[Q("li",{class:ft({"is-active":s.value==="login"})},[Q("a",{onClick:j[0]||(j[0]=V=>s.value="login")},"Iniciar Sesión")],2),Q("li",{class:ft({"is-active":s.value==="register"})},[Q("a",{onClick:j[1]||(j[1]=V=>s.value="register")},"Registrarse")],2)])]),Q("form",{onSubmit:vm(A,["prevent"])},[s.value==="register"?(dt(),zt("div",Yw,[j[5]||(j[5]=Q("label",{for:"nombre",class:"label"},"Nombre de usuario",-1)),Q("div",Qw,[yo(Q("input",{"onUpdate:modelValue":j[2]||(j[2]=V=>r.value=V),type:"text",class:"input",placeholder:"Tu nombre",required:""},null,512),[[Ao,r.value]])])])):ii("",!0),Q("div",Zw,[j[6]||(j[6]=Q("label",{for:"email",class:"label"},"Email",-1)),Q("div",eI,[yo(Q("input",{"onUpdate:modelValue":j[3]||(j[3]=V=>a.value=V),type:"email",class:"input",placeholder:"Tu email",required:""},null,512),[[Ao,a.value]])])]),Q("div",tI,[j[7]||(j[7]=Q("label",{for:"password",class:"label"},"Contraseña",-1)),Q("div",nI,[yo(Q("input",{"onUpdate:modelValue":j[4]||(j[4]=V=>l.value=V),type:"password",class:"input",placeholder:"Tu contraseña",required:""},null,512),[[Ao,l.value]])])]),u.value?(dt(),zt("div",sI,zn(u.value),1)):ii("",!0),Q("div",rI,[Q("div",iI,[Q("button",{class:ft(["button is-primary is-fullwidth",{"is-loading":f.value}]),type:"submit"},zn(s.value==="login"?"Iniciar Sesión":"Registrarse"),3)])])],32)]))])])],2),Be(e).user&&Be(e).userData?(dt(),Da(Bw,{key:0})):ii("",!0)],64)}}},lI=Xi(cI,[["__scopeId","data-v-b709238d"]]),uI={class:"py-5"},hI={class:"footer-container"},fI={class:"footer-text"},dI={__name:"Footer",setup(t){const e=new Date().getFullYear();return(n,s)=>(dt(),zt("footer",uI,[Q("div",hI,[Q("div",fI,[Q("p",null,[ts(" © "+zn(Be(e))+" Carolina Hernández Barra. ",1),s[0]||(s[0]=Q("br",null,null,-1)),s[1]||(s[1]=ts("Todos los derechos reservados. ",-1))])]),s[2]||(s[2]=Q("div",{class:"footer-links"},[Q("a",{href:"https://github.com/CaroHernz",target:"_blank",rel:"noopener noreferrer",class:"social-link mr-3 has-text-info-55"}," github "),Q("a",{href:"https://www.linkedin.com/in/carolinahernandezbarra/",target:"_blank",rel:"noopener noreferrer",class:"mr-3 has-text-info-55"}," linkedin "),Q("a",{href:"mailto:carolina.fhb@gmail.com",class:"has-text-info-55"}," contacto ")],-1))])]))}},pI=Xi(dI,[["__scopeId","data-v-513256d5"]]),gI={class:"app-container has-background-white-ter"},mI={class:"page-content"},_I={__name:"App",setup(t){const e=Ef();F_();const n=Me([]),s=Me("slide-left"),r=["/","/sobre-mi","/experiencia","/proyectos","/contacto"];return Oa(()=>{n.value=[e.path]}),bs(()=>e.path,(o,a)=>{n.value[n.value.length-1]!==o&&n.value.push(o);const l=r.indexOf(a),u=r.indexOf(o);console.log(`De ${a} a ${o}`,`Dirección: ${u>l?"slide-left":"slide-right"}`),u>l?s.value="slide-left":s.value="slide-right"}),(o,a)=>{const l=Nh("router-view");return dt(),zt("div",gI,[Le(lI),Q("main",mI,[Le(l,null,{default:_i(({Component:u,route:f})=>[Le(Xg,{name:s.value,mode:"out-in"},{default:_i(()=>[(dt(),Da(Zp(u),{key:f.path}))]),_:2},1032,["name"])]),_:1})]),Le(pI)])}}},yI=Xi(_I,[["__scopeId","data-v-098b1935"]]),vI="modulepreload",EI=function(t,e){return new URL(t,e).href},wu={},Zs=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let f=function(d){return Promise.all(d.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");r=f(n.map(d=>{if(d=EI(d,s),d in wu)return;wu[d]=!0;const g=d.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(s)for(let O=a.length-1;O>=0;O--){const x=a[O];if(x.href===d&&(!g||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${v}`))return;const A=document.createElement("link");if(A.rel=g?"stylesheet":vI,g||(A.as="script"),A.crossOrigin="",A.href=d,u&&A.setAttribute("nonce",u),document.head.appendChild(A),g)return new Promise((O,x)=>{A.addEventListener("load",O),A.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})},wI=[{path:"/",name:"Home",component:()=>Zs(()=>import("./Inicio-DPlcPjXC.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/proyectos",name:"Proyectos",component:()=>Zs(()=>import("./Proyectos-C1GE-Ffi.js"),__vite__mapDeps([6,1,2,7]),import.meta.url)},{path:"/experiencia",name:"Experiencia",component:()=>Zs(()=>import("./Experiencia-DqJpkuvq.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{path:"/contacto",name:"Contacto",component:()=>Zs(()=>import("./Contacto-C90Wl0UU.js"),__vite__mapDeps([10,1,2]),import.meta.url)},{path:"/sobre-mi",name:"SobreMi",component:()=>Zs(()=>import("./SobreMi-CgtBCGv6.js"),__vite__mapDeps([11,1,2,3,4]),import.meta.url)}],II=U_({history:g_(),routes:wI});var bI="firebase",TI="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On(bI,TI,"app");var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ya;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function m(){}m.prototype=_.prototype,S.F=_.prototype,S.prototype=new m,S.prototype.constructor=S,S.D=function(b,I,w){for(var y=Array(arguments.length-2),le=2;le<arguments.length;le++)y[le-2]=arguments[le];return _.prototype[I].apply(b,y)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,_,m){m||(m=0);const b=Array(16);if(typeof _=="string")for(var I=0;I<16;++I)b[I]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(I=0;I<16;++I)b[I]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=S.g[0],m=S.g[1],I=S.g[2];let w=S.g[3],y;y=_+(w^m&(I^w))+b[0]+3614090360&4294967295,_=m+(y<<7&4294967295|y>>>25),y=w+(I^_&(m^I))+b[1]+3905402710&4294967295,w=_+(y<<12&4294967295|y>>>20),y=I+(m^w&(_^m))+b[2]+606105819&4294967295,I=w+(y<<17&4294967295|y>>>15),y=m+(_^I&(w^_))+b[3]+3250441966&4294967295,m=I+(y<<22&4294967295|y>>>10),y=_+(w^m&(I^w))+b[4]+4118548399&4294967295,_=m+(y<<7&4294967295|y>>>25),y=w+(I^_&(m^I))+b[5]+1200080426&4294967295,w=_+(y<<12&4294967295|y>>>20),y=I+(m^w&(_^m))+b[6]+2821735955&4294967295,I=w+(y<<17&4294967295|y>>>15),y=m+(_^I&(w^_))+b[7]+4249261313&4294967295,m=I+(y<<22&4294967295|y>>>10),y=_+(w^m&(I^w))+b[8]+1770035416&4294967295,_=m+(y<<7&4294967295|y>>>25),y=w+(I^_&(m^I))+b[9]+2336552879&4294967295,w=_+(y<<12&4294967295|y>>>20),y=I+(m^w&(_^m))+b[10]+4294925233&4294967295,I=w+(y<<17&4294967295|y>>>15),y=m+(_^I&(w^_))+b[11]+2304563134&4294967295,m=I+(y<<22&4294967295|y>>>10),y=_+(w^m&(I^w))+b[12]+1804603682&4294967295,_=m+(y<<7&4294967295|y>>>25),y=w+(I^_&(m^I))+b[13]+4254626195&4294967295,w=_+(y<<12&4294967295|y>>>20),y=I+(m^w&(_^m))+b[14]+2792965006&4294967295,I=w+(y<<17&4294967295|y>>>15),y=m+(_^I&(w^_))+b[15]+1236535329&4294967295,m=I+(y<<22&4294967295|y>>>10),y=_+(I^w&(m^I))+b[1]+4129170786&4294967295,_=m+(y<<5&4294967295|y>>>27),y=w+(m^I&(_^m))+b[6]+3225465664&4294967295,w=_+(y<<9&4294967295|y>>>23),y=I+(_^m&(w^_))+b[11]+643717713&4294967295,I=w+(y<<14&4294967295|y>>>18),y=m+(w^_&(I^w))+b[0]+3921069994&4294967295,m=I+(y<<20&4294967295|y>>>12),y=_+(I^w&(m^I))+b[5]+3593408605&4294967295,_=m+(y<<5&4294967295|y>>>27),y=w+(m^I&(_^m))+b[10]+38016083&4294967295,w=_+(y<<9&4294967295|y>>>23),y=I+(_^m&(w^_))+b[15]+3634488961&4294967295,I=w+(y<<14&4294967295|y>>>18),y=m+(w^_&(I^w))+b[4]+3889429448&4294967295,m=I+(y<<20&4294967295|y>>>12),y=_+(I^w&(m^I))+b[9]+568446438&4294967295,_=m+(y<<5&4294967295|y>>>27),y=w+(m^I&(_^m))+b[14]+3275163606&4294967295,w=_+(y<<9&4294967295|y>>>23),y=I+(_^m&(w^_))+b[3]+4107603335&4294967295,I=w+(y<<14&4294967295|y>>>18),y=m+(w^_&(I^w))+b[8]+1163531501&4294967295,m=I+(y<<20&4294967295|y>>>12),y=_+(I^w&(m^I))+b[13]+2850285829&4294967295,_=m+(y<<5&4294967295|y>>>27),y=w+(m^I&(_^m))+b[2]+4243563512&4294967295,w=_+(y<<9&4294967295|y>>>23),y=I+(_^m&(w^_))+b[7]+1735328473&4294967295,I=w+(y<<14&4294967295|y>>>18),y=m+(w^_&(I^w))+b[12]+2368359562&4294967295,m=I+(y<<20&4294967295|y>>>12),y=_+(m^I^w)+b[5]+4294588738&4294967295,_=m+(y<<4&4294967295|y>>>28),y=w+(_^m^I)+b[8]+2272392833&4294967295,w=_+(y<<11&4294967295|y>>>21),y=I+(w^_^m)+b[11]+1839030562&4294967295,I=w+(y<<16&4294967295|y>>>16),y=m+(I^w^_)+b[14]+4259657740&4294967295,m=I+(y<<23&4294967295|y>>>9),y=_+(m^I^w)+b[1]+2763975236&4294967295,_=m+(y<<4&4294967295|y>>>28),y=w+(_^m^I)+b[4]+1272893353&4294967295,w=_+(y<<11&4294967295|y>>>21),y=I+(w^_^m)+b[7]+4139469664&4294967295,I=w+(y<<16&4294967295|y>>>16),y=m+(I^w^_)+b[10]+3200236656&4294967295,m=I+(y<<23&4294967295|y>>>9),y=_+(m^I^w)+b[13]+681279174&4294967295,_=m+(y<<4&4294967295|y>>>28),y=w+(_^m^I)+b[0]+3936430074&4294967295,w=_+(y<<11&4294967295|y>>>21),y=I+(w^_^m)+b[3]+3572445317&4294967295,I=w+(y<<16&4294967295|y>>>16),y=m+(I^w^_)+b[6]+76029189&4294967295,m=I+(y<<23&4294967295|y>>>9),y=_+(m^I^w)+b[9]+3654602809&4294967295,_=m+(y<<4&4294967295|y>>>28),y=w+(_^m^I)+b[12]+3873151461&4294967295,w=_+(y<<11&4294967295|y>>>21),y=I+(w^_^m)+b[15]+530742520&4294967295,I=w+(y<<16&4294967295|y>>>16),y=m+(I^w^_)+b[2]+3299628645&4294967295,m=I+(y<<23&4294967295|y>>>9),y=_+(I^(m|~w))+b[0]+4096336452&4294967295,_=m+(y<<6&4294967295|y>>>26),y=w+(m^(_|~I))+b[7]+1126891415&4294967295,w=_+(y<<10&4294967295|y>>>22),y=I+(_^(w|~m))+b[14]+2878612391&4294967295,I=w+(y<<15&4294967295|y>>>17),y=m+(w^(I|~_))+b[5]+4237533241&4294967295,m=I+(y<<21&4294967295|y>>>11),y=_+(I^(m|~w))+b[12]+1700485571&4294967295,_=m+(y<<6&4294967295|y>>>26),y=w+(m^(_|~I))+b[3]+2399980690&4294967295,w=_+(y<<10&4294967295|y>>>22),y=I+(_^(w|~m))+b[10]+4293915773&4294967295,I=w+(y<<15&4294967295|y>>>17),y=m+(w^(I|~_))+b[1]+2240044497&4294967295,m=I+(y<<21&4294967295|y>>>11),y=_+(I^(m|~w))+b[8]+1873313359&4294967295,_=m+(y<<6&4294967295|y>>>26),y=w+(m^(_|~I))+b[15]+4264355552&4294967295,w=_+(y<<10&4294967295|y>>>22),y=I+(_^(w|~m))+b[6]+2734768916&4294967295,I=w+(y<<15&4294967295|y>>>17),y=m+(w^(I|~_))+b[13]+1309151649&4294967295,m=I+(y<<21&4294967295|y>>>11),y=_+(I^(m|~w))+b[4]+4149444226&4294967295,_=m+(y<<6&4294967295|y>>>26),y=w+(m^(_|~I))+b[11]+3174756917&4294967295,w=_+(y<<10&4294967295|y>>>22),y=I+(_^(w|~m))+b[2]+718787259&4294967295,I=w+(y<<15&4294967295|y>>>17),y=m+(w^(I|~_))+b[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,S.g[2]=S.g[2]+I&4294967295,S.g[3]=S.g[3]+w&4294967295}s.prototype.v=function(S,_){_===void 0&&(_=S.length);const m=_-this.blockSize,b=this.C;let I=this.h,w=0;for(;w<_;){if(I==0)for(;w<=m;)r(this,S,w),w+=this.blockSize;if(typeof S=="string"){for(;w<_;)if(b[I++]=S.charCodeAt(w++),I==this.blockSize){r(this,b),I=0;break}}else for(;w<_;)if(b[I++]=S[w++],I==this.blockSize){r(this,b),I=0;break}}this.h=I,this.o+=_},s.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;_=this.o*8;for(var m=S.length-8;m<S.length;++m)S[m]=_&255,_/=256;for(this.v(S),S=Array(16),_=0,m=0;m<4;++m)for(let b=0;b<32;b+=8)S[_++]=this.g[m]>>>b&255;return S};function o(S,_){var m=l;return Object.prototype.hasOwnProperty.call(m,S)?m[S]:m[S]=_(S)}function a(S,_){this.h=_;const m=[];let b=!0;for(let I=S.length-1;I>=0;I--){const w=S[I]|0;b&&w==_||(m[I]=w,b=!1)}this.g=m}var l={};function u(S){return-128<=S&&S<128?o(S,function(_){return new a([_|0],_<0?-1:0)}):new a([S|0],S<0?-1:0)}function f(S){if(isNaN(S)||!isFinite(S))return g;if(S<0)return j(f(-S));const _=[];let m=1;for(let b=0;S>=m;b++)_[b]=S/m|0,m*=4294967296;return new a(_,0)}function d(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return j(d(S.substring(1),_));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=f(Math.pow(_,8));let b=g;for(let w=0;w<S.length;w+=8){var I=Math.min(8,S.length-w);const y=parseInt(S.substring(w,w+I),_);I<8?(I=f(Math.pow(_,I)),b=b.j(I).add(f(y))):(b=b.j(m),b=b.add(f(y)))}return b}var g=u(0),v=u(1),A=u(16777216);t=a.prototype,t.m=function(){if(x(this))return-j(this).m();let S=0,_=1;for(let m=0;m<this.g.length;m++){const b=this.i(m);S+=(b>=0?b:4294967296+b)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(O(this))return"0";if(x(this))return"-"+j(this).toString(S);const _=f(Math.pow(S,6));var m=this;let b="";for(;;){const I=G(m,_).g;m=H(m,I.j(_));let w=((m.g.length>0?m.g[0]:m.h)>>>0).toString(S);if(m=I,O(m))return w+b;for(;w.length<6;)w="0"+w;b=w+b}},t.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function O(S){if(S.h!=0)return!1;for(let _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function x(S){return S.h==-1}t.l=function(S){return S=H(this,S),x(S)?-1:O(S)?0:1};function j(S){const _=S.g.length,m=[];for(let b=0;b<_;b++)m[b]=~S.g[b];return new a(m,~S.h).add(v)}t.abs=function(){return x(this)?j(this):this},t.add=function(S){const _=Math.max(this.g.length,S.g.length),m=[];let b=0;for(let I=0;I<=_;I++){let w=b+(this.i(I)&65535)+(S.i(I)&65535),y=(w>>>16)+(this.i(I)>>>16)+(S.i(I)>>>16);b=y>>>16,w&=65535,y&=65535,m[I]=y<<16|w}return new a(m,m[m.length-1]&-2147483648?-1:0)};function H(S,_){return S.add(j(_))}t.j=function(S){if(O(this)||O(S))return g;if(x(this))return x(S)?j(this).j(j(S)):j(j(this).j(S));if(x(S))return j(this.j(j(S)));if(this.l(A)<0&&S.l(A)<0)return f(this.m()*S.m());const _=this.g.length+S.g.length,m=[];for(var b=0;b<2*_;b++)m[b]=0;for(b=0;b<this.g.length;b++)for(let I=0;I<S.g.length;I++){const w=this.i(b)>>>16,y=this.i(b)&65535,le=S.i(I)>>>16,Ae=S.i(I)&65535;m[2*b+2*I]+=y*Ae,V(m,2*b+2*I),m[2*b+2*I+1]+=w*Ae,V(m,2*b+2*I+1),m[2*b+2*I+1]+=y*le,V(m,2*b+2*I+1),m[2*b+2*I+2]+=w*le,V(m,2*b+2*I+2)}for(S=0;S<_;S++)m[S]=m[2*S+1]<<16|m[2*S];for(S=_;S<2*_;S++)m[S]=0;return new a(m,0)};function V(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function q(S,_){this.g=S,this.h=_}function G(S,_){if(O(_))throw Error("division by zero");if(O(S))return new q(g,g);if(x(S))return _=G(j(S),_),new q(j(_.g),j(_.h));if(x(_))return _=G(S,j(_)),new q(j(_.g),_.h);if(S.g.length>30){if(x(S)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var m=v,b=_;b.l(S)<=0;)m=X(m),b=X(b);var I=ie(m,1),w=ie(b,1);for(b=ie(b,2),m=ie(m,2);!O(b);){var y=w.add(b);y.l(S)<=0&&(I=I.add(m),w=y),b=ie(b,1),m=ie(m,1)}return _=H(S,I.j(_)),new q(I,_)}for(I=g;S.l(_)>=0;){for(m=Math.max(1,Math.floor(S.m()/_.m())),b=Math.ceil(Math.log(m)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),w=f(m),y=w.j(_);x(y)||y.l(S)>0;)m-=b,w=f(m),y=w.j(_);O(w)&&(w=v),I=I.add(w),S=H(S,y)}return new q(I,S)}t.B=function(S){return G(this,S).h},t.and=function(S){const _=Math.max(this.g.length,S.g.length),m=[];for(let b=0;b<_;b++)m[b]=this.i(b)&S.i(b);return new a(m,this.h&S.h)},t.or=function(S){const _=Math.max(this.g.length,S.g.length),m=[];for(let b=0;b<_;b++)m[b]=this.i(b)|S.i(b);return new a(m,this.h|S.h)},t.xor=function(S){const _=Math.max(this.g.length,S.g.length),m=[];for(let b=0;b<_;b++)m[b]=this.i(b)^S.i(b);return new a(m,this.h^S.h)};function X(S){const _=S.g.length+1,m=[];for(let b=0;b<_;b++)m[b]=S.i(b)<<1|S.i(b-1)>>>31;return new a(m,S.h)}function ie(S,_){const m=_>>5;_%=32;const b=S.g.length-m,I=[];for(let w=0;w<b;w++)I[w]=_>0?S.i(w+m)>>>_|S.i(w+m+1)<<32-_:S.i(w+m);return new a(I,S.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,Ya=a}).apply(typeof Iu<"u"?Iu:typeof self<"u"?self:typeof window<"u"?window:{});var Zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=Object.defineProperty;function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zr=="object"&&Zr];for(var c=0;c<i.length;++c){var h=i[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=n(this);function r(i,c){if(c)e:{var h=s;i=i.split(".");for(var p=0;p<i.length-1;p++){var R=i[p];if(!(R in h))break e;h=h[R]}i=i[i.length-1],p=h[i],c=c(p),c!=p&&c!=null&&e(h,i,{configurable:!0,writable:!0,value:c})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(c){var h=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&h.push([p,c[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function u(i,c,h){return i.call.apply(i.bind,arguments)}function f(i,c,h){return f=u,f.apply(null,arguments)}function d(i,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function g(i,c){function h(){}h.prototype=c.prototype,i.Z=c.prototype,i.prototype=new h,i.prototype.constructor=i,i.Ob=function(p,R,P){for(var B=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)B[oe-2]=arguments[oe];return c.prototype[R].apply(p,B)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function A(i){const c=i.length;if(c>0){const h=Array(c);for(let p=0;p<c;p++)h[p]=i[p];return h}return[]}function O(i,c){for(let p=1;p<arguments.length;p++){const R=arguments[p];var h=typeof R;if(h=h!="object"?h:R?Array.isArray(R)?"array":h:"null",h=="array"||h=="object"&&typeof R.length=="number"){h=i.length||0;const P=R.length||0;i.length=h+P;for(let B=0;B<P;B++)i[h+B]=R[B]}else i.push(R)}}class x{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function j(i){a.setTimeout(()=>{throw i},0)}function H(){var i=S;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class V{constructor(){this.h=this.g=null}add(c,h){const p=q.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var q=new x(()=>new G,i=>i.reset());class G{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let X,ie=!1,S=new V,_=()=>{const i=Promise.resolve(void 0);X=()=>{i.then(m)}};function m(){for(var i;i=H();){try{i.h.call(i.g)}catch(h){j(h)}var c=q;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}ie=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return i})();function y(i){return/^[\s\xa0]*$/.test(i)}function le(i,c){I.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}g(le,I),le.prototype.init=function(i,c){const h=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(h=="mouseover"?c=i.fromElement:h=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&le.Z.h.call(this)},le.prototype.h=function(){le.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Ae="closure_listenable_"+(Math.random()*1e6|0),ve=0;function re(i,c,h,p,R){this.listener=i,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=R,this.key=++ve,this.da=this.fa=!1}function ue(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function nt(i,c,h){for(const p in i)c.call(h,i[p],p,i)}function Pt(i,c){for(const h in i)c.call(void 0,i[h],h,i)}function rt(i){const c={};for(const h in i)c[h]=i[h];return c}const Fe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ht(i,c){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)i[h]=p[h];for(let P=0;P<Fe.length;P++)h=Fe[P],Object.prototype.hasOwnProperty.call(p,h)&&(i[h]=p[h])}}function vt(i){this.src=i,this.g={},this.h=0}vt.prototype.add=function(i,c,h,p,R){const P=i.toString();i=this.g[P],i||(i=this.g[P]=[],this.h++);const B=$e(i,c,p,R);return B>-1?(c=i[B],h||(c.fa=!1)):(c=new re(c,this.src,P,!!p,R),c.fa=h,i.push(c)),c};function Et(i,c){const h=c.type;if(h in i.g){var p=i.g[h],R=Array.prototype.indexOf.call(p,c,void 0),P;(P=R>=0)&&Array.prototype.splice.call(p,R,1),P&&(ue(c),i.g[h].length==0&&(delete i.g[h],i.h--))}}function $e(i,c,h,p){for(let R=0;R<i.length;++R){const P=i[R];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==p)return R}return-1}var k="closure_lm_"+(Math.random()*1e6|0),z={};function W(i,c,h,p,R){if(Array.isArray(c)){for(let P=0;P<c.length;P++)W(i,c[P],h,p,R);return null}return h=$(h),i&&i[Ae]?i.J(c,h,l(p)?!!p.capture:!1,R):J(i,c,h,!1,p,R)}function J(i,c,h,p,R,P){if(!c)throw Error("Invalid event type");const B=l(R)?!!R.capture:!!R;let oe=L(i);if(oe||(i[k]=oe=new vt(i)),h=oe.add(c,h,p,B,P),h.proxy)return h;if(p=ce(),h.proxy=p,p.src=i,p.listener=h,i.addEventListener)w||(R=B),R===void 0&&(R=!1),i.addEventListener(c.toString(),p,R);else if(i.attachEvent)i.attachEvent(C(c.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ce(){function i(h){return c.call(i.src,i.listener,h)}const c=D;return i}function E(i,c,h,p,R){if(Array.isArray(c))for(var P=0;P<c.length;P++)E(i,c[P],h,p,R);else p=l(p)?!!p.capture:!!p,h=$(h),i&&i[Ae]?(i=i.i,P=String(c).toString(),P in i.g&&(c=i.g[P],h=$e(c,h,p,R),h>-1&&(ue(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete i.g[P],i.h--)))):i&&(i=L(i))&&(c=i.g[c.toString()],i=-1,c&&(i=$e(c,h,p,R)),(h=i>-1?c[i]:null)&&T(h))}function T(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Ae])Et(c.i,i);else{var h=i.type,p=i.proxy;c.removeEventListener?c.removeEventListener(h,p,i.capture):c.detachEvent?c.detachEvent(C(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=L(c))?(Et(h,i),h.h==0&&(h.src=null,c[k]=null)):ue(i)}}}function C(i){return i in z?z[i]:z[i]="on"+i}function D(i,c){if(i.da)i=!0;else{c=new le(c,this);const h=i.listener,p=i.ha||i.src;i.fa&&T(i),i=h.call(p,c)}return i}function L(i){return i=i[k],i instanceof vt?i:null}var N="__closure_events_fn_"+(Math.random()*1e9>>>0);function $(i){return typeof i=="function"?i:(i[N]||(i[N]=function(c){return i.handleEvent(c)}),i[N])}function F(){b.call(this),this.i=new vt(this),this.M=this,this.G=null}g(F,b),F.prototype[Ae]=!0,F.prototype.removeEventListener=function(i,c,h,p){E(this,i,c,h,p)};function M(i,c){var h,p=i.G;if(p)for(h=[];p;p=p.G)h.push(p);if(i=i.M,p=c.type||c,typeof c=="string")c=new I(c,i);else if(c instanceof I)c.target=c.target||i;else{var R=c;c=new I(p,i),Ht(c,R)}R=!0;let P,B;if(h)for(B=h.length-1;B>=0;B--)P=c.g=h[B],R=U(P,p,!0,c)&&R;if(P=c.g=i,R=U(P,p,!0,c)&&R,R=U(P,p,!1,c)&&R,h)for(B=0;B<h.length;B++)P=c.g=h[B],R=U(P,p,!1,c)&&R}F.prototype.N=function(){if(F.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const h=i.g[c];for(let p=0;p<h.length;p++)ue(h[p]);delete i.g[c],i.h--}}this.G=null},F.prototype.J=function(i,c,h,p){return this.i.add(String(i),c,!1,h,p)},F.prototype.K=function(i,c,h,p){return this.i.add(String(i),c,!0,h,p)};function U(i,c,h,p){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let P=0;P<c.length;++P){const B=c[P];if(B&&!B.da&&B.capture==h){const oe=B.listener,ke=B.ha||B.src;B.fa&&Et(i.i,B),R=oe.call(ke,p)!==!1&&R}}return R&&!p.defaultPrevented}function Z(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=f(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function K(i){i.g=Z(()=>{i.g=null,i.i&&(i.i=!1,K(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Y extends b{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:K(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ee(i){b.call(this),this.h=i,this.g={}}g(ee,b);var ae=[];function Ee(i){nt(i.g,function(c,h){this.g.hasOwnProperty(h)&&T(c)},i),i.g={}}ee.prototype.N=function(){ee.Z.N.call(this),Ee(this)},ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pe=a.JSON.stringify,We=a.JSON.parse,Ge=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function it(){}function lt(){}var wt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ls(){I.call(this,"d")}g(ls,I);function Ve(){I.call(this,"c")}g(Ve,I);var je={},xs=null;function us(){return xs=xs||new F}je.Ia="serverreachability";function nc(i){I.call(this,je.Ia,i)}g(nc,I);function Ms(i){const c=us();M(c,new nc(c))}je.STAT_EVENT="statevent";function sc(i,c){I.call(this,je.STAT_EVENT,i),this.stat=c}g(sc,I);function Je(i){const c=us();M(c,new sc(c,i))}je.Ja="timingevent";function rc(i,c){I.call(this,je.Ja,i),this.size=c}g(rc,I);function Us(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function Fs(){this.g=!0}Fs.prototype.ua=function(){this.g=!1};function Ad(i,c,h,p,R,P){i.info(function(){if(i.g)if(P){var B="",oe=P.split("&");for(let we=0;we<oe.length;we++){var ke=oe[we].split("=");if(ke.length>1){const xe=ke[0];ke=ke[1];const Nt=xe.split("_");B=Nt.length>=2&&Nt[1]=="type"?B+(xe+"="+ke+"&"):B+(xe+"=redacted&")}}}else B=null;else B=P;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+h+`
`+B})}function Cd(i,c,h,p,R,P,B){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+h+`
`+P+" "+B})}function hs(i,c,h,p){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Pd(i,h)+(p?" "+p:"")})}function Rd(i,c){i.info(function(){return"TIMEOUT: "+c})}Fs.prototype.info=function(){};function Pd(i,c){if(!i.g)return c;if(!c)return null;try{const P=JSON.parse(c);if(P){for(i=0;i<P.length;i++)if(Array.isArray(P[i])){var h=P[i];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var R=p[0];if(R!="noop"&&R!="stop"&&R!="close")for(let B=1;B<p.length;B++)p[B]=""}}}}return pe(P)}catch{return c}}var Yi={NO_ERROR:0,TIMEOUT:8},Od={},ic;function Qi(){}g(Qi,it),Qi.prototype.g=function(){return new XMLHttpRequest},ic=new Qi;function Vs(i){return encodeURIComponent(String(i))}function Nd(i){var c=1;i=i.split(":");const h=[];for(;c>0&&i.length;)h.push(i.shift()),c--;return i.length&&h.push(i.join(":")),h}function ln(i,c,h,p){this.j=i,this.i=c,this.l=h,this.S=p||1,this.V=new ee(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new oc}function oc(){this.i=null,this.g="",this.h=!1}var ac={},Zi={};function eo(i,c,h){i.M=1,i.A=Br(Ot(c)),i.u=h,i.R=!0,cc(i,null)}function cc(i,c){i.F=Date.now(),jr(i),i.B=Ot(i.A);var h=i.B,p=i.S;Array.isArray(p)||(p=[String(p)]),wc(h.i,"t",p),i.C=0,h=i.j.L,i.h=new oc,i.g=Vc(i.j,h?c:null,!i.u),i.P>0&&(i.O=new Y(f(i.Y,i,i.g),i.P)),c=i.V,h=i.g,p=i.ba;var R="readystatechange";Array.isArray(R)||(R&&(ae[0]=R.toString()),R=ae);for(let P=0;P<R.length;P++){const B=W(h,R[P],p||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=i.J?rt(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Ms(),Ad(i.i,i.v,i.B,i.l,i.S,i.u)}ln.prototype.ba=function(i){i=i.target;const c=this.O;c&&fn(i)==3?c.j():this.Y(i)},ln.prototype.Y=function(i){try{if(i==this.g)e:{const oe=fn(this.g),ke=this.g.ya(),we=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||Rc(this.g)))){this.K||oe!=4||ke==7||(ke==8||we<=0?Ms(3):Ms(2)),to(this);var c=this.g.ca();this.X=c;var h=kd(this);if(this.o=c==200,Cd(this.i,this.v,this.B,this.l,this.S,oe,c),this.o){if(this.U&&!this.L){t:{if(this.g){var p,R=this.g;if((p=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var P=p;break t}}P=null}if(i=P)hs(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,no(this,i);else{this.o=!1,this.m=3,Je(12),Mn(this),js(this);break e}}if(this.R){i=!0;let xe;for(;!this.K&&this.C<h.length;)if(xe=Dd(this,h),xe==Zi){oe==4&&(this.m=4,Je(14),i=!1),hs(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==ac){this.m=4,Je(15),hs(this.i,this.l,h,"[Invalid Chunk]"),i=!1;break}else hs(this.i,this.l,xe,null),no(this,xe);if(lc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||h.length!=0||this.h.h||(this.m=1,Je(16),i=!1),this.o=this.o&&i,!i)hs(this.i,this.l,h,"[Invalid Chunked Response]"),Mn(this),js(this);else if(h.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),uo(B),B.P=!0,Je(11))}}else hs(this.i,this.l,h,null),no(this,h);oe==4&&Mn(this),this.o&&!this.K&&(oe==4?xc(this.j,this):(this.o=!1,jr(this)))}else qd(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Je(12)):(this.m=0,Je(13)),Mn(this),js(this)}}}catch{}finally{}};function kd(i){if(!lc(i))return i.g.la();const c=Rc(i.g);if(c==="")return"";let h="";const p=c.length,R=fn(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Mn(i),js(i),"";i.h.i=new a.TextDecoder}for(let P=0;P<p;P++)i.h.h=!0,h+=i.h.i.decode(c[P],{stream:!(R&&P==p-1)});return c.length=0,i.h.g+=h,i.C=0,i.h.g}function lc(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Dd(i,c){var h=i.C,p=c.indexOf(`
`,h);return p==-1?Zi:(h=Number(c.substring(h,p)),isNaN(h)?ac:(p+=1,p+h>c.length?Zi:(c=c.slice(p,p+h),i.C=p+h,c)))}ln.prototype.cancel=function(){this.K=!0,Mn(this)};function jr(i){i.T=Date.now()+i.H,uc(i,i.H)}function uc(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Us(f(i.aa,i),c)}function to(i){i.D&&(a.clearTimeout(i.D),i.D=null)}ln.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Rd(this.i,this.B),this.M!=2&&(Ms(),Je(17)),Mn(this),this.m=2,js(this)):uc(this,this.T-i)};function js(i){i.j.I==0||i.K||xc(i.j,i)}function Mn(i){to(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Ee(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function no(i,c){try{var h=i.j;if(h.I!=0&&(h.g==i||so(h.h,i))){if(!i.L&&so(h.h,i)&&h.I==3){try{var p=h.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<i.F)Kr(h),Wr(h);else break e;lo(h),Je(18)}}else h.xa=R[1],0<h.xa-h.K&&R[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Us(f(h.Va,h),6e3));dc(h.h)<=1&&h.ta&&(h.ta=void 0)}else Fn(h,11)}else if((i.L||h.g==i)&&Kr(h),!y(c))for(R=h.Ba.g.parse(c),c=0;c<R.length;c++){let we=R[c];const xe=we[0];if(!(xe<=h.K))if(h.K=xe,we=we[1],h.I==2)if(we[0]=="c"){h.M=we[1],h.ba=we[2];const Nt=we[3];Nt!=null&&(h.ka=Nt,h.j.info("VER="+h.ka));const Vn=we[4];Vn!=null&&(h.za=Vn,h.j.info("SVER="+h.za));const dn=we[5];dn!=null&&typeof dn=="number"&&dn>0&&(p=1.5*dn,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const pn=i.g;if(pn){const qr=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qr){var P=p.h;P.g||qr.indexOf("spdy")==-1&&qr.indexOf("quic")==-1&&qr.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ro(P,P.h),P.h=null))}if(p.G){const ho=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;ho&&(p.wa=ho,Se(p.J,p.G,ho))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-i.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var B=i;if(p.na=Fc(p,p.L?p.ba:null,p.W),B.L){pc(p.h,B);var oe=B,ke=p.O;ke&&(oe.H=ke),oe.D&&(to(oe),jr(oe)),p.g=B}else Dc(p);h.i.length>0&&Gr(h)}else we[0]!="stop"&&we[0]!="close"||Fn(h,7);else h.I==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?Fn(h,7):co(h):we[0]!="noop"&&h.l&&h.l.qa(we),h.A=0)}}Ms(4)}catch{}}var Ld=class{constructor(i,c){this.g=i,this.map=c}};function hc(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fc(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function dc(i){return i.h?1:i.g?i.g.size:0}function so(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function ro(i,c){i.g?i.g.add(c):i.h=c}function pc(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}hc.prototype.cancel=function(){if(this.i=gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function gc(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const h of i.g.values())c=c.concat(h.G);return c}return A(i.i)}var mc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xd(i,c){if(i){i=i.split("&");for(let h=0;h<i.length;h++){const p=i[h].indexOf("=");let R,P=null;p>=0?(R=i[h].substring(0,p),P=i[h].substring(p+1)):R=i[h],c(R,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function un(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof un?(this.l=i.l,Bs(this,i.j),this.o=i.o,this.g=i.g,Hs(this,i.u),this.h=i.h,io(this,Ic(i.i)),this.m=i.m):i&&(c=String(i).match(mc))?(this.l=!1,Bs(this,c[1]||"",!0),this.o=$s(c[2]||""),this.g=$s(c[3]||"",!0),Hs(this,c[4]),this.h=$s(c[5]||"",!0),io(this,c[6]||"",!0),this.m=$s(c[7]||"")):(this.l=!1,this.i=new Gs(null,this.l))}un.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(Ws(c,_c,!0),":");var h=this.g;return(h||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Ws(c,_c,!0),"@"),i.push(Vs(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&i.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Ws(h,h.charAt(0)=="/"?Fd:Ud,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Ws(h,jd)),i.join("")},un.prototype.resolve=function(i){const c=Ot(this);let h=!!i.j;h?Bs(c,i.j):h=!!i.o,h?c.o=i.o:h=!!i.g,h?c.g=i.g:h=i.u!=null;var p=i.h;if(h)Hs(c,i.u);else if(h=!!i.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var R=c.h.lastIndexOf("/");R!=-1&&(p=c.h.slice(0,R+1)+p)}if(R=p,R==".."||R==".")p="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){p=R.lastIndexOf("/",0)==0,R=R.split("/");const P=[];for(let B=0;B<R.length;){const oe=R[B++];oe=="."?p&&B==R.length&&P.push(""):oe==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),p&&B==R.length&&P.push("")):(P.push(oe),p=!0)}p=P.join("/")}else p=R}return h?c.h=p:h=i.i.toString()!=="",h?io(c,Ic(i.i)):h=!!i.m,h&&(c.m=i.m),c};function Ot(i){return new un(i)}function Bs(i,c,h){i.j=h?$s(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Hs(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function io(i,c,h){c instanceof Gs?(i.i=c,Bd(i.i,i.l)):(h||(c=Ws(c,Vd)),i.i=new Gs(c,i.l))}function Se(i,c,h){i.i.set(c,h)}function Br(i){return Se(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function $s(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ws(i,c,h){return typeof i=="string"?(i=encodeURI(i).replace(c,Md),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Md(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var _c=/[#\/\?@]/g,Ud=/[#\?:]/g,Fd=/[#\?]/g,Vd=/[#\?@]/g,jd=/#/g;function Gs(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Un(i){i.g||(i.g=new Map,i.h=0,i.i&&xd(i.i,function(c,h){i.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=Gs.prototype,t.add=function(i,c){Un(this),this.i=null,i=fs(this,i);let h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(c),this.h+=1,this};function yc(i,c){Un(i),c=fs(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function vc(i,c){return Un(i),c=fs(i,c),i.g.has(c)}t.forEach=function(i,c){Un(this),this.g.forEach(function(h,p){h.forEach(function(R){i.call(c,R,p,this)},this)},this)};function Ec(i,c){Un(i);let h=[];if(typeof c=="string")vc(i,c)&&(h=h.concat(i.g.get(fs(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)h=h.concat(i[c]);return h}t.set=function(i,c){return Un(this),this.i=null,i=fs(this,i),vc(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},t.get=function(i,c){return i?(i=Ec(this,i),i.length>0?String(i[0]):c):c};function wc(i,c,h){yc(i,c),h.length>0&&(i.i=null,i.g.set(fs(i,c),A(h)),i.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var h=c[p];const R=Vs(h);h=Ec(this,h);for(let P=0;P<h.length;P++){let B=R;h[P]!==""&&(B+="="+Vs(h[P])),i.push(B)}}return this.i=i.join("&")};function Ic(i){const c=new Gs;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function fs(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Bd(i,c){c&&!i.j&&(Un(i),i.i=null,i.g.forEach(function(h,p){const R=p.toLowerCase();p!=R&&(yc(this,p),wc(this,R,h))},i)),i.j=c}function Hd(i,c){const h=new Fs;if(a.Image){const p=new Image;p.onload=d(hn,h,"TestLoadImage: loaded",!0,c,p),p.onerror=d(hn,h,"TestLoadImage: error",!1,c,p),p.onabort=d(hn,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=d(hn,h,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else c(!1)}function $d(i,c){const h=new Fs,p=new AbortController,R=setTimeout(()=>{p.abort(),hn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:p.signal}).then(P=>{clearTimeout(R),P.ok?hn(h,"TestPingServer: ok",!0,c):hn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),hn(h,"TestPingServer: error",!1,c)})}function hn(i,c,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function Wd(){this.g=new Ge}function oo(i){this.i=i.Sb||null,this.h=i.ab||!1}g(oo,it),oo.prototype.g=function(){return new Hr(this.i,this.h)};function Hr(i,c){F.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Hr,F),t=Hr.prototype,t.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,qs(this)},t.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=0},t.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,qs(this)),this.g&&(this.readyState=3,qs(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;bc(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function bc(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}t.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Ks(this):qs(this),this.readyState==3&&bc(this)}},t.Oa=function(i){this.g&&(this.response=this.responseText=i,Ks(this))},t.Na=function(i){this.g&&(this.response=i,Ks(this))},t.ga=function(){this.g&&Ks(this)};function Ks(i){i.readyState=4,i.l=null,i.j=null,i.B=null,qs(i)}t.setRequestHeader=function(i,c){this.A.append(i,c)},t.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=c.next();return i.join(`\r
`)};function qs(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Hr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Tc(i){let c="";return nt(i,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function ao(i,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Tc(h),typeof i=="string"?h!=null&&Vs(h):Se(i,c,h))}function Pe(i){F.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Pe,F);var Gd=/^https?$/i,Kd=["POST","PUT"];t=Pe.prototype,t.Fa=function(i){this.H=i},t.ea=function(i,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ic.g(),this.g.onreadystatechange=v(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(P){Sc(this,P);return}if(i=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),R=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(Kd,c,void 0)>=0)||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,B]of h)this.g.setRequestHeader(P,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(P){Sc(this,P)}};function Sc(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Ac(i),$r(i)}function Ac(i){i.A||(i.A=!0,M(i,"complete"),M(i,"error"))}t.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,M(this,"complete"),M(this,"abort"),$r(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$r(this,!0)),Pe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Cc(this):this.Xa())},t.Xa=function(){Cc(this)};function Cc(i){if(i.h&&typeof o<"u"){if(i.v&&fn(i)==4)setTimeout(i.Ca.bind(i),0);else if(M(i,"readystatechange"),fn(i)==4){i.h=!1;try{const P=i.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=P===0){let B=String(i.D).match(mc)[1]||null;!B&&a.self&&a.self.location&&(B=a.self.location.protocol.slice(0,-1)),p=!Gd.test(B?B.toLowerCase():"")}h=p}if(h)M(i,"complete"),M(i,"success");else{i.o=6;try{var R=fn(i)>2?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.ca()+"]",Ac(i)}}finally{$r(i)}}}}function $r(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const h=i.g;i.g=null,c||M(i,"ready");try{h.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function fn(i){return i.g?i.g.readyState:0}t.ca=function(){try{return fn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),We(c)}};function Rc(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function qd(i){const c={};i=(i.g&&fn(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if(y(i[p]))continue;var h=Nd(i[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[R]||[];c[R]=P,P.push(h)}Pt(c,function(p){return p.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function zs(i,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||c}function Pc(i){this.za=0,this.i=[],this.j=new Fs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zs("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zs("baseRetryDelayMs",5e3,i),this.Za=zs("retryDelaySeedMs",1e4,i),this.Ta=zs("forwardChannelMaxRetries",2,i),this.va=zs("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new hc(i&&i.concurrentRequestLimit),this.Ba=new Wd,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Pc.prototype,t.ka=8,t.I=1,t.connect=function(i,c,h,p){Je(0),this.W=i,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=Fc(this,null,this.W),Gr(this)};function co(i){if(Oc(i),i.I==3){var c=i.V++,h=Ot(i.J);if(Se(h,"SID",i.M),Se(h,"RID",c),Se(h,"TYPE","terminate"),Js(i,h),c=new ln(i,i.j,c),c.M=2,c.A=Br(Ot(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Vc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),jr(c)}Uc(i)}function Wr(i){i.g&&(uo(i),i.g.cancel(),i.g=null)}function Oc(i){Wr(i),i.v&&(a.clearTimeout(i.v),i.v=null),Kr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Gr(i){if(!fc(i.h)&&!i.m){i.m=!0;var c=i.Ea;X||_(),ie||(X(),ie=!0),S.add(c,i),i.D=0}}function zd(i,c){return dc(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Us(f(i.Ea,i,c),Mc(i,i.D)),i.D++,!0)}t.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const R=new ln(this,this.j,i);let P=this.o;if(this.U&&(P?(P=rt(P),Ht(P,this.U)):P=this.U),this.u!==null||this.R||(R.J=P,P=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=kc(this,R,c),h=Ot(this.J),Se(h,"RID",i),Se(h,"CVER",22),this.G&&Se(h,"X-HTTP-Session-Id",this.G),Js(this,h),P&&(this.R?c="headers="+Vs(Tc(P))+"&"+c:this.u&&ao(h,this.u,P)),ro(this.h,R),this.Ra&&Se(h,"TYPE","init"),this.S?(Se(h,"$req",c),Se(h,"SID","null"),R.U=!0,eo(R,h,null)):eo(R,h,c),this.I=2}}else this.I==3&&(i?Nc(this,i):this.i.length==0||fc(this.h)||Nc(this))};function Nc(i,c){var h;c?h=c.l:h=i.V++;const p=Ot(i.J);Se(p,"SID",i.M),Se(p,"RID",h),Se(p,"AID",i.K),Js(i,p),i.u&&i.o&&ao(p,i.u,i.o),h=new ln(i,i.j,h,i.D+1),i.u===null&&(h.J=i.o),c&&(i.i=c.G.concat(i.i)),c=kc(i,h,1e3),h.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),ro(i.h,h),eo(h,p,c)}function Js(i,c){i.H&&nt(i.H,function(h,p){Se(c,p,h)}),i.l&&nt({},function(h,p){Se(c,p,h)})}function kc(i,c,h){h=Math.min(i.i.length,h);const p=i.l?f(i.l.Ka,i.l,i):null;e:{var R=i.i;let oe=-1;for(;;){const ke=["count="+h];oe==-1?h>0?(oe=R[0].g,ke.push("ofs="+oe)):oe=0:ke.push("ofs="+oe);let we=!0;for(let xe=0;xe<h;xe++){var P=R[xe].g;const Nt=R[xe].map;if(P-=oe,P<0)oe=Math.max(0,R[xe].g-100),we=!1;else try{P="req"+P+"_"||"";try{var B=Nt instanceof Map?Nt:Object.entries(Nt);for(const[Vn,dn]of B){let pn=dn;l(dn)&&(pn=pe(dn)),ke.push(P+Vn+"="+encodeURIComponent(pn))}}catch(Vn){throw ke.push(P+"type="+encodeURIComponent("_badmap")),Vn}}catch{p&&p(Nt)}}if(we){B=ke.join("&");break e}}B=void 0}return i=i.i.splice(0,h),c.G=i,B}function Dc(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;X||_(),ie||(X(),ie=!0),S.add(c,i),i.A=0}}function lo(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Us(f(i.Da,i),Mc(i,i.A)),i.A++,!0)}t.Da=function(){if(this.v=null,Lc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Us(f(this.Wa,this),i)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Je(10),Wr(this),Lc(this))};function uo(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Lc(i){i.g=new ln(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Ot(i.na);Se(c,"RID","rpc"),Se(c,"SID",i.M),Se(c,"AID",i.K),Se(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&Se(c,"TO",i.ia),Se(c,"TYPE","xmlhttp"),Js(i,c),i.u&&i.o&&ao(c,i.u,i.o),i.O&&(i.g.H=i.O);var h=i.g;i=i.ba,h.M=1,h.A=Br(Ot(c)),h.u=null,h.R=!0,cc(h,i)}t.Va=function(){this.C!=null&&(this.C=null,Wr(this),lo(this),Je(19))};function Kr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function xc(i,c){var h=null;if(i.g==c){Kr(i),uo(i),i.g=null;var p=2}else if(so(i.h,c))h=c.G,pc(i.h,c),p=1;else return;if(i.I!=0){if(c.o)if(p==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var R=i.D;p=us(),M(p,new rc(p,h)),Gr(i)}else Dc(i);else if(R=c.m,R==3||R==0&&c.X>0||!(p==1&&zd(i,c)||p==2&&lo(i)))switch(h&&h.length>0&&(c=i.h,c.i=c.i.concat(h)),R){case 1:Fn(i,5);break;case 4:Fn(i,10);break;case 3:Fn(i,6);break;default:Fn(i,2)}}}function Mc(i,c){let h=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(h*=2),h*c}function Fn(i,c){if(i.j.info("Error code "+c),c==2){var h=f(i.bb,i),p=i.Ua;const R=!p;p=new un(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Bs(p,"https"),Br(p),R?Hd(p.toString(),h):$d(p.toString(),h)}else Je(2);i.I=0,i.l&&i.l.pa(c),Uc(i),Oc(i)}t.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function Uc(i){if(i.I=0,i.ja=[],i.l){const c=gc(i.h);(c.length!=0||i.i.length!=0)&&(O(i.ja,c),O(i.ja,i.i),i.h.i.length=0,A(i.i),i.i.length=0),i.l.oa()}}function Fc(i,c,h){var p=h instanceof un?Ot(h):new un(h);if(p.g!="")c&&(p.g=c+"."+p.g),Hs(p,p.u);else{var R=a.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const P=new un(null);p&&Bs(P,p),c&&(P.g=c),R&&Hs(P,R),h&&(P.h=h),p=P}return h=i.G,c=i.wa,h&&c&&Se(p,h,c),Se(p,"VER",i.ka),Js(i,p),p}function Vc(i,c,h){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new Pe(new oo({ab:h})):new Pe(i.ma),c.Fa(i.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jc(){}t=jc.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ut(i,c){F.call(this),this.g=new Pc(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!y(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new ds(this)}g(ut,F),ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ut.prototype.close=function(){co(this.g)},ut.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.v&&(h={},h.__data__=pe(i),i=h);c.i.push(new Ld(c.Ya++,i)),c.I==3&&Gr(c)},ut.prototype.N=function(){this.g.l=null,delete this.j,co(this.g),delete this.g,ut.Z.N.call(this)};function Bc(i){ls.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const h in c){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}g(Bc,ls);function Hc(){Ve.call(this),this.status=1}g(Hc,Ve);function ds(i){this.g=i}g(ds,jc),ds.prototype.ra=function(){M(this.g,"a")},ds.prototype.qa=function(i){M(this.g,new Bc(i))},ds.prototype.pa=function(i){M(this.g,new Hc)},ds.prototype.oa=function(){M(this.g,"b")},ut.prototype.send=ut.prototype.o,ut.prototype.open=ut.prototype.m,ut.prototype.close=ut.prototype.close,Yi.NO_ERROR=0,Yi.TIMEOUT=8,Yi.HTTP_ERROR=6,Od.COMPLETE="complete",lt.EventType=wt,wt.OPEN="a",wt.CLOSE="b",wt.ERROR="c",wt.MESSAGE="d",F.prototype.listen=F.prototype.J,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa}).apply(typeof Zr<"u"?Zr:typeof self<"u"?self:typeof window<"u"?window:{});const bu="@firebase/firestore",Tu="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new ja("@firebase/firestore");function Tt(t,...e){if(ks.logLevel<=ye.DEBUG){const n=e.map(Qa);ks.debug(`Firestore (${Fr}): ${t}`,...n)}}function _d(t,...e){if(ks.logLevel<=ye.ERROR){const n=e.map(Qa);ks.error(`Firestore (${Fr}): ${t}`,...n)}}function SI(t,...e){if(ks.logLevel<=ye.WARN){const n=e.map(Qa);ks.warn(`Firestore (${Fr}): ${t}`,...n)}}function Qa(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,yd(t,s,n)}function yd(t,e,n){let s=`FIRESTORE (${Fr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw _d(s),new Error(s)}function pr(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||yd(e,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class de extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Qe.UNAUTHENTICATED)))}shutdown(){}}class CI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class RI{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pr(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let o=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new gr,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const u=o;e.enqueueRetryable((async()=>{await u.promise,await r(this.currentUser)}))},l=u=>{Tt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Tt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new gr)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(Tt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(pr(typeof s.accessToken=="string",31837,{l:s}),new vd(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pr(e===null||typeof e=="string",2055,{h:e}),new Qe(e)}}class PI{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class OI{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new PI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Qe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Su{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){pr(this.o===void 0,3512);const s=o=>{o.error!=null&&Tt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,Tt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>s(o)))};const r=o=>{Tt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>r(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):Tt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Su(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(pr(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Su(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=kI(40);for(let o=0;o<r.length;++o)s.length<20&&r[o]<n&&(s+=e.charAt(r[o]%62))}return s}}function Dn(t,e){return t<e?-1:t>e?1:0}function LI(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),o=e.charAt(s);if(r!==o)return Vo(r)===Vo(o)?Dn(r,o):Vo(r)?1:-1}return Dn(t.length,e.length)}const xI=55296,MI=57343;function Vo(t){const e=t.charCodeAt(0);return e>=xI&&e<=MI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="__name__";class Lt{constructor(e,n,s){n===void 0?n=0:n>e.length&&Cr(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Cr(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Lt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Lt?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const o=Lt.compareSegments(e.get(r),n.get(r));if(o!==0)return o}return Dn(e.length,n.length)}static compareSegments(e,n){const s=Lt.isNumericId(e),r=Lt.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?Lt.extractNumericId(e).compare(Lt.extractNumericId(n)):LI(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ya.fromString(e.substring(4,e.length-2))}}class It extends Lt{construct(e,n,s){return new It(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new de(fe.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new It(n)}static emptyPath(){return new It([])}}const UI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qn extends Lt{construct(e,n,s){return new qn(e,n,s)}static isValidIdentifier(e){return UI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Au}static keyField(){return new qn([Au])}static fromServerFormat(e){const n=[];let s="",r=0;const o=()=>{if(s.length===0)throw new de(fe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new de(fe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new de(fe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(o(),r++)}if(o(),a)throw new de(fe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qn(n)}static emptyPath(){return new qn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.path=e}static fromPath(e){return new Xn(It.fromString(e))}static fromName(e){return new Xn(It.fromString(e).popFirst(5))}static empty(){return new Xn(It.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&It.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return It.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Xn(new It(e.slice()))}}function FI(t,e,n,s){if(e===!0&&s===!0)throw new de(fe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function VI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function jI(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Cr(12329,{type:typeof t})}function BI(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new de(fe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jI(t);throw new de(fe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,e){const n={typeString:t};return e&&(n.value=e),n}function Vr(t,e){if(!VI(t))throw new de(fe.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const a=t[s];if(r&&typeof a!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${s}' field to equal '${o.value}'`;break}}if(n)throw new de(fe.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=-62135596800,Ru=1e6;class Mt{static now(){return Mt.fromMillis(Date.now())}static fromDate(e){return Mt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Ru);return new Mt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new de(fe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new de(fe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Cu)throw new de(fe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(fe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ru}_compareTo(e){return this.seconds===e.seconds?Dn(this.nanoseconds,e.nanoseconds):Dn(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Mt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Vr(e,Mt._jsonSchema))return new Mt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Mt._jsonSchemaVersion="firestore/timestamp/1.0",Mt._jsonSchema={type:Ne("string",Mt._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};function HI(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new $I("Invalid base64 string: "+o):o}})(e);return new os(n)}static fromUint8Array(e){const n=(function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o})(e);return new os(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Dn(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}os.EMPTY_BYTE_STRING=new os("");const pa="(default)";class Ni{constructor(e,n){this.projectId=e,this.database=n||pa}static empty(){return new Ni("","")}get isDefaultDatabase(){return this.database===pa}isEqual(e){return e instanceof Ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n=null,s=[],r=[],o=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function GI(t){return new WI(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pu,he;(he=Pu||(Pu={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ya([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=1048576;function jo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n,s=1e3,r=1.5,o=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=r,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&Tt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n,s,r,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=o,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,o){const a=Date.now()+s,l=new Za(e,n,a,r,o);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(fe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ou,Nu;(Nu=Ou||(Ou={})).Ma="default",Nu.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="firestore.googleapis.com",Du=!0;class Lu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new de(fe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ed,this.ssl=Du}else this.host=e.host,this.ssl=e.ssl??Du;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=KI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qI)throw new de(fe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}FI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=JI(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new de(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new de(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new de(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wd{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(fe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(fe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new AI;switch(s.type){case"firstParty":return new OI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de(fe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=ku.get(n);s&&(Tt("ComponentProvider","Removing Datastore"),ku.delete(n),s.terminate())})(this),Promise.resolve()}}function XI(t,e,n,s={}){t=BI(t,wd);const r=Nr(e),o=t._getSettings(),a={...o,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;r&&(Cf(`https://${l}`),Rf("Firestore",!0)),o.host!==Ed&&o.host!==l&&SI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...o,host:l,ssl:r,emulatorOptions:s};if(!ns(u,a)&&(t._setSettings(u),s.mockUserToken)){let f,d;if(typeof s.mockUserToken=="string")f=s.mockUserToken,d=Qe.MOCK_USER;else{f=J_(s.mockUserToken,t._app?.options.projectId);const g=s.mockUserToken.sub||s.mockUserToken.user_id;if(!g)throw new de(fe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Qe(g)}t._authCredentials=new CI(new vd(f,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ec(this.firestore,e,this._query)}}class Ut{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}toJSON(){return{type:Ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Vr(n,Ut._jsonSchema))return new Ut(e,s||null,new Xn(It.fromString(n.referencePath)))}}Ut._jsonSchemaVersion="firestore/documentReference/1.0",Ut._jsonSchema={type:Ne("string",Ut._jsonSchemaVersion),referencePath:Ne("string")};class tc extends ec{constructor(e,n,s){super(e,n,GI(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new Xn(e))}withConverter(e){return new tc(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="AsyncQueue";class Mu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new zI(this,"async_queue_retry"),this._c=()=>{const s=jo();s&&Tt(xu,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=jo();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=jo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new gr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!HI(e))throw e;Tt(xu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,_d("INTERNAL UNHANDLED ERROR: ",Uu(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=Za.createAndSchedule(this,e,n,s,(o=>this.hc(o)));return this.tc.push(r),r}uc(){this.nc&&Cr(47125,{Pc:Uu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Uu(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class YI extends wd{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Mu,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mu(e),this._firestoreClient=void 0,await e}}}function QI(t,e){const n=typeof t=="object"?t:kf(),s=typeof t=="string"?t:pa,r=Ha(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const o=q_("firestore");o&&XI(r,...o)}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yt(os.fromBase64String(e))}catch(n){throw new de(fe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yt(os.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Vr(e,Yt._jsonSchema))return Yt.fromBase64String(e.bytes)}}Yt._jsonSchemaVersion="firestore/bytes/1.0",Yt._jsonSchema={type:Ne("string",Yt._jsonSchemaVersion),bytes:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new de(fe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new de(fe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new de(fe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Dn(this._lat,e._lat)||Dn(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zn._jsonSchemaVersion}}static fromJSON(e){if(Vr(e,Zn._jsonSchema))return new Zn(e.latitude,e.longitude)}}Zn._jsonSchemaVersion="firestore/geoPoint/1.0",Zn._jsonSchema={type:Ne("string",Zn._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==r[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:es._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Vr(e,es._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new es(e.vectorValues);throw new de(fe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}es._jsonSchemaVersion="firestore/vectorValue/1.0",es._jsonSchema={type:Ne("string",es._jsonSchemaVersion),vectorValues:Ne("object")};const ZI=new RegExp("[~\\*/\\[\\]]");function eb(t,e,n){if(e.search(ZI)>=0)throw Fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Id(...e.split("."))._internalPath}catch{throw Fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Fu(t,e,n,s,r){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new de(fe.INVALID_ARGUMENT,o+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n,s,r,o){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Td("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tb extends bd{data(){return super.data()}}function Td(t,e){return typeof e=="string"?eb(t,e):e instanceof Id?e._internalPath:e._delegate._internalPath}class ei{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cs extends bd{constructor(e,n,s,r,o,a){super(e,n,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Td("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(fe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Cs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Cs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cs._jsonSchema={type:Ne("string",Cs._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class hi extends Cs{data(e={}){return super.data(e)}}class mr{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ei(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new hi(this._firestore,this._userDataWriter,s.key,s,new ei(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new de(fe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((l=>{const u=new hi(r._firestore,r._userDataWriter,l.doc.key,l.doc,new ei(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const u=new hi(r._firestore,r._userDataWriter,l.doc.key,l.doc,new ei(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:nb(l.type),doc:u,oldIndex:f,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(fe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=mr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=DI.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((o=>{o._document!==null&&(n.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),r.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Cr(61501,{type:t})}}mr._jsonSchemaVersion="firestore/querySnapshot/1.0",mr._jsonSchema={type:Ne("string",mr._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};(function(e,n=!0){(function(r){Fr=r})(Ds),Os(new ss("firestore",((s,{instanceIdentifier:r,options:o})=>{const a=s.getProvider("app").getImmediate(),l=new YI(new RI(s.getProvider("auth-internal")),new NI(a,s.getProvider("app-check-internal")),(function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new de(fe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(f.options.projectId,d)})(a,r),a);return o={useFetchStreams:n,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),On(bu,Tu,e),On(bu,Tu,"esm2020")})();const sb={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},Sd=Nf(sb);gd(Sd);QI(Sd);Im(yI).use(Sm()).use(II).mount("#app");export{pt as F,Xi as _,Le as a,Q as b,zt as c,rb as d,ts as e,st as f,ft as g,Nh as h,va as n,dt as o,eg as r,zn as t,_i as w};
