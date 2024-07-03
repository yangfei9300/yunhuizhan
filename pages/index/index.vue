<template>
	<view >
		<view class="colonn" style="margin:24rpx 24rpx 0rpx 24rpx;">
			
			<view class="roww center_center">
				<image :src="logoUrl" class="logo m-right-20"></image>
				<view class="topsou roww center_center  "
				style="padding:0rpx 24rpx;"
				@click="toSousuo"
				>
					<image src="../../static/home/sousuo.png"
					class="w-30 h-30 m-right-15"
					></image>
					<view class="fs-30" style="color: #999999;">搜索企业,商品</view>
					<view class="allline"></view>
				</view>  
			</view>
			
			
			<swiper 
			v-if="bannerList.length>0"
			class="baneer m-top-24 m-bottom-20" indicator-dots
			autoplay
			>
				<swiper-item class="baneer" v-for="(item,index) in bannerList"
				@click.stop="showimg1(bannerList,index)"
				>
					<!-- <image class="baneer" lazy-load mode="aspectFill" 
					:src="item.imagePath+'?x-oss-process=image/auto-orient,1/quality,q_50'"></image> -->
					<image class="baneer" lazy-load mode="aspectFill"
					:src="item.imagePath"></image>
				</swiper-item>  
			</swiper>
			
			<!-- <view class="roww w-750 h-70 m-top-20" >
				<swiper vertical autoplay class="w-700 h-70" style="background-color:#FFF0DA;">
					<swiper-item  class="w-700 h-70"  v-for="(item,index) in tongzhiList"
					@click.stop="toarticleinfp(item)"
					>
						<view class="roww center_center w-640 m-left-30">
							<image class="w-30 h-30 " src="/static/lababa.png"></image>
							<view class="tonggaolanview w-600 txtShowLength m-left-15">{{item.title}}</view>
							<view class="allline"></view>
						</view>
					</swiper-item>
				</swiper>
			</view> -->
		
		
		<block v-if="tongzhiList.length>0">
			<uni-notice-bar show-icon scrollable :speed="speed"
				:text="tongzhiList[tongzhiList.length-1].title" />
		</block>

			<view class="huanhang m-top-20">
				<block 	v-for="(item,index) in menus">
					<!-- v-if="index!=pianshen" -->
					<view class="colonn w-175 center_center m-bottom-35"
						  @click.stop="toShop(item,index)" 
					>
						<image :src="item.icon"
						class="w-92 h-92" 
						></image>
						<view class="fs-26 m-top-15">
							{{item.name}}
						</view>
					</view>
				</block>
			</view>
			
			<view class="colonn m-top-20" v-if="exType!=1">
				<!-- <view class="shouyebisiti m-bottom-20">申请报名参加本届展会</view> -->
				<view class="roww rowsa">
					<view class="zhanweiyuding" @click.stop="topage(0)">展位预定</view>
					<view class="zhanweiyuding1" @click.stop="topage(1)">获取门票</view>
				</view>
			</view>
			
			<view class="colonn" v-if="litituList.length>0">
				<view class="zhanweiliititu" style="margin:20rpx 0rpx;">展位立体图</view>
				<swiper class="zhanweilitiimg">
					<swiper-item class="zhanweilitiimg" v-for="(item,index) in litituList"
					@click.stop="toLitiImgInfo(item)"
					>
						<!-- <image class="zhanweilitiimg" lazy-load mode="aspectFill" :src="item.image+'?x-oss-process=image/auto-orient,1/resize,m_lfit,w_702/quality,q_46'"></image> -->
						<image class="zhanweilitiimg"   lazy-load mode="aspectFill" :src="item.image"></image>
					</swiper-item>
				</swiper>
			</view>
			
			<view class="colonn m-top-40" v-if="exType==1">
				<!-- <view class="shouyebisiti m-bottom-20">申请报名参加本届展会</view> -->
				<view class="roww rowsa">
					<view class="zhanweiyuding" @click.stop="topage(0)">展位预定</view>
					<view class="zhanweiyuding1" @click.stop="topage(1)">获取门票</view>
				</view>
			</view>
			
			<view class="colonn m-top-40" v-if="shipinhaoLive.length>0">
				<view class="rowsb center_center" style="margin:20rpx 0rpx;">
					<view class="zhanweiliititu">视频号直播</view>
					<view class="allline"></view>
				</view>
				<swiper 	indicator-dots autoplay class="h-302 w-702">
					<swiper-item class="h-302 w-702" 
					v-for="(item,index) in shipinhaoLive"
					@click.stop="toshipinhao(item)"
					>
						<image :src="item.image"
						class="w-702 h-302"
						style="border-radius: 15rpx;"
						></image>
					</swiper-item>
				</swiper>
			</view>
			
			
			<view class="colonn m-top-40" 
			v-if="imgLivess.length>0">
				<view class="rowsb center_center" style="margin:20rpx 0rpx;">
					<view class="zhanweiliititu">图片直播</view>
					<view class="roww center_center  h-50"
					@click.stop="toImglist"
					>
						<view style="color: #858B9C;font-size: 25rpx;">查看更多</view>
						<image src="../../static/home/youjiantou.png"
						class="w-40 h-40" 
						></image>
					</view>
				</view>
				
				<swiper 	indicator-dots autoplay class="h-302 w-702">
					<swiper-item class="h-302 w-702" 
					v-for="(item,index) in imgLivess"
					@click.stop="toWeb(item)"
					>
						<image :src="item.imagePath"
						class="w-702 h-302"
						style="border-radius: 15rpx;"
						></image>
					</swiper-item>
				</swiper>
				
				<!-- <swiper autoplay class="h-200">
					<swiper-item class="h-200" v-for="(item,index) in imgList_show">
						<view class="roww">
							<image class="zhiboimg" 
							:src="item1.url"  mode="aspectFill"
							v-for="(item1,index1) in item" lazy-load
							@click.stop="showimg(item,index1)"
							></image>
						</view>
					</swiper-item>
				</swiper> -->
				
			</view>
			<view class="colonn m-top-40"
			 v-if="kaimushi_show.length>0"
			>
				<view class="rowsb center_center"  style="margin:20rpx 0rpx;">
					<view class="zhanweiliititu">视频直播</view>
					<view class="roww center_center"
					@click.stop="tozhibos"
					>
						<view style="color: #858B9C;" class="fs-25">查看更多</view>
						<image src="../../static/home/youjiantou.png"
						class="w-40 h-40"
						></image>
					</view>
				</view>
				
				<swiper class="h-270" autoplay>
					<swiper-item  class="h-270" v-for="(item,index) in kaimushi_show">
						<view class="roww rowsb">
							<view class="zhiboview colonn "  v-for="(item1,index1) in item"
							@click.stop="toLives(item1)"
							> 
								<!-- <image class="imagsee" mode="aspectFill" lazy-load :src="item1.shareImgUrl+'?x-oss-process=image/auto-orient,1/interlace,1/resize,p_84/quality,q_71'"></image> -->
								<image class="imagsee" mode="aspectFill" lazy-load :src="item1.shareImgUrl"></image>
								
								<view class="ziboname colonn center_center txtShowLength1">
									{{item1.name}}
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			
			
			<block v-if="pianshen!=999">
			<view class="colonn m-top-40" v-if="videoList.length>0">
				<view class="rowsb center_center"  style="margin:20rpx 0rpx;">
					<view class="zhanweiliititu">展会宣传片</view>
					<view class="roww center_center"
					@click.stop="toShipinList"
					>
						<view style="color: #858B9C;font-size: 25rpx;">查看更多</view>
						<image src="../../static/home/youjiantou.png"
						class="w-40 h-40"
						></image>
					</view>
				</view>
				<view class="roww w-702 h-344 pore"
				@click.stop="showvideoaClick(item)"
				v-for="(item,index) in videoList"
				>
						<!-- <image class="viedoimg" lazy-load	 mode="aspectFill" :src="item.image+'?x-oss-process=image/auto-orient,1/interlace,1/resize,m_lfit,w_702/quality,q_78'" ></image> -->
						<image class="viedoimg" lazy-load	 mode="aspectFill" :src="item.image" ></image>
						
						
						
						<view class="poab w-702 h-344 videozhezhao" 
						>
							<image src="../../static/bofangsanjia.png"
							class="w-66  m-top-122 m-left-319 h-80"  
							></image>
							<view class="roww shijnatxt yincang1">
								<view>02:30</view>
							</view>
						</view>
				</view>
			</view>
			</block>  
			<block v-if="exType==1">
				<view class="colonn m-top-40" v-if="activityLsits.length>0">
					<view class="rowsb center_center"  style="margin:20rpx 0rpx;">
						<view class="zhanweiliititu">活动报名</view>
						<view class="roww center_center"
						@click.stop="ropinpaiBm"
						>
							<view style="color: #858B9C;font-size: 25rpx;">查看更多</view>
							<image src="../../static/home/youjiantou.png"
							class="w-40 h-40"
							></image>
						</view>
						</view>
				</view>
				<view class="colonn background1"  v-if="activityLsits.length>0">
					<view class="roww  m-top-20 border_bottom p-bottom-15 p-left-15"
					v-for="(item,index) in activityLsits" v-if="index<=4"
					@click="toBoamingInfo(item)"
					>
						<image class="imagesactivew" mode="aspectFill" 
						style="border-radius: 10rpx;"
						:src="item.image"></image>
						<view class="colonn rowsbl"
						
						>
							<view class="fs-30 fweight w-350 txtShowLength">{{item.title}}</view>
							<view class="fs-30 w-370 txtShowLength">地点：{{item.place}}</view>
							<view  class="fs-30 w-370 txtShowLength" style="color: #999999;">活动时间：{{item.startTime}}</view>
						</view>   
					</view>
					<view v-if="activityLsits.length<=0">
						<noList></noList>
					</view>
				</view>
			</block>
			
			<!-- <block v-if="exType!=7"> -->
			<view class="colonn m-top-40">
				<view class="rowsb center_center"  style="margin:20rpx 0rpx;">
					<view class="zhanweiliititu">品牌企业推荐</view>
					<view class="roww center_center"
					@click="ropinpaiType"
					>
						<view style="color: #858B9C;font-size: 25rpx;">查看更多</view>
						<image src="../../static/home/youjiantou.png"
						class="w-40 h-40"
						></image>
					</view>
			</view>
			<view class="colonn">
				<!-- <view class="roww fs-30 m-top-10 m-bottom-20">
					<view>筛选</view>
					<view class="allline"></view>
					<view class="roww center_center fs-30" style="color:#858B9C;"
					@click.stop="fenleiAlertClick"
					>
						<block v-if="!fenleiAlert">
							<view >点击展开</view>
							<image class="w-30 h-30 m-left-5" src="/static/xiajiantou.png"></image>
						</block>
						<block v-if="fenleiAlert">
							<view >点击收起</view>
							<image class="w-30 h-30 m-left-5" src="/static/shangjiantou.png"></image>
						</block>
					</view>
				</view> -->
				
				<scroll-view scroll-x style="width: 700rpx;">
					<view class="roww m-top-10 m-bottom-10" >
						<view class="fenleiname" v-if="selIndex==-1">
							全部
						</view>
						<view class="fenleiname1" v-else
						@click.stop="selIndexClick(-1)"
						>
							全部
						</view>
						
						<block v-for="(item,index) in typeListQiye">
							<view class="fenleiname" v-if="index==selIndex">
								{{item.name}}
							</view>
							<view class="fenleiname1" v-else
							@click.stop="selIndexClick(index)"
							>
								{{item.name}}
							</view>
						</block>
						
					</view>
				</scroll-view>
				</view>
				
			<view class="colonn background1">
					<view class="roww  p-bottom-34  m-top-34"
					style="border-bottom: 1rpx solid #EEEEEE;"
					v-for="(item,index) in qiyeList"
					@click.stop="toShopInfo(item)"
					v-if="index<=4"
					>  
						<view class="w-25"></view>
						<image class="qiyeimg" lazy-load mode="aspectFill" 
						:src="item.companyAvatar"></image> 
						<view class="colonn rowsbl">
							<view class="qiyename txtShowLength">
								{{item.companyName}}
							</view>
							<view class="roww ">
								<view class="hzanwiehao" v-if="item.exhPlace">{{item.exhPlace}}</view>
								<view class="allline"></view>
								<!-- <view class="liulancishu">浏览{{item.views}}</view> -->
							</view>
							<scroll-view 
							scroll-x style="width:423rpx;margin-top:15rpx;"
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
								
								<view class="allline"></view>
								<view class="roww center_center m-left-15">
										<image src="../../static/redu.png"
										class="w-30 h-30 m-right-10"
										></image>
										<view class=" shoucang">热度{{item.views}}</view>
								</view>
								
							</view>  
						</view>
					</view>
				</view>
			</view>
			<!-- </block> -->
			
			<view class="colonn m-top-20" v-if="xinwenList.length>0">
				<view class="rowsb center_center"  style="margin:20rpx 0rpx;">
					<view class="zhanweiliititu">新闻动态</view>
					<view class="roww center_center"
					@click.stop="toArticleList" 
					>
						<view style="color: #858B9C;font-size: 25rpx;">查看更多</view>
						<image lazy-load src="../../static/home/youjiantou.png"
						class="w-40 h-40" lazy-load
						></image>
					</view>
					</view>
			</view>
			
		</view>
		
		
		<view style="padding:0rpx 24rpx 0rpx 24rpx;background-color: #ffffff;"
		 v-if="xinwenList.length>0"
		>
			<view class="colonn center_center" >
				<view class="roww allline p-all-25 border_bottom w-750" v-for="(item,index) in xinwenList"
				@click.stop="toarticelInfo(item)" v-if="index<5"
				>
					<image lazy-load class="jiudianuns m-right-15" 
					:src="item.thumbMedia" 
					lazy-load
					mode="aspectFill"></image>
					<view class="colonn rowsbl ">
						<view class="fweight txtShowLength1 w-550 fs-30">{{item.title}}</view>
						<view style="color: #999999;" 
						class="fs-25 txtShowLength w-510">发布时间:{{item.createTime}}</view>
					</view>
					<view class="allline"></view>
				</view>
			</view>
		</view>
		
		
		
		
		<view class="dbuview pore center_center colonn">
			<image src="../../static/home/dibufangke.png"
			class="w-750 h-100"
			></image>
			<view style="font-size: 30rpx;position: absolute;bottom: 20rpx;">累计浏览次数：{{fangwencishu}}</view>
		</view>
		
		
		<view class="colonn" 
		style="position: fixed;bottom: 200rpx;right: 22rpx;">
			<image src="../../static/home/canzhanbaoming.png"
			class="w-84 h-84 m-bottom-12" lazy-load @click.stop="toCanguanbvaoming"
			></image>  
			<image src="../../static/home/lianxiwomen.png"
			class="w-84 h-84 m-bottom-12" lazy-load
			@click.stop="getLianxiwomenInfo(1)"
			></image>
			<image src="../../static/home/hangyejiaoliu.png"
			class="w-84 h-84 m-bottom-12" lazy-load
			@click.stop="getLianxiwomenInfo(2)"
			></image>
		</view>
		
		<view class="huuibeijing colonn center_center" style="z-index: 1000;" v-show="videoAlert"
		@touchcancel="aaaaa"
		>
			<video codec="hardware" 
			@waiting="waiting"
			@loadeddata="loadeddata"
			@loadstart="loadstart"
			@loadedmetadata="loadedmetadata"
			:src="selVideoInfo.url"
			 :poster="selVideoInfo.image"
			id="video1"  
			class="w-700 h-400" 
			></video>
			<image @click="videoAlertClose" lazy-load src="/static/guanbsss.png" class="w-80 h-80 m-top-50" style="z-index: 1001;"></image>
		</view>
		
		
		
		<view class="colonn center_center huuibeijing" v-if="tanchaungis">
			<image class="w-500" lazy-load mode="widthFix" 
			style="background-color: #999999;"
			 @click.stop="toKaipingInfo"
			 :src="tanchuang.imagePath"></image>
			<image src="/static/guanbsss.png" class="w-70 h-70 m-top-40" 
			@click.stop="tanchaungisClick"></image>
		</view>
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				
				
				
				playstrategy:1,
				videoAlert:false,
				showvideoa:"",
				selVideoInfo:{},
				fenleiAlert:false,//分类筛选是否展开
				menus:[
					{
						'icon':"/static/home/zhanhuigaikuan.png",
						'name':'展会概况',
						'line':"/pages1/exhibition_survey/exhibition_survey"
					},
					{
						'icon':"/static/home/zhanshangzhongxin.png",
						'name':'展商中心',
						"line":"/pages1/exhibitor_center/exhibitor_center"
					},
					{
						'icon':"/static/home/guanzhong.png",
						'name':'观众',
						"line":"/pages1/audience/audience"
					},
					{
						'icon':"/static/home/tongqiguodong.png",
						'name':'同期活动',
						"line":"../../pages1/concurrent_activities/concurrent_activities"
					},
					{
						'icon':"/static/home/gongxufabu.png",
						'name':'供需发布',
						"line":"../../pages1/demand_procurement/demand_procurement"
					},
					{
						'icon':"/static/home/zhanshangzixun.png",
						'name':'展会资讯',
						"line":"../../pages1/exhibition_information/exhibition_information"
					},
					{
						'icon':"/static/home/zhanhuifuwu.png",
						'name':'展会服务',
						"line":"../../pages1/exhibition_services/exhibition_services"
					},{
						'icon':"/static/home/xiansahngshangcheng.png",
						'name':'线上商城',
						"line":"../../pages1/lineSHop/lineSHop"
					}
				],
				'bannerList':[],
				BASE_IMG:"",
				litituList:[],
				imgList:[],
				videoList:[],
				qiyeList:[],
				kaimushi:[],
				selIndex:-1,//企业分类下标
				typeListQiye:[],//企业分裂
				tongzhiList:[],//通知
				imgList_show:[],//图片直播
				pianshen:'4',//0关闭
				videoContext:null,//视频上下文
				
				exType:0,//当前展会类型
				
				xinwenList:[],//新闻列表
				// xinwenList:1,
				
				
				tanchuang:[],//弹窗
				tanchaungis:false,
				speed:50,//跑马灯时间
				
				
				kaimushi_show:[],//开幕式
				fangwencishu:0,
				
				activityLsits:[],//活动列表
				shipinhaoLive:[],//视频号列表
				imgLivess:[],//t图片直播列表
				
				logoUrl:"",
			}
		},  
		onLoad(options) {
			if(options.openid){
				uni.setStorageSync("upOpenid",options.openid)
			}
			
			// 获取当前展会id
			this.getMiniapp();
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getPianshen();
			
			// 五金和其他的跳转界面不一样
			var menus=this.menus;
			var exType=parseInt(uni.getStorageSync("exType"));
			if(exType==4){
				menus[3].line="/pages1/concurrent_activities_wujin/concurrent_activities_wujin";
				this.menus=menus;
			}else if(exType==1){
				menus[3].line="/pages1/concurrent_activities_hb/concurrent_activities_hb";
				this.menus=menus;
			}
			
			this.logoUrl=this.$tools.getLogos(parseInt(uni.getStorageSync("exType")));
			
		},
		onShow() {
			if(this.selIndex>=0){
				this.getQiyeListByType();
			}else{
				this.getQiyeList();
			}  
			this.fangwencishuGet();
		},
		onReady() {
			this.exType=uni.getStorageSync("exType");
		},
		 onShareTimeline() { 
			 var userInfo=uni.getStorageSync("userInfo");
			 var txt="?openid="+uni.getStorageSync("openid");
			 if(userInfo){
				 txt=txt+"&scene="+userInfo.unionid
			 }
			 console.log("分享参数",txt);
		     var ExhInfo=uni.getStorageSync("ExhInfo");
		    return {
		           title: ExhInfo.exhName,
		            imageUrl: this.logoUrl,
		           path: '/pages/index/index'+txt
		    }
		  }, 
		  onShareAppMessage () {
			  
			  var userInfo=uni.getStorageSync("userInfo");
		  		var ExhInfo=uni.getStorageSync("ExhInfo");
				
				var txt="?openid="+uni.getStorageSync("openid");
				if(userInfo){
								 txt=txt+"&scene="+userInfo.unionid
				}
				console.log("分享参数",txt)
		          return {   
		              title: ExhInfo.exhName,
		               imageUrl: this.logoUrl,
		              path: '/pages/index/index'+txt 
		          }
		      },
		methods: {
			// 获取图片直播列表
			getImgListLive(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
					'type':'8'    
				}  
				this.$axios
					.axios('GET', this.$paths.miniappcarousel, data)
					.then(res => {
						if (res.code == 200) { 
							this.imgLivess=res.data;  
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 跳转网页
			toWeb(item){
				uni.setStorageSync("webview",item.url)
				uni.navigateTo({
					url:"/pages3/wbview/wbview"
				})
			},
			
			getzhiboShipinhao(){
				var data = {
					'exhType':uni.getStorageSync("exType"),  
				}
				this.$axios
					.axios('POST', this.$paths.channelslive, data)
					.then(res => {
						if (res.code == 200) {
							console.log("结束",res)
							this.shipinhaoLive=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})    
					.catch(err => {});
			},
			toshipinhao(item){
				uni.showLoading({
					title:"前往视频号中"
				})
				setTimeout(res=>{
					uni.hideLoading()
				},1000)
				wx.openChannelsUserProfile({
					finderUserName:item.videoId,  
					"feedId":item.roomId, 
					complete: (res) => {
						console.log("werewolf111",res)
					}
				})
			},
			
			ropinpaiBm(){
				// 环保
				uni.navigateTo({
					url:"/pages1/concurrent_activities_hb/concurrent_activities_hb?type=2"
				})
			},
			// 前往报名详情
			toBoamingInfo(item){
				uni.navigateTo({
					url:"/pages1/signUpInfo/signUpInfo?id="+item.id
				})
			},
			// 获取访问次数
			fangwencishuGet(){
				var fangwencishu=uni.getStorageSync("fangwencishu")
				if(fangwencishu){
					this.fangwencishu=fangwencishu
				}
				setTimeout(res1=>{
					var fangwencishu=uni.getStorageSync("fangwencishu")
					if(fangwencishu){
						this.fangwencishu=fangwencishu
					}
				},1000)
			},
			// 前往直播间
			toKaipingInfo(){
				var tanchuang=this.tanchuang;
				if(tanchuang.urlType=="2"){
					let roomId = tanchuang.url
					wx.navigateTo({
					    url: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${roomId}`
					})
				}else if(tanchuang.urlType=="1"){
					uni.setStorageSync("webview",tanchuang.url)
					uni.navigateTo({    
						url:"/pages3/wbview/wbview"
					})
				}else if(tanchuang.urlType=="3"){
					uni.navigateTo({    
						url:"/pages5/ydjfl/ydjfl"
					})
				} 
			},
			toLives(item){
				let roomId = item.roomid
				wx.navigateTo({
				    url: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${roomId}`
				})
			},
			toArticleList(){
				uni.navigateTo({
					url:"/pages3/articleList/articleList"
				})
			},
			// 前往文章详情
			toarticelInfo(item){
				uni.navigateTo({
					url:"/pages3/article_info/article_info?id="+item.id
				})
			},
			// 获取首页弹窗
			toTuanchuabng(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
					'type':'7'    
				}
				this.$axios
					.axios('GET', this.$paths.miniappcarousel, data)
					.then(res => {
						if (res.code == 200) {
							if(res.data.length>0){
								this.tanchuang=res.data[res.data.length-1];
								this.isshowTanchuang(this.tanchuang);
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},    
			// 判断弹窗是否显示
			isshowTanchuang(item){
				// var lowimg=uni.getStorageSync("tanchuangimg")
				// if(lowimg&&item.imagePath==lowimg){   
				// 	return false;   
				// }
				this.tanchaungis=true;
			},
			tanchaungisClick(){
				this.tanchaungis=!this.tanchaungis;
				uni.setStorageSync("tanchuangimg",this.tanchuang.imagePath)
			},
			// 获取新闻列表 miniappnewslist
			miniappnewslistGet(){
				var data={
					'exhType':uni.getStorageSync("exType"),
					params:{
						'limit':10
					}
				}
				this.$axios
					.axios('POSt', this.$paths.miniappnewslist, data)
					.then(res => {     
						if (res.code == 200) {
							this.xinwenList=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log("baossd",err)
					});
			},
			// 前往文章详情
			toUrl(url){
				
			},
			// 视频加载
			waiting(res){
				console.log("出现加载",res);
			},
			// 加载视频
			loadeddata(res){
				console.log("视频资源开始加载时触发",res);
			},
			// 加载开始
			loadstart(res){
				console.log("开始加载数据",res);   
			},
			loadedmetadata(res){
				console.log("视频元数据加载完成时触发",res);
				if(this.videoAlert){
					this.videoContext.play();
				}  
			},       
			ropinpaiType(){
				uni.switchTab({
					url:"/pages/type/type"
				})
			},
			
			getPianshen(){
				var data={
					'exhType':uni.getStorageSync("exType"),
				} 
				this.$axios
					.axios('POSt', this.$paths.demominiapp, data)
					.then(res => {   
						if (res.code == 200) {
							if(res.data.length>0){
								this.pianshen=res.data[0].test;
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log("baossd",err)
					});
			},
			// 显示多张图  
			showimg1(list,index){
				if(list[index].urlType==2){
					// 视频直播
					let roomId = list[index].url  
					wx.navigateTo({
					    url: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${roomId}`
					})
					return false;
				}
				if(list[index].urlType==1){
					uni.setStorageSync("webview",list[index].url)
					uni.setStorageSync("webview_webview",list[index])
					uni.navigateTo({
						url:"/pages3/wbview/wbview"
					})
					return false;
				}
				
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
			// 前往通告详情
			toarticleinfp(item){
				uni.setStorageSync("articletonggao",item);
				uni.navigateTo({
					url:"/pages3/tonggaoInfoa/tonggaoInfoa"
				})
			},
			// 获取通告栏
			getonggaolan(){
				var data={
					'exhType':uni.getStorageSync("exType"),
				}
				this.$axios
					.axios('POSt', this.$paths.miniappnoticelist, data)
					.then(res => {   
						if (res.code == 200) {
							this.tongzhiList=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log("baossd",err)
					});
			},
			// 点击企业分裂
			selIndexClick(index){
				this.selIndex=index;
				if(this.selIndex>=0){
					// this.getQiyeListByType();
					this.getQiyeList();
				}else{
					this.getQiyeList();
				}
			},
			fenleiAlertClick(){
				this.fenleiAlert=!this.fenleiAlert;
			},
			// 获取下一页穿的参数
			getAudis(){
				var userInfo=uni.getStorageSync("userInfo");
				var data="";
				if(userInfo){
					data="?scene1="+userInfo.unionid
				}
				return data;
			},
			topage(index){
				
				
				
				if(index==0){
					uni.navigateTo({
						url:"/pages1/exhibitor_center/exhibitor_center"
					})
				}else if(index==1){
					uni.navigateTo({
						url:"/pages1/audience/audience"+this.getAudis()
					})
				}
			},
			tozhibos(){
				uni.switchTab({
					url:"/pages/live/live"
				})
			},
			getKaimushi(){  
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
				}
				this.$axios   
					.axios('POST', this.$paths.concurrentlive, data)
					.then(res => {  
						if (res.code == 200) {
							this.kaimushi=res.data;
							var list=this.$tools.fenzulist(this.kaimushi,2);
							setTimeout(res=>{
								this.kaimushi_show=list;
							},1500)
							
						} else {
							this.$tools.showToast(res.msg);
						}
					})  
					.catch(err => {});
			},
			showvideoaClick(item){
				this.selVideoInfo=item;
				this.videoContext = uni.createVideoContext('video1',this)
				this.videoAlert=true;
				this.videoContext.play();
			},
			videoAlertClose(item){
				this.videoAlert=false;  
				this.videoContext.pause();
			},
			toSousuo(){
				uni.navigateTo({
					url:"../../pages3/sousuo/sousuo"
				})
			},
			
			
			toCanguanbvaoming(){
				// uni.navigateTo({
				// 	url:"/pages1/audience/audience"+this.getAudis()
				// })
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){
					this.$tools.showToast("请先登录");
					setTimeout(res=>{
						uni.setStorageSync("toPage","/pages1/audience/audience");
						uni.switchTab({
							url:"/pages/wode/wode"
						}) 
					},1000)
					return false;
				}
				uni.navigateTo({
					url:"/pages3/yudengjiX/yudengjiX"
				})
			},
			
			// 视频列表
			toShipinList(){
				uni.navigateTo({
					url:"../../pages2/videosList/videosList"
				})
			},
			// 获取企业分类
			getQAiyefen(){
				var data={
					'exhType':uni.getStorageSync("exType"),
				}
				this.$axios
					.axios('POSt', this.$paths.companytypeminiapp, data)
					.then(res => {   
						if (res.code == 200) {
							this.typeListQiye=res.data;
							
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log("baossd",err)
					});
			},
			// 获取企业列表(推荐)
			getQiyeList(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
					top:'1',
					// type:'1',  
					'openid':uni.getStorageSync("openid"),
					params:{
						limit:10
					}
				}
				if(this.selIndex>=0){
					data.type=this.typeListQiye[this.selIndex].id;
					data.params={
						'limit':10
					};
				}else{
					data.type=null;
				}
				
				this.$axios
					.axios('POSt', this.$paths.companyhot, data)
					.then(res => {   
						console.log("获取IQ也",res);
						if (res.code == 200) {
							var qiyeList=res.data;
							for(var a=0;a<qiyeList.length;a++){
								if(qiyeList[a].mainProduct){
									qiyeList[a].mainProduct=qiyeList[a].mainProduct.split(",")
								}else{
									qiyeList[a].mainProduct=[];
								}
								
							}     
							console.log('qiyeList',qiyeList)
							this.qiyeList=qiyeList;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log("baossd",err)
					});
			},
			// 通过分类获取企业列表
			getQiyeListByType(){
				var data={
					'type':this.typeListQiye[this.selIndex].id,
					exhId:uni.getStorageSync("nowExhId"),
					'openid':uni.getStorageSync("openid")
				}
				this.$axios
					.axios('POSt', this.$paths.companylist, data)
					.then(res => {   
						if (res.code == 200) {
							var qiyeList=res.data;
							for(var a=0;a<qiyeList.length;a++){
								if(qiyeList[a].mainProduct){
									qiyeList[a].mainProduct=qiyeList[a].mainProduct.split(",")
								}else{
									qiyeList[a].mainProduct=[];
								}
								
							}     
							this.qiyeList=qiyeList;
							if(this.qiyeList.length<=0){
								this.$tools.showToast("暂无企业");
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log("baossd",err)
					});
			},
			// 获取企业视频
			miniappadVideo(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
					top:'1',
					'type':'1'
				}
				this.$axios
					.axios('POSt', this.$paths.miniappadVideo, data)
					.then(res => {
						if (res.code == 200) {
							var videoList=res.data;
							for(var a=0;a<videoList.length;a++){
								videoList[a].url=this.$paths.BASE_VIDEO+videoList[a].url;
								// videoList[a].url='https://frd-yhc.oss-cn-hangzhou.aliyuncs.com/ceshi/aaaaaaaaa.m4v'
							}   
							this.videoList=videoList;
							console.log("视频下表",this.videoList);
							this.selVideoInfo=videoList[0]
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			
			showimg(list,index){
				console.log(list,"集合")
						var imglist=[];
						for(var a=0;a<list.length;a++){
							var img=list[a].url;
							if(img.indexOf("http")<0){
								img=list[a].url;
							}
							imglist.push(img);
						}
						uni.previewImage({
									urls: imglist,
									current:index  
						});
			},
			// 获取直播列表
			liveimageminiapp(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
					quantity:'7'
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
							this.imgList=imgList;
							this.imgList_show=this.$tools.fenzulist(imgList,3);
							console.log("获取缝纫啊撒",this.imgList_show)
							setTimeout(res=>{
								this.getQiyeList();
							},1000)
						} else {
							this.$tools.showToast(res.msg);
						}  
					})
					.catch(err => {});
			},
			
			toImglist(){
				uni.navigateTo({
					url:"/pages2/image_live/image_live"
				})
			},
			// 获取联系我们信息
			getLianxiwomenInfo(type){
				uni.navigateTo({
					'url':"../../pages2/lianwiomen/lianwiomen?type="+type
				})
			},
			
			toLitiImgInfo(item){
				uni.navigateTo({
					url:"../../pages2/zhanweilititutuInfo/zhanweilititutuInfo?id="+item.stereogramId
				})
			},
			// 获取展位动态图
			getDongtaiImg(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),//1是环保展
				}
				this.$axios
					.axios('POST', this.$paths.stereogramListminiapp, data)
					.then(res => {
						console.log("展位离兔兔结果",res)
						if (res.code == 200) {
							this.litituList=res.data;
							setTimeout(res1=>{
								this.liveimageminiapp();
							},1000)
							
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取当前展会ID
			getMiniapp(){
				var data = {
					type:uni.getStorageSync("exType"),//1是环保展
				}
				this.$axios
					.axios('GET', this.$paths.miniapp, data)
					.then(res => {
						if (res.code == 200) {
							if(res.data.length>0){
								uni.setStorageSync("nowExhId",res.data[0].exhId)
								uni.setStorageSync("ExhInfo",res.data[0])
								this.toTuanchuabng();    
								this.homeInit();
								// this.getDongtaiImg();
								// this.liveimageminiapp();
								this.miniappadVideo();
								// this.getQiyeList();
								this.getKaimushi();
								this.getQAiyefen();
								this.getonggaolan(); 
								// 图片直播
								this.getImgListLive();
								setTimeout(res=>{
									this.miniappnewslistGet();
									
									var exType=parseInt(uni.getStorageSync("exType"));
									if(exType==1){
										this.getHuodong();
									}
								},1000)
								
								this.getzhiboShipinhao()
							}else{
								uni.removeStorageSync("nowExhId");
								uni.removeStorageSync("ExhInfo");
							}
							
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			homeInit(){
				this.getBanners();
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
							setTimeout(res=>{
								this.getDongtaiImg();
							},1000)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			
			toShop(item,index){
				
				if(index==3){
					uni.navigateTo({
						url:"/pages5/luntanbaoming/luntanbaoming"
					})
					return false;
				}
				
				var exType=this.exType;
				console.error("---",exType,index)
				if(exType==7){
					if(index==4||index==7){
						this.$tools.showToast("敬请期待");
						return false;
					}
				}
				
				
				if(item.name=="观众"){
					uni.navigateTo({
						url:item.line+this.getAudis()
					})
				}else{
					uni.navigateTo({
						url:item.line
					})
				}
				
			},
			toShopInfo(item){
				uni.navigateTo({
					url:"../../pages1/shopInfo/shopInfo?id="+item.companyId
				})
			},
			// 获取活动列表
			getHuodong(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
				}
				this.$axios
					.axios('POST', this.$paths.activitybynodate, data)
					.then(res => {
						if (res.code == 200) {
							setTimeout(res1=>{
								this.activityLsits=res.data;
							},2000)
							
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			aaaaa(){
				
			}
		}
	}
</script>

<style>
@import url("index.css");
</style>
