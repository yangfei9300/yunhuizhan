// 项目域名
// export const BASE_URL = 'http://tangyishijia.huizukeji.cn:81/zhihui'   
// // export const BASE_URL = 'http://192.168.0.100:8080/api'

   // 测试
// export const BASE_URL = 'http://47.104.166.115:9001'
// export const BASE_URL_ZLF = 'http://47.104.166.115:9004'
// export const BASE_IMG = 'http://47.104.166.115:9001'
// export const BASE_VIDEO = 'http://47.104.166.115:9004'

// 测试
// export const BASE_URL = 'http://192.168.0.17:9001'
// export const BASE_URL_ZLF = 'http://192.168.0.17:9004'
// export const BASE_IMG = 'http://192.168.0.17:9001'
// export const BASE_VIDEO = 'https://frd-yhc.oss-cn-hangzhou.aliyuncs.com'
   
// 正式 prod-api   
export const BASE_URL = 'https://shandongtibohui.zsyflive.com'  
export const BASE_URL_ZLF = 'https://frdzlfapi.zsyflive.com'
export const BASE_IMG = 'https://shandongtibohui.zsyflive.com'
export const BASE_VIDEO = 'https://frd-yhc.oss-cn-hangzhou.aliyuncs.com'  

//----------项目接口请求路径-----------  
// 获取当前展会ID
const miniapp =BASE_URL + '/platform/list/miniapp'
// 获取首页轮播图
const miniappcarousel =BASE_URL + '/event/carousel/miniapp' 
// 获取展会概况 
const miniappcasummary =BASE_URL + '/event/summary/miniapp' 
// 获取富文本
const mimniappcenter =BASE_URL + '/event/center/mimniapp' 
// 参展商报名
const exhibitorEnroll =BASE_URL + '/enroll/exhibitorEnroll' 
// 观众界面的文章 
const visitorminiapp =BASE_URL + '/event/visitor/miniapp' 
// 观众报名
const visitorEnroll =BASE_URL + '/enroll/visitorEnroll' 
// 获取个人信息   
const wxUserminiapp =BASE_URL + '/platform/wxUser/miniapp/' 
// 展会资讯  /dev-api/event/info/miniapp
const miniappeventinfo =BASE_URL + '/event/info/miniapp' 
// 展会详情
const eventinfo =BASE_URL + '/event/info' 
// 展会服务
const serviceminiapp =BASE_URL + '/event/service/miniapp' 
// 展会服务
const eventhotel =BASE_URL + '/event/hotel/' 
// 展会资讯  
const infominiapp =BASE_URL + '/miniapp/info' 
// 展会立体图
const stereogramListminiapp =BASE_URL + '/miniapp/stereogramList' 
// 获取展位立体图详情
const stereogramminiapp =BASE_URL + '/miniapp/stereogram' 
// 获取展位立体图详情
const custcareminiapp =BASE_URL + '/miniapp/custcare' 
// 获取某次图片浏览次数
const liveimagesumViews =BASE_URL + '/miniapp/liveimage/sumViews' 
// 图片直播列表
const liveimageminiapp =BASE_URL + '/miniapp/liveimage/List' 
// 图片直播列表
const liveimageminiappaa =BASE_URL + '/miniapp/liveimage' 
// 点赞
const miniappliveimagelike =BASE_URL + '/miniapp/liveimage/like' 
const userlikelistliveimage =BASE_URL + '/miniapp/liveimage/userlikelist' 
// 热门图片
const liveimagelistlike =BASE_URL + '/miniapp/liveimage/list/like' 
// 视频直播  
const miniappadVideo =BASE_URL + '/miniapp/adVideo' 
// 注册个人信息 /miniapp/wxuser/register
const registerwxuser =BASE_URL + '/miniapp/wxuser/register' 
// 查询同期活动 
const concurrentminiapp =BASE_URL + '/miniapp/concurrent' 
// 获取活动时间列表  
const activityminiapp =BASE_URL + '/miniapp/activity' 
// 企业入住  
const examinecompany =BASE_URL + '/miniapp/company/examine' 
// 上传图片 
const miniappupload =BASE_URL + '/miniapp/upload' 

