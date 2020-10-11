const SHOOTING_TIMER =  _.range(15, 25);
const SHOOTING_WIDTH = 14;
const SHOOTING_HEIGHT = 10;
const SHOOTING_SPEED = 1;
const MISSILE_TIMING = 300;
const MISSILE_SPEED = 3;
const ENEMY_FIRE_RATE = 300;
const SHOOTER_COLOUR = "#00478A";
    
function ShootingEnemy(parameters){
    let params = Object.assign(parameters, {height: SHOOTING_HEIGHT, width: SHOOTING_WIDTH, speed: SHOOTING_SPEED, colour: SHOOTER_COLOUR})

    Enemy.call(this, params);

    this.missiles = [];
    this.missileTiming = MISSILE_TIMING;
    this.missileSpeed = MISSILE_SPEED;
}

ShootingEnemy.prototype = Object.create(Enemy.prototype);
ShootingEnemy.prototype.constructor = ShootingEnemy;

ShootingEnemy.prototype.init = function(x, y){

    Enemy.prototype.call(this);

    this.setPosition(0, 0);
}

ShootingEnemy.prototype.fire = function(){
    var yPos = this.y + this.height/2;
    let missile = {
        x: this.x,
		y: yPos,
		originalX: this.x,
		width: 5,
		height: 2,
		speed: -3,
		timing: 50,
		enemyFire: true,
		onField: true
    };
	this.missiles.push(new Missile(missile));
}

ShootingEnemy.prototype.canFire = function(){
	let m = this.missiles
    return m.length === 0 || m[m.length-1].originalX - m[m.length-1].x > ENEMY_FIRE_RATE
}