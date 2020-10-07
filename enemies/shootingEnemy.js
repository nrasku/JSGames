const SHOOTING_TIMER =  _.range(15, 25);
const SHOOTING_WIDTH = 14;
const SHOOTING_HEIGHT = 10;
const SHOOTING_SPEED = 1;
const MISSILE_TIMING = 300;
    
function ShootingEnemy(){

    Enemy.call(this);
}

ShootingEnemy.prototype = Object.create(Enemy.prototype);
ShootingEnemy.prototype.constructor = ShootingEnemy;

ShootingEnemy.prototype.init = function(x, y){

    Enemy.prototype.call(this);

    this.setPosition(0, 0);
}

ShootingEnemy.prototype.initWithParameters = function(parameters){

    let params = Object.assign(parameters, {height: SHOOTING_HEIGHT, width: SHOOTING_WIDTH, speed: SHOOTING_SPEED})

    Enemy.prototype.initWithParameters.call(this, params);

    this.missileTiming = MISSILE_TIMING;
}