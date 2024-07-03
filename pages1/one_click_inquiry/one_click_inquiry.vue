<template>
	<view>
		<view class="colonn background1">
			<view class="roww  border_bottom" style="padding:15rpx 35rpx;" >
				<view class="fs-25 w-150">手机号</view>
				<input placeholder="请输入手机号"
				 class="fs-25" 
				 v-model="form.phone"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<!-- <view class="roww  border_bottom center_center" style="padding:15rpx 35rpx;" >
				<view class="fs-25 w-150">验证码</view>
				<input placeholder="请输入验证码"
				 class="fs-25"
				 />
				 <view class="allline"></view>
				 <view class="clickmam">获取验证码</view>
			</view> -->
			<view class="roww  border_bottom center_center" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">公司</view>
				<view class="roww">
					<input placeholder="请输入公司名称"
					 class="fs-25"
				 v-model="form.companyName"
					 />
					 <view class="allline"></view>
				</view>
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom center_center" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">姓名</view>
				<input placeholder="请输入姓名"
				 class="fs-25" 
				 v-model="form.name"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom center_center" 
			style="padding:25rpx 35rpx 10rpx 35rpx;" >
				<view class="fs-25 w-150 m-bottom-20">职位</view>
				<view class="huanhang allline">
					<view class="roww center_center m-bottom-20 m-right-15"
						v-for="(item,index) in zhiweis"
						@click.stop="jobClick(item)"
					>
						<image src="/static/xuanzhong.png" 
						v-if="form.job==item"
						class="seluci m-right-15" ></image>
						<image src="/static/euxanzho.png"
						 v-else
						 class="seluci m-right-15"></image>
						<view class="fs-25">{{item}}</view>
					</view>
				</view>
			</view>
			
			<view class="roww  border_bottom center_center" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">咨询产品</view>
				<view class="roww">
					<input placeholder="请输入需要资讯的产品"
					 class="fs-25"
				 v-model="form.product"
					 />
				</view>
				 <view class="allline"></view>
			</view>
			
			<view class="roww  border_bottom center_center" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">备注</view>
				<textarea placeholder="请输入备注"
				 class="fs-25"
				 auto-height v-model="form.remarks"
				 maxlength="400"
				 style="width: 400rpx;"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
		</view>
		
		<view class="dibuview roww rowsa center_center">
			
			<view class="quxiaoucs"@click="toback">取消</view>
			<view class="quxiaoucs1" @click.stop="toSubmit">提交</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodInfoXun:{},
				form:{
					'name':'',
					'phone':'',
					'companyName':'',
					job:'',
					'product':'',
					'productId':'',
					companyId:'',
					remarks:''
				},
				userInfo:{},
				zhiweis:['销售','技术','采购','厂长','经理','其他'],
				
			}
		},
		onLoad() {
			var userInfo=uni.getStorageSync("userInfo");
			this.userInfo=userInfo;
			this.goodInfoXun=uni.getStorageSync("goodInfoXun");
			this.form.product=this.goodInfoXun.name;
			this.form.productId=this.goodInfoXun.productId;
			this.form.companyId=this.goodInfoXun.companyId;
			this.form.phone=this.userInfo.phonenum;
		},
		methods: {
			toback(){
				uni.navigateBack({
					delta:1
				})    
			},
			toSubmit(){
				if(!this.isSubmit()){
					return false;
				}
				var data=this.form;
				data.openid=uni.getStorageSync("openid");
				data.exhType=uni.getStorageSync("exType");
				this.$axios
					.axios('POST', this.$paths.productdeliver, data)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast("询价提交成功");
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			jobClick(item){
				this.form.job=item;
			},
			isSubmit(){
				if(this.form.phone==""){
					this.$tools.showToast("请输入手机号");
					return false;
				}
				if(this.form.companyName==""){
					this.$tools.showToast("请输入公司名称");
					return false;
				}
				if(this.form.name==""){
					this.$tools.showToast("请输入请输入姓名");
					return false;
				}
				if(this.form.job==""){
					this.$tools.showToast("请选择职位");
					return false;
				}
				return true;
			},
		}
	}
</script>

<style>
@import url("one_click_inquiry.css");
</style>
