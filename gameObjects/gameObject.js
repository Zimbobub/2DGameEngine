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

export class ImageGameObject extends GameObject {
    constructor(src) {
        super();

        this.renderType = 'image';

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
    }
}

export class Square extends GameObject {
    constructor(size, clr) {
        super();

        this.renderType = 'square';

        this.width = size;
        this.height = size;

        this.clr = this.clr = clr ? clr : '#ffffff';
    }
}

export class Circle extends GameObject {
    constructor(size, clr) {
        super();

        this.renderType = 'circle';

        this.width = size;
        this.height = size;

        this.clr = clr ? clr : '#ffffff';
    }
}