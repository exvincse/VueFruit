(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a84cada4"],{"28a5":function(t,a,e){"use strict";var s=e("aae3"),r=e("cb7c"),i=e("ebd6"),c=e("0390"),n=e("9def"),l=e("5f1b"),o=e("520a"),d=e("79e5"),u=Math.min,v=[].push,m="split",p="length",f="lastIndex",h=4294967295,b=!d(function(){RegExp(h,"y")});e("214f")("split",2,function(t,a,e,d){var C;return C="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[p]||2!="ab"[m](/(?:ab)*/)[p]||4!="."[m](/(.?)(.?)/)[p]||"."[m](/()()/)[p]>1||""[m](/.?/)[p]?function(t,a){var r=String(this);if(void 0===t&&0===a)return[];if(!s(t))return e.call(r,t,a);var i,c,n,l=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,m=void 0===a?h:a>>>0,b=new RegExp(t.source,d+"g");while(i=o.call(b,r)){if(c=b[f],c>u&&(l.push(r.slice(u,i.index)),i[p]>1&&i.index<r[p]&&v.apply(l,i.slice(1)),n=i[0][p],u=c,l[p]>=m))break;b[f]===i.index&&b[f]++}return u===r[p]?!n&&b.test("")||l.push(""):l.push(r.slice(u)),l[p]>m?l.slice(0,m):l}:"0"[m](void 0,0)[p]?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,s){var r=t(this),i=void 0==e?void 0:e[a];return void 0!==i?i.call(e,r,s):C.call(String(r),e,s)},function(t,a){var s=d(C,t,this,a,C!==e);if(s.done)return s.value;var o=r(t),v=String(this),m=i(o,RegExp),p=o.unicode,f=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(b?"y":"g"),_=new m(b?o:"^(?:"+o.source+")",f),g=void 0===a?h:a>>>0;if(0===g)return[];if(0===v.length)return null===l(_,v)?[v]:[];var x=0,y=0,k=[];while(y<v.length){_.lastIndex=b?y:0;var w,q=l(_,b?v:v.slice(y));if(null===q||(w=u(n(_.lastIndex+(b?0:y)),v.length))===x)y=c(v,y,p);else{if(k.push(v.slice(x,y)),k.length===g)return k;for(var N=1;N<=q.length-1;N++)if(k.push(q[N]),k.length===g)return k;y=x=w}}return k.push(v.slice(x)),k}]})},"7b12":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"my-5"},[e("h2",{staticClass:"step"},[t._v("STEP2. 填寫付款資訊")]),"union"===t.category||"credit"===t.category?e("div",[e("div",{staticClass:"text-center mb-5"},[t._v("信用卡/金融卡")]),e("form",{on:{submit:function(a){return a.preventDefault(),t.submitpage()}}},[t._m(0),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"cardnumber"}},[t._v("信用卡號 :")]),e("div",{staticClass:"d-flex align-items-center card-outer"},[e("div",{staticClass:"card-number mr-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.card,expression:"card"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("cardnumber")},attrs:{type:"text",maxlength:"4",id:"cardnumber",name:"cardnumber"},domProps:{value:t.card},on:{input:function(a){a.target.composing||(t.card=a.target.value)}}})]),e("div",{staticClass:"card-number mr-4"},[e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("cardnumber")},attrs:{type:"text",maxlength:"4",id:"cardnumber",name:"cardnumber"}})]),e("div",{staticClass:"card-number mr-4"},[e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("cardnumber")},attrs:{type:"text",maxlength:"4",id:"cardnumber",name:"cardnumber"}})]),e("div",{staticClass:"card-number"},[e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("cardnumber")},attrs:{type:"text",maxlength:"4",id:"cardnumber",name:"cardnumber"}})]),e("div",{staticClass:"d-none d-lg-block"},[e("i",{staticClass:"card-color fab fa-cc-visa fa-2x mx-2",class:{"text-primary":"visa"===t.active}}),e("i",{staticClass:"card-color fab fa-cc-mastercard fa-2x mr-2",class:{"text-primary":"mastercard"===t.active}}),e("i",{staticClass:"card-color fab fa-cc-jcb fa-2x",class:{"text-primary":"jcb"===t.active}})])]),t.errors.has("cardnumber")?e("span",{staticClass:"text-danger"},[t._v("信用卡號不得留空")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"date"}},[t._v("有效年月 :")]),e("div",{staticClass:"d-flex align-items-center"},[e("select",{staticClass:"custom-select w-30",attrs:{name:"month",id:"month"}},t._l(12,function(a){return e("option",{key:a,domProps:{value:a}},[t._v(t._s(a))])}),0),e("div",{staticClass:"mx-2"},[t._v("/")]),e("select",{staticClass:"custom-select w-30",attrs:{name:"year",id:"year"}},[e("option",{domProps:{value:t.date}},[t._v(t._s(t.date))]),t._l(18,function(a){return e("option",{key:t.date-a,domProps:{value:t.date-a}},[t._v(t._s(t.date-a))])})],2),e("span",[t._v("年")])])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"lastcard"}},[t._v("背面末三碼")]),e("div",{staticClass:"d-flex align-items-center"},[e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control w-25 mr-2",class:{"is-invalid":t.errors.has("lastcard")},attrs:{type:"text",id:"lastcard",maxlength:"3",name:"lastcard"}}),e("i",{staticClass:"fas fa-credit-card fa-2x card-color"})]),t.errors.has("lastcard")?e("span",{staticClass:"text-danger"},[t._v("背面末三碼不得留空")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("填寫付款人信箱 :")]),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control w-50",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",id:"email",name:"email"}}),t.errors.has("email")?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-control-input",class:{"is-invalid":t.errors.has("check")},attrs:{type:"checkbox",id:"check",name:"check"}}),e("label",{staticClass:"custom-control-label cursor",attrs:{for:"check"}},[t._v("\n              請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的 E-mail 信箱\n            ")]),e("div",{staticClass:"text-color6"},[t._v("第三方支付金流平台服務條款")]),t.errors.has("check")?e("span",{staticClass:"text-danger"},[t._v("請勾選並同意")]):t._e()])]),e("div",{staticClass:"form-group d-flex justify-content-between"},[e("a",{staticClass:"btn btn-secondary",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.back()}}},[t._v("回上一步")]),e("button",{staticClass:"btn btn-primary"},[t._v("確認付款")])])])]):t._e(),"store"===t.category?e("div",[e("div",{staticClass:"text-center mb-5"},[t._v("超商付款")]),e("form",{on:{submit:function(a){return a.preventDefault(),t.submitpage()}}},[e("div",{staticClass:"form-group mb-4"},[e("label",{attrs:{for:"store"}},[t._v("付款超商 :")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.chstore,expression:"chstore"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-50 d-block",class:{"is-invalid":t.errors.has("store")},attrs:{id:"store",name:"store"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.chstore=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("選擇 :")]),t._l(t.store,function(a,s){return e("option",{key:s,domProps:{value:a}},[t._v(t._s(a))])})],2),t.errors.has("store")?e("span",{staticClass:"text-danger"},[t._v("請選擇超商")]):t._e()]),e("div",{staticClass:"form-group mb-4"},[e("label",{attrs:{for:"email"}},[t._v("填寫付款人信箱 :")]),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control w-50",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",id:"email",name:"email"}}),t.errors.has("email")?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-control-input",class:{"is-invalid":t.errors.has("check")},attrs:{type:"checkbox",id:"check",name:"check"}}),e("label",{staticClass:"custom-control-label cursor",attrs:{for:"check"}},[t._v("\n              請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的 E-mail 信箱\n            ")]),e("div",{staticClass:"text-color6"},[t._v("第三方支付金流平台服務條款")]),t.errors.has("check")?e("span",{staticClass:"text-danger"},[t._v("請勾選並同意")]):t._e()])]),e("div",{staticClass:"form-group d-flex justify-content-between"},[e("a",{staticClass:"btn btn-secondary",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.back()}}},[t._v("回上一步")]),e("button",{staticClass:"btn btn-primary"},[t._v("確認付款")])])])]):t._e(),"webatm"===t.category||"atm"===t.category?e("div",[e("div",{staticClass:"text-center mb-5"},[t._v("Web ATM")]),e("form",{on:{submit:function(a){return a.preventDefault(),t.submitpage()}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"bank"}},[t._v("付款銀行 :")]),e("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-50 d-block",class:{"is-invalid":t.errors.has("bank")},attrs:{id:"bank",name:"bank"}},t._l(t.bank,function(a,s){return e("option",{key:s,domProps:{value:a}},[t._v(t._s(a)+"銀行")])}),0),t.errors.has("bank")?e("span",{staticClass:"text-danger"},[t._v("請選擇超商")]):t._e()]),t._m(1),e("div",{staticClass:"form-group mb-4"},[e("label",{attrs:{for:"email"}},[t._v("填寫付款人信箱 :")]),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control w-50",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",id:"email",name:"email"}}),t.errors.has("email")?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-control-input",class:{"is-invalid":t.errors.has("check")},attrs:{type:"checkbox",id:"check",name:"check"}}),e("label",{staticClass:"custom-control-label cursor",attrs:{for:"check"}},[t._v("\n              請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的 E-mail 信箱\n            ")]),e("div",{staticClass:"text-color6"},[t._v("第三方支付金流平台服務條款")]),t.errors.has("check")?e("span",{staticClass:"text-danger"},[t._v("請勾選並同意")]):t._e()])]),e("div",{staticClass:"form-group d-flex justify-content-between"},[e("a",{staticClass:"btn btn-secondary",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.back()}}},[t._v("回上一步")]),e("button",{staticClass:"btn btn-primary"},[t._v("確認付款")])])])]):t._e()])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-group"},[e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"pay",name:"pay",checked:""}}),e("label",{staticClass:"custom-control-label cursor",attrs:{for:"pay"}},[t._v("一次付款")])]),e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"installments",name:"pay"}}),e("label",{staticClass:"custom-control-label cursor",attrs:{for:"installments"}},[t._v("分期付款")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-group"},[e("ol",{staticClass:"pl-3 note"},[e("li",[t._v("\n              請準備晶片經融卡 + 晶片讀卡機，我們將引導您至指定金融機構之網路ATM進行交易手續。\n            ")]),e("li",[t._v("\n              持對應機構之金融卡可享免跨行轉帳手續費，若無以上金融機構發行之金融卡，可自由選擇其一金融機構進行後續交易流程\n            ")])])])}],i=(e("a481"),e("28a5"),{data:function(){return{card:null,active:"",date:0,category:"",chstore:"",store:["7-11","全家","萊爾富","OK"],bank:["玉山","台灣","彰化","第一"]}},watch:{card:function(){this.cardkind()}},created:function(){this.category=this.$route.query.choose,this.date=(new Date).getFullYear()},methods:{cardkind:function(){var t=String(this.card).split("");0===t.length&&(this.active=""),"4"===t[0]&&(this.active="visa"),"6"===t[0]&&"2"===t[1]&&(this.active="mastercard"),"3"===t[0]&&(this.active="jcb")},back:function(){this.$router.push("/checkout/".concat(this.$route.params.id,"/paytype"))},submitpage:function(){var t=this;this.$validator.validate().then(function(a){if(a){t.$store.dispatch("updateLoading",!0);var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("yang","/pay/").concat(t.$route.params.id);t.$http.post(e).then(function(a){a.data.success&&t.$router.replace({path:"/checkout/".concat(t.$route.params.id,"/paysuccess"),query:{category:t.category,chstore:t.chstore}}),t.$store.dispatch("updateLoading",!1)})}})}}}),c=i,n=e("2877"),l=Object(n["a"])(c,s,r,!1,null,null,null);a["default"]=l.exports},aae3:function(t,a,e){var s=e("d3f4"),r=e("2d95"),i=e("2b4c")("match");t.exports=function(t){var a;return s(t)&&(void 0!==(a=t[i])?!!a:"RegExp"==r(t))}}}]);
//# sourceMappingURL=chunk-a84cada4.e4f6d079.js.map