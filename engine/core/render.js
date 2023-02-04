import { canvas, context, config } from "./canvas.js";
import { scene } from "./scene.js";

import { keys, controls, mousePos, mouseEvents, clearEvents } from "../components/input/input.js";
import { toBrowserPos } from "../utils/pos.js";

export function renderFrame(time) {
    // clear screen
    context.clearRect(0, 0, canvas.width, canvas.height);

    // keyboard
    //scene.keys = keys;
    //scene.controls = controls;
    // mouse
    //scene.mousePos = mousePos;
    //scene.events = events;

    // render each gameObject based on renderType
    scene.gameObjects.forEach(gameObject => {
        // run the gameObject's loop function
        gameObject.components.loop();

        switch (gameObject.renderType) {
            case 'image':
                renderImage(gameObject);
                break;

            case 'square':
                renderSquare(gameObject);
                break;

            case 'circle':
                renderCircle(gameObject);
                break;

            default:
                throw new Error('Invalid GameObject Type');
        }

    });

    // clear events before next frame
    clearEvents();
    // call next frame at monitor refresh rate
    if (!scene.paused) requestAnimationFrame(renderFrame);
}

function renderImage(gameObject) {
    let pos = offsetPos(gameObject.pos);
    context.drawImage(
        gameObject.src[gameObject.frame],
        pos.x,
        pos.y,
        gameObject.src[gameObject.frame].width,
        gameObject.src[gameObject.frame].height
    );
    //console.log(gameObject.src[gameObject.frame]);
}

function renderSquare(gameObject) {
    const pos = toBrowserPos(gameObject);
    //const scale = offsetScale(gameObject);
    //console.log(gameObject);

    context.fillStyle = gameObject.clr;
    context.fillRect(pos.x, pos.y, gameObject.width, gameObject.height);
    //console.log(gameObject.src[gameObject.frame]);
}

function renderCircle(gameObject) {
    const pos = toBrowserPos(gameObject);
    //const scale = offsetScale(gameObject);
    //console.log(gameObject);

    context.fillStyle = gameObject.clr;
    //context.fillRect(pos.x, pos.y, gameObject.width, gameObject.height);
    context.beginPath();
    context.arc(pos.x, pos.y, gameObject.width, 0, (2 * Math.PI));
    context.fill()
    //console.log(gameObject.src[gameObject.frame]);
}

