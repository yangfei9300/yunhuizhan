<template>
	<view>
		<view class="colonn ">
			<image class="topimg" mode="aspectFill" :src="zixunInfo.image"></image>
				<view  class="colonn background1 center_center  p-all-20">
					<view class="fweight">{{zixunInfo.title}}</view>
					<view class="roww endend m-top-15 w-750">
						<view class="allline"></view>
						<view style="color: #999999;font-size: 30rpx;">{{zixunInfo.createTime}}</view>
						<view class="w-20"></view>
					</view>
					<view style="font-size: 30rpx;margin-top: 40rpx;">
						<uParse v-if="zixunInfo.content" :content="zixunInfo.content" ></uParse>
					</view>
				</view>
		</view>
		<view class="h-150"></view>
		<image src="../images/daohangg.png"
		class="w-80 h-80" style="position: fixed;right: 50rpx;bottom: 50rpx;"
		></image>
	</view>
</template>

<script>
	import uParse from '@/components/u-parse/u-parse.vue'
	export default {
		components: {
		  uParse
		},
		data() {
			return {
				BASE_IMG:"",
				zixunInfo:{},
			}
		},
		onLoad(options) {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getinfo(options.id);
		},
		methods: {
			getinfo(id){
				var data = {
					infoId:id,
				}
				this.$axios
					.axios('POST', this.$paths.infominiapp, data)
					.then(res => {
						if (res.code == 200) {
							this.zixunInfo=res.data;
							this.zixunInfo.content =  this.zixunInfo.content.replace(/\<img/gi, '<img style="width:100%" ')
							
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
@import url("exhibition_information_info.css");
</style>
