<template>
	<view>
		<image src="/static/paihangbang.png" class="w-750" 
		style="z-idnex:1"
		mode="widthFix"></image>
		<view class="colonn pahmingview background1"  >
			<view class="roww  border_bottom center_center p-all-20 w-650"
			v-for="(item,index) in list"
			style="z-index: 1001;"
			>  
				<view  class="w-50 h-50 pore">
					<image src="/static/shoucangss.png" v-if="index<3" class="w-50 h-50 poab"
					style="z-index: 1002;top: 0rpx;left: 0rpx;"
					></image>   
					<view style="text-align: center;line-height: 50rpx;z-index: 1003;width: 50rpx;position: absolute;top: 0rpx;color: #999999;font-weight: bold;">{{index+1}}</view>
				</view>
				
				<image :src="item.userAvatar"
				class="w-80 h-80 m-left-20 m-right-20" style="border-radius: 50%;background-color: #f5f5f5;"
				></image>
				<view class="w-300 txtShowLength fs-30">{{item.nickname}}</view>
				<view class="allline"></view>
				<view class="fs-30" style="color: #999999;">{{item.nums}}人</view>
			</view>  
		</view>
		<view class="h-50"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			this.wxuserranking();
		},
		methods: {
			wxuserranking(){
				var data={
					exhType:uni.getStorageSync("exType")
				}
				var upOpenid=uni.getStorageSync("upOpenid")
				if(upOpenid){
					data.referrerId=upOpenid;
				}
				this.$axios
					.axios('POSt', this.$paths.wxuserranking, data)
					.then(res => {
						if (res.code == 200) {
							this.list=res.data
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
@import url("paiming.css");
</style>
