const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

let tank1;

function setup() {
    createCanvas(GAME_WIDTH, GAME_HEIGHT);
    frameRate(20);

    tank1 = new Tank();
    tank1.setoffset(1100, GAME_HEIGHT / 2 - tank1.height);
}

function draw() {
    clear();
    drawGameLevel();


    if (keyIsDown(LEFT_ARROW)) {
        tank1.moveLeft();
    } else if (keyIsDown(RIGHT_ARROW)) {
        tank1.moveRight();
    }

    tank1.draw();
}
