class Vector2 {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vec2) {
        this.x += vec2.x;
        this.y += vec2.y;
    }

    sub(vec2) {
        this.y -= vec2.y;
        this.x -= vec2.x;
    }

    set(vec2) {
        this.x = vec2.x;
        this.y = vec2.y;
    }

}

module.exports = Vector2;