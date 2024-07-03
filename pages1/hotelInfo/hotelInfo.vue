<template>
	<view>
		<view class="colonn ">
			<image class="topimg"  :src="hotelInfo.hotelImage" mode="aspectFill" ></image>
			<view class="colonn background1 p-all-20">
				<view class="fweight">{{hotelInfo.hotelName}}</view>
				<view class="roww center_center m-top-15 m-bottom-15 fs-30"
				@click.stop="todaohang"
				>
					<view class="txtShowLength w-550">地址：{{hotelInfo.place}}</view>
					<view class="allline"></view>
					<view style="color: #2E7EFF;font-weight: bold;">去这里</view>
					<image src="../../static/home/youjiantou.png" class="w-50 h-50"></image>
				</view>
				
			</view>
				<view  class="colonn background1 center_center m-top-40 p-all-20">
					<view class="fweight m-bottom-30">酒店详情</view>
					<view>
						<rich-text :nodes="hotelInfo.hotelDetails"></rich-text>
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
	export default {
		data() {
			return {
				hotelInfo:{},
				options:{},
				BASE_IMG:""
			}
		},
		onLoad(options) {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.options=options;
			this.getHotels(options.id);
		},
		methods: {
			todaohang(){
				wx.openLocation({
				      type: 'gcj02',
				      latitude:this.hotelInfo.lat,
				      longitude: this.hotelInfo.lng,
				      name: this.hotelInfo.place,
				      scale: 28
				    })
			},
			getHotels(id){
				var data = {
				}
				this.$axios
					.axios('GET', this.$paths.eventhotel+id, data)
					.then(res => {
						if (res.code == 200) {
								this.hotelInfo=res.data;
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
@import url("hotelInfo.css");
</style>
