var particles = [];

function random(min, max) {
	return Math.random() * ( max - min ) + min;
}

function Particle(x, y, hue) {
	this.x = x;
	this.y = y;

	this.coordinates = [];
	this.coordinatesCount = 5;
	while(this.coordinatesCount--) {
		this.coordinates.push([this.x, this.y]);
	}
	this.angle = random(0, Math.PI*2);
	this.speed = random(1, 10);
	this.friction = 0.95;
	this.gravity = 1;
	this.hue = random(hue-50, hue+50);
	this.brightness = random(50, 80)
	this.alpha = 1;
	this.decay = random(0.015, 0.03);
}

Particle.prototype.update = function(index) {
	this.coordinates.pop();

	this.coordinates.unshift([this.x, this.y]);

	this.speed *= this.friction;

	this.x += Math.cos(this.angle) * this.speed;
	this.y += Math.sin(this.angle) * this.speed + this.gravity;

	this.alpha -= this.decay;

	if(this.alpha <= this.decay) {
		particles.splice(index, 1);
	}
}

Particle.prototype.draw = function() {
    let len = this.coordinates.length;
    let coord = this.coordinates[len-1];
	ctx.beginPath();
	ctx.moveTo(coord[0], coord[1]);
	ctx.lineTo(this.x, this.y);
	ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
	ctx.stroke();
}

function explode(x, y, hue) {
  	let particleCount = 30;
  	while(particleCount--) {
  		particles.push(new Particle(x, y, hue));
  	}
}