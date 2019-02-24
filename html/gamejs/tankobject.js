// data for testing
//const tankData = {'height': 31, 'width': 49, 'pixels': [[12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0], [20, 0], [12, 1], [20, 1], [12, 2], [20, 2], [12, 3], [20, 3], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4], [12, 4], [13, 4], [14, 4], [15, 4], [16, 4], [17, 4], [18, 4], [19, 4], [20, 4], [21, 4], [22, 4], [23, 4], [24, 4], [25, 4], [26, 4], [27, 4], [28, 4], [29, 4], [30, 4], [31, 4], [6, 5], [31, 5], [6, 6], [31, 6], [32, 6], [33, 6], [34, 6], [35, 6], [36, 6], [37, 6], [38, 6], [39, 6], [40, 6], [41, 6], [42, 6], [43, 6], [44, 6], [45, 6], [46, 6], [47, 6], [48, 6], [49, 6], [6, 7], [31, 7], [45, 7], [49, 7], [6, 8], [31, 8], [45, 8], [49, 8], [6, 9], [31, 9], [45, 9], [49, 9], [6, 10], [31, 10], [32, 10], [33, 10], [34, 10], [35, 10], [36, 10], [37, 10], [38, 10], [39, 10], [40, 10], [41, 10], [42, 10], [43, 10], [44, 10], [45, 10], [46, 10], [47, 10], [48, 10], [49, 10], [6, 11], [7, 11], [8, 11], [9, 11], [10, 11], [11, 11], [12, 11], [13, 11], [14, 11], [15, 11], [16, 11], [17, 11], [18, 11], [19, 11], [20, 11], [21, 11], [22, 11], [23, 11], [24, 11], [25, 11], [26, 11], [27, 11], [28, 11], [29, 11], [30, 11], [31, 11], [0, 12], [1, 12], [2, 12], [3, 12], [4, 12], [5, 12], [6, 12], [7, 12], [8, 12], [9, 12], [10, 12], [11, 12], [12, 12], [13, 12], [14, 12], [15, 12], [16, 12], [17, 12], [18, 12], [19, 12], [20, 12], [21, 12], [22, 12], [23, 12], [24, 12], [25, 12], [26, 12], [27, 12], [28, 12], [29, 12], [30, 12], [31, 12], [32, 12], [33, 12], [34, 12], [35, 12], [36, 12], [37, 12], [38, 12], [39, 12], [40, 12], [41, 12], [42, 12], [43, 12], [0, 13], [43, 13], [0, 14], [43, 14], [0, 15], [43, 15], [0, 16], [43, 16], [0, 17], [43, 17], [0, 18], [43, 18], [0, 19], [43, 19], [0, 20], [43, 20], [0, 21], [43, 21], [0, 22], [3, 22], [4, 22], [5, 22], [6, 22], [7, 22], [8, 22], [9, 22], [10, 22], [11, 22], [12, 22], [13, 22], [14, 22], [15, 22], [16, 22], [17, 22], [18, 22], [19, 22], [20, 22], [21, 22], [22, 22], [23, 22], [24, 22], [25, 22], [26, 22], [27, 22], [28, 22], [29, 22], [30, 22], [31, 22], [32, 22], [33, 22], [34, 22], [35, 22], [36, 22], [37, 22], [38, 22], [39, 22], [40, 22], [41, 22], [43, 22], [0, 23], [3, 23], [41, 23], [43, 23], [0, 24], [3, 24], [41, 24], [43, 24], [0, 25], [3, 25], [41, 25], [43, 25], [0, 26], [3, 26], [41, 26], [43, 26], [0, 27], [1, 27], [2, 27], [3, 27], [4, 27], [5, 27], [6, 27], [7, 27], [8, 27], [9, 27], [10, 27], [11, 27], [12, 27], [13, 27], [14, 27], [15, 27], [16, 27], [17, 27], [18, 27], [19, 27], [20, 27], [21, 27], [22, 27], [23, 27], [24, 27], [25, 27], [26, 27], [27, 27], [28, 27], [29, 27], [30, 27], [31, 27], [32, 27], [33, 27], [34, 27], [35, 27], [36, 27], [37, 27], [38, 27], [39, 27], [40, 27], [41, 27], [42, 27], [43, 27], [3, 28], [41, 28], [3, 29], [41, 29], [3, 30], [41, 30], [3, 31], [4, 31], [5, 31], [6, 31], [7, 31], [8, 31], [9, 31], [10, 31], [11, 31], [12, 31], [13, 31], [14, 31], [15, 31], [16, 31], [17, 31], [18, 31], [19, 31], [20, 31], [21, 31], [22, 31], [23, 31], [24, 31], [25, 31], [26, 31], [27, 31], [28, 31], [29, 31], [30, 31], [31, 31], [32, 31], [33, 31], [34, 31], [35, 31], [36, 31], [37, 31], [38, 31], [39, 31], [40, 31], [41, 31]]}

