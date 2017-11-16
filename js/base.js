$(function(){
	//给菜单添加当前项的样式
	var headerA = $('.nav').find('ul li a');
	headerA.removeClass('cur');
	if($('.stock').length>0){
		headerA.eq(3).addClass('cur');
	}else if($('.business').length>0){
		headerA.eq(1).addClass('cur');
	}else if($('.about').length>0){
		headerA.eq(2).addClass('cur');
	}else{
		headerA.eq(0).addClass('cur');
	}
});


