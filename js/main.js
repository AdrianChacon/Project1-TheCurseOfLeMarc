var newBoard, bomberman1, bomberman2, numObs = 3, newObs, newBomb, fps = 60;
var now = Date.now(), delta = 0, then;
var tecla1 = [], tecla2 = [];

$(document).keydown(function (e) {
    if (tecla1.length == 0) {
        tecla1.push('1');
        switch (e.which) {
            case 32: // p1.bomb
                bomberman1.dropTheBomb();
                break;
            case 37: // p1.left
                bomberman1.moveX(-1);
                bomberman1.collisionDirX = -1
                break;
            case 38: // p1.up
                bomberman1.moveY(-1);
                bomberman1.collisionDirY = -1
                break;
            case 39: // p1.right
                bomberman1.moveX(1);
                bomberman1.collisionDirX = 1
                break;
            case 40: // p1.down
                bomberman1.moveY(1);
                bomberman1.collisionDirY = 1
                break;
        };
    }
    if (tecla2.length == 0) {
        tecla2.push('2')
        switch (e.which) {
            case 84: // p2.bomb
                bomberman2.dropTheBomb();
                break;
            case 65: // p2.left
                bomberman2.moveX(-1);
                bomberman2.collisionDirX = -1
                break;
            case 87: // p2.up
                bomberman2.moveY(-1);
                bomberman2.collisionDirY = -1
                break;
            case 68: // p2.right
                bomberman2.moveX(1);
                bomberman2.collisionDirX = 1
                break;
            case 83: // p2.down
                bomberman2.moveY(1);
                bomberman2.collisionDirY = 1
                break;
        }
    }
});
$(document).keyup(function (e) {
    if (tecla1.length == 1) {
        switch (e.which) {
            case 32: // p1.bomb
                bomberman1.stop();
                break;
            case 37: // p1.left
                bomberman1.stop();
                break;
            case 38: // p1.up
                bomberman1.stop();
                break;
            case 39: // p1.right
                bomberman1.stop();
                break;
            case 40: // p1.down
                bomberman1.stop();
                break;
        }
        tecla1.pop();
    }
    if (tecla2.length == 1) {

        switch (e.which) {
            case 84: // p2.bomb
                bomberman2.stop();
                break;
            case 65: // p2.left
                bomberman2.stop();
                break;
            case 87: // p2.up
                bomberman2.stop();
                break;
            case 68: // p2.right
                bomberman2.stop();
                break;
            case 83: // p2.down
                bomberman2.stop();
                break;

        }
        tecla2.pop();
    }

});

function gameStart() {
    then = now;
    now = Date.now();
    delta = now - then;
    newBoard.render();
    newObs.render(newBoard);
    bomberman1.render(newBoard, delta);
    bomberman2.render(newBoard, delta);
    requestAnimationFrame(gameStart)
}
$(document).ready(function () {
    newBoard = new BoardCreator();
    bomberman1 = new BombermanCreator(80, 80);
    bomberman2 = new BombermanCreator(850, 590);
    newObs = new ObstacleCreator();
    newObs.createObs(newBoard, numObs);
    console.log(newBoard.map)
    gameStart();
});