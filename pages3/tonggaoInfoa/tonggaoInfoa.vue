<template>
	<view>
		<view class="colonn p-all-20">
			<view class="fw-b fs-30">{{info.title}}</view>
			<view class="roww endend">
				<view class="fs-25" style="color: #999999;">发布于：{{info.createTime}}</view>
			</view>
			<view>
				<rich-text :nodes="info.content"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{}
			}
		},
		onLoad() {
			this.info=uni.getStorageSync("articletonggao")
					this.info.content =  this.info.content.replace(/\<img/gi, '<img style="width:100%" ')
		},
		methods: {
			
		}
	}
</script>

<style>
@import url(tonggaoInfoa.css);
</style>
