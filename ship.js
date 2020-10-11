function Ship(x, y) {
	this.x = x;
	this.y = y;

	this.speed = 2;
	this.height = 10;
	this.width = 20;
	this.lives = 3;
	this.touchable = true;
	this.blinkTimer = null;
	this.blinkTime = 5;
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
	if(!enemy.onField) {
		return null;
	} else if(this.x + this.width > enemy.x && this.x < enemy.x + enemy.width && 
		this.y + this.height > enemy.y && this.y < enemy.y + enemy.height && this.touchable) {
		this.lives -= 1;
		this.touchable = false;
		this.blinkTimer = new Date();
		explode(enemy.x, enemy.y);
		enemy.onField = false;
		if(!this.lives) {
			gameOver = true;
		} else {
			this.x = 10;
			this.y = canvas.height/2; 
		}
	}
}

Ship.prototype.fire = function() {
	let missile = {
		x: this.x,
		y: this.y + this.height/2,
		width: 5,
		height: 2,
		speed: 3,
		timing: 50,
		enemyFire: false,
		onField: true
	};
	missiles.push(new Missile(missile));
}