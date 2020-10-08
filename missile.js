const SHIP_FIRE_RATE = 50;
const ENEMY_FIRE_RATE = 300;

function Missile(missile) {
    this.x = missile.x;
    this.y = missile.y;
    this.originalX = missile.x;
    this.width = missile.width;
    this.height = missile.height;
    this.timing = missile.timing;
    this.speed = missile.speed;
	this.enemyFire = missile.enemyFire;
	this.onField = true;
}

Missile.prototype.draw = function() {
	if(this.x < canvas.width + this.timing) {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = "#86EB34";
		ctx.fill();
		ctx.closePath();
	} else if(this.x > canvas.width + this.timing) {
		this.onField = false;
	}
}

Missile.prototype.update = function() {
	if(!this.onField) {
		return null;
	} else if(this.x < canvas.width + this.timing) {
		this.x += this.speed;
	}
}

Missile.prototype.outOfBounds = function() {
	return this.x > canvas.width + this.timing || this.x + this.width < 0
}

function shipCanFire() {
	let onFieldMissiles = missiles.filter(function(m) { return m.onField; });
	return onFieldMissiles.length === 0 || onFieldMissiles[onFieldMissiles.length-1].x - onFieldMissiles[onFieldMissiles.length-1].originalX > SHIP_FIRE_RATE
}

function enemyCanFire(enemy) {
	let len = enemy.missiles.legth;
	return enemy.missiles.length === 0 || enemy.missiles[len-1].originalX - enemy.missiles[len-1].x > ENEMY_FIRE_RATE
}

function shipFire() {
	let missile = {
		x: ship.x,
		y: ship.y + ship.height/2,
		width: 5,
		height: 2,
		speed: 3,
		timing: 50,
		enemyFire: false,
		onField: true
	};
	missiles.push(new Missile(missile));
}

function enemyFire(enemy) {
    let missile = {
    	x: enemy.x,
		y: enemy.y,
		originalX: enemy.x,
		width: 5,
		height: 2,
		speed: -3,
		timing: 50,
		enemyFire: true,
		onField: true
    };
	enemy.missiles.push(new Missile(missile));
}