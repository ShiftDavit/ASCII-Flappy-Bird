/* - Component Class
   - Meant to be the parent class of all 2d components on the artificial screen
   - Holds information about size vector and 2d position of the bounding box
*/

const DEFAULT_SIZE = [1, 1];
const DEFAULT_POSITION = [0, 0];


class Component {
   constructor(position = DEFAULT_POSITION, size = DEFAULT_SIZE) {
      this.size = size;
      this.positionX = position[0];
      this.positionY = position[1];
   }

   get getPosition(){
      return this.position;
   }

   get getSize(){
      return this.size;
   }

   move(x = 0,y = 0){
      this.positionX = x;
      this.positionY = y;
   }

   resize(new_size){
      this.size = new_size;
   }

}

module.exports = Component;