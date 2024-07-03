<template>
	<view>
		<view class="colonn">
			<view class="roww center_center border_bottom" v-for="(item,index) in groupUserList">
				<image class="headimg" :src="item.visitorAvatar"></image>
				<view class="colonn">
					<view class="fs-33">{{item.visitorName}}</view>
				</view>
				<view class="allline"></view>
				<view style="color: red;font-size: 30rpx;" v-if="item.status==0">未核销</view>
				<view  style="color: red;font-size: 30rpx;" v-if="item.status==1">已核销</view>    
				<view class="w-15"></view>
			</view>  
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options:{},
				groupUserList:[],
			}
		},
		onLoad(options) {
			this.options=options;
			this.getList();
		},
		methods: {
			getList(){
				var data={
					'groupId':this.options.groupId
				}
				this.$axios
					.axios('post', this.$paths.peoplegroupvisitor,data)
					.then(res => {
						if (res.code == 200) {
							this.groupUserList=res.data;
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
@import url(myGroupUserList.css);
</style>
