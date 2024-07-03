<template>
	<view class="roww center_center" style="height: 100vh;">
		<view class="p-all-20 roww center_center background1 w-650 h-650">
			<canvas  canvas-id="myQrcode" 
			style="margin: 20px;width:200px;height:200px;"></canvas>
		</view>
	</view>
</template>

<script>
const qrCode = require('../../style/weapp-qrcode.js')
export default {
	 components: {
	        },
	data() {
		return {
			qrPath: '',
			text: '',
			size: 400,
			quality: 'L',
			colorDark: '#000000',
			colorLight: '#ffffff',
			
			 code:'123456789',
			 showModal: false,
		};
	},  
	onLoad() {
		var userInfo=uni.getStorageSync("userInfo")
		if(userInfo.phonenum==""){
			this.$tools.showToast("请先完善手机号");
			return false;
		}
		this.getOpenid();
		let that = this;
		this.handleShowCodeClick();
	},
	methods: {
		getOpenid() {
			this.code = uni.getStorageSync('openid');
		},
	initQrCode:function(){
		new qrCode('myQrcode', {
			text:uni.getStorageSync("userInfo").phonenum,
			width: 200,  
			height: 200,
			colorDark: "#333333",
			colorLight: "#FFFFFF",
			correctLevel: qrCode.CorrectLevel.H
		})
	},
	handleShowCodeClick:function(){
		this.showModal = true
		this.$nextTick(function(){
			this.initQrCode()
		})
	},
	handleHideCodeClick:function(){
		this.showModal = false
	},
	}
};
</script>

<style>
	@import url('my_erweima.css');
</style>
