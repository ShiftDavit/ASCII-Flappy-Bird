const Component = require('./Classes/Component');

function spawn(Screen, position = [0,0], size = [0,0]) {
    let newComponent = new Component(position, size);

    let p1 = position; 
    let p2 = [position[0] + size[0] - 1, position[1]+ size[1] - 1];

    Screen.fill_block(p1[0],p1[1], p2[0], p2[1]);
}

module.exports = {spawn};