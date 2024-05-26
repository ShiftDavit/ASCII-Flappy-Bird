const Screen = require("./Classes/Screen");

let screen_size_Y = 10;
let screen_size_X = 10;

let testScreen = new Screen(screen_size_X, screen_size_Y);

process.stdout.write(testScreen.toString());
