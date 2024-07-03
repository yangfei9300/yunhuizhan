<template>
	<view>
		<view class="colonn">
			<view class="roww center_center topviuews">
				<view class="w-50"></view>
				<view class="colonn">
					<image :src="logoUrl" class="headimng"></image>
					<view class="xingming txtShowLength">{{bmxxInfo.nickname}}</view>
				</view>
				<view class="w-70 h-180"></view>
				<view class="colonn allline">
					<view class="roww">
						<image src="/static/yaoyue.png" class="w-50 h-50"></image>
						<view class="font_size7_r m-left-15 color6_r">我的邀约</view>
						<view class="allline"></view>
					</view>
					<view class="roww m-top-20">
						<view class="colonn ">
							<view class="roww duiqi color6_r">
								<view class="fs-40" v-if="turnoutNum.params">{{turnoutNum.params.referrerCount?turnoutNum.params.referrerCount:0}}</view>
								<view class="fs-20">人</view>
							</view>
							<view class="fs-25 color6_r">登记成功</view>
						</view>
						<view class="colonn m-left-25">
							<view class="roww duiqi color6_r">
								<view class="fs-40"  v-if="turnoutNum.params">
								{{turnoutNum.params.referrerArriveCount?turnoutNum.params.referrerArriveCount:0}}
								</view>
								<view class="fs-20">人</view>
							</view>
							<view class="fs-25 color6_r">展会入场</view>
						</view>
						<view class="allline"></view>
					</view>
				</view>
			</view>  
			<!-- <image class="imagess"></image> -->
			<view class="colonn">

				<view class="colonn center_center">
					<view class="yqhyxfl roww center_center"
					 @click.stop="openClick(1)"
					>
						<view>查看邀约规则</view>
						<view class="w-10"></view>
						<image src="/static/xiangshangzhanhang.png" 
						class="w-40 h-40" v-if="guizeOpen"></image>
						<image src="/static/xiangxiazhanhang.png"
						class="w-40 h-40" v-if="!guizeOpen"></image>
					</view>
					<view class="m-all-25" v-if="guizeOpen"
					>
						<rich-text :nodes="yubaominghuacn.invitationRules"></rich-text>
					</view>
					
					<view class="yqhyxfl roww center_center"
					@click.stop="openClick(2)"
					>  
						<view>我的邀约记录</view>
						<view class="w-10"></view>
						<image src="/static/xiangshangzhanhang.png"
						class="w-40 h-40" v-if="yaoyueJilu"></image>
						<image src="/static/xiangxiazhanhang.png"
						class="w-40 h-40" v-if="!yaoyueJilu"></image>
					</view>
					<!-- <view class="yqhyxfl roww center_center"
					@click.stop="openClick(4)"
					>  
						<view>我的邀请奖励</view>
						<view class="w-10"></view>
						<image src="/static/xiangshangzhanhang.png"
						class="w-40 h-40" v-if="jiangliMoney"></image>
						<image src="/static/xiangxiazhanhang.png"
						class="w-40 h-40" v-if="!jiangliMoney"></image>
					</view> -->
					
				</view>
				
				<view v-if="yaoyueJilu"
					class="roww m-top-20 p-bottom-10 center_center border_bottom p-left-20 p-right-20"
					v-for="(item,index) in referrerUserList">
					<image class="headimg" :src="logoUrl"></image>
					<view class="colonn">
						<view class="fs-27 w-300 txtShowLength">{{item.visitorName}}</view>
					</view>     
					<view class="allline"></view>
					<view style="color: red;font-size: 27rpx;" v-if="item.status==0">未核销</view>
					<view style="color: blue;font-size: 27rpx;" v-if="item.status==1">已核销</view>
					<view class="w-15"></view>
				</view>
				 
				<view v-if="jiangliMoney"
					class="colonn m-top-20 p-bottom-20 p-top-20 center_center  p-left-20 p-right-20"
				
					>
					<view class="roww w-710 fs-30 border_bottom" 	style="padding:25rpx 0rpx;">
						<view>
							预计可得金额(总金额)
						</view>
						<view class="allline">
						</view>
						<view  class="moneytxt">{{balacces.params.withdrawalTotal}}元</view>
					</view>
					
					<view class="roww w-710 fs-30 border_bottom" 	style="padding:25rpx 0rpx;">
						<view>
							当前可提现金额
						</view>
						<view class="allline">
						</view>
						<view class="moneytxt">{{balacces.params.withdrawalNow}}元</view>
					</view>
					
					<view class="roww w-710 fs-30 border_bottom" 	style="padding:25rpx 0rpx;">
						<view>
							已成功提现金额
						</view>
						<view class="allline">
						</view>
						<view class="moneytxt">{{balacces.params.withdrawalSuccess}}元</view>
					</view>
					<view class="">
						<rich-text :nodes="yubaominghuacn.inviteExplain">
							
						</rich-text>
					</view>
				</view>
				
			<!-- 	<view class="roww  m-top-20 fs-30"
				style="font-weight: bold;color: blue;"
				>
					<view class="w-20"></view>
					<view @click.stop="tohistorey">提现记录</view>
					<view class="allline"></view>
					<view  @click.stop="toTixian">去提现</view>
					<view class="w-20"></view>
				</view>
				 -->
				
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				referrerUserList: [], //邀请列表
				exType: null,
				turnoutNum: {}, //到场人数
				registrationNum: 0,
				pagenum: 1,
  
				bmxxInfo: {}, //报名信息
				guizeOpen:false,
				yaoyueJilu:false,
				jiangliMoney:false,
				
				
				ExhInfo:{},//展会配置
				isRush:true,//是否继续加载
				
				logoUrl:"",
				yubaominghuacn:{},//展会配置
				balacces:{},//余额
			}
		},
		onLoad() {
			this.ExhInfo=uni.getStorageSync("ExhInfo")
			this.yubaominghuacn=uni.getStorageSync("yubaominghuacn");
			this.logoUrl=this.$tools.getLogos(parseInt(uni.getStorageSync("exType")));
			
			// this.info.content =  this.info.content.replace(/\<img/gi, '<img style="width:100%" ')
			this.bmxxInfo = uni.getStorageSync("userInfo");
			this.exType = uni.getStorageSync("exType")
			// this.referrerlist();
			this.referrerCountarrive();
			this.openClick(3);
			
			if(this.ExhInfo.invitationRules){
				this.ExhInfo.invitationRules=this.ExhInfo.invitationRules.replace(/\<img/gi, '<img style="width:100%" ')
			}
		},
		onReachBottom() {
			if(this.yaoyueJilu){
				if(this.referrerUserList.length<this.turnoutNum.params.referrerCount){
					this.referrerlist();
				}
			}
		},
		methods: {
			
			toTixian(){
				if(!this.balacces.params){
					this.getBallce(1);
					return
				}
				if(this.balacces.params.withdrawalNow<=0){
					this.$tools.showToast("余额不足，不可提现");
					return
				}
				var data = {
					'exhId':uni.getStorageSync("nowExhId"),
					visitorId:this.bmxxInfo.unionid,
					amount:this.balacces.params.withdrawalNow
				}
				this.$axios
					.axios('POST', this.$paths.submitwithdrawal, data)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast("申请提交成功，请等待审核");
							
							setTimeout(res=>{
								this.getBallce();
								this.tohistorey()
							},1000)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 前往提现记录
			tohistorey(){
				uni.navigateTo({
					url:"/pages5/subMoney/subMoney"
				})
			},
			// 获取可提现金额
			getBallce(type){
				var data = {
					exhId: uni.getStorageSync("nowExhId"),
					referrerId: this.bmxxInfo.unionid,
				}
				this.$axios
					.axios('POST', this.$paths.moneyreferrerCount, data)
					.then(res => {
						if (res.code == 200) {
							this.balacces = res.data;
							if(type){
								this.toTixian();
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			openClick(type){
				if(type==1){
					this.guizeOpen=!this.guizeOpen;
					this.yaoyueJilu=false;
				    this.jiangliMoney=false;
				}
				if(type==2){
					this.guizeOpen=false;
				    this.jiangliMoney=false;
					this.yaoyueJilu=!this.yaoyueJilu;
					if(this.yaoyueJilu&&this.referrerUserList.length<=0){
						this.referrerlist();
					}
				}
				if(type==3){
					this.guizeOpen=false;
				    this.yaoyueJilu=false;
				    this.jiangliMoney=false;
				}
				if(type==4){
					this.guizeOpen=false;
				    this.yaoyueJilu=false;
				    this.jiangliMoney=!this.jiangliMoney;
					if(this.jiangliMoney){
						this.getBallce();
					}
				}
			},
			// 获取到场人数
			referrerCountarrive() {
				var bmxxInfo=this.bmxxInfo;
				if(!bmxxInfo){
					return
				}
				
				
				var data = {
					exhId: uni.getStorageSync("nowExhId"),
					referrerId: bmxxInfo.unionid,
				}
				this.$axios
					.axios('POST', this.$paths.referrerCountarrive, data)
					.then(res => {
						if (res.code == 200) {
							this.turnoutNum = res.data;
							console.log(this.turnoutNum)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取邀请列表
			referrerlist() {
				
				var bmxxInfo=this.bmxxInfo;
				if(!bmxxInfo){
					return
				}
				
				
				var data = {
					exhId: uni.getStorageSync("nowExhId"),
					referrerId: bmxxInfo.unionid,
				}
				this.$axios
					.axios('POST', this.$paths.referrerlist +
						'?pageNum=' + this.pagenum + '&pageSize=15', data)
					.then(res => {
						if (res.code == 200) {
							this.referrerUserList = this.referrerUserList.concat(res.rows);
							
							this.pagenum = this.pagenum + 1;
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
	@import url(yaoyuejilu.css);
</style>
