var active = 'all';
var selectArr = ['all', 'java', 'python', 'javascript'];
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


function selectButton(type) {
	console.log(type);
	if (type != active) {
		$('#' + active).toggleClass('active');
		$('#' + type).toggleClass('active');
		active = type;
	}
	$('#right').css('left', '0px');
	$('#left').css('right', '0px');
	setTimeout(function() {
		$('#right').css('left', '100%');
		$('#left').css('right', '100%');
	}, 1000)
	//$('.javascript').css({height: 0, width: 0, opacity: "0"});
}