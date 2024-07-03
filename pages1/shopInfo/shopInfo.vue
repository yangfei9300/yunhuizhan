<template>
	<view>
		<swiper class="banner" autoplay
		@change="swiperChange">
			<swiper-item class="banner" v-for="(item,index) in bannersList"
			@click.stop="showimg1(bannersList,index)"
			>
				<image :src="item.imagePath" mode="aspectFill" class="banner"></image>
			</swiper-item>
		</swiper>
		<view class="roww center_center" 
		style="position: relative;top: -30rpx;">
			<block v-for="(item,index) in bannersList.length">
				<block v-if="indexSwiper==index">
					<view class="selicons"></view>
				</block>
				<block v-else>
					<view class="weixuans"></view>
				</block>
			</block>
		</view>
		
		<view class="roww  background1 p-bottom-34 "
		style="border-bottom: 1rpx solid #EEEEEE;padding:20rpx;"
		>
			<image class="qiyeimg" mode="aspectFill"
			 
			 @click.stop="showlogo(shopInfo.companyAvatar)"
			 :src="shopInfo.companyAvatar"></image>
			<view class="colonn rowsbl">
				<view class="qiyename txtShowLength">
					{{shopInfo.companyName}}
				</view>
				<view class="roww">
					<view class="hzanwiehao" v-if="shopInfo.exhPlace">{{shopInfo.exhPlace}}</view>
					<view class="allline"></view>
					<!-- <view class="liulancishu">浏览{{shopInfo.views}}</view> -->
					<view class="roww center_center m-left-15">
							<image src="../../static/redu.png"
							class="w-30 h-30 m-right-10"
							></image>
							<view class=" shoucang">热度{{shopInfo.views}}</view>
					</view>
				</view>
				<scroll-view
				scroll-x style="width:448rpx;margin-top:15rpx;"
				>
					<view class="roww">
						<view class="chanpintag taggtxt"
						v-for="(item,index) in shopInfo.mainProduct"
						>{{item}}</view>
					</view>
				</scroll-view>
				<view class="roww m-top-20" >
					<view class="roww center_center"
					 @click.stop="toDIanzan"
					>
						<block v-if="shopInfo.isLike==1">
							<image src="../../static/home/dianzanyes.png"
							class="w-30 h-30 m-right-10"
							></image>
							<view class="dianzns">点赞</view>
						</block>
						<block v-else>
							<image src="../../static/home/dianzanno.png"
							class="w-30 h-30 m-right-10"
							></image>
							<view class="dianzns" style="color: #999999;">点赞</view>
						</block>
					</view>
					<view class="roww center_center m-left-15"
					@click.stop="toShoucang"
					>
						<block v-if="shopInfo.isMark==1">
							<image src="../../static/home/shoucangyes.png"
							class="w-30 h-30 m-right-10"
							></image>
							<view class="shoucang">收藏</view>
						</block>
						<block v-else>
							<image src="../../static/home/shoucangno.png"
							class="w-30 h-30 m-right-10"
							></image>
							<view class="shoucang" style="color: #999999;">收藏</view>
						</block>
						
					</view>
				</view>
			</view>
		</view>
		<view class="roww p-all-22 center_center background1 p-bottom-22"
		@click.stop="toOPenMap"
		>
			<view class="gongsidhzitxt">公司地址:</view>
			<view class="shandongjisns">{{shopInfo.place}}</view>
			<view class="allline"></view>
			<image src="../../static/home/youjiantou.png"
			class="w-50 h-50"
			></image>
		</view>
		
		<view class="colonn background1 m-top-20 ">
			<view class="rowsa background1 " style="padding-top:20rpx;">
				<!-- <view class="colonn center_center"
				>
					<view class="livetxtno noseltxt"></view>
					<view class="selline noselview"></view>
				</view> -->
				<view class="colonn center_center"
				v-for="(item,index) in menus"
				@click.stop="menuIndecChange(index)"				
				>
					<view class=""
					:class="{
						'livetxtno':index==menuIndex,
						'livetxtno noseltxt':index!=menuIndex,
					}"
					>{{item}}</view>
					<view 
					:class="{
						'selline':index==menuIndex,
						'selline noselview':index!=menuIndex,
					}"
					></view>
				</view>
				<!-- <view class="colonn center_center">
					<view class="livetxtno noseltxt">现场</view>
					<view class="selline noselview"></view>
				</view>
				<view class="colonn center_center">
					<view class="livetxtno noseltxt">3D云展</view>
					<view class="selline noselview"></view>
				</view> -->
			</view>
			<view class="colonn"
			style="padding:24rpx;" v-if="menuIndex==0"
			>
				    <rich-text v-if="shopInfo.companyInfo" :nodes="shopInfo.companyInfo"></rich-text>
			</view>
			<view class="colonn"
			 v-if="menuIndex==1"
			>
				<view class="roww p-all-20 "
				v-for="(item,index) in goodList"
				@click.stop="toGoodInfo(item)"
				>
					<image 
					:src="item.coverImage" 
					class="goodlist m-right-40"></image>
					<view class="colonn rowsbl">
						<view class="shangpinname txtShowLength1">
							{{item.name}}
						</view>
						<view class="roww m-top-24">
							<view class="xunjiabigviwe roww center_center">
								<image src="/static/kefu.png" 
								class="w-30 h-30 m-right-15"
								></image>
								<view class="xunjiatxt">询价</view>
							</view>
							<view class="allline"></view>
							<view class="roww center_center">
								<image src="../images/shoucang2.png"
								class="w-30 h-30 m-right-15"
								></image>
								<view class="fs-30" style="color: #007AFF;" v-if="item.params.isMark==1">已收藏</view>
								<view class="fs-30" style="color: #858B9C;" v-else>收藏</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="huanhang p-all-10">
				<image 
				class="imgss" mode="aspectFill" :src="item" @click.stop="showimg(index)"
				v-for="(item,index) in xianchangList"></image>
			</view>
		</view>
		
		<view class="weiguanview colonn">
			<view class="roww bottom">
				<view class="weiguantxt">围观</view>
				<view class="allline"></view>
				<view class="rees">{{shopInfo.visitors}}人</view>
			</view>
			<view class="roww m-top-24 ">
				<image class="headerim" v-if="liulanrenList.length>0" :src="liulanrenList[0].userAvatar"></image>
				<image class="headerim" v-for="(item,index) in liulanrenList" v-if="index>0&&index<12" :src="item.userAvatar"></image>
			</view>
		</view>
		<view class="h-170"></view>
		<view class="roww background1 rowsa p-bottom-30 m-top-24 "
		style="padding-top: 20px;position: fixed;bottom: 0rpx;width: 750rpx;"
		>
			<view class="dianzanview center_center roww"  @click.stop="toDIanzan">
				<image src="/static/dianzanyes.png"
				class="w-30 h-30 m-right-10" v-if="shopInfo.isLike==1"
				></image>
				<image src="/static/dianzanno.png"
				class="w-30 h-30 m-right-10" v-else
				></image>
				<view class="dianzans">点赞</view>
			</view>
			
			<!-- <view class="dianzanview1 center_center roww" v-else @click.stop="toDIanzan">
				<image src="../images/dianzanno.png"
				class="w-30 h-30 m-right-10"
				></image>
				<view class="dianzans">点赞</view>
			</view> -->
			 
			<view class="dianzanviewmingpian center_center roww"
			@click.stop="toDimingpian"
			>
				<image src="/static/shenfen.png"
				class="w-40 h-40 m-right-10"
				></image>
				<view class="dianzans" style="color: #2E7EFF;">递名片</view>
			</view>
		</view>
		
		<image src="../images/fenxiang.png"
		class="w-110 h-110" style="position: fixed;right: 50rpx;bottom: 250rpx;"
		></image>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexSwiper:0,
				menus:[
					"公司简介",
					"产品展示",
					"现场",
					"3D云展"
				],
				menuIndex:0,
				options:{},
				shopInfo:{},
				BASE_IMG:"",
				bannersList:[],
				liulanrenList:[],//历史浏览的人
				goodList:[],//商品列表
				xianchangList:[],//现场图片
			}
		},
		onLoad(options) {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getShopInfo(options.id);
			// this.getGoods();   
			
		},
		onShareAppMessage () {
		return {
		        title: this.shopInfo.companyName,
		        imageUrl:this.shopInfo.companyAvatar,
		        path: '/pages1/shopInfo/shopInfo?id='+this.shopInfo.companyId
		    }
		},
		methods: {  
			
			
			// 显示多张图
			showimg1(list,index){
				var imglist=[];
				for(var a=0;a<list.length;a++){
					var img=list[a].imagePath;
					if(img.indexOf("http")<0){
						img=list[a].imagePath;
					}
					imglist.push(img);
				}
				uni.previewImage({
							urls: imglist,
							current:index  
				});
			},
			showlogo(img,index){
				uni.previewImage({
							urls: [img],
							current:0  
				});
			},
			
			toDimingpian(){
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){  
					this.$tools.showToast("请先登录");
					return false;
				}
				if(!userInfo.phonenum){
					this.$tools.showToast("请先授权手机号");
					return false;
				}
				var data={
				  "companyId": this.shopInfo.companyId,
				  "nickName": userInfo.nickname,
				  "phone": userInfo.phonenum,
				 'exhType':uni.getStorageSync("exType"),
				}
				this.$axios
					.axios('POST', this.$paths.companydeliver, data)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast("成功递名片");
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			showimg(index){
				var xianchangList=this.xianchangList;
				uni.previewImage({
					current :xianchangList[index],
					urls: xianchangList,
					indicator:"number",
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			// 获取现场图片
			getXianchangimgs(){
				var data={
					'companyId':this.shopInfo.companyId,
				}
				this.$axios
					.axios('POST', this.$paths.companyscene, data)
					.then(res => {
						if (res.code == 200) {
							var xianchangList=res.data;
							var list=[];
							for(var a=0;a<xianchangList.length;a++){
								xianchangList[a].url=xianchangList[a].url;
								list.push(xianchangList[a].url);
							}
							this.xianchangList=list;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 商品详情
			toGoodInfo(item){
				uni.navigateTo({
					url:"../goodInfo/goodInfo?id="+item.productId
				})
			},
			// 获取产品列表
			getGoods(){
				var data={
					'companyId':this.shopInfo.companyId,
					"params": {
					    "openid" : uni.getStorageSync("openid")
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
			// 导航去公司
			toOPenMap(){
				wx.openLocation({
				      type: 'gcj02',
				      latitude:this.shopInfo.lat,
				      longitude: this.shopInfo.lng,
				      name: this.shopInfo.place,
				      scale: 28
				    })
			},
			// 收藏企业
			toShoucang(){
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){  
					this.$tools.showToast("请先登录");
					return false;
				}
				var data={
					'companyId':this.shopInfo.companyId,
					'openid':uni.getStorageSync("openid"),
					'isMark':this.shopInfo.isMark==1?0:1
				}
				this.$axios
					.axios('POST', this.$paths.companymark, data)
					.then(res => {
						if (res.code == 200) {
							this.shopInfo.isMark=data.isMark;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 点赞企业
			toDIanzan(){
				if(!this.$tools.islogin()){
					this.$tools.showToast("请先登录");
					return false;
				}
				// 点赞 
				var data={
					'companyId':this.shopInfo.companyId,
					'openid':uni.getStorageSync("openid"),
					'isLike':this.shopInfo.isLike==1?0:1
				}
				this.$axios
					.axios('POST', this.$paths.companylike, data)
					.then(res => {
						if (res.code == 200) {
							this.shopInfo.isLike=data.isLike;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取企业浏览的人 
			visitcompanyGet(){
				var data={
					'companyId':this.shopInfo.companyId
				}
				this.$axios
					.axios('POST', this.$paths.visitcompany, data)
					.then(res => {
						if (res.code == 200) {
							this.liulanrenList=res.data
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取企业轮播图 /miniapp/company/carousel
			getShopBanners(){   
				var data={
					'companyId':this.shopInfo.companyId
				}
				this.$axios
					.axios('POST', this.$paths.companycarousel, data)
					.then(res => {
						if (res.code == 200) {
							this.bannersList=res.data
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取企业详情 
			getShopInfo(id){
				var data={
					companyId:id,
					'openid':uni.getStorageSync("openid"),
					'exhId':uni.getStorageSync("nowExhId")
				}
				this.$axios
					.axios('POST', this.$paths.companybyid, data)
					.then(res => {
						if (res.code == 200) {
							var shopInfo=res.data;
							if(shopInfo.mainProduct){
								shopInfo.mainProduct=shopInfo.mainProduct.split(",")
							}else{
								shopInfo.mainProduct=[];
							}
							if(shopInfo.companyInfo){ 
								shopInfo.companyInfo=this.$tools.formatRichText(shopInfo.companyInfo);
							}
							
							
							
							this.shopInfo=shopInfo;
							this.getShopBanners();
							this.visitcompanyGet();
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log("宝擦苏",err)
					});
			},
			menuIndecChange(index){
				if(index<3){
					this.menuIndex=index;
					if(index==1){
						this.getGoods();
					}else if(index==2){
						this.getXianchangimgs();
					}
				}else{
					this.$tools.showToast("敬请期待");
				}
			},
			swiperChange(res){
				this.indexSwiper=res.detail.current;
			}
		}
	}
</script>

<style>
@import url("shopInfo.css");
</style>
