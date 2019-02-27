
class GameMap {

    constructor(level, background){
        this.level = level["pixels"];
        this.background = background["pixels"];
    }

    /**
     * Draw background pixels from tankdata/level_background.json.
     * beginShape(POINTS) needs to be called before calling this
     *
     * @method _drawBackground
     * @private
     * @return {Undefined}
     */
    _drawBackground() {
        for(let pix in this.background){
            vertex(this.background[pix][0], this.background[pix][1]);
        }
    }

    /**
     * Draw level pixels from tankdata/level_main.json.
     * beginShape(POINTS) needs to be called before calling this
     *
     * @method _drawLevel
     * @private
     * @return {Undefined}
     */
    _drawLevel() {
        for(let pix of this.level){
            vertex(pix[0], pix[1]);
        }
    }

    /**
     * Main draw function.
     * Draws the level and it's background
     *
     * @method draw
     * @public
     * @return {Undefined}
     */
    draw() {
        background(0);
        stroke(255);

        beginShape(POINTS);
        this.drawBackground();
        this.drawLevel();
        endShape();

    }

    /**
     * Get Y pixel from main map layout in X position
     *
     * @method getYPixel
     * @public
     * @param {Number} _i X position
     * @return {Number}
     */
    getYPixel(_i){
        return this.level[_i][1];
    }

    /**
     * Get Y pixels from main map layout between two X positions
     *
     * @method getYPixels
     * @public
     * @param {Number} sIndex start X position
     * @param {Number} eIndex end X position
     * @return {Int32Array}
     */
    getYPixels(sIndex, eIndex) {
        let pixels = this.level.slice(sIndex, eIndex);
        let yList = [];

        for (let pixel of pixels){
            yList.push(pixel[1]);
        }

        return yList;

    }

}
