<template>
	<view>
		<!-- style="position: fixed;top: 0rpx;left: 0rpx;z-index: 1000;" -->
		<view class="colonn center_center" >
			<view class="topsou roww center_center  "
			style="padding:0rpx 24rpx;"
			@click="toSousuo"
			>
				<image src="../../static/home/sousuo.png"
				class="w-30 h-30 m-right-15"
				></image>
				<view class="fs-30" style="color: #999999;">搜索企业,商品</view>
				<view class="allline"></view>
			</view>
			   
			<view class="roww w-750 border_bottom background1" 
			style="">
				<scroll-view scroll-x style="width: 750rpx;">
					<view class="roww " 
					>   
					<!-- <view class="colonn center_center"
					style="margin:15rpx 25rpx;"
					@click.stop="selTypeListClick(-1)"
					>
						<image  class="typeicon"></image>
						<block v-if="selIndex==index">
							<view class="fs-25 m-top-15" style="color: #007AFF;">全部</view>
						</block>
						<block v-else>
							<view class="fs-25 m-top-15" >全部</view>
						</block>
					</view> -->
						<view class="colonn center_center"
						style="margin:15rpx 25rpx;"
						v-for="(item,index) in typeList"
						@click.stop="selTypeListClick(index)"
						>  
							<image :src="item.image+'?x-oss-process=image/auto-orient,1/interlace,1/resize,p_75/quality,q_69/format,jpg'" class="typeicon"></image>
							<block v-if="selIndex==index">
								<view class="fs-25 m-top-15" style="color: #007AFF;text-align: center;">{{item.name}}</view>
							</block>
							<block v-else>
								<view class="fs-25 m-top-15 txtShowLength w-100" style="text-align: center;" >{{item.name}}</view>
							</block>
						</view>
						<view class="w-25"></view>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<!-- <view class="h-244"></view> -->
		<view class="colonn p-all-25" >
			<!--  v-if="index<qiyeListindex*10" -->
			<view class="roww  p-bottom-34 m-bottom-34"
			style="border-bottom: 1rpx solid #EEEEEE;"
			v-for="(item,index) in qiyeList"
			@click.stop="toShopInfo(item)"
			>    
				<image class="qiyeimg" lazy-load mode="aspectFill" 
				:src="item.companyAvatar+'?x-oss-process=image/auto-orient,1/interlace,1/resize,p_75/quality,q_69/format,jpg'"
				
				></image>
				<view class="colonn rowsbl">
					<view class="qiyename txtShowLength">
						{{item.companyName}}
					</view>
					<view class="roww">
						<view class="hzanwiehao" v-if="item.exhPlace">{{item.exhPlace}}</view>
						<view class="allline"></view>
						<!-- <view class="liulancishu">浏览{{item.views}}</view> -->
					</view>
					<scroll-view  
					scroll-x style="width:448rpx;margin-top:15rpx;"
					>
						<view class="roww">
							<view class="chanpintag taggtxt"
							v-for="(item,index) in item.mainProduct"
							>{{item}}</view>
						</view>
					</scroll-view>
					<view class="roww m-top-10" >
						<view class="roww center_center">
							<block v-if="item.params.isLike==1">
								
								
								<image src="../../static/home/dianzanyes.png"
								class="w-30 h-30 m-right-10" mode="aspectFill"
								></image>
								<view class="dianzns">点赞</view>
							</block>
							<block v-else>
								<image src="../../static/home/dianzanno.png"
								class="w-30 h-30 m-right-10"
								></image>
								<view class="shoucangno" style="color: #999999;">点赞</view>
							</block>
						</view>
						<view class="roww center_center m-left-15">
							<block v-if="item.params.isMark==1">
								<image src="../../static/home/shoucangyes.png"
								class="w-30 h-30 m-right-10"
								></image>
								<view class=" shoucang">收藏</view>
							</block>
							<block v-else>
								<image src="../../static/home/shoucangno.png"
								class="w-30 h-30 m-right-10"
								></image>
								<view class="shoucangno"  style="color: #999999;">收藏</view>
							</block>
						</view>
						<view class="allline"></view>
						<view class="roww center_center m-left-15">
								<image src="../../static/redu.png"
								class="w-30 h-30 m-right-10"
								></image>
								<view class=" shoucang">热度{{item.views}}</view>
						</view>
					</view>  
				</view>
			</view>
			<view v-if="qiyeList.length<=0">
				<noList></noList>
			</view>
			<!-- <view class="roww  p-bottom-34 m-bottom-34"
			style="border-bottom: 1rpx solid #EEEEEE;"
			v-for="(item,index) in 3"
			@click.stop="toShopInfo"
			>
				<image class="qiyeimg"></image>
				<view class="colonn">
					<view class="qiyename txtShowLength">
						深圳市神火光电设备有限公司司
					</view>
					<view class="roww">
						<view class="hzanwiehao">A3-124</view>
						<view class="allline"></view>
						<view class="liulancishu">浏览343w</view>
					</view>
					<scroll-view
					scroll-x style="width:448rpx;margin-top:15rpx;"
					>
						<view class="roww">
							<view class="chanpintag taggtxt"
							v-for="(item,index) in 10"
							>环保设备</view>
						</view>
					</scroll-view>
					<view class="roww m-top-10" >
						<view class="roww center_center">
							<image src="../../static/home/dianzanno.png"
							class="w-30 h-30 m-right-10"
							></image>
							<view class="shoucangno">点赞</view>
						</view>
						<view class="roww center_center m-left-15">
							<image src="../../static/home/shoucangno.png"
							class="w-30 h-30 m-right-10"
							></image>
							<view class="shoucangno">收藏</view>
						</view>
					</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeList:[],
				BASE_IMG:"",
				selIndex:-1,
				qiyeList:[],
				qiyeListindex:1,//页数
				
			}
		},
		onLoad() {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getQAiyefen();    
		},
		onShow() {
			if(this.qiyeList.length>0){
				this.qiyeListindex=1;
				this.getQiyeList();
			}
		},
		onReachBottom() {
			this.qiyeListindex=this.qiyeListindex+1;
			this.getQiyeList();
		},
		methods: {   
			
			toSousuo(){
				uni.navigateTo({
					url:"../../pages3/sousuo/sousuo"
				})
			},
			
			toShopInfo(item){
				uni.navigateTo({
					url:"../../pages1/shopInfo/shopInfo?id="+item.companyId
				})
			},
			// 分类点击事件
			selTypeListClick(index){
				this.selIndex=index;
				this.qiyeList=[];
				this.qiyeListindex=0;
				this.getQiyeList();
			},
			// 获取企业分类
			getQAiyefen(){
				var data={
					'exhType':uni.getStorageSync("exType"),
				}
				this.$axios
					.axios('POSt', this.$paths.companytypeminiapp, data)
					.then(res => {   
						if (res.code == 200) {
							this.typeList=res.data;
							if(this.typeList.length>0){
								this.getQiyeList();
							}  
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log("baossd",err)
					});
			},
			// 获取企业列表
			getQiyeList(){
				var data={
					exhId:uni.getStorageSync("nowExhId"),
					'openid':uni.getStorageSync("openid"),
					params:{
						limit:this.qiyeList.length
					}
				}
				if(this.selIndex>=0){
					data.type=this.typeList[this.selIndex].id
				}
				
				console.log("下表",data.type,this.selIndex);
				
				this.$axios
					.axios('POSt', this.$paths.companylist, data)
					.then(res => {   
						if (res.code == 200) {
							
							var qiyeList=res.data;
							for(var a=0;a<qiyeList.length;a++){
								if(qiyeList[a].mainProduct){
									qiyeList[a].mainProduct=qiyeList[a].mainProduct.split(",")
								}else{
									qiyeList[a].mainProduct=[];
								}
								
							}     
							this.qiyeList= this.qiyeList.concat(qiyeList);
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log("baossd",err)
					});
			}
		}
	}
</script>

<style>
@import url("type.css");

</style>
