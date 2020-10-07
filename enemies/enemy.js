const ENEMY_Y_POSITIONS = [40, 80, 120, 160, 200, 240, 280, 320, 360];

function Enemy() {

}

Enemy.prototype = {

    "init":function(){
        this.x = 0
        this.y = 0

        this.onField = true
    },

    "initWithParameters":function(parameters){
        this.x = parameters.x;
        this.y = parameters.y;
        this.height = parameters.height;
        this.width = parameters.width;
        this.speed = parameters.speed;

        this.onField = true
    }
}