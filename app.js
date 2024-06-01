const Screen = require("./src/Classes/Screen");
const InputHandler = require('./src/InputHandler');
const ComponentRenderer = require('./src/ComponentRenderer');
const Vector2 = require('./src/Classes/Vector2');

let screen_size_Y = 9;
let screen_size_X = 16;

let testScreen = new Screen(screen_size_X, screen_size_Y);
let testComponent = ComponentRenderer.addComponent(new Vector2(2,2), new Vector2(2,2));

ComponentRenderer.setScreen(testScreen);
InputHandler.bind_input('space', process.exit);
InputHandler.bind_input("right", () => {
    testComponent.position.x++;
})
InputHandler.bind_input("left", () => {
    testComponent.position.x--;
})

ComponentRenderer.update();
setInterval(() => {
    ComponentRenderer.update();
}, 0);

