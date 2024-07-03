<template>
	<view>
		
		
		<image class="topimg" mode="aspectFill"  :src="yubaominghuacn.banner"></image>
		<xiayibu :xiabiao="menuindex" class="m-top-35" ></xiayibu>
		<baomingxinxi @baomingInfoClick="baomingInfoClick" v-if="menuindex==0" @xiayibu="xiayibu" ></baomingxinxi>
		<tianxiewenjuan @toTijiaoJuanzi="toTijiaoJuanzi"  v-if="menuindex==1"  @xiayibu="xiayibu"></tianxiewenjuan>
		<baomingchenggong :yubaominghuacn="yubaominghuacn" 
		  v-if="menuindex==2">
			<view> 
				<canvas v-show="!qrAlertShow" canvas-id="myQrcode"
				style="margin: 20px;width:200px;height:200px;"></canvas>
			</view>
		</baomingchenggong>
		<!-- <block v-if="userInfo.userType==2"> -->
			<image src="/static/tuan.png"
			class="w-100 h-100 yojiatu" v-if="menuindex==2&&groupIdMe" 
			@click.stop="qrAlertShowClick"
			></image>
			<image src="/static/tuan2.png"
			class="w-100 h-100 yojiatu" v-if="menuindex==2&&!groupIdMe" @click.stop="creategroupvisitorSet1"
			></image>
		<!-- </block> -->
		
		
		<view class="huuibeijing colonn center_center" style="z-index: 5000;" v-if="qrAlertShow">
			<view class="colonn center_center">
				<view style="color: white;">扫码加入展团</view>
				<image :src="groupQr" class="w-500 h-500 m-top-55"></image>
				<image src="/static/uani.png" class="w-50 h-50 m-top-55" @click.stop="qrAlertShowClick"></image>
			</view>
		</view>
		
	</view>
</template>
 
