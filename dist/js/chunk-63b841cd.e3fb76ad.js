(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63b841cd"],{1701:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.orders.length?a("div",[a("div",{staticClass:"container mt-4"},[a("div",{staticClass:"row"},[a("NavDate",{staticClass:"col-lg-5 mb-4 mb-lg-0",on:{changeMonth:t.changeMonth}}),a("NavSelect",{staticClass:"col-lg-3",on:{select:t.select}})],1),a("div",{staticClass:"text-center h3 mt-2"},[t._v("已搜尋到"+t._s(t.ary.length)+"筆")]),t.ary.length?a("div",{staticClass:"mt-2"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table w-100"},[t._m(0),a("tbody",t._l(t.pagedata,function(e,n){return a("tr",{key:n,class:{"text-secondary":!e.is_paid}},[a("td",[t._v(t._s(t._f("DateFilter")(e.create_at)))]),a("td",[e.user?a("span",{domProps:{textContent:t._s(e.user.email)}}):t._e()]),a("td",[a("ul",{staticClass:"list-unstyled"},t._l(e.products,function(e,n){return a("li",{key:n},[t._v("\n                    "+t._s(e.product.title)+" 數量："+t._s(e.qty)+"\n                    "+t._s(e.product.unit)+"\n                  ")])}),0)]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))]),a("td",[e.is_paid?a("strong",{staticClass:"text-success"},[t._v("已付款")]):a("span",{staticClass:"text-muted"},[t._v("尚未起用")])])])}),0)])]),a("pages",{attrs:{ary:t.ary,makeout:t.pay},on:{getPageData:t.getPageData}})],1):a("div",{staticClass:"mt-5"},[a("div",{staticClass:"text-center h1"},[t._v("\n        無任何資料\n      ")])])])]):t._e()},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("購買時間")]),a("th",[t._v("Email")]),a("th",{staticStyle:{"min-width":"170px"}},[t._v("購買款項")]),a("th",{staticStyle:{"min-width":"100px"}},[t._v("應付金額")]),a("th",{staticStyle:{"min-width":"100px"}},[t._v("是否付款")])])])}],r=(a("6762"),a("2fdb"),a("28a5"),a("c5f6"),a("ac6a"),a("e238")),s=a("91b5"),l=a("af41"),o={data:function(){return{pay:"pay",orders:[],ary:[],pagedata:[]}},components:{NavDate:r["a"],NavSelect:s["a"],pages:l["a"]},created:function(){this.get()},methods:{get:function(){var t=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.orders=[],this.$store.dispatch("updateLoading",!0);var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("yang","/orders?page=",1);this.$http.get(e).then(function(e){if(e.data.success){for(var a=e.data.pagination.total_pages,n=[],i=1;i<=a;i++){var r="".concat("https://vue-course-api.hexschool.io","/api/").concat("yang","/orders?page=").concat(i),s=t.$http.get(r);n.push(s)}t.$http.all(n).then(t.$http.spread(function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];var i=a.map(function(t){return t.data});i.forEach(function(e){var a=e.orders;a.forEach(function(e){e.create_at=Number(1e3*e.create_at),t.orders.push(e)})}),t.ary=t.orders,t.$store.dispatch("updateLoading",!1)}))}})},changeMonth:function(t,e){var a=Array.prototype.slice.call(this.orders),n=a.map(function(t){var e=new Date(t.create_at),a=e.getFullYear(),n=e.getMonth()+1,i=e.getDate(),r=a+"/"+n+"/"+i;return t.create_at=r,t});if(""!==t||""!==e){var i=n.filter(function(a){var n=a.create_at.split("/");if(e){if(Number(n[0])===t&&Number(n[1])===e)return a}else if(Number(n[0])===t)return a});this.ary=i}else this.get()},select:function(t){if(this.ary=[],""===t)this.ary=this.orders;else{var e=this.orders.filter(function(e,a,n){return e.user.email.includes(t)});this.ary=e}},getPageData:function(t){this.pagedata=t}}},c=o,u=a("2877"),h=Object(u["a"])(c,n,i,!1,null,null,null);e["default"]=h.exports},"28a5":function(t,e,a){"use strict";var n=a("aae3"),i=a("cb7c"),r=a("ebd6"),s=a("0390"),l=a("9def"),o=a("5f1b"),c=a("520a"),u=a("79e5"),h=Math.min,d=[].push,p="split",g="length",f="lastIndex",v=4294967295,m=!u(function(){RegExp(v,"y")});a("214f")("split",2,function(t,e,a,u){var y;return y="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[g]||2!="ab"[p](/(?:ab)*/)[g]||4!="."[p](/(.?)(.?)/)[g]||"."[p](/()()/)[g]>1||""[p](/.?/)[g]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!n(t))return a.call(i,t,e);var r,s,l,o=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,p=void 0===e?v:e>>>0,m=new RegExp(t.source,u+"g");while(r=c.call(m,i)){if(s=m[f],s>h&&(o.push(i.slice(h,r.index)),r[g]>1&&r.index<i[g]&&d.apply(o,r.slice(1)),l=r[0][g],h=s,o[g]>=p))break;m[f]===r.index&&m[f]++}return h===i[g]?!l&&m.test("")||o.push(""):o.push(i.slice(h)),o[g]>p?o.slice(0,p):o}:"0"[p](void 0,0)[g]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,n){var i=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,i,n):y.call(String(i),a,n)},function(t,e){var n=u(y,t,this,e,y!==a);if(n.done)return n.value;var c=i(t),d=String(this),p=r(c,RegExp),g=c.unicode,f=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(m?"y":"g"),_=new p(m?c:"^(?:"+c.source+")",f),b=void 0===e?v:e>>>0;if(0===b)return[];if(0===d.length)return null===o(_,d)?[d]:[];var w=0,x=0,C=[];while(x<d.length){_.lastIndex=m?x:0;var k,D=o(_,m?d:d.slice(x));if(null===D||(k=h(l(_.lastIndex+(m?0:x)),d.length))===w)x=s(d,x,g);else{if(C.push(d.slice(w,x)),C.length===b)return C;for(var P=1;P<=D.length-1;P++)if(C.push(D[P]),C.length===b)return C;x=w=k}}return C.push(d.slice(w)),C}]})},"2f21":function(t,e,a){"use strict";var n=a("79e5");t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},"2fdb":function(t,e,a){"use strict";var n=a("5ca1"),i=a("d2c8"),r="includes";n(n.P+n.F*a("5147")(r),"String",{includes:function(t){return!!~i(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,a){var n=a("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[n]=!1,!"/./"[t](e)}catch(i){}}return!0}},"55dd":function(t,e,a){"use strict";var n=a("5ca1"),i=a("d8e8"),r=a("4bf8"),s=a("79e5"),l=[].sort,o=[1,2,3];n(n.P+n.F*(s(function(){o.sort(void 0)})||!s(function(){o.sort(null)})||!a("2f21")(l)),"Array",{sort:function(t){return void 0===t?l.call(r(this)):l.call(r(this),i(t))}})},6762:function(t,e,a){"use strict";var n=a("5ca1"),i=a("c366")(!0);n(n.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},"91b5":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectname,expression:"selectname"}],staticClass:"form-control",attrs:{type:"text",placeholder:"輸入名稱","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:t.selectname},on:{input:function(e){e.target.composing||(t.selectname=e.target.value)}}})])},i=[],r={data:function(){return{selectname:""}},watch:{selectname:"select"},methods:{select:function(){this.$emit("select",this.selectname)}}},s=r,l=a("2877"),o=Object(l["a"])(s,n,i,!1,null,null,null);e["a"]=o.exports},aae3:function(t,e,a){var n=a("d3f4"),i=a("2d95"),r=a("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},af41:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[t.ary.length?a("li",{staticClass:"page-item",class:{disabled:1===t.nowpage}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.scroolpage(t.nowpage-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]):t._e(),t._l(t.limitPage,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.nowpage===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.scroolpage(e)}}},[t._v(t._s(e))])])}),t.ary.length?a("li",{staticClass:"page-item",class:{disabled:t.nowpage===t.TotalPage}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.scroolpage(t.nowpage+1)}}},[a("span",{attrs:{"aria-hidden":"\n             true"}},[t._v("»")])])]):t._e()],2)])])},i=[],r=(a("55dd"),a("1157")),s=a.n(r),l={props:["ary","makeout"],data:function(){return{nowpage:1,limit:10,TotalLength:0,PageData:[],totalpage:0,sortary:[]}},watch:{ary:{handler:"Datadefault",immediate:!0}},computed:{TotalPage:function(){return Math.ceil(this.ary.length/this.limit)},limitPage:function(){var t=[],e=Math.ceil(this.ary.length/this.limit);if(e<=0)return!1;if(this.nowpage<=3){var a=5;e<=5&&(a=e);for(var n=1;n<=a;n++)t.push(n)}else if(this.nowpage>=3&&this.nowpage<e-2)for(var i=this.nowpage-2;i<=this.nowpage+2;i++)t.push(i);else if(this.nowpage>=e-2)for(var r=this.nowpage-2;r<=e;r++)t.push(r);return t}},methods:{Datadefault:function(){this.TotalLength=this.ary.length,this.totalpage=Math.ceil(this.ary.length/this.limit),this.sortdata()},pagedata:function(t){if(this.PageData=[],0!==this.sortary.length){t<=0?t=1:t>=this.totalpage&&(t=this.totalpage),this.nowpage=t;var e=(t-1)*this.limit,a=t*this.limit;a>=this.TotalLength&&(a=this.TotalLength);for(var n=e;n<a;n++)this.PageData.push(this.sortary[n]);this.$emit("getPageData",this.PageData)}},scroolpage:function(t){if(this.pagedata(t),"product"===this.makeout){var e=s()(".scroll-top"),a=e.offset().top,n=s()(".nav").outerHeight();s()("html, body").animate({scrollTop:a-2*n},500,"swing")}else s()("html, body").animate({scrollTop:0},500,"swing")},sortdata:function(){var t=this;this.sortary=Array.prototype.slice.call(this.ary),this.sortary.sort(function(e,a){return"pay"===t.makeout?a.is_paid-e.is_paid:"enable"===t.makeout?(e.is_enabled=e.is_enabled?e.is_enabled:0,a.is_enabled=a.is_enabled?a.is_enabled:0,a.is_enabled-e.is_enabled):e.origin_price-a.origin_price}),this.pagedata(1)}}},o=l,c=a("2877"),u=Object(c["a"])(o,n,i,!1,null,null,null);e["a"]=u.exports},d2c8:function(t,e,a){var n=a("aae3"),i=a("be13");t.exports=function(t,e,a){if(n(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(i(t))}},e238:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.getyear,expression:"getyear"}],staticClass:"custom-select mr-2 w-40",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.getyear=e.target.multiple?a:a[0]},function(e){return t.changeMonth(t.getyear,t.getmonth)}]}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("請選擇年份")]),t._l(t.selectYear,function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})],2),a("select",{directives:[{name:"model",rawName:"v-model",value:t.getmonth,expression:"getmonth"}],staticClass:"custom-select mr-2 w-40",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.getmonth=e.target.multiple?a:a[0]},function(e){return t.changeMonth(t.getyear,t.getmonth)}]}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("請選擇月份")]),t._l(t.month,function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})],2),a("button",{staticClass:"btn btn-primary w-40",attrs:{type:"button"},on:{click:function(e){return t.clear()}}},[t._v("清除欄位")])])])},i=[],r={data:function(){return{getmonth:"",getyear:"",month:null}},watch:{getyear:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1;this.getyear===t?this.month=e:this.month=12}},computed:{selectYear:function(){for(var t=[],e=(new Date).getFullYear(),a=(new Date).getFullYear()-5,n=a;n<=e;n++)t.push(n);return t}},methods:{changeMonth:function(){this.$emit("changeMonth",this.getyear,this.getmonth)},clear:function(){this.getmonth="",this.getyear="",this.changeMonth()}}},s=r,l=a("2877"),o=Object(l["a"])(s,n,i,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-63b841cd.e3fb76ad.js.map