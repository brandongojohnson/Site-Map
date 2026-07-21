(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function kw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var om={exports:{}},Ta={},am={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),bw=Symbol.for("react.portal"),Nw=Symbol.for("react.fragment"),Iw=Symbol.for("react.strict_mode"),Tw=Symbol.for("react.profiler"),Rw=Symbol.for("react.provider"),Pw=Symbol.for("react.context"),Aw=Symbol.for("react.forward_ref"),Dw=Symbol.for("react.suspense"),Ow=Symbol.for("react.memo"),Lw=Symbol.for("react.lazy"),Ih=Symbol.iterator;function Mw(t){return t===null||typeof t!="object"?null:(t=Ih&&t[Ih]||t["@@iterator"],typeof t=="function"?t:null)}var lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cm=Object.assign,um={};function li(t,e,n){this.props=t,this.context=e,this.refs=um,this.updater=n||lm}li.prototype.isReactComponent={};li.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};li.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dm(){}dm.prototype=li.prototype;function Tu(t,e,n){this.props=t,this.context=e,this.refs=um,this.updater=n||lm}var Ru=Tu.prototype=new dm;Ru.constructor=Tu;cm(Ru,li.prototype);Ru.isPureReactComponent=!0;var Th=Array.isArray,hm=Object.prototype.hasOwnProperty,Pu={current:null},fm={key:!0,ref:!0,__self:!0,__source:!0};function pm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hm.call(e,r)&&!fm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Cs,type:t,key:s,ref:o,props:i,_owner:Pu.current}}function Fw(t,e){return{$$typeof:Cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Au(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cs}function Uw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rh=/\/+/g;function hl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Uw(""+t.key):e.toString(36)}function mo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cs:case bw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hl(o,0):r,Th(i)?(n="",t!=null&&(n=t.replace(Rh,"$&/")+"/"),mo(i,e,n,"",function(c){return c})):i!=null&&(Au(i)&&(i=Fw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Rh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Th(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+hl(s,a);o+=mo(s,e,n,l,i)}else if(l=Mw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+hl(s,a++),o+=mo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vs(t,e,n){if(t==null)return t;var r=[],i=0;return mo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function $w(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Be={current:null},go={transition:null},zw={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:go,ReactCurrentOwner:Pu};V.Children={map:Vs,forEach:function(t,e,n){Vs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vs(t,function(){e++}),e},toArray:function(t){return Vs(t,function(e){return e})||[]},only:function(t){if(!Au(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=li;V.Fragment=Nw;V.Profiler=Tw;V.PureComponent=Tu;V.StrictMode=Iw;V.Suspense=Dw;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zw;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)hm.call(e,l)&&!fm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Cs,type:t.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:Pw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Rw,_context:t},t.Consumer=t};V.createElement=pm;V.createFactory=function(t){var e=pm.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:Aw,render:t}};V.isValidElement=Au;V.lazy=function(t){return{$$typeof:Lw,_payload:{_status:-1,_result:t},_init:$w}};V.memo=function(t,e){return{$$typeof:Ow,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=go.transition;go.transition={};try{t()}finally{go.transition=e}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(t,e){return Be.current.useCallback(t,e)};V.useContext=function(t){return Be.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return Be.current.useDeferredValue(t)};V.useEffect=function(t,e){return Be.current.useEffect(t,e)};V.useId=function(){return Be.current.useId()};V.useImperativeHandle=function(t,e,n){return Be.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return Be.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return Be.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return Be.current.useMemo(t,e)};V.useReducer=function(t,e,n){return Be.current.useReducer(t,e,n)};V.useRef=function(t){return Be.current.useRef(t)};V.useState=function(t){return Be.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return Be.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return Be.current.useTransition()};V.version="18.2.0";am.exports=V;var N=am.exports;const Bw=kw(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jw=N,Ww=Symbol.for("react.element"),Vw=Symbol.for("react.fragment"),Hw=Object.prototype.hasOwnProperty,Gw=jw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kw={key:!0,ref:!0,__self:!0,__source:!0};function mm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Hw.call(e,r)&&!Kw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ww,type:t,key:s,ref:o,props:i,_owner:Gw.current}}Ta.Fragment=Vw;Ta.jsx=mm;Ta.jsxs=mm;om.exports=Ta;var gm=om.exports;const u=gm.jsx,p=gm.jsxs;var dc={},ym={exports:{}},Ze={},_m={exports:{}},vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(w,R){var L=w.length;w.push(R);e:for(;0<L;){var X=L-1>>>1,_e=w[X];if(0<i(_e,R))w[X]=R,w[L]=_e,L=X;else break e}}function n(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var R=w[0],L=w.pop();if(L!==R){w[0]=L;e:for(var X=0,_e=w.length,js=_e>>>1;X<js;){var Fn=2*(X+1)-1,dl=w[Fn],Un=Fn+1,Ws=w[Un];if(0>i(dl,L))Un<_e&&0>i(Ws,dl)?(w[X]=Ws,w[Un]=L,X=Un):(w[X]=dl,w[Fn]=L,X=Fn);else if(Un<_e&&0>i(Ws,L))w[X]=Ws,w[Un]=L,X=Un;else break e}}return R}function i(w,R){var L=w.sortIndex-R.sortIndex;return L!==0?L:w.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,_=!1,v=!1,S=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(w){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=w)r(c),R.sortIndex=R.expirationTime,e(l,R);else break;R=n(c)}}function x(w){if(S=!1,y(w),!v)if(n(l)!==null)v=!0,A(E);else{var R=n(c);R!==null&&z(x,R.startTime-w)}}function E(w,R){v=!1,S&&(S=!1,g(P),P=-1),_=!0;var L=f;try{for(y(R),h=n(l);h!==null&&(!(h.expirationTime>R)||w&&!ue());){var X=h.callback;if(typeof X=="function"){h.callback=null,f=h.priorityLevel;var _e=X(h.expirationTime<=R);R=t.unstable_now(),typeof _e=="function"?h.callback=_e:h===n(l)&&r(l),y(R)}else r(l);h=n(l)}if(h!==null)var js=!0;else{var Fn=n(c);Fn!==null&&z(x,Fn.startTime-R),js=!1}return js}finally{h=null,f=L,_=!1}}var b=!1,T=null,P=-1,G=5,M=-1;function ue(){return!(t.unstable_now()-M<G)}function Te(){if(T!==null){var w=t.unstable_now();M=w;var R=!0;try{R=T(!0,w)}finally{R?F():(b=!1,T=null)}}else b=!1}var F;if(typeof m=="function")F=function(){m(Te)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,de=O.port2;O.port1.onmessage=Te,F=function(){de.postMessage(null)}}else F=function(){C(Te,0)};function A(w){T=w,b||(b=!0,F())}function z(w,R){P=C(function(){w(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(w){w.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,A(E))},t.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<w?Math.floor(1e3/w):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(w){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var L=f;f=R;try{return w()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(w,R){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var L=f;f=w;try{return R()}finally{f=L}},t.unstable_scheduleCallback=function(w,R,L){var X=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?X+L:X):L=X,w){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=L+_e,w={id:d++,callback:R,priorityLevel:w,startTime:L,expirationTime:_e,sortIndex:-1},L>X?(w.sortIndex=L,e(c,w),n(l)===null&&w===n(c)&&(S?(g(P),P=-1):S=!0,z(x,L-X))):(w.sortIndex=_e,e(l,w),v||_||(v=!0,A(E))),w},t.unstable_shouldYield=ue,t.unstable_wrapCallback=function(w){var R=f;return function(){var L=f;f=R;try{return w.apply(this,arguments)}finally{f=L}}}})(vm);_m.exports=vm;var qw=_m.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm=N,Je=qw;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xm=new Set,Qi={};function ur(t,e){Gr(t,e),Gr(t+"Capture",e)}function Gr(t,e){for(Qi[t]=e,t=0;t<e.length;t++)xm.add(e[t])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hc=Object.prototype.hasOwnProperty,Yw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ph={},Ah={};function Qw(t){return hc.call(Ah,t)?!0:hc.call(Ph,t)?!1:Yw.test(t)?Ah[t]=!0:(Ph[t]=!0,!1)}function Xw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jw(t,e,n,r){if(e===null||typeof e>"u"||Xw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new je(t,5,!1,t.toLowerCase(),null,!1,!1)});var Du=/[\-:]([a-z])/g;function Ou(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Du,Ou);be[e]=new je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Du,Ou);be[e]=new je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Du,Ou);be[e]=new je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new je(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new je(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lu(t,e,n,r){var i=be.hasOwnProperty(e)?be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jw(e,n,i,r)&&(n=null),r||i===null?Qw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nn=wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hs=Symbol.for("react.element"),vr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),Mu=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),Sm=Symbol.for("react.provider"),Cm=Symbol.for("react.context"),Fu=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),mc=Symbol.for("react.suspense_list"),Uu=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Em=Symbol.for("react.offscreen"),Dh=Symbol.iterator;function _i(t){return t===null||typeof t!="object"?null:(t=Dh&&t[Dh]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,fl;function Pi(t){if(fl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fl=e&&e[1]||""}return`
`+fl+t}var pl=!1;function ml(t,e){if(!t||pl)return"";pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{pl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pi(t):""}function Zw(t){switch(t.tag){case 5:return Pi(t.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 2:case 15:return t=ml(t.type,!1),t;case 11:return t=ml(t.type.render,!1),t;case 1:return t=ml(t.type,!0),t;default:return""}}function gc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wr:return"Fragment";case vr:return"Portal";case fc:return"Profiler";case Mu:return"StrictMode";case pc:return"Suspense";case mc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cm:return(t.displayName||"Context")+".Consumer";case Sm:return(t._context.displayName||"Context")+".Provider";case Fu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uu:return e=t.displayName||null,e!==null?e:gc(t.type)||"Memo";case on:e=t._payload,t=t._init;try{return gc(t(e))}catch{}}return null}function e0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gc(e);case 8:return e===Mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function km(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t0(t){var e=km(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gs(t){t._valueTracker||(t._valueTracker=t0(t))}function bm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=km(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ao(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yc(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Oh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Tn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Nm(t,e){e=e.checked,e!=null&&Lu(t,"checked",e,!1)}function _c(t,e){Nm(t,e);var n=Tn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vc(t,e.type,n):e.hasOwnProperty("defaultValue")&&vc(t,e.type,Tn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vc(t,e,n){(e!=="number"||Ao(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ai=Array.isArray;function Dr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Tn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Ai(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tn(n)}}function Im(t,e){var n=Tn(e.value),r=Tn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ks,Rm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ks=Ks||document.createElement("div"),Ks.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ks.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n0=["Webkit","ms","Moz","O"];Object.keys(Li).forEach(function(t){n0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Li[e]=Li[t]})});function Pm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Li.hasOwnProperty(t)&&Li[t]?(""+e).trim():e+"px"}function Am(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var r0=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sc(t,e){if(e){if(r0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Cc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ec=null;function $u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kc=null,Or=null,Lr=null;function Uh(t){if(t=bs(t)){if(typeof kc!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Oa(e),kc(t.stateNode,t.type,e))}}function Dm(t){Or?Lr?Lr.push(t):Lr=[t]:Or=t}function Om(){if(Or){var t=Or,e=Lr;if(Lr=Or=null,Uh(t),e)for(t=0;t<e.length;t++)Uh(e[t])}}function Lm(t,e){return t(e)}function Mm(){}var gl=!1;function Fm(t,e,n){if(gl)return t(e,n);gl=!0;try{return Lm(t,e,n)}finally{gl=!1,(Or!==null||Lr!==null)&&(Mm(),Om())}}function Ji(t,e){var n=t.stateNode;if(n===null)return null;var r=Oa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var bc=!1;if(Yt)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){bc=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{bc=!1}function i0(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Mi=!1,Do=null,Oo=!1,Nc=null,s0={onError:function(t){Mi=!0,Do=t}};function o0(t,e,n,r,i,s,o,a,l){Mi=!1,Do=null,i0.apply(s0,arguments)}function a0(t,e,n,r,i,s,o,a,l){if(o0.apply(this,arguments),Mi){if(Mi){var c=Do;Mi=!1,Do=null}else throw Error(k(198));Oo||(Oo=!0,Nc=c)}}function dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Um(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $h(t){if(dr(t)!==t)throw Error(k(188))}function l0(t){var e=t.alternate;if(!e){if(e=dr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return $h(i),t;if(s===r)return $h(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function $m(t){return t=l0(t),t!==null?zm(t):null}function zm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zm(t);if(e!==null)return e;t=t.sibling}return null}var Bm=Je.unstable_scheduleCallback,zh=Je.unstable_cancelCallback,c0=Je.unstable_shouldYield,u0=Je.unstable_requestPaint,he=Je.unstable_now,d0=Je.unstable_getCurrentPriorityLevel,zu=Je.unstable_ImmediatePriority,jm=Je.unstable_UserBlockingPriority,Lo=Je.unstable_NormalPriority,h0=Je.unstable_LowPriority,Wm=Je.unstable_IdlePriority,Ra=null,Rt=null;function f0(t){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Ra,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:g0,p0=Math.log,m0=Math.LN2;function g0(t){return t>>>=0,t===0?32:31-(p0(t)/m0|0)|0}var qs=64,Ys=4194304;function Di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Di(a):(s&=o,s!==0&&(r=Di(s)))}else o=n&~i,o!==0?r=Di(o):s!==0&&(r=Di(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-St(e),i=1<<n,r|=t[n],e&=~i;return r}function y0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-St(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=y0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ic(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vm(){var t=qs;return qs<<=1,!(qs&4194240)&&(qs=64),t}function yl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Es(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-St(e),t[e]=n}function v0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-St(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-St(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var q=0;function Hm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gm,ju,Km,qm,Ym,Tc=!1,Qs=[],gn=null,yn=null,_n=null,Zi=new Map,es=new Map,ln=[],w0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bh(t,e){switch(t){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Zi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":es.delete(e.pointerId)}}function wi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bs(e),e!==null&&ju(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function x0(t,e,n,r,i){switch(e){case"focusin":return gn=wi(gn,t,e,n,r,i),!0;case"dragenter":return yn=wi(yn,t,e,n,r,i),!0;case"mouseover":return _n=wi(_n,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zi.set(s,wi(Zi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,es.set(s,wi(es.get(s)||null,t,e,n,r,i)),!0}return!1}function Qm(t){var e=Wn(t.target);if(e!==null){var n=dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Um(n),e!==null){t.blockedOn=e,Ym(t.priority,function(){Km(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ec=r,n.target.dispatchEvent(r),Ec=null}else return e=bs(n),e!==null&&ju(e),t.blockedOn=n,!1;e.shift()}return!0}function jh(t,e,n){yo(t)&&n.delete(e)}function S0(){Tc=!1,gn!==null&&yo(gn)&&(gn=null),yn!==null&&yo(yn)&&(yn=null),_n!==null&&yo(_n)&&(_n=null),Zi.forEach(jh),es.forEach(jh)}function xi(t,e){t.blockedOn===e&&(t.blockedOn=null,Tc||(Tc=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,S0)))}function ts(t){function e(i){return xi(i,t)}if(0<Qs.length){xi(Qs[0],t);for(var n=1;n<Qs.length;n++){var r=Qs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gn!==null&&xi(gn,t),yn!==null&&xi(yn,t),_n!==null&&xi(_n,t),Zi.forEach(e),es.forEach(e),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)Qm(n),n.blockedOn===null&&ln.shift()}var Mr=nn.ReactCurrentBatchConfig,Fo=!0;function C0(t,e,n,r){var i=q,s=Mr.transition;Mr.transition=null;try{q=1,Wu(t,e,n,r)}finally{q=i,Mr.transition=s}}function E0(t,e,n,r){var i=q,s=Mr.transition;Mr.transition=null;try{q=4,Wu(t,e,n,r)}finally{q=i,Mr.transition=s}}function Wu(t,e,n,r){if(Fo){var i=Rc(t,e,n,r);if(i===null)Nl(t,e,r,Uo,n),Bh(t,r);else if(x0(i,t,e,n,r))r.stopPropagation();else if(Bh(t,r),e&4&&-1<w0.indexOf(t)){for(;i!==null;){var s=bs(i);if(s!==null&&Gm(s),s=Rc(t,e,n,r),s===null&&Nl(t,e,r,Uo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Nl(t,e,r,null,n)}}var Uo=null;function Rc(t,e,n,r){if(Uo=null,t=$u(r),t=Wn(t),t!==null)if(e=dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Um(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uo=t,null}function Xm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d0()){case zu:return 1;case jm:return 4;case Lo:case h0:return 16;case Wm:return 536870912;default:return 16}default:return 16}}var fn=null,Vu=null,_o=null;function Jm(){if(_o)return _o;var t,e=Vu,n=e.length,r,i="value"in fn?fn.value:fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return _o=i.slice(t,1<r?1-r:void 0)}function vo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xs(){return!0}function Wh(){return!1}function et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xs:Wh,this.isPropagationStopped=Wh,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xs)},persist:function(){},isPersistent:Xs}),e}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=et(ci),ks=oe({},ci,{view:0,detail:0}),k0=et(ks),_l,vl,Si,Pa=oe({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Si&&(Si&&t.type==="mousemove"?(_l=t.screenX-Si.screenX,vl=t.screenY-Si.screenY):vl=_l=0,Si=t),_l)},movementY:function(t){return"movementY"in t?t.movementY:vl}}),Vh=et(Pa),b0=oe({},Pa,{dataTransfer:0}),N0=et(b0),I0=oe({},ks,{relatedTarget:0}),wl=et(I0),T0=oe({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),R0=et(T0),P0=oe({},ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A0=et(P0),D0=oe({},ci,{data:0}),Hh=et(D0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=M0[t])?!!e[t]:!1}function Gu(){return F0}var U0=oe({},ks,{key:function(t){if(t.key){var e=O0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?L0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(t){return t.type==="keypress"?vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$0=et(U0),z0=oe({},Pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gh=et(z0),B0=oe({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),j0=et(B0),W0=oe({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=et(W0),H0=oe({},Pa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G0=et(H0),K0=[9,13,27,32],Ku=Yt&&"CompositionEvent"in window,Fi=null;Yt&&"documentMode"in document&&(Fi=document.documentMode);var q0=Yt&&"TextEvent"in window&&!Fi,Zm=Yt&&(!Ku||Fi&&8<Fi&&11>=Fi),Kh=String.fromCharCode(32),qh=!1;function eg(t,e){switch(t){case"keyup":return K0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xr=!1;function Y0(t,e){switch(t){case"compositionend":return tg(e);case"keypress":return e.which!==32?null:(qh=!0,Kh);case"textInput":return t=e.data,t===Kh&&qh?null:t;default:return null}}function Q0(t,e){if(xr)return t==="compositionend"||!Ku&&eg(t,e)?(t=Jm(),_o=Vu=fn=null,xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zm&&e.locale!=="ko"?null:e.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!X0[t.type]:e==="textarea"}function ng(t,e,n,r){Dm(r),e=$o(e,"onChange"),0<e.length&&(n=new Hu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ui=null,ns=null;function J0(t){fg(t,0)}function Aa(t){var e=Er(t);if(bm(e))return t}function Z0(t,e){if(t==="change")return e}var rg=!1;if(Yt){var xl;if(Yt){var Sl="oninput"in document;if(!Sl){var Qh=document.createElement("div");Qh.setAttribute("oninput","return;"),Sl=typeof Qh.oninput=="function"}xl=Sl}else xl=!1;rg=xl&&(!document.documentMode||9<document.documentMode)}function Xh(){Ui&&(Ui.detachEvent("onpropertychange",ig),ns=Ui=null)}function ig(t){if(t.propertyName==="value"&&Aa(ns)){var e=[];ng(e,ns,t,$u(t)),Fm(J0,e)}}function ex(t,e,n){t==="focusin"?(Xh(),Ui=e,ns=n,Ui.attachEvent("onpropertychange",ig)):t==="focusout"&&Xh()}function tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Aa(ns)}function nx(t,e){if(t==="click")return Aa(e)}function rx(t,e){if(t==="input"||t==="change")return Aa(e)}function ix(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:ix;function rs(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hc.call(e,i)||!kt(t[i],e[i]))return!1}return!0}function Jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zh(t,e){var n=Jh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jh(n)}}function sg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function og(){for(var t=window,e=Ao();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ao(t.document)}return e}function qu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sx(t){var e=og(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sg(n.ownerDocument.documentElement,n)){if(r!==null&&qu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zh(n,s);var o=Zh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ox=Yt&&"documentMode"in document&&11>=document.documentMode,Sr=null,Pc=null,$i=null,Ac=!1;function ef(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ac||Sr==null||Sr!==Ao(r)||(r=Sr,"selectionStart"in r&&qu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$i&&rs($i,r)||($i=r,r=$o(Pc,"onSelect"),0<r.length&&(e=new Hu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Sr)))}function Js(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cr={animationend:Js("Animation","AnimationEnd"),animationiteration:Js("Animation","AnimationIteration"),animationstart:Js("Animation","AnimationStart"),transitionend:Js("Transition","TransitionEnd")},Cl={},ag={};Yt&&(ag=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Da(t){if(Cl[t])return Cl[t];if(!Cr[t])return t;var e=Cr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ag)return Cl[t]=e[n];return t}var lg=Da("animationend"),cg=Da("animationiteration"),ug=Da("animationstart"),dg=Da("transitionend"),hg=new Map,tf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(t,e){hg.set(t,e),ur(e,[t])}for(var El=0;El<tf.length;El++){var kl=tf[El],ax=kl.toLowerCase(),lx=kl[0].toUpperCase()+kl.slice(1);On(ax,"on"+lx)}On(lg,"onAnimationEnd");On(cg,"onAnimationIteration");On(ug,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(dg,"onTransitionEnd");Gr("onMouseEnter",["mouseout","mouseover"]);Gr("onMouseLeave",["mouseout","mouseover"]);Gr("onPointerEnter",["pointerout","pointerover"]);Gr("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));function nf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,a0(r,e,void 0,t),t.currentTarget=null}function fg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;nf(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;nf(i,a,c),s=l}}}if(Oo)throw t=Nc,Oo=!1,Nc=null,t}function te(t,e){var n=e[Fc];n===void 0&&(n=e[Fc]=new Set);var r=t+"__bubble";n.has(r)||(pg(e,t,2,!1),n.add(r))}function bl(t,e,n){var r=0;e&&(r|=4),pg(n,t,r,e)}var Zs="_reactListening"+Math.random().toString(36).slice(2);function is(t){if(!t[Zs]){t[Zs]=!0,xm.forEach(function(n){n!=="selectionchange"&&(cx.has(n)||bl(n,!1,t),bl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zs]||(e[Zs]=!0,bl("selectionchange",!1,e))}}function pg(t,e,n,r){switch(Xm(e)){case 1:var i=C0;break;case 4:i=E0;break;default:i=Wu}n=i.bind(null,e,n,t),i=void 0,!bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Nl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Wn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Fm(function(){var c=s,d=$u(n),h=[];e:{var f=hg.get(t);if(f!==void 0){var _=Hu,v=t;switch(t){case"keypress":if(vo(n)===0)break e;case"keydown":case"keyup":_=$0;break;case"focusin":v="focus",_=wl;break;case"focusout":v="blur",_=wl;break;case"beforeblur":case"afterblur":_=wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=N0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=j0;break;case lg:case cg:case ug:_=R0;break;case dg:_=V0;break;case"scroll":_=k0;break;case"wheel":_=G0;break;case"copy":case"cut":case"paste":_=A0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Gh}var S=(e&4)!==0,C=!S&&t==="scroll",g=S?f!==null?f+"Capture":null:f;S=[];for(var m=c,y;m!==null;){y=m;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,g!==null&&(x=Ji(m,g),x!=null&&S.push(ss(m,x,y)))),C)break;m=m.return}0<S.length&&(f=new _(f,v,null,n,d),h.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==Ec&&(v=n.relatedTarget||n.fromElement)&&(Wn(v)||v[Qt]))break e;if((_||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=c,v=v?Wn(v):null,v!==null&&(C=dr(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=c),_!==v)){if(S=Vh,x="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=Gh,x="onPointerLeave",g="onPointerEnter",m="pointer"),C=_==null?f:Er(_),y=v==null?f:Er(v),f=new S(x,m+"leave",_,n,d),f.target=C,f.relatedTarget=y,x=null,Wn(d)===c&&(S=new S(g,m+"enter",v,n,d),S.target=y,S.relatedTarget=C,x=S),C=x,_&&v)t:{for(S=_,g=v,m=0,y=S;y;y=mr(y))m++;for(y=0,x=g;x;x=mr(x))y++;for(;0<m-y;)S=mr(S),m--;for(;0<y-m;)g=mr(g),y--;for(;m--;){if(S===g||g!==null&&S===g.alternate)break t;S=mr(S),g=mr(g)}S=null}else S=null;_!==null&&rf(h,f,_,S,!1),v!==null&&C!==null&&rf(h,C,v,S,!0)}}e:{if(f=c?Er(c):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var E=Z0;else if(Yh(f))if(rg)E=rx;else{E=tx;var b=ex}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=nx);if(E&&(E=E(t,c))){ng(h,E,n,d);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&vc(f,"number",f.value)}switch(b=c?Er(c):window,t){case"focusin":(Yh(b)||b.contentEditable==="true")&&(Sr=b,Pc=c,$i=null);break;case"focusout":$i=Pc=Sr=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,ef(h,n,d);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":ef(h,n,d)}var T;if(Ku)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else xr?eg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Zm&&n.locale!=="ko"&&(xr||P!=="onCompositionStart"?P==="onCompositionEnd"&&xr&&(T=Jm()):(fn=d,Vu="value"in fn?fn.value:fn.textContent,xr=!0)),b=$o(c,P),0<b.length&&(P=new Hh(P,t,null,n,d),h.push({event:P,listeners:b}),T?P.data=T:(T=tg(n),T!==null&&(P.data=T)))),(T=q0?Y0(t,n):Q0(t,n))&&(c=$o(c,"onBeforeInput"),0<c.length&&(d=new Hh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}fg(h,e)})}function ss(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $o(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ji(t,n),s!=null&&r.unshift(ss(t,s,i)),s=Ji(t,e),s!=null&&r.push(ss(t,s,i))),t=t.return}return r}function mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ji(n,s),l!=null&&o.unshift(ss(n,l,a))):i||(l=Ji(n,s),l!=null&&o.push(ss(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ux=/\r\n?/g,dx=/\u0000|\uFFFD/g;function sf(t){return(typeof t=="string"?t:""+t).replace(ux,`
`).replace(dx,"")}function eo(t,e,n){if(e=sf(e),sf(t)!==e&&n)throw Error(k(425))}function zo(){}var Dc=null,Oc=null;function Lc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,hx=typeof clearTimeout=="function"?clearTimeout:void 0,of=typeof Promise=="function"?Promise:void 0,fx=typeof queueMicrotask=="function"?queueMicrotask:typeof of<"u"?function(t){return of.resolve(null).then(t).catch(px)}:Mc;function px(t){setTimeout(function(){throw t})}function Il(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ts(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ts(e)}function vn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function af(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ui=Math.random().toString(36).slice(2),Tt="__reactFiber$"+ui,os="__reactProps$"+ui,Qt="__reactContainer$"+ui,Fc="__reactEvents$"+ui,mx="__reactListeners$"+ui,gx="__reactHandles$"+ui;function Wn(t){var e=t[Tt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qt]||n[Tt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=af(t);t!==null;){if(n=t[Tt])return n;t=af(t)}return e}t=n,n=t.parentNode}return null}function bs(t){return t=t[Tt]||t[Qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Er(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Oa(t){return t[os]||null}var Uc=[],kr=-1;function Ln(t){return{current:t}}function ne(t){0>kr||(t.current=Uc[kr],Uc[kr]=null,kr--)}function ee(t,e){kr++,Uc[kr]=t.current,t.current=e}var Rn={},De=Ln(Rn),Ge=Ln(!1),Xn=Rn;function Kr(t,e){var n=t.type.contextTypes;if(!n)return Rn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(t){return t=t.childContextTypes,t!=null}function Bo(){ne(Ge),ne(De)}function lf(t,e,n){if(De.current!==Rn)throw Error(k(168));ee(De,e),ee(Ge,n)}function mg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,e0(t)||"Unknown",i));return oe({},n,r)}function jo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rn,Xn=De.current,ee(De,t),ee(Ge,Ge.current),!0}function cf(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=mg(t,e,Xn),r.__reactInternalMemoizedMergedChildContext=t,ne(Ge),ne(De),ee(De,t)):ne(Ge),ee(Ge,n)}var zt=null,La=!1,Tl=!1;function gg(t){zt===null?zt=[t]:zt.push(t)}function yx(t){La=!0,gg(t)}function Mn(){if(!Tl&&zt!==null){Tl=!0;var t=0,e=q;try{var n=zt;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zt=null,La=!1}catch(i){throw zt!==null&&(zt=zt.slice(t+1)),Bm(zu,Mn),i}finally{q=e,Tl=!1}}return null}var br=[],Nr=0,Wo=null,Vo=0,nt=[],rt=0,Jn=null,jt=1,Wt="";function $n(t,e){br[Nr++]=Vo,br[Nr++]=Wo,Wo=t,Vo=e}function yg(t,e,n){nt[rt++]=jt,nt[rt++]=Wt,nt[rt++]=Jn,Jn=t;var r=jt;t=Wt;var i=32-St(r)-1;r&=~(1<<i),n+=1;var s=32-St(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jt=1<<32-St(e)+i|n<<i|r,Wt=s+t}else jt=1<<s|n<<i|r,Wt=t}function Yu(t){t.return!==null&&($n(t,1),yg(t,1,0))}function Qu(t){for(;t===Wo;)Wo=br[--Nr],br[Nr]=null,Vo=br[--Nr],br[Nr]=null;for(;t===Jn;)Jn=nt[--rt],nt[rt]=null,Wt=nt[--rt],nt[rt]=null,jt=nt[--rt],nt[rt]=null}var Xe=null,Qe=null,re=!1,yt=null;function _g(t,e){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xe=t,Qe=vn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xe=t,Qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jn!==null?{id:jt,overflow:Wt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xe=t,Qe=null,!0):!1;default:return!1}}function $c(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zc(t){if(re){var e=Qe;if(e){var n=e;if(!uf(t,e)){if($c(t))throw Error(k(418));e=vn(n.nextSibling);var r=Xe;e&&uf(t,e)?_g(r,n):(t.flags=t.flags&-4097|2,re=!1,Xe=t)}}else{if($c(t))throw Error(k(418));t.flags=t.flags&-4097|2,re=!1,Xe=t}}}function df(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xe=t}function to(t){if(t!==Xe)return!1;if(!re)return df(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lc(t.type,t.memoizedProps)),e&&(e=Qe)){if($c(t))throw vg(),Error(k(418));for(;e;)_g(t,e),e=vn(e.nextSibling)}if(df(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qe=vn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qe=null}}else Qe=Xe?vn(t.stateNode.nextSibling):null;return!0}function vg(){for(var t=Qe;t;)t=vn(t.nextSibling)}function qr(){Qe=Xe=null,re=!1}function Xu(t){yt===null?yt=[t]:yt.push(t)}var _x=nn.ReactCurrentBatchConfig;function mt(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ho=Ln(null),Go=null,Ir=null,Ju=null;function Zu(){Ju=Ir=Go=null}function ed(t){var e=Ho.current;ne(Ho),t._currentValue=e}function Bc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fr(t,e){Go=t,Ju=Ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ve=!0),t.firstContext=null)}function ct(t){var e=t._currentValue;if(Ju!==t)if(t={context:t,memoizedValue:e,next:null},Ir===null){if(Go===null)throw Error(k(308));Ir=t,Go.dependencies={lanes:0,firstContext:t}}else Ir=Ir.next=t;return e}var Vn=null;function td(t){Vn===null?Vn=[t]:Vn.push(t)}function wg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,td(e)):(n.next=i.next,i.next=n),e.interleaved=n,Xt(t,r)}function Xt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var an=!1;function nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Xt(t,n)}return i=r.interleaved,i===null?(e.next=e,td(r)):(e.next=i.next,i.next=e),r.interleaved=e,Xt(t,n)}function wo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bu(t,n)}}function hf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ko(t,e,n,r){var i=t.updateQueue;an=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,_=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,S=a;switch(f=e,_=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){h=v.call(_,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,f=typeof v=="function"?v.call(_,h,f):v,f==null)break e;h=oe({},h,f);break e;case 2:an=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else _={eventTime:_,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,l=h):d=d.next=_,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);er|=o,t.lanes=o,t.memoizedState=h}}function ff(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Sg=new wm.Component().refs;function jc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ma={isMounted:function(t){return(t=t._reactInternals)?dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Fe(),i=Sn(t),s=Kt(r,i);s.payload=e,n!=null&&(s.callback=n),e=wn(t,s,i),e!==null&&(Ct(e,t,i,r),wo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Fe(),i=Sn(t),s=Kt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wn(t,s,i),e!==null&&(Ct(e,t,i,r),wo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Fe(),r=Sn(t),i=Kt(n,r);i.tag=2,e!=null&&(i.callback=e),e=wn(t,i,r),e!==null&&(Ct(e,t,r,n),wo(e,t,r))}};function pf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!rs(n,r)||!rs(i,s):!0}function Cg(t,e,n){var r=!1,i=Rn,s=e.contextType;return typeof s=="object"&&s!==null?s=ct(s):(i=Ke(e)?Xn:De.current,r=e.contextTypes,s=(r=r!=null)?Kr(t,i):Rn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ma,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function mf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ma.enqueueReplaceState(e,e.state,null)}function Wc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Sg,nd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ct(s):(s=Ke(e)?Xn:De.current,i.context=Kr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ma.enqueueReplaceState(i,i.state,null),Ko(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ci(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Sg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function no(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gf(t){var e=t._init;return e(t._payload)}function Eg(t){function e(g,m){if(t){var y=g.deletions;y===null?(g.deletions=[m],g.flags|=16):y.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Cn(g,m),g.index=0,g.sibling=null,g}function s(g,m,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<m?(g.flags|=2,m):y):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,y,x){return m===null||m.tag!==6?(m=Ml(y,g.mode,x),m.return=g,m):(m=i(m,y),m.return=g,m)}function l(g,m,y,x){var E=y.type;return E===wr?d(g,m,y.props.children,x,y.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===on&&gf(E)===m.type)?(x=i(m,y.props),x.ref=Ci(g,m,y),x.return=g,x):(x=bo(y.type,y.key,y.props,null,g.mode,x),x.ref=Ci(g,m,y),x.return=g,x)}function c(g,m,y,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Fl(y,g.mode,x),m.return=g,m):(m=i(m,y.children||[]),m.return=g,m)}function d(g,m,y,x,E){return m===null||m.tag!==7?(m=Yn(y,g.mode,x,E),m.return=g,m):(m=i(m,y),m.return=g,m)}function h(g,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ml(""+m,g.mode,y),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Hs:return y=bo(m.type,m.key,m.props,null,g.mode,y),y.ref=Ci(g,null,m),y.return=g,y;case vr:return m=Fl(m,g.mode,y),m.return=g,m;case on:var x=m._init;return h(g,x(m._payload),y)}if(Ai(m)||_i(m))return m=Yn(m,g.mode,y,null),m.return=g,m;no(g,m)}return null}function f(g,m,y,x){var E=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:a(g,m,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Hs:return y.key===E?l(g,m,y,x):null;case vr:return y.key===E?c(g,m,y,x):null;case on:return E=y._init,f(g,m,E(y._payload),x)}if(Ai(y)||_i(y))return E!==null?null:d(g,m,y,x,null);no(g,y)}return null}function _(g,m,y,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(y)||null,a(m,g,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Hs:return g=g.get(x.key===null?y:x.key)||null,l(m,g,x,E);case vr:return g=g.get(x.key===null?y:x.key)||null,c(m,g,x,E);case on:var b=x._init;return _(g,m,y,b(x._payload),E)}if(Ai(x)||_i(x))return g=g.get(y)||null,d(m,g,x,E,null);no(m,x)}return null}function v(g,m,y,x){for(var E=null,b=null,T=m,P=m=0,G=null;T!==null&&P<y.length;P++){T.index>P?(G=T,T=null):G=T.sibling;var M=f(g,T,y[P],x);if(M===null){T===null&&(T=G);break}t&&T&&M.alternate===null&&e(g,T),m=s(M,m,P),b===null?E=M:b.sibling=M,b=M,T=G}if(P===y.length)return n(g,T),re&&$n(g,P),E;if(T===null){for(;P<y.length;P++)T=h(g,y[P],x),T!==null&&(m=s(T,m,P),b===null?E=T:b.sibling=T,b=T);return re&&$n(g,P),E}for(T=r(g,T);P<y.length;P++)G=_(T,g,P,y[P],x),G!==null&&(t&&G.alternate!==null&&T.delete(G.key===null?P:G.key),m=s(G,m,P),b===null?E=G:b.sibling=G,b=G);return t&&T.forEach(function(ue){return e(g,ue)}),re&&$n(g,P),E}function S(g,m,y,x){var E=_i(y);if(typeof E!="function")throw Error(k(150));if(y=E.call(y),y==null)throw Error(k(151));for(var b=E=null,T=m,P=m=0,G=null,M=y.next();T!==null&&!M.done;P++,M=y.next()){T.index>P?(G=T,T=null):G=T.sibling;var ue=f(g,T,M.value,x);if(ue===null){T===null&&(T=G);break}t&&T&&ue.alternate===null&&e(g,T),m=s(ue,m,P),b===null?E=ue:b.sibling=ue,b=ue,T=G}if(M.done)return n(g,T),re&&$n(g,P),E;if(T===null){for(;!M.done;P++,M=y.next())M=h(g,M.value,x),M!==null&&(m=s(M,m,P),b===null?E=M:b.sibling=M,b=M);return re&&$n(g,P),E}for(T=r(g,T);!M.done;P++,M=y.next())M=_(T,g,P,M.value,x),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?P:M.key),m=s(M,m,P),b===null?E=M:b.sibling=M,b=M);return t&&T.forEach(function(Te){return e(g,Te)}),re&&$n(g,P),E}function C(g,m,y,x){if(typeof y=="object"&&y!==null&&y.type===wr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Hs:e:{for(var E=y.key,b=m;b!==null;){if(b.key===E){if(E=y.type,E===wr){if(b.tag===7){n(g,b.sibling),m=i(b,y.props.children),m.return=g,g=m;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===on&&gf(E)===b.type){n(g,b.sibling),m=i(b,y.props),m.ref=Ci(g,b,y),m.return=g,g=m;break e}n(g,b);break}else e(g,b);b=b.sibling}y.type===wr?(m=Yn(y.props.children,g.mode,x,y.key),m.return=g,g=m):(x=bo(y.type,y.key,y.props,null,g.mode,x),x.ref=Ci(g,m,y),x.return=g,g=x)}return o(g);case vr:e:{for(b=y.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(g,m.sibling),m=i(m,y.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=Fl(y,g.mode,x),m.return=g,g=m}return o(g);case on:return b=y._init,C(g,m,b(y._payload),x)}if(Ai(y))return v(g,m,y,x);if(_i(y))return S(g,m,y,x);no(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,y),m.return=g,g=m):(n(g,m),m=Ml(y,g.mode,x),m.return=g,g=m),o(g)):n(g,m)}return C}var Yr=Eg(!0),kg=Eg(!1),Ns={},Pt=Ln(Ns),as=Ln(Ns),ls=Ln(Ns);function Hn(t){if(t===Ns)throw Error(k(174));return t}function rd(t,e){switch(ee(ls,e),ee(as,t),ee(Pt,Ns),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xc(e,t)}ne(Pt),ee(Pt,e)}function Qr(){ne(Pt),ne(as),ne(ls)}function bg(t){Hn(ls.current);var e=Hn(Pt.current),n=xc(e,t.type);e!==n&&(ee(as,t),ee(Pt,n))}function id(t){as.current===t&&(ne(Pt),ne(as))}var ie=Ln(0);function qo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rl=[];function sd(){for(var t=0;t<Rl.length;t++)Rl[t]._workInProgressVersionPrimary=null;Rl.length=0}var xo=nn.ReactCurrentDispatcher,Pl=nn.ReactCurrentBatchConfig,Zn=0,se=null,pe=null,we=null,Yo=!1,zi=!1,cs=0,vx=0;function Re(){throw Error(k(321))}function od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kt(t[n],e[n]))return!1;return!0}function ad(t,e,n,r,i,s){if(Zn=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xo.current=t===null||t.memoizedState===null?Cx:Ex,t=n(r,i),zi){s=0;do{if(zi=!1,cs=0,25<=s)throw Error(k(301));s+=1,we=pe=null,e.updateQueue=null,xo.current=kx,t=n(r,i)}while(zi)}if(xo.current=Qo,e=pe!==null&&pe.next!==null,Zn=0,we=pe=se=null,Yo=!1,e)throw Error(k(300));return t}function ld(){var t=cs!==0;return cs=0,t}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?se.memoizedState=we=t:we=we.next=t,we}function ut(){if(pe===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=pe.next;var e=we===null?se.memoizedState:we.next;if(e!==null)we=e,pe=t;else{if(t===null)throw Error(k(310));pe=t,t={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},we===null?se.memoizedState=we=t:we=we.next=t}return we}function us(t,e){return typeof e=="function"?e(t):e}function Al(t){var e=ut(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Zn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,se.lanes|=d,er|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,kt(r,e.memoizedState)||(Ve=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,se.lanes|=s,er|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dl(t){var e=ut(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kt(s,e.memoizedState)||(Ve=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ng(){}function Ig(t,e){var n=se,r=ut(),i=e(),s=!kt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ve=!0),r=r.queue,cd(Pg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,ds(9,Rg.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(k(349));Zn&30||Tg(n,e,i)}return i}function Tg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Rg(t,e,n,r){e.value=n,e.getSnapshot=r,Ag(e)&&Dg(t)}function Pg(t,e,n){return n(function(){Ag(e)&&Dg(t)})}function Ag(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kt(t,n)}catch{return!0}}function Dg(t){var e=Xt(t,1);e!==null&&Ct(e,t,1,-1)}function yf(t){var e=It();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:t},e.queue=t,t=t.dispatch=Sx.bind(null,se,t),[e.memoizedState,t]}function ds(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Og(){return ut().memoizedState}function So(t,e,n,r){var i=It();se.flags|=t,i.memoizedState=ds(1|e,n,void 0,r===void 0?null:r)}function Fa(t,e,n,r){var i=ut();r=r===void 0?null:r;var s=void 0;if(pe!==null){var o=pe.memoizedState;if(s=o.destroy,r!==null&&od(r,o.deps)){i.memoizedState=ds(e,n,s,r);return}}se.flags|=t,i.memoizedState=ds(1|e,n,s,r)}function _f(t,e){return So(8390656,8,t,e)}function cd(t,e){return Fa(2048,8,t,e)}function Lg(t,e){return Fa(4,2,t,e)}function Mg(t,e){return Fa(4,4,t,e)}function Fg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ug(t,e,n){return n=n!=null?n.concat([t]):null,Fa(4,4,Fg.bind(null,e,t),n)}function ud(){}function $g(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&od(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function zg(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&od(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Bg(t,e,n){return Zn&21?(kt(n,e)||(n=Vm(),se.lanes|=n,er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ve=!0),t.memoizedState=n)}function wx(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=Pl.transition;Pl.transition={};try{t(!1),e()}finally{q=n,Pl.transition=r}}function jg(){return ut().memoizedState}function xx(t,e,n){var r=Sn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wg(t))Vg(e,n);else if(n=wg(t,e,n,r),n!==null){var i=Fe();Ct(n,t,r,i),Hg(n,e,r)}}function Sx(t,e,n){var r=Sn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wg(t))Vg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kt(a,o)){var l=e.interleaved;l===null?(i.next=i,td(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=wg(t,e,i,r),n!==null&&(i=Fe(),Ct(n,t,r,i),Hg(n,e,r))}}function Wg(t){var e=t.alternate;return t===se||e!==null&&e===se}function Vg(t,e){zi=Yo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Hg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bu(t,n)}}var Qo={readContext:ct,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Cx={readContext:ct,useCallback:function(t,e){return It().memoizedState=[t,e===void 0?null:e],t},useContext:ct,useEffect:_f,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,So(4194308,4,Fg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return So(4194308,4,t,e)},useInsertionEffect:function(t,e){return So(4,2,t,e)},useMemo:function(t,e){var n=It();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=It();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xx.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=It();return t={current:t},e.memoizedState=t},useState:yf,useDebugValue:ud,useDeferredValue:function(t){return It().memoizedState=t},useTransition:function(){var t=yf(!1),e=t[0];return t=wx.bind(null,t[1]),It().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=It();if(re){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Se===null)throw Error(k(349));Zn&30||Tg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_f(Pg.bind(null,r,s,t),[t]),r.flags|=2048,ds(9,Rg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=It(),e=Se.identifierPrefix;if(re){var n=Wt,r=jt;n=(r&~(1<<32-St(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=cs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ex={readContext:ct,useCallback:$g,useContext:ct,useEffect:cd,useImperativeHandle:Ug,useInsertionEffect:Lg,useLayoutEffect:Mg,useMemo:zg,useReducer:Al,useRef:Og,useState:function(){return Al(us)},useDebugValue:ud,useDeferredValue:function(t){var e=ut();return Bg(e,pe.memoizedState,t)},useTransition:function(){var t=Al(us)[0],e=ut().memoizedState;return[t,e]},useMutableSource:Ng,useSyncExternalStore:Ig,useId:jg,unstable_isNewReconciler:!1},kx={readContext:ct,useCallback:$g,useContext:ct,useEffect:cd,useImperativeHandle:Ug,useInsertionEffect:Lg,useLayoutEffect:Mg,useMemo:zg,useReducer:Dl,useRef:Og,useState:function(){return Dl(us)},useDebugValue:ud,useDeferredValue:function(t){var e=ut();return pe===null?e.memoizedState=t:Bg(e,pe.memoizedState,t)},useTransition:function(){var t=Dl(us)[0],e=ut().memoizedState;return[t,e]},useMutableSource:Ng,useSyncExternalStore:Ig,useId:jg,unstable_isNewReconciler:!1};function Xr(t,e){try{var n="",r=e;do n+=Zw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ol(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bx=typeof WeakMap=="function"?WeakMap:Map;function Gg(t,e,n){n=Kt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Jo||(Jo=!0,eu=r),Vc(t,e)},n}function Kg(t,e,n){n=Kt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Vc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vc(t,e),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zx.bind(null,t,e,n),e.then(t,t))}function wf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kt(-1,1),e.tag=2,wn(n,e,1))),n.lanes|=1),t)}var Nx=nn.ReactCurrentOwner,Ve=!1;function Oe(t,e,n,r){e.child=t===null?kg(e,null,n,r):Yr(e,t.child,n,r)}function Sf(t,e,n,r,i){n=n.render;var s=e.ref;return Fr(e,i),r=ad(t,e,n,r,s,i),n=ld(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(re&&n&&Yu(e),e.flags|=1,Oe(t,e,r,i),e.child)}function Cf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_d(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,qg(t,e,s,r,i)):(t=bo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:rs,n(o,r)&&t.ref===e.ref)return Jt(t,e,i)}return e.flags|=1,t=Cn(s,r),t.ref=e.ref,t.return=e,e.child=t}function qg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(rs(s,r)&&t.ref===e.ref)if(Ve=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ve=!0);else return e.lanes=t.lanes,Jt(t,e,i)}return Hc(t,e,n,r,i)}function Yg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Rr,Ye),Ye|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Rr,Ye),Ye|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(Rr,Ye),Ye|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(Rr,Ye),Ye|=r;return Oe(t,e,i,n),e.child}function Qg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hc(t,e,n,r,i){var s=Ke(n)?Xn:De.current;return s=Kr(e,s),Fr(e,i),n=ad(t,e,n,r,s,i),r=ld(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(re&&r&&Yu(e),e.flags|=1,Oe(t,e,n,i),e.child)}function Ef(t,e,n,r,i){if(Ke(n)){var s=!0;jo(e)}else s=!1;if(Fr(e,i),e.stateNode===null)Co(t,e),Cg(e,n,r),Wc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ct(c):(c=Ke(n)?Xn:De.current,c=Kr(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&mf(e,o,r,c),an=!1;var f=e.memoizedState;o.state=f,Ko(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ge.current||an?(typeof d=="function"&&(jc(e,n,d,r),l=e.memoizedState),(a=an||pf(e,n,a,r,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,xg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:mt(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ct(l):(l=Ke(n)?Xn:De.current,l=Kr(e,l));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&mf(e,o,r,l),an=!1,f=e.memoizedState,o.state=f,Ko(e,r,o,i);var v=e.memoizedState;a!==h||f!==v||Ge.current||an?(typeof _=="function"&&(jc(e,n,_,r),v=e.memoizedState),(c=an||pf(e,n,c,r,f,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Gc(t,e,n,r,s,i)}function Gc(t,e,n,r,i,s){Qg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&cf(e,n,!1),Jt(t,e,s);r=e.stateNode,Nx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Yr(e,t.child,null,s),e.child=Yr(e,null,a,s)):Oe(t,e,a,s),e.memoizedState=r.state,i&&cf(e,n,!0),e.child}function Xg(t){var e=t.stateNode;e.pendingContext?lf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lf(t,e.context,!1),rd(t,e.containerInfo)}function kf(t,e,n,r,i){return qr(),Xu(i),e.flags|=256,Oe(t,e,n,r),e.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jg(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(ie,i&1),t===null)return zc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=za(o,r,0,null),t=Yn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qc(n),e.memoizedState=Kc,t):dd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ix(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Cn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cn(a,s):(s=Yn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kc,r}return s=t.child,t=s.sibling,r=Cn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dd(t,e){return e=za({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ro(t,e,n,r){return r!==null&&Xu(r),Yr(e,t.child,null,n),t=dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ix(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ol(Error(k(422))),ro(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=za({mode:"visible",children:r.children},i,0,null),s=Yn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Yr(e,t.child,null,o),e.child.memoizedState=qc(o),e.memoizedState=Kc,s);if(!(e.mode&1))return ro(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Ol(s,r,void 0),ro(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ve||a){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xt(t,i),Ct(r,t,i,-1))}return yd(),r=Ol(Error(k(421))),ro(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Bx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qe=vn(i.nextSibling),Xe=e,re=!0,yt=null,t!==null&&(nt[rt++]=jt,nt[rt++]=Wt,nt[rt++]=Jn,jt=t.id,Wt=t.overflow,Jn=e),e=dd(e,r.children),e.flags|=4096,e)}function bf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bc(t.return,e,n)}function Ll(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Zg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Oe(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bf(t,n,e);else if(t.tag===19)bf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&qo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ll(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&qo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ll(e,!0,n,null,s);break;case"together":Ll(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Co(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Tx(t,e,n){switch(e.tag){case 3:Xg(e),qr();break;case 5:bg(e);break;case 1:Ke(e.type)&&jo(e);break;case 4:rd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(Ho,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?Jg(t,e,n):(ee(ie,ie.current&1),t=Jt(t,e,n),t!==null?t.sibling:null);ee(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Zg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Yg(t,e,n)}return Jt(t,e,n)}var ey,Yc,ty,ny;ey=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yc=function(){};ty=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hn(Pt.current);var s=null;switch(n){case"input":i=yc(t,i),r=yc(t,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=wc(t,i),r=wc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=zo)}Sc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ny=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ei(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Rx(t,e,n){var r=e.pendingProps;switch(Qu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return Ke(e.type)&&Bo(),Pe(e),null;case 3:return r=e.stateNode,Qr(),ne(Ge),ne(De),sd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(to(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yt!==null&&(ru(yt),yt=null))),Yc(t,e),Pe(e),null;case 5:id(e);var i=Hn(ls.current);if(n=e.type,t!==null&&e.stateNode!=null)ty(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Pe(e),null}if(t=Hn(Pt.current),to(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tt]=e,r[os]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Oi.length;i++)te(Oi[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Oh(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":Mh(r,s),te("invalid",r)}Sc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&eo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&eo(r.textContent,a,t),i=["children",""+a]):Qi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Gs(r),Lh(r,s,!0);break;case"textarea":Gs(r),Fh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=zo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tt]=e,t[os]=r,ey(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cc(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Oi.length;i++)te(Oi[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":Oh(t,r),i=yc(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),te("invalid",t);break;case"textarea":Mh(t,r),i=wc(t,r),te("invalid",t);break;default:i=r}Sc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Am(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xi(t,l):typeof l=="number"&&Xi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",t):l!=null&&Lu(t,s,l,o))}switch(n){case"input":Gs(t),Lh(t,r,!1);break;case"textarea":Gs(t),Fh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Tn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Dr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Dr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)ny(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Hn(ls.current),Hn(Pt.current),to(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tt]=e,(s=r.nodeValue!==n)&&(t=Xe,t!==null))switch(t.tag){case 3:eo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=e,e.stateNode=r}return Pe(e),null;case 13:if(ne(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&Qe!==null&&e.mode&1&&!(e.flags&128))vg(),qr(),e.flags|=98560,s=!1;else if(s=to(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Tt]=e}else qr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pe(e),s=!1}else yt!==null&&(ru(yt),yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?ye===0&&(ye=3):yd())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return Qr(),Yc(t,e),t===null&&is(e.stateNode.containerInfo),Pe(e),null;case 10:return ed(e.type._context),Pe(e),null;case 17:return Ke(e.type)&&Bo(),Pe(e),null;case 19:if(ne(ie),s=e.memoizedState,s===null)return Pe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ei(s,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qo(t),o!==null){for(e.flags|=128,Ei(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>Jr&&(e.flags|=128,r=!0,Ei(s,!1),e.lanes=4194304)}else{if(!r)if(t=qo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ei(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return Pe(e),null}else 2*he()-s.renderingStartTime>Jr&&n!==1073741824&&(e.flags|=128,r=!0,Ei(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=ie.current,ee(ie,r?n&1|2:n&1),e):(Pe(e),null);case 22:case 23:return gd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ye&1073741824&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function Px(t,e){switch(Qu(e),e.tag){case 1:return Ke(e.type)&&Bo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qr(),ne(Ge),ne(De),sd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return id(e),null;case 13:if(ne(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));qr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(ie),null;case 4:return Qr(),null;case 10:return ed(e.type._context),null;case 22:case 23:return gd(),null;case 24:return null;default:return null}}var io=!1,Ae=!1,Ax=typeof WeakSet=="function"?WeakSet:Set,D=null;function Tr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function Qc(t,e,n){try{n()}catch(r){ae(t,e,r)}}var Nf=!1;function Dx(t,e){if(Dc=Fo,t=og(),qu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var _;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)f=h,h=_;for(;;){if(h===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++d===r&&(l=o),(_=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oc={focusedElem:t,selectionRange:n},Fo=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,C=v.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?S:mt(e.type,S),C);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){ae(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return v=Nf,Nf=!1,v}function Bi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qc(e,n,s)}i=i.next}while(i!==r)}}function Ua(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ry(t){var e=t.alternate;e!==null&&(t.alternate=null,ry(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tt],delete e[os],delete e[Fc],delete e[mx],delete e[gx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function iy(t){return t.tag===5||t.tag===3||t.tag===4}function If(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zo));else if(r!==4&&(t=t.child,t!==null))for(Jc(t,e,n),t=t.sibling;t!==null;)Jc(t,e,n),t=t.sibling}function Zc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zc(t,e,n),t=t.sibling;t!==null;)Zc(t,e,n),t=t.sibling}var Ce=null,gt=!1;function rn(t,e,n){for(n=n.child;n!==null;)sy(t,e,n),n=n.sibling}function sy(t,e,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Ra,n)}catch{}switch(n.tag){case 5:Ae||Tr(n,e);case 6:var r=Ce,i=gt;Ce=null,rn(t,e,n),Ce=r,gt=i,Ce!==null&&(gt?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(gt?(t=Ce,n=n.stateNode,t.nodeType===8?Il(t.parentNode,n):t.nodeType===1&&Il(t,n),ts(t)):Il(Ce,n.stateNode));break;case 4:r=Ce,i=gt,Ce=n.stateNode.containerInfo,gt=!0,rn(t,e,n),Ce=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qc(n,e,o),i=i.next}while(i!==r)}rn(t,e,n);break;case 1:if(!Ae&&(Tr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,e,a)}rn(t,e,n);break;case 21:rn(t,e,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,rn(t,e,n),Ae=r):rn(t,e,n);break;default:rn(t,e,n)}}function Tf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ax),e.forEach(function(r){var i=jx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,gt=!1;break e;case 3:Ce=a.stateNode.containerInfo,gt=!0;break e;case 4:Ce=a.stateNode.containerInfo,gt=!0;break e}a=a.return}if(Ce===null)throw Error(k(160));sy(s,o,i),Ce=null,gt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)oy(e,t),e=e.sibling}function oy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pt(e,t),Nt(t),r&4){try{Bi(3,t,t.return),Ua(3,t)}catch(S){ae(t,t.return,S)}try{Bi(5,t,t.return)}catch(S){ae(t,t.return,S)}}break;case 1:pt(e,t),Nt(t),r&512&&n!==null&&Tr(n,n.return);break;case 5:if(pt(e,t),Nt(t),r&512&&n!==null&&Tr(n,n.return),t.flags&32){var i=t.stateNode;try{Xi(i,"")}catch(S){ae(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Nm(i,s),Cc(a,o);var c=Cc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Am(i,h):d==="dangerouslySetInnerHTML"?Rm(i,h):d==="children"?Xi(i,h):Lu(i,d,h,c)}switch(a){case"input":_c(i,s);break;case"textarea":Im(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Dr(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?Dr(i,!!s.multiple,s.defaultValue,!0):Dr(i,!!s.multiple,s.multiple?[]:"",!1))}i[os]=s}catch(S){ae(t,t.return,S)}}break;case 6:if(pt(e,t),Nt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){ae(t,t.return,S)}}break;case 3:if(pt(e,t),Nt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ts(e.containerInfo)}catch(S){ae(t,t.return,S)}break;case 4:pt(e,t),Nt(t);break;case 13:pt(e,t),Nt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pd=he())),r&4&&Tf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ae=(c=Ae)||d,pt(e,t),Ae=c):pt(e,t),Nt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(D=t,d=t.child;d!==null;){for(h=D=d;D!==null;){switch(f=D,_=f.child,f.tag){case 0:case 11:case 14:case 15:Bi(4,f,f.return);break;case 1:Tr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){ae(r,n,S)}}break;case 5:Tr(f,f.return);break;case 22:if(f.memoizedState!==null){Pf(h);continue}}_!==null?(_.return=f,D=_):Pf(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Pm("display",o))}catch(S){ae(t,t.return,S)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){ae(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pt(e,t),Nt(t),r&4&&Tf(t);break;case 21:break;default:pt(e,t),Nt(t)}}function Nt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(iy(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xi(i,""),r.flags&=-33);var s=If(t);Zc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=If(t);Jc(t,a,o);break;default:throw Error(k(161))}}catch(l){ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ox(t,e,n){D=t,ay(t)}function ay(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||io;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ae;a=io;var c=Ae;if(io=o,(Ae=l)&&!c)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?Af(i):l!==null?(l.return=o,D=l):Af(i);for(;s!==null;)D=s,ay(s),s=s.sibling;D=i,io=a,Ae=c}Rf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):Rf(t)}}function Rf(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ae||Ua(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ff(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ff(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ts(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Ae||e.flags&512&&Xc(e)}catch(f){ae(e,e.return,f)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function Pf(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Af(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ua(4,e)}catch(l){ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ae(e,i,l)}}var s=e.return;try{Xc(e)}catch(l){ae(e,s,l)}break;case 5:var o=e.return;try{Xc(e)}catch(l){ae(e,o,l)}}}catch(l){ae(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var Lx=Math.ceil,Xo=nn.ReactCurrentDispatcher,hd=nn.ReactCurrentOwner,ot=nn.ReactCurrentBatchConfig,H=0,Se=null,fe=null,ke=0,Ye=0,Rr=Ln(0),ye=0,hs=null,er=0,$a=0,fd=0,ji=null,We=null,pd=0,Jr=1/0,$t=null,Jo=!1,eu=null,xn=null,so=!1,pn=null,Zo=0,Wi=0,tu=null,Eo=-1,ko=0;function Fe(){return H&6?he():Eo!==-1?Eo:Eo=he()}function Sn(t){return t.mode&1?H&2&&ke!==0?ke&-ke:_x.transition!==null?(ko===0&&(ko=Vm()),ko):(t=q,t!==0||(t=window.event,t=t===void 0?16:Xm(t.type)),t):1}function Ct(t,e,n,r){if(50<Wi)throw Wi=0,tu=null,Error(k(185));Es(t,n,r),(!(H&2)||t!==Se)&&(t===Se&&(!(H&2)&&($a|=n),ye===4&&cn(t,ke)),qe(t,r),n===1&&H===0&&!(e.mode&1)&&(Jr=he()+500,La&&Mn()))}function qe(t,e){var n=t.callbackNode;_0(t,e);var r=Mo(t,t===Se?ke:0);if(r===0)n!==null&&zh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zh(n),e===1)t.tag===0?yx(Df.bind(null,t)):gg(Df.bind(null,t)),fx(function(){!(H&6)&&Mn()}),n=null;else{switch(Hm(r)){case 1:n=zu;break;case 4:n=jm;break;case 16:n=Lo;break;case 536870912:n=Wm;break;default:n=Lo}n=my(n,ly.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ly(t,e){if(Eo=-1,ko=0,H&6)throw Error(k(327));var n=t.callbackNode;if(Ur()&&t.callbackNode!==n)return null;var r=Mo(t,t===Se?ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ea(t,r);else{e=r;var i=H;H|=2;var s=uy();(Se!==t||ke!==e)&&($t=null,Jr=he()+500,qn(t,e));do try{Ux();break}catch(a){cy(t,a)}while(1);Zu(),Xo.current=s,H=i,fe!==null?e=0:(Se=null,ke=0,e=ye)}if(e!==0){if(e===2&&(i=Ic(t),i!==0&&(r=i,e=nu(t,i))),e===1)throw n=hs,qn(t,0),cn(t,r),qe(t,he()),n;if(e===6)cn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Mx(i)&&(e=ea(t,r),e===2&&(s=Ic(t),s!==0&&(r=s,e=nu(t,s))),e===1))throw n=hs,qn(t,0),cn(t,r),qe(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:zn(t,We,$t);break;case 3:if(cn(t,r),(r&130023424)===r&&(e=pd+500-he(),10<e)){if(Mo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Fe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Mc(zn.bind(null,t,We,$t),e);break}zn(t,We,$t);break;case 4:if(cn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-St(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lx(r/1960))-r,10<r){t.timeoutHandle=Mc(zn.bind(null,t,We,$t),r);break}zn(t,We,$t);break;case 5:zn(t,We,$t);break;default:throw Error(k(329))}}}return qe(t,he()),t.callbackNode===n?ly.bind(null,t):null}function nu(t,e){var n=ji;return t.current.memoizedState.isDehydrated&&(qn(t,e).flags|=256),t=ea(t,e),t!==2&&(e=We,We=n,e!==null&&ru(e)),t}function ru(t){We===null?We=t:We.push.apply(We,t)}function Mx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cn(t,e){for(e&=~fd,e&=~$a,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-St(e),r=1<<n;t[n]=-1,e&=~r}}function Df(t){if(H&6)throw Error(k(327));Ur();var e=Mo(t,0);if(!(e&1))return qe(t,he()),null;var n=ea(t,e);if(t.tag!==0&&n===2){var r=Ic(t);r!==0&&(e=r,n=nu(t,r))}if(n===1)throw n=hs,qn(t,0),cn(t,e),qe(t,he()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zn(t,We,$t),qe(t,he()),null}function md(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(Jr=he()+500,La&&Mn())}}function tr(t){pn!==null&&pn.tag===0&&!(H&6)&&Ur();var e=H;H|=1;var n=ot.transition,r=q;try{if(ot.transition=null,q=1,t)return t()}finally{q=r,ot.transition=n,H=e,!(H&6)&&Mn()}}function gd(){Ye=Rr.current,ne(Rr)}function qn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hx(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Qu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bo();break;case 3:Qr(),ne(Ge),ne(De),sd();break;case 5:id(r);break;case 4:Qr();break;case 13:ne(ie);break;case 19:ne(ie);break;case 10:ed(r.type._context);break;case 22:case 23:gd()}n=n.return}if(Se=t,fe=t=Cn(t.current,null),ke=Ye=e,ye=0,hs=null,fd=$a=er=0,We=ji=null,Vn!==null){for(e=0;e<Vn.length;e++)if(n=Vn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Vn=null}return t}function cy(t,e){do{var n=fe;try{if(Zu(),xo.current=Qo,Yo){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yo=!1}if(Zn=0,we=pe=se=null,zi=!1,cs=0,hd.current=null,n===null||n.return===null){ye=1,hs=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=wf(o);if(_!==null){_.flags&=-257,xf(_,o,a,s,e),_.mode&1&&vf(s,c,e),e=_,l=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){vf(s,c,e),yd();break e}l=Error(k(426))}}else if(re&&a.mode&1){var C=wf(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),xf(C,o,a,s,e),Xu(Xr(l,a));break e}}s=l=Xr(l,a),ye!==4&&(ye=2),ji===null?ji=[s]:ji.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Gg(s,l,e);hf(s,g);break e;case 1:a=l;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(xn===null||!xn.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Kg(s,a,e);hf(s,x);break e}}s=s.return}while(s!==null)}hy(n)}catch(E){e=E,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function uy(){var t=Xo.current;return Xo.current=Qo,t===null?Qo:t}function yd(){(ye===0||ye===3||ye===2)&&(ye=4),Se===null||!(er&268435455)&&!($a&268435455)||cn(Se,ke)}function ea(t,e){var n=H;H|=2;var r=uy();(Se!==t||ke!==e)&&($t=null,qn(t,e));do try{Fx();break}catch(i){cy(t,i)}while(1);if(Zu(),H=n,Xo.current=r,fe!==null)throw Error(k(261));return Se=null,ke=0,ye}function Fx(){for(;fe!==null;)dy(fe)}function Ux(){for(;fe!==null&&!c0();)dy(fe)}function dy(t){var e=py(t.alternate,t,Ye);t.memoizedProps=t.pendingProps,e===null?hy(t):fe=e,hd.current=null}function hy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Px(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,fe=null;return}}else if(n=Rx(n,e,Ye),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ye===0&&(ye=5)}function zn(t,e,n){var r=q,i=ot.transition;try{ot.transition=null,q=1,$x(t,e,n,r)}finally{ot.transition=i,q=r}return null}function $x(t,e,n,r){do Ur();while(pn!==null);if(H&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(v0(t,s),t===Se&&(fe=Se=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||so||(so=!0,my(Lo,function(){return Ur(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ot.transition,ot.transition=null;var o=q;q=1;var a=H;H|=4,hd.current=null,Dx(t,n),oy(n,t),sx(Oc),Fo=!!Dc,Oc=Dc=null,t.current=n,Ox(n),u0(),H=a,q=o,ot.transition=s}else t.current=n;if(so&&(so=!1,pn=t,Zo=i),s=t.pendingLanes,s===0&&(xn=null),f0(n.stateNode),qe(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jo)throw Jo=!1,t=eu,eu=null,t;return Zo&1&&t.tag!==0&&Ur(),s=t.pendingLanes,s&1?t===tu?Wi++:(Wi=0,tu=t):Wi=0,Mn(),null}function Ur(){if(pn!==null){var t=Hm(Zo),e=ot.transition,n=q;try{if(ot.transition=null,q=16>t?16:t,pn===null)var r=!1;else{if(t=pn,pn=null,Zo=0,H&6)throw Error(k(331));var i=H;for(H|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(D=c;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:Bi(8,d,s)}var h=d.child;if(h!==null)h.return=d,D=h;else for(;D!==null;){d=D;var f=d.sibling,_=d.return;if(ry(d),d===c){D=null;break}if(f!==null){f.return=_,D=f;break}D=_}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var C=S.sibling;S.sibling=null,S=C}while(S!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bi(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,D=g;break e}D=s.return}}var m=t.current;for(D=m;D!==null;){o=D;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,D=y;else e:for(o=m;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ua(9,a)}}catch(E){ae(a,a.return,E)}if(a===o){D=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,D=x;break e}D=a.return}}if(H=i,Mn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Ra,t)}catch{}r=!0}return r}finally{q=n,ot.transition=e}}return!1}function Of(t,e,n){e=Xr(n,e),e=Gg(t,e,1),t=wn(t,e,1),e=Fe(),t!==null&&(Es(t,1,e),qe(t,e))}function ae(t,e,n){if(t.tag===3)Of(t,t,n);else for(;e!==null;){if(e.tag===3){Of(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){t=Xr(n,t),t=Kg(e,t,1),e=wn(e,t,1),t=Fe(),e!==null&&(Es(e,1,t),qe(e,t));break}}e=e.return}}function zx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Fe(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(ke&n)===n&&(ye===4||ye===3&&(ke&130023424)===ke&&500>he()-pd?qn(t,0):fd|=n),qe(t,e)}function fy(t,e){e===0&&(t.mode&1?(e=Ys,Ys<<=1,!(Ys&130023424)&&(Ys=4194304)):e=1);var n=Fe();t=Xt(t,e),t!==null&&(Es(t,e,n),qe(t,n))}function Bx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fy(t,n)}function jx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),fy(t,n)}var py;py=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)Ve=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ve=!1,Tx(t,e,n);Ve=!!(t.flags&131072)}else Ve=!1,re&&e.flags&1048576&&yg(e,Vo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Co(t,e),t=e.pendingProps;var i=Kr(e,De.current);Fr(e,n),i=ad(null,e,r,t,i,n);var s=ld();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(r)?(s=!0,jo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nd(e),i.updater=Ma,e.stateNode=i,i._reactInternals=e,Wc(e,r,t,n),e=Gc(null,e,r,!0,s,n)):(e.tag=0,re&&s&&Yu(e),Oe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Co(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Vx(r),t=mt(r,t),i){case 0:e=Hc(null,e,r,t,n);break e;case 1:e=Ef(null,e,r,t,n);break e;case 11:e=Sf(null,e,r,t,n);break e;case 14:e=Cf(null,e,r,mt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Hc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Ef(t,e,r,i,n);case 3:e:{if(Xg(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,xg(t,e),Ko(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xr(Error(k(423)),e),e=kf(t,e,r,n,i);break e}else if(r!==i){i=Xr(Error(k(424)),e),e=kf(t,e,r,n,i);break e}else for(Qe=vn(e.stateNode.containerInfo.firstChild),Xe=e,re=!0,yt=null,n=kg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qr(),r===i){e=Jt(t,e,n);break e}Oe(t,e,r,n)}e=e.child}return e;case 5:return bg(e),t===null&&zc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Lc(r,i)?o=null:s!==null&&Lc(r,s)&&(e.flags|=32),Qg(t,e),Oe(t,e,o,n),e.child;case 6:return t===null&&zc(e),null;case 13:return Jg(t,e,n);case 4:return rd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yr(e,null,r,n):Oe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Sf(t,e,r,i,n);case 7:return Oe(t,e,e.pendingProps,n),e.child;case 8:return Oe(t,e,e.pendingProps.children,n),e.child;case 12:return Oe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(Ho,r._currentValue),r._currentValue=o,s!==null)if(kt(s.value,o)){if(s.children===i.children&&!Ge.current){e=Jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Kt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Oe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fr(e,n),i=ct(i),r=r(i),e.flags|=1,Oe(t,e,r,n),e.child;case 14:return r=e.type,i=mt(r,e.pendingProps),i=mt(r.type,i),Cf(t,e,r,i,n);case 15:return qg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Co(t,e),e.tag=1,Ke(r)?(t=!0,jo(e)):t=!1,Fr(e,n),Cg(e,r,i),Wc(e,r,i,n),Gc(null,e,r,!0,t,n);case 19:return Zg(t,e,n);case 22:return Yg(t,e,n)}throw Error(k(156,e.tag))};function my(t,e){return Bm(t,e)}function Wx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(t,e,n,r){return new Wx(t,e,n,r)}function _d(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vx(t){if(typeof t=="function")return _d(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fu)return 11;if(t===Uu)return 14}return 2}function Cn(t,e){var n=t.alternate;return n===null?(n=it(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_d(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wr:return Yn(n.children,i,s,e);case Mu:o=8,i|=8;break;case fc:return t=it(12,n,e,i|2),t.elementType=fc,t.lanes=s,t;case pc:return t=it(13,n,e,i),t.elementType=pc,t.lanes=s,t;case mc:return t=it(19,n,e,i),t.elementType=mc,t.lanes=s,t;case Em:return za(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sm:o=10;break e;case Cm:o=9;break e;case Fu:o=11;break e;case Uu:o=14;break e;case on:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=it(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yn(t,e,n,r){return t=it(7,t,r,e),t.lanes=n,t}function za(t,e,n,r){return t=it(22,t,r,e),t.elementType=Em,t.lanes=n,t.stateNode={isHidden:!1},t}function Ml(t,e,n){return t=it(6,t,null,e),t.lanes=n,t}function Fl(t,e,n){return e=it(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vd(t,e,n,r,i,s,o,a,l){return t=new Hx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=it(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nd(s),t}function Gx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function gy(t){if(!t)return Rn;t=t._reactInternals;e:{if(dr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Ke(n))return mg(t,n,e)}return e}function yy(t,e,n,r,i,s,o,a,l){return t=vd(n,r,!0,t,i,s,o,a,l),t.context=gy(null),n=t.current,r=Fe(),i=Sn(n),s=Kt(r,i),s.callback=e??null,wn(n,s,i),t.current.lanes=i,Es(t,i,r),qe(t,r),t}function Ba(t,e,n,r){var i=e.current,s=Fe(),o=Sn(i);return n=gy(n),e.context===null?e.context=n:e.pendingContext=n,e=Kt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wn(i,e,o),t!==null&&(Ct(t,i,o,s),wo(t,i,o)),o}function ta(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wd(t,e){Lf(t,e),(t=t.alternate)&&Lf(t,e)}function Kx(){return null}var _y=typeof reportError=="function"?reportError:function(t){console.error(t)};function xd(t){this._internalRoot=t}ja.prototype.render=xd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Ba(t,e,null,null)};ja.prototype.unmount=xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;tr(function(){Ba(null,t,null,null)}),e[Qt]=null}};function ja(t){this._internalRoot=t}ja.prototype.unstable_scheduleHydration=function(t){if(t){var e=qm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ln.length&&e!==0&&e<ln[n].priority;n++);ln.splice(n,0,t),n===0&&Qm(t)}};function Sd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mf(){}function qx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ta(o);s.call(c)}}var o=yy(e,r,t,0,null,!1,!1,"",Mf);return t._reactRootContainer=o,t[Qt]=o.current,is(t.nodeType===8?t.parentNode:t),tr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ta(l);a.call(c)}}var l=vd(t,0,!1,null,null,!1,!1,"",Mf);return t._reactRootContainer=l,t[Qt]=l.current,is(t.nodeType===8?t.parentNode:t),tr(function(){Ba(e,l,n,r)}),l}function Va(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ta(o);a.call(l)}}Ba(e,o,t,i)}else o=qx(n,e,t,i,r);return ta(o)}Gm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Di(e.pendingLanes);n!==0&&(Bu(e,n|1),qe(e,he()),!(H&6)&&(Jr=he()+500,Mn()))}break;case 13:tr(function(){var r=Xt(t,1);if(r!==null){var i=Fe();Ct(r,t,1,i)}}),wd(t,1)}};ju=function(t){if(t.tag===13){var e=Xt(t,134217728);if(e!==null){var n=Fe();Ct(e,t,134217728,n)}wd(t,134217728)}};Km=function(t){if(t.tag===13){var e=Sn(t),n=Xt(t,e);if(n!==null){var r=Fe();Ct(n,t,e,r)}wd(t,e)}};qm=function(){return q};Ym=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};kc=function(t,e,n){switch(e){case"input":if(_c(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Oa(r);if(!i)throw Error(k(90));bm(r),_c(r,i)}}}break;case"textarea":Im(t,n);break;case"select":e=n.value,e!=null&&Dr(t,!!n.multiple,e,!1)}};Lm=md;Mm=tr;var Yx={usingClientEntryPoint:!1,Events:[bs,Er,Oa,Dm,Om,md]},ki={findFiberByHostInstance:Wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qx={bundleType:ki.bundleType,version:ki.version,rendererPackageName:ki.rendererPackageName,rendererConfig:ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$m(t),t===null?null:t.stateNode},findFiberByHostInstance:ki.findFiberByHostInstance||Kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{Ra=oo.inject(Qx),Rt=oo}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;Ze.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sd(e))throw Error(k(200));return Gx(t,e,null,n)};Ze.createRoot=function(t,e){if(!Sd(t))throw Error(k(299));var n=!1,r="",i=_y;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vd(t,1,!1,null,null,n,!1,r,i),t[Qt]=e.current,is(t.nodeType===8?t.parentNode:t),new xd(e)};Ze.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=$m(e),t=t===null?null:t.stateNode,t};Ze.flushSync=function(t){return tr(t)};Ze.hydrate=function(t,e,n){if(!Wa(e))throw Error(k(200));return Va(null,t,e,!0,n)};Ze.hydrateRoot=function(t,e,n){if(!Sd(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=_y;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yy(e,null,t,1,n??null,i,!1,s,o),t[Qt]=e.current,is(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ja(e)};Ze.render=function(t,e,n){if(!Wa(e))throw Error(k(200));return Va(null,t,e,!1,n)};Ze.unmountComponentAtNode=function(t){if(!Wa(t))throw Error(k(40));return t._reactRootContainer?(tr(function(){Va(null,null,t,!1,function(){t._reactRootContainer=null,t[Qt]=null})}),!0):!1};Ze.unstable_batchedUpdates=md;Ze.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wa(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Va(t,e,n,!1,r)};Ze.version="18.2.0-next-9e3b772b8-20220608";function vy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vy)}catch(t){console.error(t)}}vy(),ym.exports=Ze;var Xx=ym.exports,Ff=Xx;dc.createRoot=Ff.createRoot,dc.hydrateRoot=Ff.hydrateRoot;const Jx=()=>{};/**
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
 */const wy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw di(e)},di=function(t){return new Error("Firebase Database ("+wy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const xy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Cd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),r.push(n[d],n[h],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new e1;const f=s<<2|a>>4;if(r.push(f),c!==64){const _=a<<4&240|c>>2;if(r.push(_),h!==64){const v=c<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class e1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sy=function(t){const e=xy(t);return Cd.encodeByteArray(e,!0)},na=function(t){return Sy(t).replace(/\./g,"")},ra=function(t){try{return Cd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function t1(t){return Cy(void 0,t)}function Cy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!n1(n)||(t[n]=Cy(t[n],e[n]));return t}function n1(t){return t!=="__proto__"}/**
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
 */function r1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const i1=()=>r1().__FIREBASE_DEFAULTS__,s1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},o1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ra(t[1]);return e&&JSON.parse(e)},Ed=()=>{try{return Jx()||i1()||s1()||o1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ey=t=>{var e,n;return(n=(e=Ed())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},a1=t=>{const e=Ey(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ky=()=>{var t;return(t=Ed())==null?void 0:t.config},by=t=>{var e;return(e=Ed())==null?void 0:e[`_${t}`]};/**
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
 */class Is{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function l1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[na(JSON.stringify(n)),na(JSON.stringify(o)),a].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function c1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ny(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Iy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function u1(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ty(){return wy.NODE_ADMIN===!0}function Ry(){try{return typeof indexedDB=="object"}catch{return!1}}function Py(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function d1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const h1="FirebaseError";class Mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=h1,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hr.prototype.create)}}class hr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?f1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mt(i,a,r)}}function f1(t,e){return t.replace(p1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const p1=/\{\$([^}]+)}/g;/**
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
 */function fs(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
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
 */const Ay=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=fs(ra(s[0])||""),n=fs(ra(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},m1=function(t){const e=Ay(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},g1=function(t){const e=Ay(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Zr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function iu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ia(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function nr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Uf(s)&&Uf(o)){if(!nr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Uf(t){return t!==null&&typeof t=="object"}/**
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
 */function hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class y1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):h<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+c+l+d+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function _1(t,e){const n=new v1(t,e);return n.subscribe.bind(n)}class v1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");w1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ul),i.error===void 0&&(i.error=Ul),i.complete===void 0&&(i.complete=Ul);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function w1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ul(){}function Ha(t,e){return`${t} failed: ${e} argument `}/**
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
 */const x1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ga=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const S1=1e3,C1=2,E1=4*60*60*1e3,k1=.5;function $f(t,e=S1,n=C1){const r=e*Math.pow(n,t),i=Math.round(k1*r*(Math.random()-.5)*2);return Math.min(E1,r+i)}/**
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
 */function Ie(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Ts(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dy(t){return(await fetch(t,{credentials:"include"})).ok}class bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bn="[DEFAULT]";/**
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
 */class b1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Is;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(I1(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:N1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function N1(t){return t===Bn?void 0:t}function I1(t){return t.instantiationMode==="EAGER"}/**
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
 */class T1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new b1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const R1={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},P1=Y.INFO,A1={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},D1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=A1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ka{constructor(e){this.name=e,this._logLevel=P1,this._logHandler=D1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?R1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const O1=(t,e)=>e.some(n=>t instanceof n);let zf,Bf;function L1(){return zf||(zf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M1(){return Bf||(Bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oy=new WeakMap,su=new WeakMap,Ly=new WeakMap,$l=new WeakMap,bd=new WeakMap;function F1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(En(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Oy.set(n,t)}).catch(()=>{}),bd.set(e,t),e}function U1(t){if(su.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});su.set(t,e)}let ou={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return su.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ly.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $1(t){ou=t(ou)}function z1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zl(this),e,...n);return Ly.set(r,e.sort?e.sort():[e]),En(r)}:M1().includes(t)?function(...e){return t.apply(zl(this),e),En(Oy.get(this))}:function(...e){return En(t.apply(zl(this),e))}}function B1(t){return typeof t=="function"?z1(t):(t instanceof IDBTransaction&&U1(t),O1(t,L1())?new Proxy(t,ou):t)}function En(t){if(t instanceof IDBRequest)return F1(t);if($l.has(t))return $l.get(t);const e=B1(t);return e!==t&&($l.set(t,e),bd.set(e,t)),e}const zl=t=>bd.get(t);function My(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=En(o);return r&&o.addEventListener("upgradeneeded",l=>{r(En(o.result),l.oldVersion,l.newVersion,En(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const j1=["get","getKey","getAll","getAllKeys","count"],W1=["put","add","delete","clear"],Bl=new Map;function jf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bl.get(e))return Bl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=W1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||j1.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Bl.set(e,s),s}$1(t=>({...t,get:(e,n,r)=>jf(e,n)||t.get(e,n,r),has:(e,n)=>!!jf(e,n)||t.has(e,n)}));/**
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
 */class V1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(H1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function H1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const au="@firebase/app",Wf="0.14.10";/**
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
 */const Zt=new Ka("@firebase/app"),G1="@firebase/app-compat",K1="@firebase/analytics-compat",q1="@firebase/analytics",Y1="@firebase/app-check-compat",Q1="@firebase/app-check",X1="@firebase/auth",J1="@firebase/auth-compat",Z1="@firebase/database",eS="@firebase/data-connect",tS="@firebase/database-compat",nS="@firebase/functions",rS="@firebase/functions-compat",iS="@firebase/installations",sS="@firebase/installations-compat",oS="@firebase/messaging",aS="@firebase/messaging-compat",lS="@firebase/performance",cS="@firebase/performance-compat",uS="@firebase/remote-config",dS="@firebase/remote-config-compat",hS="@firebase/storage",fS="@firebase/storage-compat",pS="@firebase/firestore",mS="@firebase/ai",gS="@firebase/firestore-compat",yS="firebase",_S="12.11.0";/**
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
 */const lu="[DEFAULT]",vS={[au]:"fire-core",[G1]:"fire-core-compat",[q1]:"fire-analytics",[K1]:"fire-analytics-compat",[Q1]:"fire-app-check",[Y1]:"fire-app-check-compat",[X1]:"fire-auth",[J1]:"fire-auth-compat",[Z1]:"fire-rtdb",[eS]:"fire-data-connect",[tS]:"fire-rtdb-compat",[nS]:"fire-fn",[rS]:"fire-fn-compat",[iS]:"fire-iid",[sS]:"fire-iid-compat",[oS]:"fire-fcm",[aS]:"fire-fcm-compat",[lS]:"fire-perf",[cS]:"fire-perf-compat",[uS]:"fire-rc",[dS]:"fire-rc-compat",[hS]:"fire-gcs",[fS]:"fire-gcs-compat",[pS]:"fire-fst",[gS]:"fire-fst-compat",[mS]:"fire-vertex","fire-js":"fire-js",[yS]:"fire-js-all"};/**
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
 */const sa=new Map,wS=new Map,cu=new Map;function Vf(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ot(t){const e=t.name;if(cu.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;cu.set(e,t);for(const n of sa.values())Vf(n,t);for(const n of wS.values())Vf(n,t);return!0}function Rs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _t(t){return t==null?!1:t.settings!==void 0}/**
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
 */const xS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kn=new hr("app","Firebase",xS);/**
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
 */class SS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
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
 */const fi=_S;function Fy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:lu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw kn.create("bad-app-name",{appName:String(i)});if(n||(n=ky()),!n)throw kn.create("no-options");const s=sa.get(i);if(s){if(nr(n,s.options)&&nr(r,s.config))return s;throw kn.create("duplicate-app",{appName:i})}const o=new T1(i);for(const l of cu.values())o.addComponent(l);const a=new SS(n,r,o);return sa.set(i,a),a}function Uy(t=lu){const e=sa.get(t);if(!e&&t===lu&&ky())return Fy();if(!e)throw kn.create("no-app",{appName:t});return e}function at(t,e,n){let r=vS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(o.join(" "));return}Ot(new bt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const CS="firebase-heartbeat-database",ES=1,ps="firebase-heartbeat-store";let jl=null;function $y(){return jl||(jl=My(CS,ES,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ps)}catch(n){console.warn(n)}}}}).catch(t=>{throw kn.create("idb-open",{originalErrorMessage:t.message})})),jl}async function kS(t){try{const n=(await $y()).transaction(ps),r=await n.objectStore(ps).get(zy(t));return await n.done,r}catch(e){if(e instanceof Mt)Zt.warn(e.message);else{const n=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}async function Hf(t,e){try{const r=(await $y()).transaction(ps,"readwrite");await r.objectStore(ps).put(e,zy(t)),await r.done}catch(n){if(n instanceof Mt)Zt.warn(n.message);else{const r=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(r.message)}}}function zy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bS=1024,NS=30;class IS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>NS){const o=PS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gf(),{heartbeatsToSend:r,unsentEntries:i}=TS(this._heartbeatsCache.heartbeats),s=na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Zt.warn(n),""}}}function Gf(){return new Date().toISOString().substring(0,10)}function TS(t,e=bS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Kf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ry()?Py().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Hf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Hf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Kf(t){return na(JSON.stringify({version:2,heartbeats:t})).length}function PS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function AS(t){Ot(new bt("platform-logger",e=>new V1(e),"PRIVATE")),Ot(new bt("heartbeat",e=>new IS(e),"PRIVATE")),at(au,Wf,t),at(au,Wf,"esm2020"),at("fire-js","")}AS("");const qf="@firebase/database",Yf="1.1.2";/**
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
 */let By="";function DS(t){By=t}/**
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
 */class OS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class LS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const jy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new OS(e)}}catch{}return new LS},Gn=jy("localStorage"),uu=jy("sessionStorage");/**
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
 */const $r=new Ka("@firebase/database"),MS=function(){let t=1;return function(){return t++}}(),Wy=function(t){const e=x1(t),n=new y1;n.update(e);const r=n.digest();return Cd.encodeByteArray(r)},Ps=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ps.apply(null,r):typeof r=="object"?e+=ge(r):e+=r,e+=" "}return e};let Qn=null,Qf=!0;const FS=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?($r.logLevel=Y.VERBOSE,Qn=$r.log.bind($r),e&&uu.set("logging_enabled",!0)):typeof t=="function"?Qn=t:(Qn=null,uu.remove("logging_enabled"))},Ee=function(...t){if(Qf===!0&&(Qf=!1,Qn===null&&uu.get("logging_enabled")===!0&&FS(!0)),Qn){const e=Ps.apply(null,t);Qn(e)}},As=function(t){return function(...e){Ee(t,...e)}},du=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ps(...t);$r.error(e)},en=function(...t){const e=`FIREBASE FATAL ERROR: ${Ps(...t)}`;throw $r.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+Ps(...t);$r.warn(e)},US=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Nd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$S=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ei="[MIN_NAME]",rr="[MAX_NAME]",fr=function(t,e){if(t===e)return 0;if(t===ei||e===rr)return-1;if(e===ei||t===rr)return 1;{const n=Xf(t),r=Xf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},zS=function(t,e){return t===e?0:t<e?-1:1},bi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},Id=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ge(e[r]),n+=":",n+=Id(t[e[r]]);return n+="}",n},Vy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ne(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Hy=function(t){I(!Nd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},BS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function WS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const VS=new RegExp("^-?(0*)\\d{1,10}$"),HS=-2147483648,GS=2147483647,Xf=function(t){if(VS.test(t)){const e=Number(t);if(e>=HS&&e<=GS)return e}return null},pi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},KS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class qS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,_t(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class YS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class zr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zr.OWNER="owner";/**
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
 */const Td="5",Gy="v",Ky="s",qy="r",Yy="f",Qy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xy="ls",Jy="p",hu="ac",Zy="websocket",e_="long_polling";/**
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
 */class t_{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function QS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function n_(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===Zy)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===e_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);QS(t)&&(n.ns=t.namespace);const i=[];return Ne(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class XS{constructor(){this.counters_={}}incrementCounter(e,n=1){Ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return t1(this.counters_)}}/**
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
 */const Wl={},Vl={};function Rd(t){const e=t.toString();return Wl[e]||(Wl[e]=new XS),Wl[e]}function JS(t,e){const n=t.toString();return Vl[n]||(Vl[n]=e()),Vl[n]}/**
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
 */class ZS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&pi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Jf="start",eC="close",tC="pLPCommand",nC="pRTLPCB",r_="id",i_="pw",s_="ser",rC="cb",iC="seg",sC="ts",oC="d",aC="dframe",o_=1870,a_=30,lC=o_-a_,cC=25e3,uC=3e4;class Pr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=As(e),this.stats_=Rd(n),this.urlFn=l=>(this.appCheckToken&&(l[hu]=this.appCheckToken),n_(n,e_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ZS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(uC)),$S(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pd((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jf)this.id=a,this.password=l;else if(o===eC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Jf]="t",r[s_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[rC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Gy]=Td,this.transportSessionId&&(r[Ky]=this.transportSessionId),this.lastSessionId&&(r[Xy]=this.lastSessionId),this.applicationId&&(r[Jy]=this.applicationId),this.appCheckToken&&(r[hu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qy.test(location.hostname)&&(r[qy]=Yy);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Pr.forceAllow_=!0}static forceDisallow(){Pr.forceDisallow_=!0}static isAvailable(){return Pr.forceAllow_?!0:!Pr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!BS()&&!jS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Sy(n),i=Vy(r,lC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[aC]="t",r[r_]=e,r[i_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=MS(),window[tC+this.uniqueCallbackIdentifier]=e,window[nC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ee("frame writing exception"),a.stack&&Ee(a.stack),Ee(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[r_]=this.myID,e[i_]=this.myPW,e[s_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+a_+r.length<=o_;){const o=this.pendingSegs.shift();r=r+"&"+iC+i+"="+o.seg+"&"+sC+i+"="+o.ts+"&"+oC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(cC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const dC=16384,hC=45e3;let oa=null;typeof MozWebSocket<"u"?oa=MozWebSocket:typeof WebSocket<"u"&&(oa=WebSocket);class vt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=As(this.connId),this.stats_=Rd(n),this.connURL=vt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Gy]=Td,typeof location<"u"&&location.hostname&&Qy.test(location.hostname)&&(o[qy]=Yy),n&&(o[Ky]=n),r&&(o[Xy]=r),i&&(o[hu]=i),s&&(o[Jy]=s),n_(e,Zy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gn.set("previous_websocket_failure",!0);try{let r;Ty(),this.mySock=new oa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&oa!==null&&!vt.forceDisallow_}static previouslyFailed(){return Gn.isInMemoryStorage||Gn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=fs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Vy(n,dC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vt.responsesRequiredToBeHealthy=2;vt.healthyTimeout=3e4;/**
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
 */class ms{static get ALL_TRANSPORTS(){return[Pr,vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=vt&&vt.isAvailable();let r=n&&!vt.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[vt];else{const i=this.transports_=[];for(const s of ms.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ms.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ms.globalTransportInitialized_=!1;/**
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
 */const fC=6e4,pC=5e3,mC=10*1024,gC=100*1024,Hl="t",Zf="d",yC="s",ep="r",_C="e",tp="o",np="a",rp="n",ip="p",vC="h";class wC{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=As("c:"+this.id+":"),this.transportManager_=new ms(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Vi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Hl in e){const n=e[Hl];n===np?this.upgradeIfSecondaryHealthy_():n===ep?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===tp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=bi("t",e),r=bi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ip,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:np,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=bi("t",e),r=bi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=bi(Hl,e);if(Zf in e){const r=e[Zf];if(n===vC){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===rp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yC?this.onConnectionShutdown_(r):n===ep?this.onReset_(r):n===_C?du("Server Error: "+r):n===tp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):du("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Td!==r&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Vi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(pC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ip,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class l_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class c_{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class aa extends c_{static getInstance(){return new aa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!kd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const sp=32,op=768;class Q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new Q("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pn(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Q(t.pieces_,e)}function Ad(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function xC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function gs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function u_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Q(e,0)}function le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Q(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=B(t),r=B(e);if(n===null)return e;if(n===r)return Me(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function SC(t,e){const n=gs(t,0),r=gs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=fr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Dd(t,e){if(Pn(t)!==Pn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function st(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Pn(t)>Pn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class CC{constructor(e,n){this.errorPrefix_=n,this.parts_=gs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ga(this.parts_[r]);d_(this)}}function EC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ga(e),d_(t)}function kC(t){const e=t.parts_.pop();t.byteLength_-=Ga(e),t.parts_.length>0&&(t.byteLength_-=1)}function d_(t){if(t.byteLength_>op)throw new Error(t.errorPrefix_+"has a key path longer than "+op+" bytes ("+t.byteLength_+").");if(t.parts_.length>sp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sp+") or object contains a cycle "+jn(t))}function jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Od extends c_{static getInstance(){return new Od}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ni=1e3,bC=60*5*1e3,ap=30*1e3,NC=1.3,IC=3e4,TC="server_kill",lp=3;class qt extends l_{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=qt.nextPersistentConnectionId_++,this.log_=As("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ni,this.maxReconnectDelay_=bC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ty())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Od.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&aa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ge(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Is,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;qt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ft(e,"w")){const r=Zr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||g1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ap)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=m1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):du("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>IC&&(this.reconnectDelay_=Ni),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+qt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new wC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ue(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(TC)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ue(h),l())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],iu(this.interruptReasons_)&&(this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Id(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ee("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lp&&(this.reconnectDelay_=ap,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ee("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+By.replace(/\./g,"-")]=1,kd()?e["framework.cordova"]=1:Iy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=aa.getInstance().currentlyOnline();return iu(this.interruptReasons_)&&e}}qt.nextPersistentConnectionId_=0;qt.nextConnectionId_=0;/**
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
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
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
 */class qa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(ei,e),i=new j(ei,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
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
 */let ao;class h_ extends qa{static get __EMPTY_NODE(){return ao}static set __EMPTY_NODE(e){ao=e}compare(e,n){return fr(e.name,n.name)}isDefinedOn(e){throw di("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(rr,ao)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,ao)}toString(){return".key"}}const Br=new h_;/**
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
 */class lo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xe.RED,this.left=i??He.EMPTY_NODE,this.right=s??He.EMPTY_NODE}copy(e,n,r,i,s){return new xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return He.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return He.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class RC{copy(e,n,r,i,s){return this}insert(e,n,r){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class He{constructor(e,n=He.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new He(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new He(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new lo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new lo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new lo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new lo(this.root_,null,this.comparator_,!0,e)}}He.EMPTY_NODE=new RC;/**
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
 */function PC(t,e){return fr(t.name,e.name)}function Ld(t,e){return fr(t,e)}/**
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
 */let fu;function AC(t){fu=t}const f_=function(t){return typeof t=="number"?"number:"+Hy(t):"string:"+t},p_=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ft(e,".sv"),"Priority must be a string or number.")}else I(t===fu||t.isEmpty(),"priority of unexpected type.");I(t===fu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let cp;class ve{static set __childrenNodeConstructor(e){cp=e}static get __childrenNodeConstructor(){return cp}constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),p_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:B(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=B(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+f_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Hy(this.value_):e+=this.value_,this.lazyHash_=Wy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),s=ve.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let m_,g_;function DC(t){m_=t}function OC(t){g_=t}class LC extends qa{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?fr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(rr,new ve("[PRIORITY-POST]",g_))}makePost(e,n){const r=m_(e);return new j(n,new ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const ce=new LC;/**
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
 */const MC=Math.log(2);class FC{constructor(e){const n=s=>parseInt(Math.log(s)/MC,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const la=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let h,f;if(d===0)return null;if(d===1)return h=t[l],f=n?n(h):h,new xe(f,h.node,xe.BLACK,null,null);{const _=parseInt(d/2,10)+l,v=i(l,_),S=i(_+1,c);return h=t[_],f=n?n(h):h,new xe(f,h.node,xe.BLACK,v,S)}},s=function(l){let c=null,d=null,h=t.length;const f=function(v,S){const C=h-v,g=h;h-=v;const m=i(C+1,g),y=t[C],x=n?n(y):y;_(new xe(x,y.node,S,null,m))},_=function(v){c?(c.left=v,c=v):(d=v,c=v)};for(let v=0;v<l.count;++v){const S=l.nextBitIsOne(),C=Math.pow(2,l.count-(v+1));S?f(C,xe.BLACK):(f(C,xe.BLACK),f(C,xe.RED))}return d},o=new FC(t.length),a=s(o);return new He(r||e,a)};/**
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
 */let Gl;const gr={};class Vt{static get Default(){return I(gr&&ce,"ChildrenNode.ts has not been loaded"),Gl=Gl||new Vt({".priority":gr},{".priority":ce}),Gl}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Zr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof He?n:null}hasIndex(e){return Ft(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Br,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=la(r,e.getCompare()):a=gr;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new Vt(d,c)}addToIndexes(e,n){const r=ia(this.indexes_,(i,s)=>{const o=Zr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===gr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),la(a,o.getCompare())}else return gr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new Vt(r,this.indexSet_)}removeFromIndexes(e,n){const r=ia(this.indexes_,i=>{if(i===gr)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new Vt(r,this.indexSet_)}}/**
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
 */let Ii;class U{static get EMPTY_NODE(){return Ii||(Ii=new U(new He(Ld),null,Vt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&p_(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ii}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ii:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ii:this.priorityNode_;return new U(i,o,s)}}updateChild(e,n){const r=B(e);if(r===null)return n;{I(B(e)!==".priority"||Pn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ce,(o,a)=>{n[o]=a.val(e),r++,s&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+f_(this.getPriority().val())+":"),this.forEachChild(ce,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Wy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ds?-1:0}withIndex(e){if(e===Br||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Br||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ce),i=n.getIterator(ce);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Br?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class UC extends U{constructor(){super(new He(Ld),U.EMPTY_NODE,Vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const Ds=new UC;Object.defineProperties(j,{MIN:{value:new j(ei,U.EMPTY_NODE)},MAX:{value:new j(rr,Ds)}});h_.__EMPTY_NODE=U.EMPTY_NODE;ve.__childrenNodeConstructor=U;AC(Ds);OC(Ds);/**
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
 */const $C=!0;function me(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,me(e))}if(!(t instanceof Array)&&$C){const n=[];let r=!1;if(Ne(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=me(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return U.EMPTY_NODE;const s=la(n,PC,o=>o.name,Ld);if(r){const o=la(n,ce.getCompare());return new U(s,me(e),new Vt({".priority":o},{".priority":ce}))}else return new U(s,me(e),Vt.Default)}else{let n=U.EMPTY_NODE;return Ne(t,(r,i)=>{if(Ft(t,r)&&r.substring(0,1)!=="."){const s=me(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(me(e))}}DC(me);/**
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
 */class zC extends qa{constructor(e){super(),this.indexPath_=e,I(!W(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?fr(e.name,n.name):s}makePost(e,n){const r=me(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,Ds);return new j(rr,e)}toString(){return gs(this.indexPath_,0).join("/")}}/**
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
 */class BC extends qa{compare(e,n){const r=e.node.compareTo(n.node);return r===0?fr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=me(e);return new j(n,r)}toString(){return".value"}}const jC=new BC;/**
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
 */function y_(t){return{type:"value",snapshotNode:t}}function ti(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ys(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _s(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function WC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Md{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ys(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ti(n,r)):o.trackChildChange(_s(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ce,(i,s)=>{n.hasChild(i)||r.trackChildChange(ys(i,s))}),n.isLeafNode()||n.forEachChild(ce,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(_s(i,s,o))}else r.trackChildChange(ti(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class vs{constructor(e){this.indexedFilter_=new Md(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vs.getStartPost_(e),this.endPost_=vs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const s=this;return n.forEachChild(ce,(o,a)=>{s.matches(new j(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class VC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new vs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=U.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new j(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(_s(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ys(n,h));const S=a.updateImmediateChild(n,U.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(ti(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ys(c.name,c.node)),s.trackChildChange(ti(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,U.EMPTY_NODE)):e}}/**
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
 */class Fd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ei}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){const e=new Fd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function HC(t){return t.loadsAllData()?new Md(t.getIndex()):t.hasLimit()?new VC(t):new vs(t)}function up(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ce?n="$priority":t.index_===jC?n="$value":t.index_===Br?n="$key":(I(t.index_ instanceof zC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ge(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ge(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ge(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function dp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ce&&(e.i=t.index_.toString()),e}/**
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
 */class ca extends l_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=As("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ca.getListenId_(e,r),a={};this.listens_[o]=a;const l=up(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,r),Zr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=ca.getListenId_(e,n);delete this.listens_[r]}get(e){const n=up(e._queryParams),r=e._path.toString(),i=new Is;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fs(a.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class GC{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ua(){return{value:null,children:new Map}}function __(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=B(e);t.children.has(r)||t.children.set(r,ua());const i=t.children.get(r);e=Z(e),__(i,e,n)}}function pu(t,e,n){t.value!==null?n(e,t.value):KC(t,(r,i)=>{const s=new Q(e.toString()+"/"+r);pu(i,s,n)})}function KC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class qC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ne(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const hp=10*1e3,YC=30*1e3,QC=5*60*1e3;class XC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qC(e);const r=hp+(YC-hp)*Math.random();Vi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ne(e,(i,s)=>{s>0&&Ft(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Vi(this.reportStats_.bind(this),Math.floor(Math.random()*2*QC))}}/**
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
 */var wt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wt||(wt={}));function Ud(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $d(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class da{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=wt.ACK_USER_WRITE,this.source=Ud()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(e));return new da(K(),n,this.revert)}}else return I(B(this.path)===e,"operationForChild called for unrelated child."),new da(Z(this.path),this.affectedTree,this.revert)}}/**
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
 */class ws{constructor(e,n){this.source=e,this.path=n,this.type=wt.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new ws(this.source,K()):new ws(this.source,Z(this.path))}}/**
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
 */class ir{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=wt.OVERWRITE}operationForChild(e){return W(this.path)?new ir(this.source,K(),this.snap.getImmediateChild(e)):new ir(this.source,Z(this.path),this.snap)}}/**
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
 */class ni{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=wt.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new Q(e));return n.isEmpty()?null:n.value?new ir(this.source,K(),n.value):new ni(this.source,K(),n)}else return I(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ni(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class An{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class JC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ZC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(WC(o.childName,o.snapshotNode))}),Ti(t,i,"child_removed",e,r,n),Ti(t,i,"child_added",e,r,n),Ti(t,i,"child_moved",s,r,n),Ti(t,i,"child_changed",e,r,n),Ti(t,i,"value",e,r,n),i}function Ti(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>tE(t,a,l)),o.forEach(a=>{const l=eE(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function eE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tE(t,e,n){if(e.childName==null||n.childName==null)throw di("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Ya(t,e){return{eventCache:t,serverCache:e}}function Hi(t,e,n,r){return Ya(new An(e,n,r),t.serverCache)}function v_(t,e,n,r){return Ya(t.eventCache,new An(e,n,r))}function ha(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function sr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Kl;const nE=()=>(Kl||(Kl=new He(zS)),Kl);class J{static fromObject(e){let n=new J(null);return Ne(e,(r,i)=>{n=n.set(new Q(r),i)}),n}constructor(e,n=nE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(W(e))return null;{const r=B(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Z(e),n);return s!=null?{path:le(new Q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=B(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new J(null)}}set(e,n){if(W(e))return new J(n,this.children);{const r=B(e),s=(this.children.get(r)||new J(null)).set(Z(e),n),o=this.children.insert(r,s);return new J(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=B(e),r=this.children.get(n);if(r){const i=r.remove(Z(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new J(null):new J(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=B(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if(W(e))return n;{const r=B(e),s=(this.children.get(r)||new J(null)).setTree(Z(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new J(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(W(e))return null;{const s=B(e),o=this.children.get(s);return o?o.findOnPath_(Z(e),le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const i=B(e),s=this.children.get(i);return s?s.foreachOnPath_(Z(e),le(n,i),r):new J(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Et{constructor(e){this.writeTree_=e}static empty(){return new Et(new J(null))}}function Gi(t,e,n){if(W(e))return new Et(new J(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Me(i,e);return s=s.updateChild(o,n),new Et(t.writeTree_.set(i,s))}else{const i=new J(n),s=t.writeTree_.setTree(e,i);return new Et(s)}}}function mu(t,e,n){let r=t;return Ne(n,(i,s)=>{r=Gi(r,le(e,i),s)}),r}function fp(t,e){if(W(e))return Et.empty();{const n=t.writeTree_.setTree(e,new J(null));return new Et(n)}}function gu(t,e){return pr(t,e)!=null}function pr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function pp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ce,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function bn(t,e){if(W(e))return t;{const n=pr(t,e);return n!=null?new Et(new J(n)):new Et(t.writeTree_.subtree(e))}}function yu(t){return t.writeTree_.isEmpty()}function ri(t,e){return w_(K(),t.writeTree_,e)}function w_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=w_(le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(le(t,".priority"),r)),n}}/**
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
 */function Qa(t,e){return E_(e,t)}function rE(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Gi(t.visibleWrites,e,n)),t.lastWriteId=r}function iE(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=mu(t.visibleWrites,e,n),t.lastWriteId=r}function sE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function oE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&aE(a,r.path)?i=!1:st(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return lE(t),!0;if(r.snap)t.visibleWrites=fp(t.visibleWrites,r.path);else{const a=r.children;Ne(a,l=>{t.visibleWrites=fp(t.visibleWrites,le(r.path,l))})}return!0}else return!1}function aE(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(le(t.path,n),e))return!0;return!1}function lE(t){t.visibleWrites=x_(t.allWrites,cE,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cE(t){return t.visible}function x_(t,e,n){let r=Et.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)st(n,o)?(a=Me(n,o),r=Gi(r,a,s.snap)):st(o,n)&&(a=Me(o,n),r=Gi(r,K(),s.snap.getChild(a)));else if(s.children){if(st(n,o))a=Me(n,o),r=mu(r,a,s.children);else if(st(o,n))if(a=Me(o,n),W(a))r=mu(r,K(),s.children);else{const l=Zr(s.children,B(a));if(l){const c=l.getChild(Z(a));r=Gi(r,K(),c)}}}else throw di("WriteRecord should have .snap or .children")}}return r}function S_(t,e,n,r,i){if(!r&&!i){const s=pr(t.visibleWrites,e);if(s!=null)return s;{const o=bn(t.visibleWrites,e);if(yu(o))return n;if(n==null&&!gu(o,K()))return null;{const a=n||U.EMPTY_NODE;return ri(o,a)}}}else{const s=bn(t.visibleWrites,e);if(!i&&yu(s))return n;if(!i&&n==null&&!gu(s,K()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(st(c.path,e)||st(e,c.path))},a=x_(t.allWrites,o,e),l=n||U.EMPTY_NODE;return ri(a,l)}}}function uE(t,e,n){let r=U.EMPTY_NODE;const i=pr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ce,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=bn(t.visibleWrites,e);return n.forEachChild(ce,(o,a)=>{const l=ri(bn(s,new Q(o)),a);r=r.updateImmediateChild(o,l)}),pp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=bn(t.visibleWrites,e);return pp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function dE(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=le(e,n);if(gu(t.visibleWrites,s))return null;{const o=bn(t.visibleWrites,s);return yu(o)?i.getChild(n):ri(o,i.getChild(n))}}function hE(t,e,n,r){const i=le(e,n),s=pr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=bn(t.visibleWrites,i);return ri(o,r.getNode().getImmediateChild(n))}else return null}function fE(t,e){return pr(t.visibleWrites,e)}function pE(t,e,n,r,i,s,o){let a;const l=bn(t.visibleWrites,e),c=pr(l,K());if(c!=null)a=c;else if(n!=null)a=ri(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=f.getNext();for(;_&&d.length<i;)h(_,r)!==0&&d.push(_),_=f.getNext();return d}else return[]}function mE(){return{visibleWrites:Et.empty(),allWrites:[],lastWriteId:-1}}function fa(t,e,n,r){return S_(t.writeTree,t.treePath,e,n,r)}function Bd(t,e){return uE(t.writeTree,t.treePath,e)}function mp(t,e,n,r){return dE(t.writeTree,t.treePath,e,n,r)}function pa(t,e){return fE(t.writeTree,le(t.treePath,e))}function gE(t,e,n,r,i,s){return pE(t.writeTree,t.treePath,e,n,r,i,s)}function jd(t,e,n){return hE(t.writeTree,t.treePath,e,n)}function C_(t,e){return E_(le(t.treePath,e),t.writeTree)}function E_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class yE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,_s(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ys(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ti(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,_s(r,e.snapshotNode,i.oldSnap));else throw di("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class _E{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const k_=new _E;class Wd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new An(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:sr(this.viewCache_),s=gE(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function vE(t){return{filter:t}}function wE(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function xE(t,e,n,r,i){const s=new yE;let o,a;if(n.type===wt.OVERWRITE){const c=n;c.source.fromUser?o=_u(t,e,c.path,c.snap,r,i,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=ma(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===wt.MERGE){const c=n;c.source.fromUser?o=CE(t,e,c.path,c.children,r,i,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=vu(t,e,c.path,c.children,r,i,a,s))}else if(n.type===wt.ACK_USER_WRITE){const c=n;c.revert?o=bE(t,e,c.path,r,i,s):o=EE(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===wt.LISTEN_COMPLETE)o=kE(t,e,n.path,r,s);else throw di("Unknown operation type: "+n.type);const l=s.getChanges();return SE(e,o,l),{viewCache:o,changes:l}}function SE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ha(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(y_(ha(e)))}}function b_(t,e,n,r,i,s){const o=e.eventCache;if(pa(r,n)!=null)return e;{let a,l;if(W(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=sr(e),d=c instanceof U?c:U.EMPTY_NODE,h=Bd(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=fa(r,sr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=B(n);if(c===".priority"){I(Pn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=mp(r,n,d,l);h!=null?a=t.filter.updatePriority(d,h):a=o.getNode()}else{const d=Z(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=mp(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(d,f):h=o.getNode().getImmediateChild(c)}else h=jd(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,d,i,s):a=o.getNode()}}return Hi(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function ma(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),_,null)}else{const _=B(n);if(!l.isCompleteForPath(n)&&Pn(n)>1)return e;const v=Z(n),C=l.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?c=d.updatePriority(l.getNode(),C):c=d.updateChild(l.getNode(),_,C,v,k_,null)}const h=v_(e,c,l.isFullyInitialized()||W(n),d.filtersNodes()),f=new Wd(i,h,s);return b_(t,h,n,i,f,a)}function _u(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new Wd(i,e,s);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Hi(e,c,!0,t.filter.filtersNodes());else{const h=B(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Hi(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Z(n),_=a.getNode().getImmediateChild(h);let v;if(W(f))v=r;else{const S=d.getCompleteChild(h);S!=null?Ad(f)===".priority"&&S.getChild(u_(f)).isEmpty()?v=S:v=S.updateChild(f,r):v=U.EMPTY_NODE}if(_.equals(v))l=e;else{const S=t.filter.updateChild(a.getNode(),h,v,f,d,o);l=Hi(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function gp(t,e){return t.eventCache.isCompleteForChild(e)}function CE(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=le(n,l);gp(e,B(d))&&(a=_u(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=le(n,l);gp(e,B(d))||(a=_u(t,a,d,c,i,s,o))}),a}function yp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function vu(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;W(n)?c=r:c=new J(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),v=yp(t,_,f);l=ma(t,l,new Q(h),v,i,s,o,a)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!_){const v=e.serverCache.getNode().getImmediateChild(h),S=yp(t,v,f);l=ma(t,l,new Q(h),S,i,s,o,a)}}),l}function EE(t,e,n,r,i,s,o){if(pa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ma(t,e,n,l.getNode().getChild(n),i,s,a,o);if(W(n)){let c=new J(null);return l.getNode().forEachChild(Br,(d,h)=>{c=c.set(new Q(d),h)}),vu(t,e,n,c,i,s,a,o)}else return e}else{let c=new J(null);return r.foreach((d,h)=>{const f=le(n,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),vu(t,e,n,c,i,s,a,o)}}function kE(t,e,n,r,i){const s=e.serverCache,o=v_(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return b_(t,o,n,r,k_,i)}function bE(t,e,n,r,i,s){let o;if(pa(r,n)!=null)return e;{const a=new Wd(r,e,i),l=e.eventCache.getNode();let c;if(W(n)||B(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=fa(r,sr(e));else{const h=e.serverCache.getNode();I(h instanceof U,"serverChildren would be complete if leaf node"),d=Bd(r,h)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=B(n);let h=jd(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=t.filter.updateChild(l,d,h,Z(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,U.EMPTY_NODE,Z(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=fa(r,sr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||pa(r,K())!=null,Hi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class NE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Md(r.getIndex()),s=HC(r);this.processor_=vE(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(U.EMPTY_NODE,a.getNode(),null),d=new An(l,o.isFullyInitialized(),i.filtersNodes()),h=new An(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ya(h,d),this.eventGenerator_=new JC(this.query_)}get query(){return this.query_}}function IE(t){return t.viewCache_.serverCache.getNode()}function TE(t){return ha(t.viewCache_)}function RE(t,e){const n=sr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function _p(t){return t.eventRegistrations_.length===0}function PE(t,e){t.eventRegistrations_.push(e)}function vp(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function wp(t,e,n,r){e.type===wt.MERGE&&e.source.queryId!==null&&(I(sr(t.viewCache_),"We should always have a full cache before handling merges"),I(ha(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=xE(t.processor_,i,e,n,r);return wE(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,N_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function AE(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ce,(s,o)=>{r.push(ti(s,o))}),n.isFullyInitialized()&&r.push(y_(n.getNode())),N_(t,r,n.getNode(),e)}function N_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ZC(t.eventGenerator_,e,n,i)}/**
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
 */let ga;class I_{constructor(){this.views=new Map}}function DE(t){I(!ga,"__referenceConstructor has already been defined"),ga=t}function OE(){return I(ga,"Reference.ts has not been loaded"),ga}function LE(t){return t.views.size===0}function Vd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),wp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(wp(o,e,n,r));return s}}function T_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=fa(n,i?r:null),l=!1;a?l=!0:r instanceof U?(a=Bd(n,r),l=!1):(a=U.EMPTY_NODE,l=!1);const c=Ya(new An(a,l,!1),new An(r,i,!1));return new NE(e,c)}return o}function ME(t,e,n,r,i,s){const o=T_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),PE(o,n),AE(o,n)}function FE(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Dn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(vp(c,n,r)),_p(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(vp(l,n,r)),_p(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Dn(t)&&s.push(new(OE())(e._repo,e._path)),{removed:s,events:o}}function R_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Nn(t,e){let n=null;for(const r of t.views.values())n=n||RE(r,e);return n}function P_(t,e){if(e._queryParams.loadsAllData())return Xa(t);{const r=e._queryIdentifier;return t.views.get(r)}}function A_(t,e){return P_(t,e)!=null}function Dn(t){return Xa(t)!=null}function Xa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ya;function UE(t){I(!ya,"__referenceConstructor has already been defined"),ya=t}function $E(){return I(ya,"Reference.ts has not been loaded"),ya}let zE=1;class xp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=mE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function D_(t,e,n,r,i){return rE(t.pendingWriteTree_,e,n,r,i),i?mi(t,new ir(Ud(),e,n)):[]}function BE(t,e,n,r){iE(t.pendingWriteTree_,e,n,r);const i=J.fromObject(n);return mi(t,new ni(Ud(),e,i))}function mn(t,e,n=!1){const r=sE(t.pendingWriteTree_,e);if(oE(t.pendingWriteTree_,e)){let s=new J(null);return r.snap!=null?s=s.set(K(),!0):Ne(r.children,o=>{s=s.set(new Q(o),!0)}),mi(t,new da(r.path,s,n))}else return[]}function Os(t,e,n){return mi(t,new ir($d(),e,n))}function jE(t,e,n){const r=J.fromObject(n);return mi(t,new ni($d(),e,r))}function WE(t,e){return mi(t,new ws($d(),e))}function VE(t,e,n){const r=Gd(t,n);if(r){const i=Kd(r),s=i.path,o=i.queryId,a=Me(s,e),l=new ws(zd(o),a);return qd(t,s,l)}else return[]}function _a(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||A_(o,e))){const l=FE(o,e,n,r);LE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(f,_)=>Dn(_));if(d&&!h){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const _=KE(f);for(let v=0;v<_.length;++v){const S=_[v],C=S.query,g=F_(t,S);t.listenProvider_.startListening(Ki(C),xs(t,C),g.hashFn,g.onComplete)}}}!h&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Ki(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(Ja(f));t.listenProvider_.stopListening(Ki(f),_)}))}qE(t,c)}return a}function O_(t,e,n,r){const i=Gd(t,r);if(i!=null){const s=Kd(i),o=s.path,a=s.queryId,l=Me(o,e),c=new ir(zd(a),l,n);return qd(t,o,c)}else return[]}function HE(t,e,n,r){const i=Gd(t,r);if(i){const s=Kd(i),o=s.path,a=s.queryId,l=Me(o,e),c=J.fromObject(n),d=new ni(zd(a),l,c);return qd(t,o,d)}else return[]}function wu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const v=Me(f,i);s=s||Nn(_,v),o=o||Dn(_)});let a=t.syncPointTree_.get(i);a?(o=o||Dn(a),s=s||Nn(a,K())):(a=new I_,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=U.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const S=Nn(v,K());S&&(s=s.updateImmediateChild(_,S))}));const c=A_(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Ja(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=YE();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const d=Qa(t.pendingWriteTree_,i);let h=ME(a,e,n,d,s,l);if(!c&&!o&&!r){const f=P_(a,e);h=h.concat(QE(t,e,f))}return h}function Hd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Me(o,e),c=Nn(a,l);if(c)return c});return S_(i,e,s,n,!0)}function GE(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const h=Me(c,n);r=r||Nn(d,h)});let i=t.syncPointTree_.get(n);i?r=r||Nn(i,K()):(i=new I_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new An(r,!0,!1):null,a=Qa(t.pendingWriteTree_,e._path),l=T_(i,e,a,s?o.getNode():U.EMPTY_NODE,s);return TE(l)}function mi(t,e){return L_(e,t.syncPointTree_,null,Qa(t.pendingWriteTree_,K()))}function L_(t,e,n,r){if(W(t.path))return M_(t,e,n,r);{const i=e.get(K());n==null&&i!=null&&(n=Nn(i,K()));let s=[];const o=B(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=C_(r,o);s=s.concat(L_(a,l,c,d))}return i&&(s=s.concat(Vd(i,t,r,n))),s}}function M_(t,e,n,r){const i=e.get(K());n==null&&i!=null&&(n=Nn(i,K()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=C_(r,o),d=t.operationForChild(o);d&&(s=s.concat(M_(d,a,l,c)))}),i&&(s=s.concat(Vd(i,t,r,n))),s}function F_(t,e){const n=e.query,r=xs(t,n);return{hashFn:()=>(IE(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?VE(t,n._path,r):WE(t,n._path);{const s=WS(i,n);return _a(t,n,null,s)}}}}function xs(t,e){const n=Ja(e);return t.queryToTagMap.get(n)}function Ja(t){return t._path.toString()+"$"+t._queryIdentifier}function Gd(t,e){return t.tagToQueryMap.get(e)}function Kd(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Q(t.substr(0,e))}}function qd(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Qa(t.pendingWriteTree_,e);return Vd(r,n,i,null)}function KE(t){return t.fold((e,n,r)=>{if(n&&Dn(n))return[Xa(n)];{let i=[];return n&&(i=R_(n)),Ne(r,(s,o)=>{i=i.concat(o)}),i}})}function Ki(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($E())(t._repo,t._path):t}function qE(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ja(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function YE(){return zE++}function QE(t,e,n){const r=e._path,i=xs(t,e),s=F_(t,n),o=t.listenProvider_.startListening(Ki(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)I(!Dn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!W(c)&&d&&Dn(d))return[Xa(d).query];{let f=[];return d&&(f=f.concat(R_(d).map(_=>_.query))),Ne(h,(_,v)=>{f=f.concat(v)}),f}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Ki(d),xs(t,d))}}return o}/**
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
 */class Yd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yd(n)}node(){return this.node_}}class Qd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new Qd(this.syncTree_,n)}node(){return Hd(this.syncTree_,this.path_)}}const XE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Sp=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return JE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ZE(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},JE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},ZE=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},U_=function(t,e,n,r){return Xd(e,new Qd(n,t),r)},$_=function(t,e,n){return Xd(t,new Yd(e),n)};function Xd(t,e,n){const r=t.getPriority().val(),i=Sp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Sp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ve(a,me(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ve(i))),o.forEachChild(ce,(a,l)=>{const c=Xd(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Jd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Zd(t,e){let n=e instanceof Q?e:new Q(e),r=t,i=B(n);for(;i!==null;){const s=Zr(r.node.children,i)||{children:{},childCount:0};r=new Jd(i,r,s),n=Z(n),i=B(n)}return r}function gi(t){return t.node.value}function z_(t,e){t.node.value=e,xu(t)}function B_(t){return t.node.childCount>0}function ek(t){return gi(t)===void 0&&!B_(t)}function Za(t,e){Ne(t.node.children,(n,r)=>{e(new Jd(n,t,r))})}function j_(t,e,n,r){n&&!r&&e(t),Za(t,i=>{j_(i,e,!0,r)}),n&&r&&e(t)}function tk(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ls(t){return new Q(t.parent===null?t.name:Ls(t.parent)+"/"+t.name)}function xu(t){t.parent!==null&&nk(t.parent,t.name,t)}function nk(t,e,n){const r=ek(n),i=Ft(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,xu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xu(t))}/**
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
 */const rk=/[\[\].#$\/\u0000-\u001F\u007F]/,ik=/[\[\].#$\u0000-\u001F\u007F]/,ql=10*1024*1024,eh=function(t){return typeof t=="string"&&t.length!==0&&!rk.test(t)},W_=function(t){return typeof t=="string"&&t.length!==0&&!ik.test(t)},sk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),W_(t)},ok=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Nd(t)||t&&typeof t=="object"&&Ft(t,".sv")},V_=function(t,e,n,r){r&&e===void 0||el(Ha(t,"value"),e,n)},el=function(t,e,n){const r=n instanceof Q?new CC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+jn(r));if(typeof e=="function")throw new Error(t+"contains a function "+jn(r)+" with contents = "+e.toString());if(Nd(e))throw new Error(t+"contains "+e.toString()+" "+jn(r));if(typeof e=="string"&&e.length>ql/3&&Ga(e)>ql)throw new Error(t+"contains a string greater than "+ql+" utf8 bytes "+jn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ne(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!eh(o)))throw new Error(t+" contains an invalid key ("+o+") "+jn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);EC(r,o),el(t,a,r),kC(r)}),i&&s)throw new Error(t+' contains ".value" child '+jn(r)+" in addition to actual children.")}},ak=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=gs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!eh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(SC);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&st(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},lk=function(t,e,n,r){if(r&&e===void 0)return;const i=Ha(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ne(e,(o,a)=>{const l=new Q(o);if(el(i,a,le(n,l)),Ad(l)===".priority"&&!ok(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),ak(i,s)},H_=function(t,e,n,r){if(!(r&&n===void 0)&&!W_(n))throw new Error(Ha(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ck=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),H_(t,e,n,r)},G_=function(t,e){if(B(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},uk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!eh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sk(n))throw new Error(Ha(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class dk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Dd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function K_(t,e,n){tl(t,n),q_(t,r=>Dd(r,e))}function dt(t,e,n){tl(t,n),q_(t,r=>st(r,e)||st(e,r))}function q_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(hk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Qn&&Ee("event: "+n.toString()),pi(r)}}}/**
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
 */const fk="repo_interrupt",pk=25;class mk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ua(),this.transactionQueueTree_=new Jd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gk(t,e,n){if(t.stats_=Rd(t.repoInfo_),t.forceRestClient_||KS())t.server_=new ca(t.repoInfo_,(r,i,s,o)=>{Cp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ep(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new qt(t.repoInfo_,e,(r,i,s,o)=>{Cp(t,r,i,s,o)},r=>{Ep(t,r)},r=>{yk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=JS(t.repoInfo_,()=>new XC(t.stats_,t.server_)),t.infoData_=new GC,t.infoSyncTree_=new xp({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Os(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),th(t,"connected",!1),t.serverSyncTree_=new xp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);dt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Y_(t){const n=t.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function nl(t){return XE({timestamp:Y_(t)})}function Cp(t,e,n,r,i){t.dataUpdateCount++;const s=new Q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ia(n,c=>me(c));o=HE(t.serverSyncTree_,s,l,i)}else{const l=me(n);o=O_(t.serverSyncTree_,s,l,i)}else if(r){const l=ia(n,c=>me(c));o=jE(t.serverSyncTree_,s,l)}else{const l=me(n);o=Os(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ii(t,s)),dt(t.eventQueue_,a,o)}function Ep(t,e){th(t,"connected",e),e===!1&&xk(t)}function yk(t,e){Ne(e,(n,r)=>{th(t,n,r)})}function th(t,e,n){const r=new Q("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(r,i);const s=Os(t.infoSyncTree_,r,i);dt(t.eventQueue_,r,s)}function nh(t){return t.nextWriteId_++}function _k(t,e,n){const r=GE(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=me(i).withIndex(e._queryParams.getIndex());wu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Os(t.serverSyncTree_,e._path,s);else{const a=xs(t.serverSyncTree_,e);o=O_(t.serverSyncTree_,e._path,s,a)}return dt(t.eventQueue_,e._path,o),_a(t.serverSyncTree_,e,n,null,!0),s},i=>(Ms(t,"get for query "+ge(e)+" failed: "+i),Promise.reject(new Error(i))))}function vk(t,e,n,r,i){Ms(t,"set",{path:e.toString(),value:n,priority:r});const s=nl(t),o=me(n,r),a=Hd(t.serverSyncTree_,e),l=$_(o,a,s),c=nh(t),d=D_(t.serverSyncTree_,e,l,c,!0);tl(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||Ue("set at "+e+" failed: "+f);const S=mn(t.serverSyncTree_,c,!v);dt(t.eventQueue_,e,S),Su(t,i,f,_)});const h=ih(t,e);ii(t,h),dt(t.eventQueue_,h,[])}function wk(t,e,n,r){Ms(t,"update",{path:e.toString(),value:n});let i=!0;const s=nl(t),o={};if(Ne(n,(a,l)=>{i=!1,o[a]=U_(le(e,a),me(l),t.serverSyncTree_,s)}),i)Ee("update() called with empty data.  Don't do anything."),Su(t,r,"ok",void 0);else{const a=nh(t),l=BE(t.serverSyncTree_,e,o,a);tl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const h=c==="ok";h||Ue("update at "+e+" failed: "+c);const f=mn(t.serverSyncTree_,a,!h),_=f.length>0?ii(t,e):e;dt(t.eventQueue_,_,f),Su(t,r,c,d)}),Ne(n,c=>{const d=ih(t,le(e,c));ii(t,d)}),dt(t.eventQueue_,e,[])}}function xk(t){Ms(t,"onDisconnectEvents");const e=nl(t),n=ua();pu(t.onDisconnect_,K(),(i,s)=>{const o=U_(i,s,t.serverSyncTree_,e);__(n,i,o)});let r=[];pu(n,K(),(i,s)=>{r=r.concat(Os(t.serverSyncTree_,i,s));const o=ih(t,i);ii(t,o)}),t.onDisconnect_=ua(),dt(t.eventQueue_,K(),r)}function Sk(t,e,n){let r;B(e._path)===".info"?r=wu(t.infoSyncTree_,e,n):r=wu(t.serverSyncTree_,e,n),K_(t.eventQueue_,e._path,r)}function kp(t,e,n){let r;B(e._path)===".info"?r=_a(t.infoSyncTree_,e,n):r=_a(t.serverSyncTree_,e,n),K_(t.eventQueue_,e._path,r)}function Ck(t){t.persistentConnection_&&t.persistentConnection_.interrupt(fk)}function Ms(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ee(n,...e)}function Su(t,e,n,r){e&&pi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Q_(t,e,n){return Hd(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function rh(t,e=t.transactionQueueTree_){if(e||rl(t,e),gi(e)){const n=J_(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ek(t,Ls(e),n)}else B_(e)&&Za(e,n=>{rh(t,n)})}function Ek(t,e,n){const r=n.map(c=>c.currentWriteId),i=Q_(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=Me(e,d.path);s=s.updateChild(h,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ms(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(mn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();rl(t,Zd(t.transactionQueueTree_,e)),rh(t,t.transactionQueueTree_),dt(t.eventQueue_,e,d);for(let f=0;f<h.length;f++)pi(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ue("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ii(t,e)}},o)}function ii(t,e){const n=X_(t,e),r=Ls(n),i=J_(t,n);return kk(t,i,r),r}function kk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Me(n,l.path);let d=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,i=i.concat(mn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=pk)d=!0,h="maxretry",i=i.concat(mn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Q_(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){el("transaction failed: Data returned ",_,l.path);let v=me(_);typeof _=="object"&&_!=null&&Ft(_,".priority")||(v=v.updatePriority(f.getPriority()));const C=l.currentWriteId,g=nl(t),m=$_(v,f,g);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=m,l.currentWriteId=nh(t),o.splice(o.indexOf(C),1),i=i.concat(D_(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(mn(t.serverSyncTree_,C,!0))}else d=!0,h="nodata",i=i.concat(mn(t.serverSyncTree_,l.currentWriteId,!0))}dt(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}rl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)pi(r[a]);rh(t,t.transactionQueueTree_)}function X_(t,e){let n,r=t.transactionQueueTree_;for(n=B(e);n!==null&&gi(r)===void 0;)r=Zd(r,n),e=Z(e),n=B(e);return r}function J_(t,e){const n=[];return Z_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Z_(t,e,n){const r=gi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Za(e,i=>{Z_(t,i,n)})}function rl(t,e){const n=gi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,z_(e,n.length>0?n:void 0)}Za(e,r=>{rl(t,r)})}function ih(t,e){const n=Ls(X_(t,e)),r=Zd(t.transactionQueueTree_,e);return tk(r,i=>{Yl(t,i)}),Yl(t,r),j_(r,i=>{Yl(t,i)}),n}function Yl(t,e){const n=gi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(mn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?z_(e,void 0):n.length=s+1,dt(t.eventQueue_,Ls(e),i);for(let o=0;o<r.length;o++)pi(r[o])}}/**
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
 */function bk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Nk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const bp=function(t,e){const n=Ik(t),r=n.namespace;n.domain==="firebase.com"&&en(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&en("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||US();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new t_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Q(n.pathString)}},Ik=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(i=bk(t.substring(d,h)));const f=Nk(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const Np="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Tk=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Np.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Np.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class ev{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class tv{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class nv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class sh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return W(this._path)?null:Ad(this._path)}get ref(){return new Ut(this._repo,this._path)}get _queryIdentifier(){const e=dp(this._queryParams),n=Id(e);return n==="{}"?"default":n}get _queryObject(){return dp(this._queryParams)}isEqual(e){if(e=Ie(e),!(e instanceof sh))return!1;const n=this._repo===e._repo,r=Dd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+xC(this._path)}}class Ut extends sh{constructor(e,n){super(e,n,new Fd,!1)}get parent(){const e=u_(this._path);return e===null?null:new Ut(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class si{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Q(e),r=oi(this.ref,e);return new si(this._node.getChild(n),r,ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new si(i,oi(this.ref,r),ce)))}hasChild(e){const n=new Q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ht(t,e){return t=Ie(t),t._checkNotDeleted("ref"),e!==void 0?oi(t._root,e):t._root}function oi(t,e){return t=Ie(t),B(t._path)===null?ck("child","path",e,!1):H_("child","path",e,!1),new Ut(t._repo,le(t._path,e))}function oh(t,e){t=Ie(t),G_("push",t._path),V_("push",e,t._path,!0);const n=Y_(t._repo),r=Tk(n),i=oi(t,r),s=oi(t,r);let o;return e!=null?o=va(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function va(t,e){t=Ie(t),G_("set",t._path),V_("set",e,t._path,!1);const n=new Is;return vk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function rv(t,e){lk("update",e,t._path,!1);const n=new Is;return wk(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Fs(t){t=Ie(t);const e=new nv(()=>{}),n=new il(e);return _k(t._repo,t,n).then(r=>new si(r,new Ut(t._repo,t._path),t._queryParams.getIndex()))}class il{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new ev("value",this,new si(e.snapshotNode,new Ut(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tv(this,e,n):null}matches(e){return e instanceof il?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ah{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tv(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const r=oi(new Ut(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new ev(e.type,this,new si(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ah?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Rk(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,h)=>{kp(t._repo,t,a),l(d,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new nv(n,s||void 0),a=e==="value"?new il(o):new ah(e,o);return Sk(t._repo,t,a),()=>kp(t._repo,t,a)}function iv(t,e,n,r){return Rk(t,"value",e,n,r)}DE(Ut);UE(Ut);/**
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
 */const Pk="FIREBASE_DATABASE_EMULATOR_HOST",Cu={};let Ak=!1;function Dk(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Ts(s);t.repoInfo_=new t_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function Ok(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||en("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=bp(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Pk]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=bp(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new zr(zr.OWNER):new YS(t.name,t.options,e);uk("Invalid Firebase Database URL",o),W(o.path)||en("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Mk(a,t,d,new qS(t,n));return new Fk(h,t)}function Lk(t,e){const n=Cu[e];(!n||n[t.key]!==t)&&en(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ck(t),delete n[t.key]}function Mk(t,e,n,r){let i=Cu[e.name];i||(i={},Cu[e.name]=i);let s=i[t.toURLString()];return s&&en("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new mk(t,Ak,n,r),i[t.toURLString()]=s,s}class Fk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ut(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Lk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&en("Cannot call "+e+" on a deleted database.")}}function Uk(t=Uy(),e){const n=Rs(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=a1("database");r&&$k(n,...r)}return n}function $k(t,e,n,r={}){t=Ie(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&nr(r,s.repoInfo_.emulatorOptions))return;en("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&en('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new zr(zr.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:l1(r.mockUserToken,t.app.options.projectId);o=new zr(a)}Ts(e)&&Dy(e),Dk(s,i,r,o)}/**
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
 */function zk(t){DS(fi),Ot(new bt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Ok(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),at(qf,Yf,t),at(qf,Yf,"esm2020")}qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zk();var Bk="firebase",jk="12.11.0";/**
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
 */at(Bk,jk,"app");const sv="@firebase/installations",lh="0.6.21";/**
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
 */const ov=1e4,av=`w:${lh}`,lv="FIS_v2",Wk="https://firebaseinstallations.googleapis.com/v1",Vk=60*60*1e3,Hk="installations",Gk="Installations";/**
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
 */const Kk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},or=new hr(Hk,Gk,Kk);function cv(t){return t instanceof Mt&&t.code.includes("request-failed")}/**
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
 */function uv({projectId:t}){return`${Wk}/projects/${t}/installations`}function dv(t){return{token:t.token,requestStatus:2,expiresIn:Yk(t.expiresIn),creationTime:Date.now()}}async function hv(t,e){const r=(await e.json()).error;return or.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function qk(t,{refreshToken:e}){const n=fv(t);return n.append("Authorization",Qk(e)),n}async function pv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Yk(t){return Number(t.replace("s","000"))}function Qk(t){return`${lv} ${t}`}/**
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
 */async function Xk({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=uv(t),i=fv(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:lv,appId:t.appId,sdkVersion:av},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await pv(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:dv(c.authToken)}}else throw await hv("Create Installation",l)}/**
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
 */function mv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Jk(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Zk=/^[cdef][\w-]{21}$/,Eu="";function eb(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=tb(t);return Zk.test(n)?n:Eu}catch{return Eu}}function tb(t){return Jk(t).substr(0,22)}/**
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
 */function sl(t){return`${t.appName}!${t.appId}`}/**
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
 */const gv=new Map;function yv(t,e){const n=sl(t);_v(n,e),nb(n,e)}function _v(t,e){const n=gv.get(t);if(n)for(const r of n)r(e)}function nb(t,e){const n=rb();n&&n.postMessage({key:t,fid:e}),ib()}let Kn=null;function rb(){return!Kn&&"BroadcastChannel"in self&&(Kn=new BroadcastChannel("[Firebase] FID Change"),Kn.onmessage=t=>{_v(t.data.key,t.data.fid)}),Kn}function ib(){gv.size===0&&Kn&&(Kn.close(),Kn=null)}/**
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
 */const sb="firebase-installations-database",ob=1,ar="firebase-installations-store";let Ql=null;function ch(){return Ql||(Ql=My(sb,ob,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ar)}}})),Ql}async function wa(t,e){const n=sl(t),i=(await ch()).transaction(ar,"readwrite"),s=i.objectStore(ar),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&yv(t,e.fid),e}async function vv(t){const e=sl(t),r=(await ch()).transaction(ar,"readwrite");await r.objectStore(ar).delete(e),await r.done}async function ol(t,e){const n=sl(t),i=(await ch()).transaction(ar,"readwrite"),s=i.objectStore(ar),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&yv(t,a.fid),a}/**
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
 */async function uh(t){let e;const n=await ol(t.appConfig,r=>{const i=ab(r),s=lb(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Eu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ab(t){const e=t||{fid:eb(),registrationStatus:0};return wv(e)}function lb(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(or.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=cb(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ub(t)}:{installationEntry:e}}async function cb(t,e){try{const n=await Xk(t,e);return wa(t.appConfig,n)}catch(n){throw cv(n)&&n.customData.serverCode===409?await vv(t.appConfig):await wa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ub(t){let e=await Ip(t.appConfig);for(;e.registrationStatus===1;)await mv(100),e=await Ip(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await uh(t);return r||n}return e}function Ip(t){return ol(t,e=>{if(!e)throw or.create("installation-not-found");return wv(e)})}function wv(t){return db(t)?{fid:t.fid,registrationStatus:0}:t}function db(t){return t.registrationStatus===1&&t.registrationTime+ov<Date.now()}/**
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
 */async function hb({appConfig:t,heartbeatServiceProvider:e},n){const r=fb(t,n),i=qk(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:av,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await pv(()=>fetch(r,a));if(l.ok){const c=await l.json();return dv(c)}else throw await hv("Generate Auth Token",l)}function fb(t,{fid:e}){return`${uv(t)}/${e}/authTokens:generate`}/**
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
 */async function dh(t,e=!1){let n;const r=await ol(t.appConfig,s=>{if(!xv(s))throw or.create("not-registered");const o=s.authToken;if(!e&&gb(o))return s;if(o.requestStatus===1)return n=pb(t,e),s;{if(!navigator.onLine)throw or.create("app-offline");const a=_b(s);return n=mb(t,a),a}});return n?await n:r.authToken}async function pb(t,e){let n=await Tp(t.appConfig);for(;n.authToken.requestStatus===1;)await mv(100),n=await Tp(t.appConfig);const r=n.authToken;return r.requestStatus===0?dh(t,e):r}function Tp(t){return ol(t,e=>{if(!xv(e))throw or.create("not-registered");const n=e.authToken;return vb(n)?{...e,authToken:{requestStatus:0}}:e})}async function mb(t,e){try{const n=await hb(t,e),r={...e,authToken:n};return await wa(t.appConfig,r),n}catch(n){if(cv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await vv(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await wa(t.appConfig,r)}throw n}}function xv(t){return t!==void 0&&t.registrationStatus===2}function gb(t){return t.requestStatus===2&&!yb(t)}function yb(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Vk}function _b(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function vb(t){return t.requestStatus===1&&t.requestTime+ov<Date.now()}/**
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
 */async function wb(t){const e=t,{installationEntry:n,registrationPromise:r}=await uh(e);return r?r.catch(console.error):dh(e).catch(console.error),n.fid}/**
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
 */async function xb(t,e=!1){const n=t;return await Sb(n),(await dh(n,e)).token}async function Sb(t){const{registrationPromise:e}=await uh(t);e&&await e}/**
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
 */function Cb(t){if(!t||!t.options)throw Xl("App Configuration");if(!t.name)throw Xl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Xl(t){return or.create("missing-app-config-values",{valueName:t})}/**
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
 */const Sv="installations",Eb="installations-internal",kb=t=>{const e=t.getProvider("app").getImmediate(),n=Cb(e),r=Rs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},bb=t=>{const e=t.getProvider("app").getImmediate(),n=Rs(e,Sv).getImmediate();return{getId:()=>wb(n),getToken:i=>xb(n,i)}};function Nb(){Ot(new bt(Sv,kb,"PUBLIC")),Ot(new bt(Eb,bb,"PRIVATE"))}Nb();at(sv,lh);at(sv,lh,"esm2020");/**
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
 */const Rp="analytics",Ib="firebase_id",Tb="origin",Rb=60*1e3,Pb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hh="https://www.googletagmanager.com/gtag/js";/**
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
 */const $e=new Ka("@firebase/analytics");/**
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
 */const Ab={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},lt=new hr("analytics","Analytics",Ab);/**
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
 */function Db(t){if(!t.startsWith(hh)){const e=lt.create("invalid-gtag-resource",{gtagURL:t});return $e.warn(e.message),""}return t}function Cv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Ob(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Lb(t,e){const n=Ob("firebase-js-sdk-policy",{createScriptURL:Db}),r=document.createElement("script"),i=`${hh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Mb(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Fb(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Cv(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){$e.error(a)}t("config",i,s)}async function Ub(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Cv(n);for(const l of o){const c=a.find(h=>h.measurementId===l),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){$e.error(s)}}function $b(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await Ub(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await Fb(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){$e.error(a)}}return i}function zb(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=$b(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Bb(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(hh)&&n.src.includes(t))return n;return null}/**
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
 */const jb=30,Wb=1e3;class Vb{constructor(e={},n=Wb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ev=new Vb;function Hb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Gb(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:Hb(n)},i=Pb.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();(o=l.error)!=null&&o.message&&(a=l.error.message)}catch{}throw lt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function Kb(t,e=Ev,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw lt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw lt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Qb;return setTimeout(async()=>{a.abort()},n!==void 0?n:Rb),kv({appId:r,apiKey:i,measurementId:s},o,a,e)}async function kv(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Ev){var a;const{appId:s,measurementId:o}=t;try{await qb(r,e)}catch(l){if(o)return $e.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw l}try{const l=await Gb(t);return i.deleteThrottleMetadata(s),l}catch(l){const c=l;if(!Yb(c)){if(i.deleteThrottleMetadata(s),o)return $e.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw l}const d=Number((a=c==null?void 0:c.customData)==null?void 0:a.httpStatus)===503?$f(n,i.intervalMillis,jb):$f(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,h),$e.debug(`Calling attemptFetch again in ${d} millis`),kv(t,h,r,i)}}function qb(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(lt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Yb(t){if(!(t instanceof Mt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Qb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Xb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function Jb(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function Zb(){if(Ry())try{await Py()}catch(t){return $e.warn(lt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return $e.warn(lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function eN(t,e,n,r,i,s,o){const a=Kb(t);a.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&$e.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>$e.error(f)),e.push(a);const l=Zb().then(f=>{if(f)return r.getId()}),[c,d]=await Promise.all([a,l]);Bb(s)||Lb(s,c.measurementId),i("js",new Date);const h=(o==null?void 0:o.config)??{};return h[Tb]="firebase",h.update=!0,d!=null&&(h[Ib]=d),i("config",c.measurementId,h),c.measurementId}/**
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
 */class tN{constructor(e){this.app=e}_delete(){return delete jr[this.app.options.appId],Promise.resolve()}}let jr={},Pp=[];const Ap={};let Jl="dataLayer",nN="gtag",Dp,fh,Op=!1;function rN(){const t=[];if(Ny()&&t.push("This is a browser extension environment."),d1()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=lt.create("invalid-analytics-context",{errorInfo:e});$e.warn(n.message)}}function iN(t,e,n){rN();const r=t.options.appId;if(!r)throw lt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)$e.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw lt.create("no-api-key");if(jr[r]!=null)throw lt.create("already-exists",{id:r});if(!Op){Mb(Jl);const{wrappedGtag:s,gtagCore:o}=zb(jr,Pp,Ap,Jl,nN);fh=s,Dp=o,Op=!0}return jr[r]=eN(t,Pp,Ap,e,Dp,Jl,n),new tN(t)}function sN(t,e,n){t=Ie(t),Jb(fh,jr[t.app.options.appId],e,n).catch(r=>$e.error(r))}function oN(t,e,n,r){t=Ie(t),Xb(fh,jr[t.app.options.appId],e,n,r).catch(i=>$e.error(i))}const Lp="@firebase/analytics",Mp="0.10.21";function aN(){Ot(new bt(Rp,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return iN(r,i,n)},"PUBLIC")),Ot(new bt("analytics-internal",t,"PRIVATE")),at(Lp,Mp),at(Lp,Mp,"esm2020");function t(e){try{const n=e.getProvider(Rp).getImmediate();return{logEvent:(r,i,s)=>oN(n,r,i,s),setUserProperties:(r,i)=>sN(n,r,i)}}catch(n){throw lt.create("interop-component-reg-failed",{reason:n})}}}aN();function bv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lN=bv,Nv=new hr("auth","Firebase",bv());/**
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
 */const xa=new Ka("@firebase/auth");function cN(t,...e){xa.logLevel<=Y.WARN&&xa.warn(`Auth (${fi}): ${t}`,...e)}function No(t,...e){xa.logLevel<=Y.ERROR&&xa.error(`Auth (${fi}): ${t}`,...e)}/**
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
 */function Lt(t,...e){throw mh(t,...e)}function At(t,...e){return mh(t,...e)}function ph(t,e,n){const r={...lN(),[e]:n};return new hr("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return ph(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Lt(t,"argument-error"),ph(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nv.create(t,...e)}function $(t,e,...n){if(!t)throw mh(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw No(e),new Error(e)}function tn(t,e){t||Ht(e)}/**
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
 */function ku(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function dN(){return Fp()==="http:"||Fp()==="https:"}function Fp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function hN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dN()||Ny()||"connection"in navigator)?navigator.onLine:!0}function fN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Us{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=kd()||Iy()}get(){return hN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gh(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Iv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gN=new Us(3e4,6e4);function yh(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function yi(t,e,n,r,i={}){return Tv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=hi({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return c1()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(c.credentials="include"),Iv.fetch()(await Rv(t,t.config.apiHost,n,a),c)})}async function Tv(t,e,n){t._canInitEmulator=!1;const r={...pN,...e};try{const i=new _N(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw co(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw co(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw co(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw co(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ph(t,d,c);Lt(t,d)}}catch(i){if(i instanceof Mt)throw i;Lt(t,"network-request-failed",{message:String(i)})}}async function yN(t,e,n,r,i={}){const s=await yi(t,e,n,r,i);return"mfaPendingCredential"in s&&Lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Rv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?gh(t.config,i):`${t.config.apiScheme}://${i}`;return mN.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class _N{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),gN.get())})}}function co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=At(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function vN(t,e){return yi(t,"POST","/v1/accounts:delete",e)}async function Sa(t,e){return yi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wN(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),i=_h(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qi(Zl(i.auth_time)),issuedAtTime:qi(Zl(i.iat)),expirationTime:qi(Zl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zl(t){return Number(t)*1e3}function _h(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return No("JWT malformed, contained fewer than 3 sections"),null;try{const i=ra(n);return i?JSON.parse(i):(No("Failed to decode base64 JWT payload"),null)}catch(i){return No("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Up(t){const e=_h(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ss(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mt&&xN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class SN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qi(this.lastLoginAt),this.creationTime=qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ca(t){var h;const e=t.auth,n=await t.getIdToken(),r=await Ss(t,Sa(e,{idToken:n}));$(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(h=i.providerUserInfo)!=null&&h.length?Pv(i.providerUserInfo):[],o=EN(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new bu(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function CN(t){const e=Ie(t);await Ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Pv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function kN(t,e){const n=await Tv(t,{},async()=>{const r=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Rv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(l.credentials="include"),Iv.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bN(t,e){return yi(t,"POST","/v2/accounts:revokeToken",yh(t,e))}/**
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
 */class Wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Up(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=Up(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Wr;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wr,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
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
 */function sn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new SN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ss(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wN(this,e)}reload(){return CN(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await Ss(this,vN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:h,emailVerified:f,isAnonymous:_,providerData:v,stsTokenManager:S}=n;$(h&&S,e,"internal-error");const C=Wr.fromJSON(this.name,S);$(typeof h=="string",e,"internal-error"),sn(r,e.name),sn(i,e.name),$(typeof f=="boolean",e,"internal-error"),$(typeof _=="boolean",e,"internal-error"),sn(s,e.name),sn(o,e.name),sn(a,e.name),sn(l,e.name),sn(c,e.name),sn(d,e.name);const g=new xt({uid:h,auth:e,email:i,emailVerified:f,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:C,createdAt:c,lastLoginAt:d});return v&&Array.isArray(v)&&(g.providerData=v.map(m=>({...m}))),l&&(g._redirectEventId=l),g}static async _fromIdTokenResponse(e,n,r=!1){const i=new Wr;i.updateFromServerResponse(n);const s=new xt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ca(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Pv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Wr;a.updateFromIdToken(r);const l=new xt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const $p=new Map;function Gt(t){tn(t instanceof Function,"Expected a class definition");let e=$p.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$p.set(t,e),e)}/**
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
 */class Av{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Av.type="NONE";const zp=Av;/**
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
 */function Io(t,e,n){return`firebase:${t}:${e}:${n}`}class Vr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Io(this.userKey,i.apiKey,s),this.fullPersistenceKey=Io("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Sa(this.auth,{idToken:e}).catch(()=>{});return n?xt._fromGetAccountInfoResponse(this.auth,n,e):null}return xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vr(Gt(zp),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Gt(zp);const o=Io(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let h;if(typeof d=="string"){const f=await Sa(e,{idToken:d}).catch(()=>{});if(!f)break;h=await xt._fromGetAccountInfoResponse(e,f,d)}else h=xt._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Vr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Vr(s,e,r))}}/**
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
 */function Bp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uv(e))return"Blackberry";if($v(e))return"Webos";if(Ov(e))return"Safari";if((e.includes("chrome/")||Lv(e))&&!e.includes("edge/"))return"Chrome";if(Fv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dv(t=ze()){return/firefox\//i.test(t)}function Ov(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lv(t=ze()){return/crios\//i.test(t)}function Mv(t=ze()){return/iemobile/i.test(t)}function Fv(t=ze()){return/android/i.test(t)}function Uv(t=ze()){return/blackberry/i.test(t)}function $v(t=ze()){return/webos/i.test(t)}function vh(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NN(t=ze()){var e;return vh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function IN(){return u1()&&document.documentMode===10}function zv(t=ze()){return vh(t)||Fv(t)||$v(t)||Uv(t)||/windows phone/i.test(t)||Mv(t)}/**
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
 */function Bv(t,e=[]){let n;switch(t){case"Browser":n=Bp(ze());break;case"Worker":n=`${Bp(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${r}`}/**
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
 */class TN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function RN(t,e={}){return yi(t,"GET","/v2/passwordPolicy",yh(t,e))}/**
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
 */const PN=6;class AN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??PN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class DN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jp(this),this.idTokenSubscription=new jp(this),this.beforeStateQueue=new TN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Vr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Sa(this,{idToken:e}),r=await xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(_t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_t(this.app))return Promise.reject(In(this));const n=e?Ie(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _t(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RN(this),n=new AN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new hr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Vr.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&cN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function $s(t){return Ie(t)}class jp{constructor(e){this.auth=e,this.observer=null,this.addObserver=_1(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ON(t){wh=t}function LN(t){return wh.loadJS(t)}function MN(){return wh.gapiScript}function FN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function UN(t,e){const n=Rs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(nr(s,e??{}))return i;Lt(i,"already-initialized")}return n.initialize({options:e})}function $N(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zN(t,e,n){const r=$s(t);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=jv(e),{host:o,port:a}=BN(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(nr(c,r.config.emulator)&&nr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ts(o)?Dy(`${s}//${o}${l}`):i||jN()}function jv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BN(t){const e=jv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wp(o)}}}function Wp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}/**
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
 */async function Hr(t,e){return yN(t,"POST","/v1/accounts:signInWithIdp",yh(t,e))}/**
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
 */const WN="http://localhost";class lr extends Wv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}buildRequest(){const e={requestUri:WN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hi(n)}return e}}/**
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
 */class xh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zs extends xh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class un extends zs{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class Bt extends zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
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
 */class dn extends zs{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
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
 */class hn extends zs{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
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
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xt._fromIdTokenResponse(e,r,i),o=Vp(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vp(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ea extends Mt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ea.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ea(e,n,r,i)}}function Vv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ea._fromErrorAndOperation(t,s,e,r):s})}async function VN(t,e,n=!1){const r=await Ss(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
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
 */async function HN(t,e,n=!1){const{auth:r}=t;if(_t(r.app))return Promise.reject(In(r));const i="reauthenticate";try{const s=await Ss(t,Vv(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=_h(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),s}}/**
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
 */async function GN(t,e,n=!1){if(_t(t.app))return Promise.reject(In(t));const r="signIn",i=await Vv(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function KN(t,e,n,r){return Ie(t).onIdTokenChanged(e,n,r)}function qN(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function YN(t,e,n,r){return Ie(t).onAuthStateChanged(e,n,r)}function QN(t){return Ie(t).signOut()}const ka="__sak";/**
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
 */class Hv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ka,"1"),this.storage.removeItem(ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const XN=1e3,JN=10;class Gv extends Hv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);IN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gv.type="LOCAL";const ZN=Gv;/**
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
 */class Kv extends Hv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kv.type="SESSION";const qv=Kv;/**
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
 */function eI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class al{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new al(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await eI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}al.receivers=[];/**
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
 */function Sh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Sh("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Dt(){return window}function nI(t){Dt().location.href=t}/**
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
 */function Yv(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function rI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function sI(){return Yv()?self:null}/**
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
 */const Qv="firebaseLocalStorageDb",oI=1,ba="firebaseLocalStorage",Xv="fbase_key";class Bs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ll(t,e){return t.transaction([ba],e?"readwrite":"readonly").objectStore(ba)}function aI(){const t=indexedDB.deleteDatabase(Qv);return new Bs(t).toPromise()}function Nu(){const t=indexedDB.open(Qv,oI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ba,{keyPath:Xv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ba)?e(r):(r.close(),await aI(),e(await Nu()))})})}async function Hp(t,e,n){const r=ll(t,!0).put({[Xv]:e,value:n});return new Bs(r).toPromise()}async function lI(t,e){const n=ll(t,!1).get(e),r=await new Bs(n).toPromise();return r===void 0?null:r.value}function Gp(t,e){const n=ll(t,!0).delete(e);return new Bs(n).toPromise()}const cI=800,uI=3;class Jv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=al._getInstance(sI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await rI(),!this.activeServiceWorker)return;this.sender=new tI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nu();return await Hp(e,ka,"1"),await Gp(e,ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ll(i,!1).getAll();return new Bs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jv.type="LOCAL";const dI=Jv;new Us(3e4,6e4);/**
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
 */function Zv(t,e){return e?Gt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ch extends Wv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hI(t){return GN(t.auth,new Ch(t),t.bypassAuthState)}function fI(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),HN(n,new Ch(t),t.bypassAuthState)}async function pI(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),VN(n,new Ch(t),t.bypassAuthState)}/**
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
 */class ew{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hI;case"linkViaPopup":case"linkViaRedirect":return pI;case"reauthViaPopup":case"reauthViaRedirect":return fI;default:Lt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mI=new Us(2e3,1e4);class Ar extends ew{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ar.currentPopupAction&&Ar.currentPopupAction.cancel(),Ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=Sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mI.get())};e()}}Ar.currentPopupAction=null;/**
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
 */const gI="pendingRedirect",To=new Map;class yI extends ew{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await _I(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _I(t,e){const n=nw(e),r=tw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function vI(t,e){return tw(t)._set(nw(e),"true")}function wI(t,e){To.set(t._key(),e)}function tw(t){return Gt(t._redirectPersistence)}function nw(t){return Io(gI,t.config.apiKey,t.name)}/**
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
 */function xI(t,e,n){return SI(t,e,n)}async function SI(t,e,n){if(_t(t.app))return Promise.reject(In(t));const r=$s(t);uN(t,e,xh),await r._initializationPromise;const i=Zv(r,n);return await vI(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function CI(t,e){return await $s(t)._initializationPromise,rw(t,e,!1)}async function rw(t,e,n=!1){if(_t(t.app))return Promise.reject(In(t));const r=$s(t),i=Zv(r,e),o=await new yI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const EI=10*60*1e3;class kI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iw(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(At(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kp(e))}saveEventToCache(e){this.cachedEventUids.add(Kp(e)),this.lastProcessedEventTime=Date.now()}}function Kp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iw(t);default:return!1}}/**
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
 */async function NI(t,e={}){return yi(t,"GET","/v1/projects",e)}/**
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
 */const II=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TI=/^https?/;async function RI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NI(t);for(const n of e)try{if(PI(n))return}catch{}Lt(t,"unauthorized-domain")}function PI(t){const e=ku(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TI.test(n))return!1;if(II.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const AI=new Us(3e4,6e4);function qp(){const t=Dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DI(t){return new Promise((e,n)=>{var i,s,o;function r(){qp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qp(),n(At(t,"network-request-failed"))},timeout:AI.get()})}if((s=(i=Dt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Dt().gapi)!=null&&o.load)r();else{const a=FN("iframefcb");return Dt()[a]=()=>{gapi.load?r():n(At(t,"network-request-failed"))},LN(`${MN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ro=null,e})}let Ro=null;function OI(t){return Ro=Ro||DI(t),Ro}/**
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
 */const LI=new Us(5e3,15e3),MI="__/auth/iframe",FI="emulator/auth/iframe",UI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$I=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zI(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gh(e,FI):`https://${t.config.authDomain}/${MI}`,r={apiKey:e.apiKey,appName:t.name,v:fi},i=$I.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${hi(r).slice(1)}`}async function BI(t){const e=await OI(t),n=Dt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:zI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),a=Dt().setTimeout(()=>{s(o)},LI.get());function l(){Dt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const jI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WI=500,VI=600,HI="_blank",GI="http://localhost";class Yp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KI(t,e,n,r=WI,i=VI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...jI,width:r.toString(),height:i.toString(),top:s,left:o},c=ze().toLowerCase();n&&(a=Lv(c)?HI:n),Dv(c)&&(e=e||GI,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[_,v])=>`${f}${_}=${v},`,"");if(NN(c)&&a!=="_self")return qI(e||"",a),new Yp(null);const h=window.open(e||"",a,d);$(h,t,"popup-blocked");try{h.focus()}catch{}return new Yp(h)}function qI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YI="__/auth/handler",QI="emulator/auth/handler",XI=encodeURIComponent("fac");async function Qp(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fi,eventId:i};if(e instanceof xh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(s||{}))o[d]=h}if(e instanceof zs){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${XI}=${encodeURIComponent(l)}`:"";return`${JI(t)}?${hi(a).slice(1)}${c}`}function JI({config:t}){return t.emulator?gh(t,QI):`https://${t.authDomain}/${YI}`}/**
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
 */const ec="webStorageSupport";class ZI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qv,this._completeRedirectFn=rw,this._overrideRedirectResult=wI}async _openPopup(e,n,r,i){var o;tn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Qp(e,n,r,ku(),i);return KI(e,s,Sh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Qp(e,n,r,ku(),i);return nI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BI(e),r=new kI(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ec,{type:ec},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ec];s!==void 0&&n(!!s),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zv()||Ov()||vh()}}const eT=ZI;var Xp="@firebase/auth",Jp="1.12.2";/**
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
 */class tT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rT(t){Ot(new bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bv(t)},c=new DN(r,i,s,l);return $N(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ot(new bt("auth-internal",e=>{const n=$s(e.getProvider("auth").getImmediate());return(r=>new tT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(Xp,Jp,nT(t)),at(Xp,Jp,"esm2020")}/**
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
 */const iT=5*60,sT=by("authIdTokenMaxAge")||iT;let Zp=null;const oT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sT)return;const i=n==null?void 0:n.token;Zp!==i&&(Zp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aT(t=Uy()){const e=Rs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UN(t,{popupRedirectResolver:eT,persistence:[dI,ZN,qv]}),r=by("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=oT(s.toString());qN(n,o,()=>o(n.currentUser)),KN(n,a=>o(a))}}const i=Ey("auth");return i&&zN(n,`http://${i}`),n}function lT(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}ON({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=At("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rT("Browser");const cT={apiKey:"AIzaSyBrYWUlI4QZEAb-3q_G7ypIRRWKie5JecM",authDomain:"todo-8678c.firebaseapp.com",databaseURL:"https://todo-8678c-default-rtdb.firebaseio.com",projectId:"todo-8678c",storageBucket:"todo-8678c.firebasestorage.app",messagingSenderId:"1022607308094",appId:"1:1022607308094:web:2cb0cfb369d39c1b93686f",measurementId:"G-SQM3PBJ11Q"},sw=Fy(cT),ft=Uk(sw),Na=aT(sw),uT=new Bt,dT=({onNewPage:t,onOpenCardSort:e})=>p("aside",{className:"h-screen w-64 fixed left-0 top-0 bg-[#f3f3f4] flex flex-col p-6 space-y-8 z-40",children:[p("div",{className:"flex items-center gap-3 mb-6",children:[u("div",{className:"w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white",children:u("span",{className:"material-symbols-outlined",children:"layers"})}),p("div",{children:[u("h2",{className:"text-xl font-black text-black leading-tight",children:"Project Alpha"}),u("p",{className:"text-[10px] uppercase tracking-widest text-on-surface-variant",children:"Sitemap Editor"})]})]}),u("button",{onClick:t,className:"w-full py-3 bg-black text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all mb-8",children:"New Page"}),u("nav",{className:"flex-grow space-y-2",children:[{icon:"dashboard",label:"Dashboard"},{icon:"layers",label:"Pages",active:!0},{icon:"style",label:"Card Sort",onClick:e},{icon:"folder_open",label:"Assets"},{icon:"history",label:"History"},{icon:"ios_share",label:"Export"}].map(({icon:n,label:r,active:i,onClick:s})=>p("a",{href:"#",onClick:o=>{s&&(o.preventDefault(),s())},className:`flex items-center gap-3 px-4 py-3 rounded-lg text-sm uppercase tracking-widest transition-all ${i?"bg-white text-black font-bold shadow-sm":"text-[#474747] hover:bg-[#e8e8e8] hover:translate-x-1"}`,children:[u("span",{className:"material-symbols-outlined",children:n}),u("span",{children:r})]},r))}),u("div",{className:"mt-auto pt-6 border-t border-[#c6c6c6]/15",children:p("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 text-[#474747] hover:bg-[#e8e8e8] transition-all rounded-lg text-sm uppercase tracking-widest",children:[u("span",{className:"material-symbols-outlined",children:"account_circle"}),u("span",{children:"Account"})]})})]}),uo=192,tc=96,hT=({node:t,isSelected:e,onSelect:n,onAddChild:r})=>{const[i,s]=N.useState(!1);return p("g",{transform:`translate(${t._x}, ${t._y})`,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),style:{cursor:"pointer"},"data-node":"true",children:[u("defs",{children:u("filter",{id:`shadow-${t.id}`,x:"-20%",y:"-20%",width:"140%",height:"140%",children:u("feDropShadow",{dx:"0",dy:"2",stdDeviation:e?"6":"3",floodColor:e?"#000":"#c6c6c6",floodOpacity:e?"0.18":"0.25"})})}),u("rect",{x:0,y:0,width:uo,height:tc,rx:12,ry:12,fill:"white",stroke:e?"#000":i?"#555":"#e0e0e0",strokeWidth:e?2:1,filter:`url(#shadow-${t.id})`,onClick:()=>n()}),u("text",{x:12,y:20,fontSize:9,fill:"#999",fontFamily:"inherit",style:{textTransform:"uppercase",letterSpacing:"0.12em",fontWeight:600},children:t.label}),u("text",{x:12,y:58,fontSize:15,fill:"#111",fontFamily:"inherit",style:{fontWeight:800,letterSpacing:"-0.02em"},onClick:()=>n(),children:t.title}),p("text",{x:12,y:80,fontSize:10,fill:"#aaa",fontFamily:"monospace",children:["/",t.slug]}),u("circle",{cx:uo-14,cy:14,r:4,fill:t.status==="public"?"#22c55e":"#f59e0b"}),i&&p("g",{onClick:o=>{o.stopPropagation(),r(t.id)},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!0),children:[u("circle",{cx:uo/2,cy:tc+28,r:14,fill:"#111"}),u("text",{x:uo/2,y:tc+33,textAnchor:"middle",fontSize:18,fill:"white",fontFamily:"Material Symbols Outlined, sans-serif",style:{userSelect:"none"},children:"+"})]})]})},fT=({svgRef:t,pan:e,zoom:n,minX:r,nodes:i,edges:s,selectedId:o,setSelectedId:a,onAddChild:l,onMouseDown:c,onMouseMove:d,onMouseUp:h,isPanning:f,setZoom:_,setPan:v})=>{const S=(C,g,m,y)=>{const x=(g+y)/2;return`M ${C} ${g} L ${C} ${x} L ${m} ${x} L ${m} ${y}`};return p("main",{className:"ml-64 min-h-screen relative overflow-hidden",style:{background:"#fafafa",backgroundImage:"radial-gradient(circle, #d0d0d0 1px, transparent 1px)",backgroundSize:"24px 24px",cursor:f?"grabbing":"grab",marginRight:o?"320px":"0"},onMouseDown:c,onMouseMove:d,onMouseUp:h,onMouseLeave:h,children:[u("svg",{ref:t,width:"100%",height:"100%",style:{minHeight:"100vh"},children:u("g",{transform:`translate(${e.x}, ${e.y}) scale(${n})`,children:p("g",{transform:`translate(${-r}, 32)`,children:[s.map((C,g)=>u("path",{d:S(C.x1,C.y1,C.x2,C.y2),fill:"none",stroke:"#d0d0d0",strokeWidth:1.5,strokeLinecap:"round"},g)),i.map(C=>u(hT,{node:C,isSelected:o!==null&&String(C.id)===String(o),onSelect:()=>a(String(C.id)===String(o)?null:C.id),onAddChild:l},C.id))]})})}),p("div",{className:"fixed bottom-8 left-72 bg-white/80 backdrop-blur-md rounded-full shadow-lg p-1 flex items-center gap-1 border border-[#c6c6c6]/10 z-30",children:[u("button",{onClick:()=>_(C=>Math.min(2,C+.1)),className:"p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined",children:"zoom_in"}),u("div",{className:"h-4 w-[1px] bg-[#c6c6c6]/30 mx-1"}),p("span",{className:"text-xs font-bold px-2",children:[Math.round(n*100),"%"]}),u("div",{className:"h-4 w-[1px] bg-[#c6c6c6]/30 mx-1"}),u("button",{onClick:()=>_(C=>Math.max(.3,C-.1)),className:"p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined",children:"zoom_out"}),u("button",{onClick:()=>{_(.85),v({x:80,y:40})},className:"p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined",children:"center_focus_strong"})]})]})},pT=({node:t,onUpdate:e,onDelete:n,onClose:r})=>t?p("aside",{className:"fixed right-0 top-0 h-full w-80 bg-white border-l border-[#c6c6c6]/15 z-40 p-8 overflow-auto",children:[p("div",{className:"flex justify-between items-center mb-10",children:[u("h2",{className:"text-sm font-bold uppercase tracking-[0.2em] text-black",children:"Page Properties"}),u("button",{onClick:r,className:"material-symbols-outlined text-on-surface-variant hover:text-black transition-colors",children:"close"})]}),p("div",{className:"space-y-8",children:[p("div",{className:"space-y-3",children:[u("label",{className:"text-[10px] uppercase tracking-widest text-on-surface-variant block",children:"Page Title"}),u("input",{type:"text",value:t.title,onChange:i=>e({title:i.target.value}),className:"w-full bg-[#f3f3f4] border-none rounded-lg p-4 font-bold text-black focus:ring-1 focus:ring-black focus:bg-white transition-all"})]}),p("div",{className:"space-y-3",children:[u("label",{className:"text-[10px] uppercase tracking-widest text-on-surface-variant block",children:"URL Slug"}),p("div",{className:"flex items-center bg-[#f3f3f4] rounded-lg overflow-hidden",children:[u("span",{className:"pl-4 text-xs text-[#777777] font-mono",children:"/"}),u("input",{type:"text",value:t.slug,onChange:i=>e({slug:i.target.value}),className:"w-full bg-transparent border-none p-4 pl-1 font-mono text-xs focus:ring-0"})]})]}),p("div",{className:"space-y-3",children:[u("label",{className:"text-[10px] uppercase tracking-widest text-on-surface-variant block",children:"Description"}),u("textarea",{rows:4,value:t.description,onChange:i=>e({description:i.target.value}),className:"w-full bg-[#f3f3f4] border-none rounded-lg p-4 text-sm text-on-surface-variant focus:ring-1 focus:ring-black focus:bg-white transition-all resize-none",placeholder:"Enter meta description for SEO..."})]}),p("div",{className:"space-y-3",children:[u("label",{className:"text-[10px] uppercase tracking-widest text-on-surface-variant block",children:"Navigation Status"}),p("div",{className:"flex gap-2",children:[u("button",{onClick:()=>e({status:"public"}),className:`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors ${t.status==="public"?"bg-black text-white":"bg-[#f3f3f4] text-on-surface-variant hover:bg-[#e8e8e8]"}`,children:"Public"}),u("button",{onClick:()=>e({status:"draft"}),className:`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors ${t.status==="draft"?"bg-black text-white":"bg-[#f3f3f4] text-on-surface-variant hover:bg-[#e8e8e8]"}`,children:"Draft"})]})]}),u("div",{className:"pt-8 mt-8 border-t border-[#c6c6c6]/15",children:p("button",{onClick:n,className:"w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-red-500/20 text-red-600 hover:bg-red-50 transition-colors text-xs font-bold uppercase tracking-widest",children:[u("span",{className:"material-symbols-outlined text-sm",children:"delete"}),"Delete Page"]})})]})]}):null;let mT=100;const gT=()=>`node-${++mT}`,em={id:"root",title:"Landing Page",slug:"index.html",label:"Home",icon:"home",status:"public",description:"Main entry point of the site.",children:[{id:"solutions",title:"Solutions",slug:"solutions",label:"Parent",icon:"widgets",status:"public",description:"Product solutions overview.",children:[{id:"enterprise",title:"Enterprise",slug:"solutions/enterprise",label:"Child",icon:"business",status:"public",description:"Enterprise-level offerings.",children:[]}]},{id:"products",title:"Products",slug:"products",label:"Selected",icon:"inventory_2",status:"public",description:"Overview of all current product offerings and enterprise services available.",children:[]},{id:"about",title:"About Us",slug:"about",label:"Static",icon:"info",status:"draft",description:"Our story and mission.",children:[]}]};function ow(t,e,n){return t.id===e?{...t,children:[...t.children,n]}:{...t,children:t.children.map(r=>ow(r,e,n))}}function aw(t,e,n){return t.id===e?{...t,...n}:{...t,children:t.children.map(r=>aw(r,e,n))}}function lw(t,e){return{...t,children:t.children.filter(n=>n.id!==e).map(n=>lw(n,e))}}function cw(t,e){if(t.id===e)return t;for(const n of t.children){const r=cw(n,e);if(r)return r}return null}function uw(t,e=0,n=192,r=96,i=48,s=80){if(!t.children||t.children.length===0)return{...t,_w:n,_x:0,_y:e*(r+s),_laidOut:[]};const o=t.children.map(_=>uw(_,e+1,n,r,i,s));let a=0;const l=[];for(let _=0;_<o.length;_++){const v={...o[_]};dw(v,a),l.push(v),a+=v._w+i}const c=l.reduce((_,v)=>_+v._w,0)+i*(l.length-1),d=l[0]._x,h=l[l.length-1]._x+l[l.length-1]._w,f=(d+h)/2-n/2;return{...t,_w:Math.max(n,c),_x:f,_y:e*(r+s),children:l,_laidOut:l}}function dw(t,e){t._x+=e,t.children&&t.children.forEach(n=>dw(n,e))}function hw(t,e=[]){return e.push(t),t.children&&t.children.forEach(n=>hw(n,e)),e}function fw(t,e,n,r=[]){return t.children&&t.children.forEach(i=>{r.push({x1:t._x+e/2,y1:t._y+n,x2:i._x+e/2,y2:i._y}),fw(i,e,n,r)}),r}const nc=192,rc=96,yT=48,_T=80,vT=({onOpenCardSort:t})=>{const[e,n]=N.useState(null),[r,i]=N.useState(null),[s,o]=N.useState(.85),[a,l]=N.useState({x:80,y:40}),[c,d]=N.useState(!1),[h,f]=N.useState(!0),[_,v]=N.useState(null),S=N.useRef(null),C=N.useRef(null),g=N.useRef(!1),m=N.useRef(!1),y=ht(ft,"vellumSitemap");N.useEffect(()=>{const w=iv(y,R=>{var X;let L=R.val();L?(L=x(L),n(L),!r&&((X=L.children)==null?void 0:X.length)>0&&i(L.children[0].id)):(g.current=!0,va(y,em).then(()=>{n(em),i("products")}).catch(()=>v("Failed to initialize sitemap.")).finally(()=>{g.current=!1})),f(!1)},R=>{console.error("Firebase error:",R),v("Failed to connect to Firebase. Check rules (allow read/write)."),f(!1)});return()=>w()},[]);const x=w=>{if(!w||typeof w!="object")return w;const R={...w,children:w.children||[]};return Array.isArray(R.children)&&(R.children=R.children.map(x)),R},E=e?uw(e,0,nc,rc,yT,_T):null,b=E?hw(E):[],T=E?fw(E,nc,rc):[],P=r&&E?cw(E,r):null,G=b.length?Math.min(...b.map(w=>w._x||0))-60:0;b.length&&Math.max(...b.map(w=>w._x||0))+nc+60,b.length&&Math.max(...b.map(w=>w._y||0))+rc+100;const M=N.useCallback(w=>{g.current||!w||(g.current=!0,va(y,w).catch(R=>console.error("Firebase save failed:",R)).finally(()=>{g.current=!1}))},[]),ue=N.useCallback(w=>{if(!e||m.current)return;m.current=!0;const R={id:gT(),title:"New Page",slug:"new-page",label:"Child",icon:"article",status:"draft",description:"",children:[]},L=ow(e,w||"root",R),X=x(L);n(X),M(X),i(R.id),setTimeout(()=>{m.current=!1},300)},[e,M]),Te=N.useCallback(w=>{if(!e||!r)return;let R=aw(e,r,w);R=x(R),n(R),M(R)},[e,r,M]),F=N.useCallback(()=>{if(!e||!r||r==="root")return;let w=lw(e,r);w=x(w),n(w),M(w),i(null)},[e,r,M]),O=w=>{w.target.closest("g[data-node]")||(d(!0),S.current={x:w.clientX-a.x,y:w.clientY-a.y})},de=w=>{c&&l({x:w.clientX-S.current.x,y:w.clientY-S.current.y})},A=()=>d(!1),z=N.useCallback(w=>{w.preventDefault(),o(R=>Math.min(2,Math.max(.3,R-w.deltaY*.001)))},[]);return N.useEffect(()=>{const w=C.current;if(w)return w.addEventListener("wheel",z,{passive:!1}),()=>w.removeEventListener("wheel",z)},[z]),h?u("div",{className:"flex items-center justify-center min-h-screen text-xl",children:"Loading sitemap from Firebase..."}):_?u("div",{className:"flex items-center justify-center min-h-screen text-red-600 p-8 text-center",children:_}):p("div",{className:"light font-body text-on-surface bg-background min-h-screen overflow-hidden",children:[u(dT,{onNewPage:()=>ue(r||"root"),onOpenCardSort:t}),u(fT,{svgRef:C,pan:a,zoom:s,minX:G,nodes:b,edges:T,selectedId:r,setSelectedId:i,onAddChild:ue,onMouseDown:O,onMouseMove:de,onMouseUp:A,isPanning:c,setZoom:o,setPan:l}),P&&u(pT,{node:P,onUpdate:Te,onDelete:F,onClose:()=>i(null)})]})},wT=()=>{const[t,e]=N.useState(void 0),[n,r]=N.useState(null);return N.useEffect(()=>(CI(Na).catch(i=>{console.error("Google redirect sign-in failed:",i),r("Sign-in failed. Please try again.")}),YN(Na,e)),[]),{user:t,authError:n,clearAuthError:()=>r(null)}},pw=()=>xI(Na,uT),xT=()=>QN(Na),ST=async(t,e)=>{const r=oh(ht(ft,"cardSortStudies")).key,i={...t,id:r,ownerId:e,createdAt:new Date().toISOString()};return await rv(ht(ft),{[`cardSortStudies/${r}`]:i,[`users/${e}/studies/${r}`]:!0}),i},Eh=async t=>{const n=(await Fs(ht(ft,`cardSortStudies/${t}`))).val();return n&&{...n,cards:n.cards||[],categories:n.categories||[]}},CT=async(t,e)=>{await rv(ht(ft),{[`cardSortStudies/${t}`]:null,[`cardSortStudySessions/${t}`]:null,[`users/${e}/studies/${t}`]:null})},ET=async t=>{const e=await Fs(ht(ft,`users/${t}/studies`));if(!e.exists())return[];const n=Object.keys(e.val());return(await Promise.all(n.map(i=>Eh(i)))).filter(Boolean)},kT=async(t,e)=>{const n=oh(ht(ft,`cardSortStudySessions/${t}`));return await va(n,e),n.key},bT=(t,e)=>{const n=ht(ft,`cardSortStudySessions/${t}`);return iv(n,i=>{const s=i.val()||{};e(Object.values(s))})},kh=t=>{const e=new URL(window.location.href);return e.search=`?cardsort=${t}`,e.hash="",e.toString()};let NT=0;const IT=()=>`card-${Date.now()}-${++NT}`;let TT=0;const mw=()=>`cat-${Date.now()}-${++TT}`,cr={open:{label:"Open Card Sort",icon:"category",tagline:"Participants create and name their own groups.",bestFor:"Discovering mental models and generating navigation categories."},closed:{label:"Closed Card Sort",icon:"grid_view",tagline:"Participants sort cards into categories you provide.",bestFor:"Validating an existing information architecture."},hybrid:{label:"Hybrid Card Sort",icon:"dashboard_customize",tagline:"Predefined categories, but new ones can be created.",bestFor:"Refining a structure while allowing flexibility."}},gw=["Pricing","Contact Us","Blog","Careers","Product Tour","Case Studies","Help Center","API Documentation","About the Team","Press Kit","Integrations","Security"],yw=["Company","Product","Resources","Support"],bh=(t,e=[])=>(!t||typeof t!="object"||(t.title&&e.push(t.title),(t.children||[]).forEach(n=>bh(n,e))),e),_w=t=>t.map(e=>e.trim()).filter(Boolean).map(e=>({id:IT(),label:e})),vw=(t,e)=>t.map(n=>n.trim()).filter(Boolean).map(n=>({id:mw(),name:n,locked:e})),ww=(t,e,n)=>{const r=e.map(s=>({category:s.name,cards:t.filter(o=>n[o.id]===s.id).map(o=>o.label)})),i=t.filter(s=>!n[s.id]).map(s=>s.label);return{groups:r,unsorted:i}},RT=t=>{const e=r=>`"${String(r).replace(/"/g,'""')}"`,n=[["Category","Card"]];return t.groups.forEach(r=>r.cards.forEach(i=>n.push([r.category,i]))),t.unsorted.forEach(r=>n.push(["(Unsorted)",r])),n.map(r=>r.map(e).join(",")).join(`
`)},Ia=(t,e,n)=>{const r=new Blob([e],{type:n}),i=URL.createObjectURL(r),s=document.createElement("a");s.href=i,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)},ho="w-full rounded-lg border border-[#c6c6c6]/60 bg-white px-4 py-3 text-sm text-black focus:border-black focus:ring-0",yr=({eyebrow:t,title:e,subtitle:n,children:r})=>p("div",{className:"w-full max-w-2xl",children:[u("p",{className:"text-[10px] uppercase tracking-widest text-[#8a8a8a] font-bold mb-2",children:t}),u("h2",{className:"text-2xl font-black mb-2",children:e}),n&&u("p",{className:"text-sm text-[#474747] mb-8",children:n}),!n&&u("div",{className:"mb-8"}),r]}),PT=({onStart:t,onExit:e})=>{var Te;const[n,r]=N.useState(null),[i,s]=N.useState(""),[o,a]=N.useState(""),[l,c]=N.useState(""),[d,h]=N.useState(""),[f,_]=N.useState(!1),[v,S]=N.useState(null),[C,g]=N.useState(0),m=l.split(`
`).map(F=>F.trim()).filter(Boolean),y=d.split(`
`).map(F=>F.trim()).filter(Boolean),x=n!=="open",E=N.useMemo(()=>["type","name","participant","cards",...x?["categories"]:[],"review"],[x]),b=E[C],T=async()=>{_(!0),S(null);try{const F=await Fs(ht(ft,"vellumSitemap")),O=bh(F.val());O.length===0?S("No sitemap pages found to import."):(c(O.join(`
`)),S(`Imported ${O.length} pages from your sitemap.`))}catch(F){console.error("Sitemap import failed:",F),S("Could not load the sitemap from Firebase.")}finally{_(!1)}},P={type:!!n,name:i.trim().length>0,participant:!0,cards:m.length>=2,categories:y.length>=1,review:!0}[b],G=()=>{if(P){if(b==="review"){t({type:n,studyName:i.trim()||"Untitled Study",participant:o.trim(),cardLabels:m,categoryNames:x?y:[]});return}g(F=>Math.min(F+1,E.length-1))}},M=()=>{C===0?e():g(F=>F-1)},ue=F=>{F.key==="Enter"&&!F.shiftKey&&P&&(F.preventDefault(),G())};return p("div",{className:"min-h-screen bg-[#f3f3f4] font-body text-black flex flex-col",children:[p("header",{className:"flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white",children:[p("div",{className:"flex items-center gap-3",children:[u("div",{className:"w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white",children:u("span",{className:"material-symbols-outlined",children:"style"})}),p("div",{children:[u("h1",{className:"text-xl font-black leading-tight",children:"Card Sort Study"}),u("p",{className:"text-[10px] uppercase tracking-widest text-[#474747]",children:"Setup"})]})]}),p("button",{onClick:e,className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:[u("span",{className:"material-symbols-outlined text-base",children:"close"}),"Cancel"]})]}),u("div",{className:"flex items-center gap-2 px-8 py-4",children:E.map((F,O)=>u("div",{className:`h-1.5 rounded-full flex-grow transition-all ${O<=C?"bg-black":"bg-[#dcdcdc]"}`},F))}),p("main",{className:"flex-grow flex items-start justify-center px-8 pt-6 pb-16",children:[b==="type"&&u(yr,{eyebrow:`Step ${C+1} of ${E.length}`,title:"Choose a sort type",children:u("div",{className:"grid grid-cols-1 gap-4",children:Object.entries(cr).map(([F,O])=>p("button",{onClick:()=>{r(F),g(de=>de+1)},className:`text-left rounded-xl p-5 border-2 transition-all ${n===F?"border-black bg-white shadow-md":"border-transparent bg-white/60 hover:bg-white hover:shadow-sm"}`,children:[p("div",{className:"flex items-center justify-between mb-3",children:[u("span",{className:"material-symbols-outlined text-2xl",children:O.icon}),n===F&&u("span",{className:"material-symbols-outlined text-xl",children:"check_circle"})]}),u("h3",{className:"font-black text-base mb-1",children:O.label}),u("p",{className:"text-sm text-[#474747] mb-2",children:O.tagline}),p("p",{className:"text-[11px] uppercase tracking-wide text-[#8a8a8a]",children:["Best for: ",O.bestFor]})]},F))})}),b==="name"&&u(yr,{eyebrow:`Step ${C+1} of ${E.length}`,title:"Name this study",subtitle:"Used to label your export and saved session.",children:u("input",{autoFocus:!0,className:ho,value:i,onChange:F=>s(F.target.value),onKeyDown:ue,placeholder:"e.g. Main Nav Card Sort"})}),b==="participant"&&u(yr,{eyebrow:`Step ${C+1} of ${E.length}`,title:"Who's sorting?",subtitle:"Optional — helps you tell sessions apart later.",children:u("input",{autoFocus:!0,className:ho,value:o,onChange:F=>a(F.target.value),onKeyDown:ue,placeholder:"e.g. P01, Jamie R."})}),b==="cards"&&p(yr,{eyebrow:`Step ${C+1} of ${E.length}`,title:"Add your cards",subtitle:"One card per line. Add at least 2 to continue.",children:[p("div",{className:"flex items-center justify-between mb-3",children:[p("span",{className:"text-[10px] uppercase tracking-widest text-[#474747] font-bold",children:[m.length," card",m.length===1?"":"s"]}),p("div",{className:"flex gap-2",children:[u("button",{onClick:T,disabled:f,className:"px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-black text-white hover:opacity-90 disabled:opacity-50 transition-all",children:f?"Importing…":"Import Sitemap Pages"}),u("button",{onClick:()=>c(gw.join(`
`)),className:"px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Sample Deck"})]})]}),u("textarea",{autoFocus:!0,className:`${ho} h-64 resize-none font-mono text-xs leading-6`,value:l,onChange:F=>c(F.target.value),placeholder:`One card per line, e.g.
Pricing
Contact Us
Blog`}),v&&u("p",{className:"mt-2 text-xs text-[#474747]",children:v})]}),b==="categories"&&p(yr,{eyebrow:`Step ${C+1} of ${E.length}`,title:"Add your categories",subtitle:n==="closed"?"Participants can only sort cards into these categories.":"Participants start with these but can add their own.",children:[p("div",{className:"flex items-center justify-between mb-3",children:[p("span",{className:"text-[10px] uppercase tracking-widest text-[#474747] font-bold",children:[y.length," categor",y.length===1?"y":"ies"]}),u("button",{onClick:()=>h(yw.join(`
`)),className:"px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Sample Categories"})]}),u("textarea",{autoFocus:!0,className:`${ho} h-64 resize-none font-mono text-xs leading-6`,value:d,onChange:F=>h(F.target.value),placeholder:`One category per line, e.g.
Company
Product
Support`})]}),b==="review"&&u(yr,{eyebrow:`Step ${C+1} of ${E.length}`,title:"Ready to sort",subtitle:"Double-check the details, then start the session.",children:u("div",{className:"rounded-xl bg-white shadow-sm divide-y divide-[#e8e8e8]",children:[["Sort type",(Te=cr[n])==null?void 0:Te.label],["Study name",i.trim()||"Untitled Study"],["Participant",o.trim()||"—"],["Cards",`${m.length} card${m.length===1?"":"s"}`],["Categories",x?`${y.length} categor${y.length===1?"y":"ies"}`:"Participant-defined (open sort)"]].map(([F,O])=>p("div",{className:"flex items-center justify-between px-5 py-3.5",children:[u("span",{className:"text-[10px] uppercase tracking-widest text-[#8a8a8a] font-bold",children:F}),u("span",{className:"text-sm font-medium text-right",children:O})]},F))})})]}),p("footer",{className:"sticky bottom-0 bg-white border-t border-[#c6c6c6]/40 px-8 py-4 flex items-center justify-between",children:[p("button",{onClick:M,className:"flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:[u("span",{className:"material-symbols-outlined text-base",children:"arrow_back"}),C===0?"Cancel":"Back"]}),u("button",{onClick:G,disabled:!P,className:"px-8 py-3 bg-black text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:active:scale-100 transition-all",children:b==="review"?"Start Sorting":"Continue"})]})]})},Ri="__unsorted__",xw=({study:t,onFinish:e,onExit:n})=>{const{type:r,studyName:i,cards:s}=t,[o,a]=N.useState(t.initialCategories),[l,c]=N.useState({}),[d,h]=N.useState(null),[f,_]=N.useState(null),[v,S]=N.useState(null),C=N.useRef(0),g=r!=="closed",m=A=>r==="open"||!A.locked,y=s.filter(A=>!l[A.id]),x=s.length-y.length,E=y.length===0,b=(A,z)=>{c(w=>{const R={...w};return z===Ri?delete R[A]:R[A]=z,R}),_(null)},T=(A=null)=>{C.current+=1;const z={id:mw(),name:`Group ${C.current}`,locked:!1};return a(w=>[...w,z]),S(z.id),A&&b(A,z.id),z},P=(A,z)=>{a(w=>w.map(R=>R.id===A?{...R,name:z}:R))},G=A=>{a(z=>z.filter(w=>w.id!==A)),c(z=>{const w={};return Object.entries(z).forEach(([R,L])=>{L!==A&&(w[R]=L)}),w})},M=(A,z)=>{A.dataTransfer.setData("text/plain",z),A.dataTransfer.effectAllowed="move"},ue=(A,z)=>{A.preventDefault(),h(null);const w=A.dataTransfer.getData("text/plain");w&&(z==="__new__"?T(w):b(w,z))},Te=A=>({onDragOver:z=>{z.preventDefault(),z.dataTransfer.dropEffect="move",h(A)},onDragLeave:z=>{z.currentTarget.contains(z.relatedTarget)||h(null)},onDrop:z=>ue(z,A)}),F=A=>{f&&(A==="__new__"?T(f):b(f,A))},O=(A,z)=>{if(f&&f!==A){F(z);return}_(w=>w===A?null:A)},de=({card:A,zoneId:z})=>p("div",{draggable:!0,onDragStart:w=>M(w,A.id),onClick:w=>{w.stopPropagation(),O(A.id,z)},className:`px-4 py-2.5 rounded-lg bg-white text-sm font-medium shadow-sm border cursor-grab active:cursor-grabbing select-none transition-all hover:shadow-md ${f===A.id?"border-black ring-2 ring-black/20":"border-[#c6c6c6]/50"}`,children:[u("span",{className:"material-symbols-outlined text-sm align-middle mr-2 text-[#8a8a8a]",children:"drag_indicator"}),A.label]});return p("div",{className:"min-h-screen bg-[#f3f3f4] font-body text-black flex flex-col",children:[p("header",{className:"flex items-center justify-between px-8 py-4 border-b border-[#c6c6c6]/40 bg-white sticky top-0 z-30",children:[p("div",{className:"flex items-center gap-3",children:[u("div",{className:"w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white",children:u("span",{className:"material-symbols-outlined",children:"style"})}),p("div",{children:[u("h1",{className:"text-lg font-black leading-tight",children:i}),u("p",{className:"text-[10px] uppercase tracking-widest text-[#474747]",children:cr[r].label})]})]}),p("div",{className:"flex items-center gap-6",children:[p("div",{className:"flex items-center gap-3",children:[u("div",{className:"w-40 h-2 rounded-full bg-[#e8e8e8] overflow-hidden",children:u("div",{className:"h-full bg-black transition-all",style:{width:`${x/s.length*100}%`}})}),p("span",{className:"text-xs font-bold tabular-nums",children:[x,"/",s.length]})]}),u("button",{onClick:n,className:"px-4 py-2 rounded-lg text-xs uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:"Quit"}),u("button",{onClick:()=>e(o,l),disabled:x===0,className:"px-6 py-2.5 bg-black text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 disabled:opacity-40 transition-all",children:E?"Finish":`Finish (${y.length} left)`})]})]}),p("div",{className:"flex flex-grow overflow-hidden",children:[p("aside",{...Te(Ri),onClick:()=>F(Ri),className:`w-72 flex-shrink-0 border-r border-[#c6c6c6]/40 p-5 overflow-y-auto transition-colors ${d===Ri?"bg-[#e8e8e8]":""}`,children:[p("h2",{className:"text-[10px] uppercase tracking-widest font-bold text-[#474747] mb-4",children:["Unsorted Cards (",y.length,")"]}),y.length===0?u("p",{className:"text-xs text-[#8a8a8a]",children:"All cards sorted. Drag a card back here to unsort it."}):u("div",{className:"space-y-2",children:y.map(A=>u(de,{card:A,zoneId:Ri},A.id))}),f&&u("p",{className:"mt-4 text-[11px] text-[#8a8a8a]",children:"Card selected — click a group to place it."})]}),p("main",{className:"flex-grow p-6 overflow-auto",children:[o.length===0&&p("div",{className:"text-center py-16",children:[u("span",{className:"material-symbols-outlined text-5xl text-[#c6c6c6]",children:"category"}),u("p",{className:"mt-3 text-sm text-[#474747]",children:"No groups yet. Create one, or drag a card onto “New Group”."})]}),p("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start",children:[o.map(A=>{const z=s.filter(w=>l[w.id]===A.id);return p("section",{...Te(A.id),onClick:()=>F(A.id),className:`rounded-xl border-2 bg-white/70 p-4 min-h-[10rem] transition-all ${d===A.id?"border-black bg-white shadow-md":f?"border-dashed border-[#8a8a8a] cursor-pointer":"border-transparent shadow-sm"}`,children:[p("div",{className:"flex items-center justify-between mb-3 gap-2",children:[v===A.id?u("input",{autoFocus:!0,defaultValue:A.name,onClick:w=>w.stopPropagation(),onBlur:w=>{P(A.id,w.target.value.trim()||A.name),S(null)},onKeyDown:w=>{w.key==="Enter"&&w.target.blur(),w.key==="Escape"&&S(null)},className:"flex-grow rounded-md border border-black px-2 py-1 text-sm font-bold focus:ring-0"}):p("h3",{className:`font-black text-sm truncate ${m(A)?"cursor-text":""}`,title:m(A)?"Click to rename":A.name,onClick:w=>{m(A)&&(w.stopPropagation(),S(A.id))},children:[A.name,A.locked&&u("span",{className:"material-symbols-outlined text-xs ml-1 text-[#8a8a8a] align-middle",children:"lock"})]}),p("div",{className:"flex items-center gap-1 flex-shrink-0",children:[u("span",{className:"text-[10px] font-bold text-[#8a8a8a] tabular-nums",children:z.length}),!A.locked&&g&&u("button",{onClick:w=>{w.stopPropagation(),G(A.id)},title:"Delete group (cards return to unsorted)",className:"w-6 h-6 rounded flex items-center justify-center text-[#8a8a8a] hover:bg-[#e8e8e8] hover:text-black transition-all",children:u("span",{className:"material-symbols-outlined text-base",children:"close"})})]})]}),z.length===0?u("p",{className:"text-xs text-[#c6c6c6] py-4 text-center",children:"Drop cards here"}):u("div",{className:"space-y-2",children:z.map(w=>u(de,{card:w,zoneId:A.id},w.id))})]},A.id)}),g&&p("button",{...Te("__new__"),onClick:A=>{A.stopPropagation(),f?F("__new__"):T()},className:`rounded-xl border-2 border-dashed min-h-[10rem] flex flex-col items-center justify-center gap-2 text-[#8a8a8a] transition-all ${d==="__new__"?"border-black text-black bg-white":"border-[#c6c6c6]/70 hover:border-black hover:text-black"}`,children:[u("span",{className:"material-symbols-outlined text-3xl",children:"add_circle"}),u("span",{className:"text-xs uppercase tracking-widest font-bold",children:"New Group"}),u("span",{className:"text-[10px]",children:"Click, or drop a card here"})]})]})]})]})]})},tm=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"card-sort",AT=({session:t,saveState:e,onRestart:n,onNewStudy:r,onExit:i})=>{const{studyName:s,participant:o,type:a,results:l,completedAt:c}=t,d=()=>Ia(`${tm(s)}-results.csv`,RT(l),"text/csv"),h=()=>Ia(`${tm(s)}-results.json`,JSON.stringify(t,null,2),"application/json");return p("div",{className:"min-h-screen bg-[#f3f3f4] font-body text-black",children:[p("header",{className:"flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white",children:[p("div",{className:"flex items-center gap-3",children:[u("div",{className:"w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white",children:u("span",{className:"material-symbols-outlined",children:"insights"})}),p("div",{children:[u("h1",{className:"text-xl font-black leading-tight",children:s}),p("p",{className:"text-[10px] uppercase tracking-widest text-[#474747]",children:["Results · ",cr[a].label,o?` · ${o}`:""]})]})]}),p("div",{className:"flex items-center gap-2",children:[u("button",{onClick:d,className:"px-4 py-2 rounded-lg text-xs uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Export CSV"}),u("button",{onClick:h,className:"px-4 py-2 rounded-lg text-xs uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Export JSON"})]})]}),p("main",{className:"max-w-5xl mx-auto px-8 py-10",children:[p("div",{className:"flex items-center justify-between mb-8",children:[p("p",{className:"text-sm text-[#474747]",children:["Completed ",new Date(c).toLocaleString()," ·"," ",l.groups.reduce((f,_)=>f+_.cards.length,0)," cards sorted into"," ",l.groups.filter(f=>f.cards.length>0).length," groups",l.unsorted.length>0&&`, ${l.unsorted.length} left unsorted`]}),p("p",{className:"text-xs uppercase tracking-widest font-bold",children:[e==="saving"&&u("span",{className:"text-[#8a8a8a]",children:"Saving to cloud…"}),e==="saved"&&u("span",{className:"text-green-700",children:"✓ Saved to cloud"}),e==="error"&&u("span",{className:"text-red-600",children:"Cloud save failed — use export"})]})]}),p("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start",children:[l.groups.map((f,_)=>p("section",{className:"rounded-xl bg-white shadow-sm p-5",children:[p("div",{className:"flex items-center justify-between mb-3",children:[u("h3",{className:"font-black text-sm",children:f.category}),u("span",{className:"text-[10px] font-bold text-[#8a8a8a] tabular-nums",children:f.cards.length})]}),f.cards.length===0?u("p",{className:"text-xs text-[#c6c6c6]",children:"Empty group"}):u("ul",{className:"space-y-1.5",children:f.cards.map(v=>u("li",{className:"text-sm px-3 py-1.5 rounded-md bg-[#f3f3f4]",children:v},v))})]},`${f.category}-${_}`)),l.unsorted.length>0&&p("section",{className:"rounded-xl border-2 border-dashed border-[#c6c6c6]/70 p-5",children:[u("h3",{className:"font-black text-sm text-[#8a8a8a] mb-3",children:"Unsorted"}),u("ul",{className:"space-y-1.5",children:l.unsorted.map(f=>u("li",{className:"text-sm px-3 py-1.5 rounded-md bg-white text-[#474747]",children:f},f))})]})]}),p("div",{className:"flex items-center justify-center gap-4 mt-12 pb-16",children:[u("button",{onClick:n,className:"px-6 py-3 rounded-lg text-sm uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Sort Again"}),u("button",{onClick:r,className:"px-6 py-3 bg-black text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all",children:"New Study"}),u("button",{onClick:i,className:"px-6 py-3 rounded-lg text-sm uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:"Back to Editor"})]})]})]})},DT=({onExit:t})=>{const[e,n]=N.useState("setup"),[r,i]=N.useState(null),[s,o]=N.useState(null),[a,l]=N.useState("idle"),[c,d]=N.useState(0),h=({type:_,studyName:v,participant:S,cardLabels:C,categoryNames:g})=>{i({type:_,studyName:v,participant:S,cards:_w(C),initialCategories:vw(g,_!=="open")}),d(m=>m+1),n("sort")},f=(_,v)=>{const S={studyName:r.studyName,participant:r.participant,type:r.type,completedAt:new Date().toISOString(),results:ww(r.cards,_,v)};o(S),n("results"),l("saving"),oh(ht(ft,"cardSortSessions"),S).then(()=>l("saved")).catch(C=>{console.error("Failed to save card sort session:",C),l("error")})};return e==="sort"?u(xw,{study:r,onFinish:f,onExit:()=>n("setup")},c):e==="results"?u(AT,{session:s,saveState:a,onRestart:()=>{d(_=>_+1),n("sort")},onNewStudy:()=>n("setup"),onExit:t}):u(PT,{onStart:h,onExit:t})},fo="w-full rounded-lg border border-[#c6c6c6]/60 bg-white px-4 py-3 text-sm text-black focus:border-black focus:ring-0",_r=({eyebrow:t,title:e,subtitle:n,children:r})=>p("div",{className:"w-full max-w-2xl",children:[u("p",{className:"text-[10px] uppercase tracking-widest text-[#8a8a8a] font-bold mb-2",children:t}),u("h2",{className:"text-2xl font-black mb-2",children:e}),n&&u("p",{className:"text-sm text-[#474747] mb-8",children:n}),!n&&u("div",{className:"mb-8"}),r]}),OT=({onCreate:t,onExit:e,creating:n})=>{var F;const[r,i]=N.useState(null),[s,o]=N.useState(""),[a,l]=N.useState(""),[c,d]=N.useState(""),[h,f]=N.useState(""),[_,v]=N.useState(!1),[S,C]=N.useState(null),[g,m]=N.useState(0),y=c.split(`
`).map(O=>O.trim()).filter(Boolean),x=h.split(`
`).map(O=>O.trim()).filter(Boolean),E=r!=="open",b=N.useMemo(()=>["type","name","intention","cards",...E?["categories"]:[],"review"],[E]),T=b[g],P=async()=>{v(!0),C(null);try{const O=await Fs(ht(ft,"vellumSitemap")),de=bh(O.val());de.length===0?C("No sitemap pages found to import."):(d(de.join(`
`)),C(`Imported ${de.length} pages from your sitemap.`))}catch(O){console.error("Sitemap import failed:",O),C("Could not load the sitemap from Firebase.")}finally{v(!1)}},G={type:!!r,name:s.trim().length>0,intention:!0,cards:y.length>=2,categories:x.length>=1,review:!0}[T],M=()=>{if(G){if(T==="review"){t({type:r,studyName:s.trim()||"Untitled Study",intention:a.trim(),cardLabels:y,categoryNames:E?x:[]});return}m(O=>Math.min(O+1,b.length-1))}},ue=()=>{g===0?e():m(O=>O-1)},Te=O=>{O.key==="Enter"&&!O.shiftKey&&G&&(O.preventDefault(),M())};return p("div",{className:"min-h-screen bg-[#f3f3f4] font-body text-black flex flex-col",children:[p("header",{className:"flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white",children:[p("div",{className:"flex items-center gap-3",children:[u("div",{className:"w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white",children:u("span",{className:"material-symbols-outlined",children:"send"})}),p("div",{children:[u("h1",{className:"text-xl font-black leading-tight",children:"Create a Study to Send"}),u("p",{className:"text-[10px] uppercase tracking-widest text-[#474747]",children:"Setup"})]})]}),p("button",{onClick:e,className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:[u("span",{className:"material-symbols-outlined text-base",children:"close"}),"Cancel"]})]}),u("div",{className:"flex items-center gap-2 px-8 py-4",children:b.map((O,de)=>u("div",{className:`h-1.5 rounded-full flex-grow transition-all ${de<=g?"bg-black":"bg-[#dcdcdc]"}`},O))}),p("main",{className:"flex-grow flex items-start justify-center px-8 pt-6 pb-16",children:[T==="type"&&u(_r,{eyebrow:`Step ${g+1} of ${b.length}`,title:"Choose a sort type",children:u("div",{className:"grid grid-cols-1 gap-4",children:Object.entries(cr).map(([O,de])=>p("button",{onClick:()=>{i(O),m(A=>A+1)},className:`text-left rounded-xl p-5 border-2 transition-all ${r===O?"border-black bg-white shadow-md":"border-transparent bg-white/60 hover:bg-white hover:shadow-sm"}`,children:[p("div",{className:"flex items-center justify-between mb-3",children:[u("span",{className:"material-symbols-outlined text-2xl",children:de.icon}),r===O&&u("span",{className:"material-symbols-outlined text-xl",children:"check_circle"})]}),u("h3",{className:"font-black text-base mb-1",children:de.label}),u("p",{className:"text-sm text-[#474747] mb-2",children:de.tagline}),p("p",{className:"text-[11px] uppercase tracking-wide text-[#8a8a8a]",children:["Best for: ",de.bestFor]})]},O))})}),T==="name"&&u(_r,{eyebrow:`Step ${g+1} of ${b.length}`,title:"Name this study",subtitle:"Shown to you in your studies list, and in the results dashboard.",children:u("input",{autoFocus:!0,className:fo,value:s,onChange:O=>o(O.target.value),onKeyDown:Te,placeholder:"e.g. Main Nav Card Sort"})}),T==="intention"&&u(_r,{eyebrow:`Step ${g+1} of ${b.length}`,title:"Describe the intention",subtitle:"Tell participants what you're testing and why — this is shown before they start sorting.",children:u("textarea",{autoFocus:!0,className:`${fo} h-40 resize-none leading-6`,value:a,onChange:O=>l(O.target.value),placeholder:"e.g. We're redesigning our site navigation and want to understand how you'd naturally group these pages. There are no right or wrong answers — sort the cards however makes sense to you."})}),T==="cards"&&p(_r,{eyebrow:`Step ${g+1} of ${b.length}`,title:"Add your cards",subtitle:"One card per line. Add at least 2 to continue.",children:[p("div",{className:"flex items-center justify-between mb-3",children:[p("span",{className:"text-[10px] uppercase tracking-widest text-[#474747] font-bold",children:[y.length," card",y.length===1?"":"s"]}),p("div",{className:"flex gap-2",children:[u("button",{onClick:P,disabled:_,className:"px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-black text-white hover:opacity-90 disabled:opacity-50 transition-all",children:_?"Importing…":"Import Sitemap Pages"}),u("button",{onClick:()=>d(gw.join(`
`)),className:"px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Sample Deck"})]})]}),u("textarea",{autoFocus:!0,className:`${fo} h-64 resize-none font-mono text-xs leading-6`,value:c,onChange:O=>d(O.target.value),placeholder:`One card per line, e.g.
Pricing
Contact Us
Blog`}),S&&u("p",{className:"mt-2 text-xs text-[#474747]",children:S})]}),T==="categories"&&p(_r,{eyebrow:`Step ${g+1} of ${b.length}`,title:"Add your categories",subtitle:r==="closed"?"Participants can only sort cards into these categories.":"Participants start with these but can add their own.",children:[p("div",{className:"flex items-center justify-between mb-3",children:[p("span",{className:"text-[10px] uppercase tracking-widest text-[#474747] font-bold",children:[x.length," categor",x.length===1?"y":"ies"]}),u("button",{onClick:()=>f(yw.join(`
`)),className:"px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Sample Categories"})]}),u("textarea",{autoFocus:!0,className:`${fo} h-64 resize-none font-mono text-xs leading-6`,value:h,onChange:O=>f(O.target.value),placeholder:`One category per line, e.g.
Company
Product
Support`})]}),T==="review"&&u(_r,{eyebrow:`Step ${g+1} of ${b.length}`,title:"Ready to create",subtitle:"You'll get a shareable link on the next screen.",children:u("div",{className:"rounded-xl bg-white shadow-sm divide-y divide-[#e8e8e8]",children:[["Sort type",(F=cr[r])==null?void 0:F.label],["Study name",s.trim()||"Untitled Study"],["Intention",a.trim()||"—"],["Cards",`${y.length} card${y.length===1?"":"s"}`],["Categories",E?`${x.length} categor${x.length===1?"y":"ies"}`:"Participant-defined (open sort)"]].map(([O,de])=>p("div",{className:"flex items-start justify-between px-5 py-3.5 gap-6",children:[u("span",{className:"text-[10px] uppercase tracking-widest text-[#8a8a8a] font-bold flex-shrink-0 pt-0.5",children:O}),u("span",{className:"text-sm font-medium text-right",children:de})]},O))})})]}),p("footer",{className:"sticky bottom-0 bg-white border-t border-[#c6c6c6]/40 px-8 py-4 flex items-center justify-between",children:[p("button",{onClick:ue,className:"flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:[u("span",{className:"material-symbols-outlined text-base",children:"arrow_back"}),g===0?"Cancel":"Back"]}),u("button",{onClick:M,disabled:!G||n,className:"px-8 py-3 bg-black text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:active:scale-100 transition-all",children:T==="review"?n?"Creating…":"Create Study & Get Link":"Continue"})]})]})},LT=({study:t,link:e,onViewResults:n,onDone:r})=>{const[i,s]=N.useState(!1),o=async()=>{try{await navigator.clipboard.writeText(e),s(!0),setTimeout(()=>s(!1),2e3)}catch(a){console.error("Copy failed:",a)}};return u("div",{className:"min-h-screen bg-[#f3f3f4] font-body text-black flex items-center justify-center px-8",children:p("div",{className:"w-full max-w-xl text-center",children:[u("div",{className:"w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white mx-auto mb-6",children:u("span",{className:"material-symbols-outlined text-3xl",children:"check"})}),p("h1",{className:"text-2xl font-black mb-2",children:["“",t.studyName,"” is ready to send"]}),p("p",{className:"text-sm text-[#474747] mb-8",children:["Share this link with participants. Each person who opens it gets your intention statement, then sorts the ",t.cards.length," cards on their own device."]}),p("div",{className:"flex items-center gap-2 bg-white rounded-lg border border-[#c6c6c6]/60 p-2 mb-3",children:[u("input",{readOnly:!0,value:e,onFocus:a=>a.target.select(),className:"flex-grow bg-transparent px-3 py-2 text-sm text-[#474747] focus:outline-none"}),u("button",{onClick:o,className:"flex-shrink-0 px-4 py-2 bg-black text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all",children:i?"Copied":"Copy Link"})]}),u("p",{className:"text-xs text-[#8a8a8a] mb-10",children:"Results — including the similarity matrix, dendrogram, and category frequency analysis — build up automatically as responses come in."}),p("div",{className:"flex items-center justify-center gap-4",children:[u("button",{onClick:r,className:"px-6 py-3 rounded-lg text-sm uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Back to Studies"}),u("button",{onClick:n,className:"px-6 py-3 bg-black text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all",children:"View Results"})]})]})})},MT=(t,e)=>{const n=t.length,r=Array.from({length:n},()=>new Array(n).fill(0)),i=Array.from({length:n},()=>new Array(n).fill(0));return e.forEach(s=>{var l;const o=(((l=s.results)==null?void 0:l.groups)||[]).filter(c=>c.cards.length>0),a=new Map;o.forEach((c,d)=>c.cards.forEach(h=>a.set(h,d)));for(let c=0;c<n;c++)if(a.has(t[c]))for(let d=c+1;d<n;d++)a.has(t[d])&&(i[c][d]++,i[d][c]++,a.get(t[c])===a.get(t[d])&&(r[c][d]++,r[d][c]++))}),Array.from({length:n},(s,o)=>Array.from({length:n},(a,l)=>o===l?1:i[o][l]>0?r[o][l]/i[o][l]:0))},FT=(t,e)=>{if(e.length===0)return null;if(e.length===1)return{type:"leaf",label:e[0],indices:[0]};let n=e.map((i,s)=>({type:"leaf",label:i,indices:[s]}));const r=(i,s)=>{let o=0,a=0;return i.indices.forEach(l=>{s.indices.forEach(c=>{o+=1-t[l][c],a++})}),o/a};for(;n.length>1;){let i=null;for(let c=0;c<n.length;c++)for(let d=c+1;d<n.length;d++){const h=r(n[c],n[d]);(!i||h<i.d)&&(i={i:c,j:d,d:h})}const{i:s,j:o,d:a}=i,l={type:"node",left:n[s],right:n[o],distance:a,indices:[...n[s].indices,...n[o].indices]};n=n.filter((c,d)=>d!==s&&d!==o),n.push(l)}return n[0]},UT=t=>{const e=new Map;return t.forEach(n=>{var r;(((r=n.results)==null?void 0:r.groups)||[]).filter(i=>i.cards.length>0).forEach(i=>{const s=i.category.trim().toLowerCase();e.has(s)||e.set(s,{name:i.category.trim(),count:0,cardCounts:new Map});const o=e.get(s);o.count++,i.cards.forEach(a=>o.cardCounts.set(a,(o.cardCounts.get(a)||0)+1))})}),Array.from(e.values()).map(n=>({name:n.name,count:n.count,topCards:Array.from(n.cardCounts.entries()).sort((r,i)=>i[1]-r[1]).map(([r,i])=>({label:r,count:i}))})).sort((n,r)=>r.count-n.count)},Po=["#cde2fb","#9ec5f4","#6da7ec","#3987e5","#2a78d6","#1c5cab","#104281","#0d366b"],$T=t=>{if(t<=0)return"#fcfcfb";const e=Math.min(Po.length-1,Math.floor(t*Po.length));return Po[e]},tt=26,zT=({labels:t,matrix:e})=>{const[n,r]=N.useState(null);return p("div",{children:[p("div",{className:"flex items-center justify-between mb-3",children:[u("p",{className:"text-xs text-[#474747]",children:"Share of participants who placed each pair of cards in the same group."}),p("div",{className:"flex items-center gap-2 text-[10px] text-[#8a8a8a] uppercase tracking-widest",children:[u("span",{children:"Low"}),u("div",{className:"flex",children:Po.map(i=>u("div",{style:{width:12,height:12,background:i}},i))}),u("span",{children:"High"})]})]}),u("div",{className:"overflow-auto rounded-lg border border-[#e1e0d9]",style:{maxHeight:560},children:p("table",{className:"border-collapse",style:{tableLayout:"fixed",width:"max-content"},children:[u("thead",{children:p("tr",{children:[u("th",{className:"sticky top-0 left-0 z-[60] bg-[#fcfcfb]",style:{width:tt*6,minWidth:tt*6}}),t.map((i,s)=>u("th",{className:"sticky top-0 bg-[#fcfcfb] px-0 relative",style:{width:tt,minWidth:tt,maxWidth:tt,height:tt*6,zIndex:10+(t.length-s)},children:u("div",{className:"absolute text-[10px] font-medium text-[#52514e] whitespace-nowrap origin-bottom-left",style:{bottom:6,left:tt/2+4,transform:"rotate(-55deg)"},title:i,children:i})},i))]})}),u("tbody",{children:t.map((i,s)=>p("tr",{children:[u("th",{className:"sticky left-0 z-10 bg-[#fcfcfb] text-[10px] font-medium text-[#52514e] text-right pr-2 whitespace-nowrap",style:{width:tt*6,minWidth:tt*6,height:tt},title:i,children:i}),t.map((o,a)=>{const l=e[s][a],c=s===a,d=n&&(n.i===s||n.j===s)&&(n.i===a||n.j===a);return u("td",{onMouseEnter:()=>r({i:s,j:a}),onMouseLeave:()=>r(null),title:c?i:`${i} + ${o}: ${Math.round(l*100)}%`,style:{width:tt,height:tt,background:c?"#e1e0d9":$T(l),outline:d&&!c?"2px solid #0b0b0b":"none",outlineOffset:-2}},o)})]},i))})]})})]})},ic=26,BT=200,sc=420,oc=16,Iu=(t,e=[])=>t?t.type==="leaf"?(e.push(t.label),e):(Iu(t.left,e),Iu(t.right,e),e):e,jT=({labels:t,matrix:e})=>{const n=N.useMemo(()=>FT(e,t),[e,t]),{segments:r,leafPositions:i,maxDistance:s}=N.useMemo(()=>{if(!n)return{segments:[],leafPositions:[],maxDistance:1};const l=Iu(n),c=new Map(l.map((C,g)=>[C,g*ic+ic/2]));let d=0;const h=C=>{!C||C.type==="leaf"||(d=Math.max(d,C.distance),h(C.left),h(C.right))};h(n),d=d||1;const f=C=>sc-oc-C/d*(sc-oc*2),_=[],v=[],S=C=>{if(C.type==="leaf"){const x=c.get(C.label);return v.push({label:C.label,x:f(0),y:x}),{x:f(0),y:x}}const g=S(C.left),m=S(C.right),y=f(C.distance);return _.push({x1:g.x,y1:g.y,x2:y,y2:g.y}),_.push({x1:m.x,y1:m.y,x2:y,y2:m.y}),_.push({x1:y,y1:g.y,x2:y,y2:m.y}),{x:y,y:(g.y+m.y)/2}};return S(n),{segments:_,leafPositions:v,maxDistance:d}},[n]);if(!n)return null;const o=t.length*ic+oc,a=sc+BT;return p("div",{children:[u("p",{className:"text-xs text-[#474747] mb-3",children:"Cards that join close to their labels (right) were sorted together often; joins pulled further left happened only because every card has to merge eventually."}),u("div",{className:"overflow-auto rounded-lg border border-[#e1e0d9] bg-[#fcfcfb]",style:{maxHeight:560},children:u("svg",{width:a,height:o,role:"img","aria-label":"Card sort dendrogram",children:p("g",{children:[r.map((l,c)=>u("line",{x1:l.x1,y1:l.y1,x2:l.x2,y2:l.y2,stroke:"#898781",strokeWidth:2,strokeLinecap:"round"},c)),i.map(l=>u("text",{x:l.x+8,y:l.y,dominantBaseline:"middle",fontSize:11,fill:"#0b0b0b",children:l.label},l.label))]})})})]})},WT="#2a78d6",VT=({frequencies:t,sessionCount:e})=>{if(t.length===0)return u("p",{className:"text-sm text-[#8a8a8a]",children:"No groups have been created yet."});const n=Math.max(...t.map(r=>r.count));return p("div",{children:[p("p",{className:"text-xs text-[#474747] mb-5",children:["How often each group name was used across ",e," participant",e===1?"":"s",", and which cards ended up there most."]}),u("div",{className:"space-y-5",children:t.map(r=>p("div",{children:[p("div",{className:"flex items-baseline justify-between mb-1.5",children:[u("span",{className:"text-sm font-bold",children:r.name}),p("span",{className:"text-xs text-[#52514e] tabular-nums",children:[r.count," participant",r.count===1?"":"s"]})]}),u("div",{className:"h-2 rounded-full bg-[#e1e0d9] overflow-hidden mb-2.5",children:u("div",{className:"h-full rounded-full",style:{width:`${r.count/n*100}%`,background:WT}})}),u("div",{className:"flex flex-wrap gap-1.5",children:r.topCards.slice(0,8).map(i=>p("span",{title:`${i.label}: placed here ${i.count} time${i.count===1?"":"s"}`,className:"text-[11px] px-2.5 py-1 rounded-full bg-[#f3f3f4] text-[#474747]",children:[i.label,p("span",{className:"text-[#8a8a8a]",children:[" · ",i.count]})]},i.label))})]},r.name))})]})},nm=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"study",HT=[{key:"matrix",label:"Similarity Matrix",icon:"grid_on"},{key:"dendrogram",label:"Dendrogram",icon:"account_tree"},{key:"frequency",label:"Category Frequency",icon:"bar_chart"}],GT=({studyId:t,onExit:e})=>{const[n,r]=N.useState(null),[i,s]=N.useState([]),[o,a]=N.useState("matrix"),[l,c]=N.useState(!1);N.useEffect(()=>{Eh(t).then(r).catch(g=>console.error("Failed to load study:",g))},[t]),N.useEffect(()=>bT(t,s),[t]);const d=N.useMemo(()=>((n==null?void 0:n.cards)||[]).map(g=>g.label),[n]),h=N.useMemo(()=>d.length?MT(d,i):[],[d,i]),f=N.useMemo(()=>UT(i),[i]),_=async()=>{try{await navigator.clipboard.writeText(kh(t)),c(!0),setTimeout(()=>c(!1),2e3)}catch(g){console.error("Copy failed:",g)}},v=()=>Ia(`${nm(n.studyName)}-sessions.json`,JSON.stringify({study:n,sessions:i},null,2),"application/json"),S=()=>{const g=y=>`"${String(y).replace(/"/g,'""')}"`,m=[["",...d].map(g)];d.forEach((y,x)=>{m.push([y,...h[x].map(E=>Math.round(E*100))].map(g))}),Ia(`${nm(n.studyName)}-similarity-matrix.csv`,m.map(y=>y.join(",")).join(`
`),"text/csv")};if(!n)return u("div",{className:"min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body text-sm text-[#474747]",children:"Loading results…"});const C=i.length>=2;return p("div",{className:"min-h-screen bg-[#f3f3f4] font-body text-black",children:[p("header",{className:"flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white",children:[p("div",{className:"flex items-center gap-3",children:[u("div",{className:"w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white",children:u("span",{className:"material-symbols-outlined",children:"insights"})}),p("div",{children:[u("h1",{className:"text-xl font-black leading-tight",children:n.studyName}),p("p",{className:"text-[10px] uppercase tracking-widest text-[#474747]",children:[i.length," response",i.length===1?"":"s"," · Live"]})]})]}),p("div",{className:"flex items-center gap-2",children:[u("button",{onClick:_,className:"px-4 py-2 rounded-lg text-xs uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:l?"Link Copied":"Copy Share Link"}),u("button",{onClick:e,className:"px-4 py-2 rounded-lg text-xs uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:"Back to Studies"})]})]}),p("main",{className:"max-w-5xl mx-auto px-8 py-10",children:[n.intention&&u("p",{className:"text-sm text-[#474747] bg-white rounded-lg p-4 mb-8 whitespace-pre-wrap",children:n.intention}),!C&&p("div",{className:"rounded-lg border-2 border-dashed border-[#c6c6c6]/70 p-6 text-center mb-8",children:[u("span",{className:"material-symbols-outlined text-3xl text-[#8a8a8a]",children:"hourglass_top"}),u("p",{className:"mt-2 text-sm text-[#474747]",children:i.length===0?"No responses yet. Share the link above to start collecting sorts.":"Waiting on at least one more response — the similarity matrix and dendrogram need 2+ participants to be meaningful."})]}),p("div",{className:"flex items-center justify-between mb-5",children:[u("div",{className:"flex gap-1 bg-white rounded-lg p-1 shadow-sm",children:HT.map(g=>p("button",{onClick:()=>a(g.key),className:`flex items-center gap-2 px-4 py-2 rounded-md text-xs uppercase tracking-widest font-bold transition-all ${o===g.key?"bg-black text-white":"text-[#474747] hover:bg-[#e8e8e8]"}`,children:[u("span",{className:"material-symbols-outlined text-base",children:g.icon}),g.label]},g.key))}),p("div",{className:"flex gap-2",children:[u("button",{onClick:S,disabled:!C,className:"px-3 py-2 rounded-lg text-[10px] uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] disabled:opacity-40 transition-all",children:"Export Matrix CSV"}),u("button",{onClick:v,disabled:i.length===0,className:"px-3 py-2 rounded-lg text-[10px] uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] disabled:opacity-40 transition-all",children:"Export Raw JSON"})]})]}),p("section",{className:"rounded-xl bg-white shadow-sm p-6",children:[o==="matrix"&&(C?u(zT,{labels:d,matrix:h}):u("p",{className:"text-sm text-[#8a8a8a]",children:"Not enough responses yet."})),o==="dendrogram"&&(C?u(jT,{labels:d,matrix:h}):u("p",{className:"text-sm text-[#8a8a8a]",children:"Not enough responses yet."})),o==="frequency"&&u(VT,{frequencies:f,sessionCount:i.length})]})]})]})},KT=({study:t,onViewResults:e,onDelete:n})=>{var l,c;const[r,i]=N.useState(!1),[s,o]=N.useState(null);N.useEffect(()=>{let d=!1;return Fs(ht(ft,`cardSortStudySessions/${t.id}`)).then(h=>{d||o(h.exists()?Object.keys(h.val()).length:0)}),()=>{d=!0}},[t.id]);const a=async d=>{d.stopPropagation();try{await navigator.clipboard.writeText(kh(t.id)),i(!0),setTimeout(()=>i(!1),2e3)}catch(h){console.error("Copy failed:",h)}};return p("div",{onClick:()=>e(t.id),className:"flex items-center justify-between bg-white rounded-xl shadow-sm px-5 py-4 cursor-pointer hover:shadow-md transition-all",children:[p("div",{className:"min-w-0",children:[u("h3",{className:"font-bold text-sm truncate",children:t.studyName}),p("p",{className:"text-[10px] uppercase tracking-widest text-[#8a8a8a] mt-1",children:[(l=cr[t.type])==null?void 0:l.label," · ",((c=t.cards)==null?void 0:c.length)??0," cards ·"," ",s===null?"…":s," response",s===1?"":"s"]})]}),p("div",{className:"flex items-center gap-2 flex-shrink-0",children:[u("button",{onClick:a,className:"px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-[#f3f3f4] hover:bg-[#e8e8e8] transition-all",children:r?"Copied":"Copy Link"}),u("button",{onClick:d=>{d.stopPropagation(),n(t.id)},title:"Delete study",className:"w-8 h-8 rounded-lg flex items-center justify-center text-[#8a8a8a] hover:bg-[#f3f3f4] hover:text-black transition-all",children:u("span",{className:"material-symbols-outlined text-base",children:"delete"})})]})]})},qT=({user:t})=>t===void 0?u("span",{className:"text-xs text-[#8a8a8a]",children:"…"}):t?p("div",{className:"flex items-center gap-3",children:[t.photoURL?u("img",{src:t.photoURL,alt:"",className:"w-7 h-7 rounded-full",referrerPolicy:"no-referrer"}):u("div",{className:"w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold",children:(t.displayName||t.email||"?")[0].toUpperCase()}),u("span",{className:"text-xs text-[#474747] max-w-[10rem] truncate hidden sm:inline",children:t.displayName||t.email}),u("button",{onClick:()=>xT().catch(e=>console.error("Sign-out failed:",e)),className:"text-[10px] uppercase tracking-widest text-[#8a8a8a] hover:text-black transition-all",children:"Sign Out"})]}):p("button",{onClick:()=>pw().catch(e=>console.error("Sign-in failed:",e)),className:"flex items-center gap-2 px-4 py-2 rounded-lg text-xs uppercase tracking-widest bg-black text-white hover:opacity-90 transition-all",children:[u("span",{className:"material-symbols-outlined text-base",children:"login"}),"Sign In with Google"]}),po="cardSortPostLoginIntent",YT=({onExit:t})=>{const{user:e,authError:n}=wT(),[r,i]=N.useState("hub"),[s,o]=N.useState([]),[a,l]=N.useState(!0),[c,d]=N.useState(!1),[h,f]=N.useState(null),[_,v]=N.useState(null),S=N.useCallback(()=>{if(!e){o([]),l(!1);return}l(!0),ET(e.uid).then(y=>{o(y),l(!1)})},[e]);N.useEffect(()=>{r==="hub"&&S()},[r,S]),N.useEffect(()=>{r==="create"&&e===null&&i("hub")},[r,e]),N.useEffect(()=>{e&&sessionStorage.getItem(po)==="create"&&(sessionStorage.removeItem(po),i("create"))},[e]);const C=async({type:y,studyName:x,intention:E,cardLabels:b,categoryNames:T})=>{if(e){d(!0);try{const P=await ST({type:y,studyName:x,intention:E,cards:_w(b),categories:vw(T,y!=="open")},e.uid);f(P),i("created")}catch(P){console.error("Failed to create study:",P)}finally{d(!1)}}},g=async y=>{if(e&&window.confirm("Delete this study and all of its responses? This can't be undone."))try{await CT(y,e.uid),o(x=>x.filter(E=>E.id!==y))}catch(x){console.error("Failed to delete study:",x)}},m=()=>{if(e){i("create");return}sessionStorage.setItem(po,"create"),pw().catch(y=>{console.error("Sign-in failed:",y),sessionStorage.removeItem(po)})};return r==="quick"?u(DT,{onExit:()=>i("hub")}):r==="create"?e?u(OT,{onCreate:C,onExit:()=>i("hub"),creating:c}):null:r==="created"&&h?u(LT,{study:h,link:kh(h.id),onDone:()=>i("hub"),onViewResults:()=>{v(h.id),i("results")}}):r==="results"&&_?u(GT,{studyId:_,onExit:()=>i("hub")}):p("div",{className:"min-h-screen bg-[#f3f3f4] font-body text-black",children:[p("header",{className:"flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white",children:[p("div",{className:"flex items-center gap-3",children:[u("div",{className:"w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white",children:u("span",{className:"material-symbols-outlined",children:"style"})}),p("div",{children:[u("h1",{className:"text-xl font-black leading-tight",children:"Card Sort"}),u("p",{className:"text-[10px] uppercase tracking-widest text-[#474747]",children:"Studies"})]})]}),p("div",{className:"flex items-center gap-5",children:[u(qT,{user:e}),p("button",{onClick:t,className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:[u("span",{className:"material-symbols-outlined text-base",children:"arrow_back"}),"Back to Editor"]})]})]}),p("main",{className:"max-w-3xl mx-auto px-8 py-10",children:[n&&u("p",{className:"text-xs text-red-600 bg-red-50 rounded-lg px-4 py-2.5 mb-6",children:n}),p("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-12",children:[p("button",{onClick:m,className:"text-left rounded-xl p-6 bg-black text-white hover:opacity-90 transition-all",children:[u("span",{className:"material-symbols-outlined text-2xl mb-3 block",children:e?"send":"login"}),u("h2",{className:"font-black text-base mb-1",children:e?"Create a Study to Send":"Sign In to Create a Study"}),u("p",{className:"text-sm text-white/70",children:e?"Describe your intention, define the deck, and get a link to send to participants. Collects a similarity matrix, dendrogram, and category frequency analysis as responses come in.":"Studies and their responses are saved to your Google account, so you can come back to results from any device. Click to sign in and get started."})]}),p("button",{onClick:()=>i("quick"),className:"text-left rounded-xl p-6 bg-white hover:shadow-md transition-all",children:[u("span",{className:"material-symbols-outlined text-2xl mb-3 block",children:"bolt"}),u("h2",{className:"font-black text-base mb-1",children:"Quick Sort (This Device)"}),u("p",{className:"text-sm text-[#474747]",children:"Sort a deck yourself, right now, and see your own results immediately. No sign-in needed."})]})]}),u("h2",{className:"text-sm uppercase tracking-widest font-bold mb-4",children:"My Studies"}),e?a?u("p",{className:"text-sm text-[#8a8a8a]",children:"Loading…"}):s.length===0?u("p",{className:"text-sm text-[#8a8a8a]",children:"You haven't created a study yet. Create one above to get a shareable link."}):u("div",{className:"space-y-3",children:s.map(y=>u(KT,{study:y,onViewResults:x=>{v(x),i("results")},onDelete:g},y.id))}):u("p",{className:"text-sm text-[#8a8a8a]",children:"Sign in to see the studies you've created."})]})]})},QT="w-full rounded-lg border border-[#c6c6c6]/60 bg-white px-4 py-3 text-sm text-black focus:border-black focus:ring-0",XT=({studyId:t})=>{const[e,n]=N.useState("loading"),[r,i]=N.useState(null),[s,o]=N.useState("");N.useEffect(()=>{let l=!1;return Eh(t).then(c=>{l||(c?(i(c),n("intro")):n("error"))}).catch(c=>{console.error("Failed to load study:",c),l||n("error")}),()=>{l=!0}},[t]);const a=(l,c)=>{const d=ww(r.cards,l,c);kT(t,{participant:s.trim(),completedAt:new Date().toISOString(),results:d}).catch(h=>console.error("Failed to save session:",h)),n("thanks")};return e==="loading"?u("div",{className:"min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body text-sm text-[#474747]",children:"Loading study…"}):e==="error"?u("div",{className:"min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body px-8",children:p("div",{className:"text-center max-w-md",children:[u("span",{className:"material-symbols-outlined text-4xl text-[#8a8a8a]",children:"link_off"}),u("h1",{className:"text-lg font-black mt-4 mb-2",children:"This study link isn't valid"}),u("p",{className:"text-sm text-[#474747]",children:"It may have been deleted, or the link was copied incorrectly. Check with whoever sent it to you."})]})}):e==="sort"?u(xw,{study:{type:r.type,studyName:r.studyName,cards:r.cards,initialCategories:r.categories},onFinish:a,onExit:()=>n("intro")}):e==="thanks"?u("div",{className:"min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body px-8",children:p("div",{className:"text-center max-w-md",children:[u("div",{className:"w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white mx-auto mb-6",children:u("span",{className:"material-symbols-outlined text-3xl",children:"favorite"})}),u("h1",{className:"text-xl font-black mb-2",children:"Thanks for taking part"}),p("p",{className:"text-sm text-[#474747]",children:["Your responses to “",r.studyName,"” have been submitted. You can close this tab."]})]})}):u("div",{className:"min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body px-8",children:p("div",{className:"w-full max-w-xl bg-white rounded-2xl shadow-sm p-8",children:[u("p",{className:"text-[10px] uppercase tracking-widest text-[#8a8a8a] font-bold mb-2",children:"Card Sort"}),u("h1",{className:"text-2xl font-black mb-4",children:r.studyName}),r.intention&&u("p",{className:"text-sm text-[#474747] leading-relaxed mb-6 whitespace-pre-wrap",children:r.intention}),p("p",{className:"text-xs text-[#8a8a8a] mb-6",children:["You'll sort ",r.cards.length," cards into groups",r.type==="closed"?" that are already provided.":r.type==="hybrid"?", starting from some provided groups — feel free to add your own.":" that you create and name yourself."]}),p("label",{className:"block mb-6",children:[u("span",{className:"text-[10px] uppercase tracking-widest text-[#474747] font-bold",children:"Your name (optional)"}),u("input",{className:`${QT} mt-2`,value:s,onChange:l=>o(l.target.value),placeholder:"e.g. Jamie R."})]}),u("button",{onClick:()=>n("sort"),className:"w-full py-3 bg-black text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all",children:"Begin Sorting"})]})})},cl="rounded-full font-semibold transition-all duration-200 active:scale-95 bg-[#171512] text-white hover:opacity-90",Nh="rounded-full font-semibold transition-all duration-200 active:scale-95 border-[1.5px] border-[#171512]/15 text-[#171512] hover:bg-[#171512]/5",JT=[{label:"Product",href:"#product"},{label:"Pricing",href:"#pricing"},{label:"Integrations",href:"#integrations"},{label:"Resources",href:"#footer"}],ZT=t=>{var e;(e=document.querySelector(t))==null||e.scrollIntoView({behavior:"smooth",block:"start"})},eR=({onGetStarted:t})=>{const[e,n]=N.useState(!1);return N.useEffect(()=>{const r=()=>n(window.scrollY>24);return r(),window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]),u("header",{className:`sticky top-0 z-50 transition-all duration-300 ${e?"bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#ECE6D9] shadow-[0_1px_0_rgba(23,21,18,0.03)]":"bg-transparent border-b border-transparent"}`,children:p("nav",{className:"max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between",children:[p("a",{href:"#top",className:"flex items-center gap-2.5",children:[u("span",{className:"w-8 h-8 rounded-xl bg-[#171512] flex items-center justify-center",children:u("span",{className:"material-symbols-outlined text-white text-[18px]",children:"hub"})}),u("span",{className:"text-[17px] font-extrabold tracking-tight text-[#171512]",children:"Sortly"})]}),u("div",{className:"hidden md:flex items-center gap-9",children:JT.map(r=>u("button",{onClick:()=>ZT(r.href),className:"text-[14px] font-medium text-[#4A4540] hover:text-[#171512] transition-colors",children:r.label},r.label))}),p("div",{className:"flex items-center gap-5",children:[u("button",{onClick:t,className:"hidden sm:inline text-[14px] font-medium text-[#4A4540] hover:text-[#171512] transition-colors",children:"Log in"}),u("button",{onClick:t,className:`${cl} px-5 py-2.5 text-[13px]`,children:"Get started"})]})]})})},ul=({label:t,right:e,children:n,className:r=""})=>p("div",{className:`rounded-2xl bg-white border border-[#ECE6D9] overflow-hidden ${r}`,children:[p("div",{className:"flex items-center justify-between px-4 py-3 border-b border-[#ECE6D9] bg-[#FFFDF9]",children:[p("div",{className:"flex items-center gap-3",children:[p("div",{className:"flex gap-1.5",children:[u("span",{className:"w-2.5 h-2.5 rounded-full bg-[#E7E2D6]"}),u("span",{className:"w-2.5 h-2.5 rounded-full bg-[#E7E2D6]"}),u("span",{className:"w-2.5 h-2.5 rounded-full bg-[#E7E2D6]"})]}),u("span",{className:"text-[11px] font-medium text-[#8C8577]",children:t})]}),e]}),n]}),tR=({tone:t="accent"})=>u("span",{className:`w-1.5 h-1.5 rounded-full flex-shrink-0 ${t==="accent"?"bg-[#B5652F]":t==="muted"?"bg-[#D8D2C4]":"bg-[#171512]"}`}),Sw=({icon:t,title:e,sub:n,style:r,accent:i=!1})=>p("div",{className:`absolute -translate-x-1/2 -translate-y-1/2 w-[132px] rounded-xl border bg-white px-3 py-2.5 shadow-[0_8px_20px_-8px_rgba(23,21,18,0.15)] ${i?"border-[#B5652F]/40":"border-[#ECE6D9]"}`,style:r,children:[p("div",{className:"flex items-center gap-1.5 mb-1",children:[u("span",{className:`material-symbols-outlined text-[13px] ${i?"text-[#B5652F]":"text-[#8C8577]"}`,children:t}),u("span",{className:"text-[11px] font-semibold text-[#171512] truncate",children:e})]}),p("div",{className:"flex items-center gap-1",children:[u(tR,{tone:i?"accent":"muted"}),u("span",{className:"text-[9px] text-[#B0AA9C] truncate",children:n})]})]}),Le=({label:t,faded:e=!1})=>p("div",{className:`flex items-center gap-1.5 rounded-lg border bg-white px-2.5 py-2 text-[11px] font-medium ${e?"border-dashed border-[#E7E2D6] text-[#B0AA9C]":"border-[#ECE6D9] text-[#171512]"}`,children:[u("span",{className:"material-symbols-outlined text-[12px] text-[#D8D2C4]",children:"drag_indicator"}),u("span",{className:"truncate",children:t})]}),Yi=({title:t,count:e,children:n})=>p("div",{className:"rounded-lg border border-dashed border-[#E7E2D6] bg-[#FFFDF9] p-2.5 flex-1 min-w-0",children:[p("div",{className:"flex items-center justify-between mb-2",children:[u("span",{className:"text-[10px] font-bold text-[#171512] truncate",children:t}),u("span",{className:"text-[9px] font-semibold text-[#B0AA9C]",children:e})]}),u("div",{className:"space-y-1.5",children:n})]}),ac=440,lc=360,Cw=[{id:"home",icon:"home",title:"Homepage",sub:"index.html",x:60,y:190,accent:!0},{id:"products",icon:"inventory_2",title:"Products",sub:"/products",x:250,y:100},{id:"solutions",icon:"widgets",title:"Solutions",sub:"/solutions",x:250,y:190},{id:"about",icon:"info",title:"About",sub:"/about",x:250,y:280}],nR=[["home","products"],["home","solutions"],["home","about"]],rm=Object.fromEntries(Cw.map(t=>[t.id,t])),rR=(t,e)=>{const n=rm[t],r=rm[e],i=n.x+66,s=n.y,o=r.x-66,a=r.y,l=(i+o)/2;return`M ${i} ${s} C ${l} ${s}, ${l} ${a}, ${o} ${a}`},iR=({className:t=""})=>u(ul,{label:"Sortly · Homepage Redesign",className:t,right:p("div",{className:"hidden sm:flex items-center gap-1.5 text-[11px] text-[#B0AA9C]",children:[u("span",{className:"material-symbols-outlined text-[15px]",children:"groups"}),"4 collaborators"]}),children:p("div",{className:"flex flex-col md:flex-row",children:[p("div",{className:"relative flex-1 min-w-0",style:{aspectRatio:`${ac} / ${lc}`,background:"#FFFDF9"},children:[u("svg",{viewBox:`0 0 ${ac} ${lc}`,className:"absolute inset-0 w-full h-full",preserveAspectRatio:"none",children:nR.map(([e,n])=>u("path",{d:rR(e,n),fill:"none",stroke:"#E7E2D6",strokeWidth:2},`${e}-${n}`))}),Cw.map(e=>u(Sw,{icon:e.icon,title:e.title,sub:e.sub,accent:e.accent,style:{left:`${e.x/ac*100}%`,top:`${e.y/lc*100}%`}},e.id))]}),p("div",{className:"w-full md:w-[240px] flex-shrink-0 border-t md:border-t-0 md:border-l border-[#ECE6D9] bg-white p-4",children:[p("div",{className:"flex items-center justify-between mb-3",children:[u("span",{className:"text-[10px] font-bold uppercase tracking-widest text-[#8C8577]",children:"Card Sort"}),u("span",{className:"text-[9px] font-semibold text-[#B0AA9C]",children:"7/9"})]}),p("div",{className:"space-y-2.5",children:[p(Yi,{title:"Navigation",count:3,children:[u(Le,{label:"Products"}),u(Le,{label:"Solutions"}),u(Le,{label:"Pricing"})]}),p(Yi,{title:"Footer",count:2,children:[u(Le,{label:"About"}),u(Le,{label:"Contact"})]})]})]})]})}),sR=({onGetStarted:t})=>p("section",{id:"top",className:"relative overflow-hidden pt-20 pb-40 md:pt-28 md:pb-56",children:[p("div",{className:"pointer-events-none absolute inset-0 -z-10",children:[u("div",{className:"absolute -top-32 left-[8%] w-[520px] h-[520px] rounded-full bg-[#E8C9A8]/50 blur-[110px]"}),u("div",{className:"absolute top-10 right-[6%] w-[460px] h-[460px] rounded-full bg-[#D9C9A3]/45 blur-[110px]"}),u("div",{className:"absolute top-64 left-[32%] w-[380px] h-[380px] rounded-full bg-[#B5652F]/10 blur-[100px]"})]}),p("div",{className:"max-w-5xl mx-auto px-6 text-center",children:[p("div",{className:"inline-flex items-center gap-2 rounded-full bg-white border border-[#ECE6D9] px-4 py-1.5 text-[12px] font-medium text-[#8C8577] mb-8 shadow-[0_2px_10px_-4px_rgba(23,21,18,0.08)]",children:[u("span",{className:"w-1.5 h-1.5 rounded-full bg-[#B5652F]"}),"New: Auto-generated sitemaps from any card sort"]}),p("h1",{className:"font-sans font-extrabold tracking-tight text-[#171512] text-[44px] leading-[1.05] sm:text-[56px] md:text-[68px] mb-6",children:["Design information",u("br",{}),"architecture, together."]}),u("p",{className:"max-w-2xl mx-auto text-[18px] md:text-[20px] leading-relaxed text-[#4A4540] mb-10",children:"Turn card sorts and stakeholder input into a clear, shareable sitemap — without switching between five different tools to get there."}),p("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[u("button",{onClick:t,className:`${cl} px-8 py-4 text-[15px]`,children:"Start for free"}),u("button",{onClick:()=>{var e;return(e=document.querySelector("#product"))==null?void 0:e.scrollIntoView({behavior:"smooth"})},className:`${Nh} px-8 py-4 text-[15px]`,children:"Book a demo"})]})]}),u("div",{className:"relative max-w-5xl mx-auto px-4 sm:px-6 mt-16 md:mt-20",children:u(iR,{className:"shadow-[0_50px_100px_-30px_rgba(23,21,18,0.35)] -mb-24 md:-mb-40"})})]}),oR=["Northglade","Fieldnote","Kepler & Co","Loomwell","Atlas Studio","Haven Digital"],aR=()=>u("section",{className:"relative pt-40 md:pt-56 pb-16 md:pb-20",children:p("div",{className:"max-w-5xl mx-auto px-6",children:[u("p",{className:"text-center text-[12px] font-semibold uppercase tracking-widest text-[#B0AA9C] mb-8",children:"Trusted by product & research teams at"}),u("div",{className:"flex flex-wrap items-center justify-center gap-x-12 gap-y-5",children:oR.map(t=>u("span",{className:"text-[18px] font-bold text-[#C7C0B0] grayscale select-none",children:t},t))})]})}),lR=()=>p("div",{className:"flex items-center gap-3",children:[p("div",{className:"flex-1 space-y-1.5",children:[u(Le,{label:"Getting Started"}),u(Le,{label:"Account Settings",faded:!0})]}),u("div",{className:"flex -space-x-2",children:["#B5652F","#171512","#8C8577"].map(t=>u("span",{className:"w-6 h-6 rounded-full border-2 border-white",style:{background:t}},t))})]}),cR=()=>{const t=[{x:14,y:30},{x:68,y:12},{x:68,y:48}];return p("div",{className:"relative h-16",children:[p("svg",{viewBox:"0 0 96 60",className:"absolute inset-0 w-full h-full",children:[u("path",{d:`M ${t[0].x+16} ${t[0].y} C 48 ${t[0].y}, 48 ${t[1].y}, ${t[1].x-14} ${t[1].y}`,stroke:"#E7E2D6",strokeWidth:2,fill:"none"}),u("path",{d:`M ${t[0].x+16} ${t[0].y} C 48 ${t[0].y}, 48 ${t[2].y}, ${t[2].x-14} ${t[2].y}`,stroke:"#E7E2D6",strokeWidth:2,fill:"none"})]}),t.map((e,n)=>u("div",{className:`absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border ${n===0?"w-8 h-8 bg-[#171512] border-[#171512]":"w-7 h-7 bg-white border-[#ECE6D9]"}`,style:{left:`${e.x/96*100}%`,top:`${e.y/60*100}%`}},n))]})},uR=()=>p("div",{className:"space-y-2.5",children:[p("div",{className:"flex items-center gap-2 rounded-lg bg-white border border-[#ECE6D9] px-3 py-2",children:[u("span",{className:"material-symbols-outlined text-[14px] text-[#B0AA9C]",children:"link"}),u("span",{className:"text-[11px] text-[#8C8577] truncate flex-1",children:"sortly.app/s/8f2k-x91"}),u("span",{className:"material-symbols-outlined text-[14px] text-[#B0AA9C]",children:"content_copy"})]}),p("div",{className:"flex items-center gap-1.5 text-[10px] text-[#B0AA9C]",children:[u("span",{className:"w-1.5 h-1.5 rounded-full bg-[#B5652F]"}),"12 responses collected"]})]}),dR=()=>p("div",{className:"flex items-center gap-4",children:[u("div",{className:"grid grid-cols-4 gap-[3px]",children:[.9,.2,.1,.15,.2,.85,.3,.1,.1,.3,.9,.4,.15,.1,.4,1].map((t,e)=>u("div",{className:"w-3 h-3 rounded-[2px]",style:{background:`rgba(181,101,47,${.1+t*.8})`}},e))}),p("div",{className:"flex-1 space-y-1.5",children:[u("div",{className:"h-1.5 rounded-full bg-[#ECE6D9]",children:u("div",{className:"h-full w-4/5 rounded-full bg-[#171512]"})}),u("div",{className:"h-1.5 rounded-full bg-[#ECE6D9]",children:u("div",{className:"h-full w-3/5 rounded-full bg-[#B5652F]"})}),u("div",{className:"h-1.5 rounded-full bg-[#ECE6D9]",children:u("div",{className:"h-full w-2/5 rounded-full bg-[#D8D2C4]"})})]})]}),hR=[{icon:"groups",title:"Live Card Sorting",desc:"Drag labeled cards into groups in real time with teammates or test participants.",preview:u(lR,{})},{icon:"account_tree",title:"Auto-Generated Sitemaps",desc:"Turn sorted categories into a visual, editable sitemap instantly.",preview:u(cR,{})},{icon:"ios_share",title:"Remote Testing Links",desc:"Send a shareable link so participants can run an open or closed card sort remotely.",preview:u(uR,{})},{icon:"insights",title:"Insights Dashboard",desc:"Similarity matrices, dendrograms, and agreement scores calculated automatically.",preview:u(dR,{})}],fR=()=>u("section",{className:"py-20 md:py-28",children:p("div",{className:"max-w-6xl mx-auto px-6",children:[p("div",{className:"max-w-xl mb-14",children:[u("p",{className:"text-[12px] font-semibold uppercase tracking-widest text-[#B5652F] mb-3",children:"Everything in one place"}),u("h2",{className:"text-[32px] md:text-[40px] font-extrabold tracking-tight text-[#171512] leading-tight",children:"From messy cards to a structure everyone agrees on."})]}),u("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:hR.map(t=>p("div",{className:"rounded-2xl bg-white border border-[#ECE6D9] p-7 hover:shadow-[0_20px_50px_-20px_rgba(23,21,18,0.15)] transition-shadow",children:[u("span",{className:"w-10 h-10 rounded-xl bg-[#F1E4D8] flex items-center justify-center mb-5",children:u("span",{className:"material-symbols-outlined text-[20px] text-[#B5652F]",children:t.icon})}),u("h3",{className:"text-[18px] font-bold text-[#171512] mb-1.5",children:t.title}),u("p",{className:"text-[14px] text-[#4A4540] leading-relaxed mb-5",children:t.desc}),u("div",{className:"rounded-xl bg-[#FFFDF9] border border-[#ECE6D9] p-4",children:t.preview})]},t.title))})]})}),pR=({className:t=""})=>u(ul,{label:"Card Sort · Onboarding Flow",className:t,right:p("div",{className:"flex items-center gap-2",children:[u("div",{className:"w-16 h-1.5 rounded-full bg-[#ECE6D9] overflow-hidden",children:u("div",{className:"h-full w-4/5 bg-[#B5652F]"})}),u("span",{className:"text-[10px] font-semibold text-[#B0AA9C]",children:"8/10"})]}),children:p("div",{className:"p-4 bg-[#FFFDF9]",children:[p("div",{className:"flex gap-3",children:[p(Yi,{title:"Unsorted",count:2,children:[u(Le,{label:"Billing FAQ",faded:!0}),u(Le,{label:"Data Export",faded:!0})]}),p(Yi,{title:"Getting Started",count:3,children:[u(Le,{label:"Create Account"}),u(Le,{label:"Invite Team"}),u(Le,{label:"Import Content"})]}),p(Yi,{title:"Account Settings",count:3,children:[u(Le,{label:"Profile"}),u(Le,{label:"Notifications"}),u(Le,{label:"Permissions"})]})]}),p("div",{className:"flex items-center gap-1.5 mt-3",children:[u("div",{className:"flex -space-x-1.5",children:["#B5652F","#171512","#8C8577"].map(e=>u("span",{className:"w-4 h-4 rounded-full border-2 border-[#FFFDF9]",style:{background:e}},e))}),u("span",{className:"text-[10px] text-[#B0AA9C]",children:"3 participants sorting live"})]})]})}),cc=640,uc=380,Ew=[{id:"home",icon:"home",title:"Homepage",sub:"index.html",x:90,y:190,accent:!0},{id:"products",icon:"inventory_2",title:"Products",sub:"/products",x:320,y:95},{id:"solutions",icon:"widgets",title:"Solutions",sub:"/solutions",x:320,y:190},{id:"about",icon:"info",title:"About",sub:"/about",x:320,y:285},{id:"enterprise",icon:"business",title:"Enterprise",sub:"/solutions/ent",x:550,y:60},{id:"pricing",icon:"sell",title:"Pricing",sub:"/products/pricing",x:550,y:125},{id:"cases",icon:"article",title:"Case Studies",sub:"/solutions/cases",x:550,y:220}],mR=[["home","products"],["home","solutions"],["home","about"],["products","enterprise"],["products","pricing"],["solutions","cases"]],im=Object.fromEntries(Ew.map(t=>[t.id,t])),gR=(t,e)=>{const n=im[t],r=im[e],i=n.x+66,s=n.y,o=r.x-66,a=r.y,l=(i+o)/2;return`M ${i} ${s} C ${l} ${s}, ${l} ${a}, ${o} ${a}`},yR=({className:t=""})=>u(ul,{label:"Sitemap · Homepage Redesign",className:t,right:p("div",{className:"flex items-center gap-1.5 text-[10px] text-[#B0AA9C]",children:[u("span",{className:"material-symbols-outlined text-[13px]",children:"layers"}),"7 pages"]}),children:p("div",{className:"relative w-full",style:{aspectRatio:`${cc} / ${uc}`,background:"#FFFDF9"},children:[u("svg",{viewBox:`0 0 ${cc} ${uc}`,className:"absolute inset-0 w-full h-full",preserveAspectRatio:"none",children:mR.map(([e,n])=>u("path",{d:gR(e,n),fill:"none",stroke:"#E7E2D6",strokeWidth:2},`${e}-${n}`))}),Ew.map(e=>u(Sw,{icon:e.icon,title:e.title,sub:e.sub,accent:e.accent,style:{left:`${e.x/cc*100}%`,top:`${e.y/uc*100}%`}},e.id))]})}),_R=[[1,.82,.18,.05,.12,.08],[.82,1,.22,.09,.15,.11],[.18,.22,1,.76,.31,.2],[.05,.09,.76,1,.28,.17],[.12,.15,.31,.28,1,.64],[.08,.11,.2,.17,.64,1]],vR=t=>`rgba(181, 101, 47, ${.08+t*.85})`,wR=[{label:"Getting Started",value:92},{label:"Account Settings",value:74},{label:"Billing",value:58},{label:"Resources",value:36}],xR=({className:t=""})=>u(ul,{label:"Reports · Onboarding Flow",className:t,right:p("div",{className:"flex items-center gap-1.5 text-[10px] text-[#B0AA9C]",children:[u("span",{className:"material-symbols-outlined text-[13px]",children:"groups"}),"24 responses"]}),children:p("div",{className:"p-5 bg-[#FFFDF9] grid grid-cols-2 gap-6",children:[p("div",{children:[u("p",{className:"text-[10px] font-bold uppercase tracking-widest text-[#8C8577] mb-2.5",children:"Similarity Matrix"}),u("div",{className:"inline-grid gap-[3px]",style:{gridTemplateColumns:"repeat(6, 1fr)"},children:_R.map((e,n)=>e.map((r,i)=>u("div",{className:"w-4 h-4 rounded-[3px]",style:{background:n===i?"#ECE6D9":vR(r)}},`${n}-${i}`)))})]}),p("div",{children:[u("p",{className:"text-[10px] font-bold uppercase tracking-widest text-[#8C8577] mb-2.5",children:"Category Frequency"}),u("div",{className:"space-y-2.5",children:wR.map(e=>p("div",{children:[p("div",{className:"flex items-center justify-between mb-1",children:[u("span",{className:"text-[10px] font-medium text-[#171512]",children:e.label}),p("span",{className:"text-[9px] text-[#B0AA9C]",children:[e.value,"%"]})]}),u("div",{className:"h-1.5 rounded-full bg-[#ECE6D9] overflow-hidden",children:u("div",{className:"h-full rounded-full bg-[#B5652F]",style:{width:`${e.value}%`}})})]},e.label))})]})]})}),sm=[{key:"cardsort",label:"Card Sort",eyebrow:"Research",title:"Run open, closed, or hybrid card sorts.",desc:"Set up a study in minutes, send participants a link, and watch responses roll in — no spreadsheets required.",bullets:["Real-time collaboration with teammates or remote participants","Open, closed, and hybrid sort types out of the box","Every card and every group tracked automatically"],Mockup:pR},{key:"sitemap",label:"Sitemap",eyebrow:"Structure",title:"From sorted cards to a living sitemap.",desc:"Sorted categories become draggable page nodes on a canvas your whole team can edit together.",bullets:["Every group becomes a page node, instantly","Drag, nest, and relabel without losing history","Share a read-only link for stakeholder sign-off"],Mockup:yR},{key:"reports",label:"Reports",eyebrow:"Analysis",title:"See where people agree — and where they don't.",desc:"Sortly runs the statistics for you, so you can spend your time interpreting results, not calculating them.",bullets:["Similarity matrices show which cards belong together","Dendrograms reveal natural category clusters","Category frequency highlights your strongest labels"],Mockup:xR}],SR=()=>{const[t,e]=N.useState("cardsort"),n=sm.find(i=>i.key===t),r=n.Mockup;return u("section",{id:"product",className:"py-20 md:py-28 bg-white",children:p("div",{className:"max-w-6xl mx-auto px-6",children:[u("div",{className:"flex justify-center mb-16",children:u("div",{className:"inline-flex items-center gap-1 rounded-full bg-[#FAF9F6] border border-[#ECE6D9] p-1.5",children:sm.map(i=>u("button",{onClick:()=>e(i.key),className:`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all ${t===i.key?"bg-[#171512] text-white shadow-sm":"text-[#8C8577] hover:text-[#171512]"}`,children:i.label},i.key))})}),p("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-14 items-center",children:[p("div",{children:[u("p",{className:"text-[12px] font-semibold uppercase tracking-widest text-[#B5652F] mb-3",children:n.eyebrow}),u("h2",{className:"text-[30px] md:text-[38px] font-extrabold tracking-tight text-[#171512] leading-tight mb-5",children:n.title}),u("p",{className:"text-[16px] text-[#4A4540] leading-relaxed mb-7",children:n.desc}),u("ul",{className:"space-y-3.5",children:n.bullets.map(i=>p("li",{className:"flex items-start gap-3",children:[u("span",{className:"mt-0.5 w-5 h-5 rounded-full bg-[#F1E4D8] flex items-center justify-center flex-shrink-0",children:u("span",{className:"material-symbols-outlined text-[13px] text-[#B5652F]",children:"check"})}),u("span",{className:"text-[14px] text-[#4A4540] leading-relaxed",children:i})]},i))})]}),u(r,{className:"shadow-[0_30px_70px_-25px_rgba(23,21,18,0.25)]"})]})]})})},CR=[{name:"Figma",icon:"draw"},{name:"Miro",icon:"dashboard"},{name:"Notion",icon:"description"},{name:"Slack",icon:"forum"},{name:"Google Drive",icon:"cloud"},{name:"Jira",icon:"checklist"}],ER=()=>u("section",{id:"integrations",className:"py-20 md:py-28",children:p("div",{className:"max-w-5xl mx-auto px-6 text-center",children:[u("p",{className:"text-[12px] font-semibold uppercase tracking-widest text-[#B5652F] mb-3",children:"Integrations"}),u("h2",{className:"text-[32px] md:text-[40px] font-extrabold tracking-tight text-[#171512] mb-14",children:"Works with your existing stack."}),u("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4",children:CR.map(t=>p("div",{className:"flex flex-col items-center justify-center gap-3 rounded-2xl bg-white border border-[#ECE6D9] py-8 px-4 hover:shadow-[0_20px_40px_-20px_rgba(23,21,18,0.15)] transition-shadow",children:[u("span",{className:"w-11 h-11 rounded-xl bg-[#FAF9F6] border border-[#ECE6D9] flex items-center justify-center",children:u("span",{className:"material-symbols-outlined text-[20px] text-[#4A4540]",children:t.icon})}),u("span",{className:"text-[13px] font-semibold text-[#171512]",children:t.name})]},t.name))})]})}),kR=[{quote:"We ran a closed sort with 40 participants and had a defensible nav structure by the end of the week. It used to take us a month.",name:"Priya Anand",role:"Senior UX Researcher",company:"Fieldnote",color:"#B5652F"},{quote:"The dendrogram is the first thing I show stakeholders now — it turns 'I feel like this should be grouped differently' into an actual data point.",name:"Marcus Webb",role:"Product Designer",company:"Northglade",color:"#171512"},{quote:"Sending a card sort link to remote participants and getting a sitemap out the other end, without exporting a single CSV, is the whole reason we switched.",name:"Elena Kovač",role:"Design Lead",company:"Kepler & Co",color:"#8C8577"},{quote:"Our engineers finally stopped arguing about the sitemap in standup, because they can see the same board we do, live.",name:"Sam Okafor",role:"UX Researcher",company:"Loomwell",color:"#B5652F"}],bR=({name:t,color:e})=>u("div",{className:"w-11 h-11 rounded-full flex items-center justify-center text-white text-[14px] font-bold flex-shrink-0",style:{background:e},children:t.split(" ").map(n=>n[0]).join("")}),NR=()=>u("section",{className:"py-20 md:py-28",children:p("div",{className:"max-w-6xl mx-auto px-6",children:[p("div",{className:"max-w-xl mb-14",children:[u("p",{className:"text-[12px] font-semibold uppercase tracking-widest text-[#B5652F] mb-3",children:"Loved by research & design teams"}),u("h2",{className:"text-[32px] md:text-[40px] font-extrabold tracking-tight text-[#171512] leading-tight",children:"Don't just take our word for it."})]}),u("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:kR.map(t=>p("figure",{className:"rounded-2xl bg-white border border-[#ECE6D9] p-7 flex flex-col",children:[u("span",{className:"material-symbols-outlined text-[28px] text-[#F1E4D8] mb-3",children:"format_quote"}),p("blockquote",{className:"text-[15px] text-[#4A4540] leading-relaxed mb-6 flex-1",children:["“",t.quote,"”"]}),p("figcaption",{className:"flex items-center gap-3",children:[u(bR,{name:t.name,color:t.color}),p("div",{children:[u("p",{className:"text-[14px] font-bold text-[#171512]",children:t.name}),p("p",{className:"text-[12px] text-[#8C8577]",children:[t.role," · ",t.company]})]})]})]},t.name))})]})}),IR=[{name:"Free",tagline:"1 study, basic card sort",monthly:0,yearly:0,cta:"Start for free",features:["1 active study","Open & closed card sorts","Up to 15 cards per study","Community support"]},{name:"Pro",tagline:"Unlimited studies, sitemap export, collaboration",monthly:19,yearly:15,cta:"Start free trial",popular:!0,features:["Unlimited studies","Sitemap export (PNG & PDF)","Real-time collaboration","Remote testing links","Priority support"]},{name:"Team",tagline:"Multi-project workspace, admin controls, exports",monthly:49,yearly:39,cta:"Talk to sales",features:["Everything in Pro","Multi-project workspaces","Admin & permission controls","Export to Figma & CSV","Dedicated onboarding"]}],TR=({onGetStarted:t})=>{const[e,n]=N.useState(!0);return u("section",{id:"pricing",className:"py-20 md:py-28 bg-white",children:p("div",{className:"max-w-6xl mx-auto px-6",children:[p("div",{className:"text-center max-w-xl mx-auto mb-10",children:[u("p",{className:"text-[12px] font-semibold uppercase tracking-widest text-[#B5652F] mb-3",children:"Pricing"}),u("h2",{className:"text-[32px] md:text-[40px] font-extrabold tracking-tight text-[#171512] mb-4",children:"Simple pricing, room to grow."}),u("p",{className:"text-[16px] text-[#4A4540]",children:"Start free. Upgrade when your research program needs more than one study at a time."})]}),p("div",{className:"flex items-center justify-center gap-3 mb-14",children:[u("span",{className:`text-[14px] font-medium ${e?"text-[#B0AA9C]":"text-[#171512]"}`,children:"Monthly"}),u("button",{onClick:()=>n(r=>!r),className:"relative w-12 h-7 rounded-full bg-[#171512] flex-shrink-0","aria-label":"Toggle yearly billing",children:u("span",{className:`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${e?"left-6":"left-1"}`})}),u("span",{className:`text-[14px] font-medium ${e?"text-[#171512]":"text-[#B0AA9C]"}`,children:"Yearly"}),u("span",{className:"text-[11px] font-semibold text-[#B5652F] bg-[#F1E4D8] rounded-full px-2.5 py-1",children:"Save 20%"})]}),u("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 items-start",children:IR.map(r=>{const i=e?r.yearly:r.monthly;return p("div",{className:`relative rounded-2xl bg-white p-8 flex flex-col ${r.popular?"border-2 border-[#171512] shadow-[0_30px_60px_-25px_rgba(23,21,18,0.25)] md:-translate-y-3":"border border-[#ECE6D9]"}`,children:[r.popular&&u("span",{className:"absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-wide bg-[#171512] text-white rounded-full px-3.5 py-1.5",children:"Most popular"}),u("h3",{className:"text-[18px] font-bold text-[#171512] mb-1.5",children:r.name}),u("p",{className:"text-[13px] text-[#8C8577] mb-6 leading-relaxed",children:r.tagline}),p("div",{className:"flex items-baseline gap-1 mb-7",children:[p("span",{className:"text-[40px] font-extrabold tracking-tight text-[#171512]",children:["$",i]}),p("span",{className:"text-[13px] text-[#B0AA9C]",children:["/ month",e&&i>0?", billed yearly":""]})]}),u("button",{onClick:t,className:`${r.popular?cl:Nh} w-full py-3 text-[14px] mb-7`,children:r.cta}),u("ul",{className:"space-y-3",children:r.features.map(s=>p("li",{className:"flex items-start gap-2.5",children:[u("span",{className:"material-symbols-outlined text-[16px] text-[#B5652F] mt-0.5",children:"check"}),u("span",{className:"text-[13.5px] text-[#4A4540] leading-relaxed",children:s})]},s))})]},r.name)})})]})})},RR=({onGetStarted:t})=>u("section",{className:"py-20 md:py-28 px-4 sm:px-6",children:p("div",{className:"relative max-w-6xl mx-auto rounded-[28px] overflow-hidden bg-[#171512] px-8 py-20 md:py-28 text-center",children:[p("div",{className:"pointer-events-none absolute inset-0",children:[u("div",{className:"absolute -top-24 -left-16 w-[420px] h-[420px] rounded-full bg-[#B5652F]/25 blur-[110px]"}),u("div",{className:"absolute -bottom-32 right-[6%] w-[440px] h-[440px] rounded-full bg-[#8C8577]/25 blur-[110px]"}),u("div",{className:"absolute top-10 right-[20%] w-[260px] h-[260px] rounded-full bg-[#E8C9A8]/15 blur-[90px]"})]}),p("div",{className:"relative",children:[u("h2",{className:"text-[32px] md:text-[48px] font-extrabold tracking-tight text-white leading-tight max-w-2xl mx-auto mb-6",children:"Turn user research into clear structure."}),u("p",{className:"text-[16px] md:text-[18px] text-white/70 max-w-lg mx-auto mb-10",children:"Free to start. No credit card, no IT ticket — just a link and a deck of cards."}),p("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[u("button",{onClick:t,className:`${cl} bg-white text-[#171512] hover:opacity-90 px-8 py-4 text-[15px]`,children:"Start for free"}),u("button",{onClick:()=>{var e;return(e=document.querySelector("#pricing"))==null?void 0:e.scrollIntoView({behavior:"smooth"})},className:`${Nh} border-white/25 text-white hover:bg-white/10 px-8 py-4 text-[15px]`,children:"Talk to sales"})]})]})]})}),PR=[{title:"Platform",links:["Card Sort","Sitemap Builder","Insights Dashboard","Integrations","Pricing"]},{title:"Resources",links:["Guides","Templates","Blog","Help Center","API Docs"]},{title:"Legal",links:["Privacy Policy","Terms of Service","Security","Cookie Policy"]}],AR=[{label:"X (Twitter)",icon:"alternate_email"},{label:"LinkedIn",icon:"work"},{label:"GitHub",icon:"code"},{label:"YouTube",icon:"play_circle"}],DR=()=>u("footer",{id:"footer",className:"border-t border-[#ECE6D9] pt-16 pb-10",children:p("div",{className:"max-w-6xl mx-auto px-6",children:[p("div",{className:"grid grid-cols-1 md:grid-cols-[1.4fr_repeat(3,1fr)] gap-12 mb-14",children:[p("div",{children:[p("a",{href:"#top",className:"flex items-center gap-2.5 mb-4",children:[u("span",{className:"w-8 h-8 rounded-xl bg-[#171512] flex items-center justify-center",children:u("span",{className:"material-symbols-outlined text-white text-[18px]",children:"hub"})}),u("span",{className:"text-[17px] font-extrabold tracking-tight text-[#171512]",children:"Sortly"})]}),u("p",{className:"text-[14px] text-[#8C8577] leading-relaxed max-w-xs",children:"Card sorting and sitemap design for teams who'd rather agree on structure once, in one place."})]}),PR.map(t=>p("div",{children:[u("h4",{className:"text-[12px] font-bold uppercase tracking-widest text-[#171512] mb-4",children:t.title}),u("ul",{className:"space-y-3",children:t.links.map(e=>u("li",{children:u("a",{href:"#top",className:"text-[14px] text-[#8C8577] hover:text-[#171512] transition-colors",children:e})},e))})]},t.title))]}),p("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#ECE6D9]",children:[p("p",{className:"text-[13px] text-[#B0AA9C]",children:["© ",new Date().getFullYear()," Sortly, Inc. All rights reserved."]}),u("div",{className:"flex items-center gap-2",children:AR.map(t=>u("a",{href:"#top","aria-label":t.label,className:"w-9 h-9 rounded-full bg-[#FAF9F6] border border-[#ECE6D9] flex items-center justify-center text-[#8C8577] hover:text-[#171512] hover:border-[#D8D2C4] transition-colors",children:u("span",{className:"material-symbols-outlined text-[16px]",children:t.icon})},t.label))})]})]})}),OR=({onGetStarted:t})=>p("div",{className:"font-sans bg-[#FAF9F6] text-[#171512] antialiased",children:[u(eR,{onGetStarted:t}),u(sR,{onGetStarted:t}),u(aR,{}),u(fR,{}),u(SR,{}),u(ER,{}),u(NR,{}),u(TR,{onGetStarted:t}),u(RR,{onGetStarted:t}),u(DR,{})]});function LR(){const[t,e]=N.useState("landing"),n=new URLSearchParams(window.location.search).get("cardsort");return n?u(XT,{studyId:n}):t==="landing"?u(OR,{onGetStarted:()=>e("editor")}):t==="cardsort"?u(YT,{onExit:()=>e("editor")}):u(vT,{onOpenCardSort:()=>e("cardsort")})}dc.createRoot(document.getElementById("root")).render(u(Bw.StrictMode,{children:u(LR,{})}));
