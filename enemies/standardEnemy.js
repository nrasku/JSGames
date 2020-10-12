const STANDARD_TIMER = _.range(1, 21);
const STANDARD_HEIGHT = 14;
const STANDARD_WIDTH = 22;
const STANDARD_SPEED = 2;

function StandardEnemy(parameters){
    let params = Object.assign(parameters, {height: STANDARD_HEIGHT, width: STANDARD_WIDTH, speed: STANDARD_SPEED})

    Enemy.call(this, params);
}


StandardEnemy.prototype = Object.create(Enemy.prototype);
StandardEnemy.prototype.constructor = StandardEnemy;