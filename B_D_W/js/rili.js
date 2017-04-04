;(function($){

	$.fn.rili=function(opt){
		var settings=$.extend({
			rzTime:new Date(),
		 	size:2
		},opt || {}),
		main=$(this);

	//创建日历 根据size
		for(var i=0;i<settings.size;i++){
			createRili(i)
		}
		function createRili(n){
			 
			 var y=settings.rzTime.getFullYear(),
				 m=settings.rzTime.getMonth()+1,
				 html=""; 
			html+='<section class="rili_wrap">'
				  +'<h2>'+y+'年'+(m+n)+'月</h2>'
				  +'<ol><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ol>'
				  +createTable(y,m+n)
				  +'</section>';
				 $(html).appendTo(main)
		}
		

		//创建表格
		function createTable(y,m){
			var html='<table id="tab'+m+'">',
				days=getDays(y,m),//获取天数
			    prevdays=getDays(y,m-1),
				week=new Date(y,m-1,1).getDay(),//获取每月第一天是星期几
				//行数=(前一个的显示天数+当前月的天数)/7
				rows=Math.ceil((week+days)/7),
				//当前的月份
				curMon=new Date().getMonth()+1,
				//当前的日期
				curDay=new Date().getDate();
				
				
			//往表格中添加行
			for(var i=0;i<rows;i++){
				 html+='<tr>'
				for(j=1;j<=7;j++){
					var day=(i*7+j)-week
					if(day<1){
						html+='<td class="prev"><small>'+(day+prevdays)+'</small></td>'
					}else if(day<=days){
						if(m==curMon && day<curDay){
							html+='<td class="over"><small>'+(day)+'</small></td>'
						}else{
							html+='<td><small>'+(day)+'</small></td>'
						}
						
					}
					
				}
				html+='</tr>'
				
			}
			html+='</table>'
			return html;	
		}
		//获取天数
		function getDays(y,m){
			if(m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12){
				return 31;
			}else if(m==4 ||m==6 ||m==9 ||m==11){
				return 30;
			}else{
				if(y%400==0 || y%4==0 && y%100!=0){
					return 29;
				}
			}
		}
		
	}//rili结束









})(Zepto)