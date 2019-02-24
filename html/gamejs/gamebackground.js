const drawGameLevel = function() {
    background(0);

    stroke(255);
    for(let i = 0; i < GAME_WIDTH; i++){
        point(i, GAME_HEIGHT/2);
    }
}
