;(function($){
	init()
	function init(){
		//调用日历 生成日历
		 $("#main").rili()
		//获取地址栏参数
		var par=getPagram();
		//if(!par) return false;
		//把参数从年月日单独取出来
		var _inTime=par.date_in.split("-"),//console.log(_inTime)
			_iny=_inTime[0],
			_inm=rZero(_inTime[1]),
			_inday=rZero(_inTime[2]);
		var _outTime=par.date_out.split("-"),//console.log(_inTime)
			_outy=_outTime[0],
			_outm=rZero(_outTime[1]),
			_outday=rZero(_outTime[2]);
		//首先是同月份的话
		//console.log(_outTime)
		//console.log(_outday)
		if(_inm==_outm){
			//方法一
			var	tds=$("#tab"+_inm).find("td").not(".prev,.over");
			/*	tds.each(function(){
					var d=$(this).find("small").text()
					if(d>=_inday && d<=_outday){
						$(this).addClass("ruzhu")
					}
				})*/
			tds.filter(function(){
				var d=$(this).find("small").text()
				if(d>=_inday*1 && d<=_outday*1){

					return $(this)
				}
			}).addClass("ruzhu")
		}else{
				
			var inTds=$("#tab"+_inm).find("td").not(".over,.prev"),
				outTds=$("#tab"+_outm).find("td").not(".prev");

			inTds.filter(function(){
				var d=$(this).find("small").text()*1
				//console.log(typeof(d))
					if(d>=_inday*1){
						return $(this)
					}
			}).addClass("ruzhu");
			outTds.filter(function(){
				var d=$(this).find("small").text()*1
				if(d<=_outday*1){
						return $(this)
					}
			}).addClass("ruzhu");
		}
				$(".ruzhu").first().append("<em>入住<em>")
				$(".ruzhu").last().append("<b>离店<b>")

		//用户可以点击日历选择入住和离店
		var isclick=false;
		$("#main").on("click","td",function(){
			if($(this).is(".over,.prev")) return false;
			if(!isclick){
				//却笑原有的样式,删除删除入住和离店标签 s
				$(".ruzhu").removeClass("ruzhu")//是同一天 return false;
				$("#main").find("em").remove();
				$("#main").find("b").remove();
				//给当前点击的td加入住
				$(this).addClass("ruzhu").append("<em>入住<em>")
				isclick=true
			}else{
				//判断入住和离店是否是同一天
				if($(this).is(".ruzhu")){return false};
				//获取入住日期
				var inTime=$(".ruzhu").find("small").text();
				$(this).addClass("ruzhu").append("<b>离店<b>")
				isclick=false
				var intd=$(".ruzhu").first(),
					inH=intd.parents("section").find("h2").text(),//2016年6月
					str=/[\u4e00-\u9fa5]/g,
					inH=inH.replace(str,"-"),//2016-6-
					iDay=intd.find("small").text(),
					//点击入住的时间 2016-06-23
					end=inH+addZero(iDay);//2016-6-今天
					
				var otd=$(".ruzhu").last(),
					oH=otd.parents("section").find("h2").text(),
					str=/[\u4e00-\u9fa5]/g,
					oH=oH.replace(str,"-"),
					oDay=otd.find("small").text(),
					//点击离店的时间 2016-06-27
					outd=oH+addZero(oDay);
					//入住时间-入店时间>15提示不能超15天 否则跳转业面
					var counter=(new Date(outd)*1-new Date(end)*1)/86400000
					if(counter>15){
						alert("房间预定天数不能超过15天")
						 return false;
					}
					console.log(outd)
					ls.setItem('inTime',end)
					ls.setItem('outTime',outd)
					//跳转页面,将入住时间离店时间作为参数传递到首页
					//location.href="BAI_DA_WO.html?date_in="+end+"&date_out="+outd+"";
					location.href=''+decodeURI(par.call_url)+''
					
					//星期传回去			            
					//$("#now").text(end)
					//$("#temp").text(oDay)
			}	
					
		})
	}




})(Zepto)