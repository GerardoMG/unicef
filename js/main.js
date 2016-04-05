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
	}, 1500);
	
});

$('a.fl').featherlight({
    targetAttr: 'href'
});

$.featherlight({iframeMaxWidth: '80%', iframeWidth: 500, iframeHeight: 300});


$( "#leerMasUEA" ).on( "click", function() {
  $( '#alturaUEA' ).css({
    "height": "inherit",
    "overflow": "inherit"
  });
  $(this).hide();
});
$( "#leerMasPAN" ).on( "click", function() {
  $( '#alturaPAN' ).css({
    "height": "inherit",
    "overflow": "inherit"
  });
  $(this).hide();
});
$( "#leerMasUBC" ).on( "click", function() {
  $( '#alturaUBC' ).css({
    "height": "inherit",
    "overflow": "inherit"
  });
  $(this).hide();
});
$( "#leerMasLAC" ).on( "click", function() {
  $( '#alturaLAC' ).css({
    "height": "inherit",
    "overflow": "inherit"
  });
  $(this).hide();
});

$( ".navbar-nav.nav li a" ).on( "click", function() {
  $( '#alturaUEA' ).css({
    "height": "1350px",
    "overflow": "hidden"
  });
  $( '#alturaPAN' ).css({
    "height": "1200px",
    "overflow": "hidden"
  });
  $( '#alturaUBC' ).css({
    "height": "1300px",
    "overflow": "hidden"
  });
  $( '#alturaLAC' ).css({
    "height": "1200px",
    "overflow": "hidden"
  });
  $('#leerMasUEA').show();
  $('#leerMasPAN').show();
  $('#leerMasUBC').show();
  $('#leerMasLAC').show();
});
