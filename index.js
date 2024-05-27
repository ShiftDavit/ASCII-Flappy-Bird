const Screen = require("./Classes/Screen");

let screen_size_Y = 9;
let screen_size_X = 16;

let testScreen = new Screen(screen_size_X, screen_size_Y);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.clear();
setInterval(() => {
    testScreen.fill_cell(getRandomInt(screen_size_X-1), getRandomInt(screen_size_Y-1));
    testScreen.update();
}, 1000);

setTimeout(() => {process.exit()}, 10000);