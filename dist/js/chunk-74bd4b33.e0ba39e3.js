(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74bd4b33"],{"95c35":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("PageHeader",{attrs:{title:e.title,items:e.items}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title mb-4"},[e._v("Example")]),a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",[a("div",{staticClass:"form-group mb-4"},[a("label",{attrs:{for:"input-date1"}},[e._v("Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"},{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}}),a("span",{staticClass:"text-muted"},[e._v('e.g "dd/mm/yyyy"')])]),a("div",{staticClass:"form-group mb-4"},[a("label",[e._v("Hour")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"},{name:"mask",rawName:"v-mask",value:"##:##:##",expression:"'##:##:##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.hour},on:{input:function(t){t.target.composing||(e.hour=t.target.value)}}}),a("span",{staticClass:"text-muted"},[e._v('e.g "hh:mm:ss"')])]),a("div",{staticClass:"form-group mb-4"},[a("label",[e._v("Date & Hour")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.datetime,expression:"datetime"},{name:"mask",rawName:"v-mask",value:"##/##/#### ##:##:##",expression:"'##/##/#### ##:##:##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.datetime},on:{input:function(t){t.target.composing||(e.datetime=t.target.value)}}}),a("span",{staticClass:"text-muted"},[e._v('e.g "dd/mm/yyyy hh:mm:ss"')])]),a("div",{staticClass:"form-group mb-4"},[a("label",[e._v("ZIP Code")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.zipcode,expression:"zipcode"},{name:"mask",rawName:"v-mask",value:"#####-###",expression:"'#####-###'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.zipcode},on:{input:function(t){t.target.composing||(e.zipcode=t.target.value)}}}),a("span",{staticClass:"text-muted"},[e._v('e.g "xxxxx-xxx"')])]),a("div",{staticClass:"form-group mb-4"},[a("label",[e._v("Crazy Zip Code")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.crazyzip,expression:"crazyzip"},{name:"mask",rawName:"v-mask",value:"#-##-##-##",expression:"'#-##-##-##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.crazyzip},on:{input:function(t){t.target.composing||(e.crazyzip=t.target.value)}}}),a("span",{staticClass:"text-muted"},[e._v('e.g "x-xx-xx-xx"')])]),a("div",{staticClass:"form-group mb-4"},[a("label",[e._v("Money")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.money,expression:"money"},{name:"mask",rawName:"v-mask",value:"###.###.###.###.###,##",expression:"'###.###.###.###.###,##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.money},on:{input:function(t){t.target.composing||(e.money=t.target.value)}}}),a("span",{staticClass:"text-muted"},[e._v('e.g "Your money"')])]),a("div",{staticClass:"form-group"},[a("label",[e._v("4 digit Group")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.digit,expression:"digit"},{name:"mask",rawName:"v-mask",value:"#,####,####,####",expression:"'#,####,####,####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.digit},on:{input:function(t){t.target.composing||(e.digit=t.target.value)}}}),a("span",{staticClass:"text-muted"},[e._v('e.g. "x,xxxx,xxxx,xxxx"')])])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group mb-4"},[a("label",[e._v("Telephone")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.telephone,expression:"telephone"},{name:"mask",rawName:"v-mask",value:"####-####",expression:"'####-####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.telephone},on:{input:function(t){t.target.composing||(e.telephone=t.target.value)}}}),a("span",{staticClass:"text-muted"},[e._v('e.g "xxxx-xxxx"')])]),a("div",{staticClass:"form-group mb-4"},[a("label",[e._v("Telephone with Code Area")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.areacode,expression:"areacode"},{name:"mask",rawName:"v-mask",value:"(##) ####-####",expression:"'(##) ####-####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.areacode},on:{input:function(t){t.target.composing||(e.areacode=t.target.value)}}}),a("span",{staticClass:"text-muted"},[e._v('e.g "(xx) xxxx-xxxx"')])]),a("div",{staticClass:"form-group mb-4"},[a("label",[e._v("US Telephone")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.ustelephone,expression:"ustelephone"},{name:"mask",rawName:"v-mask",value:"(###) ###-####",expression:"'(###) ###-####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.ustelephone},on:{input:function(t){t.target.composing||(e.ustelephone=t.target.value)}}}),a("span",{staticClass:"text-muted"},[e._v('e.g "(xxx) xxx-xxxx"')])]),a("div",{staticClass:"form-group mb-4"},[a("label",[e._v("São Paulo Celphones")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.celphone,expression:"celphone"},{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.celphone},on:{input:function(t){t.target.composing||(e.celphone=t.target.value)}}}),a("span",{staticClass:"text-muted"},[e._v('e.g "(xx) xxxxx-xxxx"')])]),a("div",{staticClass:"form-group mb-4"},[a("label",[e._v("CPF")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.cpf,expression:"cpf"},{name:"mask",rawName:"v-mask",value:"###.###.###-##",expression:"'###.###.###-##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.cpf},on:{input:function(t){t.target.composing||(e.cpf=t.target.value)}}}),a("span",{staticClass:"text-muted"},[e._v('e.g "xxx.xxx.xxxx-xx"')])]),a("div",{staticClass:"form-group mb-4"},[a("label",[e._v("CNPJ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.cnpj,expression:"cnpj"},{name:"mask",rawName:"v-mask",value:"##.###.###/####-##",expression:"'##.###.###/####-##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.cnpj},on:{input:function(t){t.target.composing||(e.cnpj=t.target.value)}}}),a("span",{staticClass:"text-muted"},[e._v('e.g "xx.xxx.xxx/xxxx-xx"')])]),a("div",{staticClass:"form-group mb-4"},[a("label",[e._v("IP Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.ipaddress,expression:"ipaddress"},{name:"mask",rawName:"v-mask",value:"###.###.###.###",expression:"'###.###.###.###'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.ipaddress},on:{input:function(t){t.target.composing||(e.ipaddress=t.target.value)}}}),a("span",{staticClass:"text-muted"},[e._v('e.g "xxx.xxx.xxx.xxx"')])])])])])])])])])],1)},o=[],i=(a("a4d3"),a("e01a"),a("444f")),r=a("2579"),m=a("c2a4"),n={page:{title:"Form Mask",meta:[{name:"description",content:m.description}]},components:{Layout:i["a"],PageHeader:r["a"]},data:function(){return{title:"Form Mask",items:[{text:"Forms",href:"/"},{text:"Form Mask",active:!0}],digit:"",zipcode:"",crazyzip:"",money:"",date:"",hour:"",datetime:"",ipaddress:"",cnpj:"",cpf:"",celphone:"",ustelephone:"",areacode:"",telephone:""}}},l=n,p=a("2877"),x=Object(p["a"])(l,s,o,!1,null,null,null);t["default"]=x.exports}}]);
//# sourceMappingURL=chunk-74bd4b33.e0ba39e3.js.map