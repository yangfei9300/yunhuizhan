<template>
	<view>
		<v-tabs  v-model="current" activeColor="#007AFF" lineColor="#007AFF"  :scroll="false" :tabs="tabs" @change="changeTab"></v-tabs>
		
		<view class="colonn p-all-25">
			<view class="colonn background1 m-bottom-20 p-all-20"
			v-for="(item,index) in list"
			>
				<view class="fs-30"><block v-if="current==0">供应</block>
					<block v-if="current==1">采购</block>：{{item.content}}</view>
				<view class="roww bottom"> 
					<view class="huanhang w-550">
						<view class="biaoiqianss" v-for="(item1,index1) in item.label">#{{item1}}</view>
					</view>
					<view class="xiangqingbtm"
					@click.stop="toInfo(item)"
					>详情</view>
				</view>
				<view class="roww fs-25 m-top-25" style="color: #999999;">
					<view class="roww">
						{{item.views}}浏览
					</view>
					<view class="roww">
						·{{item.marks?item.marks:0}}收藏
					</view>
					<view class="allline"></view>
					<view class="roww">  
						{{item.createTime}}
					</view>
					
				</view>
			</view>
			<view v-if="list.length<=0">
				<noList></noList>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				current: 0,
				tabs: [
				  '供应',
				  '采购',
				],
			}
		},
		onLoad() {
			this.getQiugou();
		},
		methods: {
			toInfo(item){
				uni.navigateTo({
					url:"/pages1/demand_procurement_info/demand_procurement_info?id="+item.id
				})
			},
			changeTab(index) {
			  console.log('当前选中的项：' + index)
			  this.current=index;
			  this.getQiugou();
			},
			
			getQiugou(){
				var data = {
					'openid':uni.getStorageSync("openid"),
					type:this.current+1
				}
				this.$axios
					.axios('POST', this.$paths.supplypublish, data)
					.then(res => {
						if (res.code == 200) {
							var xuqiuList=res.data;
							for(var a=0;a<xuqiuList.length;a++){
								xuqiuList[a].label=xuqiuList[a].label.split(",")
							}
							this.list=xuqiuList;
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
@import url("purchase_me.css");
</style>
