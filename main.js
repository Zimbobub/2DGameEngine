import { ImageGameObject, Square, Circle } from './engine/gameObject.js';
import { controls } from './engine/input/getInput.js';
import { scene } from './engine/scene.js';


let player = new Square(
    { x: 25, y: 25 },
    0,
    10,
    '#ffffff'
);

player.loop = function () {
    //console.log(controls);
    if (controls.length == 0) return;

    const playerSpeed = 1;

    if (controls.includes('up')) { this.pos.y += playerSpeed; }
    else if (controls.includes('down')) { this.pos.y -= playerSpeed; }

    if (controls.includes('left')) { this.pos.x -= playerSpeed; }
    else if (controls.includes('right')) { this.pos.x += playerSpeed; }
    console.clear();
    console.log(player.pos);
}

console.log(scene);