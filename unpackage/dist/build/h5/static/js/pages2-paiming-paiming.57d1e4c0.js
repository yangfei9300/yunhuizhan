(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages2-paiming-paiming"],{"53b5":function(t,i,a){var n=a("8e8d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("3ea9b218",n,!0,{sourceMap:!1,shadowMode:!1})},"648a":function(t,i,a){"use strict";a.r(i);var n=a("8abb"),e=a("a1c4");for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);a("b8eb");var r,o=a("f0c5"),c=Object(o["a"])(e["default"],n["b"],n["c"],!1,null,"fd4464dc",null,!1,n["a"],r);i["default"]=c.exports},6556:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{list:[]}},onLoad:function(){this.wxuserranking()},methods:{wxuserranking:function(){var t=this,i={exhType:uni.getStorageSync("exType")},a=uni.getStorageSync("upOpenid");a&&(i.referrerId=a),this.$axios.axios("POSt",this.$paths.wxuserranking,i).then((function(i){200==i.code?t.list=i.data:t.$tools.showToast(i.msg)})).catch((function(t){}))}}};i.default=n},"8abb":function(t,i,a){"use strict";var n;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return n}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("v-uni-image",{staticClass:"w-750",staticStyle:{"z-idnex":"1"},attrs:{src:"/static/paihangbang.png",mode:"widthFix"}}),a("v-uni-view",{staticClass:"colonn pahmingview background1"},t._l(t.list,(function(i,n){return a("v-uni-view",{staticClass:"roww  border_bottom center_center p-all-20 w-650",staticStyle:{"z-index":"1001"}},[a("v-uni-view",{staticClass:"w-50 h-50 pore"},[n<3?a("v-uni-image",{staticClass:"w-50 h-50 poab",staticStyle:{"z-index":"1002",top:"0rpx",left:"0rpx"},attrs:{src:"/static/shoucangss.png"}}):t._e(),a("v-uni-view",{staticStyle:{"text-align":"center","line-height":"50rpx","z-index":"1003",width:"50rpx",position:"absolute",top:"0rpx",color:"#999999","font-weight":"bold"}},[t._v(t._s(n+1))])],1),a("v-uni-image",{staticClass:"w-80 h-80 m-left-20 m-right-20",staticStyle:{"border-radius":"50%","background-color":"#f5f5f5"},attrs:{src:i.userAvatar}}),a("v-uni-view",{staticClass:"w-300 txtShowLength fs-30"},[t._v(t._s(i.nickname))]),a("v-uni-view",{staticClass:"allline"}),a("v-uni-view",{staticClass:"fs-30",staticStyle:{color:"#999999"}},[t._v(t._s(i.nums)+"人")])],1)})),1),a("v-uni-view",{staticClass:"h-50"})],1)},s=[]},"8e8d":function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,"uni-page-body[data-v-fd4464dc]{background-color:#fdf2cb}.pahmingview[data-v-fd4464dc]{margin-left:%?45?%;border-radius:%?25?%;z-index:1000;border-radius:%?20?%;position:relative;top:%?-50?%;width:%?660?%}body.?%PAGE?%[data-v-fd4464dc]{background-color:#fdf2cb}",""]),t.exports=i},a1c4:function(t,i,a){"use strict";a.r(i);var n=a("6556"),e=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(i,t,(function(){return n[t]}))}(s);i["default"]=e.a},b8eb:function(t,i,a){"use strict";var n=a("53b5"),e=a.n(n);e.a}}]);