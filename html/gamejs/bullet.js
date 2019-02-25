
const BULLET_DIR_LEFT = 'LEFT';
const BULLET_DIR_RIGHT = 'RIGHT';

class Bullet {

    constructor() {
        this.xPos = 0;
        this.yPos = 0;
        // Bullet is 3x3 square
        this.size = 3;
        this.isAlive = false;
        this.dir;
        this.angle;
        this.target
    }

    shoot(dir, angle, target) {
        this.angle = angle;
        this.dir = dir;
        this.target = target;
        this.isAlive = true;
    }

    move() {
        this.yPos += this.angle * 1;
        switch (this.dir) {
            case BULLET_DIR_LEFT:
                this.xPos -= 1;
                break;
            case BULLET_DIR_RIGHT:
                this.xPos += 1;
                break;
            default:
                break;
        }

        if (this.yPos >= GAME_HEIGHT || this.yPos < 0){
            this.isAlive = false;
        }

        if (this.xPos >= GAME_WIDTH - 30 || this.xPos < 0){
            this.isAlive = false;
        }
    }

    setPos(x, y){
        this.xPos = x;
        this.yPos = y;
    }

    hitGround() {
        for (let mapP of mapData){
            if (this.xPos === mapP[0] && Math.floor(this.yPos) === mapP[1]){
                this.isAlive = false;
                break;
            }
        }
    }

    hitTarget() {
        for (let mapP of this.target.pixels) {
            if (this.xPos === mapP[0] && Math.floor(this.yPos) === mapP[1]){
                this.target.takeDamage();
                this.isAlive = false;
                break;
            }
        }
    }

    draw() {
        for (let i = 0; i< 10; i++) {
            if (!this.isAlive) continue;
            square(this.xPos, this.yPos, this.size);
            this.move();
            this.hitGround();
            this.hitTarget();
        }
    }


}
