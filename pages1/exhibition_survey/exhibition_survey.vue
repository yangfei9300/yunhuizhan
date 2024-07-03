<template>
	<view>
		<swiper class="topimg" autoplay indicator-dots
		v-if="bannerList.length>0"
		>
			<swiper-item class="topimg" v-for="(item,index) in bannerList">
				<image class="topimg" mode="aspectFill" :src="item.imagePath" ></image>
			</swiper-item>
		</swiper>  
		
		<view class="colonn p-all-25">
				<view class="w-650 fweight">展会简介：</view>
				<view class="fs-30 m-top-25"  v-if="activies[0].content"> 
					<uParse  :content="activies[0].content" ></uParse>
					<!-- <rich-text :nodes="activies[0].content"></rich-text> -->
				</view>
				<view class="w-650 fweight m-top-25">组织机构：</view>
				<view class="fs-30 m-top-25"  v-if="activies[1].content">
					<!-- <rich-text :nodes="activies[1].content"></rich-text> -->
					<uParse  :content="activies[1].content" ></uParse>
					</view>
				<view class="w-650 fweight m-top-25">展会日程：</view>
				<view class="fs-30 m-top-25"  v-if="activies[2].content">
					<!-- <rich-text :nodes="activies[2].content"></rich-text> -->
					<uParse  :content="activies[2].content" ></uParse>
				</view>
				<view class="w-650 fweight m-top-25">展出范围：</view>
				<view class="fs-30 m-top-25"  v-if="activies[3].content">
					<!-- <rich-text :nodes="activies[3].content"></rich-text> -->
					<uParse  :content="activies[3].content" ></uParse>
				</view>
				<view class="w-650 fweight m-top-25">展出价格：</view>
				<view class="fs-30 m-top-25" v-if="activies[4].content">
					<!-- <rich-text :nodes="activies[4].content"></rich-text> -->
					<uParse  :content="activies[4].content" ></uParse>
				</view>
		</view>
	</view>
</template>

<script>
	
	import uParse from '@/components/u-parse/u-parse.vue'
	
	export default {
		  components: {
		    uParse
		  },
		data() {
			return {
				miniappcasummary:{},
				activies:['','','','',''],
				bannerList:[],
				BASE_IMG:"",
				
				
				
				// 点赞效果
				thumbsUpContext: null,
				thumbsUpTimer: 0,
				thumbsUpQueue: {},
				thumbsUpWidth: 100,
				thumbsUpHeight: 300,
			}
		},
		onLoad() {
			this.miniappcasummaryGet();
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getBanners();
		},
		methods: {
			// 获取轮播图
			getBanners(){
					var data = {
						exhId:uni.getStorageSync("nowExhId"),
						'type':'2'
					}
					this.$axios
						.axios('GET', this.$paths.miniappcarousel, data)
						.then(res => {
							if (res.code == 200) {
								this.bannerList=res.data;
							} else {
								this.$tools.showToast(res.msg);
							}
						})
						.catch(err => {});
			},
			// 获取展会概况
			miniappcasummaryGet(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),//1是环保展
				}
				this.$axios
					.axios('GET', this.$paths.miniappcasummary, data)
					.then(res => {
						if (res.code == 200) {
							var activies=this.activies;
							var miniappcasummary=res.data;
							for(var a=0;a<miniappcasummary.length;a++){
								activies[miniappcasummary[a].type-1]=miniappcasummary[a];
								activies[miniappcasummary[a].type-1].content =  activies[miniappcasummary[a].type-1].content.replace(/\<img/gi, '<img style="width:100%" ')
							}
							this.miniappcasummary=res.data
							this.activies=activies;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			}
		}
	}
</script>

<style>
@import url("exhibition_survey.css");
</style>
