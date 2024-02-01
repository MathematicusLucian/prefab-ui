import{d as T2,k as O2,l as F2}from"./chunk-RN5QGE3Y.js";import{Ab as I1,Eb as i1,Lb as y2,Oa as L2,Sa as g2,Ua as x2,Ya as B,Z as R1,Za as D,_ as C2,db as b2,eb as X,ec as A2,fa as a1,ga as d2,ha as u2,hb as M1,hc as P2,ia as Y,ib as q1,jb as _1,kb as E1,lb as V1,mb as p1,ob as N2,rb as e1,sb as S2,tb as w2,ub as r1,wb as k2,yb as U1}from"./chunk-NPIOMHWL.js";function B2(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function t(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?B2(Object(e),!0).forEach(function(r){C(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):B2(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function y1(c){"@babel/helpers - typeof";return y1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},y1(c)}function U3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function D2(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function I3(c,a,e){return a&&D2(c.prototype,a),e&&D2(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function C(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function n2(c,a){return W3(c)||j3(c,a)||l3(c,a)||X3()}function v1(c){return G3(c)||Z3(c)||l3(c)||Y3()}function G3(c){if(Array.isArray(c))return Y1(c)}function W3(c){if(Array.isArray(c))return c}function Z3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function j3(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,n=!1,s,f;try{for(e=e.call(c);!(i=(s=e.next()).done)&&(r.push(s.value),!(a&&r.length===a));i=!0);}catch(l){n=!0,f=l}finally{try{!i&&e.return!=null&&e.return()}finally{if(n)throw f}}return r}}function l3(c,a){if(c){if(typeof c=="string")return Y1(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Y1(c,a)}}function Y1(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function Y3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var R2=function(){},s2={},o3={},t3=null,m3={mark:R2,measure:R2};try{typeof window<"u"&&(s2=window),typeof document<"u"&&(o3=document),typeof MutationObserver<"u"&&(t3=MutationObserver),typeof performance<"u"&&(m3=performance)}catch{}var $3=s2.navigator||{},q2=$3.userAgent,_2=q2===void 0?"":q2,q=s2,V=o3,E2=t3,C1=m3,R6=!!q.document,O=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",z3=~_2.indexOf("MSIE")||~_2.indexOf("Trident/"),d1,u1,L1,g1,x1,A="___FONT_AWESOME___",X1=16,v3="fa",h3="svg-inline--fa",Z="data-fa-i2svg",$1="data-fa-pseudo-element",K3="data-fa-pseudo-element-pending",f2="data-prefix",l2="data-icon",U2="fontawesome-i2svg",Q3="async",J3=["HTML","HEAD","STYLE","SCRIPT"],H3=function(){try{return!0}catch{return!1}}(),M="classic",p="sharp",o2=[M,p];function h1(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[M]}})}var l1=h1((d1={},C(d1,M,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),C(d1,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),d1)),o1=h1((u1={},C(u1,M,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),C(u1,p,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),u1)),t1=h1((L1={},C(L1,M,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),C(L1,p,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),L1)),c4=h1((g1={},C(g1,M,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),C(g1,p,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),g1)),a4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,M3="fa-layers-text",e4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,r4=h1((x1={},C(x1,M,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),C(x1,p,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),x1)),V3=[1,2,3,4,5,6,7,8,9,10],i4=V3.concat([11,12,13,14,15,16,17,18,19,20]),n4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},m1=new Set;Object.keys(o1[M]).map(m1.add.bind(m1));Object.keys(o1[p]).map(m1.add.bind(m1));var s4=[].concat(o2,v1(m1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G.GROUP,G.SWAP_OPACITY,G.PRIMARY,G.SECONDARY]).concat(V3.map(function(c){return"".concat(c,"x")})).concat(i4.map(function(c){return"w-".concat(c)})),s1=q.FontAwesomeConfig||{};function f4(c){var a=V.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function l4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}V&&typeof V.querySelector=="function"&&(I2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],I2.forEach(function(c){var a=n2(c,2),e=a[0],r=a[1],i=l4(f4(e));i!=null&&(s1[r]=i)}));var I2,p3={styleDefault:"solid",familyDefault:"classic",cssPrefix:v3,replacementClass:h3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};s1.familyPrefix&&(s1.cssPrefix=s1.familyPrefix);var J=t(t({},p3),s1);J.autoReplaceSvg||(J.observeMutations=!1);var z={};Object.keys(p3).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(e){J[c]=e,f1.forEach(function(r){return r(z)})},get:function(){return J[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){J.cssPrefix=a,f1.forEach(function(e){return e(z)})},get:function(){return J.cssPrefix}});q.FontAwesomeConfig=z;var f1=[];function o4(c){return f1.push(c),function(){f1.splice(f1.indexOf(c),1)}}var R=X1,y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function t4(c){if(!(!c||!O)){var a=V.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=V.head.childNodes,r=null,i=e.length-1;i>-1;i--){var n=e[i],s=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=n)}return V.head.insertBefore(a,r),c}}var m4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function z1(){for(var c=12,a="";c-- >0;)a+=m4[Math.random()*62|0];return a}function c1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function t2(c){return c.classList?c1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function C3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function z4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(C3(c[e]),'" ')},"").trim()}function T1(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function m2(c){return c.size!==y.size||c.x!==y.x||c.y!==y.y||c.rotate!==y.rotate||c.flipX||c.flipY}function v4(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),s="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(n," ").concat(s," ").concat(f)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:m}}function h4(c){var a=c.transform,e=c.width,r=e===void 0?X1:e,i=c.height,n=i===void 0?X1:i,s=c.startCentered,f=s===void 0?!1:s,l="";return f&&z3?l+="translate(".concat(a.x/R-r/2,"em, ").concat(a.y/R-n/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/R,"em), calc(-50% + ").concat(a.y/R,"em)) "):l+="translate(".concat(a.x/R,"em, ").concat(a.y/R,"em) "),l+="scale(".concat(a.size/R*(a.flipX?-1:1),", ").concat(a.size/R*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var H4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function d3(){var c=v3,a=h3,e=z.cssPrefix,r=z.replacementClass,i=H4;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");i=i.replace(n,".".concat(e,"-")).replace(s,"--".concat(e,"-")).replace(f,".".concat(r))}return i}var G2=!1;function G1(){z.autoAddCss&&!G2&&(t4(d3()),G2=!0)}var M4={mixout:function(){return{dom:{css:d3,insertCss:G1}}},hooks:function(){return{beforeDOMElementCreation:function(){G1()},beforeI2svg:function(){G1()}}}},P=q||{};P[A]||(P[A]={});P[A].styles||(P[A].styles={});P[A].hooks||(P[A].hooks={});P[A].shims||(P[A].shims=[]);var S=P[A],u3=[],V4=function c(){V.removeEventListener("DOMContentLoaded",c),A1=1,u3.map(function(a){return a()})},A1=!1;O&&(A1=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),A1||V.addEventListener("DOMContentLoaded",V4));function p4(c){O&&(A1?setTimeout(c,0):u3.push(c))}function H1(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,n=i===void 0?[]:i;return typeof c=="string"?C3(c):"<".concat(a," ").concat(z4(r),">").concat(n.map(H1).join(""),"</").concat(a,">")}function W2(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var C4=function(a,e){return function(r,i,n,s){return a.call(e,r,i,n,s)}},W1=function(a,e,r,i){var n=Object.keys(a),s=n.length,f=i!==void 0?C4(e,i):e,l,m,o;for(r===void 0?(l=1,o=a[n[0]]):(l=0,o=r);l<s;l++)m=n[l],o=f(o,a[m],m,a);return o};function d4(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((i&1023)<<10)+(n&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function K1(c){var a=d4(c);return a.length===1?a[0].toString(16):null}function u4(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Z2(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function Q1(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,n=Z2(a);typeof S.hooks.addPack=="function"&&!i?S.hooks.addPack(c,Z2(a)):S.styles[c]=t(t({},S.styles[c]||{}),n),c==="fas"&&Q1("fa",a)}var b1,N1,S1,$=S.styles,L4=S.shims,g4=(b1={},C(b1,M,Object.values(t1[M])),C(b1,p,Object.values(t1[p])),b1),z2=null,L3={},g3={},x3={},b3={},N3={},x4=(N1={},C(N1,M,Object.keys(l1[M])),C(N1,p,Object.keys(l1[p])),N1);function b4(c){return~s4.indexOf(c)}function N4(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!b4(i)?i:null}var S3=function(){var a=function(n){return W1($,function(s,f,l){return s[l]=W1(f,n,{}),s},{})};L3=a(function(i,n,s){if(n[3]&&(i[n[3]]=s),n[2]){var f=n[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){i[l.toString(16)]=s})}return i}),g3=a(function(i,n,s){if(i[s]=s,n[2]){var f=n[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){i[l]=s})}return i}),N3=a(function(i,n,s){var f=n[2];return i[s]=s,f.forEach(function(l){i[l]=s}),i});var e="far"in $||z.autoFetchSvg,r=W1(L4,function(i,n){var s=n[0],f=n[1],l=n[2];return f==="far"&&!e&&(f="fas"),typeof s=="string"&&(i.names[s]={prefix:f,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:f,iconName:l}),i},{names:{},unicodes:{}});x3=r.names,b3=r.unicodes,z2=O1(z.styleDefault,{family:z.familyDefault})};o4(function(c){z2=O1(c.styleDefault,{family:z.familyDefault})});S3();function v2(c,a){return(L3[c]||{})[a]}function S4(c,a){return(g3[c]||{})[a]}function W(c,a){return(N3[c]||{})[a]}function w3(c){return x3[c]||{prefix:null,iconName:null}}function w4(c){var a=b3[c],e=v2("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function _(){return z2}var h2=function(){return{prefix:null,iconName:null,rest:[]}};function O1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?M:e,i=l1[r][c],n=o1[r][c]||o1[r][i],s=c in S.styles?c:null;return n||s||null}var j2=(S1={},C(S1,M,Object.keys(t1[M])),C(S1,p,Object.keys(t1[p])),S1);function F1(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,n=(a={},C(a,M,"".concat(z.cssPrefix,"-").concat(M)),C(a,p,"".concat(z.cssPrefix,"-").concat(p)),a),s=null,f=M;(c.includes(n[M])||c.some(function(m){return j2[M].includes(m)}))&&(f=M),(c.includes(n[p])||c.some(function(m){return j2[p].includes(m)}))&&(f=p);var l=c.reduce(function(m,o){var v=N4(z.cssPrefix,o);if($[o]?(o=g4[f].includes(o)?c4[f][o]:o,s=o,m.prefix=o):x4[f].indexOf(o)>-1?(s=o,m.prefix=O1(o,{family:f})):v?m.iconName=v:o!==z.replacementClass&&o!==n[M]&&o!==n[p]&&m.rest.push(o),!i&&m.prefix&&m.iconName){var h=s==="fa"?w3(m.iconName):{},H=W(m.prefix,m.iconName);h.prefix&&(s=null),m.iconName=h.iconName||H||m.iconName,m.prefix=h.prefix||m.prefix,m.prefix==="far"&&!$.far&&$.fas&&!z.autoFetchSvg&&(m.prefix="fas")}return m},h2());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===p&&($.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=W(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=_()||"fas"),l}var k4=function(){function c(){U3(this,c),this.definitions={}}return I3(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(f){e.definitions[f]=t(t({},e.definitions[f]||{}),s[f]),Q1(f,s[f]);var l=t1[M][f];l&&Q1(l,s[f]),S3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(n){var s=i[n],f=s.prefix,l=s.iconName,m=s.icon,o=m[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(v){typeof v=="string"&&(e[f][v]=m)}),e[f][l]=m}),e}}]),c}(),Y2=[],K={},Q={},y4=Object.keys(Q);function A4(c,a){var e=a.mixoutsTo;return Y2=c,K={},Object.keys(Q).forEach(function(r){y4.indexOf(r)===-1&&delete Q[r]}),Y2.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(e[s]=i[s]),y1(i[s])==="object"&&Object.keys(i[s]).forEach(function(f){e[s]||(e[s]={}),e[s][f]=i[s][f]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(s){K[s]||(K[s]=[]),K[s].push(n[s])})}r.provides&&r.provides(Q)}),e}function J1(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var n=K[c]||[];return n.forEach(function(s){a=s.apply(null,[a].concat(r))}),a}function j(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=K[c]||[];i.forEach(function(n){n.apply(null,e)})}function T(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Q[c]?Q[c].apply(null,a):void 0}function c2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||_();if(a)return a=W(e,a)||a,W2(k3.definitions,e,a)||W2(S.styles,e,a)}var k3=new k4,P4=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,j("noAuto")},T4={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return O?(j("beforeI2svg",a),T("pseudoElements2svg",a),T("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,p4(function(){F4({autoReplaceSvgRoot:e}),j("watch",a)})}},O4={icon:function(a){if(a===null)return null;if(y1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:W(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=O1(a[0]);return{prefix:r,iconName:W(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(a4))){var i=F1(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||_(),iconName:W(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var n=_();return{prefix:n,iconName:W(n,a)||a}}}},x={noAuto:P4,config:z,dom:T4,parse:O4,library:k3,findIconDefinition:c2,toHtml:H1},F4=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?V:e;(Object.keys(S.styles).length>0||z.autoFetchSvg)&&O&&z.autoReplaceSvg&&x.dom.i2svg({node:r})};function B1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return H1(r)})}}),Object.defineProperty(c,"node",{get:function(){if(O){var r=V.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function B4(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,n=c.styles,s=c.transform;if(m2(s)&&e.found&&!r.found){var f=e.width,l=e.height,m={x:f/l/2,y:.5};i.style=T1(t(t({},n),{},{"transform-origin":"".concat(m.x+s.x/16,"em ").concat(m.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function D4(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,n=c.symbol,s=n===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},i),{},{id:s}),children:r}]}]}function H2(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,n=c.iconName,s=c.transform,f=c.symbol,l=c.title,m=c.maskId,o=c.titleId,v=c.extra,h=c.watchable,H=h===void 0?!1:h,u=r.found?r:e,b=u.width,N=u.height,w=i==="fak",d=[z.replacementClass,n?"".concat(z.cssPrefix,"-").concat(n):""].filter(function(F){return v.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(v.classes).join(" "),L={children:[],attributes:t(t({},v.attributes),{},{"data-prefix":i,"data-icon":n,class:d,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(N)})},k=w&&!~v.classes.indexOf("fa-fw")?{width:"".concat(b/N*16*.0625,"em")}:{};H&&(L.attributes[Z]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(o||z1())},children:[l]}),delete L.attributes.title);var g=t(t({},L),{},{prefix:i,iconName:n,main:e,mask:r,maskId:m,transform:s,symbol:f,styles:t(t({},k),v.styles)}),U=r.found&&e.found?T("generateAbstractMask",g)||{children:[],attributes:{}}:T("generateAbstractIcon",g)||{children:[],attributes:{}},I=U.children,D1=U.attributes;return g.children=I,g.attributes=D1,f?D4(g):B4(g)}function X2(c){var a=c.content,e=c.width,r=c.height,i=c.transform,n=c.title,s=c.extra,f=c.watchable,l=f===void 0?!1:f,m=t(t(t({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")});l&&(m[Z]="");var o=t({},s.styles);m2(i)&&(o.transform=h4({transform:i,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var v=T1(o);v.length>0&&(m.style=v);var h=[];return h.push({tag:"span",attributes:m,children:[a]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}function R4(c){var a=c.content,e=c.title,r=c.extra,i=t(t(t({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=T1(r.styles);n.length>0&&(i.style=n);var s=[];return s.push({tag:"span",attributes:i,children:[a]}),e&&s.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),s}var Z1=S.styles;function a2(c){var a=c[0],e=c[1],r=c.slice(4),i=n2(r,1),n=i[0],s=null;return Array.isArray(n)?s={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:n[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:s}}var q4={found:!1,width:512,height:512};function _4(c,a){!H3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function e2(c,a){var e=a;return a==="fa"&&z.styleDefault!==null&&(a=_()),new Promise(function(r,i){var n={found:!1,width:512,height:512,icon:T("missingIconAbstract")||{}};if(e==="fa"){var s=w3(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&Z1[a]&&Z1[a][c]){var f=Z1[a][c];return r(a2(f))}_4(c,a),r(t(t({},q4),{},{icon:z.showMissingIcons&&c?T("missingIconAbstract")||{}:{}}))})}var $2=function(){},r2=z.measurePerformance&&C1&&C1.mark&&C1.measure?C1:{mark:$2,measure:$2},n1='FA "6.5.1"',E4=function(a){return r2.mark("".concat(n1," ").concat(a," begins")),function(){return y3(a)}},y3=function(a){r2.mark("".concat(n1," ").concat(a," ends")),r2.measure("".concat(n1," ").concat(a),"".concat(n1," ").concat(a," begins"),"".concat(n1," ").concat(a," ends"))},M2={begin:E4,end:y3},w1=function(){};function K2(c){var a=c.getAttribute?c.getAttribute(Z):null;return typeof a=="string"}function U4(c){var a=c.getAttribute?c.getAttribute(f2):null,e=c.getAttribute?c.getAttribute(l2):null;return a&&e}function I4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function G4(){if(z.autoReplaceSvg===!0)return k1.replace;var c=k1[z.autoReplaceSvg];return c||k1.replace}function W4(c){return V.createElementNS("http://www.w3.org/2000/svg",c)}function Z4(c){return V.createElement(c)}function A3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?W4:Z4:e;if(typeof c=="string")return V.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(s){i.setAttribute(s,c.attributes[s])});var n=c.children||[];return n.forEach(function(s){i.appendChild(A3(s,{ceFn:r}))}),i}function j4(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var k1={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(A3(i),e)}),e.getAttribute(Z)===null&&z.keepOriginalSource){var r=V.createComment(j4(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~t2(e).indexOf(z.replacementClass))return k1.replace(a);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(f,l){return l===z.replacementClass||l.match(i)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var s=r.map(function(f){return H1(f)}).join(`
`);e.setAttribute(Z,""),e.innerHTML=s}};function Q2(c){c()}function P3(c,a){var e=typeof a=="function"?a:w1;if(c.length===0)e();else{var r=Q2;z.mutateApproach===Q3&&(r=q.requestAnimationFrame||Q2),r(function(){var i=G4(),n=M2.begin("mutate");c.map(i),n(),e()})}}var V2=!1;function T3(){V2=!0}function i2(){V2=!1}var P1=null;function J2(c){if(E2&&z.observeMutations){var a=c.treeCallback,e=a===void 0?w1:a,r=c.nodeCallback,i=r===void 0?w1:r,n=c.pseudoElementsCallback,s=n===void 0?w1:n,f=c.observeMutationsRoot,l=f===void 0?V:f;P1=new E2(function(m){if(!V2){var o=_();c1(m).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!K2(v.addedNodes[0])&&(z.searchPseudoElements&&s(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&z.searchPseudoElements&&s(v.target.parentNode),v.type==="attributes"&&K2(v.target)&&~n4.indexOf(v.attributeName))if(v.attributeName==="class"&&U4(v.target)){var h=F1(t2(v.target)),H=h.prefix,u=h.iconName;v.target.setAttribute(f2,H||o),u&&v.target.setAttribute(l2,u)}else I4(v.target)&&i(v.target)})}}),O&&P1.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Y4(){P1&&P1.disconnect()}function X4(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var n=i.split(":"),s=n[0],f=n.slice(1);return s&&f.length>0&&(r[s]=f.join(":").trim()),r},{})),e}function $4(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=F1(t2(c));return i.prefix||(i.prefix=_()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=S4(i.prefix,c.innerText)||v2(i.prefix,K1(c.innerText))),!i.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function K4(c){var a=c1(c.attributes).reduce(function(i,n){return i.name!=="class"&&i.name!=="style"&&(i[n.name]=n.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return z.autoA11y&&(e?a["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||z1()):(a["aria-hidden"]="true",a.focusable="false")),a}function Q4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function c3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=$4(c),r=e.iconName,i=e.prefix,n=e.rest,s=K4(c),f=J1("parseNodeAttributes",{},c),l=a.styleParser?X4(c):[];return t({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:l,attributes:s}},f)}var J4=S.styles;function O3(c){var a=z.autoReplaceSvg==="nest"?c3(c,{styleParser:!1}):c3(c);return~a.extra.classes.indexOf(M3)?T("generateLayersText",c,a):T("generateSvgReplacementMutation",c,a)}var E=new Set;o2.map(function(c){E.add("fa-".concat(c))});Object.keys(l1[M]).map(E.add.bind(E));Object.keys(l1[p]).map(E.add.bind(E));E=v1(E);function a3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!O)return Promise.resolve();var e=V.documentElement.classList,r=function(v){return e.add("".concat(U2,"-").concat(v))},i=function(v){return e.remove("".concat(U2,"-").concat(v))},n=z.autoFetchSvg?E:o2.map(function(o){return"fa-".concat(o)}).concat(Object.keys(J4));n.includes("fa")||n.push("fa");var s=[".".concat(M3,":not([").concat(Z,"])")].concat(n.map(function(o){return".".concat(o,":not([").concat(Z,"])")})).join(", ");if(s.length===0)return Promise.resolve();var f=[];try{f=c1(c.querySelectorAll(s))}catch{}if(f.length>0)r("pending"),i("complete");else return Promise.resolve();var l=M2.begin("onTree"),m=f.reduce(function(o,v){try{var h=O3(v);h&&o.push(h)}catch(H){H3||H.name==="MissingIcon"&&console.error(H)}return o},[]);return new Promise(function(o,v){Promise.all(m).then(function(h){P3(h,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(h){l(),v(h)})})}function c6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;O3(c).then(function(e){e&&P3([e],a)})}function a6(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:c2(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:c2(i||{})),c(r,t(t({},e),{},{mask:i}))}}var e6=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?y:r,n=e.symbol,s=n===void 0?!1:n,f=e.mask,l=f===void 0?null:f,m=e.maskId,o=m===void 0?null:m,v=e.title,h=v===void 0?null:v,H=e.titleId,u=H===void 0?null:H,b=e.classes,N=b===void 0?[]:b,w=e.attributes,d=w===void 0?{}:w,L=e.styles,k=L===void 0?{}:L;if(a){var g=a.prefix,U=a.iconName,I=a.icon;return B1(t({type:"icon"},a),function(){return j("beforeDOMElementCreation",{iconDefinition:a,params:e}),z.autoA11y&&(h?d["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(u||z1()):(d["aria-hidden"]="true",d.focusable="false")),H2({icons:{main:a2(I),mask:l?a2(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:U,transform:t(t({},y),i),symbol:s,title:h,maskId:o,titleId:u,extra:{attributes:d,styles:k,classes:N}})})}},r6={mixout:function(){return{icon:a6(e6)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=a3,e.nodeCallback=c6,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?V:r,n=e.callback,s=n===void 0?function(){}:n;return a3(i,s)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,n=r.title,s=r.titleId,f=r.prefix,l=r.transform,m=r.symbol,o=r.mask,v=r.maskId,h=r.extra;return new Promise(function(H,u){Promise.all([e2(i,f),o.iconName?e2(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var N=n2(b,2),w=N[0],d=N[1];H([e,H2({icons:{main:w,mask:d},prefix:f,iconName:i,transform:l,symbol:m,maskId:v,title:n,titleId:s,extra:h,watchable:!0})])}).catch(u)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,n=e.main,s=e.transform,f=e.styles,l=T1(f);l.length>0&&(i.style=l);var m;return m2(s)&&(m=T("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),r.push(m||n.icon),{children:r,attributes:i}}}},i6={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,n=i===void 0?[]:i;return B1({type:"layer"},function(){j("beforeDOMElementCreation",{assembler:e,params:r});var s=[];return e(function(f){Array.isArray(f)?f.map(function(l){s=s.concat(l.abstract)}):s=s.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(v1(n)).join(" ")},children:s}]})}}}},n6={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,n=i===void 0?null:i,s=r.classes,f=s===void 0?[]:s,l=r.attributes,m=l===void 0?{}:l,o=r.styles,v=o===void 0?{}:o;return B1({type:"counter",content:e},function(){return j("beforeDOMElementCreation",{content:e,params:r}),R4({content:e.toString(),title:n,extra:{attributes:m,styles:v,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(v1(f))}})})}}}},s6={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,n=i===void 0?y:i,s=r.title,f=s===void 0?null:s,l=r.classes,m=l===void 0?[]:l,o=r.attributes,v=o===void 0?{}:o,h=r.styles,H=h===void 0?{}:h;return B1({type:"text",content:e},function(){return j("beforeDOMElementCreation",{content:e,params:r}),X2({content:e,transform:t(t({},y),n),title:f,extra:{attributes:v,styles:H,classes:["".concat(z.cssPrefix,"-layers-text")].concat(v1(m))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,n=r.transform,s=r.extra,f=null,l=null;if(z3){var m=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/m,l=o.height/m}return z.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,X2({content:e.innerHTML,width:f,height:l,transform:n,title:i,extra:s,watchable:!0})])}}},f6=new RegExp('"',"ug"),e3=[1105920,1112319];function l6(c){var a=c.replace(f6,""),e=u4(a,0),r=e>=e3[0]&&e<=e3[1],i=a.length===2?a[0]===a[1]:!1;return{value:K1(i?a[0]:a),isSecondary:r||i}}function r3(c,a){var e="".concat(K3).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var n=c1(c.children),s=n.filter(function(I){return I.getAttribute($1)===a})[0],f=q.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(e4),m=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(s&&!l)return c.removeChild(s),r();if(l&&o!=="none"&&o!==""){var v=f.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?p:M,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?o1[h][l[2].toLowerCase()]:r4[h][m],u=l6(v),b=u.value,N=u.isSecondary,w=l[0].startsWith("FontAwesome"),d=v2(H,b),L=d;if(w){var k=w4(b);k.iconName&&k.prefix&&(d=k.iconName,H=k.prefix)}if(d&&!N&&(!s||s.getAttribute(f2)!==H||s.getAttribute(l2)!==L)){c.setAttribute(e,L),s&&c.removeChild(s);var g=Q4(),U=g.extra;U.attributes[$1]=a,e2(d,H).then(function(I){var D1=H2(t(t({},g),{},{icons:{main:I,mask:h2()},prefix:H,iconName:L,extra:U,watchable:!0})),F=V.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(F,c.firstChild):c.appendChild(F),F.outerHTML=D1.map(function(E3){return H1(E3)}).join(`
`),c.removeAttribute(e),r()}).catch(i)}else r()}else r()})}function o6(c){return Promise.all([r3(c,"::before"),r3(c,"::after")])}function t6(c){return c.parentNode!==document.head&&!~J3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute($1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function i3(c){if(O)return new Promise(function(a,e){var r=c1(c.querySelectorAll("*")).filter(t6).map(o6),i=M2.begin("searchPseudoElements");T3(),Promise.all(r).then(function(){i(),i2(),a()}).catch(function(){i(),i2(),e()})})}var m6={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=i3,e}}},provides:function(a){a.pseudoElements2svg=function(e){var r=e.node,i=r===void 0?V:r;z.searchPseudoElements&&i3(i)}}},n3=!1,z6={mixout:function(){return{dom:{unwatch:function(){T3(),n3=!0}}}},hooks:function(){return{bootstrap:function(){J2(J1("mutationObserverCallbacks",{}))},noAuto:function(){Y4()},watch:function(e){var r=e.observeMutationsRoot;n3?i2():J2(J1("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},s3=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,i){var n=i.toLowerCase().split("-"),s=n[0],f=n.slice(1).join("-");if(s&&f==="h")return r.flipX=!0,r;if(s&&f==="v")return r.flipY=!0,r;if(f=parseFloat(f),isNaN(f))return r;switch(s){case"grow":r.size=r.size+f;break;case"shrink":r.size=r.size-f;break;case"left":r.x=r.x-f;break;case"right":r.x=r.x+f;break;case"up":r.y=r.y-f;break;case"down":r.y=r.y+f;break;case"rotate":r.rotate=r.rotate+f;break}return r},e)},v6={mixout:function(){return{parse:{transform:function(e){return s3(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var i=r.getAttribute("data-fa-transform");return i&&(e.transform=s3(i)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,i=e.transform,n=e.containerWidth,s=e.iconWidth,f={transform:"translate(".concat(n/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),o="rotate(".concat(i.rotate," 0 0)"),v={transform:"".concat(l," ").concat(m," ").concat(o)},h={transform:"translate(".concat(s/2*-1," -256)")},H={outer:f,inner:v,path:h};return{tag:"g",attributes:t({},H.outer),children:[{tag:"g",attributes:t({},H.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:t(t({},r.icon.attributes),H.path)}]}]}}}},j1={x:0,y:0,width:"100%",height:"100%"};function f3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function h6(c){return c.tag==="g"?c.children:[c]}var H6={hooks:function(){return{parseNodeAttributes:function(e,r){var i=r.getAttribute("data-fa-mask"),n=i?F1(i.split(" ").map(function(s){return s.trim()})):h2();return n.prefix||(n.prefix=_()),e.mask=n,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var r=e.children,i=e.attributes,n=e.main,s=e.mask,f=e.maskId,l=e.transform,m=n.width,o=n.icon,v=s.width,h=s.icon,H=v4({transform:l,containerWidth:v,iconWidth:m}),u={tag:"rect",attributes:t(t({},j1),{},{fill:"white"})},b=o.children?{children:o.children.map(f3)}:{},N={tag:"g",attributes:t({},H.inner),children:[f3(t({tag:o.tag,attributes:t(t({},o.attributes),H.path)},b))]},w={tag:"g",attributes:t({},H.outer),children:[N]},d="mask-".concat(f||z1()),L="clip-".concat(f||z1()),k={tag:"mask",attributes:t(t({},j1),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,w]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:h6(h)},k]};return r.push(g,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(d,")")},j1)}),{children:r,attributes:i}}}},M6={provides:function(a){var e=!1;q.matchMedia&&(e=q.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:t(t({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=t(t({},n),{},{attributeName:"opacity"}),f={tag:"circle",attributes:t(t({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:t(t({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(f),r.push({tag:"path",attributes:t(t({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:t(t({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:t(t({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},V6={hooks:function(){return{parseNodeAttributes:function(e,r){var i=r.getAttribute("data-fa-symbol"),n=i===null?!1:i===""?!0:i;return e.symbol=n,e}}}},p6=[M4,r6,i6,n6,s6,m6,z6,v6,H6,M6,V6];A4(p6,{mixoutsTo:x});var q6=x.noAuto,_6=x.config,E6=x.library,U6=x.dom,F3=x.parse,I6=x.findIconDefinition,G6=x.toHtml,B3=x.icon,W6=x.layer,C6=x.text,d6=x.counter;var L6=["*"],g6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},x6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},b6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e)},N6=c=>c.prefix!==void 0&&c.iconName!==void 0,S6=(c,a)=>N6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},w6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=R1({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),k6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...r){for(let i of r){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let n of i.icon[2])typeof n=="string"&&(this.definitions[i.prefix][n]=i)}}addIconPacks(...r){for(let i of r){let n=Object.keys(i).map(s=>i[s]);this.addIcons(...n)}}getIconDefinition(r,i){return r in this.definitions&&i in this.definitions[r]?this.definitions[r][i]:null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=R1({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),y6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(r){if("size"in r)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(i){return new(i||a)},a.\u0275dir=u2({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[Y]});let c=a;return c})(),A6=(()=>{let a=class a{constructor(r,i){this.renderer=r,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(r){"size"in r&&(r.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${r.size.currentValue}`),r.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${r.size.previousValue}`))}};a.\u0275fac=function(i){return new(i||a)(D(x2),D(g2))},a.\u0275cmp=a1({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[Y,i1],ngContentSelectors:L6,decls:1,vars:0,template:function(i,n){i&1&&(S2(),w2(0))},encapsulation:2});let c=a;return c})(),D3=(()=>{let a=class a{set spin(r){this.animation=r?"spin":void 0}set pulse(r){this.animation=r?"spin-pulse":void 0}constructor(r,i,n,s,f){this.sanitizer=r,this.config=i,this.iconLibrary=n,this.stackItem=s,this.classes=[],f!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(r){if(this.icon==null&&this.config.fallbackIcon==null){x6();return}if(r){let i=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(i);if(n!=null){let s=this.buildParams();this.renderIcon(n,s)}}}render(){this.ngOnChanges({})}findIconDefinition(r){let i=S6(r,this.config.defaultPrefix);if("icon"in i)return i;let n=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return n??(g6(i),null)}buildParams(){let r={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?F3.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...b6(r),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(r,i){let n=B3(r,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};a.\u0275fac=function(i){return new(i||a)(D(T2),D(w6),D(k6),D(y6,8),D(A6,8))},a.\u0275cmp=a1({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,n){i&2&&(N2("innerHTML",n.renderedIconHTML,L2),b2("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[Y,i1],decls:0,vars:0,template:function(i,n){},encapsulation:2});let c=a;return c})();var R3=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=d2({type:a}),a.\u0275inj=C2({});let c=a;return c})();var Q6={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]};var T6={prefix:"fas",iconName:"burger",icon:[512,512,["hamburger"],"f805","M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"]},J6=T6;var q3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var c8={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"]};var _3={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var p2={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function O6(c,a){if(c&1&&(V1(0),E1(1,"fa-icon",4),p1()),c&2){let e=e1(2);B(1),X("icon",e.faIconData)}}function F6(c,a){if(c&1&&(V1(0),q1(1,"span",2),U1(2),M1(3,O6,2,1,"ng-container",3),_1(),p1()),c&2){let e=e1();B(1),r1("routerLink",e.linkPath$),r1("target",e.target$),B(1),I1(" ",e.title$," "),B(1),X("ngIf",e.icon)}}function B6(c,a){if(c&1&&(V1(0),E1(1,"fa-icon",4),p1()),c&2){let e=e1(2);B(1),X("icon",e.faIconData)}}function D6(c,a){if(c&1&&(q1(0,"span",5),U1(1),M1(2,B6,2,1,"ng-container",3),_1()),c&2){let e=e1();r1("routerLink",e.linkPath$),r1("target",e.target$),B(1),I1(" ",e.title$," "),B(1),X("ngIf",e.icon)}}var t8=(()=>{let a=class a{constructor(){this.faIconData=p2,this.icons=[{name:"faGithub",iconData:p2},{name:"faLinkedin",iconData:_3},{name:"faEnvelope",iconData:q3}],this.title$="",this.target$="",this.linkPath$="",this.active$=!1}ngOnChanges(r){if(this.isDarkScheme=this.colorScheme=="dark",this.title$=JSON.parse(r.menuItem.currentValue).title,this.icon=JSON.parse(r.menuItem.currentValue).icon,this.icon){let i=this.icons.find(n=>n.name==this.icon).iconData;this.faIconData=i}this.target$=JSON.parse(r.menuItem.currentValue).target,this.linkPath$=JSON.parse(r.menuItem.currentValue).linkPath,this.active$=JSON.parse(r.menuItem.currentValue).active}setColorScheme(){this.colorScheme=="dark"&&(this.bgActiveColor="bg-pink-700",this.bgColor="bg-pink",this.bgHoverColor="bg-amber-500",this.textActiveColor="text-white",this.textColor="text-slate-950")}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=a1({type:a,selectors:[["app-menu-item"]],inputs:{menuItem:"menuItem",colorScheme:"colorScheme"},standalone:!0,features:[Y,i1],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["lightScheme",""],["routerLinkActive","rounded-full bg-pink-700 text-white font-bold hover:bg-pink-700 hover:text-white hover:rounded-full",1,"block","md:inline-block","text-sm","px-4","py-2","leading-none","rounded-full","font-semibold","text-slate-950","hover:bg-amber-500","hover:text-slate-950",3,"routerLink","target"],[4,"ngIf"],[3,"icon"],["routerLinkActive","rounded-full bg-slates-700 text-white font-bold hover:bg-slates-600 hover:text-white hover:rounded-full",1,"block","md:inline-block","text-sm","px-4","py-2","leading-none","rounded-full","font-semibold","text-white","bg-slates-950","hover:bg-slates-600","hover:text-white",3,"routerLink","target"]],template:function(i,n){if(i&1&&M1(0,F6,4,4,"ng-container",0)(1,D6,3,4,"ng-template",null,1,y2),i&2){let s=k2(2);X("ngIf",n.isDarkScheme)("ngIfElse",s)}},dependencies:[P2,A2,O2,F2,R3,D3],styles:['*[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:300}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}[_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-content: ""}html[_ngcontent-%COMP%], [_nghost-%COMP%]{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:Graphik,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body[_ngcontent-%COMP%]{margin:0;line-height:inherit}hr[_ngcontent-%COMP%]{height:0;color:inherit;border-top-width:1px}abbr[_ngcontent-%COMP%]:where([title]){text-decoration:underline dotted}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-size:inherit;font-weight:inherit}a[_ngcontent-%COMP%]{color:inherit;text-decoration:inherit}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}table[_ngcontent-%COMP%]{text-indent:0;border-color:inherit;border-collapse:collapse}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button;background-color:transparent;background-image:none}[_ngcontent-%COMP%]:-moz-focusring{outline:auto}[_ngcontent-%COMP%]:-moz-ui-invalid{box-shadow:none}progress[_ngcontent-%COMP%]{vertical-align:baseline}[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary[_ngcontent-%COMP%]{display:list-item}blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{margin:0}fieldset[_ngcontent-%COMP%]{margin:0;padding:0}legend[_ngcontent-%COMP%]{padding:0}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}dialog[_ngcontent-%COMP%]{padding:0}textarea[_ngcontent-%COMP%]{resize:vertical}input[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder{opacity:1;color:#9ca3af}button[_ngcontent-%COMP%], [role=button][_ngcontent-%COMP%]{cursor:pointer}[_ngcontent-%COMP%]:disabled{cursor:default}img[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%]{display:block;vertical-align:middle}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{max-width:100%;height:auto}[hidden][_ngcontent-%COMP%]{display:none}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }[_ngcontent-%COMP%]::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.fixed[_ngcontent-%COMP%]{position:fixed}.absolute[_ngcontent-%COMP%]{position:absolute}.relative[_ngcontent-%COMP%]{position:relative}.sticky[_ngcontent-%COMP%]{position:sticky}.right-2[_ngcontent-%COMP%]{right:.5rem}.top-0[_ngcontent-%COMP%]{top:0}.top-2[_ngcontent-%COMP%]{top:.5rem}.z-50[_ngcontent-%COMP%]{z-index:50}.m-0[_ngcontent-%COMP%]{margin:0}.mx-1[_ngcontent-%COMP%]{margin-left:.25rem;margin-right:.25rem}.mx-10[_ngcontent-%COMP%]{margin-left:2.5rem;margin-right:2.5rem}.mx-2[_ngcontent-%COMP%]{margin-left:.5rem;margin-right:.5rem}.mx-5[_ngcontent-%COMP%]{margin-left:1.25rem;margin-right:1.25rem}.mx-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.my-0[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.my-1[_ngcontent-%COMP%]{margin-top:.25rem;margin-bottom:.25rem}.my-10[_ngcontent-%COMP%]{margin-top:2.5rem;margin-bottom:2.5rem}.my-2[_ngcontent-%COMP%]{margin-top:.5rem;margin-bottom:.5rem}.my-4[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem}.my-7[_ngcontent-%COMP%]{margin-top:1.75rem;margin-bottom:1.75rem}.my-8[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:2rem}.mb-0[_ngcontent-%COMP%]{margin-bottom:0}.mb-5[_ngcontent-%COMP%]{margin-bottom:1.25rem}.mb-6[_ngcontent-%COMP%]{margin-bottom:1.5rem}.mr-2[_ngcontent-%COMP%]{margin-right:.5rem}.mr-4[_ngcontent-%COMP%]{margin-right:1rem}.mt-0[_ngcontent-%COMP%]{margin-top:0}.mt-1[_ngcontent-%COMP%]{margin-top:.25rem}.mt-12[_ngcontent-%COMP%]{margin-top:3rem}.mt-2[_ngcontent-%COMP%]{margin-top:.5rem}.mt-3[_ngcontent-%COMP%]{margin-top:.75rem}.mt-4[_ngcontent-%COMP%]{margin-top:1rem}.mt-5[_ngcontent-%COMP%]{margin-top:1.25rem}.mt-6[_ngcontent-%COMP%]{margin-top:1.5rem}.mt-8[_ngcontent-%COMP%]{margin-top:2rem}.block[_ngcontent-%COMP%]{display:block}.flex[_ngcontent-%COMP%]{display:flex}.inline-flex[_ngcontent-%COMP%]{display:inline-flex}.table[_ngcontent-%COMP%]{display:table}.grid[_ngcontent-%COMP%]{display:grid}.contents[_ngcontent-%COMP%]{display:contents}.hidden[_ngcontent-%COMP%]{display:none}.h-10[_ngcontent-%COMP%]{height:2.5rem}.h-48[_ngcontent-%COMP%]{height:12rem}.h-auto[_ngcontent-%COMP%]{height:auto}.w-10[_ngcontent-%COMP%]{width:2.5rem}.w-48[_ngcontent-%COMP%]{width:12rem}.w-full[_ngcontent-%COMP%]{width:100%}.min-w-full[_ngcontent-%COMP%]{min-width:100%}.max-w-4xl[_ngcontent-%COMP%]{max-width:56rem}.max-w-5xl[_ngcontent-%COMP%]{max-width:64rem}.max-w-7xl[_ngcontent-%COMP%]{max-width:80rem}.max-w-screen-xl[_ngcontent-%COMP%]{max-width:1440px}.max-w-xl[_ngcontent-%COMP%]{max-width:36rem}.grid-cols-1[_ngcontent-%COMP%]{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-row[_ngcontent-%COMP%]{flex-direction:row}.flex-wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.items-center[_ngcontent-%COMP%]{align-items:center}.justify-center[_ngcontent-%COMP%]{justify-content:center}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.gap-3[_ngcontent-%COMP%]{gap:.75rem}.space-x-4[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-6[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1.5rem * var(--tw-space-x-reverse));margin-left:calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-10[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2.5rem * var(--tw-space-y-reverse))}.overflow-x-hidden[_ngcontent-%COMP%]{overflow-x:hidden}.rounded[_ngcontent-%COMP%]{border-radius:.25rem}.rounded-full[_ngcontent-%COMP%]{border-radius:9999px}.rounded-lg[_ngcontent-%COMP%]{border-radius:.5rem}.rounded-none[_ngcontent-%COMP%]{border-radius:0}.border[_ngcontent-%COMP%]{border-width:1px}.border-b[_ngcontent-%COMP%]{border-bottom-width:1px}.border-b-2[_ngcontent-%COMP%]{border-bottom-width:2px}.border-t[_ngcontent-%COMP%]{border-top-width:1px}.border-amber-500[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(245 158 11 / var(--tw-border-opacity))}.border-pink-950[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(80 7 36 / var(--tw-border-opacity))}.border-slate-500[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(100 116 139 / var(--tw-border-opacity))}.border-slate-700[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(51 65 85 / var(--tw-border-opacity))}.bg-amber-400[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(251 191 36 / var(--tw-bg-opacity))}.bg-amber-500[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(245 158 11 / var(--tw-bg-opacity))}.bg-gray-100[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-pink-600[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(219 39 119 / var(--tw-bg-opacity))}.bg-pink-700[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(190 24 93 / var(--tw-bg-opacity))}.bg-slate-900[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(15 23 42 / var(--tw-bg-opacity))}.bg-slate-950[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(2 6 23 / var(--tw-bg-opacity))}.bg-gradient-to-r[_ngcontent-%COMP%]{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-rose-700[_ngcontent-%COMP%]{--tw-gradient-from: #be123c var(--tw-gradient-from-position);--tw-gradient-to: rgb(190 18 60 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.via-fuchsia-950[_ngcontent-%COMP%]{--tw-gradient-to: rgb(74 4 78 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), #4a044e var(--tw-gradient-via-position), var(--tw-gradient-to)}.to-indigo-950[_ngcontent-%COMP%]{--tw-gradient-to: #1e1b4b var(--tw-gradient-to-position)}.bg-cover[_ngcontent-%COMP%]{background-size:cover}.bg-center[_ngcontent-%COMP%]{background-position:center}.p-0[_ngcontent-%COMP%]{padding:0}.p-2[_ngcontent-%COMP%]{padding:.5rem}.p-4[_ngcontent-%COMP%]{padding:1rem}.p-5[_ngcontent-%COMP%]{padding:1.25rem}.p-8[_ngcontent-%COMP%]{padding:2rem}.px-2[_ngcontent-%COMP%]{padding-left:.5rem;padding-right:.5rem}.px-2\\.5[_ngcontent-%COMP%]{padding-left:.625rem;padding-right:.625rem}.px-3[_ngcontent-%COMP%]{padding-left:.75rem;padding-right:.75rem}.px-4[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.px-6[_ngcontent-%COMP%]{padding-left:1.5rem;padding-right:1.5rem}.py-0[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.py-1[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5[_ngcontent-%COMP%]{padding-top:.375rem;padding-bottom:.375rem}.py-10[_ngcontent-%COMP%]{padding-top:2.5rem;padding-bottom:2.5rem}.py-2[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.py-3[_ngcontent-%COMP%]{padding-top:.75rem;padding-bottom:.75rem}.py-6[_ngcontent-%COMP%]{padding-top:1.5rem;padding-bottom:1.5rem}.pb-1[_ngcontent-%COMP%]{padding-bottom:.25rem}.pb-16[_ngcontent-%COMP%]{padding-bottom:4rem}.pb-2[_ngcontent-%COMP%]{padding-bottom:.5rem}.pb-4[_ngcontent-%COMP%]{padding-bottom:1rem}.pl-0[_ngcontent-%COMP%]{padding-left:0}.pt-16[_ngcontent-%COMP%]{padding-top:4rem}.pt-2[_ngcontent-%COMP%]{padding-top:.5rem}.pt-3[_ngcontent-%COMP%]{padding-top:.75rem}.pt-4[_ngcontent-%COMP%]{padding-top:1rem}.pt-5[_ngcontent-%COMP%]{padding-top:1.25rem}.text-left[_ngcontent-%COMP%]{text-align:left}.text-center[_ngcontent-%COMP%]{text-align:center}.text-4xl[_ngcontent-%COMP%]{font-size:2.25rem;line-height:2.5rem}.text-base[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5rem}.text-lg[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem}.text-sm[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.25rem}.text-xs[_ngcontent-%COMP%]{font-size:.75rem;line-height:1rem}.font-bold[_ngcontent-%COMP%]{font-weight:700}.font-light[_ngcontent-%COMP%]{font-weight:300}.font-medium[_ngcontent-%COMP%]{font-weight:500}.font-semibold[_ngcontent-%COMP%]{font-weight:600}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.italic[_ngcontent-%COMP%]{font-style:italic}.leading-5[_ngcontent-%COMP%]{line-height:1.25rem}.leading-6[_ngcontent-%COMP%]{line-height:1.5rem}.leading-7[_ngcontent-%COMP%]{line-height:1.75rem}.leading-none[_ngcontent-%COMP%]{line-height:1}.leading-relaxed[_ngcontent-%COMP%]{line-height:1.625}.tracking-wide[_ngcontent-%COMP%]{letter-spacing:.025em}.tracking-wider[_ngcontent-%COMP%]{letter-spacing:.05em}.text-amber-300[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(252 211 77 / var(--tw-text-opacity))}.text-amber-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(251 191 36 / var(--tw-text-opacity))}.text-black[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-gray-300[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.text-gray-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-pink-500[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(236 72 153 / var(--tw-text-opacity))}.text-slate-100[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(241 245 249 / var(--tw-text-opacity))}.text-slate-200[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(226 232 240 / var(--tw-text-opacity))}.text-slate-300[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(203 213 225 / var(--tw-text-opacity))}.text-slate-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.text-slate-500[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(100 116 139 / var(--tw-text-opacity))}.text-slate-950[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(2 6 23 / var(--tw-text-opacity))}.text-stone-300[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(214 211 209 / var(--tw-text-opacity))}.text-white[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.mix-blend-screen[_ngcontent-%COMP%]{mix-blend-mode:screen}.shadow[_ngcontent-%COMP%]{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl[_ngcontent-%COMP%]{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm[_ngcontent-%COMP%]{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl[_ngcontent-%COMP%]{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.ring-1[_ngcontent-%COMP%]{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-pink-600[_ngcontent-%COMP%]{--tw-ring-opacity: 1;--tw-ring-color: rgb(219 39 119 / var(--tw-ring-opacity))}.filter[_ngcontent-%COMP%]{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}h4[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:600;font-size:.5em}.hover\\:rounded-full[_ngcontent-%COMP%]:hover{border-radius:9999px}.hover\\:bg-amber-500[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(245 158 11 / var(--tw-bg-opacity))}.hover\\:bg-pink-700[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(190 24 93 / var(--tw-bg-opacity))}.hover\\:text-slate-950[_ngcontent-%COMP%]:hover{--tw-text-opacity: 1;color:rgb(2 6 23 / var(--tw-text-opacity))}.hover\\:text-white[_ngcontent-%COMP%]:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.hover\\:ring-pink-700[_ngcontent-%COMP%]:hover{--tw-ring-opacity: 1;--tw-ring-color: rgb(190 24 93 / var(--tw-ring-opacity))}.focus\\:outline-none[_ngcontent-%COMP%]:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2[_ngcontent-%COMP%]:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-amber-500[_ngcontent-%COMP%]:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(245 158 11 / var(--tw-ring-opacity))}@media (min-width: 480px){.sm\\:mt-16[_ngcontent-%COMP%]{margin-top:4rem}.sm\\:grid-cols-1[_ngcontent-%COMP%]{grid-template-columns:repeat(1,minmax(0,1fr))}}@media (min-width: 768px){.md\\:mx-10[_ngcontent-%COMP%]{margin-left:2.5rem;margin-right:2.5rem}.md\\:my-0[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.md\\:my-1[_ngcontent-%COMP%]{margin-top:.25rem;margin-bottom:.25rem}.md\\:my-8[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:2rem}.md\\:mt-0[_ngcontent-%COMP%]{margin-top:0}.md\\:block[_ngcontent-%COMP%]{display:block}.md\\:inline-block[_ngcontent-%COMP%]{display:inline-block}.md\\:hidden[_ngcontent-%COMP%]{display:none}.md\\:w-auto[_ngcontent-%COMP%]{width:auto}.md\\:flex-row[_ngcontent-%COMP%]{flex-direction:row}.md\\:space-x-8[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(2rem * var(--tw-space-x-reverse));margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)))}.md\\:p-0[_ngcontent-%COMP%]{padding:0}.md\\:p-12[_ngcontent-%COMP%]{padding:3rem}.md\\:px-0[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.md\\:px-10[_ngcontent-%COMP%]{padding-left:2.5rem;padding-right:2.5rem}.md\\:px-8[_ngcontent-%COMP%]{padding-left:2rem;padding-right:2rem}.md\\:py-0[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.md\\:py-2[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.md\\:py-20[_ngcontent-%COMP%]{padding-top:5rem;padding-bottom:5rem}.md\\:py-4[_ngcontent-%COMP%]{padding-top:1rem;padding-bottom:1rem}.md\\:py-7[_ngcontent-%COMP%]{padding-top:1.75rem;padding-bottom:1.75rem}.md\\:pb-1[_ngcontent-%COMP%]{padding-bottom:.25rem}.md\\:pl-5[_ngcontent-%COMP%]{padding-left:1.25rem}.md\\:pt-2[_ngcontent-%COMP%]{padding-top:.5rem}.md\\:pt-7[_ngcontent-%COMP%]{padding-top:1.75rem}.md\\:pt-8[_ngcontent-%COMP%]{padding-top:2rem}.md\\:text-center[_ngcontent-%COMP%]{text-align:center}.md\\:text-3xl[_ngcontent-%COMP%]{font-size:1.875rem;line-height:2.25rem}.md\\:text-base[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5rem}.md\\:text-sm[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.25rem}}@media (min-width: 976px){.lg\\:relative[_ngcontent-%COMP%]{position:relative}.lg\\:m-0[_ngcontent-%COMP%]{margin:0}.lg\\:mx-0[_ngcontent-%COMP%]{margin-left:0;margin-right:0}.lg\\:mx-4[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}.lg\\:mx-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.lg\\:my-0[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.lg\\:mr-4[_ngcontent-%COMP%]{margin-right:1rem}.lg\\:mt-0[_ngcontent-%COMP%]{margin-top:0}.lg\\:block[_ngcontent-%COMP%]{display:block}.lg\\:grid[_ngcontent-%COMP%]{display:grid}.lg\\:hidden[_ngcontent-%COMP%]{display:none}.lg\\:h-full[_ngcontent-%COMP%]{height:100%}.lg\\:h-screen[_ngcontent-%COMP%]{height:100vh}.lg\\:w-2\\/3[_ngcontent-%COMP%]{width:66.666667%}.lg\\:w-2\\/5[_ngcontent-%COMP%]{width:40%}.lg\\:w-3\\/5[_ngcontent-%COMP%]{width:60%}.lg\\:w-full[_ngcontent-%COMP%]{width:100%}.lg\\:max-w-7xl[_ngcontent-%COMP%]{max-width:80rem}.lg\\:max-w-none[_ngcontent-%COMP%]{max-width:none}.lg\\:flex-1[_ngcontent-%COMP%]{flex:1 1 0%}.lg\\:grid-flow-col-dense[_ngcontent-%COMP%]{grid-auto-flow:column dense}.lg\\:grid-cols-2[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-4[_ngcontent-%COMP%]{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:justify-end[_ngcontent-%COMP%]{justify-content:flex-end}.lg\\:gap-5[_ngcontent-%COMP%]{gap:1.25rem}.lg\\:gap-7[_ngcontent-%COMP%]{gap:1.75rem}.lg\\:rounded-lg[_ngcontent-%COMP%]{border-radius:.5rem}.lg\\:px-0[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.lg\\:px-1[_ngcontent-%COMP%]{padding-left:.25rem;padding-right:.25rem}.lg\\:px-10[_ngcontent-%COMP%]{padding-left:2.5rem;padding-right:2.5rem}.lg\\:px-4[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.lg\\:py-0[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.lg\\:pb-0[_ngcontent-%COMP%]{padding-bottom:0}.lg\\:pb-4[_ngcontent-%COMP%]{padding-bottom:1rem}.lg\\:pl-3[_ngcontent-%COMP%]{padding-left:.75rem}.lg\\:pt-8[_ngcontent-%COMP%]{padding-top:2rem}.lg\\:text-left[_ngcontent-%COMP%]{text-align:left}}[_ngcontent-%COMP%]:is(:where([dir=rtl])   .rtl\\:space-x-reverse)[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 1}@media (prefers-color-scheme: dark){.dark\\:bg-amber-300[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(252 211 77 / var(--tw-bg-opacity))}.dark\\:text-black[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}}']});let c=a;return c})();export{D3 as a,R3 as b,Q6 as c,J6 as d,c8 as e,t8 as f};
