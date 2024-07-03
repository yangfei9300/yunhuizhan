<template>
	<view>
		<web-view v-if="url!=''" :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:""
			}
		},
		onLoad(options) {
			this.url=uni.getStorageSync("webview")
		},
		onShareAppMessage() {
			var userInfo = uni.getStorageSync("userInfo");
			var ExhInfo = uni.getStorageSync("ExhInfo");
			var txt = "?openid=" + uni.getStorageSync("openid");
			if (userInfo) {
				txt = txt + "&scene=" + userInfo.unionid
			}
			txt = txt 
			console.log("参数", txt);
			var webview_webview=uni.getStorageSync("webview_webview")
			return { 
				title: webview_webview.imageInfo,
				imageUrl: webview_webview.imagePath,
				path: '/pages3/wbview/wbview' + txt,
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
