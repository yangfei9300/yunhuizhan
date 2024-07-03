<template>
	<view>
		<view class="colonn background1">
			
			<swiper class="topimg">
				<swiper-item class="topimg"  v-for="(item,index) in bannerList">
					<image mode="aspectFill" src="/pages2/image/paihangbang.png"
					 :src="item.imagePath" class="topimg"></image>
				</swiper-item>
			</swiper>
			
			<view class="colonn p-all-20">
				<view class="fw-b fs-30">{{exhInfo.exhName}}</view>
				<view class="roww fs-30 m-top-15">
					<view style="color: #007AFF;">{{readCount}}</view>
					<view>次照片浏览</view>
				</view>
				<view class="roww fs-30 m-top-25  center_center">
					<image src="../../static/dingweixiao.png" class="w-30 m-right-25 h-30"></image>
					<view>{{exhInfo.exhPlace}}</view>
					<view class="allline"></view>
				</view>
				<view class="roww fs-30 m-top-15 center_center">
					<image src="../../static/jishi.png" class="w-27 m-right-25  h-27"></image>
					<view>{{exhInfo.exhStartTime}}</view>
					<view class="allline"></view>
				</view>
			</view>
		</view>                        
		<view class="colonn m-top-20 background1 " style="padding:20rpx 20rpx   0rpx 20rpx; ">
			<scroll-view
			scroll-x
			style="width: 710rpx;"
			>
				<view class="roww">
					<view class="w-20"></view>
					<menusel title="图片直播" @click="menuclick" :issel="'图片直播'==selindex"></menusel>
					<view class="w-20"></view>
					<menusel title="热门" @click="menuclick"  :issel="'热门'==selindex"></menusel>
					<view class="w-20"></view>
					<menusel title="喜欢" @click="menuclick"  :issel="'喜欢'==selindex"></menusel>
					<block v-for="(item,index) in imgTypes">
						<view class="w-20"></view>
						<menusel :title="item.name" 
						@click="menuclick(item)"  
						:issel="item.name==selindex"
						></menusel>
					</block>
				</view>
			</scroll-view>
			
		</view>
		<view class="huanhang  p-all-10" >
				<image v-for="(item,index) in imgList"
				 @click.stop="getImgInfo(item,index)" lazy-load
				 :src="item.url+'?x-oss-process=style/img_live'" mode="aspectFill" class="imagevie"></image>
			
		</view>  
		
				<view class="huuibeijing"  v-if="imgAlert">
					<swiper
					 @change="imgChange"
					 class="w-750 huuibeijing" style="height: 100vh;" :current="swindex">
						<swiper-item  class="w-750" style="height: 100vh;"
						v-for="(item,index) in imgList"
					
						>
					<view class="colonn rowsb " style="height: 100vh;">
						<view class="roww rowsb color3 center_center p-all-20" >
							<view class="colonn fs-25">
								<view>{{item.createTime}}</view>
								<!-- <view>{{imgInfo.createTime[1]}}</view> -->
							</view>
							<view class="roww">
								<view>长按图片保存</view>
							</view>
							<image src="../../static/guanbsss.png"  @click.stop="imgAlertClick" class="w-80 h-80"></image>
						</view>
						<image  @longtap="download" :src="item.url" class="w-750" mode="widthFix"></image>
						<view class="roww center_center w-750 m-bottom-25" >
							<view class="colonn center_center color3"
							
							>
								<image src="../../static/xihuan1.png" v-if="item.isLike==0" 
								@click.stop="toDianzan(1,index)"
								class="w-50 h-50"></image>
								<image src="../../static/xihuan2.png" 
								@click.stop="toDianzan(0,index)"
								v-if="item.isLike==1" class="w-50 h-50"></image>
								<view class="fs-30 m-top-15">点赞</view>
							</view>
						</view>
					</view>
					
					</swiper-item>
					</swiper>
					
				</view>
			
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selindex:'图片直播',
				'exhInfo':{},
				bannerList:[],//轮播图
				BASE_IMG:"",
				readCount:0,
				imgList:[],
				imgInfo:{},
				imgAlert:false,
				imgTypes:[],
				page:1,//页面
				typeClick:{},//分类点击事件
				selTypeInfo:{},//选中的分类id
				swindex:0,
			}
		},
		onLoad() {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getExhInfo();
			this.getBanners();
			this.getLiulancishu();
			this.liveimageminiapp();
			this.getImageLiveType();
		},
		onReachBottom() {
			this.menuclick(this.typeClick,'loading');
		},
		methods: {
			imgChange(res){
				console.log("图片修改",res)
				
				this.addReadHistoey(this.imgList[parseInt(res.detail.current)].imageId);
			},
			// 给图片添加浏览量
			addReadHistoey(imageId){    
				console.log("图片修改tijiap到后台",imageId)
				var data = {
					imageId:imageId
				}
				this.$axios
					.axios('POSt', this.$paths.viewliveimageminiapp, data)
					.then(res => {
						if (res.code == 200) {
							
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取图片直播列表
			getImageLiveType(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
				}
				this.$axios
					.axios('POSt', this.$paths.classificationexhId, data)
					.then(res => {
						if (res.code == 200) {
							console.log("图片直播",res);
							this.imgTypes=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取喜欢的图片
			getliveimagelistlike(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
				}
				this.$axios
					.axios('POSt', this.$paths.liveimagelistlike, data)
					.then(res => {
						if (res.code == 200) {
							var imgList=res.data;
							for(var a=0;a<imgList.length;a++){
								if(imgList[a].url.indexOf("http")<0){
									imgList[a].url=imgList[a].url;
								}
							}
							this.imgList=imgList;
							
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			getMyLikeImgs(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
					openid:uni.getStorageSync("openid"),
				}
				this.$axios
					.axios('POSt', this.$paths.userlikelistliveimage, data)
					.then(res => {
						if (res.code == 200) {
							var imgList=res.data;
							for(var a=0;a<imgList.length;a++){
								if(imgList[a].url.indexOf("http")<0){
									imgList[a].url=imgList[a].url;
								}
							}
							this.imgList=imgList;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			download(url){
				uni.downloadFile({//下载
							url: this.imgInfo.url, //图片下载地址
							success: res => {
								if (res.statusCode === 200) {
									uni.saveImageToPhotosAlbum({//保存图片到系统相册。
										filePath: res.tempFilePath,//图片文件路径
										success: function() {
											uni.showToast({
												title: '图片保存成功',
												icon: 'none',
											});
										},
										fail: function(e) {
											console.log(e);
											uni.showToast({
												title: '图片保存失败',
												icon: 'none',
											});
										}
									});
								}
							}
						});
			},
			imgAlertClick(){
				this.imgAlert=!this.imgAlert;
			},
			// 点赞
			toDianzan(type,index){
				var data = {
					imageId:this.imgList[index].imageId,
					openid:uni.getStorageSync("openid"),
					'isLike':type
				}
				this.$axios
					.axios('POST', this.$paths.miniappliveimagelike, data)
					.then(res => {
						if (res.code == 200) {
							// this.imgInfo.isLike=type;
							var imgList=this.imgList;
							imgList[index].isLike=type;
							this.imgList=imgList;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取图片详情
			getImgInfo(info,index){
				this.swindex=index;
				this.imgAlertClick();
					this.addReadHistoey(info.imageId);
				
				return false;
				
				var data = {
					imageId:info.imageId,
					openid:uni.getStorageSync("openid")
				}
				this.$axios
					.axios('POSt', this.$paths.liveimageminiappaa, data)
					.then(res => {
						if (res.code == 200) {   
							var imgInfo=res.data;
							imgInfo.createTime=imgInfo.createTime.split(" ");
							console.log("阿杜啊的",imgInfo.url.indexOf("http"),(imgInfo.url.indexOf("http")+''),(imgInfo.url.indexOf("http")+'')=='-1',imgInfo.url)
							if((imgInfo.url.indexOf("http")+'')=='-1'){
								imgInfo.url=imgInfo.url;
							}   
							this.imgInfo=imgInfo;
							this.imgAlertClick();
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取直播列表
			liveimageminiapp(typeid){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
					params:{
						limit:this.imgList.length,
						openid:uni.getStorageSync("openid")
					},
					'classificationId':typeid?typeid:"",
					
				}     
				this.$axios
					.axios('POSt', this.$paths.liveimageminiapp, data)
					.then(res => {
						if (res.code == 200) {
							var imgList=res.data;
							for(var a=0;a<imgList.length;a++){
								if(imgList[a].url.indexOf("http")<0){
									imgList[a].url=imgList[a].url;
								}
							}
							this.imgList=this.imgList.concat(imgList);
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			
			
			// 会哦去浏览次数
			getLiulancishu(){
				// 
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
				}
				this.$axios
					.axios('POSt', this.$paths.liveimagesumViews, data)
					.then(res => {
						if (res.code == 200) {
							this.readCount=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取展会详情
			getExhInfo(){
				this.exhInfo=uni.getStorageSync("ExhInfo")
			},
			//获取当前轮播图
			getBanners(){   
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
					'type':'1'    
				}
				this.$axios
					.axios('GET', this.$paths.miniappcarousel, data)
					.then(res => {
						if (res.code == 200) {
							this.bannerList=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},  
			menuclick(res,type){
				if(!type){
					this.imgList=[];
				}
				if(res){
					this.typeClick=res;
				}
				
				
				this.page=1;
				if(res.title){
					this.selindex=res.title;
				}else if(res.name){
					this.selindex=res.name;
				}
				if(res.title=='喜欢'){
					this.getMyLikeImgs();
				}else if(res.title=='热门'){
					this.getliveimagelistlike();
				}else if(res.title=='图片直播'){
					this.liveimageminiapp();
				}else if(res){
					this.liveimageminiapp(res.id);
				}
			}
		}
	}
</script>

<style>
@import url("image_live.css");
</style>
