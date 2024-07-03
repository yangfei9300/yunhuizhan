<template>
	<view>
		<view class="colonn background1">
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">企业名称</view>
				<input placeholder="请输入企业名称"
				 class="fs-25" 
				 v-model="form.companyName"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">营业执照</view>
				<image  
				mode="aspectFill"
				src="/static/shuangss.jpg"
					class="w-150 h-150"  
					v-if="form.license==''"
					@click.stop="selImg(0)"
				></image>
				<image 
				:src="BASE_IMG+form.license"
					class="w-150 h-150" 
					v-else
					@click.stop="selImg(0)"
				></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">姓名</view>
				<input placeholder="请输入联系人姓名"
				 class="fs-25"
				 v-model="form.contactsName"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">电话</view>
				<input placeholder="请输入联系人电话"
				 class="fs-25"
				 v-model="form.contactsPhone"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww  border_bottom center_center" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">验证码</view>
				<input placeholder="请输入验证码"
				 class="fs-25"  v-model="code"
				
				 />
				 <view class="allline"></view>
				 <view class="clickmam"  @click.stop="sendcode">
					 <block v-if="daojishi==100">
					 					获取验证码
					 				</block>
					 				<block v-else>
					 					重新发送{{daojishi}}
					 				</block>
				 </view>
			</view>
			
			
			
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">LOGO</view>
				<image 
				src="/static/shuangss.jpg"
					class="w-150 h-150" 
				mode="aspectFill"
					v-if="form.companyLogo==''"
					@click.stop="selImg(1)"
				></image>
				<image  
				:src="BASE_IMG+form.companyLogo"
					class="w-150 h-150" 
					v-else
					@click.stop="selImg(1)"
				></image>
			</view>
		</view>
		
		<view class="dibuview roww rowsa center_center">
			<view class="quxiaoucs1" @click.stop="toSubmit">提交</view>
		</view>
		
	</view>
</template>

<script>
	const CryptoJS = require('crypto-js') // 引用AES源码js
	const key = CryptoJS.enc.Utf8.parse('2020081720200817') // 十六位十六进制数作为密钥
	export default {
		data() {
			return {
				form:{
					  companyName:"",// varchar(64) DEFAULT NULL COMMENT '企业名称',
					  license:"",// varchar(255) DEFAULT NULL COMMENT '营业执照',
					  contactsName:"",// varchar(64) DEFAULT NULL COMMENT '联系人姓名',
					  contactsPhone:"",// varchar(11) DEFAULT NULL COMMENT '联系人电话',
					  companyLogo:"",// varchar(255) DEFAULT NULL COMMENT '企业logo',
					  openid:"",// varchar(64) DEFAULT NULL COMMENT '小程序openid',
					  status:"0",// char(1) DEFAULT '0' COMMENT '审核状态（0待审核 1审核通过 2审核不通过）',
				},
				BASE_IMG:"",
			
			
				code:"",
				// 验证码
				'dingshiqi':"",
				daojishi:100
			}
		},
		onLoad() {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.form.openid=uni.getStorageSync("openid")
		},
		methods: {
			
			// 解密方法
			Decrypt(word) {
				let decrypt = CryptoJS.AES.decrypt(word, key, {
					mode: CryptoJS.mode.ECB,
					padding: CryptoJS.pad.Pkcs7
				})
				let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
				return decryptedStr.toString()
			},
			// 加密方法
			Encrypt(word) {
				let encrypted = CryptoJS.AES.encrypt(word, key, {
					mode: CryptoJS.mode.ECB,
					padding: CryptoJS.pad.Pkcs7
				});
				return encrypted.toString()
			},
			
			// 验证码
			sendcode(){
				if(this.daojishi!=100){
					return false;
				}
								var data=this.form;
								if(data.contactsPhone==""){
									this.$tools.showToast("请输入电话");
									return false;
								}
								// var data1={
								// 	params:{
								// 		'phone':data.contactsPhone,
								// 		'exhType':uni.getStorageSync("exType"),
								// 	}
								// }
								
								var content= this.Encrypt(data.contactsPhone+"-"+uni.getStorageSync("exType"));
								var data1={
									'content':content
								}
								
								this.$axios
									.axios('POST', 
									this.$paths.getphonesendmsgE, 
									data1)
									.then(res => {
										if(res.code==200){
											this.$tools.showToast("短信发送成功");
											 clearInterval(this.dingshiqi);  
											this.dingshiqi=setInterval(res=>{
												if(this.daojishi-1<=0){
													this.daojishi=100;
													 clearInterval(this.dingshiqi);  
												}else{
													this.daojishi=this.daojishi-1
												}
											},1000)
										}else{
											this.$tools.showToast(res.msg);
										}
									})  
									.catch(err => {
										console.log('错误回调', err);
									});
							},
			// 验证验证码
			getphonebinding(){
				if(!this.isSubmit()){
					return false;
				}
				// 验证验证码是否正确
				if(this.code==""||this.form.contactsPhone==""){
					this.$tools.showToast("请填写完整验证码和手机号");
					return false;
				}
				var data={
					params:{
						'phone':this.form.contactsPhone,
						code:this.code,
					}
				}
				this.$axios
					.axios('post', this.$paths.getphonebinding,data)
					.then(res => {
						if (res.code == 200) {
							this.toSubmit();
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			
			
			isSubmit(){
				if(this.form.companyName==""){
					this.$tools.showToast("请输入企业名称");
					return false;
				}
				if(this.form.license==""){
					this.$tools.showToast("请上传营业执照");
					return false;
				}
				if(this.form.contactsName==""){
					this.$tools.showToast("请输入联系人姓名");
					return false;
				}
				if(this.form.contactsPhone==""){
					this.$tools.showToast("请输入联系人电话");
					return false;
				}
				if(!this.$tools.isphone(this.form.contactsPhone)){
					this.$tools.showToast("请输入正确的手机号");
					return false;
				}
				return true;
			},
			toSubmit(){
				if(!this.isSubmit()){
					return false;
				}
				
				// 验证验证码是否正确
				if(this.code==""||this.form.contactsPhone==""){
					this.$tools.showToast("请填写完整验证码和手机号");
					return false;
				}
				
				var data=this.form;
				data.exhType=uni.getStorageSync("exType");
				data.params={
					'code':this.code
				}
				
				
				
				this.$axios
					.axios('POSt', this.$paths.examinecompany, data)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast("提交成功，请等待审核");
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
				this.$axios
					.axiosUpload(this.$paths.miniappupload, img)
					.then(res => {
						if (res.code == 200) {
							if(type==0){
								this.form.license=res.fileName
							}else{
								this.form.companyLogo=res.fileName
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			examinecompanyAdd(){
			} 
		}
	}
</script>

<style>
@import url("enterpriseAdd.css");
</style>
