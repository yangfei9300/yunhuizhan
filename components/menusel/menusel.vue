<template>
	<view>
		<view class="colonn center_center" v-if="issel"
		@click.stop="click(title)"
		>
			<view class="seltxt">{{title}}</view>
			<view class="linesblue"></view>
		</view>
		<view class="colonn center_center" v-if="!issel"
		@click.stop="click(title)"
		>
			<view class="seltxt" style="color: #000000;">{{title}}</view>
			<view class="linesblue" style="opacity: 0;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"menusel",
		props: {
			title: {
				type: String,
				value: ''
			},
			issel:{
				type:Boolean,
				value:false,
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			click(title){
				this.$emit("click",{'title':title})
			}
		}
	}
</script>

<style>
.linesblue{
	height: 10rpx;
	width: 100rpx;
	background-color: #007AFF;
	border-radius: 100rpx;
	margin-top: 20rpx;
}
.seltxt{
	/* min-width: 150rpx; */
	white-space:nowrap;
	font-size: 30rpx;
	font-weight: bold;
	color: #007AFF;
}
</style>
