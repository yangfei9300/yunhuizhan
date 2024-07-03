<template>
	<view>
		<view class="colonn">
			<view class="roww w-750 fs-30 border_bottom" 
			v-for="(item,index) in bacceceList"	style="padding:25rpx 25rpx;">
				<view>
					提现金额{{item.amount}}元
				</view>
				<view class="allline">
				</view>
				<view  class="moneytxt" v-if="item.status==0">审核中</view>
				<view  class="moneytxt" v-if="item.status==1" style="color:blue;">提现成功</view>
				<view  class="moneytxt" v-if="item.status==2">提现失败</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gzInfo:{},
				bacceceList:[]
			}
		},
		onLoad() {
			this.gzInfo=uni.getStorageSync("gzInfo")
			this.gethistory()
		},
		methods: {
			gethistory(){
					var data = {
						exhId: uni.getStorageSync("nowExhId"),
						'visitor_phone':this.gzInfo.visitorPhone
					}
					this.$axios
						.axios('POST', this.$paths.logwithdrawal, data)
						.then(res => {
							if (res.code == 200) {
								this.bacceceList=res.data;
							} else {
								this.$tools.showToast(res.msg);
							}
						})
						.catch(err => {});
			}
		}
	}
</script>

<style>
@import url(subMoney.css);
</style>
