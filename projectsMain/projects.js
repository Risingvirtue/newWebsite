var active = 'all';
var selectArr = ['java', 'python', 'javascript'];
$(document).ready(function(){
	$('#' + active + ' > .top').css({'left': '0px', 'opacity': '1'});
	$('#' + active + ' > .bottom').css({'right': '0px', 'opacity': '1'});
	resize();
})

$(window).resize(function() {
	resize();
	
});

function resize() {
	var height = $('#seasons').css('height');
	var width = $('#seasons').css('width');
	console.log(window.innerWidth);
	if (window.innerWidth < 800) {
		var newHeight = window.innerWidth * 0.562;
		
	} else {
		newHeight = window.innerWidth * 0.562 * 0.5;
	}
	console.log(width, newHeight);
	$('.projects li').css('height', newHeight + 'px');
	$('li img').css('height', newHeight);
	
	var infoWidth = $('#seasons-link').css('width');
	width = convertPixel(width);
	infoWidth = infoWidth.substring(0, infoWidth.length - 2);
	$('.button').css('margin-left', (width - infoWidth) / 2 + 'px');
	
	
	
}


function selectButton(type) {
	console.log(type == 'all');
	
	if (type != active) {
		$('#' + active + ' > .top').css({'left': '100%', 'opacity': '0'});
		$('#' + active + ' > .bottom').css({'right': '100%', 'opacity': '0'});
		
		$('#' + type + ' > .top').css({'left': '0px', 'opacity': '1'});
		$('#' + type + ' > .bottom').css({'right': '0px', 'opacity': '1'});

		
		if (type == 'all') {
			setTimeout(function() {
				for (var i =0 ; i < selectArr.length; i++) {
					$('.' + selectArr[i]).css('display', 'block');
				}
			}, 500);
			
		} else {
			setTimeout(function() {
				for (var i = 0 ; i < selectArr.length; i++) {
					if (selectArr[i] == type) {
						$('.' + selectArr[i]).css('display', 'block');
					} else{
						$('.' + selectArr[i]).css('display', 'none');
					}
				}
			}, 500);
			
		}
		active = type;
	}
	
	$('#right').css('left', '0px');
	$('#left').css('right', '0px');
	$('#loading-text').css('opacity', '1');
	setTimeout(function() {
		$('#loading-text').css('opacity', '0');
		$('#right').css('left', '100%');
		$('#left').css('right', '100%');
		
	}, 1000)
	//$('.javascript').css({height: 0, width: 0, opacity: "0"});
}


function convertPixel(pixel) {
	pixel = pixel.substring(0, pixel.length - 2);
	return pixel;
}
$('#seasons-link').click(function() {
	window.location.href = '../projects/seasons.html';
})
$('#draw-link').click(function() {
	window.location.href = '../projects/draw.html';
})
$('#stock-link').click(function() {
	window.location.href = '../projects/stock.html';
})
$('#percolation-link').click(function() {
	window.location.href = '../projects/percolation.html';
})
$('#bear-link').click(function() {
	window.location.href = '../projects/bearMaps.html';
})
$('#ants-link').click(function() {
	window.location.href = '../projects/ants.html';
})
$('#photo-link').click(function() {
	window.location.href = '../projects/photoTranspose.html';
})