

var hotjson='',
	morejson='';

init()
function init(){
	//ls.clear();
			if(!ls.getItem('city_name')){
				
				$(".city_name2").text('北京')
			}else{
				$(".city_name2").text(ls.getItem('city_name'))
			}
		
	hot()//热门
	addA()//点击城市获取value付给ls.setItem('city_name')
}

	  
	function hot(){
//ajax请求 热门城市		
		$.ajax({
			url:"../data/hotCity.json",
			type:'post',
			async:false,
			dataType:'json',
			success:function(e){
				 hotjson=e
				 hotxuan()
			},
			error:function(){
				console.log('请求失败')
			}
		})
//ajax更多 和具体城市	
		$.ajax({
			url:"../data/city.json",
			type:'post',
			async:false,
			dataType:'json',
			success:function(e){
				 morejson=e
				 morexuan()
			},
			error:function(){
				console.log('请求失败')
			}
		})
		loaded ()
			function loaded () {
				
				myScroll1 = new IScroll('#city_se',{
					click:true
				});

			}

	}
//渲染热门城市
	function hotxuan(){
		//city_id='+key+'&city_name='+encodeURI(val)+'
		var str='<ul>';
		$.each(hotjson,function(key,val){
			str+='<li><a href="BAI_DA_WO.html">'+val+'</a></li>'
		})
		str+='</ul>'
		$(".hot").append($(str))  
	}
//渲染更多 和具体城市
	function morexuan(){
		var str='<ul>',
		    html='';
			$.each(morejson.data.citylist,function(ele,val){
				/*?city_id='+b.id+'&city_name='+encodeURI(b.name)+'*/
				str+='<li><a href="#'+ele+'">'+ele+'</a></li>'
				html+='<div id="'+ele+'">'
				html+='<h2>'+ele+'</h2>'
				//console.log(val)
				$.each(val,function(i,n){
					$.each(n,function(a,b){
						html+='<p><a href="BAI_DA_WO.html">'+b.name+'</a></p>'
					})
				})
				html+='</div>'
			})
			str+='</ul>'
			$(".more").append($(str))
			$(".specific").append($(html))
		
	}

//点击城市获取value付给ls.setItem('city_name')
function addA(){
	$('.hot').on("tap","a",function(){
			var content=$(this).text()
			ls.setItem("city_name",content)
			
	})
	$('.specific').on("tap","a",function(){
			var content=$(this).text()
			ls.setItem("city_name",content)
			
	})
}