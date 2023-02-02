import { canvas, context } from "./canvas.js";
import { controls, keys } from "./input/getInput.js";
import { scene } from "./scene.js";

export function renderFrame() {
    scene.gameObjects.forEach(gameObject => {
        switch (gameObject.type) {
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
                break;
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
    let pos = offsetPos(gameObject.pos);
    context.fillStyle = gameObject.clr;
    context.fillRect(pos.x, pos.y, gameObject.size, gameObject.size);
    //console.log(gameObject.src[gameObject.frame]);
}


function offsetPos(pos) {
    const scale = 100;

    let output = pos;
    //console.log(output);

    // scale independant of resolution
    output.x = (output.x / scale) * canvas.width;
    output.y = (output.y / scale) * canvas.height
    //console.log(output);

    // offset to centre
    output.x += (canvas.width / 2);
    output.y += (canvas.height / 2);
    //console.log(output);



    return output;
}


