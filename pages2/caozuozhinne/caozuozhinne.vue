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
			this.getLianxiwomen()
		},
		methods: {
			getLianxiwomen(type){
				var data = {
					'exhType':uni.getStorageSync("exType")
				}
				this.$axios
					.axios('POST', this.$paths.instruction, data)
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
