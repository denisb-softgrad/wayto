$(document).ready(function() {

	$('.hmenu-btn').click(function(){
		$('.mobile-menu').toggleClass('mobile-menu-open');
		$('.all').toggleClass('all-moved');
	});
	$('.custom-select-btn').click(function(){
		$('.dropdown-menu').fadeToggle('fast');
	});
	$('.mm-close').click(function(){
		$('.mobile-menu').removeClass('mobile-menu-open');
		$('.all').removeClass('all-moved');
	});
	$('.open-submenu').click(function(){
		$(this).parent('li').find('.m-submenu').slideToggle('fast');
		$(this).toggleClass('expanded');
	});
});

$(window).load(function(){   $('.masonry-wrapper').masonry({
	  itemSelector: '.cont-block'
	});  });
$(window).load(function(){   $('.masonry-cat-wrapper').masonry({
	  itemSelector: '.cat-block'
	});  });