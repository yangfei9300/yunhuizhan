<template>
	<view>
		<view class="colonn">
			<view class="colonn m-top-25 p-all-20 border_bottom"
			 v-for="(item,index) in 10">
				<view class="roww">
					<image class="w-100 m-right-20 h-100 border50 baciimd"></image>
					<view class="colonn rowsbl">
						<view style="font-weight: bold;">豆沙包</view>
						<view style="color: #999999;" class="fs-25">20小时前</view>
					</view>
				</view>
				<view class="fs-28 m-top-20 m-bottom-15">
					恰逢5岁生日庆典!礼物礼遇层出不穷,更有全新舞台剧"米奇妙游童话书"和全新闪耀的*奇梦之光幻影秀",快来一起发现:惊喜涟连,奇妙一整年!
				</view>
				<view class="huanhang">
					<image src="../../pages1/images/bannser1.png"
					mode="aspectFill" v-for="(item,index) in 5"
					class="w-160 h-160 m-bottom-15 m-right-15"
					style="border-radius: 15rpx;"
					></image>
				</view>
				<view class="roww m-top-15">
					<view class="allline"></view>
					<view class="roww center_center" style="color: red;">
						<view class="fs-25">删除</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("mydongtai.css");
</style>
