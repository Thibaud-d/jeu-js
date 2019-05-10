"use strict";

const TOP = 38;
const BOTTOM = 40;
const RIGHT = 39;
const LEFT = 37;
let index = 0;
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
game.positionOldX;
game.positionOldY;



/**
 * @function 
 */

function logKey(event) {
    switch (event.keyCode) {
        case RIGHT:
            game.positionX++;
            game.level[game.positionY][game.positionX] = '#';

            console.log(game.level);

            // if (index < game.level.length) {
            //     index++
            //     game.positionOldX = game.positionX
            //     game.positionX = level1[index]
            //     console.log(index);
            //     console.log(level1.length);
            // } else
            //     console.log('finish');

            break;
        case LEFT:

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