<script>
	const qrCode = require('../../style/weapp-qrcode.js')
	export default {
		data() {
			return { 
				menuindex:-1,
				yubaominghuacn:{}, 
				BASE_IMG:"",
				BASE_URL_ZLF:"",
				wenjuanResult:[],
				baomingInfoClick1:{},
				// 二维码吗
				qrPath: '',
				text: '',
				size: 400,
				quality: 'L',
				colorDark: '#000000',
				colorLight: '#ffffff',
				 code:'123456789',
				 showModal: false,
				 
				 userInfo:{},
				 BaomingInfo:null,
				 groupIdMe:null,//自己战团的ID
				 groupQr:"",//团二维码
				 qrAlertShow:false,//是否显示小程序码
				 logoUrl:"",
				 
				 
			}
		},
		onLoad(options) {
			this.logoUrl=this.$tools.getLogos(parseInt(uni.getStorageSync("exType")));
			if(options.type){
				this.menuindex=options.type;
			}
			
			this.BASE_URL_ZLF=this.$paths.BASE_URL_ZLF;
			
			var initPage=uni.getStorageSync("initPage");
			if(initPage){
				uni.reLaunch({
					url:"/pages3/yudengjiX/yudengjiX"
				})
				uni.removeStorageSync("initPage")
			}     
			
			var nowExhId=uni.getStorageSync("nowExhId");
			if(!nowExhId){
				uni.reLaunch({
					url:"/pages/index/index"
				})
				return false;
			}
			
			
			if(options.type==2){
				if(!this.BaomingInfo){
					this.infovisitorGet();
				}else{
					this.handleShowCodeClick();
				}
				// 判断自己是否有战团
				this.existgroupvisitorGet();
			}
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.yubaominghuacn=uni.getStorageSync("yubaominghuacn");
			this.baomingInfoClick1=uni.getStorageSync("baomingInfoClick");
			
			
			
			// if(!this.yubaominghuacn){
				this.cicizhanhuixinxi()
			// }
			var userInfo=uni.getStorageSync("userInfo");
			if(!userInfo){
				this.$tools.showToast("请先登录");
				return false;
			} 
			this.userInfo=userInfo;
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
				path: '/pages3/yudengjiX/yudengjiX?scene='+userInfo.unionid
		    }
		 }, 
		 onShareAppMessage () {
					  
					  var userInfo=uni.getStorageSync("userInfo");
		 		var ExhInfo=uni.getStorageSync("ExhInfo");
						
						var txt="?openid="+uni.getStorageSync("openid");
						if(userInfo){
							txt=txt+"&scene="+userInfo.unionid 
						}
						console.log("分享参数",txt)
		         return {
		             title: ExhInfo.exhName,
		        imageUrl: this.logoUrl,
		             path: '/pages3/yudengjiX/yudengjiX'+txt
		         }
		     },
		
		methods: {
			
			qrAlertShowClick(){
				this.qrAlertShow=!this.qrAlertShow;
			},
			
			// 获取报名信息
			infovisitorGet(){
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){
					this.$tools.showToast("请先登录");
					return false;
				} 
				this.userInfo=userInfo;
				var data1={
					'unionid':uni.getStorageSync("userInfo").unionid
				}
				this.$axios
					.axios('POST', 
					this.$paths.infovisitor, 
					data1)
					.then(res => {
						if(res.code==200){
							this.BaomingInfo=res.data;
							this.handleShowCodeClick();
						}else{
							// this.$tools.showToast(res.msg);
						}
					})  
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 创建战团 
			creategroupvisitorSet1(){
				uni.showModal({
					title: '提示',
					content: '确定要创建展团吗？',
					success:(res)=> {
						if (res.confirm) {
							this.creategroupvisitorSet();
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			// 创建战团
			creategroupvisitorSet(){
				// baomingInfoClick
				var baomingxinxiYu=uni.getStorageSync("baomingxinxiYu");
				var userInfo=uni.getStorageSync("userInfo");
				var data={
					'visitorId':this.BaomingInfo.id,
					'exhId':uni.getStorageSync("nowExhId"),
					'groupName':'',
					'visitorName':this.BaomingInfo.visitorName,
					'visitorAvatar':userInfo.userAvatar,
				} 
				this.$axios
					.axios('post', this.$paths.creategroupvisitor, data)
					.then(res => {    
						if (res.code == 200) {
							this.$tools.showToast("展团创建成功");
							this.groupIdMe=res.data; 
							this.groupQr=res.data.qrCode;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			
			cicizhanhuixinxi(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),//
				}
				this.$axios
					.axios('post', this.$paths.enrollconfig, data)
					.then(res => {    
						if (res.code == 200) {
							if(res.data.length>0){
								this.yubaomingInfo=res.data[0];
								uni.setStorageSync("yubaominghuacn",this.yubaomingInfo)
								this.yubaominghuacn=res.data[0];
							}else{
								this.yubaomingInfo=null;
								// setTimeout(res=>{
								// 	uni.reLaunch({
								// 		url:"/pages/index/index"
								// 	})
								// },1000)
								
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			
			// 二维码
			initQrCode(){
				console.log("二维码挟制",this.BaomingInfo)
				new qrCode('myQrcode', {
					text:this.BaomingInfo.unionid+"",
					width: 200,  
					height: 200,
					colorDark: "#333333",
					colorLight: "#FFFFFF",
					correctLevel: qrCode.CorrectLevel.H
				})
			},
			handleShowCodeClick(){
				this.showModal = true
				this.$nextTick(res=>{
					this.initQrCode()
				})
			},
			handleHideCodeClick(){
				this.showModal = false
			},
			// 报名信息结果
			baomingInfoClick(res){
				console.log("报名信息",res)
				uni.setStorageSync("baomingInfoClick",res)
				this.baomingInfoClick1=res.form;
				this.baomingInfo=res;
				this.xiayibu(1);
			},
			// 问卷结果
			toTijiaoJuanzi(res){
				console.log("问卷内容",res);
				this.wenjuanResult=res.zhanhuiwenjuan;
				this.tijiaowenjuan();
				
			},
			// 蒋问卷提交到后台
			tijiaowenjuan(){
				// var data = {
				// 	type:uni.getStorageSync("exType"),//1是环保展
				// 	'openid':uni.getStorageSync("openid"),
				// 	exhId:uni.getStorageSync("nowExhId"),//
				// 	name:uni.getStorageInfoSync("baomingxinxiYu").visitorName,
				// 	phonenum:uni.getStorageInfoSync("baomingxinxiYu").phonenum,
				// }
				// var wenjuanResult=this.wenjuanResult;
				// var dajuan="";
				// for(var a=0;a<wenjuanResult.length;a++){
				// 	// for(var b=0;b<wenjuanResult[a].quesOption)
				// 	dajuan=dajuan+"第"+(a+1)+"题:"+wenjuanResult[a].quesTitle+"    答:"+wenjuanResult[a].seltxt+"    ";
				// 	console.log(wenjuanResult[a].seltxt)
				// }
				// data.answer=dajuan;
				var wenjuanResult=this.wenjuanResult;
				var dataList=[];
				for(var a=0;a<wenjuanResult.length;a++){
					var  info=wenjuanResult[a];
					console.log("题目详情",info);
					var obg={
						'visitorId':uni.getStorageSync("baomingxinxiYu").visitorId,
						exhId:uni.getStorageSync("nowExhId"),
						'questionnaireId':info.questionnaireId,
						'questionId':info.id,
						'answerContent':info.seltxt.join(",")
					}
					dataList.push(obg);
				}
				
				this.$axios
					.axios('POST', this.$paths.ansvisitorapi, dataList)
					.then(res => {
						if (res.code == 200) {
							console.log("问题提交层高")
							this.infovisitorGet();
							// this.handleShowCodeClick();
							this.xiayibu(2);
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			xiayibu(index){
				this.menuindex=index;
				if(index==2){
					// this.enrollenrollCheck();
					this.infovisitorGet();
					this.existgroupvisitorGet();//获取自己是否有战团
				}
			},
			// 获取信息
			enrollenrollCheck(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),//1是环保展
					'openid':uni.getStorageSync("openid"),
				}
				this.$axios
					.axios('post', this.$paths.enrollenrollCheck, data)
					.then(res => {
						if (res.code == 200) {
							uni.setStorageSync("baomingInfoClick",res.data[0])
							this.baomingInfoClick=res.data[0];
						} else if(res.msg=="未找到答卷"){
							uni.redirectTo({
								url:"../yudengji/yudengji?type=1"
							})
						}
					})
					.catch(err => {});
			},
			
			// 是否存在展团 existgroupvisitor
			existgroupvisitorGet(){
				var userInfo=uni.getStorageSync("userInfo");
				var data={
					exhId:uni.getStorageSync("nowExhId"),
					params:{
						unionid:userInfo.unionid
					}
				}
				this.$axios
					.axios('POST', 
					this.$paths.existgroupvisitor, 
					data)
					.then(res => {
						if(res.code==200){
							console.log("战团信息",res);
							this.groupIdMe=res.data;
							this.groupQr=res.data1.qrCode;
						}else{
							
						}
					})  
					.catch(err => {
						console.log('错误回调', err);
					});
			},
		}
	}
</script>

<style>
@import url(yudengji.css);
</style>
