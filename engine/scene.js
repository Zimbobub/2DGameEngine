import { canvas, context } from './canvas.js';
import { renderFrame } from './render.js';

export class Scene {
    constructor() {
        this.gameObjects = [];

        // input
        this.keys = [];
        this.controls = [];

        // physics
        this.gravity = { x: 0, y: -1 };
        this.friction = { x: 0.05, y: 0.05 };

        // flags
        this.paused = false;
    }
}

export let scene = new Scene();

scene.gameObjects.forEach(gameObject => {
    gameObject.components.start();
});

renderFrame();

