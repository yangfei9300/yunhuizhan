(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages3-kefuList-kefuList"],{"15ba":function(t,n,e){"use strict";e.r(n);var a=e("d043"),i=e("f2ae");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("a7be");var s,u=e("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"63b8554a",null,!1,a["a"],s);n["default"]=r.exports},3591:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{list:[],BASE_IMG:""}},onLoad:function(){this.BASE_IMG=this.$paths.BASE_IMG,this.getKefuList()},methods:{toPhone:function(t){uni.makePhoneCall({phoneNumber:t.phone})},getKefuList:function(){var t=this,n={exhId:uni.getStorageSync("nowExhId"),type:"3"};this.$axios.axios("POSt",this.$paths.custcareminiapp,n).then((function(n){200==n.code?t.list=n.data:t.$tools.showToast(n.msg)})).catch((function(t){}))}}};n.default=a},a7be:function(t,n,e){"use strict";var a=e("b85c"),i=e.n(a);i.a},b85c:function(t,n,e){var a=e("f0ef");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("6208ea40",a,!0,{sourceMap:!1,shadowMode:!1})},d043:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",t._l(t.list,(function(n,a){return e("v-uni-view",{staticClass:"roww p-all-25 border_bottom",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toPhone(n)}}},[e("v-uni-image",{staticClass:"headeer m-right-15",attrs:{src:n.image}}),e("v-uni-view",{staticClass:"colonn rowsbl"},[e("v-uni-view",{staticClass:"fs-30"},[t._v(t._s(n.name))]),e("v-uni-view",{staticClass:"fs-25"},[t._v(t._s(n.phone))])],1)],1)})),1)},o=[]},f0ef:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".headeer[data-v-63b8554a]{width:%?100?%;height:%?100?%;border-radius:50%;background-color:#f5f5f5}",""]),t.exports=n},f2ae:function(t,n,e){"use strict";e.r(n);var a=e("3591"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a}}]);