<template>
	<view class="fs-30">
		<view class="roww border_bottom pore"  style="padding:20rpx 20rpx;">
			<view>头像</view>
			<view class="allline"></view>
			<image :src="userInfo.userAvatar" class="w-100 h-100" style="border-radius: 50%;background-color: #f5f5f5;"></image>
			<button open-type="chooseAvatar"  class="w-100 poab yincang1 h-100 "
			 style="right: 20rpx;top: 20rpx;"
			 @chooseavatar="getAvatar"></button>
		</view>
		<view class="roww border_bottom" style="padding:20rpx 20rpx;">
			<view>昵称</view>
			<view class="allline"></view>
			<input placeholder="请输入昵称" type="nickname" v-model="userInfo.nickname" class="text_align2_r" />
		</view>
		<view class="roww center_center" style="margin-top: 150rpx">
			<view class="submit" @click.stop="toSumit">确认修改</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{}
			}
		},
		onLoad() {
			this.userInfo=uni.getStorageSync("userInfo");
			
		},
		methods: {
			getAvatar(res){
				console.log("获取头像",res);
				var avatar=res.detail.avatarUrl;
				this.toUploadAvatar(avatar);
				
			},
			toUploadAvatar(img){   
				this.$axios  
					.axiosUpload(this.$paths.miniappuploadOSS, img)
					.then(res => {
						if (res.code == 200) {
								this.userInfo.userAvatar=res.fileName;
						} else {
							this.$tools.showToast(res.msg);
						}   
					})   
					.catch(err => {});
			},
			
			toSumit(){
				var userInfo=this.userInfo;
				if(userInfo.nickname==''){
					return false;
				}
				this.$axios
					.axios('POSt', this.$paths.updatewxuser, userInfo)
					.then(res => {     
						if (res.code == 200) {
							this.$tools.showToast("修改成功");
							setTimeout(res=>{
								this.getUserInfo();
							},1000)
							
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log("baossd",err)
					});
			},
			// 获取个人信息
			getUserInfo(){  
				this.$axios
					.axios('GET', this.$paths.wxUserminiapp+uni.getStorageSync("openid"), {})
					.then(res => {
						if (res.code == 200) {
							this.userInfo=res.data;
							uni.setStorageSync("userInfo",this.userInfo);
							setTimeout(res=>{
								uni.navigateBack({
									delta:1
								})    
							},1000)
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
@import url(updateUserInfo.css);
</style>
