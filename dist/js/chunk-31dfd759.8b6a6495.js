(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31dfd759"],{"169a":function(t,e,i){"use strict";var n=i("5530"),s=i("2909"),o=i("ade3"),a=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),c=i("b848"),l=i("75eb"),u=i("e707"),h=i("e4d3"),d=i("21be"),f=i("f2e7"),v=i("a293"),p=i("58df"),m=i("d9bd"),g=i("80d2"),b=Object(p["a"])(r["a"],c["a"],l["a"],u["a"],h["a"],d["a"],f["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:v["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o["a"])(t,"v-dialog--active",this.isActive),Object(o["a"])(t,"v-dialog--persistent",this.persistent),Object(o["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(o["a"])(t,"v-dialog--scrollable",this.scrollable),Object(o["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["p"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(s["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(a["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"16b7":function(t,e,i){"use strict";i("a9e3");var n=i("2b0e");e["a"]=n["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}})},"21be":function(t,e,i){"use strict";var n=i("2909"),s=(i("99af"),i("caad"),i("2532"),i("2b0e")),o=i("80d2");e["a"]=s["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(o["n"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(o["n"])(e)],s=[].concat(Object(n["a"])(document.getElementsByClassName("v-menu__content--active")),Object(n["a"])(document.getElementsByClassName("v-dialog__content--active"))),a=0;a<s.length;a++)t.includes(s[a])||i.push(Object(o["n"])(s[a]));return Math.max.apply(Math,i)}}})},"2fa4":function(t,e,i){"use strict";i("20f6");var n=i("80d2");e["a"]=Object(n["g"])("spacer","div","v-spacer")},"368e":function(t,e,i){},"480e":function(t,e,i){"use strict";i("7db0");var n=i("7560");e["a"]=n["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:n["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},"4ad4":function(t,e,i){"use strict";var n=i("53ca"),s=(i("caad"),i("b64b"),i("b0c0"),i("16b7")),o=i("f2e7"),a=i("58df"),r=i("80d2"),c=i("d9bd"),l=Object(a["a"])(s["a"],o["a"]);e["a"]=l.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(n["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(r["m"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(c["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(r["l"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var i=t.getActivator(e);i&&i.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var i=this.internalActivator?this.$el:document;e="string"===typeof this.activator?i.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var n=this.activatorNode[0].componentInstance;e=n&&n.$options.mixins&&n.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?n.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(r["l"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"6ca7":function(t,e,i){},"75eb":function(t,e,i){"use strict";var n=i("ade3"),s=i("53ca"),o=(i("159b"),i("9d65")),a=i("80d2"),r=i("58df"),c=i("d9bd");function l(t){var e=Object(s["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]=Object(r["a"])(o["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:l},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var i=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,i)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(a["k"])(this.$vnode,"context.$options._scopeId");return t&&Object(n["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(c["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},b1e6:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todo-page brown lighten-4",attrs:{id:"todo-page-container"}},[i("v-text-field",{staticClass:"pa-2",attrs:{outlined:"",label:"New Todo","append-icon":"mdi-pencil-plus-outline",color:"black lighten-3",clearable:"","hide-details":""},on:{"click:append":t.addTodo,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}},model:{value:t.newTodoMessage,callback:function(e){t.newTodoMessage=e},expression:"newTodoMessage"}}),t.todos.length?i("v-list",{staticClass:"pt-0 brown lighten-4",attrs:{"two-line":"",flat:""}},t._l(t.todos,(function(e){return i("div",{key:e.id,staticClass:"brown lighten-4",attrs:{id:"todo-container"}},[i("v-list-item",{class:{"green lighten-4":e.complete},on:{click:function(i){return t.completeTodo(e.id)}}},[i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":e.complete,color:"green"}})],1),i("v-list-item-content",[i("v-list-item-title",{class:{"text-decoration-line-through":e.complete}},[t._v(" "+t._s(e.todo)+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(e.victimid)+" ")])],1),i("v-list-item-action",{},[i("v-icon",{attrs:{icon:"",color:"brown lighten-3"},on:{click:function(i){return i.stopPropagation(),t.setState(e)}}},[t._v(" mdi-delete")]),i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-icon",t._g(t._b({staticClass:"pt-2",attrs:{color:"brown lighten-3"}},"v-icon",s,!1),n),[t._v("mdi-account-plus")])]}}],null,!0)},[i("v-list",t._l(t.users,(function(n){return i("v-list-item",{key:n.id,attrs:{value:e}},[i("v-list-item-title",{on:{click:function(i){return t.setAssignee(n,e)}}},[t._v(" "+t._s(n.username)+" ")])],1)})),1)],1)],1)],1)],1)})),0):i("div",[i("div",{staticClass:"brown lighten-4",attrs:{id:"no-todo-bg"}},[t._v(" NO TODOS ")])]),t.modals.deleteTodo?i("DeleteModal",{attrs:{todo:t.currentId},on:{closeModal:function(e){t.modals.deleteTodo=!1},clicked:t.deleteFromModal}}):t._e()],1)},s=[],o=i("1da1"),a=(i("4de4"),i("96cf"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{"max-width":"290",value:!0}},[i("v-card",{staticClass:"brown lighten-5"},[i("v-card-title",{staticClass:"headline"},[t._v(" Delete Todo ")]),i("v-card-text",[t._v("Would you like to delete this todo?")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green lighten-0",text:""},on:{click:function(e){return t.$emit("closeModal")}}},[t._v(" CANCEL ")]),i("v-btn",{attrs:{color:"green lighten-0",text:""},on:{click:t.onClickDeleteButton}},[t._v(" DELETE ")])],1)],1)],1)}),r=[],c={name:"Test",data:function(){return{}},methods:{onClickDeleteButton:function(){this.$emit("closeModal"),this.$emit("clicked")}}},l=c,u=i("2877"),h=i("6544"),d=i.n(h),f=i("8336"),v=i("b0af"),p=i("99d9"),m=i("169a"),g=i("2fa4"),b=Object(u["a"])(l,a,r,!1,null,null,null),x=b.exports;d()(b,{VBtn:f["a"],VCard:v["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VDialog:m["a"],VSpacer:g["a"]});var y={name:"Home",components:{DeleteModal:x},data:function(){return{newTodoMessage:"",todos:"",modals:{deleteTodo:!1},currentId:"",selectedVictim:"",users:this.$store.state.usersInSameHouse}},mounted:function(){this.todos=this.$store.state.todos},methods:{addTodo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={todo:t.newTodoMessage,date:Date.now(),victimid:"Everyone",creatorid:t.$store.state.user.username,complete:!1,house_key:t.$store.state.user.house_keys[0]},e.next=3,t.$store.dispatch("addTodo",i);case 3:return t.todos.push(i),e.next=6,t.$store.dispatch("getTodos",t.$store.state.user.house_keys[0]);case 6:t.newTodoMessage=e.sent,t.todos=t.$store.state.todos;case 8:case"end":return e.stop()}}),e)})))()},completeTodo:function(t){var e=this.todos.filter((function(e){return e.id===t}))[0];e.complete=!e.complete},deleteTodo:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return console.log("THIS IS THE ID",t),e.$store.state.todos=e.$store.state.filter((function(e){return e.id!==t})),e.todos=e.$store.state.todos,i.next=5,e.$store.dispatch("deleteTodo",t);case 5:case"end":return i.stop()}}),i)})))()},setState:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:console.log("abracadabra...",t.id),e.modals.deleteTodo=!0,e.currentId=t.id;case 3:case"end":return i.stop()}}),i)})))()},deleteFromModal:function(){var t=this;this.$store.dispatch("deleteTodo",this.currentId).then((function(){console.log("getting updated to do list..."),t.$store.dispatch("getTodos",t.$store.state.user.house_keys[0])})).then((function(){t.todos=t.$store.state.todos})).then((function(){t.todos=t.todos.filter((function(e){return e.id!==t.currentId}))}))},setAssignee:function(t,e){var i=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s={id:e.id,victimid:t.username,house_key:e.house_key},n.next=3,i.$store.dispatch("updateTodoVictim",s);case 3:return n.next=5,i.$store.dispatch("getTodos",s.house_key);case 5:console.log("YOOOOOOO LINE 189!!!"),i.todos=i.$store.state.todos;case 7:case"end":return n.stop()}}),n)})))()}}},A=y,O=i("15fd"),w=i("5530"),k=(i("d3b7"),i("25f0"),i("6ca7"),i("ec29"),i("9d26")),T=i("c37a"),C=i("5607"),$=i("2b0e"),I=$["a"].extend({name:"rippleable",directives:{ripple:C["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),j=i("80d2"),S=$["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:j["h"]}}}),D=i("58df");function E(t){t.preventDefault()}var _=Object(D["a"])(T["a"],I,S).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=T["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:E},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:E},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),M=_.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(w["a"])(Object(w["a"])({},T["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(O["a"])(t,["title"]));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(k["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(w["a"])(Object(w["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),L=i("132d"),N=i("8860"),B=i("da13"),V=i("1800"),W=i("5d23"),F=i("ade3"),H=i("2909"),Y=(i("a9e3"),i("7db0"),i("a630"),i("3ca3"),i("99af"),i("498a"),i("caad"),i("2532"),i("ee6f"),i("480e")),R=i("4ad4"),P=i("16b7"),z=i("b848"),X=i("75eb"),Z=i("fe6c"),q=i("21be"),K=Object(D["a"])(q["a"],Z["a"],R["a"]),J=K.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),s=0;if(s+=this.left?i-(n-t.width):i,this.offsetX){var o=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));s+=this.left?-o:t.width}return this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),s},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(j["f"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(j["f"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,s=this.dimensions.content.height,o=t+s,a=i<o;return a&&this.offsetOverflow&&n.top>s?t=this.pageYOffset+(n.top-s):a&&!this.allowOverflow?t=i-s-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=R["a"].options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(w["a"])({},this.dimensions.activator),content:Object(w["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){t.$refs.content&&(e.content=t.measure(t.$refs.content)),t.dimensions=e}))}}}),U=i("e4d3"),G=i("a236"),Q=i("f2e7"),tt=i("7560"),et=i("a293"),it=i("dc22"),nt=i("d9bd"),st=Object(D["a"])(z["a"],P["a"],X["a"],J,U["a"],G["a"],Q["a"],tt["a"]),ot=st.extend({name:"v-menu",directives:{ClickOutside:et["a"],Resize:it["a"]},provide:function(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(j["f"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":Object(j["f"])(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return Object(j["f"])(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(j["f"])(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(j["f"])(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?Object(j["f"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=i.offsetTop-i.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(nt["e"])("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-n-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==j["p"].tab){if(t.keyCode===j["p"].down)this.nextTile();else if(t.keyCode===j["p"].up)this.prevTile();else if(t.keyCode===j["p"].end)this.lastTile();else if(t.keyCode===j["p"].home)this.firstTile();else{if(t.keyCode!==j["p"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=R["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?Object(w["a"])(Object(w["a"])({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=J.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(H["a"])(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:Object(w["a"])(Object(w["a"])({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:Object(w["a"])(Object(w["a"])(Object(w["a"])({},this.rootThemeClasses),this.roundedClasses),{},Object(F["a"])({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var i=e.target;i.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile:function(){var t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile:function(){var t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown:function(t){var e=this;if(t.keyCode===j["p"].esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[j["p"].up,j["p"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this,i={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",i,[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(Y["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}}),at=i("8654"),rt=Object(u["a"])(A,n,s,!1,null,null,null);e["default"]=rt.exports;d()(rt,{VCheckbox:M,VIcon:L["a"],VList:N["a"],VListItem:B["a"],VListItemAction:V["a"],VListItemContent:W["a"],VListItemSubtitle:W["b"],VListItemTitle:W["c"],VMenu:ot,VTextField:at["a"]})},e4d3:function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},ec29:function(t,e,i){},ee6f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-31dfd759.8b6a6495.js.map