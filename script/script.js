// hamburger menu toggle


$(function() {
	
	$('.hamburger').on('click', function(){
	// prevent link from jumping to the top of page
	// if menu is already showing, slide it up; otherwise slide down
	$('.menu').toggleClass('open');
	});
});



   





