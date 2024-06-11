/* - Screen Class
   - The artificial screen class that displays the game in stdout
   - Each cell is a binary value (boolean) that represents whether the cell is empty or not
\*/

const EMPTY_CELL = ".";
const FILLED_CELL = "#";

/*
    5x5 grid example
    grid = [
        [f,f,f,f,f],
        [f,f,f,f,f],
        [f,f,f,f,f],
        [f,f,f,f,f],
        [f,f,f,f,f]
    ]
*/


class Screen {
    constructor(sizeX, sizeY){
        this.grid = new Array(sizeY);
        this.sizeX = sizeX;
        this.sizeY = sizeY;

        for (let i = 0; i < sizeY; i++){
            this.grid[i] = new Array(sizeX).fill(false);
        }
    }

    fill_cell(x, y){

        this.grid[y][x] = true;
    }

    fill_block(startX, startY, endX, endY){

        let minX = Math.min(startX, endX);
        let maxX = Math.max(startX, endX);
        let minY = Math.min(startY, endY);
        let maxY = Math.max(startY, endY);

        for (let Y = minY; Y <= Math.max(0,(Math.min(maxY, this.sizeY))); Y++){
            
            for (let X = minX; X <= Math.max(0,Math.min(maxX, this.sizeX)); X++){                
                this.fill_cell(X, Y);
            }                
        
        }
        
    }

    clear(){
        for (let Y = 0; Y < this.sizeY; Y++){
            
            for (let X = 0; X < this.sizeX; X++){                
                this.grid[Y][X] = false;
            }                
        
        }
    }

    update(){
        let output = "";
        let temp_row = "";
        let current_cell;

        for (let Y = 0; Y < this.sizeY; Y++) {

            for (let X = 0; X < this.sizeX; X++){

                current_cell = this.grid[Y][X]===true ? FILLED_CELL : EMPTY_CELL;
                temp_row += " " + current_cell;
            }

            output += temp_row.trim() + "\n";
            temp_row = "";
        }

        console.clear();
        console.log(output);
    }
}


module.exports = Screen;