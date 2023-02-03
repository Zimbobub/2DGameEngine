import { ImageGameObject, Square, Circle } from './engine/gameObject.js';
import { controls } from './components/input/getInput.js';
import { scene } from './engine/scene.js';


let player = new Square(
    { x: 0, y: 0 },
    0,
    100,
    '#ffffff'
);


player.components.loop = function () {
    //console.log(controls);
    if (controls.length == 0) return;

    const playerSpeed = 1;

    if (controls.includes('up')) { player.pos.y += playerSpeed; }
    else if (controls.includes('down')) { player.pos.y -= playerSpeed; }

    if (controls.includes('left')) { player.pos.x -= playerSpeed; }
    else if (controls.includes('right')) { player.pos.x += playerSpeed; }
    console.clear();
    console.log(player.pos);
}


console.log(scene);