const EMPTY_CELL = "•";
const FILLED_CELL = "#";


class Screen {
    constructor(sizeX, sizeY){
        this.grid = new Array(sizeY);
        this.sizeX = sizeX;
        this.sizeY = sizeY;

        for (let i = 0; i < sizeY; i++){
            this.grid[i] = new Array(sizeX);
        }
    }

    toString(){
        
        let output = "";
        let temp_row = "";

        for (let Y = 0; Y < this.grid.length; Y++) {

            for (let X = 0; X < this.grid[Y].length; X++){
                temp_row += " " + EMPTY_CELL;
            }

            output += temp_row.trim() + "\n";
            temp_row = "";
        }

        return output;
    }
}


module.exports = Screen;