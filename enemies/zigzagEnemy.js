const ZIG_ZAG_TIMER = _.range(10, 21);
const ZIG_ZAG_HEIGHT = 10;
const ZIG_ZAG_WIDTH = 20;
const X_SPEED = 1;
const Y_SPEED = 1;
const VERTICAL_MOVEMENT = 40;
const ZIG_ZAG_COLOUR = "purple"
const ZIG_ZAG_HUE = 300;
const ZIGZAG_PARTICLES = 25;

function ZigZagEnemy(parameters){
    let params = Object.assign(parameters, {height: ZIG_ZAG_HEIGHT, width: ZIG_ZAG_WIDTH, colour: ZIG_ZAG_COLOUR, hue: ZIG_ZAG_HUE, particles: ZIGZAG_PARTICLES});

    Enemy.call(this, params);

    this.originalY = this.y;
    this.ySpeed = Y_SPEED;
    this.xSpeed = X_SPEED; 
    this.verticalMovement = VERTICAL_MOVEMENT;
}


ZigZagEnemy.prototype = Object.create(Enemy.prototype);
ZigZagEnemy.prototype.constructor = ZigZagEnemy;