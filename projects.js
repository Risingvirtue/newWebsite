

$(document).ready(function(){
	resize();
})

$(window).resize(function() {
	resize();
	
});

function resize() {
	var height = $('#seasons').css('height');
	$('.projects li').css('height', height);
	$('.img').css('height', height);
	var width = $('#seasons').css('width');
	var infoWidth = $('#info').css('width');
	width = width.substring(0, width.length - 2);
	infoWidth = infoWidth.substring(0, infoWidth.length - 2);
	$('.button').css('margin-left', (width - infoWidth) / 2 + 'px');
}