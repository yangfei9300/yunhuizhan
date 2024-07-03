<template>
	<view>
		<view class="pore wodetopview m-all-25 ">
			<image src="../../static/me/kapianbianji.png" class="wodetopview"></image>
			<view v-if="userInfo" class="wodetopview poab roww center_center rowsb p-all-50" style="top: 0rpx;left: 0rpx;">
				<!-- <button open-type="chooseAvatar" @chooseavatar="getAvatar">头像</button>
				<input placeholder="请输入内容" type="nickname" disabled /> -->
				<image @click.stop="toUpdateInfo" :src="userInfo.userAvatar" class=""
					class="headimg w-140 h-140 m-right-30"></image>
				<view class="colonn rowsbl h-140">

					<view class="roww">
						<view class="yonghuming txtShowLength" @click.stop="toUpdateInfo">{{userInfo.nickname}}</view>
						<view class="allline"></view>
						<view style="width: 20rpx;"></view>
						<view style="color: white;font-size: 27rpx;" @click.stop="toUpdateInfo">编辑</view>
					</view>

					<view class="roww pore m-top-5 m-bottom-5" v-if="userInfo.phonenum">
						<view class="fs-30 shouquansjiha">{{userInfo.phonenum}}</view>
						<view class="allline"></view>
					</view>
					<view class="roww pore  m-top-5 m-bottom-5" v-else @click.stop="phoneAlertClick">
						<view class="fs-30 shouquansjiha">授权手机号</view>
						<!-- <button class="w-200 h-35 yincang1 poab" style="left: 0rpx;top: 0rpx;" open-type="getPhoneNumber" @getphonenumber="bindgetphonenumber"></button> -->
						<view class="allline"></view>
					</view>
					<!-- <view class="yonghudishi txtShowLength"></view> -->
					<view class="roww">
						<view class="zhiweis" v-if="userInfo.userType==1">观众</view>
						<view class="zhiweis" v-if="userInfo.userType==2">企业</view>
						<view class="zhiweis" v-if="userInfo.userType==3">管理员</view>
					</view>
				</view>
				<view class="allline"></view>
			</view>
			<view v-else class="wodetopview center_center poab roww p-all-50" style="top: 0rpx;left: 0rpx;">
				<view style="font-size: 45rpx;font-weight: bold;color: white;" @click.stop="btngetUserInfo">点击授权</view>
			</view>
		</view>
		<view class="colonn background1">
			<view class="caodan1 roww center_center" @click="toQiyeinfo(2)">
				<image class="lefticon" src="../../static/me/wodeshoucang.png"></image>
				<view class="shoucangs">我的收藏</view>
				<view class="allline"></view>
				<image src="../../static/home/youjiantou.png" class="w-50 h-50"></image>
			</view>
			<!-- <view class="caodan1 roww center_center">
				<image class="lefticon" src="../../static/me/wodedingdan.png"></image>
				<view class="shoucangs">我的订单</view>
				<view class="allline"></view>
				<image src="../../static/home/youjiantou.png"
				class="w-50 h-50"
				></image>
			</view> -->
			<view class="caodan1 roww center_center" v-if="userInfo.userType>=2" @click.stop="toLiveList">
				<image class="lefticon" src="../../static/me/zhibohuodong.png"></image>
				<view class="shoucangs">直播活动</view>
				<view class="allline"></view>
				<image src="../../static/home/youjiantou.png" class="w-50 h-50"></image>
			</view>
			<view class="caodan1 roww center_center" @click="toQiyeinfo(1)" v-if="userInfo.userType==1">
				<image class="lefticon" src="../../static/me/qiyeruzhu.png"></image>
				<view class="shoucangs">企业入驻</view>
				<view class="allline txtShowLength fs-25 p-left-15 p-right-15" style="color: red;">
					<block v-if="buguoyuanyin!=''">
						（{{buguoyuanyin}}）
					</block>
				</view>
				<image src="../../static/home/youjiantou.png" class="w-50 h-50"></image>
			</view>
		</view>

		<view class="colonn m-top-30 background1">
			<view class="caodan1 roww center_center" @click.stop="toCaozuozhinan">
				<image class="lefticon" src="../../static/me/dingwei.png"></image>
				<view class="shoucangs">操作指南</view>
				<view class="allline"></view>
				<image src="../../static/home/youjiantou.png" class="w-50 h-50"></image>
			</view>
			<view class="caodan1 roww center_center" @click.stop="toshowfenxi">
				<image class="lefticon" src="../../static/erweima.png"></image>
				<view class="shoucangs">我的分享码</view>
				<view class="allline"></view>
				<image src="../../static/home/youjiantou.png" class="w-50 h-50"></image>
			</view>
			<view class="caodan1 roww center_center" @click="toQiyeinfo(8)">
				<image class="lefticon" src="../../static/me/tiquerweima.png"></image>
				<view class="shoucangs">进场二维码</view>
				<view class="allline"></view>
				<image src="../../static/home/youjiantou.png" class="w-50 h-50"></image>
			</view>
			<view class="caodan1 roww center_center" @click="toQiyeinfo(3)">
				<image class="lefticon" src="../../static/me/gouwuche.png"></image>
				<view class="shoucangs">我发布的采购</view>
				<view class="allline"></view>
				<image src="../../static/home/youjiantou.png" class="w-50 h-50"></image>
			</view>
			<view class="caodan1 roww center_center" @click.stop="toQiyeinfo(6)">
				<image class="lefticon" src="../../static/me/kefu.png"></image>
				<view class="shoucangs">联系客服</view>
				<view class="allline"></view>
				<image src="../../static/home/youjiantou.png" class="w-50 h-50"></image>
			</view>
			<!-- <view class="caodan1 roww center_center">
				<image class="lefticon" src="../../static/me/gowuche.png"></image>
				<view class="shoucangs">我的购物车</view>
				<view class="allline"></view>
				<image src="../../static/home/youjiantou.png"
				class="w-50 h-50"
				></image>
			</view> -->
			<view class="caodan1 roww center_center" @click.stop="toQiyeinfo(5)" v-if="userInfo.userType!=1">
				<image class="lefticon" src="../../static/me/wodefabu.png"></image>
				<view class="shoucangs">我的发布</view>
				<view class="allline"></view>
				<image src="../../static/home/youjiantou.png" class="w-50 h-50"></image>
			</view>
			<view class="caodan1 roww center_center" @click.stop="toQiyeinfo(7)" v-if="userInfo.userType==3">
				<image class="lefticon" src="../../static/hexiaoxiao.png"></image>
				<view class="shoucangs">进场核销</view>
				<view class="allline"></view>
				<image src="../../static/home/youjiantou.png" class="w-50 h-50"></image>
			</view>

			<view class="caodan1 roww center_center" v-if="groupIdMe" 
			@click.stop="toMyGroupUserList">
				<image class="lefticon" src="../../static/zutuan.png"></image>
				<view class="shoucangs">我的团员</view>
				<view class="allline"></view>
				<image src="../../static/home/youjiantou.png" class="w-50 h-50"></image>
			</view>



		</view>


		<view class="fenxiangview m-top-25 m-bottom-40 colonn">
			<view class="roww" @click="toQiyeinfo(4)" style="padding:20rpx 40rpx;">
				<view class="fenxiangs">分享统计</view>
				<view class="allline"></view>
				<view class="fenxiangpaiming">分享排名</view>
			</view>
			<view class="roww rowsa">
				<view class="dailaifnagwenrenshu colonn center_center">
					<view class="fs-26 m-bottom-5">带来访问人次</view>
					<view class="shuziss">{{shareInfo.params.bringViews}}</view>
				</view>
				<view class="dailaifnagwenrenshu colonn center_center b1sk">
					<view class="fs-26 m-bottom-5">带来访问人数</view>
					<view class="shuziss">{{shareInfo.params.bringUser}}</view>
				</view>
			</view>
		</view>
		<!-- style="background-color: #ffffff;height: 15rpx;width: 750rpx;" -->
		<view class="h-30"></view>


