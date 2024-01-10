import{Ea as _,Ha as f,J as y,Ka as I,L as a,M as S,P as D,Q as l,Qa as p,R as h,U as v,V as g,W as b,nb as m}from"./chunk-PPQ3MNNO.js";var F=null;function C(){return F}function $e(n){F||(F=n)}var M=class{},P=new D("DocumentToken"),k=(()=>{let t=class t{historyGo(e){throw new Error("Not implemented")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=a({token:t,factory:()=>(()=>h(U))(),providedIn:"platform"});let n=t;return n})();var U=(()=>{let t=class t extends k{constructor(){super(),this._doc=h(P),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return C().getBaseHref(this._doc)}onPopState(e){let i=C().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=C().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=a({token:t,factory:()=>(()=>new t)(),providedIn:"platform"});let n=t;return n})();function x(n,t){if(n.length==0)return t;if(t.length==0)return n;let s=0;return n.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?n+t.substring(1):s==1?n+t:n+"/"+t}function B(n){let t=n.match(/#|\?|$/),s=t&&t.index||n.length,e=s-(n[s-1]==="/"?1:0);return n.slice(0,e)+n.slice(s)}function c(n){return n&&n[0]!=="?"?"?"+n:n}var A=(()=>{let t=class t{historyGo(e){throw new Error("Not implemented")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=a({token:t,factory:()=>(()=>h(j))(),providedIn:"root"});let n=t;return n})(),z=new D("appBaseHref"),j=(()=>{let t=class t extends A{constructor(e,i){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??h(P).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return x(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+c(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,u){let o=this.prepareExternalUrl(r+c(u));this._platformLocation.pushState(e,i,o)}replaceState(e,i,r,u){let o=this.prepareExternalUrl(r+c(u));this._platformLocation.replaceState(e,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(i){return new(i||t)(l(k),l(z,8))},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();var V=(()=>{let t=class t{constructor(e){this._subject=new I,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=Y(B(L(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+c(i))}normalize(e){return t.stripTrailingSlash(H(this._basePath,L(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)})),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i,complete:r})}};t.normalizeQueryParams=c,t.joinWithSlash=x,t.stripTrailingSlash=B,t.\u0275fac=function(i){return new(i||t)(l(A))},t.\u0275prov=a({token:t,factory:()=>G(),providedIn:"root"});let n=t;return n})();function G(){return new V(l(A))}function H(n,t){if(!n||!t.startsWith(n))return t;let s=t.substring(n.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function L(n){return n.replace(/\/index.html$/,"")}function Y(n){if(new RegExp("^(https?:)?//").test(n)){let[,s]=n.split(/\/\/[^\/]+/);return s}return n}function Ue(n,t){t=encodeURIComponent(t);for(let s of n.split(";")){let e=s.indexOf("="),[i,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(i.trim()===t)return decodeURIComponent(r)}return null}var E=class{constructor(t,s,e,i){this.$implicit=t,this.ngForOf=s,this.index=e,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},ze=(()=>{let t=class t{set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}constructor(e,i,r){this._viewContainer=e,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;if(!this._differ&&e)if(!1)try{}catch{}else this._differ=this._differs.find(e).create(this.ngForTrackBy)}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let i=this._viewContainer;e.forEachOperation((r,u,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new E(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(u===null?void 0:u);else if(u!==null){let d=i.get(u);i.move(d,o),O(d,r)}});for(let r=0,u=i.length;r<u;r++){let d=i.get(r).context;d.index=r,d.count=u,d.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let u=i.get(r.currentIndex);O(u,r)})}static ngTemplateContextGuard(e,i){return!0}};t.\u0275fac=function(i){return new(i||t)(f(p),f(m),f(_))},t.\u0275dir=g({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let n=t;return n})();function O(n,t){n.context.$implicit=t.item}var je=(()=>{let t=class t{constructor(e,i){this._viewContainer=e,this._context=new w,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){R("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){R("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,i){return!0}};t.\u0275fac=function(i){return new(i||t)(f(p),f(m))},t.\u0275dir=g({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let n=t;return n})(),w=class{constructor(){this.$implicit=null,this.ngIf=null}};function R(n,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${y(t)}'.`)}var Ve=(()=>{let t=class t{transform(e){return JSON.stringify(e,null,2)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=b({name:"json",type:t,pure:!1,standalone:!0});let n=t;return n})();var Ge=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=v({type:t}),t.\u0275inj=S({});let n=t;return n})(),Z="browser",W="server";function He(n){return n===Z}function Ye(n){return n===W}var T=class{};export{C as a,$e as b,M as c,P as d,A as e,V as f,Ue as g,ze as h,je as i,Ve as j,Ge as k,Z as l,He as m,Ye as n,T as o};
