<template>
	<view>
		<view class="colonn m-top-20" >
			<view class="roww center_center border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-180 lh-50">直播间类型</view>
				 <view class="allline"></view>
				 <picker :range="['普通直播间','开幕式']" @change="liveChange">
					 <view class="fs-25">
					 					 <block v-if="form.onlineType==1">普通直播间</block>
					 					 <block v-else-if="form.onlineType==2">开幕式</block>
					 					 <block v-else>
					 						 请选择
					 					 </block>
					 </view>  
				 </picker>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			
			<view class="roww center_center border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-180 lh-50">直播形式</view>
				 <view class="allline"></view>
				 <picker :range="['手机直播','硬件推流']" @change="liveTypeChange">
					 <view class="fs-25">
					 					 <block v-if="form.type==1">硬件推流</block>
					 					 <block v-else-if="form.type==0">手机直播</block>
					 					 <block v-else>
					 						 请选择
					 					 </block>
					 </view>
				 </picker>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-180 lh-50">直播间名称</view>
				<input placeholder="至少三个汉字" v-model="form.name"
				 class="fs-25"  v-if="!erweimaShow" 
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom fs-30 " style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-180 lh-50">直播开始时间</view>
				<view class="roww allline center_center">
					<hTimePicker sDay="0" dayNum="200"
					 ref="input1"
					 @changeTime="changeTime">
										  <view slot="pCon" class="changeTime">
											  <block v-if="form.startTime1==''">点击选择时间</block>
											  <block v-else>{{form.startTime1}}</block>
										  </view>
										</hTimePicker>
						<view class="allline"></view>
					<image src="../../static/home/youjiantou.png"
					class="w-50 h-50"
					></image>
				</view>
				 
			</view>
			<view class="roww  border_bottom fs-30 " style="padding:25rpx 35rpx;" 
			@click.stop="openTime"
			>
				<view class="fs-25 w-180 lh-50">直播结束时间</view>
				<view class="roww allline center_center">
					<hTimePicker
					  ref="input2" sDay="0" dayNum="200"   @changeTime="changeTime1">
						  <view slot="pCon" class="changeTime">
							<block v-if="form.endTime1==''">点击选择时间</block>
							<block v-else>{{form.endTime1}}</block>
						  </view>
						</hTimePicker>
						<view class="allline"></view>
					 <image src="../../static/home/youjiantou.png"
					 class="w-50 h-50"
					 ></image>
				</view>
				
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-180 lh-50">主播昵称</view>
				<input placeholder="至少三个汉字" v-model="form.anchorName"
				 class="fs-25"  v-if="!erweimaShow" 
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" v-if="pianshen!=999">
				<view class="fs-25 w-180 lh-50">主播微信号</view>
				<input placeholder="请输入主播微信号(个人中心显示的微信号)" v-if="!erweimaShow" v-model="form.anchorWechat"
				 class="fs-25 allline"
				 />
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>   
			</view>
			<view class="roww endend p-all-10">
				<view class="fs-25 color2_r">主播微信号必须进行主播实名认证</view>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-180">分享卡片封面</view>
				<image 
				src="/static/shuangss.jpg"
					class="w-150 h-150 m-left-20" 
					v-if="form.shareImg==''"
					@click.stop="selImg(0)"
				></image>
				<image   mode="aspectFill"
				:src="imss.shareImg"
					class="w-150 h-150 m-left-20" 
					v-else
					@click.stop="selImg(0)"
				></image>
			</view>
			
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-180">直播间背景墙</view>
				<image 
				src="/static/shuangss.jpg"
					class="w-150 h-150 m-left-20" 
					v-if="form.feedsImg==''"
					@click.stop="selImg(1)"
				></image>
				<image  mode="aspectFill"
				:src="imss.feedsImg"
					class="w-150 h-150 m-left-20" 
					v-else
					@click.stop="selImg(1)"
				></image>
			</view>
			<view class="dibuview roww rowsa center_center"> 
				<view class="quxiaoucs1" @click.stop="toSubmitt">提交</view>
			</view>
			<view class="roww endend m-top-20">
				<view style="color: #2E7EFC;font-size: 25rpx;margin-left: 25rpx;opacity: 0;">开播二维码</view>
				<view class="allline"></view>
				<view style="color:  #2E7EFC;font-size: 25rpx;margin-right: 25rpx;"
				@click.stop="erweimaShowClick"
				>点击扫码开启主播实名认证</view>
			</view>
		</view>
		<view class="huuibeijing colonn center_center" v-if="erweimaShow">
			<view class="colonn center_center">
				<image :src="erweimaimg" class="w-600 m-bottom-50 h-600"></image>
				<view class="roww rowsb">
					<view class="btncl" @click.stop="erweimaShowClick">取消</view>
					<view class="btncl m-left-40" @click.stop="downloadimg">保存图片</view>
				</view>
			</view>
		</view>
		<view class="h-30"></view>
	</view>
</template>

