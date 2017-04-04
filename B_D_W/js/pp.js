;(function($){
	init()
	function init(){
		//设置年月
		showDefauleTime()
		
		
	}
	//通过设置时间来设置入住，离开
	function showDefauleTime(){ 
		var par=getPagram();
		
		/*if(par){
				var inTime=par.date_in,
				outTime=par.date_out;
		}else{
				var inTime=setRuTime(),//入住时间 2016-6-23 38行return的值 调用setRuTime() 会返回一个类似2016-6-23 var inTime=。。。把他付给一个变量
				outTime=setRuTime(1);//离开时间 距离今天的天数
		}*/
		
		if(!ls.getItem("inTime")){
				var inTime=setRuTime(),//入住时间 2016-6-23 38行return的值 调用setRuTime() 会返回一个类似2016-6-23 var inTime=。。。把他付给一个变量
				outTime=setRuTime(1);//离开时间 距离今天的天数
				ls.setItem('inTime',inTime)
				ls.setItem('outTime',outTime)
		}else{
				var inTime=ls.getItem("inTime"),
					outTime=ls.getItem("outTime");
		}

				
			$(".date_in").val(inTime)//输入到页面标签中
			$(".date_out").val(outTime)

		//获取时差来判断今天,明天，后天
			//一天等于86400000秒
		var step=86400000,
			 today=new Date(),
			inDate=new Date(inTime),
			outDate=new Date(outTime);
			inlag=Math.abs(Math.ceil((inDate*1-today*1)/step))//入住时间减去就当前时间（new Date）如说是0 说明是今天入住，是1说明明天会入住2是后天入住 大于2判断是星期几入住 显示在input上
			outlag=Math.ceil((outDate*1-today*1)/step)//离店时间相对于今天；0说明为今天离店 1明天 2后天 2以上按照星期来显示
			var inText=change(inlag,inDate)
			var outText=change(outlag,outDate)
			//$("#now").text(inText)
			//$("#temp").text(outText)
			
			//计算天数
			$("#count").text(outlag-inlag)

	}
	//年月日时间  【重点转换时间】
	function setRuTime(n){
		var n=n || 0
		    today=new Date()
		var result=new Date(today.getFullYear(),today.getMonth(),today.getDate()+n)
		    return result.getFullYear()+"-"+addZero(result.getMonth()+1)+"-"+addZero(result.getDate())
	}

	
	//根据时差转为今，明，后
	function change(d,date){
		var arr=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
		switch(d){
			case 0:return "今天";break;
			case 1:return "明天";break;
			case 2:return "后天";break;
			default:return arr[date.getDay()]
		}
	}


	












})(Zepto)