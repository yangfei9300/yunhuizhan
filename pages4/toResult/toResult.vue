<template>
	<view>
		<view class="h-50"></view>
		<view class="colonn w-700 background1 m-all-25 p-all-20">
			<view class="colonn fs-25">
				<view class="m-top-30 m-bottom-30">{{toResultActivityInfo.title}}</view>
				<view class="m-bottom-10">有效时间：{{toResultActivityInfo.startTime}} 至 {{toResultActivityInfo.endTime}}</view>
				<view class="m-bottom-30">活动地址：{{toResultActivityInfo.place}}</view>
			</view>
			<view style="border-bottom: 1rpx solid #999999;"></view>
			<view class="rowsb w-730">
				<view class="yuanss"></view>
				<view class="yuanss"></view>  
			</view>
			<view class="roww duiqi m-top-20">
				<view class="fs-35">扫码入场</view>
				<view class="fs-20 m-left-20 " style="color: blue;">入场式请出示本页面</view>
			</view>
			<view class="h-150"></view>
			<view class="colonn center_center">
				<!-- <image src="../../static/logo.png" class="w-350 h-350"></image> -->
				
				<tki-qrcode v-if="ifShow"
				cid="qrcode2" ref="qrcode2" 
				:val="qrValue" :size="size" 
				:onval="onval" :loadMake="loadMake"
				 :usingComponents="true"
				  @result="qrR" />
				
			<view class="h-30"></view>
				<view class="xingmi">姓名：{{enrollInfo.attendName}}</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue'
	export default {
		components: {
			tkiQrcode
		},
		data() {
			return {
				enrollInfo:{},
				toResultActivityInfo:{},
				
				
				ifShow:false,
				size:400,
				onval: false, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				qrValue:"",
				src: '' // 二维码生成后的图片地址或base64
			}
		},
		onLoad(){
			var enrollInfo=uni.getStorageSync("toResultUserInfo")//保存用户信息
			var toResultActivityInfo=uni.getStorageSync("toResultActivityInfo")//保存会议信息
			this.enrollInfo=enrollInfo;
			this.toResultActivityInfo=toResultActivityInfo;
			this.qrValue=this.enrollInfo.phonenum+"-"+this.toResultActivityInfo.id;
			this.ifShow=true;
		},
		methods: {
			qrR(res){
				this.src=res;
			}
		}
	}
</script>

<style>
	@import url(toResult.css);
</style>
