<template>
	<view>
		<v-tabs  v-model="current" 
		:lineScale="lineScale"
		activeColor="#2E7EFF" 
		lineColor="#2E7EFF"  
		:scroll="false" 
		:tabs="tabs" 
		@change="changeTab"></v-tabs>
		<view class="h-30"></view>
		<swiper class="topimg" autoplay indicator-dots
		v-if="bannerList.length>0"
		>
			<swiper-item class="topimg" v-for="(item,index) in bannerList">
				<image class="topimg" mode="aspectFill" :src="item.imagePath" ></image>
			</swiper-item>
		</swiper>  
		
		<!-- <image class="imgd m-all-20 br-15" v-if="current==0"></image> -->
		<view class="colonn m-top-20" v-if="current==0">
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150 lh-50">单位名称</view>
				<input placeholder="请输入单位名称" v-model="form.company"
				 class="fs-25"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150 lh-50">拟展出产品</view>
				<input placeholder="请输入展出产品"
				 class="fs-25" v-model="form.product"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150 lh-50">展位面积</view>
				<input placeholder="请输入展位面积"
				 class="fs-25" 
				 v-model="form.boothArea"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150 lh-50">姓名</view>
				<input placeholder="请输入姓名"
				 class="fs-25"
				 v-model="form.contactName"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150 lh-50">电话</view>
				<input placeholder="请输入电话"
				 class="fs-25"
				 v-model="form.contactPhone"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			
			<view class="dibuview roww rowsa center_center">
				<view class="quxiaoucs1" @click.stop="toSubmitt">提交</view>
			</view>
		</view>
		<view class="colonn center_center p-all-25" v-if="current==1">
			<view v-if="contextInfo.content">
				<uParse :content="contextInfo.content"></uParse>
			</view>
		</view>
		<view class="colonn center_center p-all-25" v-if="current==2">
				<view v-if="contextInfo.content"><uParse :content="contextInfo.content"></uParse></view>
		</view>
		<view class="colonn center_center p-all-25" v-if="current==3">
				<view v-if="contextInfo.content"><uParse :content="contextInfo.content"></uParse></view>
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
				current: 0,
				tabs: [
				  '参展报名',
				  '参展须知',
				  '布展流程',
				  '展后跟踪',
				],
				lineScale:0.2,  
				BASE_IMG:"",
				contextInfo:{},
				form:{
					boothArea:"",//	展位面积		false	
					company:"",//	单位名称		false	
					contactName:"",//	联系人姓名		false	
					contactPhone:"",//	联系人电话		false	
					exhId:"",//	展会id		false	
					exhibitorEnrollId:"",//	参展报名id		false	
					product:"",//	拟展出产品		false	
					'openid':''
				},
				
				userInfo:null,//
				bannerList:[],
				options:{},//
			}
		},
		onLoad(options) {
			this.options=options
			setTimeout(res=>{
				this.getMiniapp()
			},200)
			
			if(options.exType){
				uni.setStorageSync("exType",options.exType);
			}
			if(options.nowExhId){
				uni.setStorageSync("nowExhId",options.nowExhId);
			}
			if(options.type){
				this.current=parseInt(options.type);
				if(this.current!=0){
					this.changeTab(parseInt(options.type));
				}
			}
			this.BASE_IMG=this.$paths.BASE_IMG;
			setTimeout(res=>{
				this.getBanners();
			},1000)
			
			
			this.form.exhId=uni.getStorageSync("nowExhId");
			this.form.openid=uni.getStorageSync("openid")
			var userInfo=uni.getStorageSync("userInfo");
			if(userInfo){
				this.userInfo=userInfo;
				if(this.userInfo.phonenum){
					this.form.contactPhone=this.userInfo.phonenum;
				}
			}
		},
		methods: {
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
			toSubmitt(){
				if(!this.$tools.islogin()){
					return false;
				}
				if(!this.isSubmit()){
					return false;
				}
				var data=this.form;
				this.$axios
					.axios('POSt', this.$paths.exhibitorEnroll, data)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast("报名成功，请等待审核");
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			isSubmit(){
				if(this.form.company==""){
					this.$tools.showToast("请输入单位名称");
					return false;
				}
				if(this.form.product==""){
					this.$tools.showToast("请输入拟出产产品");
					return false;
				}
				if(this.form.boothArea==""){
					this.$tools.showToast("请输入展位面积");
					return false;
				}
				if(this.form.contactName==""){
					this.$tools.showToast("请输入展位面积");
					return false;
				}
				if(this.form.contactPhone==""){
					this.$tools.showToast("请输入联系电话");
					return false;
				}
				if(!this.$tools.isphone(this.form.contactPhone)){
					this.$tools.showToast("请输入正确的手机号");
					return false;
				}
				return true;
			},
			changeTab(index) {
			  console.log('当前选中的项：' + index)
			  this.current=index;
			  if(index>0){
				  setTimeout(res=>{
					  this.getContentByIndex(index);
				  },500)
				  
			  }
			},
			//获取富文本
			getContentByIndex(type){
				// 
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
					'type':type
				}
				this.$axios
					.axios('GET', this.$paths.mimniappcenter, data)
					.then(res => {
						if (res.code == 200) {
							if(res.data.length>0){
								this.contextInfo=res.data[0];
								this.contextInfo.content =  this.contextInfo.content.replace(/\<img/gi, '<img style="width:100%" ')
								
							}else{
								this.contextInfo={'content':""};
							}
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
						'type':'3'
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
			
		}
	}
</script>

<style>
@import url("exhibitor_center.css");
</style>
