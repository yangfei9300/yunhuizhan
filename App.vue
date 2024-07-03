<script>
	export default {
		globalData: {
			logos: [
				'/profile/upload/2022/08/03/6fbca66972154d56b163daab0df6fb87_20220803092533A004.jpg',
				'/profile/upload/2022/08/03/fe6bbb03f29647538c83eead4613394d_20220803092610A005.jpg',
				'/profile/upload/2022/08/03/16b9760cd7064e6aa756604b7202d396_20220803092628A006.png',
				'/profile/upload/2022/08/03/cc7fcbcb6483444aa73501d3a22f3c69_20220803092643A007.png',
				'/profile/upload/2022/08/03/cc7fcbcb6483444aa73501d3a22f3c69_20220803092643A007.png'
			],
			aciviteList: [
				"绿色环保产业国际博览会",
				"山东体博会",
				"临沂全屋定制精品展览会",
				"临沂秋季全国五金展"
			],
		},
		onLoad() {},  
		onLaunch: function(res) {
			if (res.scene == 1155) {
				uni.setStorageSync("initPage", res.path)
			}
			//渠道
			if (res.query.canal) {
				uni.setStorageSync("canal", res.query.canal)
			}  
			if (res.query.openid) {
				uni.setStorageSync("upOpenid", res.query.openid)
			}
			if (res.query.upUid) {
				uni.setStorageSync("upUid", res.query.upUid)
			}
			if (res.query.scene) {
				uni.setStorageSync("upUid", res.query.scene)
			}   
			//设置展会类型      
			// uni.setStorageSync("exType",'1')//绿色环保产业国际博览会  wxaa266f1d23f5e0b3        
			// uni.setStorageSync("exType", '2') //山东体博会  wx10a0e05ea0bc7fc7   
			// uni.setStorageSync("exType",'5')// 建博会  wxaa9e435536462e2e  
			uni.setStorageSync("exType",'4')// 临沂秋季全国五金展 wxe54c7177161d5d61
			// uni.setStorageSync("exType",'3')// 临沂全屋定制精品展览会 wxe7082b495f67d116    
			// uni.setStorageSync("exType",'7')// 中国西安国际五金博览会 wxdb054ac0317cdbad      
			// uni.setStorageSync("exType",'9')// 菏泽林交会 wx98df3851c0d1783d  
			wx.cloud.init({})  
			 
			 
			var openid = uni.getStorageSync("openid");
			if (!openid) {
				wx.login({    
					success: (res) => {
						if (res.code) { //wx.login获取code。
							setTimeout(res1 => {
								this.getOpenid(res.code);
							}, 200)
						} else {
							console.log('获取用户登录态失败！' + res.errMsg)
						}
					}
				})
			} else {
				this.getUserInfo();
			}
			setTimeout(res => {
				this.toshnegji();
			}, 1000)
			var nowExhId=uni.getStorageSync("nowExhId");
			if(!nowExhId){
				this.getMiniapp();
			}
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
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
			
			toshnegji() {
				if (wx.canIUse('getUpdateManager')) {
					const updateManager = wx.getUpdateManager()
					updateManager.onCheckForUpdate(function(res) {
						console.log('onCheckForUpdate====', res)
						// 请求完新版本信息的回调
						if (res.hasUpdate) {
							console.log('res.hasUpdate====')
							updateManager.onUpdateReady(function() {
								wx.showModal({
									title: '更新提示',
									content: '新版本已经准备好，是否重启应用？',
									success: function(res) {
										console.log('success====', res)
										// res: {errMsg: "showModal: ok", cancel: false, confirm: true}
										if (res.confirm) {
											// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
											updateManager.applyUpdate()
										}
									}
								})
							})
							updateManager.onUpdateFailed(function() {
								// 新的版本下载失败
								wx.showModal({
									title: '已经有新版本了哟~',
									content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
								})
							})
						}
					})
				}
			},
			getOpenid(code) {
				var data = {
					wxcode: code,
					'exhType': uni.getStorageSync("exType"),
				};
				this.$axios
					.axios('GET', this.$paths.memberwxcode, data)
					.then(res => {
						console.error("获取openid结果", res, this.$paths.memberwxcode)
						if (res.code == 200) {
							console.log("获取openid", res)
							uni.setStorageSync("openid", res.data)
							this.getUserInfo();
						} else {
							this.showToast(res.message);
						}
					})
					.catch(err => {
						console.error("获取openid报错", err)
					});
				wx.cloud.callFunction({
					name: 'openid', // 需调用的云函数名,注意名称要相同
					// 传给云函数的参数 也就是上边的event对象
					data: {},
					// 成功回调
					success: res => {
						console.log("获取openid结果", res)
						uni.setStorageSync("openid", res.result.openid);
						this.getUserInfo();
					},
					fail: err => {
						console.error('[云函数] [login] 调用失败', err)
					}
				})
			},
			getUserInfo() {
				this.$axios
					.axios('GET', this.$paths.wxUserminiapp + uni.getStorageSync("openid"), {})
					.then(res => {
						if (res.code == 200) {
							console.error("获取个人信息", res);
							uni.setStorageSync("userInfo", res.data)
							this.getVisitCount();
						} else {

							// this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log("报错", err)
					});
			},
			// 添加访问次数
			getVisitCount() {
				var data = {
					openid: uni.getStorageSync("openid")
				}
				this.$axios
					.axios('POST', this.$paths.visitorview, {})
					.then(res => {
						if (res.code == 200) {
							uni.setStorageSync("fangwencishu", res.data)
						} else {
							// this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url("/style/style.css");
	@import url("/style/style_rpx.css");
	@import "/style/ty_style_scss.scss";
</style>
