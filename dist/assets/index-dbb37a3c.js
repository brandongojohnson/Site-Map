(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Pw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var um={exports:{}},Pa={},dm={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),Aw=Symbol.for("react.portal"),Dw=Symbol.for("react.fragment"),Ow=Symbol.for("react.strict_mode"),Lw=Symbol.for("react.profiler"),Mw=Symbol.for("react.provider"),Fw=Symbol.for("react.context"),Uw=Symbol.for("react.forward_ref"),$w=Symbol.for("react.suspense"),zw=Symbol.for("react.memo"),Bw=Symbol.for("react.lazy"),Dh=Symbol.iterator;function jw(t){return t===null||typeof t!="object"?null:(t=Dh&&t[Dh]||t["@@iterator"],typeof t=="function"?t:null)}var hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fm=Object.assign,pm={};function ci(t,e,n){this.props=t,this.context=e,this.refs=pm,this.updater=n||hm}ci.prototype.isReactComponent={};ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mm(){}mm.prototype=ci.prototype;function Du(t,e,n){this.props=t,this.context=e,this.refs=pm,this.updater=n||hm}var Ou=Du.prototype=new mm;Ou.constructor=Du;fm(Ou,ci.prototype);Ou.isPureReactComponent=!0;var Oh=Array.isArray,gm=Object.prototype.hasOwnProperty,Lu={current:null},ym={key:!0,ref:!0,__self:!0,__source:!0};function _m(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gm.call(e,r)&&!ym.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Cs,type:t,key:s,ref:o,props:i,_owner:Lu.current}}function Ww(t,e){return{$$typeof:Cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cs}function Vw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lh=/\/+/g;function pl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Vw(""+t.key):e.toString(36)}function go(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cs:case Aw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+pl(o,0):r,Oh(i)?(n="",t!=null&&(n=t.replace(Lh,"$&/")+"/"),go(i,e,n,"",function(c){return c})):i!=null&&(Mu(i)&&(i=Ww(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Oh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+pl(s,a);o+=go(s,e,n,l,i)}else if(l=jw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+pl(s,a++),o+=go(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hs(t,e,n){if(t==null)return t;var r=[],i=0;return go(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Hw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},yo={transition:null},Gw={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:yo,ReactCurrentOwner:Lu};V.Children={map:Hs,forEach:function(t,e,n){Hs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Hs(t,function(){e++}),e},toArray:function(t){return Hs(t,function(e){return e})||[]},only:function(t){if(!Mu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=ci;V.Fragment=Dw;V.Profiler=Lw;V.PureComponent=Du;V.StrictMode=Ow;V.Suspense=$w;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gw;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=fm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)gm.call(e,l)&&!ym.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Cs,type:t.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:Fw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mw,_context:t},t.Consumer=t};V.createElement=_m;V.createFactory=function(t){var e=_m.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:Uw,render:t}};V.isValidElement=Mu;V.lazy=function(t){return{$$typeof:Bw,_payload:{_status:-1,_result:t},_init:Hw}};V.memo=function(t,e){return{$$typeof:zw,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=yo.transition;yo.transition={};try{t()}finally{yo.transition=e}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(t,e){return ze.current.useCallback(t,e)};V.useContext=function(t){return ze.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};V.useEffect=function(t,e){return ze.current.useEffect(t,e)};V.useId=function(){return ze.current.useId()};V.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return ze.current.useMemo(t,e)};V.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};V.useRef=function(t){return ze.current.useRef(t)};V.useState=function(t){return ze.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return ze.current.useTransition()};V.version="18.2.0";dm.exports=V;var C=dm.exports;const Kw=Pw(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qw=C,Yw=Symbol.for("react.element"),Qw=Symbol.for("react.fragment"),Xw=Object.prototype.hasOwnProperty,Jw=qw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zw={key:!0,ref:!0,__self:!0,__source:!0};function vm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Xw.call(e,r)&&!Zw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Yw,type:t,key:s,ref:o,props:i,_owner:Jw.current}}Pa.Fragment=Qw;Pa.jsx=vm;Pa.jsxs=vm;um.exports=Pa;var Fu=um.exports;const wm=Fu.Fragment,u=Fu.jsx,g=Fu.jsxs;var pc={},xm={exports:{}},Ze={},Sm={exports:{}},Em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(w,R){var L=w.length;w.push(R);e:for(;0<L;){var X=L-1>>>1,_e=w[X];if(0<i(_e,R))w[X]=R,w[L]=_e,L=X;else break e}}function n(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var R=w[0],L=w.pop();if(L!==R){w[0]=L;e:for(var X=0,_e=w.length,Ws=_e>>>1;X<Ws;){var Un=2*(X+1)-1,fl=w[Un],$n=Un+1,Vs=w[$n];if(0>i(fl,L))$n<_e&&0>i(Vs,fl)?(w[X]=Vs,w[$n]=L,X=$n):(w[X]=fl,w[Un]=L,X=Un);else if($n<_e&&0>i(Vs,L))w[X]=Vs,w[$n]=L,X=$n;else break e}}return R}function i(w,R){var L=w.sortIndex-R.sortIndex;return L!==0?L:w.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,_=!1,v=!1,S=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(w){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=w)r(c),R.sortIndex=R.expirationTime,e(l,R);else break;R=n(c)}}function x(w){if(S=!1,y(w),!v)if(n(l)!==null)v=!0,A(k);else{var R=n(c);R!==null&&z(x,R.startTime-w)}}function k(w,R){v=!1,S&&(S=!1,m(P),P=-1),_=!0;var L=f;try{for(y(R),h=n(l);h!==null&&(!(h.expirationTime>R)||w&&!ue());){var X=h.callback;if(typeof X=="function"){h.callback=null,f=h.priorityLevel;var _e=X(h.expirationTime<=R);R=t.unstable_now(),typeof _e=="function"?h.callback=_e:h===n(l)&&r(l),y(R)}else r(l);h=n(l)}if(h!==null)var Ws=!0;else{var Un=n(c);Un!==null&&z(x,Un.startTime-R),Ws=!1}return Ws}finally{h=null,f=L,_=!1}}var N=!1,T=null,P=-1,G=5,M=-1;function ue(){return!(t.unstable_now()-M<G)}function Te(){if(T!==null){var w=t.unstable_now();M=w;var R=!0;try{R=T(!0,w)}finally{R?F():(N=!1,T=null)}}else N=!1}var F;if(typeof p=="function")F=function(){p(Te)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,de=O.port2;O.port1.onmessage=Te,F=function(){de.postMessage(null)}}else F=function(){E(Te,0)};function A(w){T=w,N||(N=!0,F())}function z(w,R){P=E(function(){w(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(w){w.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,A(k))},t.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<w?Math.floor(1e3/w):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(w){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var L=f;f=R;try{return w()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(w,R){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var L=f;f=w;try{return R()}finally{f=L}},t.unstable_scheduleCallback=function(w,R,L){var X=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?X+L:X):L=X,w){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=L+_e,w={id:d++,callback:R,priorityLevel:w,startTime:L,expirationTime:_e,sortIndex:-1},L>X?(w.sortIndex=L,e(c,w),n(l)===null&&w===n(c)&&(S?(m(P),P=-1):S=!0,z(x,L-X))):(w.sortIndex=_e,e(l,w),v||_||(v=!0,A(k))),w},t.unstable_shouldYield=ue,t.unstable_wrapCallback=function(w){var R=f;return function(){var L=f;f=R;try{return w.apply(this,arguments)}finally{f=L}}}})(Em);Sm.exports=Em;var e0=Sm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=C,Je=e0;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var km=new Set,Xi={};function dr(t,e){Kr(t,e),Kr(t+"Capture",e)}function Kr(t,e){for(Xi[t]=e,t=0;t<e.length;t++)km.add(e[t])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mc=Object.prototype.hasOwnProperty,t0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mh={},Fh={};function n0(t){return mc.call(Fh,t)?!0:mc.call(Mh,t)?!1:t0.test(t)?Fh[t]=!0:(Mh[t]=!0,!1)}function r0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function i0(t,e,n,r){if(e===null||typeof e>"u"||r0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uu=/[\-:]([a-z])/g;function $u(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uu,$u);be[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uu,$u);be[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uu,$u);be[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function zu(t,e,n,r){var i=be.hasOwnProperty(e)?be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(i0(e,n,i,r)&&(n=null),r||i===null?n0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nn=Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gs=Symbol.for("react.element"),wr=Symbol.for("react.portal"),xr=Symbol.for("react.fragment"),Bu=Symbol.for("react.strict_mode"),gc=Symbol.for("react.profiler"),bm=Symbol.for("react.provider"),Nm=Symbol.for("react.context"),ju=Symbol.for("react.forward_ref"),yc=Symbol.for("react.suspense"),_c=Symbol.for("react.suspense_list"),Wu=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Im=Symbol.for("react.offscreen"),Uh=Symbol.iterator;function vi(t){return t===null||typeof t!="object"?null:(t=Uh&&t[Uh]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,ml;function Ai(t){if(ml===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ml=e&&e[1]||""}return`
`+ml+t}var gl=!1;function yl(t,e){if(!t||gl)return"";gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{gl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ai(t):""}function s0(t){switch(t.tag){case 5:return Ai(t.type);case 16:return Ai("Lazy");case 13:return Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 2:case 15:return t=yl(t.type,!1),t;case 11:return t=yl(t.type.render,!1),t;case 1:return t=yl(t.type,!0),t;default:return""}}function vc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xr:return"Fragment";case wr:return"Portal";case gc:return"Profiler";case Bu:return"StrictMode";case yc:return"Suspense";case _c:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Nm:return(t.displayName||"Context")+".Consumer";case bm:return(t._context.displayName||"Context")+".Provider";case ju:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wu:return e=t.displayName||null,e!==null?e:vc(t.type)||"Memo";case on:e=t._payload,t=t._init;try{return vc(t(e))}catch{}}return null}function o0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vc(e);case 8:return e===Bu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a0(t){var e=Tm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ks(t){t._valueTracker||(t._valueTracker=a0(t))}function Rm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Tm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Do(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wc(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $h(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Rn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pm(t,e){e=e.checked,e!=null&&zu(t,"checked",e,!1)}function xc(t,e){Pm(t,e);var n=Rn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sc(t,e.type,Rn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sc(t,e,n){(e!=="number"||Do(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Di=Array.isArray;function Or(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Rn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ec(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Di(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rn(n)}}function Am(t,e){var n=Rn(e.value),r=Rn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qs,Om=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qs=qs||document.createElement("div"),qs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ji(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l0=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(t){l0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mi[e]=Mi[t]})});function Lm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mi.hasOwnProperty(t)&&Mi[t]?(""+e).trim():e+"px"}function Mm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Lm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var c0=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kc(t,e){if(e){if(c0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function bc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nc=null;function Vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ic=null,Lr=null,Mr=null;function Wh(t){if(t=Ns(t)){if(typeof Ic!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Ma(e),Ic(t.stateNode,t.type,e))}}function Fm(t){Lr?Mr?Mr.push(t):Mr=[t]:Lr=t}function Um(){if(Lr){var t=Lr,e=Mr;if(Mr=Lr=null,Wh(t),e)for(t=0;t<e.length;t++)Wh(e[t])}}function $m(t,e){return t(e)}function zm(){}var _l=!1;function Bm(t,e,n){if(_l)return t(e,n);_l=!0;try{return $m(t,e,n)}finally{_l=!1,(Lr!==null||Mr!==null)&&(zm(),Um())}}function Zi(t,e){var n=t.stateNode;if(n===null)return null;var r=Ma(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Tc=!1;if(Yt)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){Tc=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{Tc=!1}function u0(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Fi=!1,Oo=null,Lo=!1,Rc=null,d0={onError:function(t){Fi=!0,Oo=t}};function h0(t,e,n,r,i,s,o,a,l){Fi=!1,Oo=null,u0.apply(d0,arguments)}function f0(t,e,n,r,i,s,o,a,l){if(h0.apply(this,arguments),Fi){if(Fi){var c=Oo;Fi=!1,Oo=null}else throw Error(b(198));Lo||(Lo=!0,Rc=c)}}function hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vh(t){if(hr(t)!==t)throw Error(b(188))}function p0(t){var e=t.alternate;if(!e){if(e=hr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vh(i),t;if(s===r)return Vh(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function Wm(t){return t=p0(t),t!==null?Vm(t):null}function Vm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Vm(t);if(e!==null)return e;t=t.sibling}return null}var Hm=Je.unstable_scheduleCallback,Hh=Je.unstable_cancelCallback,m0=Je.unstable_shouldYield,g0=Je.unstable_requestPaint,he=Je.unstable_now,y0=Je.unstable_getCurrentPriorityLevel,Hu=Je.unstable_ImmediatePriority,Gm=Je.unstable_UserBlockingPriority,Mo=Je.unstable_NormalPriority,_0=Je.unstable_LowPriority,Km=Je.unstable_IdlePriority,Aa=null,Rt=null;function v0(t){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Aa,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:S0,w0=Math.log,x0=Math.LN2;function S0(t){return t>>>=0,t===0?32:31-(w0(t)/x0|0)|0}var Ys=64,Qs=4194304;function Oi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Oi(a):(s&=o,s!==0&&(r=Oi(s)))}else o=n&~i,o!==0?r=Oi(o):s!==0&&(r=Oi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-St(e),i=1<<n,r|=t[n],e&=~i;return r}function E0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-St(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=E0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Pc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qm(){var t=Ys;return Ys<<=1,!(Ys&4194240)&&(Ys=64),t}function vl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ks(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-St(e),t[e]=n}function k0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-St(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-St(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var q=0;function Ym(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qm,Ku,Xm,Jm,Zm,Ac=!1,Xs=[],yn=null,_n=null,vn=null,es=new Map,ts=new Map,ln=[],b0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gh(t,e){switch(t){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":es.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(e.pointerId)}}function xi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ns(e),e!==null&&Ku(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function N0(t,e,n,r,i){switch(e){case"focusin":return yn=xi(yn,t,e,n,r,i),!0;case"dragenter":return _n=xi(_n,t,e,n,r,i),!0;case"mouseover":return vn=xi(vn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return es.set(s,xi(es.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ts.set(s,xi(ts.get(s)||null,t,e,n,r,i)),!0}return!1}function eg(t){var e=Vn(t.target);if(e!==null){var n=hr(e);if(n!==null){if(e=n.tag,e===13){if(e=jm(n),e!==null){t.blockedOn=e,Zm(t.priority,function(){Xm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _o(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nc=r,n.target.dispatchEvent(r),Nc=null}else return e=Ns(n),e!==null&&Ku(e),t.blockedOn=n,!1;e.shift()}return!0}function Kh(t,e,n){_o(t)&&n.delete(e)}function I0(){Ac=!1,yn!==null&&_o(yn)&&(yn=null),_n!==null&&_o(_n)&&(_n=null),vn!==null&&_o(vn)&&(vn=null),es.forEach(Kh),ts.forEach(Kh)}function Si(t,e){t.blockedOn===e&&(t.blockedOn=null,Ac||(Ac=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,I0)))}function ns(t){function e(i){return Si(i,t)}if(0<Xs.length){Si(Xs[0],t);for(var n=1;n<Xs.length;n++){var r=Xs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yn!==null&&Si(yn,t),_n!==null&&Si(_n,t),vn!==null&&Si(vn,t),es.forEach(e),ts.forEach(e),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)eg(n),n.blockedOn===null&&ln.shift()}var Fr=nn.ReactCurrentBatchConfig,Uo=!0;function T0(t,e,n,r){var i=q,s=Fr.transition;Fr.transition=null;try{q=1,qu(t,e,n,r)}finally{q=i,Fr.transition=s}}function R0(t,e,n,r){var i=q,s=Fr.transition;Fr.transition=null;try{q=4,qu(t,e,n,r)}finally{q=i,Fr.transition=s}}function qu(t,e,n,r){if(Uo){var i=Dc(t,e,n,r);if(i===null)Tl(t,e,r,$o,n),Gh(t,r);else if(N0(i,t,e,n,r))r.stopPropagation();else if(Gh(t,r),e&4&&-1<b0.indexOf(t)){for(;i!==null;){var s=Ns(i);if(s!==null&&Qm(s),s=Dc(t,e,n,r),s===null&&Tl(t,e,r,$o,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Tl(t,e,r,null,n)}}var $o=null;function Dc(t,e,n,r){if($o=null,t=Vu(r),t=Vn(t),t!==null)if(e=hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $o=t,null}function tg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y0()){case Hu:return 1;case Gm:return 4;case Mo:case _0:return 16;case Km:return 536870912;default:return 16}default:return 16}}var pn=null,Yu=null,vo=null;function ng(){if(vo)return vo;var t,e=Yu,n=e.length,r,i="value"in pn?pn.value:pn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return vo=i.slice(t,1<r?1-r:void 0)}function wo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Js(){return!0}function qh(){return!1}function et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Js:qh,this.isPropagationStopped=qh,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Js)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Js)},persist:function(){},isPersistent:Js}),e}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=et(ui),bs=oe({},ui,{view:0,detail:0}),P0=et(bs),wl,xl,Ei,Da=oe({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ei&&(Ei&&t.type==="mousemove"?(wl=t.screenX-Ei.screenX,xl=t.screenY-Ei.screenY):xl=wl=0,Ei=t),wl)},movementY:function(t){return"movementY"in t?t.movementY:xl}}),Yh=et(Da),A0=oe({},Da,{dataTransfer:0}),D0=et(A0),O0=oe({},bs,{relatedTarget:0}),Sl=et(O0),L0=oe({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),M0=et(L0),F0=oe({},ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U0=et(F0),$0=oe({},ui,{data:0}),Qh=et($0),z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=j0[t])?!!e[t]:!1}function Xu(){return W0}var V0=oe({},bs,{key:function(t){if(t.key){var e=z0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?B0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(t){return t.type==="keypress"?wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H0=et(V0),G0=oe({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=et(G0),K0=oe({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),q0=et(K0),Y0=oe({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q0=et(Y0),X0=oe({},Da,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=et(X0),Z0=[9,13,27,32],Ju=Yt&&"CompositionEvent"in window,Ui=null;Yt&&"documentMode"in document&&(Ui=document.documentMode);var ex=Yt&&"TextEvent"in window&&!Ui,rg=Yt&&(!Ju||Ui&&8<Ui&&11>=Ui),Jh=String.fromCharCode(32),Zh=!1;function ig(t,e){switch(t){case"keyup":return Z0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sr=!1;function tx(t,e){switch(t){case"compositionend":return sg(e);case"keypress":return e.which!==32?null:(Zh=!0,Jh);case"textInput":return t=e.data,t===Jh&&Zh?null:t;default:return null}}function nx(t,e){if(Sr)return t==="compositionend"||!Ju&&ig(t,e)?(t=ng(),vo=Yu=pn=null,Sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rg&&e.locale!=="ko"?null:e.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rx[t.type]:e==="textarea"}function og(t,e,n,r){Fm(r),e=zo(e,"onChange"),0<e.length&&(n=new Qu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $i=null,rs=null;function ix(t){yg(t,0)}function Oa(t){var e=kr(t);if(Rm(e))return t}function sx(t,e){if(t==="change")return e}var ag=!1;if(Yt){var El;if(Yt){var Cl="oninput"in document;if(!Cl){var tf=document.createElement("div");tf.setAttribute("oninput","return;"),Cl=typeof tf.oninput=="function"}El=Cl}else El=!1;ag=El&&(!document.documentMode||9<document.documentMode)}function nf(){$i&&($i.detachEvent("onpropertychange",lg),rs=$i=null)}function lg(t){if(t.propertyName==="value"&&Oa(rs)){var e=[];og(e,rs,t,Vu(t)),Bm(ix,e)}}function ox(t,e,n){t==="focusin"?(nf(),$i=e,rs=n,$i.attachEvent("onpropertychange",lg)):t==="focusout"&&nf()}function ax(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Oa(rs)}function lx(t,e){if(t==="click")return Oa(e)}function cx(t,e){if(t==="input"||t==="change")return Oa(e)}function ux(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:ux;function is(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mc.call(e,i)||!kt(t[i],e[i]))return!1}return!0}function rf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sf(t,e){var n=rf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rf(n)}}function cg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ug(){for(var t=window,e=Do();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Do(t.document)}return e}function Zu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dx(t){var e=ug(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cg(n.ownerDocument.documentElement,n)){if(r!==null&&Zu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sf(n,s);var o=sf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hx=Yt&&"documentMode"in document&&11>=document.documentMode,Er=null,Oc=null,zi=null,Lc=!1;function of(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lc||Er==null||Er!==Do(r)||(r=Er,"selectionStart"in r&&Zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zi&&is(zi,r)||(zi=r,r=zo(Oc,"onSelect"),0<r.length&&(e=new Qu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Er)))}function Zs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cr={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionend:Zs("Transition","TransitionEnd")},kl={},dg={};Yt&&(dg=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function La(t){if(kl[t])return kl[t];if(!Cr[t])return t;var e=Cr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dg)return kl[t]=e[n];return t}var hg=La("animationend"),fg=La("animationiteration"),pg=La("animationstart"),mg=La("transitionend"),gg=new Map,af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(t,e){gg.set(t,e),dr(e,[t])}for(var bl=0;bl<af.length;bl++){var Nl=af[bl],fx=Nl.toLowerCase(),px=Nl[0].toUpperCase()+Nl.slice(1);Ln(fx,"on"+px)}Ln(hg,"onAnimationEnd");Ln(fg,"onAnimationIteration");Ln(pg,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(mg,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function lf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,f0(r,e,void 0,t),t.currentTarget=null}function yg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;lf(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;lf(i,a,c),s=l}}}if(Lo)throw t=Rc,Lo=!1,Rc=null,t}function te(t,e){var n=e[zc];n===void 0&&(n=e[zc]=new Set);var r=t+"__bubble";n.has(r)||(_g(e,t,2,!1),n.add(r))}function Il(t,e,n){var r=0;e&&(r|=4),_g(n,t,r,e)}var eo="_reactListening"+Math.random().toString(36).slice(2);function ss(t){if(!t[eo]){t[eo]=!0,km.forEach(function(n){n!=="selectionchange"&&(mx.has(n)||Il(n,!1,t),Il(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[eo]||(e[eo]=!0,Il("selectionchange",!1,e))}}function _g(t,e,n,r){switch(tg(e)){case 1:var i=T0;break;case 4:i=R0;break;default:i=qu}n=i.bind(null,e,n,t),i=void 0,!Tc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Tl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Vn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Bm(function(){var c=s,d=Vu(n),h=[];e:{var f=gg.get(t);if(f!==void 0){var _=Qu,v=t;switch(t){case"keypress":if(wo(n)===0)break e;case"keydown":case"keyup":_=H0;break;case"focusin":v="focus",_=Sl;break;case"focusout":v="blur",_=Sl;break;case"beforeblur":case"afterblur":_=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=D0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=q0;break;case hg:case fg:case pg:_=M0;break;case mg:_=Q0;break;case"scroll":_=P0;break;case"wheel":_=J0;break;case"copy":case"cut":case"paste":_=U0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Xh}var S=(e&4)!==0,E=!S&&t==="scroll",m=S?f!==null?f+"Capture":null:f;S=[];for(var p=c,y;p!==null;){y=p;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,m!==null&&(x=Zi(p,m),x!=null&&S.push(os(p,x,y)))),E)break;p=p.return}0<S.length&&(f=new _(f,v,null,n,d),h.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==Nc&&(v=n.relatedTarget||n.fromElement)&&(Vn(v)||v[Qt]))break e;if((_||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=c,v=v?Vn(v):null,v!==null&&(E=hr(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=c),_!==v)){if(S=Yh,x="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(S=Xh,x="onPointerLeave",m="onPointerEnter",p="pointer"),E=_==null?f:kr(_),y=v==null?f:kr(v),f=new S(x,p+"leave",_,n,d),f.target=E,f.relatedTarget=y,x=null,Vn(d)===c&&(S=new S(m,p+"enter",v,n,d),S.target=y,S.relatedTarget=E,x=S),E=x,_&&v)t:{for(S=_,m=v,p=0,y=S;y;y=gr(y))p++;for(y=0,x=m;x;x=gr(x))y++;for(;0<p-y;)S=gr(S),p--;for(;0<y-p;)m=gr(m),y--;for(;p--;){if(S===m||m!==null&&S===m.alternate)break t;S=gr(S),m=gr(m)}S=null}else S=null;_!==null&&cf(h,f,_,S,!1),v!==null&&E!==null&&cf(h,E,v,S,!0)}}e:{if(f=c?kr(c):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var k=sx;else if(ef(f))if(ag)k=cx;else{k=ax;var N=ox}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=lx);if(k&&(k=k(t,c))){og(h,k,n,d);break e}N&&N(t,f,c),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&Sc(f,"number",f.value)}switch(N=c?kr(c):window,t){case"focusin":(ef(N)||N.contentEditable==="true")&&(Er=N,Oc=c,zi=null);break;case"focusout":zi=Oc=Er=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,of(h,n,d);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":of(h,n,d)}var T;if(Ju)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Sr?ig(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(rg&&n.locale!=="ko"&&(Sr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Sr&&(T=ng()):(pn=d,Yu="value"in pn?pn.value:pn.textContent,Sr=!0)),N=zo(c,P),0<N.length&&(P=new Qh(P,t,null,n,d),h.push({event:P,listeners:N}),T?P.data=T:(T=sg(n),T!==null&&(P.data=T)))),(T=ex?tx(t,n):nx(t,n))&&(c=zo(c,"onBeforeInput"),0<c.length&&(d=new Qh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}yg(h,e)})}function os(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zi(t,n),s!=null&&r.unshift(os(t,s,i)),s=Zi(t,e),s!=null&&r.push(os(t,s,i))),t=t.return}return r}function gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Zi(n,s),l!=null&&o.unshift(os(n,l,a))):i||(l=Zi(n,s),l!=null&&o.push(os(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gx=/\r\n?/g,yx=/\u0000|\uFFFD/g;function uf(t){return(typeof t=="string"?t:""+t).replace(gx,`
`).replace(yx,"")}function to(t,e,n){if(e=uf(e),uf(t)!==e&&n)throw Error(b(425))}function Bo(){}var Mc=null,Fc=null;function Uc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,_x=typeof clearTimeout=="function"?clearTimeout:void 0,df=typeof Promise=="function"?Promise:void 0,vx=typeof queueMicrotask=="function"?queueMicrotask:typeof df<"u"?function(t){return df.resolve(null).then(t).catch(wx)}:$c;function wx(t){setTimeout(function(){throw t})}function Rl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ns(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ns(e)}function wn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var di=Math.random().toString(36).slice(2),Tt="__reactFiber$"+di,as="__reactProps$"+di,Qt="__reactContainer$"+di,zc="__reactEvents$"+di,xx="__reactListeners$"+di,Sx="__reactHandles$"+di;function Vn(t){var e=t[Tt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qt]||n[Tt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hf(t);t!==null;){if(n=t[Tt])return n;t=hf(t)}return e}t=n,n=t.parentNode}return null}function Ns(t){return t=t[Tt]||t[Qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Ma(t){return t[as]||null}var Bc=[],br=-1;function Mn(t){return{current:t}}function ne(t){0>br||(t.current=Bc[br],Bc[br]=null,br--)}function ee(t,e){br++,Bc[br]=t.current,t.current=e}var Pn={},De=Mn(Pn),He=Mn(!1),Jn=Pn;function qr(t,e){var n=t.type.contextTypes;if(!n)return Pn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(t){return t=t.childContextTypes,t!=null}function jo(){ne(He),ne(De)}function ff(t,e,n){if(De.current!==Pn)throw Error(b(168));ee(De,e),ee(He,n)}function vg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,o0(t)||"Unknown",i));return oe({},n,r)}function Wo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pn,Jn=De.current,ee(De,t),ee(He,He.current),!0}function pf(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=vg(t,e,Jn),r.__reactInternalMemoizedMergedChildContext=t,ne(He),ne(De),ee(De,t)):ne(He),ee(He,n)}var zt=null,Fa=!1,Pl=!1;function wg(t){zt===null?zt=[t]:zt.push(t)}function Ex(t){Fa=!0,wg(t)}function Fn(){if(!Pl&&zt!==null){Pl=!0;var t=0,e=q;try{var n=zt;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zt=null,Fa=!1}catch(i){throw zt!==null&&(zt=zt.slice(t+1)),Hm(Hu,Fn),i}finally{q=e,Pl=!1}}return null}var Nr=[],Ir=0,Vo=null,Ho=0,nt=[],rt=0,Zn=null,jt=1,Wt="";function zn(t,e){Nr[Ir++]=Ho,Nr[Ir++]=Vo,Vo=t,Ho=e}function xg(t,e,n){nt[rt++]=jt,nt[rt++]=Wt,nt[rt++]=Zn,Zn=t;var r=jt;t=Wt;var i=32-St(r)-1;r&=~(1<<i),n+=1;var s=32-St(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jt=1<<32-St(e)+i|n<<i|r,Wt=s+t}else jt=1<<s|n<<i|r,Wt=t}function ed(t){t.return!==null&&(zn(t,1),xg(t,1,0))}function td(t){for(;t===Vo;)Vo=Nr[--Ir],Nr[Ir]=null,Ho=Nr[--Ir],Nr[Ir]=null;for(;t===Zn;)Zn=nt[--rt],nt[rt]=null,Wt=nt[--rt],nt[rt]=null,jt=nt[--rt],nt[rt]=null}var Xe=null,Qe=null,re=!1,yt=null;function Sg(t,e){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xe=t,Qe=wn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xe=t,Qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zn!==null?{id:jt,overflow:Wt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xe=t,Qe=null,!0):!1;default:return!1}}function jc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wc(t){if(re){var e=Qe;if(e){var n=e;if(!mf(t,e)){if(jc(t))throw Error(b(418));e=wn(n.nextSibling);var r=Xe;e&&mf(t,e)?Sg(r,n):(t.flags=t.flags&-4097|2,re=!1,Xe=t)}}else{if(jc(t))throw Error(b(418));t.flags=t.flags&-4097|2,re=!1,Xe=t}}}function gf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xe=t}function no(t){if(t!==Xe)return!1;if(!re)return gf(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uc(t.type,t.memoizedProps)),e&&(e=Qe)){if(jc(t))throw Eg(),Error(b(418));for(;e;)Sg(t,e),e=wn(e.nextSibling)}if(gf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qe=wn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qe=null}}else Qe=Xe?wn(t.stateNode.nextSibling):null;return!0}function Eg(){for(var t=Qe;t;)t=wn(t.nextSibling)}function Yr(){Qe=Xe=null,re=!1}function nd(t){yt===null?yt=[t]:yt.push(t)}var Cx=nn.ReactCurrentBatchConfig;function mt(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Go=Mn(null),Ko=null,Tr=null,rd=null;function id(){rd=Tr=Ko=null}function sd(t){var e=Go.current;ne(Go),t._currentValue=e}function Vc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ur(t,e){Ko=t,rd=Tr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(We=!0),t.firstContext=null)}function ct(t){var e=t._currentValue;if(rd!==t)if(t={context:t,memoizedValue:e,next:null},Tr===null){if(Ko===null)throw Error(b(308));Tr=t,Ko.dependencies={lanes:0,firstContext:t}}else Tr=Tr.next=t;return e}var Hn=null;function od(t){Hn===null?Hn=[t]:Hn.push(t)}function Cg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,od(e)):(n.next=i.next,i.next=n),e.interleaved=n,Xt(t,r)}function Xt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var an=!1;function ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Xt(t,n)}return i=r.interleaved,i===null?(e.next=e,od(r)):(e.next=i.next,i.next=e),r.interleaved=e,Xt(t,n)}function xo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gu(t,n)}}function yf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qo(t,e,n,r){var i=t.updateQueue;an=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,_=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,S=a;switch(f=e,_=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){h=v.call(_,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,f=typeof v=="function"?v.call(_,h,f):v,f==null)break e;h=oe({},h,f);break e;case 2:an=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else _={eventTime:_,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,l=h):d=d.next=_,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);tr|=o,t.lanes=o,t.memoizedState=h}}function _f(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var bg=new Cm.Component().refs;function Hc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ua={isMounted:function(t){return(t=t._reactInternals)?hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Me(),i=En(t),s=Kt(r,i);s.payload=e,n!=null&&(s.callback=n),e=xn(t,s,i),e!==null&&(Et(e,t,i,r),xo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Me(),i=En(t),s=Kt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xn(t,s,i),e!==null&&(Et(e,t,i,r),xo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Me(),r=En(t),i=Kt(n,r);i.tag=2,e!=null&&(i.callback=e),e=xn(t,i,r),e!==null&&(Et(e,t,r,n),xo(e,t,r))}};function vf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!is(n,r)||!is(i,s):!0}function Ng(t,e,n){var r=!1,i=Pn,s=e.contextType;return typeof s=="object"&&s!==null?s=ct(s):(i=Ge(e)?Jn:De.current,r=e.contextTypes,s=(r=r!=null)?qr(t,i):Pn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ua,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ua.enqueueReplaceState(e,e.state,null)}function Gc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=bg,ad(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ct(s):(s=Ge(e)?Jn:De.current,i.context=qr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ua.enqueueReplaceState(i,i.state,null),qo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ci(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===bg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ro(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xf(t){var e=t._init;return e(t._payload)}function Ig(t){function e(m,p){if(t){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Cn(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,x){return p===null||p.tag!==6?(p=Ul(y,m.mode,x),p.return=m,p):(p=i(p,y),p.return=m,p)}function l(m,p,y,x){var k=y.type;return k===xr?d(m,p,y.props.children,x,y.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===on&&xf(k)===p.type)?(x=i(p,y.props),x.ref=Ci(m,p,y),x.return=m,x):(x=No(y.type,y.key,y.props,null,m.mode,x),x.ref=Ci(m,p,y),x.return=m,x)}function c(m,p,y,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=$l(y,m.mode,x),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function d(m,p,y,x,k){return p===null||p.tag!==7?(p=Qn(y,m.mode,x,k),p.return=m,p):(p=i(p,y),p.return=m,p)}function h(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ul(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gs:return y=No(p.type,p.key,p.props,null,m.mode,y),y.ref=Ci(m,null,p),y.return=m,y;case wr:return p=$l(p,m.mode,y),p.return=m,p;case on:var x=p._init;return h(m,x(p._payload),y)}if(Di(p)||vi(p))return p=Qn(p,m.mode,y,null),p.return=m,p;ro(m,p)}return null}function f(m,p,y,x){var k=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:a(m,p,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Gs:return y.key===k?l(m,p,y,x):null;case wr:return y.key===k?c(m,p,y,x):null;case on:return k=y._init,f(m,p,k(y._payload),x)}if(Di(y)||vi(y))return k!==null?null:d(m,p,y,x,null);ro(m,y)}return null}function _(m,p,y,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(y)||null,a(p,m,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gs:return m=m.get(x.key===null?y:x.key)||null,l(p,m,x,k);case wr:return m=m.get(x.key===null?y:x.key)||null,c(p,m,x,k);case on:var N=x._init;return _(m,p,y,N(x._payload),k)}if(Di(x)||vi(x))return m=m.get(y)||null,d(p,m,x,k,null);ro(p,x)}return null}function v(m,p,y,x){for(var k=null,N=null,T=p,P=p=0,G=null;T!==null&&P<y.length;P++){T.index>P?(G=T,T=null):G=T.sibling;var M=f(m,T,y[P],x);if(M===null){T===null&&(T=G);break}t&&T&&M.alternate===null&&e(m,T),p=s(M,p,P),N===null?k=M:N.sibling=M,N=M,T=G}if(P===y.length)return n(m,T),re&&zn(m,P),k;if(T===null){for(;P<y.length;P++)T=h(m,y[P],x),T!==null&&(p=s(T,p,P),N===null?k=T:N.sibling=T,N=T);return re&&zn(m,P),k}for(T=r(m,T);P<y.length;P++)G=_(T,m,P,y[P],x),G!==null&&(t&&G.alternate!==null&&T.delete(G.key===null?P:G.key),p=s(G,p,P),N===null?k=G:N.sibling=G,N=G);return t&&T.forEach(function(ue){return e(m,ue)}),re&&zn(m,P),k}function S(m,p,y,x){var k=vi(y);if(typeof k!="function")throw Error(b(150));if(y=k.call(y),y==null)throw Error(b(151));for(var N=k=null,T=p,P=p=0,G=null,M=y.next();T!==null&&!M.done;P++,M=y.next()){T.index>P?(G=T,T=null):G=T.sibling;var ue=f(m,T,M.value,x);if(ue===null){T===null&&(T=G);break}t&&T&&ue.alternate===null&&e(m,T),p=s(ue,p,P),N===null?k=ue:N.sibling=ue,N=ue,T=G}if(M.done)return n(m,T),re&&zn(m,P),k;if(T===null){for(;!M.done;P++,M=y.next())M=h(m,M.value,x),M!==null&&(p=s(M,p,P),N===null?k=M:N.sibling=M,N=M);return re&&zn(m,P),k}for(T=r(m,T);!M.done;P++,M=y.next())M=_(T,m,P,M.value,x),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?P:M.key),p=s(M,p,P),N===null?k=M:N.sibling=M,N=M);return t&&T.forEach(function(Te){return e(m,Te)}),re&&zn(m,P),k}function E(m,p,y,x){if(typeof y=="object"&&y!==null&&y.type===xr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Gs:e:{for(var k=y.key,N=p;N!==null;){if(N.key===k){if(k=y.type,k===xr){if(N.tag===7){n(m,N.sibling),p=i(N,y.props.children),p.return=m,m=p;break e}}else if(N.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===on&&xf(k)===N.type){n(m,N.sibling),p=i(N,y.props),p.ref=Ci(m,N,y),p.return=m,m=p;break e}n(m,N);break}else e(m,N);N=N.sibling}y.type===xr?(p=Qn(y.props.children,m.mode,x,y.key),p.return=m,m=p):(x=No(y.type,y.key,y.props,null,m.mode,x),x.ref=Ci(m,p,y),x.return=m,m=x)}return o(m);case wr:e:{for(N=y.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=$l(y,m.mode,x),p.return=m,m=p}return o(m);case on:return N=y._init,E(m,p,N(y._payload),x)}if(Di(y))return v(m,p,y,x);if(vi(y))return S(m,p,y,x);ro(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=Ul(y,m.mode,x),p.return=m,m=p),o(m)):n(m,p)}return E}var Qr=Ig(!0),Tg=Ig(!1),Is={},Pt=Mn(Is),ls=Mn(Is),cs=Mn(Is);function Gn(t){if(t===Is)throw Error(b(174));return t}function ld(t,e){switch(ee(cs,e),ee(ls,t),ee(Pt,Is),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cc(e,t)}ne(Pt),ee(Pt,e)}function Xr(){ne(Pt),ne(ls),ne(cs)}function Rg(t){Gn(cs.current);var e=Gn(Pt.current),n=Cc(e,t.type);e!==n&&(ee(ls,t),ee(Pt,n))}function cd(t){ls.current===t&&(ne(Pt),ne(ls))}var ie=Mn(0);function Yo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Al=[];function ud(){for(var t=0;t<Al.length;t++)Al[t]._workInProgressVersionPrimary=null;Al.length=0}var So=nn.ReactCurrentDispatcher,Dl=nn.ReactCurrentBatchConfig,er=0,se=null,pe=null,we=null,Qo=!1,Bi=!1,us=0,kx=0;function Re(){throw Error(b(321))}function dd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kt(t[n],e[n]))return!1;return!0}function hd(t,e,n,r,i,s){if(er=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,So.current=t===null||t.memoizedState===null?Tx:Rx,t=n(r,i),Bi){s=0;do{if(Bi=!1,us=0,25<=s)throw Error(b(301));s+=1,we=pe=null,e.updateQueue=null,So.current=Px,t=n(r,i)}while(Bi)}if(So.current=Xo,e=pe!==null&&pe.next!==null,er=0,we=pe=se=null,Qo=!1,e)throw Error(b(300));return t}function fd(){var t=us!==0;return us=0,t}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?se.memoizedState=we=t:we=we.next=t,we}function ut(){if(pe===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=pe.next;var e=we===null?se.memoizedState:we.next;if(e!==null)we=e,pe=t;else{if(t===null)throw Error(b(310));pe=t,t={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},we===null?se.memoizedState=we=t:we=we.next=t}return we}function ds(t,e){return typeof e=="function"?e(t):e}function Ol(t){var e=ut(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((er&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,se.lanes|=d,tr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,kt(r,e.memoizedState)||(We=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,se.lanes|=s,tr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ll(t){var e=ut(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kt(s,e.memoizedState)||(We=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Pg(){}function Ag(t,e){var n=se,r=ut(),i=e(),s=!kt(r.memoizedState,i);if(s&&(r.memoizedState=i,We=!0),r=r.queue,pd(Lg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,hs(9,Og.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(b(349));er&30||Dg(n,e,i)}return i}function Dg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Og(t,e,n,r){e.value=n,e.getSnapshot=r,Mg(e)&&Fg(t)}function Lg(t,e,n){return n(function(){Mg(e)&&Fg(t)})}function Mg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kt(t,n)}catch{return!0}}function Fg(t){var e=Xt(t,1);e!==null&&Et(e,t,1,-1)}function Sf(t){var e=It();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:t},e.queue=t,t=t.dispatch=Ix.bind(null,se,t),[e.memoizedState,t]}function hs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ug(){return ut().memoizedState}function Eo(t,e,n,r){var i=It();se.flags|=t,i.memoizedState=hs(1|e,n,void 0,r===void 0?null:r)}function $a(t,e,n,r){var i=ut();r=r===void 0?null:r;var s=void 0;if(pe!==null){var o=pe.memoizedState;if(s=o.destroy,r!==null&&dd(r,o.deps)){i.memoizedState=hs(e,n,s,r);return}}se.flags|=t,i.memoizedState=hs(1|e,n,s,r)}function Ef(t,e){return Eo(8390656,8,t,e)}function pd(t,e){return $a(2048,8,t,e)}function $g(t,e){return $a(4,2,t,e)}function zg(t,e){return $a(4,4,t,e)}function Bg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jg(t,e,n){return n=n!=null?n.concat([t]):null,$a(4,4,Bg.bind(null,e,t),n)}function md(){}function Wg(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Vg(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hg(t,e,n){return er&21?(kt(n,e)||(n=qm(),se.lanes|=n,tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,We=!0),t.memoizedState=n)}function bx(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=Dl.transition;Dl.transition={};try{t(!1),e()}finally{q=n,Dl.transition=r}}function Gg(){return ut().memoizedState}function Nx(t,e,n){var r=En(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kg(t))qg(e,n);else if(n=Cg(t,e,n,r),n!==null){var i=Me();Et(n,t,r,i),Yg(n,e,r)}}function Ix(t,e,n){var r=En(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kg(t))qg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kt(a,o)){var l=e.interleaved;l===null?(i.next=i,od(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Cg(t,e,i,r),n!==null&&(i=Me(),Et(n,t,r,i),Yg(n,e,r))}}function Kg(t){var e=t.alternate;return t===se||e!==null&&e===se}function qg(t,e){Bi=Qo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gu(t,n)}}var Xo={readContext:ct,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Tx={readContext:ct,useCallback:function(t,e){return It().memoizedState=[t,e===void 0?null:e],t},useContext:ct,useEffect:Ef,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Eo(4194308,4,Bg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Eo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Eo(4,2,t,e)},useMemo:function(t,e){var n=It();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=It();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Nx.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=It();return t={current:t},e.memoizedState=t},useState:Sf,useDebugValue:md,useDeferredValue:function(t){return It().memoizedState=t},useTransition:function(){var t=Sf(!1),e=t[0];return t=bx.bind(null,t[1]),It().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=It();if(re){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Se===null)throw Error(b(349));er&30||Dg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ef(Lg.bind(null,r,s,t),[t]),r.flags|=2048,hs(9,Og.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=It(),e=Se.identifierPrefix;if(re){var n=Wt,r=jt;n=(r&~(1<<32-St(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=us++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Rx={readContext:ct,useCallback:Wg,useContext:ct,useEffect:pd,useImperativeHandle:jg,useInsertionEffect:$g,useLayoutEffect:zg,useMemo:Vg,useReducer:Ol,useRef:Ug,useState:function(){return Ol(ds)},useDebugValue:md,useDeferredValue:function(t){var e=ut();return Hg(e,pe.memoizedState,t)},useTransition:function(){var t=Ol(ds)[0],e=ut().memoizedState;return[t,e]},useMutableSource:Pg,useSyncExternalStore:Ag,useId:Gg,unstable_isNewReconciler:!1},Px={readContext:ct,useCallback:Wg,useContext:ct,useEffect:pd,useImperativeHandle:jg,useInsertionEffect:$g,useLayoutEffect:zg,useMemo:Vg,useReducer:Ll,useRef:Ug,useState:function(){return Ll(ds)},useDebugValue:md,useDeferredValue:function(t){var e=ut();return pe===null?e.memoizedState=t:Hg(e,pe.memoizedState,t)},useTransition:function(){var t=Ll(ds)[0],e=ut().memoizedState;return[t,e]},useMutableSource:Pg,useSyncExternalStore:Ag,useId:Gg,unstable_isNewReconciler:!1};function Jr(t,e){try{var n="",r=e;do n+=s0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ml(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ax=typeof WeakMap=="function"?WeakMap:Map;function Qg(t,e,n){n=Kt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Zo||(Zo=!0,ru=r),Kc(t,e)},n}function Xg(t,e,n){n=Kt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Kc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kc(t,e),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ax;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Gx.bind(null,t,e,n),e.then(t,t))}function kf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kt(-1,1),e.tag=2,xn(n,e,1))),n.lanes|=1),t)}var Dx=nn.ReactCurrentOwner,We=!1;function Oe(t,e,n,r){e.child=t===null?Tg(e,null,n,r):Qr(e,t.child,n,r)}function Nf(t,e,n,r,i){n=n.render;var s=e.ref;return Ur(e,i),r=hd(t,e,n,r,s,i),n=fd(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(re&&n&&ed(e),e.flags|=1,Oe(t,e,r,i),e.child)}function If(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ed(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jg(t,e,s,r,i)):(t=No(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:is,n(o,r)&&t.ref===e.ref)return Jt(t,e,i)}return e.flags|=1,t=Cn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Jg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(is(s,r)&&t.ref===e.ref)if(We=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(We=!0);else return e.lanes=t.lanes,Jt(t,e,i)}return qc(t,e,n,r,i)}function Zg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Pr,qe),qe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Pr,qe),qe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(Pr,qe),qe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(Pr,qe),qe|=r;return Oe(t,e,i,n),e.child}function ey(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qc(t,e,n,r,i){var s=Ge(n)?Jn:De.current;return s=qr(e,s),Ur(e,i),n=hd(t,e,n,r,s,i),r=fd(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(re&&r&&ed(e),e.flags|=1,Oe(t,e,n,i),e.child)}function Tf(t,e,n,r,i){if(Ge(n)){var s=!0;Wo(e)}else s=!1;if(Ur(e,i),e.stateNode===null)Co(t,e),Ng(e,n,r),Gc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ct(c):(c=Ge(n)?Jn:De.current,c=qr(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&wf(e,o,r,c),an=!1;var f=e.memoizedState;o.state=f,qo(e,r,o,i),l=e.memoizedState,a!==r||f!==l||He.current||an?(typeof d=="function"&&(Hc(e,n,d,r),l=e.memoizedState),(a=an||vf(e,n,a,r,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:mt(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ct(l):(l=Ge(n)?Jn:De.current,l=qr(e,l));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&wf(e,o,r,l),an=!1,f=e.memoizedState,o.state=f,qo(e,r,o,i);var v=e.memoizedState;a!==h||f!==v||He.current||an?(typeof _=="function"&&(Hc(e,n,_,r),v=e.memoizedState),(c=an||vf(e,n,c,r,f,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Yc(t,e,n,r,s,i)}function Yc(t,e,n,r,i,s){ey(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&pf(e,n,!1),Jt(t,e,s);r=e.stateNode,Dx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qr(e,t.child,null,s),e.child=Qr(e,null,a,s)):Oe(t,e,a,s),e.memoizedState=r.state,i&&pf(e,n,!0),e.child}function ty(t){var e=t.stateNode;e.pendingContext?ff(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ff(t,e.context,!1),ld(t,e.containerInfo)}function Rf(t,e,n,r,i){return Yr(),nd(i),e.flags|=256,Oe(t,e,n,r),e.child}var Qc={dehydrated:null,treeContext:null,retryLane:0};function Xc(t){return{baseLanes:t,cachePool:null,transitions:null}}function ny(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(ie,i&1),t===null)return Wc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ja(o,r,0,null),t=Qn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xc(n),e.memoizedState=Qc,t):gd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ox(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Cn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cn(a,s):(s=Qn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Xc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qc,r}return s=t.child,t=s.sibling,r=Cn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gd(t,e){return e=ja({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function io(t,e,n,r){return r!==null&&nd(r),Qr(e,t.child,null,n),t=gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ox(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ml(Error(b(422))),io(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ja({mode:"visible",children:r.children},i,0,null),s=Qn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Qr(e,t.child,null,o),e.child.memoizedState=Xc(o),e.memoizedState=Qc,s);if(!(e.mode&1))return io(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=Ml(s,r,void 0),io(t,e,o,r)}if(a=(o&t.childLanes)!==0,We||a){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xt(t,i),Et(r,t,i,-1))}return Sd(),r=Ml(Error(b(421))),io(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Kx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qe=wn(i.nextSibling),Xe=e,re=!0,yt=null,t!==null&&(nt[rt++]=jt,nt[rt++]=Wt,nt[rt++]=Zn,jt=t.id,Wt=t.overflow,Zn=e),e=gd(e,r.children),e.flags|=4096,e)}function Pf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Vc(t.return,e,n)}function Fl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ry(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Oe(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pf(t,n,e);else if(t.tag===19)Pf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fl(e,!0,n,null,s);break;case"together":Fl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Co(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Lx(t,e,n){switch(e.tag){case 3:ty(e),Yr();break;case 5:Rg(e);break;case 1:Ge(e.type)&&Wo(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(Go,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?ny(t,e,n):(ee(ie,ie.current&1),t=Jt(t,e,n),t!==null?t.sibling:null);ee(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ry(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Zg(t,e,n)}return Jt(t,e,n)}var iy,Jc,sy,oy;iy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jc=function(){};sy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gn(Pt.current);var s=null;switch(n){case"input":i=wc(t,i),r=wc(t,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=Ec(t,i),r=Ec(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bo)}kc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};oy=function(t,e,n,r){n!==r&&(e.flags|=4)};function ki(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Mx(t,e,n){var r=e.pendingProps;switch(td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return Ge(e.type)&&jo(),Pe(e),null;case 3:return r=e.stateNode,Xr(),ne(He),ne(De),ud(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(no(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yt!==null&&(ou(yt),yt=null))),Jc(t,e),Pe(e),null;case 5:cd(e);var i=Gn(cs.current);if(n=e.type,t!==null&&e.stateNode!=null)sy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Pe(e),null}if(t=Gn(Pt.current),no(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tt]=e,r[as]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Li.length;i++)te(Li[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":$h(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":Bh(r,s),te("invalid",r)}kc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&to(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&to(r.textContent,a,t),i=["children",""+a]):Xi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Ks(r),zh(r,s,!0);break;case"textarea":Ks(r),jh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tt]=e,t[as]=r,iy(t,e,!1,!1),e.stateNode=t;e:{switch(o=bc(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Li.length;i++)te(Li[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":$h(t,r),i=wc(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),te("invalid",t);break;case"textarea":Bh(t,r),i=Ec(t,r),te("invalid",t);break;default:i=r}kc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Mm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Om(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ji(t,l):typeof l=="number"&&Ji(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",t):l!=null&&zu(t,s,l,o))}switch(n){case"input":Ks(t),zh(t,r,!1);break;case"textarea":Ks(t),jh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Rn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Or(t,!!r.multiple,s,!1):r.defaultValue!=null&&Or(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)oy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Gn(cs.current),Gn(Pt.current),no(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tt]=e,(s=r.nodeValue!==n)&&(t=Xe,t!==null))switch(t.tag){case 3:to(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&to(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=e,e.stateNode=r}return Pe(e),null;case 13:if(ne(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&Qe!==null&&e.mode&1&&!(e.flags&128))Eg(),Yr(),e.flags|=98560,s=!1;else if(s=no(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Tt]=e}else Yr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pe(e),s=!1}else yt!==null&&(ou(yt),yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?ye===0&&(ye=3):Sd())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return Xr(),Jc(t,e),t===null&&ss(e.stateNode.containerInfo),Pe(e),null;case 10:return sd(e.type._context),Pe(e),null;case 17:return Ge(e.type)&&jo(),Pe(e),null;case 19:if(ne(ie),s=e.memoizedState,s===null)return Pe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ki(s,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yo(t),o!==null){for(e.flags|=128,ki(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>Zr&&(e.flags|=128,r=!0,ki(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ki(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return Pe(e),null}else 2*he()-s.renderingStartTime>Zr&&n!==1073741824&&(e.flags|=128,r=!0,ki(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=ie.current,ee(ie,r?n&1|2:n&1),e):(Pe(e),null);case 22:case 23:return xd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qe&1073741824&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function Fx(t,e){switch(td(e),e.tag){case 1:return Ge(e.type)&&jo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xr(),ne(He),ne(De),ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cd(e),null;case 13:if(ne(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(ie),null;case 4:return Xr(),null;case 10:return sd(e.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var so=!1,Ae=!1,Ux=typeof WeakSet=="function"?WeakSet:Set,D=null;function Rr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function Zc(t,e,n){try{n()}catch(r){ae(t,e,r)}}var Af=!1;function $x(t,e){if(Mc=Uo,t=ug(),Zu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var _;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)f=h,h=_;for(;;){if(h===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++d===r&&(l=o),(_=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fc={focusedElem:t,selectionRange:n},Uo=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,E=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?S:mt(e.type,S),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){ae(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return v=Af,Af=!1,v}function ji(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zc(e,n,s)}i=i.next}while(i!==r)}}function za(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function eu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ay(t){var e=t.alternate;e!==null&&(t.alternate=null,ay(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tt],delete e[as],delete e[zc],delete e[xx],delete e[Sx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ly(t){return t.tag===5||t.tag===3||t.tag===4}function Df(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ly(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bo));else if(r!==4&&(t=t.child,t!==null))for(tu(t,e,n),t=t.sibling;t!==null;)tu(t,e,n),t=t.sibling}function nu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nu(t,e,n),t=t.sibling;t!==null;)nu(t,e,n),t=t.sibling}var Ee=null,gt=!1;function rn(t,e,n){for(n=n.child;n!==null;)cy(t,e,n),n=n.sibling}function cy(t,e,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Aa,n)}catch{}switch(n.tag){case 5:Ae||Rr(n,e);case 6:var r=Ee,i=gt;Ee=null,rn(t,e,n),Ee=r,gt=i,Ee!==null&&(gt?(t=Ee,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(gt?(t=Ee,n=n.stateNode,t.nodeType===8?Rl(t.parentNode,n):t.nodeType===1&&Rl(t,n),ns(t)):Rl(Ee,n.stateNode));break;case 4:r=Ee,i=gt,Ee=n.stateNode.containerInfo,gt=!0,rn(t,e,n),Ee=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zc(n,e,o),i=i.next}while(i!==r)}rn(t,e,n);break;case 1:if(!Ae&&(Rr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,e,a)}rn(t,e,n);break;case 21:rn(t,e,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,rn(t,e,n),Ae=r):rn(t,e,n);break;default:rn(t,e,n)}}function Of(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ux),e.forEach(function(r){var i=qx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ee=a.stateNode,gt=!1;break e;case 3:Ee=a.stateNode.containerInfo,gt=!0;break e;case 4:Ee=a.stateNode.containerInfo,gt=!0;break e}a=a.return}if(Ee===null)throw Error(b(160));cy(s,o,i),Ee=null,gt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)uy(e,t),e=e.sibling}function uy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pt(e,t),Nt(t),r&4){try{ji(3,t,t.return),za(3,t)}catch(S){ae(t,t.return,S)}try{ji(5,t,t.return)}catch(S){ae(t,t.return,S)}}break;case 1:pt(e,t),Nt(t),r&512&&n!==null&&Rr(n,n.return);break;case 5:if(pt(e,t),Nt(t),r&512&&n!==null&&Rr(n,n.return),t.flags&32){var i=t.stateNode;try{Ji(i,"")}catch(S){ae(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Pm(i,s),bc(a,o);var c=bc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Mm(i,h):d==="dangerouslySetInnerHTML"?Om(i,h):d==="children"?Ji(i,h):zu(i,d,h,c)}switch(a){case"input":xc(i,s);break;case"textarea":Am(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Or(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?Or(i,!!s.multiple,s.defaultValue,!0):Or(i,!!s.multiple,s.multiple?[]:"",!1))}i[as]=s}catch(S){ae(t,t.return,S)}}break;case 6:if(pt(e,t),Nt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){ae(t,t.return,S)}}break;case 3:if(pt(e,t),Nt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ns(e.containerInfo)}catch(S){ae(t,t.return,S)}break;case 4:pt(e,t),Nt(t);break;case 13:pt(e,t),Nt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vd=he())),r&4&&Of(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ae=(c=Ae)||d,pt(e,t),Ae=c):pt(e,t),Nt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(D=t,d=t.child;d!==null;){for(h=D=d;D!==null;){switch(f=D,_=f.child,f.tag){case 0:case 11:case 14:case 15:ji(4,f,f.return);break;case 1:Rr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){ae(r,n,S)}}break;case 5:Rr(f,f.return);break;case 22:if(f.memoizedState!==null){Mf(h);continue}}_!==null?(_.return=f,D=_):Mf(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Lm("display",o))}catch(S){ae(t,t.return,S)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){ae(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pt(e,t),Nt(t),r&4&&Of(t);break;case 21:break;default:pt(e,t),Nt(t)}}function Nt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ly(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ji(i,""),r.flags&=-33);var s=Df(t);nu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Df(t);tu(t,a,o);break;default:throw Error(b(161))}}catch(l){ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zx(t,e,n){D=t,dy(t)}function dy(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||so;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ae;a=so;var c=Ae;if(so=o,(Ae=l)&&!c)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?Ff(i):l!==null?(l.return=o,D=l):Ff(i);for(;s!==null;)D=s,dy(s),s=s.sibling;D=i,so=a,Ae=c}Lf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):Lf(t)}}function Lf(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ae||za(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_f(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_f(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ns(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Ae||e.flags&512&&eu(e)}catch(f){ae(e,e.return,f)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function Mf(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Ff(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{za(4,e)}catch(l){ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ae(e,i,l)}}var s=e.return;try{eu(e)}catch(l){ae(e,s,l)}break;case 5:var o=e.return;try{eu(e)}catch(l){ae(e,o,l)}}}catch(l){ae(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var Bx=Math.ceil,Jo=nn.ReactCurrentDispatcher,yd=nn.ReactCurrentOwner,ot=nn.ReactCurrentBatchConfig,H=0,Se=null,fe=null,ke=0,qe=0,Pr=Mn(0),ye=0,fs=null,tr=0,Ba=0,_d=0,Wi=null,je=null,vd=0,Zr=1/0,$t=null,Zo=!1,ru=null,Sn=null,oo=!1,mn=null,ea=0,Vi=0,iu=null,ko=-1,bo=0;function Me(){return H&6?he():ko!==-1?ko:ko=he()}function En(t){return t.mode&1?H&2&&ke!==0?ke&-ke:Cx.transition!==null?(bo===0&&(bo=qm()),bo):(t=q,t!==0||(t=window.event,t=t===void 0?16:tg(t.type)),t):1}function Et(t,e,n,r){if(50<Vi)throw Vi=0,iu=null,Error(b(185));ks(t,n,r),(!(H&2)||t!==Se)&&(t===Se&&(!(H&2)&&(Ba|=n),ye===4&&cn(t,ke)),Ke(t,r),n===1&&H===0&&!(e.mode&1)&&(Zr=he()+500,Fa&&Fn()))}function Ke(t,e){var n=t.callbackNode;C0(t,e);var r=Fo(t,t===Se?ke:0);if(r===0)n!==null&&Hh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hh(n),e===1)t.tag===0?Ex(Uf.bind(null,t)):wg(Uf.bind(null,t)),vx(function(){!(H&6)&&Fn()}),n=null;else{switch(Ym(r)){case 1:n=Hu;break;case 4:n=Gm;break;case 16:n=Mo;break;case 536870912:n=Km;break;default:n=Mo}n=vy(n,hy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hy(t,e){if(ko=-1,bo=0,H&6)throw Error(b(327));var n=t.callbackNode;if($r()&&t.callbackNode!==n)return null;var r=Fo(t,t===Se?ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ta(t,r);else{e=r;var i=H;H|=2;var s=py();(Se!==t||ke!==e)&&($t=null,Zr=he()+500,Yn(t,e));do try{Vx();break}catch(a){fy(t,a)}while(1);id(),Jo.current=s,H=i,fe!==null?e=0:(Se=null,ke=0,e=ye)}if(e!==0){if(e===2&&(i=Pc(t),i!==0&&(r=i,e=su(t,i))),e===1)throw n=fs,Yn(t,0),cn(t,r),Ke(t,he()),n;if(e===6)cn(t,r);else{if(i=t.current.alternate,!(r&30)&&!jx(i)&&(e=ta(t,r),e===2&&(s=Pc(t),s!==0&&(r=s,e=su(t,s))),e===1))throw n=fs,Yn(t,0),cn(t,r),Ke(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Bn(t,je,$t);break;case 3:if(cn(t,r),(r&130023424)===r&&(e=vd+500-he(),10<e)){if(Fo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Me(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$c(Bn.bind(null,t,je,$t),e);break}Bn(t,je,$t);break;case 4:if(cn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-St(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bx(r/1960))-r,10<r){t.timeoutHandle=$c(Bn.bind(null,t,je,$t),r);break}Bn(t,je,$t);break;case 5:Bn(t,je,$t);break;default:throw Error(b(329))}}}return Ke(t,he()),t.callbackNode===n?hy.bind(null,t):null}function su(t,e){var n=Wi;return t.current.memoizedState.isDehydrated&&(Yn(t,e).flags|=256),t=ta(t,e),t!==2&&(e=je,je=n,e!==null&&ou(e)),t}function ou(t){je===null?je=t:je.push.apply(je,t)}function jx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cn(t,e){for(e&=~_d,e&=~Ba,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-St(e),r=1<<n;t[n]=-1,e&=~r}}function Uf(t){if(H&6)throw Error(b(327));$r();var e=Fo(t,0);if(!(e&1))return Ke(t,he()),null;var n=ta(t,e);if(t.tag!==0&&n===2){var r=Pc(t);r!==0&&(e=r,n=su(t,r))}if(n===1)throw n=fs,Yn(t,0),cn(t,e),Ke(t,he()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bn(t,je,$t),Ke(t,he()),null}function wd(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(Zr=he()+500,Fa&&Fn())}}function nr(t){mn!==null&&mn.tag===0&&!(H&6)&&$r();var e=H;H|=1;var n=ot.transition,r=q;try{if(ot.transition=null,q=1,t)return t()}finally{q=r,ot.transition=n,H=e,!(H&6)&&Fn()}}function xd(){qe=Pr.current,ne(Pr)}function Yn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_x(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(td(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:Xr(),ne(He),ne(De),ud();break;case 5:cd(r);break;case 4:Xr();break;case 13:ne(ie);break;case 19:ne(ie);break;case 10:sd(r.type._context);break;case 22:case 23:xd()}n=n.return}if(Se=t,fe=t=Cn(t.current,null),ke=qe=e,ye=0,fs=null,_d=Ba=tr=0,je=Wi=null,Hn!==null){for(e=0;e<Hn.length;e++)if(n=Hn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Hn=null}return t}function fy(t,e){do{var n=fe;try{if(id(),So.current=Xo,Qo){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qo=!1}if(er=0,we=pe=se=null,Bi=!1,us=0,yd.current=null,n===null||n.return===null){ye=1,fs=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=kf(o);if(_!==null){_.flags&=-257,bf(_,o,a,s,e),_.mode&1&&Cf(s,c,e),e=_,l=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){Cf(s,c,e),Sd();break e}l=Error(b(426))}}else if(re&&a.mode&1){var E=kf(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),bf(E,o,a,s,e),nd(Jr(l,a));break e}}s=l=Jr(l,a),ye!==4&&(ye=2),Wi===null?Wi=[s]:Wi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Qg(s,l,e);yf(s,m);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Sn===null||!Sn.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Xg(s,a,e);yf(s,x);break e}}s=s.return}while(s!==null)}gy(n)}catch(k){e=k,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function py(){var t=Jo.current;return Jo.current=Xo,t===null?Xo:t}function Sd(){(ye===0||ye===3||ye===2)&&(ye=4),Se===null||!(tr&268435455)&&!(Ba&268435455)||cn(Se,ke)}function ta(t,e){var n=H;H|=2;var r=py();(Se!==t||ke!==e)&&($t=null,Yn(t,e));do try{Wx();break}catch(i){fy(t,i)}while(1);if(id(),H=n,Jo.current=r,fe!==null)throw Error(b(261));return Se=null,ke=0,ye}function Wx(){for(;fe!==null;)my(fe)}function Vx(){for(;fe!==null&&!m0();)my(fe)}function my(t){var e=_y(t.alternate,t,qe);t.memoizedProps=t.pendingProps,e===null?gy(t):fe=e,yd.current=null}function gy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Fx(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,fe=null;return}}else if(n=Mx(n,e,qe),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ye===0&&(ye=5)}function Bn(t,e,n){var r=q,i=ot.transition;try{ot.transition=null,q=1,Hx(t,e,n,r)}finally{ot.transition=i,q=r}return null}function Hx(t,e,n,r){do $r();while(mn!==null);if(H&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(k0(t,s),t===Se&&(fe=Se=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oo||(oo=!0,vy(Mo,function(){return $r(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ot.transition,ot.transition=null;var o=q;q=1;var a=H;H|=4,yd.current=null,$x(t,n),uy(n,t),dx(Fc),Uo=!!Mc,Fc=Mc=null,t.current=n,zx(n),g0(),H=a,q=o,ot.transition=s}else t.current=n;if(oo&&(oo=!1,mn=t,ea=i),s=t.pendingLanes,s===0&&(Sn=null),v0(n.stateNode),Ke(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zo)throw Zo=!1,t=ru,ru=null,t;return ea&1&&t.tag!==0&&$r(),s=t.pendingLanes,s&1?t===iu?Vi++:(Vi=0,iu=t):Vi=0,Fn(),null}function $r(){if(mn!==null){var t=Ym(ea),e=ot.transition,n=q;try{if(ot.transition=null,q=16>t?16:t,mn===null)var r=!1;else{if(t=mn,mn=null,ea=0,H&6)throw Error(b(331));var i=H;for(H|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(D=c;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:ji(8,d,s)}var h=d.child;if(h!==null)h.return=d,D=h;else for(;D!==null;){d=D;var f=d.sibling,_=d.return;if(ay(d),d===c){D=null;break}if(f!==null){f.return=_,D=f;break}D=_}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var E=S.sibling;S.sibling=null,S=E}while(S!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ji(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,D=m;break e}D=s.return}}var p=t.current;for(D=p;D!==null;){o=D;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,D=y;else e:for(o=p;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:za(9,a)}}catch(k){ae(a,a.return,k)}if(a===o){D=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,D=x;break e}D=a.return}}if(H=i,Fn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Aa,t)}catch{}r=!0}return r}finally{q=n,ot.transition=e}}return!1}function $f(t,e,n){e=Jr(n,e),e=Qg(t,e,1),t=xn(t,e,1),e=Me(),t!==null&&(ks(t,1,e),Ke(t,e))}function ae(t,e,n){if(t.tag===3)$f(t,t,n);else for(;e!==null;){if(e.tag===3){$f(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){t=Jr(n,t),t=Xg(e,t,1),e=xn(e,t,1),t=Me(),e!==null&&(ks(e,1,t),Ke(e,t));break}}e=e.return}}function Gx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Me(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(ke&n)===n&&(ye===4||ye===3&&(ke&130023424)===ke&&500>he()-vd?Yn(t,0):_d|=n),Ke(t,e)}function yy(t,e){e===0&&(t.mode&1?(e=Qs,Qs<<=1,!(Qs&130023424)&&(Qs=4194304)):e=1);var n=Me();t=Xt(t,e),t!==null&&(ks(t,e,n),Ke(t,n))}function Kx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yy(t,n)}function qx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),yy(t,n)}var _y;_y=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||He.current)We=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return We=!1,Lx(t,e,n);We=!!(t.flags&131072)}else We=!1,re&&e.flags&1048576&&xg(e,Ho,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Co(t,e),t=e.pendingProps;var i=qr(e,De.current);Ur(e,n),i=hd(null,e,r,t,i,n);var s=fd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ge(r)?(s=!0,Wo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ad(e),i.updater=Ua,e.stateNode=i,i._reactInternals=e,Gc(e,r,t,n),e=Yc(null,e,r,!0,s,n)):(e.tag=0,re&&s&&ed(e),Oe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Co(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Qx(r),t=mt(r,t),i){case 0:e=qc(null,e,r,t,n);break e;case 1:e=Tf(null,e,r,t,n);break e;case 11:e=Nf(null,e,r,t,n);break e;case 14:e=If(null,e,r,mt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),qc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Tf(t,e,r,i,n);case 3:e:{if(ty(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,kg(t,e),qo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Jr(Error(b(423)),e),e=Rf(t,e,r,n,i);break e}else if(r!==i){i=Jr(Error(b(424)),e),e=Rf(t,e,r,n,i);break e}else for(Qe=wn(e.stateNode.containerInfo.firstChild),Xe=e,re=!0,yt=null,n=Tg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===i){e=Jt(t,e,n);break e}Oe(t,e,r,n)}e=e.child}return e;case 5:return Rg(e),t===null&&Wc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Uc(r,i)?o=null:s!==null&&Uc(r,s)&&(e.flags|=32),ey(t,e),Oe(t,e,o,n),e.child;case 6:return t===null&&Wc(e),null;case 13:return ny(t,e,n);case 4:return ld(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qr(e,null,r,n):Oe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Nf(t,e,r,i,n);case 7:return Oe(t,e,e.pendingProps,n),e.child;case 8:return Oe(t,e,e.pendingProps.children,n),e.child;case 12:return Oe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(Go,r._currentValue),r._currentValue=o,s!==null)if(kt(s.value,o)){if(s.children===i.children&&!He.current){e=Jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Kt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Oe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ur(e,n),i=ct(i),r=r(i),e.flags|=1,Oe(t,e,r,n),e.child;case 14:return r=e.type,i=mt(r,e.pendingProps),i=mt(r.type,i),If(t,e,r,i,n);case 15:return Jg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Co(t,e),e.tag=1,Ge(r)?(t=!0,Wo(e)):t=!1,Ur(e,n),Ng(e,r,i),Gc(e,r,i,n),Yc(null,e,r,!0,t,n);case 19:return ry(t,e,n);case 22:return Zg(t,e,n)}throw Error(b(156,e.tag))};function vy(t,e){return Hm(t,e)}function Yx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(t,e,n,r){return new Yx(t,e,n,r)}function Ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qx(t){if(typeof t=="function")return Ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ju)return 11;if(t===Wu)return 14}return 2}function Cn(t,e){var n=t.alternate;return n===null?(n=it(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function No(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ed(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xr:return Qn(n.children,i,s,e);case Bu:o=8,i|=8;break;case gc:return t=it(12,n,e,i|2),t.elementType=gc,t.lanes=s,t;case yc:return t=it(13,n,e,i),t.elementType=yc,t.lanes=s,t;case _c:return t=it(19,n,e,i),t.elementType=_c,t.lanes=s,t;case Im:return ja(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bm:o=10;break e;case Nm:o=9;break e;case ju:o=11;break e;case Wu:o=14;break e;case on:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=it(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qn(t,e,n,r){return t=it(7,t,r,e),t.lanes=n,t}function ja(t,e,n,r){return t=it(22,t,r,e),t.elementType=Im,t.lanes=n,t.stateNode={isHidden:!1},t}function Ul(t,e,n){return t=it(6,t,null,e),t.lanes=n,t}function $l(t,e,n){return e=it(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Xx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cd(t,e,n,r,i,s,o,a,l){return t=new Xx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=it(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(s),t}function Jx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function wy(t){if(!t)return Pn;t=t._reactInternals;e:{if(hr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ge(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(Ge(n))return vg(t,n,e)}return e}function xy(t,e,n,r,i,s,o,a,l){return t=Cd(n,r,!0,t,i,s,o,a,l),t.context=wy(null),n=t.current,r=Me(),i=En(n),s=Kt(r,i),s.callback=e??null,xn(n,s,i),t.current.lanes=i,ks(t,i,r),Ke(t,r),t}function Wa(t,e,n,r){var i=e.current,s=Me(),o=En(i);return n=wy(n),e.context===null?e.context=n:e.pendingContext=n,e=Kt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xn(i,e,o),t!==null&&(Et(t,i,o,s),xo(t,i,o)),o}function na(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kd(t,e){zf(t,e),(t=t.alternate)&&zf(t,e)}function Zx(){return null}var Sy=typeof reportError=="function"?reportError:function(t){console.error(t)};function bd(t){this._internalRoot=t}Va.prototype.render=bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Wa(t,e,null,null)};Va.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;nr(function(){Wa(null,t,null,null)}),e[Qt]=null}};function Va(t){this._internalRoot=t}Va.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ln.length&&e!==0&&e<ln[n].priority;n++);ln.splice(n,0,t),n===0&&eg(t)}};function Nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ha(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bf(){}function e1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=na(o);s.call(c)}}var o=xy(e,r,t,0,null,!1,!1,"",Bf);return t._reactRootContainer=o,t[Qt]=o.current,ss(t.nodeType===8?t.parentNode:t),nr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=na(l);a.call(c)}}var l=Cd(t,0,!1,null,null,!1,!1,"",Bf);return t._reactRootContainer=l,t[Qt]=l.current,ss(t.nodeType===8?t.parentNode:t),nr(function(){Wa(e,l,n,r)}),l}function Ga(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=na(o);a.call(l)}}Wa(e,o,t,i)}else o=e1(n,e,t,i,r);return na(o)}Qm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oi(e.pendingLanes);n!==0&&(Gu(e,n|1),Ke(e,he()),!(H&6)&&(Zr=he()+500,Fn()))}break;case 13:nr(function(){var r=Xt(t,1);if(r!==null){var i=Me();Et(r,t,1,i)}}),kd(t,1)}};Ku=function(t){if(t.tag===13){var e=Xt(t,134217728);if(e!==null){var n=Me();Et(e,t,134217728,n)}kd(t,134217728)}};Xm=function(t){if(t.tag===13){var e=En(t),n=Xt(t,e);if(n!==null){var r=Me();Et(n,t,e,r)}kd(t,e)}};Jm=function(){return q};Zm=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};Ic=function(t,e,n){switch(e){case"input":if(xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ma(r);if(!i)throw Error(b(90));Rm(r),xc(r,i)}}}break;case"textarea":Am(t,n);break;case"select":e=n.value,e!=null&&Or(t,!!n.multiple,e,!1)}};$m=wd;zm=nr;var t1={usingClientEntryPoint:!1,Events:[Ns,kr,Ma,Fm,Um,wd]},bi={findFiberByHostInstance:Vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},n1={bundleType:bi.bundleType,version:bi.version,rendererPackageName:bi.rendererPackageName,rendererConfig:bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wm(t),t===null?null:t.stateNode},findFiberByHostInstance:bi.findFiberByHostInstance||Zx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{Aa=ao.inject(n1),Rt=ao}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t1;Ze.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nd(e))throw Error(b(200));return Jx(t,e,null,n)};Ze.createRoot=function(t,e){if(!Nd(t))throw Error(b(299));var n=!1,r="",i=Sy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cd(t,1,!1,null,null,n,!1,r,i),t[Qt]=e.current,ss(t.nodeType===8?t.parentNode:t),new bd(e)};Ze.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=Wm(e),t=t===null?null:t.stateNode,t};Ze.flushSync=function(t){return nr(t)};Ze.hydrate=function(t,e,n){if(!Ha(e))throw Error(b(200));return Ga(null,t,e,!0,n)};Ze.hydrateRoot=function(t,e,n){if(!Nd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Sy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xy(e,null,t,1,n??null,i,!1,s,o),t[Qt]=e.current,ss(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Va(e)};Ze.render=function(t,e,n){if(!Ha(e))throw Error(b(200));return Ga(null,t,e,!1,n)};Ze.unmountComponentAtNode=function(t){if(!Ha(t))throw Error(b(40));return t._reactRootContainer?(nr(function(){Ga(null,null,t,!1,function(){t._reactRootContainer=null,t[Qt]=null})}),!0):!1};Ze.unstable_batchedUpdates=wd;Ze.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ha(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Ga(t,e,n,!1,r)};Ze.version="18.2.0-next-9e3b772b8-20220608";function Ey(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ey)}catch(t){console.error(t)}}Ey(),xm.exports=Ze;var r1=xm.exports,jf=r1;pc.createRoot=jf.createRoot,pc.hydrateRoot=jf.hydrateRoot;const i1=()=>{};/**
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
 */const Cy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw hi(e)},hi=function(t){return new Error("Firebase Database ("+Cy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ky=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},s1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Id={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),r.push(n[d],n[h],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ky(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new o1;const f=s<<2|a>>4;if(r.push(f),c!==64){const _=a<<4&240|c>>2;if(r.push(_),h!==64){const v=c<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class o1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const by=function(t){const e=ky(t);return Id.encodeByteArray(e,!0)},ra=function(t){return by(t).replace(/\./g,"")},ia=function(t){try{return Id.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function a1(t){return Ny(void 0,t)}function Ny(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!l1(n)||(t[n]=Ny(t[n],e[n]));return t}function l1(t){return t!=="__proto__"}/**
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
 */function c1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const u1=()=>c1().__FIREBASE_DEFAULTS__,d1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},h1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ia(t[1]);return e&&JSON.parse(e)},Td=()=>{try{return i1()||u1()||d1()||h1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Iy=t=>{var e,n;return(n=(e=Td())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},f1=t=>{const e=Iy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ty=()=>{var t;return(t=Td())==null?void 0:t.config},Ry=t=>{var e;return(e=Td())==null?void 0:e[`_${t}`]};/**
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
 */class Ts{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function p1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[ra(JSON.stringify(n)),ra(JSON.stringify(o)),a].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function m1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Py(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ay(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function g1(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Dy(){return Cy.NODE_ADMIN===!0}function Oy(){try{return typeof indexedDB=="object"}catch{return!1}}function Ly(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function y1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _1="FirebaseError";class Mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_1,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fr.prototype.create)}}class fr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?v1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mt(i,a,r)}}function v1(t,e){return t.replace(w1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const w1=/\{\$([^}]+)}/g;/**
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
 */function ps(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
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
 */const My=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ps(ia(s[0])||""),n=ps(ia(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},x1=function(t){const e=My(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},S1=function(t){const e=My(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ei(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function au(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wf(s)&&Wf(o)){if(!rr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wf(t){return t!==null&&typeof t=="object"}/**
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
 */function fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class E1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):h<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+c+l+d+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function C1(t,e){const n=new k1(t,e);return n.subscribe.bind(n)}class k1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");b1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=zl),i.error===void 0&&(i.error=zl),i.complete===void 0&&(i.complete=zl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function b1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zl(){}function Ka(t,e){return`${t} failed: ${e} argument `}/**
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
 */const N1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qa=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const I1=1e3,T1=2,R1=4*60*60*1e3,P1=.5;function Vf(t,e=I1,n=T1){const r=e*Math.pow(n,t),i=Math.round(P1*r*(Math.random()-.5)*2);return Math.min(R1,r+i)}/**
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
 */function Rs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fy(t){return(await fetch(t,{credentials:"include"})).ok}class bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jn="[DEFAULT]";/**
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
 */class A1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ts;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(O1(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:D1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function D1(t){return t===jn?void 0:t}function O1(t){return t.instantiationMode==="EAGER"}/**
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
 */class L1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new A1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const M1={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},F1=Y.INFO,U1={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},$1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=U1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ya{constructor(e){this.name=e,this._logLevel=F1,this._logHandler=$1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?M1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const z1=(t,e)=>e.some(n=>t instanceof n);let Hf,Gf;function B1(){return Hf||(Hf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function j1(){return Gf||(Gf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uy=new WeakMap,lu=new WeakMap,$y=new WeakMap,Bl=new WeakMap,Pd=new WeakMap;function W1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Uy.set(n,t)}).catch(()=>{}),Pd.set(e,t),e}function V1(t){if(lu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});lu.set(t,e)}let cu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$y.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function H1(t){cu=t(cu)}function G1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jl(this),e,...n);return $y.set(r,e.sort?e.sort():[e]),kn(r)}:j1().includes(t)?function(...e){return t.apply(jl(this),e),kn(Uy.get(this))}:function(...e){return kn(t.apply(jl(this),e))}}function K1(t){return typeof t=="function"?G1(t):(t instanceof IDBTransaction&&V1(t),z1(t,B1())?new Proxy(t,cu):t)}function kn(t){if(t instanceof IDBRequest)return W1(t);if(Bl.has(t))return Bl.get(t);const e=K1(t);return e!==t&&(Bl.set(t,e),Pd.set(e,t)),e}const jl=t=>Pd.get(t);function zy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=kn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(kn(o.result),l.oldVersion,l.newVersion,kn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const q1=["get","getKey","getAll","getAllKeys","count"],Y1=["put","add","delete","clear"],Wl=new Map;function Kf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wl.get(e))return Wl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Y1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||q1.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Wl.set(e,s),s}H1(t=>({...t,get:(e,n,r)=>Kf(e,n)||t.get(e,n,r),has:(e,n)=>!!Kf(e,n)||t.has(e,n)}));/**
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
 */class Q1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(X1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function X1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uu="@firebase/app",qf="0.14.10";/**
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
 */const Zt=new Ya("@firebase/app"),J1="@firebase/app-compat",Z1="@firebase/analytics-compat",eS="@firebase/analytics",tS="@firebase/app-check-compat",nS="@firebase/app-check",rS="@firebase/auth",iS="@firebase/auth-compat",sS="@firebase/database",oS="@firebase/data-connect",aS="@firebase/database-compat",lS="@firebase/functions",cS="@firebase/functions-compat",uS="@firebase/installations",dS="@firebase/installations-compat",hS="@firebase/messaging",fS="@firebase/messaging-compat",pS="@firebase/performance",mS="@firebase/performance-compat",gS="@firebase/remote-config",yS="@firebase/remote-config-compat",_S="@firebase/storage",vS="@firebase/storage-compat",wS="@firebase/firestore",xS="@firebase/ai",SS="@firebase/firestore-compat",ES="firebase",CS="12.11.0";/**
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
 */const du="[DEFAULT]",kS={[uu]:"fire-core",[J1]:"fire-core-compat",[eS]:"fire-analytics",[Z1]:"fire-analytics-compat",[nS]:"fire-app-check",[tS]:"fire-app-check-compat",[rS]:"fire-auth",[iS]:"fire-auth-compat",[sS]:"fire-rtdb",[oS]:"fire-data-connect",[aS]:"fire-rtdb-compat",[lS]:"fire-fn",[cS]:"fire-fn-compat",[uS]:"fire-iid",[dS]:"fire-iid-compat",[hS]:"fire-fcm",[fS]:"fire-fcm-compat",[pS]:"fire-perf",[mS]:"fire-perf-compat",[gS]:"fire-rc",[yS]:"fire-rc-compat",[_S]:"fire-gcs",[vS]:"fire-gcs-compat",[wS]:"fire-fst",[SS]:"fire-fst-compat",[xS]:"fire-vertex","fire-js":"fire-js",[ES]:"fire-js-all"};/**
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
 */const oa=new Map,bS=new Map,hu=new Map;function Yf(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ot(t){const e=t.name;if(hu.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;hu.set(e,t);for(const n of oa.values())Yf(n,t);for(const n of bS.values())Yf(n,t);return!0}function Ps(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _t(t){return t==null?!1:t.settings!==void 0}/**
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
 */const NS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new fr("app","Firebase",NS);/**
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
 */class IS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const pi=CS;function By(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:du,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=Ty()),!n)throw bn.create("no-options");const s=oa.get(i);if(s){if(rr(n,s.options)&&rr(r,s.config))return s;throw bn.create("duplicate-app",{appName:i})}const o=new L1(i);for(const l of hu.values())o.addComponent(l);const a=new IS(n,r,o);return oa.set(i,a),a}function jy(t=du){const e=oa.get(t);if(!e&&t===du&&Ty())return By();if(!e)throw bn.create("no-app",{appName:t});return e}function at(t,e,n){let r=kS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(o.join(" "));return}Ot(new bt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const TS="firebase-heartbeat-database",RS=1,ms="firebase-heartbeat-store";let Vl=null;function Wy(){return Vl||(Vl=zy(TS,RS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ms)}catch(n){console.warn(n)}}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),Vl}async function PS(t){try{const n=(await Wy()).transaction(ms),r=await n.objectStore(ms).get(Vy(t));return await n.done,r}catch(e){if(e instanceof Mt)Zt.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}async function Qf(t,e){try{const r=(await Wy()).transaction(ms,"readwrite");await r.objectStore(ms).put(e,Vy(t)),await r.done}catch(n){if(n instanceof Mt)Zt.warn(n.message);else{const r=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(r.message)}}}function Vy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const AS=1024,DS=30;class OS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>DS){const o=FS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xf(),{heartbeatsToSend:r,unsentEntries:i}=LS(this._heartbeatsCache.heartbeats),s=ra(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Zt.warn(n),""}}}function Xf(){return new Date().toISOString().substring(0,10)}function LS(t,e=AS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oy()?Ly().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Qf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Qf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Jf(t){return ra(JSON.stringify({version:2,heartbeats:t})).length}function FS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function US(t){Ot(new bt("platform-logger",e=>new Q1(e),"PRIVATE")),Ot(new bt("heartbeat",e=>new OS(e),"PRIVATE")),at(uu,qf,t),at(uu,qf,"esm2020"),at("fire-js","")}US("");const Zf="@firebase/database",ep="1.1.2";/**
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
 */let Hy="";function $S(t){Hy=t}/**
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
 */class zS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ps(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class BS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Gy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zS(e)}}catch{}return new BS},Kn=Gy("localStorage"),fu=Gy("sessionStorage");/**
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
 */const zr=new Ya("@firebase/database"),jS=function(){let t=1;return function(){return t++}}(),Ky=function(t){const e=N1(t),n=new E1;n.update(e);const r=n.digest();return Id.encodeByteArray(r)},As=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=As.apply(null,r):typeof r=="object"?e+=ge(r):e+=r,e+=" "}return e};let Xn=null,tp=!0;const WS=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(zr.logLevel=Y.VERBOSE,Xn=zr.log.bind(zr),e&&fu.set("logging_enabled",!0)):typeof t=="function"?Xn=t:(Xn=null,fu.remove("logging_enabled"))},Ce=function(...t){if(tp===!0&&(tp=!1,Xn===null&&fu.get("logging_enabled")===!0&&WS(!0)),Xn){const e=As.apply(null,t);Xn(e)}},Ds=function(t){return function(...e){Ce(t,...e)}},pu=function(...t){const e="FIREBASE INTERNAL ERROR: "+As(...t);zr.error(e)},en=function(...t){const e=`FIREBASE FATAL ERROR: ${As(...t)}`;throw zr.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+As(...t);zr.warn(e)},VS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ad=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},HS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ti="[MIN_NAME]",ir="[MAX_NAME]",pr=function(t,e){if(t===e)return 0;if(t===ti||e===ir)return-1;if(e===ti||t===ir)return 1;{const n=np(t),r=np(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},GS=function(t,e){return t===e?0:t<e?-1:1},Ni=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},Dd=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ge(e[r]),n+=":",n+=Dd(t[e[r]]);return n+="}",n},qy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ne(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Yy=function(t){I(!Ad(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},KS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function YS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const QS=new RegExp("^-?(0*)\\d{1,10}$"),XS=-2147483648,JS=2147483647,np=function(t){if(QS.test(t)){const e=Number(t);if(e>=XS&&e<=JS)return e}return null},mi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},ZS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Hi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class eE{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,_t(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class tE{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Br{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Br.OWNER="owner";/**
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
 */const Od="5",Qy="v",Xy="s",Jy="r",Zy="f",e_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,t_="ls",n_="p",mu="ac",r_="websocket",i_="long_polling";/**
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
 */class s_{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function nE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function o_(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===r_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===i_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nE(t)&&(n.ns=t.namespace);const i=[];return Ne(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class rE{constructor(){this.counters_={}}incrementCounter(e,n=1){Ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return a1(this.counters_)}}/**
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
 */const Hl={},Gl={};function Ld(t){const e=t.toString();return Hl[e]||(Hl[e]=new rE),Hl[e]}function iE(t,e){const n=t.toString();return Gl[n]||(Gl[n]=e()),Gl[n]}/**
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
 */class sE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&mi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const rp="start",oE="close",aE="pLPCommand",lE="pRTLPCB",a_="id",l_="pw",c_="ser",cE="cb",uE="seg",dE="ts",hE="d",fE="dframe",u_=1870,d_=30,pE=u_-d_,mE=25e3,gE=3e4;class Ar{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ds(e),this.stats_=Ld(n),this.urlFn=l=>(this.appCheckToken&&(l[mu]=this.appCheckToken),o_(n,i_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gE)),HS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Md((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===rp)this.id=a,this.password=l;else if(o===oE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[rp]="t",r[c_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[cE]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Qy]=Od,this.transportSessionId&&(r[Xy]=this.transportSessionId),this.lastSessionId&&(r[t_]=this.lastSessionId),this.applicationId&&(r[n_]=this.applicationId),this.appCheckToken&&(r[mu]=this.appCheckToken),typeof location<"u"&&location.hostname&&e_.test(location.hostname)&&(r[Jy]=Zy);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ar.forceAllow_=!0}static forceDisallow(){Ar.forceDisallow_=!0}static isAvailable(){return Ar.forceAllow_?!0:!Ar.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!KS()&&!qS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=by(n),i=qy(r,pE);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[fE]="t",r[a_]=e,r[l_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Md{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jS(),window[aE+this.uniqueCallbackIdentifier]=e,window[lE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Md.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ce("frame writing exception"),a.stack&&Ce(a.stack),Ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[a_]=this.myID,e[l_]=this.myPW,e[c_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+d_+r.length<=u_;){const o=this.pendingSegs.shift();r=r+"&"+uE+i+"="+o.seg+"&"+dE+i+"="+o.ts+"&"+hE+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(mE)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const yE=16384,_E=45e3;let aa=null;typeof MozWebSocket<"u"?aa=MozWebSocket:typeof WebSocket<"u"&&(aa=WebSocket);class vt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ds(this.connId),this.stats_=Ld(n),this.connURL=vt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Qy]=Od,typeof location<"u"&&location.hostname&&e_.test(location.hostname)&&(o[Jy]=Zy),n&&(o[Xy]=n),r&&(o[t_]=r),i&&(o[mu]=i),s&&(o[n_]=s),o_(e,r_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kn.set("previous_websocket_failure",!0);try{let r;Dy(),this.mySock=new aa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&aa!==null&&!vt.forceDisallow_}static previouslyFailed(){return Kn.isInMemoryStorage||Kn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ps(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=qy(n,yE);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(_E))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vt.responsesRequiredToBeHealthy=2;vt.healthyTimeout=3e4;/**
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
 */class gs{static get ALL_TRANSPORTS(){return[Ar,vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=vt&&vt.isAvailable();let r=n&&!vt.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[vt];else{const i=this.transports_=[];for(const s of gs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);gs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gs.globalTransportInitialized_=!1;/**
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
 */const vE=6e4,wE=5e3,xE=10*1024,SE=100*1024,Kl="t",ip="d",EE="s",sp="r",CE="e",op="o",ap="a",lp="n",cp="p",kE="h";class bE{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ds("c:"+this.id+":"),this.transportManager_=new gs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Hi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>SE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>xE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Kl in e){const n=e[Kl];n===ap?this.upgradeIfSecondaryHealthy_():n===sp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===op&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ni("t",e),r=Ni("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:cp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ap,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:lp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ni("t",e),r=Ni("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ni(Kl,e);if(ip in e){const r=e[ip];if(n===kE){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===lp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===EE?this.onConnectionShutdown_(r):n===sp?this.onReset_(r):n===CE?pu("Server Error: "+r):n===op?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Od!==r&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Hi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Hi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:cp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class h_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class f_{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class la extends f_{static getInstance(){return new la}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const up=32,dp=768;class Q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new Q("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function An(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Q(t.pieces_,e)}function Fd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function NE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ys(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function p_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Q(e,0)}function le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Q(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=B(t),r=B(e);if(n===null)return e;if(n===r)return Le(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function IE(t,e){const n=ys(t,0),r=ys(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=pr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Ud(t,e){if(An(t)!==An(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function st(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(An(t)>An(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class TE{constructor(e,n){this.errorPrefix_=n,this.parts_=ys(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=qa(this.parts_[r]);m_(this)}}function RE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=qa(e),m_(t)}function PE(t){const e=t.parts_.pop();t.byteLength_-=qa(e),t.parts_.length>0&&(t.byteLength_-=1)}function m_(t){if(t.byteLength_>dp)throw new Error(t.errorPrefix_+"has a key path longer than "+dp+" bytes ("+t.byteLength_+").");if(t.parts_.length>up)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+up+") or object contains a cycle "+Wn(t))}function Wn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class $d extends f_{static getInstance(){return new $d}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ii=1e3,AE=60*5*1e3,hp=30*1e3,DE=1.3,OE=3e4,LE="server_kill",fp=3;class qt extends h_{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=qt.nextPersistentConnectionId_++,this.log_=Ds("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ii,this.maxReconnectDelay_=AE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Dy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$d.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&la.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ge(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ts,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;qt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ft(e,"w")){const r=ei(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||S1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=x1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):pu("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ii,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ii,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>OE&&(this.reconnectDelay_=Ii),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*DE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+qt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new bE(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Fe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(LE)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Fe(h),l())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],au(this.interruptReasons_)&&(this.reconnectDelay_=Ii,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Dd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=fp&&(this.reconnectDelay_=hp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=fp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Hy.replace(/\./g,"-")]=1,Rd()?e["framework.cordova"]=1:Ay()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=la.getInstance().currentlyOnline();return au(this.interruptReasons_)&&e}}qt.nextPersistentConnectionId_=0;qt.nextConnectionId_=0;/**
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
 */class Qa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(ti,e),i=new j(ti,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
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
 */let lo;class g_ extends Qa{static get __EMPTY_NODE(){return lo}static set __EMPTY_NODE(e){lo=e}compare(e,n){return pr(e.name,n.name)}isDefinedOn(e){throw hi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(ir,lo)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,lo)}toString(){return".key"}}const jr=new g_;/**
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
 */class co{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xe.RED,this.left=i??Ve.EMPTY_NODE,this.right=s??Ve.EMPTY_NODE}copy(e,n,r,i,s){return new xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ve.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class ME{copy(e,n,r,i,s){return this}insert(e,n,r){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,n=Ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new co(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new co(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new co(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new co(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new ME;/**
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
 */function FE(t,e){return pr(t.name,e.name)}function zd(t,e){return pr(t,e)}/**
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
 */let gu;function UE(t){gu=t}const y_=function(t){return typeof t=="number"?"number:"+Yy(t):"string:"+t},__=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ft(e,".sv"),"Priority must be a string or number.")}else I(t===gu||t.isEmpty(),"priority of unexpected type.");I(t===gu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let pp;class ve{static set __childrenNodeConstructor(e){pp=e}static get __childrenNodeConstructor(){return pp}constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),__(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:B(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=B(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||An(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+y_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Yy(this.value_):e+=this.value_,this.lazyHash_=Ky(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),s=ve.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let v_,w_;function $E(t){v_=t}function zE(t){w_=t}class BE extends Qa{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?pr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(ir,new ve("[PRIORITY-POST]",w_))}makePost(e,n){const r=v_(e);return new j(n,new ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const ce=new BE;/**
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
 */const jE=Math.log(2);class WE{constructor(e){const n=s=>parseInt(Math.log(s)/jE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ca=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let h,f;if(d===0)return null;if(d===1)return h=t[l],f=n?n(h):h,new xe(f,h.node,xe.BLACK,null,null);{const _=parseInt(d/2,10)+l,v=i(l,_),S=i(_+1,c);return h=t[_],f=n?n(h):h,new xe(f,h.node,xe.BLACK,v,S)}},s=function(l){let c=null,d=null,h=t.length;const f=function(v,S){const E=h-v,m=h;h-=v;const p=i(E+1,m),y=t[E],x=n?n(y):y;_(new xe(x,y.node,S,null,p))},_=function(v){c?(c.left=v,c=v):(d=v,c=v)};for(let v=0;v<l.count;++v){const S=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));S?f(E,xe.BLACK):(f(E,xe.BLACK),f(E,xe.RED))}return d},o=new WE(t.length),a=s(o);return new Ve(r||e,a)};/**
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
 */let ql;const yr={};class Vt{static get Default(){return I(yr&&ce,"ChildrenNode.ts has not been loaded"),ql=ql||new Vt({".priority":yr},{".priority":ce}),ql}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ei(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ve?n:null}hasIndex(e){return Ft(this.indexSet_,e.toString())}addIndex(e,n){I(e!==jr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ca(r,e.getCompare()):a=yr;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new Vt(d,c)}addToIndexes(e,n){const r=sa(this.indexes_,(i,s)=>{const o=ei(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===yr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ca(a,o.getCompare())}else return yr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new Vt(r,this.indexSet_)}removeFromIndexes(e,n){const r=sa(this.indexes_,i=>{if(i===yr)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new Vt(r,this.indexSet_)}}/**
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
 */let Ti;class U{static get EMPTY_NODE(){return Ti||(Ti=new U(new Ve(zd),null,Vt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&__(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ti}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ti:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ti:this.priorityNode_;return new U(i,o,s)}}updateChild(e,n){const r=B(e);if(r===null)return n;{I(B(e)!==".priority"||An(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ce,(o,a)=>{n[o]=a.val(e),r++,s&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+y_(this.getPriority().val())+":"),this.forEachChild(ce,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ky(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Os?-1:0}withIndex(e){if(e===jr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===jr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ce),i=n.getIterator(ce);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===jr?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class VE extends U{constructor(){super(new Ve(zd),U.EMPTY_NODE,Vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const Os=new VE;Object.defineProperties(j,{MIN:{value:new j(ti,U.EMPTY_NODE)},MAX:{value:new j(ir,Os)}});g_.__EMPTY_NODE=U.EMPTY_NODE;ve.__childrenNodeConstructor=U;UE(Os);zE(Os);/**
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
 */const HE=!0;function me(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,me(e))}if(!(t instanceof Array)&&HE){const n=[];let r=!1;if(Ne(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=me(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return U.EMPTY_NODE;const s=ca(n,FE,o=>o.name,zd);if(r){const o=ca(n,ce.getCompare());return new U(s,me(e),new Vt({".priority":o},{".priority":ce}))}else return new U(s,me(e),Vt.Default)}else{let n=U.EMPTY_NODE;return Ne(t,(r,i)=>{if(Ft(t,r)&&r.substring(0,1)!=="."){const s=me(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(me(e))}}$E(me);/**
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
 */class GE extends Qa{constructor(e){super(),this.indexPath_=e,I(!W(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?pr(e.name,n.name):s}makePost(e,n){const r=me(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,Os);return new j(ir,e)}toString(){return ys(this.indexPath_,0).join("/")}}/**
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
 */class KE extends Qa{compare(e,n){const r=e.node.compareTo(n.node);return r===0?pr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=me(e);return new j(n,r)}toString(){return".value"}}const qE=new KE;/**
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
 */function x_(t){return{type:"value",snapshotNode:t}}function ni(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _s(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function YE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Bd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(_s(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ni(n,r)):o.trackChildChange(vs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ce,(i,s)=>{n.hasChild(i)||r.trackChildChange(_s(i,s))}),n.isLeafNode()||n.forEachChild(ce,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(vs(i,s,o))}else r.trackChildChange(ni(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ws{constructor(e){this.indexedFilter_=new Bd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ws.getStartPost_(e),this.endPost_=ws.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const s=this;return n.forEachChild(ce,(o,a)=>{s.matches(new j(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class QE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ws(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=U.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new j(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(vs(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(_s(n,h));const S=a.updateImmediateChild(n,U.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(ni(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(_s(c.name,c.node)),s.trackChildChange(ni(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,U.EMPTY_NODE)):e}}/**
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
 */class jd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ti}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){const e=new jd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function XE(t){return t.loadsAllData()?new Bd(t.getIndex()):t.hasLimit()?new QE(t):new ws(t)}function mp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ce?n="$priority":t.index_===qE?n="$value":t.index_===jr?n="$key":(I(t.index_ instanceof GE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ge(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ge(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ge(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function gp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ce&&(e.i=t.index_.toString()),e}/**
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
 */class ua extends h_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ds("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ua.getListenId_(e,r),a={};this.listens_[o]=a;const l=mp(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,r),ei(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=ua.getListenId_(e,n);delete this.listens_[r]}get(e){const n=mp(e._queryParams),r=e._path.toString(),i=new Ts;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ps(a.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class JE{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function da(){return{value:null,children:new Map}}function S_(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=B(e);t.children.has(r)||t.children.set(r,da());const i=t.children.get(r);e=Z(e),S_(i,e,n)}}function yu(t,e,n){t.value!==null?n(e,t.value):ZE(t,(r,i)=>{const s=new Q(e.toString()+"/"+r);yu(i,s,n)})}function ZE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class eC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ne(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const yp=10*1e3,tC=30*1e3,nC=5*60*1e3;class rC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new eC(e);const r=yp+(tC-yp)*Math.random();Hi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ne(e,(i,s)=>{s>0&&Ft(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Hi(this.reportStats_.bind(this),Math.floor(Math.random()*2*nC))}}/**
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
 */var wt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wt||(wt={}));function Wd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ha{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=wt.ACK_USER_WRITE,this.source=Wd()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(e));return new ha(K(),n,this.revert)}}else return I(B(this.path)===e,"operationForChild called for unrelated child."),new ha(Z(this.path),this.affectedTree,this.revert)}}/**
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
 */class xs{constructor(e,n){this.source=e,this.path=n,this.type=wt.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new xs(this.source,K()):new xs(this.source,Z(this.path))}}/**
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
 */class sr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=wt.OVERWRITE}operationForChild(e){return W(this.path)?new sr(this.source,K(),this.snap.getImmediateChild(e)):new sr(this.source,Z(this.path),this.snap)}}/**
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
 */class ri{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=wt.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new Q(e));return n.isEmpty()?null:n.value?new sr(this.source,K(),n.value):new ri(this.source,K(),n)}else return I(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ri(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Dn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class iC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function sC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(YE(o.childName,o.snapshotNode))}),Ri(t,i,"child_removed",e,r,n),Ri(t,i,"child_added",e,r,n),Ri(t,i,"child_moved",s,r,n),Ri(t,i,"child_changed",e,r,n),Ri(t,i,"value",e,r,n),i}function Ri(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>aC(t,a,l)),o.forEach(a=>{const l=oC(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function oC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function aC(t,e,n){if(e.childName==null||n.childName==null)throw hi("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Xa(t,e){return{eventCache:t,serverCache:e}}function Gi(t,e,n,r){return Xa(new Dn(e,n,r),t.serverCache)}function E_(t,e,n,r){return Xa(t.eventCache,new Dn(e,n,r))}function fa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function or(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Yl;const lC=()=>(Yl||(Yl=new Ve(GS)),Yl);class J{static fromObject(e){let n=new J(null);return Ne(e,(r,i)=>{n=n.set(new Q(r),i)}),n}constructor(e,n=lC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(W(e))return null;{const r=B(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Z(e),n);return s!=null?{path:le(new Q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=B(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new J(null)}}set(e,n){if(W(e))return new J(n,this.children);{const r=B(e),s=(this.children.get(r)||new J(null)).set(Z(e),n),o=this.children.insert(r,s);return new J(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=B(e),r=this.children.get(n);if(r){const i=r.remove(Z(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new J(null):new J(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=B(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if(W(e))return n;{const r=B(e),s=(this.children.get(r)||new J(null)).setTree(Z(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new J(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(W(e))return null;{const s=B(e),o=this.children.get(s);return o?o.findOnPath_(Z(e),le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const i=B(e),s=this.children.get(i);return s?s.foreachOnPath_(Z(e),le(n,i),r):new J(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Ct{constructor(e){this.writeTree_=e}static empty(){return new Ct(new J(null))}}function Ki(t,e,n){if(W(e))return new Ct(new J(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Le(i,e);return s=s.updateChild(o,n),new Ct(t.writeTree_.set(i,s))}else{const i=new J(n),s=t.writeTree_.setTree(e,i);return new Ct(s)}}}function _u(t,e,n){let r=t;return Ne(n,(i,s)=>{r=Ki(r,le(e,i),s)}),r}function _p(t,e){if(W(e))return Ct.empty();{const n=t.writeTree_.setTree(e,new J(null));return new Ct(n)}}function vu(t,e){return mr(t,e)!=null}function mr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function vp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ce,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function Nn(t,e){if(W(e))return t;{const n=mr(t,e);return n!=null?new Ct(new J(n)):new Ct(t.writeTree_.subtree(e))}}function wu(t){return t.writeTree_.isEmpty()}function ii(t,e){return C_(K(),t.writeTree_,e)}function C_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=C_(le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(le(t,".priority"),r)),n}}/**
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
 */function Ja(t,e){return I_(e,t)}function cC(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ki(t.visibleWrites,e,n)),t.lastWriteId=r}function uC(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=_u(t.visibleWrites,e,n),t.lastWriteId=r}function dC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function hC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&fC(a,r.path)?i=!1:st(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return pC(t),!0;if(r.snap)t.visibleWrites=_p(t.visibleWrites,r.path);else{const a=r.children;Ne(a,l=>{t.visibleWrites=_p(t.visibleWrites,le(r.path,l))})}return!0}else return!1}function fC(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(le(t.path,n),e))return!0;return!1}function pC(t){t.visibleWrites=k_(t.allWrites,mC,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mC(t){return t.visible}function k_(t,e,n){let r=Ct.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)st(n,o)?(a=Le(n,o),r=Ki(r,a,s.snap)):st(o,n)&&(a=Le(o,n),r=Ki(r,K(),s.snap.getChild(a)));else if(s.children){if(st(n,o))a=Le(n,o),r=_u(r,a,s.children);else if(st(o,n))if(a=Le(o,n),W(a))r=_u(r,K(),s.children);else{const l=ei(s.children,B(a));if(l){const c=l.getChild(Z(a));r=Ki(r,K(),c)}}}else throw hi("WriteRecord should have .snap or .children")}}return r}function b_(t,e,n,r,i){if(!r&&!i){const s=mr(t.visibleWrites,e);if(s!=null)return s;{const o=Nn(t.visibleWrites,e);if(wu(o))return n;if(n==null&&!vu(o,K()))return null;{const a=n||U.EMPTY_NODE;return ii(o,a)}}}else{const s=Nn(t.visibleWrites,e);if(!i&&wu(s))return n;if(!i&&n==null&&!vu(s,K()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(st(c.path,e)||st(e,c.path))},a=k_(t.allWrites,o,e),l=n||U.EMPTY_NODE;return ii(a,l)}}}function gC(t,e,n){let r=U.EMPTY_NODE;const i=mr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ce,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Nn(t.visibleWrites,e);return n.forEachChild(ce,(o,a)=>{const l=ii(Nn(s,new Q(o)),a);r=r.updateImmediateChild(o,l)}),vp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Nn(t.visibleWrites,e);return vp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function yC(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=le(e,n);if(vu(t.visibleWrites,s))return null;{const o=Nn(t.visibleWrites,s);return wu(o)?i.getChild(n):ii(o,i.getChild(n))}}function _C(t,e,n,r){const i=le(e,n),s=mr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Nn(t.visibleWrites,i);return ii(o,r.getNode().getImmediateChild(n))}else return null}function vC(t,e){return mr(t.visibleWrites,e)}function wC(t,e,n,r,i,s,o){let a;const l=Nn(t.visibleWrites,e),c=mr(l,K());if(c!=null)a=c;else if(n!=null)a=ii(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=f.getNext();for(;_&&d.length<i;)h(_,r)!==0&&d.push(_),_=f.getNext();return d}else return[]}function xC(){return{visibleWrites:Ct.empty(),allWrites:[],lastWriteId:-1}}function pa(t,e,n,r){return b_(t.writeTree,t.treePath,e,n,r)}function Gd(t,e){return gC(t.writeTree,t.treePath,e)}function wp(t,e,n,r){return yC(t.writeTree,t.treePath,e,n,r)}function ma(t,e){return vC(t.writeTree,le(t.treePath,e))}function SC(t,e,n,r,i,s){return wC(t.writeTree,t.treePath,e,n,r,i,s)}function Kd(t,e,n){return _C(t.writeTree,t.treePath,e,n)}function N_(t,e){return I_(le(t.treePath,e),t.writeTree)}function I_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class EC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,vs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,_s(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ni(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,vs(r,e.snapshotNode,i.oldSnap));else throw hi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class CC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const T_=new CC;class qd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Dn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:or(this.viewCache_),s=SC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function kC(t){return{filter:t}}function bC(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function NC(t,e,n,r,i){const s=new EC;let o,a;if(n.type===wt.OVERWRITE){const c=n;c.source.fromUser?o=xu(t,e,c.path,c.snap,r,i,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=ga(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===wt.MERGE){const c=n;c.source.fromUser?o=TC(t,e,c.path,c.children,r,i,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Su(t,e,c.path,c.children,r,i,a,s))}else if(n.type===wt.ACK_USER_WRITE){const c=n;c.revert?o=AC(t,e,c.path,r,i,s):o=RC(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===wt.LISTEN_COMPLETE)o=PC(t,e,n.path,r,s);else throw hi("Unknown operation type: "+n.type);const l=s.getChanges();return IC(e,o,l),{viewCache:o,changes:l}}function IC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=fa(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(x_(fa(e)))}}function R_(t,e,n,r,i,s){const o=e.eventCache;if(ma(r,n)!=null)return e;{let a,l;if(W(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=or(e),d=c instanceof U?c:U.EMPTY_NODE,h=Gd(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=pa(r,or(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=B(n);if(c===".priority"){I(An(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=wp(r,n,d,l);h!=null?a=t.filter.updatePriority(d,h):a=o.getNode()}else{const d=Z(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=wp(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(d,f):h=o.getNode().getImmediateChild(c)}else h=Kd(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,d,i,s):a=o.getNode()}}return Gi(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function ga(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),_,null)}else{const _=B(n);if(!l.isCompleteForPath(n)&&An(n)>1)return e;const v=Z(n),E=l.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?c=d.updatePriority(l.getNode(),E):c=d.updateChild(l.getNode(),_,E,v,T_,null)}const h=E_(e,c,l.isFullyInitialized()||W(n),d.filtersNodes()),f=new qd(i,h,s);return R_(t,h,n,i,f,a)}function xu(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new qd(i,e,s);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Gi(e,c,!0,t.filter.filtersNodes());else{const h=B(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Gi(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Z(n),_=a.getNode().getImmediateChild(h);let v;if(W(f))v=r;else{const S=d.getCompleteChild(h);S!=null?Fd(f)===".priority"&&S.getChild(p_(f)).isEmpty()?v=S:v=S.updateChild(f,r):v=U.EMPTY_NODE}if(_.equals(v))l=e;else{const S=t.filter.updateChild(a.getNode(),h,v,f,d,o);l=Gi(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function xp(t,e){return t.eventCache.isCompleteForChild(e)}function TC(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=le(n,l);xp(e,B(d))&&(a=xu(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=le(n,l);xp(e,B(d))||(a=xu(t,a,d,c,i,s,o))}),a}function Sp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Su(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;W(n)?c=r:c=new J(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),v=Sp(t,_,f);l=ga(t,l,new Q(h),v,i,s,o,a)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!_){const v=e.serverCache.getNode().getImmediateChild(h),S=Sp(t,v,f);l=ga(t,l,new Q(h),S,i,s,o,a)}}),l}function RC(t,e,n,r,i,s,o){if(ma(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ga(t,e,n,l.getNode().getChild(n),i,s,a,o);if(W(n)){let c=new J(null);return l.getNode().forEachChild(jr,(d,h)=>{c=c.set(new Q(d),h)}),Su(t,e,n,c,i,s,a,o)}else return e}else{let c=new J(null);return r.foreach((d,h)=>{const f=le(n,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),Su(t,e,n,c,i,s,a,o)}}function PC(t,e,n,r,i){const s=e.serverCache,o=E_(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return R_(t,o,n,r,T_,i)}function AC(t,e,n,r,i,s){let o;if(ma(r,n)!=null)return e;{const a=new qd(r,e,i),l=e.eventCache.getNode();let c;if(W(n)||B(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=pa(r,or(e));else{const h=e.serverCache.getNode();I(h instanceof U,"serverChildren would be complete if leaf node"),d=Gd(r,h)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=B(n);let h=Kd(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=t.filter.updateChild(l,d,h,Z(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,U.EMPTY_NODE,Z(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=pa(r,or(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||ma(r,K())!=null,Gi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class DC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Bd(r.getIndex()),s=XE(r);this.processor_=kC(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(U.EMPTY_NODE,a.getNode(),null),d=new Dn(l,o.isFullyInitialized(),i.filtersNodes()),h=new Dn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Xa(h,d),this.eventGenerator_=new iC(this.query_)}get query(){return this.query_}}function OC(t){return t.viewCache_.serverCache.getNode()}function LC(t){return fa(t.viewCache_)}function MC(t,e){const n=or(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function Ep(t){return t.eventRegistrations_.length===0}function FC(t,e){t.eventRegistrations_.push(e)}function Cp(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function kp(t,e,n,r){e.type===wt.MERGE&&e.source.queryId!==null&&(I(or(t.viewCache_),"We should always have a full cache before handling merges"),I(fa(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=NC(t.processor_,i,e,n,r);return bC(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,P_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function UC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ce,(s,o)=>{r.push(ni(s,o))}),n.isFullyInitialized()&&r.push(x_(n.getNode())),P_(t,r,n.getNode(),e)}function P_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return sC(t.eventGenerator_,e,n,i)}/**
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
 */let ya;class A_{constructor(){this.views=new Map}}function $C(t){I(!ya,"__referenceConstructor has already been defined"),ya=t}function zC(){return I(ya,"Reference.ts has not been loaded"),ya}function BC(t){return t.views.size===0}function Yd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),kp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(kp(o,e,n,r));return s}}function D_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=pa(n,i?r:null),l=!1;a?l=!0:r instanceof U?(a=Gd(n,r),l=!1):(a=U.EMPTY_NODE,l=!1);const c=Xa(new Dn(a,l,!1),new Dn(r,i,!1));return new DC(e,c)}return o}function jC(t,e,n,r,i,s){const o=D_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),FC(o,n),UC(o,n)}function WC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=On(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Cp(c,n,r)),Ep(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Cp(l,n,r)),Ep(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!On(t)&&s.push(new(zC())(e._repo,e._path)),{removed:s,events:o}}function O_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function In(t,e){let n=null;for(const r of t.views.values())n=n||MC(r,e);return n}function L_(t,e){if(e._queryParams.loadsAllData())return Za(t);{const r=e._queryIdentifier;return t.views.get(r)}}function M_(t,e){return L_(t,e)!=null}function On(t){return Za(t)!=null}function Za(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let _a;function VC(t){I(!_a,"__referenceConstructor has already been defined"),_a=t}function HC(){return I(_a,"Reference.ts has not been loaded"),_a}let GC=1;class bp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=xC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function F_(t,e,n,r,i){return cC(t.pendingWriteTree_,e,n,r,i),i?gi(t,new sr(Wd(),e,n)):[]}function KC(t,e,n,r){uC(t.pendingWriteTree_,e,n,r);const i=J.fromObject(n);return gi(t,new ri(Wd(),e,i))}function gn(t,e,n=!1){const r=dC(t.pendingWriteTree_,e);if(hC(t.pendingWriteTree_,e)){let s=new J(null);return r.snap!=null?s=s.set(K(),!0):Ne(r.children,o=>{s=s.set(new Q(o),!0)}),gi(t,new ha(r.path,s,n))}else return[]}function Ls(t,e,n){return gi(t,new sr(Vd(),e,n))}function qC(t,e,n){const r=J.fromObject(n);return gi(t,new ri(Vd(),e,r))}function YC(t,e){return gi(t,new xs(Vd(),e))}function QC(t,e,n){const r=Xd(t,n);if(r){const i=Jd(r),s=i.path,o=i.queryId,a=Le(s,e),l=new xs(Hd(o),a);return Zd(t,s,l)}else return[]}function va(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||M_(o,e))){const l=WC(o,e,n,r);BC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(f,_)=>On(_));if(d&&!h){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const _=ZC(f);for(let v=0;v<_.length;++v){const S=_[v],E=S.query,m=B_(t,S);t.listenProvider_.startListening(qi(E),Ss(t,E),m.hashFn,m.onComplete)}}}!h&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(qi(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(el(f));t.listenProvider_.stopListening(qi(f),_)}))}ek(t,c)}return a}function U_(t,e,n,r){const i=Xd(t,r);if(i!=null){const s=Jd(i),o=s.path,a=s.queryId,l=Le(o,e),c=new sr(Hd(a),l,n);return Zd(t,o,c)}else return[]}function XC(t,e,n,r){const i=Xd(t,r);if(i){const s=Jd(i),o=s.path,a=s.queryId,l=Le(o,e),c=J.fromObject(n),d=new ri(Hd(a),l,c);return Zd(t,o,d)}else return[]}function Eu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const v=Le(f,i);s=s||In(_,v),o=o||On(_)});let a=t.syncPointTree_.get(i);a?(o=o||On(a),s=s||In(a,K())):(a=new A_,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=U.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const S=In(v,K());S&&(s=s.updateImmediateChild(_,S))}));const c=M_(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=el(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=tk();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const d=Ja(t.pendingWriteTree_,i);let h=jC(a,e,n,d,s,l);if(!c&&!o&&!r){const f=L_(a,e);h=h.concat(nk(t,e,f))}return h}function Qd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Le(o,e),c=In(a,l);if(c)return c});return b_(i,e,s,n,!0)}function JC(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const h=Le(c,n);r=r||In(d,h)});let i=t.syncPointTree_.get(n);i?r=r||In(i,K()):(i=new A_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Dn(r,!0,!1):null,a=Ja(t.pendingWriteTree_,e._path),l=D_(i,e,a,s?o.getNode():U.EMPTY_NODE,s);return LC(l)}function gi(t,e){return $_(e,t.syncPointTree_,null,Ja(t.pendingWriteTree_,K()))}function $_(t,e,n,r){if(W(t.path))return z_(t,e,n,r);{const i=e.get(K());n==null&&i!=null&&(n=In(i,K()));let s=[];const o=B(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=N_(r,o);s=s.concat($_(a,l,c,d))}return i&&(s=s.concat(Yd(i,t,r,n))),s}}function z_(t,e,n,r){const i=e.get(K());n==null&&i!=null&&(n=In(i,K()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=N_(r,o),d=t.operationForChild(o);d&&(s=s.concat(z_(d,a,l,c)))}),i&&(s=s.concat(Yd(i,t,r,n))),s}function B_(t,e){const n=e.query,r=Ss(t,n);return{hashFn:()=>(OC(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?QC(t,n._path,r):YC(t,n._path);{const s=YS(i,n);return va(t,n,null,s)}}}}function Ss(t,e){const n=el(e);return t.queryToTagMap.get(n)}function el(t){return t._path.toString()+"$"+t._queryIdentifier}function Xd(t,e){return t.tagToQueryMap.get(e)}function Jd(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Q(t.substr(0,e))}}function Zd(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Ja(t.pendingWriteTree_,e);return Yd(r,n,i,null)}function ZC(t){return t.fold((e,n,r)=>{if(n&&On(n))return[Za(n)];{let i=[];return n&&(i=O_(n)),Ne(r,(s,o)=>{i=i.concat(o)}),i}})}function qi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(HC())(t._repo,t._path):t}function ek(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=el(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function tk(){return GC++}function nk(t,e,n){const r=e._path,i=Ss(t,e),s=B_(t,n),o=t.listenProvider_.startListening(qi(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)I(!On(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!W(c)&&d&&On(d))return[Za(d).query];{let f=[];return d&&(f=f.concat(O_(d).map(_=>_.query))),Ne(h,(_,v)=>{f=f.concat(v)}),f}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(qi(d),Ss(t,d))}}return o}/**
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
 */class eh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new eh(n)}node(){return this.node_}}class th{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new th(this.syncTree_,n)}node(){return Qd(this.syncTree_,this.path_)}}const rk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Np=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ik(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sk(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ik=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},sk=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},j_=function(t,e,n,r){return nh(e,new th(n,t),r)},W_=function(t,e,n){return nh(t,new eh(e),n)};function nh(t,e,n){const r=t.getPriority().val(),i=Np(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Np(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ve(a,me(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ve(i))),o.forEachChild(ce,(a,l)=>{const c=nh(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class rh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ih(t,e){let n=e instanceof Q?e:new Q(e),r=t,i=B(n);for(;i!==null;){const s=ei(r.node.children,i)||{children:{},childCount:0};r=new rh(i,r,s),n=Z(n),i=B(n)}return r}function yi(t){return t.node.value}function V_(t,e){t.node.value=e,Cu(t)}function H_(t){return t.node.childCount>0}function ok(t){return yi(t)===void 0&&!H_(t)}function tl(t,e){Ne(t.node.children,(n,r)=>{e(new rh(n,t,r))})}function G_(t,e,n,r){n&&!r&&e(t),tl(t,i=>{G_(i,e,!0,r)}),n&&r&&e(t)}function ak(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ms(t){return new Q(t.parent===null?t.name:Ms(t.parent)+"/"+t.name)}function Cu(t){t.parent!==null&&lk(t.parent,t.name,t)}function lk(t,e,n){const r=ok(n),i=Ft(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Cu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Cu(t))}/**
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
 */const ck=/[\[\].#$\/\u0000-\u001F\u007F]/,uk=/[\[\].#$\u0000-\u001F\u007F]/,Ql=10*1024*1024,sh=function(t){return typeof t=="string"&&t.length!==0&&!ck.test(t)},K_=function(t){return typeof t=="string"&&t.length!==0&&!uk.test(t)},dk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),K_(t)},hk=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ad(t)||t&&typeof t=="object"&&Ft(t,".sv")},q_=function(t,e,n,r){r&&e===void 0||nl(Ka(t,"value"),e,n)},nl=function(t,e,n){const r=n instanceof Q?new TE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Wn(r)+" with contents = "+e.toString());if(Ad(e))throw new Error(t+"contains "+e.toString()+" "+Wn(r));if(typeof e=="string"&&e.length>Ql/3&&qa(e)>Ql)throw new Error(t+"contains a string greater than "+Ql+" utf8 bytes "+Wn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ne(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!sh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);RE(r,o),nl(t,a,r),PE(r)}),i&&s)throw new Error(t+' contains ".value" child '+Wn(r)+" in addition to actual children.")}},fk=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ys(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!sh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(IE);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&st(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},pk=function(t,e,n,r){if(r&&e===void 0)return;const i=Ka(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ne(e,(o,a)=>{const l=new Q(o);if(nl(i,a,le(n,l)),Fd(l)===".priority"&&!hk(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),fk(i,s)},Y_=function(t,e,n,r){if(!(r&&n===void 0)&&!K_(n))throw new Error(Ka(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},mk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Y_(t,e,n,r)},Q_=function(t,e){if(B(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},gk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!dk(n))throw new Error(Ka(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class yk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ud(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function X_(t,e,n){rl(t,n),J_(t,r=>Ud(r,e))}function dt(t,e,n){rl(t,n),J_(t,r=>st(r,e)||st(e,r))}function J_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(_k(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function _k(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Xn&&Ce("event: "+n.toString()),mi(r)}}}/**
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
 */const vk="repo_interrupt",wk=25;class xk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=da(),this.transactionQueueTree_=new rh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Sk(t,e,n){if(t.stats_=Ld(t.repoInfo_),t.forceRestClient_||ZS())t.server_=new ua(t.repoInfo_,(r,i,s,o)=>{Ip(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Tp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new qt(t.repoInfo_,e,(r,i,s,o)=>{Ip(t,r,i,s,o)},r=>{Tp(t,r)},r=>{Ek(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=iE(t.repoInfo_,()=>new rC(t.stats_,t.server_)),t.infoData_=new JE,t.infoSyncTree_=new bp({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ls(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),oh(t,"connected",!1),t.serverSyncTree_=new bp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);dt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Z_(t){const n=t.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function il(t){return rk({timestamp:Z_(t)})}function Ip(t,e,n,r,i){t.dataUpdateCount++;const s=new Q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=sa(n,c=>me(c));o=XC(t.serverSyncTree_,s,l,i)}else{const l=me(n);o=U_(t.serverSyncTree_,s,l,i)}else if(r){const l=sa(n,c=>me(c));o=qC(t.serverSyncTree_,s,l)}else{const l=me(n);o=Ls(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=si(t,s)),dt(t.eventQueue_,a,o)}function Tp(t,e){oh(t,"connected",e),e===!1&&Nk(t)}function Ek(t,e){Ne(e,(n,r)=>{oh(t,n,r)})}function oh(t,e,n){const r=new Q("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(r,i);const s=Ls(t.infoSyncTree_,r,i);dt(t.eventQueue_,r,s)}function ah(t){return t.nextWriteId_++}function Ck(t,e,n){const r=JC(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=me(i).withIndex(e._queryParams.getIndex());Eu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ls(t.serverSyncTree_,e._path,s);else{const a=Ss(t.serverSyncTree_,e);o=U_(t.serverSyncTree_,e._path,s,a)}return dt(t.eventQueue_,e._path,o),va(t.serverSyncTree_,e,n,null,!0),s},i=>(Fs(t,"get for query "+ge(e)+" failed: "+i),Promise.reject(new Error(i))))}function kk(t,e,n,r,i){Fs(t,"set",{path:e.toString(),value:n,priority:r});const s=il(t),o=me(n,r),a=Qd(t.serverSyncTree_,e),l=W_(o,a,s),c=ah(t),d=F_(t.serverSyncTree_,e,l,c,!0);rl(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||Fe("set at "+e+" failed: "+f);const S=gn(t.serverSyncTree_,c,!v);dt(t.eventQueue_,e,S),ku(t,i,f,_)});const h=ch(t,e);si(t,h),dt(t.eventQueue_,h,[])}function bk(t,e,n,r){Fs(t,"update",{path:e.toString(),value:n});let i=!0;const s=il(t),o={};if(Ne(n,(a,l)=>{i=!1,o[a]=j_(le(e,a),me(l),t.serverSyncTree_,s)}),i)Ce("update() called with empty data.  Don't do anything."),ku(t,r,"ok",void 0);else{const a=ah(t),l=KC(t.serverSyncTree_,e,o,a);rl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const h=c==="ok";h||Fe("update at "+e+" failed: "+c);const f=gn(t.serverSyncTree_,a,!h),_=f.length>0?si(t,e):e;dt(t.eventQueue_,_,f),ku(t,r,c,d)}),Ne(n,c=>{const d=ch(t,le(e,c));si(t,d)}),dt(t.eventQueue_,e,[])}}function Nk(t){Fs(t,"onDisconnectEvents");const e=il(t),n=da();yu(t.onDisconnect_,K(),(i,s)=>{const o=j_(i,s,t.serverSyncTree_,e);S_(n,i,o)});let r=[];yu(n,K(),(i,s)=>{r=r.concat(Ls(t.serverSyncTree_,i,s));const o=ch(t,i);si(t,o)}),t.onDisconnect_=da(),dt(t.eventQueue_,K(),r)}function Ik(t,e,n){let r;B(e._path)===".info"?r=Eu(t.infoSyncTree_,e,n):r=Eu(t.serverSyncTree_,e,n),X_(t.eventQueue_,e._path,r)}function Rp(t,e,n){let r;B(e._path)===".info"?r=va(t.infoSyncTree_,e,n):r=va(t.serverSyncTree_,e,n),X_(t.eventQueue_,e._path,r)}function Tk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(vk)}function Fs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function ku(t,e,n,r){e&&mi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function ev(t,e,n){return Qd(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function lh(t,e=t.transactionQueueTree_){if(e||sl(t,e),yi(e)){const n=nv(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Rk(t,Ms(e),n)}else H_(e)&&tl(e,n=>{lh(t,n)})}function Rk(t,e,n){const r=n.map(c=>c.currentWriteId),i=ev(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=Le(e,d.path);s=s.updateChild(h,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Fs(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(gn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();sl(t,ih(t.transactionQueueTree_,e)),lh(t,t.transactionQueueTree_),dt(t.eventQueue_,e,d);for(let f=0;f<h.length;f++)mi(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Fe("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}si(t,e)}},o)}function si(t,e){const n=tv(t,e),r=Ms(n),i=nv(t,n);return Pk(t,i,r),r}function Pk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Le(n,l.path);let d=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,i=i.concat(gn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=wk)d=!0,h="maxretry",i=i.concat(gn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=ev(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){nl("transaction failed: Data returned ",_,l.path);let v=me(_);typeof _=="object"&&_!=null&&Ft(_,".priority")||(v=v.updatePriority(f.getPriority()));const E=l.currentWriteId,m=il(t),p=W_(v,f,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=p,l.currentWriteId=ah(t),o.splice(o.indexOf(E),1),i=i.concat(F_(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(gn(t.serverSyncTree_,E,!0))}else d=!0,h="nodata",i=i.concat(gn(t.serverSyncTree_,l.currentWriteId,!0))}dt(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}sl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)mi(r[a]);lh(t,t.transactionQueueTree_)}function tv(t,e){let n,r=t.transactionQueueTree_;for(n=B(e);n!==null&&yi(r)===void 0;)r=ih(r,n),e=Z(e),n=B(e);return r}function nv(t,e){const n=[];return rv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function rv(t,e,n){const r=yi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);tl(e,i=>{rv(t,i,n)})}function sl(t,e){const n=yi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,V_(e,n.length>0?n:void 0)}tl(e,r=>{sl(t,r)})}function ch(t,e){const n=Ms(tv(t,e)),r=ih(t.transactionQueueTree_,e);return ak(r,i=>{Xl(t,i)}),Xl(t,r),G_(r,i=>{Xl(t,i)}),n}function Xl(t,e){const n=yi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(gn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?V_(e,void 0):n.length=s+1,dt(t.eventQueue_,Ms(e),i);for(let o=0;o<r.length;o++)mi(r[o])}}/**
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
 */function Ak(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Dk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Pp=function(t,e){const n=Ok(t),r=n.namespace;n.domain==="firebase.com"&&en(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&en("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||VS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new s_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Q(n.pathString)}},Ok=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(i=Ak(t.substring(d,h)));const f=Dk(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const Ap="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Lk=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Ap.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ap.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class iv{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class sv{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ov{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class uh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return W(this._path)?null:Fd(this._path)}get ref(){return new Ut(this._repo,this._path)}get _queryIdentifier(){const e=gp(this._queryParams),n=Dd(e);return n==="{}"?"default":n}get _queryObject(){return gp(this._queryParams)}isEqual(e){if(e=Ie(e),!(e instanceof uh))return!1;const n=this._repo===e._repo,r=Ud(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+NE(this._path)}}class Ut extends uh{constructor(e,n){super(e,n,new jd,!1)}get parent(){const e=p_(this._path);return e===null?null:new Ut(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class oi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Q(e),r=ai(this.ref,e);return new oi(this._node.getChild(n),r,ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new oi(i,ai(this.ref,r),ce)))}hasChild(e){const n=new Q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ht(t,e){return t=Ie(t),t._checkNotDeleted("ref"),e!==void 0?ai(t._root,e):t._root}function ai(t,e){return t=Ie(t),B(t._path)===null?mk("child","path",e,!1):Y_("child","path",e,!1),new Ut(t._repo,le(t._path,e))}function dh(t,e){t=Ie(t),Q_("push",t._path),q_("push",e,t._path,!0);const n=Z_(t._repo),r=Lk(n),i=ai(t,r),s=ai(t,r);let o;return e!=null?o=wa(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function wa(t,e){t=Ie(t),Q_("set",t._path),q_("set",e,t._path,!1);const n=new Ts;return kk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function av(t,e){pk("update",e,t._path,!1);const n=new Ts;return bk(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Us(t){t=Ie(t);const e=new ov(()=>{}),n=new ol(e);return Ck(t._repo,t,n).then(r=>new oi(r,new Ut(t._repo,t._path),t._queryParams.getIndex()))}class ol{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new iv("value",this,new oi(e.snapshotNode,new Ut(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sv(this,e,n):null}matches(e){return e instanceof ol?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class hh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sv(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const r=ai(new Ut(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new iv(e.type,this,new oi(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof hh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Mk(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,h)=>{Rp(t._repo,t,a),l(d,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new ov(n,s||void 0),a=e==="value"?new ol(o):new hh(e,o);return Ik(t._repo,t,a),()=>Rp(t._repo,t,a)}function lv(t,e,n,r){return Mk(t,"value",e,n,r)}$C(Ut);VC(Ut);/**
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
 */const Fk="FIREBASE_DATABASE_EMULATOR_HOST",bu={};let Uk=!1;function $k(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Rs(s);t.repoInfo_=new s_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function zk(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||en("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Pp(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Fk]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Pp(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new Br(Br.OWNER):new tE(t.name,t.options,e);gk("Invalid Firebase Database URL",o),W(o.path)||en("Database URL must point to the root of a Firebase Database (not including a child path).");const h=jk(a,t,d,new eE(t,n));return new Wk(h,t)}function Bk(t,e){const n=bu[e];(!n||n[t.key]!==t)&&en(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Tk(t),delete n[t.key]}function jk(t,e,n,r){let i=bu[e.name];i||(i={},bu[e.name]=i);let s=i[t.toURLString()];return s&&en("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new xk(t,Uk,n,r),i[t.toURLString()]=s,s}class Wk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Sk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ut(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Bk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&en("Cannot call "+e+" on a deleted database.")}}function Vk(t=jy(),e){const n=Ps(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=f1("database");r&&Hk(n,...r)}return n}function Hk(t,e,n,r={}){t=Ie(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&rr(r,s.repoInfo_.emulatorOptions))return;en("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&en('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Br(Br.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:p1(r.mockUserToken,t.app.options.projectId);o=new Br(a)}Rs(e)&&Fy(e),$k(s,i,r,o)}/**
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
 */function Gk(t){$S(pi),Ot(new bt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return zk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),at(Zf,ep,t),at(Zf,ep,"esm2020")}qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Gk();var Kk="firebase",qk="12.11.0";/**
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
 */at(Kk,qk,"app");const cv="@firebase/installations",fh="0.6.21";/**
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
 */const uv=1e4,dv=`w:${fh}`,hv="FIS_v2",Yk="https://firebaseinstallations.googleapis.com/v1",Qk=60*60*1e3,Xk="installations",Jk="Installations";/**
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
 */const Zk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ar=new fr(Xk,Jk,Zk);function fv(t){return t instanceof Mt&&t.code.includes("request-failed")}/**
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
 */function pv({projectId:t}){return`${Yk}/projects/${t}/installations`}function mv(t){return{token:t.token,requestStatus:2,expiresIn:tb(t.expiresIn),creationTime:Date.now()}}async function gv(t,e){const r=(await e.json()).error;return ar.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function yv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function eb(t,{refreshToken:e}){const n=yv(t);return n.append("Authorization",nb(e)),n}async function _v(t){const e=await t();return e.status>=500&&e.status<600?t():e}function tb(t){return Number(t.replace("s","000"))}function nb(t){return`${hv} ${t}`}/**
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
 */async function rb({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=pv(t),i=yv(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:hv,appId:t.appId,sdkVersion:dv},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await _v(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:mv(c.authToken)}}else throw await gv("Create Installation",l)}/**
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
 */function vv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function ib(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const sb=/^[cdef][\w-]{21}$/,Nu="";function ob(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ab(t);return sb.test(n)?n:Nu}catch{return Nu}}function ab(t){return ib(t).substr(0,22)}/**
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
 */function al(t){return`${t.appName}!${t.appId}`}/**
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
 */const wv=new Map;function xv(t,e){const n=al(t);Sv(n,e),lb(n,e)}function Sv(t,e){const n=wv.get(t);if(n)for(const r of n)r(e)}function lb(t,e){const n=cb();n&&n.postMessage({key:t,fid:e}),ub()}let qn=null;function cb(){return!qn&&"BroadcastChannel"in self&&(qn=new BroadcastChannel("[Firebase] FID Change"),qn.onmessage=t=>{Sv(t.data.key,t.data.fid)}),qn}function ub(){wv.size===0&&qn&&(qn.close(),qn=null)}/**
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
 */const db="firebase-installations-database",hb=1,lr="firebase-installations-store";let Jl=null;function ph(){return Jl||(Jl=zy(db,hb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lr)}}})),Jl}async function xa(t,e){const n=al(t),i=(await ph()).transaction(lr,"readwrite"),s=i.objectStore(lr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&xv(t,e.fid),e}async function Ev(t){const e=al(t),r=(await ph()).transaction(lr,"readwrite");await r.objectStore(lr).delete(e),await r.done}async function ll(t,e){const n=al(t),i=(await ph()).transaction(lr,"readwrite"),s=i.objectStore(lr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&xv(t,a.fid),a}/**
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
 */async function mh(t){let e;const n=await ll(t.appConfig,r=>{const i=fb(r),s=pb(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Nu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fb(t){const e=t||{fid:ob(),registrationStatus:0};return Cv(e)}function pb(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ar.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=mb(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gb(t)}:{installationEntry:e}}async function mb(t,e){try{const n=await rb(t,e);return xa(t.appConfig,n)}catch(n){throw fv(n)&&n.customData.serverCode===409?await Ev(t.appConfig):await xa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function gb(t){let e=await Dp(t.appConfig);for(;e.registrationStatus===1;)await vv(100),e=await Dp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mh(t);return r||n}return e}function Dp(t){return ll(t,e=>{if(!e)throw ar.create("installation-not-found");return Cv(e)})}function Cv(t){return yb(t)?{fid:t.fid,registrationStatus:0}:t}function yb(t){return t.registrationStatus===1&&t.registrationTime+uv<Date.now()}/**
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
 */async function _b({appConfig:t,heartbeatServiceProvider:e},n){const r=vb(t,n),i=eb(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:dv,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await _v(()=>fetch(r,a));if(l.ok){const c=await l.json();return mv(c)}else throw await gv("Generate Auth Token",l)}function vb(t,{fid:e}){return`${pv(t)}/${e}/authTokens:generate`}/**
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
 */async function gh(t,e=!1){let n;const r=await ll(t.appConfig,s=>{if(!kv(s))throw ar.create("not-registered");const o=s.authToken;if(!e&&Sb(o))return s;if(o.requestStatus===1)return n=wb(t,e),s;{if(!navigator.onLine)throw ar.create("app-offline");const a=Cb(s);return n=xb(t,a),a}});return n?await n:r.authToken}async function wb(t,e){let n=await Op(t.appConfig);for(;n.authToken.requestStatus===1;)await vv(100),n=await Op(t.appConfig);const r=n.authToken;return r.requestStatus===0?gh(t,e):r}function Op(t){return ll(t,e=>{if(!kv(e))throw ar.create("not-registered");const n=e.authToken;return kb(n)?{...e,authToken:{requestStatus:0}}:e})}async function xb(t,e){try{const n=await _b(t,e),r={...e,authToken:n};return await xa(t.appConfig,r),n}catch(n){if(fv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ev(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await xa(t.appConfig,r)}throw n}}function kv(t){return t!==void 0&&t.registrationStatus===2}function Sb(t){return t.requestStatus===2&&!Eb(t)}function Eb(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Qk}function Cb(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function kb(t){return t.requestStatus===1&&t.requestTime+uv<Date.now()}/**
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
 */async function bb(t){const e=t,{installationEntry:n,registrationPromise:r}=await mh(e);return r?r.catch(console.error):gh(e).catch(console.error),n.fid}/**
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
 */async function Nb(t,e=!1){const n=t;return await Ib(n),(await gh(n,e)).token}async function Ib(t){const{registrationPromise:e}=await mh(t);e&&await e}/**
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
 */function Tb(t){if(!t||!t.options)throw Zl("App Configuration");if(!t.name)throw Zl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Zl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Zl(t){return ar.create("missing-app-config-values",{valueName:t})}/**
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
 */const bv="installations",Rb="installations-internal",Pb=t=>{const e=t.getProvider("app").getImmediate(),n=Tb(e),r=Ps(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ab=t=>{const e=t.getProvider("app").getImmediate(),n=Ps(e,bv).getImmediate();return{getId:()=>bb(n),getToken:i=>Nb(n,i)}};function Db(){Ot(new bt(bv,Pb,"PUBLIC")),Ot(new bt(Rb,Ab,"PRIVATE"))}Db();at(cv,fh);at(cv,fh,"esm2020");/**
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
 */const Lp="analytics",Ob="firebase_id",Lb="origin",Mb=60*1e3,Fb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ue=new Ya("@firebase/analytics");/**
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
 */const Ub={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},lt=new fr("analytics","Analytics",Ub);/**
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
 */function $b(t){if(!t.startsWith(yh)){const e=lt.create("invalid-gtag-resource",{gtagURL:t});return Ue.warn(e.message),""}return t}function Nv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function zb(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Bb(t,e){const n=zb("firebase-js-sdk-policy",{createScriptURL:$b}),r=document.createElement("script"),i=`${yh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function jb(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Wb(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Nv(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Ue.error(a)}t("config",i,s)}async function Vb(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Nv(n);for(const l of o){const c=a.find(h=>h.measurementId===l),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ue.error(s)}}function Hb(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await Vb(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await Wb(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Ue.error(a)}}return i}function Gb(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Hb(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Kb(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(yh)&&n.src.includes(t))return n;return null}/**
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
 */const qb=30,Yb=1e3;class Qb{constructor(e={},n=Yb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Iv=new Qb;function Xb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Jb(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:Xb(n)},i=Fb.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();(o=l.error)!=null&&o.message&&(a=l.error.message)}catch{}throw lt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function Zb(t,e=Iv,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw lt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw lt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new nN;return setTimeout(async()=>{a.abort()},n!==void 0?n:Mb),Tv({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Tv(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Iv){var a;const{appId:s,measurementId:o}=t;try{await eN(r,e)}catch(l){if(o)return Ue.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw l}try{const l=await Jb(t);return i.deleteThrottleMetadata(s),l}catch(l){const c=l;if(!tN(c)){if(i.deleteThrottleMetadata(s),o)return Ue.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw l}const d=Number((a=c==null?void 0:c.customData)==null?void 0:a.httpStatus)===503?Vf(n,i.intervalMillis,qb):Vf(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,h),Ue.debug(`Calling attemptFetch again in ${d} millis`),Tv(t,h,r,i)}}function eN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(lt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function tN(t){if(!(t instanceof Mt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class nN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function rN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function iN(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function sN(){if(Oy())try{await Ly()}catch(t){return Ue.warn(lt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ue.warn(lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oN(t,e,n,r,i,s,o){const a=Zb(t);a.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Ue.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Ue.error(f)),e.push(a);const l=sN().then(f=>{if(f)return r.getId()}),[c,d]=await Promise.all([a,l]);Kb(s)||Bb(s,c.measurementId),i("js",new Date);const h=(o==null?void 0:o.config)??{};return h[Lb]="firebase",h.update=!0,d!=null&&(h[Ob]=d),i("config",c.measurementId,h),c.measurementId}/**
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
 */class aN{constructor(e){this.app=e}_delete(){return delete Wr[this.app.options.appId],Promise.resolve()}}let Wr={},Mp=[];const Fp={};let ec="dataLayer",lN="gtag",Up,_h,$p=!1;function cN(){const t=[];if(Py()&&t.push("This is a browser extension environment."),y1()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=lt.create("invalid-analytics-context",{errorInfo:e});Ue.warn(n.message)}}function uN(t,e,n){cN();const r=t.options.appId;if(!r)throw lt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ue.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw lt.create("no-api-key");if(Wr[r]!=null)throw lt.create("already-exists",{id:r});if(!$p){jb(ec);const{wrappedGtag:s,gtagCore:o}=Gb(Wr,Mp,Fp,ec,lN);_h=s,Up=o,$p=!0}return Wr[r]=oN(t,Mp,Fp,e,Up,ec,n),new aN(t)}function dN(t,e,n){t=Ie(t),iN(_h,Wr[t.app.options.appId],e,n).catch(r=>Ue.error(r))}function hN(t,e,n,r){t=Ie(t),rN(_h,Wr[t.app.options.appId],e,n,r).catch(i=>Ue.error(i))}const zp="@firebase/analytics",Bp="0.10.21";function fN(){Ot(new bt(Lp,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return uN(r,i,n)},"PUBLIC")),Ot(new bt("analytics-internal",t,"PRIVATE")),at(zp,Bp),at(zp,Bp,"esm2020");function t(e){try{const n=e.getProvider(Lp).getImmediate();return{logEvent:(r,i,s)=>hN(n,r,i,s),setUserProperties:(r,i)=>dN(n,r,i)}}catch(n){throw lt.create("interop-component-reg-failed",{reason:n})}}}fN();function Rv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pN=Rv,Pv=new fr("auth","Firebase",Rv());/**
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
 */const Sa=new Ya("@firebase/auth");function mN(t,...e){Sa.logLevel<=Y.WARN&&Sa.warn(`Auth (${pi}): ${t}`,...e)}function Io(t,...e){Sa.logLevel<=Y.ERROR&&Sa.error(`Auth (${pi}): ${t}`,...e)}/**
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
 */function Lt(t,...e){throw wh(t,...e)}function At(t,...e){return wh(t,...e)}function vh(t,e,n){const r={...pN(),[e]:n};return new fr("auth","Firebase",r).create(e,{appName:t.name})}function Tn(t){return vh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Lt(t,"argument-error"),vh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pv.create(t,...e)}function $(t,e,...n){if(!t)throw wh(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Io(e),new Error(e)}function tn(t,e){t||Ht(e)}/**
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
 */function Iu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function yN(){return jp()==="http:"||jp()==="https:"}function jp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function _N(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yN()||Py()||"connection"in navigator)?navigator.onLine:!0}function vN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $s{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Rd()||Ay()}get(){return _N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xh(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Av{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SN=new $s(3e4,6e4);function Sh(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function _i(t,e,n,r,i={}){return Dv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=fi({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return m1()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Rs(t.emulatorConfig.host)&&(c.credentials="include"),Av.fetch()(await Ov(t,t.config.apiHost,n,a),c)})}async function Dv(t,e,n){t._canInitEmulator=!1;const r={...wN,...e};try{const i=new CN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw uo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw uo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw uo(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw vh(t,d,c);Lt(t,d)}}catch(i){if(i instanceof Mt)throw i;Lt(t,"network-request-failed",{message:String(i)})}}async function EN(t,e,n,r,i={}){const s=await _i(t,e,n,r,i);return"mfaPendingCredential"in s&&Lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ov(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?xh(t.config,i):`${t.config.apiScheme}://${i}`;return xN.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class CN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),SN.get())})}}function uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=At(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function kN(t,e){return _i(t,"POST","/v1/accounts:delete",e)}async function Ea(t,e){return _i(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bN(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),i=Eh(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yi(tc(i.auth_time)),issuedAtTime:Yi(tc(i.iat)),expirationTime:Yi(tc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function tc(t){return Number(t)*1e3}function Eh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Io("JWT malformed, contained fewer than 3 sections"),null;try{const i=ia(n);return i?JSON.parse(i):(Io("Failed to decode base64 JWT payload"),null)}catch(i){return Io("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wp(t){const e=Eh(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Es(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mt&&NN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class IN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yi(this.lastLoginAt),this.creationTime=Yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ca(t){var h;const e=t.auth,n=await t.getIdToken(),r=await Es(t,Ea(e,{idToken:n}));$(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(h=i.providerUserInfo)!=null&&h.length?Lv(i.providerUserInfo):[],o=RN(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Tu(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function TN(t){const e=Ie(t);await Ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Lv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function PN(t,e){const n=await Dv(t,{},async()=>{const r=fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Ov(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Rs(t.emulatorConfig.host)&&(l.credentials="include"),Av.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AN(t,e){return _i(t,"POST","/v2/accounts:revokeToken",Sh(t,e))}/**
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
 */class Vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=Wp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Vr;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vr,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
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
 */function sn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new IN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Es(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bN(this,e)}reload(){return TN(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(Tn(this.auth));const e=await this.getIdToken();return await Es(this,kN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:h,emailVerified:f,isAnonymous:_,providerData:v,stsTokenManager:S}=n;$(h&&S,e,"internal-error");const E=Vr.fromJSON(this.name,S);$(typeof h=="string",e,"internal-error"),sn(r,e.name),sn(i,e.name),$(typeof f=="boolean",e,"internal-error"),$(typeof _=="boolean",e,"internal-error"),sn(s,e.name),sn(o,e.name),sn(a,e.name),sn(l,e.name),sn(c,e.name),sn(d,e.name);const m=new xt({uid:h,auth:e,email:i,emailVerified:f,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:E,createdAt:c,lastLoginAt:d});return v&&Array.isArray(v)&&(m.providerData=v.map(p=>({...p}))),l&&(m._redirectEventId=l),m}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vr;i.updateFromServerResponse(n);const s=new xt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ca(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Lv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Vr;a.updateFromIdToken(r);const l=new xt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Tu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const Vp=new Map;function Gt(t){tn(t instanceof Function,"Expected a class definition");let e=Vp.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vp.set(t,e),e)}/**
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
 */class Mv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mv.type="NONE";const Hp=Mv;/**
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
 */function To(t,e,n){return`firebase:${t}:${e}:${n}`}class Hr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=To(this.userKey,i.apiKey,s),this.fullPersistenceKey=To("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ea(this.auth,{idToken:e}).catch(()=>{});return n?xt._fromGetAccountInfoResponse(this.auth,n,e):null}return xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hr(Gt(Hp),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Gt(Hp);const o=To(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let h;if(typeof d=="string"){const f=await Ea(e,{idToken:d}).catch(()=>{});if(!f)break;h=await xt._fromGetAccountInfoResponse(e,f,d)}else h=xt._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Hr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Hr(s,e,r))}}/**
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
 */function Gp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jv(e))return"Blackberry";if(Wv(e))return"Webos";if(Uv(e))return"Safari";if((e.includes("chrome/")||$v(e))&&!e.includes("edge/"))return"Chrome";if(Bv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fv(t=$e()){return/firefox\//i.test(t)}function Uv(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $v(t=$e()){return/crios\//i.test(t)}function zv(t=$e()){return/iemobile/i.test(t)}function Bv(t=$e()){return/android/i.test(t)}function jv(t=$e()){return/blackberry/i.test(t)}function Wv(t=$e()){return/webos/i.test(t)}function Ch(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DN(t=$e()){var e;return Ch(t)&&!!((e=window.navigator)!=null&&e.standalone)}function ON(){return g1()&&document.documentMode===10}function Vv(t=$e()){return Ch(t)||Bv(t)||Wv(t)||jv(t)||/windows phone/i.test(t)||zv(t)}/**
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
 */function Hv(t,e=[]){let n;switch(t){case"Browser":n=Gp($e());break;case"Worker":n=`${Gp($e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pi}/${r}`}/**
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
 */class LN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function MN(t,e={}){return _i(t,"GET","/v2/passwordPolicy",Sh(t,e))}/**
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
 */const FN=6;class UN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??FN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class $N{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kp(this),this.idTokenSubscription=new Kp(this),this.beforeStateQueue=new LN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Hr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ea(this,{idToken:e}),r=await xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(_t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_t(this.app))return Promise.reject(Tn(this));const n=e?Ie(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _t(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MN(this),n=new UN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await AN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Hr.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&mN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function zs(t){return Ie(t)}class Kp{constructor(e){this.auth=e,this.observer=null,this.addObserver=C1(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zN(t){kh=t}function BN(t){return kh.loadJS(t)}function jN(){return kh.gapiScript}function WN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function VN(t,e){const n=Ps(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(rr(s,e??{}))return i;Lt(i,"already-initialized")}return n.initialize({options:e})}function HN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GN(t,e,n){const r=zs(t);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Gv(e),{host:o,port:a}=KN(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(rr(c,r.config.emulator)&&rr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Rs(o)?Fy(`${s}//${o}${l}`):i||qN()}function Gv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KN(t){const e=Gv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qp(o)}}}function qp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Kv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}/**
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
 */async function Gr(t,e){return EN(t,"POST","/v1/accounts:signInWithIdp",Sh(t,e))}/**
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
 */const YN="http://localhost";class cr extends Kv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:YN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fi(n)}return e}}/**
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
 */class bh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bs extends bh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class un extends Bs{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class Bt extends Bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
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
 */class dn extends Bs{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
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
 */class hn extends Bs{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
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
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xt._fromIdTokenResponse(e,r,i),o=Yp(r);return new li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yp(r);return new li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ka extends Mt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ka.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ka(e,n,r,i)}}function qv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ka._fromErrorAndOperation(t,s,e,r):s})}async function QN(t,e,n=!1){const r=await Es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",r)}/**
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
 */async function XN(t,e,n=!1){const{auth:r}=t;if(_t(r.app))return Promise.reject(Tn(r));const i="reauthenticate";try{const s=await Es(t,qv(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=Eh(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),li._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),s}}/**
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
 */async function JN(t,e,n=!1){if(_t(t.app))return Promise.reject(Tn(t));const r="signIn",i=await qv(t,r,e),s=await li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function ZN(t,e,n,r){return Ie(t).onIdTokenChanged(e,n,r)}function eI(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function tI(t,e,n,r){return Ie(t).onAuthStateChanged(e,n,r)}function nI(t){return Ie(t).signOut()}const ba="__sak";/**
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
 */class Yv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ba,"1"),this.storage.removeItem(ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rI=1e3,iI=10;class Qv extends Yv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ON()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qv.type="LOCAL";const sI=Qv;/**
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
 */class Xv extends Yv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xv.type="SESSION";const Jv=Xv;/**
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
 */function oI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await oI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cl.receivers=[];/**
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
 */function Nh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Nh("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Dt(){return window}function lI(t){Dt().location.href=t}/**
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
 */function Zv(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function cI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function dI(){return Zv()?self:null}/**
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
 */const ew="firebaseLocalStorageDb",hI=1,Na="firebaseLocalStorage",tw="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ul(t,e){return t.transaction([Na],e?"readwrite":"readonly").objectStore(Na)}function fI(){const t=indexedDB.deleteDatabase(ew);return new js(t).toPromise()}function Ru(){const t=indexedDB.open(ew,hI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Na,{keyPath:tw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Na)?e(r):(r.close(),await fI(),e(await Ru()))})})}async function Qp(t,e,n){const r=ul(t,!0).put({[tw]:e,value:n});return new js(r).toPromise()}async function pI(t,e){const n=ul(t,!1).get(e),r=await new js(n).toPromise();return r===void 0?null:r.value}function Xp(t,e){const n=ul(t,!0).delete(e);return new js(n).toPromise()}const mI=800,gI=3;class nw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ru(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cl._getInstance(dI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await cI(),!this.activeServiceWorker)return;this.sender=new aI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ru();return await Qp(e,ba,"1"),await Xp(e,ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ul(i,!1).getAll();return new js(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nw.type="LOCAL";const yI=nw;new $s(3e4,6e4);/**
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
 */function rw(t,e){return e?Gt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ih extends Kv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _I(t){return JN(t.auth,new Ih(t),t.bypassAuthState)}function vI(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),XN(n,new Ih(t),t.bypassAuthState)}async function wI(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),QN(n,new Ih(t),t.bypassAuthState)}/**
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
 */class iw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _I;case"linkViaPopup":case"linkViaRedirect":return wI;case"reauthViaPopup":case"reauthViaRedirect":return vI;default:Lt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xI=new $s(2e3,1e4);class Dr extends iw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=Nh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xI.get())};e()}}Dr.currentPopupAction=null;/**
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
 */const SI="pendingRedirect",Ro=new Map;class EI extends iw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ro.get(this.auth._key());if(!e){try{const r=await CI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ro.set(this.auth._key(),e)}return this.bypassAuthState||Ro.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CI(t,e){const n=ow(e),r=sw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function kI(t,e){return sw(t)._set(ow(e),"true")}function bI(t,e){Ro.set(t._key(),e)}function sw(t){return Gt(t._redirectPersistence)}function ow(t){return To(SI,t.config.apiKey,t.name)}/**
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
 */function NI(t,e,n){return II(t,e,n)}async function II(t,e,n){if(_t(t.app))return Promise.reject(Tn(t));const r=zs(t);gN(t,e,bh),await r._initializationPromise;const i=rw(r,n);return await kI(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function TI(t,e){return await zs(t)._initializationPromise,aw(t,e,!1)}async function aw(t,e,n=!1){if(_t(t.app))return Promise.reject(Tn(t));const r=zs(t),i=rw(r,e),o=await new EI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const RI=10*60*1e3;class PI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lw(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(At(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jp(e))}saveEventToCache(e){this.cachedEventUids.add(Jp(e)),this.lastProcessedEventTime=Date.now()}}function Jp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lw(t);default:return!1}}/**
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
 */async function DI(t,e={}){return _i(t,"GET","/v1/projects",e)}/**
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
 */const OI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LI=/^https?/;async function MI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DI(t);for(const n of e)try{if(FI(n))return}catch{}Lt(t,"unauthorized-domain")}function FI(t){const e=Iu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!LI.test(n))return!1;if(OI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const UI=new $s(3e4,6e4);function Zp(){const t=Dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $I(t){return new Promise((e,n)=>{var i,s,o;function r(){Zp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zp(),n(At(t,"network-request-failed"))},timeout:UI.get()})}if((s=(i=Dt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Dt().gapi)!=null&&o.load)r();else{const a=WN("iframefcb");return Dt()[a]=()=>{gapi.load?r():n(At(t,"network-request-failed"))},BN(`${jN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Po=null,e})}let Po=null;function zI(t){return Po=Po||$I(t),Po}/**
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
 */const BI=new $s(5e3,15e3),jI="__/auth/iframe",WI="emulator/auth/iframe",VI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GI(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xh(e,WI):`https://${t.config.authDomain}/${jI}`,r={apiKey:e.apiKey,appName:t.name,v:pi},i=HI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${fi(r).slice(1)}`}async function KI(t){const e=await zI(t),n=Dt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:GI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),a=Dt().setTimeout(()=>{s(o)},BI.get());function l(){Dt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const qI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YI=500,QI=600,XI="_blank",JI="http://localhost";class em{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZI(t,e,n,r=YI,i=QI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...qI,width:r.toString(),height:i.toString(),top:s,left:o},c=$e().toLowerCase();n&&(a=$v(c)?XI:n),Fv(c)&&(e=e||JI,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[_,v])=>`${f}${_}=${v},`,"");if(DN(c)&&a!=="_self")return eT(e||"",a),new em(null);const h=window.open(e||"",a,d);$(h,t,"popup-blocked");try{h.focus()}catch{}return new em(h)}function eT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tT="__/auth/handler",nT="emulator/auth/handler",rT=encodeURIComponent("fac");async function tm(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:pi,eventId:i};if(e instanceof bh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",au(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(s||{}))o[d]=h}if(e instanceof Bs){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${rT}=${encodeURIComponent(l)}`:"";return`${iT(t)}?${fi(a).slice(1)}${c}`}function iT({config:t}){return t.emulator?xh(t,nT):`https://${t.authDomain}/${tT}`}/**
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
 */const nc="webStorageSupport";class sT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jv,this._completeRedirectFn=aw,this._overrideRedirectResult=bI}async _openPopup(e,n,r,i){var o;tn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await tm(e,n,r,Iu(),i);return ZI(e,s,Nh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await tm(e,n,r,Iu(),i);return lI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KI(e),r=new PI(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nc,{type:nc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[nc];s!==void 0&&n(!!s),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vv()||Uv()||Ch()}}const oT=sT;var nm="@firebase/auth",rm="1.12.2";/**
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
 */class aT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cT(t){Ot(new bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hv(t)},c=new $N(r,i,s,l);return HN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ot(new bt("auth-internal",e=>{const n=zs(e.getProvider("auth").getImmediate());return(r=>new aT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(nm,rm,lT(t)),at(nm,rm,"esm2020")}/**
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
 */const uT=5*60,dT=Ry("authIdTokenMaxAge")||uT;let im=null;const hT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dT)return;const i=n==null?void 0:n.token;im!==i&&(im=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fT(t=jy()){const e=Ps(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VN(t,{popupRedirectResolver:oT,persistence:[yI,sI,Jv]}),r=Ry("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=hT(s.toString());eI(n,o,()=>o(n.currentUser)),ZN(n,a=>o(a))}}const i=Iy("auth");return i&&GN(n,`http://${i}`),n}function pT(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}zN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=At("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cT("Browser");const mT={apiKey:"AIzaSyBrYWUlI4QZEAb-3q_G7ypIRRWKie5JecM",authDomain:"todo-8678c.firebaseapp.com",databaseURL:"https://todo-8678c-default-rtdb.firebaseio.com",projectId:"todo-8678c",storageBucket:"todo-8678c.firebasestorage.app",messagingSenderId:"1022607308094",appId:"1:1022607308094:web:2cb0cfb369d39c1b93686f",measurementId:"G-SQM3PBJ11Q"},cw=By(mT),ft=Vk(cw),Ia=fT(cw),gT=new Bt,yT=({onNewPage:t,onOpenCardSort:e})=>g("aside",{className:"h-screen w-64 fixed left-0 top-0 bg-[#f3f3f4] flex flex-col p-6 space-y-8 z-40",children:[g("div",{className:"flex items-center gap-3 mb-6",children:[u("div",{className:"w-10 h-10 bg-[#7161EF] rounded-lg flex items-center justify-center text-white",children:u("span",{className:"material-symbols-outlined",children:"layers"})}),g("div",{children:[u("h2",{className:"text-xl font-black text-black leading-tight",children:"Project Alpha"}),u("p",{className:"text-[10px] uppercase tracking-widest text-on-surface-variant",children:"Sitemap Editor"})]})]}),u("button",{onClick:t,className:"w-full py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all mb-8",children:"New Page"}),u("nav",{className:"flex-grow space-y-2",children:[{icon:"dashboard",label:"Dashboard"},{icon:"layers",label:"Pages",active:!0},{icon:"style",label:"Card Sort",onClick:e},{icon:"folder_open",label:"Assets"},{icon:"history",label:"History"},{icon:"ios_share",label:"Export"}].map(({icon:n,label:r,active:i,onClick:s})=>g("a",{href:"#",onClick:o=>{s&&(o.preventDefault(),s())},className:`flex items-center gap-3 px-4 py-3 rounded-lg text-sm uppercase tracking-widest transition-all ${i?"bg-white text-black font-bold shadow-sm":"text-[#474747] hover:bg-[#e8e8e8] hover:translate-x-1"}`,children:[u("span",{className:"material-symbols-outlined",children:n}),u("span",{children:r})]},r))}),u("div",{className:"mt-auto pt-6 border-t border-[#c6c6c6]/15",children:g("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 text-[#474747] hover:bg-[#e8e8e8] transition-all rounded-lg text-sm uppercase tracking-widest",children:[u("span",{className:"material-symbols-outlined",children:"account_circle"}),u("span",{children:"Account"})]})})]}),ho=192,rc=96,_T=({node:t,isSelected:e,onSelect:n,onAddChild:r})=>{const[i,s]=C.useState(!1);return g("g",{transform:`translate(${t._x}, ${t._y})`,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),style:{cursor:"pointer"},"data-node":"true",children:[u("defs",{children:u("filter",{id:`shadow-${t.id}`,x:"-20%",y:"-20%",width:"140%",height:"140%",children:u("feDropShadow",{dx:"0",dy:"2",stdDeviation:e?"6":"3",floodColor:e?"#7161EF":"#c6c6c6",floodOpacity:"0.25"})})}),u("rect",{x:0,y:0,width:ho,height:rc,rx:12,ry:12,fill:"white",stroke:e?"#7161EF":i?"#555":"#e0e0e0",strokeWidth:e?2:1,filter:`url(#shadow-${t.id})`,onClick:()=>n()}),u("text",{x:12,y:20,fontSize:9,fill:"#999",fontFamily:"inherit",style:{textTransform:"uppercase",letterSpacing:"0.12em",fontWeight:600},children:t.label}),u("text",{x:12,y:58,fontSize:15,fill:"#111",fontFamily:"inherit",style:{fontWeight:800,letterSpacing:"-0.02em"},onClick:()=>n(),children:t.title}),g("text",{x:12,y:80,fontSize:10,fill:"#aaa",fontFamily:"monospace",children:["/",t.slug]}),u("circle",{cx:ho-14,cy:14,r:4,fill:t.status==="public"?"#22c55e":"#f59e0b"}),i&&g("g",{onClick:o=>{o.stopPropagation(),r(t.id)},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!0),children:[u("circle",{cx:ho/2,cy:rc+28,r:14,fill:"#7161EF"}),u("text",{x:ho/2,y:rc+33,textAnchor:"middle",fontSize:18,fill:"white",fontFamily:"Material Symbols Outlined, sans-serif",style:{userSelect:"none"},children:"+"})]})]})},vT=({svgRef:t,pan:e,zoom:n,minX:r,nodes:i,edges:s,selectedId:o,setSelectedId:a,onAddChild:l,onMouseDown:c,onMouseMove:d,onMouseUp:h,isPanning:f,setZoom:_,setPan:v})=>{const S=(E,m,p,y)=>{const x=(m+y)/2;return`M ${E} ${m} L ${E} ${x} L ${p} ${x} L ${p} ${y}`};return g("main",{className:"ml-64 min-h-screen relative overflow-hidden",style:{background:"#fafafa",backgroundImage:"radial-gradient(circle, #d0d0d0 1px, transparent 1px)",backgroundSize:"24px 24px",cursor:f?"grabbing":"grab",marginRight:o?"320px":"0"},onMouseDown:c,onMouseMove:d,onMouseUp:h,onMouseLeave:h,children:[u("svg",{ref:t,width:"100%",height:"100%",style:{minHeight:"100vh"},children:u("g",{transform:`translate(${e.x}, ${e.y}) scale(${n})`,children:g("g",{transform:`translate(${-r}, 32)`,children:[s.map((E,m)=>u("path",{d:S(E.x1,E.y1,E.x2,E.y2),fill:"none",stroke:"#d0d0d0",strokeWidth:1.5,strokeLinecap:"round"},m)),i.map(E=>u(_T,{node:E,isSelected:o!==null&&String(E.id)===String(o),onSelect:()=>a(String(E.id)===String(o)?null:E.id),onAddChild:l},E.id))]})})}),g("div",{className:"fixed bottom-8 left-72 bg-white/80 backdrop-blur-md rounded-full shadow-lg p-1 flex items-center gap-1 border border-[#c6c6c6]/10 z-30",children:[u("button",{onClick:()=>_(E=>Math.min(2,E+.1)),className:"p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined",children:"zoom_in"}),u("div",{className:"h-4 w-[1px] bg-[#c6c6c6]/30 mx-1"}),g("span",{className:"text-xs font-bold px-2",children:[Math.round(n*100),"%"]}),u("div",{className:"h-4 w-[1px] bg-[#c6c6c6]/30 mx-1"}),u("button",{onClick:()=>_(E=>Math.max(.3,E-.1)),className:"p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined",children:"zoom_out"}),u("button",{onClick:()=>{_(.85),v({x:80,y:40})},className:"p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined",children:"center_focus_strong"})]})]})},wT=({node:t,onUpdate:e,onDelete:n,onClose:r})=>t?g("aside",{className:"fixed right-0 top-0 h-full w-80 bg-white border-l border-[#c6c6c6]/15 z-40 p-8 overflow-auto",children:[g("div",{className:"flex justify-between items-center mb-10",children:[u("h2",{className:"text-sm font-bold uppercase tracking-[0.2em] text-black",children:"Page Properties"}),u("button",{onClick:r,className:"material-symbols-outlined text-on-surface-variant hover:text-[#7161EF] transition-colors",children:"close"})]}),g("div",{className:"space-y-8",children:[g("div",{className:"space-y-3",children:[u("label",{className:"text-[10px] uppercase tracking-widest text-on-surface-variant block",children:"Page Title"}),u("input",{type:"text",value:t.title,onChange:i=>e({title:i.target.value}),className:"w-full bg-[#f3f3f4] border-none rounded-lg p-4 font-bold text-black focus:ring-1 focus:ring-[#7161EF] focus:bg-white transition-all"})]}),g("div",{className:"space-y-3",children:[u("label",{className:"text-[10px] uppercase tracking-widest text-on-surface-variant block",children:"URL Slug"}),g("div",{className:"flex items-center bg-[#f3f3f4] rounded-lg overflow-hidden",children:[u("span",{className:"pl-4 text-xs text-[#777777] font-mono",children:"/"}),u("input",{type:"text",value:t.slug,onChange:i=>e({slug:i.target.value}),className:"w-full bg-transparent border-none p-4 pl-1 font-mono text-xs focus:ring-0"})]})]}),g("div",{className:"space-y-3",children:[u("label",{className:"text-[10px] uppercase tracking-widest text-on-surface-variant block",children:"Description"}),u("textarea",{rows:4,value:t.description,onChange:i=>e({description:i.target.value}),className:"w-full bg-[#f3f3f4] border-none rounded-lg p-4 text-sm text-on-surface-variant focus:ring-1 focus:ring-[#7161EF] focus:bg-white transition-all resize-none",placeholder:"Enter meta description for SEO..."})]}),g("div",{className:"space-y-3",children:[u("label",{className:"text-[10px] uppercase tracking-widest text-on-surface-variant block",children:"Navigation Status"}),g("div",{className:"flex gap-2",children:[u("button",{onClick:()=>e({status:"public"}),className:`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors ${t.status==="public"?"bg-[#7161EF] text-white":"bg-[#f3f3f4] text-on-surface-variant hover:bg-[#e8e8e8]"}`,children:"Public"}),u("button",{onClick:()=>e({status:"draft"}),className:`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors ${t.status==="draft"?"bg-[#7161EF] text-white":"bg-[#f3f3f4] text-on-surface-variant hover:bg-[#e8e8e8]"}`,children:"Draft"})]})]}),u("div",{className:"pt-8 mt-8 border-t border-[#c6c6c6]/15",children:g("button",{onClick:n,className:"w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-red-500/20 text-red-600 hover:bg-red-50 transition-colors text-xs font-bold uppercase tracking-widest",children:[u("span",{className:"material-symbols-outlined text-sm",children:"delete"}),"Delete Page"]})})]})]}):null;let xT=100;const ST=()=>`node-${++xT}`,sm={id:"root",title:"Landing Page",slug:"index.html",label:"Home",icon:"home",status:"public",description:"Main entry point of the site.",children:[{id:"solutions",title:"Solutions",slug:"solutions",label:"Parent",icon:"widgets",status:"public",description:"Product solutions overview.",children:[{id:"enterprise",title:"Enterprise",slug:"solutions/enterprise",label:"Child",icon:"business",status:"public",description:"Enterprise-level offerings.",children:[]}]},{id:"products",title:"Products",slug:"products",label:"Selected",icon:"inventory_2",status:"public",description:"Overview of all current product offerings and enterprise services available.",children:[]},{id:"about",title:"About Us",slug:"about",label:"Static",icon:"info",status:"draft",description:"Our story and mission.",children:[]}]};function uw(t,e,n){return t.id===e?{...t,children:[...t.children,n]}:{...t,children:t.children.map(r=>uw(r,e,n))}}function dw(t,e,n){return t.id===e?{...t,...n}:{...t,children:t.children.map(r=>dw(r,e,n))}}function hw(t,e){return{...t,children:t.children.filter(n=>n.id!==e).map(n=>hw(n,e))}}function fw(t,e){if(t.id===e)return t;for(const n of t.children){const r=fw(n,e);if(r)return r}return null}function pw(t,e=0,n=192,r=96,i=48,s=80){if(!t.children||t.children.length===0)return{...t,_w:n,_x:0,_y:e*(r+s),_laidOut:[]};const o=t.children.map(_=>pw(_,e+1,n,r,i,s));let a=0;const l=[];for(let _=0;_<o.length;_++){const v={...o[_]};mw(v,a),l.push(v),a+=v._w+i}const c=l.reduce((_,v)=>_+v._w,0)+i*(l.length-1),d=l[0]._x,h=l[l.length-1]._x+l[l.length-1]._w,f=(d+h)/2-n/2;return{...t,_w:Math.max(n,c),_x:f,_y:e*(r+s),children:l,_laidOut:l}}function mw(t,e){t._x+=e,t.children&&t.children.forEach(n=>mw(n,e))}function gw(t,e=[]){return e.push(t),t.children&&t.children.forEach(n=>gw(n,e)),e}function yw(t,e,n,r=[]){return t.children&&t.children.forEach(i=>{r.push({x1:t._x+e/2,y1:t._y+n,x2:i._x+e/2,y2:i._y}),yw(i,e,n,r)}),r}const ic=192,sc=96,ET=48,CT=80,kT=({onOpenCardSort:t})=>{const[e,n]=C.useState(null),[r,i]=C.useState(null),[s,o]=C.useState(.85),[a,l]=C.useState({x:80,y:40}),[c,d]=C.useState(!1),[h,f]=C.useState(!0),[_,v]=C.useState(null),S=C.useRef(null),E=C.useRef(null),m=C.useRef(!1),p=C.useRef(!1),y=ht(ft,"vellumSitemap");C.useEffect(()=>{const w=lv(y,R=>{var X;let L=R.val();L?(L=x(L),n(L),!r&&((X=L.children)==null?void 0:X.length)>0&&i(L.children[0].id)):(m.current=!0,wa(y,sm).then(()=>{n(sm),i("products")}).catch(()=>v("Failed to initialize sitemap.")).finally(()=>{m.current=!1})),f(!1)},R=>{console.error("Firebase error:",R),v("Failed to connect to Firebase. Check rules (allow read/write)."),f(!1)});return()=>w()},[]);const x=w=>{if(!w||typeof w!="object")return w;const R={...w,children:w.children||[]};return Array.isArray(R.children)&&(R.children=R.children.map(x)),R},k=e?pw(e,0,ic,sc,ET,CT):null,N=k?gw(k):[],T=k?yw(k,ic,sc):[],P=r&&k?fw(k,r):null,G=N.length?Math.min(...N.map(w=>w._x||0))-60:0;N.length&&Math.max(...N.map(w=>w._x||0))+ic+60,N.length&&Math.max(...N.map(w=>w._y||0))+sc+100;const M=C.useCallback(w=>{m.current||!w||(m.current=!0,wa(y,w).catch(R=>console.error("Firebase save failed:",R)).finally(()=>{m.current=!1}))},[]),ue=C.useCallback(w=>{if(!e||p.current)return;p.current=!0;const R={id:ST(),title:"New Page",slug:"new-page",label:"Child",icon:"article",status:"draft",description:"",children:[]},L=uw(e,w||"root",R),X=x(L);n(X),M(X),i(R.id),setTimeout(()=>{p.current=!1},300)},[e,M]),Te=C.useCallback(w=>{if(!e||!r)return;let R=dw(e,r,w);R=x(R),n(R),M(R)},[e,r,M]),F=C.useCallback(()=>{if(!e||!r||r==="root")return;let w=hw(e,r);w=x(w),n(w),M(w),i(null)},[e,r,M]),O=w=>{w.target.closest("g[data-node]")||(d(!0),S.current={x:w.clientX-a.x,y:w.clientY-a.y})},de=w=>{c&&l({x:w.clientX-S.current.x,y:w.clientY-S.current.y})},A=()=>d(!1),z=C.useCallback(w=>{w.preventDefault(),o(R=>Math.min(2,Math.max(.3,R-w.deltaY*.001)))},[]);return C.useEffect(()=>{const w=E.current;if(w)return w.addEventListener("wheel",z,{passive:!1}),()=>w.removeEventListener("wheel",z)},[z]),h?u("div",{className:"flex items-center justify-center min-h-screen text-xl",children:"Loading sitemap from Firebase..."}):_?u("div",{className:"flex items-center justify-center min-h-screen text-red-600 p-8 text-center",children:_}):g("div",{className:"light font-body text-on-surface bg-background min-h-screen overflow-hidden",children:[u(yT,{onNewPage:()=>ue(r||"root"),onOpenCardSort:t}),u(vT,{svgRef:E,pan:a,zoom:s,minX:G,nodes:N,edges:T,selectedId:r,setSelectedId:i,onAddChild:ue,onMouseDown:O,onMouseMove:de,onMouseUp:A,isPanning:c,setZoom:o,setPan:l}),P&&u(wT,{node:P,onUpdate:Te,onDelete:F,onClose:()=>i(null)})]})},bT=()=>{const[t,e]=C.useState(void 0),[n,r]=C.useState(null);return C.useEffect(()=>(TI(Ia).catch(i=>{console.error("Google redirect sign-in failed:",i),r("Sign-in failed. Please try again.")}),tI(Ia,e)),[]),{user:t,authError:n,clearAuthError:()=>r(null)}},_w=()=>NI(Ia,gT),NT=()=>nI(Ia),IT=async(t,e)=>{const r=dh(ht(ft,"cardSortStudies")).key,i={...t,id:r,ownerId:e,createdAt:new Date().toISOString()};return await av(ht(ft),{[`cardSortStudies/${r}`]:i,[`users/${e}/studies/${r}`]:!0}),i},Th=async t=>{const n=(await Us(ht(ft,`cardSortStudies/${t}`))).val();return n&&{...n,cards:n.cards||[],categories:n.categories||[]}},TT=async(t,e)=>{await av(ht(ft),{[`cardSortStudies/${t}`]:null,[`cardSortStudySessions/${t}`]:null,[`users/${e}/studies/${t}`]:null})},RT=async t=>{const e=await Us(ht(ft,`users/${t}/studies`));if(!e.exists())return[];const n=Object.keys(e.val());return(await Promise.all(n.map(i=>Th(i)))).filter(Boolean)},PT=async(t,e)=>{const n=dh(ht(ft,`cardSortStudySessions/${t}`));return await wa(n,e),n.key},AT=(t,e)=>{const n=ht(ft,`cardSortStudySessions/${t}`);return lv(n,i=>{const s=i.val()||{};e(Object.values(s))})},Rh=t=>{const e=new URL(window.location.href);return e.search=`?cardsort=${t}`,e.hash="",e.toString()};let DT=0;const OT=()=>`card-${Date.now()}-${++DT}`;let LT=0;const vw=()=>`cat-${Date.now()}-${++LT}`,ur={open:{label:"Open Card Sort",icon:"category",tagline:"Participants create and name their own groups.",bestFor:"Discovering mental models and generating navigation categories."},closed:{label:"Closed Card Sort",icon:"grid_view",tagline:"Participants sort cards into categories you provide.",bestFor:"Validating an existing information architecture."},hybrid:{label:"Hybrid Card Sort",icon:"dashboard_customize",tagline:"Predefined categories, but new ones can be created.",bestFor:"Refining a structure while allowing flexibility."}},ww=["Pricing","Contact Us","Blog","Careers","Product Tour","Case Studies","Help Center","API Documentation","About the Team","Press Kit","Integrations","Security"],xw=["Company","Product","Resources","Support"],Ph=(t,e=[])=>(!t||typeof t!="object"||(t.title&&e.push(t.title),(t.children||[]).forEach(n=>Ph(n,e))),e),Sw=t=>t.map(e=>e.trim()).filter(Boolean).map(e=>({id:OT(),label:e})),Ew=(t,e)=>t.map(n=>n.trim()).filter(Boolean).map(n=>({id:vw(),name:n,locked:e})),Cw=(t,e,n)=>{const r=e.map(s=>({category:s.name,cards:t.filter(o=>n[o.id]===s.id).map(o=>o.label)})),i=t.filter(s=>!n[s.id]).map(s=>s.label);return{groups:r,unsorted:i}},MT=t=>{const e=r=>`"${String(r).replace(/"/g,'""')}"`,n=[["Category","Card"]];return t.groups.forEach(r=>r.cards.forEach(i=>n.push([r.category,i]))),t.unsorted.forEach(r=>n.push(["(Unsorted)",r])),n.map(r=>r.map(e).join(",")).join(`
`)},Ta=(t,e,n)=>{const r=new Blob([e],{type:n}),i=URL.createObjectURL(r),s=document.createElement("a");s.href=i,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)},fo="w-full rounded-lg border border-[#c6c6c6]/60 bg-white px-4 py-3 text-sm text-black focus:border-[#7161EF] focus:ring-0",_r=({eyebrow:t,title:e,subtitle:n,children:r})=>g("div",{className:"w-full max-w-2xl",children:[u("p",{className:"text-[10px] uppercase tracking-widest text-[#8a8a8a] font-bold mb-2",children:t}),u("h2",{className:"text-2xl font-black mb-2",children:e}),n&&u("p",{className:"text-sm text-[#474747] mb-8",children:n}),!n&&u("div",{className:"mb-8"}),r]}),FT=({onStart:t,onExit:e})=>{var Te;const[n,r]=C.useState(null),[i,s]=C.useState(""),[o,a]=C.useState(""),[l,c]=C.useState(""),[d,h]=C.useState(""),[f,_]=C.useState(!1),[v,S]=C.useState(null),[E,m]=C.useState(0),p=l.split(`
`).map(F=>F.trim()).filter(Boolean),y=d.split(`
`).map(F=>F.trim()).filter(Boolean),x=n!=="open",k=C.useMemo(()=>["type","name","participant","cards",...x?["categories"]:[],"review"],[x]),N=k[E],T=async()=>{_(!0),S(null);try{const F=await Us(ht(ft,"vellumSitemap")),O=Ph(F.val());O.length===0?S("No sitemap pages found to import."):(c(O.join(`
`)),S(`Imported ${O.length} pages from your sitemap.`))}catch(F){console.error("Sitemap import failed:",F),S("Could not load the sitemap from Firebase.")}finally{_(!1)}},P={type:!!n,name:i.trim().length>0,participant:!0,cards:p.length>=2,categories:y.length>=1,review:!0}[N],G=()=>{if(P){if(N==="review"){t({type:n,studyName:i.trim()||"Untitled Study",participant:o.trim(),cardLabels:p,categoryNames:x?y:[]});return}m(F=>Math.min(F+1,k.length-1))}},M=()=>{E===0?e():m(F=>F-1)},ue=F=>{F.key==="Enter"&&!F.shiftKey&&P&&(F.preventDefault(),G())};return g("div",{className:"min-h-screen bg-[#f3f3f4] font-body text-black flex flex-col",children:[g("header",{className:"flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white",children:[g("div",{className:"flex items-center gap-3",children:[u("div",{className:"w-10 h-10 bg-[#7161EF] rounded-lg flex items-center justify-center text-white",children:u("span",{className:"material-symbols-outlined",children:"style"})}),g("div",{children:[u("h1",{className:"text-xl font-black leading-tight",children:"Card Sort Study"}),u("p",{className:"text-[10px] uppercase tracking-widest text-[#474747]",children:"Setup"})]})]}),g("button",{onClick:e,className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:[u("span",{className:"material-symbols-outlined text-base",children:"close"}),"Cancel"]})]}),u("div",{className:"flex items-center gap-2 px-8 py-4",children:k.map((F,O)=>u("div",{className:`h-1.5 rounded-full flex-grow transition-all ${O<=E?"bg-[#7161EF]":"bg-[#dcdcdc]"}`},F))}),g("main",{className:"flex-grow flex items-start justify-center px-8 pt-6 pb-16",children:[N==="type"&&u(_r,{eyebrow:`Step ${E+1} of ${k.length}`,title:"Choose a sort type",children:u("div",{className:"grid grid-cols-1 gap-4",children:Object.entries(ur).map(([F,O])=>g("button",{onClick:()=>{r(F),m(de=>de+1)},className:`text-left rounded-xl p-5 border-2 transition-all ${n===F?"border-[#7161EF] bg-white shadow-md":"border-transparent bg-white/60 hover:bg-white hover:shadow-sm"}`,children:[g("div",{className:"flex items-center justify-between mb-3",children:[u("span",{className:"material-symbols-outlined text-2xl",children:O.icon}),n===F&&u("span",{className:"material-symbols-outlined text-xl",children:"check_circle"})]}),u("h3",{className:"font-black text-base mb-1",children:O.label}),u("p",{className:"text-sm text-[#474747] mb-2",children:O.tagline}),g("p",{className:"text-[11px] uppercase tracking-wide text-[#8a8a8a]",children:["Best for: ",O.bestFor]})]},F))})}),N==="name"&&u(_r,{eyebrow:`Step ${E+1} of ${k.length}`,title:"Name this study",subtitle:"Used to label your export and saved session.",children:u("input",{autoFocus:!0,className:fo,value:i,onChange:F=>s(F.target.value),onKeyDown:ue,placeholder:"e.g. Main Nav Card Sort"})}),N==="participant"&&u(_r,{eyebrow:`Step ${E+1} of ${k.length}`,title:"Who's sorting?",subtitle:"Optional — helps you tell sessions apart later.",children:u("input",{autoFocus:!0,className:fo,value:o,onChange:F=>a(F.target.value),onKeyDown:ue,placeholder:"e.g. P01, Jamie R."})}),N==="cards"&&g(_r,{eyebrow:`Step ${E+1} of ${k.length}`,title:"Add your cards",subtitle:"One card per line. Add at least 2 to continue.",children:[g("div",{className:"flex items-center justify-between mb-3",children:[g("span",{className:"text-[10px] uppercase tracking-widest text-[#474747] font-bold",children:[p.length," card",p.length===1?"":"s"]}),g("div",{className:"flex gap-2",children:[u("button",{onClick:T,disabled:f,className:"px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-[#7161EF] text-white hover:opacity-90 disabled:opacity-50 transition-all",children:f?"Importing…":"Import Sitemap Pages"}),u("button",{onClick:()=>c(ww.join(`
`)),className:"px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Sample Deck"})]})]}),u("textarea",{autoFocus:!0,className:`${fo} h-64 resize-none font-mono text-xs leading-6`,value:l,onChange:F=>c(F.target.value),placeholder:`One card per line, e.g.
Pricing
Contact Us
Blog`}),v&&u("p",{className:"mt-2 text-xs text-[#474747]",children:v})]}),N==="categories"&&g(_r,{eyebrow:`Step ${E+1} of ${k.length}`,title:"Add your categories",subtitle:n==="closed"?"Participants can only sort cards into these categories.":"Participants start with these but can add their own.",children:[g("div",{className:"flex items-center justify-between mb-3",children:[g("span",{className:"text-[10px] uppercase tracking-widest text-[#474747] font-bold",children:[y.length," categor",y.length===1?"y":"ies"]}),u("button",{onClick:()=>h(xw.join(`
`)),className:"px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Sample Categories"})]}),u("textarea",{autoFocus:!0,className:`${fo} h-64 resize-none font-mono text-xs leading-6`,value:d,onChange:F=>h(F.target.value),placeholder:`One category per line, e.g.
Company
Product
Support`})]}),N==="review"&&u(_r,{eyebrow:`Step ${E+1} of ${k.length}`,title:"Ready to sort",subtitle:"Double-check the details, then start the session.",children:u("div",{className:"rounded-xl bg-white shadow-sm divide-y divide-[#e8e8e8]",children:[["Sort type",(Te=ur[n])==null?void 0:Te.label],["Study name",i.trim()||"Untitled Study"],["Participant",o.trim()||"—"],["Cards",`${p.length} card${p.length===1?"":"s"}`],["Categories",x?`${y.length} categor${y.length===1?"y":"ies"}`:"Participant-defined (open sort)"]].map(([F,O])=>g("div",{className:"flex items-center justify-between px-5 py-3.5",children:[u("span",{className:"text-[10px] uppercase tracking-widest text-[#8a8a8a] font-bold",children:F}),u("span",{className:"text-sm font-medium text-right",children:O})]},F))})})]}),g("footer",{className:"sticky bottom-0 bg-white border-t border-[#c6c6c6]/40 px-8 py-4 flex items-center justify-between",children:[g("button",{onClick:M,className:"flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:[u("span",{className:"material-symbols-outlined text-base",children:"arrow_back"}),E===0?"Cancel":"Back"]}),u("button",{onClick:G,disabled:!P,className:"px-8 py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:active:scale-100 transition-all",children:N==="review"?"Start Sorting":"Continue"})]})]})},Pi="__unsorted__",kw=({study:t,onFinish:e,onExit:n})=>{const{type:r,studyName:i,cards:s}=t,[o,a]=C.useState(t.initialCategories),[l,c]=C.useState({}),[d,h]=C.useState(null),[f,_]=C.useState(null),[v,S]=C.useState(null),E=C.useRef(0),m=r!=="closed",p=A=>r==="open"||!A.locked,y=s.filter(A=>!l[A.id]),x=s.length-y.length,k=y.length===0,N=(A,z)=>{c(w=>{const R={...w};return z===Pi?delete R[A]:R[A]=z,R}),_(null)},T=(A=null)=>{E.current+=1;const z={id:vw(),name:`Group ${E.current}`,locked:!1};return a(w=>[...w,z]),S(z.id),A&&N(A,z.id),z},P=(A,z)=>{a(w=>w.map(R=>R.id===A?{...R,name:z}:R))},G=A=>{a(z=>z.filter(w=>w.id!==A)),c(z=>{const w={};return Object.entries(z).forEach(([R,L])=>{L!==A&&(w[R]=L)}),w})},M=(A,z)=>{A.dataTransfer.setData("text/plain",z),A.dataTransfer.effectAllowed="move"},ue=(A,z)=>{A.preventDefault(),h(null);const w=A.dataTransfer.getData("text/plain");w&&(z==="__new__"?T(w):N(w,z))},Te=A=>({onDragOver:z=>{z.preventDefault(),z.dataTransfer.dropEffect="move",h(A)},onDragLeave:z=>{z.currentTarget.contains(z.relatedTarget)||h(null)},onDrop:z=>ue(z,A)}),F=A=>{f&&(A==="__new__"?T(f):N(f,A))},O=(A,z)=>{if(f&&f!==A){F(z);return}_(w=>w===A?null:A)},de=({card:A,zoneId:z})=>g("div",{draggable:!0,onDragStart:w=>M(w,A.id),onClick:w=>{w.stopPropagation(),O(A.id,z)},className:`px-4 py-2.5 rounded-lg bg-white text-sm font-medium shadow-sm border cursor-grab active:cursor-grabbing select-none transition-all hover:shadow-md ${f===A.id?"border-[#7161EF] ring-2 ring-[#7161EF]/20":"border-[#c6c6c6]/50"}`,children:[u("span",{className:"material-symbols-outlined text-sm align-middle mr-2 text-[#8a8a8a]",children:"drag_indicator"}),A.label]});return g("div",{className:"min-h-screen bg-[#f3f3f4] font-body text-black flex flex-col",children:[g("header",{className:"flex items-center justify-between px-8 py-4 border-b border-[#c6c6c6]/40 bg-white sticky top-0 z-30",children:[g("div",{className:"flex items-center gap-3",children:[u("div",{className:"w-10 h-10 bg-[#7161EF] rounded-lg flex items-center justify-center text-white",children:u("span",{className:"material-symbols-outlined",children:"style"})}),g("div",{children:[u("h1",{className:"text-lg font-black leading-tight",children:i}),u("p",{className:"text-[10px] uppercase tracking-widest text-[#474747]",children:ur[r].label})]})]}),g("div",{className:"flex items-center gap-6",children:[g("div",{className:"flex items-center gap-3",children:[u("div",{className:"w-40 h-2 rounded-full bg-[#e8e8e8] overflow-hidden",children:u("div",{className:"h-full bg-[#7161EF] transition-all",style:{width:`${x/s.length*100}%`}})}),g("span",{className:"text-xs font-bold tabular-nums",children:[x,"/",s.length]})]}),u("button",{onClick:n,className:"px-4 py-2 rounded-lg text-xs uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:"Quit"}),u("button",{onClick:()=>e(o,l),disabled:x===0,className:"px-6 py-2.5 bg-[#7161EF] text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 disabled:opacity-40 transition-all",children:k?"Finish":`Finish (${y.length} left)`})]})]}),g("div",{className:"flex flex-grow overflow-hidden",children:[g("aside",{...Te(Pi),onClick:()=>F(Pi),className:`w-72 flex-shrink-0 border-r border-[#c6c6c6]/40 p-5 overflow-y-auto transition-colors ${d===Pi?"bg-[#e8e8e8]":""}`,children:[g("h2",{className:"text-[10px] uppercase tracking-widest font-bold text-[#474747] mb-4",children:["Unsorted Cards (",y.length,")"]}),y.length===0?u("p",{className:"text-xs text-[#8a8a8a]",children:"All cards sorted. Drag a card back here to unsort it."}):u("div",{className:"space-y-2",children:y.map(A=>u(de,{card:A,zoneId:Pi},A.id))}),f&&u("p",{className:"mt-4 text-[11px] text-[#8a8a8a]",children:"Card selected — click a group to place it."})]}),g("main",{className:"flex-grow p-6 overflow-auto",children:[o.length===0&&g("div",{className:"text-center py-16",children:[u("span",{className:"material-symbols-outlined text-5xl text-[#c6c6c6]",children:"category"}),u("p",{className:"mt-3 text-sm text-[#474747]",children:"No groups yet. Create one, or drag a card onto “New Group”."})]}),g("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start",children:[o.map(A=>{const z=s.filter(w=>l[w.id]===A.id);return g("section",{...Te(A.id),onClick:()=>F(A.id),className:`rounded-xl border-2 bg-white/70 p-4 min-h-[10rem] transition-all ${d===A.id?"border-[#7161EF] bg-white shadow-md":f?"border-dashed border-[#8a8a8a] cursor-pointer":"border-transparent shadow-sm"}`,children:[g("div",{className:"flex items-center justify-between mb-3 gap-2",children:[v===A.id?u("input",{autoFocus:!0,defaultValue:A.name,onClick:w=>w.stopPropagation(),onBlur:w=>{P(A.id,w.target.value.trim()||A.name),S(null)},onKeyDown:w=>{w.key==="Enter"&&w.target.blur(),w.key==="Escape"&&S(null)},className:"flex-grow rounded-md border border-[#7161EF] px-2 py-1 text-sm font-bold focus:ring-0"}):g("h3",{className:`font-black text-sm truncate ${p(A)?"cursor-text":""}`,title:p(A)?"Click to rename":A.name,onClick:w=>{p(A)&&(w.stopPropagation(),S(A.id))},children:[A.name,A.locked&&u("span",{className:"material-symbols-outlined text-xs ml-1 text-[#8a8a8a] align-middle",children:"lock"})]}),g("div",{className:"flex items-center gap-1 flex-shrink-0",children:[u("span",{className:"text-[10px] font-bold text-[#8a8a8a] tabular-nums",children:z.length}),!A.locked&&m&&u("button",{onClick:w=>{w.stopPropagation(),G(A.id)},title:"Delete group (cards return to unsorted)",className:"w-6 h-6 rounded flex items-center justify-center text-[#8a8a8a] hover:bg-[#e8e8e8] hover:text-[#7161EF] transition-all",children:u("span",{className:"material-symbols-outlined text-base",children:"close"})})]})]}),z.length===0?u("p",{className:"text-xs text-[#c6c6c6] py-4 text-center",children:"Drop cards here"}):u("div",{className:"space-y-2",children:z.map(w=>u(de,{card:w,zoneId:A.id},w.id))})]},A.id)}),m&&g("button",{...Te("__new__"),onClick:A=>{A.stopPropagation(),f?F("__new__"):T()},className:`rounded-xl border-2 border-dashed min-h-[10rem] flex flex-col items-center justify-center gap-2 text-[#8a8a8a] transition-all ${d==="__new__"?"border-[#7161EF] text-black bg-white":"border-[#c6c6c6]/70 hover:border-[#7161EF] hover:text-[#7161EF]"}`,children:[u("span",{className:"material-symbols-outlined text-3xl",children:"add_circle"}),u("span",{className:"text-xs uppercase tracking-widest font-bold",children:"New Group"}),u("span",{className:"text-[10px]",children:"Click, or drop a card here"})]})]})]})]})]})},om=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"card-sort",UT=({session:t,saveState:e,onRestart:n,onNewStudy:r,onExit:i})=>{const{studyName:s,participant:o,type:a,results:l,completedAt:c}=t,d=()=>Ta(`${om(s)}-results.csv`,MT(l),"text/csv"),h=()=>Ta(`${om(s)}-results.json`,JSON.stringify(t,null,2),"application/json");return g("div",{className:"min-h-screen bg-[#f3f3f4] font-body text-black",children:[g("header",{className:"flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white",children:[g("div",{className:"flex items-center gap-3",children:[u("div",{className:"w-10 h-10 bg-[#7161EF] rounded-lg flex items-center justify-center text-white",children:u("span",{className:"material-symbols-outlined",children:"insights"})}),g("div",{children:[u("h1",{className:"text-xl font-black leading-tight",children:s}),g("p",{className:"text-[10px] uppercase tracking-widest text-[#474747]",children:["Results · ",ur[a].label,o?` · ${o}`:""]})]})]}),g("div",{className:"flex items-center gap-2",children:[u("button",{onClick:d,className:"px-4 py-2 rounded-lg text-xs uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Export CSV"}),u("button",{onClick:h,className:"px-4 py-2 rounded-lg text-xs uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Export JSON"})]})]}),g("main",{className:"max-w-5xl mx-auto px-8 py-10",children:[g("div",{className:"flex items-center justify-between mb-8",children:[g("p",{className:"text-sm text-[#474747]",children:["Completed ",new Date(c).toLocaleString()," ·"," ",l.groups.reduce((f,_)=>f+_.cards.length,0)," cards sorted into"," ",l.groups.filter(f=>f.cards.length>0).length," groups",l.unsorted.length>0&&`, ${l.unsorted.length} left unsorted`]}),g("p",{className:"text-xs uppercase tracking-widest font-bold",children:[e==="saving"&&u("span",{className:"text-[#8a8a8a]",children:"Saving to cloud…"}),e==="saved"&&u("span",{className:"text-green-700",children:"✓ Saved to cloud"}),e==="error"&&u("span",{className:"text-red-600",children:"Cloud save failed — use export"})]})]}),g("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start",children:[l.groups.map((f,_)=>g("section",{className:"rounded-xl bg-white shadow-sm p-5",children:[g("div",{className:"flex items-center justify-between mb-3",children:[u("h3",{className:"font-black text-sm",children:f.category}),u("span",{className:"text-[10px] font-bold text-[#8a8a8a] tabular-nums",children:f.cards.length})]}),f.cards.length===0?u("p",{className:"text-xs text-[#c6c6c6]",children:"Empty group"}):u("ul",{className:"space-y-1.5",children:f.cards.map(v=>u("li",{className:"text-sm px-3 py-1.5 rounded-md bg-[#f3f3f4]",children:v},v))})]},`${f.category}-${_}`)),l.unsorted.length>0&&g("section",{className:"rounded-xl border-2 border-dashed border-[#c6c6c6]/70 p-5",children:[u("h3",{className:"font-black text-sm text-[#8a8a8a] mb-3",children:"Unsorted"}),u("ul",{className:"space-y-1.5",children:l.unsorted.map(f=>u("li",{className:"text-sm px-3 py-1.5 rounded-md bg-white text-[#474747]",children:f},f))})]})]}),g("div",{className:"flex items-center justify-center gap-4 mt-12 pb-16",children:[u("button",{onClick:n,className:"px-6 py-3 rounded-lg text-sm uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Sort Again"}),u("button",{onClick:r,className:"px-6 py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all",children:"New Study"}),u("button",{onClick:i,className:"px-6 py-3 rounded-lg text-sm uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:"Back to Editor"})]})]})]})},$T=({onExit:t})=>{const[e,n]=C.useState("setup"),[r,i]=C.useState(null),[s,o]=C.useState(null),[a,l]=C.useState("idle"),[c,d]=C.useState(0),h=({type:_,studyName:v,participant:S,cardLabels:E,categoryNames:m})=>{i({type:_,studyName:v,participant:S,cards:Sw(E),initialCategories:Ew(m,_!=="open")}),d(p=>p+1),n("sort")},f=(_,v)=>{const S={studyName:r.studyName,participant:r.participant,type:r.type,completedAt:new Date().toISOString(),results:Cw(r.cards,_,v)};o(S),n("results"),l("saving"),dh(ht(ft,"cardSortSessions"),S).then(()=>l("saved")).catch(E=>{console.error("Failed to save card sort session:",E),l("error")})};return e==="sort"?u(kw,{study:r,onFinish:f,onExit:()=>n("setup")},c):e==="results"?u(UT,{session:s,saveState:a,onRestart:()=>{d(_=>_+1),n("sort")},onNewStudy:()=>n("setup"),onExit:t}):u(FT,{onStart:h,onExit:t})},po="w-full rounded-lg border border-[#c6c6c6]/60 bg-white px-4 py-3 text-sm text-black focus:border-[#7161EF] focus:ring-0",vr=({eyebrow:t,title:e,subtitle:n,children:r})=>g("div",{className:"w-full max-w-2xl",children:[u("p",{className:"text-[10px] uppercase tracking-widest text-[#8a8a8a] font-bold mb-2",children:t}),u("h2",{className:"text-2xl font-black mb-2",children:e}),n&&u("p",{className:"text-sm text-[#474747] mb-8",children:n}),!n&&u("div",{className:"mb-8"}),r]}),zT=({onCreate:t,onExit:e,creating:n})=>{var F;const[r,i]=C.useState(null),[s,o]=C.useState(""),[a,l]=C.useState(""),[c,d]=C.useState(""),[h,f]=C.useState(""),[_,v]=C.useState(!1),[S,E]=C.useState(null),[m,p]=C.useState(0),y=c.split(`
`).map(O=>O.trim()).filter(Boolean),x=h.split(`
`).map(O=>O.trim()).filter(Boolean),k=r!=="open",N=C.useMemo(()=>["type","name","intention","cards",...k?["categories"]:[],"review"],[k]),T=N[m],P=async()=>{v(!0),E(null);try{const O=await Us(ht(ft,"vellumSitemap")),de=Ph(O.val());de.length===0?E("No sitemap pages found to import."):(d(de.join(`
`)),E(`Imported ${de.length} pages from your sitemap.`))}catch(O){console.error("Sitemap import failed:",O),E("Could not load the sitemap from Firebase.")}finally{v(!1)}},G={type:!!r,name:s.trim().length>0,intention:!0,cards:y.length>=2,categories:x.length>=1,review:!0}[T],M=()=>{if(G){if(T==="review"){t({type:r,studyName:s.trim()||"Untitled Study",intention:a.trim(),cardLabels:y,categoryNames:k?x:[]});return}p(O=>Math.min(O+1,N.length-1))}},ue=()=>{m===0?e():p(O=>O-1)},Te=O=>{O.key==="Enter"&&!O.shiftKey&&G&&(O.preventDefault(),M())};return g("div",{className:"min-h-screen bg-[#f3f3f4] font-body text-black flex flex-col",children:[g("header",{className:"flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white",children:[g("div",{className:"flex items-center gap-3",children:[u("div",{className:"w-10 h-10 bg-[#7161EF] rounded-lg flex items-center justify-center text-white",children:u("span",{className:"material-symbols-outlined",children:"send"})}),g("div",{children:[u("h1",{className:"text-xl font-black leading-tight",children:"Create a Study to Send"}),u("p",{className:"text-[10px] uppercase tracking-widest text-[#474747]",children:"Setup"})]})]}),g("button",{onClick:e,className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:[u("span",{className:"material-symbols-outlined text-base",children:"close"}),"Cancel"]})]}),u("div",{className:"flex items-center gap-2 px-8 py-4",children:N.map((O,de)=>u("div",{className:`h-1.5 rounded-full flex-grow transition-all ${de<=m?"bg-[#7161EF]":"bg-[#dcdcdc]"}`},O))}),g("main",{className:"flex-grow flex items-start justify-center px-8 pt-6 pb-16",children:[T==="type"&&u(vr,{eyebrow:`Step ${m+1} of ${N.length}`,title:"Choose a sort type",children:u("div",{className:"grid grid-cols-1 gap-4",children:Object.entries(ur).map(([O,de])=>g("button",{onClick:()=>{i(O),p(A=>A+1)},className:`text-left rounded-xl p-5 border-2 transition-all ${r===O?"border-[#7161EF] bg-white shadow-md":"border-transparent bg-white/60 hover:bg-white hover:shadow-sm"}`,children:[g("div",{className:"flex items-center justify-between mb-3",children:[u("span",{className:"material-symbols-outlined text-2xl",children:de.icon}),r===O&&u("span",{className:"material-symbols-outlined text-xl",children:"check_circle"})]}),u("h3",{className:"font-black text-base mb-1",children:de.label}),u("p",{className:"text-sm text-[#474747] mb-2",children:de.tagline}),g("p",{className:"text-[11px] uppercase tracking-wide text-[#8a8a8a]",children:["Best for: ",de.bestFor]})]},O))})}),T==="name"&&u(vr,{eyebrow:`Step ${m+1} of ${N.length}`,title:"Name this study",subtitle:"Shown to you in your studies list, and in the results dashboard.",children:u("input",{autoFocus:!0,className:po,value:s,onChange:O=>o(O.target.value),onKeyDown:Te,placeholder:"e.g. Main Nav Card Sort"})}),T==="intention"&&u(vr,{eyebrow:`Step ${m+1} of ${N.length}`,title:"Describe the intention",subtitle:"Tell participants what you're testing and why — this is shown before they start sorting.",children:u("textarea",{autoFocus:!0,className:`${po} h-40 resize-none leading-6`,value:a,onChange:O=>l(O.target.value),placeholder:"e.g. We're redesigning our site navigation and want to understand how you'd naturally group these pages. There are no right or wrong answers — sort the cards however makes sense to you."})}),T==="cards"&&g(vr,{eyebrow:`Step ${m+1} of ${N.length}`,title:"Add your cards",subtitle:"One card per line. Add at least 2 to continue.",children:[g("div",{className:"flex items-center justify-between mb-3",children:[g("span",{className:"text-[10px] uppercase tracking-widest text-[#474747] font-bold",children:[y.length," card",y.length===1?"":"s"]}),g("div",{className:"flex gap-2",children:[u("button",{onClick:P,disabled:_,className:"px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-[#7161EF] text-white hover:opacity-90 disabled:opacity-50 transition-all",children:_?"Importing…":"Import Sitemap Pages"}),u("button",{onClick:()=>d(ww.join(`
`)),className:"px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Sample Deck"})]})]}),u("textarea",{autoFocus:!0,className:`${po} h-64 resize-none font-mono text-xs leading-6`,value:c,onChange:O=>d(O.target.value),placeholder:`One card per line, e.g.
Pricing
Contact Us
Blog`}),S&&u("p",{className:"mt-2 text-xs text-[#474747]",children:S})]}),T==="categories"&&g(vr,{eyebrow:`Step ${m+1} of ${N.length}`,title:"Add your categories",subtitle:r==="closed"?"Participants can only sort cards into these categories.":"Participants start with these but can add their own.",children:[g("div",{className:"flex items-center justify-between mb-3",children:[g("span",{className:"text-[10px] uppercase tracking-widest text-[#474747] font-bold",children:[x.length," categor",x.length===1?"y":"ies"]}),u("button",{onClick:()=>f(xw.join(`
`)),className:"px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Sample Categories"})]}),u("textarea",{autoFocus:!0,className:`${po} h-64 resize-none font-mono text-xs leading-6`,value:h,onChange:O=>f(O.target.value),placeholder:`One category per line, e.g.
Company
Product
Support`})]}),T==="review"&&u(vr,{eyebrow:`Step ${m+1} of ${N.length}`,title:"Ready to create",subtitle:"You'll get a shareable link on the next screen.",children:u("div",{className:"rounded-xl bg-white shadow-sm divide-y divide-[#e8e8e8]",children:[["Sort type",(F=ur[r])==null?void 0:F.label],["Study name",s.trim()||"Untitled Study"],["Intention",a.trim()||"—"],["Cards",`${y.length} card${y.length===1?"":"s"}`],["Categories",k?`${x.length} categor${x.length===1?"y":"ies"}`:"Participant-defined (open sort)"]].map(([O,de])=>g("div",{className:"flex items-start justify-between px-5 py-3.5 gap-6",children:[u("span",{className:"text-[10px] uppercase tracking-widest text-[#8a8a8a] font-bold flex-shrink-0 pt-0.5",children:O}),u("span",{className:"text-sm font-medium text-right",children:de})]},O))})})]}),g("footer",{className:"sticky bottom-0 bg-white border-t border-[#c6c6c6]/40 px-8 py-4 flex items-center justify-between",children:[g("button",{onClick:ue,className:"flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:[u("span",{className:"material-symbols-outlined text-base",children:"arrow_back"}),m===0?"Cancel":"Back"]}),u("button",{onClick:M,disabled:!G||n,className:"px-8 py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:active:scale-100 transition-all",children:T==="review"?n?"Creating…":"Create Study & Get Link":"Continue"})]})]})},BT=({study:t,link:e,onViewResults:n,onDone:r})=>{const[i,s]=C.useState(!1),o=async()=>{try{await navigator.clipboard.writeText(e),s(!0),setTimeout(()=>s(!1),2e3)}catch(a){console.error("Copy failed:",a)}};return u("div",{className:"min-h-screen bg-[#f3f3f4] font-body text-black flex items-center justify-center px-8",children:g("div",{className:"w-full max-w-xl text-center",children:[u("div",{className:"w-16 h-16 bg-[#7161EF] rounded-2xl flex items-center justify-center text-white mx-auto mb-6",children:u("span",{className:"material-symbols-outlined text-3xl",children:"check"})}),g("h1",{className:"text-2xl font-black mb-2",children:["“",t.studyName,"” is ready to send"]}),g("p",{className:"text-sm text-[#474747] mb-8",children:["Share this link with participants. Each person who opens it gets your intention statement, then sorts the ",t.cards.length," cards on their own device."]}),g("div",{className:"flex items-center gap-2 bg-white rounded-lg border border-[#c6c6c6]/60 p-2 mb-3",children:[u("input",{readOnly:!0,value:e,onFocus:a=>a.target.select(),className:"flex-grow bg-transparent px-3 py-2 text-sm text-[#474747] focus:outline-none"}),u("button",{onClick:o,className:"flex-shrink-0 px-4 py-2 bg-[#7161EF] text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all",children:i?"Copied":"Copy Link"})]}),u("p",{className:"text-xs text-[#8a8a8a] mb-10",children:"Results — including the similarity matrix, dendrogram, and category frequency analysis — build up automatically as responses come in."}),g("div",{className:"flex items-center justify-center gap-4",children:[u("button",{onClick:r,className:"px-6 py-3 rounded-lg text-sm uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:"Back to Studies"}),u("button",{onClick:n,className:"px-6 py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all",children:"View Results"})]})]})})},jT=(t,e)=>{const n=t.length,r=Array.from({length:n},()=>new Array(n).fill(0)),i=Array.from({length:n},()=>new Array(n).fill(0));return e.forEach(s=>{var l;const o=(((l=s.results)==null?void 0:l.groups)||[]).filter(c=>c.cards.length>0),a=new Map;o.forEach((c,d)=>c.cards.forEach(h=>a.set(h,d)));for(let c=0;c<n;c++)if(a.has(t[c]))for(let d=c+1;d<n;d++)a.has(t[d])&&(i[c][d]++,i[d][c]++,a.get(t[c])===a.get(t[d])&&(r[c][d]++,r[d][c]++))}),Array.from({length:n},(s,o)=>Array.from({length:n},(a,l)=>o===l?1:i[o][l]>0?r[o][l]/i[o][l]:0))},WT=(t,e)=>{if(e.length===0)return null;if(e.length===1)return{type:"leaf",label:e[0],indices:[0]};let n=e.map((i,s)=>({type:"leaf",label:i,indices:[s]}));const r=(i,s)=>{let o=0,a=0;return i.indices.forEach(l=>{s.indices.forEach(c=>{o+=1-t[l][c],a++})}),o/a};for(;n.length>1;){let i=null;for(let c=0;c<n.length;c++)for(let d=c+1;d<n.length;d++){const h=r(n[c],n[d]);(!i||h<i.d)&&(i={i:c,j:d,d:h})}const{i:s,j:o,d:a}=i,l={type:"node",left:n[s],right:n[o],distance:a,indices:[...n[s].indices,...n[o].indices]};n=n.filter((c,d)=>d!==s&&d!==o),n.push(l)}return n[0]},VT=t=>{const e=new Map;return t.forEach(n=>{var r;(((r=n.results)==null?void 0:r.groups)||[]).filter(i=>i.cards.length>0).forEach(i=>{const s=i.category.trim().toLowerCase();e.has(s)||e.set(s,{name:i.category.trim(),count:0,cardCounts:new Map});const o=e.get(s);o.count++,i.cards.forEach(a=>o.cardCounts.set(a,(o.cardCounts.get(a)||0)+1))})}),Array.from(e.values()).map(n=>({name:n.name,count:n.count,topCards:Array.from(n.cardCounts.entries()).sort((r,i)=>i[1]-r[1]).map(([r,i])=>({label:r,count:i}))})).sort((n,r)=>r.count-n.count)},Ao=["#cde2fb","#9ec5f4","#6da7ec","#3987e5","#2a78d6","#1c5cab","#104281","#0d366b"],HT=t=>{if(t<=0)return"#fcfcfb";const e=Math.min(Ao.length-1,Math.floor(t*Ao.length));return Ao[e]},tt=26,GT=({labels:t,matrix:e})=>{const[n,r]=C.useState(null);return g("div",{children:[g("div",{className:"flex items-center justify-between mb-3",children:[u("p",{className:"text-xs text-[#474747]",children:"Share of participants who placed each pair of cards in the same group."}),g("div",{className:"flex items-center gap-2 text-[10px] text-[#8a8a8a] uppercase tracking-widest",children:[u("span",{children:"Low"}),u("div",{className:"flex",children:Ao.map(i=>u("div",{style:{width:12,height:12,background:i}},i))}),u("span",{children:"High"})]})]}),u("div",{className:"overflow-auto rounded-lg border border-[#e1e0d9]",style:{maxHeight:560},children:g("table",{className:"border-collapse",style:{tableLayout:"fixed",width:"max-content"},children:[u("thead",{children:g("tr",{children:[u("th",{className:"sticky top-0 left-0 z-[60] bg-[#fcfcfb]",style:{width:tt*6,minWidth:tt*6}}),t.map((i,s)=>u("th",{className:"sticky top-0 bg-[#fcfcfb] px-0 relative",style:{width:tt,minWidth:tt,maxWidth:tt,height:tt*6,zIndex:10+(t.length-s)},children:u("div",{className:"absolute text-[10px] font-medium text-[#52514e] whitespace-nowrap origin-bottom-left",style:{bottom:6,left:tt/2+4,transform:"rotate(-55deg)"},title:i,children:i})},i))]})}),u("tbody",{children:t.map((i,s)=>g("tr",{children:[u("th",{className:"sticky left-0 z-10 bg-[#fcfcfb] text-[10px] font-medium text-[#52514e] text-right pr-2 whitespace-nowrap",style:{width:tt*6,minWidth:tt*6,height:tt},title:i,children:i}),t.map((o,a)=>{const l=e[s][a],c=s===a,d=n&&(n.i===s||n.j===s)&&(n.i===a||n.j===a);return u("td",{onMouseEnter:()=>r({i:s,j:a}),onMouseLeave:()=>r(null),title:c?i:`${i} + ${o}: ${Math.round(l*100)}%`,style:{width:tt,height:tt,background:c?"#e1e0d9":HT(l),outline:d&&!c?"2px solid #0b0b0b":"none",outlineOffset:-2}},o)})]},i))})]})})]})},oc=26,KT=200,ac=420,lc=16,Pu=(t,e=[])=>t?t.type==="leaf"?(e.push(t.label),e):(Pu(t.left,e),Pu(t.right,e),e):e,qT=({labels:t,matrix:e})=>{const n=C.useMemo(()=>WT(e,t),[e,t]),{segments:r,leafPositions:i,maxDistance:s}=C.useMemo(()=>{if(!n)return{segments:[],leafPositions:[],maxDistance:1};const l=Pu(n),c=new Map(l.map((E,m)=>[E,m*oc+oc/2]));let d=0;const h=E=>{!E||E.type==="leaf"||(d=Math.max(d,E.distance),h(E.left),h(E.right))};h(n),d=d||1;const f=E=>ac-lc-E/d*(ac-lc*2),_=[],v=[],S=E=>{if(E.type==="leaf"){const x=c.get(E.label);return v.push({label:E.label,x:f(0),y:x}),{x:f(0),y:x}}const m=S(E.left),p=S(E.right),y=f(E.distance);return _.push({x1:m.x,y1:m.y,x2:y,y2:m.y}),_.push({x1:p.x,y1:p.y,x2:y,y2:p.y}),_.push({x1:y,y1:m.y,x2:y,y2:p.y}),{x:y,y:(m.y+p.y)/2}};return S(n),{segments:_,leafPositions:v,maxDistance:d}},[n]);if(!n)return null;const o=t.length*oc+lc,a=ac+KT;return g("div",{children:[u("p",{className:"text-xs text-[#474747] mb-3",children:"Cards that join close to their labels (right) were sorted together often; joins pulled further left happened only because every card has to merge eventually."}),u("div",{className:"overflow-auto rounded-lg border border-[#e1e0d9] bg-[#fcfcfb]",style:{maxHeight:560},children:u("svg",{width:a,height:o,role:"img","aria-label":"Card sort dendrogram",children:g("g",{children:[r.map((l,c)=>u("line",{x1:l.x1,y1:l.y1,x2:l.x2,y2:l.y2,stroke:"#898781",strokeWidth:2,strokeLinecap:"round"},c)),i.map(l=>u("text",{x:l.x+8,y:l.y,dominantBaseline:"middle",fontSize:11,fill:"#0b0b0b",children:l.label},l.label))]})})})]})},YT="#2a78d6",QT=({frequencies:t,sessionCount:e})=>{if(t.length===0)return u("p",{className:"text-sm text-[#8a8a8a]",children:"No groups have been created yet."});const n=Math.max(...t.map(r=>r.count));return g("div",{children:[g("p",{className:"text-xs text-[#474747] mb-5",children:["How often each group name was used across ",e," participant",e===1?"":"s",", and which cards ended up there most."]}),u("div",{className:"space-y-5",children:t.map(r=>g("div",{children:[g("div",{className:"flex items-baseline justify-between mb-1.5",children:[u("span",{className:"text-sm font-bold",children:r.name}),g("span",{className:"text-xs text-[#52514e] tabular-nums",children:[r.count," participant",r.count===1?"":"s"]})]}),u("div",{className:"h-2 rounded-full bg-[#e1e0d9] overflow-hidden mb-2.5",children:u("div",{className:"h-full rounded-full",style:{width:`${r.count/n*100}%`,background:YT}})}),u("div",{className:"flex flex-wrap gap-1.5",children:r.topCards.slice(0,8).map(i=>g("span",{title:`${i.label}: placed here ${i.count} time${i.count===1?"":"s"}`,className:"text-[11px] px-2.5 py-1 rounded-full bg-[#f3f3f4] text-[#474747]",children:[i.label,g("span",{className:"text-[#8a8a8a]",children:[" · ",i.count]})]},i.label))})]},r.name))})]})},am=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"study",XT=[{key:"matrix",label:"Similarity Matrix",icon:"grid_on"},{key:"dendrogram",label:"Dendrogram",icon:"account_tree"},{key:"frequency",label:"Category Frequency",icon:"bar_chart"}],JT=({studyId:t,onExit:e})=>{const[n,r]=C.useState(null),[i,s]=C.useState([]),[o,a]=C.useState("matrix"),[l,c]=C.useState(!1);C.useEffect(()=>{Th(t).then(r).catch(m=>console.error("Failed to load study:",m))},[t]),C.useEffect(()=>AT(t,s),[t]);const d=C.useMemo(()=>((n==null?void 0:n.cards)||[]).map(m=>m.label),[n]),h=C.useMemo(()=>d.length?jT(d,i):[],[d,i]),f=C.useMemo(()=>VT(i),[i]),_=async()=>{try{await navigator.clipboard.writeText(Rh(t)),c(!0),setTimeout(()=>c(!1),2e3)}catch(m){console.error("Copy failed:",m)}},v=()=>Ta(`${am(n.studyName)}-sessions.json`,JSON.stringify({study:n,sessions:i},null,2),"application/json"),S=()=>{const m=y=>`"${String(y).replace(/"/g,'""')}"`,p=[["",...d].map(m)];d.forEach((y,x)=>{p.push([y,...h[x].map(k=>Math.round(k*100))].map(m))}),Ta(`${am(n.studyName)}-similarity-matrix.csv`,p.map(y=>y.join(",")).join(`
`),"text/csv")};if(!n)return u("div",{className:"min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body text-sm text-[#474747]",children:"Loading results…"});const E=i.length>=2;return g("div",{className:"min-h-screen bg-[#f3f3f4] font-body text-black",children:[g("header",{className:"flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white",children:[g("div",{className:"flex items-center gap-3",children:[u("div",{className:"w-10 h-10 bg-[#7161EF] rounded-lg flex items-center justify-center text-white",children:u("span",{className:"material-symbols-outlined",children:"insights"})}),g("div",{children:[u("h1",{className:"text-xl font-black leading-tight",children:n.studyName}),g("p",{className:"text-[10px] uppercase tracking-widest text-[#474747]",children:[i.length," response",i.length===1?"":"s"," · Live"]})]})]}),g("div",{className:"flex items-center gap-2",children:[u("button",{onClick:_,className:"px-4 py-2 rounded-lg text-xs uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all",children:l?"Link Copied":"Copy Share Link"}),u("button",{onClick:e,className:"px-4 py-2 rounded-lg text-xs uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:"Back to Studies"})]})]}),g("main",{className:"max-w-5xl mx-auto px-8 py-10",children:[n.intention&&u("p",{className:"text-sm text-[#474747] bg-white rounded-lg p-4 mb-8 whitespace-pre-wrap",children:n.intention}),!E&&g("div",{className:"rounded-lg border-2 border-dashed border-[#c6c6c6]/70 p-6 text-center mb-8",children:[u("span",{className:"material-symbols-outlined text-3xl text-[#8a8a8a]",children:"hourglass_top"}),u("p",{className:"mt-2 text-sm text-[#474747]",children:i.length===0?"No responses yet. Share the link above to start collecting sorts.":"Waiting on at least one more response — the similarity matrix and dendrogram need 2+ participants to be meaningful."})]}),g("div",{className:"flex items-center justify-between mb-5",children:[u("div",{className:"flex gap-1 bg-white rounded-lg p-1 shadow-sm",children:XT.map(m=>g("button",{onClick:()=>a(m.key),className:`flex items-center gap-2 px-4 py-2 rounded-md text-xs uppercase tracking-widest font-bold transition-all ${o===m.key?"bg-[#7161EF] text-white":"text-[#474747] hover:bg-[#e8e8e8]"}`,children:[u("span",{className:"material-symbols-outlined text-base",children:m.icon}),m.label]},m.key))}),g("div",{className:"flex gap-2",children:[u("button",{onClick:S,disabled:!E,className:"px-3 py-2 rounded-lg text-[10px] uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] disabled:opacity-40 transition-all",children:"Export Matrix CSV"}),u("button",{onClick:v,disabled:i.length===0,className:"px-3 py-2 rounded-lg text-[10px] uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] disabled:opacity-40 transition-all",children:"Export Raw JSON"})]})]}),g("section",{className:"rounded-xl bg-white shadow-sm p-6",children:[o==="matrix"&&(E?u(GT,{labels:d,matrix:h}):u("p",{className:"text-sm text-[#8a8a8a]",children:"Not enough responses yet."})),o==="dendrogram"&&(E?u(qT,{labels:d,matrix:h}):u("p",{className:"text-sm text-[#8a8a8a]",children:"Not enough responses yet."})),o==="frequency"&&u(QT,{frequencies:f,sessionCount:i.length})]})]})]})},ZT=({study:t,onViewResults:e,onDelete:n})=>{var l,c;const[r,i]=C.useState(!1),[s,o]=C.useState(null);C.useEffect(()=>{let d=!1;return Us(ht(ft,`cardSortStudySessions/${t.id}`)).then(h=>{d||o(h.exists()?Object.keys(h.val()).length:0)}),()=>{d=!0}},[t.id]);const a=async d=>{d.stopPropagation();try{await navigator.clipboard.writeText(Rh(t.id)),i(!0),setTimeout(()=>i(!1),2e3)}catch(h){console.error("Copy failed:",h)}};return g("div",{onClick:()=>e(t.id),className:"flex items-center justify-between bg-white rounded-xl shadow-sm px-5 py-4 cursor-pointer hover:shadow-md transition-all",children:[g("div",{className:"min-w-0",children:[u("h3",{className:"font-bold text-sm truncate",children:t.studyName}),g("p",{className:"text-[10px] uppercase tracking-widest text-[#8a8a8a] mt-1",children:[(l=ur[t.type])==null?void 0:l.label," · ",((c=t.cards)==null?void 0:c.length)??0," cards ·"," ",s===null?"…":s," response",s===1?"":"s"]})]}),g("div",{className:"flex items-center gap-2 flex-shrink-0",children:[u("button",{onClick:a,className:"px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-[#f3f3f4] hover:bg-[#e8e8e8] transition-all",children:r?"Copied":"Copy Link"}),u("button",{onClick:d=>{d.stopPropagation(),n(t.id)},title:"Delete study",className:"w-8 h-8 rounded-lg flex items-center justify-center text-[#8a8a8a] hover:bg-[#f3f3f4] hover:text-[#7161EF] transition-all",children:u("span",{className:"material-symbols-outlined text-base",children:"delete"})})]})]})},eR=({user:t})=>t===void 0?u("span",{className:"text-xs text-[#8a8a8a]",children:"…"}):t?g("div",{className:"flex items-center gap-3",children:[t.photoURL?u("img",{src:t.photoURL,alt:"",className:"w-7 h-7 rounded-full",referrerPolicy:"no-referrer"}):u("div",{className:"w-7 h-7 rounded-full bg-[#7161EF] text-white flex items-center justify-center text-xs font-bold",children:(t.displayName||t.email||"?")[0].toUpperCase()}),u("span",{className:"text-xs text-[#474747] max-w-[10rem] truncate hidden sm:inline",children:t.displayName||t.email}),u("button",{onClick:()=>NT().catch(e=>console.error("Sign-out failed:",e)),className:"text-[10px] uppercase tracking-widest text-[#8a8a8a] hover:text-[#7161EF] transition-all",children:"Sign Out"})]}):g("button",{onClick:()=>_w().catch(e=>console.error("Sign-in failed:",e)),className:"flex items-center gap-2 px-4 py-2 rounded-lg text-xs uppercase tracking-widest bg-[#7161EF] text-white hover:opacity-90 transition-all",children:[u("span",{className:"material-symbols-outlined text-base",children:"login"}),"Sign In with Google"]}),mo="cardSortPostLoginIntent",tR=({onExit:t})=>{const{user:e,authError:n}=bT(),[r,i]=C.useState("hub"),[s,o]=C.useState([]),[a,l]=C.useState(!0),[c,d]=C.useState(!1),[h,f]=C.useState(null),[_,v]=C.useState(null),S=C.useCallback(()=>{if(!e){o([]),l(!1);return}l(!0),RT(e.uid).then(y=>{o(y),l(!1)})},[e]);C.useEffect(()=>{r==="hub"&&S()},[r,S]),C.useEffect(()=>{r==="create"&&e===null&&i("hub")},[r,e]),C.useEffect(()=>{e&&sessionStorage.getItem(mo)==="create"&&(sessionStorage.removeItem(mo),i("create"))},[e]);const E=async({type:y,studyName:x,intention:k,cardLabels:N,categoryNames:T})=>{if(e){d(!0);try{const P=await IT({type:y,studyName:x,intention:k,cards:Sw(N),categories:Ew(T,y!=="open")},e.uid);f(P),i("created")}catch(P){console.error("Failed to create study:",P)}finally{d(!1)}}},m=async y=>{if(e&&window.confirm("Delete this study and all of its responses? This can't be undone."))try{await TT(y,e.uid),o(x=>x.filter(k=>k.id!==y))}catch(x){console.error("Failed to delete study:",x)}},p=()=>{if(e){i("create");return}sessionStorage.setItem(mo,"create"),_w().catch(y=>{console.error("Sign-in failed:",y),sessionStorage.removeItem(mo)})};return r==="quick"?u($T,{onExit:()=>i("hub")}):r==="create"?e?u(zT,{onCreate:E,onExit:()=>i("hub"),creating:c}):null:r==="created"&&h?u(BT,{study:h,link:Rh(h.id),onDone:()=>i("hub"),onViewResults:()=>{v(h.id),i("results")}}):r==="results"&&_?u(JT,{studyId:_,onExit:()=>i("hub")}):g("div",{className:"min-h-screen bg-[#f3f3f4] font-body text-black",children:[g("header",{className:"flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white",children:[g("div",{className:"flex items-center gap-3",children:[u("div",{className:"w-10 h-10 bg-[#7161EF] rounded-lg flex items-center justify-center text-white",children:u("span",{className:"material-symbols-outlined",children:"style"})}),g("div",{children:[u("h1",{className:"text-xl font-black leading-tight",children:"Card Sort"}),u("p",{className:"text-[10px] uppercase tracking-widest text-[#474747]",children:"Studies"})]})]}),g("div",{className:"flex items-center gap-5",children:[u(eR,{user:e}),g("button",{onClick:t,className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all",children:[u("span",{className:"material-symbols-outlined text-base",children:"arrow_back"}),"Back to Editor"]})]})]}),g("main",{className:"max-w-3xl mx-auto px-8 py-10",children:[n&&u("p",{className:"text-xs text-red-600 bg-red-50 rounded-lg px-4 py-2.5 mb-6",children:n}),g("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-12",children:[g("button",{onClick:p,className:"text-left rounded-xl p-6 bg-[#7161EF] text-white hover:opacity-90 transition-all",children:[u("span",{className:"material-symbols-outlined text-2xl mb-3 block",children:e?"send":"login"}),u("h2",{className:"font-black text-base mb-1",children:e?"Create a Study to Send":"Sign In to Create a Study"}),u("p",{className:"text-sm text-white/70",children:e?"Describe your intention, define the deck, and get a link to send to participants. Collects a similarity matrix, dendrogram, and category frequency analysis as responses come in.":"Studies and their responses are saved to your Google account, so you can come back to results from any device. Click to sign in and get started."})]}),g("button",{onClick:()=>i("quick"),className:"text-left rounded-xl p-6 bg-white hover:shadow-md transition-all",children:[u("span",{className:"material-symbols-outlined text-2xl mb-3 block",children:"bolt"}),u("h2",{className:"font-black text-base mb-1",children:"Quick Sort (This Device)"}),u("p",{className:"text-sm text-[#474747]",children:"Sort a deck yourself, right now, and see your own results immediately. No sign-in needed."})]})]}),u("h2",{className:"text-sm uppercase tracking-widest font-bold mb-4",children:"My Studies"}),e?a?u("p",{className:"text-sm text-[#8a8a8a]",children:"Loading…"}):s.length===0?u("p",{className:"text-sm text-[#8a8a8a]",children:"You haven't created a study yet. Create one above to get a shareable link."}):u("div",{className:"space-y-3",children:s.map(y=>u(ZT,{study:y,onViewResults:x=>{v(x),i("results")},onDelete:m},y.id))}):u("p",{className:"text-sm text-[#8a8a8a]",children:"Sign in to see the studies you've created."})]})]})},nR="w-full rounded-lg border border-[#c6c6c6]/60 bg-white px-4 py-3 text-sm text-black focus:border-[#7161EF] focus:ring-0",rR=({studyId:t})=>{const[e,n]=C.useState("loading"),[r,i]=C.useState(null),[s,o]=C.useState("");C.useEffect(()=>{let l=!1;return Th(t).then(c=>{l||(c?(i(c),n("intro")):n("error"))}).catch(c=>{console.error("Failed to load study:",c),l||n("error")}),()=>{l=!0}},[t]);const a=(l,c)=>{const d=Cw(r.cards,l,c);PT(t,{participant:s.trim(),completedAt:new Date().toISOString(),results:d}).catch(h=>console.error("Failed to save session:",h)),n("thanks")};return e==="loading"?u("div",{className:"min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body text-sm text-[#474747]",children:"Loading study…"}):e==="error"?u("div",{className:"min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body px-8",children:g("div",{className:"text-center max-w-md",children:[u("span",{className:"material-symbols-outlined text-4xl text-[#8a8a8a]",children:"link_off"}),u("h1",{className:"text-lg font-black mt-4 mb-2",children:"This study link isn't valid"}),u("p",{className:"text-sm text-[#474747]",children:"It may have been deleted, or the link was copied incorrectly. Check with whoever sent it to you."})]})}):e==="sort"?u(kw,{study:{type:r.type,studyName:r.studyName,cards:r.cards,initialCategories:r.categories},onFinish:a,onExit:()=>n("intro")}):e==="thanks"?u("div",{className:"min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body px-8",children:g("div",{className:"text-center max-w-md",children:[u("div",{className:"w-16 h-16 bg-[#7161EF] rounded-2xl flex items-center justify-center text-white mx-auto mb-6",children:u("span",{className:"material-symbols-outlined text-3xl",children:"favorite"})}),u("h1",{className:"text-xl font-black mb-2",children:"Thanks for taking part"}),g("p",{className:"text-sm text-[#474747]",children:["Your responses to “",r.studyName,"” have been submitted. You can close this tab."]})]})}):u("div",{className:"min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body px-8",children:g("div",{className:"w-full max-w-xl bg-white rounded-2xl shadow-sm p-8",children:[u("p",{className:"text-[10px] uppercase tracking-widest text-[#8a8a8a] font-bold mb-2",children:"Card Sort"}),u("h1",{className:"text-2xl font-black mb-4",children:r.studyName}),r.intention&&u("p",{className:"text-sm text-[#474747] leading-relaxed mb-6 whitespace-pre-wrap",children:r.intention}),g("p",{className:"text-xs text-[#8a8a8a] mb-6",children:["You'll sort ",r.cards.length," cards into groups",r.type==="closed"?" that are already provided.":r.type==="hybrid"?", starting from some provided groups — feel free to add your own.":" that you create and name yourself."]}),g("label",{className:"block mb-6",children:[u("span",{className:"text-[10px] uppercase tracking-widest text-[#474747] font-bold",children:"Your name (optional)"}),u("input",{className:`${nR} mt-2`,value:s,onChange:l=>o(l.target.value),placeholder:"e.g. Jamie R."})]}),u("button",{onClick:()=>n("sort"),className:"w-full py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all",children:"Begin Sorting"})]})})},dl="rounded-full font-semibold transition-all duration-200 active:scale-95",Ah=`${dl} bg-[#18181B] dark:bg-[#F5F3F0] text-white dark:text-[#121016] hover:opacity-90`,bw=`${dl} border-[1.5px] border-[#18181B]/15 dark:border-white/20 text-[#18181B] dark:text-[#F5F3F0] hover:bg-[#18181B]/5 dark:hover:bg-white/10`,iR=`${dl} bg-white text-[#18181B] hover:opacity-90`,sR=`${dl} border-[1.5px] border-white/25 text-white hover:bg-white/10`,Ra="bg-white/55 dark:bg-white/[0.06] backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_8px_32px_-12px_rgba(23,21,18,0.18)] dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]",oR="bg-white/60 dark:bg-white/[0.08] backdrop-blur-md border border-white/60 dark:border-white/10",aR="bg-transparent border-b border-transparent",lR="bg-white/50 dark:bg-[#121016]/70 backdrop-blur-xl border-b border-white/60 dark:border-white/10 shadow-[0_1px_0_rgba(23,21,18,0.04)]",Nw="sortly-theme",cR=()=>{const t=localStorage.getItem(Nw);return t==="light"||t==="dark"?t:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},uR=()=>{const[t,e]=C.useState(cR);C.useEffect(()=>{document.documentElement.classList.toggle("dark",t==="dark"),localStorage.setItem(Nw,t)},[t]);const n=C.useCallback(()=>{e(r=>r==="dark"?"light":"dark")},[]);return[t,n]},dR=[{target:"cardsort",icon:"style",label:"Card Sort",desc:"Start a sorting study"},{target:"editor",icon:"account_tree",label:"Sitemap",desc:"Start building a sitemap"}],hR=[{label:"Product",href:"#product"},{label:"Pricing",href:"#pricing"},{label:"Resources",href:"#footer"}],fR=t=>{var e;(e=document.querySelector(t))==null||e.scrollIntoView({behavior:"smooth",block:"start"})},pR=({onGetStarted:t})=>{const[e,n]=C.useState(!1),[r,i]=C.useState(!1),[s,o]=uR();return C.useEffect(()=>{const a=()=>n(window.scrollY>24);return a(),window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),u("header",{className:`sticky top-0 z-50 transition-all duration-300 ${e?lR:aR}`,children:g("nav",{className:"max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between",children:[u("a",{href:"#top",className:"text-[17px] font-extrabold tracking-tight text-[#18181B] dark:text-[#F5F3F0]",children:"Sortly"}),u("div",{className:"hidden md:flex items-center gap-9",children:hR.map(a=>u("button",{onClick:()=>fR(a.href),className:"text-[14px] font-normal text-[#47474D] dark:text-[#B8B2C4] hover:text-[#18181B] dark:hover:text-[#F5F3F0] transition-colors",children:a.label},a.label))}),g("div",{className:"flex items-center gap-4",children:[u("button",{onClick:o,"aria-label":"Toggle dark mode",className:"w-9 h-9 rounded-full flex items-center justify-center text-[#47474D] dark:text-[#B8B2C4] hover:bg-black/5 dark:hover:bg-white/10 transition-colors",children:u("span",{className:"material-symbols-outlined text-[19px]",children:s==="dark"?"light_mode":"dark_mode"})}),u("button",{onClick:t,className:"hidden sm:inline text-[14px] font-medium text-[#47474D] dark:text-[#B8B2C4] hover:text-[#18181B] dark:hover:text-[#F5F3F0] transition-colors",children:"Log in"}),g("div",{className:"relative",children:[g("button",{onClick:()=>i(a=>!a),className:`${Ah} flex items-center gap-1.5 px-5 py-2.5 text-[13px]`,children:["Get started",u("span",{className:`material-symbols-outlined text-[16px] transition-transform ${r?"rotate-180":""}`,children:"expand_more"})]}),r&&g(wm,{children:[u("button",{"aria-label":"Close menu",onClick:()=>i(!1),className:"fixed inset-0 z-40 cursor-default"}),u("div",{className:`absolute right-0 top-[calc(100%+8px)] z-50 w-64 rounded-2xl p-2 ${Ra}`,style:{backdropFilter:"blur(24px)"},children:dR.map(a=>g("button",{onClick:()=>{i(!1),t(a.target)},className:"w-full flex items-start gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-white/70 dark:hover:bg-white/10 transition-colors",children:[u("span",{className:"w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#EEECFD] dark:bg-[#241F3D]",children:u("span",{className:"material-symbols-outlined text-[16px] text-[#7161EF]",children:a.icon})}),g("span",{children:[u("span",{className:"block text-[13px] font-semibold text-[#18181B] dark:text-[#F5F3F0]",children:a.label}),u("span",{className:"block text-[11px] text-[#86868C] dark:text-[#9891A8]",children:a.desc})]})]},a.target))})]})]})]})]})})},fn=({icon:t,className:e="",style:n})=>u("span",{className:`material-symbols-outlined absolute text-[#18181B] dark:text-[#F5F3F0] pointer-events-none select-none ${e}`,style:n,children:t}),hl=({label:t,right:e,children:n,className:r="",accent:i=!1})=>g("div",{className:`rounded-2xl bg-white/55 backdrop-blur-xl border overflow-hidden shadow-[0_8px_32px_-12px_rgba(23,21,18,0.18)] ${i?"border-[#7161EF]/30":"border-white/60"} ${r}`,children:[g("div",{className:`flex items-center justify-between px-4 py-3 border-b bg-white/30 backdrop-blur-md ${i?"border-[#7161EF]/15":"border-white/40"}`,children:[g("div",{className:"flex items-center gap-3",children:[g("div",{className:"flex gap-1.5",children:[u("span",{className:`w-2.5 h-2.5 rounded-full ${i?"bg-[#7161EF]/50":"bg-[#E4E4E7]"}`}),u("span",{className:"w-2.5 h-2.5 rounded-full bg-[#E4E4E7]"}),u("span",{className:"w-2.5 h-2.5 rounded-full bg-[#E4E4E7]"})]}),u("span",{className:"text-[11px] font-medium text-[#86868C]",children:t})]}),e]}),n]}),mR=({tone:t="accent"})=>u("span",{className:`w-1.5 h-1.5 rounded-full flex-shrink-0 ${t==="accent"?"bg-[#7161EF]":t==="muted"?"bg-[#C7C7CC]":"bg-[#18181B]"}`}),Iw=({icon:t,title:e,sub:n,style:r,accent:i=!1})=>g("div",{className:`absolute -translate-x-1/2 -translate-y-1/2 w-[132px] rounded-xl border bg-white px-3 py-2.5 shadow-[0_8px_20px_-8px_rgba(23,21,18,0.15)] ${i?"border-[#7161EF]/40":"border-[#E4E4E7]"}`,style:r,children:[g("div",{className:"flex items-center gap-1.5 mb-1",children:[u("span",{className:`material-symbols-outlined text-[13px] ${i?"text-[#7161EF]":"text-[#86868C]"}`,children:t}),u("span",{className:"text-[11px] font-semibold text-[#18181B] truncate",children:e})]}),g("div",{className:"flex items-center gap-1",children:[u(mR,{tone:i?"accent":"muted"}),u("span",{className:"text-[9px] text-[#9C9CA3] truncate",children:n})]})]}),Ye=({label:t,faded:e=!1})=>g("div",{className:`flex items-center gap-1.5 rounded-lg border bg-white px-2.5 py-2 text-[11px] font-medium ${e?"border-dashed border-[#E4E4E7] text-[#9C9CA3]":"border-[#E4E4E7] text-[#18181B]"}`,children:[u("span",{className:"material-symbols-outlined text-[12px] text-[#C7C7CC]",children:"drag_indicator"}),u("span",{className:"truncate",children:t})]}),Qi=({title:t,count:e,children:n})=>g("div",{className:"rounded-lg border border-dashed border-[#E4E4E7] bg-white/40 backdrop-blur-sm p-2.5 flex-1 min-w-0",children:[g("div",{className:"flex items-center justify-between mb-2",children:[u("span",{className:"text-[10px] font-bold text-[#18181B] truncate",children:t}),u("span",{className:"text-[9px] font-semibold text-[#9C9CA3]",children:e})]}),u("div",{className:"space-y-1.5",children:n})]}),gR=[{icon:"dashboard"},{icon:"layers",active:!0},{icon:"folder_open"},{icon:"history"},{icon:"ios_share"}],cc=600,uc=400,Tw=[{id:"home",icon:"home",title:"Homepage",sub:"index.html",x:110,y:200,accent:!0},{id:"products",icon:"inventory_2",title:"Products",sub:"/products",x:290,y:100},{id:"solutions",icon:"widgets",title:"Solutions",sub:"/solutions",x:290,y:200},{id:"about",icon:"info",title:"About",sub:"/about",x:290,y:300},{id:"pricing",icon:"sell",title:"Pricing",sub:"/products/pricing",x:470,y:65},{id:"enterprise",icon:"business",title:"Enterprise",sub:"/products/ent",x:470,y:135},{id:"cases",icon:"article",title:"Case Studies",sub:"/solutions/cases",x:470,y:225},{id:"contact",icon:"mail",title:"Contact",sub:"/about/contact",x:470,y:315}],yR=[["home","products"],["home","solutions"],["home","about"],["products","pricing"],["products","enterprise"],["solutions","cases"],["about","contact"]],lm=Object.fromEntries(Tw.map(t=>[t.id,t])),_R=(t,e)=>{const n=lm[t],r=lm[e],i=n.x+66,s=n.y,o=r.x-66,a=r.y,l=(i+o)/2;return`M ${i} ${s} C ${l} ${s}, ${l} ${a}, ${o} ${a}`},vR=({className:t=""})=>u(hl,{label:"Sortly · Homepage Redesign",accent:!0,className:t,right:g("div",{className:"hidden sm:flex items-center gap-1.5 text-[11px] text-[#9C9CA3]",children:[u("span",{className:"material-symbols-outlined text-[15px]",children:"groups"}),"4 collaborators"]}),children:g("div",{className:"flex flex-col md:flex-row",children:[u("div",{className:"hidden md:flex flex-col items-center gap-1.5 w-14 flex-shrink-0 border-r border-white/40 bg-white/30 backdrop-blur-sm py-4",children:gR.map((e,n)=>u("span",{className:`material-symbols-outlined w-9 h-9 rounded-lg flex items-center justify-center text-[18px] ${e.active?"bg-[#18181B] text-white":"text-[#86868C]"}`,children:e.icon},n))}),g("div",{className:"relative flex-1 min-w-0 bg-white/40 backdrop-blur-sm",style:{aspectRatio:`${cc} / ${uc}`},children:[g("div",{className:"absolute top-3 left-3 z-10 flex items-center gap-0.5 rounded-full bg-white/80 backdrop-blur-md border border-white/60 px-1.5 py-1 shadow-[0_4px_14px_-6px_rgba(23,21,18,0.2)]",children:[["undo","redo"].map(e=>u("span",{className:"material-symbols-outlined w-6 h-6 rounded-full flex items-center justify-center text-[13px] text-[#47474D]",children:e},e)),u("span",{className:"w-px h-4 bg-[#E4E4E7] mx-0.5"}),u("span",{className:"material-symbols-outlined w-6 h-6 rounded-full flex items-center justify-center text-[13px] text-[#47474D]",children:"remove"}),u("span",{className:"text-[9px] font-semibold text-[#47474D] px-0.5",children:"100%"}),u("span",{className:"material-symbols-outlined w-6 h-6 rounded-full flex items-center justify-center text-[13px] text-[#47474D]",children:"add"}),u("span",{className:"w-px h-4 bg-[#E4E4E7] mx-0.5"}),u("span",{className:"material-symbols-outlined w-6 h-6 rounded-full flex items-center justify-center text-[13px] text-[#47474D]",children:"add_box"})]}),u("svg",{viewBox:`0 0 ${cc} ${uc}`,className:"absolute inset-0 w-full h-full",preserveAspectRatio:"none",children:yR.map(([e,n])=>u("path",{d:_R(e,n),fill:"none",stroke:e==="home"?"#7161EF":"#E4E4E7",strokeOpacity:e==="home"?.4:1,strokeWidth:2},`${e}-${n}`))}),Tw.map(e=>u(Iw,{icon:e.icon,title:e.title,sub:e.sub,accent:e.accent,style:{left:`${e.x/cc*100}%`,top:`${e.y/uc*100}%`}},e.id))]}),g("div",{className:"w-full md:w-[240px] flex-shrink-0 border-t md:border-t-0 md:border-l border-white/40 bg-white/40 backdrop-blur-sm p-4",children:[g("div",{className:"flex items-center justify-between mb-3",children:[u("span",{className:"text-[10px] font-bold uppercase tracking-widest text-[#86868C]",children:"Card Sort"}),g("div",{className:"flex items-center gap-2",children:[u("div",{className:"w-10 h-1.5 rounded-full bg-[#E4E4E7] overflow-hidden",children:u("div",{className:"h-full w-4/5 bg-[#7161EF]"})}),u("span",{className:"text-[9px] font-semibold text-[#9C9CA3]",children:"7/9"})]})]}),g("div",{className:"space-y-2.5",children:[g(Qi,{title:"Navigation",count:3,children:[u(Ye,{label:"Products"}),u(Ye,{label:"Solutions"}),u(Ye,{label:"Pricing"})]}),g(Qi,{title:"Footer",count:2,children:[u(Ye,{label:"About"}),u(Ye,{label:"Contact"})]})]})]})]})}),dc="sortly-hero-bg",wR=()=>{const[t,e]=C.useState(()=>localStorage.getItem(dc));return C.useEffect(()=>{t?localStorage.setItem(dc,t):localStorage.removeItem(dc)},[t]),[t,e]},xR=[{id:"aurora",label:"Aurora",value:"radial-gradient(circle at 15% 20%, rgba(113,97,239,0.5) 0%, transparent 45%), radial-gradient(circle at 85% 25%, rgba(239,97,184,0.42) 0%, transparent 45%), radial-gradient(circle at 50% 85%, rgba(97,201,239,0.42) 0%, transparent 45%)"},{id:"sunrise",label:"Sunrise",value:"linear-gradient(135deg, #FFE8D6 0%, #FFD6E8 50%, #E8D6FF 100%)"},{id:"mono",label:"Mono",value:"linear-gradient(160deg, #F0F0F2 0%, #D4D4D9 100%)"}],SR=t=>({backgroundImage:t}),ER=({bg:t,setBg:e})=>{const[n,r]=C.useState(!1),[i,s]=C.useState(""),o=C.useRef(null),a=c=>{var f;const d=(f=c.target.files)==null?void 0:f[0];if(!d)return;const h=new FileReader;h.onload=()=>e(h.result),h.readAsDataURL(d),r(!1)},l=()=>{const c=i.trim();c&&(e(c),s(""),r(!1))};return g("div",{className:"absolute bottom-4 right-4 z-20",children:[n&&g("div",{className:`absolute bottom-12 right-0 w-64 rounded-2xl p-4 ${Ra}`,style:{backdropFilter:"blur(24px)"},children:[u("p",{className:"text-[10px] font-bold uppercase tracking-widest text-[#86868C] dark:text-[#9891A8] mb-3",children:"Hero background"}),g("button",{onClick:()=>{var c;return(c=o.current)==null?void 0:c.click()},className:"w-full flex items-center justify-center gap-2 rounded-lg border border-[#E4E4E7] dark:border-white/15 bg-white/70 dark:bg-white/5 py-2.5 text-[12px] font-semibold text-[#18181B] dark:text-[#F5F3F0] hover:bg-white dark:hover:bg-white/10 transition-colors mb-3",children:[u("span",{className:"material-symbols-outlined text-[16px]",children:"upload"}),"Upload image"]}),u("input",{ref:o,type:"file",accept:"image/*",onChange:a,className:"hidden"}),g("div",{className:"flex items-center gap-1.5 mb-3",children:[u("input",{type:"url",value:i,onChange:c=>s(c.target.value),onKeyDown:c=>c.key==="Enter"&&l(),placeholder:"Paste image URL",className:"flex-1 min-w-0 rounded-lg border border-[#E4E4E7] dark:border-white/15 bg-white/70 dark:bg-white/5 px-2.5 py-2 text-[12px] text-[#18181B] dark:text-[#F5F3F0] placeholder:text-[#9C9CA3] focus:outline-none focus:border-[#7161EF]"}),u("button",{onClick:l,disabled:!i.trim(),"aria-label":"Apply URL",className:"w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center text-[#18181B] dark:text-[#F5F3F0] bg-white/70 dark:bg-white/5 border border-[#E4E4E7] dark:border-white/15 hover:bg-white dark:hover:bg-white/10 disabled:opacity-40 transition-colors",children:u("span",{className:"material-symbols-outlined text-[16px]",children:"arrow_forward"})})]}),u("div",{className:"grid grid-cols-3 gap-2 mb-3",children:xR.map(c=>u("button",{onClick:()=>{e(c.value),r(!1)},title:c.label,className:`h-10 rounded-lg border transition-all ${t===c.value?"border-[#7161EF] ring-2 ring-[#7161EF]/30":"border-[#E4E4E7] dark:border-white/15"}`,style:SR(c.value)},c.id))}),u("button",{onClick:()=>{e(null),r(!1)},disabled:!t,className:"w-full text-[11px] font-medium text-[#86868C] dark:text-[#9891A8] hover:text-[#18181B] dark:hover:text-[#F5F3F0] disabled:opacity-40 transition-colors",children:"Reset to default"})]}),u("button",{onClick:()=>r(c=>!c),"aria-label":"Change hero background",className:`w-10 h-10 rounded-full flex items-center justify-center text-[#47474D] dark:text-[#B8B2C4] hover:text-[#18181B] dark:hover:text-[#F5F3F0] transition-colors ${Ra}`,children:u("span",{className:"material-symbols-outlined text-[18px]",children:"wallpaper"})})]})},CR=({onGetStarted:t})=>{const[e,n]=C.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches),[r,i]=wR();C.useEffect(()=>{if(e)return;const a=requestAnimationFrame(()=>n(!0));return()=>cancelAnimationFrame(a)},[e]);const s=(r==null?void 0:r.startsWith("data:"))||(r==null?void 0:r.startsWith("http://"))||(r==null?void 0:r.startsWith("https://")),o=r?{backgroundImage:s?`url(${r})`:r,backgroundSize:"cover",backgroundPosition:"center"}:void 0;return g("section",{id:"top",className:"relative overflow-hidden pt-28 pb-40 md:pt-36 md:pb-56",style:o,children:[r&&u("div",{className:s?"absolute inset-0 bg-white/55 dark:bg-[#121016]/60":"absolute inset-0 bg-white/25 dark:bg-[#121016]/35"}),u(fn,{icon:"auto_awesome",className:"text-[22px] opacity-[0.12]",style:{top:"14%",left:"8%",transform:"rotate(-12deg)"}}),u(fn,{icon:"hub",className:"text-[28px] opacity-[0.1]",style:{top:"10%",right:"10%",transform:"rotate(10deg)"}}),u(fn,{icon:"bolt",className:"text-[20px] opacity-[0.12]",style:{top:"38%",left:"4%",transform:"rotate(6deg)"}}),u(fn,{icon:"star",className:"text-[18px] opacity-[0.12]",style:{top:"4%",left:"38%",transform:"rotate(-8deg)"}}),u(fn,{icon:"layers",className:"text-[24px] opacity-[0.1]",style:{top:"42%",right:"6%",transform:"rotate(-14deg)"}}),u(ER,{bg:r,setBg:i}),u("div",{className:"max-w-5xl mx-auto px-6 text-center",children:g("div",{className:`transition-all duration-700 ease-out ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`,children:[g("div",{className:`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-medium text-[#86868C] dark:text-[#9891A8] mb-8 shadow-[0_2px_10px_-4px_rgba(23,21,18,0.08)] ${oR}`,children:[u("span",{className:"w-1.5 h-1.5 rounded-full bg-[#7161EF]"}),"New: Auto-generated sitemaps from any card sort"]}),g("h1",{className:"font-sans tracking-tight text-[#18181B] dark:text-[#F5F3F0] text-[44px] leading-[1.05] sm:text-[56px] md:text-[68px] mb-6",children:[u("span",{className:"font-normal",children:"Design information"}),u("br",{}),u("span",{className:"font-semibold",children:"architecture, "}),u("span",{className:"font-black",children:"together."})]}),u("p",{className:"max-w-2xl mx-auto text-[18px] md:text-[20px] leading-relaxed text-[#47474D] dark:text-[#B8B2C4] mb-10",children:"Turn card sorts and stakeholder input into a clear, shareable sitemap — without switching between five different tools to get there."}),g("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[u("button",{onClick:t,className:`${Ah} px-8 py-4 text-[15px]`,children:"Start for free"}),u("button",{onClick:()=>{var a;return(a=document.querySelector("#product"))==null?void 0:a.scrollIntoView({behavior:"smooth"})},className:`${bw} px-8 py-4 text-[15px]`,children:"Book a demo"})]})]})}),u("div",{className:`relative max-w-5xl mx-auto px-4 sm:px-6 mt-16 md:mt-20 transition-all duration-700 delay-150 ease-out ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:u("div",{className:"-mb-24 md:-mb-40",style:{WebkitMaskImage:"linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",maskImage:"linear-gradient(to bottom, black 0%, black 78%, transparent 100%)"},children:u(vR,{className:"shadow-[0_50px_100px_-30px_rgba(23,21,18,0.35)] dark:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.6)]"})})})]})},Au=({children:t,className:e=""})=>{const n=C.useRef(null),[r,i]=C.useState(!1);return C.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){i(!0);return}const s=n.current;if(!s)return;const o=new IntersectionObserver(([a])=>{a.isIntersecting&&(i(!0),o.disconnect())},{threshold:.15});return o.observe(s),()=>o.disconnect()},[]),u("div",{ref:n,className:`transition-all duration-700 ease-out ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-8"} ${e}`,children:t})},kR=({className:t=""})=>u(hl,{label:"Card Sort · Onboarding Flow",className:t,right:g("div",{className:"flex items-center gap-2",children:[u("div",{className:"w-16 h-1.5 rounded-full bg-[#E4E4E7] overflow-hidden",children:u("div",{className:"h-full w-4/5 bg-[#7161EF]"})}),u("span",{className:"text-[10px] font-semibold text-[#9C9CA3]",children:"8/10"})]}),children:g("div",{className:"p-4 bg-white/40 backdrop-blur-sm",children:[g("div",{className:"flex gap-3",children:[g(Qi,{title:"Unsorted",count:2,children:[u(Ye,{label:"Billing FAQ",faded:!0}),u(Ye,{label:"Data Export",faded:!0})]}),g(Qi,{title:"Getting Started",count:3,children:[u(Ye,{label:"Create Account"}),u(Ye,{label:"Invite Team"}),u(Ye,{label:"Import Content"})]}),g(Qi,{title:"Account Settings",count:3,children:[u(Ye,{label:"Profile"}),u(Ye,{label:"Notifications"}),u(Ye,{label:"Permissions"})]})]}),g("div",{className:"flex items-center gap-1.5 mt-3",children:[u("div",{className:"flex -space-x-1.5",children:["#7161EF","#18181B","#86868C"].map(e=>u("span",{className:"w-4 h-4 rounded-full border-2 border-[#F5F5F6]",style:{background:e}},e))}),u("span",{className:"text-[10px] text-[#9C9CA3]",children:"3 participants sorting live"})]})]})}),hc=640,fc=380,Rw=[{id:"home",icon:"home",title:"Homepage",sub:"index.html",x:90,y:190,accent:!0},{id:"products",icon:"inventory_2",title:"Products",sub:"/products",x:320,y:95},{id:"solutions",icon:"widgets",title:"Solutions",sub:"/solutions",x:320,y:190},{id:"about",icon:"info",title:"About",sub:"/about",x:320,y:285},{id:"enterprise",icon:"business",title:"Enterprise",sub:"/solutions/ent",x:550,y:60},{id:"pricing",icon:"sell",title:"Pricing",sub:"/products/pricing",x:550,y:125},{id:"cases",icon:"article",title:"Case Studies",sub:"/solutions/cases",x:550,y:220}],bR=[["home","products"],["home","solutions"],["home","about"],["products","enterprise"],["products","pricing"],["solutions","cases"]],cm=Object.fromEntries(Rw.map(t=>[t.id,t])),NR=(t,e)=>{const n=cm[t],r=cm[e],i=n.x+66,s=n.y,o=r.x-66,a=r.y,l=(i+o)/2;return`M ${i} ${s} C ${l} ${s}, ${l} ${a}, ${o} ${a}`},IR=({className:t=""})=>u(hl,{label:"Sitemap · Homepage Redesign",className:t,right:g("div",{className:"flex items-center gap-1.5 text-[10px] text-[#9C9CA3]",children:[u("span",{className:"material-symbols-outlined text-[13px]",children:"layers"}),"7 pages"]}),children:g("div",{className:"relative w-full bg-white/40 backdrop-blur-sm",style:{aspectRatio:`${hc} / ${fc}`},children:[u("svg",{viewBox:`0 0 ${hc} ${fc}`,className:"absolute inset-0 w-full h-full",preserveAspectRatio:"none",children:bR.map(([e,n])=>u("path",{d:NR(e,n),fill:"none",stroke:"#E4E4E7",strokeWidth:2},`${e}-${n}`))}),Rw.map(e=>u(Iw,{icon:e.icon,title:e.title,sub:e.sub,accent:e.accent,style:{left:`${e.x/hc*100}%`,top:`${e.y/fc*100}%`}},e.id))]})}),TR=[[1,.82,.18,.05,.12,.08],[.82,1,.22,.09,.15,.11],[.18,.22,1,.76,.31,.2],[.05,.09,.76,1,.28,.17],[.12,.15,.31,.28,1,.64],[.08,.11,.2,.17,.64,1]],RR=t=>`rgba(113, 97, 239, ${.08+t*.85})`,PR=[{label:"Getting Started",value:92},{label:"Account Settings",value:74},{label:"Billing",value:58},{label:"Resources",value:36}],AR=({className:t=""})=>u(hl,{label:"Reports · Onboarding Flow",className:t,right:g("div",{className:"flex items-center gap-1.5 text-[10px] text-[#9C9CA3]",children:[u("span",{className:"material-symbols-outlined text-[13px]",children:"groups"}),"24 responses"]}),children:g("div",{className:"p-5 bg-white/40 backdrop-blur-sm grid grid-cols-2 gap-6",children:[g("div",{children:[u("p",{className:"text-[10px] font-bold uppercase tracking-widest text-[#86868C] mb-2.5",children:"Similarity Matrix"}),u("div",{className:"inline-grid gap-[3px]",style:{gridTemplateColumns:"repeat(6, 1fr)"},children:TR.map((e,n)=>e.map((r,i)=>u("div",{className:"w-4 h-4 rounded-[3px]",style:{background:n===i?"#E4E4E7":RR(r)}},`${n}-${i}`)))})]}),g("div",{children:[u("p",{className:"text-[10px] font-bold uppercase tracking-widest text-[#86868C] mb-2.5",children:"Category Frequency"}),u("div",{className:"space-y-2.5",children:PR.map(e=>g("div",{children:[g("div",{className:"flex items-center justify-between mb-1",children:[u("span",{className:"text-[10px] font-medium text-[#18181B]",children:e.label}),g("span",{className:"text-[9px] text-[#9C9CA3]",children:[e.value,"%"]})]}),u("div",{className:"h-1.5 rounded-full bg-[#E4E4E7] overflow-hidden",children:u("div",{className:"h-full rounded-full bg-[#7161EF]",style:{width:`${e.value}%`}})})]},e.label))})]})]})}),DR=[{id:"product",eyebrow:"Research",titleLight:"Run open, closed, or hybrid",titleBold:"card sorts.",desc:"Set up a study in minutes, send participants a link, and watch responses roll in — no spreadsheets required.",bullets:["Real-time collaboration with teammates or remote participants","Open, closed, and hybrid sort types out of the box","Every card and every group tracked automatically"],Mockup:kR,bg:"bg-white dark:bg-[#18181D]",reverse:!1,icons:[{icon:"groups",className:"text-[20px] opacity-[0.08]",style:{top:"8%",right:"10%",transform:"rotate(-10deg)"}},{icon:"drag_indicator",className:"text-[16px] opacity-[0.1]",style:{bottom:"12%",left:"6%",transform:"rotate(12deg)"}}]},{id:"sitemap-feature",eyebrow:"Structure",titleLight:"From sorted cards to a",titleBold:"living sitemap.",desc:"Sorted categories become draggable page nodes on a canvas your whole team can edit together.",bullets:["Every group becomes a page node, instantly","Drag, nest, and relabel without losing history","Share a read-only link for stakeholder sign-off"],Mockup:IR,bg:"bg-white dark:bg-[#18181D]",reverse:!0,icons:[{icon:"account_tree",className:"text-[20px] opacity-[0.08]",style:{top:"10%",left:"8%",transform:"rotate(10deg)"}},{icon:"route",className:"text-[16px] opacity-[0.1]",style:{bottom:"10%",right:"8%",transform:"rotate(-8deg)"}}]},{id:"reports-feature",eyebrow:"Analysis",titleLight:"See where people agree —",titleBold:"and where they don't.",desc:"Sortly runs the statistics for you, so you can spend your time interpreting results, not calculating them.",bullets:["Similarity matrices show which cards belong together","Dendrograms reveal natural category clusters","Category frequency highlights your strongest labels"],Mockup:AR,bg:"bg-white dark:bg-[#18181D]",reverse:!1,icons:[{icon:"insights",className:"text-[20px] opacity-[0.08]",style:{top:"8%",right:"8%",transform:"rotate(-12deg)"}},{icon:"query_stats",className:"text-[16px] opacity-[0.1]",style:{bottom:"14%",left:"10%",transform:"rotate(8deg)"}}]}],OR=({id:t,eyebrow:e,titleLight:n,titleBold:r,desc:i,bullets:s,Mockup:o,bg:a,reverse:l,icons:c})=>g("section",{id:t,className:`relative py-24 md:py-32 ${a}`,children:[c.map((d,h)=>u(fn,{...d},h)),u("div",{className:"max-w-6xl mx-auto px-6",children:g("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-14 items-center",children:[g("div",{className:l?"md:order-2":"",children:[u("p",{className:"text-[12px] font-semibold uppercase tracking-widest text-[#7161EF] mb-3",children:e}),g("h2",{className:"text-[30px] md:text-[38px] tracking-tight text-[#18181B] dark:text-[#F5F3F0] leading-tight mb-5",children:[u("span",{className:"font-normal",children:n})," ",u("span",{className:"font-black",children:r})]}),u("p",{className:"text-[16px] text-[#47474D] dark:text-[#B8B2C4] leading-relaxed mb-7",children:i}),u("ul",{className:"space-y-3.5",children:s.map(d=>g("li",{className:"flex items-start gap-3",children:[u("span",{className:"mt-0.5 w-5 h-5 rounded-full bg-[#EEECFD] dark:bg-[#241F3D] flex items-center justify-center flex-shrink-0",children:u("span",{className:"material-symbols-outlined text-[13px] text-[#7161EF]",children:"check"})}),u("span",{className:"text-[14px] text-[#47474D] dark:text-[#B8B2C4] leading-relaxed",children:d})]},d))})]}),u("div",{className:l?"md:order-1":"",children:u(o,{className:"shadow-[0_30px_70px_-25px_rgba(23,21,18,0.25)] dark:shadow-[0_30px_70px_-25px_rgba(0,0,0,0.6)]"})})]})})]}),LR=()=>u(wm,{children:DR.map(t=>u(Au,{children:u(OR,{...t})},t.id))}),MR=[{name:"Free",tagline:"1 study, basic card sort",monthly:0,yearly:0,cta:"Start for free",features:["1 active study","Open & closed card sorts","Up to 15 cards per study","Community support"]},{name:"Pro",tagline:"Unlimited studies, sitemap export, collaboration",monthly:19,yearly:15,cta:"Start free trial",popular:!0,features:["Unlimited studies","Sitemap export (PNG & PDF)","Real-time collaboration","Remote testing links","Priority support"]},{name:"Team",tagline:"Multi-project workspace, admin controls, exports",monthly:49,yearly:39,cta:"Talk to sales",features:["Everything in Pro","Multi-project workspaces","Admin & permission controls","Export to Figma & CSV","Dedicated onboarding"]}],FR=({onGetStarted:t})=>{const[e,n]=C.useState(!0);return g("section",{id:"pricing",className:"relative py-24 md:py-32",children:[u(fn,{icon:"payments",className:"text-[20px] opacity-[0.08]",style:{top:"10%",left:"10%",transform:"rotate(-10deg)"}}),u(fn,{icon:"workspace_premium",className:"text-[18px] opacity-[0.1]",style:{top:"6%",right:"14%",transform:"rotate(12deg)"}}),g("div",{className:"max-w-6xl mx-auto px-6",children:[g("div",{className:"text-center max-w-xl mx-auto mb-10",children:[u("p",{className:"text-[12px] font-semibold uppercase tracking-widest text-[#7161EF] mb-3",children:"Pricing"}),g("h2",{className:"text-[32px] md:text-[40px] tracking-tight text-[#18181B] dark:text-[#F5F3F0] mb-4",children:[u("span",{className:"font-normal",children:"Simple pricing,"})," ",u("span",{className:"font-black",children:"room to grow."})]}),u("p",{className:"text-[16px] text-[#47474D] dark:text-[#B8B2C4]",children:"Start free. Upgrade when your research program needs more than one study at a time."})]}),g("div",{className:"flex items-center justify-center gap-3 mb-14",children:[u("span",{className:`text-[14px] font-medium ${e?"text-[#9C9CA3] dark:text-[#6B6578]":"text-[#18181B] dark:text-[#F5F3F0]"}`,children:"Monthly"}),u("button",{onClick:()=>n(r=>!r),className:"relative w-12 h-7 rounded-full bg-[#18181B] dark:bg-white/20 flex-shrink-0","aria-label":"Toggle yearly billing",children:u("span",{className:`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${e?"left-6":"left-1"}`})}),u("span",{className:`text-[14px] font-medium ${e?"text-[#18181B] dark:text-[#F5F3F0]":"text-[#9C9CA3] dark:text-[#6B6578]"}`,children:"Yearly"}),u("span",{className:"text-[11px] font-semibold text-[#7161EF] bg-[#EEECFD] dark:bg-[#241F3D] rounded-full px-2.5 py-1",children:"Save 20%"})]}),u("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 items-start",children:MR.map(r=>{const i=e?r.yearly:r.monthly;return g("div",{className:`relative rounded-2xl p-8 flex flex-col ${r.popular?"bg-white/75 dark:bg-white/[0.09] backdrop-blur-2xl border-2 border-[#18181B] dark:border-white/40 shadow-[0_30px_60px_-25px_rgba(23,21,18,0.25)] dark:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] md:-translate-y-3":Ra}`,children:[r.popular&&u("span",{className:"absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-wide bg-[#18181B] dark:bg-[#F5F3F0] text-white dark:text-[#121016] rounded-full px-3.5 py-1.5",children:"Most popular"}),u("h3",{className:"text-[18px] font-bold text-[#18181B] dark:text-[#F5F3F0] mb-1.5",children:r.name}),u("p",{className:"text-[13px] text-[#86868C] dark:text-[#9891A8] mb-6 leading-relaxed",children:r.tagline}),g("div",{className:"flex items-baseline gap-1 mb-7",children:[g("span",{className:"text-[40px] font-extrabold tracking-tight text-[#18181B] dark:text-[#F5F3F0]",children:["$",i]}),g("span",{className:"text-[13px] text-[#9C9CA3] dark:text-[#6B6578]",children:["/ month",e&&i>0?", billed yearly":""]})]}),u("button",{onClick:t,className:`${r.popular?Ah:bw} w-full py-3 text-[14px] mb-7`,children:r.cta}),u("ul",{className:"space-y-3",children:r.features.map(s=>g("li",{className:"flex items-start gap-2.5",children:[u("span",{className:"material-symbols-outlined text-[16px] text-[#7161EF] mt-0.5",children:"check"}),u("span",{className:"text-[13.5px] text-[#47474D] dark:text-[#B8B2C4] leading-relaxed",children:s})]},s))})]},r.name)})})]})]})},UR=({onGetStarted:t})=>u("section",{className:"py-20 md:py-28 px-4 sm:px-6",children:g("div",{className:"relative max-w-6xl mx-auto rounded-[28px] overflow-hidden bg-[#18181B] px-8 py-24 md:py-32 text-center",children:[g("div",{className:"pointer-events-none absolute inset-0",children:[u("div",{className:"absolute -top-24 -left-16 w-[420px] h-[420px] rounded-full bg-[#7161EF]/25 blur-[110px]"}),u("div",{className:"absolute -bottom-32 right-[6%] w-[440px] h-[440px] rounded-full bg-[#86868C]/25 blur-[110px]"}),u("div",{className:"absolute top-10 right-[20%] w-[260px] h-[260px] rounded-full bg-[#9C9CA3]/15 blur-[90px]"})]}),g("div",{className:"relative",children:[g("h2",{className:"text-[32px] md:text-[48px] tracking-tight text-white leading-tight max-w-2xl mx-auto mb-6",children:[u("span",{className:"font-normal",children:"Turn user research into"})," ",u("span",{className:"font-black",children:"clear structure."})]}),u("p",{className:"text-[16px] md:text-[18px] text-white/70 max-w-lg mx-auto mb-10",children:"Free to start. No credit card, no IT ticket — just a link and a deck of cards."}),g("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[u("button",{onClick:t,className:`${iR} px-8 py-4 text-[15px]`,children:"Start for free"}),u("button",{onClick:()=>{var e;return(e=document.querySelector("#pricing"))==null?void 0:e.scrollIntoView({behavior:"smooth"})},className:`${sR} px-8 py-4 text-[15px]`,children:"Talk to sales"})]})]})]})}),$R=[{title:"Platform",links:["Card Sort","Sitemap Builder","Insights Dashboard","Integrations","Pricing"]},{title:"Resources",links:["Guides","Templates","Blog","Help Center","API Docs"]},{title:"Legal",links:["Privacy Policy","Terms of Service","Security","Cookie Policy"]}],zR=[{label:"X (Twitter)",icon:"alternate_email"},{label:"LinkedIn",icon:"work"},{label:"GitHub",icon:"code"},{label:"YouTube",icon:"play_circle"}],BR=()=>u("footer",{id:"footer",className:"border-t border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-[#18181D] pt-24 pb-14",children:g("div",{className:"max-w-6xl mx-auto px-6",children:[g("div",{className:"grid grid-cols-1 md:grid-cols-[1.4fr_repeat(3,1fr)] gap-12 mb-14",children:[g("div",{children:[u("a",{href:"#top",className:"inline-block text-[17px] font-extrabold tracking-tight text-[#18181B] dark:text-[#F5F3F0] mb-4",children:"Sortly"}),u("p",{className:"text-[14px] text-[#86868C] dark:text-[#9891A8] leading-relaxed max-w-xs",children:"Card sorting and sitemap design for teams who'd rather agree on structure once, in one place."})]}),$R.map(t=>g("div",{children:[u("h4",{className:"text-[12px] font-bold uppercase tracking-widest text-[#18181B] dark:text-[#F5F3F0] mb-4",children:t.title}),u("ul",{className:"space-y-3",children:t.links.map(e=>u("li",{children:u("a",{href:"#top",className:"text-[14px] text-[#86868C] dark:text-[#9891A8] hover:text-[#18181B] dark:hover:text-[#F5F3F0] transition-colors",children:e})},e))})]},t.title))]}),g("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#E4E4E7] dark:border-white/10",children:[g("p",{className:"text-[13px] text-[#9C9CA3] dark:text-[#6B6578]",children:["© ",new Date().getFullYear()," Sortly, Inc. All rights reserved."]}),u("div",{className:"flex items-center gap-2",children:zR.map(t=>u("a",{href:"#top","aria-label":t.label,className:"w-9 h-9 rounded-full bg-[#F5F5F6] dark:bg-[#121016] border border-[#E4E4E7] dark:border-white/10 flex items-center justify-center text-[#86868C] dark:text-[#9891A8] hover:text-[#18181B] dark:hover:text-[#F5F3F0] hover:border-[#C7C7CC] dark:hover:border-white/25 transition-colors",children:u("span",{className:"material-symbols-outlined text-[16px]",children:t.icon})},t.label))})]})]})}),jR=({onGetStarted:t})=>g("div",{className:"font-sans bg-[#F5F5F6] dark:bg-[#121016] text-[#18181B] dark:text-[#F5F3F0] antialiased",children:[u(pR,{onGetStarted:t}),u(CR,{onGetStarted:t}),u(LR,{}),u(Au,{children:u(FR,{onGetStarted:t})}),u(Au,{children:u(UR,{onGetStarted:t})}),u(BR,{})]});function WR(){const[t,e]=C.useState("landing"),n=new URLSearchParams(window.location.search).get("cardsort");return n?u(rR,{studyId:n}):t==="landing"?u(jR,{onGetStarted:r=>e(r==="cardsort"?"cardsort":"editor")}):t==="cardsort"?u(tR,{onExit:()=>e("editor")}):u(kT,{onOpenCardSort:()=>e("cardsort")})}pc.createRoot(document.getElementById("root")).render(u(Kw.StrictMode,{children:u(WR,{})}));