// 上传图片直播图片 
const miniappuploadOSS =BASE_URL + '/miniapp/uploadOSS' 

// 活动列表  
const activitybydate =BASE_URL + '/miniapp/activity/date' 
const activitybynodate =BASE_URL + '/miniapp/activity/nodate' 


// 活动详情  
const activitybyid =BASE_URL + '/miniapp/activity/byid' 
// 活动报名  
const avtivityenroll =BASE_URL + '/miniapp/avtivity/enroll' 
// 供需发布流程  
const supplyandneedprocess =BASE_URL + '/miniapp/supplyandneed/process' 
// 工序发布分类
const classification =BASE_URL + '/miniapp/classification' 
// 工序发布分类
const supplyandneedlist =BASE_URL + '/miniapp/supplyandneed/list' 
// 供需详情
const supplyandneedbyid =BASE_URL + '/miniapp/supplyandneed/byid' 
// 供需详情
const supplyandneedmark =BASE_URL + '/miniapp/supplyandneed/mark' 
// 首页企业推荐
const companyhot =BASE_URL + '/miniapp/company/hot' 
// 企业详情  
const companybyid =BASE_URL + '/miniapp/company/byid' 
// 获取企业轮播图
const companycarousel =BASE_URL + '/miniapp/company/carousel' 
// 浏览企业用户列表 
const visitcompany =BASE_URL + '/miniapp/company/visit' 
// 点赞企业
const companylike =BASE_URL + '/miniapp/company/like' 
// 收藏企业 
const companymark =BASE_URL + '/miniapp/company/mark' 
// 企业分类  
const companytypeminiapp =BASE_URL + '/miniapp/type/company' 
// 获取企业列表
const companylist =BASE_URL + '/miniapp/company/list' 
// 获取企业产品列表 
const productlistminiapp =BASE_URL + '/miniapp/product/list' 
// 商品详情
const productbyid =BASE_URL + '/miniapp/product/byid' 
// 收藏商品  
const markproduct =BASE_URL + '/miniapp/product/mark' 
// 获取同学  
const wxusermark=BASE_URL + '/miniapp/wxuser/mark' 
// 获取操作手册  
const instruction=BASE_URL + '/miniapp/type/instruction' 
// 我发布的求购 
const supplypublish=BASE_URL + '/miniapp/wxuser/supply/publish' 
// 获取上传的图片 
const liveimagecreateby=BASE_URL + '/miniapp/liveimage/createby' 
// 删除图片 

const deleteliveimage=BASE_URL + '/miniapp/liveimage/delete' 
// 图片直播发布  
const liveimageupload=BASE_URL + '/miniapp/liveimage/upload' 
// 获取直播列表  getKefuList
const custcareminiappcustcare=BASE_URL + '/miniapp/custcare' 
// 获取用户排名  
const wxuserranking=BASE_URL + '/miniapp/wxuser/ranking' 
// 参观展会核销  
const verificationvisit=BASE_URL + '/miniapp/verification/visit' 
// 搜索展会（企业或者商品）
const miniappsearch=BASE_URL + '/miniapp/search' 
// 获取商品列表
const producttype=BASE_URL + '/miniapp/product/type' 
// 企业现场图片 
const companyscene=BASE_URL + '/miniapp/company/scene' 
// 获取手机号 
const getphonewxphone=BASE_URL + '/miniapp/getphone/wxphone' 
// 递名片
const companydeliver=BASE_URL + '/miniapp/company/deliver' 
// 询价
const productdeliver=BASE_URL + '/miniapp/product/deliver' 
// 发布供需
const supplyandneedpublish=BASE_URL + '/miniapp/supplyandneed/publish' 
// 上传微信图片 
const uploadPicwxminiapp=BASE_URL + '/miniapp/wx/uploadPic' 
// 提交直播申请 
const apilivecreateRoom=BASE_URL + '/miniapp/api/live/createRoom' 
// 创建直播间 
const createliveminiapp=BASE_URL + '/miniapp/live/create'
// 获取直播列表
const room_listwx=BASE_URL + '/miniapp/wx/room_list'
// 获取wide直播间 
const myLiveRoom=BASE_URL + '/miniapp/wx/myLiveRoom'
// 获取开幕式  
const concurrentlive=BASE_URL + '/miniapp/concurrent/live'
// 获取回放 
const concurrentplayback=BASE_URL + '/miniapp/concurrent/playback'
// 通告栏  
const miniappnoticelist=BASE_URL + '/miniapp/notice/list'
// 获取获取展会信息
const enrollconfig=BASE_URL + '/miniapp/enroll/config'
// 获取当前展会问卷  
const miniappenrollques=BASE_URL + '/miniapp/enroll/ques'
// 添加报名信息
const enrollvisitorEnroll=BASE_URL + '/miniapp/enroll/visitorEnroll'


