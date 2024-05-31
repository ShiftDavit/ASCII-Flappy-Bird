/* - Component Class
   - Meant to be the parent class of all 2d components on the artificial screen
   - Holds information about size vector and 2d position of the bounding box
*/

const DEFAULT_SIZE = [1, 1];
const DEFAULT_POSITION = [0, 0];


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

   set move(new_position){
      this.position = new_position;
   }

   set resize(new_size){
      this.size = new_size;
   }

}

module.exports = Component;