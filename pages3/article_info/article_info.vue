<template>
	<view>
		<web-view v-if="articleInfo.url!=''"  :src="articleInfo.url">
		</web-view>
		<view class="colonn center_center m-all-25" v-else>
			<view class="w-700 fw-b" style="text-align: center;">{{articleInfo.title}}</view>
			<view class="roww endend w-750 m-top-20 m-bottom-20">
				<view class="fs-25" style="color: #999999;">发布时间:{{articleInfo.createTime}}</view>
				<view class="w-50"></view>
			</view>
			<rich-text :nodes="articleInfo.content"
			></rich-text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articleInfo:"",
				options:{}
			}
		},
		onLoad(options) {
			this.options=options;
			this.getInfo();
			
			       
		},
		methods: {
			getInfo(){
				var data={
					'exhType':uni.getStorageSync("exType"),
					id:this.options.id
				} 
				this.$axios
					.axios('POSt', this.$paths.miniappnewslist, data)
					.then(res => {     
						if (res.code == 200) {
							if(res.data.length>0){
								this.articleInfo=res.data[0];
								uni.setNavigationBarTitle({
									// title:this.articleInfo.title
								})
							}else{
								uni.showModal({
									title:"提示",
									content:"文章不存在",
									success:(res)=> {
										uni.reLaunch({
											url:"/pages/index/index"
										})
									}
								})  
							}
							
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log("baossd",err)
					});
			},
		}
	}
</script>

<style>
@import url(article_info.css);
</style>
