<template>
	<view>
		<v-tabs  v-model="current" 
		:lineScale="lineScale"
		activeColor="#2E7EFF" 
		:scroll="false"
		lineColor="#2E7EFF"  
		:tabs="tabs" 
		@change="changeTab"></v-tabs>
		
		<view class="colonn m-top-20" v-if="current==0">
			<swiper class="imgd m-all-20 br-15" v-if="bannerList.length>0">
				<swiper-item class="imgd br-15" v-for="(item,index) in bannerList">
					<image mode="aspectFill" class="imgd  br-15" :src="item.imagePath"></image>
				</swiper-item>
			</swiper>
			<view class="roww border_bottom fs-30 p-all-20">
				<view>发布时间：</view>
				<view>{{articlesInfo.createTime}}</view>
			</view>
			<!-- <view class="roww border_bottom fs-30 p-all-20 ">
				<view>时间安排：</view>
				<view class="w-550">爱上大声地山东山东爱上大声地山东山东爱上大声地山东山东爱上大声地山东山东爱上大声地山东山东爱上大声地山东山东爱上大声地山东山东爱上大声地山东山东爱上大声地山东山东爱上大声地山东山东 </view>
			</view> -->
			<view class="roww center_center p-all-20">
				<!-- <rich-text :nodes="articlesInfo.content"></rich-text> -->
				
				
				<uParse v-if="articlesInfo.content" :content="articlesInfo.content" ></uParse>
				
			</view>
			<view class="colonn p-all-20">
				<view class="fweight">直播视频</view>
				<view class="">
					<view class="br-15 m-top-15 w-710 h-300 pore"
					 v-for="(item,index) in kaimushi"
					 @click.stop="toLiveRoom(item)"
					>
						<image class="br-15  w-710 h-300"
						style="background-color: #f5f5f5;"  mode="aspectFill"
						 :src="BASE_IMG+item.shareImgUrl"
						></image>
						<view class="poab w-710 h-300 roww center_center" 
						style="top: 0rpx;left: 0rpx;background-color: rgba(0, 0, 0, 0.5);border-radius: 25rpx;">
							<image src="/static/boafnag.png" class="w-70 h-70"
							></image>
						</view>
					</view>
				</view>
			</view>
			<view class="colonn p-all-20">
				<view class="fweight">往期回放</view>
				<view class="huanhang rowsb">
					
					<view  class="br-15 m-top-15 w-350 h-250 pore"
					 v-for="(item,index) in huifangvidoe"
					 @click.stop="toLiveRoom(item)"
					>
						<image class="br-15  w-350 h-250"
						style="background-color: #f5f5f5;" mode="aspectFill"
						  :src="BASE_IMG+item.shareImgUrl"
						></image>
						<view class="poab w-350 h-250 roww center_center"
						style="top: 0rpx;left: 0rpx;background-color: rgba(0, 0, 0, 0.5);border-radius: 25rpx;">
						<image src="/static/boafnag.png" class="w-35 h-35 "
						></image>
						</view>
					</view>
					
				</view>
			</view>
		</view>
		
		<!-- <view class="colonn center_center p-all-20" v-if="current==1">
			<view>
				<uParse v-if="articlesInfo.content" :content="articlesInfo.content" ></uParse>
			</view>
		</view>
		<view class="colonn center_center p-all-20" v-if="current==2">
			<view>
				<uParse v-if="articlesInfo.content" :content="articlesInfo.content" ></uParse>
			</view>
		</view> -->
		<view class="colonn center_center" v-if="current==1">
			<v-tabs  v-model="current1"
			:lineScale="lineScale"
			activeColor="#2E7EFF" 
			lineColor="#2E7EFF"  
			:tabs="activityTimeLsits" 
			@change="activitesChange"
			></v-tabs>
			<view class="colonn">
				<view class="roww m-top-20 border_bottom p-bottom-15"
				v-for="(item,index) in activityLsits"
				@click="toBoamingInfo(item)"
				>
					<image class="imagesactivew" mode="aspectFill" :src="BASE_IMG+item.image"></image>
					<view class="colonn rowsbl">
						<view class="fs-30 fweight w-400 txtShowLength">{{item.title}}</view>
						<view class="fs-30 w-400 txtShowLength">地点：{{item.place}}</view>
						<view  class="fs-30" style="color: #999999;">活动时间：{{item.startTime}}</view>
					</view>   
				</view>
				<view v-if="activityLsits.length<=0">
					<noList></noList>
				</view>
			</view>
		</view>
		
	</view>
