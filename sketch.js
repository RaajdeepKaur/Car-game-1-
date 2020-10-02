var database;
var playerCount;
var gameState;
var formObj, playerObj, gameObj;


function setup(){
    createCanvas(500,500);
    database = firebase.database();
    playerCount = 0;
    gameState = 0;

    formObj = new Form();
    playerObj = new Player();
    gameObj = new Game();

    playerObj.readPlayerCount();
    playerObj.updatePlayerCount();
    gameObj.readGameState();
    gameObj.updateGameState();

}

function draw(){
    background("white");

    
}

