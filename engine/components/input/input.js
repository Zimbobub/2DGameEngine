import { canvas, config } from "../../core/canvas.js";
import { controlScheme } from "./controlScheme.js";

export let keys = [];
export let controls = [];

export let mousePos = { x: 0, y: 0 };
export let mouseEvents = [];

export function clearEvents() {
    mouseEvents = [];
}

// keyboard input
window.onkeydown = function (event) {
    if (!keys.includes(event.code)) {
        keys.push(event.code);
    }
    handleControlScheme();
}

window.onkeyup = function (event) {
    if (keys.includes(event.code)) {
        keys.splice(keys.indexOf(event.code), 1);
    }
    handleControlScheme();
}

// mouse input
window.onmousedown = function (event) {
    if (event.target !== canvas) return;
    //console.log(event);
    if (!keys.includes('mouse1')) {
        keys.push('mouse1');
    }
    // adds mousedown to the event queue
    mouseEvents.push({
        type: 'mouseDown',
        pos: toEnginePos({ x: event.x, y: event.y })
    });
    //console.log(events[events.length - 1]);
}

window.onmouseup = function (event) {
    if (event.target !== canvas) return;
    //console.log(event);
    if (keys.includes('mouse1')) {
        keys.splice(keys.indexOf('mouse1'), 1);
    }

    mouseEvents.push({
        type: 'mouseUp',
        pos: toEnginePos({ x: event.x, y: event.y })
    });
    //console.log(events[events.length - 1]);
}

window.onmousemove = function (event) {
    //console.log(event.target);
    if (event.target !== canvas) return;

    mousePos = toEnginePos({
        x: (event.clientX),
        y: (event.clientY)
    });
    //console.log(mousePos);
}

function toEnginePos(pos) {
    let output = pos;

    const canvasPos = {
        x: (canvas.getBoundingClientRect().left + window.scrollX),
        y: (canvas.getBoundingClientRect().top + window.scrollY)
    };

    // moves 0,0 to top left of canvas instead of viewport
    output.x -= canvasPos.x;
    output.x -= canvasPos.y;
    // moves 0,0 to centre of canvas
    output.x -= (canvas.width / 4);
    output.y -= (canvas.height / 4);
    // scales pos based on resolution
    output.x = ((config.screenWidth / canvas.width) * output.x) * 2;
    output.y = 0 - ((config.screenHeight / canvas.height) * output.y) * 2;

    return output;
}

// reset if lose focus
window.onblur = function (event) {
    keys = [];
    controls = [];
}

function handleControlScheme() {
    controls = [];
    keys.forEach(key => {
        let schemes = Object.keys(controlScheme);
        schemes.forEach(scheme => {
            if (controlScheme[scheme].includes(key)) controls.push(scheme);
        });
    });
}