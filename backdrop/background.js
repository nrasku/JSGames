CANVAS_WIDTH = 600;
CANVAS_HEIGTH = 380;
BACKGROUND_SPEED = -0.3;

function Background(item) {
    this.x = item.x;
    this.y = item.y;
    this.width = item.width || CANVAS_WIDTH;
    this.heigth = item.height || CANVAS_HEIGTH;
    this.speed = item.speed || BACKGROUND_SPEED;
    this.image = new Image();
    this.image.src = item.src;
}

Background.prototype.draw = function() {
    ctx.drawImage(this.image, 
        this.x, 
        this.y, this.width, this.heigth);
    
}

Background.prototype.update = function() {
    this.x += this.speed;
    if (this.x <= -(this.width - CANVAS_WIDTH)) {
        this.x = 0;
    }
}