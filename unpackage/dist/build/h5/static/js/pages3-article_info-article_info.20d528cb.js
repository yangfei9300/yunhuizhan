(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages3-article_info-article_info"],{"0248":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[""!=t.articleInfo.url?e("v-uni-web-view",{attrs:{src:t.articleInfo.url}}):e("v-uni-view",{staticClass:"colonn center_center m-all-25"},[e("v-uni-view",{staticClass:"w-700 fw-b",staticStyle:{"text-align":"center"}},[t._v(t._s(t.articleInfo.title))]),e("v-uni-view",{staticClass:"roww endend w-750 m-top-20 m-bottom-20"},[e("v-uni-view",{staticClass:"fs-25",staticStyle:{color:"#999999"}},[t._v("发布时间:"+t._s(t.articleInfo.createTime))]),e("v-uni-view",{staticClass:"w-50"})],1),e("v-uni-rich-text",{attrs:{nodes:t.articleInfo.content}})],1)],1)},o=[]},"187c":function(t,n,e){var i=e("994b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("45bc3326",i,!0,{sourceMap:!1,shadowMode:!1})},"70fe":function(t,n,e){"use strict";var i=e("187c"),a=e.n(i);a.a},"8d16":function(t,n,e){"use strict";e.r(n);var i=e("8efd"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"8efd":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{articleInfo:"",options:{}}},onLoad:function(t){this.options=t,this.getInfo()},methods:{getInfo:function(){var n=this,e={exhType:uni.getStorageSync("exType"),id:this.options.id};this.$axios.axios("POSt",this.$paths.miniappnewslist,e).then((function(t){200==t.code?t.data.length>0?(n.articleInfo=t.data[0],uni.setNavigationBarTitle({})):uni.showModal({title:"提示",content:"文章不存在",success:function(t){uni.reLaunch({url:"/pages/index/index"})}}):n.$tools.showToast(t.msg)})).catch((function(n){t("log","baossd",n," at pages3/article_info/article_info.vue:64")}))}}};n.default=e}).call(this,e("0de9")["log"])},"994b":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"",""]),t.exports=n},d51d:function(t,n,e){"use strict";e.r(n);var i=e("0248"),a=e("8d16");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("70fe");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"b5387874",null,!1,i["a"],s);n["default"]=r.exports}}]);