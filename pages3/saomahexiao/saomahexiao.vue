<template>
	<view>
		<view class="roww rowsb center_center p-all-20 border_bottom">
			<picker :range="exList" range-key="exhName" @change="exChange">
				<view class="w-600 txtShowLength fs-30 fw-b">{{nowInfo.exhName}}</view>
			</picker>
			
			<view class="saomaanniu" @click.stop="saomaClick">扫码</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				'nowInfo':{},//当前展会详情
				exList:[],
				
			}
		},
		onLoad() {
			this.getZhanhui();
		},
		methods: {
			exChange(res){
				console.log(res)
				this.nowInfo=this.exList[res.detail.value];
			},
			saomaClick(){
				wx.scanCode({
				  success :(res)=> {
				    console.log(res)
					this.toSubmit(res.result);
				  },
				  fail:(res)=> {
				  	this.$tools.showToast("扫码失败");
				  }
				})
			},
			toSubmit(unionid){
				var userInfo=uni.getStorageSync("userInfo")
				var data={
					  exhId:uni.getStorageSync("nowExhId"),
					  params:{
						  'userId':userInfo.unionid,
						  'unionid':unionid
					  },
				}
				this.$axios
					.axios('POST', this.$paths.visitvisitorapi, data)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast(res.msg);
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			getZhanhui(){
				var data = {
					type:uni.getStorageSync("exType"),//1是环保展
				}
				this.$axios
					.axios('GET', this.$paths.miniapp, data)
					.then(res => {
						if (res.code == 200) {
							if(res.data.length>0){
								this.exList=res.data;
								this.nowInfo=res.data[0];
							}else{
								this.$tools.showToast("目前暂无展会");
							}
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
@import url("saomahexiao.css");
</style>
