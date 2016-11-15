/*$(function(){	
	var count=0;
	var flag=0;
	$("img:first").show();			
	function run(){ 		
		$("img").eq(count).fadeIn().siblings().fadeOut();
		$("li").eq(count).css("background-color","brown").siblings().css("background-color","")
//		alert(count);
		count++;
		if(count==4){
			count=0;
		}
	}
	run();
	setInterval(run, 2000);
})*/

/*$(function(){	
	var count=0;
	$("img:first").show();
	$("#run").mouseover(function(){
		clearInterval(timer);
//		alert("AAA")
	}).mouseout(function(){
		var timer=setInterval(run, 2000);
	})	
	function run(){ 		
		$("img").eq(count).fadeIn().siblings().fadeOut();
		$("li").eq(count).css("background-color","brown").siblings().css("background-color","")
//		alert(count);
		count++;
		if(count==4){
			count=0;
		}
	}
	run();
	var timer=setInterval(run, 2000);
})
*/
$(function(){	
	var index=0;
	var timer;         //定时器
	$("img:first").show();     //展示图片第一个
	$("li:first").css("background-color","brown"); //索引收个设置样式
//获取当前经过的索引值，显示对应的图片和样式
$("li").mouseover(function(){      
		index=$("li").index(this);
		change(index);
//		alert(index)
	});
//获取盒子 注入鼠标经过事件
$("#run").hover(function(){//鼠标经过时停止动画
	clearInterval(timer);       
},function(){          //鼠标经过时开始动画
	timer=setInterval(function(){
//		alert(index)
		change(index)
		index++;
		if(index==4){
			index=0;
		}
	},1000);
	
}).trigger("mouseleave");    //选定run 触发鼠标移开事件
})
function change(index){
		$("li").eq(index).css("background-color","brown").siblings().css("background-color","")
		$("img").eq(index).fadeIn().siblings().fadeOut();
}
