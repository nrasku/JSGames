const STANDARD_TIMER = _.range(1, 21);
const STANDARD_HEIGHT = 14;
const STANDARD_WIDTH = 22;
const STANDARD_SPEED = 2;
const STANDARD_HUE = 120;

function StandardEnemy(parameters){
    let params = Object.assign(parameters, {height: STANDARD_HEIGHT, width: STANDARD_WIDTH, speed: STANDARD_SPEED, hue: STANDARD_HUE});

    Enemy.call(this, params);
}


StandardEnemy.prototype = Object.create(Enemy.prototype);
StandardEnemy.prototype.constructor = StandardEnemy;