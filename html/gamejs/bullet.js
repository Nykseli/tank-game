
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

    /**
     * Shoot the bullet to target tank
     *
     * @method shoot
     * @public
     * @param {String} dir BULLET_DIR_LEFT or BULLET_DIR_RIGHT
     * @param {Float} angle Angle in witch the bullet is shot
     * @param {Tank} target The tank that the bullet tries to hit
     * @return {Undefined}
     */
    shoot(dir, angle, target) {
        this.angle = angle;
        this.dir = dir;
        this.target = target;
        this.isAlive = true;
    }

    /**
     * Move the bullet on the map
     *
     * @method move
     * @public
     * @return {Undefined}
     */
    move() {
        switch (this.dir) {
            case BULLET_DIR_LEFT:
                this.xPos -= 1;
                this.yPos -= this.angle;
                break;
            case BULLET_DIR_RIGHT:
                this.xPos += 1;
                this.yPos += this.angle;
                break;
            default:
                break;
        }

        if (this.yPos >= GAME_HEIGHT || this.yPos < 0){
            this.isAlive = false;
        }

        if (this.xPos >= GAME_WIDTH || this.xPos < 0){
            this.isAlive = false;
        }
    }

    /**
     * Set the starting x,y position of the bullet
     *
     * @method setPos
     * @public
     * @param {Number} x The x position
     * @param {Number} y The y position
     * @return {Undefined}
     */
    setPos(x, y){
        this.xPos = x;
        this.yPos = y;
    }

    /**
     * Check if the bullet has the map ground and this.isAlive to false
     * if it has
     *
     * @method hitGround
     * @public
     * @return {Undefined}
     */
    hitGround() {
        for (let mapP of levelJson['pixels']){
            // For each pixel in map, check if any of the bullet pixels has touch the ground
            for (let i = 0; i < this.size; i++) {
                for (let j = 0; j < this.size; j++) {
                    if (this.xPos + i === mapP[0] && Math.floor(this.yPos) + j === mapP[1]){
                        this.isAlive = false;
                        return;
                    }
                }
            }
        }
    }

     /**
     * Check if the bullet has the target tank and this.isAlive to false
     * and deal damage to the target tank if it has
     *
     * @method hitTarget
     * @public
     * @return {Undefined}
     */
    hitTarget() {
        for (let tarP of this.target.pixels) {
            // For each pixel in target tank, check if any of the bullet pixels has hit it
            for (let i = 0; i < this.size; i++) {
                for (let j = 0; j < this.size; j++) {
                    if (this.xPos + i === tarP[0] && Math.floor(this.yPos) + j === tarP[1]){
                        this.target.takeDamage();
                        this.isAlive = false;
                        return;
                    }
                }
            }
        }
    }

    /**
     * Main draw function.
     * Draws the bullet and moves it if it's alive
     *
     * @method draw
     * @public
     * @return {Undefined}
     */
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
