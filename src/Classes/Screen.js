/* - Screen Class
   - The artificial screen class that hadnles the grid info
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
            this.grid[i] = new Array(sizeX);
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

        for (let Y = minY; Y <= maxY; Y++){
            
            for (let X = minX; X <= maxX; X++){                
                this.fill_cell(X, Y);
            }                
        
        }
        
    }

    update(){
        
        let output = "";
        let temp_row = "";
        let current_cell;

        for (let Y = 0; Y < this.grid.length; Y++) {

            for (let X = 0; X < this.grid[Y].length; X++){

                current_cell = this.grid[Y][X] ? FILLED_CELL : EMPTY_CELL;
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