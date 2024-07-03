<template>
	<view>
		<view class="huanhang rowsb p-all-20">
			<view class="zhiboview colonn " v-for="(item,index) in liveList"
			@click.stop="toLiveRoom(item)"
			>
				<view class="w-342 h-200 pore">
					<image class="imagsee poab" mode="aspectFill" 
					 :src="item.shareImgUrl"></image>
					<view class=" w-342 h-200 zhanuee" >
						<view class="roww">   
						
						<view class="leftttopview" @click.stop="fuzhiPush(item)" v-if="item.type==1" style="color: white;font-size: 20rpx;line-height: 40rpx;">
							<block>复制推流地址</block>
						</view>
						
							<view class="righttopview roww center_center">
								
								
								<view class="allline"></view>
								<image src="../../static/live/yugao.png"
								class="w-20 h-20 m-right-10"
								></image>
								<view style="color: white;font-size: 20rpx;">
									<block v-if="item.examineStatus=='1'">未审核</block>
									<block v-if="item.examineStatus=='2'">审核通过</block>
									<block v-if="item.examineStatus=='3'" >
										<view @click.stop="showshibaiuyan(item)">失败原因</view>
									</block>
								</view>
							</view>
						</view>
						<image src="../../static/live/yugao.png"
						class="w-70 h-70" style="position: absolute;top: 75rpx;right: 136rpx;"
						></image>
						<view class="zhiboyugao">直播开始：{{item.startTime}}</view>
					</view>
				</view>
				
				<view class="ziboname txtShowLength" style="font-size:25rpx;">{{item.name}}</view>
			</view>
		</view>
		
		<image src="../../static/fabujaifa.png" class="w-80 h-80 "
		style="right: 50rpx;bottom: 250rpx;position: fixed;background-color: #ffffff;border-radius: 50%;z-index:10000;"
		@click.stop="toProcurment"
		></image>
		
		<image src="../../static/caozuozhinan.png" class="w-80 h-80 "
		style="right: 50rpx;bottom: 150rpx;position: fixed;background-color: #ffffff;border-radius: 50%;z-index:10000;"
		@click.stop="toProcurment1"
		></image>    
		
		<image src="/static/kaibo.png"  class="w-80 h-80 " @click.stop="toZhibo"
			style="right: 50rpx;bottom: 50rpx;position: fixed;border-radius: 50%;z-index:10000;"
		></image>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				liveList:[],
				BASE_IMG:""
			}
		},
		onShow() {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getMyList();
		},
		methods: {
			
			toZhibo(){
				 uni
			},
			toliveXu(){
				wx.navigateToMiniProgram({
				       appId: 'wxcbbd86b156ae4441',  //appid
				       extraData: {  //参数
				         foo: 'bar'
				       },
				       envVersion: 'release', //开发版develop 开发版 trial   体验版 release 正式版 
				       success(res) {
				         console.log('成功')
				         // 打开成功
				       }
				     })
			},
			showshibaiuyan(item){
				
				uni.showModal({
					title: "失败原因",
					content:item.info,
   		   		});
			},
			fuzhiPush(item){
				uni.setClipboardData({
					data: item.pushAddr,
					success: function () {
						console.log('success');
					}
				});
			},
			toLiveRoom(item){
				let roomId =item.roomid // 填写具体的房间号，可通过下面【获取直播房间列表】 API 获取
				
				if(item.examineStatus==1){
					this.$tools.showToast("直播审核中");
					return false;
				}
				if(item.examineStatus==3){
					this.$tools.showToast("审核失败");
					return false;
				}
				wx.navigateTo({
				    url: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${roomId}`
				})
			},
			
			toProcurment(){
				uni.navigateTo({
					url:"../addLive/addLive"
				})
			},
			toProcurment1(){
				uni.navigateTo({
					url:"/pages4/live_operation/live_operation"
				})
			},
			getMyList(){
				var data = {
					openid:uni.getStorageSync("openid")
				};
				this.$axios
					.axios('POST', this.$paths.myLiveRoom, data)
					.then(res => {
						if (res.code == 200) {
							var liveList=res.data;
							for(var a=0;a<liveList.length;a++){
								liveList[a].startTime= this.$tools.timestampToTime(liveList[a].startTime*1000); 
							}
							this.liveList=liveList;
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
@import url(myLive.css);
</style>
