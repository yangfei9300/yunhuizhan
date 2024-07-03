<template>
	<view>
		
		<live-player
		style="width: 750rpx;height: 100vh;" 
		></live-player>
		
		<view class="w-750 asasas"
		 v-if="!uanping"
		 style="height:100vh;z-index: 0;position: fixed;top: 0rpx;background-color: #FF8E2D;"
		 mode="aspectFill"
		 :style="{
			 'background-image': 'url('+liveInfoInfo.coverImg+')'
		 }"
		></view>  
		  
		<view class="topallview " style="z-index:500;min-height: 150rpx;"
		  v-if="!uanping"
		 :style="{
			width:info.safeArea.width+'px',
			height:(menuButton.height+menuButton.top+8)+'px',
			top:'0px'    
		}">
			<view class="capsulevioew roww center_center" :style="{
				width:menuButton.left+'px',
				height:(menuButton.height)+'px',
				top:(menuButton.top)+'px',
			}">  
				<view class="w-20"></view>
				
				<view hover-class="none"
				@click.stop="toLive" style="padding-right: 30rpx;"
				>
					<image src="/static/zuojiantou.png" 
					:style="{
						width:(menuButton.height)/2+'px',
						height:(menuButton.height)/2+'px'
					}"></image>
				</view>

				<view style="width:20rpx;"></view>
				<view class="roww center_center infoview" style="padding:5rpx 0rpx;" :style="{
					'max-width':(menuButton.left-50)+'px',
				}">
					<view class="w-10"></view>
					<image :src="liveInfoInfo.coverImg" mode="aspectFill" class="dramaIcon"></image>
					<view class="colonn allline">
						<view class="fs-20 color6_r txtShowLength">{{liveInfoInfo.name?liveInfoInfo.name:''}}</view>
						<view class="popularity m-top-5">{{renqizhiInfo.params?renqizhiInfo.params.views:0}}人气值</view>
					</view>
					<view class="w-20"></view>
				</view>
				<view class="allline"></view>
			</view>
		</view>

		<view class="colonn" style="position: fixed;" :style="{
			top:((!uanping)?(menuButton.height+menuButton.top+8):0)+'px',
		}">
			<view class="roww p-all-15"
			v-if="!uanping"
			>
				<view class="roww zhibotixingview rowsa center_center" @click.stop="kaiboTixing">
					<image src="/static/zhibxq_03.png" class="naozhogicon"></image>
					<view>直播提醒</view>
				</view>
				<view class="allline roww center_center">
					<view class="dianzana">{{renqizhiInfo.likes_str?renqizhiInfo.likes_str:0}}本场点赞</view>
				</view>
				<view class="gengduojieshao roww center_center"
				@click.stop="liveinfoalertlick"
				>
					<view>更多介绍</view>
					<image src="/static/xiajiantou2.png" class="w-30 h-30 m-left-10"></image>
				</view>
			</view>
			<!-- 视频 -->
			
			<video
			id="liveplayerid"
			class="pore"
			 :src="liveInfoInfo.pullAddr" 
			 :class="{
				 'henghea':uanping,
				 'uanpinga':!uanping,
			 }"
			 object-fit="contain"
			 autoplay 
			 min-cache="10"
			 max-cache="30"
			 @statechange="statechange" 
			 :poster="liveInfoInfo.shareImgUrl"
			 @netstatus="netstatus"
			 @error="error" 
			  picture-in-picture-mode="push"
				:orientation="!uanping?'vertical':'horizontal'"
			 >
				<!-- <image src="/static/caozuozhinan.png"
				 style="width:750rpx;height:430rpx;"  
				 v-show="loading&&!uanping"
				  mode="aspectFill"
				 ></image>
				 
				
				 <block v-if="!loading">
					 <cover-image v-if="!uanping"  src="/static/kai.png" class="chushihuaquanpuing"
					  @click.top="henghuping">全屏</cover-image>   
					  </block>
					  
					  <cover-image v-if="uanping"    src="/static/guan.png"   class="henbgzhquan"
					   @click.top="henghuping">横着</cover-image> -->
				 
			 </video>
			

			
		</view>







		<view style="width:600rpx;padding-left:20rpx;z-index: 1001;"
		class="colonn  pore"
		 v-if="!uanping"
		 :style="{
			height:chatviewhieght+'px',
			'margin-top':chatview_top+'px'
		}" >
			
			
			<scroll-view 
			:scroll-into-view="scrooid"
			scroll-y 
			style="width: 500rpx;"
			:style="{
				height:chatviewhieght+'px',
			}"
			>
			
			
			
				<view class="colonn">
					
					<swiper autoplay class="w-500 m-bottom-30" v-if="adList.length>0"
					:style="{
						height:(chatviewhieght/3)+'px', 
					}" 
					>
						<swiper-item class="w-500" v-for="(item,index) in adList"
						:style="{
							height:(chatviewhieght/3)+'px', 
						}" 
						@click.stop="thumbsUp"
						>
							<image :src="item.adImage"
							:style="{
								height:(chatviewhieght/3)+'px', 
							}" style="width: 500rpx;background-color: red;border-radius: 15rpx;"
							mode="aspectFill"
							></image>
						</swiper-item>
					</swiper>
					
					<!-- 公告 -->
					<!-- <view class=" roww " style="max-width: 500rpx;" v-if="liveInfoInfo.streamNotice||liveInfoInfo.streamNoticeImg">
						<view class="colonn chatitem">
							
							<view class="  fs-30 liaotianitem1"
							style="color: #FF8E2D;padding-left:10rpx;padding-right:10rpx;font-size:30rpx;" >
								系统公告：
								<text style="line-height:40rpx;color: red;font-size:30rpx;"
								>{{liveInfoInfo.streamNotice}}</text>
							</view>
							<view class="   liaotianitem1"
							style="color: #FF8E2D;padding-left:10rpx;padding-right:10rpx;font-size:30rpx;" 
							:class="{
								'tupians':liveInfoInfo.streamNotice==''
							}"
							>
								<block v-if="liveInfoInfo.streamNotice==''">
									<text class="yincang1">系统公告：</text>
								</block>  
								<image    
								 @click.stop="showimggongaoimg(liveInfoInfo.streamNoticeImg)" mode="aspectFill"
								 :src="liveInfoInfo.streamNoticeImg" v-if="liveInfoInfo.streamNoticeImg" class="w-200 m-top-10 m-left-00 m-bottom-10 h-200"></image>
							</view>
						</view>
						
					</view> -->
					
					<block v-for="(item,index) in messageList">
						<block v-if="item.type=='say'&&item.content!=''">
							<!-- 普通用户聊天 -->
							<view class=" roww " style="max-width: 400rpx;" >
								<view class=" fs-30 chatitem liaotianitem1" 
								style="color: #FF8E2D;padding-left:10rpx;padding-right:10rpx;font-size: 30rpx;" >
									{{item.userinfo.client_name}}：
									<text style="line-height:40rpx;color: #ffffff;font-size:30rpx;"
									v-if="item.userinfo.type!=3"
									>{{item.content}}</text>
									<text style="line-height:40rpx;color: red;font-size:30rpx;"
									v-if="item.userinfo.type==3"
									>{{item.content}}</text>
									<text style="color: red;padding-left:10rpx;" v-if="chatMsgUserInfo.type==3" 
									@click.stop="sendDelMessage(item)"
									>删除</text>
								</view>
								<view class="allline"></view>
							</view>
						</block>
					<!-- 	<block v-if="item.type=='login'">
							<view class=" roww " style="max-width: 500rpx;" >
								<view class="  chatitem liaotianitem1" 
								style="color: #FF8E2D;padding-left:10rpx;" >
									{{item.client_name}}：
									<text style="line-height:40rpx;color: #ffffff;font-size:25rpx;">进来了</text>
								</view>
								<view class="allline"></view>
							</view>
						</block> -->
						<!-- <block v-if="item.type=='logout'">
							<view class=" roww " style="max-width: 500rpx;" >
								<view class="  chatitem liaotianitem1" 
								style="color: #FF8E2D;padding-left:10rpx;" >
									{{item.from_client_name}}：
									<text style="line-height:40rpx;color: #ffffff;font-size:25rpx;">出去了</text>
								</view>
								<view class="allline"></view>
							</view>
						</block> -->        
						
						
						
						
						<block v-if="item.type=='say'&&item.image">
							<view class="roww">
								<view class="fs-30 center_center roww chatitem">
									<text style="color: #FF8E2D;padding-left:10rpx;" >{{item.userinfo.client_name}}：</text>
									<image class="chatimg" 
									mode="aspectFill" 
									:src="item.image" 
									>
									</image>
									<text style="color: red;padding-left:10rpx;"  
									v-if="chatMsgUserInfo.type==3" 
									@click.stop="sendDelMessage(item)"
									>删除</text>
								</view>
								<view class="allline"></view>
							</view>
						</block>
					</block>
					<view class="" :id="scrooid"></view>
					
					
					
					
					
		
				</view>
			</scroll-view>
			
		</view>

	
					
						<view class="roww rowsb p-left-25 p-right-25" 
						style="position: fixed;bottom:72rpx;width:750rpx;"
						 v-if="!uanping"
						>
							<!-- <block v-if="liveInfoInfo.is_message==1"> -->
								
								<block v-if="chatMsgUserInfo.client_name=='游客'">
									<view class="shurukuangview pore roww center_center"
									@click.stop="getuserinfoBtn"
										>
											<view class="w-20"></view>
												<view class="shuodianshenm"
												>请先授权..</view>
											<view class="allline"></view>
											<image src="/static/live/biaoqing.png"
											 class="w-38 h-38"></image>
											
										</view>
								</block>
								<block v-else>
								<!-- @click.stop="menuTypeClick" -->
									<view class="shurukuangview roww center_center"
									
									 @click.stop="menuTypeClick" 
									>
										<view class="w-20"></view>
											<view class="shuodianshenm"
											>说点什么..</view>
										<view class="allline"></view>
										
										<image @click.stop="selEmiloAlert=true" 
										src="/static/biaoqing.png"
										 style="z-index: 5000;"
										 class="w-38 h-38"></image>
									</view>
								
							</block>
						<!-- </block> -->
												
							
							<view class="liwuclick roww center_center"
							>
								<like-button src="/static/zhibxq_10.png" 
								width="50"
								@handleClick="handleClick"
								height="50"
								:throttle="100" :large="2">
								<!-- <image src="/static/zhibxq_10.png" class="w-39 h-39"></image> -->
								</like-button>
							</view>
							
						<!-- 	<likeButton :throttle="100" :large="2">
							  <button type="success">点赞</button>
							</likeButton> -->
							
						</view>
					
		
		
		
		
		<view class="colonn livebigvi animated "
		 
		 v-if="liveinfoalert">
			<view class="roww rowsb w-710 p-bottom-15">
				<image class="w-50 h-50 yincang1"   src="/static/guabibi.png"></image>
				<view style="color: white;">直播简介</view>
				<image class="w-50 h-50"
				 @click.stop="liveinfoalertlick"
				 src="../../static/guabibi.png"></image>
			</view>
			<scroll-view
			scroll-y
			style="height:360rpx;"
			>
			<view class="liveinfo" style="color: white;font-size: 30rpx;">
				<rich-text :nodes="liveInfoInfo.streamDescription"></rich-text>
			</view>
			</scroll-view>
		</view>
		
		<view class="huuibeijing"
		v-if="selEmiloAlert" style="z-index: 50000;"
		>
			<view style="width: 750rpx;position: fixed;bottom: 0rpx;"
			class="colonn"
			>
			<view class="roww  center_center">
				<image src="/static/guabibi.png" 
				@click.stop="selEmiloAlertClick"
				class="w-70 h-70 m-bottom-30"></image>
			</view>
			<view 
			class="background1 colonn"
			style="height: 400rpx;">

			
			
			<swiper class="w-750 h-400">
				<swiper-item  class="w-750 h-400">
					<view class="huanhang">
						<view class="colonn " style="padding:15rpx 10rpx;"
						v-for="(item,index) in biaoqingList"
						 @click="sendMessage('img',biaoqingUrl+item.expressionUrl)" v-if="index<50"
						>
							<image lazy-load mode="aspectFill" :src="biaoqingUrl+item.expressionUrl" class="w-55 h-55"></image>
						</view>   
					</view>
				</swiper-item>
				<swiper-item  class="w-750 h-400">
					<view class="huanhang">
						<view class="colonn " style="padding:15rpx 10rpx;"
						v-for="(item,index) in biaoqingList"
						  @click="sendMessage('img',biaoqingUrl+item.expressionUrl)" v-if="index>=50&&index<100"
						>
							<image lazy-load :src="biaoqingUrl+item.expressionUrl"  class="w-55 h-55"></image>
						</view>
					</view>
				</swiper-item>   
				<swiper-item  class="w-750 h-400">
					<view class="huanhang">
						<view class="colonn " style="padding:15rpx 10rpx;"
						v-for="(item,index) in biaoqingList"
						 @click="sendMessage('img',biaoqingUrl+item.expressionUrl)"  v-if="index>=100"
						>
							<image lazy-load :src="biaoqingUrl+item.expressionUrl"  class="w-55 h-55"></image>
						</view>
					</view>
				</swiper-item>
			</swiper>
			  
			
			</view>
			</view>
		</view>
		
		
		<view class="roww background1 width center_center"
		style="padding:20rpx; 20rpx;position: fixed;z-index:999999;"
		:style="{
			'bottom':keyheight+'px'
		}"
		v-if="menuType"
		>   
		<view style="width:10rpx;"></view>
		<view class="allline"
		 style="background-color: #f5f5f5;border-radius: 100rpx;padding:10rpx 20rpx;"
		>	<view style="width:30rpx;"></view>
			<input placeholder="请输入内容"
			class="allline fs-30"
			@blur="focusInputblur"
			:focus="commeinptFocus" 
			v-model="inputInfo"
			cursor-spacing="10"
			:adjust-position="false"
			placeholder-class=" fs-30"
			/>
			<view style="width:30rpx;"></view>
			</view>
			<view style="width:25rpx;"></view>
			<view class="sendbtn"
			 @click="sendMessage('say')"
			 >发送</view>
		</view>
		
	</view>
