<template>
	<view>
		<view class="colonn background1 p-all-25">
			<view 
			class="background1 "
			style="font-size: 35rpx;font-weight: bold;line-height: 50rpx;">
			<text class="yishnegzhneg">已认证</text>
			
			<block v-if="gongxuInfo.type==1">供应</block>
			<block v-if="gongxuInfo.type==2">采购</block>
			：{{gongxuInfo.content}}</view>
			<view class="huanhang  background1">
				<view class="biaoiqianss"
				style="background-color: #ffffff;color: #000000;margin-right: 0rpx;"
				>标签:</view>
				<view class="biaoiqianss" v-for="(item,index) in gongxuInfo.label">#{{item}}</view>
			</view>
			<view class="fs-30 m-top-25  background1">
				<view>需求描述：{{gongxuInfo.represent}}</view>
			</view>
			<view class="fs-30  m-top-25">
				<view>发布时间：{{gongxuInfo.createTime}}</view>
			</view>
			<view class="roww endend">
				<view class="roww center_center"
				@click.stop="toCanga"
				>
					<block v-if="gongxuInfo.isMark==1">
						<image src="../../static/home/shoucangyes.png" class="w-30 m-right-10 h-30"></image>
						<view class="fs-30" style="color: #EB5E5E;">收藏</view>
					</block>
					<block v-if="gongxuInfo.isMark!=1">
						<image src="../../static/home/shoucangno.png" class="w-30 m-right-10 h-30"></image>
						<view class="fs-30">收藏</view>
					</block>
					
				</view>
			</view>
		</view>
		
		<view class="colonn p-all-20 m-top-30">
			<view class="caonixihuan">猜你喜欢</view>
		</view>
		<view class="huanhang rowsb" 
		style="padding:0rpx 20rpx 20rpx 20rpx;">
			<view class="goodview m-bottom-20" v-for="(item,index) in goodList"
			@click="toGoodInfo(item)"
			>
				<image :src="item.coverImage" class="goodimg"></image>
				<view class="goodname txtShowLength">
					{{item.name}} 
				</view>
				<view class="xunjiass">{{item.price}}</view>
			</view>
		</view>
		
		<image src="../../static/fabujaifa.png" class="w-80 h-80 "
		style="right: 50rpx;bottom: 250rpx;position: fixed;background-color: #ffffff;border-radius: 50%;"
		@click.stop="toProcurment"
		></image>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gongxuInfo:{},
				goodList:[],
				BASE_IMG:"",
				
				imageUrl: "",
				
			}
		},
		onLoad(options) {
			this.logoUrl=this.$tools.getLogos(parseInt(uni.getStorageSync("exType")));
			
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getInfo(options.id);
		},
		
		onShareTimeline() {
		     return {
		       title: this.gongxuInfo.represent,
		       imageUrl: this.logoUrl,
		       path: '/pages1/demand_procurement/demand_procurement'
		     }
		 },
		 
		 onShareAppMessage(){
		     return {
		       title: this.gongxuInfo.represent,
		       imageUrl: this.logoUrl,
		       path: '/pages1/demand_procurement/demand_procurement'
		   }
					},
		
		methods: {
			
			
			toProcurment(){
				if(!this.$tools.islogin()){
					return false;
				}
				uni.navigateTo({
					url:"../../pages2/purchase_fabu/purchase_fabu"
				})
			},
			
			toGoodInfo(item){
				uni.navigateTo({
					url:"../goodInfo/goodInfo?id="+item.productId
				})
			},
			// 获取商品列表
			getGoodList(){
				var data={
					exhType:uni.getStorageSync("exType"),
					  "type":this.gongxuInfo.type,
					  "params": {
					      "openid" : uni.getStorageSync("openid")
					  },
				}
				this.$axios
					.axios('POST', this.$paths.producttype, data)
					.then(res => {
						if (res.code == 200) {
							this.goodList=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 收藏取消收藏
			toCanga(){
				var data={
					supplyId:this.gongxuInfo.id,
					'isMark':this.gongxuInfo.isMark==1?0:1,
					'openid':uni.getStorageSync("openid")
				}
				this.$axios
					.axios('POST', this.$paths.supplyandneedmark, data)
					.then(res => {
						if (res.code == 200) {
							this.gongxuInfo.isMark=data.isMark;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			getInfo(id){
				var data={
					'id':id,
					'openid':uni.getStorageSync("openid")
				}
				this.$axios
					.axios('POST', this.$paths.supplyandneedbyid, data)
					.then(res => {
						if (res.code == 200) {
							var gongxuInfo=res.data;
							gongxuInfo.label=gongxuInfo.label.split(",");
							this.gongxuInfo=gongxuInfo;
							this.getGoodList();
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
@import url("demand_procurement_info.css");
</style>
