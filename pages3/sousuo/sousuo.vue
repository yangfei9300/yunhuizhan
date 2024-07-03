<template>
	<view>
		<view class="roww border_bottom p-all-20">
			<input v-model="sousuoTxt" placeholder="请输入企业/商品名称" class="fs-30 allline t-lc1" placeholder-class="fs-30" />
			<view class="saomaanniu" @click.stop="getQiye">搜索</view>
		</view>
		<view class="" style="padding:0rpx 20rpx 20rpx 20rpx;">
			<v-tabs  v-model="current" activeColor="#2E7EFC" lineColor="#2E7EFC"  :tabs="tabs" @change="changeTab"></v-tabs>
		</view>
		
		<view class="p-all-20">
			<view class="roww  p-bottom-34 m-bottom-34"
			style="border-bottom: 1rpx solid #EEEEEE;" v-if="current==0"
			v-for="(item,index) in sousuList"
			@click.stop="toShopInfo(item)"
			>
				<image class="qiyeimg" mode="aspectFill" :src="item.companyAvatar"></image>
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
							<block v-if="item.params.isLike==1">
								
								
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
							<block v-if="item.params.isMark==1">
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
			
			
			<view class="huanhang rowsb"
			  v-if="current==1"
			>
				<view class="goodiew colonn"
				v-for="(item,index) in sousuList"
				@click.stop="toinfo(item)"
				>
					<image  mode="aspectFill" class="goodimg" :src="item.coverImage"></image>
					<view class="goodname txtShowLength1">{{item.name}}</view>
					<view class="xunjias">询价</view>
				</view>
			</view>
			<block v-if="sousuList.length<=0">
				<noList></noList>
			</block>
		</view>
		
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sousuoTxt:"",
				current: 0,
				tabs: [
				  '企业',
				  '商品',
				],
				sousuList:[],
				BASE_IMG:"",
			}
		},
		onLoad() {
			this.BASE_IMG=this.$paths.BASE_IMG;
		},
		onReachBottom() {
			this.getQiye();
		},
		methods: {  
			toShopInfo(item){
				uni.navigateTo({
					url:"../../pages1/shopInfo/shopInfo?id="+item.companyId
				})
			},  
			toinfo(item){
				uni.navigateTo({
					url:"../../pages1/goodInfo/goodInfo?id="+item.productId
				})
			},
			changeTab(index) {
			  this.current=index;
			  this.sousuList=[];
			  if(this.sousuoTxt!=""){ 
				  this.getQiye();
			  }
			},
			getQiye(){  
				var sousuoTxt=this.sousuoTxt;
				if(sousuoTxt==""){
					this.$tools.showToast("请输入搜索内容");
					return false;
				}
				var data={
					  "content": this.sousuoTxt,
					  "openid":uni.getStorageSync("openid"),
					  "type": this.current+1,
					  exhType:uni.getStorageSync("exType"),
					  params:{
						  limit:this.sousuList.length
					  }
				}  
				this.$axios
					.axios('POSt', this.$paths.miniappsearch, data)
					.then(res => {   
						console.log("获取IQ也",res);
						if (res.code == 200) {
							if(this.current==0){
								var qiyeList=res.data;
								for(var a=0;a<qiyeList.length;a++){
									if(qiyeList[a].mainProduct){
										qiyeList[a].mainProduct=qiyeList[a].mainProduct.split(",")
									}else{
										qiyeList[a].mainProduct=[];
									}
									
								}     
								this.sousuList=this.sousuList.concat(qiyeList);
							}else{
								var goodList=res.data;
								this.sousuList=this.sousuList.concat(goodList);
							}
							
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log("baossd",err)
					});
			},
		}
	}
</script>

<style>
@import url("sousuo.css");
</style>
