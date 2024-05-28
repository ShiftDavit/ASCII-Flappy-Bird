const Screen = require("./src/Classes/Screen");
const InputHandler = require('./src/InputHandler');

InputHandler._init()
InputHandler.bind_input('space', process.exit);

let screen_size_Y = 9;
let screen_size_X = 16;

let testScreen = new Screen(screen_size_X, screen_size_Y);

function getRandomInt(max) {
    return Math.floor(Math.random() * (max+1));
}

testScreen.update();
setInterval(() => {
    testScreen.update();
}, 100);