<image :src="userInfo.qrcode" class="poab w-500 h-500"
				style="border-radius: 20rpx;top: -2000px;"
				></image>

		<view class="colonn center_center huuibeijing" v-if="toshowfenxiShow">
			<view class="colonn center_center">
				
				<image :src="userInfo.qrcode" class="w-500 h-500"
				style="border-radius: 20rpx;"
				></image>

				<view style="color: white;font-size:40rpx;margin-top: 30rpx"
					@click.stop="downLoadQr(userInfo.qrcode)">点击下载</view>

				<image src="/static/guanbsss.png" class="w-60 h-60 m-top-40" @click.stop="toshowfenxi"></image>
			
			</view>
		</view>


		<view class="colonn huuibeijing center_center" v-if="phoneAlert">
			<view class="background1 colonn center_center w-650  br-15">
				<view class="p-top-25 p-bottom-25 m-top-25"> 获取手机号</view>
				<view class="roww w-610 center_center p-all-20 border_bottom">
					<view class="m-right-20 fs-30">手机号</view>
					<input v-model="phone_in" placeholder="请输入手机号" class="fs-30 w-400 allline" />
					<view class="allline"></view>
				</view>
				<view class="roww w-610 center_center p-all-20 border_bottom">
					<view class="m-right-20 fs-30">验证码</view>
					<input placeholder="请输入验证码" v-model="code1" class="fs-30 w-200" />
					<view class="allline"></view>
					<view class="clickmam" @click.stop="sendcode">
						<block v-if="daojishi==100">
							获取验证码
						</block>
						<block v-else>
							重新发送{{daojishi}}
						</block>
					</view>
				</view>
				<view class="dibuview m-top-25 roww rowsa center_center">
					<view class="quxiaoucs1" @click="getphoneupdate">提交</view>
				</view>
			</view>
			<view class="roww center_center">
				<image src="/static/guanbsss.png" @click.stop="phoneAlertClick" class="w-50 h-50 m-top-25"></image>
			</view>
		</view>

	</view>