const tankData = {'height': 31, 'bottomlength': 39, 'pixels': [[12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0], [20, 0], [12, 1], [20, 1], [12, 2], [20, 2], [12, 3], [20, 3], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4], [12, 4], [13, 4], [14, 4], [15, 4], [16, 4], [17, 4], [18, 4], [19, 4], [20, 4], [21, 4], [22, 4], [23, 4], [24, 4], [25, 4], [26, 4], [27, 4], [28, 4], [29, 4], [30, 4], [31, 4], [6, 5], [31, 5], [6, 6], [31, 6], [32, 6], [33, 6], [34, 6], [35, 6], [36, 6], [37, 6], [38, 6], [39, 6], [40, 6], [41, 6], [42, 6], [43, 6], [44, 6], [45, 6], [46, 6], [47, 6], [48, 6], [49, 6], [6, 7], [31, 7], [45, 7], [49, 7], [6, 8], [31, 8], [45, 8], [49, 8], [6, 9], [31, 9], [45, 9], [49, 9], [6, 10], [31, 10], [32, 10], [33, 10], [34, 10], [35, 10], [36, 10], [37, 10], [38, 10], [39, 10], [40, 10], [41, 10], [42, 10], [43, 10], [44, 10], [45, 10], [46, 10], [47, 10], [48, 10], [49, 10], [6, 11], [7, 11], [8, 11], [9, 11], [10, 11], [11, 11], [12, 11], [13, 11], [14, 11], [15, 11], [16, 11], [17, 11], [18, 11], [19, 11], [20, 11], [21, 11], [22, 11], [23, 11], [24, 11], [25, 11], [26, 11], [27, 11], [28, 11], [29, 11], [30, 11], [31, 11], [0, 12], [1, 12], [2, 12], [3, 12], [4, 12], [5, 12], [6, 12], [7, 12], [8, 12], [9, 12], [10, 12], [11, 12], [12, 12], [13, 12], [14, 12], [15, 12], [16, 12], [17, 12], [18, 12], [19, 12], [20, 12], [21, 12], [22, 12], [23, 12], [24, 12], [25, 12], [26, 12], [27, 12], [28, 12], [29, 12], [30, 12], [31, 12], [32, 12], [33, 12], [34, 12], [35, 12], [36, 12], [37, 12], [38, 12], [39, 12], [40, 12], [41, 12], [42, 12], [43, 12], [0, 13], [43, 13], [0, 14], [43, 14], [0, 15], [43, 15], [0, 16], [43, 16], [0, 17], [43, 17], [0, 18], [43, 18], [0, 19], [43, 19], [0, 20], [43, 20], [0, 21], [43, 21], [0, 22], [3, 22], [4, 22], [5, 22], [6, 22], [7, 22], [8, 22], [9, 22], [10, 22], [11, 22], [12, 22], [13, 22], [14, 22], [15, 22], [16, 22], [17, 22], [18, 22], [19, 22], [20, 22], [21, 22], [22, 22], [23, 22], [24, 22], [25, 22], [26, 22], [27, 22], [28, 22], [29, 22], [30, 22], [31, 22], [32, 22], [33, 22], [34, 22], [35, 22], [36, 22], [37, 22], [38, 22], [39, 22], [40, 22], [41, 22], [43, 22], [0, 23], [3, 23], [41, 23], [43, 23], [0, 24], [3, 24], [41, 24], [43, 24], [0, 25], [3, 25], [41, 25], [43, 25], [0, 26], [3, 26], [41, 26], [43, 26], [0, 27], [1, 27], [2, 27], [3, 27], [4, 27], [5, 27], [6, 27], [7, 27], [8, 27], [9, 27], [10, 27], [11, 27], [12, 27], [13, 27], [14, 27], [15, 27], [16, 27], [17, 27], [18, 27], [19, 27], [20, 27], [21, 27], [22, 27], [23, 27], [24, 27], [25, 27], [26, 27], [27, 27], [28, 27], [29, 27], [30, 27], [31, 27], [32, 27], [33, 27], [34, 27], [35, 27], [36, 27], [37, 27], [38, 27], [39, 27], [40, 27], [41, 27], [42, 27], [43, 27], [3, 28], [41, 28], [3, 29], [41, 29], [3, 30], [41, 30], [3, 31], [4, 31], [5, 31], [6, 31], [7, 31], [8, 31], [9, 31], [10, 31], [11, 31], [12, 31], [13, 31], [14, 31], [15, 31], [16, 31], [17, 31], [18, 31], [19, 31], [20, 31], [21, 31], [22, 31], [23, 31], [24, 31], [25, 31], [26, 31], [27, 31], [28, 31], [29, 31], [30, 31], [31, 31], [32, 31], [33, 31], [34, 31], [35, 31], [36, 31], [37, 31], [38, 31], [39, 31], [40, 31], [41, 31]], 'width': 49, 'bottompixel': [[3, 31], [4, 31], [5, 31], [6, 31], [7, 31], [8, 31], [9, 31], [10, 31], [11, 31], [12, 31], [13, 31], [14, 31], [15, 31], [16, 31], [17, 31], [18, 31], [19, 31], [20, 31], [21, 31], [22, 31], [23, 31], [24, 31], [25, 31], [26, 31], [27, 31], [28, 31], [29, 31], [30, 31], [31, 31], [32, 31], [33, 31], [34, 31], [35, 31], [36, 31], [37, 31], [38, 31], [39, 31], [40, 31], [41, 31]]}


