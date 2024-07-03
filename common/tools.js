var tools = {
	
	getLogos(type){
		var logos=[
			'https://shandongtibohui.zsyflive.com/profile/upload/2022/08/03/6fbca66972154d56b163daab0df6fb87_20220803092533A004.jpg',
			'https://shandongtibohui.zsyflive.com/profile/upload/2022/08/03/fe6bbb03f29647538c83eead4613394d_20220803092610A005.jpg',
			'https://shandongtibohui.zsyflive.com/profile/upload/2022/08/03/16b9760cd7064e6aa756604b7202d396_20220803092628A006.png',
			// 'https://shandongtibohui.zsyflive.com/profile/upload/2022/08/03/cc7fcbcb6483444aa73501d3a22f3c69_20220803092643A007.png',
			'https://shandongtibohui.zsyflive.com/profile/upload/2022/08/03/6fcb2d453732cd5107ae46c86d60970.png',
			'https://shandongtibohui.zsyflive.com/profile/upload/2022/08/03/53fb551aff36adf75f4b58773d7062a.jpg',
			'https://shandongtibohui.zsyflive.com/profile/upload/2022/08/03/04f7e815a9eb25409e8a24090a436cf.jpg',//菏泽
			'https://shandongtibohui.zsyflive.com/profile/upload/2022/08/03/5b7a91c9080c8042574c9ec8763888d.png',//叶集
			'https://shandongtibohui.zsyflive.com/profile/upload/2022/08/03/26c22cfc12cdf57827baf0cf50872bd.png'
		];
		if(type==1){
			return logos[0];
		}
		if(type==2){
			return logos[1];
		}
		if(type==3){
			return logos[2];
		}
		if(type==4){
			return logos[3];
		}
		if(type==7){
			return logos[4];
		}
		if(type==9){
			return logos[5];
		}
		if(type==8){
			return logos[6];
		}
		if(type==5){
			return logos[7];   
		}
	},
	
	numFormat(num) {
	    if(num >= 10000) {
	        num = Math.round(num/1000)/10 + 'W';
	    } else if (num >= 1000) {
	        num = Math.round(num/100)/10 + 'K';
	    }
	    return num;
	},
	
	//解决富文本图片溢出
	formatRichText(html) {
			let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
				match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
				match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
				match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
				return match;
			});
			newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
				match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
				return match;
			});
			newContent = newContent.replace(/<br[^>]*\/>/gi, '');
			newContent = newContent.replace(/\<img/gi,
				'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
			return newContent;
		},
	
	fenzulist(list,count){
		console.log("计算分组")
		var count1=list.length/count;
		if(count1-parseInt(count1)>0){
			count1=count1+1;
			count1=parseInt(count1)
		}
		var result = [];
		for(var i=0;i<list.length;i+=count){
		    result.push(list.slice(i,i+count));
		}
		console.log("几个",result);
		return result;
	},
	
	islogin(){
		var userInfo=uni.getStorageSync("userInfo");
		if(!userInfo){
			// this.showToast("请先登录");
			// setTimeout(res=>{
				uni.showModal({
					title: '提示',
					content: '请先登录',
					success:  (res)=> {
						if (res.confirm) {
							uni.switchTab({
								url:"../../pages/wode/wode"
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			// },1000)
			return false;
		}
		if(userInfo.phonenum==""){
			// this.$tools.showToast("请授权手机号");
			// setTimeout(res=>{
			// 	uni.switchTab({
			// 		url:"../../pages/wode/wode"
			// 	})
			// },1000)
			uni.showModal({
				title: '提示',
				content: '请授权手机号',
				success:  (res)=> {
					if (res.confirm) {
						uni.switchTab({
							url:"../../pages/wode/wode"
						})
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
			return false;
		}
		return true;
	},
	getKaishijieshu(){
		var nowDate = new Date();
		var cloneNowDate = new Date();
		var fullYear = nowDate.getFullYear();
		var month = nowDate.getMonth() + 1; // getMonth 方法返回 0-11，代表1-12月
		var endOfMonth = new Date(fullYear, month, 0).getDate(); // 获取本月最后一天
		function getFullDate(targetDate) {
		        var D, y, m, d;
		        if (targetDate) {
		            D = new Date(targetDate);
		            y = D.getFullYear();
		            m = D.getMonth() + 1;
		            d = D.getDate();
		        } else {
		            y = fullYear;
		            m = month;
		            d = date;
		        }
		        m = m > 9 ? m : '0' + m;
		        d = d > 9 ? d : '0' + d;
		        return y + '-' + m + '-' + d;
		    };
		var endDate = getFullDate(cloneNowDate.setDate(endOfMonth));//当月最后一天
		var starDate = getFullDate(cloneNowDate.setDate(1));//当月第一天
		console.log(starDate)
		console.log(endDate)
	},
	// 验证手机号
	isphone(phone) {
		if (!(/^1[23456789]\d{9}$/.test(phone))) {
			return false;
		}
		return true;
	},
	isEmail(email) {
		if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
			return true;
		else
			return false;
	},
	//获取订单编号
	getOrderNumber() {
		var timestamp = Date.parse(new Date());
		var Range = 100 - 1;
		var Rand = Math.random();
		return timestamp + (1 + Math.round(Rand * Range));
	},
	//获取随机数
	getSuiji() {
		var Range = Max - Min;
		var Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	},
	//轻提示
	showToast(txt) {
		uni.showToast({
			title: txt,
			'icon': 'none'

		})
	},
	//计算多长时间前
	getDateDiff(dateTimeStamp) {
		var minute = 1000 * 60;
		var hour = minute * 60;
		var day = hour * 24;
		var halfamonth = day * 15;
		var month = day * 30;
		var year = day * 365;
		var now = new Date().getTime();
		var diffValue = now - dateTimeStamp;
		if (diffValue < 0) {
			return;
		}
		var yearC = diffValue / year;
		var monthC = diffValue / month;
		var weekC = diffValue / (7 * day);
		var dayC = diffValue / day;
		var hourC = diffValue / hour;
		var minC = diffValue / minute;
		if (yearC >= 1) {
			result = "" + parseInt(yearC) + "年前";
		}
		if (monthC >= 1) {
			result = "" + parseInt(monthC) + "月前";
		} else if (weekC >= 1) {
			result = "" + parseInt(weekC) + "周前";
		} else if (dayC >= 1) {
			result = "" + parseInt(dayC) + "天前";
		} else if (hourC >= 1) {
			result = "" + parseInt(hourC) + "小时前";
		} else if (minC >= 1) {
			result = "" + parseInt(minC) + "分钟前";
		} else
			result = "刚刚";
		return result;
	},
	timestampToTime(timestamp) {
		var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		var Y = date.getFullYear() + '-';
		var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		var D = (date.getDate()<10?'0'+date.getDate():date.getDate()) + ' ';
		var h = (date.getHours()<10?'0'+date.getHours():date.getHours()) + ':';
		var m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) + ':';
		var s = (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds());
		return Y+M+D+h+m+s;
	},
	
	/**判断是否是手机号**/
	isPhoneNumber(tel) {
	    var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
	    return reg.test(tel);
	},
	getteaZhuanTime(time){
		var date = new Date(time);
		    // 有三种方式获取  
		    var time1 = date.getTime();
		console.log("转时间戳2",time1)
			return time1;
	}
}

//将时间戳转换成正常时间格式
export default tools;
