(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d0e5399"],{"105d":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container my-3"},[a("form",{staticClass:"question mx-auto",on:{submit:function(t){return t.preventDefault(),e.submitpage()}}},[a("label",{attrs:{for:"qtitle"}},[e._v("題目名稱:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("qtitle")},attrs:{type:"text",name:"qtitle",id:"qtitle",placeholder:"請輸入題目名稱"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),e.errors.has("qtitle")?a("span",{staticClass:"text-danger"},[e._v("請輸入題目名稱")]):e._e(),a("div",[a("div",[e._v("題目選項:")]),a("label",{attrs:{for:"qchoosea"}},[e._v("A:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.choose[0],expression:"choose[0]"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("qchoosea")},attrs:{type:"text",name:"qchoosea",id:"qchoosea",placeholder:"請輸入題目選項"},domProps:{value:e.choose[0]},on:{input:function(t){t.target.composing||e.$set(e.choose,0,t.target.value)}}}),e.errors.has("qchoosea")?a("span",{staticClass:"text-danger"},[e._v("請輸入題目選項")]):e._e(),a("label",{attrs:{for:"qchooseb"}},[e._v("B:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.choose[1],expression:"choose[1]"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("qchooseb")},attrs:{type:"text",name:"qchooseb",id:"qchooseb",placeholder:"請輸入題目選項"},domProps:{value:e.choose[1]},on:{input:function(t){t.target.composing||e.$set(e.choose,1,t.target.value)}}}),e.errors.has("qchooseb")?a("span",{staticClass:"text-danger"},[e._v("請輸入題目選項")]):e._e(),a("label",{attrs:{for:"qchoosec"}},[e._v("C:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.choose[2],expression:"choose[2]"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("qchoosec")},attrs:{type:"text",name:"qchoosec",id:"qchoosec",placeholder:"請輸入題目選項"},domProps:{value:e.choose[2]},on:{input:function(t){t.target.composing||e.$set(e.choose,2,t.target.value)}}}),e.errors.has("qchoosec")?a("span",{staticClass:"text-danger"},[e._v("請輸入題目選項")]):e._e(),a("label",{attrs:{for:"qchoosed"}},[e._v("D:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.choose[3],expression:"choose[3]"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("qchoosed")},attrs:{type:"text",name:"qchoosed",id:"qchoosed",placeholder:"請輸入題目選項"},domProps:{value:e.choose[3]},on:{input:function(t){t.target.composing||e.$set(e.choose,3,t.target.value)}}}),e.errors.has("qchoosed")?a("span",{staticClass:"text-danger"},[e._v("請輸入題目選項")]):e._e()]),a("label",{attrs:{for:"qans"}},[e._v("題目答案:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.ans,expression:"ans"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("qans")},attrs:{type:"text",name:"qans",id:"qans",placeholder:"請輸入題目答案"},domProps:{value:e.ans},on:{input:function(t){t.target.composing||(e.ans=t.target.value)}}}),e.errors.has("qans")?a("span",{staticClass:"text-danger"},[e._v("請輸入題目答案")]):e._e(),a("label",{attrs:{for:"qans"}},[e._v("題目圖片:")]),a("input",{ref:"file",staticClass:"form-control",attrs:{type:"file",name:"qchooseimg",id:"qimg"},on:{change:function(t){return e.uploadfile()}}}),e.preview?a("img",{staticClass:"mt-3",attrs:{src:e.preview,alt:"",height:"300"}}):e._e(),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-primary mt-3",attrs:{disabled:e.disable}},[e._v("送出")])])]),a("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header bg-success",class:{"bg-danger":e.error}},[e.error?a("h5",{staticClass:"modal-title"},[e._v("新增失敗")]):a("h5",{staticClass:"modal-title"},[e._v("新增成功")]),e._m(0)]),a("div",{staticClass:"modal-body"},[e.error?a("p",[e._v(e._s(e.errormsg))]):a("p",[e._v("新增成功")])]),e._m(1)])])])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close")])])}],r=(a("7f7f"),a("1157")),i=a.n(r),n={data:function(){return{choose:[],title:"",ans:"",preview:"",img:"",modalshow:!1,error:!1,errormsg:"",disable:!1}},methods:{uploadfile:function(){var e=this;this.$store.dispatch("updateLoading",!0);var t=this.$refs.file.files[0],a=new FileReader,s=this;a.readAsDataURL(t),a.onload=function(){s.preview=this.result};var o=this.$firebase.storage().ref(),r=o.child("images/".concat(t.name)).put(t);r.on("state_changed",function(t){e.disable=!0},function(){},function(){r.snapshot.ref.getDownloadURL().then(function(t){e.img=t}).then(function(){e.disable=!1,e.$store.dispatch("updateLoading",!1)})})},submitpage:function(){var e=this;this.$store.dispatch("updateLoading",!0);var t=this.choose.filter(function(e,t,a){return a.indexOf(e)!==t});this.$validator.validate().then(function(a){var s=e.choose.some(function(t){return-1!==t.indexOf(e.ans)});if(a){if(t.length)return e.error=!0,e.errormsg="正確答案有重複",i()(".modal").modal("show"),e.$store.dispatch("updateLoading",!1),!1;if(!s)return e.error=!0,e.errormsg="題目答案與正確答案不符",i()(".modal").modal("show"),e.$store.dispatch("updateLoading",!1),!1;e.$firebase.database().ref("/question").push({title:e.title,chenckq:e.choose,ans:e.ans,img:e.img},function(t){t?(e.error=!0,e.errormsg="新增失敗",i()(".modal").modal("show")):(e.error=!1,e.title="",e.choose="",e.ans="",e.img="",e.preview="",e.$refs.file.value="",i()(".modal").modal("show")),e.$store.dispatch("updateLoading",!1)})}})}}},l=n,c=a("2877"),d=Object(c["a"])(l,s,o,!1,null,null,null);t["default"]=d.exports},"7f7f":function(e,t,a){var s=a("86cc").f,o=Function.prototype,r=/^\s*function ([^ (]*)/,i="name";i in o||a("9e1e")&&s(o,i,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-1d0e5399.ef594cf4.js.map