<template>
	<view>
		<view class="huanhang p-all-10 m-top-20">
			<view class="w-200 h-200 m-bottom-35 pore m-right-20 m-left-20"
			v-for="(item,index) in imgList"
			>
				<image mode="aspectFill" class="w-200 h-200" :src="item.url" style="background-color: #f5f5f5;"></image>
				<image src="../../static/sahncyhu.png" class="w-50 h-50 poab imagdel" 
				@click.stop="delImg(item,index)"
				></image>
			</view>
			<image class="w-200 h-200 m-bottom-35  m-right-20 m-left-20" @click.stop="selImg" src="../../static/shuangss.jpg"></image>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				BASE_IMG:"",
				imgList:[]
			}
		},
		onLoad() {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getImgList();
		},
		methods: {
			// 上传图片
			selImg(){
				var userInfo=uni.getStorageSync("userInfo")
				if(!userInfo){
					this.$tools.showToast("请先登录");
					return false;
				}
				uni.chooseImage({ 
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success:  (res)=> {
						if(res.tempFilePaths.length>0){
							this.uploadimg(res.tempFilePaths[0]);
						}
					}
				});
			},
			// 上传图片
			uploadimg(img){
				this.$axios
					.axiosUpload(this.$paths.miniappuploadOSS, img)
					.then(res => {
						if (res.code == 200) {
								this.liveimageupload(res.fileName);
						} else {
							this.$tools.showToast(res.msg);
						}   
					})   
					.catch(err => {});
			},
			liveimageupload(url){
				var data={
					 exhId:uni.getStorageSync("nowExhId"),
					 'url':url,
					 params:{openid:uni.getStorageSync("openid")}
				}
				this.$axios
					.axios('POST', this.$paths.liveimageupload,data)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast("上传成功");
							setTimeout(res=>{
								this.getImgList();
							},1000)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			
			delImgDate(index){
				var imgList=this.imgList;
				var list=[]
				for(var a=0;a<imgList.length;a++){
					if(a!=index){
						list.push(imgList[a]);
					}
				}
				this.imgList=list;
			},
			// 删除图片
			delImg(item,index){
				var data={
					  "imageId": item.imageId
				}
				this.$axios
					.axios('POST', this.$paths.deleteliveimage,data)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast("删除成功");
							setTimeout(res=>{
								this.delImgDate(index);
							},100)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 获取图片地址
			getImgList(){  
				var userInfo=uni.getStorageSync("userInfo")
				if(!userInfo){
					this.$tools.showToast("请先登录");
					return false;
				}
				var data={
					  "params": {
					      "openid" : uni.getStorageSync("openid")
					  }
				}
				this.$axios
					.axios('POST', this.$paths.liveimagecreateby,data)
					.then(res => {
						if (res.code == 200) {
							this.imgList=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
		}
	}
</script>

<style>
@import url("imgLive.css");
</style>
