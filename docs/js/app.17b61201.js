(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],u=0,v=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&v.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var m=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0996":function(t,e,a){"use strict";var n=a("a8e9"),o=a.n(n);o.a},"2ad2":function(t,e,a){},"2adc":function(t,e,a){"use strict";var n=a("b75b"),o=a.n(n);o.a},"41ae":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("AppBar"),a("router-view")],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",[n("v-app-bar-nav-icon",{on:{click:function(e){t.show=!t.show}}})],1),n("v-navigation-drawer",{attrs:{absolute:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-list",[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-avatar",[n("img",{attrs:{src:a("915e")}})]),n("v-list-item-content",[n("v-list-item-title",[t._v("4000.00$")]),n("v-list-item-subtitle",[t._v("Total balance")])],1)],1),n("v-divider"),t._l(Object.keys(t.$store.state.payments),(function(e){return n("PaymentNavItem",{key:e,attrs:{name:e,color:t.$store.state.payments[e].color,icon:t.$store.state.payments[e].icon,total:t.$store.state.payments[e].total}})}))],2),n("v-divider"),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",t._l(t.pages,(function(e){return n("v-list-item",{key:e.src,attrs:{link:""},on:{click:function(a){return t.$router.push(e.src)}}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1)],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("v-icon",{class:t.color+"--text"},[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-subtitle",[t._v(t._s(t.name))]),a("v-list-item-title",[t._v(t._s(t.total.toFixed(2))+"$")])],1)],1)},l=[],m=(a("a9e3"),{props:{icon:String,color:String,name:String,total:Number}}),u=m,v=a("2877"),d=a("6544"),p=a.n(d),f=a("132d"),b=a("da13"),g=a("8270"),y=a("5d23"),h=Object(v["a"])(u,c,l,!1,null,null,null),_=h.exports;p()(h,{VIcon:f["a"],VListItem:b["a"],VListItemAvatar:g["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"]});var C={data:function(){return{show:!1,pages:[{name:"Home",icon:"mdi-home",src:"/"},{name:"Manage payment methods ",icon:"mdi-bank",src:"/payments"},{name:"Manage categories",icon:"mdi-format-list-bulleted-square",src:"/categories"},{name:"Settings",icon:"mdi-cogs",src:"/settings"}]}},components:{PaymentNavItem:_}},V=C,w=(a("c01f"),a("40dc")),x=a("5bc1"),I=a("ce7e"),k=a("8860"),$=a("1baa"),S=a("34c3"),M=a("f774"),L=Object(v["a"])(V,r,i,!1,null,"4bbc05fe",null),P=L.exports;p()(L,{VAppBar:w["a"],VAppBarNavIcon:x["a"],VDivider:I["a"],VIcon:f["a"],VList:k["a"],VListItem:b["a"],VListItemAvatar:g["a"],VListItemContent:y["a"],VListItemGroup:$["a"],VListItemIcon:S["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VNavigationDrawer:M["a"]});var O={name:"App",components:{AppBar:P},mounted:function(){this.$vuetify.theme.dark=1===this.$store.state.settings.theme}},j=O,T=(a("7c55"),a("7496")),D=a("a75b"),E=Object(v["a"])(j,o,s,!1,null,null,null),A=E.exports;p()(E,{VApp:T["a"],VContent:D["a"]});var B=a("8c4f"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("TotalBalance"),a("IncomeSpendingsRate"),a("SelectPaymentMethod"),a("TopCategory")],1)},N=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"pa-1"},[a("v-row",{staticClass:"text-center"},t._l(Object.keys(t.$store.state.payments),(function(e){return a("v-col",{key:e,staticClass:"pa-2",attrs:{cols:"12"}},[a("Payment",{attrs:{color:t.$store.state.payments[e].color,name:e,icon:t.$store.state.payments[e].icon,total:t.$store.state.payments[e].total}})],1)})),1),a("v-row",[a("v-col",[a("v-btn",{staticClass:"w100",attrs:{text:""},on:{click:function(e){return t.$router.push("/payments")}}},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-bank")]),a("span",{staticClass:"mr-4"},[t._v("Manage payment methods")])],1)],1)],1)],1)],1)},H=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{class:t.color+"--text"},[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-subtitle",[t._v(t._s(t.name))]),a("v-list-item-title",[t._v(t._s(t.total.toFixed(2))+"$")])],1),a("v-spacer"),a("v-list-item-action",[a("v-btn",{class:t.color+"--text",attrs:{depressed:""},on:{click:t.addPayment}},[a("v-icon",[t._v("mdi-plus")])],1)],1)],1)],1)},J=[],G=(a("b0c0"),{props:{color:String,name:String,icon:String,total:Number},methods:{addPayment:function(){this.$store.dispatch("addPayment",{payment:this.name,category:"Car",value:100})}}}),U=G,z=a("8336"),K=a("1800"),Q=a("2fa4"),W=Object(v["a"])(U,q,J,!1,null,null,null),X=W.exports;p()(W,{VBtn:z["a"],VIcon:f["a"],VListItem:b["a"],VListItemAction:K["a"],VListItemAvatar:g["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VSpacer:Q["a"]});var Y={name:"SelectPaymentMethod",components:{Payment:X}},Z=Y,tt=a("b0af"),et=a("62ad"),at=a("a523"),nt=a("0fd9"),ot=Object(v["a"])(Z,R,H,!1,null,null,null),st=ot.exports;p()(ot,{VBtn:z["a"],VCard:tt["a"],VCol:et["a"],VContainer:at["a"],VIcon:f["a"],VRow:nt["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"d-flex justify-space-between"},[a("v-card",{staticClass:"w100 mr-2 text-center"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card-title",{staticClass:"d-block pl-1 pr-1 subtitle-1 font-weight-medium"},[t._v("45000.00$")]),a("v-card-subtitle",[t._v("Income")])],1)],1)],1),a("v-card",{staticClass:"w100 ml-1 mr-1 text-center"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card-title",{staticClass:"d-block pl-1 pr-1 subtitle-1 font-weight-medium"},[t._v("4000.00$")]),a("v-card-subtitle",[t._v("Balance")])],1)],1)],1),a("v-card",{staticClass:"w100 ml-2 text-center"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card-title",{staticClass:"d-block pl-1 pr-1 subtitle-1 font-weight-medium"},[t._v("4000.00$")]),a("v-card-subtitle",[t._v("Spendings")])],1)],1)],1)],1)},it=[],ct={name:"TotalBalance"},lt=ct,mt=(a("c6e9"),a("99d9")),ut=Object(v["a"])(lt,rt,it,!1,null,"782b9798",null),vt=ut.exports;p()(ut,{VCard:tt["a"],VCardSubtitle:mt["b"],VCardTitle:mt["d"],VCol:et["a"],VContainer:at["a"],VRow:nt["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pt-0 pb-0"},[a("v-progress-linear",{attrs:{rounded:"",value:"50",color:"green"}})],1)},pt=[],ft=a("8e36"),bt={},gt=Object(v["a"])(bt,dt,pt,!1,null,null,null),yt=gt.exports;p()(gt,{VContainer:at["a"],VProgressLinear:ft["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"pa-1"},[a("v-card-title",[t._v("Top category")]),a("v-row",t._l(Object.keys(t.$store.state.categories),(function(e){return a("v-col",{key:e,staticClass:"pa-2 pt-1 pb-1",attrs:{cols:"12"}},[a("CategoryItem",{attrs:{name:e,icon:t.$store.state.categories[e].icon,color:t.$store.state.categories[e].color,total:t.$store.state.categories[e].total,last:15}})],1)})),1),a("v-row",[a("v-col",[a("v-btn",{staticClass:"w100",attrs:{text:""},on:{click:function(e){return t.$router.push("/categories")}}},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-format-list-bulleted-square")]),a("span",{staticClass:"mr-4"},[t._v("Manage categories")])],1)],1)],1)],1)],1)},_t=[],Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{class:t.color+"--text"},[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.name))]),a("v-list-item-subtitle",[t._v("Last: "+t._s(t.last.toFixed(2))+"$")])],1),a("v-list-item-action",[a("span",[t._v(t._s(t.total.toFixed(2))+"$")])])],1)],1)},Vt=[],wt={props:{name:String,icon:String,color:String,last:Number,total:Number}},xt=wt,It=Object(v["a"])(xt,Ct,Vt,!1,null,null,null),kt=It.exports;p()(It,{VIcon:f["a"],VListItem:b["a"],VListItemAction:K["a"],VListItemAvatar:g["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"]});var $t={name:"TopCategory",components:{CategoryItem:kt}},St=$t,Mt=Object(v["a"])(St,ht,_t,!1,null,null,null),Lt=Mt.exports;p()(Mt,{VBtn:z["a"],VCard:tt["a"],VCardTitle:mt["d"],VCol:et["a"],VContainer:at["a"],VIcon:f["a"],VRow:nt["a"]});var Pt={name:"Main",components:{SelectPaymentMethod:st,TotalBalance:vt,TopCategory:Lt,IncomeSpendingsRate:yt}},Ot=Pt,jt=(a("0996"),Object(v["a"])(Ot,F,N,!1,null,"c513154c",null)),Tt=jt.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categories"},[a("CategoriesMod")],1)},Et=[],At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("ConfirmModal",{attrs:{show:t.showCDM,title:"Test",text:"Allow to delete this?",callbackSuccess:t.removeCategory,callbackFailure:t.removeCategory}}),a("v-card",{staticClass:"pa-1"},[a("v-card-title",[t._v("Manage categories")]),a("v-col",{staticClass:"pa-2"},[a("v-btn",{staticClass:"w100",attrs:{depressed:""}},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-playlist-plus")]),a("span",{staticClass:"mr-4"},[t._v("Add category")])],1)],1),a("v-row",t._l(Object.keys(t.$store.state.categories),(function(e){return a("v-col",{key:e,staticClass:"pa-2 pt-1 pb-1",attrs:{cols:"12"}},[a("CategoryItemMod",{attrs:{name:e,icon:t.$store.state.categories[e].icon,color:t.$store.state.categories[e].color,callbackDelete:t.showCategoryDeleteModal}})],1)})),1)],1)],1)},Bt=[],Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{class:t.color+"--text"},[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.name))])],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""},on:{click:t.deleteCategory}},[a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)},Nt=[],Rt={props:{name:String,icon:String,color:String,callbackDelete:Function},methods:{deleteCategory:function(){console.log(this.name),this.callbackDelete(this.name)}}},Ht=Rt,qt=Object(v["a"])(Ht,Ft,Nt,!1,null,null,null),Jt=qt.exports;p()(qt,{VBtn:z["a"],VIcon:f["a"],VListItem:b["a"],VListItemAction:K["a"],VListItemAvatar:g["a"],VListItemContent:y["a"],VListItemTitle:y["c"]});var Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.title))]),a("v-card-text",[t._v(t._s(t.text))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.callbackFailure()}}},[t._v(" Disagree ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.callbackSuccess()}}},[t._v(" Agree ")])],1)],1)],1)},Ut=[],zt={props:{title:String,text:String,callbackSuccess:Function,callbackFailure:Function,show:Boolean}},Kt=zt,Qt=a("169a"),Wt=Object(v["a"])(Kt,Gt,Ut,!1,null,null,null),Xt=Wt.exports;p()(Wt,{VBtn:z["a"],VCard:tt["a"],VCardActions:mt["a"],VCardText:mt["c"],VCardTitle:mt["d"],VDialog:Qt["a"],VSpacer:Q["a"]});var Yt={name:"TopCategory",components:{CategoryItemMod:Jt,ConfirmModal:Xt},data:function(){return{showCDM:!1}},methods:{showCategoryDeleteModal:function(){this.showCDM=!0},removeCategory:function(){console.log(123),this.showCDM=!1}}},Zt=Yt,te=Object(v["a"])(Zt,At,Bt,!1,null,null,null),ee=te.exports;p()(te,{VBtn:z["a"],VCard:tt["a"],VCardTitle:mt["d"],VCol:et["a"],VContainer:at["a"],VIcon:f["a"],VRow:nt["a"]});var ae={name:"Categories",components:{CategoriesMod:ee}},ne=ae,oe=(a("2adc"),Object(v["a"])(ne,Dt,Et,!1,null,"2b17d5e0",null)),se=oe.exports,re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payments"},[a("PaymentMethodMod")],1)},ie=[],ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("ConfirmModal",{attrs:{show:t.showPDM,title:"Test",text:"Allow to delete this?",callbackSuccess:t.removeCategory,callbackFailure:t.removeCategory}}),a("v-card",{staticClass:"pa-1"},[a("v-card-title",[t._v("Manage payment methods")]),a("v-col",{staticClass:"pa-2"},[a("v-btn",{staticClass:"w100",attrs:{depressed:""}},[a("v-icon",{staticClass:"mr-4"},[t._v("mdi-playlist-plus")]),a("span",{staticClass:"mr-4"},[t._v("Add payment method")])],1)],1),a("v-row",t._l(Object.keys(t.$store.state.payments),(function(e){return a("v-col",{key:e,staticClass:"pa-2 pt-1 pb-1",attrs:{cols:"12"}},[a("PaymentMod",{attrs:{name:e,color:t.$store.state.payments[e].color,icon:t.$store.state.payments[e].icon,callbackDelete:t.showPaymentDeleteModal,callbackEdit:t.showPaymentDeleteModal}})],1)})),1)],1)],1)},le=[],me=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{class:t.color+"--text"},[t._v(t._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-subtitle",[t._v(t._s(t.name))]),a("v-list-item-title",[t._v("1000.00$")])],1),a("v-spacer"),a("v-list-item-action",{staticClass:"d-flex flex-row"},[a("v-btn",{class:t.color+"--text",attrs:{icon:""},on:{click:t.editCategory}},[a("v-icon",[t._v("mdi-pencil")])],1),a("v-btn",{attrs:{icon:""},on:{click:t.deleteCategory}},[a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)},ue=[],ve={props:{color:String,icon:String,name:String,callbackDelete:Function,callbackEdit:Function},methods:{deleteCategory:function(){this.callbackDelete(this.name)},editCategory:function(){this.callbackEdit(this.name)}}},de=ve,pe=Object(v["a"])(de,me,ue,!1,null,null,null),fe=pe.exports;p()(pe,{VBtn:z["a"],VIcon:f["a"],VListItem:b["a"],VListItemAction:K["a"],VListItemAvatar:g["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VSpacer:Q["a"]});var be={name:"TopCategory",components:{PaymentMod:fe,ConfirmModal:Xt},data:function(){return{showPDM:!1}},methods:{showPaymentDeleteModal:function(){this.showPDM=!0},removeCategory:function(){console.log(123),this.showPDM=!1}}},ge=be,ye=Object(v["a"])(ge,ce,le,!1,null,null,null),he=ye.exports;p()(ye,{VBtn:z["a"],VCard:tt["a"],VCardTitle:mt["d"],VCol:et["a"],VContainer:at["a"],VIcon:f["a"],VRow:nt["a"]});var _e={name:"Payments",components:{PaymentMethodMod:he}},Ce=_e,Ve=(a("dd64"),Object(v["a"])(Ce,re,ie,!1,null,"0790ef1e",null)),we=Ve.exports,xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settings"})},Ie=[],ke={name:"Settings"},$e=ke,Se=Object(v["a"])($e,xe,Ie,!1,null,null,null),Me=Se.exports;n["a"].use(B["a"]);var Le=[{path:"/",name:"Main",component:Tt},{path:"/payments",name:"Payments",component:we},{path:"/categories",name:"Categories",component:se},{path:"/settings",name:"Settings",component:Me}],Pe=new B["a"]({mode:"history",base:"/MoneyApp",routes:Le}),Oe=Pe,je=a("2f62");n["a"].use(je["a"]);var Te=new je["a"].Store({state:{payments:{Cash:{icon:"mdi-currency-usd",color:"green",total:1e3},Swedbank:{icon:"mdi-credit-card",color:"orange",total:1e3},Revolut:{icon:"mdi-power-socket-eu",color:"indigo",total:1e3},Stocks:{icon:"mdi-plus",color:"amber",total:1e3}},categories:{Car:{icon:"mdi-car",color:"amber",total:123},House:{icon:"mdi-home",color:"purple",total:123},Pen:{icon:"mdi-pen",color:"lime",total:123},Pencil:{icon:"mdi-pencil",color:"blue",total:123}},history:[],settings:{theme:0}},mutations:{changeCategoryTotal:function(t,e){var a=e.category,n=e.value;t.categories[a].total+=n},changePaymentsTotal:function(t,e){var a=e.payment,n=e.value;t.payments[a].total+=n},addPaymentToHistory:function(t,e){var a=e.category,n=e.value;t.history.push({category:a,value:n,time:Date.now()})}},actions:{addPayment:function(t,e){var a=t.commit,n=t.state,o=e.payment,s=e.category,r=e.value;a("changeCategoryTotal",{category:s,value:r}),a("changePaymentsTotal",{payment:o,value:r}),a("addPaymentToHistory",{category:n.categories[s],value:r})}},modules:{}}),De=a("f309");n["a"].use(De["a"]);var Ee=new De["a"]({});a("d5e8"),a("5363");n["a"].config.productionTip=!1,console.log("ENV",Object({NODE_ENV:"production",BASE_URL:""})),new n["a"]({router:Oe,store:Te,vuetify:Ee,render:function(t){return t(A)}}).$mount("#app")},"6f08":function(t,e,a){},"7c55":function(t,e,a){"use strict";var n=a("6f08"),o=a.n(n);o.a},"8ea6":function(t,e,a){},"915e":function(t,e,a){t.exports=a.p+"img/avatar.14667d62.jpg"},a8e9:function(t,e,a){},b75b:function(t,e,a){},c01f:function(t,e,a){"use strict";var n=a("8ea6"),o=a.n(n);o.a},c6e9:function(t,e,a){"use strict";var n=a("41ae"),o=a.n(n);o.a},dd64:function(t,e,a){"use strict";var n=a("2ad2"),o=a.n(n);o.a}});
//# sourceMappingURL=app.17b61201.js.map