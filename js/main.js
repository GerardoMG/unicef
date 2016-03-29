//new WOW().init();

$(document).ready(function() {
   $("iframe").each(function(){
      var ifr_source = $(this).attr('src');
      var wmode = "wmode=transparent";
      if(ifr_source.indexOf('?') != -1) $(this).attr('src',ifr_source+'&'+wmode);
      else $(this).attr('src',ifr_source+'?'+wmode);
   });
});


$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
	
});

$('a.fl').featherlight({
    targetAttr: 'href'
});

$.featherlight({iframeMaxWidth: '80%', iframeWidth: 500, iframeHeight: 300});