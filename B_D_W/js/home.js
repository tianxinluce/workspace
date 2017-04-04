;(function($){

	init()
	function init(){
			//ls.clear();
			if(!ls.getItem('city_name')){
				ls.setItem('city_name','北京')
				ls.setItem('city_id','28')
				$(".city_name1").text(ls.getItem('city_name'))
			}else{
				$(".city_name1").text(ls.getItem('city_name'))
			}

			
	
		goTorili1()
		//点击入住即离店时间,跳转页面，将时间传参到日历页
		goTorili()
	}

	function goTorili1(){
		$(".home_a").on("click",function(){
			//var url="hotelList.html?date_in="+$(".date_in").val()+"&date_out="+$(".date_out").val()+"";
			var url="hotelList.html";
			$(this).attr("href",url)
		})
	}

	//点击入住即离店时间,跳转页面，将时间传参到日历页
	function goTorili(){
		$(".goto").on("click",function(){
			var url="Ri_Li.html?date_in="+$('.date_in').val()+"&date_out="+$('.date_out').val()+"&call_url="+encodeURI('BAI_DA_WO.html')+"";
			$(this).attr("href",url)
			console.log(url);
		})
	}





})(Zepto)