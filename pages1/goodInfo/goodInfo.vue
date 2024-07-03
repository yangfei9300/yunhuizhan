<template>
	<view>
		<swiper class="topimg" autoplay indicator-dots>
			<swiper-item class="topimg" v-for="(item,index) in goodInfo.productPic">
				<image class="topimg" mode="aspectFill" :src="item"></image>
			</swiper-item>
		</swiper>
		<view class="colonn background1 p-all-20">
			<view class="jiagenum">{{goodInfo.price}}</view>
			<view class="mingsis">
				{{goodInfo.name}}
			</view>
			<view class="huanhang m-top-10">
				<view class="chanpintag taggtxt m-bottom-10"
				v-for="(item,index) in goodInfo.mainProduct"
				>{{item}}</view>
			</view>
		</view>
		
		<view class="qiyegongyings roww m-top-20 center_center"
		@click.stop="toShopInfo"
		>
			<image src="/static/qiyegongyinsga.png"
				   class="w-120 h-48 m-right-20 m-left-20"
			></image>
			<view class="gongsimings txtShowLength">{{shopInfo.companyName}}</view>
			<view class="allline"></view>
			<view class="jinruqiye">进入企业</view>
			<image src="../../static/home/youjiantou.png"
			class="w-50 h-50"  
			></image>
		</view>
		
		<view class="colonn background1 m-top-20 p-all-20">
			<view class="roww center_center " >
				<image src="/static/chanpinxiangqing.png"
				class="w-35 h-35"
				></image>
				<view class="fs-35 m-left-25" style="font-weight: bold;">产品详情</view>
				<view class="allline"></view>
			</view>
			<!-- <image class="infoimg m-bottom-20 m-top-20"></image> -->
			<rich-text :nodes="goodInfo.info"></rich-text>
		</view>
		
		<view class="colonn p-all-20 m-top-30">
			<view class="caonixihuan">猜你喜欢</view>
		</view>
		<view class="huanhang rowsb" 
		style="padding:0rpx 20rpx 20rpx 20rpx;">
			<view class="goodview m-bottom-20" v-for="(item,index) in goodList"
				@click.stop="toGoodInfo(item)"
			> 
				<image mode="aspectFill" :src="item.coverImage" class="goodimg"></image>
				<view class="goodname txtShowLength1">
					{{item.name}}
				</view>
				<view class="xunjiass">{{item.price}}</view>
			</view>
		</view>
		<view class="h-150"></view>
		<view class="roww rowsa center_center menubottomvie">
			<view class="w-300 roww rowsa" >
				<view class="colonn center_center"
				@click.stop="toShopInfo"
				>
					<image src="/static/qiye2.png"
					class="w-44 h-44 m-bottom-15"
					></image>
					<view class="fs-20">进入企业</view>
				</view>
				<view class="colonn center_center"
				@click.stop="shoucangCLick"
				>
					<image src="/static/shoucamg23.png"
					class="w-44 h-44 m-bottom-15" v-if="goodInfo.params.isMark==0"
					></image>
					<view class="fs-20" v-if="goodInfo.params.isMark==0">收藏</view>
					<image src="/static/home/shoucangyes.png"
					class="w-44 h-44 m-bottom-15" v-if="goodInfo.params.isMark==1"
					></image>
					<view class="fs-20" style="color: #EB5E5E;" v-if="goodInfo.params.isMark==1">收藏</view>
				</view>
				<view class="colonn center_center pore">   
					<image src="/static/kefu2.png"
					class="w-44 h-44 m-bottom-15"
					></image>
					<view class="fs-20">客服</view>
					<button open-type="contact" class="poab" style="width: 100%;height: 100%;top: 0rpx;left: 0rpx;opacity: 0;"></button>
				</view>
			</view>
			
			<!-- <view class="jiarugopuwuvh">加入购物车</view> -->
			<view class="yijianxunjia" @click.stop="one_click_inquiry">一键询价</view>
			<view class="w-20"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodInfo:{},
				BASE_IMG:"",
				shopInfo:{},
				goodList:[]
			}
		},
		onLoad(options) {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.options=options
			this.getGoodInfo();
		},
		methods: {
			one_click_inquiry(){
				if(!this.$tools.islogin()){
					return false;
				}
				uni.setStorageSync("goodInfoXun",this.goodInfo)
				uni.navigateTo({
					url:"../one_click_inquiry/one_click_inquiry"
				})
			},
			shoucangCLick(){
				var data={
					'productId':this.options.id,
					'openid':uni.getStorageSync("openid"),
					'params':{
						'isMark':this.goodInfo.params.isMark==1?0:1
						}
					}
				this.$axios
					.axios('POST', this.$paths.markproduct, data)
					.then(res => {
						if (res.code == 200) {
							this.goodInfo.params.isMark=data.params.isMark;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 前往商品详情
			toGoodInfo(item){
				uni.redirectTo({
					url:"/pages1/goodInfo/goodInfo?id="+item.productId
				})
			},
			// 前往店铺详情
			toShopInfo(){
				uni.redirectTo({
					url:"../shopInfo/shopInfo?id="+this.goodInfo.companyId
				})  
			},
			// 获取企业详情
			getQiyeXiangqing(){
				var data={
					companyId:this.goodInfo.companyId,
					'openid':uni.getStorageSync("openid")
				}
				this.$axios
					.axios('POST', this.$paths.companybyid, data)
					.then(res => {
						if (res.code == 200) {
							var shopInfo=res.data;
							this.shopInfo=shopInfo;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取商品详情
			getGoodInfo(){
				var data = {
					productId:this.options.id,
					params:{
						openid:uni.getStorageSync("openid")
					}
				}  
				this.$axios
					.axios('POSt', this.$paths.productbyid, data)
					.then(res => {   
						console.log("获取IQ也",res);
						if (res.code == 200) {
							var goodInfo=res.data;  
							if(goodInfo.productPic){
								goodInfo.productPic=goodInfo.productPic.split(",")
							}else{
								goodInfo.productPic=[]
							}
							
							if(goodInfo.mainProduct){
								goodInfo.mainProduct=goodInfo.mainProduct.split(",")
							}else{
								goodInfo.mainProduct=[];
							}
							if(goodInfo.info){
								goodInfo.info =  goodInfo.info.replace(/\<img/gi, '<img style="width:100%" ')
							}
							
							
							this.goodInfo=goodInfo;
							this.getQiyeXiangqing();
							this.getGoods();
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log("baossd",err)
					});
			},
			// 获取产品列表
			getGoods(){
				var data={
					'companyId':this.shopInfo.companyId,
					"params": {
					    "openid" : uni.getStorageSync("openid"),
						'limit':0
					}
				}
				this.$axios
					.axios('POST', this.$paths.productlistminiapp, data)
					.then(res => {
						if (res.code == 200) {
							this.goodList=res.data;
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
@import url("goodInfo.css");
</style>