<script>
	import hTimePicker from "@/components/h-timePicker/h-timePicker.vue";
	import timeSlot from "@/components/wanghexu-timeslot/wanghexu-timeslot.vue"
	export default {
		 components: { hTimePicker,timeSlot },
		data() {
			return {
				form:{
					name:'',//1
					coverImg:'',
					startTime:'',
					endTime:'',
					startTime1:'',
					endTime1:'',
					anchorName:'',//1
					anchorWechat:"",
					shareImg:"",
					feedsImg:"",
					type:"2",
					closeLike:"0",
					closeGoods:"1",
					closeComment:0,
					closeReplay:0,
					closeShare:0,
					closeKf:1,
					"openid":"",
					"shareImgUrl":"",
					onlineType:'1'
				},
				imss:{
					'shareImg':'',
					'feedsImg':''
				},
				timeInfo:{
					'nian':''
				},
				
				erweimaShow:false,//二维码弹窗
				erweimaimg:"https://shandongtibohui.zsyflive.com/profile/upload/2022/08/02/cb91dca702aa44408c942367e79b7e4c_20220802170801A003.jpg",
				
				pianshen:"",//骗审
			}
		},
		onLoad() {
			this.getPianshen();
		},
		methods: {
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
			liveTypeChange(res){
				this.form.type=parseInt(res.detail.value);
			},
			downloadimg(){
				uni.downloadFile({//下载
							url: this.erweimaimg, //图片下载地址
							success: res => {
								if (res.statusCode === 200) {
									uni.saveImageToPhotosAlbum({//保存图片到系统相册。
										filePath: res.tempFilePath,//图片文件路径
										success: ()=> {
											uni.showToast({
												title: '图片保存成功',
												icon: 'none',
											});
											this.erweimaShowClick();
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
			erweimaShowClick(){
				this.erweimaShow=!this.erweimaShow;
			},
			
			liveChange(res){
				this.form.onlineType=parseInt(res.detail.value)+1;
			},
			toSubmitt(){
				if(!this.isSubmit()){
					return false;
				}
				var data=this.form;
				data.openid=uni.getStorageSync("openid")
				data.exhId=uni.getStorageSync("nowExhId");
				// createliveminiapp
				// apilivecreateRoom
				this.$axios
					.axios('POSt', this.$paths.createliveminiapp, data)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast("提交成功,请等待审核");
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
			// 选择图片
			selImg(type){
				uni.chooseImage({ 
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success:  (res)=> {
						if(res.tempFilePaths.length>0){
							this.uploadimg(type,res.tempFilePaths[0]);
						}
					}
				});
			},
			// 上传图片  
			uploadimg(type,img){
				var data={
					exhType:uni.getStorageSync("exType")
				}
				this.$axios
					.axiosUpload(this.$paths.uploadPicwxminiapp, img,data)
					.then(res => {
						if (res.code == 200) {
							if(type==0){
								this.form.shareImg=res.data.media_id
								this.imss.shareImg=img;
								this.form.shareImgUrl=res.shareImgUrl;
							}else{
								this.form.feedsImg=res.data.media_id
								this.form.coverImg=res.data.media_id
								this.imss.feedsImg=img;
								
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			openTime(index){
				if(index==1){
					this.$refs.input1.open()
				}else{
					this.$refs.input2.open()
				}
			},
			changeTime(res){
				res=res.replace(/-/g, "/");
				console.log("是啊是changeTime",res)
				this.form.startTime1=res;
				this.form.startTime=this.$tools.getteaZhuanTime(this.form.startTime1)/1000;
				
					console.log("开始时间和时间戳",this.form.startTime1,this.form.startTime)
			},
			changeTime1(res){
				res=res.replace(/-/g, "/");
				console.log("是啊是changeTime2",res)
				this.form.endTime1=res;
				this.form.endTime=this.$tools.getteaZhuanTime(this.form.endTime1)/1000;
			},
			shijianzhuanChuo(date){
				date = date.substring(0,19);    
				date = date.replace(/-/g,'/'); 
				return  new Date(date).getTime();
			},
			isSubmit(){
				if(this.form.name==""||this.form.name.length<3||this.form.name.length>17){
					this.$tools.showToast("直播间名称最短3个汉字，最长17个汉字");
					return false;
				}
				
				var start=this.shijianzhuanChuo(this.form.startTime1);
				var end=this.shijianzhuanChuo(this.form.endTime1);
				console.log("开始",start,'结束',end,'相差',end-start,'12小时',12*60*60*1000)
				if(end-start>12*60*60*1000){
					this.$tools.showToast("直播开始时间和直播结束时间不能大于12小时");
					return false;
				}     
				if(end-start<=0){
					this.$tools.showToast("请修改直播时间");
					return false;
				}
				
				if(this.form.startTime==""){
					this.$tools.showToast("请选择直播开始时间");
					return false;
				}
				if(this.form.endTime==""){
					this.$tools.showToast("请选择直播结束时间");
					return false;
				}
				if(this.form.anchorName==""){
					this.$tools.showToast("请输入主播昵称");
					return false;
				}
				if(this.form.anchorName.length<=3){
					this.$tools.showToast("主播昵称长度必须大于3个字");
					return false;
				}
				
				if(this.form.shareImg==""){
					this.$tools.showToast("请上传分享卡片图");
					return false;
				}
				if(this.form.feedsImg==""){
					this.$tools.showToast("请上传直播间背景图");
					return false;
				}
				return true
			}
		}
	}
</script>

<style>
@import url("addLive.css");
</style>
