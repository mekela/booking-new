$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//menu
	$('.nav-trigger').click(function(){
		$(this).next().slideToggle('fast');
	});
});