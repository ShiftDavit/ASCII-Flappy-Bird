/* - Component Class
   - Meant to be the parent class of all 2d components on the artificial screen
   - Holds information about size vector and 2d position of the bounding box
*/

const Vector2 = require("./Vector2");

const DEFAULT_SIZE = new Vector2(0,0);
const DEFAULT_POSITION = new Vector2(0,0);


class Component {
   constructor(position = DEFAULT_POSITION, size = DEFAULT_SIZE) {
      this.size = size;
      this.position = position;
   }

   get getPosition(){
      return this.position;
   }

   get getSize(){
      return this.size;
   }

   moveTo(vec2){
      this.position.set(vec2);
   }

   resize(new_size){
      this.size.set(new_size);
   }

}

module.exports = Component;