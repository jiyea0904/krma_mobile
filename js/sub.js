//table select Box
$(document).ready(function(){
	$('.inputbox').find('select').each(function() {
		var self = $(this),
			parentBox = self.parents('.inputbox'),
			change = function() {
				$(this).prev('.txt').text($(this).val());
			},
			focusin = function() {
				$(this).parents('.inputbox').addClass('selected');
			},
			focusout = function() {
				$(this).parents('.inputbox').removeClass('selected');
			};

		self.css({
			'width' : parentBox.width() + 2 + 'px',
			'height' : parentBox.height() + 'px'
		}).on({
			'change' : change,
			'focusin' : focusin,
			'focusout' : focusout
		});
	}).end().find('.txt').each(function(){
		var self = $(this);
		self.text(self.next('select').val());
	});
});

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
//Q&A
$(document).ready(function(){
	$("dl.question").click(function(){
		$(".answer").slideUp();
		$("dl.question").removeClass("on");
		$(this).next(".answer").slideToggle();
		$(this).addClass("on");
	});
});


//footer
$(function(){
	$(".btn_footer.off").click(function(){
		$('#footer').addClass("off");
		$('#contents').css("padding-bottom","24px");
	});	
	
	$(".btn_footer.on").click(function(){
		$("#footer").removeClass("off");
		$('#contents').css("padding-bottom","84px");
	});
});



/* 

	Sitemap Styler v0.1
	written by Alen Grakalic, provided by Css Globe (cssglobe.com)
	visit http://cssglobe.com/lab/sitemap_styler/
	
*/

this.sitemapstyler = function(){
	var sitemap = document.getElementById("info")
	if(sitemap){
		
		this.listItem = function(li){
			if(li.getElementsByTagName("ul").length > 0){
				var ul = li.getElementsByTagName("ul")[0];
				ul.style.display = "none";
				var span = document.createElement("span");
				span.className = "collapsed";
				span.onclick = function(){
					ul.style.display = (ul.style.display == "none") ? "block" : "none";
					this.className = (ul.style.display == "none") ? "collapsed" : "expanded";
				};
				li.appendChild(span);
			};
		};
		
		var items = sitemap.getElementsByTagName("li");
		for(var i=0;i<items.length;i++){
			listItem(items[i]);
		};
		
	};	
};

window.onload = sitemapstyler;
