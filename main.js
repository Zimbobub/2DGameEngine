import { ImageGameObject, Square, Circle } from './engine/gameObject.js';
import { scene } from './engine/scene.js';


let player = new Square(
    { x: 25, y: 0 },
    0,
    10,
    '#ffffff'
);

//console.log(scene);