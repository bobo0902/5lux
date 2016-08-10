$(function(){
	$(".top_r3,.top_r4").mouseover(function(){
		$(this).find("img").attr("src","images/jt.png");
		$(this).css("background","#FFF");
		$(this).children(".top_r3_1,.top_r4_1").stop().slideDown(200);
	})
	$(".top_r3,.top_r4").mouseout(function(){
		$(this).find("img").attr("src","images/top_07.jpg");
		$(this).css("background","#1f2021");
		$(this).children(".top_r3_1,.top_r4_1").stop().slideUp(200);
	})
	
	$(".top_r5").mouseover(function(){
		$(this).css("background","#FFF");
		$(".top_r5_1").stop().slideDown(200);
	})
	$(".top_r5").mouseout(function(){
		$(this).css("background","#1f2021");
		$(".top_r5_1").stop().slideUp(200);
	})
	
	/*-------------导航--------------------*/
	
	$.ajax({
		type:"get",
		url:"data/data.txt",
		async:true,
		cache:false,
		success:function(str){
			var arr=eval(str);
			console.log(arr);
			for(var i=0;i<arr.length;i++){
				var json=arr[i];
				$(".nav_box_l_list ul").append("<li><a href='#'>"+ json["catname"] +"</a></li>");
				$(".nav_box_l_list ul li").css({"background":"url(../images/brand_category1.png) no-repeat","background-position":"-3px -(5+"+32*i+")px"})
				var div = $("<div></div>")
				var arr1=json["catlist"];
				for(var j=0;j<arr1.length;j++){
					var json1=arr1[j];
					var dl=$("<dl><dt>"+ json1["catname"] +"</dt></dl>");
					var dd=$("<dd></dd>");
					var arr2=json1["catlist"];
					for(var m=0;m<arr2.length;m++){
						var href=$("<a href='#'>"+ arr2[m] +"</a>");
						dd.append(href);
					}
					dl.append(dd);
					div.append(dl);
				}
				$(".showshop").append(div);
			}
			
			$(".nav_box_l").mouseover(function(){
				$(".nav_box_l_list").show().mouseover(function(){
					$(".showshop").show();
				}).find("li").mouseover(function(){
					$(this).css("opacity","1");
					if($(this).index()<4){
						$(".showshop").css("top","10px");
					}else if($(this).index()>4&&$(this).index()<8){
						$(".showshop").css("top","100px");
					}else if($(this).index()>8){
						$(".showshop").css("top","250px");
					}
					$(".showshop div").eq($(this).index()).show().siblings().hide();
				});;
			});
			
			$(".nav_box_l").mouseout(function(){
				$(".nav_box_l_list").hide();
				$(".showshop").hide();
			});
			$(".nav_box_l_list").find("li").mouseleave(function(){
				$(this).css("opacity",".7")
			})
			
		},
		error:function(xhr){
			alert(xhr.status);
		}
	});
})




















