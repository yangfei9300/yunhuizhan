(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dongtai/dongtai"],{"2e46":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{bannerList:[],BASE_IMG:"",userInfo:null}},onLoad:function(){this.BASE_IMG=this.$paths.BASE_IMG,this.getBanners();var n=t.getStorageSync("userInfo");n&&(this.userInfo=n)},methods:{getBanners:function(){var n=this,e={exhId:t.getStorageSync("nowExhId"),type:"6"};this.$axios.axios("GET",this.$paths.miniappcarousel,e).then((function(t){200==t.code?n.bannerList=t.data:n.$tools.showToast(t.msg)})).catch((function(t){}))}}};n.default=e}).call(this,e("543d")["default"])},"4d3c":function(t,n,e){"use strict";e.r(n);var a=e("ea5a"),u=e("5aee");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("5ca3");var r,c=e("f0c5"),i=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=i.exports},"5aee":function(t,n,e){"use strict";e.r(n);var a=e("2e46"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=u.a},"5ca3":function(t,n,e){"use strict";var a=e("8d87"),u=e.n(a);u.a},"611d":function(t,n,e){"use strict";(function(t){e("f0f8");a(e("66fd"));var n=a(e("4d3c"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"8d87":function(t,n,e){},ea5a:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement;t._self._c},o=[]}},[["611d","common/runtime","common/vendor"]]]);