const ENEMY_Y_POSITIONS = [40, 80, 120, 160, 200, 240, 280, 320, 360];
const ENEMY_X = 650;
const STANDARD_COLOUR = "green";

function Enemy(parameters) {
    this.x = parameters.x || ENEMY_X;
    this.y = parameters.y;
    this.height = parameters.height;
    this.width = parameters.width;
    this.speed = parameters.speed;

    this.timing = parameters.timing;
    this.colour = parameters.colour || STANDARD_COLOUR;
    this.onField = true
}

Enemy.prototype.draw = function() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.colour;
    ctx.fill();
    ctx.closePath();
}

Enemy.prototype.offGrid = function() {
    return this.x + this.width <= 0
}