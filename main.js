import { ImageGameObject, Square, Circle } from './engine/gameObject.js';
import { controls } from './components/input/getInput.js';
import { scene } from './engine/scene.js';
import { Player } from './gameObjects/player.js';

let player = new Player();
let player2 = new Player();
player2.pos.x += 20;

console.log(scene);