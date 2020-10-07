const ZIG_ZAG_TIMER = _.range(10, 21);
const ZIG_ZAG_HEIGHT = 10;
const ZIG_ZAG_WIDTH = 20;
const X_SPEED = 2;
const Y_SPEED = 2;
const VERTICAL_MOVEMENT = 40;

function ZigZagEnemy(){

    Enemy.call(this);
}


ZigZagEnemy.prototype = Object.create(Enemy.prototype);
ZigZagEnemy.prototype.constructor = ZigZagEnemy;

ZigZagEnemy.prototype.init = function(){

    Enemy.prototype.call(this);
}

ZigZagEnemy.prototype.initWithParameters = function(parameters){

    let params = Object.assign(parameters, {height: SHOOTING_HEIGHT, width: SHOOTING_WIDTH})

    Enemy.prototype.initWithParameters.call(this, params);

    this.ySpeed = Y_SPEED;
    this.xSpeed = X_SPEED; 
    this.verticalMovement = VERTICAL_MOVEMENT;
}