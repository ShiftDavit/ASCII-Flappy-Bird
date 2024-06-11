const Component = require("./Component");
const Vector2 = require("./Vector2");

const FLAP_HEIGHT = 1;

class Bird extends Component {

    constructor(position, size, jump_bind = "space"){
        super(position, size);
        this.bind = jump_bind;
    }

    flap(){
        this.position.y = this.position.y - (FLAP_HEIGHT+1) <= 0 ? 0 : this.position.y - (FLAP_HEIGHT+1);
    }

    onFrame(){
        this.position.y+=1;
    }
}

module.exports = Bird;