</template>
<script>
	
	import uParse from '@/components/u-parse/u-parse.vue'
	
	export default {    
		  components: {
		    uParse
		  },
		data() {
			return {
				current1:0 ,
				current:0,
				BASE_IMG:"",
				tabs: [
				  '开幕式',
				  "活动报名"
				],
				
				lineScale:0.2,
				articlesInfo:{},//文章详情
				bannerList:[],
				activityLsits:[],//活动列表 
				activityTimeLsits:[],
				
				kaimushi:[],//开幕式
				// 回放
				huifangvidoe:[],
			}
		},
		onLoad(options) {
			if(options.type){
				this.current=parseInt(options.type)
			}
			
			
			this.getWenzahng();
			this.getBanners();
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getKaimushi();
			this.gethuifang();
		},
		methods: {
			
			activitesChange(index){
				this.current1=index;
				this.getHuodong();
			},
			
			toLiveRoom(item){
				let roomId =item.roomid // 填写具体的房间号，可通过下面【获取直播房间列表】 API 获取
				wx.navigateTo({ 
				    url: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${roomId}`
				})
			},
			
			getKaimushi(){
				// 
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
				}
				this.$axios
					.axios('POST', this.$paths.concurrentlive, data)
					.then(res => {
						if (res.code == 200) {
							this.kaimushi=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			gethuifang(){
				// 
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
				}
				this.$axios 
					.axios('POST', this.$paths.concurrentplayback, data)
					.then(res => {
						if (res.code == 200) {
							console.log("asd",res)
							this.huifangvidoe=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			toBoamingInfo(item){
				uni.navigateTo({
					url:"../signUpInfo/signUpInfo?id="+item.id
				})
			},
			// 获取活动时间列表
			getHuodongTime(){
				// /miniapp/activity  
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
				}
				this.$axios
					.axios('POST', this.$paths.activityminiapp, data)
					.then(res => {
						if (res.code == 200) {
							this.activityTimeLsits=res.data;
							if(this.activityTimeLsits.length>0){
								this.getHuodong();
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取活动列表
			getHuodong(){
				var data = {
					schedule:this.activityTimeLsits[this.current1],
					exhId:uni.getStorageSync("nowExhId"),
				}
				this.$axios
					.axios('POST', this.$paths.activitybydate, data)
					.then(res => {
						if (res.code == 200) {
							this.activityLsits=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取轮播图
			getBanners(){
					var data = {
						exhId:uni.getStorageSync("nowExhId"),
						'type':'5'
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
			// 获取文章
			getWenzahng(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
					type:this.current+1
				}
				this.$axios
					.axios('POSt', this.$paths.concurrentminiapp, data)
					.then(res => {
						if (res.code == 200) {
							if(res.data.length>0){
								this.articlesInfo=res.data[0];
								
								this.articlesInfo.content = this.articlesInfo.content.replace(/\<img/gi, '<img style="width:100%" ')
								
							}else{
								this.articlesInfo={};
							}
							
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			
			changeTab(index) {
			  console.log('当前选中的项：' + index)
			  
			  
			  if(index<=2){
				   this.current=index;
				   this.getWenzahng();
			  }else if(index==3){
				    this.current=index;
					this.getHuodongTime();
				  // uni.navigateTo({
				  // 	url:"../../pages2/activityList/activityList"
				  // })
			  }
			},
			toInfo(){
				uni.navigateTo({
					url:"../signUpInfo/signUpInfo"
				})
			}
		}
	}
</script>

<style>
@import url("concurrent_activities_wujin.css");
</style>
