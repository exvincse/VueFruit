(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b573060"],{"2d86":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"coupon-bg bg-cover",style:{"background-image":"url("+a("bf36")+")"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[t.star?e("div",{staticClass:"coupon-exp col-lg-5 my-6 p-5 bg-white"},[t.chance?e("div",[e("div",{staticClass:"text-center text-danger h4"},[t._v("你還有"+t._s(t.chance)+"次機會")]),t._l(t.onequestion,function(s,a){return e("div",{key:a},[a===t.id?e("div",{staticClass:"card mx-auto"},[s.img?e("img",{staticClass:"card-img-top",staticStyle:{"max-height":"250px"},attrs:{src:s.img}}):t._e(),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(s.title))]),t._l(s.chenckq,function(s,a){return e("div",{key:a,staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.check,expression:"check"}],staticClass:"custom-control-input",attrs:{type:"radio",id:s},domProps:{value:s,checked:t.checkeed,checked:t._q(t.check,s)},on:{change:function(a){t.check=s}}}),e("label",{staticClass:"custom-control-label",attrs:{for:s}},[t._v(t._s(s))])])}),t.corss?t._e():e("a",{staticClass:"btn btn-primary mt-3",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.sub()}}},[t._v("送出")])],2)]):t._e()])})],2):e("div",{staticClass:"py-5 my-6"},[e("h2",[t._v("恭喜!")]),0===t.qcount?e("div",{staticClass:"h5 text-center"},[t._v("甚麼都沒有")]):1===t.qcount?e("div",{staticClass:"h5 text-center"},[t._v("您答對1題，獲得30%折扣，優惠碼333")]):2===t.qcount?e("div",{staticClass:"h5 text-center"},[t._v("您答對2題，獲得50%折扣，優惠碼222")]):3===t.qcount?e("div",{staticClass:"h5 text-center"},[t._v("您答對3題，獲得90%折扣，優惠碼111")]):t._e(),e("router-link",{staticClass:"btn btn-outline-Lorange mt-2",attrs:{to:"/products"}},[t._v("去購物")])],1)]):e("div",{staticClass:"coupon-exp col-lg-5 my-6 p-5"},[e("span",{staticClass:"h2"},[t._v("獲取免費優惠卷")]),e("br"),e("span",{staticClass:"h4"},[t._v("說明:")]),t._m(0),e("button",{staticClass:"btn btn-primary",on:{click:function(s){return t.start()}}},[t._v("開始")])]),e("div",{staticClass:"modal fade coupon-modal",attrs:{id:"exampleModal",tabindex:"-1"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header bg-success",class:{"bg-danger":!t.modalshow}},[t.modalshow?e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("答對了")]):e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("答錯了")]),t._m(1)]),e("div",{staticClass:"modal-body text-center"},[t._v("\n              你還有"+t._s(t.chance)+"次機會\n            ")]),t._m(2)])])])])])])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"h5 text-center"},[t._v("\n          請根據題目答題，總共有3題"),a("br"),a("span",{staticClass:"text-danger"},[t._v("並且只有3次機會")]),t._v("，只要3題都答對就能享有90%優惠"),a("br"),t._v("\n          當然有答對也有優惠\n          "),a("ul",{staticClass:"p-0",staticStyle:{"list-style":"none"}},[a("li",[t._v("1題，30%")]),a("li",[t._v("2題，50%")]),a("li",[t._v("3題，90%")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("關閉")])])}],c=(a("ac6a"),a("8615"),a("1157")),n=a.n(c),o={data:function(){return{question:[],onequestion:{},ans:"",check:"",id:0,corss:!1,chance:3,qcount:0,star:!1,checkeed:!1,modalshow:!1}},methods:{getjson:function(){var t=this;this.$store.dispatch("updateLoading",!0),this.$firebase.database().ref("/question/").once("value").then(function(s){t.question=Object.values(s.val()),t.getquest(),t.$store.dispatch("updateLoading",!1)})},getquest:function(){for(var t=[],s=0;s<=2;s++){var a=Math.floor(Math.random()*this.question.length);t.push(this.question.splice(a,1)[0])}this.onequestion=t},sub:function(){var t=this;if(this.$store.dispatch("updateLoading",!0),this.onequestion[this.id].ans===this.check){this.ans="答對了",this.corss=!0,this.checkeed=!1,this.qcount+=1;var s=setTimeout(function(){t.nextq(),t.modalshow=!0,t.id<=2&&n()("#exampleModal").modal("show"),clearTimeout(s),t.$store.dispatch("updateLoading",!1)},1e3)}else{var a=setTimeout(function(){t.modalshow=!1,t.chance-=1,t.chance&&n()("#exampleModal").modal("show"),clearTimeout(a),t.$store.dispatch("updateLoading",!1)},1e3);this.corss=!1}},nextq:function(){if(this.ans="",this.coustomans="",this.corss=!1,this.id>=2&&(this.chance=0),this.id>2)return!1;this.id+=1},start:function(){this.getjson(),this.star=!0}}},l=o,r=a("2877"),d=Object(r["a"])(l,e,i,!1,null,null,null);s["default"]=d.exports},bf36:function(t,s,a){t.exports=a.p+"img/coupon-bg.72e3de9f.jpg"}}]);
//# sourceMappingURL=chunk-1b573060.a1011b3f.js.map