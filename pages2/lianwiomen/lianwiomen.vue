<template>
	<view>
		<view class="p-all-20">
			<uParse v-if="info.content" :content="info.content"></uParse>
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
				info:{}
			}
		},
		onLoad(options) {
			if(options.type==1){
				uni.setNavigationBarTitle({
					title:"联系我们"
				})
			}else if(options.type==2){
				uni.setNavigationBarTitle({
					title:"行业交流群"
				})
			}else if(options.type==3){
				uni.setNavigationBarTitle({
					title:"操作指南"
				})
			}
			this.getLianxiwomen(options.type);
		},
		methods: {
			getLianxiwomen(type){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),//1是环保展
					'type':type
				}
				this.$axios
					.axios('POST', this.$paths.custcareminiapp, data)
					.then(res => {
						if (res.code == 200) {
							this.info=res.data;
							this.info.content =  this.info.content.replace(/\<img/gi, '<img style="width:100%" ')
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

</style>
