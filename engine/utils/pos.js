import { config } from "../core/canvas.js";

export function toBrowserPos(gameObject) {
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


export function offsetScale(gameObject) {
    let output = { x: gameObject.width, y: gameObject.height };
    return {
        x: ((config.screenWidth / (canvas.width / 1)) * output.x),
        y: ((config.screenHeight / (canvas.height / 1)) * output.y)
    }
}


