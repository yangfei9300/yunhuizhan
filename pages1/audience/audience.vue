<template>
	<view>
		
		<view class="w-750" style="z-index: 10;">
			<v-tabs  v-model="current"
			:lineScale="lineScale"
			activeColor="#2E7EFF" 
			lineColor="#2E7EFF"  
			:scroll="false" 
			:tabs="tabs" 
			@change="changeTab"></v-tabs>
		</view>
		
		
	<!-- 	<swiper class="topimg" autoplay indicator-dots  v-if="current==0">
			<swiper-item class="topimg" v-for="(item,index) in bannerList">
				<image class="topimg" mode="aspectFill" :src="BASE_IMG+item.imagePath" ></image>
			</swiper-item>
		</swiper> -->
		
		<!-- <view class="colonn m-top-20" v-if="current==0">
			
			
			
			<view class="roww  border_bottom " style="padding:20rpx 35rpx 20rpx 35rpx;" >
				<view class="fs-25 w-150  roww center_center"> 
					<view>身份证</view>
					<view class="allline"></view>
				</view>
				<input placeholder="请输入身份证"
				 class="fs-25" 
				 v-model="form.idNumber"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">姓名</view>
				<input placeholder="请输入姓名"
				 class="fs-25"
				 v-model="form.visitorName"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">电话</view>
				<input placeholder="请输入电话"
				 class="fs-25"
				 v-model="form.phonenum"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom center_center" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">验证码</view>
				<input placeholder="请输入验证码"
				 class="fs-25"
				 />
				 <view class="allline"></view>
				 <view class="clickmam">获取验证码</view>
			</view>
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
				 v-model="form.visitor_post"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww fs-30 m-left-25 center_center m-top-20 m-bottom-20"
			@click.stop="readClick"
			>
				<image v-if="isread" src="../../static/xuanzhongsel.png" class="w-30 h-30 m-right-15"></image>
				<image v-else src="../../static/xuanzhongno.png" class="w-30 h-30 m-right-15"></image>
				<view>请先阅读</view>
				<view style="color:#2E7EFF;" @click.stop="toxieyi(1)">《用户服务协议》</view>
				<view>和</view>
				<view style="color:#2E7EFF;"  @click.stop="toxieyi(2)">《隐私政策》</view>
				<view class="allline"></view>
			</view>
			<view class="dibuview roww rowsa center_center">
				<view class="quxiaoucs1" @click="toSumit">提交</view>
			</view>
		</view> -->
		
		<view class="colonn center_center p-all-20" v-if="current==0">
			<view v-if="contextInfo.content">
				<uParse  :content="contextInfo.content" ></uParse>
				<!-- <rich-text :nodes="contextInfo.content"></rich-text> -->
			</view>
		</view>
		<view class="colonn center_center p-all-20" v-if="current==1">
			<view  v-if="contextInfo.content">
				<uParse  :content="contextInfo.content" ></uParse>
				<!-- <rich-text :nodes="contextInfo.content"></rich-text> -->
			</view>
		</view>
		<block v-if="current==0">
			
	<!-- <view style="background-color: red;font-size: 40px;position: fixed;top: 100px;" 
	@click="towebview">跳转网页</view> -->
		
	<view class="h-200"></view>
		<view class="roww center_center">
			<view class="w-600 h-90 qubaominganiu" 
					@click="toerweima()"
			>
				<block v-if="isBaoming">
					<block v-if="juanzi_da">
						<text>查</text>
						<text>看</text>
						<text>二</text>
						<text>维</text>
						<text>码</text>
					</block>
					<block v-else>
						<text>请</text>
						<text>先</text>
						<text>答</text>
						<text>题</text>
					</block>
				</block>
				<block v-else>
					<text>去</text>
					<text>报</text>
					<text>名</text>
				</block>
			</view>
		</view>
			</block>
		<!-- <view class="w-50 colonn center_center xuanzfuqubaom"
		@click="toerweima()"
		>
			<block v-if="isBaoming">
				<block v-if="juanzi_da">
					<text>查</text>
					<text>看</text>
					<text>二</text>
					<text>维</text>
					<text>码</text>
				</block>
				<block v-else>
					<text>请</text>
					<text>先</text>
					<text>答</text>
					<text>题</text>
				</block>
			</block>
			<block v-else>
				<text>去</text>
				<text>报</text>
				<text>名</text>
			</block>
		</view> -->
		
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
				  // '参展报名',
				  '',
				  '参观礼遇',
				],
				lineScale:0.2,
				contextInfo:null,
				form:{
					  idNumber:"",
					  visitorName:"",
					  phonenum:"",
					  emile:"",
					  companyName:"",
					  companyCity:"",
					  "place":"",
					  'department':"",
					  "visitorPost":"",
					  "exhId":"",
					  openid:""
				},
				bannerList:[],
				BASE_IMG:"",
				isread:false,
				isBaoming:false,//是否报过名
				juanzi_da:false,//是否打过问卷
				
				logoUrl:"",
				
			}
		},
		onLoad(options) {
			console.log("参数",options)
			
			var tabs=this.tabs;
			var exType=uni.getStorageSync("exType");
			
			if(exType==2){
				tabs[0]='电子会刊';
			}else{
				tabs[0]='参展须知';
			}
			
			this.tabs=tabs;
			if(options.type){
				this.current=parseInt(options.type);
				this.changeTab(parseInt(options.type));    
			}else{
				this.getAudiences(1);    
			}
			this.form.openid=uni.getStorageSync("openid");
			this.form.exhId=uni.getStorageSync("nowExhId");
			this.getBanners();
			this.BASE_IMG=this.$paths.BASE_IMG;
			
			// this.getAudiences(1);
			this.logoUrl=this.$tools.getLogos(parseInt(uni.getStorageSync("exType")));
			
		},
		onShow() {
			if(uni.getStorageSync("openid")){
				// 获取是否报名展会
				// this.enrollenrollCheck();
			}
		},
		
		onShareTimeline() {
		    var ExhInfo=uni.getStorageSync("ExhInfo");
			var userInfo=uni.getStorageSync("userInfo");
			if(!userInfo){
				this.$tools.showToast("请先登录");
				userInfo={
					'userId':""
				};
			}
		      return {
		          title: ExhInfo.exhName,
		           imageUrl: this.logoUrl,
		          // path: '/pages3/yudengjiX/yudengjiX?scene='+userInfo.userId
				  path: '/pages3/yudengjiX/yudengjiX?scene='+userInfo.unionid
		      }
		 }, 
		 onShareAppMessage () {
		 		var ExhInfo=uni.getStorageSync("ExhInfo");
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){
					this.$tools.showToast("请先登录");
					userInfo={
						'userId':""
					};
				}
		         return {
		             title: ExhInfo.exhName,
					 imageUrl: this.logoUrl,
		              path: '/pages3/yudengjiX/yudengjiX?scene='+userInfo.unionid
		         }
		     },
		
		methods: {
			
			// 跳转到网页
			towebview(){
				// exType=2&exhId=122&wxPhone=18477745552
				var exType=uni.getStorageSync("exType");
				var nowExhId=uni.getStorageSync("nowExhId");
				var userInfo=uni.getStorageSync("userInfo");
				var data="exType="+exType+"&exhId="+nowExhId;
				var upUid=uni.getStorageSync("upUid");
				if(upUid){
					data=data+"&upUid="+upUid;
				}
				if(userInfo&&userInfo.phonenum){
					data=data+"&wxPhone="+userInfo.phonenum;
				}
				uni.setStorageSync("webH5ydj",data);
				uni.navigateTo({
					url:"/pages4/ydjWebview/ydjWebview"
				})
			},
			
			
			toerweima(type){
				// this.towebview()
				// return
				
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){
					this.$tools.showToast("请先登录");
					console.log("/pages/wode/wode?type='yudengjix'",)
					setTimeout(res=>{
						uni.setStorageSync("toPage","/pages1/audience/audience");
						
						uni.switchTab({
							url:"/pages/wode/wode"
						}) 
						
					},1000)
					return false;
				}
				if(this.isBaoming){
					var userInfo=uni.getStorageSync("userInfo");
					if(this.juanzi_da){
						uni.navigateTo({
							url:"/pages3/yudengji/yudengji?type=2&scene="+userInfo.unionid
						})
					}else{
						uni.navigateTo({
							url:"/pages3/yudengji/yudengji?type=1&scene="+userInfo.unionid
						})
					}
				}else{
					uni.navigateTo({
						url:"/pages3/yudengjiX/yudengjiX?scene="+userInfo.unionid
					})
				}
			},
			
			// 判断是否报过名
			enrollenrollCheck(){
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){
					this.$tools.showToast("请先登录");
					
					uni.showModal({
						title: '提示',
						content: '请先登录',
						success:  (res)=> {
							if (res.confirm) {
								
								// setTimeout(res=>{
									uni.setStorageSync("toPage","/pages1/audience/audience");
									uni.switchTab({
										url:"/pages/wode/wode?type='yudengjix'"
									})
								// },1000)
								
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
					
				
					return false;
				}
				var data = {
					exhId:uni.getStorageSync("nowExhId"),//1是环保展
					params:{
						unionid:uni.getStorageSync("userInfo").unionid,
					}
				};
				this.$axios
					.axios('post', this.$paths.enrollcheckvisitor, data)
					.then(res => {
						if (res.code == 200) {
							this.isBaoming=true;
							this.getBaomingInfo();
						} 
					})
					.catch(err => {});
			},
			//获取报明信息  
			getBaomingInfo(){
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){
					this.$tools.showToast("请先登录");
						uni.setStorageSync("toPage","/pages1/audience/audience");
					setTimeout(res=>{
						uni.switchTab({
							url:"/pages/wode/wode?type='yudengjix'"
						})
					},1000)
					return false;
				} 
				var data1={
					'unionid':uni.getStorageSync("userInfo").unionid
				}   
				this.$axios
					.axios('POST', 
					this.$paths.infovisitor, 
					data1)
					.then(res => {
						if(res.code==200){
							console.log("获取报名信息",res);
							uni.setStorageSync("visitorInfo",res.data); 
							this.getIsDaquan(res.data.id);
						}else{
							// this.$tools.showToast(res.msg);
						}
					})  
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 判断是否答卷
			getIsDaquan(visitorId){
				var data = {
					visitorId:visitorId,
					exhId:uni.getStorageSync("nowExhId")
				};
				this.$axios
					.axios('post', this.$paths.whetheransapi, data)
					.then(res => {
						if (res.code == 200) {
							this.juanzi_da=true;
						} else{ 
							this.juanzi_da=false;
						}
					})
					.catch(err => {});
			},
			
			
			isToBaominbbg(res){
				
			},
			
			// 前往协议
			toxieyi(type){
				uni.navigateTo({
					url:"/pages3/xieyi/xieyi?type="+type
				})
			},
			// 阅读点击
			readClick(){
				this.isread=!this.isread;
			},
			// 获取是否报名当前展会
			topage(index){
				console.log("asdad",index)
					var userInfo=uni.getStorageSync("userInfo");
				if(index==1){
					uni.navigateTo({
						url:"/pages3/yudengji/yudengji&scene="+userInfo.unionid
					})
				}else{  
					
				}
			},
			
			isSubmit(){
				if(this.form.visitorName==""){
					this.$tools.showToast("请输入姓名");
					return false;
				}
				if(this.form.phonenum==""){
					this.$tools.showToast("请输入联系电话");
					return false;
				}
				return true;
			},
			toSumit(){
				if(!this.$tools.islogin()){
					return false;
				} 
				if(!this.isSubmit()){
					return false;
				}
				
					var userInfo=uni.getStorageSync("userInfo");
				this.$axios
					.axios('POST', this.$paths.enrollvisitorEnroll, this.form)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast("报名成功");
							uni.setStorageSync("baomingxinxiYu",this.form)
							uni.navigateTo({
								url:"/pages3/yudengji/yudengji?type=1&scene="+userInfo.unionid
								
							})
						} else {
							this.$tools.showToast(res.msg);
						}   
					})
					.catch(err => {});
			},
			//获取观众轮播图
			getBanners(){
					var data = {
						exhId:uni.getStorageSync("nowExhId"),
						'type':'4'
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
			getAudiences(type){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),//1是环保展
					'type':type
				}
				console.log("华申大厦",data)
				this.$axios
					.axios('GET', this.$paths.visitorminiapp, data)
					.then(res => {
						if (res.code == 200) {
							if(res.data.length>0){
								this.contextInfo=res.data[0];
								this.contextInfo.content =  this.contextInfo.content.replace(/\<img/gi, '<img style="width:100%;height:auto;" ')
								
							}else{
								this.contextInfo={'content':""};
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			changeTab(index) {
			  console.log('当前选中的项：' + index)
			  this.current=parseInt(index);
			  this.getAudiences(this.current+1);
			},
		}       
	}
</script>

<style>
@import url("audience.css");
</style>