// 判断是否报过名 
const enrollenrollCheck=BASE_URL + '/miniapp/enroll/enrollCheck'
// 问卷调查回收
const enrollsaveAns=BASE_URL + '/miniapp/enroll/saveAns'
// 问卷调查  
const exhtypeminiapp=BASE_URL + '/miniapp/exhtype'
// 偏审  /miniapp/demo
const demominiapp=BASE_URL + '/miniapp/demo'

// 验证验证码是否正确
const getphonebinding=BASE_URL + '/miniapp/getphone/binding'
// 验证验证码  
const getphoneupdate=BASE_URL + '/miniapp/getphone/update'
// 获取
const examinelog=BASE_URL + '/miniapp/company/examine/log'
// 新闻列表
const miniappnewslist=BASE_URL + '/miniapp/news/list'
// 添加访问次数
const visitorview=BASE_URL + '/miniapp/visitor/view'
// 获取分享信息  
const visitorcountopenid=BASE_URL + '/miniapp/visitor/count'
// 获取分享信息  
const memberwxcode=BASE_URL + '/api/member/wxcode'
// 
const streamlist=BASE_URL + '/api/stream/list'
// 获取直播详情  
const streamidapi=BASE_URL + '/api/stream/id'
// 获取人气值 
const streamdata=BASE_URL + '/api/stream/data'
// 点赞数量提交 
const likesstreamapi=BASE_URL + '/api/stream/likes'
// 获取表情
const streamexpression=BASE_URL + '/api/stream/expression'
// 获取
const streamstreamAd=BASE_URL + '/api/stream/streamAd'
// 获取图片直播分类
const classificationexhId=BASE_URL + '/miniapp/liveimage/classification'

// 给图片直播图片添加浏览量
const viewliveimageminiapp=BASE_URL + '/miniapp/liveimage/view'



const updatewxuser=BASE_URL + '/miniapp/wxuser/update'

// 根据unionid查询观众信息
const infovisitor=BASE_URL_ZLF + '/api/visitor/info'
// 根据unionid新建观众信息  
const insertinfovisitor=BASE_URL_ZLF + '/api/visitor/info/insert'
// 获取调查问卷  
const quesvisitorapi=BASE_URL_ZLF + '/api/visitor/ques'
// 保存用户问卷
const ansvisitorapi=BASE_URL_ZLF + '/api/visitor/ans'
//  4.报名
const enrollvisitorapi=BASE_URL_ZLF + '/api/visitor/enroll'
// 5.创建展团
const creategroupvisitor=BASE_URL_ZLF + '/api/visitor/group/create'
// 是否报名  
const enrollcheckvisitor=BASE_URL_ZLF + '/api/visitor/check/enroll'
// 是否存在战团 
const existgroupvisitor=BASE_URL_ZLF + '/api/visitor/group/exist'
// 核销接口
const visitvisitorapi=BASE_URL_ZLF + '/api/visitor/visit'
// 判断是否打卷
const whetheransapi=BASE_URL_ZLF + '/api/visitor/ans/whether'
// 获取我的团员
const peoplegroupvisitor=BASE_URL_ZLF + '/api/visitor/group/people'
// 获取职务
const standard_post=BASE_URL_ZLF + '/system/dict/data/type/standard_post'
// 获取部门
const standard_department=BASE_URL_ZLF + '/system/dict/data/type/standard_department'
// 获取视频号直播  
const channelslive=BASE_URL + '/api/channels/live'



