import './polyfills.server.mjs';
import{a as M}from"./chunk-J54YY7OR.mjs";import{b as x,c as g,d as y,f as _,g as k,h as D,i as F,j as E,k as w}from"./chunk-O6SVIKLH.mjs";import{c as A,d as O}from"./chunk-LCUIE5ES.mjs";import{r as S}from"./chunk-4EL5TKPX.mjs";import"./chunk-AAIGJCNB.mjs";import{Cb as h,Hc as N,Kb as n,Rb as v,Tb as C,db as b,eb as c,ja as f,mb as p,p as u,tb as i,ub as t,vb as o}from"./chunk-SH2U3B32.mjs";import{a as d,g as J}from"./chunk-MZKWKPOA.mjs";var B=J(M());var V=l=>[l],q=(()=>{let a=class a{constructor(r,e){this.siteGraphService=r,this.formBuilder=e,this.appValues=O,this.headingData$=u({headingText:"Add Content",taglineText:"",taglineSmallText:"",alignment:this.appValues.HEADERBLOCK_ALIGNMENT_NONE,mb:this.appValues.HEADERBLOCK_MB}),this.newContentForm=this.formBuilder.group({collectionName:"",collectionDataJSON:"",encode_key:"",encode_value:""})}addContent(){let r=this.newContentForm.value.collectionDataJSON||"",e=JSON.parse(r);if(this.newContentForm.value.encode_key!=""){let s=this.newContentForm.value.encode_key||"a",G=(0,B.encode)(this.newContentForm.value.encode_value,{mode:"specialChars"}),T={[s]:G};e=d(d({},e),T)}let m=this.newContentForm.value.collectionName||"";this.siteGraphService.addBlockItemToFireBase(m,e),this.newContentForm.reset()}};a.\u0275fac=function(e){return new(e||a)(c(S),c(F))},a.\u0275cmp=f({type:a,selectors:[["app-add-content"]],standalone:!0,features:[v],decls:29,vars:4,consts:[[3,"headingData$"],[1,"relative","block","px-3","py-6","md:px-8","md:py-7","mx-1","my-1","md:mx-10","md:my-1","rounded-lg","border-b","border-pink-950","bg-slate-950","shadow","text-white"],[3,"formGroup","ngSubmit"],[1,"py-1"],["for","collectionName",1,"pb-1"],["id","collectionName","type","text","formControlName","collectionName",1,"p-2","text-black"],["for","encode_key",1,"pb-1"],["id","encode_key","type","text","formControlName","encode_key",1,"p-2","text-black"],["for","encode_value",1,"pb-1"],["id","encode_value","type","text","formControlName","encode_value",1,"p-2","text-black"],["for","collectionDataJSON",1,"pb-1"],["id","collectionDataJSON","type","text","rows","20","cols","90","formControlName","collectionDataJSON",1,"p-2","text-black"],["type","submit",1,"button"]],template:function(e,m){e&1&&(o(0,"app-heading-block",0),i(1,"section",1)(2,"form",2),h("ngSubmit",function(){return m.addContent()}),i(3,"div",3)(4,"label",4),n(5," CollectionName "),t(),n(6,"\xA0 "),o(7,"input",5),t(),o(8,"br"),i(9,"div",3)(10,"label",6),n(11," encode_key "),t(),n(12,"\xA0 "),o(13,"input",7),i(14,"label",8),n(15," encode_value "),t(),n(16,"\xA0 "),o(17,"input",9),t(),o(18,"br"),i(19,"div",3)(20,"label",10),n(21," New Data (JSON) "),t(),o(22,"br")(23,"textarea",11),t(),o(24,"br"),i(25,"button",12)(26,"strong"),n(27,"Add data"),t()(),o(28,"br"),t()()),e&2&&(p("headingData$",C(2,V,m.headingData$)),b(2),p("formGroup",m.newContentForm))},dependencies:[N,E,_,x,g,y,w,k,D,A]});let l=a;return l})();export{q as AddContentComponent};