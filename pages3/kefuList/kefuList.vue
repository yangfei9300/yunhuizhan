<template>
	<view>
		<view class="roww p-all-25 border_bottom" v-for="(item,index) in list"
		@click.stop="toPhone(item)"
		>
			<image :src="item.image" class="headeer m-right-15"></image>
			<view class="colonn rowsbl">
				<view class="fs-30">{{item.name}}</view>
				<view class="fs-25">{{item.phone}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				"BASE_IMG":""
			}
		},
		onLoad() {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getKefuList();
		},
		methods: {
			toPhone(item){
				uni.makePhoneCall({
					phoneNumber:item.phone
				})
			},
			getKefuList(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
					'type':'3'
				}
				this.$axios
					.axios('POSt', this.$paths.custcareminiapp, data)
					.then(res => {
						if (res.code == 200) {
							this.list=res.data;
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
@import url("kefuList.css");
</style>
