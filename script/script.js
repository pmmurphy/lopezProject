// hamburger menu toggle


$('.hamburger').on('click', function(e){
	// prevent link from jumping to the top of page
	e.preventDefault();
	// if menu is already showing, slide it up; otherwise slide down
	$('.menu').toggleClass('slide-down');
});

