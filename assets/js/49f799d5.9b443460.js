"use strict";(self.webpackChunklean_catlogic=self.webpackChunklean_catlogic||[]).push([[270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="The Deduction Typeclass",l={unversionedId:"deduction/deduction",id:"deduction/deduction",title:"The Deduction Typeclass",description:"The type of formulas",source:"@site/docs/deduction/deduction.md",sourceDirName:"deduction",slug:"/deduction/",permalink:"/docs/deduction/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Thin Categories",permalink:"/docs/categoryTheory/thin"},next:{title:"Positive Propositional Calculus",permalink:"/docs/deduction/examples/PPC"}},s={},p=[{value:"The type of formulas",id:"the-type-of-formulas",level:2},{value:"The type of hypotheses",id:"the-type-of-hypotheses",level:2},{value:"The typeclass",id:"the-typeclass",level:2},{value:"Optional features",id:"optional-features",level:2},{value:"Empty hypothesis",id:"empty-hypothesis",level:3},{value:"Hypothesis insert",id:"hypothesis-insert",level:3},{value:"Hypothesis membership",id:"hypothesis-membership",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-deduction-typeclass"},"The Deduction Typeclass"),(0,a.kt)("h2",{id:"the-type-of-formulas"},"The type of formulas"),(0,a.kt)("h2",{id:"the-type-of-hypotheses"},"The type of hypotheses"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leanprover-community.github.io/mathlib_docs/init/core.html#has_singleton"},(0,a.kt)("inlineCode",{parentName:"a"},"has_singleton")," Documentation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lean",metastring:'title="mathlib: init/core.lean"',title:'"mathlib:','init/core.lean"':!0},"class has_singleton (\u03b1 : out_param (Type u)) (\u03b2 : Type v) := \n    (singleton : \u03b1 \u2192 \u03b2)\n")),(0,a.kt)("h2",{id:"the-typeclass"},"The typeclass"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lean",metastring:'title="deduction/deduction.lean"',title:'"deduction/deduction.lean"'},"class has_derives (Form : Type) :=\n  (Hyp : Type)\n  [singleHyp : has_singleton Form Hyp]\n  (derives : Hyp \u2192 Form \u2192 Prop)\n  (derive_refl : \u2200 \u03c6 : Form, derives {\u03c6} \u03c6)\n  (derive_trans : \u2200 \u03c6 \u03c8 \u03b8 : Form, derives {\u03c6} \u03c8 \u2192 derives {\u03c8} \u03b8 \u2192 derives {\u03c6} \u03b8)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lean",metastring:'title="deduction/deduction.lean"',title:'"deduction/deduction.lean"'},"def der {Form : Type} [Der : has_derives Form] : Form \u2192 Form \u2192 Prop :=\n  \u03bb \u03c6 \u03c8, has_derives.derives (has_derives.singleHyp.singleton \u03c6) \u03c8\n\ninfix `\u22a2`:80 := der\n")),(0,a.kt)("h2",{id:"optional-features"},"Optional features"),(0,a.kt)("h3",{id:"empty-hypothesis"},"Empty hypothesis"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leanprover-community.github.io/mathlib_docs/init/core.html#has_emptyc"},(0,a.kt)("inlineCode",{parentName:"a"},"has_emptyc")," Documentation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lean",metastring:'title="mathlib: init/core.lean"',title:'"mathlib:','init/core.lean"':!0},"class has_emptyc   (\u03b1 : Type u) := \n    (emptyc : \u03b1)\n")),(0,a.kt)("h3",{id:"hypothesis-insert"},"Hypothesis insert"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leanprover-community.github.io/mathlib_docs/init/core.html#has_insert"},(0,a.kt)("inlineCode",{parentName:"a"},"has_insert")," Documentation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lean",metastring:'title="mathlib: init/core.lean"',title:'"mathlib:','init/core.lean"':!0},"class has_insert   (\u03b1 : out_param (Type u)) (\u03b3 : Type v) := \n    (insert : \u03b1 \u2192 \u03b3 \u2192 \u03b3)\n")),(0,a.kt)("h3",{id:"hypothesis-membership"},"Hypothesis membership"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leanprover-community.github.io/mathlib_docs/init/core.html#has_mem"},(0,a.kt)("inlineCode",{parentName:"a"},"has_mem")," Documentation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lean",metastring:'title="mathlib: init/core.lean"',title:'"mathlib:','init/core.lean"':!0},"class has_mem (\u03b1 : out_param (Type u)) (\u03b3 : Type v) := \n    (mem : \u03b1 \u2192 \u03b3 \u2192 Prop)\n")))}m.isMDXComponent=!0}}]);