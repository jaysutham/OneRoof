(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac687d9c"],{"169a":function(t,e,n){"use strict";var i=n("5530"),a=n("2909"),o=n("ade3"),r=(n("a9e3"),n("498a"),n("caad"),n("2532"),n("7db0"),n("368e"),n("480e")),s=n("4ad4"),c=n("b848"),l=n("75eb"),u=n("e707"),d=n("e4d3"),h=n("21be"),v=n("f2e7"),f=n("a293"),m=n("58df"),p=n("d9bd"),g=n("80d2"),b=Object(m["a"])(s["a"],c["a"],l["a"],u["a"],d["a"],h["a"],v["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o["a"])(t,"v-dialog--active",this.isActive),Object(o["a"])(t,"v-dialog--persistent",this.persistent),Object(o["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(o["a"])(t,"v-dialog--scrollable",this.scrollable),Object(o["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["p"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(a["a"])(n).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(r["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"16b7":function(t,e,n){"use strict";n("a9e3");var i=n("2b0e");e["a"]=i["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var i=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},i)}}})},"21be":function(t,e,n){"use strict";var i=n("2909"),a=(n("99af"),n("caad"),n("2532"),n("2b0e")),o=n("80d2");e["a"]=a["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(o["n"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,n=[this.stackMinZIndex,Object(o["n"])(e)],a=[].concat(Object(i["a"])(document.getElementsByClassName("v-menu__content--active")),Object(i["a"])(document.getElementsByClassName("v-dialog__content--active"))),r=0;r<a.length;r++)t.includes(a[r])||n.push(Object(o["n"])(a[r]));return Math.max.apply(Math,n)}}})},"2fa4":function(t,e,n){"use strict";n("20f6");var i=n("80d2");e["a"]=Object(i["g"])("spacer","div","v-spacer")},"368e":function(t,e,n){},"480e":function(t,e,n){"use strict";n("7db0");var i=n("7560");e["a"]=i["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:i["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},"4ad4":function(t,e,n){"use strict";var i=n("53ca"),a=(n("caad"),n("b64b"),n("b0c0"),n("16b7")),o=n("f2e7"),r=n("58df"),s=n("80d2"),c=n("d9bd"),l=Object(r["a"])(a["a"],o["a"]);e["a"]=l.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(i["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(s["m"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(c["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,n=t;e<n.length;e++){var i=n[e];this.getActivator().addEventListener(i,this.listeners[i])}}},genActivator:function(){var t=Object(s["l"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var n=t.getActivator(e);n&&n.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var n=this.internalActivator?this.$el:document;e="string"===typeof this.activator?n.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var i=this.activatorNode[0].componentInstance;e=i&&i.$options.mixins&&i.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?i.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(s["l"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,n=t;e<n.length;e++){var i=n[e];this.activatorElement.removeEventListener(i,this.listeners[i])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"4ec9":function(t,e,n){"use strict";var i=n("6d61"),a=n("6566");t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},6566:function(t,e,n){"use strict";var i=n("9bf2").f,a=n("7c73"),o=n("e2cc"),r=n("0366"),s=n("19aa"),c=n("2266"),l=n("7dd0"),u=n("2626"),d=n("83ab"),h=n("f183").fastKey,v=n("69f3"),f=v.set,m=v.getterFor;t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,i){s(t,u,e),f(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=i&&c(i,t[l],{that:t,AS_ENTRIES:n})})),v=m(e),p=function(t,e,n){var i,a,o=v(t),r=g(t,e);return r?r.value=n:(o.last=r={index:a=h(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=r),i&&(i.next=r),d?o.size++:t.size++,"F"!==a&&(o.index[a]=r)),t},g=function(t,e){var n,i=v(t),a=h(e);if("F"!==a)return i.index[a];for(n=i.first;n;n=n.next)if(n.key==e)return n};return o(u.prototype,{clear:function(){var t=this,e=v(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),i=g(e,t);if(i){var a=i.next,o=i.previous;delete n.index[i.index],i.removed=!0,o&&(o.next=a),a&&(a.previous=o),n.first==i&&(n.first=a),n.last==i&&(n.last=o),d?n.size--:e.size--}return!!i},forEach:function(t){var e,n=v(this),i=r(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),o(u.prototype,n?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),d&&i(u.prototype,"size",{get:function(){return v(this).size}}),u},setStrong:function(t,e,n){var i=e+" Iterator",a=m(e),o=m(i);l(t,e,(function(t,e){f(this,{type:i,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"6d61":function(t,e,n){"use strict";var i=n("23e7"),a=n("da84"),o=n("94ca"),r=n("6eeb"),s=n("f183"),c=n("2266"),l=n("19aa"),u=n("861d"),d=n("d039"),h=n("1c7e"),v=n("d44e"),f=n("7156");t.exports=function(t,e,n){var m=-1!==t.indexOf("Map"),p=-1!==t.indexOf("Weak"),g=m?"set":"add",b=a[t],y=b&&b.prototype,x=b,O={},A=function(t){var e=y[t];r(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(p&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return p&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(p&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},j=o(t,"function"!=typeof b||!(p||y.forEach&&!d((function(){(new b).entries().next()}))));if(j)x=n.getConstructor(e,t,m,g),s.REQUIRED=!0;else if(o(t,!0)){var k=new x,w=k[g](p?{}:-0,1)!=k,C=d((function(){k.has(1)})),E=h((function(t){new b(t)})),$=!p&&d((function(){var t=new b,e=5;while(e--)t[g](e,e);return!t.has(-0)}));E||(x=e((function(e,n){l(e,x,t);var i=f(new b,e,x);return void 0!=n&&c(n,i[g],{that:i,AS_ENTRIES:m}),i})),x.prototype=y,y.constructor=x),(C||$)&&(A("delete"),A("has"),m&&A("get")),($||w)&&A(g),p&&y.clear&&delete y.clear}return O[t]=x,i({global:!0,forced:x!=b},O),v(x,t),p||n.setStrong(x,t,m),x}},"75eb":function(t,e,n){"use strict";var i=n("ade3"),a=n("53ca"),o=(n("159b"),n("9d65")),r=n("80d2"),s=n("58df"),c=n("d9bd");function l(t){var e=Object(a["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]=Object(s["a"])(o["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:l},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var n=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,n)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(r["k"])(this.$vnode,"context.$options._scopeId");return t&&Object(i["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(c["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},c66d:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Hello, "+t._s(this.username))]),n("button",{on:{click:t.logout}},[t._v("Logout")]),n("UpdateUser",{on:{setProfilePageUsername:t.changeUsername}})],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary",dark:""}},"v-btn",a,!1),i),[t._v(" Update your Info ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("User Profile")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Update your username",hint:"What do your housemates call you?",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Update Email Address (coming soon)",hint:"This feature is upcoming"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Update Password (coming soon)",hint:"This feature is upcoming"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.updateUsername}},[t._v(" Save ")])],1)],1)],1)],1)},r=[],s={name:"UpdateUser",data:function(){return{dialog:!1,username:""}},methods:{updateUsername:function(){this.$store.commit("setUsername",this.username),this.$emit("setProfilePageUsername",this.username),this.username="",this.dialog=!1}}},c=s,l=n("2877"),u=n("6544"),d=n.n(u),h=n("8336"),v=n("b0af"),f=n("99d9"),m=n("ade3"),p=n("5530"),g=(n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),b=n("d9f7"),y=n("80d2"),x=["sm","md","lg","xl"],O=function(){return x.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),A=function(){return x.reduce((function(t,e){return t["offset"+Object(y["u"])(e)]={type:[String,Number],default:null},t}),{})}(),j=function(){return x.reduce((function(t,e){return t["order"+Object(y["u"])(e)]={type:[String,Number],default:null},t}),{})}(),k={col:Object.keys(O),offset:Object.keys(A),order:Object.keys(j)};function w(t,e,n){var i=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");i+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var C=new Map,E=g["a"].extend({name:"v-col",functional:!0,props:Object(p["a"])(Object(p["a"])(Object(p["a"])(Object(p["a"])({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},A),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,i=e.data,a=e.children,o=(e.parent,"");for(var r in n)o+=String(n[r]);var s=C.get(o);return s||function(){var t,e;for(e in s=[],k)k[e].forEach((function(t){var i=n[t],a=w(e,t,i);a&&s.push(a)}));var i=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!i||!n.cols},Object(m["a"])(t,"col-".concat(n.cols),n.cols),Object(m["a"])(t,"offset-".concat(n.offset),n.offset),Object(m["a"])(t,"order-".concat(n.order),n.order),Object(m["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),C.set(o,s)}(),t(n.tag,Object(b["a"])(i,{class:s}),a)}}),$=n("a523"),S=n("169a"),N=(n("2532"),n("99af"),["sm","md","lg","xl"]),T=["start","end","center"];function _(t,e){return N.reduce((function(n,i){return n[t+Object(y["u"])(i)]=e(),n}),{})}var D=function(t){return[].concat(T,["baseline","stretch"]).includes(t)},I=_("align",(function(){return{type:String,default:null,validator:D}})),B=function(t){return[].concat(T,["space-between","space-around"]).includes(t)},U=_("justify",(function(){return{type:String,default:null,validator:B}})),V=function(t){return[].concat(T,["space-between","space-around","stretch"]).includes(t)},M=_("alignContent",(function(){return{type:String,default:null,validator:V}})),L={align:Object.keys(I),justify:Object.keys(U),alignContent:Object.keys(M)},P={align:"align",justify:"justify",alignContent:"align-content"};function z(t,e,n){var i=P[t];if(null!=n){if(e){var a=e.replace(t,"");i+="-".concat(a)}return i+="-".concat(n),i.toLowerCase()}}var F=new Map,Z=g["a"].extend({name:"v-row",functional:!0,props:Object(p["a"])(Object(p["a"])(Object(p["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:D}},I),{},{justify:{type:String,default:null,validator:B}},U),{},{alignContent:{type:String,default:null,validator:V}},M),render:function(t,e){var n=e.props,i=e.data,a=e.children,o="";for(var r in n)o+=String(n[r]);var s=F.get(o);return s||function(){var t,e;for(e in s=[],L)L[e].forEach((function(t){var i=n[t],a=z(e,t,i);a&&s.push(a)}));s.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(m["a"])(t,"align-".concat(n.align),n.align),Object(m["a"])(t,"justify-".concat(n.justify),n.justify),Object(m["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),F.set(o,s)}(),t(n.tag,Object(b["a"])(i,{staticClass:"row",class:s}),a)}}),W=n("2fa4"),q=n("8654"),R=Object(l["a"])(c,o,r,!1,null,null,null),H=R.exports;d()(R,{VBtn:h["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:E,VContainer:$["a"],VDialog:S["a"],VRow:Z,VSpacer:W["a"],VTextField:q["a"]});var K={name:"Profile",data:function(){return{username:"",email:""}},components:{UpdateUser:H},mounted:function(){this.username=this.$store.state.user.username,this.email=this.$store.state.user.email},methods:{logout:function(){this.$store.dispatch("logoutUser")},changeUsername:function(t){this.username=t,this.$store.dispatch("changeUsername",{email:this.email,newUsername:t})}}},G=K,J=Object(l["a"])(G,i,a,!1,null,null,null);e["default"]=J.exports},e4d3:function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})}}]);
//# sourceMappingURL=chunk-ac687d9c.364254f5.js.map