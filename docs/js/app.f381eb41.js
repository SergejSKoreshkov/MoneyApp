(function(t){function e(e){for(var n,r,l=e[0],c=e[1],s=e[2],u=0,d=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);v&&v(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var v=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2ad2":function(t,e,a){},"2adc":function(t,e,a){"use strict";var n=a("b75b"),i=a.n(n);i.a},"488f":function(t,e,a){},"48ca":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("AppBar"),a("router-view")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",[n("v-app-bar-nav-icon",{on:{click:function(e){t.show=!t.show}}})],1),n("v-navigation-drawer",{attrs:{absolute:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-list",[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-avatar",[n("img",{attrs:{src:a("915e")}})]),n("v-list-item-content",[n("v-list-item-title",[t._v("4000.00$")]),n("v-list-item-subtitle",[t._v("Total balance")])],1)],1)],1),n("v-divider"),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",[n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.$router.push("/")}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("Home")])],1),n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.$router.push("/")}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-bank")])],1),n("v-list-item-title",[t._v("Manage payment methods")])],1),n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.$router.push("/")}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-playlist-edit")])],1),n("v-list-item-title",[t._v("Manage categories")])],1)],1)],1)],1)],1)},l=[],c={data:function(){return{show:!1}}},s=c,v=(a("8f63"),a("2877")),u=a("6544"),d=a.n(u),m=a("40dc"),p=a("5bc1"),f=a("ce7e"),b=a("132d"),h=a("8860"),C=a("da13"),V=a("8270"),_=a("5d23"),g=a("1baa"),y=a("34c3"),w=a("f774"),k=Object(v["a"])(s,r,l,!1,null,"580f4d2b",null),M=k.exports;d()(k,{VAppBar:m["a"],VAppBarNavIcon:p["a"],VDivider:f["a"],VIcon:b["a"],VList:h["a"],VListItem:C["a"],VListItemAvatar:V["a"],VListItemContent:_["a"],VListItemGroup:g["a"],VListItemIcon:y["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VNavigationDrawer:w["a"]});var I={name:"App",components:{AppBar:M},mounted:function(){this.$vuetify.theme.dark=!0}},x=I,S=(a("7c55"),a("7496")),L=a("a75b"),D=Object(v["a"])(x,i,o,!1,null,null,null),P=D.exports;d()(D,{VApp:S["a"],VContent:L["a"]});var $=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("TotalBalance"),a("SelectPaymentMethod"),a("TopCategory")],1)},T=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"pa-4"},[a("v-row",{staticClass:"text-center"},t._l(t.paymentMethods,(function(t){return a("v-col",{key:t.text,attrs:{cols:"12"}},[a("Payment",{attrs:{color:t.color,name:t.name,icon:t.icon}})],1)})),1),a("v-row",[a("v-col",[a("v-btn",{staticClass:"w100",attrs:{text:""},on:{click:function(e){return t.$router.push("/payments")}}},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-bank")]),a("span",{staticClass:"mr-4"},[t._v("Manage payment methods")])],1)],1)],1)],1)],1)},A=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{attrs:{flat:""}},[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{class:t.color+"--text"},[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-subtitle",[t._v(t._s(t.name))]),a("v-list-item-title",[t._v("1000.00$")])],1),a("v-spacer"),a("v-list-item-action",[a("v-btn",{class:t.color+"--text",attrs:{outlined:""}},[a("v-icon",[t._v("mdi-plus")])],1)],1)],1)],1),a("v-divider")],1)},B=[],F={props:{color:String,name:String,icon:String}},N=F,z=a("8336"),R=a("b0af"),H=a("1800"),J=a("2fa4"),G=Object(v["a"])(N,E,B,!1,null,null,null),U=G.exports;d()(G,{VBtn:z["a"],VCard:R["a"],VDivider:f["a"],VIcon:b["a"],VListItem:C["a"],VListItemAction:H["a"],VListItemAvatar:V["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VSpacer:J["a"]});var q={name:"SelectPaymentMethod",components:{Payment:U},data:function(){return{paymentMethods:[{name:"Cash",icon:"mdi-currency-usd",color:"green"},{name:"Swedbank",icon:"mdi-credit-card",color:"orange"},{name:"Revolut",icon:"mdi-power-socket-eu",color:"indigo"},{name:"Stocks",icon:"mdi-plus",color:"amber"}]}}},K=q,Q=a("62ad"),W=a("a523"),X=a("0fd9"),Y=Object(v["a"])(K,j,A,!1,null,null,null),Z=Y.exports;d()(Y,{VBtn:z["a"],VCard:R["a"],VCol:Q["a"],VContainer:W["a"],VIcon:b["a"],VRow:X["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-row",[a("v-col",{staticClass:"total-balance text-center",attrs:{cols:"12"}},[a("v-sparkline",{staticClass:"sparkline pr-5",attrs:{value:[1,2,3,100,0,35,23,90,30],gradient:t.$vuetify.theme.dark?["#333"]:["#eee"],smooth:6,padding:15,"line-width":8,"stroke-linecap":"round","gradient-direction":"top",fill:!1,type:"trend","auto-draw":"","show-labels":!1}}),a("div",{staticClass:"front-panel"},[a("v-card-title",{staticClass:"d-block display-1"},[t._v("4000.00$")]),a("v-card-subtitle",[t._v("Total balance")])],1)],1)],1)],1)],1)},et=[],at={name:"TotalBalance"},nt=at,it=(a("d237"),a("99d9")),ot=a("7f2e"),rt=Object(v["a"])(nt,tt,et,!1,null,"b48bd3a0",null),lt=rt.exports;d()(rt,{VCard:R["a"],VCardSubtitle:it["b"],VCardTitle:it["d"],VCol:Q["a"],VContainer:W["a"],VRow:X["a"],VSparkline:ot["a"]});var ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-card-title",[t._v("Top category")]),a("CategoryItem",{attrs:{name:"Car",icon:"mdi-car",total:123,last:15}}),a("CategoryItem",{attrs:{name:"House",icon:"mdi-home",total:310,last:65.29}}),a("CategoryItem",{attrs:{name:"Pizza",icon:"mdi-pizza",total:228.69,last:2.09}}),a("v-col",[a("v-btn",{staticClass:"w100",attrs:{text:""},on:{click:function(e){return t.$router.push("/categories")}}},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-playlist-edit")]),a("span",{staticClass:"mr-4"},[t._v("Manage categories")])],1)],1)],1)],1)},st=[],vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{attrs:{flat:""}},[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.name))]),a("v-list-item-subtitle",[t._v("Last: "+t._s(t.last.toFixed(2))+"$")])],1),a("v-list-item-action",[a("span",[t._v(t._s(t.total.toFixed(2))+"$")])])],1)],1),a("v-divider")],1)},ut=[],dt=(a("a9e3"),{props:{name:String,icon:String,last:Number,total:Number}}),mt=dt,pt=Object(v["a"])(mt,vt,ut,!1,null,null,null),ft=pt.exports;d()(pt,{VCard:R["a"],VContainer:W["a"],VDivider:f["a"],VIcon:b["a"],VListItem:C["a"],VListItemAction:H["a"],VListItemAvatar:V["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"]});var bt={name:"TopCategory",components:{CategoryItem:ft}},ht=bt,Ct=Object(v["a"])(ht,ct,st,!1,null,null,null),Vt=Ct.exports;d()(Ct,{VBtn:z["a"],VCard:R["a"],VCardTitle:it["d"],VCol:Q["a"],VContainer:W["a"],VIcon:b["a"]});var _t={name:"Main",components:{SelectPaymentMethod:Z,TotalBalance:lt,TopCategory:Vt}},gt=_t,yt=(a("ba4d"),Object(v["a"])(gt,O,T,!1,null,"2dba72e6",null)),wt=yt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categories"},[a("CategoriesMod")],1)},Mt=[],It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("ConfirmModal",{attrs:{show:t.showCDM,title:"Test",text:"Allow to delete this?",callbackSuccess:t.removeCategory,callbackFailure:t.removeCategory}}),a("v-card",[a("v-card-title",[t._v("Manage categories")]),a("v-col",[a("v-btn",{staticClass:"w100",attrs:{depressed:""}},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-playlist-plus")]),a("span",{staticClass:"mr-4"},[t._v("Add category")])],1)],1),a("CategoryItemMod",{attrs:{name:"Car",icon:"mdi-car",callbackDelete:t.showCategoryDeleteModal}})],1)],1)},xt=[],St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{attrs:{flat:""}},[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.name))])],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""},on:{click:t.deleteCategory}},[a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1),a("v-divider")],1)},Lt=[],Dt=(a("b0c0"),{props:{name:String,icon:String,callbackDelete:Function},methods:{deleteCategory:function(){console.log(this.name),this.callbackDelete(this.name)}}}),Pt=Dt,$t=Object(v["a"])(Pt,St,Lt,!1,null,null,null),Ot=$t.exports;d()($t,{VBtn:z["a"],VCard:R["a"],VContainer:W["a"],VDivider:f["a"],VIcon:b["a"],VListItem:C["a"],VListItemAction:H["a"],VListItemAvatar:V["a"],VListItemContent:_["a"],VListItemTitle:_["c"]});var Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.title))]),a("v-card-text",[t._v(t._s(t.text))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.callbackFailure()}}},[t._v(" Disagree ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.callbackSuccess()}}},[t._v(" Agree ")])],1)],1)],1)},jt=[],At={props:{title:String,text:String,callbackSuccess:Function,callbackFailure:Function,show:Boolean}},Et=At,Bt=a("169a"),Ft=Object(v["a"])(Et,Tt,jt,!1,null,null,null),Nt=Ft.exports;d()(Ft,{VBtn:z["a"],VCard:R["a"],VCardActions:it["a"],VCardText:it["c"],VCardTitle:it["d"],VDialog:Bt["a"],VSpacer:J["a"]});var zt={name:"TopCategory",components:{CategoryItemMod:Ot,ConfirmModal:Nt},data:function(){return{showCDM:!1}},methods:{showCategoryDeleteModal:function(){this.showCDM=!0},removeCategory:function(){console.log(123),this.showCDM=!1}}},Rt=zt,Ht=Object(v["a"])(Rt,It,xt,!1,null,null,null),Jt=Ht.exports;d()(Ht,{VBtn:z["a"],VCard:R["a"],VCardTitle:it["d"],VCol:Q["a"],VContainer:W["a"],VIcon:b["a"]});var Gt={name:"Categories",components:{CategoriesMod:Jt}},Ut=Gt,qt=(a("2adc"),Object(v["a"])(Ut,kt,Mt,!1,null,"2b17d5e0",null)),Kt=qt.exports,Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payments"},[a("PaymentMethodMod")],1)},Wt=[],Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("ConfirmModal",{attrs:{show:t.showPDM,title:"Test",text:"Allow to delete this?",callbackSuccess:t.removeCategory,callbackFailure:t.removeCategory}}),a("v-card",[a("v-card-title",[t._v("Manage payment methods")]),a("v-col",[a("v-btn",{staticClass:"w100",attrs:{depressed:""}},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-playlist-plus")]),a("span",{staticClass:"mr-4"},[t._v("Add payment method")])],1)],1),a("PaymentMod",{attrs:{name:"Swedbank",icon:"mdi-credit-card",color:"orange",callbackDelete:t.showPaymentDeleteModal,callbackEdit:t.showPaymentDeleteModal}}),a("PaymentMod",{attrs:{name:"Cash",icon:"mdi-currency-usd",color:"green",callbackDelete:t.showPaymentDeleteModal,callbackEdit:t.showPaymentDeleteModal}})],1)],1)},Yt=[],Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{attrs:{flat:""}},[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{class:t.color+"--text"},[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-subtitle",[t._v(t._s(t.name))]),a("v-list-item-title",[t._v("1000.00$")])],1),a("v-spacer"),a("v-list-item-action",{staticClass:"d-flex flex-row"},[a("v-btn",{class:t.color+"--text",attrs:{icon:""},on:{click:t.editCategory}},[a("v-icon",[t._v("mdi-pencil")])],1),a("v-btn",{attrs:{icon:""},on:{click:t.deleteCategory}},[a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1),a("v-divider")],1)},te=[],ee={props:{color:String,icon:String,name:String,callbackDelete:Function,callbackEdit:Function},methods:{deleteCategory:function(){this.callbackDelete(this.name)},editCategory:function(){this.callbackEdit(this.name)}}},ae=ee,ne=Object(v["a"])(ae,Zt,te,!1,null,null,null),ie=ne.exports;d()(ne,{VBtn:z["a"],VCard:R["a"],VContainer:W["a"],VDivider:f["a"],VIcon:b["a"],VListItem:C["a"],VListItemAction:H["a"],VListItemAvatar:V["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VSpacer:J["a"]});var oe={name:"TopCategory",components:{PaymentMod:ie,ConfirmModal:Nt},data:function(){return{showPDM:!1}},methods:{showPaymentDeleteModal:function(){this.showPDM=!0},removeCategory:function(){console.log(123),this.showPDM=!1}}},re=oe,le=Object(v["a"])(re,Xt,Yt,!1,null,null,null),ce=le.exports;d()(le,{VBtn:z["a"],VCard:R["a"],VCardTitle:it["d"],VCol:Q["a"],VContainer:W["a"],VIcon:b["a"]});var se={name:"Payments",components:{PaymentMethodMod:ce}},ve=se,ue=(a("dd64"),Object(v["a"])(ve,Qt,Wt,!1,null,"0790ef1e",null)),de=ue.exports;n["a"].use($["a"]);var me=[{path:"/",name:"Main",component:wt},{path:"/payments",name:"Payments",component:de},{path:"/categories",name:"Categories",component:Kt}],pe=new $["a"]({mode:"history",base:"/MoneyApp",routes:me}),fe=pe,be=a("2f62");n["a"].use(be["a"]);var he=new be["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Ce=a("f309");n["a"].use(Ce["a"]);var Ve=new Ce["a"]({});a("d5e8"),a("5363");n["a"].config.productionTip=!1,console.log("ENV",Object({NODE_ENV:"production",BASE_URL:""})),new n["a"]({router:fe,store:he,vuetify:Ve,render:function(t){return t(P)}}).$mount("#app")},5929:function(t,e,a){},"6f08":function(t,e,a){},"7c55":function(t,e,a){"use strict";var n=a("6f08"),i=a.n(n);i.a},"8f63":function(t,e,a){"use strict";var n=a("5929"),i=a.n(n);i.a},"915e":function(t,e,a){t.exports=a.p+"img/avatar.14667d62.jpg"},b75b:function(t,e,a){},ba4d:function(t,e,a){"use strict";var n=a("488f"),i=a.n(n);i.a},d237:function(t,e,a){"use strict";var n=a("48ca"),i=a.n(n);i.a},dd64:function(t,e,a){"use strict";var n=a("2ad2"),i=a.n(n);i.a}});
//# sourceMappingURL=app.f381eb41.js.map