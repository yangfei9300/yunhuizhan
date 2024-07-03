<template>
	<view>
		<view class="colonn " style="position:fixed;top: 0rpx;left: 0rpx;width: 750rpx;z-index: 1000;">
			<view class="rowsa background1">
				<view class="colonn center_center" v-for="(item, index) in menuList" @click.stop="menuIndexClick(index)">
					<view class="livetxtno ">{{ item }}</view>
					<view
						class="selline "
						:class="{
							noselview: menuindex != index
						}"
					></view>
				</view>
			</view>
		</view>
<!-- m-top-200 -->
		<view class="huanhang rowsb m-top-100" style="padding:0rpx 25rpx;">
			<view class="zhiboview colonn " v-for="(item, index) in MeliveList"
			@click.stop="toZhiboInfo(item)"
			v-if="(menuindex==0)||(menuindex==1&&item.streamStatus==1)||(menuindex==2&&item.streamStatus==0)||(menuindex==3&&item.streamStatus==2)"
			>
				<view class="w-342 h-200 pore">
					<image class="imagsee poab" mode="aspectFill" :src="item.shareImgUrl"></image>
					<view class=" w-342 h-200 zhanuee">
						<view class="roww">
							<view class="righttopview roww center_center">
								<image src="../../static/live/yugao.png" class="w-20 h-20 m-right-10"></image>
								<view style="color: white;font-size: 20rpx;" >
									<block v-if="item.streamStatus==0">未开始</block>
									<block v-if="item.streamStatus==1">直播中</block>
									<block v-if="item.streamStatus==2">已结束</block>
								</view>
							</view>
						</view>
						<image src="../../static/live/yugao.png" class="w-70 h-70" style="position: absolute;top: 75rpx;right: 136rpx;"></image>
						<view class="zhiboyugao">直播开始：{{item.startTime}}</view>
					</view>
				</view>
				<view class="ziboname txtShowLength1" style="font-size: 25rpx;">{{item.name}}</view>
			</view>
			
			<view class="zhiboview colonn " v-for="(item, index) in liveList"
			@click.stop="toLiveRoom(item)"
			v-if="(menuindex==0&&(item.liveStatus=='101'||item.liveStatus=='102'||item.liveStatus=='103'))||(menuindex==1&&item.liveStatus=='101')||(menuindex==2&&item.liveStatus=='102')||(menuindex==3&&item.liveStatus=='103')"
			>
				<view class="w-342 h-200 pore">
					<image class="imagsee poab" mode="aspectFill" :src="item.shareImg"></image>
					<view class=" w-342 h-200 zhanuee">
						<view class="roww">
							<view class="righttopview roww center_center">
								<image src="../../static/live/yugao.png" class="w-20 h-20 m-right-10"></image>
								<view style="color: white;font-size: 20rpx;" >
									<block v-if="item.liveStatus=='101'">直播中</block>
									<block v-if="item.liveStatus=='102'">未开始</block>
									<block v-if="item.liveStatus=='103'">已结束</block>
									<block v-if="item.liveStatus=='104'">禁播</block>
									<block v-if="item.liveStatus=='105'">暂停</block>
									<block v-if="item.liveStatus=='106'">异常</block>
									<block v-if="item.liveStatus=='107'">已过期</block>  
								</view>
							</view>
						</view>
						<image src="../../static/live/yugao.png" class="w-70 h-70" style="position: absolute;top: 75rpx;right: 136rpx;"></image>
						<view class="zhiboyugao">直播开始：{{item.startTime}}</view>
					</view>
				</view>
				<view class="ziboname txtShowLength1" style="font-size: 25rpx;">{{item.name}}</view>
			</view>
		</view>
		<view class="roww center_center m-bottom-20">
			<view @click.stop="getZhilive" style="font-size: 30rpx;">点击加载更多</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			liveList: [],
			menuList: ['全部', '直播中', '预告', '回放'],
			menuindex: 0,
			tiaojia:'1==1',
			MeliveList:[],//自己写的图片
		};
	},      
	onLoad() {
		this.getZhilive();   
		this.getZhiboWx(); 
	},   
	methods: {   
		toZhiboInfo(item){
			uni.navigateTo({
				url:"/pages4/liveing1/liveing1?id="+item.id
			})
		},   
		// 获取直播列表自己写的
		getZhiboWx(){
			// 
			var data = {
				exhType:uni.getStorageSync("exType")
			};
			console.log("as",this.$paths.streamlist)
			this.$axios
				.axios('POST', this.$paths.streamlist, data)
				.then(res => {
					if (res.code == 200) {
						var dataa = res.data;
						this.MeliveList=res.data;
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch(err => {});
		},
		
		toLiveRoom(item){
			let roomId =item.roomid // 填写具体的房间号，可通过下面【获取直播房间列表】 API 获取
			wx.navigateTo({
			    url: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${roomId}`
			})
		},
		
		menuIndexClick(index) {
			this.menuindex = index;
			if(index==1){
				this.tiaojia='item.liveStatus==101'
			}else if(index==2){
				this.tiaojia='item.liveStatus==102'
			}else if(index==3){
				this.tiaojia='item.liveStatus==102'
			}
			this.getZhilive();
		},
		
		// 获取直播列表
		getZhilive() {
			var data = {
				start: this.liveList.length,
				limit: 100,
				exhId:uni.getStorageSync("nowExhId"),
				exhType:uni.getStorageSync("exType")
			};
			this.$axios
				.axios('GET', this.$paths.room_listwx, data)
				.then(res => {
					if (res.code == 200) {
						var dataa = res.data;
						var list=[];
						list=list.concat(dataa['101']);
						list=list.concat(dataa['102']);
						list=list.concat(dataa['103']);
						list=list.concat(dataa['104']);
						list=list.concat(dataa['105']);
						list=list.concat(dataa['106']);
						list=list.concat(dataa['107']);
						for(var a=0;a<list.length;a++){
							list[a].startTime= this.$tools.timestampToTime(list[a].startTime*1000); 
						}
						console.log(list)
						if(list.length<=0){
							this.$tools.showToast("暂无更多直播间");
							return false;
						}
						var liveList = this.liveList;
						liveList = liveList.concat(list);
						this.liveList = liveList;
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch(err => {});
		}
	}
};
</script>

<style>
@import url('live.css');
</style>
