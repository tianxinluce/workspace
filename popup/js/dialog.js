;(function($){
	$.dialog=function(opt){
		new Dialog(opt);
	}
	function Dialog(opt){
		//创建默认参数
		var _default={
			title:"",
			txt:"确认删除吗？",
			btn:["确定"],
			callback:null
		}

		//扩展参数
		var settings=$.extend({},_default,opt);
		//功能语句:动态生成HTML结构+CSS实现样式+动态脚本
		var btn='';
		$.each(settings.btn,function(i,e){
			btn+='<span>'+e+'</span>';
		})
		var htmlNode=$('<div class="mark"></div>'
							 +'<div class="dialog">'
							 +'<p>'+settings.txt+'</p>'
							 +'<section>'+btn+'</section>'
							 +'</div>');
		$("body").prepend(htmlNode);
		//点击确定及取消按钮
		$(".dialog").on("click","span",function(){
			var btnTxt=$(this).text();
			
			//点击确定
			if(btnTxt=="确定"){
				if(settings.callback) settings.callback();
			}
			close();
			
		})
		//关闭弹出框
		function close(){
			$(".mark").remove();
			$(".dialog").remove();
		}
	}
	
})(jQuery)