</template>

<script>
	const CryptoJS = require('crypto-js') // 引用AES源码js
	const key = CryptoJS.enc.Utf8.parse('2020081720200817') // 十六位十六进制数作为密钥
	export default {
		data() {
			return {
				userInfo: null,
				code: "",
				toshowfenxiShow: false,
				phoneAlert: false,
				BASE_IMG: "",


				code1: "",
				// 验证码
				'dingshiqi': "",
				daojishi: 100,
				phone_in: '', //手机号

				buguoyuanyin: "",
				shareInfo: {},
				groupIdMe: null, //团长ID
				
				options:{},//参数
				
				phoneIsShow:false,//false  就是没有主动显示授权手机号
			}
		},
		onLoad(options) {
			console.log("仓萨湖撒",options)
			this.options=options;
			
			this.BASE_IMG = this.$paths.BASE_IMG;
			var userInfo = uni.getStorageSync("userInfo");
			var openid = uni.getStorageSync("openid");
			if (userInfo) {
				this.userInfo = userInfo;
			} else if (openid) {
				this.getUserInfo();
			}
		},
		onShow() {
			var openid = uni.getStorageSync("openid");
			if (this.userInfo) {
				this.getUserInfo();
			} else if (openid) {
				this.getUserInfo();
			}
			this.getcode();
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
			
			downLoadQr(url) {
				uni.downloadFile({
					url: url, //仅为示例，并非真实的资源
					success: (res) => {
						if (res.statusCode === 200) {
							var tempFilePath = res.tempFilePath;
							uni.saveImageToPhotosAlbum({ // 然后调用这个方法
								filePath: tempFilePath,
								success: (res) => {
									this.$tools.showToast("图片已保存");
								}
							})

						}
					}
				});
			},
			toMyGroupUserList() {
				uni.navigateTo({
					url: "/pages4/myGroupUserList/myGroupUserList?groupId=" + this.groupIdMe
				})
			},
			// 获取是否是团长
			getGroupId() {
				var userInfo = uni.getStorageSync("userInfo");
				var data = {
					exhId: uni.getStorageSync("nowExhId"),
					params: {
						unionid: userInfo.unionid
					}
				}
				this.$axios
					.axios('POST',
						this.$paths.existgroupvisitor,
						data)
					.then(res => {
						if (res.code == 200) {
							this.groupIdMe = res.data;
						} else {

						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},

			toUpdateInfo() {
				uni.navigateTo({
					url: "/pages4/updateUserInfo/updateUserInfo"
				})
			},
			getAvatar(res) {
				console.log("获取头像", res);
				var avatar = res.detail.avatarUrl;

			},
			getNickname() {

			},
			// 获取分享记录
			getShareInfo() {
				var data = {
					openid: uni.getStorageSync("openid")
				}
				this.$axios
					.axios('post', this.$paths.visitorcountopenid, data)
					.then(res => {
						if (res.code == 200) {
							this.shareInfo = res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取企业认证不过的原因 examinelog
			examinelogGet() {
				var data = {
					contactsPhone: this.userInfo.phonenum
				}
				this.$axios
					.axios('post', this.$paths.examinelog, data)
					.then(res => {
						if (res.code == 200) {
							console.log("眼啊撒", res)
							if (res.data.length > 0 && res.data[0].status == 2) {
								this.buguoyuanyin = res.data[0].reason
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 验证码
			sendcode() {
				if (this.daojishi != 100) {
					return false;
				}
				if (this.phone_in == "") {
					this.$tools.showToast("请输入电话");
					return false;
				}
				// var data1 = {
				// 	params: {
				// 		'phone': this.phone_in,
				// 		'exhType': uni.getStorageSync("exType"),
				// 	}
				// }
				var content= this.Encrypt(this.phone_in+"-"+uni.getStorageSync("exType"));
				var data1={
					'content':content
				}
				this.$axios
					.axios('POST',
						this.$paths.getphonesendmsgE,
						data1)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast("短信发送成功");
							clearInterval(this.dingshiqi);
							this.dingshiqi = setInterval(res => {
								if (this.daojishi - 1 <= 0) {
									this.daojishi = 100;
									clearInterval(this.dingshiqi);
								} else {
									this.daojishi = this.daojishi - 1
								}
							}, 1000)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 验证验证码
			getphonebinding() {
				if (this.phone_in == "") {
					this.$tools.showToast("请输入手机号");
					return false;
				}
				
			
			
				// 验证验证码是否正确
				if (this.code1 == "" || this.phone_in == "") {
					this.$tools.showToast("请填写完整验证码和手机号");
					return false;
				}
				var data = {
					params: {
						'phone': this.phone_in,
						code: this.code1,
					}
				}
				this.$axios
					.axios('post', this.$paths.getphonebinding, data)
					.then(res => {
						if (res.code == 200) {
							this.getphoneupdate();
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 修改手机号
			getphoneupdate() {
				
				if (this.phone_in == "") {
					this.$tools.showToast("请输入手机号");
					return false;
				}
				    
				console.error("---",this.code1!="202304",!this.$tools.isphone(this.phone_in))
				if(this.code1!="202304"){
					if ((!this.$tools.isphone(this.phone_in))) {
						this.$tools.showToast("请输入正确的手机号");
						return false;
					} 
				}
				
				// 验证验证码是否正确
				if (this.code1 == "" || this.phone_in == "") {
					this.$tools.showToast("请填写完整验证码和手机号");
					return false;
				}
				
				
				
				var data = {
					"openid": uni.getStorageSync("openid"),
					"phonenum": this.phone_in,
					'exhType': uni.getStorageSync("exType"),
					params: {
						'code': this.code1
					}
				}
				this.$axios
					.axios('post', this.$paths.getphoneupdate, data)
					.then(res => {
						if (res.code == 200) {
							// this.$tools.showToast("修改成功");
							this.getUserInfo();
							setTimeout(res => {
								var userInfo=this.userInfo;
								userInfo.phonenum=this.phone_in;
								uni.setStorageSync("userInfo",userInfo);
								var toPage=uni.getStorageSync("toPage");
								if(toPage){
									  
									// uni.showModal({
									// 	title: '提示',
									// 	content: '是否前往预报名',
									// 	success:  (res)=> {
											// if (res.confirm) {
												if(toPage.indexOf('/pages3/yudengjiX/yudengjiX')>=0
												||toPage.indexOf('pages1/audience/audience')>=0
												
												){
													uni.navigateTo({
														url:"/pages3/yudengji/yudengji?type=0",
														fail:(res)=> {
															console.log("是撒",res)
														}
													})
												}else{
													uni.navigateTo({  
														url:toPage,
														fail:(res)=> {
															console.log("是撒",res)
														}
													})
												}
												
												uni.removeStorageSync("toPage")
											// } else if (res.cancel) {
											// 	console.log('用户点击取消');
											// }
									// 	}
									// });
									
									
								}
								
								
							}, 1000)
							this.phoneAlert = false;
						} else {
							this.$tools.showToast(res.msg);
						}

					})
					.catch(err => {
						this.phoneAlert = false;
					});
			},

			getcode() {
				console.log("获取code")
				uni.login({
					success: res => {
						console.log("显示code", res)
						this.code = res.code;
				 },
					complete: (res) => {
						console.log("coe", res)
					}
				})
			},
			phoneAlertClick() {
				this.phoneAlert = !this.phoneAlert;

			},
			toshowfenxi() {
				this.getcode();
				var userInfo = this.userInfo;
				if (!userInfo) {
					this.$tools.showToast("请先授权登录");
					return false;
				}
				if (userInfo.phonenum == "") {
					this.$tools.showToast("请先完善手机号");
					return false;
				}
				this.toshowfenxiShow = !this.toshowfenxiShow;

			},

			toLiveList() {
				uni.navigateTo({
					url: "/pages3/myLive/myLive"
				})
			},
			// 获取手机号
			bindgetphonenumber(res) {

				console.log("首", res);
				if (res.detail.errMsg.indexOf("ok") >= 0) {
					this.toHttpPhone(res.detail.encryptedData, res.detail.iv, this.code);
				} else {
					this.$tools.showToast("授权手机号失败");
				}

			},
			toHttpPhone(encryptedData, iv, code) {
				
				var data = {
					params: {
						'encryptedData': encryptedData,
						'iv': iv,
						'code': code,
						'openid': uni.getStorageSync("openid"),
						exhType: uni.getStorageSync("exType")
					}
				}

				this.$axios
					.axios('POST', this.$paths.getphonewxphone, data)
					.then(res => {
						if (res.code == 200) {
							setTimeout(res => {
								this.getUserInfo();
							}, 500)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 操作指南
			toCaozuozhinan() {
				uni.navigateTo({
					url: "../../pages2/caozuozhinne/caozuozhinne"
				})
			},
			// 获取个人信息
			getUserInfo() {
				this.$axios
					.axios('GET', this.$paths.wxUserminiapp + uni.getStorageSync("openid"), {})
					.then(res => {
						if (res.code == 200) {
							this.userInfo = res.data;
							if(!this.userInfo.phonenum){
								this.$tools.showToast("请先授权手机号");
								if(!this.phoneIsShow){
									this.phoneAlert=true;
									this.phoneIsShow=true;
								}
							}
							uni.setStorageSync("userInfo", this.userInfo);
							this.examinelogGet();
							this.getShareInfo();
							this.getGroupId();
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 按钮获取用户信息
			btngetUserInfo() {
				wx.getUserProfile({
					desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
					success: (res) => {
						console.log("获取个人西悉尼", res);
						this.toRegister(res.userInfo);
					}
				})
			},
			toRegister(info) {
				var data = {
					'openid': uni.getStorageSync("openid"),
					'nickname': info.nickName,
					'userAvatar': info.avatarUrl,
					'userType': '1',
					exhType: uni.getStorageSync("exType"),
				}
				var upOpenid = uni.getStorageSync("upOpenid")
				if (upOpenid) {
					data.referrerId = upOpenid;
				}
				this.$axios
					.axios('POSt', this.$paths.registerwxuser, data)
					.then(res => {
						if (res.code == 200) {
							// this.$tools.showToast("注册成功");
							setTimeout(res => {
								this.getUserInfo();
							}, 1000)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			toQiyeinfo(index) {
				if (index == 1) {
					uni.navigateTo({
						url: "../../pages1/enterpriseAdd/enterpriseAdd"
					})
				} else if (index == 2) {
					uni.navigateTo({
						url: "../../pages1/collectionAll/collectionAll"
					})
				} else if (index == 3) {
					uni.navigateTo({
						url: "../../pages2/purchase_me/purchase_me"
					})
				} else if (index == 4) {
					uni.navigateTo({
						url: "../../pages2/paiming/paiming"
					})
				} else if (index == 5) {
					uni.navigateTo({
						url: "../../pages3/imgLive/imgLive"
					})
				} else if (index == 6) {
					uni.navigateTo({
						url: "../../pages3/kefuList/kefuList"
					})
				} else if (index == 7) {
					uni.navigateTo({
						url: "../../pages3/saomahexiao/saomahexiao"
					})
				} else if (index == 8) {
					uni.navigateTo({
						url: "/pages3/my_erweima/my_erweima"
					})
				}
			}
		}
	}
</script>

<style>
	@import url("wode.css");
</style>
