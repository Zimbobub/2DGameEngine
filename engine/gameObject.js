import { scene } from "./scene.js";

export class ImageGameObject {
    constructor(pos, rot, src) {
        this.renderType = 'image';
        this.pos = pos;
        this.rot = rot;
        // creates an array of all images used for the sprite
        this.src = [];
        this.frame = 0;
        src.forEach(img => {
            let image = new Image();
            image.src = img;

            this.src.push(image);
        });

        this.width = this.src.width;
        this.height = this.src.height;

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

export class Square {
    constructor(pos, rot, size, clr) {
        this.renderType = 'square';
        this.pos = pos;
        this.rot = rot;

        this.width = size;
        this.height = size;

        this.clr = clr ? clr : '#ffffff';

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

export class Circle {
    constructor(pos, rot, size, clr) {
        this.renderType = 'circle';
        this.pos = pos;
        this.rot = rot;

        this.width = size;
        this.height = size;

        this.clr = clr ? clr : '#ffffff';

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