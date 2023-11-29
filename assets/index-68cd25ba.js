(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var id={exports:{}},Eo={},od={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=Symbol.for("react.element"),Bp=Symbol.for("react.portal"),Vp=Symbol.for("react.fragment"),Hp=Symbol.for("react.strict_mode"),Wp=Symbol.for("react.profiler"),Kp=Symbol.for("react.provider"),Gp=Symbol.for("react.context"),qp=Symbol.for("react.forward_ref"),Qp=Symbol.for("react.suspense"),Yp=Symbol.for("react.memo"),Xp=Symbol.for("react.lazy"),eu=Symbol.iterator;function Jp(t){return t===null||typeof t!="object"?null:(t=eu&&t[eu]||t["@@iterator"],typeof t=="function"?t:null)}var sd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ad=Object.assign,ld={};function Qn(t,e,n){this.props=t,this.context=e,this.refs=ld,this.updater=n||sd}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ud(){}ud.prototype=Qn.prototype;function $a(t,e,n){this.props=t,this.context=e,this.refs=ld,this.updater=n||sd}var ja=$a.prototype=new ud;ja.constructor=$a;ad(ja,Qn.prototype);ja.isPureReactComponent=!0;var tu=Array.isArray,cd=Object.prototype.hasOwnProperty,Ba={current:null},dd={key:!0,ref:!0,__self:!0,__source:!0};function fd(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)cd.call(e,r)&&!dd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Hr,type:t,key:o,ref:s,props:i,_owner:Ba.current}}function Zp(t,e){return{$$typeof:Hr,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Va(t){return typeof t=="object"&&t!==null&&t.$$typeof===Hr}function em(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nu=/\/+/g;function Go(t,e){return typeof t=="object"&&t!==null&&t.key!=null?em(""+t.key):e.toString(36)}function Ii(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Hr:case Bp:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Go(s,0):r,tu(i)?(n="",t!=null&&(n=t.replace(nu,"$&/")+"/"),Ii(i,e,n,"",function(u){return u})):i!=null&&(Va(i)&&(i=Zp(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(nu,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",tu(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Go(o,a);s+=Ii(o,e,n,l,i)}else if(l=Jp(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Go(o,a++),s+=Ii(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ri(t,e,n){if(t==null)return t;var r=[],i=0;return Ii(t,r,"","",function(o){return e.call(n,o,i++)}),r}function tm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ce={current:null},Si={transition:null},nm={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Si,ReactCurrentOwner:Ba};D.Children={map:ri,forEach:function(t,e,n){ri(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ri(t,function(){e++}),e},toArray:function(t){return ri(t,function(e){return e})||[]},only:function(t){if(!Va(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=Qn;D.Fragment=Vp;D.Profiler=Wp;D.PureComponent=$a;D.StrictMode=Hp;D.Suspense=Qp;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nm;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ad({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Ba.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)cd.call(e,l)&&!dd.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Hr,type:t.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(t){return t={$$typeof:Gp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Kp,_context:t},t.Consumer=t};D.createElement=fd;D.createFactory=function(t){var e=fd.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:qp,render:t}};D.isValidElement=Va;D.lazy=function(t){return{$$typeof:Xp,_payload:{_status:-1,_result:t},_init:tm}};D.memo=function(t,e){return{$$typeof:Yp,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=Si.transition;Si.transition={};try{t()}finally{Si.transition=e}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(t,e){return ce.current.useCallback(t,e)};D.useContext=function(t){return ce.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return ce.current.useDeferredValue(t)};D.useEffect=function(t,e){return ce.current.useEffect(t,e)};D.useId=function(){return ce.current.useId()};D.useImperativeHandle=function(t,e,n){return ce.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return ce.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return ce.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return ce.current.useMemo(t,e)};D.useReducer=function(t,e,n){return ce.current.useReducer(t,e,n)};D.useRef=function(t){return ce.current.useRef(t)};D.useState=function(t){return ce.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return ce.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return ce.current.useTransition()};D.version="18.2.0";od.exports=D;var Ha=od.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm=Ha,im=Symbol.for("react.element"),om=Symbol.for("react.fragment"),sm=Object.prototype.hasOwnProperty,am=rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lm={key:!0,ref:!0,__self:!0,__source:!0};function hd(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)sm.call(e,r)&&!lm.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:im,type:t,key:o,ref:s,props:i,_owner:am.current}}Eo.Fragment=om;Eo.jsx=hd;Eo.jsxs=hd;id.exports=Eo;var um=id.exports,Fs={},pd={exports:{}},Ce={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,A){var N=T.length;T.push(A);e:for(;0<N;){var K=N-1>>>1,X=T[K];if(0<i(X,A))T[K]=A,T[N]=X,N=K;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var A=T[0],N=T.pop();if(N!==A){T[0]=N;e:for(var K=0,X=T.length,ti=X>>>1;K<ti;){var Kt=2*(K+1)-1,Ko=T[Kt],Gt=Kt+1,ni=T[Gt];if(0>i(Ko,N))Gt<X&&0>i(ni,Ko)?(T[K]=ni,T[Gt]=N,K=Gt):(T[K]=Ko,T[Kt]=N,K=Kt);else if(Gt<X&&0>i(ni,N))T[K]=ni,T[Gt]=N,K=Gt;else break e}}return A}function i(T,A){var N=T.sortIndex-A.sortIndex;return N!==0?N:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],h=1,m=null,p=3,v=!1,_=!1,I=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(T){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=T)r(u),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(u)}}function g(T){if(I=!1,d(T),!_)if(n(l)!==null)_=!0,Ho(w);else{var A=n(u);A!==null&&Wo(g,A.startTime-T)}}function w(T,A){_=!1,I&&(I=!1,f(C),C=-1),v=!0;var N=p;try{for(d(A),m=n(l);m!==null&&(!(m.expirationTime>A)||T&&!Ue());){var K=m.callback;if(typeof K=="function"){m.callback=null,p=m.priorityLevel;var X=K(m.expirationTime<=A);A=t.unstable_now(),typeof X=="function"?m.callback=X:m===n(l)&&r(l),d(A)}else r(l);m=n(l)}if(m!==null)var ti=!0;else{var Kt=n(u);Kt!==null&&Wo(g,Kt.startTime-A),ti=!1}return ti}finally{m=null,p=N,v=!1}}var E=!1,S=null,C=-1,F=5,O=-1;function Ue(){return!(t.unstable_now()-O<F)}function Jn(){if(S!==null){var T=t.unstable_now();O=T;var A=!0;try{A=S(!0,T)}finally{A?Zn():(E=!1,S=null)}}else E=!1}var Zn;if(typeof c=="function")Zn=function(){c(Jn)};else if(typeof MessageChannel<"u"){var Zl=new MessageChannel,jp=Zl.port2;Zl.port1.onmessage=Jn,Zn=function(){jp.postMessage(null)}}else Zn=function(){P(Jn,0)};function Ho(T){S=T,E||(E=!0,Zn())}function Wo(T,A){C=P(function(){T(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,Ho(w))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(T){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var N=p;p=A;try{return T()}finally{p=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var N=p;p=T;try{return A()}finally{p=N}},t.unstable_scheduleCallback=function(T,A,N){var K=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?K+N:K):N=K,T){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=N+X,T={id:h++,callback:A,priorityLevel:T,startTime:N,expirationTime:X,sortIndex:-1},N>K?(T.sortIndex=N,e(u,T),n(l)===null&&T===n(u)&&(I?(f(C),C=-1):I=!0,Wo(g,N-K))):(T.sortIndex=X,e(l,T),_||v||(_=!0,Ho(w))),T},t.unstable_shouldYield=Ue,t.unstable_wrapCallback=function(T){var A=p;return function(){var N=p;p=A;try{return T.apply(this,arguments)}finally{p=N}}}})(gd);md.exports=gd;var cm=md.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd=Ha,Te=cm;function y(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yd=new Set,Sr={};function pn(t,e){$n(t,e),$n(t+"Capture",e)}function $n(t,e){for(Sr[t]=e,t=0;t<e.length;t++)yd.add(e[t])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bs=Object.prototype.hasOwnProperty,dm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ru={},iu={};function fm(t){return bs.call(iu,t)?!0:bs.call(ru,t)?!1:dm.test(t)?iu[t]=!0:(ru[t]=!0,!1)}function hm(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pm(t,e,n,r){if(e===null||typeof e>"u"||hm(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function de(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ne[t]=new de(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ne[e]=new de(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ne[t]=new de(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ne[t]=new de(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ne[t]=new de(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ne[t]=new de(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ne[t]=new de(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ne[t]=new de(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ne[t]=new de(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wa=/[\-:]([a-z])/g;function Ka(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wa,Ka);ne[e]=new de(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wa,Ka);ne[e]=new de(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wa,Ka);ne[e]=new de(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ne[t]=new de(t,1,!1,t.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ne[t]=new de(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ga(t,e,n,r){var i=ne.hasOwnProperty(e)?ne[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pm(e,n,i,r)&&(n=null),r||i===null?fm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gt=vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ii=Symbol.for("react.element"),_n=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),qa=Symbol.for("react.strict_mode"),zs=Symbol.for("react.profiler"),_d=Symbol.for("react.provider"),wd=Symbol.for("react.context"),Qa=Symbol.for("react.forward_ref"),$s=Symbol.for("react.suspense"),js=Symbol.for("react.suspense_list"),Ya=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),Ed=Symbol.for("react.offscreen"),ou=Symbol.iterator;function er(t){return t===null||typeof t!="object"?null:(t=ou&&t[ou]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,qo;function lr(t){if(qo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qo=e&&e[1]||""}return`
`+qo+t}var Qo=!1;function Yo(t,e){if(!t||Qo)return"";Qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Qo=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?lr(t):""}function mm(t){switch(t.tag){case 5:return lr(t.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return t=Yo(t.type,!1),t;case 11:return t=Yo(t.type.render,!1),t;case 1:return t=Yo(t.type,!0),t;default:return""}}function Bs(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wn:return"Fragment";case _n:return"Portal";case zs:return"Profiler";case qa:return"StrictMode";case $s:return"Suspense";case js:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wd:return(t.displayName||"Context")+".Consumer";case _d:return(t._context.displayName||"Context")+".Provider";case Qa:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ya:return e=t.displayName||null,e!==null?e:Bs(t.type)||"Memo";case wt:e=t._payload,t=t._init;try{return Bs(t(e))}catch{}}return null}function gm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bs(e);case 8:return e===qa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $t(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Id(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vm(t){var e=Id(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oi(t){t._valueTracker||(t._valueTracker=vm(t))}function Sd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Id(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function bi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vs(t,e){var n=e.checked;return H({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function su(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=$t(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kd(t,e){e=e.checked,e!=null&&Ga(t,"checked",e,!1)}function Hs(t,e){kd(t,e);var n=$t(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ws(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ws(t,e.type,$t(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function au(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ws(t,e,n){(e!=="number"||bi(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ur=Array.isArray;function Dn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$t(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ks(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(y(91));return H({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lu(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(y(92));if(ur(n)){if(1<n.length)throw Error(y(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$t(n)}}function Td(t,e){var n=$t(e.value),r=$t(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function uu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gs(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var si,Pd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(si=si||document.createElement("div"),si.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=si.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function kr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ym=["Webkit","ms","Moz","O"];Object.keys(fr).forEach(function(t){ym.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fr[e]=fr[t]})});function Rd(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fr.hasOwnProperty(t)&&fr[t]?(""+e).trim():e+"px"}function Ad(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Rd(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _m=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qs(t,e){if(e){if(_m[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(y(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(y(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(y(61))}if(e.style!=null&&typeof e.style!="object")throw Error(y(62))}}function Qs(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ys=null;function Xa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xs=null,Ln=null,xn=null;function cu(t){if(t=Gr(t)){if(typeof Xs!="function")throw Error(y(280));var e=t.stateNode;e&&(e=Co(e),Xs(t.stateNode,t.type,e))}}function Nd(t){Ln?xn?xn.push(t):xn=[t]:Ln=t}function Od(){if(Ln){var t=Ln,e=xn;if(xn=Ln=null,cu(t),e)for(t=0;t<e.length;t++)cu(e[t])}}function Dd(t,e){return t(e)}function Ld(){}var Xo=!1;function xd(t,e,n){if(Xo)return t(e,n);Xo=!0;try{return Dd(t,e,n)}finally{Xo=!1,(Ln!==null||xn!==null)&&(Ld(),Od())}}function Tr(t,e){var n=t.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(y(231,e,typeof n));return n}var Js=!1;if(ct)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Js=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Js=!1}function wm(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var hr=!1,zi=null,$i=!1,Zs=null,Em={onError:function(t){hr=!0,zi=t}};function Im(t,e,n,r,i,o,s,a,l){hr=!1,zi=null,wm.apply(Em,arguments)}function Sm(t,e,n,r,i,o,s,a,l){if(Im.apply(this,arguments),hr){if(hr){var u=zi;hr=!1,zi=null}else throw Error(y(198));$i||($i=!0,Zs=u)}}function mn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Md(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function du(t){if(mn(t)!==t)throw Error(y(188))}function km(t){var e=t.alternate;if(!e){if(e=mn(t),e===null)throw Error(y(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return du(i),t;if(o===r)return du(i),e;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?t:e}function Ud(t){return t=km(t),t!==null?Fd(t):null}function Fd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fd(t);if(e!==null)return e;t=t.sibling}return null}var bd=Te.unstable_scheduleCallback,fu=Te.unstable_cancelCallback,Tm=Te.unstable_shouldYield,Cm=Te.unstable_requestPaint,G=Te.unstable_now,Pm=Te.unstable_getCurrentPriorityLevel,Ja=Te.unstable_ImmediatePriority,zd=Te.unstable_UserBlockingPriority,ji=Te.unstable_NormalPriority,Rm=Te.unstable_LowPriority,$d=Te.unstable_IdlePriority,Io=null,Ye=null;function Am(t){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Io,t,void 0,(t.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Dm,Nm=Math.log,Om=Math.LN2;function Dm(t){return t>>>=0,t===0?32:31-(Nm(t)/Om|0)|0}var ai=64,li=4194304;function cr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bi(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=cr(a):(o&=s,o!==0&&(r=cr(o)))}else s=n&~i,s!==0?r=cr(s):o!==0&&(r=cr(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ve(e),i=1<<n,r|=t[n],e&=~i;return r}function Lm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xm(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Ve(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Lm(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function ea(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jd(){var t=ai;return ai<<=1,!(ai&4194240)&&(ai=64),t}function Jo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wr(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ve(e),t[e]=n}function Mm(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ve(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Za(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ve(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var U=0;function Bd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vd,el,Hd,Wd,Kd,ta=!1,ui=[],At=null,Nt=null,Ot=null,Cr=new Map,Pr=new Map,It=[],Um="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(t,e){switch(t){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Cr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(e.pointerId)}}function nr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Gr(e),e!==null&&el(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Fm(t,e,n,r,i){switch(e){case"focusin":return At=nr(At,t,e,n,r,i),!0;case"dragenter":return Nt=nr(Nt,t,e,n,r,i),!0;case"mouseover":return Ot=nr(Ot,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Cr.set(o,nr(Cr.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Pr.set(o,nr(Pr.get(o)||null,t,e,n,r,i)),!0}return!1}function Gd(t){var e=Xt(t.target);if(e!==null){var n=mn(e);if(n!==null){if(e=n.tag,e===13){if(e=Md(n),e!==null){t.blockedOn=e,Kd(t.priority,function(){Hd(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ki(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=na(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ys=r,n.target.dispatchEvent(r),Ys=null}else return e=Gr(n),e!==null&&el(e),t.blockedOn=n,!1;e.shift()}return!0}function pu(t,e,n){ki(t)&&n.delete(e)}function bm(){ta=!1,At!==null&&ki(At)&&(At=null),Nt!==null&&ki(Nt)&&(Nt=null),Ot!==null&&ki(Ot)&&(Ot=null),Cr.forEach(pu),Pr.forEach(pu)}function rr(t,e){t.blockedOn===e&&(t.blockedOn=null,ta||(ta=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,bm)))}function Rr(t){function e(i){return rr(i,t)}if(0<ui.length){rr(ui[0],t);for(var n=1;n<ui.length;n++){var r=ui[n];r.blockedOn===t&&(r.blockedOn=null)}}for(At!==null&&rr(At,t),Nt!==null&&rr(Nt,t),Ot!==null&&rr(Ot,t),Cr.forEach(e),Pr.forEach(e),n=0;n<It.length;n++)r=It[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)Gd(n),n.blockedOn===null&&It.shift()}var Mn=gt.ReactCurrentBatchConfig,Vi=!0;function zm(t,e,n,r){var i=U,o=Mn.transition;Mn.transition=null;try{U=1,tl(t,e,n,r)}finally{U=i,Mn.transition=o}}function $m(t,e,n,r){var i=U,o=Mn.transition;Mn.transition=null;try{U=4,tl(t,e,n,r)}finally{U=i,Mn.transition=o}}function tl(t,e,n,r){if(Vi){var i=na(t,e,n,r);if(i===null)ls(t,e,r,Hi,n),hu(t,r);else if(Fm(i,t,e,n,r))r.stopPropagation();else if(hu(t,r),e&4&&-1<Um.indexOf(t)){for(;i!==null;){var o=Gr(i);if(o!==null&&Vd(o),o=na(t,e,n,r),o===null&&ls(t,e,r,Hi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ls(t,e,r,null,n)}}var Hi=null;function na(t,e,n,r){if(Hi=null,t=Xa(r),t=Xt(t),t!==null)if(e=mn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Md(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hi=t,null}function qd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pm()){case Ja:return 1;case zd:return 4;case ji:case Rm:return 16;case $d:return 536870912;default:return 16}default:return 16}}var Pt=null,nl=null,Ti=null;function Qd(){if(Ti)return Ti;var t,e=nl,n=e.length,r,i="value"in Pt?Pt.value:Pt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Ti=i.slice(t,1<r?1-r:void 0)}function Ci(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ci(){return!0}function mu(){return!1}function Pe(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ci:mu,this.isPropagationStopped=mu,this}return H(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),e}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Pe(Yn),Kr=H({},Yn,{view:0,detail:0}),jm=Pe(Kr),Zo,es,ir,So=H({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ir&&(ir&&t.type==="mousemove"?(Zo=t.screenX-ir.screenX,es=t.screenY-ir.screenY):es=Zo=0,ir=t),Zo)},movementY:function(t){return"movementY"in t?t.movementY:es}}),gu=Pe(So),Bm=H({},So,{dataTransfer:0}),Vm=Pe(Bm),Hm=H({},Kr,{relatedTarget:0}),ts=Pe(Hm),Wm=H({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Km=Pe(Wm),Gm=H({},Yn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qm=Pe(Gm),Qm=H({},Yn,{data:0}),vu=Pe(Qm),Ym={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jm[t])?!!e[t]:!1}function il(){return Zm}var eg=H({},Kr,{key:function(t){if(t.key){var e=Ym[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ci(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(t){return t.type==="keypress"?Ci(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ci(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tg=Pe(eg),ng=H({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yu=Pe(ng),rg=H({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),ig=Pe(rg),og=H({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),sg=Pe(og),ag=H({},So,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lg=Pe(ag),ug=[9,13,27,32],ol=ct&&"CompositionEvent"in window,pr=null;ct&&"documentMode"in document&&(pr=document.documentMode);var cg=ct&&"TextEvent"in window&&!pr,Yd=ct&&(!ol||pr&&8<pr&&11>=pr),_u=String.fromCharCode(32),wu=!1;function Xd(t,e){switch(t){case"keyup":return ug.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var En=!1;function dg(t,e){switch(t){case"compositionend":return Jd(e);case"keypress":return e.which!==32?null:(wu=!0,_u);case"textInput":return t=e.data,t===_u&&wu?null:t;default:return null}}function fg(t,e){if(En)return t==="compositionend"||!ol&&Xd(t,e)?(t=Qd(),Ti=nl=Pt=null,En=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yd&&e.locale!=="ko"?null:e.data;default:return null}}var hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hg[t.type]:e==="textarea"}function Zd(t,e,n,r){Nd(r),e=Wi(e,"onChange"),0<e.length&&(n=new rl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var mr=null,Ar=null;function pg(t){df(t,0)}function ko(t){var e=kn(t);if(Sd(e))return t}function mg(t,e){if(t==="change")return e}var ef=!1;if(ct){var ns;if(ct){var rs="oninput"in document;if(!rs){var Iu=document.createElement("div");Iu.setAttribute("oninput","return;"),rs=typeof Iu.oninput=="function"}ns=rs}else ns=!1;ef=ns&&(!document.documentMode||9<document.documentMode)}function Su(){mr&&(mr.detachEvent("onpropertychange",tf),Ar=mr=null)}function tf(t){if(t.propertyName==="value"&&ko(Ar)){var e=[];Zd(e,Ar,t,Xa(t)),xd(pg,e)}}function gg(t,e,n){t==="focusin"?(Su(),mr=e,Ar=n,mr.attachEvent("onpropertychange",tf)):t==="focusout"&&Su()}function vg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ko(Ar)}function yg(t,e){if(t==="click")return ko(e)}function _g(t,e){if(t==="input"||t==="change")return ko(e)}function wg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var We=typeof Object.is=="function"?Object.is:wg;function Nr(t,e){if(We(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bs.call(e,i)||!We(t[i],e[i]))return!1}return!0}function ku(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tu(t,e){var n=ku(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ku(n)}}function nf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rf(){for(var t=window,e=bi();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bi(t.document)}return e}function sl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Eg(t){var e=rf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&nf(n.ownerDocument.documentElement,n)){if(r!==null&&sl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Tu(n,o);var s=Tu(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ig=ct&&"documentMode"in document&&11>=document.documentMode,In=null,ra=null,gr=null,ia=!1;function Cu(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ia||In==null||In!==bi(r)||(r=In,"selectionStart"in r&&sl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&Nr(gr,r)||(gr=r,r=Wi(ra,"onSelect"),0<r.length&&(e=new rl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=In)))}function di(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Sn={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},is={},of={};ct&&(of=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function To(t){if(is[t])return is[t];if(!Sn[t])return t;var e=Sn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in of)return is[t]=e[n];return t}var sf=To("animationend"),af=To("animationiteration"),lf=To("animationstart"),uf=To("transitionend"),cf=new Map,Pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(t,e){cf.set(t,e),pn(e,[t])}for(var os=0;os<Pu.length;os++){var ss=Pu[os],Sg=ss.toLowerCase(),kg=ss[0].toUpperCase()+ss.slice(1);Bt(Sg,"on"+kg)}Bt(sf,"onAnimationEnd");Bt(af,"onAnimationIteration");Bt(lf,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(uf,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tg=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function Ru(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Sm(r,e,void 0,t),t.currentTarget=null}function df(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ru(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ru(i,a,u),o=l}}}if($i)throw t=Zs,$i=!1,Zs=null,t}function z(t,e){var n=e[ua];n===void 0&&(n=e[ua]=new Set);var r=t+"__bubble";n.has(r)||(ff(e,t,2,!1),n.add(r))}function as(t,e,n){var r=0;e&&(r|=4),ff(n,t,r,e)}var fi="_reactListening"+Math.random().toString(36).slice(2);function Or(t){if(!t[fi]){t[fi]=!0,yd.forEach(function(n){n!=="selectionchange"&&(Tg.has(n)||as(n,!1,t),as(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fi]||(e[fi]=!0,as("selectionchange",!1,e))}}function ff(t,e,n,r){switch(qd(e)){case 1:var i=zm;break;case 4:i=$m;break;default:i=tl}n=i.bind(null,e,n,t),i=void 0,!Js||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ls(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Xt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}xd(function(){var u=o,h=Xa(n),m=[];e:{var p=cf.get(t);if(p!==void 0){var v=rl,_=t;switch(t){case"keypress":if(Ci(n)===0)break e;case"keydown":case"keyup":v=tg;break;case"focusin":_="focus",v=ts;break;case"focusout":_="blur",v=ts;break;case"beforeblur":case"afterblur":v=ts;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ig;break;case sf:case af:case lf:v=Km;break;case uf:v=sg;break;case"scroll":v=jm;break;case"wheel":v=lg;break;case"copy":case"cut":case"paste":v=qm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=yu}var I=(e&4)!==0,P=!I&&t==="scroll",f=I?p!==null?p+"Capture":null:p;I=[];for(var c=u,d;c!==null;){d=c;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=Tr(c,f),g!=null&&I.push(Dr(c,g,d)))),P)break;c=c.return}0<I.length&&(p=new v(p,_,null,n,h),m.push({event:p,listeners:I}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",p&&n!==Ys&&(_=n.relatedTarget||n.fromElement)&&(Xt(_)||_[dt]))break e;if((v||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?Xt(_):null,_!==null&&(P=mn(_),_!==P||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(I=gu,g="onMouseLeave",f="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(I=yu,g="onPointerLeave",f="onPointerEnter",c="pointer"),P=v==null?p:kn(v),d=_==null?p:kn(_),p=new I(g,c+"leave",v,n,h),p.target=P,p.relatedTarget=d,g=null,Xt(h)===u&&(I=new I(f,c+"enter",_,n,h),I.target=d,I.relatedTarget=P,g=I),P=g,v&&_)t:{for(I=v,f=_,c=0,d=I;d;d=yn(d))c++;for(d=0,g=f;g;g=yn(g))d++;for(;0<c-d;)I=yn(I),c--;for(;0<d-c;)f=yn(f),d--;for(;c--;){if(I===f||f!==null&&I===f.alternate)break t;I=yn(I),f=yn(f)}I=null}else I=null;v!==null&&Au(m,p,v,I,!1),_!==null&&P!==null&&Au(m,P,_,I,!0)}}e:{if(p=u?kn(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var w=mg;else if(Eu(p))if(ef)w=_g;else{w=vg;var E=gg}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(w=yg);if(w&&(w=w(t,u))){Zd(m,w,n,h);break e}E&&E(t,p,u),t==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&Ws(p,"number",p.value)}switch(E=u?kn(u):window,t){case"focusin":(Eu(E)||E.contentEditable==="true")&&(In=E,ra=u,gr=null);break;case"focusout":gr=ra=In=null;break;case"mousedown":ia=!0;break;case"contextmenu":case"mouseup":case"dragend":ia=!1,Cu(m,n,h);break;case"selectionchange":if(Ig)break;case"keydown":case"keyup":Cu(m,n,h)}var S;if(ol)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else En?Xd(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Yd&&n.locale!=="ko"&&(En||C!=="onCompositionStart"?C==="onCompositionEnd"&&En&&(S=Qd()):(Pt=h,nl="value"in Pt?Pt.value:Pt.textContent,En=!0)),E=Wi(u,C),0<E.length&&(C=new vu(C,t,null,n,h),m.push({event:C,listeners:E}),S?C.data=S:(S=Jd(n),S!==null&&(C.data=S)))),(S=cg?dg(t,n):fg(t,n))&&(u=Wi(u,"onBeforeInput"),0<u.length&&(h=new vu("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:u}),h.data=S))}df(m,e)})}function Dr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wi(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Tr(t,n),o!=null&&r.unshift(Dr(t,o,i)),o=Tr(t,e),o!=null&&r.push(Dr(t,o,i))),t=t.return}return r}function yn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Au(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Tr(n,o),l!=null&&s.unshift(Dr(n,l,a))):i||(l=Tr(n,o),l!=null&&s.push(Dr(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Cg=/\r\n?/g,Pg=/\u0000|\uFFFD/g;function Nu(t){return(typeof t=="string"?t:""+t).replace(Cg,`
`).replace(Pg,"")}function hi(t,e,n){if(e=Nu(e),Nu(t)!==e&&n)throw Error(y(425))}function Ki(){}var oa=null,sa=null;function aa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var la=typeof setTimeout=="function"?setTimeout:void 0,Rg=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,Ag=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(t){return Ou.resolve(null).then(t).catch(Ng)}:la;function Ng(t){setTimeout(function(){throw t})}function us(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Rr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Rr(e)}function Dt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Du(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Xn,Lr="__reactProps$"+Xn,dt="__reactContainer$"+Xn,ua="__reactEvents$"+Xn,Og="__reactListeners$"+Xn,Dg="__reactHandles$"+Xn;function Xt(t){var e=t[Qe];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dt]||n[Qe]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Du(t);t!==null;){if(n=t[Qe])return n;t=Du(t)}return e}t=n,n=t.parentNode}return null}function Gr(t){return t=t[Qe]||t[dt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function kn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(y(33))}function Co(t){return t[Lr]||null}var ca=[],Tn=-1;function Vt(t){return{current:t}}function $(t){0>Tn||(t.current=ca[Tn],ca[Tn]=null,Tn--)}function b(t,e){Tn++,ca[Tn]=t.current,t.current=e}var jt={},se=Vt(jt),me=Vt(!1),on=jt;function jn(t,e){var n=t.type.contextTypes;if(!n)return jt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ge(t){return t=t.childContextTypes,t!=null}function Gi(){$(me),$(se)}function Lu(t,e,n){if(se.current!==jt)throw Error(y(168));b(se,e),b(me,n)}function hf(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(y(108,gm(t)||"Unknown",i));return H({},n,r)}function qi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jt,on=se.current,b(se,t),b(me,me.current),!0}function xu(t,e,n){var r=t.stateNode;if(!r)throw Error(y(169));n?(t=hf(t,e,on),r.__reactInternalMemoizedMergedChildContext=t,$(me),$(se),b(se,t)):$(me),b(me,n)}var rt=null,Po=!1,cs=!1;function pf(t){rt===null?rt=[t]:rt.push(t)}function Lg(t){Po=!0,pf(t)}function Ht(){if(!cs&&rt!==null){cs=!0;var t=0,e=U;try{var n=rt;for(U=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rt=null,Po=!1}catch(i){throw rt!==null&&(rt=rt.slice(t+1)),bd(Ja,Ht),i}finally{U=e,cs=!1}}return null}var Cn=[],Pn=0,Qi=null,Yi=0,Re=[],Ae=0,sn=null,ot=1,st="";function qt(t,e){Cn[Pn++]=Yi,Cn[Pn++]=Qi,Qi=t,Yi=e}function mf(t,e,n){Re[Ae++]=ot,Re[Ae++]=st,Re[Ae++]=sn,sn=t;var r=ot;t=st;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var o=32-Ve(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ot=1<<32-Ve(e)+i|n<<i|r,st=o+t}else ot=1<<o|n<<i|r,st=t}function al(t){t.return!==null&&(qt(t,1),mf(t,1,0))}function ll(t){for(;t===Qi;)Qi=Cn[--Pn],Cn[Pn]=null,Yi=Cn[--Pn],Cn[Pn]=null;for(;t===sn;)sn=Re[--Ae],Re[Ae]=null,st=Re[--Ae],Re[Ae]=null,ot=Re[--Ae],Re[Ae]=null}var Se=null,Ie=null,j=!1,$e=null;function gf(t,e){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Mu(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Se=t,Ie=Dt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Se=t,Ie=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=sn!==null?{id:ot,overflow:st}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Se=t,Ie=null,!0):!1;default:return!1}}function da(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fa(t){if(j){var e=Ie;if(e){var n=e;if(!Mu(t,e)){if(da(t))throw Error(y(418));e=Dt(n.nextSibling);var r=Se;e&&Mu(t,e)?gf(r,n):(t.flags=t.flags&-4097|2,j=!1,Se=t)}}else{if(da(t))throw Error(y(418));t.flags=t.flags&-4097|2,j=!1,Se=t}}}function Uu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Se=t}function pi(t){if(t!==Se)return!1;if(!j)return Uu(t),j=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!aa(t.type,t.memoizedProps)),e&&(e=Ie)){if(da(t))throw vf(),Error(y(418));for(;e;)gf(t,e),e=Dt(e.nextSibling)}if(Uu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ie=Dt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ie=null}}else Ie=Se?Dt(t.stateNode.nextSibling):null;return!0}function vf(){for(var t=Ie;t;)t=Dt(t.nextSibling)}function Bn(){Ie=Se=null,j=!1}function ul(t){$e===null?$e=[t]:$e.push(t)}var xg=gt.ReactCurrentBatchConfig;function be(t,e){if(t&&t.defaultProps){e=H({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Xi=Vt(null),Ji=null,Rn=null,cl=null;function dl(){cl=Rn=Ji=null}function fl(t){var e=Xi.current;$(Xi),t._currentValue=e}function ha(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Un(t,e){Ji=t,cl=Rn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pe=!0),t.firstContext=null)}function De(t){var e=t._currentValue;if(cl!==t)if(t={context:t,memoizedValue:e,next:null},Rn===null){if(Ji===null)throw Error(y(308));Rn=t,Ji.dependencies={lanes:0,firstContext:t}}else Rn=Rn.next=t;return e}var Jt=null;function hl(t){Jt===null?Jt=[t]:Jt.push(t)}function yf(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,hl(e)):(n.next=i.next,i.next=n),e.interleaved=n,ft(t,r)}function ft(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Et=!1;function pl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _f(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ut(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,x&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ft(t,n)}return i=r.interleaved,i===null?(e.next=e,hl(r)):(e.next=i.next,i.next=e),r.interleaved=e,ft(t,n)}function Pi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Za(t,n)}}function Fu(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zi(t,e,n,r){var i=t.updateQueue;Et=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;s=0,h=u=l=null,a=o;do{var p=a.lane,v=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,I=a;switch(p=e,v=n,I.tag){case 1:if(_=I.payload,typeof _=="function"){m=_.call(v,m,p);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=I.payload,p=typeof _=="function"?_.call(v,m,p):_,p==null)break e;m=H({},m,p);break e;case 2:Et=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=v,l=m):h=h.next=v,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(h===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);ln|=s,t.lanes=s,t.memoizedState=m}}function bu(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var wf=new vd.Component().refs;function pa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:H({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ro={isMounted:function(t){return(t=t._reactInternals)?mn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ue(),i=Mt(t),o=ut(r,i);o.payload=e,n!=null&&(o.callback=n),e=Lt(t,o,i),e!==null&&(He(e,t,i,r),Pi(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ue(),i=Mt(t),o=ut(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Lt(t,o,i),e!==null&&(He(e,t,i,r),Pi(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ue(),r=Mt(t),i=ut(n,r);i.tag=2,e!=null&&(i.callback=e),e=Lt(t,i,r),e!==null&&(He(e,t,r,n),Pi(e,t,r))}};function zu(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,o):!0}function Ef(t,e,n){var r=!1,i=jt,o=e.contextType;return typeof o=="object"&&o!==null?o=De(o):(i=ge(e)?on:se.current,r=e.contextTypes,o=(r=r!=null)?jn(t,i):jt),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ro,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function $u(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ro.enqueueReplaceState(e,e.state,null)}function ma(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=wf,pl(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=De(o):(o=ge(e)?on:se.current,i.context=jn(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(pa(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ro.enqueueReplaceState(i,i.state,null),Zi(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function or(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===wf&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,t))}return t}function mi(t,e){throw t=Object.prototype.toString.call(e),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ju(t){var e=t._init;return e(t._payload)}function If(t){function e(f,c){if(t){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Ut(f,c),f.index=0,f.sibling=null,f}function o(f,c,d){return f.index=d,t?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,c,d,g){return c===null||c.tag!==6?(c=vs(d,f.mode,g),c.return=f,c):(c=i(c,d),c.return=f,c)}function l(f,c,d,g){var w=d.type;return w===wn?h(f,c,d.props.children,g,d.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===wt&&ju(w)===c.type)?(g=i(c,d.props),g.ref=or(f,c,d),g.return=f,g):(g=Li(d.type,d.key,d.props,null,f.mode,g),g.ref=or(f,c,d),g.return=f,g)}function u(f,c,d,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=ys(d,f.mode,g),c.return=f,c):(c=i(c,d.children||[]),c.return=f,c)}function h(f,c,d,g,w){return c===null||c.tag!==7?(c=nn(d,f.mode,g,w),c.return=f,c):(c=i(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=vs(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ii:return d=Li(c.type,c.key,c.props,null,f.mode,d),d.ref=or(f,null,c),d.return=f,d;case _n:return c=ys(c,f.mode,d),c.return=f,c;case wt:var g=c._init;return m(f,g(c._payload),d)}if(ur(c)||er(c))return c=nn(c,f.mode,d,null),c.return=f,c;mi(f,c)}return null}function p(f,c,d,g){var w=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return w!==null?null:a(f,c,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ii:return d.key===w?l(f,c,d,g):null;case _n:return d.key===w?u(f,c,d,g):null;case wt:return w=d._init,p(f,c,w(d._payload),g)}if(ur(d)||er(d))return w!==null?null:h(f,c,d,g,null);mi(f,d)}return null}function v(f,c,d,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,a(c,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ii:return f=f.get(g.key===null?d:g.key)||null,l(c,f,g,w);case _n:return f=f.get(g.key===null?d:g.key)||null,u(c,f,g,w);case wt:var E=g._init;return v(f,c,d,E(g._payload),w)}if(ur(g)||er(g))return f=f.get(d)||null,h(c,f,g,w,null);mi(c,g)}return null}function _(f,c,d,g){for(var w=null,E=null,S=c,C=c=0,F=null;S!==null&&C<d.length;C++){S.index>C?(F=S,S=null):F=S.sibling;var O=p(f,S,d[C],g);if(O===null){S===null&&(S=F);break}t&&S&&O.alternate===null&&e(f,S),c=o(O,c,C),E===null?w=O:E.sibling=O,E=O,S=F}if(C===d.length)return n(f,S),j&&qt(f,C),w;if(S===null){for(;C<d.length;C++)S=m(f,d[C],g),S!==null&&(c=o(S,c,C),E===null?w=S:E.sibling=S,E=S);return j&&qt(f,C),w}for(S=r(f,S);C<d.length;C++)F=v(S,f,C,d[C],g),F!==null&&(t&&F.alternate!==null&&S.delete(F.key===null?C:F.key),c=o(F,c,C),E===null?w=F:E.sibling=F,E=F);return t&&S.forEach(function(Ue){return e(f,Ue)}),j&&qt(f,C),w}function I(f,c,d,g){var w=er(d);if(typeof w!="function")throw Error(y(150));if(d=w.call(d),d==null)throw Error(y(151));for(var E=w=null,S=c,C=c=0,F=null,O=d.next();S!==null&&!O.done;C++,O=d.next()){S.index>C?(F=S,S=null):F=S.sibling;var Ue=p(f,S,O.value,g);if(Ue===null){S===null&&(S=F);break}t&&S&&Ue.alternate===null&&e(f,S),c=o(Ue,c,C),E===null?w=Ue:E.sibling=Ue,E=Ue,S=F}if(O.done)return n(f,S),j&&qt(f,C),w;if(S===null){for(;!O.done;C++,O=d.next())O=m(f,O.value,g),O!==null&&(c=o(O,c,C),E===null?w=O:E.sibling=O,E=O);return j&&qt(f,C),w}for(S=r(f,S);!O.done;C++,O=d.next())O=v(S,f,C,O.value,g),O!==null&&(t&&O.alternate!==null&&S.delete(O.key===null?C:O.key),c=o(O,c,C),E===null?w=O:E.sibling=O,E=O);return t&&S.forEach(function(Jn){return e(f,Jn)}),j&&qt(f,C),w}function P(f,c,d,g){if(typeof d=="object"&&d!==null&&d.type===wn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ii:e:{for(var w=d.key,E=c;E!==null;){if(E.key===w){if(w=d.type,w===wn){if(E.tag===7){n(f,E.sibling),c=i(E,d.props.children),c.return=f,f=c;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===wt&&ju(w)===E.type){n(f,E.sibling),c=i(E,d.props),c.ref=or(f,E,d),c.return=f,f=c;break e}n(f,E);break}else e(f,E);E=E.sibling}d.type===wn?(c=nn(d.props.children,f.mode,g,d.key),c.return=f,f=c):(g=Li(d.type,d.key,d.props,null,f.mode,g),g.ref=or(f,c,d),g.return=f,f=g)}return s(f);case _n:e:{for(E=d.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=i(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else e(f,c);c=c.sibling}c=ys(d,f.mode,g),c.return=f,f=c}return s(f);case wt:return E=d._init,P(f,c,E(d._payload),g)}if(ur(d))return _(f,c,d,g);if(er(d))return I(f,c,d,g);mi(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,d),c.return=f,f=c):(n(f,c),c=vs(d,f.mode,g),c.return=f,f=c),s(f)):n(f,c)}return P}var Vn=If(!0),Sf=If(!1),qr={},Xe=Vt(qr),xr=Vt(qr),Mr=Vt(qr);function Zt(t){if(t===qr)throw Error(y(174));return t}function ml(t,e){switch(b(Mr,e),b(xr,t),b(Xe,qr),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gs(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gs(e,t)}$(Xe),b(Xe,e)}function Hn(){$(Xe),$(xr),$(Mr)}function kf(t){Zt(Mr.current);var e=Zt(Xe.current),n=Gs(e,t.type);e!==n&&(b(xr,t),b(Xe,n))}function gl(t){xr.current===t&&($(Xe),$(xr))}var B=Vt(0);function eo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ds=[];function vl(){for(var t=0;t<ds.length;t++)ds[t]._workInProgressVersionPrimary=null;ds.length=0}var Ri=gt.ReactCurrentDispatcher,fs=gt.ReactCurrentBatchConfig,an=0,V=null,Q=null,J=null,to=!1,vr=!1,Ur=0,Mg=0;function re(){throw Error(y(321))}function yl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!We(t[n],e[n]))return!1;return!0}function _l(t,e,n,r,i,o){if(an=o,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ri.current=t===null||t.memoizedState===null?zg:$g,t=n(r,i),vr){o=0;do{if(vr=!1,Ur=0,25<=o)throw Error(y(301));o+=1,J=Q=null,e.updateQueue=null,Ri.current=jg,t=n(r,i)}while(vr)}if(Ri.current=no,e=Q!==null&&Q.next!==null,an=0,J=Q=V=null,to=!1,e)throw Error(y(300));return t}function wl(){var t=Ur!==0;return Ur=0,t}function qe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?V.memoizedState=J=t:J=J.next=t,J}function Le(){if(Q===null){var t=V.alternate;t=t!==null?t.memoizedState:null}else t=Q.next;var e=J===null?V.memoizedState:J.next;if(e!==null)J=e,Q=t;else{if(t===null)throw Error(y(310));Q=t,t={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},J===null?V.memoizedState=J=t:J=J.next=t}return J}function Fr(t,e){return typeof e=="function"?e(t):e}function hs(t){var e=Le(),n=e.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=t;var r=Q,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var h=u.lane;if((an&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=m,s=r):l=l.next=m,V.lanes|=h,ln|=h}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,We(r,e.memoizedState)||(pe=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,V.lanes|=o,ln|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ps(t){var e=Le(),n=e.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);We(o,e.memoizedState)||(pe=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Tf(){}function Cf(t,e){var n=V,r=Le(),i=e(),o=!We(r.memoizedState,i);if(o&&(r.memoizedState=i,pe=!0),r=r.queue,El(Af.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,br(9,Rf.bind(null,n,r,i,e),void 0,null),Z===null)throw Error(y(349));an&30||Pf(n,e,i)}return i}function Pf(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Rf(t,e,n,r){e.value=n,e.getSnapshot=r,Nf(e)&&Of(t)}function Af(t,e,n){return n(function(){Nf(e)&&Of(t)})}function Nf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!We(t,n)}catch{return!0}}function Of(t){var e=ft(t,1);e!==null&&He(e,t,1,-1)}function Bu(t){var e=qe();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:t},e.queue=t,t=t.dispatch=bg.bind(null,V,t),[e.memoizedState,t]}function br(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Df(){return Le().memoizedState}function Ai(t,e,n,r){var i=qe();V.flags|=t,i.memoizedState=br(1|e,n,void 0,r===void 0?null:r)}function Ao(t,e,n,r){var i=Le();r=r===void 0?null:r;var o=void 0;if(Q!==null){var s=Q.memoizedState;if(o=s.destroy,r!==null&&yl(r,s.deps)){i.memoizedState=br(e,n,o,r);return}}V.flags|=t,i.memoizedState=br(1|e,n,o,r)}function Vu(t,e){return Ai(8390656,8,t,e)}function El(t,e){return Ao(2048,8,t,e)}function Lf(t,e){return Ao(4,2,t,e)}function xf(t,e){return Ao(4,4,t,e)}function Mf(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Uf(t,e,n){return n=n!=null?n.concat([t]):null,Ao(4,4,Mf.bind(null,e,t),n)}function Il(){}function Ff(t,e){var n=Le();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function bf(t,e){var n=Le();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zf(t,e,n){return an&21?(We(n,e)||(n=jd(),V.lanes|=n,ln|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pe=!0),t.memoizedState=n)}function Ug(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var r=fs.transition;fs.transition={};try{t(!1),e()}finally{U=n,fs.transition=r}}function $f(){return Le().memoizedState}function Fg(t,e,n){var r=Mt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jf(t))Bf(e,n);else if(n=yf(t,e,n,r),n!==null){var i=ue();He(n,t,r,i),Vf(n,e,r)}}function bg(t,e,n){var r=Mt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jf(t))Bf(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,We(a,s)){var l=e.interleaved;l===null?(i.next=i,hl(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=yf(t,e,i,r),n!==null&&(i=ue(),He(n,t,r,i),Vf(n,e,r))}}function jf(t){var e=t.alternate;return t===V||e!==null&&e===V}function Bf(t,e){vr=to=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vf(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Za(t,n)}}var no={readContext:De,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},zg={readContext:De,useCallback:function(t,e){return qe().memoizedState=[t,e===void 0?null:e],t},useContext:De,useEffect:Vu,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ai(4194308,4,Mf.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ai(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ai(4,2,t,e)},useMemo:function(t,e){var n=qe();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qe();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Fg.bind(null,V,t),[r.memoizedState,t]},useRef:function(t){var e=qe();return t={current:t},e.memoizedState=t},useState:Bu,useDebugValue:Il,useDeferredValue:function(t){return qe().memoizedState=t},useTransition:function(){var t=Bu(!1),e=t[0];return t=Ug.bind(null,t[1]),qe().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=V,i=qe();if(j){if(n===void 0)throw Error(y(407));n=n()}else{if(n=e(),Z===null)throw Error(y(349));an&30||Pf(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Vu(Af.bind(null,r,o,t),[t]),r.flags|=2048,br(9,Rf.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=qe(),e=Z.identifierPrefix;if(j){var n=st,r=ot;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ur++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Mg++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$g={readContext:De,useCallback:Ff,useContext:De,useEffect:El,useImperativeHandle:Uf,useInsertionEffect:Lf,useLayoutEffect:xf,useMemo:bf,useReducer:hs,useRef:Df,useState:function(){return hs(Fr)},useDebugValue:Il,useDeferredValue:function(t){var e=Le();return zf(e,Q.memoizedState,t)},useTransition:function(){var t=hs(Fr)[0],e=Le().memoizedState;return[t,e]},useMutableSource:Tf,useSyncExternalStore:Cf,useId:$f,unstable_isNewReconciler:!1},jg={readContext:De,useCallback:Ff,useContext:De,useEffect:El,useImperativeHandle:Uf,useInsertionEffect:Lf,useLayoutEffect:xf,useMemo:bf,useReducer:ps,useRef:Df,useState:function(){return ps(Fr)},useDebugValue:Il,useDeferredValue:function(t){var e=Le();return Q===null?e.memoizedState=t:zf(e,Q.memoizedState,t)},useTransition:function(){var t=ps(Fr)[0],e=Le().memoizedState;return[t,e]},useMutableSource:Tf,useSyncExternalStore:Cf,useId:$f,unstable_isNewReconciler:!1};function Wn(t,e){try{var n="",r=e;do n+=mm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function ms(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ga(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Bg=typeof WeakMap=="function"?WeakMap:Map;function Hf(t,e,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){io||(io=!0,Ca=r),ga(t,e)},n}function Wf(t,e,n){n=ut(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ga(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ga(t,e),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Hu(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Bg;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=nv.bind(null,t,e,n),e.then(t,t))}function Wu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ku(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ut(-1,1),e.tag=2,Lt(n,e,1))),n.lanes|=1),t)}var Vg=gt.ReactCurrentOwner,pe=!1;function le(t,e,n,r){e.child=t===null?Sf(e,null,n,r):Vn(e,t.child,n,r)}function Gu(t,e,n,r,i){n=n.render;var o=e.ref;return Un(e,i),r=_l(t,e,n,r,o,i),n=wl(),t!==null&&!pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ht(t,e,i)):(j&&n&&al(e),e.flags|=1,le(t,e,r,i),e.child)}function qu(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Nl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Kf(t,e,o,r,i)):(t=Li(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(s,r)&&t.ref===e.ref)return ht(t,e,i)}return e.flags|=1,t=Ut(o,r),t.ref=e.ref,t.return=e,e.child=t}function Kf(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Nr(o,r)&&t.ref===e.ref)if(pe=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(pe=!0);else return e.lanes=t.lanes,ht(t,e,i)}return va(t,e,n,r,i)}function Gf(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(Nn,we),we|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,b(Nn,we),we|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,b(Nn,we),we|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,b(Nn,we),we|=r;return le(t,e,i,n),e.child}function qf(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function va(t,e,n,r,i){var o=ge(n)?on:se.current;return o=jn(e,o),Un(e,i),n=_l(t,e,n,r,o,i),r=wl(),t!==null&&!pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ht(t,e,i)):(j&&r&&al(e),e.flags|=1,le(t,e,n,i),e.child)}function Qu(t,e,n,r,i){if(ge(n)){var o=!0;qi(e)}else o=!1;if(Un(e,i),e.stateNode===null)Ni(t,e),Ef(e,n,r),ma(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=De(u):(u=ge(n)?on:se.current,u=jn(e,u));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&$u(e,s,r,u),Et=!1;var p=e.memoizedState;s.state=p,Zi(e,r,s,i),l=e.memoizedState,a!==r||p!==l||me.current||Et?(typeof h=="function"&&(pa(e,n,h,r),l=e.memoizedState),(a=Et||zu(e,n,a,r,p,l,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,_f(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:be(e.type,a),s.props=u,m=e.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=De(l):(l=ge(n)?on:se.current,l=jn(e,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||p!==l)&&$u(e,s,r,l),Et=!1,p=e.memoizedState,s.state=p,Zi(e,r,s,i);var _=e.memoizedState;a!==m||p!==_||me.current||Et?(typeof v=="function"&&(pa(e,n,v,r),_=e.memoizedState),(u=Et||zu(e,n,u,r,p,_,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),s.props=r,s.state=_,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return ya(t,e,n,r,o,i)}function ya(t,e,n,r,i,o){qf(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&xu(e,n,!1),ht(t,e,o);r=e.stateNode,Vg.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Vn(e,t.child,null,o),e.child=Vn(e,null,a,o)):le(t,e,a,o),e.memoizedState=r.state,i&&xu(e,n,!0),e.child}function Qf(t){var e=t.stateNode;e.pendingContext?Lu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lu(t,e.context,!1),ml(t,e.containerInfo)}function Yu(t,e,n,r,i){return Bn(),ul(i),e.flags|=256,le(t,e,n,r),e.child}var _a={dehydrated:null,treeContext:null,retryLane:0};function wa(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yf(t,e,n){var r=e.pendingProps,i=B.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),b(B,i&1),t===null)return fa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Do(s,r,0,null),t=nn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=wa(n),e.memoizedState=_a,t):Sl(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Hg(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ut(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ut(a,o):(o=nn(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?wa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=_a,r}return o=t.child,t=o.sibling,r=Ut(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sl(t,e){return e=Do({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gi(t,e,n,r){return r!==null&&ul(r),Vn(e,t.child,null,n),t=Sl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Hg(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=ms(Error(y(422))),gi(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Do({mode:"visible",children:r.children},i,0,null),o=nn(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Vn(e,t.child,null,s),e.child.memoizedState=wa(s),e.memoizedState=_a,o);if(!(e.mode&1))return gi(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(y(419)),r=ms(o,r,void 0),gi(t,e,s,r)}if(a=(s&t.childLanes)!==0,pe||a){if(r=Z,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ft(t,i),He(r,t,i,-1))}return Al(),r=ms(Error(y(421))),gi(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=rv.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ie=Dt(i.nextSibling),Se=e,j=!0,$e=null,t!==null&&(Re[Ae++]=ot,Re[Ae++]=st,Re[Ae++]=sn,ot=t.id,st=t.overflow,sn=e),e=Sl(e,r.children),e.flags|=4096,e)}function Xu(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ha(t.return,e,n)}function gs(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Xf(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(le(t,e,r.children,n),r=B.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xu(t,n,e);else if(t.tag===19)Xu(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(b(B,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&eo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gs(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&eo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gs(e,!0,n,null,o);break;case"together":gs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ni(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ht(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ln|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(y(153));if(e.child!==null){for(t=e.child,n=Ut(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ut(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wg(t,e,n){switch(e.tag){case 3:Qf(e),Bn();break;case 5:kf(e);break;case 1:ge(e.type)&&qi(e);break;case 4:ml(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;b(Xi,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(b(B,B.current&1),e.flags|=128,null):n&e.child.childLanes?Yf(t,e,n):(b(B,B.current&1),t=ht(t,e,n),t!==null?t.sibling:null);b(B,B.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Xf(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),b(B,B.current),r)break;return null;case 22:case 23:return e.lanes=0,Gf(t,e,n)}return ht(t,e,n)}var Jf,Ea,Zf,eh;Jf=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ea=function(){};Zf=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zt(Xe.current);var o=null;switch(n){case"input":i=Vs(t,i),r=Vs(t,r),o=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":i=Ks(t,i),r=Ks(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ki)}qs(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Sr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Sr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&z("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};eh=function(t,e,n,r){n!==r&&(e.flags|=4)};function sr(t,e){if(!j)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Kg(t,e,n){var r=e.pendingProps;switch(ll(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(e),null;case 1:return ge(e.type)&&Gi(),ie(e),null;case 3:return r=e.stateNode,Hn(),$(me),$(se),vl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$e!==null&&(Aa($e),$e=null))),Ea(t,e),ie(e),null;case 5:gl(e);var i=Zt(Mr.current);if(n=e.type,t!==null&&e.stateNode!=null)Zf(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(y(166));return ie(e),null}if(t=Zt(Xe.current),pi(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Qe]=e,r[Lr]=o,t=(e.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<dr.length;i++)z(dr[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":su(r,o),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},z("invalid",r);break;case"textarea":lu(r,o),z("invalid",r)}qs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&hi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&hi(r.textContent,a,t),i=["children",""+a]):Sr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&z("scroll",r)}switch(n){case"input":oi(r),au(r,o,!0);break;case"textarea":oi(r),uu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ki)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cd(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Qe]=e,t[Lr]=r,Jf(t,e,!1,!1),e.stateNode=t;e:{switch(s=Qs(n,r),n){case"dialog":z("cancel",t),z("close",t),i=r;break;case"iframe":case"object":case"embed":z("load",t),i=r;break;case"video":case"audio":for(i=0;i<dr.length;i++)z(dr[i],t);i=r;break;case"source":z("error",t),i=r;break;case"img":case"image":case"link":z("error",t),z("load",t),i=r;break;case"details":z("toggle",t),i=r;break;case"input":su(t,r),i=Vs(t,r),z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),z("invalid",t);break;case"textarea":lu(t,r),i=Ks(t,r),z("invalid",t);break;default:i=r}qs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Ad(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Pd(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&kr(t,l):typeof l=="number"&&kr(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Sr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&z("scroll",t):l!=null&&Ga(t,o,l,s))}switch(n){case"input":oi(t),au(t,r,!1);break;case"textarea":oi(t),uu(t);break;case"option":r.value!=null&&t.setAttribute("value",""+$t(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Dn(t,!!r.multiple,o,!1):r.defaultValue!=null&&Dn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ki)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ie(e),null;case 6:if(t&&e.stateNode!=null)eh(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(y(166));if(n=Zt(Mr.current),Zt(Xe.current),pi(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qe]=e,(o=r.nodeValue!==n)&&(t=Se,t!==null))switch(t.tag){case 3:hi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hi(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=e,e.stateNode=r}return ie(e),null;case 13:if($(B),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(j&&Ie!==null&&e.mode&1&&!(e.flags&128))vf(),Bn(),e.flags|=98560,o=!1;else if(o=pi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(y(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Qe]=e}else Bn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ie(e),o=!1}else $e!==null&&(Aa($e),$e=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||B.current&1?Y===0&&(Y=3):Al())),e.updateQueue!==null&&(e.flags|=4),ie(e),null);case 4:return Hn(),Ea(t,e),t===null&&Or(e.stateNode.containerInfo),ie(e),null;case 10:return fl(e.type._context),ie(e),null;case 17:return ge(e.type)&&Gi(),ie(e),null;case 19:if($(B),o=e.memoizedState,o===null)return ie(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)sr(o,!1);else{if(Y!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=eo(t),s!==null){for(e.flags|=128,sr(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return b(B,B.current&1|2),e.child}t=t.sibling}o.tail!==null&&G()>Kn&&(e.flags|=128,r=!0,sr(o,!1),e.lanes=4194304)}else{if(!r)if(t=eo(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!j)return ie(e),null}else 2*G()-o.renderingStartTime>Kn&&n!==1073741824&&(e.flags|=128,r=!0,sr(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=G(),e.sibling=null,n=B.current,b(B,r?n&1|2:n&1),e):(ie(e),null);case 22:case 23:return Rl(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?we&1073741824&&(ie(e),e.subtreeFlags&6&&(e.flags|=8192)):ie(e),null;case 24:return null;case 25:return null}throw Error(y(156,e.tag))}function Gg(t,e){switch(ll(e),e.tag){case 1:return ge(e.type)&&Gi(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hn(),$(me),$(se),vl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gl(e),null;case 13:if($(B),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(y(340));Bn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $(B),null;case 4:return Hn(),null;case 10:return fl(e.type._context),null;case 22:case 23:return Rl(),null;case 24:return null;default:return null}}var vi=!1,oe=!1,qg=typeof WeakSet=="function"?WeakSet:Set,k=null;function An(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(t,e,r)}else n.current=null}function Ia(t,e,n){try{n()}catch(r){W(t,e,r)}}var Ju=!1;function Qg(t,e){if(oa=Vi,t=rf(),sl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,h=0,m=t,p=null;t:for(;;){for(var v;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(l=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(v=m.firstChild)!==null;)p=m,m=v;for(;;){if(m===t)break t;if(p===n&&++u===i&&(a=s),p===o&&++h===r&&(l=s),(v=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sa={focusedElem:t,selectionRange:n},Vi=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var I=_.memoizedProps,P=_.memoizedState,f=e.stateNode,c=f.getSnapshotBeforeUpdate(e.elementType===e.type?I:be(e.type,I),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=e.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){W(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return _=Ju,Ju=!1,_}function yr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ia(e,n,o)}i=i.next}while(i!==r)}}function No(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sa(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function th(t){var e=t.alternate;e!==null&&(t.alternate=null,th(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qe],delete e[Lr],delete e[ua],delete e[Og],delete e[Dg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function nh(t){return t.tag===5||t.tag===3||t.tag===4}function Zu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||nh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ka(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ki));else if(r!==4&&(t=t.child,t!==null))for(ka(t,e,n),t=t.sibling;t!==null;)ka(t,e,n),t=t.sibling}function Ta(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ta(t,e,n),t=t.sibling;t!==null;)Ta(t,e,n),t=t.sibling}var ee=null,ze=!1;function yt(t,e,n){for(n=n.child;n!==null;)rh(t,e,n),n=n.sibling}function rh(t,e,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Io,n)}catch{}switch(n.tag){case 5:oe||An(n,e);case 6:var r=ee,i=ze;ee=null,yt(t,e,n),ee=r,ze=i,ee!==null&&(ze?(t=ee,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(ze?(t=ee,n=n.stateNode,t.nodeType===8?us(t.parentNode,n):t.nodeType===1&&us(t,n),Rr(t)):us(ee,n.stateNode));break;case 4:r=ee,i=ze,ee=n.stateNode.containerInfo,ze=!0,yt(t,e,n),ee=r,ze=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ia(n,e,s),i=i.next}while(i!==r)}yt(t,e,n);break;case 1:if(!oe&&(An(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){W(n,e,a)}yt(t,e,n);break;case 21:yt(t,e,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,yt(t,e,n),oe=r):yt(t,e,n);break;default:yt(t,e,n)}}function ec(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qg),e.forEach(function(r){var i=iv.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fe(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,ze=!1;break e;case 3:ee=a.stateNode.containerInfo,ze=!0;break e;case 4:ee=a.stateNode.containerInfo,ze=!0;break e}a=a.return}if(ee===null)throw Error(y(160));rh(o,s,i),ee=null,ze=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){W(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ih(e,t),e=e.sibling}function ih(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fe(e,t),Ge(t),r&4){try{yr(3,t,t.return),No(3,t)}catch(I){W(t,t.return,I)}try{yr(5,t,t.return)}catch(I){W(t,t.return,I)}}break;case 1:Fe(e,t),Ge(t),r&512&&n!==null&&An(n,n.return);break;case 5:if(Fe(e,t),Ge(t),r&512&&n!==null&&An(n,n.return),t.flags&32){var i=t.stateNode;try{kr(i,"")}catch(I){W(t,t.return,I)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&kd(i,o),Qs(a,s);var u=Qs(a,o);for(s=0;s<l.length;s+=2){var h=l[s],m=l[s+1];h==="style"?Ad(i,m):h==="dangerouslySetInnerHTML"?Pd(i,m):h==="children"?kr(i,m):Ga(i,h,m,u)}switch(a){case"input":Hs(i,o);break;case"textarea":Td(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Dn(i,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?Dn(i,!!o.multiple,o.defaultValue,!0):Dn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Lr]=o}catch(I){W(t,t.return,I)}}break;case 6:if(Fe(e,t),Ge(t),r&4){if(t.stateNode===null)throw Error(y(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(I){W(t,t.return,I)}}break;case 3:if(Fe(e,t),Ge(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rr(e.containerInfo)}catch(I){W(t,t.return,I)}break;case 4:Fe(e,t),Ge(t);break;case 13:Fe(e,t),Ge(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Cl=G())),r&4&&ec(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(oe=(u=oe)||h,Fe(e,t),oe=u):Fe(e,t),Ge(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(k=t,h=t.child;h!==null;){for(m=k=h;k!==null;){switch(p=k,v=p.child,p.tag){case 0:case 11:case 14:case 15:yr(4,p,p.return);break;case 1:An(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(I){W(r,n,I)}}break;case 5:An(p,p.return);break;case 22:if(p.memoizedState!==null){nc(m);continue}}v!==null?(v.return=p,k=v):nc(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Rd("display",s))}catch(I){W(t,t.return,I)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(I){W(t,t.return,I)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Fe(e,t),Ge(t),r&4&&ec(t);break;case 21:break;default:Fe(e,t),Ge(t)}}function Ge(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(nh(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(kr(i,""),r.flags&=-33);var o=Zu(t);Ta(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Zu(t);ka(t,a,s);break;default:throw Error(y(161))}}catch(l){W(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Yg(t,e,n){k=t,oh(t)}function oh(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||vi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||oe;a=vi;var u=oe;if(vi=s,(oe=l)&&!u)for(k=i;k!==null;)s=k,l=s.child,s.tag===22&&s.memoizedState!==null?rc(i):l!==null?(l.return=s,k=l):rc(i);for(;o!==null;)k=o,oh(o),o=o.sibling;k=i,vi=a,oe=u}tc(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,k=o):tc(t)}}function tc(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:oe||No(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:be(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&bu(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bu(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Rr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}oe||e.flags&512&&Sa(e)}catch(p){W(e,e.return,p)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function nc(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function rc(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{No(4,e)}catch(l){W(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){W(e,i,l)}}var o=e.return;try{Sa(e)}catch(l){W(e,o,l)}break;case 5:var s=e.return;try{Sa(e)}catch(l){W(e,s,l)}}}catch(l){W(e,e.return,l)}if(e===t){k=null;break}var a=e.sibling;if(a!==null){a.return=e.return,k=a;break}k=e.return}}var Xg=Math.ceil,ro=gt.ReactCurrentDispatcher,kl=gt.ReactCurrentOwner,Oe=gt.ReactCurrentBatchConfig,x=0,Z=null,q=null,te=0,we=0,Nn=Vt(0),Y=0,zr=null,ln=0,Oo=0,Tl=0,_r=null,he=null,Cl=0,Kn=1/0,nt=null,io=!1,Ca=null,xt=null,yi=!1,Rt=null,oo=0,wr=0,Pa=null,Oi=-1,Di=0;function ue(){return x&6?G():Oi!==-1?Oi:Oi=G()}function Mt(t){return t.mode&1?x&2&&te!==0?te&-te:xg.transition!==null?(Di===0&&(Di=jd()),Di):(t=U,t!==0||(t=window.event,t=t===void 0?16:qd(t.type)),t):1}function He(t,e,n,r){if(50<wr)throw wr=0,Pa=null,Error(y(185));Wr(t,n,r),(!(x&2)||t!==Z)&&(t===Z&&(!(x&2)&&(Oo|=n),Y===4&&St(t,te)),ve(t,r),n===1&&x===0&&!(e.mode&1)&&(Kn=G()+500,Po&&Ht()))}function ve(t,e){var n=t.callbackNode;xm(t,e);var r=Bi(t,t===Z?te:0);if(r===0)n!==null&&fu(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fu(n),e===1)t.tag===0?Lg(ic.bind(null,t)):pf(ic.bind(null,t)),Ag(function(){!(x&6)&&Ht()}),n=null;else{switch(Bd(r)){case 1:n=Ja;break;case 4:n=zd;break;case 16:n=ji;break;case 536870912:n=$d;break;default:n=ji}n=hh(n,sh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sh(t,e){if(Oi=-1,Di=0,x&6)throw Error(y(327));var n=t.callbackNode;if(Fn()&&t.callbackNode!==n)return null;var r=Bi(t,t===Z?te:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=so(t,r);else{e=r;var i=x;x|=2;var o=lh();(Z!==t||te!==e)&&(nt=null,Kn=G()+500,tn(t,e));do try{ev();break}catch(a){ah(t,a)}while(1);dl(),ro.current=o,x=i,q!==null?e=0:(Z=null,te=0,e=Y)}if(e!==0){if(e===2&&(i=ea(t),i!==0&&(r=i,e=Ra(t,i))),e===1)throw n=zr,tn(t,0),St(t,r),ve(t,G()),n;if(e===6)St(t,r);else{if(i=t.current.alternate,!(r&30)&&!Jg(i)&&(e=so(t,r),e===2&&(o=ea(t),o!==0&&(r=o,e=Ra(t,o))),e===1))throw n=zr,tn(t,0),St(t,r),ve(t,G()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(y(345));case 2:Qt(t,he,nt);break;case 3:if(St(t,r),(r&130023424)===r&&(e=Cl+500-G(),10<e)){if(Bi(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ue(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=la(Qt.bind(null,t,he,nt),e);break}Qt(t,he,nt);break;case 4:if(St(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Ve(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xg(r/1960))-r,10<r){t.timeoutHandle=la(Qt.bind(null,t,he,nt),r);break}Qt(t,he,nt);break;case 5:Qt(t,he,nt);break;default:throw Error(y(329))}}}return ve(t,G()),t.callbackNode===n?sh.bind(null,t):null}function Ra(t,e){var n=_r;return t.current.memoizedState.isDehydrated&&(tn(t,e).flags|=256),t=so(t,e),t!==2&&(e=he,he=n,e!==null&&Aa(e)),t}function Aa(t){he===null?he=t:he.push.apply(he,t)}function Jg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!We(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function St(t,e){for(e&=~Tl,e&=~Oo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ve(e),r=1<<n;t[n]=-1,e&=~r}}function ic(t){if(x&6)throw Error(y(327));Fn();var e=Bi(t,0);if(!(e&1))return ve(t,G()),null;var n=so(t,e);if(t.tag!==0&&n===2){var r=ea(t);r!==0&&(e=r,n=Ra(t,r))}if(n===1)throw n=zr,tn(t,0),St(t,e),ve(t,G()),n;if(n===6)throw Error(y(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qt(t,he,nt),ve(t,G()),null}function Pl(t,e){var n=x;x|=1;try{return t(e)}finally{x=n,x===0&&(Kn=G()+500,Po&&Ht())}}function un(t){Rt!==null&&Rt.tag===0&&!(x&6)&&Fn();var e=x;x|=1;var n=Oe.transition,r=U;try{if(Oe.transition=null,U=1,t)return t()}finally{U=r,Oe.transition=n,x=e,!(x&6)&&Ht()}}function Rl(){we=Nn.current,$(Nn)}function tn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Rg(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gi();break;case 3:Hn(),$(me),$(se),vl();break;case 5:gl(r);break;case 4:Hn();break;case 13:$(B);break;case 19:$(B);break;case 10:fl(r.type._context);break;case 22:case 23:Rl()}n=n.return}if(Z=t,q=t=Ut(t.current,null),te=we=e,Y=0,zr=null,Tl=Oo=ln=0,he=_r=null,Jt!==null){for(e=0;e<Jt.length;e++)if(n=Jt[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Jt=null}return t}function ah(t,e){do{var n=q;try{if(dl(),Ri.current=no,to){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}to=!1}if(an=0,J=Q=V=null,vr=!1,Ur=0,kl.current=null,n===null||n.return===null){Y=1,zr=e,q=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=te,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Wu(s);if(v!==null){v.flags&=-257,Ku(v,s,a,o,e),v.mode&1&&Hu(o,u,e),e=v,l=u;var _=e.updateQueue;if(_===null){var I=new Set;I.add(l),e.updateQueue=I}else _.add(l);break e}else{if(!(e&1)){Hu(o,u,e),Al();break e}l=Error(y(426))}}else if(j&&a.mode&1){var P=Wu(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Ku(P,s,a,o,e),ul(Wn(l,a));break e}}o=l=Wn(l,a),Y!==4&&(Y=2),_r===null?_r=[o]:_r.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=Hf(o,l,e);Fu(o,f);break e;case 1:a=l;var c=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(xt===null||!xt.has(d)))){o.flags|=65536,e&=-e,o.lanes|=e;var g=Wf(o,a,e);Fu(o,g);break e}}o=o.return}while(o!==null)}ch(n)}catch(w){e=w,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function lh(){var t=ro.current;return ro.current=no,t===null?no:t}function Al(){(Y===0||Y===3||Y===2)&&(Y=4),Z===null||!(ln&268435455)&&!(Oo&268435455)||St(Z,te)}function so(t,e){var n=x;x|=2;var r=lh();(Z!==t||te!==e)&&(nt=null,tn(t,e));do try{Zg();break}catch(i){ah(t,i)}while(1);if(dl(),x=n,ro.current=r,q!==null)throw Error(y(261));return Z=null,te=0,Y}function Zg(){for(;q!==null;)uh(q)}function ev(){for(;q!==null&&!Tm();)uh(q)}function uh(t){var e=fh(t.alternate,t,we);t.memoizedProps=t.pendingProps,e===null?ch(t):q=e,kl.current=null}function ch(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gg(n,e),n!==null){n.flags&=32767,q=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Y=6,q=null;return}}else if(n=Kg(n,e,we),n!==null){q=n;return}if(e=e.sibling,e!==null){q=e;return}q=e=t}while(e!==null);Y===0&&(Y=5)}function Qt(t,e,n){var r=U,i=Oe.transition;try{Oe.transition=null,U=1,tv(t,e,n,r)}finally{Oe.transition=i,U=r}return null}function tv(t,e,n,r){do Fn();while(Rt!==null);if(x&6)throw Error(y(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(y(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Mm(t,o),t===Z&&(q=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yi||(yi=!0,hh(ji,function(){return Fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Oe.transition,Oe.transition=null;var s=U;U=1;var a=x;x|=4,kl.current=null,Qg(t,n),ih(n,t),Eg(sa),Vi=!!oa,sa=oa=null,t.current=n,Yg(n),Cm(),x=a,U=s,Oe.transition=o}else t.current=n;if(yi&&(yi=!1,Rt=t,oo=i),o=t.pendingLanes,o===0&&(xt=null),Am(n.stateNode),ve(t,G()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(io)throw io=!1,t=Ca,Ca=null,t;return oo&1&&t.tag!==0&&Fn(),o=t.pendingLanes,o&1?t===Pa?wr++:(wr=0,Pa=t):wr=0,Ht(),null}function Fn(){if(Rt!==null){var t=Bd(oo),e=Oe.transition,n=U;try{if(Oe.transition=null,U=16>t?16:t,Rt===null)var r=!1;else{if(t=Rt,Rt=null,oo=0,x&6)throw Error(y(331));var i=x;for(x|=4,k=t.current;k!==null;){var o=k,s=o.child;if(k.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var h=k;switch(h.tag){case 0:case 11:case 15:yr(8,h,o)}var m=h.child;if(m!==null)m.return=h,k=m;else for(;k!==null;){h=k;var p=h.sibling,v=h.return;if(th(h),h===u){k=null;break}if(p!==null){p.return=v,k=p;break}k=v}}}var _=o.alternate;if(_!==null){var I=_.child;if(I!==null){_.child=null;do{var P=I.sibling;I.sibling=null,I=P}while(I!==null)}}k=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,k=s;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:yr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,k=f;break e}k=o.return}}var c=t.current;for(k=c;k!==null;){s=k;var d=s.child;if(s.subtreeFlags&2064&&d!==null)d.return=s,k=d;else e:for(s=c;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:No(9,a)}}catch(w){W(a,a.return,w)}if(a===s){k=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,k=g;break e}k=a.return}}if(x=i,Ht(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Io,t)}catch{}r=!0}return r}finally{U=n,Oe.transition=e}}return!1}function oc(t,e,n){e=Wn(n,e),e=Hf(t,e,1),t=Lt(t,e,1),e=ue(),t!==null&&(Wr(t,1,e),ve(t,e))}function W(t,e,n){if(t.tag===3)oc(t,t,n);else for(;e!==null;){if(e.tag===3){oc(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){t=Wn(n,t),t=Wf(e,t,1),e=Lt(e,t,1),t=ue(),e!==null&&(Wr(e,1,t),ve(e,t));break}}e=e.return}}function nv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ue(),t.pingedLanes|=t.suspendedLanes&n,Z===t&&(te&n)===n&&(Y===4||Y===3&&(te&130023424)===te&&500>G()-Cl?tn(t,0):Tl|=n),ve(t,e)}function dh(t,e){e===0&&(t.mode&1?(e=li,li<<=1,!(li&130023424)&&(li=4194304)):e=1);var n=ue();t=ft(t,e),t!==null&&(Wr(t,e,n),ve(t,n))}function rv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),dh(t,n)}function iv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(e),dh(t,n)}var fh;fh=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||me.current)pe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pe=!1,Wg(t,e,n);pe=!!(t.flags&131072)}else pe=!1,j&&e.flags&1048576&&mf(e,Yi,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ni(t,e),t=e.pendingProps;var i=jn(e,se.current);Un(e,n),i=_l(null,e,r,t,i,n);var o=wl();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ge(r)?(o=!0,qi(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pl(e),i.updater=Ro,e.stateNode=i,i._reactInternals=e,ma(e,r,t,n),e=ya(null,e,r,!0,o,n)):(e.tag=0,j&&o&&al(e),le(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ni(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sv(r),t=be(r,t),i){case 0:e=va(null,e,r,t,n);break e;case 1:e=Qu(null,e,r,t,n);break e;case 11:e=Gu(null,e,r,t,n);break e;case 14:e=qu(null,e,r,be(r.type,t),n);break e}throw Error(y(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:be(r,i),va(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:be(r,i),Qu(t,e,r,i,n);case 3:e:{if(Qf(e),t===null)throw Error(y(387));r=e.pendingProps,o=e.memoizedState,i=o.element,_f(t,e),Zi(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Wn(Error(y(423)),e),e=Yu(t,e,r,n,i);break e}else if(r!==i){i=Wn(Error(y(424)),e),e=Yu(t,e,r,n,i);break e}else for(Ie=Dt(e.stateNode.containerInfo.firstChild),Se=e,j=!0,$e=null,n=Sf(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===i){e=ht(t,e,n);break e}le(t,e,r,n)}e=e.child}return e;case 5:return kf(e),t===null&&fa(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,aa(r,i)?s=null:o!==null&&aa(r,o)&&(e.flags|=32),qf(t,e),le(t,e,s,n),e.child;case 6:return t===null&&fa(e),null;case 13:return Yf(t,e,n);case 4:return ml(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vn(e,null,r,n):le(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:be(r,i),Gu(t,e,r,i,n);case 7:return le(t,e,e.pendingProps,n),e.child;case 8:return le(t,e,e.pendingProps.children,n),e.child;case 12:return le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,b(Xi,r._currentValue),r._currentValue=s,o!==null)if(We(o.value,s)){if(o.children===i.children&&!me.current){e=ht(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=ut(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ha(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(y(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ha(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}le(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Un(e,n),i=De(i),r=r(i),e.flags|=1,le(t,e,r,n),e.child;case 14:return r=e.type,i=be(r,e.pendingProps),i=be(r.type,i),qu(t,e,r,i,n);case 15:return Kf(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:be(r,i),Ni(t,e),e.tag=1,ge(r)?(t=!0,qi(e)):t=!1,Un(e,n),Ef(e,r,i),ma(e,r,i,n),ya(null,e,r,!0,t,n);case 19:return Xf(t,e,n);case 22:return Gf(t,e,n)}throw Error(y(156,e.tag))};function hh(t,e){return bd(t,e)}function ov(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(t,e,n,r){return new ov(t,e,n,r)}function Nl(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sv(t){if(typeof t=="function")return Nl(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qa)return 11;if(t===Ya)return 14}return 2}function Ut(t,e){var n=t.alternate;return n===null?(n=Ne(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Li(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Nl(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case wn:return nn(n.children,i,o,e);case qa:s=8,i|=8;break;case zs:return t=Ne(12,n,e,i|2),t.elementType=zs,t.lanes=o,t;case $s:return t=Ne(13,n,e,i),t.elementType=$s,t.lanes=o,t;case js:return t=Ne(19,n,e,i),t.elementType=js,t.lanes=o,t;case Ed:return Do(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _d:s=10;break e;case wd:s=9;break e;case Qa:s=11;break e;case Ya:s=14;break e;case wt:s=16,r=null;break e}throw Error(y(130,t==null?t:typeof t,""))}return e=Ne(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function nn(t,e,n,r){return t=Ne(7,t,r,e),t.lanes=n,t}function Do(t,e,n,r){return t=Ne(22,t,r,e),t.elementType=Ed,t.lanes=n,t.stateNode={isHidden:!1},t}function vs(t,e,n){return t=Ne(6,t,null,e),t.lanes=n,t}function ys(t,e,n){return e=Ne(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function av(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ol(t,e,n,r,i,o,s,a,l){return t=new av(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ne(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pl(o),t}function lv(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ph(t){if(!t)return jt;t=t._reactInternals;e:{if(mn(t)!==t||t.tag!==1)throw Error(y(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ge(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(y(171))}if(t.tag===1){var n=t.type;if(ge(n))return hf(t,n,e)}return e}function mh(t,e,n,r,i,o,s,a,l){return t=Ol(n,r,!0,t,i,o,s,a,l),t.context=ph(null),n=t.current,r=ue(),i=Mt(n),o=ut(r,i),o.callback=e??null,Lt(n,o,i),t.current.lanes=i,Wr(t,i,r),ve(t,r),t}function Lo(t,e,n,r){var i=e.current,o=ue(),s=Mt(i);return n=ph(n),e.context===null?e.context=n:e.pendingContext=n,e=ut(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Lt(i,e,s),t!==null&&(He(t,i,s,o),Pi(t,i,s)),s}function ao(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dl(t,e){sc(t,e),(t=t.alternate)&&sc(t,e)}function uv(){return null}var gh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ll(t){this._internalRoot=t}xo.prototype.render=Ll.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(y(409));Lo(t,e,null,null)};xo.prototype.unmount=Ll.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;un(function(){Lo(null,t,null,null)}),e[dt]=null}};function xo(t){this._internalRoot=t}xo.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wd();t={blockedOn:null,target:t,priority:e};for(var n=0;n<It.length&&e!==0&&e<It[n].priority;n++);It.splice(n,0,t),n===0&&Gd(t)}};function xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ac(){}function cv(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ao(s);o.call(u)}}var s=mh(e,r,t,0,null,!1,!1,"",ac);return t._reactRootContainer=s,t[dt]=s.current,Or(t.nodeType===8?t.parentNode:t),un(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ao(l);a.call(u)}}var l=Ol(t,0,!1,null,null,!1,!1,"",ac);return t._reactRootContainer=l,t[dt]=l.current,Or(t.nodeType===8?t.parentNode:t),un(function(){Lo(e,l,n,r)}),l}function Uo(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ao(s);a.call(l)}}Lo(e,s,t,i)}else s=cv(n,e,t,i,r);return ao(s)}Vd=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=cr(e.pendingLanes);n!==0&&(Za(e,n|1),ve(e,G()),!(x&6)&&(Kn=G()+500,Ht()))}break;case 13:un(function(){var r=ft(t,1);if(r!==null){var i=ue();He(r,t,1,i)}}),Dl(t,1)}};el=function(t){if(t.tag===13){var e=ft(t,134217728);if(e!==null){var n=ue();He(e,t,134217728,n)}Dl(t,134217728)}};Hd=function(t){if(t.tag===13){var e=Mt(t),n=ft(t,e);if(n!==null){var r=ue();He(n,t,e,r)}Dl(t,e)}};Wd=function(){return U};Kd=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};Xs=function(t,e,n){switch(e){case"input":if(Hs(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Co(r);if(!i)throw Error(y(90));Sd(r),Hs(r,i)}}}break;case"textarea":Td(t,n);break;case"select":e=n.value,e!=null&&Dn(t,!!n.multiple,e,!1)}};Dd=Pl;Ld=un;var dv={usingClientEntryPoint:!1,Events:[Gr,kn,Co,Nd,Od,Pl]},ar={findFiberByHostInstance:Xt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},fv={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ud(t),t===null?null:t.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||uv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{Io=_i.inject(fv),Ye=_i}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dv;Ce.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xl(e))throw Error(y(200));return lv(t,e,null,n)};Ce.createRoot=function(t,e){if(!xl(t))throw Error(y(299));var n=!1,r="",i=gh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ol(t,1,!1,null,null,n,!1,r,i),t[dt]=e.current,Or(t.nodeType===8?t.parentNode:t),new Ll(e)};Ce.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=Ud(e),t=t===null?null:t.stateNode,t};Ce.flushSync=function(t){return un(t)};Ce.hydrate=function(t,e,n){if(!Mo(e))throw Error(y(200));return Uo(null,t,e,!0,n)};Ce.hydrateRoot=function(t,e,n){if(!xl(t))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=gh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=mh(e,null,t,1,n??null,i,!1,o,s),t[dt]=e.current,Or(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xo(e)};Ce.render=function(t,e,n){if(!Mo(e))throw Error(y(200));return Uo(null,t,e,!1,n)};Ce.unmountComponentAtNode=function(t){if(!Mo(t))throw Error(y(40));return t._reactRootContainer?(un(function(){Uo(null,null,t,!1,function(){t._reactRootContainer=null,t[dt]=null})}),!0):!1};Ce.unstable_batchedUpdates=Pl;Ce.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mo(n))throw Error(y(200));if(t==null||t._reactInternals===void 0)throw Error(y(38));return Uo(t,e,n,!1,r)};Ce.version="18.2.0-next-9e3b772b8-20220608";function vh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vh)}catch(t){console.error(t)}}vh(),pd.exports=Ce;var hv=pd.exports,lc=hv;Fs.createRoot=lc.createRoot,Fs.hydrateRoot=lc.hydrateRoot;var pv={exports:{}},_s={exports:{}},ws,uc;function mv(){if(uc)return ws;uc=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ws=t,ws}var Es,cc;function gv(){if(cc)return Es;cc=1;var t=mv();function e(){}function n(){}return n.resetWarningCache=e,Es=function(){function r(s,a,l,u,h,m){if(m!==t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function i(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:e};return o.PropTypes=o,o},Es}var dc;function vv(){return dc||(dc=1,_s.exports=gv()()),_s.exports}var Is={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var fc;function yv(){return fc||(fc=1,function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(s==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)e.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()}(Is)),Is.exports}(function(t){t.exports=function(e){var n={};function r(i){if(n[i])return n[i].exports;var o=n[i]={i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(i,o,s){r.o(i,o)||Object.defineProperty(i,o,{configurable:!1,enumerable:!0,get:s})},r.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(o,"a",o),o},r.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},r.p="",r(r.s=0)}([function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Types=n.Loader=void 0;var i=function(){function d(g,w){for(var E=0;E<w.length;E++){var S=w[E];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(g,S.key,S)}}return function(g,w,E){return w&&d(g.prototype,w),E&&d(g,E),g}}(),o=r(1),s=m(o),a=r(2),l=m(a),u=r(3),h=m(u);function m(d){return d&&d.__esModule?d:{default:d}}function p(d,g,w){return g in d?Object.defineProperty(d,g,{value:w,enumerable:!0,configurable:!0,writable:!0}):d[g]=w,d}function v(d,g){if(!(d instanceof g))throw new TypeError("Cannot call a class as a function")}function _(d,g){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:d}function I(d,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);d.prototype=Object.create(g&&g.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(d,g):d.__proto__=g)}var P=n.Loader=function(d){I(g,d);function g(){return v(this,g),_(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return i(g,[{key:"renderDiv",value:function(E){var S=this.props.styles||{};return this.props.color&&(S.backgroundColor=this.props.color),s.default.createElement("div",{key:E,style:S})}},{key:"render",value:function(){var E,S=c(f[this.props.type]),C=(0,h.default)((E={loader:!0},p(E,"loader-"+this.props.size,this.props.size!=="md"),p(E,"loader-active",this.props.active),p(E,"loader-hidden",!this.props.active),E),this.props.className),F=(0,h.default)(["loader-inner",this.props.type,this.props.innerClassName]);return s.default.createElement("div",{className:C,style:this.props.style},s.default.createElement("div",{className:F},S.map(this.renderDiv.bind(this))))}}],[{key:"removeType",value:function(E){delete f[key]}},{key:"addType",value:function(E,S){return f[E]=S}}]),g}(o.Component);P.propTypes={type:l.default.string,active:l.default.bool,color:l.default.string,innerClassName:l.default.string},P.defaultProps={type:"ball-pulse",active:!0},n.default=P;var f=n.Types={"ball-pulse":3,"ball-grid-pulse":9,"ball-clip-rotate":1,"ball-clip-rotate-pulse":2,"square-spin":1,"ball-clip-rotate-multiple":2,"ball-pulse-rise":5,"ball-rotate":1,"cube-transition":2,"ball-zig-zag":2,"ball-zig-zag-deflect":2,"ball-triangle-path":3,"ball-scale":1,"line-scale":5,"line-scale-party":4,"ball-scale-multiple":3,"ball-pulse-sync":3,"ball-beat":3,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin-fade-loader":8,"line-spin-fade-loader":8,"triangle-skew-spin":1,pacman:5,"ball-grid-beat":9,"semi-circle-spin":1};function c(d){for(var g=-1,w=[];++g<d;)w.push(g);return w}},function(e,n){e.exports=Ha},function(e,n){e.exports=vv()},function(e,n){e.exports=yv()}])})(pv);/**
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
 */const yh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_v=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},_h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=o>>2,m=(o&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(p=64)),r.push(n[h],n[m],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_v(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||m==null)throw new wv;const p=o<<2|a>>4;if(r.push(p),u!==64){const v=a<<4&240|u>>2;if(r.push(v),m!==64){const _=u<<6&192|m;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ev=function(t){const e=yh(t);return _h.encodeByteArray(e,!0)},lo=function(t){return Ev(t).replace(/\./g,"")},wh=function(t){try{return _h.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Iv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sv=()=>Iv().__FIREBASE_DEFAULTS__,kv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Tv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wh(t[1]);return e&&JSON.parse(e)},Ml=()=>{try{return Sv()||kv()||Tv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Eh=t=>{var e,n;return(n=(e=Ml())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ih=t=>{const e=Eh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sh=()=>{var t;return(t=Ml())===null||t===void 0?void 0:t.config},kh=t=>{var e;return(e=Ml())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Cv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Th(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[lo(JSON.stringify(n)),lo(JSON.stringify(s)),a].join(".")}/**
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
 */function ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ae())}function Ch(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Rv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Av(){const t=ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ph(){try{return typeof indexedDB=="object"}catch{return!1}}function Rh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Nv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ov="FirebaseError";class Me extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ov,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?Dv(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Me(i,a,r)}}function Dv(t,e){return t.replace(Lv,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Lv=/\{\$([^}]+)}/g;function xv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(hc(o)&&hc(s)){if(!$r(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hc(t){return t!==null&&typeof t=="object"}/**
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
 */function Qr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Mv(t,e){const n=new Uv(t,e);return n.subscribe.bind(n)}class Uv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Fv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ss),i.error===void 0&&(i.error=Ss),i.complete===void 0&&(i.complete=Ss);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ss(){}/**
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
 */const bv=1e3,zv=2,$v=4*60*60*1e3,jv=.5;function pc(t,e=bv,n=zv){const r=e*Math.pow(n,t),i=Math.round(jv*r*(Math.random()-.5)*2);return Math.min($v,r+i)}/**
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
 */function vt(t){return t&&t._delegate?t._delegate:t}class xe{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class Bv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Cv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hv(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vv(t){return t===Yt?void 0:t}function Hv(t){return t.instantiationMode==="EAGER"}/**
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
 */class Wv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var M;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(M||(M={}));const Kv={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Gv=M.INFO,qv={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Qv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qv[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fo{constructor(e){this.name=e,this._logLevel=Gv,this._logHandler=Qv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const Yv=(t,e)=>e.some(n=>t instanceof n);let mc,gc;function Xv(){return mc||(mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jv(){return gc||(gc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ah=new WeakMap,Na=new WeakMap,Nh=new WeakMap,ks=new WeakMap,Ul=new WeakMap;function Zv(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Ft(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Ah.set(n,t)}).catch(()=>{}),Ul.set(e,t),e}function ey(t){if(Na.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Na.set(t,e)}let Oa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Na.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ty(t){Oa=t(Oa)}function ny(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ts(this),e,...n);return Nh.set(r,e.sort?e.sort():[e]),Ft(r)}:Jv().includes(t)?function(...e){return t.apply(Ts(this),e),Ft(Ah.get(this))}:function(...e){return Ft(t.apply(Ts(this),e))}}function ry(t){return typeof t=="function"?ny(t):(t instanceof IDBTransaction&&ey(t),Yv(t,Xv())?new Proxy(t,Oa):t)}function Ft(t){if(t instanceof IDBRequest)return Zv(t);if(ks.has(t))return ks.get(t);const e=ry(t);return e!==t&&(ks.set(t,e),Ul.set(e,t)),e}const Ts=t=>Ul.get(t);function iy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Ft(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ft(s.result),l.oldVersion,l.newVersion,Ft(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const oy=["get","getKey","getAll","getAllKeys","count"],sy=["put","add","delete","clear"],Cs=new Map;function vc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cs.get(e))return Cs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oy.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Cs.set(e,o),o}ty(t=>({...t,get:(e,n,r)=>vc(e,n)||t.get(e,n,r),has:(e,n)=>!!vc(e,n)||t.has(e,n)}));/**
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
 */class ay{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ly(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ly(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Da="@firebase/app",yc="0.9.20";/**
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
 */const cn=new Fo("@firebase/app"),uy="@firebase/app-compat",cy="@firebase/analytics-compat",dy="@firebase/analytics",fy="@firebase/app-check-compat",hy="@firebase/app-check",py="@firebase/auth",my="@firebase/auth-compat",gy="@firebase/database",vy="@firebase/database-compat",yy="@firebase/functions",_y="@firebase/functions-compat",wy="@firebase/installations",Ey="@firebase/installations-compat",Iy="@firebase/messaging",Sy="@firebase/messaging-compat",ky="@firebase/performance",Ty="@firebase/performance-compat",Cy="@firebase/remote-config",Py="@firebase/remote-config-compat",Ry="@firebase/storage",Ay="@firebase/storage-compat",Ny="@firebase/firestore",Oy="@firebase/firestore-compat",Dy="firebase",Ly="10.5.0";/**
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
 */const La="[DEFAULT]",xy={[Da]:"fire-core",[uy]:"fire-core-compat",[dy]:"fire-analytics",[cy]:"fire-analytics-compat",[hy]:"fire-app-check",[fy]:"fire-app-check-compat",[py]:"fire-auth",[my]:"fire-auth-compat",[gy]:"fire-rtdb",[vy]:"fire-rtdb-compat",[yy]:"fire-fn",[_y]:"fire-fn-compat",[wy]:"fire-iid",[Ey]:"fire-iid-compat",[Iy]:"fire-fcm",[Sy]:"fire-fcm-compat",[ky]:"fire-perf",[Ty]:"fire-perf-compat",[Cy]:"fire-rc",[Py]:"fire-rc-compat",[Ry]:"fire-gcs",[Ay]:"fire-gcs-compat",[Ny]:"fire-fst",[Oy]:"fire-fst-compat","fire-js":"fire-js",[Dy]:"fire-js-all"};/**
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
 */const uo=new Map,xa=new Map;function My(t,e){try{t.container.addComponent(e)}catch(n){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ke(t){const e=t.name;if(xa.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;xa.set(e,t);for(const n of uo.values())My(n,t);return!0}function Wt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Uy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new gn("app","Firebase",Uy);/**
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
 */class Fy{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
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
 */const vn=Ly;function Oh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:La,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw bt.create("bad-app-name",{appName:String(i)});if(n||(n=Sh()),!n)throw bt.create("no-options");const o=uo.get(i);if(o){if($r(n,o.options)&&$r(r,o.config))return o;throw bt.create("duplicate-app",{appName:i})}const s=new Wv(i);for(const l of xa.values())s.addComponent(l);const a=new Fy(n,r,s);return uo.set(i,a),a}function bo(t=La){const e=uo.get(t);if(!e&&t===La&&Sh())return Oh();if(!e)throw bt.create("no-app",{appName:t});return e}function ye(t,e,n){var r;let i=(r=xy[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(a.join(" "));return}Ke(new xe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const by="firebase-heartbeat-database",zy=1,jr="firebase-heartbeat-store";let Ps=null;function Dh(){return Ps||(Ps=iy(by,zy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(jr)}}}).catch(t=>{throw bt.create("idb-open",{originalErrorMessage:t.message})})),Ps}async function $y(t){try{return await(await Dh()).transaction(jr).objectStore(jr).get(Lh(t))}catch(e){if(e instanceof Me)cn.warn(e.message);else{const n=bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cn.warn(n.message)}}}async function _c(t,e){try{const r=(await Dh()).transaction(jr,"readwrite");await r.objectStore(jr).put(e,Lh(t)),await r.done}catch(n){if(n instanceof Me)cn.warn(n.message);else{const r=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cn.warn(r.message)}}}function Lh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jy=1024,By=30*24*60*60*1e3;class Vy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=By}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wc(),{heartbeatsToSend:n,unsentEntries:r}=Hy(this._heartbeatsCache.heartbeats),i=lo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wc(){return new Date().toISOString().substring(0,10)}function Hy(t,e=jy){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Ec(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ec(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Wy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ph()?Rh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $y(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _c(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _c(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ec(t){return lo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ky(t){Ke(new xe("platform-logger",e=>new ay(e),"PRIVATE")),Ke(new xe("heartbeat",e=>new Vy(e),"PRIVATE")),ye(Da,yc,t),ye(Da,yc,"esm2017"),ye("fire-js","")}Ky("");/**
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
 */class fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fe.UNAUTHENTICATED=new fe(null),fe.GOOGLE_CREDENTIALS=new fe("google-credentials-uid"),fe.FIRST_PARTY=new fe("first-party-uid"),fe.MOCK_USER=new fe("mock-user");/**
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
 */let Yr="10.5.0";/**
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
 */const Gn=new Fo("@firebase/firestore");function Gy(t,...e){if(Gn.logLevel<=M.DEBUG){const n=e.map(Fl);Gn.debug(`Firestore (${Yr}): ${t}`,...n)}}function qy(t,...e){if(Gn.logLevel<=M.ERROR){const n=e.map(Fl);Gn.error(`Firestore (${Yr}): ${t}`,...n)}}function Qy(t,...e){if(Gn.logLevel<=M.WARN){const n=e.map(Fl);Gn.warn(`Firestore (${Yr}): ${t}`,...n)}}function Fl(t){if(typeof t=="string")return t;try{/**
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
 */function xh(t="Unexpected state"){const e=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+t;throw qy(e),new Error(e)}function Mh(t,e){t||xh()}/**
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
 */const je="invalid-argument",Ic="failed-precondition";class Ee extends Me{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Uh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(fe.UNAUTHENTICATED))}shutdown(){}}class Xy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jy{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Mh(typeof e.accessToken=="string"),new Uh(e.accessToken,new fe(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Zy{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=fe.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class e0{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new Zy(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class t0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n0{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Mh(typeof e.token=="string"),new t0(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class co{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new co("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof co&&e.projectId===this.projectId&&e.database===this.database}}function r0(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":xh()}function i0(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ee(je,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=r0(t);throw new Ee(je,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function o0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */var Sc,L;/**
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
 */(L=Sc||(Sc={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const kc=new Map;class Tc{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Ee(je,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Ee(je,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(o,s,a,l){if(s===!0&&l===!0)throw new Ee(je,`${o} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=o0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Ee(je,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Ee(je,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Ee(je,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ee(Ic,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Ee(Ic,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Yy;switch(r.type){case"firstParty":return new e0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ee(je,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=kc.get(n);r&&(Gy("ComponentProvider","Removing Datastore"),kc.delete(n),r.terminate())}(this),Promise.resolve()}}function s0(t,e){const n=typeof t=="object"?t:bo(),r=typeof t=="string"?t:e||"(default)",i=Wt(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const o=Ih("firestore");o&&a0(i,...o)}return i}function a0(t,e,n,r={}){var i;const o=(t=i0(t,Fh))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Qy("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=fe.MOCK_USER;else{a=Th(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Ee(je,"mockUserToken must contain 'sub' or 'user_id' field!");l=new fe(u)}t._authCredentials=new Xy(new Uh(a,l))}}(function(){(function(n){Yr=n})(`${vn}_lite`),Ke(new xe("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new Fh(new Jy(e.getProvider("auth-internal")),new n0(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Ee(je,'"projectId" not provided in firebase.initializeApp.');return new co(a.options.projectId,l)}(i,n),i);return r&&o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),ye("firestore-lite","4.3.0",""),ye("firestore-lite","4.3.0","esm2017")})();var l0="firebase",u0="10.5.0";/**
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
 */ye(l0,u0,"app");const c0=(t,e)=>e.some(n=>t instanceof n);let Cc,Pc;function d0(){return Cc||(Cc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f0(){return Pc||(Pc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bh=new WeakMap,Ma=new WeakMap,zh=new WeakMap,Rs=new WeakMap,bl=new WeakMap;function h0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(zt(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&bh.set(n,t)}).catch(()=>{}),bl.set(e,t),e}function p0(t){if(Ma.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Ma.set(t,e)}let Ua={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ma.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function m0(t){Ua=t(Ua)}function g0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(As(this),e,...n);return zh.set(r,e.sort?e.sort():[e]),zt(r)}:f0().includes(t)?function(...e){return t.apply(As(this),e),zt(bh.get(this))}:function(...e){return zt(t.apply(As(this),e))}}function v0(t){return typeof t=="function"?g0(t):(t instanceof IDBTransaction&&p0(t),c0(t,d0())?new Proxy(t,Ua):t)}function zt(t){if(t instanceof IDBRequest)return h0(t);if(Rs.has(t))return Rs.get(t);const e=v0(t);return e!==t&&(Rs.set(t,e),bl.set(e,t)),e}const As=t=>bl.get(t);function y0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=zt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(zt(s.result),l.oldVersion,l.newVersion,zt(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const _0=["get","getKey","getAll","getAllKeys","count"],w0=["put","add","delete","clear"],Ns=new Map;function Rc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ns.get(e))return Ns.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=w0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ns.set(e,o),o}m0(t=>({...t,get:(e,n,r)=>Rc(e,n)||t.get(e,n,r),has:(e,n)=>!!Rc(e,n)||t.has(e,n)}));const $h="@firebase/installations",zl="0.6.4";/**
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
 */const jh=1e4,Bh=`w:${zl}`,Vh="FIS_v2",E0="https://firebaseinstallations.googleapis.com/v1",I0=60*60*1e3,S0="installations",k0="Installations";/**
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
 */const T0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},dn=new gn(S0,k0,T0);function Hh(t){return t instanceof Me&&t.code.includes("request-failed")}/**
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
 */function Wh({projectId:t}){return`${E0}/projects/${t}/installations`}function Kh(t){return{token:t.token,requestStatus:2,expiresIn:P0(t.expiresIn),creationTime:Date.now()}}async function Gh(t,e){const r=(await e.json()).error;return dn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function qh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function C0(t,{refreshToken:e}){const n=qh(t);return n.append("Authorization",R0(e)),n}async function Qh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function P0(t){return Number(t.replace("s","000"))}function R0(t){return`${Vh} ${t}`}/**
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
 */async function A0({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Wh(t),i=qh(t),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Vh,appId:t.appId,sdkVersion:Bh},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Qh(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Kh(u.authToken)}}else throw await Gh("Create Installation",l)}/**
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
 */function Yh(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function N0(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const O0=/^[cdef][\w-]{21}$/,Fa="";function D0(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=L0(t);return O0.test(n)?n:Fa}catch{return Fa}}function L0(t){return N0(t).substr(0,22)}/**
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
 */function zo(t){return`${t.appName}!${t.appId}`}/**
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
 */const Xh=new Map;function Jh(t,e){const n=zo(t);Zh(n,e),x0(n,e)}function Zh(t,e){const n=Xh.get(t);if(n)for(const r of n)r(e)}function x0(t,e){const n=M0();n&&n.postMessage({key:t,fid:e}),U0()}let en=null;function M0(){return!en&&"BroadcastChannel"in self&&(en=new BroadcastChannel("[Firebase] FID Change"),en.onmessage=t=>{Zh(t.data.key,t.data.fid)}),en}function U0(){Xh.size===0&&en&&(en.close(),en=null)}/**
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
 */const F0="firebase-installations-database",b0=1,fn="firebase-installations-store";let Os=null;function $l(){return Os||(Os=y0(F0,b0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fn)}}})),Os}async function fo(t,e){const n=zo(t),i=(await $l()).transaction(fn,"readwrite"),o=i.objectStore(fn),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&Jh(t,e.fid),e}async function ep(t){const e=zo(t),r=(await $l()).transaction(fn,"readwrite");await r.objectStore(fn).delete(e),await r.done}async function $o(t,e){const n=zo(t),i=(await $l()).transaction(fn,"readwrite"),o=i.objectStore(fn),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&Jh(t,a.fid),a}/**
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
 */async function jl(t){let e;const n=await $o(t.appConfig,r=>{const i=z0(r),o=$0(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===Fa?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function z0(t){const e=t||{fid:D0(),registrationStatus:0};return tp(e)}function $0(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(dn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=j0(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:B0(t)}:{installationEntry:e}}async function j0(t,e){try{const n=await A0(t,e);return fo(t.appConfig,n)}catch(n){throw Hh(n)&&n.customData.serverCode===409?await ep(t.appConfig):await fo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function B0(t){let e=await Ac(t.appConfig);for(;e.registrationStatus===1;)await Yh(100),e=await Ac(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await jl(t);return r||n}return e}function Ac(t){return $o(t,e=>{if(!e)throw dn.create("installation-not-found");return tp(e)})}function tp(t){return V0(t)?{fid:t.fid,registrationStatus:0}:t}function V0(t){return t.registrationStatus===1&&t.registrationTime+jh<Date.now()}/**
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
 */async function H0({appConfig:t,heartbeatServiceProvider:e},n){const r=W0(t,n),i=C0(t,n),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Bh,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Qh(()=>fetch(r,a));if(l.ok){const u=await l.json();return Kh(u)}else throw await Gh("Generate Auth Token",l)}function W0(t,{fid:e}){return`${Wh(t)}/${e}/authTokens:generate`}/**
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
 */async function Bl(t,e=!1){let n;const r=await $o(t.appConfig,o=>{if(!np(o))throw dn.create("not-registered");const s=o.authToken;if(!e&&q0(s))return o;if(s.requestStatus===1)return n=K0(t,e),o;{if(!navigator.onLine)throw dn.create("app-offline");const a=Y0(o);return n=G0(t,a),a}});return n?await n:r.authToken}async function K0(t,e){let n=await Nc(t.appConfig);for(;n.authToken.requestStatus===1;)await Yh(100),n=await Nc(t.appConfig);const r=n.authToken;return r.requestStatus===0?Bl(t,e):r}function Nc(t){return $o(t,e=>{if(!np(e))throw dn.create("not-registered");const n=e.authToken;return X0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function G0(t,e){try{const n=await H0(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await fo(t.appConfig,r),n}catch(n){if(Hh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ep(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await fo(t.appConfig,r)}throw n}}function np(t){return t!==void 0&&t.registrationStatus===2}function q0(t){return t.requestStatus===2&&!Q0(t)}function Q0(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+I0}function Y0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function X0(t){return t.requestStatus===1&&t.requestTime+jh<Date.now()}/**
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
 */async function J0(t){const e=t,{installationEntry:n,registrationPromise:r}=await jl(e);return r?r.catch(console.error):Bl(e).catch(console.error),n.fid}/**
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
 */async function Z0(t,e=!1){const n=t;return await e_(n),(await Bl(n,e)).token}async function e_(t){const{registrationPromise:e}=await jl(t);e&&await e}/**
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
 */function t_(t){if(!t||!t.options)throw Ds("App Configuration");if(!t.name)throw Ds("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ds(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ds(t){return dn.create("missing-app-config-values",{valueName:t})}/**
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
 */const rp="installations",n_="installations-internal",r_=t=>{const e=t.getProvider("app").getImmediate(),n=t_(e),r=Wt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},i_=t=>{const e=t.getProvider("app").getImmediate(),n=Wt(e,rp).getImmediate();return{getId:()=>J0(n),getToken:i=>Z0(n,i)}};function o_(){Ke(new xe(rp,r_,"PUBLIC")),Ke(new xe(n_,i_,"PRIVATE"))}o_();ye($h,zl);ye($h,zl,"esm2017");/**
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
 */const ho="analytics",s_="firebase_id",a_="origin",l_=60*1e3,u_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vl="https://www.googletagmanager.com/gtag/js";/**
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
 */const _e=new Fo("@firebase/analytics");/**
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
 */const c_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ke=new gn("analytics","Analytics",c_);/**
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
 */function d_(t){if(!t.startsWith(Vl)){const e=ke.create("invalid-gtag-resource",{gtagURL:t});return _e.warn(e.message),""}return t}function ip(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function f_(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function h_(t,e){const n=f_("firebase-js-sdk-policy",{createScriptURL:d_}),r=document.createElement("script"),i=`${Vl}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function p_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function m_(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const l=(await ip(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){_e.error(a)}t("config",i,o)}async function g_(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await ip(n);for(const l of s){const u=a.find(m=>m.measurementId===l),h=u&&e[u.appId];if(h)o.push(h);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){_e.error(o)}}function v_(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await g_(t,e,n,a,l)}else if(o==="config"){const[a,l]=s;await m_(t,e,n,r,a,l)}else if(o==="consent"){const[a]=s;t("consent","update",a)}else if(o==="get"){const[a,l,u]=s;t("get",a,l,u)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){_e.error(a)}}return i}function y_(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=v_(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function __(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Vl)&&n.src.includes(t))return n;return null}/**
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
 */const w_=30,E_=1e3;class I_{constructor(e={},n=E_){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const op=new I_;function S_(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function k_(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:S_(r)},o=u_.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ke.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function T_(t,e=op,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw ke.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw ke.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new R_;return setTimeout(async()=>{a.abort()},n!==void 0?n:l_),sp({appId:r,apiKey:i,measurementId:o},s,a,e)}async function sp(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=op){var o;const{appId:s,measurementId:a}=t;try{await C_(r,e)}catch(l){if(a)return _e.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await k_(t);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!P_(u)){if(i.deleteThrottleMetadata(s),a)return _e.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?pc(n,i.intervalMillis,w_):pc(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(s,m),_e.debug(`Calling attemptFetch again in ${h} millis`),sp(t,m,r,i)}}function C_(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(ke.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function P_(t){if(!(t instanceof Me)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class R_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function A_(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
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
 */async function N_(){if(Ph())try{await Rh()}catch(t){return _e.warn(ke.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return _e.warn(ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function O_(t,e,n,r,i,o,s){var a;const l=T_(t);l.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&_e.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>_e.error(v)),e.push(l);const u=N_().then(v=>{if(v)return r.getId()}),[h,m]=await Promise.all([l,u]);__(o)||h_(o,h.measurementId),i("js",new Date);const p=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return p[a_]="firebase",p.update=!0,m!=null&&(p[s_]=m),i("config",h.measurementId,p),h.measurementId}/**
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
 */class D_{constructor(e){this.app=e}_delete(){return delete Er[this.app.options.appId],Promise.resolve()}}let Er={},Oc=[];const Dc={};let Ls="dataLayer",L_="gtag",Lc,ap,xc=!1;function x_(){const t=[];if(Ch()&&t.push("This is a browser extension environment."),Nv()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ke.create("invalid-analytics-context",{errorInfo:e});_e.warn(n.message)}}function M_(t,e,n){x_();const r=t.options.appId;if(!r)throw ke.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_e.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ke.create("no-api-key");if(Er[r]!=null)throw ke.create("already-exists",{id:r});if(!xc){p_(Ls);const{wrappedGtag:o,gtagCore:s}=y_(Er,Oc,Dc,Ls,L_);ap=o,Lc=s,xc=!0}return Er[r]=O_(t,Oc,Dc,e,Lc,Ls,n),new D_(t)}function U_(t=bo()){t=vt(t);const e=Wt(t,ho);return e.isInitialized()?e.getImmediate():F_(t)}function F_(t,e={}){const n=Wt(t,ho);if(n.isInitialized()){const i=n.getImmediate();if($r(e,n.getOptions()))return i;throw ke.create("already-initialized")}return n.initialize({options:e})}function b_(t,e,n,r){t=vt(t),A_(ap,Er[t.app.options.appId],e,n,r).catch(i=>_e.error(i))}const Mc="@firebase/analytics",Uc="0.10.0";function z_(){Ke(new xe(ho,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return M_(r,i,n)},"PUBLIC")),Ke(new xe("analytics-internal",t,"PRIVATE")),ye(Mc,Uc),ye(Mc,Uc,"esm2017");function t(e){try{const n=e.getProvider(ho).getImmediate();return{logEvent:(r,i,o)=>b_(n,r,i,o)}}catch(n){throw ke.create("interop-component-reg-failed",{reason:n})}}}z_();function Hl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function lp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $_=lp,up=new gn("auth","Firebase",lp());/**
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
 */const po=new Fo("@firebase/auth");function j_(t,...e){po.logLevel<=M.WARN&&po.warn(`Auth (${vn}): ${t}`,...e)}function xi(t,...e){po.logLevel<=M.ERROR&&po.error(`Auth (${vn}): ${t}`,...e)}/**
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
 */function pt(t,...e){throw Wl(t,...e)}function Je(t,...e){return Wl(t,...e)}function B_(t,e,n){const r=Object.assign(Object.assign({},$_()),{[e]:n});return new gn("auth","Firebase",r).create(e,{appName:t.name})}function Wl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return up.create(t,...e)}function R(t,e,...n){if(!t)throw Wl(e,...n)}function at(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xi(e),new Error(e)}function mt(t,e){t||at(e)}/**
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
 */function ba(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function V_(){return Fc()==="http:"||Fc()==="https:"}function Fc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function H_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(V_()||Ch()||"connection"in navigator)?navigator.onLine:!0}function W_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xr{constructor(e,n){this.shortDelay=e,this.longDelay=n,mt(n>e,"Short delay should be less than long delay!"),this.isMobile=Pv()||Rv()}get(){return H_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kl(t,e){mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const K_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const G_=new Xr(3e4,6e4);function dp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jr(t,e,n,r,i={}){return fp(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Qr(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),cp.fetch()(hp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function fp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},K_),e);try{const i=new Q_(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw wi(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wi(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw wi(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw wi(t,"user-disabled",s);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw B_(t,h,u);pt(t,h)}}catch(i){if(i instanceof Me)throw i;pt(t,"network-request-failed",{message:String(i)})}}async function q_(t,e,n,r,i={}){const o=await Jr(t,e,n,r,i);return"mfaPendingCredential"in o&&pt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function hp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Kl(t.config,i):`${t.config.apiScheme}://${i}`}class Q_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),G_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Je(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Y_(t,e){return Jr(t,"POST","/v1/accounts:delete",e)}async function X_(t,e){return Jr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ir(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function J_(t,e=!1){const n=vt(t),r=await n.getIdToken(e),i=Gl(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ir(xs(i.auth_time)),issuedAtTime:Ir(xs(i.iat)),expirationTime:Ir(xs(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function xs(t){return Number(t)*1e3}function Gl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xi("JWT malformed, contained fewer than 3 sections"),null;try{const i=wh(n);return i?JSON.parse(i):(xi("Failed to decode base64 JWT payload"),null)}catch(i){return xi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Z_(t){const e=Gl(t);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Br(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Me&&ew(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ew({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class tw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ir(this.lastLoginAt),this.creationTime=Ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Br(t,X_(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?iw(o.providerUserInfo):[],a=rw(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new pp(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function nw(t){const e=vt(t);await mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rw(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function iw(t){return t.map(e=>{var{providerId:n}=e,r=Hl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ow(t,e){const n=await fp(t,{},async()=>{const r=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=hp(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Z_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await ow(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Vr;return r&&(R(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(R(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vr,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
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
 */function _t(t,e){R(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Hl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new pp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Br(this,this.stsTokenManager.getToken(this.auth,e));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return J_(this,e)}reload(){return nw(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Br(this,Y_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,h;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:d,emailVerified:g,isAnonymous:w,providerData:E,stsTokenManager:S}=n;R(d&&S,e,"internal-error");const C=Vr.fromJSON(this.name,S);R(typeof d=="string",e,"internal-error"),_t(m,e.name),_t(p,e.name),R(typeof g=="boolean",e,"internal-error"),R(typeof w=="boolean",e,"internal-error"),_t(v,e.name),_t(_,e.name),_t(I,e.name),_t(P,e.name),_t(f,e.name),_t(c,e.name);const F=new rn({uid:d,auth:e,email:p,emailVerified:g,displayName:m,isAnonymous:w,photoURL:_,phoneNumber:v,tenantId:I,stsTokenManager:C,createdAt:f,lastLoginAt:c});return E&&Array.isArray(E)&&(F.providerData=E.map(O=>Object.assign({},O))),P&&(F._redirectEventId=P),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vr;i.updateFromServerResponse(n);const o=new rn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await mo(o),o}}/**
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
 */const bc=new Map;function lt(t){mt(t instanceof Function,"Expected a class definition");let e=bc.get(t);return e?(mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bc.set(t,e),e)}/**
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
 */class mp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mp.type="NONE";const zc=mp;/**
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
 */function Mi(t,e,n){return`firebase:${t}:${e}:${n}`}class bn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Mi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Mi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bn(lt(zc),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||lt(zc);const s=Mi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(s);if(h){const m=rn._fromJSON(e,h);u!==o&&(a=m),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new bn(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new bn(o,e,r))}}/**
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
 */function $c(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wp(e))return"Blackberry";if(Ep(e))return"Webos";if(ql(e))return"Safari";if((e.includes("chrome/")||vp(e))&&!e.includes("edge/"))return"Chrome";if(_p(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gp(t=ae()){return/firefox\//i.test(t)}function ql(t=ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vp(t=ae()){return/crios\//i.test(t)}function yp(t=ae()){return/iemobile/i.test(t)}function _p(t=ae()){return/android/i.test(t)}function wp(t=ae()){return/blackberry/i.test(t)}function Ep(t=ae()){return/webos/i.test(t)}function jo(t=ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sw(t=ae()){var e;return jo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aw(){return Av()&&document.documentMode===10}function Ip(t=ae()){return jo(t)||_p(t)||Ep(t)||wp(t)||/windows phone/i.test(t)||yp(t)}function lw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Sp(t,e=[]){let n;switch(t){case"Browser":n=$c(ae());break;case"Worker":n=`${$c(ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vn}/${r}`}/**
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
 */class uw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function cw(t,e={}){return Jr(t,"GET","/v2/passwordPolicy",dp(t,e))}/**
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
 */const dw=6;class fw{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:dw,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class hw{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jc(this),this.idTokenSubscription=new jc(this),this.beforeStateQueue=new uw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=up,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await bn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=W_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vt(e):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cw(this),n=new fw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lt(e)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await bn.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&j_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ql(t){return vt(t)}class jc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mv(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function pw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Je("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",pw().appendChild(r)})}function gw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function vw(t,e){const n=Wt(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if($r(o,e??{}))return i;pt(i,"already-initialized")}return n.initialize({options:e})}function yw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _w(t,e,n){const r=Ql(t);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=kp(e),{host:s,port:a}=ww(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ew()}function kp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ww(t){const e=kp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Bc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Bc(s)}}}function Bc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ew(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Tp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return at("not implemented")}_getIdTokenResponse(e){return at("not implemented")}_linkToIdToken(e,n){return at("not implemented")}_getReauthenticationResolver(e){return at("not implemented")}}/**
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
 */async function zn(t,e){return q_(t,"POST","/v1/accounts:signInWithIdp",dp(t,e))}/**
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
 */const Iw="http://localhost";class hn extends Tp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Hl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new hn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}buildRequest(){const e={requestUri:Iw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qr(n)}return e}}/**
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
 */class Cp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zr extends Cp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kt extends Zr{constructor(){super("facebook.com")}static credential(e){return hn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
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
 */class it extends Zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hn._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return it.credential(n,r)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
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
 */class Tt extends Zr{constructor(){super("github.com")}static credential(e){return hn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
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
 */class Ct extends Zr{constructor(){super("twitter.com")}static credential(e,n){return hn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
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
 */class qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await rn._fromIdTokenResponse(e,r,i),s=Vc(r);return new qn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vc(r);return new qn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class go extends Me{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new go(e,n,r,i)}}function Pp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(t,o,e,r):o})}async function Sw(t,e,n=!1){const r=await Br(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qn._forOperation(t,"link",r)}/**
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
 */async function kw(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await Br(t,Pp(r,i,e,t),n);R(o.idToken,r,"internal-error");const s=Gl(o.idToken);R(s,r,"internal-error");const{sub:a}=s;return R(t.uid===a,r,"user-mismatch"),qn._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),o}}/**
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
 */async function Tw(t,e,n=!1){const r="signIn",i=await Pp(t,r,e),o=await qn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function Cw(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function Pw(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}const vo="__sak";/**
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
 */class Rp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vo,"1"),this.storage.removeItem(vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Rw(){const t=ae();return ql(t)||jo(t)}const Aw=1e3,Nw=10;class Ap extends Rp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rw()&&lw(),this.fallbackToPolling=Ip(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);aw()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Nw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ap.type="LOCAL";const Ow=Ap;/**
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
 */class Np extends Rp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Np.type="SESSION";const Op=Np;/**
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
 */function Dw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await Dw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bo.receivers=[];/**
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
 */function Yl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Lw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Yl("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const p=m;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(p.data.response);break;default:clearTimeout(h),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Ze(){return window}function xw(t){Ze().location.href=t}/**
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
 */function Dp(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function Mw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Uw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Fw(){return Dp()?self:null}/**
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
 */const Lp="firebaseLocalStorageDb",bw=1,yo="firebaseLocalStorage",xp="fbase_key";class ei{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vo(t,e){return t.transaction([yo],e?"readwrite":"readonly").objectStore(yo)}function zw(){const t=indexedDB.deleteDatabase(Lp);return new ei(t).toPromise()}function za(){const t=indexedDB.open(Lp,bw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yo,{keyPath:xp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yo)?e(r):(r.close(),await zw(),e(await za()))})})}async function Hc(t,e,n){const r=Vo(t,!0).put({[xp]:e,value:n});return new ei(r).toPromise()}async function $w(t,e){const n=Vo(t,!1).get(e),r=await new ei(n).toPromise();return r===void 0?null:r.value}function Wc(t,e){const n=Vo(t,!0).delete(e);return new ei(n).toPromise()}const jw=800,Bw=3;class Mp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await za(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Bw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bo._getInstance(Fw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mw(),!this.activeServiceWorker)return;this.sender=new Lw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Uw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await za();return await Hc(e,vo,"1"),await Wc(e,vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$w(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Vo(i,!1).getAll();return new ei(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mp.type="LOCAL";const Vw=Mp;new Xr(3e4,6e4);/**
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
 */function Hw(t,e){return e?lt(e):(R(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xl extends Tp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ww(t){return Tw(t.auth,new Xl(t),t.bypassAuthState)}function Kw(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),kw(n,new Xl(t),t.bypassAuthState)}async function Gw(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),Sw(n,new Xl(t),t.bypassAuthState)}/**
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
 */class Up{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ww;case"linkViaPopup":case"linkViaRedirect":return Gw;case"reauthViaPopup":case"reauthViaRedirect":return Kw;default:pt(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qw=new Xr(2e3,1e4);class On extends Up{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=Yl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qw.get())};e()}}On.currentPopupAction=null;/**
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
 */const Qw="pendingRedirect",Ui=new Map;class Yw extends Up{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ui.get(this.auth._key());if(!e){try{const r=await Xw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ui.set(this.auth._key(),e)}return this.bypassAuthState||Ui.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xw(t,e){const n=e1(e),r=Zw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Jw(t,e){Ui.set(t._key(),e)}function Zw(t){return lt(t._redirectPersistence)}function e1(t){return Mi(Qw,t.config.apiKey,t.name)}async function t1(t,e,n=!1){const r=Ql(t),i=Hw(r,e),s=await new Yw(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const n1=10*60*1e3;class r1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!i1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Fp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=n1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kc(e))}saveEventToCache(e){this.cachedEventUids.add(Kc(e)),this.lastProcessedEventTime=Date.now()}}function Kc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function i1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fp(t);default:return!1}}/**
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
 */async function o1(t,e={}){return Jr(t,"GET","/v1/projects",e)}/**
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
 */const s1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a1=/^https?/;async function l1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await o1(t);for(const n of e)try{if(u1(n))return}catch{}pt(t,"unauthorized-domain")}function u1(t){const e=ba(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!a1.test(n))return!1;if(s1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const c1=new Xr(3e4,6e4);function Gc(){const t=Ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function d1(t){return new Promise((e,n)=>{var r,i,o;function s(){Gc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gc(),n(Je(t,"network-request-failed"))},timeout:c1.get()})}if(!((i=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Ze().gapi)===null||o===void 0)&&o.load)s();else{const a=gw("iframefcb");return Ze()[a]=()=>{gapi.load?s():n(Je(t,"network-request-failed"))},mw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fi=null,e})}let Fi=null;function f1(t){return Fi=Fi||d1(t),Fi}/**
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
 */const h1=new Xr(5e3,15e3),p1="__/auth/iframe",m1="emulator/auth/iframe",g1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},v1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function y1(t){const e=t.config;R(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kl(e,m1):`https://${t.config.authDomain}/${p1}`,r={apiKey:e.apiKey,appName:t.name,v:vn},i=v1.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Qr(r).slice(1)}`}async function _1(t){const e=await f1(t),n=Ze().gapi;return R(n,t,"internal-error"),e.open({where:document.body,url:y1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:g1,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Je(t,"network-request-failed"),a=Ze().setTimeout(()=>{o(s)},h1.get());function l(){Ze().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const w1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E1=500,I1=600,S1="_blank",k1="http://localhost";class qc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function T1(t,e,n,r=E1,i=I1){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},w1),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ae().toLowerCase();n&&(a=vp(u)?S1:n),gp(u)&&(e=e||k1,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[v,_])=>`${p}${v}=${_},`,"");if(sw(u)&&a!=="_self")return C1(e||"",a),new qc(null);const m=window.open(e||"",a,h);R(m,t,"popup-blocked");try{m.focus()}catch{}return new qc(m)}function C1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const P1="__/auth/handler",R1="emulator/auth/handler",A1=encodeURIComponent("fac");async function Qc(t,e,n,r,i,o){R(t.config.authDomain,t,"auth-domain-config-required"),R(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vn,eventId:i};if(e instanceof Cp){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",xv(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries(o||{}))s[h]=m}if(e instanceof Zr){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(s.scopes=h.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${A1}=${encodeURIComponent(l)}`:"";return`${N1(t)}?${Qr(a).slice(1)}${u}`}function N1({config:t}){return t.emulator?Kl(t,R1):`https://${t.authDomain}/${P1}`}/**
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
 */const Ms="webStorageSupport";class O1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Op,this._completeRedirectFn=t1,this._overrideRedirectResult=Jw}async _openPopup(e,n,r,i){var o;mt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Qc(e,n,r,ba(),i);return T1(e,s,Yl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Qc(e,n,r,ba(),i);return xw(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(mt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _1(e),r=new r1(e);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ms,{type:Ms},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ms];s!==void 0&&n(!!s),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=l1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ip()||ql()||jo()}}const D1=O1;var Yc="@firebase/auth",Xc="1.3.0";/**
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
 */class L1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function x1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function M1(t){Ke(new xe("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;R(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sp(t)},u=new hw(r,i,o,l);return yw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ke(new xe("auth-internal",e=>{const n=Ql(e.getProvider("auth").getImmediate());return(r=>new L1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ye(Yc,Xc,x1(t)),ye(Yc,Xc,"esm2017")}/**
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
 */const U1=5*60,F1=kh("authIdTokenMaxAge")||U1;let Jc=null;const b1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>F1)return;const i=n==null?void 0:n.token;Jc!==i&&(Jc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function z1(t=bo()){const e=Wt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vw(t,{popupRedirectResolver:D1,persistence:[Vw,Ow,Op]}),r=kh("authTokenSyncURL");if(r){const o=b1(r);Pw(n,o,()=>o(n.currentUser)),Cw(n,s=>o(s))}const i=Eh("auth");return i&&_w(n,`http://${i}`),n}M1("Browser");/**
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
 */const bp="firebasestorage.googleapis.com",$1="storageBucket",j1=2*60*1e3,B1=10*60*1e3;/**
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
 */class tt extends Me{constructor(e,n,r=0){super(Us(e),`Firebase Storage: ${n} (${Us(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Us(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function Us(t){return"storage/"+t}function V1(){const t="An unknown error occurred, please check the error payload for server response.";return new tt(et.UNKNOWN,t)}function H1(){return new tt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function W1(){return new tt(et.CANCELED,"User canceled the upload/download.")}function K1(t){return new tt(et.INVALID_URL,"Invalid URL '"+t+"'.")}function G1(t){return new tt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zc(t){return new tt(et.INVALID_ARGUMENT,t)}function zp(){return new tt(et.APP_DELETED,"The Firebase app was deleted.")}function q1(t){return new tt(et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Be{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Be.makeFromUrl(e,n)}catch{return new Be(e,"")}if(r.path==="")return r;throw G1(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function u(g){g.path_=decodeURIComponent(g.path)}const h="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",v=new RegExp(`^https?://${m}/${h}/b/${i}/o${p}`,"i"),_={bucket:1,path:3},I=n===bp?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",f=new RegExp(`^https?://${I}/${i}/${P}`,"i"),d=[{regex:a,indices:l,postModify:o},{regex:v,indices:_,postModify:u},{regex:f,indices:{bucket:1,path:2},postModify:u}];for(let g=0;g<d.length;g++){const w=d[g],E=w.regex.exec(e);if(E){const S=E[w.indices.bucket];let C=E[w.indices.path];C||(C=""),r=new Be(S,C),w.postModify(r);break}}if(r==null)throw K1(e);return r}}class Q1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Y1(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function m(P){i=setTimeout(()=>{i=null,t(v,l())},P)}function p(){o&&clearTimeout(o)}function v(P,...f){if(u){p();return}if(P){p(),h.call(null,P,...f);return}if(l()||s){p(),h.call(null,P,...f);return}r<64&&(r*=2);let d;a===1?(a=2,d=0):d=(r+Math.random())*1e3,m(d)}let _=!1;function I(P){_||(_=!0,p(),!u&&(i!==null?(P||(a=2),clearTimeout(i),m(0)):P||(a=1)))}return m(0),o=setTimeout(()=>{s=!0,I(!0)},n),I}function X1(t){t(!1)}/**
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
 */function J1(t){return t!==void 0}function ed(t,e,n,r){if(r<e)throw Zc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Zc(`Invalid value for '${t}'. Expected ${n} or less.`)}function Z1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var _o;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_o||(_o={}));/**
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
 */function eE(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
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
 */class tE{constructor(e,n,r,i,o,s,a,l,u,h,m,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=m,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,_)=>{this.resolve_=v,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ei(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===_o.NO_ERROR,l=o.getStatus();if(!a||eE(l,this.additionalRetryCodes_)&&this.retry){const h=o.getErrorCode()===_o.ABORT;r(!1,new Ei(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ei(u,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());J1(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=V1();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?zp():W1();s(l)}else{const l=H1();s(l)}};this.canceled_?n(!1,new Ei(!1,null,!0)):this.backoffId_=Y1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&X1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ei{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function nE(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function rE(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function iE(t,e){e&&(t["X-Firebase-GMPID"]=e)}function oE(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function sE(t,e,n,r,i,o,s=!0){const a=Z1(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return iE(u,e),nE(u,n),rE(u,o),oE(u,r),new tE(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
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
 */function aE(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function lE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class wo{constructor(e,n){this._service=e,n instanceof Be?this._location=n:this._location=Be.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wo(e,n)}get root(){const e=new Be(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lE(this._location.path)}get storage(){return this._service}get parent(){const e=aE(this._location.path);if(e===null)return null;const n=new Be(this._location.bucket,e);return new wo(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw q1(e)}}function td(t,e){const n=e==null?void 0:e[$1];return n==null?null:Be.makeFromBucketSpec(n,t)}function uE(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Th(i,t.app.options.projectId))}class cE{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=bp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=j1,this._maxUploadRetryTime=B1,this._requests=new Set,i!=null?this._bucket=Be.makeFromBucketSpec(i,this._host):this._bucket=td(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Be.makeFromBucketSpec(this._url,e):this._bucket=td(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ed("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ed("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wo(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new Q1(zp());{const s=sE(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const nd="@firebase/storage",rd="0.11.2";/**
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
 */const $p="storage";function dE(t=bo(),e){t=vt(t);const r=Wt(t,$p).getImmediate({identifier:e}),i=Ih("storage");return i&&fE(r,...i),r}function fE(t,e,n,r={}){uE(t,e,n,r)}function hE(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new cE(n,r,i,e,vn)}function pE(){Ke(new xe($p,hE,"PUBLIC").setMultipleInstances(!0)),ye(nd,rd,""),ye(nd,rd,"esm2017")}pE();const mE={apiKey:"AIzaSyAkWlAQ9FcDGYrJv4QAyPF_ivTvaX0N_ME",authDomain:"reacth-portfolio-dashboard.firebaseapp.com",projectId:"reacth-portfolio-dashboard",storageBucket:"reacth-portfolio-dashboard.appspot.com",messagingSenderId:"665216039004",appId:"1:665216039004:web:e176d0cdfb79a47b0a4e99",measurementId:"G-V232T6K5DR"},Jl=Oh(mE);U_(Jl);z1();new it;s0(Jl);dE(Jl);Fs.createRoot(document.getElementById("root")).render(um.jsx("p",{children:"app"}));
