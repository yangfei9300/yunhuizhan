<template>
	<view>
		<v-tabs  v-model="current" 
		:lineScale="lineScale"
		activeColor="#2E7EFF" 
		lineColor="#2E7EFF"  
		:scroll="false" 
		:tabs="tabs" 
		@change="changeTab"></v-tabs>
		
		
		
		<view class="colonn center_center" >
			<view class="roww allline border_bottom p-all-25 border_bottom w-750"
			v-for="(item,index) in zixunList"
			@click="tohitelinfo(item)" v-if="index<zixunListindex*10"
			>
				<image class="jiudianuns m-right-15" mode="aspectFill" :src="item.image"></image>
				<view class="colonn rowsbl ">
					<view class="fweight txtShowLength1 w-550 fs-30">{{item.title}}</view>
					<view style="color: #999999;" 
					class="fs-25 txtShowLength w-510">发布时间:{{item.createTime}}</view>
				</view>
				<view class="allline"></view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				tabs: [
				  '往届回顾',
				  '行业新闻',
				],
				lineScale:0.2,
				zixunList:[],
				zixunListindex:1,
				
				BASE_IMG:""
			}
		},
		onLoad(options) {
			if(options.type){
				this.current=parseInt(options.type);
				this.miniappeventinfo(this.current+1);
			}else{
				this.miniappeventinfo(1);
			}
			this.BASE_IMG=this.$paths.BASE_IMG;
		},
		onReachBottom() {
			this.zixunListindex=this.zixunListindex+1;
		},
		methods: {
			miniappeventinfo(type){
				var data = {
					type:type,//1是环保展
					exhId:uni.getStorageSync("nowExhId")
				}
				this.$axios
					.axios('GET', this.$paths.miniappeventinfo, data)
					.then(res => {
						if (res.code == 200) {
							this.zixunList=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {}); 
			},
			changeTab(index) {
			  console.log('当前选中的项：' + index)
			  this.current=index;
			  this.zixunListindex=1;
			  this.miniappeventinfo(index+1)
			},
			tohitelinfo(item){
				uni.navigateTo({
					url:"../exhibition_information_info/exhibition_information_info?id="+item.infoId
				})
			}
			
			
			
		}
	}
</script>

<style>
@import url("exhibition_information.css");
</style>
