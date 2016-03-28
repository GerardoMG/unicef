//new WOW().init();

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
	
});

$('a.fl').featherlight({
    targetAttr: 'href'
});

$.featherlight({iframeMaxWidth: '80%', iframeWidth: 500, iframeHeight: 300});