const Screen = require("./src/Classes/Screen");
const InputHandler = require('./src/InputHandler');
const ComponentRenderer = require('./src/ComponentRenderer');
const fs = require('fs');

InputHandler.bind_input('space', process.exit);

let screen_size_Y = 9;
let screen_size_X = 16;

let testScreen = new Screen(screen_size_X, screen_size_Y);

ComponentRenderer.spawn(testScreen, [4,5], [2,3]);

testScreen.update();
setInterval(() => {
    testScreen.update();
}, 100);

