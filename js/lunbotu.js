$(function(){
	var $num=0;
	//自动轮播
	$('.box')[0].timer=setInterval(FnNext,1000);
	//点击下一张
	$('.r').click(FnNext);
	//点击上一张
	$('.l').click(PrvNext);
	//点击切换
	$('.box2 li').click(Click);
	
	$('.box').mouseover(function(){
		clearInterval($('.box')[0].timer);
	});
	$('.box').mouseout(function(){
		$('.box')[0].timer=setInterval(FnNext,1000);
	})
	
	//下一张的函数
	function FnNext(){
		$num++;
		if($num>=$(".box1 img").length){
			$num=0;
			$(".box1").css("left",0)
		}
		$(".box1").animate({"left":-$num*1440});
		$(".box2 li").removeClass("hover").eq($num).addClass("hover");
	}
	//上一张的函数
	function PrvNext(){
		$num--;
		if($num<0){
			$num=$(".box1 img").length-1;
			$(".box1").css("left",0)
		}
		$(".box1").animate({"left":-$num*1440});
		$(".box2 li").removeClass("hover").eq($num).addClass("hover");
	}
	//点击切换的函数
	function Click(){
		$num=$('.box2 li').index(this);
		$(this).addClass("hover").siblings().removeClass("hover");
		$(".box1 img").fadeOut(10).eq($num).fadeIn(10);
	}
})