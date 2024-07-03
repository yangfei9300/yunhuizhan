<template>
	<view>
		<view class="colonn m-top-20" >
			
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">姓名</view>
				<input placeholder="请输入姓名"
				 class="fs-25"
				 v-model="form.attendName"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">电话</view>
				<input placeholder="请输入电话"
				 class="fs-25" disabled
				 v-model="form.phonenum"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>   
			</view>
			<!-- <view class="roww  border_bottom center_center" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">验证码</view>
				<input placeholder="请输入验证码"
				 class="fs-25"
				 />  
				 <view class="allline"></view>
				 <view class="clickmam">获取验证码</view>
			</view> -->
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">邮箱</view>
				<input placeholder="请输入邮箱"
				 class="fs-25"
				 v-model="form.emile"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">单位名称</view>
				<input placeholder="请输入单位名称"
				 class="fs-25"
				 v-model="form.companyName"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">单位省市</view>
				<input placeholder="请输入单位省市"
				 class="fs-25"
				 v-model="form.companyCity"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">详细地址</view>
				<input placeholder="请输入详细地址"
				 class="fs-25"
				 v-model="form.place"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">部门</view>
				<input placeholder="请输入部门"
				 class="fs-25"
				 v-model="form.department"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">职务</view>
				<input placeholder="请输入职务"
				 class="fs-25"
				 v-model="form.job"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="dibuview roww rowsa center_center">
				<view class="quxiaoucs1" @click="toSubmit">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options:{},
				form:{
					   openid:"",//  varchar(64) DEFAULT NULL COMMENT 'openid',
					   attendName:"",//  varchar(30) DEFAULT NULL COMMENT '姓名',
					   phonenum:"",//  varchar(11) DEFAULT NULL COMMENT '手机号',
					   emile:"",//  varchar(30) DEFAULT NULL COMMENT '邮箱',
					   companyName:"",//  varchar(30) DEFAULT NULL COMMENT '单位名称',
					   companyCity:"",//  varchar(30) DEFAULT NULL COMMENT '单位省市',
					   place:"",//  varchar(50) DEFAULT NULL COMMENT '详细地址',
					   department:"",//  varchar(30) DEFAULT NULL COMMENT '部门',
					   job :"",// varchar(30) DEFAULT NULL COMMENT '职务',
					   activityId:"",//  bigint(20) NOT NULL COMMENT '活动id',
					   exhId:"",//  bigint(20) NOT NULL COMMENT '展会id',
				},
			}
		},
		onLoad(options) {
			
			var stroreForm=uni.getStorageSync("stroreForm");
			if(stroreForm){
				stroreForm.exhId="";
				stroreForm.activityId="";
				this.form=stroreForm;
			}
			this.options=options;
			this.form.exhId=uni.getStorageSync("nowExhId");
			this.form.activityId=options.id;
			this.form.openid=uni.getStorageSync("openid");
			var userInfo=uni.getStorageSync("userInfo");
			if(userInfo){
				this.form.phonenum=userInfo.phonenum;
			}
		},
		methods: {
			toSubmit(){
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){
					this.$tools.showToast("请先登录");
					setTimeout(res=>{
						uni.switchTab({
							url:"/pages/wode/wode"
						})
					},1000)
					return false;
				}
				if(!this.isSubmit()){
					return false;
				}
				var data=this.form;
				
				this.$axios
					.axios('POSt', this.$paths.avtivityenroll, data)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast("报名成功");
							uni.setStorageSync("stroreForm",data);
							setTimeout(res=>{
								uni.navigateBack({
									delta:1
								})
							},1000)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			isSubmit(){
				if(this.form.attendName==""){
					this.$tools.showToast("请输入姓名");
					return false;
				}
				if(this.form.phonenum==""){
					this.$tools.showToast("请输入手机号");
					return false;
				}
				if(this.form.emile==""){
					this.$tools.showToast("请输入邮箱");
					return false;
				}
				if(this.form.companyName==""){
					this.$tools.showToast("请输入单位名称");
					return false;
				}
				if(this.form.companyCity==""){
					this.$tools.showToast("请输入单位省市");
					return false;
				}
				if(this.form.place==""){
					this.$tools.showToast("请输入详细地址");
					return false;
				}
				if(this.form.department==""){
					this.$tools.showToast("请输入部门");
					return false;
				}
				if(this.form.job==""){
					this.$tools.showToast("请输入职务");
					return false;
				}
				return true;
			}
		}
	}
</script>

<style>
@import url("activity_sign_up.css");
</style>
