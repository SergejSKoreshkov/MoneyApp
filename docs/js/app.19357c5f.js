(function(t){function e(e){for(var n,s,r=e[0],i=e[1],l=e[2],v=0,m=[];v<r.length;v++)s=r[v],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(m.length)m.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},c=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=i;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"069b":function(t,e,a){},"0dba":function(t,e,a){},"10f4":function(t,e,a){},2179:function(t,e,a){"use strict";var n=a("0dba"),o=a.n(n);o.a},"2adc":function(t,e,a){"use strict";var n=a("b75b"),o=a.n(n);o.a},"41ae":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return t.swipe(!1)},right:function(){return t.swipe(!0)}},expression:"{\n      left: () => swipe(false),\n      right: () => swipe(true),\n    }"}]},[a("AppBar"),a("router-view")],1)],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",[n("v-app-bar-nav-icon",{on:{click:function(e){return t.$store.commit("setIsNavBarOpen",!0)}}})],1),n("v-navigation-drawer",{attrs:{absolute:""},model:{value:t.$store.state.isNavBarOpen,callback:function(e){t.$set(t.$store.state,"isNavBarOpen",e)},expression:"$store.state.isNavBarOpen"}},[n("v-list",[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-avatar",[n("img",{attrs:{src:a("915e")}})]),n("v-list-item-content",[n("v-list-item-title",[t._v("4000.00$")]),n("v-list-item-subtitle",[t._v("Total balance")])],1)],1),n("v-divider"),t._l(Object.keys(t.$store.state.accounts),(function(e){return n("AccountNavItem",{key:e,attrs:{name:e,color:t.$store.state.accounts[e].color,icon:t.$store.state.accounts[e].icon,total:t.$store.state.accounts[e].total}})}))],2),n("v-divider"),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",t._l(t.pages,(function(e){return n("v-list-item",{key:e.src,attrs:{link:""},on:{click:function(a){return t.$router.push(e.src)}}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1)],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("v-icon",{class:t.color+"--text"},[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-subtitle",[t._v(t._s(t.name))]),a("v-list-item-title",[t._v(t._s(t.total.toFixed(2))+"$")])],1)],1)},l=[],u=(a("a9e3"),{props:{icon:String,color:String,name:String,total:Number}}),v=u,m=a("2877"),d=a("6544"),p=a.n(d),f=a("132d"),b=a("da13"),g=a("8270"),_=a("5d23"),h=Object(m["a"])(v,i,l,!1,null,null,null),C=h.exports;p()(h,{VIcon:f["a"],VListItem:b["a"],VListItemAvatar:g["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"]});var V={computed:{showLocal:function(){return this.show}},data:function(){return{pages:[{name:"Home",icon:"mdi-home",src:"/"},{name:"Manage accounts",icon:"mdi-bank",src:"/accounts"},{name:"Manage categories",icon:"mdi-format-list-bulleted-square",src:"/categories"},{name:"Settings",icon:"mdi-cogs",src:"/settings"}]}},components:{AccountNavItem:C}},y=V,w=(a("71f0"),a("40dc")),k=a("5bc1"),$=a("ce7e"),x=a("8860"),I=a("1baa"),A=a("34c3"),S=a("f774"),O=Object(m["a"])(y,s,r,!1,null,"7ab6bbd0",null),B=O.exports;p()(O,{VAppBar:w["a"],VAppBarNavIcon:k["a"],VDivider:$["a"],VIcon:f["a"],VList:x["a"],VListItem:b["a"],VListItemAvatar:g["a"],VListItemContent:_["a"],VListItemGroup:I["a"],VListItemIcon:A["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VNavigationDrawer:S["a"]});var L={name:"App",components:{AppBar:B},methods:{swipe:function(t){this.$store.commit("setIsNavBarOpen",t)}},mounted:function(){this.$vuetify.theme.dark=1===this.$store.state.settings.theme}},M=L,T=(a("7c55"),a("7496")),j=a("a75b"),E=a("269a"),D=a.n(E),N=a("c3f0"),P=Object(m["a"])(M,o,c,!1,null,null,null),F=P.exports;p()(P,{VApp:T["a"],VContent:j["a"]}),D()(P,{Touch:N["a"]});var R=a("8c4f"),H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("TotalBalance"),a("IncomeSpendingsRate"),a("MainAccounts"),a("TopCategory")],1)},q=[],J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"pa-1"},[a("v-row",{staticClass:"text-center"},t._l(Object.keys(t.$store.state.accounts),(function(e){return a("v-col",{key:e,staticClass:"pa-2",attrs:{cols:"12"}},[a("Account",{attrs:{color:t.$store.state.accounts[e].color,name:e,icon:t.$store.state.accounts[e].icon,total:t.$store.state.accounts[e].total}})],1)})),1),a("v-row",[a("v-col",[a("v-btn",{staticClass:"w100",attrs:{text:""},on:{click:function(e){return t.$router.push("/accounts")}}},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-bank")]),a("span",{staticClass:"mr-4"},[t._v("Manage accounts")])],1)],1)],1)],1)],1)},G=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{class:t.color+"--text"},[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-subtitle",[t._v(t._s(t.name))]),a("v-list-item-title",[t._v(t._s(t.total.toFixed(2))+"$")])],1),a("v-spacer"),a("v-list-item-action",[a("v-btn",{class:t.color+"--text",attrs:{depressed:""},on:{click:t.addAccount}},[a("v-icon",[t._v("mdi-plus")])],1)],1)],1)],1)},z=[],K=(a("b0c0"),{props:{color:String,name:String,icon:String,total:Number},methods:{addAccount:function(){this.$store.dispatch("addAccount",{account:this.name,category:"Car",value:100})}}}),Q=K,W=a("8336"),X=a("1800"),Y=a("2fa4"),Z=Object(m["a"])(Q,U,z,!1,null,null,null),tt=Z.exports;p()(Z,{VBtn:W["a"],VIcon:f["a"],VListItem:b["a"],VListItemAction:X["a"],VListItemAvatar:g["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VSpacer:Y["a"]});var et={name:"MainAccounts",components:{Account:tt}},at=et,nt=a("b0af"),ot=a("62ad"),ct=a("a523"),st=a("0fd9"),rt=Object(m["a"])(at,J,G,!1,null,null,null),it=rt.exports;p()(rt,{VBtn:W["a"],VCard:nt["a"],VCol:ot["a"],VContainer:ct["a"],VIcon:f["a"],VRow:st["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"d-flex justify-space-between"},[a("v-card",{staticClass:"w100 mr-2 text-center"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card-title",{staticClass:"d-block pl-1 pr-1 subtitle-1 font-weight-medium"},[t._v("45000.00$")]),a("v-card-subtitle",[t._v("Income")])],1)],1)],1),a("v-card",{staticClass:"w100 ml-1 mr-1 text-center"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card-title",{staticClass:"d-block pl-1 pr-1 subtitle-1 font-weight-medium"},[t._v("4000.00$")]),a("v-card-subtitle",[t._v("Balance")])],1)],1)],1),a("v-card",{staticClass:"w100 ml-2 text-center"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card-title",{staticClass:"d-block pl-1 pr-1 subtitle-1 font-weight-medium"},[t._v("4000.00$")]),a("v-card-subtitle",[t._v("Spendings")])],1)],1)],1)],1)},ut=[],vt={name:"TotalBalance"},mt=vt,dt=(a("c6e9"),a("99d9")),pt=Object(m["a"])(mt,lt,ut,!1,null,"782b9798",null),ft=pt.exports;p()(pt,{VCard:nt["a"],VCardSubtitle:dt["b"],VCardTitle:dt["d"],VCol:ot["a"],VContainer:ct["a"],VRow:st["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pt-0 pb-0"},[a("v-progress-linear",{attrs:{rounded:"",value:"50",color:"green"}})],1)},gt=[],_t=a("8e36"),ht={},Ct=Object(m["a"])(ht,bt,gt,!1,null,null,null),Vt=Ct.exports;p()(Ct,{VContainer:ct["a"],VProgressLinear:_t["a"]});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"pa-1"},[a("v-card-title",[t._v("Top category")]),a("v-row",t._l(Object.keys(t.$store.state.categories),(function(e){return a("v-col",{key:e,staticClass:"pa-2 pt-1 pb-1",attrs:{cols:"12"}},[a("CategoryItem",{attrs:{name:e,icon:t.$store.state.categories[e].icon,color:t.$store.state.categories[e].color,total:t.$store.state.categories[e].total,last:15}})],1)})),1),a("v-row",[a("v-col",[a("v-btn",{staticClass:"w100",attrs:{text:""},on:{click:function(e){return t.$router.push("/categories")}}},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-format-list-bulleted-square")]),a("span",{staticClass:"mr-4"},[t._v("Manage categories")])],1)],1)],1)],1)],1)},wt=[],kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{class:t.color+"--text"},[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.name))]),a("v-list-item-subtitle",[t._v("Last: "+t._s(t.last.toFixed(2))+"$")])],1),a("v-list-item-action",[a("span",[t._v(t._s(t.total.toFixed(2))+"$")])])],1)],1)},$t=[],xt={props:{name:String,icon:String,color:String,last:Number,total:Number}},It=xt,At=Object(m["a"])(It,kt,$t,!1,null,null,null),St=At.exports;p()(At,{VIcon:f["a"],VListItem:b["a"],VListItemAction:X["a"],VListItemAvatar:g["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"]});var Ot={name:"TopCategory",components:{CategoryItem:St}},Bt=Ot,Lt=Object(m["a"])(Bt,yt,wt,!1,null,null,null),Mt=Lt.exports;p()(Lt,{VBtn:W["a"],VCard:nt["a"],VCardTitle:dt["d"],VCol:ot["a"],VContainer:ct["a"],VIcon:f["a"],VRow:st["a"]});var Tt={name:"Main",components:{MainAccounts:it,TotalBalance:ft,TopCategory:Mt,IncomeSpendingsRate:Vt}},jt=Tt,Et=(a("2179"),Object(m["a"])(jt,H,q,!1,null,"285abaa0",null)),Dt=Et.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categories"},[a("CategoriesMod")],1)},Pt=[],Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("ConfirmModal",{attrs:{show:t.showCDM,title:"Test",text:"Allow to delete this?",callbackSuccess:t.removeCategory,callbackFailure:t.removeCategory}}),a("v-card",{staticClass:"pa-1"},[a("v-card-title",[t._v(" Manage categories "),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[a("v-icon",[t._v("mdi-arrow-left")])],1)],1),a("v-col",{staticClass:"pa-2"},[a("v-btn",{staticClass:"w100",attrs:{depressed:""},on:{click:function(e){return t.$router.push("/addcategory")}}},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-playlist-plus")]),a("span",{staticClass:"mr-4"},[t._v("Add category")])],1)],1),a("v-row",t._l(Object.keys(t.$store.state.categories),(function(e){return a("v-col",{key:e,staticClass:"pa-2 pt-1 pb-1",attrs:{cols:"12"}},[a("CategoryItemMod",{attrs:{name:e,icon:t.$store.state.categories[e].icon,color:t.$store.state.categories[e].color,callbackDelete:t.showCategoryDeleteModal}})],1)})),1)],1),a("BackButton")],1)},Rt=[],Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{class:t.color+"--text"},[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.name))])],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""},on:{click:t.deleteCategory}},[a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)},qt=[],Jt={props:{name:String,icon:String,color:String,callbackDelete:Function},methods:{deleteCategory:function(){console.log(this.name),this.callbackDelete(this.name)}}},Gt=Jt,Ut=Object(m["a"])(Gt,Ht,qt,!1,null,null,null),zt=Ut.exports;p()(Ut,{VBtn:W["a"],VIcon:f["a"],VListItem:b["a"],VListItemAction:X["a"],VListItemAvatar:g["a"],VListItemContent:_["a"],VListItemTitle:_["c"]});var Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.title))]),a("v-card-text",[t._v(t._s(t.text))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.callbackFailure()}}},[t._v(" Disagree ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.callbackSuccess()}}},[t._v(" Agree ")])],1)],1)],1)},Qt=[],Wt={props:{title:String,text:String,callbackSuccess:Function,callbackFailure:Function,show:Boolean}},Xt=Wt,Yt=a("169a"),Zt=Object(m["a"])(Xt,Kt,Qt,!1,null,null,null),te=Zt.exports;p()(Zt,{VBtn:W["a"],VCard:nt["a"],VCardActions:dt["a"],VCardText:dt["c"],VCardTitle:dt["d"],VDialog:Yt["a"],VSpacer:Y["a"]});var ee=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex pt-3"},[a("v-spacer"),t._l(t.buttons,(function(e){return a("v-btn",{key:e.label,staticClass:"ml-2",on:{click:e.action}},[a("v-icon",[t._v(t._s(e.icon))]),t._v(" "+t._s(e.label)+" ")],1)}))],2)},ae=[],ne={props:{buttons:Array}},oe=ne,ce=(a("e6e8"),Object(m["a"])(oe,ee,ae,!1,null,"34e7939f",null)),se=ce.exports;p()(ce,{VBtn:W["a"],VIcon:f["a"],VSpacer:Y["a"]});var re={name:"TopCategory",components:{CategoryItemMod:zt,ConfirmModal:te,BackButton:se},data:function(){return{showCDM:!1}},methods:{showCategoryDeleteModal:function(){this.showCDM=!0},removeCategory:function(){console.log(123),this.showCDM=!1}}},ie=re,le=Object(m["a"])(ie,Ft,Rt,!1,null,null,null),ue=le.exports;p()(le,{VBtn:W["a"],VCard:nt["a"],VCardTitle:dt["d"],VCol:ot["a"],VContainer:ct["a"],VIcon:f["a"],VRow:st["a"],VSpacer:Y["a"]});var ve={name:"Categories",components:{CategoriesMod:ue}},me=ve,de=(a("2adc"),Object(m["a"])(me,Nt,Pt,!1,null,"2b17d5e0",null)),pe=de.exports,fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payments"},[a("AccountsMod")],1)},be=[],ge=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("ConfirmModal",{attrs:{show:t.showPDM,title:"Test",text:"Allow to delete this?",callbackSuccess:t.removeCategory,callbackFailure:t.removeCategory}}),a("v-card",{staticClass:"pa-1"},[a("v-card-title",[t._v(" Manage accounts "),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[a("v-icon",[t._v("mdi-arrow-left")])],1)],1),a("v-col",{staticClass:"pa-2"},[a("v-btn",{staticClass:"w100",attrs:{depressed:""}},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-playlist-plus")]),a("span",{staticClass:"mr-4"},[t._v("Add account")])],1)],1),a("v-row",t._l(Object.keys(t.$store.state.accounts),(function(e){return a("v-col",{key:e,staticClass:"pa-2 pt-1 pb-1",attrs:{cols:"12"}},[a("AccountMod",{attrs:{name:e,color:t.$store.state.accounts[e].color,icon:t.$store.state.accounts[e].icon,callbackDelete:t.showAccountDeleteModal,callbackEdit:t.showAccountDeleteModal}})],1)})),1)],1),a("BackButton")],1)},_e=[],he=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{class:t.color+"--text"},[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-subtitle",[t._v(t._s(t.name))]),a("v-list-item-title",[t._v("1000.00$")])],1),a("v-spacer"),a("v-list-item-action",{staticClass:"d-flex flex-row"},[a("v-btn",{class:t.color+"--text",attrs:{icon:""},on:{click:t.editAccount}},[a("v-icon",[t._v("mdi-pencil")])],1),a("v-btn",{attrs:{icon:""},on:{click:t.deleteAccount}},[a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)},Ce=[],Ve={props:{color:String,icon:String,name:String,callbackDelete:Function,callbackEdit:Function},methods:{deleteAccount:function(){this.callbackDelete(this.name)},editAccount:function(){this.callbackEdit(this.name)}}},ye=Ve,we=Object(m["a"])(ye,he,Ce,!1,null,null,null),ke=we.exports;p()(we,{VBtn:W["a"],VIcon:f["a"],VListItem:b["a"],VListItemAction:X["a"],VListItemAvatar:g["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VSpacer:Y["a"]});var $e={name:"TopCategory",components:{AccountMod:ke,ConfirmModal:te,BackButton:se},data:function(){return{showPDM:!1}},methods:{showAccountDeleteModal:function(){this.showPDM=!0},removeCategory:function(){console.log(123),this.showPDM=!1}}},xe=$e,Ie=Object(m["a"])(xe,ge,_e,!1,null,null,null),Ae=Ie.exports;p()(Ie,{VBtn:W["a"],VCard:nt["a"],VCardTitle:dt["d"],VCol:ot["a"],VContainer:ct["a"],VIcon:f["a"],VRow:st["a"],VSpacer:Y["a"]});var Se={name:"Payments",components:{AccountsMod:Ae}},Oe=Se,Be=(a("5a50"),Object(m["a"])(Oe,fe,be,!1,null,"3b421223",null)),Le=Be.exports,Me=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settings"},[a("AppSettings")],1)},Te=[],je=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"pa-1"},[a("v-card-title",[t._v(" App settings "),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[a("v-icon",[t._v("mdi-arrow-left")])],1)],1)],1),a("BackButton")],1)},Ee=[],De={name:"AppSettings",components:{BackButton:se}},Ne=De,Pe=Object(m["a"])(Ne,je,Ee,!1,null,null,null),Fe=Pe.exports;p()(Pe,{VBtn:W["a"],VCard:nt["a"],VCardTitle:dt["d"],VContainer:ct["a"],VIcon:f["a"],VSpacer:Y["a"]});var Re={name:"Settings",components:{AppSettings:Fe}},He=Re,qe=Object(m["a"])(He,Me,Te,!1,null,null,null),Je=qe.exports,Ge=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addcategory"},[a("AddCategory")],1)},Ue=[],ze=function(){var t=this,e=this,a=e.$createElement,n=e._self._c||a;return n("v-container",[n("v-card",{staticClass:"pa-1"},[n("v-card-title",[e._v(" Add category "),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$router.go(-1)}}},[n("v-icon",[e._v("mdi-arrow-left")])],1)],1),n("v-row",[n("v-col",{staticClass:"pa-2 pt-1 pb-1",attrs:{cols:"12"}},[n("v-list-item",[n("v-list-item-avatar",[n("v-btn",{attrs:{icon:""}},[n("v-icon",{style:"color: "+e.color+";"},[e._v("mdi-car")])],1)],1),n("v-list-item-content",[n("v-text-field",{style:"color: "+e.color+" !important;"})],1)],1)],1),n("v-col",{staticClass:"pa-2 pt-1 pb-1",attrs:{cols:"12"}},[n("v-color-picker",{staticClass:"w100",attrs:{"hide-canvas":"","hide-inputs":"","hide-mode-switch":"","show-swatches":""},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1)],1)],1),n("BackButton",{attrs:{buttons:[{label:"back",icon:"mdi-arrow-left",action:function(){return t.$router.go(-1)}},{label:"done",icon:"mdi-check",action:function(){return t.$store.dispatch("addCategory")}}]}})],1)},Ke=[],Qe={components:{BackButton:se},data:function(){return{color:"#ff4589"}}},We=Qe,Xe=(a("a7ce"),a("03a4")),Ye=a("8654"),Ze=Object(m["a"])(We,ze,Ke,!1,null,"2f71c592",null),ta=Ze.exports;p()(Ze,{VBtn:W["a"],VCard:nt["a"],VCardTitle:dt["d"],VCol:ot["a"],VColorPicker:Xe["a"],VContainer:ct["a"],VIcon:f["a"],VListItem:b["a"],VListItemAvatar:g["a"],VListItemContent:_["a"],VRow:st["a"],VSpacer:Y["a"],VTextField:Ye["a"]});var ea={name:"Categories",components:{AddCategory:ta}},aa=ea,na=(a("fb45"),Object(m["a"])(aa,Ge,Ue,!1,null,"2b9bd263",null)),oa=na.exports;n["a"].use(R["a"]);var ca=[{path:"/",name:"Main",component:Dt},{path:"/accounts",name:"Accounts",component:Le},{path:"/categories",name:"Categories",component:pe},{path:"/settings",name:"Settings",component:Je},{path:"/addcategory",name:"AddCategory",component:oa}],sa=new R["a"]({mode:"history",base:"/MoneyApp",routes:ca}),ra=sa,ia=a("2f62");n["a"].use(ia["a"]);var la=new ia["a"].Store({state:{accounts:{Cash:{icon:"mdi-currency-usd",color:"green",total:1e3},Swedbank:{icon:"mdi-credit-card",color:"orange",total:1e3},Revolut:{icon:"mdi-power-socket-eu",color:"indigo",total:1e3},Stocks:{icon:"mdi-plus",color:"amber",total:1e3}},categories:{Car:{icon:"mdi-car",color:"amber",total:123},House:{icon:"mdi-home",color:"purple",total:123},Pen:{icon:"mdi-pen",color:"lime",total:123},Pencil:{icon:"mdi-pencil",color:"blue",total:123}},history:[],settings:{theme:1},isNavBarOpen:!1},mutations:{changeCategoryTotal:function(t,e){var a=e.category,n=e.value;t.categories[a].total+=n},changeAccountTotal:function(t,e){var a=e.account,n=e.value;t.accounts[a].total+=n},addPaymentToHistory:function(t,e){var a=e.category,n=e.value;t.history.push({category:a,value:n,time:Date.now()})},setIsNavBarOpen:function(t,e){t.isNavBarOpen=e}},actions:{addAccount:function(t,e){var a=t.commit,n=t.state,o=e.account,c=e.category,s=e.value;a("changeCategoryTotal",{category:c,value:s}),a("changeAccountTotal",{account:o,value:s}),a("addPaymentToHistory",{category:n.categories[c],value:s})},addCategory:function(t,e){var a=t.commit,n=t.state,o=e.account,c=e.category,s=e.value;a("changeCategoryTotal",{category:c,value:s}),a("changeAccountTotal",{account:o,value:s}),a("addPaymentToHistory",{category:n.categories[c],value:s})}},modules:{}}),ua=a("f309");n["a"].use(ua["a"]);var va=new ua["a"]({});a("d5e8"),a("5363");n["a"].config.productionTip=!1,console.log("ENV",Object({NODE_ENV:"production",BASE_URL:""})),new n["a"]({router:ra,store:la,vuetify:va,render:function(t){return t(F)}}).$mount("#app")},"5a50":function(t,e,a){"use strict";var n=a("7fcc"),o=a.n(n);o.a},"66fb":function(t,e,a){},"6f08":function(t,e,a){},"71f0":function(t,e,a){"use strict";var n=a("10f4"),o=a.n(n);o.a},"7c55":function(t,e,a){"use strict";var n=a("6f08"),o=a.n(n);o.a},"7fcc":function(t,e,a){},"915e":function(t,e,a){t.exports=a.p+"img/avatar.14667d62.jpg"},a7ce:function(t,e,a){"use strict";var n=a("66fb"),o=a.n(n);o.a},b341:function(t,e,a){},b75b:function(t,e,a){},c6e9:function(t,e,a){"use strict";var n=a("41ae"),o=a.n(n);o.a},e6e8:function(t,e,a){"use strict";var n=a("b341"),o=a.n(n);o.a},fb45:function(t,e,a){"use strict";var n=a("069b"),o=a.n(n);o.a}});
//# sourceMappingURL=app.19357c5f.js.map