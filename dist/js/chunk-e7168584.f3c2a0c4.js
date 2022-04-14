(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7168584"],{2903:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("PageHeader",{attrs:{title:t.title,items:t.items}}),i("div",{staticClass:"row justify-content-center mt-lg-5"},[i("div",{staticClass:"col-xl-5 col-sm-8"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"text-center"},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-lg-10"},[i("h4",{staticClass:"mt-4 fw-semibold"},[t._v("KYC Verification")]),i("p",{staticClass:"text-muted mt-3"},[t._v(" Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis perferendis asperiores repellat. ")]),i("div",{staticClass:"mt-4"},[i("button",{directives:[{name:"b-modal",rawName:"v-b-modal.verificationModal",modifiers:{verificationModal:!0}}],staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#verificationModal"}},[t._v(" Click here for Verification ")])])]),i("div",{staticClass:"row justify-content-center mt-5 mb-2"},[i("div",{staticClass:"col-sm-6 col-8"},[i("div",[i("img",{staticClass:"img-fluid",attrs:{src:a("a23f"),alt:""}})])])])])])])])])]),i("b-modal",{attrs:{id:"verificationModal",size:"lg",centered:"",title:"Verify your Account","hide-footer":""}},[i("form-wizard",{ref:"iswizard",attrs:{shape:"tab",color:"#1A88F0"},on:{"on-complete":t.onComplete}},[i("tab-content",{staticClass:"kyc-wizard",attrs:{icon:"mdi mdi-account-circle",title:"Personal Info"}},[i("form",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6"},[i("div",{staticClass:"mb-3"},[i("label",{attrs:{for:"kycfirstname-input"}},[t._v("First name")]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"kycfirstname-input",placeholder:"Enter First name"}})])]),i("div",{staticClass:"col-lg-6"},[i("div",{staticClass:"mb-3"},[i("label",{attrs:{for:"kyclastname-input"}},[t._v("Last name")]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"kyclastname-input",placeholder:"Enter Last name"}})])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6"},[i("div",{staticClass:"mb-3"},[i("label",{attrs:{for:"kycphoneno-input"}},[t._v("Phone")]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"kycphoneno-input",placeholder:"Enter Phone number"}})])]),i("div",{staticClass:"col-lg-6"},[i("div",{staticClass:"mb-3"},[i("label",{attrs:{for:"kycbirthdate-input"}},[t._v("Date of birth")]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"kycbirthdate-input",placeholder:"Enter Date of birth"}})])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-12"},[i("div",{staticClass:"mb-3"},[i("label",{staticClass:"form-label",attrs:{for:"kycselectcity-input"}},[t._v("City")]),i("select",{staticClass:"form-select",attrs:{id:"kycselectcity-input"}},[i("option",{attrs:{value:"SF",selected:""}},[t._v("San Francisco")]),i("option",{attrs:{value:"LA"}},[t._v("Los Angeles")]),i("option",{attrs:{value:"SD"}},[t._v("San Diego")])])])])])])]),i("tab-content",{staticClass:"kyc-wizard",attrs:{icon:"mdi mdi-email",title:"Confirm Email"}},[i("form",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-12"},[i("div",{staticClass:"mb-3"},[i("label",{attrs:{for:"kycemail-input"}},[t._v("Email")]),i("input",{staticClass:"form-control",attrs:{type:"email",id:"kycemail-input",placeholder:"Enter Email Address"}})]),i("div",{staticClass:"mb-3"},[i("label",{attrs:{for:"kycconfirmcode-input"}},[t._v("Confirm code")]),i("input",{staticClass:"form-control",attrs:{type:"email",id:"kycconfirmcode-input",placeholder:"Enter Confirm code"}})]),i("div",{staticClass:"mb-3"},[t._v(" Didn't recieve code ? "),i("button",{staticClass:"btn btn-link",attrs:{type:"button"}},[t._v(" Resend Code ")])])])])])]),i("tab-content",{staticClass:"kyc-wizard",attrs:{icon:"mdi mdi-checkbox-marked-circle-outline",title:"Document Verification"}},[i("h5",{staticClass:"font-size-14 mb-3"},[t._v(" Upload document file for a verification ")]),i("div",{staticClass:"kyc-doc-verification"},[i("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone","use-custom-slot":!0,options:t.dropzoneOptions}},[i("div",{staticClass:"dropzone-custom-content"},[i("i",{staticClass:"display-4 text-muted bx bxs-cloud-upload"}),i("h4",[t._v("Drop files here or click to upload.")])])])],1)])],1)],1)],1)},n=[],s=(a("a4d3"),a("e01a"),a("2ee4")),r=a("92c3"),o=a.n(r),c=a("444f"),l=a("c2a4"),d=a("2579"),u={methods:{onComplete:function(){this.$refs.iswizard.reset()}},page:{title:"KYC Application",meta:[{name:"description",content:l.description}]},components:{Layout:c["a"],PageHeader:d["a"],vueDropzone:o.a,FormWizard:s["FormWizard"],TabContent:s["TabContent"]},mounted:function(){},data:function(){return{title:"KYC Application",items:[{text:"Crypto",href:"/"},{text:"KYC Application",active:!0}],dropzoneOptions:{url:"https://httpbin.org/post",thumbnailWidth:120,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}}}}},b=u,f=a("2877"),h=Object(f["a"])(b,i,n,!1,null,null,null);e["default"]=h.exports},"2ee4":function(t,e,a){!function(e,a){t.exports=a()}("undefined"!=typeof self&&self,(function(){return function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=function(t,e,a,i,n,s){var r,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(r=t,o=t.default);var l,d="function"==typeof o?o.options:o;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),a&&(d.functional=!0),n&&(d._scopeId=n),s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=l):i&&(l=i),l){var u=d.functional,b=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(t,e){return l.call(e),b(t,e)}):d.beforeCreate=b?[].concat(b,l):[l]}return{esModule:r,exports:o,options:d}}},function(t,e,a){"use strict";var i=a(2),n=a(4),s=a(14);e.a={name:"form-wizard",components:{WizardButton:i.a,WizardStep:n.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,e){this.$emit("on-change",t,e),this.$emit("update:startIndex",e)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+e,this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab:function(t){var e=this.tabs,a=e.indexOf(t);a>-1&&(a===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),a<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),e.splice(a,1))},reset:function(){this.maxStep=0,this.tabs.forEach((function(t){t.checked=!1})),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach((function(t){t.checked=!0}))},navigateToTab:function(t){var e=this,a=t>this.activeTabIndex;if(t<=this.maxStep){var i=function i(){a&&t-e.activeTabIndex>1?(e.changeTab(e.activeTabIndex,e.activeTabIndex+1),e.beforeTabChange(e.activeTabIndex,i)):(e.changeTab(e.activeTabIndex,t),e.afterTabChange(e.activeTabIndex))};a?this.beforeTabChange(this.activeTabIndex,i):(this.setValidationError(null),i())}return t<=this.maxStep},nextTab:function(){var t=this,e=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this,e=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},focusNextTab:function(){var t=Object(s.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var e=this.tabs[t+1];e.checked&&Object(s.a)(e.tabId)}},focusPrevTab:function(){var t=Object(s.b)(this.tabs);if(-1!==t&&t>0){var e=this.tabs[t-1].tabId;Object(s.a)(e)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var a=this;if(this.setValidationError(null),Object(s.c)(t))this.setLoading(!0),t.then((function(t){a.setLoading(!1);var i=!0===t;a.executeBeforeChange(i,e)})).catch((function(t){a.setLoading(!1),a.setValidationError(t)}));else{var i=!0===t;this.executeBeforeChange(i,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var a=this.tabs[t];if(a&&void 0!==a.beforeChange){var i=a.beforeChange();this.validateBeforeChange(i,e)}else e()}},afterTabChange:function(t){if(!this.loading){var e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()}},changeTab:function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this.tabs[t],n=this.tabs[e];return i&&(i.active=!1),n&&(n.active=!0),a&&this.activeTabIndex!==e&&this.emitTabChange(t,e),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var e=-1,a=this.tabs.find((function(a,i){var n=a.route===t;return n&&(e=i),n}));if(a&&!a.active){var i=e>this.activeTabIndex;this.navigateToTab(e,i)}},deactivateTabs:function(){this.tabs.forEach((function(t){t.active=!1}))},activateTab:function(t){this.deactivateTabs();var e=this.tabs[t];e&&(e.active=!0,e.checked=!0,this.tryChangeRoute(e))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,a){"use strict";function i(t){a(10)}var n=a(3),s=a(11),r=a(0),o=i,c=r(n.a,s.a,!1,o,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={}},function(t,e,a){"use strict";function i(t){a(12)}var n=a(5),s=a(13),r=a(0),o=i,c=r(n.a,s.a,!1,o,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,e,a){"use strict";e.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(8),n=a(16),s=a(2),r=a(4);a.d(e,"FormWizard",(function(){return i.a})),a.d(e,"TabContent",(function(){return n.a})),a.d(e,"WizardButton",(function(){return s.a})),a.d(e,"WizardStep",(function(){return r.a}));var o={install:function(t){t.component("form-wizard",i.a),t.component("tab-content",n.a),t.component("wizard-button",s.a),t.component("wizard-step",r.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,a){"use strict";function i(t){a(9)}var n=a(1),s=a(15),r=a(0),o=i,c=r(n.a,s.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e){},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},n=[],s={render:i,staticRenderFns:n};e.a=s},function(t,e){},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{active:t.tab.active}},[a("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[a("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?a("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[a("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},n=[],s={render:i,staticRenderFns:n};e.a=s},function(t,e,a){"use strict";function i(){return document.activeElement.id}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=i();return t.findIndex((function(t){return t.tabId===e}))}function s(t){document.getElementById(t).focus()}function r(t){return t.then&&"function"==typeof t.then}e.b=n,e.a=s,e.c=r},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.focusNextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.focusPrevTab(e):null}]}},[a("div",{staticClass:"wizard-header"},[t._t("title",[a("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),a("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():a("div",{staticClass:"wizard-progress-with-circle"},[a("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),a("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,(function(e,i){return t._t("step",[a("wizard-step",{attrs:{tab:e,"step-size":t.stepSize,transition:t.transition,index:i},nativeOn:{click:function(e){t.navigateToTab(i)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.navigateToTab(i)}}})],{tab:e,index:i,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})}))],2),t._v(" "),a("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():a("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[a("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.prevTab(e)}}},[t._t("prev",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),a("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("finish",[a("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("next",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},n=[],s={render:i,staticRenderFns:n};e.a=s},function(t,e,a){"use strict";var i=a(6),n=a(17),s=a(0),r=s(i.a,n.a,!1,null,null,null);e.a=r.exports},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},n=[],s={render:i,staticRenderFns:n};e.a=s}])}))},a23f:function(t,e,a){t.exports=a.p+"img/verification-img.388ef2fb.png"}}]);
//# sourceMappingURL=chunk-e7168584.f3c2a0c4.js.map