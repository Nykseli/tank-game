const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

let gameMap;
let tank1;


function setup() {
    createCanvas(GAME_WIDTH, GAME_HEIGHT);
    frameRate(20);

    gameMap = new GameMap();

    tank1 = new Tank();
    tank1.setoffset(800, GAME_HEIGHT / 2 - tank1.height);
    // gameMap.draw();
    // tank1.draw();
}

function draw() {
    clear();
    //drawGameLevel();
    gameMap.draw();

    if (keyIsDown(LEFT_ARROW)) {
        tank1.moveLeft();
    } else if (keyIsDown(RIGHT_ARROW)) {
        tank1.moveRight();
    } else if (keyIsDown(ENTER)) {
        tank1.shoot();
    }

    tank1.draw();
}
