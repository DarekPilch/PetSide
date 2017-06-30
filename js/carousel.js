$(document).ready(function(){

function slide() {
    const item_width = $('#carousel_ul li').outerWidth( true );
    const left_indent = 0 - item_width;

    $( '#carousel_ul' ).animate( {'left' : left_indent}, 2000, 'linear', function() {
        $( '#carousel_ul li:last' ).after( $('#carousel_ul li:first') );
        $( '#carousel_ul' ).css( {'left' : '0px'} );
slide();
    });
}

function basename( error ) {
	const path = error.currentTarget.src;
	const slash_pos = path.lastIndexOf( '/' );
	const filename = path.substring( slash_pos+1 );
	const underscore_pos = filename.lastIndexOf( '_' );
	const basename = filename.substring( 0, underscore_pos );
	return basename;
}

slide();

$(function() {
const links = $('a');

links.on('click', function(event) {
    event.preventDefault();
    const hrefValue = $(this).attr('href'),
          positionHref = $(hrefValue).offset();
    $('html, body').animate({
        scrollTop: positionHref.top
    }, 1000);
})

});

$(".rabitt").click(function(){
  $(".rabitt").addClass("animated hinge");
  });

$(".dog").click(function(){
  $(".dog").addClass("animated rubberBand");
  });

$(".cat").click(function(){
  $(".cat").addClass("animated tada");
  });

$(".step1").click(function(){
  $(".step1").addClass("animated bounceOut");
  $(".step1_i").addClass("animated fadeIn");
});

$(".step2").click(function(){
  $(".step2").addClass("animated bounceOut");
  $(".step2_i").addClass("animated fadeIn");
});

$(".step3").click(function(){
  $(".step3").addClass("animated bounceOut");
  $(".step3_i").addClass("animated fadeIn");
});

});
