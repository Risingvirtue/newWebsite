
function Dot(x, y, center, color) {
	this.x = x;
	this.y = y; 
	this.r = Math.sqrt(Math.pow(center.x - x, 2) + Math.pow(center.y - y, 2));
	this.t = Math.acos((center.x - x) / this.r);
	if (y > center.y) {
		this.t -= Math.PI;
	}
	this.center = center;
	this.color = color;
	this.lineColor = 'black';
	this.draw = function() {
		
		ctx.beginPath();
		ctx.strokeColor = this.lineColor;
		ctx.moveTo(this.x, this.y);
		var newX = this.x + 2000 * Math.sin(Math.PI /6);
		var newY = this.y - 2000 * Math.cos(Math.PI /6);
		ctx.lineTo(newX, newY);
		
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(this.x, this.y, 2, 0, 2* Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}
	
	this.increment = function() {
		this.t += 0.001;
		this.x = this.center.x - this.r * Math.cos(this.t);
		this.y = this.center.y - this.r * Math.sin(this.t);
	}
	
	this.resize = function(width, height) {
		var ratioX = (width / 2) / this.center.x;
		var ratioY = (height / 2) / this.center.y;
		this.x = this.x * this.ratioX;
		this.y = this.y * this.ratioY;
		this.center.x = width / 2;
		this.center.y = height / 2;
	}
}


function createDots() {
	var r = Math.min(canvas.width, canvas.height);
	var colors = ['#FF0000', '#800000', '#00FFFF', 'FF00FF', '#C0C0C0', '#FFFF00', '#00FF00', '#0000FF', '#800080'];
	for (var i = 0; i < 100; i++) {
		var x = canvas.width / 2 + Math.round((2 * Math.random() - 1) * r / 2);
		var y = canvas.height / 2 + Math.round((2 * Math.random() - 1) * r / 2);
		var color = Math.floor(Math.random() * colors.length);
		dots.push(new Dot(x, y,{x: canvas.width / 2, y: canvas.height / 2}, colors[color]));
	}
}

function draw() {
	requestAnimationFrame(draw);
	ctx.clearRect(0,0, canvas.width, canvas.height);
	for (var i = 0; i < dots.length; i++) {
		dots[i].increment();
		dots[i].draw();
	}
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}
