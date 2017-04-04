
//hotelList渲染
var json1='';
	
init()

function init(){
		hotelListDOG()//遮罩动画
		hotelTime()//设置入住 离店时间
		hotelListAjax()//ajax请求并渲染内容
		hotelList()//底部效果
		$(".hotel_ri").on("click",function(){
			var url="Ri_Li.html?date_in="+$(".date_in").val()+"&date_out="+$(".date_out").val()+"&call_url="+encodeURI('hotelIist.html')+"";
			$(this).attr("href",url)
		})
}

function hotelListDOG(){
//-----创建遮罩
	var str='';
		str+='<div class="hotel_mark"><img src="../images/loading.png" alt="" / class="mark_img"></div>'
		$(".hotel_se").append($(str))
//---定时器删除遮罩和动画图片
		setTimeout(function(){
				$(".hotel_mark").remove()
		},800)
		
}
//---设置入住 离店时间
function hotelTime(){
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

	/*var param=getPagram()
		if(param){
			$(".date_in").val(param.date_in)
			$(".date_out").val(param.date_out)
		}*/
}

//---ajax请求并渲染内容
function hotelListAjax(){
	$.ajax({
		url:"../data/hotel.json",
		type:'post',
		async:false,
		dataType:'json',
		success:function(e){
			json1=e
			hotelListxuan()
		}
		,error:function(){
			alert("请求服务器失败")
		}
	})
	var myScroll;
	loaded ()
			function loaded () {
				myScroll = new IScroll('#hotel_se',{
					"click":true
				});
			}
	//设置a的地址detail.html
	$(".hotel_a").attr('href','detail.html')
}

