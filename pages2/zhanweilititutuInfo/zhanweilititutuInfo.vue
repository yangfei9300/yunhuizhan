<template>
	<view>
		<image class="w-750 " @click="showimg(imgInfo.image)" 
		 :src="imgInfo.image+'?x-oss-process=image/auto-orient,1/resize,m_lfit,w_702/quality,q_46'" 
		 style="background-color: #f5f5f5;" mode="widthFix"></image>
		<view class="p-all-20">
			{{imgInfo.info}}
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				imgInfo:{},
				BASE_IMG:""
			}
		},
		onLoad(opotions) {	
			this.BASE_IMG=this.$paths.BASE_IMG;
			
			this.getInfo(opotions.id);
		},
		methods: {
			showimg(img){
					uni.previewImage({
							urls:[img],
							longPressActions: {
								itemList: ['发送给朋友', '保存图片', '收藏'],
								success: function(data) {
									console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
								},
								fail: function(err) {
									console.log(err.errMsg);
								}
							}
						});
			},
			getInfo(id){
					var data = {
						stereogramId:id,//1是环保展
					}
					this.$axios
						.axios('POST', this.$paths.stereogramminiapp, data)
						.then(res => {
							if (res.code == 200) {
								this.imgInfo=res.data;
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
@import url("zhanweilititutuInfo.css");
</style>
