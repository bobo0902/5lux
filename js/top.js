$(function(){
	$(".top_r3,.top_r4,.top_r5").mouseenter(function(){
		$(this).children(".top_r3_1,.top_r4_1,.top_r5_1").stop().slideDown(150);
	})
		
	
	$(".top_r3,.top_r4,.top_r5").mouseleave(function(){
		$(this).children(".top_r3_1,.top_r4_1,.top_r5_1").stop().slideUp(150);
	})
})