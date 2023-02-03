import { canvas, context, config } from "./canvas.js";
import { controls, keys } from "../components/input/getInput.js";
import { scene } from "./scene.js";

export function renderFrame(time) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    scene.gameObjects.forEach(gameObject => {
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

    scene.keys = keys;
    scene.controls = controls;
    /*if (!scene.paused)*/ requestAnimationFrame(renderFrame);
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
    const pos = offsetPos(gameObject);
    //const scale = offsetScale(gameObject);
    //console.log(gameObject.size);

    context.fillStyle = gameObject.clr;
    context.fillRect(pos.x, pos.y, gameObject.width, gameObject.height);
    //console.log(gameObject.src[gameObject.frame]);
}

function offsetPos(gameObject) {
    let output = gameObject.pos;

    return {
        x: (
            (canvas.width / 2) // moves the origin point from the centre to the top left
            + ((output.x / config.screenWidth) * canvas.width) // scales the position relative to the window size
            - (gameObject.width / 2) // centres the pos from the gameObject's centre to the top left
        ),
        y: (
            (canvas.height / 2)
            - ((output.y / config.screenHeight) * canvas.height)
            - (gameObject.height / 2)
        )
    }
}
/*
function offsetScale(gameObject) {
    let output = { x: gameObject.width, y: gameObject.height };
    return {
        x: ((canvas.width / output.x) / config.screenWidth),
        y: ((canvas.height / output.y) / config.screenHeight)
    }
}
*/

