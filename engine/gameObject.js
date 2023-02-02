import { scene } from "./scene.js";

export class GameObject {

}

export class ImageGameObject {
    constructor(pos, rot, src) {
        this.type = 'image';
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
        // functions that can be created and ran on startup and every frame
        this.start;
        this.loop;

        scene.gameObjects.push(this);
    }
}

export class Square {
    constructor(pos, rot, size, clr) {
        this.type = 'square';
        this.pos = pos;
        this.rot = rot;

        this.size = size;
        this.clr = clr ? clr : '#ffffff';

        // functions that can be created and ran on startup and every frame
        this.start;
        this.loop;

        scene.gameObjects.push(this);
    }
}

export class Circle {
    constructor(pos, rot, radius, clr) {
        this.type = 'circle';
        this.pos = pos;
        this.rot = rot;

        this.size = radius;
        this.clr = clr ? clr : '#ffffff';

        // functions that can be created and ran on startup and every frame
        this.start;
        this.loop;

        scene.gameObjects.push(this);
    }
}