<template>
	<view>
		<view class="colonn center_center m-top-50">
			<view class="w-650 fs-30">您已登记成功，请至展会现场凭下方二维码入场参观</view>
			<view class="fs-35 fw-b m-top-30" v-if="yubaominghuacn.params">{{yubaominghuacn.params.exhName}}</view>
			<view class="fs-25 m-top-15"
			v-if="yubaominghuacn.params.exhStartTime"
			>{{yubaominghuacn.params.exhStartTime}}至{{yubaominghuacn.params.exhEndTime}}</view>
			<view class="colonn m-top-30" v-if="BaomingInfo">
				<view class="colonn center_center background1">
					<view class="h-30"></view>
					<view v-if="BaomingInfo.visitorName">{{BaomingInfo.visitorName}}</view>
					<view class="m-top-15 fs-25" v-if="BaomingInfo.visitorProvince">{{BaomingInfo.visitorProvince}},{{BaomingInfo.visitorCity}}{{BaomingInfo.visitorAddress}}</view>
					<view class="h-30"></view>
					
				</view>
				<view class="colonn w-650  center_center"
				style="background-color: #e6e6e6;"
				>
					<view class="h-30"></view>
					<view class="fw-b fs-30">确认码</view>
					<view class="h-30 m-top-15">{{BaomingInfo.id}}</view>
					<slot class="w-300 h-300 m-bottom-20"></slot>
					<view class="h-10"></view>
					<view class="h-30 m-top-15 fs-30">登记时间：{{BaomingInfo.createTime}}</view>
					<view class="h-50"></view>
				</view>
				
				<view class="colonn center_center">
					<view class="yqhyxfl"
					@click.stop="toJilu"
					>查看我的邀约记录</view>
				</view>
				
				<view class="colonn w-600 fs-25 m-top-20">
					<view><rich-text :nodes="yubaominghuacn.notice"></rich-text></view>
				</view>
				<view class="h-50"></view>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	const qrCode = require('../../style/weapp-qrcode.js')
	export default {
		name:"baomingchenggong",
		props: {
			'yubaominghuacn':{
				type: Object,
				value: {}
			},   
			
		},
		data() {
			return {
				qrPath: '123',
				text: '123123',
				size: 400,
				quality: 'L',
				colorDark: '#000000',
				colorLight: 'red',
				
				BaomingInfo:{},//报名信息
			};
		},
		beforeMount() {
			this.handleShowCodeClick();
			this.infovisitorGet()
		},
		methods:{
			toJilu(){
				uni.navigateTo({
					url:"/pages5/yaoyuejilu/yaoyuejilu"
				})
			},
			infovisitorGet(){
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){
					this.$tools.showToast("请先登录");
					return false;
				} 
				var data1={
					'unionid':uni.getStorageSync("userInfo").unionid,
					params:{
						exhId: uni.getStorageSync("nowExhId"),
					}
				}
				this.$axios
					.axios('POST', 
					this.$paths.enrollinfovisitor, 
					data1)
					.then(res => {
						if(res.code==200){
							this.BaomingInfo=res.data;
							uni.setStorageSync("gzInfo",this.BaomingInfo);//每个展会的观众信息
						}else{
							this.$tools.showToast(res.msg);
						}
					})  
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			
			handleShowCodeClick(){
				console.log("生成小陈新股吗")
				this.initQrCode()
			},   
			initQrCode(){
				console.log("开始",qrCode)
				new qrCode('werfsdfsdf', {
					text:"asdasdasd",
					width: 200,  
					height: 200,
					colorDark: "#333333",
					colorLight: "#FFFFFF",
					correctLevel: qrCode.CorrectLevel.H
				})
			},
		}
	}
</script>

<style>
	.yqhyxfl{
		width: 550rpx;
		height: 80rpx;
		background-color: #2E7EFC;
		border-radius: 10rpx;
		margin-top: 20rpx;
		text-align: center;
		color: white;
		line-height: 80rpx;
	}
</style>