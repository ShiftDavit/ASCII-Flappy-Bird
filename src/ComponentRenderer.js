const Bird = require('./Classes/Bird');
const InputHandler = require('./InputHandler');


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

    Screen.fill_block(p1.x,p1.y, p2[0], p2[1]);
}

function addComponent(newComponent) {
    components.push(newComponent);
}

function addBird(position, size, bind) {
    console.log(position);
    const newBird = new Bird(position, size, bind);
    addComponent(newBird);
    
    InputHandler.bind_input(newBird.bind, ()=>{
        newBird.flap();
    });

    return newBird;
}

function update(){
    Screen.clear(); 
    
    let c = null;

    for(let i = 0; i < components.length; i++){ 
        c = components[i];
        if (c.onFrame != undefined){c.onFrame()}

        if (c instanceof Bird){
            if (c.position.y + c.size.y > Screen.sizeY){
                process.exit()
            }
        }

        spawn(c);
    }

    Screen.update();
}

module.exports = {
    update,
    spawn,
    setScreen,
    addBird
}