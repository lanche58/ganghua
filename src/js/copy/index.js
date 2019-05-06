$(document).ready(function(){
	//鼠标滚轮事件
	function wheel(event){
		var delta = 0;
		if (!event) event = window.event;
		if (event.wheelDelta) {
			delta = event.wheelDelta/120; 
			if (window.opera) delta = -delta;
		} else if (event.detail) {
			delta = -event.detail/3;
		}
		if (delta && !isMobile){
			mouseWheel(delta);
		}
	}
	 
	if (window.addEventListener)
	window.addEventListener('DOMMouseScroll', wheel, false);
	window.onmousewheel = document.onmousewheel = wheel;
	
	//键盘按键事件
	$(document).keydown(
		function(e){keyDown(e);
	});
	
	//鼠标滚轮事件
	function mouseWheel(delta) {
		var dir = delta > 0 ? "up" : "down";
		var $actived = $(".row.active");
		var activeIndex = parseInt($actived.attr('index'));
		var numOfChildren = $(".row").length - 1;
		if( dir == "down" && activeIndex<numOfChildren && canRoll) {
			jumpPage(false);
		} else if( dir =="up" && activeIndex>1 && canRoll) {
			jumpPage(true);
		} 
	}
	
	//键盘事件
	function keyDown(e) {
		var keycode = e.which || e.keyCode;
		var $actived = $(".row.active");
		var activeIndex = parseInt($actived.attr('index'));
		var numOfChildren = $(".row").length - 1;
		if ((keycode == 65 || keycode == 38 || keycode ==87 || keycode ==33 ) && activeIndex>1 && canRoll){
			jumpPage(true);
			return false;
		} else if ((keycode == 40 || keycode == 83 || keycode ==68 || keycode ==34 && canRoll) && activeIndex<numOfChildren && canRoll){
			jumpPage(false);
			return false;
		} 
	}
	
	function downBtnDown(){
		var $actived = $(".row.active");
		var activeIndex = parseInt($actived.attr('index'));
		var numOfChildren = $(".row").length - 1;
		if (activeIndex<numOfChildren && canRoll){
			jumpPage(false);
		}else{
			jumpPage(true);
		}
	}
	//显示上一个||下一个section
	function jumpPage(up) {
		
		var $actived = $(".row.active");
		var activeIndex = parseInt($actived.attr('index'));
		showPage(activeIndex + (up?-1:1));
	};
	
	$('.u-arrow-box2').bind("click", function(){
		downBtnDown();
	});				
});

	var curIndex = 1,
		canRoll = true,
		ci = 1;
	function showPage(index){	
		if ( curIndex == index ) return; 
		if ( canRoll == false ) return;
		canRoll = false;
		// if(index==4){
		// 	$("#s3").addClass('active2');
		// }else{
		// 	$("#s3").removeClass('active2');
		// }
		// if(index==1){
		// 	$('.header').addClass('ixheader');
		// 	$(".intro__canvas").addClass('hide');
		// }else{
		// 	$('.header').removeClass('ixheader');
		// 	setTimeout(function(){
		// 		$(".intro__canvas").removeClass('hide');
		// 	},1000);
		// }	
		$("#s"+curIndex).removeClass("active").addClass("disappear");
		$("#boxsider").removeClass("pagesider1 pagesider2 pagesider3 pagesider4");
		$("#boxsider").addClass("pagesider"+index);
		$("#s"+index).removeClass("disappear").addClass("active");
		var t = -(index-1)*w_height;
		if(index==4){
			var hnum=jQuery("#s4").innerHeight();
			t=(-2*w_height)-hnum;
		}
		ci = index;
		$(".content").stop().animate({top:t},800,"easeInOutCirc");
		eval("s"+index+"_run()");
		setTimeout(function(){
			canRoll = true;
		},1000);
		curIndex = index;
	}
	// var s1_run = s2_run = s3_run = s4_run = s5_run = s6_run = s7_run = function(){};
	$(window).resize(function(){
		init();
	});
	function init(){
		$('.banner-box').css({height:w_height});
		$('.banner .item').css({height:w_height});
		setImgMax($('.banner .pic'),1920,950,w_width,w_height);
		if(!isMobile){
			$('.content').css({top:-(ci-1)*w_height});
			$('.rowh').css({height:w_height});
		}else{
			$('.rowh').css({height:"auto"});
		}
	}
	init();
	// $('.banner').slick({
	// 	slide:".item",
	//   	autoplay: true,	
	//   	arrows: false,
	//    	dots:true,
	//    	infinite: true,
	//    	easing:"easeInOutExpo",
	//    	speed: 1000,
	//    	autoplaySpeed: 5000,
	//   	pauseOnHover: false,
	//    	fade: true,
	//    	draggable:false,
	//    	touchMove:false
	// });
	// $('.sw-pics .pic').each(function(i,e) {
  //       $(this).css({zIndex:$('.sw-pics .pic').size()-i});
  //   });
	// var step = 0;
	// function changeSwNav(){
	// 	$('.sw-nav li').removeClass('act').eq(step).addClass('act');
	// 	$('.sw-tx li').hide().eq(step).show();
	// 	$('.sw-pics .pic').fadeOut(800).eq(step).stop(true,true).fadeIn(500);
	// };
	// changeSwNav();
	// $('.sw-nav li').click(function(){
	// 	step = $(this).index();
	// 	changeSwNav();
	// });
	// $('.nw-slide').slick({
	// 	slidesToShow: 3,
  //       slidesToScroll: 3,
	// 	responsive: [
	// 	  {
	// 		  breakpoint: 1025,
	// 		  settings: {
	// 			slidesToShow: 2,
	// 			slidesToScroll: 2
	// 		  }
	// 	  },
	// 	  {
	// 		  breakpoint: 862,
	// 		  settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1
	// 		  }
	// 	  }
	// 	]
	// });
	
	// function changeHeader(){
	// 	ST = $(window).scrollTop();
	// 	if(isMobile){
	// 		if(ST>1){
	// 			$('.header').removeClass('ixheader');
	// 		}else{
	// 			$('.header').addClass('ixheader');
	// 		}
	// 	}
	// };
	// changeHeader();
	// jQuery('.viBtn').click(function () {
	// 	Video.load({
	// 		vcontainer: 'videobox',
	// 		vfimg: jQuery(this).attr("data-video-image"),
	// 		vfiles: jQuery(this).attr("data-video-url"),
	// 		isautoplay: 'true'
	// 	});
	// 	jQuery(".vwrap").fadeIn();
	// });
	// $(window).scroll(function () {
	// 	changeHeader();
  //   });