function hotelListxuan(){
		//json1.result.hotel_list[0].name
		//公共的data
		var data=json1.result.hotel_list;
			//房间数
		//一进入页面就渲染全部
		priceone()//调用
		function priceone(){
					var str='';
					$.each(data,function(key,val){
						str+='<a href="" class="hotel_a">'+
									'<img src="'+val.image+'" alt="" class="hotel_img1">'+
									'<div class="hotel_box">'+
										'<h2>'+val.name+'</h2>'+
										'<p>'+
											'<span class="qi"><b>'+(val.low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
										'</p>'+
										'<p>'+val.stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
										'<p><span><strong>'+val.from+'</strong>km</span>'+val.addr+'</p>'+
									'</div>'+
								'</a>'
					})
				$("#hotel_se_box").html($(str))
				_return()
		}
		

/*--------------------------------点击按价格排序---------------------------------------*/
		$(".price input").on("tap",function(){
			translate()//改变translate
			$('#hotel_se_box').css({
				'-webkit-transform':'translate(0px,0px)'
			})
			/*点击按价格排序里的input，获取data属性*/
			var tit=$(this).attr('data-tit');
			//console.log(tit)
			//价格随意
			if(tit==1){
				priceone()
			}
			//价格小于100
			if(tit==2){
					var html='';
					$.each(data,function(key,val){
						if(val.low_price/100<=100){
								html+='<a href="" class="hotel_a">'+
									'<img src="'+data[key].image+'" alt="" class="hotel_img1">'+
									'<div class="hotel_box">'+
										'<h2>'+data[key].name+'</h2>'+
										'<p>'+
											'<span class="qi"><b>'+(data[key].low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
										'</p>'+
										'<p>'+data[key].stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
										'<p><span><strong>'+data[key].from+'</strong>km</span>'+data[key].addr+'</p>'+
									'</div>'+
								'</a>'
							}
				})
					$("#hotel_se_box").html($(html))
				
			}//小于100结束


			//价格在100-200
			if(tit==3){
					var html='';
					$.each(data,function(key,val){
							if(val.low_price/100>100&&val.low_price/100<=200){
								html+='<a href="" class="hotel_a">'+
									'<img src="'+data[key].image+'" alt="" class="hotel_img1">'+
									'<div class="hotel_box">'+
										'<h2>'+data[key].name+'</h2>'+
										'<p>'+
											'<span class="qi"><b>'+(data[key].low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
										'</p>'+
										'<p>'+data[key].stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
										'<p><span><strong>'+data[key].from+'</strong>km</span>'+data[key].addr+'</p>'+
									'</div>'+
								'</a>'
							}
					})
					$("#hotel_se_box").html($(html))
					
			}//100-200结束


			//价格在200-300
			if(tit==4){
					var html='';
					$.each(data,function(key,val){
							if(val.low_price/100>200&&val.low_price/100<=300){
								html+='<a href="" class="hotel_a">'+
									'<img src="'+data[key].image+'" alt="" class="hotel_img1">'+
									'<div class="hotel_box">'+
										'<h2>'+data[key].name+'</h2>'+
										'<p>'+
											'<span class="qi"><b>'+(data[key].low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
										'</p>'+
										'<p>'+data[key].stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
										'<p><span><strong>'+data[key].from+'</strong>km</span>'+data[key].addr+'</p>'+
									'</div>'+
								'</a>'
							}
					})
					$("#hotel_se_box").html($(html))
					
			}//200-300结束
			

			//价格300以上
			if(tit==5){
					var html='';
					$.each(data,function(key,val){
							if(val.low_price/100>300){
								html+='<a href="" class="hotel_a">'+
									'<img src="'+data[key].image+'" alt="" class="hotel_img1">'+
									'<div class="hotel_box">'+
										'<h2>'+data[key].name+'</h2>'+
										'<p>'+
											'<span class="qi"><b>'+(data[key].low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
										'</p>'+
										'<p>'+data[key].stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
										'<p><span><strong>'+data[key].from+'</strong>km</span>'+data[key].addr+'</p>'+
									'</div>'+
								'</a>'
							}
					})
					$("#hotel_se_box").html($(html))
					
			}//300以上结束

				//设置header房间数量
				_return()

		})//点击价格排序结束

		

/*	------------------------------点击按距离排序---------------------------------------*/
		$(".order input").on('tap',function(){
				translate()//改变translate
				$('#hotel_se_box').css({
					'-webkit-transform':'translate(0px,0px)'
				})
				var tit=$(this).attr('data-tit');
				//由小到大
				function nav1(a,b){
					return a-b
				}
				//由大到小
				function nav2(a,b){
					return b-a
				}

				//随意
					if(tit==1){
						priceone()
					}
				//由近到远
					if(tit==3){
							var str='',
							arr1=[],
							arr2=[],
							arr3=[];
							

		
							$.each(data,function(key,val){
								arr1.push(val.from)
								arr2.push(val.from);
								arr2=arr2.sort(nav1)
							})
							$.each(arr2,function(c,d){
									arr3.push($.inArray(d,arr1))
							})
							$.each(arr3,function(a,b){
									str+='<a href="" class="hotel_a">'+
										'<img src="'+data[b].image+'" alt="" class="hotel_img1">'+
										'<div class="hotel_box">'+
											'<h2>'+data[b].name+'</h2>'+
											'<p>'+
												'<span class="qi"><b>'+(data[b].low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
											'</p>'+
											'<p>'+data[b].stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
											'<p><span><strong>'+data[b].from+'</strong>km</span>'+data[b].addr+'</p>'+
										'</div>'+
									'</a>'
							})
							$("#hotel_se_box").html($(str))
							
					}
					//由远到近

					if(tit==2){
							var str='',
							arr1=[],
							arr2=[],
							arr3=[];
							$.each(data,function(key,val){
								arr1.push(val.from)
								arr2.push(val.from);
								arr2=arr2.sort(nav2)
							})
							$.each(arr2,function(c,d){
									arr3.push($.inArray(d,arr1))
							})
							console.log(arr1)
							console.log(arr2)
							console.log(arr3)
							$.each(arr3,function(a,b){
									str+='<a href="" class="hotel_a">'+
										'<img src="'+data[b].image+'" alt="" class="hotel_img1">'+
										'<div class="hotel_box">'+
											'<h2>'+data[b].name+'</h2>'+
											'<p>'+
												'<span class="qi"><b>'+(data[b].low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
											'</p>'+
											'<p>'+data[b].stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
											'<p><span><strong>'+data[b].from+'</strong>km</span>'+data[b].addr+'</p>'+
										'</div>'+
									'</a>'
							})
							$("#hotel_se_box").html($(str))
								
					}//=3

					//设置header房间数量
					_return()

			})//点击按距离排序	结束


/*	------------------------------点击按品牌排序---------------------------------------*/
	$(".brand input").on('tap',function(){
		translate()//改变translate
		var tit=$(this).attr('data-tit'),
			arr1=[];

			/*--不限--*/
			if(tit==1){
				priceone()
			}
			/*汉庭酒店*/
			if(tit==2){
				var html='';
					$.each(data,function(key,val){
							if(val.name=='北京汉庭酒店'){
								html+='<a href="" class="hotel_a">'+
									'<img src="'+data[key].image+'" alt="" class="hotel_img1">'+
									'<div class="hotel_box">'+
										'<h2>'+data[key].name+'</h2>'+
										'<p>'+
											'<span class="qi"><b>'+(data[key].low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
										'</p>'+
										'<p>'+data[key].stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
										'<p><span><strong>'+data[key].from+'</strong>km</span>'+data[key].addr+'</p>'+
									'</div>'+
								'</a>'
							}
					})
					$("#hotel_se_box").html($(html))
					_return()
			}
			/*假日山水酒店*/
			if(tit==3){
				var html='';
					$.each(data,function(key,val){
							if(val.name=='假日山水酒店'){
								html+='<a href="" class="hotel_a">'+
									'<img src="'+data[key].image+'" alt="" class="hotel_img1">'+
									'<div class="hotel_box">'+
										'<h2>'+data[key].name+'</h2>'+
										'<p>'+
											'<span class="qi"><b>'+(data[key].low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
										'</p>'+
										'<p>'+data[key].stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
										'<p><span><strong>'+data[key].from+'</strong>km</span>'+data[key].addr+'</p>'+
									'</div>'+
								'</a>'
							}
					})
					$("#hotel_se_box").html($(html))
					_return()
			}
			/*四季酒店*/
			if(tit==4){
				var html='';
					$.each(data,function(key,val){
							if(val.name=='四季酒店'){
								html+='<a href="" class="hotel_a">'+
									'<img src="'+data[key].image+'" alt="" class="hotel_img1">'+
									'<div class="hotel_box">'+
										'<h2>'+data[key].name+'</h2>'+
										'<p>'+
											'<span class="qi"><b>'+(data[key].low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
										'</p>'+
										'<p>'+data[key].stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
										'<p><span><strong>'+data[key].from+'</strong>km</span>'+data[key].addr+'</p>'+
									'</div>'+
								'</a>'
							}
					})
					$("#hotel_se_box").html($(html))
					_return()
			}
			/*驿家365*/
			if(tit==5){
				var html='';
					$.each(data,function(key,val){
							if(val.name=='驿家365'){
								html+='<a href="" class="hotel_a">'+
									'<img src="'+data[key].image+'" alt="" class="hotel_img1">'+
									'<div class="hotel_box">'+
										'<h2>'+data[key].name+'</h2>'+
										'<p>'+
											'<span class="qi"><b>'+(data[key].low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
										'</p>'+
										'<p>'+data[key].stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
										'<p><span><strong>'+data[key].from+'</strong>km</span>'+data[key].addr+'</p>'+
									'</div>'+
								'</a>'
							}
					})
					$("#hotel_se_box").html($(html))
					_return()
			}
			
	})




/*	------------------------------点击按星级排序---------------------------------------*/

	$(".satellite input").on('tap',function(){
		translate()//改变translate
		var tit=$(this).attr('data-tit'),
			arr1=[];

			/*--不限--*/
			if(tit==1){
				priceone()
			}
			/*二星级以下/经济型*/
			if(tit==2){
				var html='';
					$.each(data,function(key,val){
							if(val.stars=='二星' || val.stars=='经济型'){
								html+='<a href="" class="hotel_a">'+
									'<img src="'+data[key].image+'" alt="" class="hotel_img1">'+
									'<div class="hotel_box">'+
										'<h2>'+data[key].name+'</h2>'+
										'<p>'+
											'<span class="qi"><b>'+(data[key].low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
										'</p>'+
										'<p>'+data[key].stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
										'<p><span><strong>'+data[key].from+'</strong>km</span>'+data[key].addr+'</p>'+
									'</div>'+
								'</a>'
							}
					})
					$("#hotel_se_box").html($(html))
					_return()
			}
			/*三星*/
			if(tit==3){
				var html='';
					$.each(data,function(key,val){
							if(val.stars=='三星'){
								html+='<a href="" class="hotel_a">'+
									'<img src="'+data[key].image+'" alt="" class="hotel_img1">'+
									'<div class="hotel_box">'+
										'<h2>'+data[key].name+'</h2>'+
										'<p>'+
											'<span class="qi"><b>'+(data[key].low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
										'</p>'+
										'<p>'+data[key].stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
										'<p><span><strong>'+data[key].from+'</strong>km</span>'+data[key].addr+'</p>'+
									'</div>'+
								'</a>'
							}
					})
					$("#hotel_se_box").html($(html))
					_return()
			}
			/*四星*/
			if(tit==4){
				var html='';
					$.each(data,function(key,val){
							if(val.stars=='四星'){
								html+='<a href="" class="hotel_a">'+
									'<img src="'+data[key].image+'" alt="" class="hotel_img1">'+
									'<div class="hotel_box">'+
										'<h2>'+data[key].name+'</h2>'+
										'<p>'+
											'<span class="qi"><b>'+(data[key].low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
										'</p>'+
										'<p>'+data[key].stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
										'<p><span><strong>'+data[key].from+'</strong>km</span>'+data[key].addr+'</p>'+
									'</div>'+
								'</a>'
							}
					})
					$("#hotel_se_box").html($(html))
					_return()
			}
			/*五星*/
			if(tit==5){
				var html='';
					$.each(data,function(key,val){
							if(val.stars=='五星'){
								html+='<a href="" class="hotel_a">'+
									'<img src="'+data[key].image+'" alt="" class="hotel_img1">'+
									'<div class="hotel_box">'+
										'<h2>'+data[key].name+'</h2>'+
										'<p>'+
											'<span class="qi"><b>'+(data[key].low_price/100)+'</b>起</span><small>4.7分</small><img src="../images/hotel_img3.jpg" alt="" class="hotel_img3">'+
										'</p>'+
										'<p>'+data[key].stars+'<img src="../images/icon-wifi.png" alt="" class="hotel_img2"> p</p>'+
										'<p><span><strong>'+data[key].from+'</strong>km</span>'+data[key].addr+'</p>'+
									'</div>'+
								'</a>'
							}
					})
					$("#hotel_se_box").html($(html))
					_return()
			}
			
	})
	

//----------每次点击input后  #hotel_se_box的translate Y轴设为0--------------
	function translate(){
		$('#hotel_se_box').css({
				'-webkit-transform':'translate(0px,0px)'
			})
	}



//---------设置header房间数量(每次根据排序会重新ajax请求也就会重新计算a的数量及房间数量)------
		function _return(){
					var _house=$('#hotel_se_box').find('a').size()
					$('.hotel_header').find('span').text(_house)
		}
	
}
//-------------底部效果
function hotelList(){
	$(".hotel_footer").hide()
	$(".hotel_footer").on('tap','h6',function(){
		$(this).addClass('hotel_footer_on').siblings().removeClass('hotel_footer_on')
		var idx=$(this).index()
		// 排序 
			if(idx==0){
				$(".order").css({
					'height':'102px',
					'-webkit-transition':'height 0.5s'
				}).siblings(".foo").css({
					'height':'0',
					'-webkit-transition':'height 0s'
				})
			}
		//价格
			if(idx==1){
				$(".price").css({
					'height':'170px',
					'-webkit-transition':'height 0.5s'
				}).siblings(".foo").css({
					'height':'0',
					'-webkit-transition':'height 0s'
				})
			}
		//品牌
			if(idx==2){
				$(".brand").css({
					'height':'170px',
					'-webkit-transition':'height 0.5s'
				}).siblings(".foo").css({
					'height':'0',
					'-webkit-transition':'height 0s'
				})
			}
		//星级
			if(idx==3){
				$(".satellite").css({
					'height':'170px',
					'-webkit-transition':'height 0.5s'
				}).siblings(".foo").css({
					'height':'0',
					'-webkit-transition':'height 0s'
				})
			}
	
	})
	$(".foo input").on("tap",function(){
			$(".foo").css({
				'height':'0',
				'-webkit-transition':'height 0.4s'
			})
			$(this).parents('.foo').siblings('.foo').find('input').prop('checked',false)
	})
	

	//touch事件 导航是否显示
	var start='',
		offset='';
	$('.hotel_main')
	.on('touchstart',function(e){
		start=e.touches[0].clientY;
	})
	.on('touchmove',function(e){
		offset=e.touches[0].clientY-start;
		if(offset<0){
			$(".hotel_footer").show()
		}else{
			$(".hotel_footer").hide()
		}
	})
	
}//