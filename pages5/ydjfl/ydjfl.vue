<template>
	<view>
		<view
			style="padding:30rpx;"
		>
			<rich-text v-if="yubaomingInfo.invitationRules" :nodes="yubaomingInfo.invitationRules"></rich-text>
		</view>
		
		<view class="h-200"></view>
		<view class="roww center_center" style="position: fixed;bottom:100rpx;left:0rpx;width:750rpx;">
			<view class="toyudengji" @click.stop="toyudengji">前往预登记</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yubaomingInfo:{}
			}
		},
		onLoad(){
			var nowExhId=uni.getStorageSync("nowExhId");
			if(nowExhId){
				this.cicizhanhuixinxi();
			}else{
				this.getMiniapp();
			}
		},
		methods: {
			// 获取当前展会ID
			getMiniapp(){
				var data = {
					type:uni.getStorageSync("exType"),//1是环保展
				}
				this.$axios
					.axios('GET', this.$paths.miniapp, data)
					.then(res => {
						if (res.code == 200) {
							if(res.data.length>0){
								uni.setStorageSync("nowExhId",res.data[0].exhId)
								uni.setStorageSync("ExhInfo",res.data[0])
								this.cicizhanhuixinxi();
							}else{
								uni.removeStorageSync("nowExhId");
								uni.removeStorageSync("ExhInfo");
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			
			cicizhanhuixinxi(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),//
				}
				this.$axios
					.axios('post', this.$paths.enrollconfig, data)
					.then(res => {    
						if (res.code == 200) {
							if(res.data.length>0){
								this.yubaomingInfo=res.data[0];
								
								
								uni.setStorageSync("yubaominghuacn",this.yubaomingInfo)
								
								
								if(this.yubaomingInfo.invitationRules){
									this.yubaomingInfo.invitationRules=this.yubaomingInfo.invitationRules.replace(/\<img/gi, '<img style="width:100%" ')
								}
								
							}else{
								this.yubaomingInfo=null;
								// setTimeout(res=>{
								// 	uni.reLaunch({
								// 		url:"/pages/index/index"
								// 	})
								// },1000)
								
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			
			toyudengji(){
				
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){
					this.$tools.showToast("请先登录");
					console.log("/pages/wode/wode?type='yudengjix'",)
					setTimeout(res=>{
						uni.setStorageSync("toPage","/pages5/ydjfl/ydjfl");
						
						uni.switchTab({
							url:"/pages/wode/wode"
						}) 
						
					},1000)
					return false;
				}
				
				uni.navigateTo({
					url:"/pages3/yudengjiX/yudengjiX"
				})
			}
		}
	}
</script>

<style>
@import url(ydjfl.css);
</style>
