

$(document).ready(function(){
	var height = $('#seasons').css('height');
	var width = $('#seasons').css('height');
	$('li > img').css('height', height);
})

$(window).resize(function() {
	$('li > img').css('height', height);
	
});