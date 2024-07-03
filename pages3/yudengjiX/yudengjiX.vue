<template>
	<view>
		 <image v-if="yubaomingInfo.cover" :src="yubaomingInfo.cover"
		  mode="aspectFill"  
		  class="backimg"></image>
		<view class="colonn viewhom colonn center_center">
			<view class="colonn" style="position: absolute;bottom: 200rpx">
				<view class="tiquerweima" @click="topage(1)">观众登记</view>
				<view class="tiquerweima" @click.stop="getqr">提取二维码</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				openid:null,
				yubaomingInfo:{},
				BASE_IMG:"",
				statusBaoming:0,//未报名
				logoUrl:"",
			}
		},
		onLoad(options) {
			this.logoUrl=this.$tools.getLogos(parseInt(uni.getStorageSync("exType")));
		},
		onShow() {
			
			this.BASE_IMG=this.$paths.BASE_IMG;
			// this.getqr();
			var nowExhId=uni.getStorageSync("nowExhId");
			if(nowExhId){
				this.isopenidC();
			}else{
				this.getMiniapp();
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
		              // path: '/pages3/yudengjiX/yudengjiX?upUid='+userInfo.userId
					   path: '/pages3/yudengjiX/yudengjiX?scene='+userInfo.unionid
		         }
		     },
		methods: {
			// 判断是否报过名
			enrollenrollCheck(){
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){
					this.$tools.showToast("请先登录");
					setTimeout(res=>{
						uni.setStorageSync("toPage","/pages3/yudengjiX/yudengjiX?scene="+userInfo.unionid);
						uni.reLaunch({
							url:"/pages/wode/wode?type=yudengjix"
						})
					},1000)
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
								this.statusBaoming=2;
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
					setTimeout(res=>{ 
					uni.setStorageSync("toPage","/pages3/yudengjiX/yudengjiX?scene="+userInfo.unionid);
						uni.reLaunch({
							url:"/pages/wode/wode?type=yudengjix"
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
							this.statusBaoming=2;
						} else{ 
							this.juanzi_da=false;
							this.statusBaoming=1;
						}
					})
					.catch(err => {});
			},
			
			
			// 展会信息
			isBaomingzhanhui(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),//1是环保展
				}
				this.$axios
					.axios('post', this.$paths.enrollconfig, data)
					.then(res => {
						if (res.code == 200) {
							if(res.data.length>0){
								this.yubaomingInfo=res.data[0];
								uni.setStorageSync("yubaominghuacn",this.yubaomingInfo)
							}else{
								this.yubaomingInfo=null;
								this.$tools.showToast("暂无展会可报名");
								setTimeout(res=>{
									uni.reLaunch({
										url:"/pages/index/index"
									})
								},1000)
								
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 判断是否存在openid
			isopenidC(){
				var openid=uni.getStorageSync("openid");
				if(openid){
					this.openid=openid;
					  this.isBaomingzhanhui();
					  this.enrollenrollCheck();
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
					
					// wx.cloud.callFunction({
					// 	    name: 'openid',    // 需调用的云函数名,注意名称要相同
					// 	    // 传给云函数的参数 也就是上边的event对象
					// 	    data: {       
					// 	    },
					// 	    // 成功回调
					// 	    success: res => {
							 
					// 	    },
					// 	    fail: err => {
					// 	      console.error('[云函数] [login] 调用失败', err)
					// 	    }
					// 	})
				}
				
			},
			
			
			getOpenid(code){
				var data={
					wxcode:code,
					'exhType':uni.getStorageSync("exType"),
				};
				this.$axios
					.axios('GET', this.$paths.memberwxcode, data)
					.then(res => {
								
						if(res.code==200){
							console.log("获取openid",res)    
							uni.setStorageSync("openid",res.data)
							 this.openid=res.data;
							 this.isBaomingzhanhui();
							 this.enrollenrollCheck();  
						}else{
							this.showToast(res.message);
						}
					})
					.catch(err => {
							console.error("获取openid报错",err)
					});
				wx.cloud.callFunction({
					    name: 'openid',    // 需调用的云函数名,注意名称要相同
					    // 传给云函数的参数 也就是上边的event对象
					    data: {       
					    },
					    // 成功回调
					    success: res => {
							console.log("获取openid结果",res)
						  uni.setStorageSync("openid",res.result.openid);
						  this.getUserInfo();   
					    },
					    fail: err => {
					      console.error('[云函数] [login] 调用失败', err)
					    }
					})  
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
							uni.setStorageSync("nowExhId",res.data[0].exhId)
							uni.setStorageSync("ExhInfo",res.data[0])
							this.isopenidC();
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			
			
			
			topage(index){
				
				var userInfo=uni.getStorageSync("userInfo");
				if(userInfo){
					if(userInfo.phonenum==""||!userInfo.phonenum){
						this.$tools.showToast("请前往我的界面授权手机号");
						uni.setStorageSync("toPage","/pages3/yudengjiX/yudengjiX?scene="+userInfo.unionid);
						
						setTimeout(res=>{
							uni.reLaunch({
								url:"/pages/wode/wode?type=yudengjix"
							})
						},1000)
						return false;
					}
				}else{
					this.$tools.showToast("请先登录");
					console.log("倾向登录------------")
					setTimeout(res=>{
						uni.setStorageSync("toPage","/pages3/yudengjiX/yudengjiX?scene="+userInfo.unionid);
						
						uni.reLaunch({
							url:"/pages/wode/wode?type='yudengjix'"
						})
					},1000)
					return false;
				}
				
				if(index==1){
					var userInfo=uni.getStorageSync("userInfo");
					
					uni.navigateTo({
						url:"../yudengji/yudengji?type="+this.statusBaoming+"&scene="+userInfo.unionid
					})
				}
			},
			getqr(){
				
				var userInfo=uni.getStorageSync("userInfo");
				if(userInfo){
					if(userInfo.phonenum==""||!userInfo.phonenum){
						this.$tools.showToast("请前往我的界面授权手机号");
						setTimeout(res=>{
						uni.setStorageSync("toPage","/pages3/yudengjiX/yudengjiX?scene="+userInfo.unionid);
							uni.reLaunch({
								url:"/pages/wode/wode?type=yudengjix"
							})
						return false;
					})
					}
				}else{
					this.$tools.showToast("请先登录");
					setTimeout(res=>{
						uni.setStorageSync("toPage","/pages3/yudengjiX/yudengjiX?scene="+userInfo.unionid);
						
						uni.switchTab({
							url:"/pages/wode/wode?type=yudengjix"
						})
					},1000)
					return false;
				}
				
					uni.navigateTo({
						url:"../yudengji/yudengji?type="+this.statusBaoming+"&scene="+userInfo.unionid
					})
			},
		}
	}
</script>


<style>
@import url(yudengjiX.css);
</style>
