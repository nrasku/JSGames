const SHIP_HUE = 0;
const SHIP_PARTICLES = 40;

function Ship(ship) {
	this.x = ship.x;
	this.y = ship.y;

	this.speed = 2;
	this.height = 10;
	this.width = 20;
	this.lives = 3;
	this.missiles = [];
	this.touchable = true;
	this.blinkTimer = null;
	this.blinkTime = 5;
	this.particles = SHIP_PARTICLES;

	this.src = ship.src
	this.lowOpacitySrc = ship.lowOpacitySrc;
	this.image = new Image();
	this.image.src = this.src;
}

Ship.prototype.draw = function() {
    let elapsed = (new Date() - this.blinkTimer)/1000;
	let decimal = Math.round(elapsed * 10);
	if(!this.blinkTimer || decimal % 2 == 1) {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = "#F00000";
		ctx.fill();
		ctx.closePath();
	} else {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = "#FFD9D9";
		ctx.fill();
		ctx.closePath();
	}
	if(elapsed >= this.blinkTime) {
		this.touchable = true;
		this.blinkTimer = null;
	}
}

Ship.prototype.drawProt = function() {
	let elapsed = (new Date() - this.blinkTimer)/1000;
	let decimal = Math.round(elapsed * 10);
	if(!this.blinkTimer || decimal % 2 == 1) {
		this.image.src = this.src;
		ctx.drawImage(this.image, this.x, this.y);
	} else {
		this.image.src = this.lowOpacitySrc;
		ctx.drawImage(this.image, this.x, this.y);
	}
	if(elapsed >= this.blinkTime) {
		this.touchable = true;
		this.blinkTimer = null;
	}
}

Ship.prototype.update = function(x, y) {
    this.x += x;
    this.y += y;
    if(this.x + this.width > canvas.width) {
		this.x = canvas.width - this.width;
	} 
	if(this.y + this.height > canvas.height) {
		this.y = canvas.height - this.height;
	}
	if(this.x < 0) {
		this.x = 0;
	}
	if(this.y < 0) {
		this.y = 0;
	}
}

Ship.prototype.hitByEnemy = function(enemy, enemyArray, index) {
	if(this.x + this.width > enemy.x && this.x < enemy.x + enemy.width && 
		this.y + this.height > enemy.y && this.y < enemy.y + enemy.height && this.touchable) {
		this.lives -= 1;
		this.touchable = false;
		this.blinkTimer = new Date();
		this.explode();
		enemy.explode();
		enemy.onField = false;
		if(!this.lives) {
			gameOver = true;
		} else {
			this.x = 10;
			this.y = canvas.height/2; 
		}
	}
}

Ship.prototype.explode = function() {
	let particleCount = this.particles;
	while(particleCount--) {
		particles.push(new Particle(this.x, this.y, SHIP_HUE));
	}
}

Ship.prototype.canFire = function() {
	let onFieldMissiles = this.missiles.filter(function(m) { return m.onField; });
	return onFieldMissiles.length === 0 || onFieldMissiles[onFieldMissiles.length-1].x - onFieldMissiles[onFieldMissiles.length-1].originalX > onFieldMissiles[0].timing
}

Ship.prototype.fire = function() {
	let bow = this.x + this.width;
	let missile = {
		x: bow,
		y: this.y + this.height/2,
	};
	this.missiles.push(new BasicMissile(missile));
}

Ship.prototype.fireProt = function() {
	let bow = this.x + this.image.width;
	let missile = {
		x: bow,
		y: this.y + this.image.height/2
	};
	this.missiles.push(new BasicMissile(missile));
}