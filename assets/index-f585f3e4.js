function av(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Sh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kh={exports:{}},jo={},Ph={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),lv=Symbol.for("react.portal"),uv=Symbol.for("react.fragment"),cv=Symbol.for("react.strict_mode"),dv=Symbol.for("react.profiler"),fv=Symbol.for("react.provider"),hv=Symbol.for("react.context"),pv=Symbol.for("react.forward_ref"),mv=Symbol.for("react.suspense"),gv=Symbol.for("react.memo"),vv=Symbol.for("react.lazy"),ed=Symbol.iterator;function yv(t){return t===null||typeof t!="object"?null:(t=ed&&t[ed]||t["@@iterator"],typeof t=="function"?t:null)}var Ch={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rh=Object.assign,Ah={};function Vr(t,e,n){this.props=t,this.context=e,this.refs=Ah,this.updater=n||Ch}Vr.prototype.isReactComponent={};Vr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xh(){}xh.prototype=Vr.prototype;function ku(t,e,n){this.props=t,this.context=e,this.refs=Ah,this.updater=n||Ch}var Pu=ku.prototype=new xh;Pu.constructor=ku;Rh(Pu,Vr.prototype);Pu.isPureReactComponent=!0;var td=Array.isArray,Nh=Object.prototype.hasOwnProperty,Cu={current:null},Oh={key:!0,ref:!0,__self:!0,__source:!0};function bh(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Nh.call(e,r)&&!Oh.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Gi,type:t,key:s,ref:o,props:i,_owner:Cu.current}}function _v(t,e){return{$$typeof:Gi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ru(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gi}function wv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nd=/\/+/g;function Ea(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wv(""+t.key):e.toString(36)}function bs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Gi:case lv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ea(o,0):r,td(i)?(n="",t!=null&&(n=t.replace(nd,"$&/")+"/"),bs(i,e,n,"",function(u){return u})):i!=null&&(Ru(i)&&(i=_v(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(nd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",td(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ea(s,a);o+=bs(s,e,n,l,i)}else if(l=yv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ea(s,a++),o+=bs(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function us(t,e,n){if(t==null)return t;var r=[],i=0;return bs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pe={current:null},Ds={transition:null},Iv={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Ds,ReactCurrentOwner:Cu};L.Children={map:us,forEach:function(t,e,n){us(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return us(t,function(){e++}),e},toArray:function(t){return us(t,function(e){return e})||[]},only:function(t){if(!Ru(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};L.Component=Vr;L.Fragment=uv;L.Profiler=dv;L.PureComponent=ku;L.StrictMode=cv;L.Suspense=mv;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv;L.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Rh({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Nh.call(e,l)&&!Oh.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Gi,type:t.type,key:i,ref:s,props:r,_owner:o}};L.createContext=function(t){return t={$$typeof:hv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fv,_context:t},t.Consumer=t};L.createElement=bh;L.createFactory=function(t){var e=bh.bind(null,t);return e.type=t,e};L.createRef=function(){return{current:null}};L.forwardRef=function(t){return{$$typeof:pv,render:t}};L.isValidElement=Ru;L.lazy=function(t){return{$$typeof:vv,_payload:{_status:-1,_result:t},_init:Ev}};L.memo=function(t,e){return{$$typeof:gv,type:t,compare:e===void 0?null:e}};L.startTransition=function(t){var e=Ds.transition;Ds.transition={};try{t()}finally{Ds.transition=e}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(t,e){return Pe.current.useCallback(t,e)};L.useContext=function(t){return Pe.current.useContext(t)};L.useDebugValue=function(){};L.useDeferredValue=function(t){return Pe.current.useDeferredValue(t)};L.useEffect=function(t,e){return Pe.current.useEffect(t,e)};L.useId=function(){return Pe.current.useId()};L.useImperativeHandle=function(t,e,n){return Pe.current.useImperativeHandle(t,e,n)};L.useInsertionEffect=function(t,e){return Pe.current.useInsertionEffect(t,e)};L.useLayoutEffect=function(t,e){return Pe.current.useLayoutEffect(t,e)};L.useMemo=function(t,e){return Pe.current.useMemo(t,e)};L.useReducer=function(t,e,n){return Pe.current.useReducer(t,e,n)};L.useRef=function(t){return Pe.current.useRef(t)};L.useState=function(t){return Pe.current.useState(t)};L.useSyncExternalStore=function(t,e,n){return Pe.current.useSyncExternalStore(t,e,n)};L.useTransition=function(){return Pe.current.useTransition()};L.version="18.2.0";Ph.exports=L;var S=Ph.exports;const xe=Sh(S),Tv=av({__proto__:null,default:xe},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv=S,kv=Symbol.for("react.element"),Pv=Symbol.for("react.fragment"),Cv=Object.prototype.hasOwnProperty,Rv=Sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Av={key:!0,ref:!0,__self:!0,__source:!0};function Dh(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Cv.call(e,r)&&!Av.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kv,type:t,key:s,ref:o,props:i,_owner:Rv.current}}jo.Fragment=Pv;jo.jsx=Dh;jo.jsxs=Dh;kh.exports=jo;var g=kh.exports,pl={},Lh={exports:{}},Ke={},Mh={exports:{}},Vh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,O){var D=R.length;R.push(O);e:for(;0<D;){var Z=D-1>>>1,oe=R[Z];if(0<i(oe,O))R[Z]=O,R[D]=oe,D=Z;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var O=R[0],D=R.pop();if(D!==O){R[0]=D;e:for(var Z=0,oe=R.length,as=oe>>>1;Z<as;){var kn=2*(Z+1)-1,wa=R[kn],Pn=kn+1,ls=R[Pn];if(0>i(wa,D))Pn<oe&&0>i(ls,wa)?(R[Z]=ls,R[Pn]=D,Z=Pn):(R[Z]=wa,R[kn]=D,Z=kn);else if(Pn<oe&&0>i(ls,D))R[Z]=ls,R[Pn]=D,Z=Pn;else break e}}return O}function i(R,O){var D=R.sortIndex-O.sortIndex;return D!==0?D:R.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,m=3,y=!1,_=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(R){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=R)r(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function v(R){if(w=!1,f(R),!_)if(n(l)!==null)_=!0,Sn(E);else{var O=n(u);O!==null&&os(v,O.startTime-R)}}function E(R,O){_=!1,w&&(w=!1,p(A),A=-1),y=!0;var D=m;try{for(f(O),h=n(l);h!==null&&(!(h.expirationTime>O)||R&&!Ue());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,m=h.priorityLevel;var oe=Z(h.expirationTime<=O);O=t.unstable_now(),typeof oe=="function"?h.callback=oe:h===n(l)&&r(l),f(O)}else r(l);h=n(l)}if(h!==null)var as=!0;else{var kn=n(u);kn!==null&&os(v,kn.startTime-O),as=!1}return as}finally{h=null,m=D,y=!1}}var T=!1,P=null,A=-1,F=5,b=-1;function Ue(){return!(t.unstable_now()-b<F)}function jt(){if(P!==null){var R=t.unstable_now();b=R;var O=!0;try{O=P(!0,R)}finally{O?Ft():(T=!1,P=null)}}else T=!1}var Ft;if(typeof d=="function")Ft=function(){d(jt)};else if(typeof MessageChannel<"u"){var zr=new MessageChannel,_a=zr.port2;zr.port1.onmessage=jt,Ft=function(){_a.postMessage(null)}}else Ft=function(){k(jt,0)};function Sn(R){P=R,T||(T=!0,Ft())}function os(R,O){A=k(function(){R(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||y||(_=!0,Sn(E))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var D=m;m=O;try{return R()}finally{m=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,O){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var D=m;m=R;try{return O()}finally{m=D}},t.unstable_scheduleCallback=function(R,O,D){var Z=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Z+D:Z):D=Z,R){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=D+oe,R={id:c++,callback:O,priorityLevel:R,startTime:D,expirationTime:oe,sortIndex:-1},D>Z?(R.sortIndex=D,e(u,R),n(l)===null&&R===n(u)&&(w?(p(A),A=-1):w=!0,os(v,D-Z))):(R.sortIndex=oe,e(l,R),_||y||(_=!0,Sn(E))),R},t.unstable_shouldYield=Ue,t.unstable_wrapCallback=function(R){var O=m;return function(){var D=m;m=O;try{return R.apply(this,arguments)}finally{m=D}}}})(Vh);Mh.exports=Vh;var xv=Mh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh=S,We=xv;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jh=new Set,_i={};function Zn(t,e){Pr(t,e),Pr(t+"Capture",e)}function Pr(t,e){for(_i[t]=e,t=0;t<e.length;t++)jh.add(e[t])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=Object.prototype.hasOwnProperty,Nv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rd={},id={};function Ov(t){return ml.call(id,t)?!0:ml.call(rd,t)?!1:Nv.test(t)?id[t]=!0:(rd[t]=!0,!1)}function bv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Dv(t,e,n,r){if(e===null||typeof e>"u"||bv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ce(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){me[t]=new Ce(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];me[e]=new Ce(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){me[t]=new Ce(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){me[t]=new Ce(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){me[t]=new Ce(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){me[t]=new Ce(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){me[t]=new Ce(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){me[t]=new Ce(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){me[t]=new Ce(t,5,!1,t.toLowerCase(),null,!1,!1)});var Au=/[\-:]([a-z])/g;function xu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Au,xu);me[e]=new Ce(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Au,xu);me[e]=new Ce(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Au,xu);me[e]=new Ce(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){me[t]=new Ce(t,1,!1,t.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){me[t]=new Ce(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nu(t,e,n,r){var i=me.hasOwnProperty(e)?me[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Dv(e,n,i,r)&&(n=null),r||i===null?Ov(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ut=Uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cs=Symbol.for("react.element"),or=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),Ou=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),Fh=Symbol.for("react.provider"),$h=Symbol.for("react.context"),bu=Symbol.for("react.forward_ref"),vl=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),Du=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),zh=Symbol.for("react.offscreen"),sd=Symbol.iterator;function Br(t){return t===null||typeof t!="object"?null:(t=sd&&t[sd]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,Ia;function Zr(t){if(Ia===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ia=e&&e[1]||""}return`
`+Ia+t}var Ta=!1;function Sa(t,e){if(!t||Ta)return"";Ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ta=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zr(t):""}function Lv(t){switch(t.tag){case 5:return Zr(t.type);case 16:return Zr("Lazy");case 13:return Zr("Suspense");case 19:return Zr("SuspenseList");case 0:case 2:case 15:return t=Sa(t.type,!1),t;case 11:return t=Sa(t.type.render,!1),t;case 1:return t=Sa(t.type,!0),t;default:return""}}function _l(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ar:return"Fragment";case or:return"Portal";case gl:return"Profiler";case Ou:return"StrictMode";case vl:return"Suspense";case yl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $h:return(t.displayName||"Context")+".Consumer";case Fh:return(t._context.displayName||"Context")+".Provider";case bu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Du:return e=t.displayName||null,e!==null?e:_l(t.type)||"Memo";case Bt:e=t._payload,t=t._init;try{return _l(t(e))}catch{}}return null}function Mv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _l(e);case 8:return e===Ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vv(t){var e=Bh(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ds(t){t._valueTracker||(t._valueTracker=Vv(t))}function Hh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bh(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Qs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wl(t,e){var n=e.checked;return G({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function od(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wh(t,e){e=e.checked,e!=null&&Nu(t,"checked",e,!1)}function El(t,e){Wh(t,e);var n=gn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Il(t,e.type,n):e.hasOwnProperty("defaultValue")&&Il(t,e.type,gn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ad(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Il(t,e,n){(e!=="number"||Qs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ei=Array.isArray;function yr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Tl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return G({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ld(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(ei(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gn(n)}}function Kh(t,e){var n=gn(e.value),r=gn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ud(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fs,Gh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fs=fs||document.createElement("div"),fs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uv=["Webkit","ms","Moz","O"];Object.keys(ri).forEach(function(t){Uv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ri[e]=ri[t]})});function Qh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ri.hasOwnProperty(t)&&ri[t]?(""+e).trim():e+"px"}function Yh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var jv=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(t,e){if(e){if(jv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Pl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=null;function Lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rl=null,_r=null,wr=null;function cd(t){if(t=Ji(t)){if(typeof Rl!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Ho(e),Rl(t.stateNode,t.type,e))}}function Jh(t){_r?wr?wr.push(t):wr=[t]:_r=t}function Xh(){if(_r){var t=_r,e=wr;if(wr=_r=null,cd(t),e)for(t=0;t<e.length;t++)cd(e[t])}}function Zh(t,e){return t(e)}function ep(){}var ka=!1;function tp(t,e,n){if(ka)return t(e,n);ka=!0;try{return Zh(t,e,n)}finally{ka=!1,(_r!==null||wr!==null)&&(ep(),Xh())}}function Ei(t,e){var n=t.stateNode;if(n===null)return null;var r=Ho(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Al=!1;if(Ot)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Al=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Al=!1}function Fv(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ii=!1,Ys=null,Js=!1,xl=null,$v={onError:function(t){ii=!0,Ys=t}};function zv(t,e,n,r,i,s,o,a,l){ii=!1,Ys=null,Fv.apply($v,arguments)}function Bv(t,e,n,r,i,s,o,a,l){if(zv.apply(this,arguments),ii){if(ii){var u=Ys;ii=!1,Ys=null}else throw Error(I(198));Js||(Js=!0,xl=u)}}function er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function np(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dd(t){if(er(t)!==t)throw Error(I(188))}function Hv(t){var e=t.alternate;if(!e){if(e=er(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dd(i),t;if(s===r)return dd(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function rp(t){return t=Hv(t),t!==null?ip(t):null}function ip(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ip(t);if(e!==null)return e;t=t.sibling}return null}var sp=We.unstable_scheduleCallback,fd=We.unstable_cancelCallback,Wv=We.unstable_shouldYield,Kv=We.unstable_requestPaint,ee=We.unstable_now,qv=We.unstable_getCurrentPriorityLevel,Mu=We.unstable_ImmediatePriority,op=We.unstable_UserBlockingPriority,Xs=We.unstable_NormalPriority,Gv=We.unstable_LowPriority,ap=We.unstable_IdlePriority,Fo=null,vt=null;function Qv(t){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Fo,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Xv,Yv=Math.log,Jv=Math.LN2;function Xv(t){return t>>>=0,t===0?32:31-(Yv(t)/Jv|0)|0}var hs=64,ps=4194304;function ti(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ti(a):(s&=o,s!==0&&(r=ti(s)))}else o=n&~i,o!==0?r=ti(o):s!==0&&(r=ti(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-at(e),i=1<<n,r|=t[n],e&=~i;return r}function Zv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-at(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Zv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lp(){var t=hs;return hs<<=1,!(hs&4194240)&&(hs=64),t}function Pa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-at(e),t[e]=n}function t1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-at(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-at(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function up(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cp,Uu,dp,fp,hp,Ol=!1,ms=[],nn=null,rn=null,sn=null,Ii=new Map,Ti=new Map,qt=[],n1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hd(t,e){switch(t){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Ii.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(e.pointerId)}}function Wr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ji(e),e!==null&&Uu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function r1(t,e,n,r,i){switch(e){case"focusin":return nn=Wr(nn,t,e,n,r,i),!0;case"dragenter":return rn=Wr(rn,t,e,n,r,i),!0;case"mouseover":return sn=Wr(sn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ii.set(s,Wr(Ii.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ti.set(s,Wr(Ti.get(s)||null,t,e,n,r,i)),!0}return!1}function pp(t){var e=Nn(t.target);if(e!==null){var n=er(e);if(n!==null){if(e=n.tag,e===13){if(e=np(n),e!==null){t.blockedOn=e,hp(t.priority,function(){dp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ls(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cl=r,n.target.dispatchEvent(r),Cl=null}else return e=Ji(n),e!==null&&Uu(e),t.blockedOn=n,!1;e.shift()}return!0}function pd(t,e,n){Ls(t)&&n.delete(e)}function i1(){Ol=!1,nn!==null&&Ls(nn)&&(nn=null),rn!==null&&Ls(rn)&&(rn=null),sn!==null&&Ls(sn)&&(sn=null),Ii.forEach(pd),Ti.forEach(pd)}function Kr(t,e){t.blockedOn===e&&(t.blockedOn=null,Ol||(Ol=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,i1)))}function Si(t){function e(i){return Kr(i,t)}if(0<ms.length){Kr(ms[0],t);for(var n=1;n<ms.length;n++){var r=ms[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nn!==null&&Kr(nn,t),rn!==null&&Kr(rn,t),sn!==null&&Kr(sn,t),Ii.forEach(e),Ti.forEach(e),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)pp(n),n.blockedOn===null&&qt.shift()}var Er=Ut.ReactCurrentBatchConfig,eo=!0;function s1(t,e,n,r){var i=$,s=Er.transition;Er.transition=null;try{$=1,ju(t,e,n,r)}finally{$=i,Er.transition=s}}function o1(t,e,n,r){var i=$,s=Er.transition;Er.transition=null;try{$=4,ju(t,e,n,r)}finally{$=i,Er.transition=s}}function ju(t,e,n,r){if(eo){var i=bl(t,e,n,r);if(i===null)Ma(t,e,r,to,n),hd(t,r);else if(r1(i,t,e,n,r))r.stopPropagation();else if(hd(t,r),e&4&&-1<n1.indexOf(t)){for(;i!==null;){var s=Ji(i);if(s!==null&&cp(s),s=bl(t,e,n,r),s===null&&Ma(t,e,r,to,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ma(t,e,r,null,n)}}var to=null;function bl(t,e,n,r){if(to=null,t=Lu(r),t=Nn(t),t!==null)if(e=er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=np(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return to=t,null}function mp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qv()){case Mu:return 1;case op:return 4;case Xs:case Gv:return 16;case ap:return 536870912;default:return 16}default:return 16}}var Zt=null,Fu=null,Ms=null;function gp(){if(Ms)return Ms;var t,e=Fu,n=e.length,r,i="value"in Zt?Zt.value:Zt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ms=i.slice(t,1<r?1-r:void 0)}function Vs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function gs(){return!0}function md(){return!1}function qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gs:md,this.isPropagationStopped=md,this}return G(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),e}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$u=qe(Ur),Yi=G({},Ur,{view:0,detail:0}),a1=qe(Yi),Ca,Ra,qr,$o=G({},Yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qr&&(qr&&t.type==="mousemove"?(Ca=t.screenX-qr.screenX,Ra=t.screenY-qr.screenY):Ra=Ca=0,qr=t),Ca)},movementY:function(t){return"movementY"in t?t.movementY:Ra}}),gd=qe($o),l1=G({},$o,{dataTransfer:0}),u1=qe(l1),c1=G({},Yi,{relatedTarget:0}),Aa=qe(c1),d1=G({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),f1=qe(d1),h1=G({},Ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p1=qe(h1),m1=G({},Ur,{data:0}),vd=qe(m1),g1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=y1[t])?!!e[t]:!1}function zu(){return _1}var w1=G({},Yi,{key:function(t){if(t.key){var e=g1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?v1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(t){return t.type==="keypress"?Vs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),E1=qe(w1),I1=G({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=qe(I1),T1=G({},Yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),S1=qe(T1),k1=G({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),P1=qe(k1),C1=G({},$o,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R1=qe(C1),A1=[9,13,27,32],Bu=Ot&&"CompositionEvent"in window,si=null;Ot&&"documentMode"in document&&(si=document.documentMode);var x1=Ot&&"TextEvent"in window&&!si,vp=Ot&&(!Bu||si&&8<si&&11>=si),_d=String.fromCharCode(32),wd=!1;function yp(t,e){switch(t){case"keyup":return A1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lr=!1;function N1(t,e){switch(t){case"compositionend":return _p(e);case"keypress":return e.which!==32?null:(wd=!0,_d);case"textInput":return t=e.data,t===_d&&wd?null:t;default:return null}}function O1(t,e){if(lr)return t==="compositionend"||!Bu&&yp(t,e)?(t=gp(),Ms=Fu=Zt=null,lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vp&&e.locale!=="ko"?null:e.data;default:return null}}var b1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!b1[t.type]:e==="textarea"}function wp(t,e,n,r){Jh(r),e=no(e,"onChange"),0<e.length&&(n=new $u("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var oi=null,ki=null;function D1(t){Np(t,0)}function zo(t){var e=dr(t);if(Hh(e))return t}function L1(t,e){if(t==="change")return e}var Ep=!1;if(Ot){var xa;if(Ot){var Na="oninput"in document;if(!Na){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),Na=typeof Id.oninput=="function"}xa=Na}else xa=!1;Ep=xa&&(!document.documentMode||9<document.documentMode)}function Td(){oi&&(oi.detachEvent("onpropertychange",Ip),ki=oi=null)}function Ip(t){if(t.propertyName==="value"&&zo(ki)){var e=[];wp(e,ki,t,Lu(t)),tp(D1,e)}}function M1(t,e,n){t==="focusin"?(Td(),oi=e,ki=n,oi.attachEvent("onpropertychange",Ip)):t==="focusout"&&Td()}function V1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zo(ki)}function U1(t,e){if(t==="click")return zo(e)}function j1(t,e){if(t==="input"||t==="change")return zo(e)}function F1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ct=typeof Object.is=="function"?Object.is:F1;function Pi(t,e){if(ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ml.call(e,i)||!ct(t[i],e[i]))return!1}return!0}function Sd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kd(t,e){var n=Sd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sd(n)}}function Tp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sp(){for(var t=window,e=Qs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qs(t.document)}return e}function Hu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $1(t){var e=Sp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tp(n.ownerDocument.documentElement,n)){if(r!==null&&Hu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=kd(n,s);var o=kd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var z1=Ot&&"documentMode"in document&&11>=document.documentMode,ur=null,Dl=null,ai=null,Ll=!1;function Pd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ll||ur==null||ur!==Qs(r)||(r=ur,"selectionStart"in r&&Hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&Pi(ai,r)||(ai=r,r=no(Dl,"onSelect"),0<r.length&&(e=new $u("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ur)))}function vs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cr={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionend:vs("Transition","TransitionEnd")},Oa={},kp={};Ot&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Bo(t){if(Oa[t])return Oa[t];if(!cr[t])return t;var e=cr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kp)return Oa[t]=e[n];return t}var Pp=Bo("animationend"),Cp=Bo("animationiteration"),Rp=Bo("animationstart"),Ap=Bo("transitionend"),xp=new Map,Cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(t,e){xp.set(t,e),Zn(e,[t])}for(var ba=0;ba<Cd.length;ba++){var Da=Cd[ba],B1=Da.toLowerCase(),H1=Da[0].toUpperCase()+Da.slice(1);_n(B1,"on"+H1)}_n(Pp,"onAnimationEnd");_n(Cp,"onAnimationIteration");_n(Rp,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(Ap,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));function Rd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Bv(r,e,void 0,t),t.currentTarget=null}function Np(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Rd(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Rd(i,a,u),s=l}}}if(Js)throw t=xl,Js=!1,xl=null,t}function B(t,e){var n=e[Fl];n===void 0&&(n=e[Fl]=new Set);var r=t+"__bubble";n.has(r)||(Op(e,t,2,!1),n.add(r))}function La(t,e,n){var r=0;e&&(r|=4),Op(n,t,r,e)}var ys="_reactListening"+Math.random().toString(36).slice(2);function Ci(t){if(!t[ys]){t[ys]=!0,jh.forEach(function(n){n!=="selectionchange"&&(W1.has(n)||La(n,!1,t),La(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ys]||(e[ys]=!0,La("selectionchange",!1,e))}}function Op(t,e,n,r){switch(mp(e)){case 1:var i=s1;break;case 4:i=o1;break;default:i=ju}n=i.bind(null,e,n,t),i=void 0,!Al||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ma(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Nn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}tp(function(){var u=s,c=Lu(n),h=[];e:{var m=xp.get(t);if(m!==void 0){var y=$u,_=t;switch(t){case"keypress":if(Vs(n)===0)break e;case"keydown":case"keyup":y=E1;break;case"focusin":_="focus",y=Aa;break;case"focusout":_="blur",y=Aa;break;case"beforeblur":case"afterblur":y=Aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=u1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=S1;break;case Pp:case Cp:case Rp:y=f1;break;case Ap:y=P1;break;case"scroll":y=a1;break;case"wheel":y=R1;break;case"copy":case"cut":case"paste":y=p1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=yd}var w=(e&4)!==0,k=!w&&t==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var d=u,f;d!==null;){f=d;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=Ei(d,p),v!=null&&w.push(Ri(d,v,f)))),k)break;d=d.return}0<w.length&&(m=new y(m,_,null,n,c),h.push({event:m,listeners:w}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Cl&&(_=n.relatedTarget||n.fromElement)&&(Nn(_)||_[bt]))break e;if((y||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?Nn(_):null,_!==null&&(k=er(_),_!==k||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(w=gd,v="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(w=yd,v="onPointerLeave",p="onPointerEnter",d="pointer"),k=y==null?m:dr(y),f=_==null?m:dr(_),m=new w(v,d+"leave",y,n,c),m.target=k,m.relatedTarget=f,v=null,Nn(c)===u&&(w=new w(p,d+"enter",_,n,c),w.target=f,w.relatedTarget=k,v=w),k=v,y&&_)t:{for(w=y,p=_,d=0,f=w;f;f=ir(f))d++;for(f=0,v=p;v;v=ir(v))f++;for(;0<d-f;)w=ir(w),d--;for(;0<f-d;)p=ir(p),f--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=ir(w),p=ir(p)}w=null}else w=null;y!==null&&Ad(h,m,y,w,!1),_!==null&&k!==null&&Ad(h,k,_,w,!0)}}e:{if(m=u?dr(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var E=L1;else if(Ed(m))if(Ep)E=j1;else{E=V1;var T=M1}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=U1);if(E&&(E=E(t,u))){wp(h,E,n,c);break e}T&&T(t,m,u),t==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Il(m,"number",m.value)}switch(T=u?dr(u):window,t){case"focusin":(Ed(T)||T.contentEditable==="true")&&(ur=T,Dl=u,ai=null);break;case"focusout":ai=Dl=ur=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,Pd(h,n,c);break;case"selectionchange":if(z1)break;case"keydown":case"keyup":Pd(h,n,c)}var P;if(Bu)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else lr?yp(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(vp&&n.locale!=="ko"&&(lr||A!=="onCompositionStart"?A==="onCompositionEnd"&&lr&&(P=gp()):(Zt=c,Fu="value"in Zt?Zt.value:Zt.textContent,lr=!0)),T=no(u,A),0<T.length&&(A=new vd(A,t,null,n,c),h.push({event:A,listeners:T}),P?A.data=P:(P=_p(n),P!==null&&(A.data=P)))),(P=x1?N1(t,n):O1(t,n))&&(u=no(u,"onBeforeInput"),0<u.length&&(c=new vd("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=P))}Np(h,e)})}function Ri(t,e,n){return{instance:t,listener:e,currentTarget:n}}function no(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ei(t,n),s!=null&&r.unshift(Ri(t,s,i)),s=Ei(t,e),s!=null&&r.push(Ri(t,s,i))),t=t.return}return r}function ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ad(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ei(n,s),l!=null&&o.unshift(Ri(n,l,a))):i||(l=Ei(n,s),l!=null&&o.push(Ri(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var K1=/\r\n?/g,q1=/\u0000|\uFFFD/g;function xd(t){return(typeof t=="string"?t:""+t).replace(K1,`
`).replace(q1,"")}function _s(t,e,n){if(e=xd(e),xd(t)!==e&&n)throw Error(I(425))}function ro(){}var Ml=null,Vl=null;function Ul(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,G1=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,Q1=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(t){return Nd.resolve(null).then(t).catch(Y1)}:jl;function Y1(t){setTimeout(function(){throw t})}function Va(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Si(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Si(e)}function on(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Od(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var jr=Math.random().toString(36).slice(2),pt="__reactFiber$"+jr,Ai="__reactProps$"+jr,bt="__reactContainer$"+jr,Fl="__reactEvents$"+jr,J1="__reactListeners$"+jr,X1="__reactHandles$"+jr;function Nn(t){var e=t[pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bt]||n[pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Od(t);t!==null;){if(n=t[pt])return n;t=Od(t)}return e}t=n,n=t.parentNode}return null}function Ji(t){return t=t[pt]||t[bt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function dr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Ho(t){return t[Ai]||null}var $l=[],fr=-1;function wn(t){return{current:t}}function H(t){0>fr||(t.current=$l[fr],$l[fr]=null,fr--)}function z(t,e){fr++,$l[fr]=t.current,t.current=e}var vn={},we=wn(vn),be=wn(!1),$n=vn;function Cr(t,e){var n=t.type.contextTypes;if(!n)return vn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function De(t){return t=t.childContextTypes,t!=null}function io(){H(be),H(we)}function bd(t,e,n){if(we.current!==vn)throw Error(I(168));z(we,e),z(be,n)}function bp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,Mv(t)||"Unknown",i));return G({},n,r)}function so(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vn,$n=we.current,z(we,t),z(be,be.current),!0}function Dd(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=bp(t,e,$n),r.__reactInternalMemoizedMergedChildContext=t,H(be),H(we),z(we,t)):H(be),z(be,n)}var St=null,Wo=!1,Ua=!1;function Dp(t){St===null?St=[t]:St.push(t)}function Z1(t){Wo=!0,Dp(t)}function En(){if(!Ua&&St!==null){Ua=!0;var t=0,e=$;try{var n=St;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}St=null,Wo=!1}catch(i){throw St!==null&&(St=St.slice(t+1)),sp(Mu,En),i}finally{$=e,Ua=!1}}return null}var hr=[],pr=0,oo=null,ao=0,Ge=[],Qe=0,zn=null,Pt=1,Ct="";function Cn(t,e){hr[pr++]=ao,hr[pr++]=oo,oo=t,ao=e}function Lp(t,e,n){Ge[Qe++]=Pt,Ge[Qe++]=Ct,Ge[Qe++]=zn,zn=t;var r=Pt;t=Ct;var i=32-at(r)-1;r&=~(1<<i),n+=1;var s=32-at(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pt=1<<32-at(e)+i|n<<i|r,Ct=s+t}else Pt=1<<s|n<<i|r,Ct=t}function Wu(t){t.return!==null&&(Cn(t,1),Lp(t,1,0))}function Ku(t){for(;t===oo;)oo=hr[--pr],hr[pr]=null,ao=hr[--pr],hr[pr]=null;for(;t===zn;)zn=Ge[--Qe],Ge[Qe]=null,Ct=Ge[--Qe],Ge[Qe]=null,Pt=Ge[--Qe],Ge[Qe]=null}var ze=null,Fe=null,W=!1,ot=null;function Mp(t,e){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ld(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ze=t,Fe=on(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ze=t,Fe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zn!==null?{id:Pt,overflow:Ct}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ze=t,Fe=null,!0):!1;default:return!1}}function zl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bl(t){if(W){var e=Fe;if(e){var n=e;if(!Ld(t,e)){if(zl(t))throw Error(I(418));e=on(n.nextSibling);var r=ze;e&&Ld(t,e)?Mp(r,n):(t.flags=t.flags&-4097|2,W=!1,ze=t)}}else{if(zl(t))throw Error(I(418));t.flags=t.flags&-4097|2,W=!1,ze=t}}}function Md(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ze=t}function ws(t){if(t!==ze)return!1;if(!W)return Md(t),W=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ul(t.type,t.memoizedProps)),e&&(e=Fe)){if(zl(t))throw Vp(),Error(I(418));for(;e;)Mp(t,e),e=on(e.nextSibling)}if(Md(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fe=on(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fe=null}}else Fe=ze?on(t.stateNode.nextSibling):null;return!0}function Vp(){for(var t=Fe;t;)t=on(t.nextSibling)}function Rr(){Fe=ze=null,W=!1}function qu(t){ot===null?ot=[t]:ot.push(t)}var ey=Ut.ReactCurrentBatchConfig;function it(t,e){if(t&&t.defaultProps){e=G({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var lo=wn(null),uo=null,mr=null,Gu=null;function Qu(){Gu=mr=uo=null}function Yu(t){var e=lo.current;H(lo),t._currentValue=e}function Hl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ir(t,e){uo=t,Gu=mr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Oe=!0),t.firstContext=null)}function Xe(t){var e=t._currentValue;if(Gu!==t)if(t={context:t,memoizedValue:e,next:null},mr===null){if(uo===null)throw Error(I(308));mr=t,uo.dependencies={lanes:0,firstContext:t}}else mr=mr.next=t;return e}var On=null;function Ju(t){On===null?On=[t]:On.push(t)}function Up(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ju(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dt(t,r)}function Dt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ht=!1;function Xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function an(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dt(t,n)}return i=r.interleaved,i===null?(e.next=e,Ju(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dt(t,n)}function Us(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vu(t,n)}}function Vd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function co(t,e,n,r){var i=t.updateQueue;Ht=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var m=a.lane,y=a.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,w=a;switch(m=e,y=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){h=_.call(y,h,m);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,m=typeof _=="function"?_.call(y,h,m):_,m==null)break e;h=G({},h,m);break e;case 2:Ht=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=h):c=c.next=y,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hn|=o,t.lanes=o,t.memoizedState=h}}function Ud(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Fp=new Uh.Component().refs;function Wl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:G({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ko={isMounted:function(t){return(t=t._reactInternals)?er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ke(),i=un(t),s=xt(r,i);s.payload=e,n!=null&&(s.callback=n),e=an(t,s,i),e!==null&&(lt(e,t,i,r),Us(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ke(),i=un(t),s=xt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=an(t,s,i),e!==null&&(lt(e,t,i,r),Us(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ke(),r=un(t),i=xt(n,r);i.tag=2,e!=null&&(i.callback=e),e=an(t,i,r),e!==null&&(lt(e,t,r,n),Us(e,t,r))}};function jd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Pi(n,r)||!Pi(i,s):!0}function $p(t,e,n){var r=!1,i=vn,s=e.contextType;return typeof s=="object"&&s!==null?s=Xe(s):(i=De(e)?$n:we.current,r=e.contextTypes,s=(r=r!=null)?Cr(t,i):vn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ko,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ko.enqueueReplaceState(e,e.state,null)}function Kl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Fp,Xu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xe(s):(s=De(e)?$n:we.current,i.context=Cr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wl(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ko.enqueueReplaceState(i,i.state,null),co(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Fp&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function Es(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $d(t){var e=t._init;return e(t._payload)}function zp(t){function e(p,d){if(t){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=cn(p,d),p.index=0,p.sibling=null,p}function s(p,d,f){return p.index=f,t?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,f,v){return d===null||d.tag!==6?(d=Wa(f,p.mode,v),d.return=p,d):(d=i(d,f),d.return=p,d)}function l(p,d,f,v){var E=f.type;return E===ar?c(p,d,f.props.children,v,f.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Bt&&$d(E)===d.type)?(v=i(d,f.props),v.ref=Gr(p,d,f),v.return=p,v):(v=Hs(f.type,f.key,f.props,null,p.mode,v),v.ref=Gr(p,d,f),v.return=p,v)}function u(p,d,f,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Ka(f,p.mode,v),d.return=p,d):(d=i(d,f.children||[]),d.return=p,d)}function c(p,d,f,v,E){return d===null||d.tag!==7?(d=Un(f,p.mode,v,E),d.return=p,d):(d=i(d,f),d.return=p,d)}function h(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Wa(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case cs:return f=Hs(d.type,d.key,d.props,null,p.mode,f),f.ref=Gr(p,null,d),f.return=p,f;case or:return d=Ka(d,p.mode,f),d.return=p,d;case Bt:var v=d._init;return h(p,v(d._payload),f)}if(ei(d)||Br(d))return d=Un(d,p.mode,f,null),d.return=p,d;Es(p,d)}return null}function m(p,d,f,v){var E=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:a(p,d,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case cs:return f.key===E?l(p,d,f,v):null;case or:return f.key===E?u(p,d,f,v):null;case Bt:return E=f._init,m(p,d,E(f._payload),v)}if(ei(f)||Br(f))return E!==null?null:c(p,d,f,v,null);Es(p,f)}return null}function y(p,d,f,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,a(d,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case cs:return p=p.get(v.key===null?f:v.key)||null,l(d,p,v,E);case or:return p=p.get(v.key===null?f:v.key)||null,u(d,p,v,E);case Bt:var T=v._init;return y(p,d,f,T(v._payload),E)}if(ei(v)||Br(v))return p=p.get(f)||null,c(d,p,v,E,null);Es(d,v)}return null}function _(p,d,f,v){for(var E=null,T=null,P=d,A=d=0,F=null;P!==null&&A<f.length;A++){P.index>A?(F=P,P=null):F=P.sibling;var b=m(p,P,f[A],v);if(b===null){P===null&&(P=F);break}t&&P&&b.alternate===null&&e(p,P),d=s(b,d,A),T===null?E=b:T.sibling=b,T=b,P=F}if(A===f.length)return n(p,P),W&&Cn(p,A),E;if(P===null){for(;A<f.length;A++)P=h(p,f[A],v),P!==null&&(d=s(P,d,A),T===null?E=P:T.sibling=P,T=P);return W&&Cn(p,A),E}for(P=r(p,P);A<f.length;A++)F=y(P,p,A,f[A],v),F!==null&&(t&&F.alternate!==null&&P.delete(F.key===null?A:F.key),d=s(F,d,A),T===null?E=F:T.sibling=F,T=F);return t&&P.forEach(function(Ue){return e(p,Ue)}),W&&Cn(p,A),E}function w(p,d,f,v){var E=Br(f);if(typeof E!="function")throw Error(I(150));if(f=E.call(f),f==null)throw Error(I(151));for(var T=E=null,P=d,A=d=0,F=null,b=f.next();P!==null&&!b.done;A++,b=f.next()){P.index>A?(F=P,P=null):F=P.sibling;var Ue=m(p,P,b.value,v);if(Ue===null){P===null&&(P=F);break}t&&P&&Ue.alternate===null&&e(p,P),d=s(Ue,d,A),T===null?E=Ue:T.sibling=Ue,T=Ue,P=F}if(b.done)return n(p,P),W&&Cn(p,A),E;if(P===null){for(;!b.done;A++,b=f.next())b=h(p,b.value,v),b!==null&&(d=s(b,d,A),T===null?E=b:T.sibling=b,T=b);return W&&Cn(p,A),E}for(P=r(p,P);!b.done;A++,b=f.next())b=y(P,p,A,b.value,v),b!==null&&(t&&b.alternate!==null&&P.delete(b.key===null?A:b.key),d=s(b,d,A),T===null?E=b:T.sibling=b,T=b);return t&&P.forEach(function(jt){return e(p,jt)}),W&&Cn(p,A),E}function k(p,d,f,v){if(typeof f=="object"&&f!==null&&f.type===ar&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case cs:e:{for(var E=f.key,T=d;T!==null;){if(T.key===E){if(E=f.type,E===ar){if(T.tag===7){n(p,T.sibling),d=i(T,f.props.children),d.return=p,p=d;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Bt&&$d(E)===T.type){n(p,T.sibling),d=i(T,f.props),d.ref=Gr(p,T,f),d.return=p,p=d;break e}n(p,T);break}else e(p,T);T=T.sibling}f.type===ar?(d=Un(f.props.children,p.mode,v,f.key),d.return=p,p=d):(v=Hs(f.type,f.key,f.props,null,p.mode,v),v.ref=Gr(p,d,f),v.return=p,p=v)}return o(p);case or:e:{for(T=f.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=i(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=Ka(f,p.mode,v),d.return=p,p=d}return o(p);case Bt:return T=f._init,k(p,d,T(f._payload),v)}if(ei(f))return _(p,d,f,v);if(Br(f))return w(p,d,f,v);Es(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,f),d.return=p,p=d):(n(p,d),d=Wa(f,p.mode,v),d.return=p,p=d),o(p)):n(p,d)}return k}var Ar=zp(!0),Bp=zp(!1),Xi={},yt=wn(Xi),xi=wn(Xi),Ni=wn(Xi);function bn(t){if(t===Xi)throw Error(I(174));return t}function Zu(t,e){switch(z(Ni,e),z(xi,t),z(yt,Xi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sl(e,t)}H(yt),z(yt,e)}function xr(){H(yt),H(xi),H(Ni)}function Hp(t){bn(Ni.current);var e=bn(yt.current),n=Sl(e,t.type);e!==n&&(z(xi,t),z(yt,n))}function ec(t){xi.current===t&&(H(yt),H(xi))}var K=wn(0);function fo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ja=[];function tc(){for(var t=0;t<ja.length;t++)ja[t]._workInProgressVersionPrimary=null;ja.length=0}var js=Ut.ReactCurrentDispatcher,Fa=Ut.ReactCurrentBatchConfig,Bn=0,q=null,re=null,le=null,ho=!1,li=!1,Oi=0,ty=0;function ge(){throw Error(I(321))}function nc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ct(t[n],e[n]))return!1;return!0}function rc(t,e,n,r,i,s){if(Bn=s,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,js.current=t===null||t.memoizedState===null?sy:oy,t=n(r,i),li){s=0;do{if(li=!1,Oi=0,25<=s)throw Error(I(301));s+=1,le=re=null,e.updateQueue=null,js.current=ay,t=n(r,i)}while(li)}if(js.current=po,e=re!==null&&re.next!==null,Bn=0,le=re=q=null,ho=!1,e)throw Error(I(300));return t}function ic(){var t=Oi!==0;return Oi=0,t}function ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?q.memoizedState=le=t:le=le.next=t,le}function Ze(){if(re===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=re.next;var e=le===null?q.memoizedState:le.next;if(e!==null)le=e,re=t;else{if(t===null)throw Error(I(310));re=t,t={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?q.memoizedState=le=t:le=le.next=t}return le}function bi(t,e){return typeof e=="function"?e(t):e}function $a(t){var e=Ze(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Bn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,q.lanes|=c,Hn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ct(r,e.memoizedState)||(Oe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,q.lanes|=s,Hn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function za(t){var e=Ze(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ct(s,e.memoizedState)||(Oe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Wp(){}function Kp(t,e){var n=q,r=Ze(),i=e(),s=!ct(r.memoizedState,i);if(s&&(r.memoizedState=i,Oe=!0),r=r.queue,sc(Qp.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Di(9,Gp.bind(null,n,r,i,e),void 0,null),ce===null)throw Error(I(349));Bn&30||qp(n,e,i)}return i}function qp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gp(t,e,n,r){e.value=n,e.getSnapshot=r,Yp(e)&&Jp(t)}function Qp(t,e,n){return n(function(){Yp(e)&&Jp(t)})}function Yp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ct(t,n)}catch{return!0}}function Jp(t){var e=Dt(t,1);e!==null&&lt(e,t,1,-1)}function zd(t){var e=ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:t},e.queue=t,t=t.dispatch=iy.bind(null,q,t),[e.memoizedState,t]}function Di(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xp(){return Ze().memoizedState}function Fs(t,e,n,r){var i=ht();q.flags|=t,i.memoizedState=Di(1|e,n,void 0,r===void 0?null:r)}function qo(t,e,n,r){var i=Ze();r=r===void 0?null:r;var s=void 0;if(re!==null){var o=re.memoizedState;if(s=o.destroy,r!==null&&nc(r,o.deps)){i.memoizedState=Di(e,n,s,r);return}}q.flags|=t,i.memoizedState=Di(1|e,n,s,r)}function Bd(t,e){return Fs(8390656,8,t,e)}function sc(t,e){return qo(2048,8,t,e)}function Zp(t,e){return qo(4,2,t,e)}function em(t,e){return qo(4,4,t,e)}function tm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nm(t,e,n){return n=n!=null?n.concat([t]):null,qo(4,4,tm.bind(null,e,t),n)}function oc(){}function rm(t,e){var n=Ze();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function im(t,e){var n=Ze();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function sm(t,e,n){return Bn&21?(ct(n,e)||(n=lp(),q.lanes|=n,Hn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Oe=!0),t.memoizedState=n)}function ny(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=Fa.transition;Fa.transition={};try{t(!1),e()}finally{$=n,Fa.transition=r}}function om(){return Ze().memoizedState}function ry(t,e,n){var r=un(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},am(t))lm(e,n);else if(n=Up(t,e,n,r),n!==null){var i=ke();lt(n,t,r,i),um(n,e,r)}}function iy(t,e,n){var r=un(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(am(t))lm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ct(a,o)){var l=e.interleaved;l===null?(i.next=i,Ju(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Up(t,e,i,r),n!==null&&(i=ke(),lt(n,t,r,i),um(n,e,r))}}function am(t){var e=t.alternate;return t===q||e!==null&&e===q}function lm(t,e){li=ho=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function um(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vu(t,n)}}var po={readContext:Xe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},sy={readContext:Xe,useCallback:function(t,e){return ht().memoizedState=[t,e===void 0?null:e],t},useContext:Xe,useEffect:Bd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fs(4194308,4,tm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fs(4,2,t,e)},useMemo:function(t,e){var n=ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ry.bind(null,q,t),[r.memoizedState,t]},useRef:function(t){var e=ht();return t={current:t},e.memoizedState=t},useState:zd,useDebugValue:oc,useDeferredValue:function(t){return ht().memoizedState=t},useTransition:function(){var t=zd(!1),e=t[0];return t=ny.bind(null,t[1]),ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=q,i=ht();if(W){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),ce===null)throw Error(I(349));Bn&30||qp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Bd(Qp.bind(null,r,s,t),[t]),r.flags|=2048,Di(9,Gp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ht(),e=ce.identifierPrefix;if(W){var n=Ct,r=Pt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ty++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},oy={readContext:Xe,useCallback:rm,useContext:Xe,useEffect:sc,useImperativeHandle:nm,useInsertionEffect:Zp,useLayoutEffect:em,useMemo:im,useReducer:$a,useRef:Xp,useState:function(){return $a(bi)},useDebugValue:oc,useDeferredValue:function(t){var e=Ze();return sm(e,re.memoizedState,t)},useTransition:function(){var t=$a(bi)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:Wp,useSyncExternalStore:Kp,useId:om,unstable_isNewReconciler:!1},ay={readContext:Xe,useCallback:rm,useContext:Xe,useEffect:sc,useImperativeHandle:nm,useInsertionEffect:Zp,useLayoutEffect:em,useMemo:im,useReducer:za,useRef:Xp,useState:function(){return za(bi)},useDebugValue:oc,useDeferredValue:function(t){var e=Ze();return re===null?e.memoizedState=t:sm(e,re.memoizedState,t)},useTransition:function(){var t=za(bi)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:Wp,useSyncExternalStore:Kp,useId:om,unstable_isNewReconciler:!1};function Nr(t,e){try{var n="",r=e;do n+=Lv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ba(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ql(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ly=typeof WeakMap=="function"?WeakMap:Map;function cm(t,e,n){n=xt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){go||(go=!0,ru=r),ql(t,e)},n}function dm(t,e,n){n=xt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ql(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ql(t,e),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ly;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Iy.bind(null,t,e,n),e.then(t,t))}function Wd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xt(-1,1),e.tag=2,an(n,e,1))),n.lanes|=1),t)}var uy=Ut.ReactCurrentOwner,Oe=!1;function Te(t,e,n,r){e.child=t===null?Bp(e,null,n,r):Ar(e,t.child,n,r)}function qd(t,e,n,r,i){n=n.render;var s=e.ref;return Ir(e,i),r=rc(t,e,n,r,s,i),n=ic(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(W&&n&&Wu(e),e.flags|=1,Te(t,e,r,i),e.child)}function Gd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!pc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fm(t,e,s,r,i)):(t=Hs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pi,n(o,r)&&t.ref===e.ref)return Lt(t,e,i)}return e.flags|=1,t=cn(s,r),t.ref=e.ref,t.return=e,e.child=t}function fm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Pi(s,r)&&t.ref===e.ref)if(Oe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Oe=!0);else return e.lanes=t.lanes,Lt(t,e,i)}return Gl(t,e,n,r,i)}function hm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(vr,je),je|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,z(vr,je),je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,z(vr,je),je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,z(vr,je),je|=r;return Te(t,e,i,n),e.child}function pm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gl(t,e,n,r,i){var s=De(n)?$n:we.current;return s=Cr(e,s),Ir(e,i),n=rc(t,e,n,r,s,i),r=ic(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(W&&r&&Wu(e),e.flags|=1,Te(t,e,n,i),e.child)}function Qd(t,e,n,r,i){if(De(n)){var s=!0;so(e)}else s=!1;if(Ir(e,i),e.stateNode===null)$s(t,e),$p(e,n,r),Kl(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=De(n)?$n:we.current,u=Cr(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Fd(e,o,r,u),Ht=!1;var m=e.memoizedState;o.state=m,co(e,r,o,i),l=e.memoizedState,a!==r||m!==l||be.current||Ht?(typeof c=="function"&&(Wl(e,n,c,r),l=e.memoizedState),(a=Ht||jd(e,n,a,r,m,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,jp(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:it(e.type,a),o.props=u,h=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xe(l):(l=De(n)?$n:we.current,l=Cr(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||m!==l)&&Fd(e,o,r,l),Ht=!1,m=e.memoizedState,o.state=m,co(e,r,o,i);var _=e.memoizedState;a!==h||m!==_||be.current||Ht?(typeof y=="function"&&(Wl(e,n,y,r),_=e.memoizedState),(u=Ht||jd(e,n,u,r,m,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Ql(t,e,n,r,s,i)}function Ql(t,e,n,r,i,s){pm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Dd(e,n,!1),Lt(t,e,s);r=e.stateNode,uy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ar(e,t.child,null,s),e.child=Ar(e,null,a,s)):Te(t,e,a,s),e.memoizedState=r.state,i&&Dd(e,n,!0),e.child}function mm(t){var e=t.stateNode;e.pendingContext?bd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bd(t,e.context,!1),Zu(t,e.containerInfo)}function Yd(t,e,n,r,i){return Rr(),qu(i),e.flags|=256,Te(t,e,n,r),e.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Jl(t){return{baseLanes:t,cachePool:null,transitions:null}}function gm(t,e,n){var r=e.pendingProps,i=K.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),z(K,i&1),t===null)return Bl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yo(o,r,0,null),t=Un(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jl(n),e.memoizedState=Yl,t):ac(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return cy(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=cn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=cn(a,s):(s=Un(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yl,r}return s=t.child,t=s.sibling,r=cn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ac(t,e){return e=Yo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Is(t,e,n,r){return r!==null&&qu(r),Ar(e,t.child,null,n),t=ac(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ba(Error(I(422))),Is(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yo({mode:"visible",children:r.children},i,0,null),s=Un(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ar(e,t.child,null,o),e.child.memoizedState=Jl(o),e.memoizedState=Yl,s);if(!(e.mode&1))return Is(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Ba(s,r,void 0),Is(t,e,o,r)}if(a=(o&t.childLanes)!==0,Oe||a){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dt(t,i),lt(r,t,i,-1))}return hc(),r=Ba(Error(I(421))),Is(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ty.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Fe=on(i.nextSibling),ze=e,W=!0,ot=null,t!==null&&(Ge[Qe++]=Pt,Ge[Qe++]=Ct,Ge[Qe++]=zn,Pt=t.id,Ct=t.overflow,zn=e),e=ac(e,r.children),e.flags|=4096,e)}function Jd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hl(t.return,e,n)}function Ha(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Te(t,e,r.children,n),r=K.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jd(t,n,e);else if(t.tag===19)Jd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(z(K,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&fo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ha(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&fo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ha(e,!0,n,null,s);break;case"together":Ha(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $s(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dy(t,e,n){switch(e.tag){case 3:mm(e),Rr();break;case 5:Hp(e);break;case 1:De(e.type)&&so(e);break;case 4:Zu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;z(lo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(z(K,K.current&1),e.flags|=128,null):n&e.child.childLanes?gm(t,e,n):(z(K,K.current&1),t=Lt(t,e,n),t!==null?t.sibling:null);z(K,K.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return vm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(K,K.current),r)break;return null;case 22:case 23:return e.lanes=0,hm(t,e,n)}return Lt(t,e,n)}var ym,Xl,_m,wm;ym=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xl=function(){};_m=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,bn(yt.current);var s=null;switch(n){case"input":i=wl(t,i),r=wl(t,r),s=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),s=[];break;case"textarea":i=Tl(t,i),r=Tl(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ro)}kl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_i.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_i.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};wm=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qr(t,e){if(!W)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fy(t,e,n){var r=e.pendingProps;switch(Ku(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(e),null;case 1:return De(e.type)&&io(),ve(e),null;case 3:return r=e.stateNode,xr(),H(be),H(we),tc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ws(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ot!==null&&(ou(ot),ot=null))),Xl(t,e),ve(e),null;case 5:ec(e);var i=bn(Ni.current);if(n=e.type,t!==null&&e.stateNode!=null)_m(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return ve(e),null}if(t=bn(yt.current),ws(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pt]=e,r[Ai]=s,t=(e.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<ni.length;i++)B(ni[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":od(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":ld(r,s),B("invalid",r)}kl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&_s(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_s(r.textContent,a,t),i=["children",""+a]):_i.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":ds(r),ad(r,s,!0);break;case"textarea":ds(r),ud(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ro)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qh(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pt]=e,t[Ai]=r,ym(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pl(n,r),n){case"dialog":B("cancel",t),B("close",t),i=r;break;case"iframe":case"object":case"embed":B("load",t),i=r;break;case"video":case"audio":for(i=0;i<ni.length;i++)B(ni[i],t);i=r;break;case"source":B("error",t),i=r;break;case"img":case"image":case"link":B("error",t),B("load",t),i=r;break;case"details":B("toggle",t),i=r;break;case"input":od(t,r),i=wl(t,r),B("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),B("invalid",t);break;case"textarea":ld(t,r),i=Tl(t,r),B("invalid",t);break;default:i=r}kl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yh(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gh(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wi(t,l):typeof l=="number"&&wi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_i.hasOwnProperty(s)?l!=null&&s==="onScroll"&&B("scroll",t):l!=null&&Nu(t,s,l,o))}switch(n){case"input":ds(t),ad(t,r,!1);break;case"textarea":ds(t),ud(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?yr(t,!!r.multiple,s,!1):r.defaultValue!=null&&yr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ve(e),null;case 6:if(t&&e.stateNode!=null)wm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=bn(Ni.current),bn(yt.current),ws(e)){if(r=e.stateNode,n=e.memoizedProps,r[pt]=e,(s=r.nodeValue!==n)&&(t=ze,t!==null))switch(t.tag){case 3:_s(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_s(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=e,e.stateNode=r}return ve(e),null;case 13:if(H(K),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(W&&Fe!==null&&e.mode&1&&!(e.flags&128))Vp(),Rr(),e.flags|=98560,s=!1;else if(s=ws(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[pt]=e}else Rr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ve(e),s=!1}else ot!==null&&(ou(ot),ot=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||K.current&1?se===0&&(se=3):hc())),e.updateQueue!==null&&(e.flags|=4),ve(e),null);case 4:return xr(),Xl(t,e),t===null&&Ci(e.stateNode.containerInfo),ve(e),null;case 10:return Yu(e.type._context),ve(e),null;case 17:return De(e.type)&&io(),ve(e),null;case 19:if(H(K),s=e.memoizedState,s===null)return ve(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Qr(s,!1);else{if(se!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fo(t),o!==null){for(e.flags|=128,Qr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return z(K,K.current&1|2),e.child}t=t.sibling}s.tail!==null&&ee()>Or&&(e.flags|=128,r=!0,Qr(s,!1),e.lanes=4194304)}else{if(!r)if(t=fo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!W)return ve(e),null}else 2*ee()-s.renderingStartTime>Or&&n!==1073741824&&(e.flags|=128,r=!0,Qr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ee(),e.sibling=null,n=K.current,z(K,r?n&1|2:n&1),e):(ve(e),null);case 22:case 23:return fc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?je&1073741824&&(ve(e),e.subtreeFlags&6&&(e.flags|=8192)):ve(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function hy(t,e){switch(Ku(e),e.tag){case 1:return De(e.type)&&io(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xr(),H(be),H(we),tc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ec(e),null;case 13:if(H(K),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Rr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return H(K),null;case 4:return xr(),null;case 10:return Yu(e.type._context),null;case 22:case 23:return fc(),null;case 24:return null;default:return null}}var Ts=!1,_e=!1,py=typeof WeakSet=="function"?WeakSet:Set,C=null;function gr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(t,e,r)}else n.current=null}function Zl(t,e,n){try{n()}catch(r){Q(t,e,r)}}var Xd=!1;function my(t,e){if(Ml=eo,t=Sp(),Hu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,m=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)m=h,h=y;for(;;){if(h===t)break t;if(m===n&&++u===i&&(a=o),m===s&&++c===r&&(l=o),(y=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vl={focusedElem:t,selectionRange:n},eo=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,k=_.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:it(e.type,w),k);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(v){Q(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return _=Xd,Xd=!1,_}function ui(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zl(e,n,s)}i=i.next}while(i!==r)}}function Go(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function eu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Em(t){var e=t.alternate;e!==null&&(t.alternate=null,Em(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pt],delete e[Ai],delete e[Fl],delete e[J1],delete e[X1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Im(t){return t.tag===5||t.tag===3||t.tag===4}function Zd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Im(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ro));else if(r!==4&&(t=t.child,t!==null))for(tu(t,e,n),t=t.sibling;t!==null;)tu(t,e,n),t=t.sibling}function nu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nu(t,e,n),t=t.sibling;t!==null;)nu(t,e,n),t=t.sibling}var fe=null,st=!1;function $t(t,e,n){for(n=n.child;n!==null;)Tm(t,e,n),n=n.sibling}function Tm(t,e,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Fo,n)}catch{}switch(n.tag){case 5:_e||gr(n,e);case 6:var r=fe,i=st;fe=null,$t(t,e,n),fe=r,st=i,fe!==null&&(st?(t=fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(st?(t=fe,n=n.stateNode,t.nodeType===8?Va(t.parentNode,n):t.nodeType===1&&Va(t,n),Si(t)):Va(fe,n.stateNode));break;case 4:r=fe,i=st,fe=n.stateNode.containerInfo,st=!0,$t(t,e,n),fe=r,st=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zl(n,e,o),i=i.next}while(i!==r)}$t(t,e,n);break;case 1:if(!_e&&(gr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,e,a)}$t(t,e,n);break;case 21:$t(t,e,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,$t(t,e,n),_e=r):$t(t,e,n);break;default:$t(t,e,n)}}function ef(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new py),e.forEach(function(r){var i=Sy.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,st=!1;break e;case 3:fe=a.stateNode.containerInfo,st=!0;break e;case 4:fe=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(fe===null)throw Error(I(160));Tm(s,o,i),fe=null,st=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Q(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sm(e,t),e=e.sibling}function Sm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rt(e,t),ft(t),r&4){try{ui(3,t,t.return),Go(3,t)}catch(w){Q(t,t.return,w)}try{ui(5,t,t.return)}catch(w){Q(t,t.return,w)}}break;case 1:rt(e,t),ft(t),r&512&&n!==null&&gr(n,n.return);break;case 5:if(rt(e,t),ft(t),r&512&&n!==null&&gr(n,n.return),t.flags&32){var i=t.stateNode;try{wi(i,"")}catch(w){Q(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Wh(i,s),Pl(a,o);var u=Pl(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Yh(i,h):c==="dangerouslySetInnerHTML"?Gh(i,h):c==="children"?wi(i,h):Nu(i,c,h,u)}switch(a){case"input":El(i,s);break;case"textarea":Kh(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?yr(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?yr(i,!!s.multiple,s.defaultValue,!0):yr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ai]=s}catch(w){Q(t,t.return,w)}}break;case 6:if(rt(e,t),ft(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Q(t,t.return,w)}}break;case 3:if(rt(e,t),ft(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Si(e.containerInfo)}catch(w){Q(t,t.return,w)}break;case 4:rt(e,t),ft(t);break;case 13:rt(e,t),ft(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cc=ee())),r&4&&ef(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(_e=(u=_e)||c,rt(e,t),_e=u):rt(e,t),ft(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(C=t,c=t.child;c!==null;){for(h=C=c;C!==null;){switch(m=C,y=m.child,m.tag){case 0:case 11:case 14:case 15:ui(4,m,m.return);break;case 1:gr(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){Q(r,n,w)}}break;case 5:gr(m,m.return);break;case 22:if(m.memoizedState!==null){nf(h);continue}}y!==null?(y.return=m,C=y):nf(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qh("display",o))}catch(w){Q(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){Q(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:rt(e,t),ft(t),r&4&&ef(t);break;case 21:break;default:rt(e,t),ft(t)}}function ft(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Im(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wi(i,""),r.flags&=-33);var s=Zd(t);nu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Zd(t);tu(t,a,o);break;default:throw Error(I(161))}}catch(l){Q(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gy(t,e,n){C=t,km(t)}function km(t,e,n){for(var r=(t.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ts;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_e;a=Ts;var u=_e;if(Ts=o,(_e=l)&&!u)for(C=i;C!==null;)o=C,l=o.child,o.tag===22&&o.memoizedState!==null?rf(i):l!==null?(l.return=o,C=l):rf(i);for(;s!==null;)C=s,km(s),s=s.sibling;C=i,Ts=a,_e=u}tf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):tf(t)}}function tf(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_e||Go(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:it(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ud(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ud(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Si(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}_e||e.flags&512&&eu(e)}catch(m){Q(e,e.return,m)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function nf(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function rf(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Go(4,e)}catch(l){Q(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Q(e,i,l)}}var s=e.return;try{eu(e)}catch(l){Q(e,s,l)}break;case 5:var o=e.return;try{eu(e)}catch(l){Q(e,o,l)}}}catch(l){Q(e,e.return,l)}if(e===t){C=null;break}var a=e.sibling;if(a!==null){a.return=e.return,C=a;break}C=e.return}}var vy=Math.ceil,mo=Ut.ReactCurrentDispatcher,lc=Ut.ReactCurrentOwner,Je=Ut.ReactCurrentBatchConfig,U=0,ce=null,te=null,pe=0,je=0,vr=wn(0),se=0,Li=null,Hn=0,Qo=0,uc=0,ci=null,Ae=null,cc=0,Or=1/0,Tt=null,go=!1,ru=null,ln=null,Ss=!1,en=null,vo=0,di=0,iu=null,zs=-1,Bs=0;function ke(){return U&6?ee():zs!==-1?zs:zs=ee()}function un(t){return t.mode&1?U&2&&pe!==0?pe&-pe:ey.transition!==null?(Bs===0&&(Bs=lp()),Bs):(t=$,t!==0||(t=window.event,t=t===void 0?16:mp(t.type)),t):1}function lt(t,e,n,r){if(50<di)throw di=0,iu=null,Error(I(185));Qi(t,n,r),(!(U&2)||t!==ce)&&(t===ce&&(!(U&2)&&(Qo|=n),se===4&&Gt(t,pe)),Le(t,r),n===1&&U===0&&!(e.mode&1)&&(Or=ee()+500,Wo&&En()))}function Le(t,e){var n=t.callbackNode;e1(t,e);var r=Zs(t,t===ce?pe:0);if(r===0)n!==null&&fd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fd(n),e===1)t.tag===0?Z1(sf.bind(null,t)):Dp(sf.bind(null,t)),Q1(function(){!(U&6)&&En()}),n=null;else{switch(up(r)){case 1:n=Mu;break;case 4:n=op;break;case 16:n=Xs;break;case 536870912:n=ap;break;default:n=Xs}n=bm(n,Pm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pm(t,e){if(zs=-1,Bs=0,U&6)throw Error(I(327));var n=t.callbackNode;if(Tr()&&t.callbackNode!==n)return null;var r=Zs(t,t===ce?pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yo(t,r);else{e=r;var i=U;U|=2;var s=Rm();(ce!==t||pe!==e)&&(Tt=null,Or=ee()+500,Vn(t,e));do try{wy();break}catch(a){Cm(t,a)}while(1);Qu(),mo.current=s,U=i,te!==null?e=0:(ce=null,pe=0,e=se)}if(e!==0){if(e===2&&(i=Nl(t),i!==0&&(r=i,e=su(t,i))),e===1)throw n=Li,Vn(t,0),Gt(t,r),Le(t,ee()),n;if(e===6)Gt(t,r);else{if(i=t.current.alternate,!(r&30)&&!yy(i)&&(e=yo(t,r),e===2&&(s=Nl(t),s!==0&&(r=s,e=su(t,s))),e===1))throw n=Li,Vn(t,0),Gt(t,r),Le(t,ee()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Rn(t,Ae,Tt);break;case 3:if(Gt(t,r),(r&130023424)===r&&(e=cc+500-ee(),10<e)){if(Zs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ke(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jl(Rn.bind(null,t,Ae,Tt),e);break}Rn(t,Ae,Tt);break;case 4:if(Gt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-at(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vy(r/1960))-r,10<r){t.timeoutHandle=jl(Rn.bind(null,t,Ae,Tt),r);break}Rn(t,Ae,Tt);break;case 5:Rn(t,Ae,Tt);break;default:throw Error(I(329))}}}return Le(t,ee()),t.callbackNode===n?Pm.bind(null,t):null}function su(t,e){var n=ci;return t.current.memoizedState.isDehydrated&&(Vn(t,e).flags|=256),t=yo(t,e),t!==2&&(e=Ae,Ae=n,e!==null&&ou(e)),t}function ou(t){Ae===null?Ae=t:Ae.push.apply(Ae,t)}function yy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gt(t,e){for(e&=~uc,e&=~Qo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-at(e),r=1<<n;t[n]=-1,e&=~r}}function sf(t){if(U&6)throw Error(I(327));Tr();var e=Zs(t,0);if(!(e&1))return Le(t,ee()),null;var n=yo(t,e);if(t.tag!==0&&n===2){var r=Nl(t);r!==0&&(e=r,n=su(t,r))}if(n===1)throw n=Li,Vn(t,0),Gt(t,e),Le(t,ee()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rn(t,Ae,Tt),Le(t,ee()),null}function dc(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Or=ee()+500,Wo&&En())}}function Wn(t){en!==null&&en.tag===0&&!(U&6)&&Tr();var e=U;U|=1;var n=Je.transition,r=$;try{if(Je.transition=null,$=1,t)return t()}finally{$=r,Je.transition=n,U=e,!(U&6)&&En()}}function fc(){je=vr.current,H(vr)}function Vn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,G1(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Ku(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&io();break;case 3:xr(),H(be),H(we),tc();break;case 5:ec(r);break;case 4:xr();break;case 13:H(K);break;case 19:H(K);break;case 10:Yu(r.type._context);break;case 22:case 23:fc()}n=n.return}if(ce=t,te=t=cn(t.current,null),pe=je=e,se=0,Li=null,uc=Qo=Hn=0,Ae=ci=null,On!==null){for(e=0;e<On.length;e++)if(n=On[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}On=null}return t}function Cm(t,e){do{var n=te;try{if(Qu(),js.current=po,ho){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ho=!1}if(Bn=0,le=re=q=null,li=!1,Oi=0,lc.current=null,n===null||n.return===null){se=1,Li=e,te=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Wd(o);if(y!==null){y.flags&=-257,Kd(y,o,a,s,e),y.mode&1&&Hd(s,u,e),e=y,l=u;var _=e.updateQueue;if(_===null){var w=new Set;w.add(l),e.updateQueue=w}else _.add(l);break e}else{if(!(e&1)){Hd(s,u,e),hc();break e}l=Error(I(426))}}else if(W&&a.mode&1){var k=Wd(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Kd(k,o,a,s,e),qu(Nr(l,a));break e}}s=l=Nr(l,a),se!==4&&(se=2),ci===null?ci=[s]:ci.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=cm(s,l,e);Vd(s,p);break e;case 1:a=l;var d=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ln===null||!ln.has(f)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=dm(s,a,e);Vd(s,v);break e}}s=s.return}while(s!==null)}xm(n)}catch(E){e=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function Rm(){var t=mo.current;return mo.current=po,t===null?po:t}function hc(){(se===0||se===3||se===2)&&(se=4),ce===null||!(Hn&268435455)&&!(Qo&268435455)||Gt(ce,pe)}function yo(t,e){var n=U;U|=2;var r=Rm();(ce!==t||pe!==e)&&(Tt=null,Vn(t,e));do try{_y();break}catch(i){Cm(t,i)}while(1);if(Qu(),U=n,mo.current=r,te!==null)throw Error(I(261));return ce=null,pe=0,se}function _y(){for(;te!==null;)Am(te)}function wy(){for(;te!==null&&!Wv();)Am(te)}function Am(t){var e=Om(t.alternate,t,je);t.memoizedProps=t.pendingProps,e===null?xm(t):te=e,lc.current=null}function xm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hy(n,e),n!==null){n.flags&=32767,te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{se=6,te=null;return}}else if(n=fy(n,e,je),n!==null){te=n;return}if(e=e.sibling,e!==null){te=e;return}te=e=t}while(e!==null);se===0&&(se=5)}function Rn(t,e,n){var r=$,i=Je.transition;try{Je.transition=null,$=1,Ey(t,e,n,r)}finally{Je.transition=i,$=r}return null}function Ey(t,e,n,r){do Tr();while(en!==null);if(U&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(t1(t,s),t===ce&&(te=ce=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ss||(Ss=!0,bm(Xs,function(){return Tr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Je.transition,Je.transition=null;var o=$;$=1;var a=U;U|=4,lc.current=null,my(t,n),Sm(n,t),$1(Vl),eo=!!Ml,Vl=Ml=null,t.current=n,gy(n),Kv(),U=a,$=o,Je.transition=s}else t.current=n;if(Ss&&(Ss=!1,en=t,vo=i),s=t.pendingLanes,s===0&&(ln=null),Qv(n.stateNode),Le(t,ee()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(go)throw go=!1,t=ru,ru=null,t;return vo&1&&t.tag!==0&&Tr(),s=t.pendingLanes,s&1?t===iu?di++:(di=0,iu=t):di=0,En(),null}function Tr(){if(en!==null){var t=up(vo),e=Je.transition,n=$;try{if(Je.transition=null,$=16>t?16:t,en===null)var r=!1;else{if(t=en,en=null,vo=0,U&6)throw Error(I(331));var i=U;for(U|=4,C=t.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var c=C;switch(c.tag){case 0:case 11:case 15:ui(8,c,s)}var h=c.child;if(h!==null)h.return=c,C=h;else for(;C!==null;){c=C;var m=c.sibling,y=c.return;if(Em(c),c===u){C=null;break}if(m!==null){m.return=y,C=m;break}C=y}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ui(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,C=p;break e}C=s.return}}var d=t.current;for(C=d;C!==null;){o=C;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,C=f;else e:for(o=d;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Go(9,a)}}catch(E){Q(a,a.return,E)}if(a===o){C=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,C=v;break e}C=a.return}}if(U=i,En(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Fo,t)}catch{}r=!0}return r}finally{$=n,Je.transition=e}}return!1}function of(t,e,n){e=Nr(n,e),e=cm(t,e,1),t=an(t,e,1),e=ke(),t!==null&&(Qi(t,1,e),Le(t,e))}function Q(t,e,n){if(t.tag===3)of(t,t,n);else for(;e!==null;){if(e.tag===3){of(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){t=Nr(n,t),t=dm(e,t,1),e=an(e,t,1),t=ke(),e!==null&&(Qi(e,1,t),Le(e,t));break}}e=e.return}}function Iy(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ke(),t.pingedLanes|=t.suspendedLanes&n,ce===t&&(pe&n)===n&&(se===4||se===3&&(pe&130023424)===pe&&500>ee()-cc?Vn(t,0):uc|=n),Le(t,e)}function Nm(t,e){e===0&&(t.mode&1?(e=ps,ps<<=1,!(ps&130023424)&&(ps=4194304)):e=1);var n=ke();t=Dt(t,e),t!==null&&(Qi(t,e,n),Le(t,n))}function Ty(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nm(t,n)}function Sy(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Nm(t,n)}var Om;Om=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||be.current)Oe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Oe=!1,dy(t,e,n);Oe=!!(t.flags&131072)}else Oe=!1,W&&e.flags&1048576&&Lp(e,ao,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$s(t,e),t=e.pendingProps;var i=Cr(e,we.current);Ir(e,n),i=rc(null,e,r,t,i,n);var s=ic();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,De(r)?(s=!0,so(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xu(e),i.updater=Ko,e.stateNode=i,i._reactInternals=e,Kl(e,r,t,n),e=Ql(null,e,r,!0,s,n)):(e.tag=0,W&&s&&Wu(e),Te(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($s(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Py(r),t=it(r,t),i){case 0:e=Gl(null,e,r,t,n);break e;case 1:e=Qd(null,e,r,t,n);break e;case 11:e=qd(null,e,r,t,n);break e;case 14:e=Gd(null,e,r,it(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),Gl(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),Qd(t,e,r,i,n);case 3:e:{if(mm(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,jp(t,e),co(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Nr(Error(I(423)),e),e=Yd(t,e,r,n,i);break e}else if(r!==i){i=Nr(Error(I(424)),e),e=Yd(t,e,r,n,i);break e}else for(Fe=on(e.stateNode.containerInfo.firstChild),ze=e,W=!0,ot=null,n=Bp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===i){e=Lt(t,e,n);break e}Te(t,e,r,n)}e=e.child}return e;case 5:return Hp(e),t===null&&Bl(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ul(r,i)?o=null:s!==null&&Ul(r,s)&&(e.flags|=32),pm(t,e),Te(t,e,o,n),e.child;case 6:return t===null&&Bl(e),null;case 13:return gm(t,e,n);case 4:return Zu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ar(e,null,r,n):Te(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),qd(t,e,r,i,n);case 7:return Te(t,e,e.pendingProps,n),e.child;case 8:return Te(t,e,e.pendingProps.children,n),e.child;case 12:return Te(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,z(lo,r._currentValue),r._currentValue=o,s!==null)if(ct(s.value,o)){if(s.children===i.children&&!be.current){e=Lt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=xt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hl(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hl(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Te(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ir(e,n),i=Xe(i),r=r(i),e.flags|=1,Te(t,e,r,n),e.child;case 14:return r=e.type,i=it(r,e.pendingProps),i=it(r.type,i),Gd(t,e,r,i,n);case 15:return fm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),$s(t,e),e.tag=1,De(r)?(t=!0,so(e)):t=!1,Ir(e,n),$p(e,r,i),Kl(e,r,i,n),Ql(null,e,r,!0,t,n);case 19:return vm(t,e,n);case 22:return hm(t,e,n)}throw Error(I(156,e.tag))};function bm(t,e){return sp(t,e)}function ky(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(t,e,n,r){return new ky(t,e,n,r)}function pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Py(t){if(typeof t=="function")return pc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bu)return 11;if(t===Du)return 14}return 2}function cn(t,e){var n=t.alternate;return n===null?(n=Ye(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")pc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ar:return Un(n.children,i,s,e);case Ou:o=8,i|=8;break;case gl:return t=Ye(12,n,e,i|2),t.elementType=gl,t.lanes=s,t;case vl:return t=Ye(13,n,e,i),t.elementType=vl,t.lanes=s,t;case yl:return t=Ye(19,n,e,i),t.elementType=yl,t.lanes=s,t;case zh:return Yo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fh:o=10;break e;case $h:o=9;break e;case bu:o=11;break e;case Du:o=14;break e;case Bt:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Ye(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Un(t,e,n,r){return t=Ye(7,t,r,e),t.lanes=n,t}function Yo(t,e,n,r){return t=Ye(22,t,r,e),t.elementType=zh,t.lanes=n,t.stateNode={isHidden:!1},t}function Wa(t,e,n){return t=Ye(6,t,null,e),t.lanes=n,t}function Ka(t,e,n){return e=Ye(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Cy(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pa(0),this.expirationTimes=Pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mc(t,e,n,r,i,s,o,a,l){return t=new Cy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ye(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xu(s),t}function Ry(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Dm(t){if(!t)return vn;t=t._reactInternals;e:{if(er(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(De(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(De(n))return bp(t,n,e)}return e}function Lm(t,e,n,r,i,s,o,a,l){return t=mc(n,r,!0,t,i,s,o,a,l),t.context=Dm(null),n=t.current,r=ke(),i=un(n),s=xt(r,i),s.callback=e??null,an(n,s,i),t.current.lanes=i,Qi(t,i,r),Le(t,r),t}function Jo(t,e,n,r){var i=e.current,s=ke(),o=un(i);return n=Dm(n),e.context===null?e.context=n:e.pendingContext=n,e=xt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=an(i,e,o),t!==null&&(lt(t,i,o,s),Us(t,i,o)),o}function _o(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function af(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gc(t,e){af(t,e),(t=t.alternate)&&af(t,e)}function Ay(){return null}var Mm=typeof reportError=="function"?reportError:function(t){console.error(t)};function vc(t){this._internalRoot=t}Xo.prototype.render=vc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Jo(t,e,null,null)};Xo.prototype.unmount=vc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wn(function(){Jo(null,t,null,null)}),e[bt]=null}};function Xo(t){this._internalRoot=t}Xo.prototype.unstable_scheduleHydration=function(t){if(t){var e=fp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qt.length&&e!==0&&e<qt[n].priority;n++);qt.splice(n,0,t),n===0&&pp(t)}};function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lf(){}function xy(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=_o(o);s.call(u)}}var o=Lm(e,r,t,0,null,!1,!1,"",lf);return t._reactRootContainer=o,t[bt]=o.current,Ci(t.nodeType===8?t.parentNode:t),Wn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=_o(l);a.call(u)}}var l=mc(t,0,!1,null,null,!1,!1,"",lf);return t._reactRootContainer=l,t[bt]=l.current,Ci(t.nodeType===8?t.parentNode:t),Wn(function(){Jo(e,l,n,r)}),l}function ea(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=_o(o);a.call(l)}}Jo(e,o,t,i)}else o=xy(n,e,t,i,r);return _o(o)}cp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ti(e.pendingLanes);n!==0&&(Vu(e,n|1),Le(e,ee()),!(U&6)&&(Or=ee()+500,En()))}break;case 13:Wn(function(){var r=Dt(t,1);if(r!==null){var i=ke();lt(r,t,1,i)}}),gc(t,1)}};Uu=function(t){if(t.tag===13){var e=Dt(t,134217728);if(e!==null){var n=ke();lt(e,t,134217728,n)}gc(t,134217728)}};dp=function(t){if(t.tag===13){var e=un(t),n=Dt(t,e);if(n!==null){var r=ke();lt(n,t,e,r)}gc(t,e)}};fp=function(){return $};hp=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};Rl=function(t,e,n){switch(e){case"input":if(El(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ho(r);if(!i)throw Error(I(90));Hh(r),El(r,i)}}}break;case"textarea":Kh(t,n);break;case"select":e=n.value,e!=null&&yr(t,!!n.multiple,e,!1)}};Zh=dc;ep=Wn;var Ny={usingClientEntryPoint:!1,Events:[Ji,dr,Ho,Jh,Xh,dc]},Yr={findFiberByHostInstance:Nn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Oy={bundleType:Yr.bundleType,version:Yr.version,rendererPackageName:Yr.rendererPackageName,rendererConfig:Yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rp(t),t===null?null:t.stateNode},findFiberByHostInstance:Yr.findFiberByHostInstance||Ay,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ks.isDisabled&&ks.supportsFiber)try{Fo=ks.inject(Oy),vt=ks}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny;Ke.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(e))throw Error(I(200));return Ry(t,e,null,n)};Ke.createRoot=function(t,e){if(!yc(t))throw Error(I(299));var n=!1,r="",i=Mm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=mc(t,1,!1,null,null,n,!1,r,i),t[bt]=e.current,Ci(t.nodeType===8?t.parentNode:t),new vc(e)};Ke.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=rp(e),t=t===null?null:t.stateNode,t};Ke.flushSync=function(t){return Wn(t)};Ke.hydrate=function(t,e,n){if(!Zo(e))throw Error(I(200));return ea(null,t,e,!0,n)};Ke.hydrateRoot=function(t,e,n){if(!yc(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Mm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lm(e,null,t,1,n??null,i,!1,s,o),t[bt]=e.current,Ci(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xo(e)};Ke.render=function(t,e,n){if(!Zo(e))throw Error(I(200));return ea(null,t,e,!1,n)};Ke.unmountComponentAtNode=function(t){if(!Zo(t))throw Error(I(40));return t._reactRootContainer?(Wn(function(){ea(null,null,t,!1,function(){t._reactRootContainer=null,t[bt]=null})}),!0):!1};Ke.unstable_batchedUpdates=dc;Ke.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zo(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return ea(t,e,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";function Vm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vm)}catch(t){console.error(t)}}Vm(),Lh.exports=Ke;var by=Lh.exports,uf=by;pl.createRoot=uf.createRoot,pl.hydrateRoot=uf.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mi(){return Mi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mi.apply(this,arguments)}var tn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tn||(tn={}));const cf="popstate";function Dy(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return au("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wo(i)}return My(e,n,null,t)}function ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function _c(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ly(){return Math.random().toString(36).substr(2,8)}function df(t,e){return{usr:t.state,key:t.key,idx:e}}function au(t,e,n,r){return n===void 0&&(n=null),Mi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Fr(e):e,{state:n,key:e&&e.key||r||Ly()})}function wo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Fr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function My(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=tn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Mi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=tn.Pop;let k=c(),p=k==null?null:k-u;u=k,l&&l({action:a,location:w.location,delta:p})}function m(k,p){a=tn.Push;let d=au(w.location,k,p);n&&n(d,k),u=c()+1;let f=df(d,u),v=w.createHref(d);try{o.pushState(f,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(v)}s&&l&&l({action:a,location:w.location,delta:1})}function y(k,p){a=tn.Replace;let d=au(w.location,k,p);n&&n(d,k),u=c();let f=df(d,u),v=w.createHref(d);o.replaceState(f,"",v),s&&l&&l({action:a,location:w.location,delta:0})}function _(k){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof k=="string"?k:wo(k);return ne(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return a},get location(){return t(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(cf,h),l=k,()=>{i.removeEventListener(cf,h),l=null}},createHref(k){return e(i,k)},createURL:_,encodeLocation(k){let p=_(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:y,go(k){return o.go(k)}};return w}var ff;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ff||(ff={}));function Vy(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Fr(e):e,i=wc(r.pathname||"/",n);if(i==null)return null;let s=Um(t);Uy(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=qy(s[a],Yy(i));return o}function Um(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=dn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Um(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Wy(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of jm(s.path))i(s,o,l)}),e}function jm(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=jm(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Uy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ky(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jy=/^:\w+$/,Fy=3,$y=2,zy=1,By=10,Hy=-2,hf=t=>t==="*";function Wy(t,e){let n=t.split("/"),r=n.length;return n.some(hf)&&(r+=Hy),e&&(r+=$y),n.filter(i=>!hf(i)).reduce((i,s)=>i+(jy.test(s)?Fy:s===""?zy:By),r)}function Ky(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function qy(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Gy({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:dn([i,c.pathname]),pathnameBase:e_(dn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=dn([i,c.pathnameBase]))}return s}function Gy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Qy(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let m=a[h]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}return u[c]=Jy(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Qy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),_c(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Yy(t){try{return decodeURI(t)}catch(e){return _c(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Jy(t,e){try{return decodeURIComponent(t)}catch(n){return _c(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function wc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Xy(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Fr(t):t;return{pathname:n?n.startsWith("/")?n:Zy(n,e):e,search:t_(r),hash:n_(i)}}function Zy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function qa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fm(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $m(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Fr(t):(i=Mi({},t),ne(!i.pathname||!i.pathname.includes("?"),qa("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),qa("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),qa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}a=h>=0?e[h]:"/"}let l=Xy(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const dn=t=>t.join("/").replace(/\/\/+/g,"/"),e_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),t_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,n_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function r_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const zm=["post","put","patch","delete"];new Set(zm);const i_=["get",...zm];new Set(i_);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Eo.apply(this,arguments)}const Ec=S.createContext(null),Bm=S.createContext(null),tr=S.createContext(null),ta=S.createContext(null),In=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Hm=S.createContext(null);function s_(t,e){let{relative:n}=e===void 0?{}:e;Zi()||ne(!1);let{basename:r,navigator:i}=S.useContext(tr),{hash:s,pathname:o,search:a}=Ic(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:dn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Zi(){return S.useContext(ta)!=null}function es(){return Zi()||ne(!1),S.useContext(ta).location}function Wm(t){S.useContext(tr).static||S.useLayoutEffect(t)}function o_(){let{isDataRoute:t}=S.useContext(In);return t?E_():a_()}function a_(){Zi()||ne(!1);let t=S.useContext(Ec),{basename:e,navigator:n}=S.useContext(tr),{matches:r}=S.useContext(In),{pathname:i}=es(),s=JSON.stringify(Fm(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return Wm(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=$m(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:dn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const l_=S.createContext(null);function u_(t){let e=S.useContext(In).outlet;return e&&S.createElement(l_.Provider,{value:t},e)}function Ic(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(In),{pathname:i}=es(),s=JSON.stringify(Fm(r).map(o=>o.pathnameBase));return S.useMemo(()=>$m(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function c_(t,e){return d_(t,e)}function d_(t,e,n){Zi()||ne(!1);let{navigator:r}=S.useContext(tr),{matches:i}=S.useContext(In),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=es(),u;if(e){var c;let w=typeof e=="string"?Fr(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||ne(!1),u=w}else u=l;let h=u.pathname||"/",m=a==="/"?h:h.slice(a.length)||"/",y=Vy(t,{pathname:m}),_=g_(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:dn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:dn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&_?S.createElement(ta.Provider,{value:{location:Eo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:tn.Pop}},_):_}function f_(){let t=w_(),e=r_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const h_=S.createElement(f_,null);class p_ extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(In.Provider,{value:this.props.routeContext},S.createElement(Hm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function m_(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Ec);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(In.Provider,{value:e},r)}function g_(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ne(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||h_);let m=e.concat(s.slice(0,u+1)),y=()=>{let _;return c?_=h:l.route.Component?_=S.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,S.createElement(m_,{match:l,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(p_,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:y(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):y()},null)}var Km=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Km||{}),Io=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Io||{});function v_(t){let e=S.useContext(Ec);return e||ne(!1),e}function y_(t){let e=S.useContext(Bm);return e||ne(!1),e}function __(t){let e=S.useContext(In);return e||ne(!1),e}function qm(t){let e=__(),n=e.matches[e.matches.length-1];return n.route.id||ne(!1),n.route.id}function w_(){var t;let e=S.useContext(Hm),n=y_(Io.UseRouteError),r=qm(Io.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function E_(){let{router:t}=v_(Km.UseNavigateStable),e=qm(Io.UseNavigateStable),n=S.useRef(!1);return Wm(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Eo({fromRouteId:e},s)))},[t,e])}function I_(t){return u_(t.context)}function An(t){ne(!1)}function T_(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tn.Pop,navigator:s,static:o=!1}=t;Zi()&&ne(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Fr(r));let{pathname:u="/",search:c="",hash:h="",state:m=null,key:y="default"}=r,_=S.useMemo(()=>{let w=wc(u,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:m,key:y},navigationType:i}},[a,u,c,h,m,y,i]);return _==null?null:S.createElement(tr.Provider,{value:l},S.createElement(ta.Provider,{children:n,value:_}))}function S_(t){let{children:e,location:n}=t;return c_(lu(e),n)}new Promise(()=>{});function lu(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,lu(r.props.children,s));return}r.type!==An&&ne(!1),!r.props.index||!r.props.children||ne(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=lu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function To(){return To=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},To.apply(this,arguments)}function Gm(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function k_(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function P_(t,e){return t.button===0&&(!e||e==="_self")&&!k_(t)}const C_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],R_=["aria-current","caseSensitive","className","end","style","to","children"],A_="startTransition",pf=Tv[A_];function x_(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=Dy({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=S.useCallback(h=>{u&&pf?pf(()=>l(h)):l(h)},[l,u]);return S.useLayoutEffect(()=>o.listen(c),[o,c]),S.createElement(T_,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const N_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",O_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tc=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=Gm(e,C_),{basename:m}=S.useContext(tr),y,_=!1;if(typeof u=="string"&&O_.test(u)&&(y=u,N_))try{let d=new URL(window.location.href),f=u.startsWith("//")?new URL(d.protocol+u):new URL(u),v=wc(f.pathname,m);f.origin===d.origin&&v!=null?u=v+f.search+f.hash:_=!0}catch{}let w=s_(u,{relative:i}),k=b_(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(d){r&&r(d),d.defaultPrevented||k(d)}return S.createElement("a",To({},h,{href:y||w,onClick:_||s?r:p,ref:n,target:l}))}),Ps=S.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=Gm(e,R_),h=Ic(l,{relative:c.relative}),m=es(),y=S.useContext(Bm),{navigator:_}=S.useContext(tr),w=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,k=m.pathname,p=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(k=k.toLowerCase(),p=p?p.toLowerCase():null,w=w.toLowerCase());let d=k===w||!o&&k.startsWith(w)&&k.charAt(w.length)==="/",f=p!=null&&(p===w||!o&&p.startsWith(w)&&p.charAt(w.length)==="/"),v=d?r:void 0,E;typeof s=="function"?E=s({isActive:d,isPending:f}):E=[s,d?"active":null,f?"pending":null].filter(Boolean).join(" ");let T=typeof a=="function"?a({isActive:d,isPending:f}):a;return S.createElement(Tc,To({},c,{"aria-current":v,className:E,ref:n,style:T,to:l}),typeof u=="function"?u({isActive:d,isPending:f}):u)});var mf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(mf||(mf={}));var gf;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gf||(gf={}));function b_(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=o_(),l=es(),u=Ic(t,{relative:o});return S.useCallback(c=>{if(P_(c,n)){c.preventDefault();let h=r!==void 0?r:wo(l)===wo(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const D_="/kevin/assets/logo-df0469eb.png";var Qm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Wt=xe.createContext&&xe.createContext(Qm),fn=globalThis&&globalThis.__assign||function(){return fn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},fn.apply(this,arguments)},L_=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Ym(t){return t&&t.map(function(e,n){return xe.createElement(e.tag,fn({key:n},e.attr),Ym(e.child))})}function tt(t){return function(e){return xe.createElement(M_,fn({attr:fn({},t.attr)},e),Ym(t.child))}}function M_(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=L_(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),xe.createElement("svg",fn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:fn(fn({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&xe.createElement("title",null,s),t.children)};return Wt!==void 0?xe.createElement(Wt.Consumer,null,function(n){return e(n)}):e(Qm)}function V_(t){return tt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2"}},{tag:"path",attr:{d:"M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5"}},{tag:"path",attr:{d:"M16 19h6"}},{tag:"path",attr:{d:"M19 16l3 3l-3 3"}}]})(t)}function U_(t){return tt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"}}]})(t)}function j_(t){return tt({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,32H152a8,8,0,0,0-6.34,3.12l-64,83.21L72,108.69a16,16,0,0,0-22.64,0l-12.69,12.7a16,16,0,0,0,0,22.63l20,20-28,28a16,16,0,0,0,0,22.63l12.69,12.68a16,16,0,0,0,22.62,0l28-28,20,20a16,16,0,0,0,22.64,0l12.69-12.7a16,16,0,0,0,0-22.63l-9.64-9.64,83.21-64A8,8,0,0,0,224,104V40A8,8,0,0,0,216,32ZM52.69,216,40,203.32l28-28L80.68,188Zm70.61-8L48,132.71,60.7,120,136,195.31ZM208,100.06l-81.74,62.88L115.32,152l50.34-50.34a8,8,0,0,0-11.32-11.31L104,140.68,93.07,129.74,155.94,48H208Z"}}]})(t)}function F_(t){return tt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.00055 3L4.35055 6.34H17.9405L17.5005 8.5H3.92055L3.26055 11.83H16.8505L16.0905 15.64L10.6105 17.45L5.86055 15.64L6.19055 14H2.85055L2.06055 18L9.91055 21L18.9605 18L20.1605 11.97L20.4005 10.76L21.9405 3H5.00055Z"}}]})(t)}function $_(t){return tt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.88401 18.6531C5.58404 18.4523 5.32587 18.1972 5.0239 17.8366C4.91473 17.7062 4.47283 17.1521 4.55811 17.258C4.09533 16.6831 3.80296 16.4168 3.50156 16.3087C2.9817 16.1223 2.7114 15.5497 2.89784 15.0298C3.08428 14.51 3.65685 14.2397 4.17672 14.4261C4.92936 14.696 5.43847 15.1609 6.12425 16.0141C6.03025 15.8972 6.46364 16.4408 6.55731 16.5526C6.74784 16.7802 6.88732 16.918 6.99629 16.9909C7.20118 17.128 7.58451 17.1871 8.14709 17.1308C8.17065 16.7487 8.24136 16.378 8.34919 16.0355C5.38097 15.3101 3.70116 13.3949 3.70116 9.63947C3.70116 8.4006 4.0704 7.28368 4.75917 6.34756C4.5415 5.45368 4.57433 4.37259 5.06092 3.15611C5.1725 2.87715 5.40361 2.66314 5.69031 2.57328C5.77242 2.54949 5.81791 2.5389 5.89878 2.52648C6.70167 2.40319 7.83573 2.69681 9.31449 3.62311C10.181 3.41855 11.0885 3.31476 12.0012 3.31476C12.9129 3.31476 13.8196 3.41835 14.6854 3.62253C16.1619 2.68976 17.2986 2.39625 18.1072 2.52627C18.1919 2.53988 18.2645 2.55758 18.3249 2.57741C18.6059 2.66967 18.8316 2.88155 18.9414 3.15611C19.4279 4.37232 19.4608 5.45319 19.2433 6.34695C19.9342 7.28313 20.3012 8.39184 20.3012 9.63947C20.3012 13.3966 18.627 15.3046 15.6588 16.0318C15.7837 16.4467 15.8496 16.9103 15.8496 17.4118C15.8496 18.0763 15.8471 18.7108 15.8424 19.4223C15.8412 19.6124 15.8397 19.8156 15.8375 20.1279C16.2129 20.2107 16.5229 20.5074 16.6031 20.9086C16.7114 21.4502 16.3602 21.977 15.8186 22.0853C14.6794 22.3132 13.8353 21.5535 13.8353 20.5608C13.8353 20.4705 13.836 20.3414 13.8375 20.1142C13.8398 19.8012 13.8412 19.5987 13.8425 19.4092C13.8471 18.7017 13.8496 18.0714 13.8496 17.4118C13.8496 16.7145 13.6664 16.26 13.4237 16.0508C12.7627 15.481 13.0977 14.3971 13.965 14.2996C16.9314 13.9663 18.3012 12.8174 18.3012 9.63947C18.3012 8.68484 17.9893 7.89547 17.3881 7.23534C17.1301 6.95209 17.0567 6.54634 17.199 6.19062C17.3647 5.77639 17.4354 5.2336 17.2941 4.57678L17.2847 4.57944C16.7928 4.71861 16.1744 5.01956 15.4261 5.52826C15.182 5.69413 14.8772 5.74377 14.5932 5.66388C13.7729 5.43319 12.8913 5.31476 12.0012 5.31476C11.111 5.31476 10.2294 5.43319 9.40916 5.66388C9.12662 5.74335 8.82344 5.69468 8.57997 5.53077C7.8274 5.02414 7.2056 4.72355 6.71079 4.58352C6.56735 5.23672 6.63814 5.77758 6.80336 6.19062C6.94565 6.54634 6.87219 6.95209 6.61423 7.23534C6.01715 7.89096 5.70116 8.69352 5.70116 9.63947C5.70116 12.8114 7.07225 13.9681 10.023 14.2996C10.8883 14.3969 11.2246 15.4767 10.5675 16.048C10.3751 16.2153 10.1384 16.7799 10.1384 17.4118V20.5608C10.1384 21.5472 9.30356 22.2866 8.17878 22.0898C7.63476 21.9946 7.27093 21.4764 7.36613 20.9324C7.43827 20.5201 7.75331 20.2114 8.13841 20.1274V19.1379C7.22829 19.1991 6.47656 19.0496 5.88401 18.6531Z"}}]})(t)}function z_(t){return tt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3ZM5.00098 5V19H19.001V5H5.00098ZM7.50098 9C6.67255 9 6.00098 8.32843 6.00098 7.5C6.00098 6.67157 6.67255 6 7.50098 6C8.3294 6 9.00098 6.67157 9.00098 7.5C9.00098 8.32843 8.3294 9 7.50098 9ZM6.50098 10H8.50098V17.5H6.50098V10ZM12.001 10.4295C12.5854 9.86534 13.2665 9.5 14.001 9.5C16.072 9.5 17.501 11.1789 17.501 13.25V17.5H15.501V13.25C15.501 12.2835 14.7175 11.5 13.751 11.5C12.7845 11.5 12.001 12.2835 12.001 13.25V17.5H10.001V10H12.001V10.4295Z"}}]})(t)}function B_(t){return tt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 7H24V9H19V7ZM17 12H24V14H17V12ZM20 17H24V19H20V17ZM2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11Z"}}]})(t)}const Jr=48,H_=({color:t="currentColor",direction:e="left",distance:n="md",duration:r=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:s=!0,label:o,lines:a=3,onToggle:l,render:u,rounded:c=!1,size:h=32,toggle:m,toggled:y})=>{const[_,w]=S.useState(!1),k=Math.max(12,Math.min(Jr,h)),p=Math.round((Jr-k)/2),d=k/12,f=Math.round(d),E=k/(a*((n==="lg"?.25:n==="sm"?.75:.5)+(a===3?1:1.25))),T=Math.round(E),P=f*a+T*(a-1),A=Math.round((Jr-P)/2),F=a===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,b=(d-f+(E-T))/(a===3?1:2),Ue=parseFloat((k/F-b/(4/3)).toFixed(2)),jt=Math.max(0,r),Ft={cursor:"pointer",height:`${Jr}px`,position:"relative",transition:`${jt}s ${i}`,userSelect:"none",width:`${Jr}px`},zr={background:t,height:`${f}px`,left:`${p}px`,position:"absolute"};s&&(Ft.outline="none"),c&&(zr.borderRadius="9em");const _a=m||w,Sn=y!==void 0?y:_;return u({barHeight:f,barStyles:zr,burgerStyles:Ft,easing:i,handler:()=>{_a(!Sn),typeof l=="function"&&l(!Sn)},isLeft:e==="left",isToggled:Sn,label:o,margin:T,move:Ue,time:jt,topOffset:A,width:k})};function uu(){return uu=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uu.apply(this,arguments)}const W_=t=>xe.createElement(H_,uu({},t,{render:e=>xe.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:n=>n.key==="Enter"&&e.handler(),role:"button",style:e.burgerStyles,tabIndex:0},xe.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none"}`}}),xe.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,opacity:`${e.isToggled?"0":"1"}`}}),xe.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight*2+e.margin*2}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move*-1}px)`:"none"}`}}))}));function K_(){const[t,e]=S.useState(!1);return g.jsxs("div",{className:"nav-bar",children:[g.jsx(Tc,{className:"logo",to:"/",children:g.jsx("img",{className:"logo",src:D_,alt:"logo"})}),g.jsxs("nav",{className:t?"mobile-show":"",children:[g.jsx(Ps,{onClick:()=>e(!t),className:"link home-link",exact:"true",activeclassname:"active",to:"/",children:g.jsx(V_,{})}),g.jsx(Ps,{onClick:()=>e(!t),className:"link about-link",exact:"true",activeclassname:"active",to:"/about",children:g.jsx(B_,{})}),g.jsx(Ps,{onClick:()=>e(!t),className:"link portfolio-link",exact:"true",activeclassname:"active",to:"/portfolio",children:g.jsx(j_,{})}),g.jsx(Ps,{onClick:()=>e(!t),className:"link contact-link",exact:"true",activeclassname:"active",to:"/contact",children:g.jsx(U_,{})})]}),g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/kevin-pinto-977b8b283/",children:g.jsx(z_,{})})}),g.jsx("li",{children:g.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/KevinPintoCode",children:g.jsx($_,{})})})]}),g.jsx("div",{className:"hamburguer-icon",children:g.jsx(W_,{onClick:()=>e(!t),color:"#a970ff",toggled:t,toggle:e})})]})}function q_(){return g.jsxs("div",{className:"App",children:[g.jsx(K_,{}),g.jsxs("div",{className:"page",children:[g.jsx("span",{className:"tags top-tags",children:"<body>"}),g.jsx(I_,{}),g.jsxs("span",{className:"tags bottom-tags",children:["</body>",g.jsx("br",{}),g.jsx("span",{className:"bottom-tag-html",children:"</html>"})]})]})]})}const G_="/kevin/assets/k_letter-14ab0e76.png";var Jm={exports:{}},Ga={exports:{}},Qa,vf;function Q_(){if(vf)return Qa;vf=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Qa=t,Qa}var Ya,yf;function Y_(){if(yf)return Ya;yf=1;var t=Q_();function e(){}function n(){}return n.resetWarningCache=e,Ya=function(){function r(o,a,l,u,c,h){if(h!==t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function i(){return r}var s={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:e};return s.PropTypes=s,s},Ya}var _f;function J_(){return _f||(_f=1,Ga.exports=Y_()()),Ga.exports}var Ja={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var wf;function X_(){return wf||(wf=1,function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()}(Ja)),Ja.exports}(function(t){t.exports=function(e){var n={};function r(i){if(n[i])return n[i].exports;var s=n[i]={i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=n,r.d=function(i,s,o){r.o(i,s)||Object.defineProperty(i,s,{configurable:!1,enumerable:!0,get:o})},r.n=function(i){var s=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(s,"a",s),s},r.o=function(i,s){return Object.prototype.hasOwnProperty.call(i,s)},r.p="",r(r.s=0)}([function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Types=n.Loader=void 0;var i=function(){function f(v,E){for(var T=0;T<E.length;T++){var P=E[T];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(v,P.key,P)}}return function(v,E,T){return E&&f(v.prototype,E),T&&f(v,T),v}}(),s=r(1),o=h(s),a=r(2),l=h(a),u=r(3),c=h(u);function h(f){return f&&f.__esModule?f:{default:f}}function m(f,v,E){return v in f?Object.defineProperty(f,v,{value:E,enumerable:!0,configurable:!0,writable:!0}):f[v]=E,f}function y(f,v){if(!(f instanceof v))throw new TypeError("Cannot call a class as a function")}function _(f,v){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:f}function w(f,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);f.prototype=Object.create(v&&v.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(f,v):f.__proto__=v)}var k=n.Loader=function(f){w(v,f);function v(){return y(this,v),_(this,(v.__proto__||Object.getPrototypeOf(v)).apply(this,arguments))}return i(v,[{key:"renderDiv",value:function(T){var P=this.props.styles||{};return this.props.color&&(P.backgroundColor=this.props.color),o.default.createElement("div",{key:T,style:P})}},{key:"render",value:function(){var T,P=d(p[this.props.type]),A=(0,c.default)((T={loader:!0},m(T,"loader-"+this.props.size,this.props.size!=="md"),m(T,"loader-active",this.props.active),m(T,"loader-hidden",!this.props.active),T),this.props.className),F=(0,c.default)(["loader-inner",this.props.type,this.props.innerClassName]);return o.default.createElement("div",{className:A,style:this.props.style},o.default.createElement("div",{className:F},P.map(this.renderDiv.bind(this))))}}],[{key:"removeType",value:function(T){delete p[key]}},{key:"addType",value:function(T,P){return p[T]=P}}]),v}(s.Component);k.propTypes={type:l.default.string,active:l.default.bool,color:l.default.string,innerClassName:l.default.string},k.defaultProps={type:"ball-pulse",active:!0},n.default=k;var p=n.Types={"ball-pulse":3,"ball-grid-pulse":9,"ball-clip-rotate":1,"ball-clip-rotate-pulse":2,"square-spin":1,"ball-clip-rotate-multiple":2,"ball-pulse-rise":5,"ball-rotate":1,"cube-transition":2,"ball-zig-zag":2,"ball-zig-zag-deflect":2,"ball-triangle-path":3,"ball-scale":1,"line-scale":5,"line-scale-party":4,"ball-scale-multiple":3,"ball-pulse-sync":3,"ball-beat":3,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin-fade-loader":8,"line-spin-fade-loader":8,"triangle-skew-spin":1,pacman:5,"ball-grid-beat":9,"semi-circle-spin":1};function d(f){for(var v=-1,E=[];++v<f;)E.push(v);return E}},function(e,n){e.exports=S},function(e,n){e.exports=J_()},function(e,n){e.exports=X_()}])})(Jm);var Z_=Jm.exports;const na=Sh(Z_);function Dn({letterClass:t,strArray:e,idx:n}){return g.jsx("span",{children:e.map((r,i)=>g.jsx("span",{className:`${t} _${i+n}`,children:r},r+i))})}const ew="/kevin/assets/logo-df0469eb.png";function Xm(){return g.jsx(g.Fragment,{children:g.jsx("img",{src:ew,alt:"Logo"})})}function tw(){const[t,e]=S.useState("text-animate"),n="Welcome ".split(""),r="Adventurer...".split(""),i="evin Pinto,".split(""),s="web developer...".split("");return S.useEffect(()=>{setTimeout(()=>e("text-animate-hover"),4e3)},[]),g.jsxs(g.Fragment,{children:[g.jsx("div",{children:g.jsxs("div",{className:"container home-page",children:[g.jsxs("div",{className:"text-zone",children:[g.jsx("div",{className:"welcome",children:g.jsxs("h1",{children:[g.jsx("div",{className:"test",children:g.jsx(Dn,{letterClass:t,strArray:n,idx:15})}),g.jsx("div",{className:"test",children:g.jsx(Dn,{letterClass:t,strArray:r,idx:15})})]})}),g.jsxs("h2",{children:[g.jsx("span",{className:`${t} _11`,children:"I"}),g.jsx("span",{className:`${t} _12`,children:"'"}),g.jsx("span",{className:`${t} _13`,children:"m"}),g.jsx("img",{className:"k-letter",src:G_,alt:"developer"}),g.jsx(Dn,{letterClass:t,strArray:i,idx:15}),g.jsx("br",{}),g.jsx(Dn,{letterClass:t,strArray:s,idx:15})]}),g.jsxs("h3",{children:["Frontend Developer / ",g.jsx("span",{className:"gamer",children:"Gamer"})," ",g.jsx("span",{className:"purple",children:"/"})," Designer /"]}),g.jsx(Tc,{to:"/contact",className:"flat_button",children:"CONTACT ME"})]}),g.jsx("div",{className:"logo-container",children:g.jsx("div",{className:"logo-img",children:g.jsx(Xm,{})})})]})}),g.jsx(na,{type:"pacman"})]})}function nw(t){return tt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"}}]})(t)}function rw(t){return tt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 34 32"},child:[{tag:"path",attr:{d:"M3.556 2.845v27.071h27.53v-27.071h-27.53zM28.896 27.763h-23.151v-22.765h23.151v22.765z"}},{tag:"path",attr:{d:"M16.555 10.442c-0.693-0.599-1.726-0.939-3.173-0.939-1.433 0-3.173 0.046-3.173 0.046l-0 11.103h2.326v-3.568c0 0 0.407-0.005 0.847-0.023 1.593-0.067 2.526-0.549 3.327-1.364 0.616-0.631 0.955-1.53 0.955-2.627s-0.447-2.062-1.109-2.628zM13.32 15.115c-0.375 0.004-0.533 0.016-0.786-0.008v-3.834c0 0 0.493-0.017 0.971 0 1.198 0.044 1.833 0.89 1.833 1.921-0 1.148-0.77 1.906-2.018 1.921z"}},{tag:"path",attr:{d:"M22.205 15.455c-1.005-0.356-1.324-0.559-1.324-0.949 0-0.423 0.352-0.677 0.972-0.677 0.703 0 1.767 0.454 2.136 0.658v-1.871c-0.502-0.254-1.265-0.566-2.22-0.566-2.027 0-3.334 1.169-3.334 2.728-0.017 0.965 0.636 1.655 2.329 2.231 0.955 0.322 1.206 0.767 1.206 1.191s-0.318 0.695-1.089 0.695c-0.754 0-1.86-0.431-2.329-0.718v0 1.847c0.62 0.338 1.518 0.659 2.329 0.684 2.363 0.074 3.551-1.152 3.551-2.694-0.017-1.22-0.67-2.016-2.228-2.558z"}}]})(t)}function iw(t){return tt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.307 5.376c-1.226 0.312-3.254 0.802-4.502 1.137l-2.295 0.579-0.669 1.181-0.668 1.204h-2.786l-6.686 6.686 6.686 6.686h2.741l0.691 1.204c0.379 0.669 0.847 1.27 1.070 1.337 0.379 0.111 3.254 0.892 7.087 1.916 0.958 0.245 1.76 0.424 1.783 0.401 0.044-0.044 0.379-1.226 0.758-2.63s0.936-3.454 1.226-4.547l0.535-1.961-0.646-1.115c-0.357-0.602-0.646-1.181-0.646-1.292s0.29-0.713 0.669-1.315l0.646-1.114-0.468-1.627c-0.914-3.253-1.738-5.906-2.006-6.574l-0.29-0.669-2.229 0.513zM21.259 8.362c-0.044 0.089-0.913 1.649-1.961 3.432l-1.894 3.254h-3.989c-2.206 0-3.945-0.044-3.9-0.111 0.067-0.045 1.204-1.248 2.496-2.652 2.006-2.139 2.541-2.563 3.232-2.697 0.446-0.067 1.828-0.424 3.053-0.758 2.451-0.669 3.075-0.758 2.964-0.468zM23.733 10.19c0.111 0.401 0.535 1.916 0.936 3.365l0.713 2.652-0.624 2.251c-0.334 1.248-0.758 2.808-0.936 3.454-0.178 0.668-0.423 1.114-0.512 1.003-0.089-0.089-1.003-1.605-2.006-3.365-1.226-2.14-1.783-3.298-1.671-3.566 0.267-0.735 3.566-6.486 3.722-6.508 0.067 0 0.245 0.334 0.379 0.713zM18.362 19.059c2.362 3.967 3.008 5.148 2.897 5.237-0.044 0.044-1.604-0.312-3.454-0.78l-3.365-0.891-2.429-2.474c-1.315-1.36-2.452-2.563-2.474-2.674-0.045-0.134 1.449-0.178 3.878-0.156l3.967 0.067 0.981 1.671z"}}]})(t)}function sw(t){return tt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"}}]})(t)}function ow(t){return tt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"}}]})(t)}function aw(){const t="About me".split(""),[e,n]=S.useState("text-animate");return S.useEffect(()=>{setTimeout(()=>n("text-animate-hover"),3e3)},[]),g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"container about-page",children:[g.jsxs("div",{className:"text-zone",children:[g.jsx("h1",{children:g.jsx(Dn,{letterClass:e,strArray:t,idx:15})}),g.jsx("p",{children:`Hello there, I'm Kevin Pinto, known as "Goss" in the gaming world. Hailing from Venezuela, I wear multiple hats as a front-end developer, avid gamer, and passionate designer. Beyond the tech realm, I'm also deeply into rap music and photography.`}),g.jsx("p",{children:"I have an insatiable curiosity for new technologies and the art of creative coding. My journey into the world of full stack development led me to discover the thrilling realm of Unity, where I can bring my ideas to life and make meaningful contributions to the gaming community."}),g.jsx("p",{children:"My background in engineering and my experiences as a world traveler, devoted husband and pet lover, might seem diverse, but in 2021, I decided to channel my passions into a new career. The fusion of gaming and design in coding provided me with the exhilaration I've sought for years. I've found my place, and I'm here to explore, innovate, and make an impact."})]}),g.jsx("div",{className:"stage-cube-cont",children:g.jsxs("div",{className:"cube-spinner",children:[g.jsx("div",{className:"face1",children:g.jsx(Wt.Provider,{value:{color:"#28a4d9"},children:g.jsx("div",{children:g.jsx(F_,{})})})}),g.jsx("div",{className:"face2",children:g.jsx(Wt.Provider,{value:{color:"#1b1790"},children:g.jsx("div",{children:g.jsx(rw,{})})})}),g.jsx("div",{className:"face3",children:g.jsx(Wt.Provider,{value:{color:"#efd81d"},children:g.jsx("div",{children:g.jsx(nw,{})})})}),g.jsx("div",{className:"face4",children:g.jsx(Wt.Provider,{value:{color:"#70e0ff"},children:g.jsx("div",{children:g.jsx(ow,{})})})}),g.jsx("div",{className:"face5",children:g.jsx(Wt.Provider,{value:{color:"#616161"},children:g.jsx("div",{children:g.jsx(iw,{})})})}),g.jsx("div",{className:"face6",children:g.jsx(Wt.Provider,{value:{color:"#41c67d"},children:g.jsx("div",{children:g.jsx(sw,{})})})})]})})]}),g.jsx(na,{type:"pacman"})]})}function lw(){const[t,e]=S.useState("text-animate"),n=S.useRef();S.useEffect(()=>{setTimeout(()=>e("text-animate-hover"),4e3)},[]);const r=s=>{s.preventDefault(),emailjs.sendForm("service_8j9cphd","contact_form",n.current,"dDPJ2T9MK2J4yZkpw").then(function(o){alert("Your message has been successfully sent!"),window.location.reload(!1)},function(o){alert("Failed to sent your message, please try again.")})},i="Contact Me".split("");return g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"container contact-page",children:[g.jsxs("div",{className:"text-zone",children:[g.jsx("h1",{children:g.jsx(Dn,{letterClass:t,strArray:i,idx:15})}),g.jsx("p",{children:"Ready to collaborate on a project or just want to discuss gaming and design? Let's chat!"}),g.jsx("div",{className:"contact-form",children:g.jsx("form",{ref:n,onSubmit:r,children:g.jsxs("ul",{children:[g.jsx("li",{className:"half",children:g.jsx("input",{type:"text",name:"name",placeholder:"Full Name",required:!0})}),g.jsx("li",{className:"half",children:g.jsx("input",{type:"email",name:"email",placeholder:"Email",required:!0})}),g.jsx("li",{children:g.jsx("input",{type:"text",name:"subject",placeholder:"Subject",required:!0})}),g.jsx("li",{children:g.jsx("textarea",{placeholder:"Message",name:"message"})}),g.jsx("li",{children:g.jsx("input",{type:"submit",className:"flat-button",value:"SEND"})})]})})})]}),g.jsx("div",{className:"logo-container",children:g.jsx("div",{className:"logo-img",children:g.jsx(Xm,{})})})]}),g.jsx(na,{type:"pacman"})]})}/**
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
 *//**
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
 */const Zm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),r.push(n[c],n[h],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new cw;const m=s<<2|a>>4;if(r.push(m),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dw=function(t){const e=Zm(t);return eg.encodeByteArray(e,!0)},So=function(t){return dw(t).replace(/\./g,"")},tg=function(t){try{return eg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hw=()=>fw().__FIREBASE_DEFAULTS__,pw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tg(t[1]);return e&&JSON.parse(e)},ra=()=>{try{return hw()||pw()||mw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ng=t=>{var e,n;return(n=(e=ra())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rg=t=>{const e=ng(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ig=()=>{var t;return(t=ra())===null||t===void 0?void 0:t.config},sg=t=>{var e;return(e=ra())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class gw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function og(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[So(JSON.stringify(n)),So(JSON.stringify(o)),a].join(".")}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function yw(){var t;const e=(t=ra())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ag(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _w(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ww(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lg(){try{return typeof indexedDB=="object"}catch{return!1}}function ug(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Ew(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Iw="FirebaseError";class nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Iw,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Tw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nt(i,a,r)}}function Tw(t,e){return t.replace(Sw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Sw=/\{\$([^}]+)}/g;function kw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ef(s)&&Ef(o)){if(!Vi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ef(t){return t!==null&&typeof t=="object"}/**
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
 */function ts(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pw(t,e){const n=new Cw(t,e);return n.subscribe.bind(n)}class Cw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Rw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xa),i.error===void 0&&(i.error=Xa),i.complete===void 0&&(i.complete=Xa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xa(){}/**
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
 */const Aw=1e3,xw=2,Nw=4*60*60*1e3,Ow=.5;function If(t,e=Aw,n=xw){const r=e*Math.pow(n,t),i=Math.round(Ow*r*(Math.random()-.5)*2);return Math.min(Nw,r+i)}/**
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
 */function de(t){return t&&t._delegate?t._delegate:t}class et{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xn="[DEFAULT]";/**
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
 */class bw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lw(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dw(t){return t===xn?void 0:t}function Lw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Mw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const Vw={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Uw=j.INFO,jw={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Fw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=jw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ia{constructor(e){this.name=e,this._logLevel=Uw,this._logHandler=Fw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const $w=(t,e)=>e.some(n=>t instanceof n);let Tf,Sf;function zw(){return Tf||(Tf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bw(){return Sf||(Sf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cg=new WeakMap,cu=new WeakMap,dg=new WeakMap,Za=new WeakMap,Sc=new WeakMap;function Hw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cg.set(n,t)}).catch(()=>{}),Sc.set(e,t),e}function Ww(t){if(cu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cu.set(t,e)}let du={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kw(t){du=t(du)}function qw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(el(this),e,...n);return dg.set(r,e.sort?e.sort():[e]),hn(r)}:Bw().includes(t)?function(...e){return t.apply(el(this),e),hn(cg.get(this))}:function(...e){return hn(t.apply(el(this),e))}}function Gw(t){return typeof t=="function"?qw(t):(t instanceof IDBTransaction&&Ww(t),$w(t,zw())?new Proxy(t,du):t)}function hn(t){if(t instanceof IDBRequest)return Hw(t);if(Za.has(t))return Za.get(t);const e=Gw(t);return e!==t&&(Za.set(t,e),Sc.set(e,t)),e}const el=t=>Sc.get(t);function Qw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=hn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hn(o.result),l.oldVersion,l.newVersion,hn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Yw=["get","getKey","getAll","getAllKeys","count"],Jw=["put","add","delete","clear"],tl=new Map;function kf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tl.get(e))return tl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Jw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Yw.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return tl.set(e,s),s}Kw(t=>({...t,get:(e,n,r)=>kf(e,n)||t.get(e,n,r),has:(e,n)=>!!kf(e,n)||t.has(e,n)}));/**
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
 */class Xw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fu="@firebase/app",Pf="0.9.20";/**
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
 */const Kn=new ia("@firebase/app"),eE="@firebase/app-compat",tE="@firebase/analytics-compat",nE="@firebase/analytics",rE="@firebase/app-check-compat",iE="@firebase/app-check",sE="@firebase/auth",oE="@firebase/auth-compat",aE="@firebase/database",lE="@firebase/database-compat",uE="@firebase/functions",cE="@firebase/functions-compat",dE="@firebase/installations",fE="@firebase/installations-compat",hE="@firebase/messaging",pE="@firebase/messaging-compat",mE="@firebase/performance",gE="@firebase/performance-compat",vE="@firebase/remote-config",yE="@firebase/remote-config-compat",_E="@firebase/storage",wE="@firebase/storage-compat",EE="@firebase/firestore",IE="@firebase/firestore-compat",TE="firebase",SE="10.5.0";/**
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
 */const hu="[DEFAULT]",kE={[fu]:"fire-core",[eE]:"fire-core-compat",[nE]:"fire-analytics",[tE]:"fire-analytics-compat",[iE]:"fire-app-check",[rE]:"fire-app-check-compat",[sE]:"fire-auth",[oE]:"fire-auth-compat",[aE]:"fire-rtdb",[lE]:"fire-rtdb-compat",[uE]:"fire-fn",[cE]:"fire-fn-compat",[dE]:"fire-iid",[fE]:"fire-iid-compat",[hE]:"fire-fcm",[pE]:"fire-fcm-compat",[mE]:"fire-perf",[gE]:"fire-perf-compat",[vE]:"fire-rc",[yE]:"fire-rc-compat",[_E]:"fire-gcs",[wE]:"fire-gcs-compat",[EE]:"fire-fst",[IE]:"fire-fst-compat","fire-js":"fire-js",[TE]:"fire-js-all"};/**
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
 */const ko=new Map,pu=new Map;function PE(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dt(t){const e=t.name;if(pu.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;pu.set(e,t);for(const n of ko.values())PE(n,t);return!0}function Tn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const CE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pn=new nr("app","Firebase",CE);/**
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
 */class RE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
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
 */const rr=SE;function fg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pn.create("bad-app-name",{appName:String(i)});if(n||(n=ig()),!n)throw pn.create("no-options");const s=ko.get(i);if(s){if(Vi(n,s.options)&&Vi(r,s.config))return s;throw pn.create("duplicate-app",{appName:i})}const o=new Mw(i);for(const l of pu.values())o.addComponent(l);const a=new RE(n,r,o);return ko.set(i,a),a}function sa(t=hu){const e=ko.get(t);if(!e&&t===hu&&ig())return fg();if(!e)throw pn.create("no-app",{appName:t});return e}function Me(t,e,n){var r;let i=(r=kE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(a.join(" "));return}dt(new et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const AE="firebase-heartbeat-database",xE=1,Ui="firebase-heartbeat-store";let nl=null;function hg(){return nl||(nl=Qw(AE,xE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ui)}}}).catch(t=>{throw pn.create("idb-open",{originalErrorMessage:t.message})})),nl}async function NE(t){try{return await(await hg()).transaction(Ui).objectStore(Ui).get(pg(t))}catch(e){if(e instanceof nt)Kn.warn(e.message);else{const n=pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function Cf(t,e){try{const r=(await hg()).transaction(Ui,"readwrite");await r.objectStore(Ui).put(e,pg(t)),await r.done}catch(n){if(n instanceof nt)Kn.warn(n.message);else{const r=pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function pg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const OE=1024,bE=30*24*60*60*1e3;class DE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ME(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=bE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Rf(),{heartbeatsToSend:n,unsentEntries:r}=LE(this._heartbeatsCache.heartbeats),i=So(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Rf(){return new Date().toISOString().substring(0,10)}function LE(t,e=OE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Af(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Af(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ME{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lg()?ug().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await NE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Af(t){return So(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function VE(t){dt(new et("platform-logger",e=>new Xw(e),"PRIVATE")),dt(new et("heartbeat",e=>new DE(e),"PRIVATE")),Me(fu,Pf,t),Me(fu,Pf,"esm2017"),Me("fire-js","")}VE("");/**
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
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
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
 */let $r="10.5.0";/**
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
 */const br=new ia("@firebase/firestore");function Po(t,...e){if(br.logLevel<=j.DEBUG){const n=e.map(Pc);br.debug(`Firestore (${$r}): ${t}`,...n)}}function kc(t,...e){if(br.logLevel<=j.ERROR){const n=e.map(Pc);br.error(`Firestore (${$r}): ${t}`,...n)}}function mg(t,...e){if(br.logLevel<=j.WARN){const n=e.map(Pc);br.warn(`Firestore (${$r}): ${t}`,...n)}}function Pc(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${$r}) INTERNAL ASSERTION FAILED: `+t;throw kc(e),new Error(e)}function yn(t,e){t||Y()}function oa(t,e){return t}/**
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
 */const xf="ok",UE="cancelled",fi="unknown",V="invalid-argument",jE="deadline-exceeded",FE="not-found",$E="permission-denied",mu="unauthenticated",zE="resource-exhausted",Dr="failed-precondition",BE="aborted",HE="out-of-range",gg="unimplemented",WE="internal",KE="unavailable";class N extends nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Re.UNAUTHENTICATED))}shutdown(){}}class GE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QE{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(yn(typeof e.accessToken=="string"),new vg(e.accessToken,new Re(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class YE{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class JE{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new YE(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZE{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(yn(typeof e.token=="string"),new XE(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class eI{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ji{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ji("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ji&&e.projectId===this.projectId&&e.database===this.database}}class Fi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Fi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends Fi{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(V,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const tI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends Fi{construct(e,n,r){return new Ne(e,n,r)}static isValidIdentifier(e){return tI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ne(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(V,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(V,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(V,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(V,"Unterminated ` in path: "+e);return new Ne(n)}static emptyPath(){return new Ne([])}}/**
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
 */class Se{constructor(e){this.path=e}static fromPath(e){return new Se(ue.fromString(e))}static fromName(e){return new Se(ue.fromString(e).popFirst(5))}static empty(){return new Se(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Se(new ue(e.slice()))}}/**
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
 */function yg(t,e,n){if(!n)throw new N(V,`Function ${t}() cannot be called with an empty ${e}.`)}function Nf(t){if(!Se.isDocumentKey(t))throw new N(V,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Of(t){if(Se.isDocumentKey(t))throw new N(V,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Rc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(V,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cc(t);throw new N(V,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function _g(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let Cs=null;function nI(){return Cs===null?Cs=function(){return 268435456+Math.round(2147483648*Math.random())}():Cs++,"0x"+Cs.toString(16)}/**
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
 */function rI(t){return t==null}function Co(t){return t===0&&1/t==-1/0}/**
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
 */const iI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var bf,M;function Df(t){if(t===void 0)return kc("RPC_ERROR","HTTP error has no status"),fi;switch(t){case 200:return xf;case 400:return Dr;case 401:return mu;case 403:return $E;case 404:return FE;case 409:return BE;case 416:return HE;case 429:return zE;case 499:return UE;case 500:return fi;case 501:return gg;case 503:return KE;case 504:return jE;default:return t>=200&&t<300?xf:t>=400&&t<500?Dr:t>=500&&t<600?WE:fi}}/**
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
 */(M=bf||(bf={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";class sI extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get P(){return!1}R(n,r,i,s,o){const a=nI(),l=this.I(n,r);Po("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(u,s,o),this.p(n,l,u,i).then(c=>(Po("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw mg("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}g(n,r,i,s,o,a){return this.R(n,r,i,s,o)}V(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$r}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}I(n,r){const i=iI[n];return`${this.m}/v1/${r}:${i}`}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new N(Df(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new N(Df(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
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
 */function oI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class aI{static D(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=oI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function wg(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */function Lf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function aa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class lI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 *//**
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
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lI("Invalid base64 string: "+s):s}}(e);return new Mt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const uI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(t){if(yn(!!t),typeof t=="string"){let e=0;const n=uI.exec(t);if(yn(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ie(t.seconds),nanos:ie(t.nanos)}}function ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $i(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
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
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(V,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(V,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(V,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(V,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function Eg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ig(t){const e=t.mapValue.fields.__previous_value__;return Eg(e)?Ig(e):e}function zi(t){const e=qn(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */const Rs={fields:{__type__:{stringValue:"__max__"}}};function Gn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Eg(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:Y()}function Ro(t,e){if(t===e)return!0;const n=Gn(t);if(n!==Gn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zi(t).isEqual(zi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=qn(i.timestampValue),a=qn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return $i(i.bytesValue).isEqual($i(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ie(i.geoPointValue.latitude)===ie(s.geoPointValue.latitude)&&ie(i.geoPointValue.longitude)===ie(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ie(i.integerValue)===ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ie(i.doubleValue),a=ie(s.doubleValue);return o===a?Co(o)===Co(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return wg(t.arrayValue.values||[],e.arrayValue.values||[],Ro);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Lf(o)!==Lf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ro(o[l],a[l])))return!1;return!0}(t,e);default:return Y()}}function Bi(t,e){return(t.values||[]).find(n=>Ro(n,e))!==void 0}function Ao(t,e){if(t===e)return 0;const n=Gn(t),r=Gn(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ie(s.integerValue||s.doubleValue),l=ie(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Mf(t.timestampValue,e.timestampValue);case 4:return Mf(zi(t),zi(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=$i(s),l=$i(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ae(a[u],l[u]);if(c!==0)return c}return ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ae(ie(s.latitude),ie(o.latitude));return a!==0?a:ae(ie(s.longitude),ie(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ao(a[u],l[u]);if(c)return c}return ae(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Rs&&o===Rs)return 0;if(s===Rs)return 1;if(o===Rs)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const m=ae(l[h],c[h]);if(m!==0)return m;const y=Ao(a[l[h]],u[c[h]]);if(y!==0)return y}return ae(l.length,c.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Mf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=qn(t),r=qn(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Tg(t){return!!t&&"arrayValue"in t}function Vf(t){return!!t&&"nullValue"in t}function Uf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rl(t){return!!t&&"mapValue"in t}function hi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return aa(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=hi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hi(t.arrayValue.values[n]);return e}return Object.assign({},t)}class jf{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class Sg{}class It extends Sg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cI(e,n,r):n==="array-contains"?new hI(e,r):n==="in"?new pI(e,r):n==="not-in"?new mI(e,r):n==="array-contains-any"?new gI(e,r):new It(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dI(e,r):new fI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ao(n,this.value)):n!==null&&Gn(this.value)===Gn(n)&&this.matchesComparison(Ao(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class la extends Sg{constructor(e,n){super(),this.filters=e,this.op=n,this.C=null}static create(e,n){return new la(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.C!==null||(this.C=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.C}getFilters(){return Object.assign([],this.filters)}}class cI extends It{constructor(e,n,r){super(e,n,r),this.key=Se.fromName(r.referenceValue)}matches(e){const n=Se.comparator(e.key,this.key);return this.matchesComparison(n)}}class dI extends It{constructor(e,n){super(e,"in",n),this.keys=kg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fI extends It{constructor(e,n){super(e,"not-in",n),this.keys=kg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Se.fromName(r.referenceValue))}class hI extends It{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tg(n)&&Bi(n.arrayValue,this.value)}}class pI extends It{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bi(this.value.arrayValue,n)}}class mI extends It{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Bi(this.value.arrayValue,n)}}class gI extends It{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bi(this.value.arrayValue,r))}}/**
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
 */class gu{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Be(0,0))}static max(){return new ye(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xo{constructor(e,n){this.comparator=e,this.root=n||he.EMPTY}insert(e,n){return new xo(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,he.BLACK,null,null))}remove(e){return new xo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,he.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new As(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new As(this.root,e,this.comparator,!1)}getReverseIterator(){return new As(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new As(this.root,e,this.comparator,!0)}}class As{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class he{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??he.RED,this.left=i??he.EMPTY,this.right=s??he.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new he(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return he.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new he(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Hi{constructor(e){this.comparator=e,this.data=new xo(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ff(this.data.getIterator())}getIteratorFrom(e){return new Ff(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Hi)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Hi(this.comparator);return n.data=e,n}}class Ff{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wi{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new Wi([])}unionWith(e){let n=new Hi(Ne.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wi(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wg(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!rl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hi(n)}setAll(e){let n=Ne.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=hi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());rl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ro(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];rl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){aa(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(hi(this.value))}}/**
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
 */class Kt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Kt(e,0,ye.min(),ye.min(),ye.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Kt(e,1,n,ye.min(),r,i,0)}static newNoDocument(e,n){return new Kt(e,2,n,ye.min(),ye.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new Kt(e,3,n,ye.min(),ye.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vI{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.S=null}}function $f(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vI(t,e,n,r,i,s,o)}/**
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
 */class yI{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.N=null,this.O=null,this.q=null,this.startAt,this.endAt}}function _I(t){const e=oa(t);if(e.N===null){e.N=[];const n=new Set;for(const s of e.explicitOrderBy)e.N.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Hi(Ne.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.N.push(new gu(s,r))}),n.has(Ne.keyField().canonicalString())||e.N.push(new gu(Ne.keyField(),r))}return e.N}function wI(t){const e=oa(t);return e.O||(e.O=EI(e,_I(t))),e.O}function EI(t,e){if(t.limitType==="F")return $f(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new gu(i.field,s)});const n=t.endAt?new jf(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new jf(t.startAt.position,t.startAt.inclusive):null;return $f(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}/**
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
 */function II(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Co(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Co(i)?"-0":i}}(t,e)}/**
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
 */class ua{constructor(){this._=void 0}}class TI extends ua{}class SI extends ua{constructor(e){super(),this.elements=e}}class kI extends ua{constructor(e){super(),this.elements=e}}class PI extends ua{constructor(e,n){super(),this.serializer=e,this.B=n}}class pi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pi}static exists(e){return new pi(void 0,e)}static updateTime(e){return new pi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class ca{}class Pg extends ca{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cg extends ca{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class CI extends ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RI extends ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const AI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),NI=(()=>({and:"AND",or:"OR"}))();class OI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function DI(t,e){return vu(t,e.toTimestamp())}function zf(t){return yn(!!t),ye.fromTimestamp(function(n){const r=qn(n);return new Be(r.seconds,r.nanos)}(t))}function Ac(t,e){return function(r){return new ue(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function yu(t,e){return Ac(t.databaseId,e.path)}function LI(t,e){const n=function(i){const s=ue.fromString(i);return yn(Ag(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new N(V,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(V,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Se(function(i){return yn(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(n))}function Bf(t,e){return Ac(t.databaseId,e)}function MI(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hf(t,e,n){return{name:yu(t,e),fields:n.value.mapValue.fields}}function VI(t,e){let n;if(e instanceof Pg)n={update:Hf(t,e.key,e.value)};else if(e instanceof CI)n={delete:yu(t,e.key)};else if(e instanceof Cg)n={update:Hf(t,e.key,e.data),updateMask:zI(e.fieldMask)};else{if(!(e instanceof RI))return Y();n={verify:yu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof TI)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof SI)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof kI)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof PI)return{fieldPath:o.field.canonicalString(),increment:a.B};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:DI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function UI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Bf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Bf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Rg(la.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:sr(h.field),direction:jI(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||rI(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function jI(t){return AI[t]}function FI(t){return xI[t]}function $I(t){return NI[t]}function sr(t){return{fieldPath:t.canonicalString()}}function Rg(t){return t instanceof It?function(n){if(n.op==="=="){if(Uf(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NAN"}};if(Vf(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Uf(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NOT_NAN"}};if(Vf(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(n.field),op:FI(n.op),value:n.value}}}(t):t instanceof la?function(n){const r=n.getFilters().map(i=>Rg(i));return r.length===1?r[0]:{compositeFilter:{op:$I(n.op),filters:r}}}(t):Y()}function zI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ag(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function xc(t){return new OI(t,!0)}/**
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
 */class BI extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.Y=!1}Z(){if(this.Y)throw new N(Dr,"The client has already been terminated.")}R(e,n,r){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.R(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===mu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(fi,i.toString())})}g(e,n,r,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.g(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===mu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(fi,s.toString())})}terminate(){this.Y=!0}}async function HI(t,e){const n=oa(t),r=MI(n.serializer)+"/documents",i={writes:e.map(s=>VI(n.serializer,s))};await n.R("Commit",r,i)}async function WI(t,e){const n=oa(t),r=UI(n.serializer,wI(e));return(await n.g("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(o,a,l){const u=LI(o,a.name),c=zf(a.updateTime),h=a.createTime?zf(a.createTime):ye.min(),m=new mt({mapValue:{fields:a.fields}}),y=Kt.newFoundDocument(u,c,h,m);return l&&y.setHasCommittedMutations(),l?y.setHasCommittedMutations():y}(n.serializer,i.document,void 0))}/**
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
 */const mi=new Map;function xg(t){if(t._terminated)throw new N(Dr,"The client has already been terminated.");if(!mi.has(t)){Po("ComponentProvider","Initializing Datastore");const e=function(s){return new sI(s,fetch.bind(null))}(function(s,o,a,l){return new eI(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,_g(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=xc(t._databaseId),r=function(s,o,a,l){return new BI(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);mi.set(t,r)}return mi.get(t)}class Wf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(V,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(V,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new N(V,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_g((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(V,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(V,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(V,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class da{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(Dr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(Dr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qE;switch(r.type){case"firstParty":return new JE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(V,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=mi.get(n);r&&(Po("ComponentProvider","Removing Datastore"),mi.delete(n),r.terminate())}(this),Promise.resolve()}}function KI(t,e){const n=typeof t=="object"?t:sa(),r=typeof t=="string"?t:e||"(default)",i=Tn(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=rg("firestore");s&&qI(i,...s)}return i}function qI(t,e,n,r={}){var i;const s=(t=Rc(t,da))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&mg("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Re.MOCK_USER;else{a=og(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new N(V,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Re(u)}t._authCredentials=new GE(new vg(a,l))}}/**
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
 */class fa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fa(this.firestore,e,this._query)}}class ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}}class Nt extends fa{constructor(e,n,r){super(e,n,function(s){return new yI(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new Se(e))}withConverter(e){return new Nt(this.firestore,e,this._path)}}function Ng(t,e,...n){if(t=de(t),yg("collection","path",e),t instanceof da){const r=ue.fromString(e,...n);return Of(r),new Nt(t,null,r)}{if(!(t instanceof ut||t instanceof Nt))throw new N(V,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Of(r),new Nt(t.firestore,null,r)}}function GI(t,e,...n){if(t=de(t),arguments.length===1&&(e=aI.D()),yg("doc","path",e),t instanceof da){const r=ue.fromString(e,...n);return Nf(r),new ut(t,null,new Se(r))}{if(!(t instanceof ut||t instanceof Nt))throw new N(V,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Nf(r),new ut(t.firestore,t instanceof Nt?t.converter:null,new Se(r))}}/**
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
 */class Lr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lr(Mt.fromBase64String(e))}catch(n){throw new N(V,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lr(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(V,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Og{constructor(e){this._methodName=e}}/**
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
 */class Oc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(V,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(V,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
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
 */const QI=/^__.*__$/;class YI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cg(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pg(e,this.data,n,this.fieldTransforms)}}function bg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class bc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new bc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.st(e),i}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.tt(),i}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return No(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(bg(this.et)&&QI.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class JI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xc(e)}ht(e,n,r,i=!1){return new bc({et:e,methodName:n,lt:r,path:Ne.emptyPath(),it:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function XI(t){const e=t._freezeSettings(),n=xc(t._databaseId);return new JI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ZI(t,e,n,r,i,s={}){const o=t.ht(s.merge||s.mergeFields?2:0,e,n,i);Vg("Data must be an object, but it was:",o,r);const a=Lg(r,o);let l,u;if(s.merge)l=new Wi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const m=e2(e,h,n);if(!o.contains(m))throw new N(V,`Field '${m}' is specified in your field mask but missing from your input data.`);n2(c,m)||c.push(m)}l=new Wi(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new YI(new mt(a),l,u)}function Dg(t,e){if(Mg(t=de(t)))return Vg("Unsupported field value:",e,t),Lg(t,e);if(t instanceof Og)return function(r,i){if(!bg(i.et))throw i._t(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i._t(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Dg(a,i.ut(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=de(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return II(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Be.fromDate(r);return{timestampValue:vu(i.serializer,s)}}if(r instanceof Be){const s=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vu(i.serializer,s)}}if(r instanceof Oc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Lr)return{bytesValue:bI(i.serializer,r._byteString)};if(r instanceof ut){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ac(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i._t(`Unsupported field value: ${Cc(r)}`)}(t,e)}function Lg(t,e){const n={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):aa(t,(r,i)=>{const s=Dg(i,e.nt(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Mg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Oc||t instanceof Lr||t instanceof ut||t instanceof Og)}function Vg(t,e,n){if(!Mg(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Cc(n);throw r==="an object"?e._t(t+" a custom object"):e._t(t+" "+r)}}function e2(t,e,n){if((e=de(e))instanceof Nc)return e._internalPath;if(typeof e=="string")return Ug(t,e);throw No("Field path arguments must be of type string or ",t,!1,void 0,n)}const t2=new RegExp("[~\\*/\\[\\]]");function Ug(t,e,n){if(e.search(t2)>=0)throw No(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nc(...e.split("."))._internalPath}catch{throw No(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function No(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(V,a+t+l)}function n2(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class r2{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(s2("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jg extends r2{data(){return super.data()}}class i2{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function s2(t,e){return typeof e=="string"?Ug(t,e):e instanceof Nc?e._internalPath:e._delegate._internalPath}/**
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
 */function o2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class a2 extends class{convertValue(n,r="none"){switch(Gn(n)){case 0:return null;case 1:return n.booleanValue;case 2:return ie(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes($i(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 10:return this.convertObject(n.mapValue,r);default:throw Y()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const i={};return aa(n,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(n){return new Oc(ie(n.latitude),ie(n.longitude))}convertArray(n,r){return(n.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(n,r){switch(r){case"previous":const i=Ig(n);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(zi(n));default:return null}}convertTimestamp(n){const r=qn(n);return new Be(r.seconds,r.nanos)}convertDocumentKey(n,r){const i=ue.fromString(n);yn(Ag(i));const s=new ji(i.get(1),i.get(3)),o=new Se(i.popFirst(5));return s.isEqual(r)||kc(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function l2(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new N(gg,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Rc(t,fa))._query);const e=xg(t.firestore),n=new a2(t.firestore);return WI(e,t._query).then(r=>{const i=r.map(s=>new jg(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new i2(t,i)})}function u2(t,e){const n=GI(t=Rc(t,Nt)),r=o2(t.converter,e),i=ZI(XI(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return HI(xg(t.firestore),[i.toMutation(n._key,pi.exists(!1))]).then(()=>n)}(function(){(function(n){$r=n})(`${rr}_lite`),dt(new et("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new da(new QE(e.getProvider("auth-internal")),new ZE(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(V,'"projectId" not provided in firebase.initializeApp.');return new ji(a.options.projectId,l)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Me("firestore-lite","4.3.0",""),Me("firestore-lite","4.3.0","esm2017")})();var c2="firebase",d2="10.5.0";/**
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
 */Me(c2,d2,"app");const f2=(t,e)=>e.some(n=>t instanceof n);let Kf,qf;function h2(){return Kf||(Kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p2(){return qf||(qf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fg=new WeakMap,_u=new WeakMap,$g=new WeakMap,il=new WeakMap,Dc=new WeakMap;function m2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fg.set(n,t)}).catch(()=>{}),Dc.set(e,t),e}function g2(t){if(_u.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_u.set(t,e)}let wu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _u.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$g.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function v2(t){wu=t(wu)}function y2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sl(this),e,...n);return $g.set(r,e.sort?e.sort():[e]),mn(r)}:p2().includes(t)?function(...e){return t.apply(sl(this),e),mn(Fg.get(this))}:function(...e){return mn(t.apply(sl(this),e))}}function _2(t){return typeof t=="function"?y2(t):(t instanceof IDBTransaction&&g2(t),f2(t,h2())?new Proxy(t,wu):t)}function mn(t){if(t instanceof IDBRequest)return m2(t);if(il.has(t))return il.get(t);const e=_2(t);return e!==t&&(il.set(t,e),Dc.set(e,t)),e}const sl=t=>Dc.get(t);function w2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=mn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(mn(o.result),l.oldVersion,l.newVersion,mn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const E2=["get","getKey","getAll","getAllKeys","count"],I2=["put","add","delete","clear"],ol=new Map;function Gf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ol.get(e))return ol.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=I2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||E2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ol.set(e,s),s}v2(t=>({...t,get:(e,n,r)=>Gf(e,n)||t.get(e,n,r),has:(e,n)=>!!Gf(e,n)||t.has(e,n)}));const zg="@firebase/installations",Lc="0.6.4";/**
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
 */const Bg=1e4,Hg=`w:${Lc}`,Wg="FIS_v2",T2="https://firebaseinstallations.googleapis.com/v1",S2=60*60*1e3,k2="installations",P2="Installations";/**
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
 */const C2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qn=new nr(k2,P2,C2);function Kg(t){return t instanceof nt&&t.code.includes("request-failed")}/**
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
 */function qg({projectId:t}){return`${T2}/projects/${t}/installations`}function Gg(t){return{token:t.token,requestStatus:2,expiresIn:A2(t.expiresIn),creationTime:Date.now()}}async function Qg(t,e){const r=(await e.json()).error;return Qn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Yg({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function R2(t,{refreshToken:e}){const n=Yg(t);return n.append("Authorization",x2(e)),n}async function Jg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function A2(t){return Number(t.replace("s","000"))}function x2(t){return`${Wg} ${t}`}/**
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
 */async function N2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=qg(t),i=Yg(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Wg,appId:t.appId,sdkVersion:Hg},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Jg(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Gg(u.authToken)}}else throw await Qg("Create Installation",l)}/**
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
 */function Xg(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function O2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const b2=/^[cdef][\w-]{21}$/,Eu="";function D2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=L2(t);return b2.test(n)?n:Eu}catch{return Eu}}function L2(t){return O2(t).substr(0,22)}/**
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
 */function ha(t){return`${t.appName}!${t.appId}`}/**
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
 */const Zg=new Map;function e0(t,e){const n=ha(t);t0(n,e),M2(n,e)}function t0(t,e){const n=Zg.get(t);if(n)for(const r of n)r(e)}function M2(t,e){const n=V2();n&&n.postMessage({key:t,fid:e}),U2()}let Ln=null;function V2(){return!Ln&&"BroadcastChannel"in self&&(Ln=new BroadcastChannel("[Firebase] FID Change"),Ln.onmessage=t=>{t0(t.data.key,t.data.fid)}),Ln}function U2(){Zg.size===0&&Ln&&(Ln.close(),Ln=null)}/**
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
 */const j2="firebase-installations-database",F2=1,Yn="firebase-installations-store";let al=null;function Mc(){return al||(al=w2(j2,F2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yn)}}})),al}async function Oo(t,e){const n=ha(t),i=(await Mc()).transaction(Yn,"readwrite"),s=i.objectStore(Yn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&e0(t,e.fid),e}async function n0(t){const e=ha(t),r=(await Mc()).transaction(Yn,"readwrite");await r.objectStore(Yn).delete(e),await r.done}async function pa(t,e){const n=ha(t),i=(await Mc()).transaction(Yn,"readwrite"),s=i.objectStore(Yn),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&e0(t,a.fid),a}/**
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
 */async function Vc(t){let e;const n=await pa(t.appConfig,r=>{const i=$2(r),s=z2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Eu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function $2(t){const e=t||{fid:D2(),registrationStatus:0};return r0(e)}function z2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Qn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=B2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:H2(t)}:{installationEntry:e}}async function B2(t,e){try{const n=await N2(t,e);return Oo(t.appConfig,n)}catch(n){throw Kg(n)&&n.customData.serverCode===409?await n0(t.appConfig):await Oo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function H2(t){let e=await Qf(t.appConfig);for(;e.registrationStatus===1;)await Xg(100),e=await Qf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vc(t);return r||n}return e}function Qf(t){return pa(t,e=>{if(!e)throw Qn.create("installation-not-found");return r0(e)})}function r0(t){return W2(t)?{fid:t.fid,registrationStatus:0}:t}function W2(t){return t.registrationStatus===1&&t.registrationTime+Bg<Date.now()}/**
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
 */async function K2({appConfig:t,heartbeatServiceProvider:e},n){const r=q2(t,n),i=R2(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Hg,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Jg(()=>fetch(r,a));if(l.ok){const u=await l.json();return Gg(u)}else throw await Qg("Generate Auth Token",l)}function q2(t,{fid:e}){return`${qg(t)}/${e}/authTokens:generate`}/**
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
 */async function Uc(t,e=!1){let n;const r=await pa(t.appConfig,s=>{if(!i0(s))throw Qn.create("not-registered");const o=s.authToken;if(!e&&Y2(o))return s;if(o.requestStatus===1)return n=G2(t,e),s;{if(!navigator.onLine)throw Qn.create("app-offline");const a=X2(s);return n=Q2(t,a),a}});return n?await n:r.authToken}async function G2(t,e){let n=await Yf(t.appConfig);for(;n.authToken.requestStatus===1;)await Xg(100),n=await Yf(t.appConfig);const r=n.authToken;return r.requestStatus===0?Uc(t,e):r}function Yf(t){return pa(t,e=>{if(!i0(e))throw Qn.create("not-registered");const n=e.authToken;return Z2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Q2(t,e){try{const n=await K2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Oo(t.appConfig,r),n}catch(n){if(Kg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await n0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Oo(t.appConfig,r)}throw n}}function i0(t){return t!==void 0&&t.registrationStatus===2}function Y2(t){return t.requestStatus===2&&!J2(t)}function J2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+S2}function X2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Z2(t){return t.requestStatus===1&&t.requestTime+Bg<Date.now()}/**
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
 */async function eT(t){const e=t,{installationEntry:n,registrationPromise:r}=await Vc(e);return r?r.catch(console.error):Uc(e).catch(console.error),n.fid}/**
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
 */async function tT(t,e=!1){const n=t;return await nT(n),(await Uc(n,e)).token}async function nT(t){const{registrationPromise:e}=await Vc(t);e&&await e}/**
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
 */function rT(t){if(!t||!t.options)throw ll("App Configuration");if(!t.name)throw ll("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ll(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ll(t){return Qn.create("missing-app-config-values",{valueName:t})}/**
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
 */const s0="installations",iT="installations-internal",sT=t=>{const e=t.getProvider("app").getImmediate(),n=rT(e),r=Tn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},oT=t=>{const e=t.getProvider("app").getImmediate(),n=Tn(e,s0).getImmediate();return{getId:()=>eT(n),getToken:i=>tT(n,i)}};function aT(){dt(new et(s0,sT,"PUBLIC")),dt(new et(iT,oT,"PRIVATE"))}aT();Me(zg,Lc);Me(zg,Lc,"esm2017");/**
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
 */const bo="analytics",lT="firebase_id",uT="origin",cT=60*1e3,dT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",jc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ve=new ia("@firebase/analytics");/**
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
 */const fT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},He=new nr("analytics","Analytics",fT);/**
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
 */function hT(t){if(!t.startsWith(jc)){const e=He.create("invalid-gtag-resource",{gtagURL:t});return Ve.warn(e.message),""}return t}function o0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function pT(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function mT(t,e){const n=pT("firebase-js-sdk-policy",{createScriptURL:hT}),r=document.createElement("script"),i=`${jc}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function gT(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function vT(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await o0(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Ve.error(a)}t("config",i,s)}async function yT(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await o0(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ve.error(s)}}function _T(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await yT(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await vT(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Ve.error(a)}}return i}function wT(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=_T(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function ET(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(jc)&&n.src.includes(t))return n;return null}/**
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
 */const IT=30,TT=1e3;class ST{constructor(e={},n=TT){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const a0=new ST;function kT(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function PT(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:kT(r)},s=dT.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw He.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function CT(t,e=a0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw He.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw He.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new xT;return setTimeout(async()=>{a.abort()},n!==void 0?n:cT),l0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function l0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=a0){var s;const{appId:o,measurementId:a}=t;try{await RT(r,e)}catch(l){if(a)return Ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await PT(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!AT(u)){if(i.deleteThrottleMetadata(o),a)return Ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?If(n,i.intervalMillis,IT):If(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),Ve.debug(`Calling attemptFetch again in ${c} millis`),l0(t,h,r,i)}}function RT(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(He.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function AT(t){if(!(t instanceof nt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class xT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function NT(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function OT(){if(lg())try{await ug()}catch(t){return Ve.warn(He.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ve.warn(He.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bT(t,e,n,r,i,s,o){var a;const l=CT(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&Ve.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>Ve.error(y)),e.push(l);const u=OT().then(y=>{if(y)return r.getId()}),[c,h]=await Promise.all([l,u]);ET(s)||mT(s,c.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[uT]="firebase",m.update=!0,h!=null&&(m[lT]=h),i("config",c.measurementId,m),c.measurementId}/**
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
 */class DT{constructor(e){this.app=e}_delete(){return delete gi[this.app.options.appId],Promise.resolve()}}let gi={},Jf=[];const Xf={};let ul="dataLayer",LT="gtag",Zf,u0,eh=!1;function MT(){const t=[];if(ag()&&t.push("This is a browser extension environment."),Ew()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=He.create("invalid-analytics-context",{errorInfo:e});Ve.warn(n.message)}}function VT(t,e,n){MT();const r=t.options.appId;if(!r)throw He.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw He.create("no-api-key");if(gi[r]!=null)throw He.create("already-exists",{id:r});if(!eh){gT(ul);const{wrappedGtag:s,gtagCore:o}=wT(gi,Jf,Xf,ul,LT);u0=s,Zf=o,eh=!0}return gi[r]=bT(t,Jf,Xf,e,Zf,ul,n),new DT(t)}function UT(t=sa()){t=de(t);const e=Tn(t,bo);return e.isInitialized()?e.getImmediate():jT(t)}function jT(t,e={}){const n=Tn(t,bo);if(n.isInitialized()){const i=n.getImmediate();if(Vi(e,n.getOptions()))return i;throw He.create("already-initialized")}return n.initialize({options:e})}function FT(t,e,n,r){t=de(t),NT(u0,gi[t.app.options.appId],e,n,r).catch(i=>Ve.error(i))}const th="@firebase/analytics",nh="0.10.0";function $T(){dt(new et(bo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return VT(r,i,n)},"PUBLIC")),dt(new et("analytics-internal",t,"PRIVATE")),Me(th,nh),Me(th,nh,"esm2017");function t(e){try{const n=e.getProvider(bo).getImmediate();return{logEvent:(r,i,s)=>FT(n,r,i,s)}}catch(n){throw He.create("interop-component-reg-failed",{reason:n})}}}$T();function Fc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function c0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zT=c0,d0=new nr("auth","Firebase",c0());/**
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
 */const Do=new ia("@firebase/auth");function BT(t,...e){Do.logLevel<=j.WARN&&Do.warn(`Auth (${rr}): ${t}`,...e)}function Ws(t,...e){Do.logLevel<=j.ERROR&&Do.error(`Auth (${rr}): ${t}`,...e)}/**
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
 */function Et(t,...e){throw $c(t,...e)}function _t(t,...e){return $c(t,...e)}function f0(t,e,n){const r=Object.assign(Object.assign({},zT()),{[e]:n});return new nr("auth","Firebase",r).create(e,{appName:t.name})}function HT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(t,"argument-error"),f0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $c(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return d0.create(t,...e)}function x(t,e,...n){if(!t)throw $c(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ws(e),new Error(e)}function Vt(t,e){t||Rt(e)}/**
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
 */function Iu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WT(){return rh()==="http:"||rh()==="https:"}function rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function KT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WT()||ag()||"connection"in navigator)?navigator.onLine:!0}function qT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ns{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vt(n>e,"Short delay should be less than long delay!"),this.isMobile=vw()||_w()}get(){return KT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zc(t,e){Vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class h0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QT=new ns(3e4,6e4);function p0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rs(t,e,n,r,i={}){return m0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ts(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),h0.fetch()(g0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function m0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GT),e);try{const i=new JT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xs(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xs(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw f0(t,c,u);Et(t,c)}}catch(i){if(i instanceof nt)throw i;Et(t,"network-request-failed",{message:String(i)})}}async function YT(t,e,n,r,i={}){const s=await rs(t,e,n,r,i);return"mfaPendingCredential"in s&&Et(t,"multi-factor-auth-required",{_serverResponse:s}),s}function g0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zc(t.config,i):`${t.config.apiScheme}://${i}`}class JT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),QT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_t(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function XT(t,e){return rs(t,"POST","/v1/accounts:delete",e)}async function ZT(t,e){return rs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eS(t,e=!1){const n=de(t),r=await n.getIdToken(e),i=Bc(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vi(cl(i.auth_time)),issuedAtTime:vi(cl(i.iat)),expirationTime:vi(cl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cl(t){return Number(t)*1e3}function Bc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ws("JWT malformed, contained fewer than 3 sections"),null;try{const i=tg(n);return i?JSON.parse(i):(Ws("Failed to decode base64 JWT payload"),null)}catch(i){return Ws("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function tS(t){const e=Bc(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ki(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nt&&nS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class v0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vi(this.lastLoginAt),this.creationTime=vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ki(t,ZT(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?oS(s.providerUserInfo):[],a=sS(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new v0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function iS(t){const e=de(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function oS(t){return t.map(e=>{var{providerId:n}=e,r=Fc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function aS(t,e){const n=await m0(t,{},async()=>{const r=ts({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=g0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",h0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qi;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qi,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function zt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Fc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new v0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ki(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eS(this,e)}reload(){return iS(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ki(this,XT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:f,emailVerified:v,isAnonymous:E,providerData:T,stsTokenManager:P}=n;x(f&&P,e,"internal-error");const A=qi.fromJSON(this.name,P);x(typeof f=="string",e,"internal-error"),zt(h,e.name),zt(m,e.name),x(typeof v=="boolean",e,"internal-error"),x(typeof E=="boolean",e,"internal-error"),zt(y,e.name),zt(_,e.name),zt(w,e.name),zt(k,e.name),zt(p,e.name),zt(d,e.name);const F=new jn({uid:f,auth:e,email:m,emailVerified:v,displayName:h,isAnonymous:E,photoURL:_,phoneNumber:y,tenantId:w,stsTokenManager:A,createdAt:p,lastLoginAt:d});return T&&Array.isArray(T)&&(F.providerData=T.map(b=>Object.assign({},b))),k&&(F._redirectEventId=k),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new qi;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Lo(s),s}}/**
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
 */const ih=new Map;function At(t){Vt(t instanceof Function,"Expected a class definition");let e=ih.get(t);return e?(Vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ih.set(t,e),e)}/**
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
 */class y0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}y0.type="NONE";const sh=y0;/**
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
 */function Ks(t,e,n){return`firebase:${t}:${e}:${n}`}class Sr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ks(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ks("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Sr(At(sh),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||At(sh);const o=Ks(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=jn._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Sr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Sr(s,e,r))}}/**
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
 */function oh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(E0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T0(e))return"Blackberry";if(S0(e))return"Webos";if(Hc(e))return"Safari";if((e.includes("chrome/")||w0(e))&&!e.includes("edge/"))return"Chrome";if(I0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _0(t=Ee()){return/firefox\//i.test(t)}function Hc(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function w0(t=Ee()){return/crios\//i.test(t)}function E0(t=Ee()){return/iemobile/i.test(t)}function I0(t=Ee()){return/android/i.test(t)}function T0(t=Ee()){return/blackberry/i.test(t)}function S0(t=Ee()){return/webos/i.test(t)}function ma(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lS(t=Ee()){var e;return ma(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uS(){return ww()&&document.documentMode===10}function k0(t=Ee()){return ma(t)||I0(t)||S0(t)||T0(t)||/windows phone/i.test(t)||E0(t)}function cS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function P0(t,e=[]){let n;switch(t){case"Browser":n=oh(Ee());break;case"Worker":n=`${oh(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rr}/${r}`}/**
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
 */class dS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function fS(t,e={}){return rs(t,"GET","/v2/passwordPolicy",p0(t,e))}/**
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
 */const hS=6;class pS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class mS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ah(this),this.idTokenSubscription=new ah(this),this.beforeStateQueue=new dS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Sr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?de(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fS(this),n=new pS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&At(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Sr.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=P0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ga(t){return de(t)}class ah{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pw(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function gS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_t("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",gS().appendChild(r)})}function yS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function _S(t,e){const n=Tn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vi(s,e??{}))return i;Et(i,"already-initialized")}return n.initialize({options:e})}function wS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(At);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ES(t,e,n){const r=ga(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=C0(e),{host:o,port:a}=IS(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||TS()}function C0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IS(t){const e=C0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:lh(o)}}}function lh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class R0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}/**
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
 */async function kr(t,e){return YT(t,"POST","/v1/accounts:signInWithIdp",p0(t,e))}/**
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
 */const SS="http://localhost";class Jn extends R0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Fc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Jn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kr(e,n)}buildRequest(){const e={requestUri:SS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ts(n)}return e}}/**
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
 */class Wc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class is extends Wc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qt extends is{constructor(){super("facebook.com")}static credential(e){return Jn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
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
 */class kt extends is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
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
 */class Yt extends is{constructor(){super("github.com")}static credential(e){return Jn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
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
 */class Jt extends is{constructor(){super("twitter.com")}static credential(e,n){return Jn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
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
 */class Mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jn._fromIdTokenResponse(e,r,i),o=uh(r);return new Mr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=uh(r);return new Mr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function uh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Mo extends nt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mo(e,n,r,i)}}function A0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(t,s,e,r):s})}async function kS(t,e,n=!1){const r=await Ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mr._forOperation(t,"link",r)}/**
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
 */async function PS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ki(t,A0(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=Bc(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),Mr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),s}}/**
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
 */async function CS(t,e,n=!1){const r="signIn",i=await A0(t,r,e),s=await Mr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function RS(t,e,n,r){return de(t).onIdTokenChanged(e,n,r)}function AS(t,e,n){return de(t).beforeAuthStateChanged(e,n)}function xS(t,e,n,r){return de(t).onAuthStateChanged(e,n,r)}const Vo="__sak";/**
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
 */class x0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vo,"1"),this.storage.removeItem(Vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function NS(){const t=Ee();return Hc(t)||ma(t)}const OS=1e3,bS=10;class N0 extends x0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=NS()&&cS(),this.fallbackToPolling=k0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);uS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}N0.type="LOCAL";const DS=N0;/**
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
 */class O0 extends x0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}O0.type="SESSION";const b0=O0;/**
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
 */function LS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await LS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}va.receivers=[];/**
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
 */function Kc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class MS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Kc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wt(){return window}function VS(t){wt().location.href=t}/**
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
 */function D0(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function US(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function FS(){return D0()?self:null}/**
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
 */const L0="firebaseLocalStorageDb",$S=1,Uo="firebaseLocalStorage",M0="fbase_key";class ss{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ya(t,e){return t.transaction([Uo],e?"readwrite":"readonly").objectStore(Uo)}function zS(){const t=indexedDB.deleteDatabase(L0);return new ss(t).toPromise()}function Tu(){const t=indexedDB.open(L0,$S);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uo,{keyPath:M0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uo)?e(r):(r.close(),await zS(),e(await Tu()))})})}async function ch(t,e,n){const r=ya(t,!0).put({[M0]:e,value:n});return new ss(r).toPromise()}async function BS(t,e){const n=ya(t,!1).get(e),r=await new ss(n).toPromise();return r===void 0?null:r.value}function dh(t,e){const n=ya(t,!0).delete(e);return new ss(n).toPromise()}const HS=800,WS=3;class V0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=va._getInstance(FS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await US(),!this.activeServiceWorker)return;this.sender=new MS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tu();return await ch(e,Vo,"1"),await dh(e,Vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ch(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ya(i,!1).getAll();return new ss(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}V0.type="LOCAL";const KS=V0;new ns(3e4,6e4);/**
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
 */function U0(t,e){return e?At(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qc extends R0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qS(t){return CS(t.auth,new qc(t),t.bypassAuthState)}function GS(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),PS(n,new qc(t),t.bypassAuthState)}async function QS(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),kS(n,new qc(t),t.bypassAuthState)}/**
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
 */class j0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qS;case"linkViaPopup":case"linkViaRedirect":return QS;case"reauthViaPopup":case"reauthViaRedirect":return GS;default:Et(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const YS=new ns(2e3,1e4);async function JS(t,e,n){const r=ga(t);HT(t,e,Wc);const i=U0(r,n);return new Mn(r,"signInViaPopup",e,i).executeNotNull()}class Mn extends j0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=Kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YS.get())};e()}}Mn.currentPopupAction=null;/**
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
 */const XS="pendingRedirect",qs=new Map;class ZS extends j0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qs.get(this.auth._key());if(!e){try{const r=await ek(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qs.set(this.auth._key(),e)}return this.bypassAuthState||qs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ek(t,e){const n=rk(e),r=nk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tk(t,e){qs.set(t._key(),e)}function nk(t){return At(t._redirectPersistence)}function rk(t){return Ks(XS,t.config.apiKey,t.name)}async function ik(t,e,n=!1){const r=ga(t),i=U0(r,e),o=await new ZS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const sk=10*60*1e3;class ok{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ak(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!F0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sk&&this.cachedEventUids.clear(),this.cachedEventUids.has(fh(e))}saveEventToCache(e){this.cachedEventUids.add(fh(e)),this.lastProcessedEventTime=Date.now()}}function fh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function F0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ak(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F0(t);default:return!1}}/**
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
 */async function lk(t,e={}){return rs(t,"GET","/v1/projects",e)}/**
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
 */const uk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ck=/^https?/;async function dk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lk(t);for(const n of e)try{if(fk(n))return}catch{}Et(t,"unauthorized-domain")}function fk(t){const e=Iu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ck.test(n))return!1;if(uk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const hk=new ns(3e4,6e4);function hh(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pk(t){return new Promise((e,n)=>{var r,i,s;function o(){hh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hh(),n(_t(t,"network-request-failed"))},timeout:hk.get()})}if(!((i=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wt().gapi)===null||s===void 0)&&s.load)o();else{const a=yS("iframefcb");return wt()[a]=()=>{gapi.load?o():n(_t(t,"network-request-failed"))},vS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gs=null,e})}let Gs=null;function mk(t){return Gs=Gs||pk(t),Gs}/**
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
 */const gk=new ns(5e3,15e3),vk="__/auth/iframe",yk="emulator/auth/iframe",_k={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ek(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zc(e,yk):`https://${t.config.authDomain}/${vk}`,r={apiKey:e.apiKey,appName:t.name,v:rr},i=wk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ts(r).slice(1)}`}async function Ik(t){const e=await mk(t),n=wt().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:Ek(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_k,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_t(t,"network-request-failed"),a=wt().setTimeout(()=>{s(o)},gk.get());function l(){wt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Tk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sk=500,kk=600,Pk="_blank",Ck="http://localhost";class ph{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rk(t,e,n,r=Sk,i=kk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Tk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ee().toLowerCase();n&&(a=w0(u)?Pk:n),_0(u)&&(e=e||Ck,l.scrollbars="yes");const c=Object.entries(l).reduce((m,[y,_])=>`${m}${y}=${_},`,"");if(lS(u)&&a!=="_self")return Ak(e||"",a),new ph(null);const h=window.open(e||"",a,c);x(h,t,"popup-blocked");try{h.focus()}catch{}return new ph(h)}function Ak(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xk="__/auth/handler",Nk="emulator/auth/handler",Ok=encodeURIComponent("fac");async function mh(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rr,eventId:i};if(e instanceof Wc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof is){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Ok}=${encodeURIComponent(l)}`:"";return`${bk(t)}?${ts(a).slice(1)}${u}`}function bk({config:t}){return t.emulator?zc(t,Nk):`https://${t.authDomain}/${xk}`}/**
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
 */const dl="webStorageSupport";class Dk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=b0,this._completeRedirectFn=ik,this._overrideRedirectResult=tk}async _openPopup(e,n,r,i){var s;Vt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mh(e,n,r,Iu(),i);return Rk(e,o,Kc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mh(e,n,r,Iu(),i);return VS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ik(e),r=new ok(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dl,{type:dl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dl];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return k0()||Hc()||ma()}}const Lk=Dk;var gh="@firebase/auth",vh="1.3.0";/**
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
 */class Mk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Uk(t){dt(new et("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:P0(t)},u=new mS(r,i,s,l);return wS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dt(new et("auth-internal",e=>{const n=ga(e.getProvider("auth").getImmediate());return(r=>new Mk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Me(gh,vh,Vk(t)),Me(gh,vh,"esm2017")}/**
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
 */const jk=5*60,Fk=sg("authIdTokenMaxAge")||jk;let yh=null;const $k=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Fk)return;const i=n==null?void 0:n.token;yh!==i&&(yh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $0(t=sa()){const e=Tn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_S(t,{popupRedirectResolver:Lk,persistence:[KS,DS,b0]}),r=sg("authTokenSyncURL");if(r){const s=$k(r);AS(n,s,()=>s(n.currentUser)),RS(n,o=>s(o))}const i=ng("auth");return i&&ES(n,`http://${i}`),n}Uk("Browser");/**
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
 */const z0="firebasestorage.googleapis.com",B0="storageBucket",zk=2*60*1e3,Bk=10*60*1e3;/**
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
 */class X extends nt{constructor(e,n,r=0){super(fl(e),`Firebase Storage: ${n} (${fl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,X.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var J;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(J||(J={}));function fl(t){return"storage/"+t}function Gc(){const t="An unknown error occurred, please check the error payload for server response.";return new X(J.UNKNOWN,t)}function Hk(t){return new X(J.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Wk(t){return new X(J.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Kk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new X(J.UNAUTHENTICATED,t)}function qk(){return new X(J.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Gk(t){return new X(J.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Qk(){return new X(J.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Yk(){return new X(J.CANCELED,"User canceled the upload/download.")}function Jk(t){return new X(J.INVALID_URL,"Invalid URL '"+t+"'.")}function Xk(t){return new X(J.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zk(){return new X(J.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+B0+"' property when initializing the app?")}function eP(){return new X(J.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tP(){return new X(J.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function nP(t){return new X(J.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Su(t){return new X(J.INVALID_ARGUMENT,t)}function H0(){return new X(J.APP_DELETED,"The Firebase app was deleted.")}function rP(t){return new X(J.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function yi(t,e){return new X(J.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Xr(t){throw new X(J.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class $e{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=$e.makeFromUrl(e,n)}catch{return new $e(e,"")}if(r.path==="")return r;throw Xk(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${h}/${c}/b/${i}/o${m}`,"i"),_={bucket:1,path:3},w=n===z0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",p=new RegExp(`^https?://${w}/${i}/${k}`,"i"),f=[{regex:a,indices:l,postModify:s},{regex:y,indices:_,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<f.length;v++){const E=f[v],T=E.regex.exec(e);if(T){const P=T[E.indices.bucket];let A=T[E.indices.path];A||(A=""),r=new $e(P,A),E.postModify(r);break}}if(r==null)throw Jk(e);return r}}class iP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function sP(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...k){u||(u=!0,e.apply(null,k))}function h(k){i=setTimeout(()=>{i=null,t(y,l())},k)}function m(){s&&clearTimeout(s)}function y(k,...p){if(u){m();return}if(k){m(),c.call(null,k,...p);return}if(l()||o){m(),c.call(null,k,...p);return}r<64&&(r*=2);let f;a===1?(a=2,f=0):f=(r+Math.random())*1e3,h(f)}let _=!1;function w(k){_||(_=!0,m(),!u&&(i!==null?(k||(a=2),clearTimeout(i),h(0)):k||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function oP(t){t(!1)}/**
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
 */function aP(t){return t!==void 0}function lP(t){return typeof t=="object"&&!Array.isArray(t)}function Qc(t){return typeof t=="string"||t instanceof String}function _h(t){return Yc()&&t instanceof Blob}function Yc(){return typeof Blob<"u"&&!yw()}function wh(t,e,n,r){if(r<e)throw Su(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Su(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Jc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function W0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Fn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Fn||(Fn={}));/**
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
 */function uP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class cP{constructor(e,n,r,i,s,o,a,l,u,c,h,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,_)=>{this.resolve_=y,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ns(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Fn.NO_ERROR,l=s.getStatus();if(!a||uP(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Fn.ABORT;r(!1,new Ns(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ns(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());aP(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Gc();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?H0():Yk();o(l)}else{const l=Qk();o(l)}};this.canceled_?n(!1,new Ns(!1,null,!0)):this.backoffId_=sP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ns{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function dP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mP(t,e,n,r,i,s,o=!0){const a=W0(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return hP(u,e),dP(u,n),fP(u,s),pP(u,r),new cP(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function gP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vP(...t){const e=gP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Yc())return new Blob(t);throw new X(J.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function _P(t){if(typeof atob>"u")throw nP("base-64");return atob(t)}/**
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
 */const gt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hl{constructor(e,n){this.data=e,this.contentType=n||null}}function wP(t,e){switch(t){case gt.RAW:return new hl(K0(e));case gt.BASE64:case gt.BASE64URL:return new hl(q0(t,e));case gt.DATA_URL:return new hl(IP(e),TP(e))}throw Gc()}function K0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function EP(t){let e;try{e=decodeURIComponent(t)}catch{throw yi(gt.DATA_URL,"Malformed data URL.")}return K0(e)}function q0(t,e){switch(t){case gt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw yi(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case gt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw yi(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_P(e)}catch(i){throw i.message.includes("polyfill")?i:yi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class G0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw yi(gt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=SP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function IP(t){const e=new G0(t);return e.base64?q0(gt.BASE64,e.rest):EP(e.rest)}function TP(t){return new G0(t).contentType}function SP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Xt{constructor(e,n){let r=0,i="";_h(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(_h(this.data_)){const r=this.data_,i=yP(r,e,n);return i===null?null:new Xt(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Xt(r,!0)}}static getBlob(...e){if(Yc()){const n=e.map(r=>r instanceof Xt?r.data_:r);return new Xt(vP.apply(null,n))}else{const n=e.map(o=>Qc(o)?wP(gt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Xt(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Q0(t){let e;try{e=JSON.parse(t)}catch{return null}return lP(e)?e:null}/**
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
 */function kP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function PP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Y0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function CP(t,e){return e}class Ie{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||CP}}let Os=null;function RP(t){return!Qc(t)||t.length<2?t:Y0(t)}function J0(){if(Os)return Os;const t=[];t.push(new Ie("bucket")),t.push(new Ie("generation")),t.push(new Ie("metageneration")),t.push(new Ie("name","fullPath",!0));function e(s,o){return RP(o)}const n=new Ie("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ie("size");return i.xform=r,t.push(i),t.push(new Ie("timeCreated")),t.push(new Ie("updated")),t.push(new Ie("md5Hash",null,!0)),t.push(new Ie("cacheControl",null,!0)),t.push(new Ie("contentDisposition",null,!0)),t.push(new Ie("contentEncoding",null,!0)),t.push(new Ie("contentLanguage",null,!0)),t.push(new Ie("contentType",null,!0)),t.push(new Ie("metadata","customMetadata",!0)),Os=t,Os}function AP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new $e(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function xP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return AP(r,t),r}function X0(t,e,n){const r=Q0(e);return r===null?null:xP(t,r,n)}function NP(t,e,n,r){const i=Q0(e);if(i===null||!Qc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,m="/b/"+o(c)+"/o/"+o(h),y=Jc(m,n,r),_=W0({alt:"media",token:u});return y+_})[0]}function OP(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Z0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ev(t){if(!t)throw Gc()}function bP(t,e){function n(r,i){const s=X0(t,i,e);return ev(s!==null),s}return n}function DP(t,e){function n(r,i){const s=X0(t,i,e);return ev(s!==null),NP(s,i,t.host,t._protocol)}return n}function tv(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=qk():i=Kk():n.getStatus()===402?i=Wk(t.bucket):n.getStatus()===403?i=Gk(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function LP(t){const e=tv(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Hk(t.path)),s.serverResponse=i.serverResponse,s}return n}function MP(t,e,n){const r=e.fullServerUrl(),i=Jc(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Z0(i,s,DP(t,n),o);return a.errorHandler=LP(e),a}function VP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function UP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=VP(null,e)),r}function jP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let f="";for(let v=0;v<2;v++)f=f+Math.random().toString().slice(2);return f}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=UP(e,r,i),c=OP(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",y=Xt.getBlob(h,r,m);if(y===null)throw eP();const _={name:u.fullPath},w=Jc(s,t.host,t._protocol),k="POST",p=t.maxUploadRetryTime,d=new Z0(w,k,bP(t,n),p);return d.urlParams=_,d.headers=o,d.body=y.uploadData(),d.errorHandler=tv(e),d}class FP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Fn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Fn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Fn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Xr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $P extends FP{initXhr(){this.xhr_.responseType="text"}}function nv(){return new $P}/**
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
 */class Xn{constructor(e,n){this._service=e,n instanceof $e?this._location=n:this._location=$e.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xn(e,n)}get root(){const e=new $e(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y0(this._location.path)}get storage(){return this._service}get parent(){const e=kP(this._location.path);if(e===null)return null;const n=new $e(this._location.bucket,e);return new Xn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rP(e)}}function zP(t,e,n){t._throwIfRoot("uploadBytes");const r=jP(t.storage,t._location,J0(),new Xt(e,!0),n);return t.storage.makeRequestWithTokens(r,nv).then(i=>({metadata:i,ref:t}))}function BP(t){t._throwIfRoot("getDownloadURL");const e=MP(t.storage,t._location,J0());return t.storage.makeRequestWithTokens(e,nv).then(n=>{if(n===null)throw tP();return n})}function HP(t,e){const n=PP(t._location.path,e),r=new $e(t._location.bucket,n);return new Xn(t.storage,r)}/**
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
 */function WP(t){return/^[A-Za-z]+:\/\//.test(t)}function KP(t,e){return new Xn(t,e)}function rv(t,e){if(t instanceof Xc){const n=t;if(n._bucket==null)throw Zk();const r=new Xn(n,n._bucket);return e!=null?rv(r,e):r}else return e!==void 0?HP(t,e):t}function qP(t,e){if(e&&WP(e)){if(t instanceof Xc)return KP(t,e);throw Su("To use ref(service, url), the first argument must be a Storage instance.")}else return rv(t,e)}function Eh(t,e){const n=e==null?void 0:e[B0];return n==null?null:$e.makeFromBucketSpec(n,t)}function GP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:og(i,t.app.options.projectId))}class Xc{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=z0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zk,this._maxUploadRetryTime=Bk,this._requests=new Set,i!=null?this._bucket=$e.makeFromBucketSpec(i,this._host):this._bucket=Eh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$e.makeFromBucketSpec(this._url,e):this._bucket=Eh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xn(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new iP(H0());{const o=mP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ih="@firebase/storage",Th="0.11.2";/**
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
 */const iv="storage";function QP(t,e,n){return t=de(t),zP(t,e,n)}function YP(t){return t=de(t),BP(t)}function JP(t,e){return t=de(t),qP(t,e)}function XP(t=sa(),e){t=de(t);const r=Tn(t,iv).getImmediate({identifier:e}),i=rg("storage");return i&&ZP(r,...i),r}function ZP(t,e,n,r={}){GP(t,e,n,r)}function eC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Xc(n,r,i,e,rr)}function tC(){dt(new et(iv,eC,"PUBLIC").setMultipleInstances(!0)),Me(Ih,Th,""),Me(Ih,Th,"esm2017")}tC();const nC={apiKey:"AIzaSyAkWlAQ9FcDGYrJv4QAyPF_ivTvaX0N_ME",authDomain:"reacth-portfolio-dashboard.firebaseapp.com",projectId:"reacth-portfolio-dashboard",storageBucket:"reacth-portfolio-dashboard.appspot.com",messagingSenderId:"665216039004",appId:"1:665216039004:web:e176d0cdfb79a47b0a4e99",measurementId:"G-V232T6K5DR"},Zc=fg(nC);UT(Zc);const sv=$0(),rC=new kt,ov=KI(Zc),iC=XP(Zc),sC=()=>JS(sv,rC);function oC(){const[t,e]=S.useState("text-animate"),[n,r]=S.useState([]),i="Some of my projects...".split("");S.useEffect(()=>{s()},[]),S.useEffect(()=>{setTimeout(()=>e("text-animate-hover"),4e3)},[]);const s=async()=>{const a=await l2(Ng(ov,"portfolio"));r(a.docs.map(l=>l.data()))},o=a=>g.jsx(g.Fragment,{children:g.jsx("div",{className:"images-container",children:a.map((l,u)=>g.jsxs("div",{className:"image-box",children:[g.jsx("img",{className:"portfolio-image",src:l.image,alt:"portfolio project"}),g.jsxs("div",{className:"content",children:[g.jsx("p",{className:"title",children:l.name}),g.jsx("h4",{className:"description",children:l.description}),g.jsx("button",{className:"button",onClick:()=>window.open(l.url),children:"View"})]})]},u))})});return g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"container portfolio-page",children:[g.jsx("h1",{className:"page-title",children:g.jsx(Dn,{letterClass:t,strArray:i,idx:15})}),g.jsx("div",{children:o(n)})]}),g.jsx(na,{type:"pacman"})]})}function aC(){const t=n=>{var u,c,h;n.preventDefault();const r=(u=e.current[0])==null?void 0:u.value,i=(c=e.current[1])==null?void 0:c.value,s=(h=e.current[2])==null?void 0:h.value,o=e.current[3].files[0],a=JP(iC,`portfolio/${o.name}`);QP(a,o).then(m=>{YP(m.ref).then(y=>{l({name:r,description:i,url:s,image:y})},()=>{l({name:r,description:i,url:s,image:null})})},()=>{l({name:r,description:i,url:s,image:null})});const l=async m=>{try{await u2(Ng(ov,"portfolio"),m),window.location.reload(!1)}catch{alert("Fail to add Portfolio")}}},e=S.useRef();return g.jsx(g.Fragment,{children:g.jsx("div",{className:"dashboard",children:g.jsxs("form",{ref:e,onSubmit:t,children:[g.jsx("p",{children:g.jsx("input",{type:"text",placeholder:"Name"})}),g.jsx("p",{children:g.jsx("textarea",{placeholder:"Description"})}),g.jsx("p",{children:g.jsx("input",{type:"text",placeholder:"Url"})}),g.jsx("p",{children:g.jsx("input",{type:"file",placeholder:"Image"})}),g.jsx("button",{type:"submit",children:"Submit"}),g.jsx("button",{onClick:()=>sv.signOut(),children:"Sign Off"})]})})})}function lC(){return g.jsx(g.Fragment,{children:g.jsx("div",{className:"dashboard",children:g.jsx("button",{onClick:sC,children:"Sign in with Google"})})})}function uC(){const[t,e]=S.useState(null),n=$0();return S.useEffect(()=>{xS(n,r=>{e(r||null)})}),g.jsx(g.Fragment,{children:g.jsxs("div",{className:"dashboard",children:[" ",t?g.jsx(aC,{}):g.jsx(lC,{})," "]})})}function cC(){return g.jsx(g.Fragment,{children:g.jsx(S_,{children:g.jsxs(An,{path:"/",element:g.jsx(q_,{}),children:[g.jsx(An,{path:"",element:g.jsx(tw,{})}),g.jsx(An,{path:"about",element:g.jsx(aw,{})}),g.jsx(An,{path:"contact",element:g.jsx(lw,{})}),g.jsx(An,{path:"portfolio",element:g.jsx(oC,{})}),g.jsx(An,{path:"dashboard",element:g.jsx(uC,{})})]})})})}pl.createRoot(document.getElementById("root")).render(g.jsx(xe.StrictMode,{children:g.jsx(x_,{children:g.jsx(cC,{})})}));
