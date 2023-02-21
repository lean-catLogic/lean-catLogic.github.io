"use strict";(self.webpackChunklean_catlogic=self.webpackChunklean_catlogic||[]).push([[963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),y=a,u=m["".concat(c,".").concat(y)]||m[y]||d[y]||i;return n?r.createElement(u,s(s({ref:t},p),{},{components:n})):r.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},s="Syntactic Posets",o={unversionedId:"semantics/synPoset/synPoset",id:"semantics/synPoset/synPoset",title:"Syntactic Posets",description:"Inter-derivability equivalence relation",source:"@site/docs/semantics/synPoset/synPoset.md",sourceDirName:"semantics/synPoset",slug:"/semantics/synPoset/",permalink:"/docs/semantics/synPoset/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Positive Propositional Calculus",permalink:"/docs/deduction/PPC"},next:{title:"Syntactic Categories",permalink:"/docs/semantics/synCat/"}},c={},l=[{value:"Inter-derivability equivalence relation",id:"inter-derivability-equivalence-relation",level:3},{value:"Quotienting by inter-derivability",id:"quotienting-by-inter-derivability",level:3},{value:"Lifting the derivability preorder",id:"lifting-the-derivability-preorder",level:3},{value:"Defining the syntactic poset",id:"defining-the-syntactic-poset",level:3}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"syntactic-posets"},"Syntactic Posets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lean",metastring:'title="semantics/syntacticPoset.lean"',title:'"semantics/syntacticPoset.lean"'},"namespace synPoset\n\n  variable {Form : Type}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lean",metastring:'title="semantics/syntacticPoset.lean"',title:'"semantics/syntacticPoset.lean"'},"instance syn_preorder [Der : has_derives Form] : preorder Form :=\n  { le := \u03bb \u03c6 \u03c8, \u03c6 \u22a2 \u03c8,\n    le_refl := Der.derive_refl,\n    le_trans := Der.derive_trans,\n  }\n")),(0,a.kt)("h3",{id:"inter-derivability-equivalence-relation"},"Inter-derivability equivalence relation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lean",metastring:'title="semantics/syntacticPoset.lean"',title:'"semantics/syntacticPoset.lean"'},"def inter_der [Der : has_derives Form] : Form \u2192 Form \u2192 Prop :=\n    \u03bb \u03c6 \u03c8,  \u03c6 \u22a2 \u03c8 \u2227 \u03c8 \u22a2 \u03c6\n\ninfix `\u22a3\u22a2`:78 := inter_der\n\ninstance syn_setoid [Der : has_derives Form] : setoid Form :=\n  { r     := (\u22a3\u22a2), \n    iseqv := \n      \u27e8 begin \n          assume \u03c6, constructor, \n          apply Der.derive_refl, apply Der.derive_refl,\n        end, \n        begin\n          assume \u03c6 \u03c8 h, cases h with \u03c6\u03c8 \u03c8\u03c6,\n          constructor, exact \u03c8\u03c6, exact \u03c6\u03c8,\n        end,\n        begin \n          assume \u03c6 \u03c8 \u03b8 j k, cases j with \u03c6\u03c8 \u03c8\u03c6,\n          cases k with \u03c8\u03b8 \u03b8\u03c8, constructor,\n          apply Der.derive_trans, exact \u03c6\u03c8, exact \u03c8\u03b8,\n          apply Der.derive_trans, exact \u03b8\u03c8, exact \u03c8\u03c6,\n        end \n      \u27e9 \n  }\n")),(0,a.kt)("h3",{id:"quotienting-by-inter-derivability"},"Quotienting by inter-derivability"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lean",metastring:'title="semantics/syntacticPoset.lean"',title:'"semantics/syntacticPoset.lean"'},"def Form_eq [Der : has_derives Form] : Type := @quot Form (\u22a3\u22a2)\ndef Form_eq_x (F : Type) [Der : has_derives F] : Type := @Form_eq F Der\n\nnotation (name:=Form_eq_explicit) F ` _eq`:max := Form_eq_x F\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lean",metastring:'title="semantics/syntacticPoset.lean"',title:'"semantics/syntacticPoset.lean"'},"def Form_eq_in [Der : has_derives Form] : Form \u2192 Form _eq := quot.mk (\u22a3\u22a2) \n\nnotation (name:=PPC_eq_in) \u2983\u03c6\u2984 := Form_eq_in \u03c6\n")),(0,a.kt)("h3",{id:"lifting-the-derivability-preorder"},"Lifting the derivability preorder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lean",metastring:'title="semantics/syntacticPoset.lean"',title:'"semantics/syntacticPoset.lean"'},"lemma syn_preorder_liftable1 [Der : has_derives Form] :\n      \u2200 \u03c6 \u03c8 \u03b8 : Form, \u03c8 \u22a3\u22a2 \u03b8 \u2192 (\u03c6 \u22a2 \u03c8) = (\u03c6 \u22a2 \u03b8) :=\n  begin \n    assume \u03c6 \u03c8 \u03b8 \u03c8iff\u03b8,\n    cases \u03c8iff\u03b8 with \u03c8\u03b8 \u03b8\u03c8,\n    apply propext,\n    constructor,\n    assume \u03c6\u03c8, apply Der.derive_trans, exact \u03c6\u03c8, exact \u03c8\u03b8,\n    assume \u03c6\u03b8, apply Der.derive_trans, exact \u03c6\u03b8, exact \u03b8\u03c8,\n  end\nlemma syn_preorder_liftable2 [Der : has_derives Form] :\n      \u2200 \u03c6 \u03c8 \u03b8 : Form, \u03c6 \u22a3\u22a2 \u03c8 \u2192 (\u03c6 \u22a2 \u03b8) = (\u03c8 \u22a2 \u03b8) :=\n  begin \n    assume \u03c6 \u03c8 \u03b8 \u03c6iff\u03c8,\n    cases \u03c6iff\u03c8 with \u03c6\u03c8 \u03c8\u03c6,\n    apply propext,\n    constructor,\n    assume \u03c6\u03b8, apply Der.derive_trans, exact \u03c8\u03c6, exact \u03c6\u03b8,\n    assume \u03c8\u03b8, apply Der.derive_trans, exact \u03c6\u03c8, exact \u03c8\u03b8,\n  end \n\ndef Form_eq_order [Der : has_derives Form] : \n      @Form_eq Form Der \u2192 @Form_eq Form Der \u2192 Prop :=\n    quot.lift\u2082 synPoset.syn_preorder.le syn_preorder_liftable1 syn_preorder_liftable2\n")),(0,a.kt)("h3",{id:"defining-the-syntactic-poset"},"Defining the syntactic poset"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lean",metastring:'title="semantics/syntacticPoset.lean"',title:'"semantics/syntacticPoset.lean"'},"instance syn_poset [Der : has_derives Form] : partial_order Form_eq :=\n  { le := @Form_eq_order Form Der,\n    le_refl := \n      begin\n        assume a,\n        induction a with \u03c6, \n        dsimp[(\u2264),setoid.r,Form_eq_order],\n        apply Der.derive_refl,refl,\n      end,\n    le_trans := \n      begin \n        assume a b c h j,\n        induction a with \u03c6, induction b with \u03c8, induction c with \u03b8,\n        dsimp[(\u2264),setoid.r,Form_eq_order],\n        dsimp[(\u2264)] at h, dsimp[(\u2264)] at j, \n        apply Der.derive_trans,\n        exact h, exact j,\n        refl, refl, refl,\n      end,\n    le_antisymm :=  \n      begin\n        assume a b h j,\n        induction a with \u03c6, induction b with \u03c8,\n        apply quotient.sound,\n        dsimp[(\u2248),setoid.r],dsimp[(\u2264)] at h, dsimp[(\u2264)] at j,\n        constructor, exact h, exact j, refl, refl,\n      end\n  }\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lean",metastring:'title="semantics/syntacticPoset.lean"',title:'"semantics/syntacticPoset.lean"'},"instance syn_eq_pre {Form : Type} [Der : has_derives Form] : preorder (Form _eq) :=\n    @partial_order.to_preorder (Form _eq) synPoset.syn_poset\n")))}m.isMDXComponent=!0}}]);