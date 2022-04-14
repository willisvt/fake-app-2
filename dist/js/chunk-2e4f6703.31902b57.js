(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e4f6703"],{"2ee4":function(t,a,e){!function(a,e){t.exports=e()}("undefined"!=typeof self&&self,(function(){return function(t){function a(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,a),s.l=!0,s.exports}var e={};return a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},a.p="",a(a.s=7)}([function(t,a){t.exports=function(t,a,e,i,s,n){var r,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(r=t,o=t.default);var l,d="function"==typeof o?o.options:o;if(a&&(d.render=a.render,d.staticRenderFns=a.staticRenderFns,d._compiled=!0),e&&(d.functional=!0),s&&(d._scopeId=s),n?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=l):i&&(l=i),l){var u=d.functional,b=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(t,a){return l.call(a),b(t,a)}):d.beforeCreate=b?[].concat(b,l):[l]}return{esModule:r,exports:o,options:d}}},function(t,a,e){"use strict";var i=e(2),s=e(4),n=e(14);a.a={name:"form-wizard",components:{WizardButton:i.a,WizardStep:s.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,a){this.$emit("on-change",t,a),this.$emit("update:startIndex",a)},addTab:function(t){var a=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+a,this.tabs.splice(a,0,t),a<this.activeTabIndex+1&&(this.maxStep=a,this.changeTab(this.activeTabIndex+1,a))},removeTab:function(t){var a=this.tabs,e=a.indexOf(t);e>-1&&(e===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),e<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),a.splice(e,1))},reset:function(){this.maxStep=0,this.tabs.forEach((function(t){t.checked=!1})),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach((function(t){t.checked=!0}))},navigateToTab:function(t){var a=this,e=t>this.activeTabIndex;if(t<=this.maxStep){var i=function i(){e&&t-a.activeTabIndex>1?(a.changeTab(a.activeTabIndex,a.activeTabIndex+1),a.beforeTabChange(a.activeTabIndex,i)):(a.changeTab(a.activeTabIndex,t),a.afterTabChange(a.activeTabIndex))};e?this.beforeTabChange(this.activeTabIndex,i):(this.setValidationError(null),i())}return t<=this.maxStep},nextTab:function(){var t=this,a=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,a)},prevTab:function(){var t=this,a=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,a):a()},focusNextTab:function(){var t=Object(n.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var a=this.tabs[t+1];a.checked&&Object(n.a)(a.tabId)}},focusPrevTab:function(){var t=Object(n.b)(this.tabs);if(-1!==t&&t>0){var a=this.tabs[t-1].tabId;Object(n.a)(a)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,a){var e=this;if(this.setValidationError(null),Object(n.c)(t))this.setLoading(!0),t.then((function(t){e.setLoading(!1);var i=!0===t;e.executeBeforeChange(i,a)})).catch((function(t){e.setLoading(!1),e.setValidationError(t)}));else{var i=!0===t;this.executeBeforeChange(i,a)}},executeBeforeChange:function(t,a){this.$emit("on-validate",t,this.activeTabIndex),t?a():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,a){if(!this.loading){var e=this.tabs[t];if(e&&void 0!==e.beforeChange){var i=e.beforeChange();this.validateBeforeChange(i,a)}else a()}},afterTabChange:function(t){if(!this.loading){var a=this.tabs[t];a&&void 0!==a.afterChange&&a.afterChange()}},changeTab:function(t,a){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this.tabs[t],s=this.tabs[a];return i&&(i.active=!1),s&&(s.active=!0),e&&this.activeTabIndex!==a&&this.emitTabChange(t,a),this.activeTabIndex=a,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var a=-1,e=this.tabs.find((function(e,i){var s=e.route===t;return s&&(a=i),s}));if(e&&!e.active){var i=a>this.activeTabIndex;this.navigateToTab(a,i)}},deactivateTabs:function(){this.tabs.forEach((function(t){t.active=!1}))},activateTab:function(t){this.deactivateTabs();var a=this.tabs[t];a&&(a.active=!0,a.checked=!0,this.tryChangeRoute(a))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,a,e){"use strict";function i(t){e(10)}var s=e(3),n=e(11),r=e(0),o=i,c=r(s.a,n.a,!1,o,null,null);a.a=c.exports},function(t,a,e){"use strict";a.a={}},function(t,a,e){"use strict";function i(t){e(12)}var s=e(5),n=e(13),r=e(0),o=i,c=r(s.a,n.a,!1,o,null,null);a.a=c.exports},function(t,a,e){"use strict";a.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,a,e){"use strict";a.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(8),s=e(16),n=e(2),r=e(4);e.d(a,"FormWizard",(function(){return i.a})),e.d(a,"TabContent",(function(){return s.a})),e.d(a,"WizardButton",(function(){return n.a})),e.d(a,"WizardStep",(function(){return r.a}));var o={install:function(t){t.component("form-wizard",i.a),t.component("tab-content",s.a),t.component("wizard-button",n.a),t.component("wizard-step",r.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),a.default=o},function(t,a,e){"use strict";function i(t){e(9)}var s=e(1),n=e(15),r=e(0),o=i,c=r(s.a,n.a,!1,o,null,null);a.a=c.exports},function(t,a){},function(t,a){},function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;return(t._self._c||a)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},s=[],n={render:i,staticRenderFns:s};a.a=n},function(t,a){},function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{class:{active:t.tab.active}},[e("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[e("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[e("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?e("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?e("i",{staticClass:"wizard-icon",class:t.tab.icon}):e("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?e("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():e("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[e("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},s=[],n={render:i,staticRenderFns:s};a.a=n},function(t,a,e){"use strict";function i(){return document.activeElement.id}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=i();return t.findIndex((function(t){return t.tabId===a}))}function n(t){document.getElementById(t).focus()}function r(t){return t.then&&"function"==typeof t.then}a.b=s,a.a=n,a.c=r},function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(a){return"button"in a||!t._k(a.keyCode,"right",39,a.key)?"button"in a&&2!==a.button?null:void t.focusNextTab(a):null},function(a){return"button"in a||!t._k(a.keyCode,"left",37,a.key)?"button"in a&&0!==a.button?null:void t.focusPrevTab(a):null}]}},[e("div",{staticClass:"wizard-header"},[t._t("title",[e("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),e("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():e("div",{staticClass:"wizard-progress-with-circle"},[e("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),e("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,(function(a,i){return t._t("step",[e("wizard-step",{attrs:{tab:a,"step-size":t.stepSize,transition:t.transition,index:i},nativeOn:{click:function(a){t.navigateToTab(i)},keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.navigateToTab(i)}}})],{tab:a,index:i,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})}))],2),t._v(" "),e("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():e("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[e("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?e("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.prevTab(a)}}},[t._t("prev",[e("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),e("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?e("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.nextTab(a)}}},[t._t("finish",[e("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):e("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.nextTab(a)}}},[t._t("next",[e("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},s=[],n={render:i,staticRenderFns:s};a.a=n},function(t,a,e){"use strict";var i=e(6),s=e(17),n=e(0),r=n(i.a,s.a,!1,null,null,null);a.a=r.exports},function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;return(t._self._c||a)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},s=[],n={render:i,staticRenderFns:s};a.a=n}])}))},"59ae":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("PageHeader",{attrs:{title:t.title,items:t.items}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("Basic Wizard")]),e("form-wizard",{attrs:{color:"#1A88F0"}},[e("tab-content",{attrs:{icon:"mdi mdi-account-circle"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group row mb-3"},[e("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"userName"}},[t._v("User name")]),e("div",{staticClass:"col-md-9"},[e("input",{staticClass:"form-control",attrs:{id:"userName",type:"text",name:"userName",value:"Themesbrand"}})])]),e("div",{staticClass:"form-group row mb-3"},[e("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"password"}},[t._v("Password")]),e("div",{staticClass:"col-md-9"},[e("input",{staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",value:"123456789"}})])]),e("div",{staticClass:"form-group row mb-3"},[e("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"confirmpass"}},[t._v("Re Password")]),e("div",{staticClass:"col-md-9"},[e("input",{staticClass:"form-control",attrs:{id:"confirmpass",type:"password",name:"confirmpass",value:"123456789"}})])])])])]),e("tab-content",{attrs:{icon:"mdi mdi-face-profile"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group row mb-3"},[e("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"name"}},[t._v("First name")]),e("div",{staticClass:"col-md-9"},[e("input",{staticClass:"form-control",attrs:{type:"text",name:"name",value:"Francis"}})])]),e("div",{staticClass:"form-group row mb-3"},[e("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"surname"}},[t._v("Last name")]),e("div",{staticClass:"col-md-9"},[e("input",{staticClass:"form-control",attrs:{type:"text",name:"surname",value:"Brinkman"}})])]),e("div",{staticClass:"form-group row mb-3"},[e("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"email"}},[t._v("Email")]),e("div",{staticClass:"col-md-9"},[e("input",{staticClass:"form-control",attrs:{type:"email",name:"email",value:"cory1979@hotmail.com"}})])])])])]),e("tab-content",{attrs:{icon:"mdi mdi-checkbox-marked-circle-outline"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"text-center"},[e("h2",{staticClass:"mt-0"},[e("i",{staticClass:"mdi mdi-check-all"})]),e("h3",{staticClass:"mt-0"},[t._v("Thank you !")]),e("p",{staticClass:"w-75 mb-2 mx-auto"},[t._v(" Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. ")]),e("div",{staticClass:"mb-3"},[e("b-form-checkbox",{staticClass:"form-check",attrs:{id:"customControlInline",name:"checkbox-1",value:"accepted","unchecked-value":"not_accepted"}},[t._v(" Remember me ")])],1)])])])])],1)],1)])]),e("div",{staticClass:"col-xl-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("Tab Wizard")]),e("form-wizard",{attrs:{shape:"tab",color:"#1A88F0"}},[e("tab-content",{attrs:{icon:"mdi mdi-account-circle"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group row mb-3"},[e("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"name"}},[t._v("User name")]),e("div",{staticClass:"col-md-9"},[e("input",{staticClass:"form-control",attrs:{id:"name",type:"text",value:"Themesbrand"}})])]),e("div",{staticClass:"form-group row mb-3"},[e("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"pwd"}},[t._v("Password")]),e("div",{staticClass:"col-md-9"},[e("input",{staticClass:"form-control",attrs:{id:"pwd",type:"password",name:"pwd",value:"123456789"}})])]),e("div",{staticClass:"form-group row mb-3"},[e("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"confirmpwd"}},[t._v("Re Password")]),e("div",{staticClass:"col-md-9"},[e("input",{staticClass:"form-control",attrs:{id:"confirmpwd",type:"password",value:"123456789"}})])])])])]),e("tab-content",{attrs:{icon:"mdi mdi-face-profile"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group row mb-3"},[e("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"name"}},[t._v("First name")]),e("div",{staticClass:"col-md-9"},[e("input",{staticClass:"form-control",attrs:{type:"text",name:"name",value:"Francis"}})])]),e("div",{staticClass:"form-group row mb-3"},[e("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"surname"}},[t._v("Last name")]),e("div",{staticClass:"col-md-9"},[e("input",{staticClass:"form-control",attrs:{type:"text",name:"surname",value:"Brinkman"}})])]),e("div",{staticClass:"form-group row mb-3"},[e("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"email"}},[t._v("Email")]),e("div",{staticClass:"col-md-9"},[e("input",{staticClass:"form-control",attrs:{type:"email",name:"email",value:"cory1979@hotmail.com"}})])])])])]),e("tab-content",{attrs:{icon:"mdi mdi-checkbox-marked-circle-outline"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"text-center"},[e("h2",{staticClass:"mt-0"},[e("i",{staticClass:"mdi mdi-check-all"})]),e("h3",{staticClass:"mt-0"},[t._v("Thank you !")]),e("p",{staticClass:"w-75 mb-2 mx-auto"},[t._v(" Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. ")]),e("div",{staticClass:"mb-3"},[e("b-form-checkbox",{staticClass:"form-check",attrs:{id:"customCheck1",name:"checkbox-1",value:"accepted","unchecked-value":"not_accepted"}},[t._v(" I agree with the Terms and Conditions ")])],1)])])])])],1)],1)])])])],1)},s=[],n=(e("a4d3"),e("e01a"),e("2ee4")),r=e("444f"),o=e("2579"),c=e("c2a4"),l={page:{title:"Form Wizard",meta:[{name:"description",content:c.description}]},components:{Layout:r["a"],PageHeader:o["a"],FormWizard:n["FormWizard"],TabContent:n["TabContent"]},data:function(){return{title:"Form Wizard",items:[{text:"Forms",href:"/"},{text:"Form Wizard",active:!0}]}}},d=l,u=e("2877"),b=Object(u["a"])(d,i,s,!1,null,null,null);a["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2e4f6703.31902b57.js.map