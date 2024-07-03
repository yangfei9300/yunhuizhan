<template>
	<view>
		<v-tabs  v-model="current" activeColor="#2E7EFF" lineColor="#2E7EFF"  :scroll="false" :tabs="tabs" @change="changeTab"></v-tabs>
		<view class="colonn m-all-24"
		@click.stop="showvideo(item)"
		v-for="(item,index) in videoList"
		>
			<view class="roww w-702 h-344 pore">
					<image class="viedoimg" mode="aspectFill"
					 :src="videoList[0].image" ></image>
					<view class="poab w-702 h-344 videozhezhao" 
					>
						<image src="../../static/bofangsanjia.png"
						class="w-66  m-top-122 m-left-319 h-80"
						></image>
						<view class="roww shijnatxt ">
							<view class="w-500 fs-30 txtShowLength">
								{{item.title}}
							</view>
							<view class="allline"></view>
						</view>
					</view>
			</view>  
		</view>
		<block v-if="videoList.length<=0">
			<noList></noList>
		</block>
		<view class="huuibeijing colonn center_center" style="z-index: 1000;" v-show="videoAlert">
			<video :src="BASE_VIDEO+selVideoInfo.url"
			class="w-700 h-400"
			 @waiting="waiting"
			 @loadeddata="loadeddata"
			 @loadstart="loadstart"
			 @loadedmetadata="loadedmetadata"
			 id="video1" :poster="selVideoInfo.image" 
			></video>
			<image @click="closeAlertvideo" src="/static/guanbsss.png" class="w-80 h-80 m-top-50" style="z-index: 1001;"></image>
		</view>
		
	
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				tabs: [
				  '展会宣传片',
				  '企业宣传片',
				  '产品宣传片',
				  // '专题宣传片',
				],
				videoList:[],
				BASE_IMG:"",
				videoAlert:false,
				selVideoInfo:{},
				BASE_VIDEO:"",
				
				videoContext:null,
			}
		},
		onLoad() {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.BASE_VIDEO=this.$paths.BASE_VIDEO;
			this.getVideo();
		},   
		onReady() {
			this.videoContext = uni.createVideoContext('video1',this)
		},
		methods: {
			
			waiting(res){
				console.log("出现加载",res);
			},
			loadeddata(res){
				console.log("视频资源开始加载时触发",res);
			},
			loadstart(res){
				console.log("开始加载数据",res);   
			},
			loadedmetadata(res){
				console.log("视频元数据加载完成时触发",res);
				if(this.videoAlert){
					this.videoContext.play();
				}  
			},       
			
			showvideo(item){
				this.videoAlert=true;
				this.selVideoInfo=item;
				
				this.videoAlert=true;
				this.videoContext.play();
			},
			closeAlertvideo(){
				this.videoAlert=false;
				this.videoContext.pause();
			},
			changeTab(index) {
			  this.current=index;
			this.getVideo();
			},
			getVideo(){
				var data = {
					exhId:uni.getStorageSync("nowExhId"),
					'type':this.current+1
				}
				this.$axios
					.axios('POSt', this.$paths.miniappadVideo, data)
					.then(res => {
						if (res.code == 200) {
							this.videoList=res.data;
							if(this.videoList>0){
								this.seselVideoInfo=this.videoList[0];						}
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
@import url("videosList.css");
</style>
