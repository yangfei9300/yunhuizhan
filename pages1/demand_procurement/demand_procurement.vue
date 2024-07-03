<template>
	<view>
		<!-- position: fixed;top: 0rpx;left: 0rpx; -->
		<view
		class="background1"
		style="width:750rpx;z-index: 1000;">
		<v-tabs  v-model="current" activeColor="#2E7EFF" 
		:lineScale="lineScale"
		lineColor="#2E7EFF"  :scroll="false" :tabs="tabs" @change="changeTab"></v-tabs>
		<!-- pills -->
		</view>  
		<view class="background1" v-if="current<=1">
			<v-tabs  v-model="current1"
			activeColor="#2E7EFF" lineColor="#2E7EFF"  
			 :tabs="typeList" field="name"
			@change="changeTab1"></v-tabs>
		</view>
		
		<view class="colonn background1 " style="padding:25rpx 25rpx 0rpx 25rpx ;">
			<view class="colonn background1 border_bottom  p-all-20"
			v-for="(item,index) in xuqiuList" v-if="current<=1&&index<xuqiuListindex*5"
			>
				<view class="fs-30">
					<block v-if="current==0">供应</block>
					<block v-if="current==1">采购</block>
					：{{item.content}}</view>
				<view class="fs-30 m-top-15">
					{{item.represent}}
				</view>
				<view class="roww bottom"> 
					<view class="huanhang w-550">
						<view class="biaoiqianss" v-for="(item1,index1) in item.label">#{{item1}}</view>
					</view>
					<view class="xiangqingbtm"
					@click.stop="toInfo(item)"
					>详情</view>
				</view>
				<view class="roww fs-25 m-top-25" style="color: #999999;">
					<view class="roww">
						{{item.views}}浏览
					</view>
					<view class="roww">
						·{{item.marks}}收藏
					</view>
					<view class="allline"></view>
					<view class="roww">
						{{item.createTime}}
					</view>
				</view>
			</view>
			  
			<view  v-if="current<=1&&xuqiuList.length<=0" class="roww center_center m-bottom-30">
				<noList></noList>
			</view>
			
			<view v-if="current==2" class="background1 ">
				<rich-text :nodes="liuchnegInfo.content"></rich-text>
			</view>
		</view>
		
		<image src="../../static/fabujaifa.png" class="w-80 h-80 "
		style="right: 50rpx;bottom: 250rpx;position: fixed;background-color: #ffffff;border-radius: 50%;"
		@click.stop="toProcurment"
		></image>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				current1:-1,
				tabs: [
				  '供应',
				  '采购',
				  '发布需求流程',
				],
				tabs1: [
				  '水',
				  '气',
				  '土',
				  '环境检测',
				  '国际展区'
				],
				lineScale:0.1,
				
				liuchnegInfo:{},//流程
				typeList:[],//工序发布分类
				xuqiuList:[],
				
				xuqiuListindex:1,
				logoUrl:"",
			}
		},
		onLoad() {	
			this.logoUrl=this.$tools.getLogos(parseInt(uni.getStorageSync("exType")));
			
			this.getFabuliuceng();
		},
		
		onShow() {
			this.getXuqiufenlei();
		},
		onReachBottom() {
			this.xuqiuListindex=this.xuqiuListindex+1;
			
		},
		 onShareTimeline() { 
		      return {
		        title: "需求采购",
		        imageUrl: this.logoUrl,
		        path: '/pages1/demand_procurement/demand_procurement'
		      }
		  },
		  
		  onShareAppMessage(){
		      return {
		        title:'需求采购',
		       imageUrl: this.logoUrl,
			   path: '/pages1/demand_procurement/demand_procurement'
		    }
			},
		  
		methods: {
			// 获取分类下的需求
			getXuqiuList(){
				console.log("获取需求里诶包")
				var data={
					type:this.current+1,
					exhType:uni.getStorageSync("exType")
				}
				if(this.current1>=0){
					data.classification=this.typeList[this.current1].id
				}else{
					data.classification="";
				}
				this.$axios
					.axios('POST', this.$paths.supplyandneedlist, data)
					.then(res => {
						if (res.code == 200) {
							var xuqiuList=res.data;
							for(var a=0;a<xuqiuList.length;a++){
								xuqiuList[a].label=xuqiuList[a].label.split(",")
							}
							this.xuqiuList=xuqiuList;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取需求分类
			getXuqiufenlei(){
				var data={
					exhType:uni.getStorageSync("exType")
				}
				this.$axios
					.axios('POST', this.$paths.classification, data)
					.then(res => {
						if (res.code == 200) {
							this.typeList=res.data;
							if(this.typeList.length>0){
								this.getXuqiuList();
							}
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取发布流程
			getFabuliuceng(){
				var data={
					'exhType':uni.getStorageSync("exType")
				}
				this.$axios
					.axios('POST', this.$paths.supplyandneedprocess, data)
					.then(res => {
						if (res.code == 200) {
							this.liuchnegInfo=res.data;
							this.liuchnegInfo.content = this.liuchnegInfo.content.replace(/\<img/gi, '<img style="width:100%" ')
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			changeTab(index) {
			  this.current=index;
			  
			  if(index<=1){
				  this.current1=-1;
				  this.getXuqiuList();
			  }
			},
			changeTab1(index){
				this.current1=index;
				this.getXuqiuList();
			},
			toProcurment(){
				if(!this.$tools.islogin()){
					return false;
				}
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo||!userInfo.phonenum||userInfo.phonenum==''){
					this.$tools.showToast("请先完善手机号");
					setTimeout(res=>{
						uni.switchTab({
							url:"/pages/wode/wode"
						})
					},1000)
					return false;
				}
				uni.navigateTo({
					url:"../../pages2/purchase_fabu/purchase_fabu?type="+this.current+1
				})
			},
			toInfo(item){
				uni.navigateTo({
					url:"/pages1/demand_procurement_info/demand_procurement_info?id="+item.id
				})
			}
		}
	}
</script>

<style>
@import url("demand_procurement.css");
</style>
