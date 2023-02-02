import { ImageGameObject, Square, Circle } from './engine/gameObject.js';
import { controls } from './engine/input/getInput.js';
import { scene } from './engine/scene.js';


let player = new Square(
    { x: 25, y: 0 },
    0,
    10,
    '#ffffff'
);

player.loop = function () {
    if (controls.length == 0) return;

    const playerSpeed = 0.01;

    //if (controls.includes('up')) { this.pos.y += playerSpeed; }
    //else if (controls.includes('down')) { this.pos.y -= playerSpeed; }

    //if (controls.includes('left')) { this.pos.x -= playerSpeed; }
    //else if (controls.includes('right')) { this.pos.x += playerSpeed; }
    console.log(controls, this.pos);
}

//console.log(scene);