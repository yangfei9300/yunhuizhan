<template>
	<view>
		<view class="colonn">
			
			<picker :range="['供应','求购']" @change="fabutype">
				<view class="roww center_center border_bottom fs-30" style="padding:25rpx 35rpx;" >
					<view class="fs-25 w-150">发布分类</view>
					 <view class="allline"></view>
					 <view v-if="form.type!=''">{{form.type==1?'供应':'求购'}}</view>
					 <view v-else>请选择</view>
					 <image src="../../static/home/youjiantou.png"
					 class="w-50 h-50"
					 ></image>
				</view>
			</picker>
			
			
			<picker :range="typeList" range-key="name" @change="typeChange">
				<view class="roww center_center border_bottom fs-30" style="padding:25rpx 35rpx;" >
					<view class="fs-25 w-150">供需分类</view>
					 <view class="allline"></view>
					 <view v-if="form.classification!=''">{{typeList[form.classification].name}}</view>
					 <view v-if="form.classification==''">请选择</view>
					 <image src="../../static/home/youjiantou.png"
					 class="w-50 h-50"
					 ></image>
				</view>
			</picker>
			
			<view class="roww center_center border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">采购内容</view>
				<input placeholder="请输入采购内容"
				 class="fs-25" 
					 v-model="form.content"
				 />
				 <view class="allline"></view>
				 <image src="../../static/home/youjiantou.png"
				 class="w-50 h-50"
				 ></image>
			</view>
			<view class="roww center_center " style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">添加标签</view>
				<input placeholder="请输入标签" @confirm="tagListClick"
				 class="fs-25"  v-model="tagName"
				 />
				 <view class="allline"></view>
				 <view class="fs-25" @click.stop="tagListClick">添加</view>
			</view>
			<view class="roww  border_bottom" v-if="tags.length>0" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150 yincang1">添加标签</view>
				<view class="huanhang w-500">
					<block v-for="(item,index) in tags">
						<view class="pore">
							<view class="iaoqian"
							@longpress="delTag(index,item)"
							>{{item}}</view>
							<!-- <image  class="w-50 h-50"
							style="position: absolute;top: 0rpx;right: 0rpx;background-color: #007AFF;"
							></image> -->
						</view>
						
					</block>
					
				</view>
			</view>
			
			<view class="roww endend p-all-25">
				<view class="fs-25" style="color: #999999;">长按标签可删除</view>
			</view>
			<view class="roww  border_bottom" style="padding:25rpx 35rpx;" >
				<view class="fs-25 w-150">需求描述</view>
				<textarea placeholder="请输入需求描述"
					 class="fs-25" 
					 maxlength="200"
					 auto-height 
					 v-model="form.represent"
					 style="min-height: 200rpx;"
				 />
				 <view class="allline"></view>
			</view>
		</view>
		
		
		<view class="dibuview roww rowsa center_center">
			<view class="quxiaoucs1"  @click.stop="toSubmit">提交</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tags:[],
				tagName:'',
				form:{
					'classification':'',
					'exhId':'',
					'type':'',//1供应2需求
					label:'',
					content:'',
					represent:'',
					'openid':''
				},
				typeList:[],
			}
		},
		onLoad() {
			this.getXijiefenlei();
		},
		methods: {   
			toSubmit(){
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){
					uni.showModal({
						title: '提示',
						content: '请先登录',
						success:  (res)=> {
							if (res.confirm) {
								uni.reLaunch({
									url:"/pages/wode/wode"
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
					return false;
				}
				
				if(!this.isSubmit()){
					return false;
				}
				var data=this.form;
				data.openid=uni.getStorageSync("openid");
				data.label=this.tags.join(",")
				data.exhType=uni.getStorageSync("exType")
				this.$axios  
					.axios('POST', this.$paths.supplyandneedpublish, data)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast("发布成功");
							setTimeout(res=>{
								uni.navigateBack({
									delta:1
								})
							},1000)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			isSubmit(){
				if(this.form.classification==""){
					this.$tools.showToast("请选择分类");
					return false;
				}
				this.form.classification=this.typeList[this.form.classification].id;
				if(this.form.content==""){
					this.$tools.showToast("请输入内容");
					return false;
				}
				if(this.form.classification==""){
					this.$tools.showToast("请选择分类");
					return false;
				}
				if(this.tags.length<=0){
					this.$tools.showToast("请至少插入一个标签");
					return false;
				}
				if(this.form.represent==""){
					this.$tools.showToast("请输入需求描述");
					return false;
				}
				return true;
			},
			// 获取细节分类
			getXijiefenlei(){
				var data={
					exhType:uni.getStorageSync("exType"),
				}
				this.$axios
					.axios('POST', this.$paths.classification, data)
					.then(res => {
						if (res.code == 200) {
							this.typeList=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			// 发布分类
			fabutype(res){
				this.form.type=parseInt(res.detail.value)+1
			},
			// 细节分类
			typeChange(res){
				this.form.classification=res.detail.value;
			},
			
			delTag(index){
				var tags=this.tags;
				var list=[];
				for(var a=0;a<tags.length;a++){
					if(index!=a){
						list.push(tags[a]);
					}
				}
				this.tags=list;
			},
			tagListClick(){
				if(this.tagName!=""){
					if(this.tags.length>=5){
						this.$tools.showToast("不能超过5个标签");
						return false;
					}
					this.tags.push(this.tagName)
					this.tagName="";
					
				}else{
					this.$tools.showToast("请输入标签内容");
				}
			}
		}
	}
</script>

<style>
@import url("purchase_fabu.css");
</style>
