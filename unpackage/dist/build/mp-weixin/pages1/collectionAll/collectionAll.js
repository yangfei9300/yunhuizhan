(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages1/collectionAll/collectionAll"],{"185c":function(n,t,o){"use strict";o.d(t,"b",(function(){return u})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return e}));var e={vTabs:function(){return o.e("components/v-tabs/v-tabs").then(o.bind(null,"1f1f"))},noList:function(){return o.e("components/noList/noList").then(o.bind(null,"6997"))}},u=function(){var n=this,t=n.$createElement;n._self._c},a=[]},"1c85":function(n,t,o){"use strict";var e=o("4ea3"),u=o.n(e);u.a},"4db7":function(n,t,o){"use strict";o.r(t);var e=o("b815"),u=o.n(e);for(var a in e)"default"!==a&&function(n){o.d(t,n,(function(){return e[n]}))}(a);t["default"]=u.a},"4ea3":function(n,t,o){},9753:function(n,t,o){"use strict";(function(n){o("f0f8");e(o("66fd"));var t=e(o("da8b"));function e(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=o,n(t.default)}).call(this,o("543d")["createPage"])},b815:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{current:0,tabs:["供需","企业","商品"],shoucangList:[],BASE_IMG:""}},onLoad:function(){this.BASE_IMG=this.$paths.BASE_IMG,this.getShoucang()},methods:{toGoodInfo:function(t){n.navigateTo({url:"../goodInfo/goodInfo?id="+t.productId})},toShopInfo:function(t){n.navigateTo({url:"../shopInfo/shopInfo?id="+t.companyId})},toGongxuInfo:function(t){n.navigateTo({url:"/pages1/demand_procurement_info/demand_procurement_info?id="+t.id})},changeTab:function(n){this.current=n,this.getShoucang()},getShoucang:function(){var t=this,o={openid:n.getStorageSync("openid"),params:{type:this.current+1}};this.$axios.axios("POST",this.$paths.wxusermark,o).then((function(n){if(200==n.code){var o=n.data;if(0==t.current)for(var e=0;e<o.length;e++)o[e].label=o[e].label.split(",");else if(1==t.current)for(e=0;e<o.length;e++)o[e].mainProduct?o[e].mainProduct=o[e].mainProduct.split(","):o[e].mainProduct=[];t.shoucangList=o}else t.$tools.showToast(n.msg)})).catch((function(n){}))}}};t.default=o}).call(this,o("543d")["default"])},da8b:function(n,t,o){"use strict";o.r(t);var e=o("185c"),u=o("4db7");for(var a in u)"default"!==a&&function(n){o.d(t,n,(function(){return u[n]}))}(a);o("1c85");var i,c=o("f0c5"),r=Object(c["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],i);t["default"]=r.exports}},[["9753","common/runtime","common/vendor"]]]);