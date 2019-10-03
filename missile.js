function Missile(missile) {
    this.x = missile.x;
    this.y = missile.y;
    this.width = missile.width;
    this.height = missile.height;
    this.timing = missile.timing;
    this.speed = missile.speed;
    this.enemyFire = missile.enemyFire;
}

Missile.prototype.draw = function() {
	if(this.x < canvas.width + this.timing) {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = "#F188C1";
		ctx.fill();
		ctx.closePath();
	}
	if(this.x > canvas.width + this.timing) {
		missiles.splice(m, 1);
	}
}

Missile.prototype.update = function() {
    if(this.x < canvas.width + this.timing) {
		this.x += this.speed;
	}
}

function shipFire() {
	let missile = {
		x: ship.x,
		y: ship.y,
		width: 5,
		height: 2,
		speed: 3,
		timing: 50,
		enemyFire: false
	}
	missiles.push(new Missile(missile))
}

function enemyFire(enemy) {
    let missile = {
    	x: enemy.x,
		y: enemy.y,
		width: 5,
		height: 2,
		speed: -3,
		timing: 50,
		enemyFire: true
    }
}