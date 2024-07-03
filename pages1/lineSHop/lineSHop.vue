<template>
	<view>
		<view class="colonn width" style="position: fixed;top: 0rpx;left: 0rpx;z-index: 1000;" >
			<view class="background1" @click.stop="toSousuo">
				<view class="topsou background1 roww center_center"
				style="padding:0rpx 24rpx;">
					<image src="../../static/home/sousuo.png" class="w-30 h-30 m-right-15"></image>
					<view class="fs-30" style="color: #999999;">搜索商品,企业</view>
					<view class="allline"></view>
				</view>
			</view>
			
			<view class="roww background1 " style="padding: 20rpx 20rpx 0rpx 20rpx;">
				<scroll-view
				scroll-x 
				style="width:710rpx;"
				>
					<view class="roww background1">
						<block v-for="(item,index) in typeList" >
							
							<view class="colonn center_center m-right-30" 
							v-if="index==selindex"
							>
								<view class="livetxtno">{{item.name}}</view>
								<view class="selline"></view>
							</view>
							<view class="colonn center_center m-right-30"
							@click.stop="typeClick(index)"
							v-else 
							>
								<view class="livetxtno noseltxt">{{item.name}}</view>
								<view class="selline noselview"></view>
							</view>
						</block>
					</view>
				</scroll-view>
			</view>
		</view>
		
		
		<view style="height: 210rpx;"></view>
		<view class="huanhang rowsb"
		style="padding:20rpx;" v-if="goodList.length>0"
		>
			<view class="goodiew colonn"
			v-for="(item,index) in goodList"
			@click.stop="toinfo(item)" v-if="index<goodListindex*10"
			>
				<image class="goodimg" mode="aspectFill" :src="item.coverImage"></image>
				<view class="goodname txtShowLength">{{item.name}}</view>
				<view class="xunjias">{{item.price}}</view>
			</view>
		</view>
		<view v-else class="roww center_center">
			<noList></noList>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			goodList:[],
			goodListindex:1,
			
			typeList:[],
			selindex:-1,
			BASE_IMG:""
		};
	},
	onLoad() {
		this.BASE_IMG=this.$paths.BASE_IMG;
		this.getGoodType();
	},
	onReachBottom() {
		this.goodListindex=this.goodListindex+1;
	},
	methods: {  
		// 商品分类点击事件
		typeClick(index){
			this.selindex=index;
			var typeList=this.typeList;
			for(var a=0;a<typeList.length;a++){
				if(a==index){
					typeList[a].is=true;
				}else{
					typeList[a].is=false;
				}
			}
			this.typeList=typeList;
			this.getGoodList();
		},
		// 获取商品分类
		getGoodType(){
				var data={
					exhType:uni.getStorageSync("exType")
				}
				this.$axios
					.axios('POST', this.$paths.classification, data)
					.then(res => {
						if (res.code == 200) {
							var typeList=res.data;
							for(var a=0;a<typeList.length;a++){
								if(a==0){
									typeList[a].is=true;
								}else{
									typeList[a].is=false;
								}
							}
							this.typeList=typeList;
							
							if(this.typeList.length>0){
								this.selindex=0;
								this.getGoodList();
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
		},
		// 获取商品列表  
		getGoodList(){
				this.goodListindex=1;
			var data={
				exhType:uni.getStorageSync("exType"),
				  "type":this.typeList[this.selindex].id,
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
		toinfo(item){
			uni.navigateTo({
				url:"../goodInfo/goodInfo?id="+item.productId
			})
		},
		toSousuo(){
			uni.navigateTo({
				url:"../../pages3/sousuo/sousuo"
			})
		},
	}
};
</script>

<style>
@import url('lineSHop.css');
</style>
