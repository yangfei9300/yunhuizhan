<template>
	<view>
		<view class="colonn">
			<block v-if="options.type">
				<view class="colonn p-all-24">
					<view class="m-top-20 m-bottom-20 fw-b">{{typeAriclcle[options.type-1]}}</view>
					<view class="roww m-top-20 center_center">
						<image class="w-40 h-40 m-right-15" 
						:src="logoUrl"></image>
						<view class="fs-30 m-left-15" 
						style="color:#536489;">{{aciviteList[exType-1]}}</view>
						<view class="allline"></view>
					</view>  
				</view>
			</block>
			
			<view style="padding:0rpx 24rpx 0rpx 24rpx;background-color: #ffffff;" v-if="xinwenList.length>0">
				<view class="colonn center_center" >
					<view class="roww allline p-all-25 border_bottom w-750" v-for="(item,index) in xinwenList"
					@click.stop="toarticelInfo(item)" v-if="index<xinwenListIndex*10"
					>
						<image lazy-load class="jiudianuns m-right-15" 
						:src="item.thumbMedia"
						mode="aspectFill"></image>
						<view class="colonn rowsbl ">
							<view class="fweight txtShowLength1 w-550 fs-30">{{item.title}}</view>
							<view style="color: #999999;"   
							class="fs-25 txtShowLength w-510">发布时间:{{item.createTime}}</view>
						</view>
						<view class="allline"></view>
					</view>
				</view>
			</view>
			<view v-else class="roww center_center">
				<view style="font-size: 30rpx;margin-top: 30rpx;" class="roww center_center">
					<view>无数据</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				exType:0,
				BASE_IMG:"",
				options:{},
				xinwenList:[],//文章列表
				xinwenListIndex:1,
				aciviteList:[],
				typeAriclcle:['展会新闻','同期活动','往届回顾','展商推荐'],
				
				logoUrl:"",
			}         
		},  
		onLoad(options) {
			this.logoUrl=this.$tools.getLogos(parseInt(uni.getStorageSync("exType")));
			this.aciviteList=getApp().globalData.aciviteList;
			this.options=options;
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.exType=parseInt(uni.getStorageSync("exType"));
			this.getArtiList();
		},
		
		onReachBottom() {
			console.log("触底")
			this.xinwenListIndex=this.xinwenListIndex+1;
			
			this.getArtiList();
		},
		
		methods: {
			toarticelInfo(item){
				uni.navigateTo({
					url:"/pages3/article_info/article_info?id="+item.id
				})
			},
			getArtiList(){
				var data={
					'exhType':uni.getStorageSync("exType"),
					params:{
						limit:this.xinwenList.length
					},
				}   
				if(this.options.type){
					data.type=this.options.type;
				}
				this.$axios
					.axios('POSt', this.$paths.miniappnewslist, data)
					.then(res => {     
						if (res.code == 200) {
							this.xinwenList=this.xinwenList.concat(res.data);
							
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
@import url(articleList.css);
</style>