</template>
<script>
	
	export default {
		
		
		data() {
			return { 
				info: {},
				menuButton: {
					height:50,
					top:50,
				},
				videourl: "https://res.oss.zhuyin.club/res/0/87/video/2/202108/11/2021081111359-5153.mp4",
				tuihsasa:"http://south01.cn.grustv.com:8882/hls/1056831647.m3u8",
				tuihsasa1:"rtmp://play-pc.ourwill.cn/live/tw-1854463-9755wito_hd?txSecret=623a001bc0e12f4e7102162fbe3c73a0&txTime=62AAEA3B",
				mmm:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
				chatviewhieght: 0, //聊天框高度
				chatview_top: 0, //聊天框距离顶部的位置
				keyheight: 0, //键盘高度
				commeinptFocus: false, //键盘高度
				txt_mp3: 1, //1是文字，2是语音
				commtxt: '', //输入的文字
				
				imgbtn: false,
				animationsaIs: false,
				'liveInfo': '<h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3><h3 style="color:white;">这里是直播简介，可以编写直播介绍内容。</h3>',
				liveinfoalert: false, //直播简介对话框
				giftcount: 1, //礼物个数
				giftSel: 0, //选中的礼物的下标
				giftIs: false, //礼物弹窗是否显示
				zanLiveIs:false,//是否点赞
				liveInfoInfo:{},
				// 聊天 canReconnect   
				canReconnect:true,
				inputFocus:false,
				inputInfo:"",
				inputModel:"",
				ifConnect: false,
				
				chatUrl:"wss://websocket.qlypt.com",//聊天链接
				// chatUrl:"wss://websocket.qlypt.com",//聊天链接
				
				socket:null,//websocket实体类  
				biaoqingList:[],//表情列表
				selEmilo:'',  
				selEmiloAlert:false,
				chatContent:"",//输入聊天内容
				taskWebsocket:null,
				messageList:[],//聊天列表
				chatMsgUserInfo:{
					'client_name':'游客',
					'avatar':'https://yjc.qlypt.com/uploads/home/common/default_user_portrait.png',
					'type':'0',//0用户身份1是管理员
				},
				options:{},
				scrooid:"scroll",
				
				
				menuType:false,
				
				plerContext:null,//直播上下文
				uanping:false,
				loading:true,
				liveplayerContext:null,
				bofanginter:null,
				
				
				ruchangTxt:'',//入场了
				is_ruchang:false,//是否发送进来了消息
				tonggaoTxt:{},//系统公告
				renqizhiInfo:{},//人气值信息
				
				
				thumbsUpContext: null,
				thumbsUpTimer: 0,
				thumbsUpQueue: {},
				thumbsUpWidth: 100,
				thumbsUpHeight: 300,
				zanCountCLick:0,//点了多少次未提交到后台
				IntervalZan:null,
				
				biaoqingUrl:'https://qlyjc.oss-cn-hangzhou.aliyuncs.com/home/expression/',//表情前缀
				adList:[],//广告列表哦
			}      
		},
		
		
	
		onLoad(options) {
			
			this.liveplayerContext=uni.createLivePlayerContext("liveplayerid", this)
			this.options = options;
			if (options.scene) {
				this.options.id = options.scene;
			}
			var userInfo=uni.getStorageSync("userInfo");
			if(userInfo){
				this.chatMsgUserInfo.client_name=userInfo.nickname?userInfo.nickname:'游客';
				this.chatMsgUserInfo.avatar=userInfo.userAvatar;
				this.chatMsgUserInfo.type=userInfo.userType;
			}else{
				var wxUser=uni.getStorageSync("wxUser");
				if(wxUser){
					this.chatMsgUserInfo.client_name=wxUser.nickName;
					this.chatMsgUserInfo.avatar=wxUser.avatarUrl;
				}else{
					this.showmoaGetWxInfo();
				}
			}
			this.getWindowInfo();
			this.getKeyhieght();
			this.getLiveInfo();
			this.getRenqiqzhi();
			this.getEmild();
			this.getAdList();
			
			
		},
		onShow() {
			this.initZan();
			this.live_loadingIndex("add");
			this.livePlayerCon();
			// 链接聊天
			var openid=uni.getStorageSync("openid");
			if(openid){
				this.createWebSocket()
			}else{
				wx.login({
					      success: (res)=> {
					        if (res.code) {  //wx.login获取code。
							
								setTimeout(res1=>{
									this.getOpenid(res.code);
								},200)   
					            
					        } else {
					          console.log('获取用户登录态失败！' + res.errMsg)
					        }
					      }
				})
			}
			
			console.error("is_ruchang606",this.is_ruchang)
		},
		onUnload() {
			uni.closeSocket();
			clearInterval(this.bofanginter);
			clearInterval(this.IntervalZan)
		},
		 onHide() {
		 	uni.closeSocket();
		 },
		// 销毁之前钩子
		beforeDestroy() {
		  this.live_loadingIndex("out");
		  this.canReconnect=false
			 setTimeout(res=>{
				 heartCheck.stop()
			 },500)
		},
		onShareAppMessage () {
		        return {
		            title: this.liveInfoInfo.live_name,
		            imageUrl:this.liveInfoInfo.live_banner,
		            path: '/pages1/live_info_1/live_info_1?id='+this.options.id
		        }
		    },
			  
		onShareTimeline: function () {
		     return {
		    title: this.liveInfoInfo.live_name,
		    imageUrl:this.liveInfoInfo.live_banner,
		    path: '/pages1/live_info_1/live_info_1?id='+this.options.id
		     }
		 },
		 
		 onReady() {
		 	this.thumbsUpContext = uni.createCanvasContext('thumsCanvas');
		 	var that = this;
		 }, 
		    
		methods: {
			
			// 点赞
			handleClick(){   
				this.zanCountCLick=this.zanCountCLick+1;
			},
			
			
			// 获取广告列表
			getAdList(){
				var data={
					"streamId": this.options.id
				};
				this.$axios
					.axios('POST', this.$paths.streamstreamAd, data)
					.then(res => {
						if(res.code==200){
							this.adList=res.data;
							
						}else{
							this.showToast(res.msg);
						}
					})
					.catch(err => {
							console.error("获取openid报错",err)
						
					});
			},
			// 间隔两秒钟如果有赞未提交，就提交上去
			jiantingClickZan(){
				console.log("asd");
				if(this.zanCountCLick>0){
					var count=this.zanCountCLick;
					this.zanCountCLick=0;
					var data={
						streamId:this.options.id,
						likes:count
					};
					this.$axios
						.axios('POST', this.$paths.likesstreamapi, data)
						.then(res => {
							if(res.code==200){
								console.log("赞结果",res)
								this.zanCountCLick=0;
								var renqizhiInfo=res.data;
								if(this.renqizhiInfo.likes<=renqizhiInfo.likes){
									this.renqizhiInfo.params=renqizhiInfo.params;
									this.renqizhiInfo.likes=renqizhiInfo.likes;
									this.renqizhiInfo.likes_str=this.$tools.numFormat(this.renqizhiInfo.likes);
									console.log("确实打了",this.renqizhiInfo)
									this.sendMessage('say_zan',count);
								}
								
							}else{
								this.showToast(res.msg);
							}
						})
						.catch(err => {
								console.error("获取openid报错",err)
							
						});
				}
			},
			
			//点赞动画 start
			thumbsUp() {
				console.log("开始点赞")
				this.zanCountCLick=this.zanCountCLick+1;
				console.log("点赞动画")
				const image = "../../static/thumbsUpImage/" + this.getRandomInt(1, 11) + ".png";
				const anmationData = { 
					id: new Date().getTime(),
					timer: 0,
					opacity: 0.5,
					pathData: this.generatePathData(),
					image: image,
					factor: {
						speed: 0.004,
						t: 0
					}
				};
				if (Object.keys(this.thumbsUpQueue).length > 0) {
					this.thumbsUpQueue[anmationData.id] = anmationData;
				} else {
					this.thumbsUpQueue[anmationData.id] = anmationData;
					this.createThumbsAnimate();
				}
			},
			
			getRandom(min, max) {
				return Math.random() * (max - min) + min;
			},
			
			getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			},
			
			generatePathData() {
				let width = this.thumbsUpWidth,
					height = this.thumbsUpHeight;
				const p0 = {
					x: 0.65 * width,
					y: height
				};
				const p1 = {
					x: this.getRandom(0.22 * width, 0.33 * width),
					y: this.getRandom(0.5 * height, 0.75 * height)
				};
				const p2 = {
					x: this.getRandom(0, 0.88 * width),
					y: this.getRandom(0.25 * height, 0.5 * height)
				};
				const p3 = {
					x: this.getRandom(0, 0.88 * width),
					y: this.getRandom(0, 0.125 * height)
				};
				return [p0, p1, p2, p3];
			},
			
			updatePoint(data, factor) {
				const p0 = data[0];
				const p1 = data[1];
				const p2 = data[2];
				const p3 = data[3];
				const t = factor.t;
				const cx1 = 3 * (p1.x - p0.x);
				const bx1 = 3 * (p2.x - p1.x) - cx1;
				const ax1 = p3.x - p0.x - cx1 - bx1;
				const cy1 = 3 * (p1.y - p0.y);
				const by1 = 3 * (p2.y - p1.y) - cy1;
				const ay1 = p3.y - p0.y - cy1 - by1;
				const x = ax1 * (t * t * t) + bx1 * (t * t) + cx1 * t + p0.x;
				const y = ay1 * (t * t * t) + by1 * (t * t) + cy1 * t + p0.y;
				return {
					x,
					y
				};
			},
			
			createThumbsAnimate() {
				let width = this.thumbsUpWidth,
					height = this.thumbsUpHeight;
				var that = this;
				Object.keys(that.thumbsUpQueue).forEach(key => {
					const anmationData = that.thumbsUpQueue[+key];
					const {
						x,
						y
					} = this.updatePoint(
						anmationData.pathData,
						anmationData.factor
					);
					const speed = anmationData.factor.speed;
					anmationData.factor.t += speed;
					var curWidth = 40;
					curWidth = (height - y) / 1.5;
					curWidth = Math.min(40, curWidth);
					var curAlpha = anmationData.opacity;
					curAlpha = y / height;
					curAlpha = Math.min(1, curAlpha);
					that.thumbsUpContext.globalAlpha = curAlpha;
					that.thumbsUpContext.drawImage(anmationData.image, x - curWidth / 2, y, curWidth, curWidth);
					if (anmationData.factor.t > 1) {
						delete that.thumbsUpQueue[anmationData.id];
					}
					if (y > height) {
						delete that.thumbsUpQueue[anmationData.id];
					}
				});
				that.thumbsUpContext.draw();
				if (Object.keys(that.thumbsUpQueue).length > 0) {
					that.thumbsUpTimer = setTimeout(() => {
						that.createThumbsAnimate();
					}, 5);
				} else {
					clearTimeout(that.thumbsUpTimer);
					that.thumbsUpContext.draw();
				}
			},
			//点赞动画 end
			
			// 获取人气值
			getRenqiqzhi(){
				var data={
					streamId:this.options.id
				};
				this.$axios
					.axios('POST', this.$paths.streamdata, data)
					.then(res => {
						if(res.code==200){
							var renqizhiInfo=res.data;
							renqizhiInfo.allpeo=renqizhiInfo.viewsFake+renqizhiInfo.viewsReal;
							this.renqizhiInfo=renqizhiInfo;
							this.renqizhiInfo.likes_str=this.$tools.numFormat(this.renqizhiInfo.likes);
						}else{
							this.showToast(res.msg);
						}
					})
					.catch(err => {
							console.error("获取openid报错",err)
						
					});
			},
			// 显示通告图片
			showimggongaoimg(img){
				uni.previewImage({
							urls: [img],
						});
			},
			
			showmoaGetWxInfo(){
				wx.showModal({
					title:"提示",
					"content":"请先授权个人信息",
					success: (res) => {
						 if (res.confirm) {
						      this.getuserinfoBtn();
						    } 
					}
				})
			},
			getuserinfoBtn(){
				 wx.getUserProfile({
				      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
				      success: (res) => {
						uni.setStorageSync("wxUser",res.userInfo);
						var chatMsgUserInfo=this.chatMsgUserInfo;
						chatMsgUserInfo.client_name=res.userInfo.nickName;
						chatMsgUserInfo.avatar=res.userInfo.avatarUrl;
						this.chatMsgUserInfo=chatMsgUserInfo;
						this.$forceUpdate()
						this.inputInfo="进来了";
						this.sendMessage('say');
						this.is_ruchang=true;
						}
				    })
			},
			
			
			jiantingLive(){
				this.bofanginter=setInterval(res=>{
				var now_chuo=  (Date.parse(new Date())+"").substring(0,10);
				var date = new Date(this.liveInfoInfo.live_apply_play_time);
				// 有三种方式获取
				var time1 = (date.getTime()+"").substring(0,10);
				
					if(now_chuo-time1<=2&&now_chuo-time1>=1){
						this.liveplayerContext.play();
						clearInterval(this.bofanginter)
					}else if(now_chuo-time1>10){
						clearInterval(this.bofanginter)
					}
				},1000)
			},
		
			getOpenid(code){
				var data={
					wxcode:code
				};
				this.$axios
					.axios('GET', this.$paths.memberwxcode, data)
					.then(res => {
						if(res.code==200){
							uni.setStorageSync("openid",res.data);
							this.createWebSocket()
						}else{
							this.showToast(res.msg);
						}
					})
					.catch(err => {
							console.error("获取openid报错",err)
						
					});
				
			
			},
			
			
			
			henghuping(){
				this.uanping=!this.uanping;
			},
			livePlayerCon(){
				// this.plerContext=wx.createLivePlayerContext("livePlayer", this)
				// this.plerContext.play();
			},     
			
			
			toLive(){  
				uni.navigateBack({
					delta:1,
					fail:(res)=> {
						uni.reLaunch({
							url:"/pages/live/live"
						})
					}
				})
				
			},
			// 开播提醒
			kaiboTixing(){
				wx.requestSubscribeMessage({
				  tmplIds: ['_EO088PYZT3unO0ZpwYC2ntr6gdpFNIUxhC8gu1C4Qw'],
				  success: (res)=> { 
					  if(res.errMsg.indexOf("ok")>=0){
						  this.$tools.showToast("订阅成功");
						  this.subscribeIndexTo();
					  }else{
						   this.$tools.showToast("订阅失败");
					  }
				  }
				})
			},
			// 取消订阅 
			del_subscribeIndex(){
				var data={  
					'touser':uni.getStorageSync("openid"),
					'live_apply_id':this.options.id,
				}
				this.$axios
					.axios('POST', this.$paths.del_subscribeIndex, data)
					.then(res => {
						if (res.code == 10000) {
						} else {
							this.$tools.showToast(res.message);
						}
					})
					.catch(err => {});
			},
			// 点击订阅
			subscribeIndexTo(type){
				var data={  
					'touser':uni.getStorageSync("openid"),
					'live_apply_id':this.options.id,
					live_id:this.options.id,
					'page':'pages1/live_info_1/live_info_1'
				}
				this.$axios
					.axios('POST', this.$paths.subscribeIndex, data)
					.then(res => {
						if (res.code == 10000) {
						} else {
							this.$tools.showToast(res.message);
						}
					})
					.catch(err => {});
			},
			qihuan(index){
				if(index==1){
					this.tuihsasa=this.videourl;
				}else if(index==2){
					this.tuihsasa=this.mmm;
				}else if(index==3){
					this.tuihsasa=this.tuihsasa1;
				}
			},
			statechange(res){
				console.log("statechangestatechange",res.detail.code == 2004,res)
				if (res.detail.code == 2004) {
									var that = this;
									that.loading = false;
								}

			},
			netstatus(res){
				console.log("netstatus",res)
			},
			errervideo(res){
			},
			
			
			
			menuTypeClick(){
				this.menuType=true;
				this.commeinptFocus=true;
			},
			selEmiloAlertClick(){
				this.selEmiloAlert=!this.selEmiloAlert;
			},
			emioldsClicl(item){
				this.selEmilo=item.expression_url;
			},
			// 获取表情列表
			getEmild(){
				var data = {
					expressionType:'1'
				};
				this.$axios
					.axios('POST', this.$paths.streamexpression, data)
					.then(res => {
						if (res.code == 200) {
							this.biaoqingList=res.data;
						} else {
							this.$tools.showToast(res.message);
						}
					})
					.catch(err => {});
			},
			// 聊天----开始
			sendMessage(type,img) {
			  var _this = this
			  if (!this.ifConnect) {
			    uni.showToast({
			      title: '未接入聊天系统',
			      icon: 'none'
			    });
			    return;
			  }
			  if (!this.inputInfo&&type=='say') {
			    uni.showToast({
			      title: '请输入聊天内容',
			      icon: 'none'
			    });
			    return;
			  }
			  this.chatMsgUserInfo.likes=this.renqizhiInfo.likes;
			  // 发送聊天信息
			  var data={  
				  type:'say',
				  to_client_id:'all',
				  to_client_name:this.liveInfoInfo.live_name,
				  content:this.inputInfo,
				  userinfo:this.chatMsgUserInfo
			  }  
			  if(type=='img'){
				  data.image=img;
			  }else if(type=='say'){
				  data.content=this.inputInfo;
			  }else if(type=='say_zan'){
				  data.content="点赞了"+img+"下";
				  data.type='say';
			  }
			  data.userinfo.suiji= data.userinfo.client_name+Math.random()*1000;
			 console.log("发送消息数据",data)
			  uni.sendSocketMessage({
				data:JSON.stringify(data),
				success:res=>{
					uni.showLoading({
						title:"发送成功"
					});
					this.inputInfo="";
				},
				fail:res=>{
					uni.showLoading({
						title:"发送失败"
					});
				},
				complete:res=>{
					uni.hideLoading();
					this.selEmiloAlert=false;
					
					this.menuType=false;
					this.commeinptFocus=false;
				},
			  })
			  
			},
			// 发送删除消息
			sendDelMessage(text) {
			  var _this = this
			  if (!this.ifConnect) {
			    uni.showToast({
			      title: '未接入聊天系统',
			      icon: 'none'
			    });
			    return;
			  }
			   this.chatMsgUserInfo.likes=this.renqizhiInfo.likes;
			  var data={  
				  type:'del',  
				  to_client_id:'all',
				  to_client_name:this.liveInfoInfo.live_name,
				  content:text.userinfo.suiji,
				  userinfo:this.chatMsgUserInfo
			  }  
			     
			  uni.sendSocketMessage({
				data:JSON.stringify(data),
				success:res=>{
					uni.showLoading({
						title:"发送成功"
					});
					this.inputInfo="";
				},
				fail:res=>{
					uni.showLoading({
						title:"发送失败"
					});
				},
				complete:res=>{
					uni.hideLoading();
					this.selEmiloAlert=false;
					this.menuType=false;
					this.commeinptFocus=false;
				},
			  })
			  
			},
			
			sendRenqiMessage(number) {
			  var _this = this
			  if (!this.ifConnect) {
			    uni.showToast({
			      title: '未接入聊天系统',
			      icon: 'none'
			    });
			    return;
			  }
			   this.chatMsgUserInfo.likes=this.renqizhiInfo.likes;
			  var data={  
				  type:'say',  
				  number:number,
				  to_client_id:'all',
				  to_client_name:this.liveInfoInfo.live_name,
				  content:text.content,
				  userinfo:this.chatMsgUserInfo
			  }  
			  uni.sendSocketMessage({
				data:JSON.stringify(data),
				success:res=>{
					uni.showLoading({
						title:""
					});
					this.inputInfo="";
					
				},
				fail:res=>{
					uni.showLoading({
						title:"发送失败"
					});
				},
				complete:res=>{
					uni.hideLoading();
					this.selEmiloAlert=false;
					this.menuType=false;
					this.commeinptFocus=false;
				},
			  })
			  
			},
			
			createWebSocket() {
			  try {
				  console.error('创建聊天室链接',uni.getStorageSync("openid"))
			   this.taskWebsocket=uni.connectSocket({
			      url: this.chatUrl,
				  data() {
				  		return {
							"openid":uni.getStorageSync("openid")
				  		};
				  	},
					success:res=>{
						 this.initWebSocket();
					},
					fail:res=>{
					},
					complete: () => {}
			    })
			  
			  } catch (e) {
			    this.reconnectWebSocket();
			  }
			},
			
			// websocket登录
			wensocketLogin(){
				var data={  
					type:"login",
					client_name:this.chatMsgUserInfo.client_name,
					room_id:this.options.id,
					'userinfo':this.chatMsgUserInfo
				}
				data.userinfo.suiji=data.userinfo+Math.random()*1000;
				uni.sendSocketMessage({
					data: JSON.stringify(data),
					complete:res=>{
						
						if(!this.is_ruchang){
							if(this.chatMsgUserInfo.client_name!='游客'){
								this.inputInfo="进来了";
								this.sendMessage('say');
								this.is_ruchang=true;
								console.error("is_ruchang1005编程true了")
							}
						}
						
						this.selEmiloAlert=false;
					},
				})
			},
			// 修改多少下
			updatelikes(likes){
				var renqizhiInfo=this.renqizhiInfo;
				if(renqizhiInfo.likes<likes){
					// for(var a=0;a<(likes-renqizhiInfo.likes);a++){
					// 	this.thumbsUp();
					// }
					renqizhiInfo.likes=likes;
					renqizhiInfo.likes_str=this.$tools.numFormat(renqizhiInfo.likes);;
				}
			},
			
  			//初始化
			initWebSocket() {
				// uni.showLoading({
				// 		title:"聊天室连接中"
				// })   
			  var _this = this
			  uni.onSocketClose(function(res) {
				  _this.ifConnect = false,
				  uni.hideLoading()
			    if (res.reason) {
			      // uni.showToast({
			      //   title: '聊天系统连接断开：' + res.reason,
			      //   icon: 'none'
			      // });
			    }
			    if(_this.canReconnect){
			      _this.reconnectWebSocket();
			    }
			  })
			  uni.onSocketError(function(res) {
			    uni.showToast({
			      title: '聊天系统接入失败：' + res.errMsg,
			      icon: 'none'   
			    });
				uni.hideLoading()
			    _this.reconnectWebSocket();
			  })
			
			  uni.onSocketOpen(function(res) {
				  uni.hideLoading()
			      _this.ifConnect = true,
			      // uni.showToast({
			      //   title: '聊天系统接入成功',
			      //   icon: 'none'
			      // });
				  _this.wensocketLogin();
			      //心跳检测重置
			      heartCheck.start();
			  })
			  uni.onSocketMessage((res)=> {
				  uni.hideLoading()
			    var message = JSON.parse(res.data)
			    if (!message) {
			      uni.showToast({
			        title: '消息转换失败：' + res,
			        icon: 'none'
			      });
			      return
			    }
				
				if(message.number){
					message.type="renqizhi";
				}
				
			    var type = message.type || '';
				console.log("asd消息",message)
				if(message.content&&message.content.indexOf("点赞了")==0){
					if(message.userinfo&&message.userinfo.likes){
						this.updatelikes(message.userinfo.likes);
					}
					return false;
				}
				
			    switch (type) {
			      // Events.php中返回的init类型的消息，将client_id发给后台进行uid绑定
			      case 'login':
			        //加入聊天
						this.live_loadingIndex();
			        break;
			      case 'logout':
			        //离开聊天   
						this.live_loadingIndex();
			        break;
			      case 'say':
			        //发言
			        break;
			      case 'renqizhi':
			        //礼物
			        break
			      case 'gift':
			        //礼物
			        break
			      case 'del':
				  console.log("小树消息体",message)
			        //礼物
					var messageList=_this.messageList;
					var list=[];
					for(var a=0;a<messageList.length;a++){
						// image    
						// if(message.image&&message.image!=''){
						// 	if(message.image!=messageList[a].image){
						// 		list.push(messageList[a]);
						// 	}else if(!message.image){
						// 		list.push(messageList[a]);
						// 	}    
						// }else{
						// 	if(message.content!=messageList[a].content){
						// 		list.push(messageList[a]);
						// 	}
						// }
						if(messageList[a].type=='login'){
							list.push(messageList[a]);
						}else
						if(messageList[a].userinfo.suiji&&messageList[a].userinfo.suiji!=message.content){
							list.push(messageList[a]);
						}
						
					}
					_this.messageList=list;
			        break
			      default:
			        //默认
			    }
				var messageList=_this.messageList;
				if(message.type=='del'){
					return false;
				}
				messageList.push(message);
				_this.messageList=messageList;
				_this.scrooid="scrooid"+messageList.length;
			    heartCheck.start();
			  })
			},
			reconnectWebSocket() {
			  var _this = this
			  if (_this.lockReconnect) {
			    return;
			  };
			  _this.lockReconnect = true
			  //没连接上会一直重连，设置延迟避免请求过多
			  _this.timeOut && clearTimeout(_this.timeOut);
			  _this.timeOut = setTimeout(function() {
				  
				  let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
				  let curRoute = routes[routes.length - 1].route //获取当前页面路由
				  if(curRoute=='pages1/live_info_1/live_info_1')
				  {
					    _this.createWebSocket();
						_this.lockReconnect = false
				  }else{
					  _this.timeoutObj && clearInterval(_this.timeoutObj);
				  }
			  
			    
			  }, 4000)
			},
			
			// 聊天----结束
			
			
			// --------------------对接接口开始---------------------
			// 判断是否点赞
			initZan(){
				var zanLiveIs=false;
				var liveIdZan=uni.getStorageSync("liveIdZan"+this.options.id);
				if(liveIdZan){
					this.zanLiveIs=true;
				}
			},
			// 
			live_loadingIndex(type){
				var data = {
					'live_apply_id':this.options.id,//直播间id
					type:type,//	add	是	string	进入直播间，add，退出直播间，out
				};
				this.$axios
					.axios('POST', this.$paths.live_loadingIndex, data)
					.then(res => {
						if (res.code == 10000) {
							this.liveInfoInfo.live_max_member=res.result;
							// 发送
						} else {
							this.$tools.showToast(res.message);
						}
					})
					.catch(err => {});
			},
			// 去直播点赞
			toDianzan(){
				
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){
					this.$tools.showToast("请先登录");
					return false;
				}
				
				var data = {
					'live_apply_id':this.options.id,
				};
				this.$axios
					.axios('POST', this.$paths.live_favoritesIndex, data)
					.then(res => {
						if (res.code == 10000) {
							uni.setStorageSync("liveIdZan"+this.options.id,"成功");
							this.zanLiveIs=true;
						} else {
							this.$tools.showToast(res.message);
						}
					})
					.catch(err => {});
			},
			// 获取直播详情
			getLiveInfo(){
				var data = {
					'id':this.options.id,
				};
				this.$axios
					.axios('POST', this.$paths.streamidapi, data)
					.then(res => {
						if (res.code == 200) {
							this.liveInfoInfo=res.data
							
							this.IntervalZan=setInterval(res=>{
								this.jiantingClickZan();
							},2000)
							
							this.jiantingLive();
						} else {
							this.$tools.showToast(res.message);
						}
					})
					.catch(err => {});
			},
			
			// ---------------------------对接接口结束-----------------------
			
			// 显示图片
			showimg() {
				// 
				wx.previewImage({
					urls: ['/static/longteng.png'] // 需要预览的图片http链接列表
				})
			},
			//礼物数量加减
			giftCountClick(type) {
				var giftcount = this.giftcount;
				if (type == 0 && giftcount > 1) {
					giftcount = giftcount - 1;
				} else if (type == 1) {
					giftcount = giftcount + 1;
				}
				this.giftcount = giftcount;
			},
			//礼物弹窗显示隐藏
			giftIsClick(index) {
				this.giftIs = !this.giftIs;
			},
			//礼物的点击事件
			giftSelClick(index) {
				this.giftSel = index;
			},
			// 赠送礼物
			sendclick(res) {
			},
			// 直播简介展示
			liveinfoalertlick() {
				this.liveinfoalert = !this.liveinfoalert;
			},
			//语音切换
			txt_mp3Clicl() {
				// 语音文字切换
				this.txt_mp3 = this.txt_mp3 == 1 ? 2 : 1
			},
			// 加好点击
			imgbtnClick() {
				this.imgbtn = !this.imgbtn;
				if (this.imgbtn) {
					setTimeout(res => {
						this.animationsaIs = true;
					}, 500)
				}
			},
			backpage() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 失去焦点
			focusInputblur() {
				this.commeinptFocus = false;
				this.menuType=false;
			},
			// 聊天输入框获取焦点
			focusInput() {
				this.commeinptFocus = true;
				this.$forceUpdate()
			},
			// 获取键盘高度
			getKeyhieght() {
				wx.onKeyboardHeightChange(res => {
					this.keyheight = res.height
				})
			},

			//获取设备信息
			getWindowInfo() {
				try {
					const info = wx.getSystemInfoSync();
					var menuButton = wx.getMenuButtonBoundingClientRect();
					this.info = info;
					this.menuButton = menuButton;
					//计算chat的高度
					var weiheight = uni.upx2px(450 + 140 + 30); //除了聊天框  其他的高度
					weiheight = weiheight + menuButton.height + menuButton.top + 8;
					this.chatviewhieght = info.windowHeight - weiheight - 50;
					// 最后30  是距离视频组件的距离
					this.chatview_top = menuButton.height + menuButton.top + 8 + uni.upx2px(450) + 30 + uni.upx2px(30);
				} catch (e) {}
			},
		
		}
	}
	
	
	
	//心跳检测
	var heartCheck = {
	  timeout: 3000,
	  timeoutObj: null,
	  start: function() {
	    var self = this;
	    this.timeoutObj && clearInterval(this.timeoutObj);
	    this.timeoutObj = setInterval(function() {
	      //这里发送一个心跳，后端收到后，返回一个心跳消息，
	      uni.sendSocketMessage({
	        data: "123456789",
			complete:(res)=> {
			}
	      })
	    }, this.timeout)
	  },
	      stop:function(){
	          this.timeoutObj && clearInterval(this.timeoutObj)
	      }
	}
	
</script>


<style>
	@import url("liveing.css");
	
	.henghea{
		width: 750rpx;background-color: #FF8E2D;z-index: 1000;height: 100vh;
	}
	.uanpinga{
		width:750rpx;height:430rpx;position: relative;
	}
</style>
