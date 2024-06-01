const Component = require("./Component");

const FLAP_HEIGHT = 2;

class Bird extends Component {

    constructor(position, size, jump_bind){
        super(position, size);
        this.bind = jump_bind;
    }

    flap(){
        this.position.y += FLAP_HEIGHT;
    }
}