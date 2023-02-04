import { scene } from './engine/core/scene.js';
import { Player } from './gameObjects/player.js';

let player = new Player();
let player2 = new Player();
player2.pos.x += 20;

console.log(scene);