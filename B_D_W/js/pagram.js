
	
	//获取地址栏的参数
var ls=window.localStorage;
	
function getPagram(){

	var par=location.search.substr(1) //date_in=2016-06-22&date_out=2016-06-25
	if(!par) return false;
	var arr=par.split("&"), //["date_in=2016-06-22", "date_out=2016-06-25"]
		obj={};
	$.each(arr,function(index,ele){
		var aEle=ele.split("=")
		obj[aEle[0]]=aEle[1]  //Object {date_in: "2016-06-22", date_out: "2016-06-25"}
	})
	
	return obj
	
}
//去零
function rZero(str){
	//方法一
	
	if(str.charAt(0)=="0"){
		
		return str.substr(1)
	}else{
		return str
	}

	//方法二
	//return str*1
}
//补零
	function addZero(num){
		if(num<10){
			return "0"+num
		}else{
			return num
		}
	}



