(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],v=0,d=[];v<s.length;v++)o=s[v],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1219:function(t,e,a){},"2adc":function(t,e,a){"use strict";var n=a("b75b"),r=a.n(n);r.a},"488f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("AppBar"),a("router-view")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",[n("v-app-bar-nav-icon",{on:{click:function(e){t.show=!t.show}}}),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-filter")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1),n("v-navigation-drawer",{attrs:{absolute:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-list",[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-avatar",[n("img",{attrs:{src:a("915e")}})]),n("v-list-item-content",[n("v-list-item-title",[t._v("4000.00$")]),n("v-list-item-subtitle",[t._v("Total balance")])],1)],1)],1),n("v-divider"),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",[n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.$router.push("/")}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("Home")])],1)],1)],1)],1)],1)},s=[],c={data:function(){return{show:!1}}},l=c,u=a("2877"),v=a("6544"),d=a.n(v),m=a("40dc"),p=a("5bc1"),f=a("8336"),b=a("ce7e"),C=a("132d"),h=a("8860"),V=a("da13"),_=a("8270"),g=a("5d23"),w=a("1baa"),y=a("34c3"),x=a("f774"),k=a("2fa4"),I=Object(u["a"])(l,o,s,!1,null,null,null),S=I.exports;d()(I,{VAppBar:m["a"],VAppBarNavIcon:p["a"],VBtn:f["a"],VDivider:b["a"],VIcon:C["a"],VList:h["a"],VListItem:V["a"],VListItemAvatar:_["a"],VListItemContent:g["a"],VListItemGroup:w["a"],VListItemIcon:y["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VNavigationDrawer:x["a"],VSpacer:k["a"]});var M={name:"App",components:{AppBar:S},mounted:function(){this.$vuetify.theme.dark=!0}},T=M,j=(a("7c55"),a("7496")),O=a("a75b"),$=Object(u["a"])(T,r,i,!1,null,null,null),L=$.exports;d()($,{VApp:j["a"],VContent:O["a"]});var A=a("8c4f"),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("TotalBalance"),a("SelectPaymentMethod"),a("TopCategory")],1)},D=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"pa-4"},[a("v-row",{staticClass:"text-center"},t._l(t.paymentMethods,(function(e){return a("v-col",{key:e.text,attrs:{cols:"6"}},[a("v-card",[a("v-card-title",{staticClass:"d-block"},[t._v("1000.00$")]),a("v-card-subtitle",{staticClass:"d-block"},[a("span",[t._v(t._s(e.name))])]),a("v-card-actions",{staticClass:"d-flex justify-center"},[a("v-btn",{staticClass:"w45 h50 green--text text--accent-4",attrs:{outlined:""}},[a("v-icon",[t._v("mdi-plus")])],1),a("v-btn",{staticClass:"w45 h50 deep-orange--text text--accent-4",attrs:{outlined:""}},[a("v-icon",[t._v("mdi-minus")])],1)],1)],1)],1)})),1),a("v-row",[a("v-col",[a("v-btn",{staticClass:"w100"},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-bank-plus")]),a("span",{staticClass:"mr-4"},[t._v("Add new payment method")])],1)],1)],1)],1)],1)},P=[],F={name:"SelectPaymentMethod",data:function(){return{paymentMethods:[{name:"Cash",icon:"mdi-currency-usd"},{name:"Swedbank",icon:"mdi-plus"},{name:"Revolut",icon:"mdi-plus"},{name:"Stocks",icon:"mdi-plus"}]}}},z=F,N=a("b0af"),R=a("99d9"),H=a("62ad"),J=a("a523"),G=a("0fd9"),q=Object(u["a"])(z,E,P,!1,null,null,null),K=q.exports;d()(q,{VBtn:f["a"],VCard:N["a"],VCardActions:R["a"],VCardSubtitle:R["b"],VCardTitle:R["d"],VCol:H["a"],VContainer:J["a"],VIcon:C["a"],VRow:G["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-row",[a("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[a("v-card-title",{staticClass:"d-block"},[t._v("4000.00$")]),a("v-card-subtitle",[t._v("Total balance")])],1),a("v-col",{staticClass:"sparkline-container",attrs:{cols:"6"}},[a("v-sparkline",{staticClass:"sparkline pr-5",attrs:{value:[1,2,3,100,0,35,23,90,30],gradient:["#00C853","#dd2c00"],smooth:10,padding:6,"line-width":10,"stroke-linecap":"round","gradient-direction":"top",fill:!1,type:"trend","auto-draw":"","show-labels":!1}})],1)],1)],1)],1)},U=[],W={name:"TotalBalance"},X=W,Y=(a("9496"),a("7f2e")),Z=Object(u["a"])(X,Q,U,!1,null,"c2c5e164",null),tt=Z.exports;d()(Z,{VCard:N["a"],VCardSubtitle:R["b"],VCardTitle:R["d"],VCol:H["a"],VContainer:J["a"],VRow:G["a"],VSparkline:Y["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-card-title",[t._v("Top category")]),a("CategoryItem",{attrs:{name:"Car",icon:"mdi-car",total:123,last:15}}),a("CategoryItem",{attrs:{name:"House",icon:"mdi-home",total:310,last:65.29}}),a("CategoryItem",{attrs:{name:"Pizza",icon:"mdi-pizza",total:228.69,last:2.09}}),a("v-col",[a("v-btn",{staticClass:"w100",on:{click:function(e){return t.$router.push("/categories")}}},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-playlist-edit")]),a("span",{staticClass:"mr-4"},[t._v("Manage categories")])],1)],1)],1)],1)},at=[],nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.name))]),a("v-list-item-subtitle",[t._v("Last: "+t._s(t.last.toFixed(2))+"$")])],1),a("v-list-item-action",[a("span",[t._v(t._s(t.total.toFixed(2))+"$")])])],1)],1)],1)},rt=[],it=(a("a9e3"),{props:{name:String,icon:String,last:Number,total:Number}}),ot=it,st=a("1800"),ct=Object(u["a"])(ot,nt,rt,!1,null,null,null),lt=ct.exports;d()(ct,{VCard:N["a"],VContainer:J["a"],VIcon:C["a"],VListItem:V["a"],VListItemAction:st["a"],VListItemAvatar:_["a"],VListItemContent:g["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"]});var ut={name:"TopCategory",components:{CategoryItem:lt}},vt=ut,dt=Object(u["a"])(vt,et,at,!1,null,null,null),mt=dt.exports;d()(dt,{VBtn:f["a"],VCard:N["a"],VCardTitle:R["d"],VCol:H["a"],VContainer:J["a"],VIcon:C["a"]});var pt={name:"Main",components:{SelectPaymentMethod:K,TotalBalance:tt,TopCategory:mt}},ft=pt,bt=(a("ba4d"),Object(u["a"])(ft,B,D,!1,null,"2dba72e6",null)),Ct=bt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categories"},[a("CategoriesMod")],1)},Vt=[],_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("ConfirmModal",{attrs:{show:t.showCDM,title:"Test",text:"Allow to delete this?",callbackSuccess:t.removeCategory,callbackFailure:t.removeCategory}}),a("v-card",[a("v-card-title",[t._v("Manage categories")]),a("v-col",[a("v-btn",{staticClass:"w100",on:{click:function(e){return t.$router.push("Categories")}}},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-playlist-plus")]),a("span",{staticClass:"mr-4"},[t._v("Add category")])],1)],1),a("CategoryItemMod",{attrs:{name:"Car",icon:"mdi-car",callbackDelete:t.showCategoryDeleteModal}})],1)],1)},gt=[],wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.name))])],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""},on:{click:t.deleteCategory}},[a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)],1)},yt=[],xt=(a("b0c0"),{props:{name:String,icon:String,callbackDelete:Function},methods:{deleteCategory:function(){console.log(this.name),this.callbackDelete(this.name)}}}),kt=xt,It=Object(u["a"])(kt,wt,yt,!1,null,null,null),St=It.exports;d()(It,{VBtn:f["a"],VCard:N["a"],VContainer:J["a"],VIcon:C["a"],VListItem:V["a"],VListItemAction:st["a"],VListItemAvatar:_["a"],VListItemContent:g["a"],VListItemTitle:g["c"]});var Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.title))]),a("v-card-text",[t._v(t._s(t.text))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.callbackFailure()}}},[t._v(" Disagree ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.callbackSuccess()}}},[t._v(" Agree ")])],1)],1)],1)},Tt=[],jt={props:{title:String,text:String,callbackSuccess:Function,callbackFailure:Function,show:Boolean}},Ot=jt,$t=a("169a"),Lt=Object(u["a"])(Ot,Mt,Tt,!1,null,null,null),At=Lt.exports;d()(Lt,{VBtn:f["a"],VCard:N["a"],VCardActions:R["a"],VCardText:R["c"],VCardTitle:R["d"],VDialog:$t["a"],VSpacer:k["a"]});var Bt={name:"TopCategory",components:{CategoryItemMod:St,ConfirmModal:At},data:function(){return{showCDM:!1}},methods:{showCategoryDeleteModal:function(){this.showCDM=!0},removeCategory:function(){console.log(123),this.showCDM=!1}}},Dt=Bt,Et=Object(u["a"])(Dt,_t,gt,!1,null,null,null),Pt=Et.exports;d()(Et,{VBtn:f["a"],VCard:N["a"],VCardTitle:R["d"],VCol:H["a"],VContainer:J["a"],VIcon:C["a"]});var Ft={name:"Categories",components:{CategoriesMod:Pt}},zt=Ft,Nt=(a("2adc"),Object(u["a"])(zt,ht,Vt,!1,null,"2b17d5e0",null)),Rt=Nt.exports;n["a"].use(A["a"]);var Ht=[{path:"/",name:"Main",component:Ct},{path:"/categories",name:"Categories",component:Rt}],Jt=new A["a"]({mode:"history",base:"/",routes:Ht}),Gt=Jt,qt=a("2f62");n["a"].use(qt["a"]);var Kt=new qt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Qt=a("f309");n["a"].use(Qt["a"]);var Ut=new Qt["a"]({});a("d5e8"),a("5363");n["a"].config.productionTip=!1,new n["a"]({router:Gt,store:Kt,vuetify:Ut,render:function(t){return t(L)}}).$mount("#app")},"6f08":function(t,e,a){},"7c55":function(t,e,a){"use strict";var n=a("6f08"),r=a.n(n);r.a},"915e":function(t,e,a){t.exports=a.p+"img/avatar.14667d62.jpg"},9496:function(t,e,a){"use strict";var n=a("1219"),r=a.n(n);r.a},b75b:function(t,e,a){},ba4d:function(t,e,a){"use strict";var n=a("488f"),r=a.n(n);r.a}});
//# sourceMappingURL=app.145f22ea.js.map