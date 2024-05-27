const Screen = require("./Classes/Screen");

let screen_size_Y = 10;
let screen_size_X = 10;

let testScreen = new Screen(screen_size_X, screen_size_Y);

testScreen.fill_cell(0, 0);
testScreen.fill_cell(5, 5);

process.stdout.write(testScreen.toString());
