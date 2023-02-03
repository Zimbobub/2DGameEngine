
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

class Square extends GameObject {
    constructor(clr) {
        this.renderType = 'square';
        this.clr = this.clr = clr ? clr : '#ffffff';
    }
}