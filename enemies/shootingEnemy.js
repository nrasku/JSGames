const SHOOTING_TIMER =  _.range(15, 25);
const SHOOTING_WIDTH = 14;
const SHOOTING_HEIGHT = 10;
const SHOOTING_SPEED = 1;
const SHOOTER_COLOUR = "#00478A";
    
function ShootingEnemy(parameters){
    let params = Object.assign(parameters, {height: SHOOTING_HEIGHT, width: SHOOTING_WIDTH, speed: SHOOTING_SPEED, colour: SHOOTER_COLOUR})

    Enemy.call(this, params);

    this.missiles = [];
}

ShootingEnemy.prototype = Object.create(Enemy.prototype);
ShootingEnemy.prototype.constructor = ShootingEnemy;

ShootingEnemy.prototype.fire = function(){
    var yPos = this.y + this.height/2;
    let missile = {
        x: this.x,
		y: yPos,
    };
	this.missiles.push(new ShooterMissile(missile));
}

ShootingEnemy.prototype.canFire = function(){
	let m = onFieldCollection(this.missiles);
    return m.length === 0 || m[m.length-1].originalX - m[m.length-1].x > m[0].timing
}