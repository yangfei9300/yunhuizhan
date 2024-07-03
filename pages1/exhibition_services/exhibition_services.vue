<template>
	<view>
		<v-tabs v-model="current" :lineScale="lineScale" activeColor="#2E7EFF" lineColor="#2E7EFF" :scroll="false" :tabs="tabs" 
		@change="changeTab"></v-tabs>
		<view class="colonn center_center p-all-20 " v-if="current == 0">
			<block v-if="actiesInfo">
				<view style="width: 710rpx;">
					<!-- <rich-text :nodes="actiesInfo.content"></rich-text> -->
					<uParse v-if="actiesInfo.content" :content="actiesInfo.content" ></uParse>
				</view>
			</block>
			<block v-else><noList></noList></block>
		</view>

		<view class="colonn center_center p-all-20 " v-if="current == 1">
			<block v-if="actiesInfo">
				<view><uParse v-if="actiesInfo.content" :content="actiesInfo.content" ></uParse></view>
			</block>
			<block v-else><noList></noList></block>
		</view>
		<view class="colonn center_center " v-if="current == 2">
			<view class="roww allline p-all-25 border_bottom w-750" v-for="(item, index) in actiesInfo" @click="tohitelinfo(item)">
				<image class="jiudianuns m-right-15" mode="aspectFill" :src="item.hotelImage"></image>
				<view class="colonn rowsbl ">
					<view class="fweight w-510 txtShowLength">{{ item.hotelName }}</view>
					<view style="color: #999999;" class="fs-30 txtShowLength w-510">{{ item.place }}</view>
				</view>
				<view class="allline"></view>
			</view>
		</view>
		<view class="colonn center_center p-all-20" v-if="current == 3">
			<block v-if="actiesInfo">
				<view><uParse v-if="actiesInfo.content" :content="actiesInfo.content" ></uParse></view>
			</block>
			<block v-else><noList></noList></block>
		</view>
		<view class="colonn center_center p-all-20" v-if="current == 4">
			<block v-if="actiesInfo">
				<view><uParse v-if="actiesInfo.content" :content="actiesInfo.content" ></uParse></view>
			</block>
			<block v-else><noList></noList></block>
		</view>
	</view>
</template>

<script>
import uParse from '@/components/u-parse/u-parse.vue';
export default {
	components: {
		uParse
	},
	data() {
		return {
			current: 0,
			tabs: ['展馆现场服务', '交通', '酒店', '停车', '展馆信息'],
			lineScale: 0.2,
			actiesInfo: {}, //展会详情
			BASE_IMG: ''
		};
	},
	onLoad(options) {
		if (options.type) {
			this.current = parseInt(options.type);
			this.getServices(parseInt(options.type) + 1);
		} else {
			this.getServices(1);
		}
		this.BASE_IMG = this.$paths.BASE_IMG;
	},
	methods: {
		changeTab(index) {
			console.log('当前选中的项：' + index);
			this.current = index;
			this.getServices(index + 1);
		},
		tohitelinfo(item) {
			uni.navigateTo({
				url: '../hotelInfo/hotelInfo?id=' + item.hotelId
			});
		},
		getServices(type) {
			var data = {
				type: type, //1是环保展
				exhId: uni.getStorageSync('nowExhId')
			};
			this.$axios
				.axios('GET', this.$paths.serviceminiapp, data)
				.then(res => {
					if (res.code == 200) {
						if (res.data.length > 0) {
							if (type == 3) {
								this.actiesInfo = res.data;
								this.actiesInfo.content = this.actiesInfo.content.replace(/\<img/gi, '<img style="width:100%" ');
							} else {
								this.actiesInfo = res.data[0];
								this.actiesInfo.content = this.actiesInfo.content.replace(/\<img/gi, '<img style="width:100%" ');
							}
						} else {
							this.actiesInfo = null;
						}
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch(err => {});
		}
	}
};
</script>

<style>
@import url('exhibition_services.css');
</style>
