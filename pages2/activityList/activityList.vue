<template>
	<view>
		<v-tabs  v-model="current1"
		:lineScale="lineScale"
		activeColor="#2E7EFF" 
		lineColor="#2E7EFF"  
		:scroll="false" 
		:tabs="tabs1" 
		></v-tabs>
		<view class="colonn">
			<view class="roww m-top-20 border_bottom p-bottom-15"
			v-for="(item,index) in 4"
			@click="toInfo"
			>
				<image class="imagesactivew"></image>
				<view class="colonn rowsbl">
					<view class="fs-30 fweight w-400 txtShowLength">生态环境技术研讨会生态环境技术研讨会</view>
					<view class="fs-30">地点：4号办公室</view>
					<view  class="fs-30" style="color: #999999;">活动时间：2020-08-08</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					lineScale:0.2,
				current1:0 ,
				tabs1: [
				  '8月3日',
				  '8月5日',
				  '8月9日',
				  "8月10日"
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("activityList.css");
</style>
