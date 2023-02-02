import { controlScheme } from "./controlScheme.js";

export let keys = [];
export let controls = [];

window.onkeydown = function (event) {
    if (!keys.includes(event.code)) {
        keys.push(event.code);
    }
    handleControlScheme();
    //console.log(event);
    //console.clear();
    //console.log(keys);
    //console.log(controls);
}

window.onkeyup = function (event) {
    if (keys.includes(event.code)) {
        keys.splice(keys.indexOf(event.code), 1);
    }
    handleControlScheme()
    //console.clear();
    //console.log(keys);
    //console.log(controls);
}

window.onblur = function (event) {
    keys = [];
    controls = [];
    //console.clear();
    //console.log(keys);
    //console.log(controls);
}

function handleControlScheme() {
    controls = [];
    keys.forEach(key => {
        let schemes = Object.keys(controlScheme);
        schemes.forEach(scheme => {
            if (controlScheme[scheme].includes(key/*.toUpperCase()*/)) controls.push(scheme);
        });
    });
}