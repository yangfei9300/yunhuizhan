(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages1-shopInfo-shopInfo"],{"0a8d":function(i,t,n){"use strict";(function(i){n("c975"),n("ac1f"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{indexSwiper:0,menus:["公司简介","产品展示","现场","3D云展"],menuIndex:0,options:{},shopInfo:{},BASE_IMG:"",bannersList:[],liulanrenList:[],goodList:[],xianchangList:[]}},onLoad:function(i){this.BASE_IMG=this.$paths.BASE_IMG,this.getShopInfo(i.id)},onShareAppMessage:function(){return{title:this.shopInfo.companyName,imageUrl:this.shopInfo.companyAvatar,path:"/pages1/shopInfo/shopInfo?id="+this.shopInfo.companyId}},methods:{showimg1:function(i,t){for(var n=[],a=0;a<i.length;a++){var o=i[a].imagePath;o.indexOf("http")<0&&(o=i[a].imagePath),n.push(o)}uni.previewImage({urls:n,current:t})},showlogo:function(i,t){uni.previewImage({urls:[i],current:0})},toDimingpian:function(){var i=this,t=uni.getStorageSync("userInfo");if(!t)return this.$tools.showToast("请先登录"),!1;if(!t.phonenum)return this.$tools.showToast("请先授权手机号"),!1;var n={companyId:this.shopInfo.companyId,nickName:t.nickname,phone:t.phonenum,exhType:uni.getStorageSync("exType")};this.$axios.axios("POST",this.$paths.companydeliver,n).then((function(t){200==t.code?i.$tools.showToast("成功递名片"):i.$tools.showToast(t.msg)})).catch((function(i){}))},showimg:function(t){var n=this.xianchangList;uni.previewImage({current:n[t],urls:n,indicator:"number",longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){i("log","选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片"," at pages1/shopInfo/shopInfo.vue:324")},fail:function(t){i("log",t.errMsg," at pages1/shopInfo/shopInfo.vue:327")}}})},getXianchangimgs:function(){var i=this,t={companyId:this.shopInfo.companyId};this.$axios.axios("POST",this.$paths.companyscene,t).then((function(t){if(200==t.code){for(var n=t.data,a=[],o=0;o<n.length;o++)n[o].url=n[o].url,a.push(n[o].url);i.xianchangList=a}else i.$tools.showToast(t.msg)})).catch((function(i){}))},toGoodInfo:function(i){uni.navigateTo({url:"../goodInfo/goodInfo?id="+i.productId})},getGoods:function(){var i=this,t={companyId:this.shopInfo.companyId,params:{openid:uni.getStorageSync("openid")}};this.$axios.axios("POST",this.$paths.productlistminiapp,t).then((function(t){200==t.code?i.goodList=t.data:i.$tools.showToast(t.msg)})).catch((function(i){}))},toOPenMap:function(){wx.openLocation({type:"gcj02",latitude:this.shopInfo.lat,longitude:this.shopInfo.lng,name:this.shopInfo.place,scale:28})},toShoucang:function(){var i=this,t=uni.getStorageSync("userInfo");if(!t)return this.$tools.showToast("请先登录"),!1;var n={companyId:this.shopInfo.companyId,openid:uni.getStorageSync("openid"),isMark:1==this.shopInfo.isMark?0:1};this.$axios.axios("POST",this.$paths.companymark,n).then((function(t){200==t.code?i.shopInfo.isMark=n.isMark:i.$tools.showToast(t.msg)})).catch((function(i){}))},toDIanzan:function(){var i=this;if(!this.$tools.islogin())return this.$tools.showToast("请先登录"),!1;var t={companyId:this.shopInfo.companyId,openid:uni.getStorageSync("openid"),isLike:1==this.shopInfo.isLike?0:1};this.$axios.axios("POST",this.$paths.companylike,t).then((function(n){200==n.code?i.shopInfo.isLike=t.isLike:i.$tools.showToast(n.msg)})).catch((function(i){}))},visitcompanyGet:function(){var i=this,t={companyId:this.shopInfo.companyId};this.$axios.axios("POST",this.$paths.visitcompany,t).then((function(t){200==t.code?i.liulanrenList=t.data:i.$tools.showToast(t.msg)})).catch((function(i){}))},getShopBanners:function(){var i=this,t={companyId:this.shopInfo.companyId};this.$axios.axios("POST",this.$paths.companycarousel,t).then((function(t){200==t.code?i.bannersList=t.data:i.$tools.showToast(t.msg)})).catch((function(i){}))},getShopInfo:function(t){var n=this,a={companyId:t,openid:uni.getStorageSync("openid"),exhId:uni.getStorageSync("nowExhId")};this.$axios.axios("POST",this.$paths.companybyid,a).then((function(i){if(200==i.code){var t=i.data;t.mainProduct?t.mainProduct=t.mainProduct.split(","):t.mainProduct=[],t.companyInfo&&(t.companyInfo=n.$tools.formatRichText(t.companyInfo)),n.shopInfo=t,n.getShopBanners(),n.visitcompanyGet()}else n.$tools.showToast(i.msg)})).catch((function(t){i("log","宝擦苏",t," at pages1/shopInfo/shopInfo.vue:498")}))},menuIndecChange:function(i){i<3?(this.menuIndex=i,1==i?this.getGoods():2==i&&this.getXianchangimgs()):this.$tools.showToast("敬请期待")},swiperChange:function(i){this.indexSwiper=i.detail.current}}};t.default=a}).call(this,n("0de9")["log"])},"28bc":function(i,t,n){i.exports=n.p+"static/img/fenxiang.11a706d7.png"},"2ad7":function(i,t,n){"use strict";n.r(t);var a=n("4e2e"),o=n("eac0");for(var e in o)"default"!==e&&function(i){n.d(t,i,(function(){return o[i]}))}(e);n("7d71");var s,g=n("f0c5"),c=Object(g["a"])(o["default"],a["b"],a["c"],!1,null,"8de1484e",null,!1,a["a"],s);t["default"]=c.exports},"4e2e":function(i,t,n){"use strict";var a;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return e})),n.d(t,"a",(function(){return a}));var o=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",[a("v-uni-swiper",{staticClass:"banner",attrs:{autoplay:!0},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.swiperChange.apply(void 0,arguments)}}},i._l(i.bannersList,(function(t,n){return a("v-uni-swiper-item",{staticClass:"banner",on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.showimg1(i.bannersList,n)}}},[a("v-uni-image",{staticClass:"banner",attrs:{src:t.imagePath,mode:"aspectFill"}})],1)})),1),a("v-uni-view",{staticClass:"roww center_center",staticStyle:{position:"relative",top:"-30rpx"}},[i._l(i.bannersList.length,(function(t,n){return[i.indexSwiper==n?[a("v-uni-view",{staticClass:"selicons"})]:[a("v-uni-view",{staticClass:"weixuans"})]]}))],2),a("v-uni-view",{staticClass:"roww  background1 p-bottom-34 ",staticStyle:{"border-bottom":"1rpx solid #EEEEEE",padding:"20rpx"}},[a("v-uni-image",{staticClass:"qiyeimg",attrs:{mode:"aspectFill",src:i.shopInfo.companyAvatar},on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.showlogo(i.shopInfo.companyAvatar)}}}),a("v-uni-view",{staticClass:"colonn rowsbl"},[a("v-uni-view",{staticClass:"qiyename txtShowLength"},[i._v(i._s(i.shopInfo.companyName))]),a("v-uni-view",{staticClass:"roww"},[i.shopInfo.exhPlace?a("v-uni-view",{staticClass:"hzanwiehao"},[i._v(i._s(i.shopInfo.exhPlace))]):i._e(),a("v-uni-view",{staticClass:"allline"}),a("v-uni-view",{staticClass:"roww center_center m-left-15"},[a("v-uni-image",{staticClass:"w-30 h-30 m-right-10",attrs:{src:n("bb46")}}),a("v-uni-view",{staticClass:" shoucang"},[i._v("热度"+i._s(i.shopInfo.views))])],1)],1),a("v-uni-scroll-view",{staticStyle:{width:"448rpx","margin-top":"15rpx"},attrs:{"scroll-x":!0}},[a("v-uni-view",{staticClass:"roww"},i._l(i.shopInfo.mainProduct,(function(t,n){return a("v-uni-view",{staticClass:"chanpintag taggtxt"},[i._v(i._s(t))])})),1)],1),a("v-uni-view",{staticClass:"roww m-top-20"},[a("v-uni-view",{staticClass:"roww center_center",on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.toDIanzan.apply(void 0,arguments)}}},[1==i.shopInfo.isLike?[a("v-uni-image",{staticClass:"w-30 h-30 m-right-10",attrs:{src:n("8e48")}}),a("v-uni-view",{staticClass:"dianzns"},[i._v("点赞")])]:[a("v-uni-image",{staticClass:"w-30 h-30 m-right-10",attrs:{src:n("84de")}}),a("v-uni-view",{staticClass:"dianzns",staticStyle:{color:"#999999"}},[i._v("点赞")])]],2),a("v-uni-view",{staticClass:"roww center_center m-left-15",on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.toShoucang.apply(void 0,arguments)}}},[1==i.shopInfo.isMark?[a("v-uni-image",{staticClass:"w-30 h-30 m-right-10",attrs:{src:n("ee5b")}}),a("v-uni-view",{staticClass:"shoucang"},[i._v("收藏")])]:[a("v-uni-image",{staticClass:"w-30 h-30 m-right-10",attrs:{src:n("f896")}}),a("v-uni-view",{staticClass:"shoucang",staticStyle:{color:"#999999"}},[i._v("收藏")])]],2)],1)],1)],1),a("v-uni-view",{staticClass:"roww p-all-22 center_center background1 p-bottom-22",on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.toOPenMap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"gongsidhzitxt"},[i._v("公司地址:")]),a("v-uni-view",{staticClass:"shandongjisns"},[i._v(i._s(i.shopInfo.place))]),a("v-uni-view",{staticClass:"allline"}),a("v-uni-image",{staticClass:"w-50 h-50",attrs:{src:n("e0c8")}})],1),a("v-uni-view",{staticClass:"colonn background1 m-top-20 "},[a("v-uni-view",{staticClass:"rowsa background1 ",staticStyle:{"padding-top":"20rpx"}},i._l(i.menus,(function(t,n){return a("v-uni-view",{staticClass:"colonn center_center",on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.menuIndecChange(n)}}},[a("v-uni-view",{class:{livetxtno:n==i.menuIndex,"livetxtno noseltxt":n!=i.menuIndex}},[i._v(i._s(t))]),a("v-uni-view",{class:{selline:n==i.menuIndex,"selline noselview":n!=i.menuIndex}})],1)})),1),0==i.menuIndex?a("v-uni-view",{staticClass:"colonn",staticStyle:{padding:"24rpx"}},[i.shopInfo.companyInfo?a("v-uni-rich-text",{attrs:{nodes:i.shopInfo.companyInfo}}):i._e()],1):i._e(),1==i.menuIndex?a("v-uni-view",{staticClass:"colonn"},i._l(i.goodList,(function(t,o){return a("v-uni-view",{staticClass:"roww p-all-20 ",on:{click:function(n){n.stopPropagation(),arguments[0]=n=i.$handleEvent(n),i.toGoodInfo(t)}}},[a("v-uni-image",{staticClass:"goodlist m-right-40",attrs:{src:t.coverImage}}),a("v-uni-view",{staticClass:"colonn rowsbl"},[a("v-uni-view",{staticClass:"shangpinname txtShowLength1"},[i._v(i._s(t.name))]),a("v-uni-view",{staticClass:"roww m-top-24"},[a("v-uni-view",{staticClass:"xunjiabigviwe roww center_center"},[a("v-uni-image",{staticClass:"w-30 h-30 m-right-15",attrs:{src:"/static/kefu.png"}}),a("v-uni-view",{staticClass:"xunjiatxt"},[i._v("询价")])],1),a("v-uni-view",{staticClass:"allline"}),a("v-uni-view",{staticClass:"roww center_center"},[a("v-uni-image",{staticClass:"w-30 h-30 m-right-15",attrs:{src:n("5f73")}}),1==t.params.isMark?a("v-uni-view",{staticClass:"fs-30",staticStyle:{color:"#007AFF"}},[i._v("已收藏")]):a("v-uni-view",{staticClass:"fs-30",staticStyle:{color:"#858B9C"}},[i._v("收藏")])],1)],1)],1)],1)})),1):i._e(),a("v-uni-view",{staticClass:"huanhang p-all-10"},i._l(i.xianchangList,(function(t,n){return a("v-uni-image",{staticClass:"imgss",attrs:{mode:"aspectFill",src:t},on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.showimg(n)}}})})),1)],1),a("v-uni-view",{staticClass:"weiguanview colonn"},[a("v-uni-view",{staticClass:"roww bottom"},[a("v-uni-view",{staticClass:"weiguantxt"},[i._v("围观")]),a("v-uni-view",{staticClass:"allline"}),a("v-uni-view",{staticClass:"rees"},[i._v(i._s(i.shopInfo.visitors)+"人")])],1),a("v-uni-view",{staticClass:"roww m-top-24 "},[i.liulanrenList.length>0?a("v-uni-image",{staticClass:"headerim",attrs:{src:i.liulanrenList[0].userAvatar}}):i._e(),i._l(i.liulanrenList,(function(t,n){return n>0&&n<12?a("v-uni-image",{staticClass:"headerim",attrs:{src:t.userAvatar}}):i._e()}))],2)],1),a("v-uni-view",{staticClass:"h-170"}),a("v-uni-view",{staticClass:"roww background1 rowsa p-bottom-30 m-top-24 ",staticStyle:{"padding-top":"20px",position:"fixed",bottom:"0rpx",width:"750rpx"}},[a("v-uni-view",{staticClass:"dianzanview center_center roww",on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.toDIanzan.apply(void 0,arguments)}}},[1==i.shopInfo.isLike?a("v-uni-image",{staticClass:"w-30 h-30 m-right-10",attrs:{src:"/static/dianzanyes.png"}}):a("v-uni-image",{staticClass:"w-30 h-30 m-right-10",attrs:{src:"/static/dianzanno.png"}}),a("v-uni-view",{staticClass:"dianzans"},[i._v("点赞")])],1),a("v-uni-view",{staticClass:"dianzanviewmingpian center_center roww",on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.toDimingpian.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"w-40 h-40 m-right-10",attrs:{src:"/static/shenfen.png"}}),a("v-uni-view",{staticClass:"dianzans",staticStyle:{color:"#2E7EFF"}},[i._v("递名片")])],1)],1),a("v-uni-image",{staticClass:"w-110 h-110",staticStyle:{position:"fixed",right:"50rpx",bottom:"250rpx"},attrs:{src:n("28bc")}})],1)},e=[]},"5f73":function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAESUlEQVRYR72XX2hbVRzHv7+TZK3LlD0I7mHgRiO0MLF7EPowYYIDBYUNNlBUVlmyTSZ0Ym/SLul6uiZrm0TWPYxpc0snDBQqOFBQUHBgYQUHTiysYIYKfajgw3BLbXv//OTcNC6N9665d877ciE55/w+v+/5/buEB3jOvD/5jNp++r0jPwY9hoJuPFvUDzPjktpPhO5TvfGPgpwVCEDKqdZw1PqFgG3KKAOLZiW0U8q3lv1CBALI5fUeEMYB3Fgz2AnGyXQyfv6hA9R7b9s4oAwKgc/AWDCWFnZKKU0/EL4VyBb1w1S9+xtpLb5bGcsV9B8AdDKhO+MzFnwBSCnDkej2mwBiyvuBVPyKAhge0/c7KgBlo7LQ4UcFXwBu3tfkzhX0nwDs8qtC0wD13gP8ZlpLXK6/61x+ohskpvyq0BSAlBe2hKMtIwS842WgHpDB42ZldUDKE3c3Csh/AFR0i1ajTYQoRjZiIMSYaBcYMaJqvoPZtC3sG+hPXHU7eHiktFeE8DWIwtXlWAShTMxzYJRZoGxbXLaXI7dqNYOyxcnXiW0JUMyLlhnLIMyyyUNexmt7FQSFaRCMLiK0eivAZWZkKFso3SHQFuWdomVGWb1h27eYQmWLeU6mEgsbSen2vxy5uCMUirQTWzEI0bamZky9lUoM/oNyef0aCF0Azxu8+rxMnlgMYqzZPTJ/YVuENn0LUDsDM1T/w8OGcLPlBOH/AeFl414W1EnzXytxPwfX1YHqwpZpAHsUBBO9mOmN/9bs/bqtyxb1J4n5K3XnAGYMXjlUH2f/KkSq6ESiLV86EKrDYeXZoIHpOISW70HY7hivrLzUWJxcK6EDsXmTKihdzNAzyXgiiArZvF4iQhzMs8bS6j63yuhZinP5iU6QUG22nNbiTwUByBX0n1XnBNu708mjteFl3VGeAPLsh+2RSEi13gcGMAyrQ546Nu/mhCfA8FjpoBA0zcxfZJKJV4IokM2XPieil23bOjCQOubMDo2P9xUUJgcBlgwUM1pcCwRQ0AsE9AIk09qRIZ8ApWmADlqW/drpvqOfBAE4MzrxaigkPgb407SWOOQToDrhuAXQcP5SG8HoJaIXqm2Xv4Gg0caaURfIc2kt/nTTAM7ku9m8Q0RhoxJ6pNa7c+OlJ9hAH5iON7baasvmDyiC0fTJxO9OiZdTrZGo9Rczm+ZS+FG37wbXGLhHzvNpLdEh5bmtkehjPczc5xhWrVvQZdh29TtAiB7Y/MZai71LEEWj8ud5Kd+9nSuUbjpV0CMVXQFqd6cygIhmGOgjYKtjjHEFsIca89qBhhgEYX91GW4TMMrMe1QmeMWSuwJrGVB/Zwxchc39mVRi9n4BmR0rdUGQmh/3rl/nngmuAOoQInznzHaM67bF2kajWCOUMx+G6Zz6YFFXxozn3OC9K+HIxR1hQY9nUsevB0nB2h7ljGmbi7L/7V/dzvkbLtg2+bEXHLoAAAAASUVORK5CYII="},"7d71":function(i,t,n){"use strict";var a=n("f880"),o=n.n(a);o.a},"84de":function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAADsUlEQVRYR8WXXWgcVRTH//+ZbL9iLGqfjA8KBj9SC7YgrSK1LfqgD/oSH0rV1OyU0ogfkJklmdn0NplNm1lqhSgSZ2qsRYQ0ogWLKLaKD7WihUpo9EFQMEqgUkGyIdmPOTIbN11MSDeETO/bzD2c/++cuefcM8QyV0vLsL5pyz9JTcNzAiQ04AxL+YHOzgN/1+KatRgtZuN6/hmST1bbiMioXipsrwViWQC9h/2dWh3PAigJZEBCjFNjF4FbIXLUtoyO6wW4LIBMNjgCICUiHzqWsTsS6/H853XyBIAx20w2ryiA6wWfk3hCQnnNSRlvRGK9WX+nBp6F4DfbSt61YgBKKS2xrvEvkLdIKNuclHEhEst477SC2pBAzjum8ciKAWS8wc2gflEE+eLUeINSKh+JuV5wiEQ3wBHbbGtZMQA36x8j+KpAvnRM4/GKUCYbfABgtwhcx0qmVwSgr2/wXknoP0XOw1Ba0iljpApgFMBGCcM9TmpfBLPoWnIVuK+/3YhS3SWCGwQ855htuyoKSqlVifo7ZqLnQqHYrLr2j9UMMDw8rI9N5OvXTOUWhJrW165OcHoLhB8DXA3BlcniVPPhrpevVEX/FIBPIcg1rJm67f/iV68+UFJqR7H6fVms1xtqIks/ELj5esTRvggmcsWpTdXisxVw/E1Q2hfzEQL9pZyulNo7HdmVAVzP/47kQ+WOJiJVDjSSWvSpASkIUBDBybRlHFhIxPX8KOVNC+2RjLT02QBk9Mfv1z946tSzpTJAxgt+BXFnCNmRNo2vr6X0+EFAFIj37I7k3lqys5hN5miwC6F8BjARQnrTptEdK8BssLONCpCfbdO4L3aA3qz/mAZ+VWnVsQPMZUBwwbaS22IHcL2gm8QhQN63TeOFGwEwRKJVJOxxrH0HYwfIeP5FkJvDUF5Mp4yhGwAQTIKoL6H4cLe5/9tYAVT/wO0Jbe0f5bsiN9OgVPtkrAA9nv+oTn4DwZ+2lWyca8VxdcJr86Kct/+blmLNgOsFWRIdlRKMPQOu539C8mkRsR3L6IsdIJMNLgO4XyDPOKZxOlYApQY3JOr1iehKLhRnmlRn+y+xArhe0E/CEpHLjmVsrFzbsRxCNxu8RMgxgHUQtNlW8t0FAQAZEWB8bqgQbCW5NfrNEsgXSx1IKNo6gWwncU95EgJOOGaydd5MmMkGJwHsWapArfYimCZ5pJD7PaOUmj+UKvXWTYn6Va+AvLtWpzXZhSgCcqmA/EfKao8O4Lz1LwKMWEB0IyTzAAAAAElFTkSuQmCC"},"8e48":function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAECUlEQVRYR7WWXUxbZRjH/8/pabumXUtJVplfOShuxMSrYbzwxmagkH2BTuKSqTOLySZqssQ7E53GXeoVYIjRHIkGR5w42WQqgTtjtsQtMX6BeMgmhoEbHymFtqfvY85pe3poy1rgcG5O3r5vn/f3/p//87yHsMmHuxGGwFtg7AVwGRI6qQPXKg1LlS5cax130bfMaLHmCSlifppexYVKYm8KYKULdW6SxgkEBsP2ji/paWX765gtB7EpAP1D134CDZbchPC264T+7pYCcI/7ZJrRTcYxGAABzIAxZsZl+UTqsS0F0D/ynAWjPbNJjiK7JVFSfjnh3TKAmS4Eqr3bbjHDYxMgJ4T51nXU+k6uTN4JYsMeSH/iOyUYH9wpuJ7krQHg3kBE18V1gLw59+dMYB/LgbiX2pF0VAE+DVlXAt8zEC2T36TnWMxZD/Q/C1frge09YBzPmn5Vzu1eAPHPnhdiexwzobn5wVAPA8fLBc3OD3ieX3jGqMiyKeDPQ+GEwBlI9IjEOOf2zHcX5i7xWeg9gN7MnTwXdCNjAL+4wKfkowsjlOwLNQghXVlVxkQ3F+du10U6EDM24n74Eno4vuosBWVf2AYqGbMQZ2ilr3oIoOaCXm709tO+I7ffMQCW+6oUQNJK9PzCO2C940laObtDY2alOE+s+p679ZIFQLJWYe7XtYyW+yMakAew5VT1tc9mAWoUuNImwEZybu929v8TcI2Wv4xozChSgAiq7/CMBcCycFwBBnopfq5GA0MpUdeq//C0BSDc0Nbq+Rv9HcArFP9qp8YoVgDEqr8tCzBQowgmxxVICTxKSwN3G4GtFNg94G/7N6OAAQDJWQ8QJS4mp/y0dP4ejUHFVcCsBlqnTIC5gRrFLTlbBQT+0X9o6nGKfXOfqUChBwCogYM3LADZ5XbUA4LF+8FDU29Q7ML9JT1ABsD+61kARZHdzlYBM7cFD9z4mmIXlVUAOSVMgH2TeQAPHPXAMrAzsm9ymhaHas0yLO7drAZbsgBDiuICGevyz2buAsJYsEXbbX5JLl56QANIKbwLDA8EmycyCgwpikSO3gW9weaJF02Ahe8eNAEKGzgRq8EnbQAOVoEAHws/NfFpBmD4oUwKso/lAYIabBzPKyC7HfEAgFQa6R3VTX8vmADzP+waB6GuWAGoob1jJsDN4dq7vHBPr+uaW2MxM86Hm8Zac9M0N1LfSUBHYR8gIY6EGse+yC2cH6m/AqCh3LdguXkS3BJq/POSBTAz+nDAQzzIjCfy0NwZjv7xmv0Q/43uqpfhGmQUq1WpMgQMV0V/b7Kvt67q2dHdDTIokILrn0j0179KBdVGlW1V8DVDkvaA+d5KNzZzTfjpqvjt42gUuv1//wMIJv3hr2Xu/QAAAABJRU5ErkJggg=="},bb46:function(i,t,n){i.exports=n.p+"static/img/redu.d36f8f16.png"},e0c8:function(i,t){i.exports="data:image/png;base64,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"},eac0:function(i,t,n){"use strict";n.r(t);var a=n("0a8d"),o=n.n(a);for(var e in a)"default"!==e&&function(i){n.d(t,i,(function(){return a[i]}))}(e);t["default"]=o.a},ee5b:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADkElEQVRYR72XX2ibZRTGn+fLv0ptXaVaixaZbaewDrzYhF3salMYgqA41AmuzBFYNHZsaLsm69IuqSk6HFS7ue0iCk5loOCNMB3iLmTMCcOtKLZhDpExzeZoGrakyftIoitNl6z5snTfzUuS857zOyfnPCchbuNJdHc/lr/eHIv9Wq0bVnsxsWnTK4I+KtwnXr4v9vGRanxVBaD16z2XW1riAB78P+ifl1KpR5YfPZqxC1EVQOLVbh8MPygKJr3WHIuNLTrA+IYN7gcaG+OAHpobjMAfF6eSHXarYLsCV7Zs2QqoTKb03Xv48H47VbAFkM++temeSYBtpYIQuBAHO1cePDhTKYQtgKter1fEh7dyTsq75MChQzUHOO31ujoc1oSkh0lAAkqdEH6fNFpWaRUqqsDfmzc3uOvcUQG+SjIj8H4a1s77x8amF7KfBZDf70lKS6Fsh2i1Q2wH1E6gHdRSie6FnBV9TmUonhcQBxgHFadMHHRONpDnOTqaLmhY0u97XrCi+WAqiBpwJ04AcQt6i8k3Xr8ioMlWdrUyJhNM9vh/ALB6NvUbzm+UYlFf8wQvb/e1eeQ6LqiTIAThDp0TmXR2baEJU9u2tcqB7yA8WqvqLuDnFxqsrd+37+LsFEz39LTQaR0HsXxRIYSzhtfWNbx74K//NvmcZ2rHjmanA99IenwxIEieyebwZOPevYm5rVUU62rf1ia3qT8GaGVJqSsngQu+j9MZK/XUkuj+f+Zt0Ztzld/feL2+7lsAq2pUiR/rUtfXcXR0ar6/slI83du7wmnp57wo3e4kWoZdnpGR8TIbtHSOCr7ZmZb1W00qQLOsLvzOhC2AdKDvWZBf1ESYhec8keiXtgBmBvoDRgjXYjlYBkFXeDhiCyATCn4G6YXafAX43B2KvGgLYGZw1zlItRElYty1O9xVMYBCIXfOyk0LdNWiB0jMOHKOuxkK3fS/oeQYKhLqyhmdLVd+kjlJnxiL77kAGGO2g9ZGSY5ydxwWVzAQOleRDmTDgy8ROjK/AWlRxuirnMkFPAN7iuY6Dy0wLOAZQPm1WvTrRjIbncGhTysC0PBQ0EB7iiSTOMGcehkMnbxVY2p4aLWgEQFriu24y9E/EK4M4O2hVSC/l3AXiTOA6Wff7q/tTISig08DVriw2MhrlNZw58BPFQHkjRSJtMKpNvYGT9kJPN9WI+EnkOUFBgKXSvn5FzpbuHTntq+2AAAAAElFTkSuQmCC"},f880:function(i,t,n){var a=n("f958");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var o=n("4f06").default;o("8410d364",a,!0,{sourceMap:!1,shadowMode:!1})},f896:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAESUlEQVRYR72XX2hbVRzHv7+TZK3LlD0I7mHgRiO0MLF7EPowYYIDBYUNNlBUVlmyTSZ0Ym/SLul6uiZrm0TWPYxpc0snDBQqOFBQUHBgYQUHTiysYIYKfajgw3BLbXv//OTcNC6N9665d877ciE55/w+v+/5/buEB3jOvD/5jNp++r0jPwY9hoJuPFvUDzPjktpPhO5TvfGPgpwVCEDKqdZw1PqFgG3KKAOLZiW0U8q3lv1CBALI5fUeEMYB3Fgz2AnGyXQyfv6hA9R7b9s4oAwKgc/AWDCWFnZKKU0/EL4VyBb1w1S9+xtpLb5bGcsV9B8AdDKhO+MzFnwBSCnDkej2mwBiyvuBVPyKAhge0/c7KgBlo7LQ4UcFXwBu3tfkzhX0nwDs8qtC0wD13gP8ZlpLXK6/61x+ohskpvyq0BSAlBe2hKMtIwS842WgHpDB42ZldUDKE3c3Csh/AFR0i1ajTYQoRjZiIMSYaBcYMaJqvoPZtC3sG+hPXHU7eHiktFeE8DWIwtXlWAShTMxzYJRZoGxbXLaXI7dqNYOyxcnXiW0JUMyLlhnLIMyyyUNexmt7FQSFaRCMLiK0eivAZWZkKFso3SHQFuWdomVGWb1h27eYQmWLeU6mEgsbSen2vxy5uCMUirQTWzEI0bamZky9lUoM/oNyef0aCF0Azxu8+rxMnlgMYqzZPTJ/YVuENn0LUDsDM1T/w8OGcLPlBOH/AeFl414W1EnzXytxPwfX1YHqwpZpAHsUBBO9mOmN/9bs/bqtyxb1J4n5K3XnAGYMXjlUH2f/KkSq6ESiLV86EKrDYeXZoIHpOISW70HY7hivrLzUWJxcK6EDsXmTKihdzNAzyXgiiArZvF4iQhzMs8bS6j63yuhZinP5iU6QUG22nNbiTwUByBX0n1XnBNu708mjteFl3VGeAPLsh+2RSEi13gcGMAyrQ546Nu/mhCfA8FjpoBA0zcxfZJKJV4IokM2XPieil23bOjCQOubMDo2P9xUUJgcBlgwUM1pcCwRQ0AsE9AIk09qRIZ8ApWmADlqW/drpvqOfBAE4MzrxaigkPgb407SWOOQToDrhuAXQcP5SG8HoJaIXqm2Xv4Gg0caaURfIc2kt/nTTAM7ku9m8Q0RhoxJ6pNa7c+OlJ9hAH5iON7baasvmDyiC0fTJxO9OiZdTrZGo9Rczm+ZS+FG37wbXGLhHzvNpLdEh5bmtkehjPczc5xhWrVvQZdh29TtAiB7Y/MZai71LEEWj8ud5Kd+9nSuUbjpV0CMVXQFqd6cygIhmGOgjYKtjjHEFsIca89qBhhgEYX91GW4TMMrMe1QmeMWSuwJrGVB/Zwxchc39mVRi9n4BmR0rdUGQmh/3rl/nngmuAOoQInznzHaM67bF2kajWCOUMx+G6Zz6YFFXxozn3OC9K+HIxR1hQY9nUsevB0nB2h7ljGmbi7L/7V/dzvkbLtg2+bEXHLoAAAAASUVORK5CYII="},f958:function(i,t,n){var a=n("24fb");t=a(!1),t.push([i.i,"uni-page-body[data-v-8de1484e]{background-color:#f5f5f7}.banner[data-v-8de1484e]{width:%?750?%;height:%?364?%;background:silver;border-radius:0 0 0 0}.selicons[data-v-8de1484e]{width:%?48?%;height:%?12?%;background:#fff;border-radius:%?8?% %?8?% %?8?% %?8?%;opacity:1;margin-right:%?10?%}.weixuans[data-v-8de1484e]{width:%?12?%;height:%?12?%;background:#fff;border-radius:8px 8px 8px 8px;opacity:.4;margin-right:%?10?%}\r\n/* 商家列表样式 */.qiyeimg[data-v-8de1484e]{width:%?210?%;height:%?192?%;border-radius:%?16?%;opacity:1;background-color:silver;margin-right:%?40?%}.qiyename[data-v-8de1484e]{width:%?448?%;height:%?44?%;font-size:%?32?%;font-family:PingFang SC-Medium,PingFang SC;font-weight:700;color:#333;line-height:%?44?%}.hzanwiehao[data-v-8de1484e]{height:%?40?%;font-size:%?34?%;font-family:DIN Alternate-Bold,DIN Alternate;font-weight:700;color:#858b9c;line-height:%?44?%}.liulancishu[data-v-8de1484e]{height:%?34?%;font-size:%?24?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#858b9c;line-height:%?44?%}.chanpintag[data-v-8de1484e]{background:rgba(0,0,0,.0392156862745098);border-radius:%?4?% %?4?% %?4?% %?4?%;opacity:1;line-height:%?40?%;padding:%?0?% %?15?%;margin-right:%?15?%}.taggtxt[data-v-8de1484e]{font-size:%?20?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#858b9c}.dianzns[data-v-8de1484e]{height:%?36?%;font-size:%?26?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#fd9326;line-height:%?44?%}.shoucang[data-v-8de1484e]{height:%?44?%;font-size:%?26?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#eb5e5e;line-height:%?44?%}.shoucangno[data-v-8de1484e]{height:%?36?%;font-size:%?26?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#858b9c;line-height:%?44?%}.dbuview[data-v-8de1484e]{width:%?750?%;height:%?100?%;\r\n\t/* background: linear-gradient(180deg, rgba(46, 126, 255,0.14) 0%, #2E7EFF 100%); */border-radius:0 0 0 0}.gongsidhzitxt[data-v-8de1484e]{width:%?130?%;height:%?36?%;font-size:%?26?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#858b9c}.shandongjisns[data-v-8de1484e]{width:%?416?%;font-size:%?26?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#000;line-height:%?36?%}.livetxtno[data-v-8de1484e]{height:%?44?%;font-size:%?32?%;font-family:PingFang SC-Medium,PingFang SC;font-weight:700;color:#333;line-height:%?44?%}.selline[data-v-8de1484e]{width:%?92?%;height:%?20?%;background:linear-gradient(90deg,#2e7eff,rgba(46,126,255,0));border-radius:%?10?% %?10?% %?10?% %?10?%;opacity:.4;position:relative;top:%?-15?%}.noseltxt[data-v-8de1484e]{color:#858b9c}.noselview[data-v-8de1484e]{background:#fff;opacity:0}.weiguanview[data-v-8de1484e]{width:%?750?%;height:%?202?%;background:#fff;border-radius:0 0 0 0;opacity:1;margin-top:%?25?%;padding:%?20?% %?30?%}.weiguantxt[data-v-8de1484e]{height:%?50?%;font-size:%?36?%;font-family:PingFang SC-Medium,PingFang SC;font-weight:700;color:#333;line-height:%?50?%}.rees[data-v-8de1484e]{height:%?36?%;font-size:%?26?%;font-family:PingFang SC-Medium,PingFang SC;font-weight:700;color:#2e7eff;line-height:%?28?%}.headerim[data-v-8de1484e]{width:%?68?%;height:%?68?%;opacity:1;border:%?4?% solid #fff;background-color:#007aff;border-radius:50%;margin-left:%?-19?%}.dianzanview[data-v-8de1484e]{width:%?316?%;height:%?80?%;background:rgba(255,147,0,.058823529411764705);border-radius:%?12?% %?12?% %?12?% %?12?%;opacity:1;border:%?2?% solid #fd9426;color:#fd9426}.dianzanview1[data-v-8de1484e]{width:%?316?%;height:%?80?%;background:#f5f5f5;border-radius:%?12?% %?12?% %?12?% %?12?%;opacity:1;border:%?2?% solid #999;color:#999}.dianzans[data-v-8de1484e]{height:%?44?%;font-size:%?32?%;font-family:PingFang SC-Medium,PingFang SC;font-weight:700;line-height:%?44?%}.dianzanviewmingpian[data-v-8de1484e]{width:%?316?%;height:%?80?%;background:rgba(46,126,255,.08235294117647059);border-radius:%?12?% %?12?% %?12?% %?12?%;opacity:1;border:%?2?% solid #2e7eff}\r\n/* 商品列表 */.goodlist[data-v-8de1484e]{width:%?210?%;height:%?192?%;border-radius:%?16?%;opacity:1;background-color:#007aff}.shangpinname[data-v-8de1484e]{width:%?446?%;height:%?96?%;font-size:%?30?%;font-family:PingFang SC-Medium,PingFang SC;font-weight:700;color:#333;line-height:%?44?%}.xunjiabigviwe[data-v-8de1484e]{width:%?204?%;height:%?56?%;background:rgba(46,126,255,.08235294117647059);border-radius:%?8?% %?8?% %?8?% %?8?%;opacity:1;border:%?2?% solid #2e7eff}.xunjiatxt[data-v-8de1484e]{height:%?40?%;font-size:%?28?%;font-family:PingFang SC-Medium,PingFang SC;font-weight:700;color:#2e7eff;line-height:%?44?%}.imgss[data-v-8de1484e]{width:%?200?%;height:%?200?%;margin:%?10?%;background-color:#f5f5f5}.shoucang[data-v-8de1484e]{height:%?36?%;font-size:%?26?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#eb5e5e;line-height:%?44?%}body.?%PAGE?%[data-v-8de1484e]{background-color:#f5f5f7}",""]),i.exports=t}}]);