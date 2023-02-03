

// physics
export function addGravityComponent(gameObject, scene) {
    gameObject.components.gravity = scene.gravity
    return gameObject.components.gravity;
}

export function addFrictionComponent(gameObject, scene) {
    gameObject.components.friction = scene.friction
    return gameObject.components.friction;
}


//colliders
export function addBoxCollider(gameObject) {
    gameObject.components.collider = new BoxCollider(gameObject);
    return gameObject.components.collider;
}

class BoxCollider {
    constructor(gameObject) {
        this.width = gameObject.width;
        this.height = gameObject.height;
    }
}

export function addCircleCollider(gameObject) {
    gameObject.components.collider = new CircleCollider(gameObject);
    return gameObject.components.collider;
}

class CircleCollider {
    constructor(gameObject) {
        this.width = gameObject.width;
        this.height = gameObject.height;
    }
}