class Tank {

    constructor() {
        this.height = tankData['height'];
        this.width = tankData['width'];
        this.pixels = tankData['pixels'];
        this.bottompixel = tankData['bottompixel'];
        this.bottomlength = tankData['bottomlength'];
        this.xoffset = 0;
        this.yoffset = 0;
    }

    setAngle() {
        let start = gameMap.getYPixel(this.xoffset);
        let end = gameMap.getYPixel(this.xoffset + this.width);
        let heightDif = start - end;

        this.angle = -(heightDif / this.width);
    }

    setYOffset(x) {
        this.yoffset = gameMap.getYPixel(this.xoffset) - this.height;
    }

    draw() {
        this.setAngle();
        this.setYOffset();
        let adder = 0;

        for(let pix of this.pixels){
            adder = this.angle * pix[0];

            point(pix[0] + this.xoffset, pix[1] + this.yoffset + adder);
        }
    }

    setoffset(x, y){
        this.xoffset = x;
        this.yoffset = y;
    }

    moveLeft() {
        this.xoffset -= 5;
        if (this.xoffset < 0){
            this.xoffset = 0;
        }
    }

    moveRight() {
        this.xoffset += 5;
        if (this.xoffset > GAME_WIDTH - this.width - 1){
            this.xoffset = GAME_WIDTH - this.width - 1;
        }
    }
}
