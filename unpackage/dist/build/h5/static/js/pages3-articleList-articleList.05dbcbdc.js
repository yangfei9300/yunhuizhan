(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages3-articleList-articleList"],{"1e92":function(t,i,e){"use strict";var n=e("5ad1"),s=e.n(n);s.a},"40d1":function(t,i,e){"use strict";e.r(i);var n=e("5365"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=s.a},5365:function(t,i,e){"use strict";(function(t){e("99af"),e("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{exType:0,BASE_IMG:"",options:{},xinwenList:[],xinwenListIndex:1,aciviteList:[],typeAriclcle:["展会新闻","同期活动","往届回顾","展商推荐"],logoUrl:""}},onLoad:function(t){this.logoUrl=this.$tools.getLogos(parseInt(uni.getStorageSync("exType"))),this.aciviteList=getApp().globalData.aciviteList,this.options=t,this.BASE_IMG=this.$paths.BASE_IMG,this.exType=parseInt(uni.getStorageSync("exType")),this.getArtiList()},onReachBottom:function(){t("log","触底"," at pages3/articleList/articleList.vue:68"),this.xinwenListIndex=this.xinwenListIndex+1,this.getArtiList()},methods:{toarticelInfo:function(t){uni.navigateTo({url:"/pages3/article_info/article_info?id="+t.id})},getArtiList:function(){var i=this,e={exhType:uni.getStorageSync("exType"),params:{limit:this.xinwenList.length}};this.options.type&&(e.type=this.options.type),this.$axios.axios("POSt",this.$paths.miniappnewslist,e).then((function(t){200==t.code?i.xinwenList=i.xinwenList.concat(t.data):i.$tools.showToast(t.msg)})).catch((function(i){t("log","baossd",i," at pages3/articleList/articleList.vue:101")}))}}};i.default=n}).call(this,e("0de9")["log"])},"5ad1":function(t,i,e){var n=e("c1ef");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("4f06").default;s("776136f4",n,!0,{sourceMap:!1,shadowMode:!1})},a3c4:function(t,i,e){"use strict";e.r(i);var n=e("d6ce"),s=e("40d1");for(var a in s)"default"!==a&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("1e92");var o,c=e("f0c5"),r=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"37c59534",null,!1,n["a"],o);i["default"]=r.exports},c1ef:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,"/* 新闻列表 */.jiudianuns[data-v-37c59534]{width:%?150?%;height:%?150?%;background-color:#f5f5f5;border-radius:%?15?%}",""]),t.exports=i},d6ce:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"colonn"},[t.options.type?[e("v-uni-view",{staticClass:"colonn p-all-24"},[e("v-uni-view",{staticClass:"m-top-20 m-bottom-20 fw-b"},[t._v(t._s(t.typeAriclcle[t.options.type-1]))]),e("v-uni-view",{staticClass:"roww m-top-20 center_center"},[e("v-uni-image",{staticClass:"w-40 h-40 m-right-15",attrs:{src:t.logoUrl}}),e("v-uni-view",{staticClass:"fs-30 m-left-15",staticStyle:{color:"#536489"}},[t._v(t._s(t.aciviteList[t.exType-1]))]),e("v-uni-view",{staticClass:"allline"})],1)],1)]:t._e(),t.xinwenList.length>0?e("v-uni-view",{staticStyle:{padding:"0rpx 24rpx 0rpx 24rpx","background-color":"#ffffff"}},[e("v-uni-view",{staticClass:"colonn center_center"},t._l(t.xinwenList,(function(i,n){return n<10*t.xinwenListIndex?e("v-uni-view",{staticClass:"roww allline p-all-25 border_bottom w-750",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toarticelInfo(i)}}},[e("v-uni-image",{staticClass:"jiudianuns m-right-15",attrs:{"lazy-load":!0,src:i.thumbMedia,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"colonn rowsbl "},[e("v-uni-view",{staticClass:"fweight txtShowLength1 w-550 fs-30"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"fs-25 txtShowLength w-510",staticStyle:{color:"#999999"}},[t._v("发布时间:"+t._s(i.createTime))])],1),e("v-uni-view",{staticClass:"allline"})],1):t._e()})),1)],1):e("v-uni-view",{staticClass:"roww center_center"},[e("v-uni-view",{staticClass:"roww center_center",staticStyle:{"font-size":"30rpx","margin-top":"30rpx"}},[e("v-uni-view",[t._v("无数据")])],1)],1)],2)],1)},a=[]}}]);