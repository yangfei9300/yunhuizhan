(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages3/myLive/myLive"],{"0af4":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement;t._self._c},a=[]},2418:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{liveList:[],BASE_IMG:""}},onShow:function(){this.BASE_IMG=this.$paths.BASE_IMG,this.getMyList()},methods:{showshibaiuyan:function(n){t.showModal({title:"失败原因",content:n.info})},fuzhiPush:function(n){t.setClipboardData({data:n.pushAddr,success:function(){console.log("success")}})},toLiveRoom:function(t){var n=t.roomid;return 1==t.examineStatus?(this.$tools.showToast("直播审核中"),!1):3==t.examineStatus?(this.$tools.showToast("审核失败"),!1):void wx.navigateTo({url:"plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(n)})},toProcurment:function(){t.navigateTo({url:"../addLive/addLive"})},getMyList:function(){var n=this,e={openid:t.getStorageSync("openid")};this.$axios.axios("POST",this.$paths.myLiveRoom,e).then((function(t){if(200==t.code){for(var e=t.data,o=0;o<e.length;o++)e[o].startTime=n.$tools.timestampToTime(1e3*e[o].startTime);n.liveList=e}else n.$tools.showToast(t.msg)})).catch((function(t){}))}}};n.default=e}).call(this,e("543d")["default"])},"4ab5":function(t,n,e){"use strict";(function(t){e("f0f8");o(e("66fd"));var n=o(e("c901"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"71a3":function(t,n,e){},b231:function(t,n,e){"use strict";e.r(n);var o=e("2418"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},c901:function(t,n,e){"use strict";e.r(n);var o=e("0af4"),i=e("b231");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("d0c7");var u,s=e("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=c.exports},d0c7:function(t,n,e){"use strict";var o=e("71a3"),i=e.n(o);i.a}},[["4ab5","common/runtime","common/vendor"]]]);