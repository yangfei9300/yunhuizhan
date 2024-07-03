<template>
	<view>
		<view class="colonn">
			<view class="colonn pore w-750 h-300">
				<swiper  class="topimg poab" style="position: absolute;top: 0rpx;left: 0rpx;">
					<swiper-item class="topimg" v-for="(item,index) in bannerList">
						<image mode="aspectFill" :src="BASE_IMG+item.imagePath" class="topimg"></image>
					</swiper-item>
				</swiper>
				<view class="roww poab" style="bottom: 0rpx;right: 0rpx;" v-if="userInfo">
					<view class="allline"></view>
					<view class="roww bottom" 
					style="margin-bottom: 25rpx;margin-right: 25rpx;">
						<view class="yonghunick">{{userInfo.nickname}}</view>
					</view>
					<image :src="userInfo.userAvatar" 
					class="w-150 h-150 m-right-20"
					style="border-radius: 15rpx;position: relative;bottom: -45rpx;"
					></image>  
				</view>
			</view>
		</view>
		<view class="colonn">
			<view class="colonn border_bottom m-top-25 p-all-20" v-for="(item,index) in 10">
				<view class="roww">
					<image class="w-100 m-right-20 h-100 border50 baciimd"></image>
					<view class="colonn rowsbl">
						<view style="font-weight: bold;">豆沙包</view>
						<view style="color: #999999;" class="fs-25">20小时前</view>
					</view>
				</view>
				<view class="fs-28 m-top-20 m-bottom-15">
					恰逢5岁生日庆典!礼物礼遇层出不穷,更有全新舞台剧"米奇妙游童话书"和全新闪耀的*奇梦之光幻影秀",快来一起发现:惊喜涟连,奇妙一整年!
				</view>
				<view class="huanhang">
					<image src="../../pages1/images/bannser1.png"
					mode="aspectFill" v-for="(item,index) in 5"
					class="w-160 h-160 m-bottom-15 m-right-15 background2"
					style="border-radius: 15rpx;"
					></image>
				</view>
				<view class="roww m-top-15">
					<view class="roww center_center">
						<image src="../../static/xiaoxi.png"
						class="m-right-15 w-35 h-35"
						></image>
						<view class="fs-25">22</view>
					</view>
					<view class="roww m-left-20 center_center">
						<image src="../../static/dianzan.png"
						class="m-right-15 w-35 h-35"
						></image>
						<view class="fs-25">22</view>
					</view>
					<view class="allline"></view>
					<view class="roww center_center">
						<image src="../../static/fenixang2.png"
						class="m-right-15 w-45 h-45"
						></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList:[],
				BASE_IMG:"",
				userInfo:null
			}
		},
		onLoad() {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getBanners();
			var userInfo=uni.getStorageSync("userInfo");
			if(userInfo){
				this.userInfo=userInfo;
			}
		},
		methods: {
			getBanners(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
					'type':'6'    
				}
				this.$axios
					.axios('GET', this.$paths.miniappcarousel, data)
					.then(res => {
						if (res.code == 200) {
							this.bannerList=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
		}
	}
</script>

<style>
@import url("dongtai.css");
</style>
