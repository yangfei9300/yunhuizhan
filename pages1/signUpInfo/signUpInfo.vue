<template>
	<view>
		<image class="w-750 h-340" 
		mode="widthFix"
		:src="activiInfo.image" style="background-color: #f5f5f5;"></image>
		<view class="jibenxinxiview  colonn"> 
			<view class="huanhang">
				<view class="huodongname">{{activiInfo.title}}
				<text class="baomingtag" v-if="activiInfo.status==1">报名中</text>
				<text class="baomingtag" v-if="activiInfo.status==2">结束报名</text>
				</view>
			</view>
			<view class="roww m-top-32">
				<view class="shijiandiana">时间：</view>
				<view class="shijianino">{{activiInfo.startTime}}  至  {{activiInfo.endTime}}</view>
			</view>
			<view class="roww m-top-32">
				<view class="shijiandiana">地点：</view>
				<view class="shijianino">{{activiInfo.place}}</view>
			</view>
		</view>
		<view class="colonn background1 m-top-20" v-if="activiInfo.guestList.length>0">
			<view class="huiyijiabin p-all-24 m-bottom-20">会议嘉宾</view>
			<view class="roww p-all-24 border_bottom"
			v-for="(item,index) in activiInfo.guestList"
			>
				<image 
				:src="item.image" 
				style="background-color: #ffffff;"
				class="w-156 h-156 m-right-15 br-15"></image>
				<view class="colonn rowsbl h-156">
					<view class="jiabingname">{{item.name}}</view>
					<view class="jianjieP txtShowLength2">
						{{item.info}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="colonn background1 m-top-20">
			<view class="huiyijiabin p-all-24 m-bottom-20">主讲内容</view>
			<view class="roww p-all-24 border_bottom nierongxtt p-bottom-20 " style="width: 750rpx;"
			>
				   <rich-text :nodes="activiInfo.details" style="width:702rpx;"></rich-text>
			</view>
		</view>
		<view style="height: 140rpx;"></view>
		<view class="dibuss roww center_center">
			<view class="lijiboass" v-if="!activiInfo.params.enrollInfo" @click.stop="toSign">立即报名</view>
			<view class="lijiboass" v-if="activiInfo.params.enrollInfo" @click.stop="toResult">查看二维码</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activiInfo:{},
				BASE_IMG:"",
				options:{}
			}
		},
		onLoad(options) {
			this.BASE_IMG=this.$paths.BASE_IMG;
			console.log(options)
			this.options=options;
		},
		onShow() {
			this.getActivityInfo(this.options.id);
		},
		methods: {
			toResult(){
				uni.setStorageSync("toResultUserInfo",this.activiInfo.params.enrollInfo)//保存会议信息
				uni.setStorageSync("toResultActivityInfo",this.activiInfo)//保存会议信息
				uni.navigateTo({
					url:"/pages4/toResult/toResult"
				})  
			},
			toSign(){
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo||!userInfo.phonenum){
					wx.showModal({
					  title: '提示',
					  content: '请先完善个人信息以及手机号',
					  success :(res)=> {
					    if (res.confirm) {
					      wx.switchTab({
							  url:"/pages/wode/wode"
						  })
					    } else if (res.cancel) {
					      console.log('用户点击取消')
					    }  
					  }
					})
					return false;
				}
				uni.navigateTo({
					url:"../../pages2/activity_sign_up/activity_sign_up?id="+this.activiInfo.id
				})
			},
			// 获取活动详情
			getActivityInfo(id){
				
				
				
				var data = {
					id:id
				}
				
				var userInfo=uni.getStorageSync("userInfo");
				if(userInfo){
					data.params={
						'phone':userInfo.phonenum
					}
				}
				
				this.$axios
					.axios('POST', this.$paths.activitybyid, data)
					.then(res => {
						if (res.code == 200) {
							
							this.activiInfo=res.data;
							this.activiInfo.details = this.activiInfo.details.replace(/\<img/gi, '<img style="width:100%" ');
							
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
@import url("signUpInfo.css");
</style>
