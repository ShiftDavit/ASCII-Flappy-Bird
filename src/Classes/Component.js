/* - Component Class
   - Meant to be the parent class of all 2d components on the artificial screen
   - Holds information about size vector and 2d position
*/

const DEFAULT_SIZE = [1, 1];
const DEFAULT_POSITION = [0, 0];


class Component {
   constructor(size = DEFAULT_SIZE, position = DEFAULT_POSITION) {
      this.size = size;
      this.position = position;
   }

   get getPosition(){
      return this.position;
   }

   get getSize(){
      return this.size;
   }

   set setPosition(new_position){
      this.position = new_position;
   }

   set setSize(new_size){
      this.size = new_size;
   }


}