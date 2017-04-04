

/*--------------------酒店详情页-----------------*/
init()
function init(){
	detailNav()//导航
	detailTime()//设置日期

}

function detailNav(){
	$(".detail_nav").on("tap","p",function(){
		$(this).addClass('detail_nav_on').siblings().removeClass('detail_nav_on')
		if($(this).index()==0){
		
			$(".detail_tab").css({
				'-webkit-transform':'translateX(0)',
				'-webkit-transition':'transform 0.5s'
			})
			
		}
		if($(this).index()==1){
			$(".detail_tab").css({
				'-webkit-transform':'translateX(-50%)',
				'-webkit-transition':'transform 0.5s'
			})
		}
	})

/*展开*/
	var nav=false;
	$('.detail_unfold').on('tap',function(){
		if(!nav){
			$('.detail_box').css({
			'height':'7rem',
			'-webkit-transition':'height .8s'
			})
			$(this).text("合起剩余全部")
			nav=true
		}else{
			$('.detail_box').css({
			'height':'4.2rem',
			'-webkit-transition':'height .8s'
			})
			$(this).text("展开剩余全部")
			nav=false
		}
		
	})
	//点击预定  弹出框
	$(".detail_one").on("tap","span",function(){
		if($(this).hasClass('detail_one_on'))return false;
		var str=''
			str+='<div class="detail_hei"></div>'
			$('body').append($(str))
		$('.detail_schedule').css({
			'bottom':'0',
			'-webkit-transition':'0.8s'
		})
	})
	//点击 X
	$('.schedule_box1').on('tap','.schedule_cha',function(){
			$('.detail_schedule').css({
				'bottom':'-100%',
				'-webkit-transition':'0.8s'
			})
			$('.detail_hei').remove()
	})

	//点击a跳转订单详情
	$('.detail_reserve a').attr('href','indent.html')
	
}
//设置日期
function detailTime(){

		$(".detail_ri").on("click",function(){
			
			var url="Ri_Li.html?date_in="+$(".date_in").val()+"&date_out="+$(".date_out").val()+"&call_url="+encodeURI('detail.html')+"";
			$(this).attr("href",url)
		})
	if(!ls.getItem("inTime")){
				var inTime=$('.date_in').val()
				var outTime=$('.outTime').val()
				ls.setItem('inTime',inTime)
				ls.setItem('outTime',outTime)
		}else{
				var inTime=ls.getItem("inTime"),
					outTime=ls.getItem("outTime");
		}
			$(".date_in").val(inTime)//输入到页面标签中
			$(".date_out").val(outTime)
}