import { Circle, Square } from "./gameObject.js";
import { controls, mouseEvents } from '../engine/components/input/input.js';

export class Player extends Square {
    constructor() {
        super(100, '#ffffff');
        this.pos = { x: 0, y: 0 };
        this.rot = 0;

        let gameObject = this;
        this.components.loop = function () {
            handleMovement(gameObject);
            click(gameObject);
        }
    }
}

function handleMovement(gameObject) {
    //console.log(gameObject);
    if (controls.length == 0) return;

    const playerSpeed = 1;

    if (controls.includes('up')) { gameObject.pos.y += playerSpeed; }
    else if (controls.includes('down')) { gameObject.pos.y -= playerSpeed; }

    if (controls.includes('left')) { gameObject.pos.x -= playerSpeed; }
    else if (controls.includes('right')) { gameObject.pos.x += playerSpeed; }
    //console.clear();
    //console.log(gameObject.pos);
}

function click(gameObject) {
    if (mouseEvents.length == 0) return;
    //console.log(mouseEvents);
    mouseEvents.forEach(event => {
        if (event.type == 'mouseDown') {
            gameObject.clr = '#999999';
        }
        else if (event.type == 'mouseUp') {
            gameObject.clr = '#ffffff';
        }
    });
}