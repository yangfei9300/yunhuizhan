<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// url:"https://lbhlt.zsyflive.com?exType=2&exhId=122",
				url: "",
				logoUrl: "",
			}
		},
		onLoad() {
			console.log("论坛报名");
			this.logoUrl = this.$tools.getLogos(parseInt(uni.getStorageSync("exType")));
		},
		onShow() {
			var nowExhId = uni.getStorageSync("nowExhId");
			var exType = uni.getStorageSync("exType");
			this.url = "https://lbhlt.zsyflive.com?exType=" + exType + "&exhId=" + nowExhId;
		},
		
		
		
		// onShareTimeline() {
		// 	var userInfo = uni.getStorageSync("userInfo");
		// 	var txt = "?openid=" + uni.getStorageSync("openid");
		// 	if (userInfo) {
		// 		txt = txt + "&scene=" + userInfo.unionid
		// 	}
		// 	var ExhInfo = uni.getStorageSync("ExhInfo");
		// 	var data = this.url.split("?")[1];
		// 	txt = txt + "&" + data;
		// 	console.log("参数", txt);
		// 	return {
		// 		title: ExhInfo.exhName,
		// 		imageUrl: this.logoUrl,
		// 		path: '/pages5/luntanbaoming/luntanbaoming' + txt,
		// 	}
		// },
		onShareAppMessage() {
			var userInfo = uni.getStorageSync("userInfo");
			var ExhInfo = uni.getStorageSync("ExhInfo");
			var txt = "?openid=" + uni.getStorageSync("openid");
			if (userInfo) {
				txt = txt + "&scene=" + userInfo.unionid
			}
			var data = this.url.split("?")[1];
			txt = txt + "&" + data;
			console.log("参数", txt);
			return {
				title: ExhInfo.exhName,
				imageUrl: this.logoUrl,
				path: '/pages5/luntanbaoming/luntanbaoming' + txt,
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>