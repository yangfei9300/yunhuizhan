(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages2-lianwiomen-lianwiomen"],{"315e":function(t,n,e){"use strict";e.r(n);var i=e("62af"),a=e("a5be");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);var u,c=e("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"77764fc6",null,!1,i["a"],u);n["default"]=r.exports},"62af":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"p-all-20"},[t.info.content?e("uParse",{attrs:{content:t.info.content}}):t._e()],1)],1)},o=[]},9761:function(t,n,e){"use strict";var i=e("4ea4");e("ac1f"),e("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("d180")),o={components:{uParse:a.default},data:function(){return{info:{}}},onLoad:function(t){1==t.type?uni.setNavigationBarTitle({title:"联系我们"}):2==t.type?uni.setNavigationBarTitle({title:"行业交流群"}):3==t.type&&uni.setNavigationBarTitle({title:"操作指南"}),this.getLianxiwomen(t.type)},methods:{getLianxiwomen:function(t){var n=this,e={exhId:uni.getStorageSync("nowExhId"),type:t};this.$axios.axios("POST",this.$paths.custcareminiapp,e).then((function(t){200==t.code?(n.info=t.data,n.info.content=n.info.content.replace(/\<img/gi,'<img style="width:100%" ')):n.$tools.showToast(t.msg)})).catch((function(t){}))}}};n.default=o},a5be:function(t,n,e){"use strict";e.r(n);var i=e("9761"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a}}]);