// 5.邀请列表
const referrerlist=BASE_URL_ZLF + '/api/visitor/referrer/list'
// 5.到场人数
const referrerCountarrive=BASE_URL_ZLF + '/api/visitor/referrerCount/arrive'
// 查询报名展会的信息）（不是注册信息）
const enrollinfovisitor=BASE_URL_ZLF + '/api/visitor/info/enroll'
// 获取邀请奖励金额
const moneyreferrerCount=BASE_URL_ZLF + '/api/visitor/referrerCount/money'
// 获取提现记录
const logwithdrawal=BASE_URL_ZLF + '/api/visitor/withdrawal/log'
// 提交提现申请 
const submitwithdrawal=BASE_URL_ZLF + '/api/visitor/withdrawal/submit'
// 加密接口短信
const getphonesendmsgE=BASE_URL + '/miniapp/getphone/sendmsgE'
// 发短信  
const getphonesendmsg=BASE_URL + '/miniapp/getphone/sendmsg'



 export default {
	 getphonesendmsgE,
	 logwithdrawal,submitwithdrawal,
	 referrerlist,referrerCountarrive,enrollinfovisitor,
	 channelslive,moneyreferrerCount,
	 classificationexhId,viewliveimageminiapp,
	 standard_post,standard_department,
	 peoplegroupvisitor,BASE_URL_ZLF,
	 existgroupvisitor,visitvisitorapi,whetheransapi,
	 enrollcheckvisitor,enrollvisitorapi,
	 infovisitor,insertinfovisitor,quesvisitorapi,ansvisitorapi,creategroupvisitor,
	 streamstreamAd,activitybynodate,updatewxuser,
	 streamdata,likesstreamapi,streamexpression,
	 memberwxcode,streamlist,streamidapi,
	 miniappuploadOSS,visitorview,visitorcountopenid,
getphoneupdate,examinelog,miniappnewslist,
	 BASE_VIDEO,getphonesendmsg,getphonebinding,
	 enrollsaveAns,exhtypeminiapp,demominiapp,
	 miniappenrollques,enrollenrollCheck,enrollvisitorEnroll,
	 concurrentlive,miniappnoticelist,enrollconfig,
	 apilivecreateRoom,createliveminiapp,room_listwx,myLiveRoom,
	 getphonewxphone,companydeliver,productdeliver,supplyandneedpublish,
	 verificationvisit,miniappsearch,producttype,uploadPicwxminiapp,
	 custcareminiappcustcare,wxuserranking,companyscene,concurrentplayback,
	 liveimagecreateby,deleteliveimage,liveimageupload,
	 markproduct,wxusermark,instruction,supplypublish,
	 companytypeminiapp,companylist,productlistminiapp,productbyid,
	 companybyid,companycarousel,visitcompany,companylike,companymark,
	 supplyandneedlist,supplyandneedbyid,supplyandneedmark,companyhot,
	 activitybydate,activitybyid,avtivityenroll,supplyandneedprocess,
	 activityminiapp,examinecompany,miniappupload,classification,
	 miniappadVideo,registerwxuser,concurrentminiapp,
	 miniappliveimagelike,userlikelistliveimage,liveimagelistlike,
	 stereogramminiapp,custcareminiapp,liveimagesumViews,liveimageminiapp,
	 eventhotel,infominiapp,stereogramListminiapp,liveimageminiappaa,
	 wxUserminiapp,miniappeventinfo,eventinfo,serviceminiapp,
	 exhibitorEnroll,visitorminiapp,visitorEnroll,
 	miniapp,miniappcarousel,BASE_IMG,miniappcasummary,mimniappcenter
 }
 