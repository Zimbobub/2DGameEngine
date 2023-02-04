import { Circle, Square } from "./gameObject.js";
import { controls } from '../engine/components/input/getInput.js';

export class Player extends Circle {
    constructor() {
        super(100, '#ffffff');
        this.pos = { x: 0, y: 0 };
        this.rot = 0;

        let gameObject = this;
        this.components.loop = function () {
            //console.log(gameObject);
            if (controls.length == 0) return;

            const playerSpeed = 1;

            if (controls.includes('up')) { gameObject.pos.y += playerSpeed; }
            else if (controls.includes('down')) { gameObject.pos.y -= playerSpeed; }

            if (controls.includes('left')) { gameObject.pos.x -= playerSpeed; }
            else if (controls.includes('right')) { gameObject.pos.x += playerSpeed; }
            console.clear();
            //console.log(gameObject.pos);
        }
    }
}