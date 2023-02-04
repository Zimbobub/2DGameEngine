import { Circle, Square } from "./gameObject.js";
import { controls, mouseEvents, mousePos } from '../engine/components/input/input.js';
import { scene } from "../engine/core/scene.js";

export class Gun extends Square {
    constructor() {
        super(20, '#ffffff');
        this.pos = { x: 0, y: 0 };
        this.rot = 0;

        let gameObject = this;
        this.components.loop = function () {
            //setPosRelative(gameObject);
            //click(gameObject);
        }
    }
}

function setPosRelative(gameObject) {
    const parent = scene.gameObjects[0];
    const angle = getMouseAngle(parent.pos, mousePos);
    //console.log(angle);
    gameObject.pos = {
        x: parent.pos.x + 5,
        y: parent.pos.y + 5
    }
}

function getMouseAngle(p1, p2) {
    console.log(p1, p2);
    return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
}

/*
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
*/