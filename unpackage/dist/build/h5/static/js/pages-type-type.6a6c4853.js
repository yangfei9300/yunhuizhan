(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-type-type"],{"047c":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".qiyeimg[data-v-a87beb96]{width:%?210?%;height:%?192?%;border-radius:%?16?%;opacity:1;background-color:#f5f5f5;margin-right:%?40?%}.qiyename[data-v-a87beb96]{width:%?448?%;height:%?44?%;font-size:%?33?%;font-family:PingFang SC-Medium,PingFang SC;font-weight:700;color:#333;line-height:%?44?%}.hzanwiehao[data-v-a87beb96]{height:%?40?%;font-size:%?34?%;font-family:DIN Alternate-Bold,DIN Alternate;font-weight:700;color:#858b9c;line-height:%?44?%}.liulancishu[data-v-a87beb96]{height:%?34?%;font-size:%?24?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#858b9c;line-height:%?44?%}.chanpintag[data-v-a87beb96]{background:rgba(0,0,0,.0392156862745098);border-radius:%?4?% %?4?% %?4?% %?4?%;opacity:1;line-height:%?40?%;padding:%?0?% %?15?%;margin-right:%?15?%}.taggtxt[data-v-a87beb96]{font-size:%?20?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#858b9c}.dianzns[data-v-a87beb96]{height:%?30?%;font-size:%?26?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#fd9326;line-height:%?30?%}.shoucang[data-v-a87beb96]{height:%?36?%;font-size:%?26?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#eb5e5e;line-height:%?44?%}.shoucangno[data-v-a87beb96]{height:%?36?%;font-size:%?26?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#858b9c;line-height:%?44?%}.dbuview[data-v-a87beb96]{width:%?750?%;height:%?100?%;\r\n\t/* background: linear-gradient(180deg, rgba(46, 126, 255,0.14) 0%, #2E7EFF 100%); */border-radius:0 0 0 0}\r\n/* 分裂 */.typeicon[data-v-a87beb96]{width:%?100?%;background-color:#f5f5f5;height:%?100?%;border-radius:50%}.topsou[data-v-a87beb96]{width:%?702?%;height:%?64?%;background:#f5f5f5;border-radius:%?100?%;opacity:1}",""]),t.exports=i},5240:function(t,i,e){"use strict";(function(t){e("99af"),e("ac1f"),e("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{typeList:[],BASE_IMG:"",selIndex:-1,qiyeList:[],qiyeListindex:1}},onLoad:function(){this.BASE_IMG=this.$paths.BASE_IMG,this.getQAiyefen()},onShow:function(){this.qiyeList.length>0&&(this.qiyeListindex=1,this.getQiyeList())},onReachBottom:function(){this.qiyeListindex=this.qiyeListindex+1,this.getQiyeList()},methods:{toSousuo:function(){uni.navigateTo({url:"../../pages3/sousuo/sousuo"})},toShopInfo:function(t){uni.navigateTo({url:"../../pages1/shopInfo/shopInfo?id="+t.companyId})},selTypeListClick:function(t){this.selIndex=t,this.qiyeList=[],this.qiyeListindex=0,this.getQiyeList()},getQAiyefen:function(){var i=this,e={exhType:uni.getStorageSync("exType")};this.$axios.axios("POSt",this.$paths.companytypeminiapp,e).then((function(t){200==t.code?(i.typeList=t.data,i.typeList.length>0&&i.getQiyeList()):i.$tools.showToast(t.msg)})).catch((function(i){t("log","baossd",i," at pages/type/type.vue:234")}))},getQiyeList:function(){var i=this,e={exhId:uni.getStorageSync("nowExhId"),openid:uni.getStorageSync("openid"),params:{limit:this.qiyeList.length}};this.selIndex>=0&&(e.type=this.typeList[this.selIndex].id),t("log","下表",e.type,this.selIndex," at pages/type/type.vue:250"),this.$axios.axios("POSt",this.$paths.companylist,e).then((function(t){if(200==t.code){for(var e=t.data,n=0;n<e.length;n++)e[n].mainProduct?e[n].mainProduct=e[n].mainProduct.split(","):e[n].mainProduct=[];i.qiyeList=i.qiyeList.concat(e)}else i.$tools.showToast(t.msg)})).catch((function(i){t("log","baossd",i," at pages/type/type.vue:272")}))}}};i.default=n}).call(this,e("0de9")["log"])},"543a":function(t,i,e){"use strict";e.r(i);var n=e("9878"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"61bc":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"roww center_center",staticStyle:{"font-size":"30rpx","margin-top":"30rpx"}},[e("v-uni-view",[t._v("无数据")])],1)],1)},s=[]},6997:function(t,i,e){"use strict";e.r(i);var n=e("61bc"),a=e("543a");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);var o,c=e("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"ae246d7e",null,!1,n["a"],o);i["default"]=r.exports},"75b0":function(t,i,e){"use strict";var n=e("b7d6"),a=e.n(n);a.a},"79b1":function(t,i,e){"use strict";e.r(i);var n=e("ca72"),a=e("a0cb");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("75b0");var o,c=e("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"a87beb96",null,!1,n["a"],o);i["default"]=r.exports},"84de":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAADsUlEQVRYR8WXXWgcVRTH//+ZbL9iLGqfjA8KBj9SC7YgrSK1LfqgD/oSH0rV1OyU0ogfkJklmdn0NplNm1lqhSgSZ2qsRYQ0ogWLKLaKD7WihUpo9EFQMEqgUkGyIdmPOTIbN11MSDeETO/bzD2c/++cuefcM8QyV0vLsL5pyz9JTcNzAiQ04AxL+YHOzgN/1+KatRgtZuN6/hmST1bbiMioXipsrwViWQC9h/2dWh3PAigJZEBCjFNjF4FbIXLUtoyO6wW4LIBMNjgCICUiHzqWsTsS6/H853XyBIAx20w2ryiA6wWfk3hCQnnNSRlvRGK9WX+nBp6F4DfbSt61YgBKKS2xrvEvkLdIKNuclHEhEst477SC2pBAzjum8ciKAWS8wc2gflEE+eLUeINSKh+JuV5wiEQ3wBHbbGtZMQA36x8j+KpAvnRM4/GKUCYbfABgtwhcx0qmVwSgr2/wXknoP0XOw1Ba0iljpApgFMBGCcM9TmpfBLPoWnIVuK+/3YhS3SWCGwQ855htuyoKSqlVifo7ZqLnQqHYrLr2j9UMMDw8rI9N5OvXTOUWhJrW165OcHoLhB8DXA3BlcniVPPhrpevVEX/FIBPIcg1rJm67f/iV68+UFJqR7H6fVms1xtqIks/ELj5esTRvggmcsWpTdXisxVw/E1Q2hfzEQL9pZyulNo7HdmVAVzP/47kQ+WOJiJVDjSSWvSpASkIUBDBybRlHFhIxPX8KOVNC+2RjLT02QBk9Mfv1z946tSzpTJAxgt+BXFnCNmRNo2vr6X0+EFAFIj37I7k3lqys5hN5miwC6F8BjARQnrTptEdK8BssLONCpCfbdO4L3aA3qz/mAZ+VWnVsQPMZUBwwbaS22IHcL2gm8QhQN63TeOFGwEwRKJVJOxxrH0HYwfIeP5FkJvDUF5Mp4yhGwAQTIKoL6H4cLe5/9tYAVT/wO0Jbe0f5bsiN9OgVPtkrAA9nv+oTn4DwZ+2lWyca8VxdcJr86Kct/+blmLNgOsFWRIdlRKMPQOu539C8mkRsR3L6IsdIJMNLgO4XyDPOKZxOlYApQY3JOr1iehKLhRnmlRn+y+xArhe0E/CEpHLjmVsrFzbsRxCNxu8RMgxgHUQtNlW8t0FAQAZEWB8bqgQbCW5NfrNEsgXSx1IKNo6gWwncU95EgJOOGaydd5MmMkGJwHsWapArfYimCZ5pJD7PaOUmj+UKvXWTYn6Va+AvLtWpzXZhSgCcqmA/EfKao8O4Lz1LwKMWEB0IyTzAAAAAElFTkSuQmCC"},"8e48":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAECUlEQVRYR7WWXUxbZRjH/8/pabumXUtJVplfOShuxMSrYbzwxmagkH2BTuKSqTOLySZqssQ7E53GXeoVYIjRHIkGR5w42WQqgTtjtsQtMX6BeMgmhoEbHymFtqfvY85pe3poy1rgcG5O3r5vn/f3/p//87yHsMmHuxGGwFtg7AVwGRI6qQPXKg1LlS5cax130bfMaLHmCSlifppexYVKYm8KYKULdW6SxgkEBsP2ji/paWX765gtB7EpAP1D134CDZbchPC264T+7pYCcI/7ZJrRTcYxGAABzIAxZsZl+UTqsS0F0D/ynAWjPbNJjiK7JVFSfjnh3TKAmS4Eqr3bbjHDYxMgJ4T51nXU+k6uTN4JYsMeSH/iOyUYH9wpuJ7krQHg3kBE18V1gLw59+dMYB/LgbiX2pF0VAE+DVlXAt8zEC2T36TnWMxZD/Q/C1frge09YBzPmn5Vzu1eAPHPnhdiexwzobn5wVAPA8fLBc3OD3ieX3jGqMiyKeDPQ+GEwBlI9IjEOOf2zHcX5i7xWeg9gN7MnTwXdCNjAL+4wKfkowsjlOwLNQghXVlVxkQ3F+du10U6EDM24n74Eno4vuosBWVf2AYqGbMQZ2ilr3oIoOaCXm709tO+I7ffMQCW+6oUQNJK9PzCO2C940laObtDY2alOE+s+p679ZIFQLJWYe7XtYyW+yMakAew5VT1tc9mAWoUuNImwEZybu929v8TcI2Wv4xozChSgAiq7/CMBcCycFwBBnopfq5GA0MpUdeq//C0BSDc0Nbq+Rv9HcArFP9qp8YoVgDEqr8tCzBQowgmxxVICTxKSwN3G4GtFNg94G/7N6OAAQDJWQ8QJS4mp/y0dP4ejUHFVcCsBlqnTIC5gRrFLTlbBQT+0X9o6nGKfXOfqUChBwCogYM3LADZ5XbUA4LF+8FDU29Q7ML9JT1ABsD+61kARZHdzlYBM7cFD9z4mmIXlVUAOSVMgH2TeQAPHPXAMrAzsm9ymhaHas0yLO7drAZbsgBDiuICGevyz2buAsJYsEXbbX5JLl56QANIKbwLDA8EmycyCgwpikSO3gW9weaJF02Ahe8eNAEKGzgRq8EnbQAOVoEAHws/NfFpBmD4oUwKso/lAYIabBzPKyC7HfEAgFQa6R3VTX8vmADzP+waB6GuWAGoob1jJsDN4dq7vHBPr+uaW2MxM86Hm8Zac9M0N1LfSUBHYR8gIY6EGse+yC2cH6m/AqCh3LdguXkS3BJq/POSBTAz+nDAQzzIjCfy0NwZjv7xmv0Q/43uqpfhGmQUq1WpMgQMV0V/b7Kvt67q2dHdDTIokILrn0j0179KBdVGlW1V8DVDkvaA+d5KNzZzTfjpqvjt42gUuv1//wMIJv3hr2Xu/QAAAABJRU5ErkJggg=="},9878:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{}}};i.default=n},a0cb:function(t,i,e){"use strict";e.r(i);var n=e("5240"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},b7d6:function(t,i,e){var n=e("047c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("424efd9a",n,!0,{sourceMap:!1,shadowMode:!1})},bb46:function(t,i,e){t.exports=e.p+"static/img/redu.d36f8f16.png"},ca72:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={noList:e("6997").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"colonn center_center"},[n("v-uni-view",{staticClass:"topsou roww center_center  ",staticStyle:{padding:"0rpx 24rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toSousuo.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"w-30 h-30 m-right-15",attrs:{src:e("eb8b")}}),n("v-uni-view",{staticClass:"fs-30",staticStyle:{color:"#999999"}},[t._v("搜索企业,商品")]),n("v-uni-view",{staticClass:"allline"})],1),n("v-uni-view",{staticClass:"roww w-750 border_bottom background1"},[n("v-uni-scroll-view",{staticStyle:{width:"750rpx"},attrs:{"scroll-x":!0}},[n("v-uni-view",{staticClass:"roww "},[t._l(t.typeList,(function(i,e){return n("v-uni-view",{staticClass:"colonn center_center",staticStyle:{margin:"15rpx 25rpx"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.selTypeListClick(e)}}},[n("v-uni-image",{staticClass:"typeicon",attrs:{src:i.image+"?x-oss-process=image/auto-orient,1/interlace,1/resize,p_75/quality,q_69/format,jpg"}}),t.selIndex==e?[n("v-uni-view",{staticClass:"fs-25 m-top-15",staticStyle:{color:"#007AFF","text-align":"center"}},[t._v(t._s(i.name))])]:[n("v-uni-view",{staticClass:"fs-25 m-top-15 txtShowLength w-100",staticStyle:{"text-align":"center"}},[t._v(t._s(i.name))])]],2)})),n("v-uni-view",{staticClass:"w-25"})],2)],1)],1)],1),n("v-uni-view",{staticClass:"colonn p-all-25"},[t._l(t.qiyeList,(function(i,a){return n("v-uni-view",{staticClass:"roww  p-bottom-34 m-bottom-34",staticStyle:{"border-bottom":"1rpx solid #EEEEEE"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toShopInfo(i)}}},[n("v-uni-image",{staticClass:"qiyeimg",attrs:{"lazy-load":!0,mode:"aspectFill",src:i.companyAvatar+"?x-oss-process=image/auto-orient,1/interlace,1/resize,p_75/quality,q_69/format,jpg"}}),n("v-uni-view",{staticClass:"colonn rowsbl"},[n("v-uni-view",{staticClass:"qiyename txtShowLength"},[t._v(t._s(i.companyName))]),n("v-uni-view",{staticClass:"roww"},[i.exhPlace?n("v-uni-view",{staticClass:"hzanwiehao"},[t._v(t._s(i.exhPlace))]):t._e(),n("v-uni-view",{staticClass:"allline"})],1),n("v-uni-scroll-view",{staticStyle:{width:"448rpx","margin-top":"15rpx"},attrs:{"scroll-x":!0}},[n("v-uni-view",{staticClass:"roww"},t._l(i.mainProduct,(function(i,e){return n("v-uni-view",{staticClass:"chanpintag taggtxt"},[t._v(t._s(i))])})),1)],1),n("v-uni-view",{staticClass:"roww m-top-10"},[n("v-uni-view",{staticClass:"roww center_center"},[1==i.params.isLike?[n("v-uni-image",{staticClass:"w-30 h-30 m-right-10",attrs:{src:e("8e48"),mode:"aspectFill"}}),n("v-uni-view",{staticClass:"dianzns"},[t._v("点赞")])]:[n("v-uni-image",{staticClass:"w-30 h-30 m-right-10",attrs:{src:e("84de")}}),n("v-uni-view",{staticClass:"shoucangno",staticStyle:{color:"#999999"}},[t._v("点赞")])]],2),n("v-uni-view",{staticClass:"roww center_center m-left-15"},[1==i.params.isMark?[n("v-uni-image",{staticClass:"w-30 h-30 m-right-10",attrs:{src:e("ee5b")}}),n("v-uni-view",{staticClass:" shoucang"},[t._v("收藏")])]:[n("v-uni-image",{staticClass:"w-30 h-30 m-right-10",attrs:{src:e("f896")}}),n("v-uni-view",{staticClass:"shoucangno",staticStyle:{color:"#999999"}},[t._v("收藏")])]],2),n("v-uni-view",{staticClass:"allline"}),n("v-uni-view",{staticClass:"roww center_center m-left-15"},[n("v-uni-image",{staticClass:"w-30 h-30 m-right-10",attrs:{src:e("bb46")}}),n("v-uni-view",{staticClass:" shoucang"},[t._v("热度"+t._s(i.views))])],1)],1)],1)],1)})),t.qiyeList.length<=0?n("v-uni-view",[n("noList")],1):t._e()],2)],1)},s=[]},eb8b:function(t,i,e){t.exports=e.p+"static/img/sousuo.38969c51.png"},ee5b:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADkElEQVRYR72XX2ibZRTGn+fLv0ptXaVaixaZbaewDrzYhF3salMYgqA41AmuzBFYNHZsaLsm69IuqSk6HFS7ue0iCk5loOCNMB3iLmTMCcOtKLZhDpExzeZoGrakyftIoitNl6z5snTfzUuS857zOyfnPCchbuNJdHc/lr/eHIv9Wq0bVnsxsWnTK4I+KtwnXr4v9vGRanxVBaD16z2XW1riAB78P+ifl1KpR5YfPZqxC1EVQOLVbh8MPygKJr3WHIuNLTrA+IYN7gcaG+OAHpobjMAfF6eSHXarYLsCV7Zs2QqoTKb03Xv48H47VbAFkM++temeSYBtpYIQuBAHO1cePDhTKYQtgKter1fEh7dyTsq75MChQzUHOO31ujoc1oSkh0lAAkqdEH6fNFpWaRUqqsDfmzc3uOvcUQG+SjIj8H4a1s77x8amF7KfBZDf70lKS6Fsh2i1Q2wH1E6gHdRSie6FnBV9TmUonhcQBxgHFadMHHRONpDnOTqaLmhY0u97XrCi+WAqiBpwJ04AcQt6i8k3Xr8ioMlWdrUyJhNM9vh/ALB6NvUbzm+UYlFf8wQvb/e1eeQ6LqiTIAThDp0TmXR2baEJU9u2tcqB7yA8WqvqLuDnFxqsrd+37+LsFEz39LTQaR0HsXxRIYSzhtfWNbx74K//NvmcZ2rHjmanA99IenwxIEieyebwZOPevYm5rVUU62rf1ia3qT8GaGVJqSsngQu+j9MZK/XUkuj+f+Zt0Ztzld/feL2+7lsAq2pUiR/rUtfXcXR0ar6/slI83du7wmnp57wo3e4kWoZdnpGR8TIbtHSOCr7ZmZb1W00qQLOsLvzOhC2AdKDvWZBf1ESYhec8keiXtgBmBvoDRgjXYjlYBkFXeDhiCyATCn4G6YXafAX43B2KvGgLYGZw1zlItRElYty1O9xVMYBCIXfOyk0LdNWiB0jMOHKOuxkK3fS/oeQYKhLqyhmdLVd+kjlJnxiL77kAGGO2g9ZGSY5ydxwWVzAQOleRDmTDgy8ROjK/AWlRxuirnMkFPAN7iuY6Dy0wLOAZQPm1WvTrRjIbncGhTysC0PBQ0EB7iiSTOMGcehkMnbxVY2p4aLWgEQFriu24y9E/EK4M4O2hVSC/l3AXiTOA6Wff7q/tTISig08DVriw2MhrlNZw58BPFQHkjRSJtMKpNvYGT9kJPN9WI+EnkOUFBgKXSvn5FzpbuHTntq+2AAAAAElFTkSuQmCC"},f896:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAESUlEQVRYR72XX2hbVRzHv7+TZK3LlD0I7mHgRiO0MLF7EPowYYIDBYUNNlBUVlmyTSZ0Ym/SLul6uiZrm0TWPYxpc0snDBQqOFBQUHBgYQUHTiysYIYKfajgw3BLbXv//OTcNC6N9665d877ciE55/w+v+/5/buEB3jOvD/5jNp++r0jPwY9hoJuPFvUDzPjktpPhO5TvfGPgpwVCEDKqdZw1PqFgG3KKAOLZiW0U8q3lv1CBALI5fUeEMYB3Fgz2AnGyXQyfv6hA9R7b9s4oAwKgc/AWDCWFnZKKU0/EL4VyBb1w1S9+xtpLb5bGcsV9B8AdDKhO+MzFnwBSCnDkej2mwBiyvuBVPyKAhge0/c7KgBlo7LQ4UcFXwBu3tfkzhX0nwDs8qtC0wD13gP8ZlpLXK6/61x+ohskpvyq0BSAlBe2hKMtIwS842WgHpDB42ZldUDKE3c3Csh/AFR0i1ajTYQoRjZiIMSYaBcYMaJqvoPZtC3sG+hPXHU7eHiktFeE8DWIwtXlWAShTMxzYJRZoGxbXLaXI7dqNYOyxcnXiW0JUMyLlhnLIMyyyUNexmt7FQSFaRCMLiK0eivAZWZkKFso3SHQFuWdomVGWb1h27eYQmWLeU6mEgsbSen2vxy5uCMUirQTWzEI0bamZky9lUoM/oNyef0aCF0Azxu8+rxMnlgMYqzZPTJ/YVuENn0LUDsDM1T/w8OGcLPlBOH/AeFl414W1EnzXytxPwfX1YHqwpZpAHsUBBO9mOmN/9bs/bqtyxb1J4n5K3XnAGYMXjlUH2f/KkSq6ESiLV86EKrDYeXZoIHpOISW70HY7hivrLzUWJxcK6EDsXmTKihdzNAzyXgiiArZvF4iQhzMs8bS6j63yuhZinP5iU6QUG22nNbiTwUByBX0n1XnBNu708mjteFl3VGeAPLsh+2RSEi13gcGMAyrQ546Nu/mhCfA8FjpoBA0zcxfZJKJV4IokM2XPieil23bOjCQOubMDo2P9xUUJgcBlgwUM1pcCwRQ0AsE9AIk09qRIZ8ApWmADlqW/drpvqOfBAE4MzrxaigkPgb407SWOOQToDrhuAXQcP5SG8HoJaIXqm2Xv4Gg0caaURfIc2kt/nTTAM7ku9m8Q0RhoxJ6pNa7c+OlJ9hAH5iON7baasvmDyiC0fTJxO9OiZdTrZGo9Rczm+ZS+FG37wbXGLhHzvNpLdEh5bmtkehjPczc5xhWrVvQZdh29TtAiB7Y/MZai71LEEWj8ud5Kd+9nSuUbjpV0CMVXQFqd6cygIhmGOgjYKtjjHEFsIca89qBhhgEYX91GW4TMMrMe1QmeMWSuwJrGVB/Zwxchc39mVRi9n4BmR0rdUGQmh/3rl/nngmuAOoQInznzHaM67bF2kajWCOUMx+G6Zz6YFFXxozn3OC9K+HIxR1hQY9nUsevB0nB2h7ljGmbi7L/7V/dzvkbLtg2+bEXHLoAAAAASUVORK5CYII="}}]);