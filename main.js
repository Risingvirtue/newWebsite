

$(document).ready(function(){
	
	var line1 = new iterator('Hello, my name is Johnny On.');
	/*
	var interval = setInterval(function() {
		var character = line1.get();
		if (character != null) {
			$('#intro').append('<span>' + character + '</span>')
		} else {
			clearInterval(interval);
		}
	}, 75);
	*/
	
	
})

function iterator(line) {
	this.line = line;
	this.index = 0;
	this.peek = function() {
		if (this.index < this.line.length) {
			return this.line[this.index]
		}
		return null;
	}
	
	this.get = function() {
		var character = this.peek();
		this.index = this.index + 1;
		return character;
	}
}

function linkIterator(line) {
	this.line = line;
	this.index = 0;
	this.str = "";
	this.get = function() {
		if (this.index < this.line.length) {
			this.str += this.line[this.index];
			this.index++;
			return this.str;
		} else {
			return null;
		}
	}
}

/*
var iterator = (function () {
	var intro = ['Hello, my name is Johnny On.'];
	var index = 0;
	var subIndex = 0;
	return {
		get: function () {
			if (index < intro.length) {
				var character = intro[index][subIndex];
				subIndex++;
			
			if (subIndex == intro[index].length) {
				
				subIndex = 0;
				index++;
			}
			return character;
			} else {
				return null;
			}
		},
		
		peek: function() {
			if (intro < intro.length) {
				return intro[index][subIndex];
			}
			return null;
		}
	}
})();
*/