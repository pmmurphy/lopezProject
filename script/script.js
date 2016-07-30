// hamburger menu toggle

// <-----when I get read to fadIn info------>


$ (function(){
	$(".bio").delay(2500).fadeIn(5500);
	$(".bio").animate({});

});

$('.hamburger').on('click', function(){
	// prevent link from jumping to the top of page
	// if menu is already showing, slide it up; otherwise slide down
	$('.menu').toggleClass('open');
});

