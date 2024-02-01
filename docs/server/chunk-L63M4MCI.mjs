import './polyfills.server.mjs';
import{f as $}from"./chunk-TFGDPAXK.mjs";import{a as S,b as D,c as O}from"./chunk-W2WCJDCS.mjs";import{a as I,b as z}from"./chunk-UWPCE63I.mjs";import{o as y,p as k}from"./chunk-SDAUR5UF.mjs";import{$a as o,Bb as _,Db as M,Hb as x,Ob as f,fa as P,hb as a,ia as h,kb as d,lb as s,mb as w,nb as C,ob as p,pb as m,rc as u,ub as g,uc as v,xb as c,zb as b}from"./chunk-BL2EOI7M.mjs";function E(t,e){if(t&1&&(p(0),C(1,"fa-icon",4),m()),t&2){let n=g(2);o(1),a("icon",n.faIconData)}}function j(t,e){if(t&1&&(p(0),s(1,"span",2),_(2),d(3,E,2,1,"ng-container",3),w(),m()),t&2){let n=g();o(1),c("routerLink",n.linkPath$),c("target",n.target$),o(1),M(" ",n.title$," "),o(1),a("ngIf",n.icon)}}function N(t,e){if(t&1&&(p(0),C(1,"fa-icon",4),m()),t&2){let n=g(2);o(1),a("icon",n.faIconData)}}function T(t,e){if(t&1&&(s(0,"span",5),_(1),d(2,N,2,1,"ng-container",3),w()),t&2){let n=g();c("routerLink",n.linkPath$),c("target",n.target$),o(1),M(" ",n.title$," "),o(1),a("ngIf",n.icon)}}var B=(()=>{let e=class e{constructor(){this.faIconData=O,this.icons=[{name:"faGithub",iconData:O},{name:"faLinkedin",iconData:D},{name:"faEnvelope",iconData:$},{name:"faXTwitter",iconData:S}],this.title$="",this.target$="",this.linkPath$="",this.active$=!1}ngOnChanges(r){if(this.isDarkScheme=this.colorScheme=="dark",this.title$=JSON.parse(r.menuItem.currentValue).title,this.icon=JSON.parse(r.menuItem.currentValue).icon,this.icon){let i=this.icons.find(l=>l.name==this.icon).iconData;this.faIconData=i}this.target$=JSON.parse(r.menuItem.currentValue).target,this.linkPath$=JSON.parse(r.menuItem.currentValue).linkPath,this.active$=JSON.parse(r.menuItem.currentValue).active}setColorScheme(){this.colorScheme=="dark"&&(this.bgActiveColor="bg-pink-700",this.bgColor="bg-pink",this.bgHoverColor="bg-amber-500",this.textActiveColor="text-white",this.textColor="text-slate-950")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=P({type:e,selectors:[["app-menu-item"]],inputs:{menuItem:"menuItem",colorScheme:"colorScheme"},standalone:!0,features:[h,x],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["lightScheme",""],["routerLinkActive","rounded-full bg-pink-700 text-white font-bold hover:bg-pink-700 hover:text-white hover:rounded-full",1,"block","md:inline-block","text-sm","px-4","py-2","leading-none","rounded-full","font-semibold","text-slate-950","hover:bg-amber-500","hover:text-slate-950",3,"routerLink","target"],[4,"ngIf"],[3,"icon"],["routerLinkActive","rounded-full bg-slates-700 text-white font-bold hover:bg-slates-600 hover:text-white hover:rounded-full",1,"block","md:inline-block","text-sm","px-4","py-2","leading-none","rounded-full","font-semibold","text-white","bg-slates-950","hover:bg-slates-600","hover:text-white",3,"routerLink","target"]],template:function(i,l){if(i&1&&d(0,j,4,4,"ng-container",0)(1,T,3,4,"ng-template",null,1,f),i&2){let L=b(2);a("ngIf",l.isDarkScheme)("ngIfElse",L)}},dependencies:[v,u,y,k,z,I],styles:['*[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:300}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}[_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-content: ""}html[_ngcontent-%COMP%], [_nghost-%COMP%]{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:Graphik,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body[_ngcontent-%COMP%]{margin:0;line-height:inherit}hr[_ngcontent-%COMP%]{height:0;color:inherit;border-top-width:1px}abbr[_ngcontent-%COMP%]:where([title]){text-decoration:underline dotted}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-size:inherit;font-weight:inherit}a[_ngcontent-%COMP%]{color:inherit;text-decoration:inherit}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}table[_ngcontent-%COMP%]{text-indent:0;border-color:inherit;border-collapse:collapse}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button;background-color:transparent;background-image:none}[_ngcontent-%COMP%]:-moz-focusring{outline:auto}[_ngcontent-%COMP%]:-moz-ui-invalid{box-shadow:none}progress[_ngcontent-%COMP%]{vertical-align:baseline}[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary[_ngcontent-%COMP%]{display:list-item}blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{margin:0}fieldset[_ngcontent-%COMP%]{margin:0;padding:0}legend[_ngcontent-%COMP%]{padding:0}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}dialog[_ngcontent-%COMP%]{padding:0}textarea[_ngcontent-%COMP%]{resize:vertical}input[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder{opacity:1;color:#9ca3af}button[_ngcontent-%COMP%], [role=button][_ngcontent-%COMP%]{cursor:pointer}[_ngcontent-%COMP%]:disabled{cursor:default}img[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%]{display:block;vertical-align:middle}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{max-width:100%;height:auto}[hidden][_ngcontent-%COMP%]{display:none}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }[_ngcontent-%COMP%]::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.fixed[_ngcontent-%COMP%]{position:fixed}.absolute[_ngcontent-%COMP%]{position:absolute}.relative[_ngcontent-%COMP%]{position:relative}.sticky[_ngcontent-%COMP%]{position:sticky}.right-2[_ngcontent-%COMP%]{right:.5rem}.top-0[_ngcontent-%COMP%]{top:0}.top-2[_ngcontent-%COMP%]{top:.5rem}.z-50[_ngcontent-%COMP%]{z-index:50}.m-0[_ngcontent-%COMP%]{margin:0}.mx-1[_ngcontent-%COMP%]{margin-left:.25rem;margin-right:.25rem}.mx-10[_ngcontent-%COMP%]{margin-left:2.5rem;margin-right:2.5rem}.mx-2[_ngcontent-%COMP%]{margin-left:.5rem;margin-right:.5rem}.mx-5[_ngcontent-%COMP%]{margin-left:1.25rem;margin-right:1.25rem}.mx-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.my-0[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.my-1[_ngcontent-%COMP%]{margin-top:.25rem;margin-bottom:.25rem}.my-10[_ngcontent-%COMP%]{margin-top:2.5rem;margin-bottom:2.5rem}.my-2[_ngcontent-%COMP%]{margin-top:.5rem;margin-bottom:.5rem}.my-4[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem}.my-7[_ngcontent-%COMP%]{margin-top:1.75rem;margin-bottom:1.75rem}.my-8[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:2rem}.mb-0[_ngcontent-%COMP%]{margin-bottom:0}.mb-4[_ngcontent-%COMP%]{margin-bottom:1rem}.mb-5[_ngcontent-%COMP%]{margin-bottom:1.25rem}.mb-6[_ngcontent-%COMP%]{margin-bottom:1.5rem}.ml-2[_ngcontent-%COMP%]{margin-left:.5rem}.mr-2[_ngcontent-%COMP%]{margin-right:.5rem}.mr-4[_ngcontent-%COMP%]{margin-right:1rem}.mt-0[_ngcontent-%COMP%]{margin-top:0}.mt-1[_ngcontent-%COMP%]{margin-top:.25rem}.mt-12[_ngcontent-%COMP%]{margin-top:3rem}.mt-2[_ngcontent-%COMP%]{margin-top:.5rem}.mt-3[_ngcontent-%COMP%]{margin-top:.75rem}.mt-4[_ngcontent-%COMP%]{margin-top:1rem}.mt-5[_ngcontent-%COMP%]{margin-top:1.25rem}.mt-6[_ngcontent-%COMP%]{margin-top:1.5rem}.mt-8[_ngcontent-%COMP%]{margin-top:2rem}.block[_ngcontent-%COMP%]{display:block}.flex[_ngcontent-%COMP%]{display:flex}.inline-flex[_ngcontent-%COMP%]{display:inline-flex}.table[_ngcontent-%COMP%]{display:table}.grid[_ngcontent-%COMP%]{display:grid}.contents[_ngcontent-%COMP%]{display:contents}.hidden[_ngcontent-%COMP%]{display:none}.h-10[_ngcontent-%COMP%]{height:2.5rem}.h-48[_ngcontent-%COMP%]{height:12rem}.h-auto[_ngcontent-%COMP%]{height:auto}.w-10[_ngcontent-%COMP%]{width:2.5rem}.w-48[_ngcontent-%COMP%]{width:12rem}.w-6[_ngcontent-%COMP%]{width:1.5rem}.w-full[_ngcontent-%COMP%]{width:100%}.min-w-full[_ngcontent-%COMP%]{min-width:100%}.max-w-4xl[_ngcontent-%COMP%]{max-width:56rem}.max-w-5xl[_ngcontent-%COMP%]{max-width:64rem}.max-w-7xl[_ngcontent-%COMP%]{max-width:80rem}.max-w-screen-xl[_ngcontent-%COMP%]{max-width:1440px}.max-w-xl[_ngcontent-%COMP%]{max-width:36rem}.grid-cols-1[_ngcontent-%COMP%]{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-row[_ngcontent-%COMP%]{flex-direction:row}.flex-wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.items-center[_ngcontent-%COMP%]{align-items:center}.justify-center[_ngcontent-%COMP%]{justify-content:center}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.gap-3[_ngcontent-%COMP%]{gap:.75rem}.space-x-4[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-6[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1.5rem * var(--tw-space-x-reverse));margin-left:calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-10[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2.5rem * var(--tw-space-y-reverse))}.overflow-x-hidden[_ngcontent-%COMP%]{overflow-x:hidden}.rounded[_ngcontent-%COMP%]{border-radius:.25rem}.rounded-full[_ngcontent-%COMP%]{border-radius:9999px}.rounded-lg[_ngcontent-%COMP%]{border-radius:.5rem}.rounded-none[_ngcontent-%COMP%]{border-radius:0}.border[_ngcontent-%COMP%]{border-width:1px}.border-b[_ngcontent-%COMP%]{border-bottom-width:1px}.border-b-2[_ngcontent-%COMP%]{border-bottom-width:2px}.border-t[_ngcontent-%COMP%]{border-top-width:1px}.border-amber-500[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(245 158 11 / var(--tw-border-opacity))}.border-pink-950[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(80 7 36 / var(--tw-border-opacity))}.border-slate-500[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(100 116 139 / var(--tw-border-opacity))}.border-slate-700[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(51 65 85 / var(--tw-border-opacity))}.bg-amber-400[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(251 191 36 / var(--tw-bg-opacity))}.bg-amber-500[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(245 158 11 / var(--tw-bg-opacity))}.bg-gray-100[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-pink-600[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(219 39 119 / var(--tw-bg-opacity))}.bg-pink-700[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(190 24 93 / var(--tw-bg-opacity))}.bg-slate-900[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(15 23 42 / var(--tw-bg-opacity))}.bg-slate-950[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(2 6 23 / var(--tw-bg-opacity))}.bg-gradient-to-r[_ngcontent-%COMP%]{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-rose-700[_ngcontent-%COMP%]{--tw-gradient-from: #be123c var(--tw-gradient-from-position);--tw-gradient-to: rgb(190 18 60 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.via-fuchsia-950[_ngcontent-%COMP%]{--tw-gradient-to: rgb(74 4 78 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), #4a044e var(--tw-gradient-via-position), var(--tw-gradient-to)}.to-indigo-950[_ngcontent-%COMP%]{--tw-gradient-to: #1e1b4b var(--tw-gradient-to-position)}.bg-cover[_ngcontent-%COMP%]{background-size:cover}.bg-center[_ngcontent-%COMP%]{background-position:center}.p-0[_ngcontent-%COMP%]{padding:0}.p-2[_ngcontent-%COMP%]{padding:.5rem}.p-4[_ngcontent-%COMP%]{padding:1rem}.p-5[_ngcontent-%COMP%]{padding:1.25rem}.p-8[_ngcontent-%COMP%]{padding:2rem}.px-2[_ngcontent-%COMP%]{padding-left:.5rem;padding-right:.5rem}.px-2\\.5[_ngcontent-%COMP%]{padding-left:.625rem;padding-right:.625rem}.px-3[_ngcontent-%COMP%]{padding-left:.75rem;padding-right:.75rem}.px-4[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.px-6[_ngcontent-%COMP%]{padding-left:1.5rem;padding-right:1.5rem}.py-0[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.py-1[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5[_ngcontent-%COMP%]{padding-top:.375rem;padding-bottom:.375rem}.py-10[_ngcontent-%COMP%]{padding-top:2.5rem;padding-bottom:2.5rem}.py-2[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.py-3[_ngcontent-%COMP%]{padding-top:.75rem;padding-bottom:.75rem}.py-6[_ngcontent-%COMP%]{padding-top:1.5rem;padding-bottom:1.5rem}.pb-1[_ngcontent-%COMP%]{padding-bottom:.25rem}.pb-16[_ngcontent-%COMP%]{padding-bottom:4rem}.pb-2[_ngcontent-%COMP%]{padding-bottom:.5rem}.pb-4[_ngcontent-%COMP%]{padding-bottom:1rem}.pl-0[_ngcontent-%COMP%]{padding-left:0}.pt-1[_ngcontent-%COMP%]{padding-top:.25rem}.pt-16[_ngcontent-%COMP%]{padding-top:4rem}.pt-2[_ngcontent-%COMP%]{padding-top:.5rem}.pt-3[_ngcontent-%COMP%]{padding-top:.75rem}.pt-4[_ngcontent-%COMP%]{padding-top:1rem}.pt-5[_ngcontent-%COMP%]{padding-top:1.25rem}.text-left[_ngcontent-%COMP%]{text-align:left}.text-center[_ngcontent-%COMP%]{text-align:center}.text-4xl[_ngcontent-%COMP%]{font-size:2.25rem;line-height:2.5rem}.text-base[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5rem}.text-lg[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem}.text-sm[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.25rem}.text-xs[_ngcontent-%COMP%]{font-size:.75rem;line-height:1rem}.font-bold[_ngcontent-%COMP%]{font-weight:700}.font-light[_ngcontent-%COMP%]{font-weight:300}.font-medium[_ngcontent-%COMP%]{font-weight:500}.font-semibold[_ngcontent-%COMP%]{font-weight:600}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.italic[_ngcontent-%COMP%]{font-style:italic}.leading-5[_ngcontent-%COMP%]{line-height:1.25rem}.leading-6[_ngcontent-%COMP%]{line-height:1.5rem}.leading-7[_ngcontent-%COMP%]{line-height:1.75rem}.leading-none[_ngcontent-%COMP%]{line-height:1}.leading-relaxed[_ngcontent-%COMP%]{line-height:1.625}.tracking-wide[_ngcontent-%COMP%]{letter-spacing:.025em}.tracking-wider[_ngcontent-%COMP%]{letter-spacing:.05em}.text-amber-300[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(252 211 77 / var(--tw-text-opacity))}.text-amber-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(251 191 36 / var(--tw-text-opacity))}.text-black[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-gray-300[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.text-gray-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-pink-500[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(236 72 153 / var(--tw-text-opacity))}.text-pink-600[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(219 39 119 / var(--tw-text-opacity))}.text-slate-100[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(241 245 249 / var(--tw-text-opacity))}.text-slate-200[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(226 232 240 / var(--tw-text-opacity))}.text-slate-300[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(203 213 225 / var(--tw-text-opacity))}.text-slate-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.text-slate-500[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(100 116 139 / var(--tw-text-opacity))}.text-slate-950[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(2 6 23 / var(--tw-text-opacity))}.text-stone-300[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(214 211 209 / var(--tw-text-opacity))}.text-white[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.mix-blend-screen[_ngcontent-%COMP%]{mix-blend-mode:screen}.shadow[_ngcontent-%COMP%]{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl[_ngcontent-%COMP%]{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm[_ngcontent-%COMP%]{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl[_ngcontent-%COMP%]{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.ring-1[_ngcontent-%COMP%]{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-pink-600[_ngcontent-%COMP%]{--tw-ring-opacity: 1;--tw-ring-color: rgb(219 39 119 / var(--tw-ring-opacity))}.filter[_ngcontent-%COMP%]{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}h4[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:600;font-size:.5em}.hover\\:rounded-full[_ngcontent-%COMP%]:hover{border-radius:9999px}.hover\\:bg-amber-500[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(245 158 11 / var(--tw-bg-opacity))}.hover\\:bg-pink-700[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(190 24 93 / var(--tw-bg-opacity))}.hover\\:text-slate-950[_ngcontent-%COMP%]:hover{--tw-text-opacity: 1;color:rgb(2 6 23 / var(--tw-text-opacity))}.hover\\:text-white[_ngcontent-%COMP%]:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.hover\\:ring-pink-700[_ngcontent-%COMP%]:hover{--tw-ring-opacity: 1;--tw-ring-color: rgb(190 24 93 / var(--tw-ring-opacity))}.focus\\:outline-none[_ngcontent-%COMP%]:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2[_ngcontent-%COMP%]:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-amber-500[_ngcontent-%COMP%]:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(245 158 11 / var(--tw-ring-opacity))}@media (min-width: 480px){.sm\\:mt-16[_ngcontent-%COMP%]{margin-top:4rem}.sm\\:grid-cols-1[_ngcontent-%COMP%]{grid-template-columns:repeat(1,minmax(0,1fr))}}@media (min-width: 768px){.md\\:mx-10[_ngcontent-%COMP%]{margin-left:2.5rem;margin-right:2.5rem}.md\\:my-0[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.md\\:my-1[_ngcontent-%COMP%]{margin-top:.25rem;margin-bottom:.25rem}.md\\:my-8[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:2rem}.md\\:mt-0[_ngcontent-%COMP%]{margin-top:0}.md\\:block[_ngcontent-%COMP%]{display:block}.md\\:inline-block[_ngcontent-%COMP%]{display:inline-block}.md\\:hidden[_ngcontent-%COMP%]{display:none}.md\\:w-auto[_ngcontent-%COMP%]{width:auto}.md\\:flex-row[_ngcontent-%COMP%]{flex-direction:row}.md\\:space-x-8[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(2rem * var(--tw-space-x-reverse));margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)))}.md\\:p-0[_ngcontent-%COMP%]{padding:0}.md\\:p-12[_ngcontent-%COMP%]{padding:3rem}.md\\:px-0[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.md\\:px-10[_ngcontent-%COMP%]{padding-left:2.5rem;padding-right:2.5rem}.md\\:px-8[_ngcontent-%COMP%]{padding-left:2rem;padding-right:2rem}.md\\:py-0[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.md\\:py-2[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.md\\:py-20[_ngcontent-%COMP%]{padding-top:5rem;padding-bottom:5rem}.md\\:py-4[_ngcontent-%COMP%]{padding-top:1rem;padding-bottom:1rem}.md\\:py-7[_ngcontent-%COMP%]{padding-top:1.75rem;padding-bottom:1.75rem}.md\\:pb-1[_ngcontent-%COMP%]{padding-bottom:.25rem}.md\\:pl-5[_ngcontent-%COMP%]{padding-left:1.25rem}.md\\:pt-2[_ngcontent-%COMP%]{padding-top:.5rem}.md\\:pt-8[_ngcontent-%COMP%]{padding-top:2rem}.md\\:text-center[_ngcontent-%COMP%]{text-align:center}.md\\:text-3xl[_ngcontent-%COMP%]{font-size:1.875rem;line-height:2.25rem}.md\\:text-base[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5rem}.md\\:text-sm[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.25rem}}@media (min-width: 976px){.lg\\:relative[_ngcontent-%COMP%]{position:relative}.lg\\:m-0[_ngcontent-%COMP%]{margin:0}.lg\\:mx-0[_ngcontent-%COMP%]{margin-left:0;margin-right:0}.lg\\:mx-4[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}.lg\\:mx-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.lg\\:my-0[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.lg\\:mr-0[_ngcontent-%COMP%]{margin-right:0}.lg\\:mr-4[_ngcontent-%COMP%]{margin-right:1rem}.lg\\:mt-0[_ngcontent-%COMP%]{margin-top:0}.lg\\:block[_ngcontent-%COMP%]{display:block}.lg\\:grid[_ngcontent-%COMP%]{display:grid}.lg\\:hidden[_ngcontent-%COMP%]{display:none}.lg\\:h-full[_ngcontent-%COMP%]{height:100%}.lg\\:h-screen[_ngcontent-%COMP%]{height:100vh}.lg\\:w-2\\/5[_ngcontent-%COMP%]{width:40%}.lg\\:w-3\\/5[_ngcontent-%COMP%]{width:60%}.lg\\:w-full[_ngcontent-%COMP%]{width:100%}.lg\\:max-w-7xl[_ngcontent-%COMP%]{max-width:80rem}.lg\\:max-w-none[_ngcontent-%COMP%]{max-width:none}.lg\\:flex-1[_ngcontent-%COMP%]{flex:1 1 0%}.lg\\:grid-flow-col-dense[_ngcontent-%COMP%]{grid-auto-flow:column dense}.lg\\:grid-cols-2[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-4[_ngcontent-%COMP%]{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:justify-end[_ngcontent-%COMP%]{justify-content:flex-end}.lg\\:gap-5[_ngcontent-%COMP%]{gap:1.25rem}.lg\\:gap-7[_ngcontent-%COMP%]{gap:1.75rem}.lg\\:rounded-lg[_ngcontent-%COMP%]{border-radius:.5rem}.lg\\:px-0[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.lg\\:px-1[_ngcontent-%COMP%]{padding-left:.25rem;padding-right:.25rem}.lg\\:px-10[_ngcontent-%COMP%]{padding-left:2.5rem;padding-right:2.5rem}.lg\\:px-4[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.lg\\:py-0[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.lg\\:pb-0[_ngcontent-%COMP%]{padding-bottom:0}.lg\\:pb-4[_ngcontent-%COMP%]{padding-bottom:1rem}.lg\\:pl-3[_ngcontent-%COMP%]{padding-left:.75rem}.lg\\:pt-4[_ngcontent-%COMP%]{padding-top:1rem}.lg\\:text-left[_ngcontent-%COMP%]{text-align:left}}[_ngcontent-%COMP%]:is(:where([dir=rtl])   .rtl\\:space-x-reverse)[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 1}@media (prefers-color-scheme: dark){.dark\\:bg-amber-300[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(252 211 77 / var(--tw-bg-opacity))}.dark\\:text-black[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}}']});let t=e;return t})();export{B as a};
