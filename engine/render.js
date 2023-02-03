import { canvas, context } from "./canvas.js";
import { controls, keys } from "./input/getInput.js";
import { scene } from "./scene.js";

export function renderFrame(time) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    scene.gameObjects.forEach(gameObject => {

        //if (time == 0) gameObject.start();
        gameObject.loop();

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
    //console.log(/*offsetPos(*/gameObject.pos/*)*/);
    const pos = offsetPos(gameObject.pos);
    //console.log(pos);
    context.fillStyle = gameObject.clr;
    context.fillRect(pos.x, pos.y, gameObject.size, gameObject.size);
    //console.log(gameObject.src[gameObject.frame]);
}

// OLD
function aoffsetPos(pos) {
    console.log(pos);
    let output = pos;
    const scale = 100;


    //console.log(output);

    // scale independant of resolution
    output.x = (output.x / scale) * canvas.width;
    output.y = (output.y / scale) * canvas.height;
    //console.log(output);
    console.log(pos);
    // offset to centre
    output.x -= (canvas.width / 2);
    output.y -= (canvas.height / 2);
    //console.log(output);


    console.log(pos);
    return output;
}

function offsetPos(pos) {
    let output = pos;
    const screenWidth = 100;
    const screenHeight = 50;
    return {
        x: ((canvas.width / 2) + ((output.x / screenWidth) * canvas.width)),
        y: ((canvas.height / 2) - ((output.y / screenWidth) * canvas.height))
    }
}


