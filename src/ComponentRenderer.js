const Component = require('./Classes/Component');

function spawn(Screen, position = [0,0], size = [0,0]) {
    let newComponent = new Component(position, size);

    let p1 = position; 
    let p2 = [positionX + size[0] - 1, positionY + size[1] - 1];

    Screen.fill_block(p1[0],p1[1], p2[0], p2[1]);

    return newComponent;
}

module.exports = {spawn};