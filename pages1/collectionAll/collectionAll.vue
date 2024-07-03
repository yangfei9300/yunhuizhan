<template>
	<view>
		<!--  #ifdef  H5 -->
		<view class="h-150"></view>
		<!--  #endif -->
		<view 
		class="background1"
		style="position: fixed;top: 0rpx;left: 0rpx;width:750rpx;z-index: 1000;">
			<v-tabs  v-model="current"
			activeColor="#2E7EFF" 
			lineColor="#2E7EFF"  :scroll="false" :tabs="tabs" @change="changeTab"></v-tabs>
		</view>
		<view class="h-70"></view>
		
		
		
		<view class="colonn background1 p-all-25"  v-if="current==0">
			<view class="colonn border_bottom background1 p-bottom-20 p-all-20"
			v-for="(item,index) in shoucangList" v-if="current<=1"
			@click.stop="toGongxuInfo(item)"
			>
				<view class="fs-30">
					<block v-if="item.type==1">供应</block>
					<block v-if="item.type==2">采购</block>
					
					：{{item.content}}</view>
				<view class="fs-30 m-top-15">
					{{item.represent}}
				</view>
				<view class="roww bottom"> 
					<view class="huanhang w-550">
						<view class="biaoiqianss" 
						v-for="(item1,index1) in item.label">#{{item1}}</view>
					</view>
					<view class="xiangqingbtm"
					@click.stop="toGongxuInfo(item)"
					>详情</view>
				</view>
				<view class="roww fs-25 m-top-25" style="color: #999999;">
					<view class="roww">
						{{item.views}}浏览
					</view>
					<view class="roww">
						·{{item.marks}}收藏
					</view>
					<view class="allline"></view>
					<view class="roww">
						{{item.createTime}}
					</view>
				</view>
			</view>
			  
			<view  v-if="current<=1&&xuqiuList.length<=0" class="roww center_center">
				<noList></noList>
			</view>
			
			<view v-if="current==2" class="background1">
				<rich-text :nodes="liuchnegInfo.content"></rich-text>
			</view>
		</view>
		
		
		<view class="colonn background1 p-all-25" v-if="current==1">
			<view class="colonn ">
				<!-- <view class="roww  p-bottom-34 m-bottom-34"
				style="border-bottom: 1rpx solid #EEEEEE;"
				v-for="(item,index) in 3"
				>
					<image class="qiyeimg"></image>
					<view class="colonn">
						<view class="qiyename txtShowLength">
							深圳市神火光电设备有限公司司
						</view>
						<view class="roww">
							<view class="hzanwiehao">A3-124</view>
							<view class="allline"></view>
							<view class="liulancishu">浏览343w</view>
						</view>
						<scroll-view
						scroll-x style="width:448rpx;margin-top:15rpx;"
						>
							<view class="roww">
								<view class="chanpintag taggtxt"
								v-for="(item,index) in 10"
								>环保设备</view>
							</view>
						</scroll-view>
						<view class="roww m-top-10" >
							<view class="roww center_center">
								<image src="../../static/home/dianzanyes.png"
								class="w-30 h-30 m-right-10"
								></image>
								<view class="dianzns">点赞</view>
							</view>
							<view class="roww center_center m-left-15">
								<image src="../../static/home/shoucangyes.png"
								class="w-30 h-30 m-right-10"
								></image>
								<view class="shoucang">收藏</view>
							</view>
						</view>
					</view>
				</view> -->
				
				<view class="roww border_bottom  p-bottom-34 m-bottom-34"
				style="border-bottom: 1rpx solid #EEEEEE;"
				v-for="(item,index) in shoucangList"
				@click.stop="toShopInfo(item)"
				>
					<image class="qiyeimg" :src="item.companyAvatar"></image>
					<view class="colonn rowsbl">
						<view class="qiyename txtShowLength">
							{{item.companyName}}
						</view>
						<view class="roww">
							<view class="hzanwiehao" v-if="item.exhPlace">{{item.exhPlace}}</view>
							<view class="allline"></view>
							<view class="liulancishu">浏览{{item.views}}</view>
						</view>
						<scroll-view
						scroll-x style="width:448rpx;margin-top:15rpx;"
						>
							<view class="roww">
								<view class="chanpintag taggtxt"
								v-for="(item,index) in item.mainProduct"
								>{{item}}</view>
							</view>
						</scroll-view>
						<view class="roww m-top-10" >
							<view class="roww center_center">
								<block v-if="item.isLike==1">
									<image src="../../static/home/dianzanyes.png"
									class="w-30 h-30 m-right-10"
									></image>
									<view class="dianzns">点赞</view>
								</block>
								<block v-else>
									<image src="../../static/home/dianzanno.png"
									class="w-30 h-30 m-right-10"
									></image>
									<view class="shoucangno" style="color: #999999;">点赞</view>
								</block>
							</view>
							<view class="roww center_center m-left-15">
								<block v-if="item.isMark==1">
									<image src="../../static/home/shoucangyes.png"
									class="w-30 h-30 m-right-10"
									></image>
									<view class=" shoucang">收藏</view>
								</block>
								<block v-else>
									<image src="../../static/home/shoucangno.png"
									class="w-30 h-30 m-right-10"
									></image>
									<view class="shoucangno"  style="color: #999999;">收藏</view>
								</block>
							</view>
						</view>
					</view>
				</view>
				
			</view>
		</view>
		
		<view class="colonn m-top-25" v-if="current==2">
			<view class="huanhang rowsb"
			style="padding:0rpx 20rpx 20rpx 20rpx;">
				<view class="goodview m-bottom-20" v-for="(item,index) in shoucangList"
				@click="toGoodInfo(item)"
				> 
					<image :src="item.coverImage" class="goodimg"></image>
					<view class="goodname txtShowLength1">
						{{item.name}}
					</view>
					<view class="xunjiass">{{item.price}}</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				tabs: [
				  '供需',
				  '企业',
				  '商品',
				],
				shoucangList:[],
				BASE_IMG:""
			}
		},
		onLoad() {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getShoucang();
		},
		methods: {
			toGoodInfo(item){
				uni.navigateTo({
					url:"../goodInfo/goodInfo?id="+item.productId
				})
			},
			toShopInfo(item){
				uni.navigateTo({
					url:"../shopInfo/shopInfo?id="+item.companyId
				})
			},
			toGongxuInfo(item){
				uni.navigateTo({
					url:"/pages1/demand_procurement_info/demand_procurement_info?id="+item.id
				})
			},
			changeTab(index) {
			  this.current=index;
			  this.getShoucang();
			},
			// 获取收藏
			getShoucang(){
				var data = {
					openid:uni.getStorageSync("openid"),
					"params": {
					      "type" : this.current+1,
					  }
				}
				this.$axios
					.axios('POST', this.$paths.wxusermark, data)
					.then(res => {
						if (res.code == 200) {
							var shoucangList=res.data;
							if(this.current==0){
								for(var a=0;a<shoucangList.length;a++){
									shoucangList[a].label=shoucangList[a].label.split(",");
								}
							}else if(this.current==1){
								for(var a=0;a<shoucangList.length;a++){
									if(shoucangList[a].mainProduct){
										shoucangList[a].mainProduct=shoucangList[a].mainProduct.split(",")
									}else{
										shoucangList[a].mainProduct=[];
									}
								}
								
							}
							this.shoucangList=shoucangList;
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
@import url("collectionAll.css");
</style>
