<template>
	<view>
		<web-view :src="weburl"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				weburl: "",
				logoUrl:"",
			}
		},
		onLoad() {
			this.logoUrl=this.$tools.getLogos(parseInt(uni.getStorageSync("exType")));
			this.towebview();
		},

		onShareTimeline() {
			var ExhInfo = uni.getStorageSync("ExhInfo");
			var userInfo = uni.getStorageSync("userInfo");
			if (!userInfo) {
				this.$tools.showToast("请先登录");
				userInfo = {
					'userId': ""
				};
			}
			return {
				title: ExhInfo.exhName,
				imageUrl: this.logoUrl ,
				path: '/pages3/yudengjiX/yudengjiX?scene=' + userInfo.unionid
			}
		},
		onShareAppMessage() {

			var userInfo = uni.getStorageSync("userInfo");
			var ExhInfo = uni.getStorageSync("ExhInfo");

			var txt = "?openid=" + uni.getStorageSync("openid");
			if (userInfo) {
				txt = txt + "&scene=" + userInfo.unionid
			}
			console.log("分享参数", txt)
			return {
				title: ExhInfo.exhName,
				imageUrl: this.logoUrl,
				path: '/pages3/yudengjiX/yudengjiX' + txt
			}
		},

		methods: {
			// 跳转到网页
			towebview() {
				// exType=2&exhId=122&wxPhone=18477745552
				var exType = uni.getStorageSync("exType");
				var nowExhId = uni.getStorageSync("nowExhId");
				var userInfo = uni.getStorageSync("userInfo");
				// var data="exType="+exType+"&exhId="+nowExhId;

				var data = "clear=1&exType=" + exType + "&exhId=" + nowExhId;
				var upUid = uni.getStorageSync("upUid");
				if (upUid) {
					data = data + "&upUid=" + upUid;
				}
				if (userInfo && userInfo.phonenum) {
					data = data + "&wxPhone=" + userInfo.phonenum;
				}

				var url = "https://frdzhtsignup.zsyflive.com"
				this.weburl = url + "?" + data

			},
		}
	}
</script>

<style>

</style>
