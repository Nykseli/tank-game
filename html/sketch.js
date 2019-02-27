const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

let gameMap;
let tank1;
let tank2;

let tank1Json;
let tank2Json;

let levelJson;
let backgroundJson;

function preload() {
    // Load the tank data from json files
    // Json files contains the tank shape etc
    tank1Json = loadJSON("tankdata/tank1.json");
    tank2Json = loadJSON("tankdata/tank2.json");

    // Load the game map data
    levelJson = loadJSON("tankdata/level_main.json");
    backgroundJson = loadJSON("tankdata/level_background.json");
}

function setup() {
    createCanvas(GAME_WIDTH, GAME_HEIGHT);
    frameRate(20);

    gameMap = new GameMap(levelJson, backgroundJson);
    tank1 = new Tank(tank1Json);
    tank1.setoffset(400, GAME_HEIGHT / 2 - tank1.height);
    tank2 = new Tank(tank2Json)
    tank2.setoffset(800, GAME_HEIGHT / 2 - tank2.height);

    // tank1 targets the tank2 and vice versa
    tank1.setTarget(tank2);
    tank2.setTarget(tank1);

}

function draw() {
    clear();
    //drawGameLevel();
    gameMap.draw();



    if (keyIsDown(LEFT_ARROW)) {
        tank2.moveLeft();
    } else if (keyIsDown(RIGHT_ARROW)) {
        tank2.moveRight();
    } else if (keyIsDown(ENTER)) {
        tank2.shoot(BULLET_DIR_LEFT);
    }

    // KeyCode 97 is 'a'
    if (keyCode === 97) {
        tank1.moveLeft();
        // KeyCode 100 is 'd'
    } else if (keyCode === 100) {
        tank1.moveRight();
    } else if (keyIsDown(SHIFT)) {
        tank1.shoot(BULLET_DIR_RIGHT);
    }
    tank1.draw();
    tank2.draw();
}
