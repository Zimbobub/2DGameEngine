import { canvas, context } from './canvas.js';
import { renderFrame } from './render.js';

export class Scene {
    constructor() {
        this.gameObjects = [];

        this.keys = [];
        this.controls = [];

        this.paused = false;
    }
}

export let scene = new Scene();
renderFrame();

