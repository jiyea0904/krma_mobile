$(function(){
  $('.flexslider3').flexslider({
	animation: "slide",
	directionNav: true,
	controlNav: false,
	pausePlay:true,
	direction:"hrozinal"
  });
});

// tab
function ocrt(num){	
	var f = $('.category_title_tab').find('li');
	console.log(num);
	for ( var i = 0; i < f.length; i++ ) {			
		if ( i == num) {			
			f.eq(i).addClass('on');	
			
			$('.tab_menu' + i ).show();
		} else {
			f.eq(i).removeClass('on');					
			$('.tab_menu' + i ).hide();
		}
	}
}

//tab_normal
jQuery(function($){
	var tab = $('.tab_normal');
	tab.removeClass('js_off');
	tab.css('height', tab.find('>ul>li>div:visible').height());
	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('.tab_normal:first').attr('class', 'tab_normal '+myClass);
		tab.css('height', t.next('div').height());
	}
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});

//tab_normal
jQuery(function($){
	var tab = $('.tab_normal_orange');
	tab.removeClass('js_off');
	tab.css('height', tab.find('>ul>li>div:visible').height());
	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('.tab_normal_orange:first').attr('class', 'tab_normal_orange '+myClass);
		tab.css('height', t.next('div').height());
	}
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});
//tab_normal
jQuery(function($){
	var tab = $('.tab_normal_blue');
	tab.removeClass('js_off');
	tab.css('height', tab.find('>ul>li>div:visible').height());
	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('.tab_normal_blue:first').attr('class', 'tab_normal_blue '+myClass);
		tab.css('height', t.next('div').height());
	}
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});



//menu_detail
$(function(){
	$(".menu_detail").hide();
	$(".btn_menudetail_on").click(function(){
		$('.menu_detail').show();
	});	
	
	$(".btn_menudetail_off").click(function(){
		$(".menu_detail").hide();
	});
});

//alarm_detail
$(function(){
	$(".alarm_detail").hide();
	$(".btn_alarmdetail_on").click(function(){
		$('.alarm_detail').show();
	});	
	
	$(".btn_alarmdetail_off").click(function(){
		$(".alarm_detail").hide();
	});
});

//allmenu
$(document).ready(function(){
	$(".menudepth_1 > li > a").click(function(){
		$(".menudepth_2").slideUp();
		$(".menudepth_1 > li").removeClass("on");
		$(this).next(".menudepth_2").slideToggle();
		$(this).parent("li").addClass("on");
	});
});
$(document).ready(function(){
	$(".menudepth_2 > li > a").click(function(){
		$(".menudepth_3").slideUp();
		$(".menudepth_2 > li").removeClass("on");
		$(this).next(".menudepth_3").slideToggle();
		$(this).parent("li").addClass("on");
	});
});

$(function(){
	$(".menu_detail .arr").hide();
	$(".service_link").mouseenter(function(){
		$('.menu_detail .arr').show();
	});	
	
	$(".service_link").mouseleave(function(){
		$(".menu_detail .arr").hide();
	});
});
$(function(){
	$(".adArea .arr").hide();
	$(".category_title").mouseenter(function(){
		$('.adArea .arr').show();
	});	
	
	$(".category_title").mouseleave(function(){
		$(".adArea .arr").hide();
	});
});


//footer
$(function(){
	$(".btn_footer.on").click(function(){
		$("#footer").removeClass("off");
		$('#contents').css("padding-bottom","84px");
	});
	
	$(".btn_footer.off").click(function(){
		$('#footer').addClass("off");
		$('#contents').css("padding-bottom","24px");
	});	
});

//menu_detail
$(function(){
	$(".btn_send_photo").click(function(){
		$('.send_photo_detail').show();
	});	
	$(".send_photo_detail").click(function(){
		$('.send_photo_detail').hide();
	});	
	
});
