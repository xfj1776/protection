$(function(){
	$('.navinfo li').hover(function(){
		$(this).stop().animate({'background-position-x':'6px','opacity':'0.7'},100);
	},function(){
		$(this).stop().animate({'background-position-x':'10px','opacity':'1'},100);
	});
	var count=0;
	function tab(n){
		$('.bjmask').stop().animate({'left':$('.bjmask').width()*n});
		$('.toplayer').stop().animate({'left':$('.toplayer').width()*n});
		var ul=$('.sUlLi').parents('.bannerList').siblings('.firstUl');
		var li=ul.children('li').hide().eq(n).show();
//		ul.children('li').find('.bannerInfo').fadeOut().eq(n).fadeIn();
//		ul.children('li').find('.bannerImg').fadeOut().eq(n).fadeIn();
	};
	$('.sUlLi').click(function(){
		count=$(this).index()-1;
		tab(count);

	});
	var timer = setInterval(function(){
		count++;
		if(count>=8){
			count=-1;
		}else{
			tab(count);
		}
	},2000);
	
	/*鼠标移入 翻转图片*/
	$('.casesUl li').hover(function(){
		$(this).children('img').stop().addClass('active');
		$(this).find('p').stop().addClass('active');
		$(this).find('p').stop().removeClass('active1');
		$(this).children('img').stop().removeClass('active1');
	},function(){
		$(this).children('img').stop().removeClass('active');
		$(this).find('p').stop().removeClass('active');
		$(this).find('p').stop().addClass('active1');
		$(this).children('img').stop().addClass('active1');
	})
});

//----------------------------------  二级页面cases案例  ------------------------------------------

$(function(){
	var aA =$('#filter ul li a');
	var	aUl =$('.cases_list_div2 ul');
	var oUl= $('.cases_list_div1 ul');
	var aLi1 = $('#filter ul li');
	// console.log(aUl);
	aLi1.click(function(){
		// console.log(oUl);
		oUl.css("display","none");
		aA.removeClass('active');
		aUl.removeClass('active');
		$(this).children().addClass('active');
		// console.log($(this).index());
		aUl.eq($(this).index()).addClass('active');
	});
	var aLi = $('.cases_list_li');
	aLi.mouseenter(function(){
		var oP =$(this).children('p.cases_list_p');
		oP.css("display","block");
		oP.removeClass('fadeOutDown');
		oP.addClass('animated');
		oP.addClass('fadeInUp')
	})
	aLi.mouseleave(function(){
		var oP =$(this).children('p.cases_list_p');
		oP.addClass('animated');
		oP.addClass('fadeOutDown');
		oP.removeClass('fadeInUp')
	})
})