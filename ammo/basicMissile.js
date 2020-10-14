const MISSILE_HEIGHT = 2;
const MISSILE_WIDTH = 5;
const MISSILE_SPEED = 3;
const MISSILE_COLOUR = "red";
const MISSILE_FIRE_RATE = 50;

function BasicMissile(parameters){
    let params = Object.assign(parameters, {height: MISSILE_HEIGHT, width: MISSILE_WIDTH, speed: MISSILE_SPEED, 
                                            colour: MISSILE_COLOUR, timing: MISSILE_FIRE_RATE, enemyFire: false})

    Missile.call(this, params);
}

BasicMissile.prototype = Object.create(Missile.prototype);
BasicMissile.prototype.constructor = BasicMissile;