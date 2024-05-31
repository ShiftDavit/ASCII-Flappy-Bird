const Component = require('./Classes/Component');

let Screen = null;
let components = [];

function setScreen(newScreen){
    Screen = newScreen;
}

function spawn(component) {
    let position = component.position;
    let size = component.size;

    let p1 = position; 
    let p2 = [position.x + size.x - 1, position.y + size.y - 1];

    Screen.fill_block(p1.x,p1.y, p2[0], p2[1], true);
}

function addComponent(position, size) {
    let newComponent = new Component(position, size);

    components.push(newComponent);

    return newComponent;
}

function update(){
    Screen.clear(); 
    for(let i = 0; i < components.length; i++){
        spawn(components[i]);
    }
    Screen.update();
}

module.exports = {
    update,
    spawn,
    addComponent,
    setScreen
}