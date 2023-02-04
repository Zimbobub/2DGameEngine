import { scene } from "../engine/scene.js";

export class GameObject {
    constructor(pos, rot, size) {
        this.renderType = 'default';
        this.pos = pos;
        this.rot = rot;

        this.width = size;
        this.height = size;


        this.components = {
            // functions
            start: new Function(),
            loop: new Function(),
            fixedLoop: new Function(),
            // physics
            physics: {
                gravity: { x: 0, y: 0 },
                friction: { x: 0, y: 0 },

                collider: {}
            }
        };

        scene.gameObjects.push(this);
    }
}

export class Square extends GameObject {
    constructor(size, clr) {
        super();

        this.width = size;
        this.height = size;

        this.renderType = 'square';
        this.clr = this.clr = clr ? clr : '#ffffff';
    }
}