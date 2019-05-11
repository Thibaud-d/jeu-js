"use strict";

const TOP = 38;
const BOTTOM = 40;
const RIGHT = 39;
const LEFT = 37;
let level1 = [
    ['#', '0', '0', '0', '0', '0', 'A']
];
let level2 = [
    ['#', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', 'A']
];
let game = new Object();

game.level = level1;
game.positionX = 0;
game.positionY = 0;
game.positionOldX = 0;
game.positionOldY= 0;



/**
 * @function 
 */

function logKey(event) {
    switch (event.keyCode) {
        case RIGHT:
            game.positionOldX = game.positionX 
            game.positionX++;
            game.level[game.positionY][game.positionX] = '#';
            game.level[game.positionOldY][game.positionOldX] = '0';
            console.log(game.level[0][0].lenght);
            break;
        case LEFT:
            game.positionOldX = game.positionX 
            game.positionX--;
            game.level[game.positionY][game.positionX] = '#';
            game.level[game.positionOldY][game.positionOldX] = '0';
            console.log(game.level)
            break;
        case TOP:
    
            break;
        case BOTTOM:
    
            break;
    }
}

document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('keydown', logKey);
});