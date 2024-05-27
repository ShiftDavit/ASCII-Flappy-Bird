const EMPTY_CELL = "•";
const FILLED_CELL = "#";

/*
    5x5 grid example
    grid = [
        [*,*,*,*,*],
        [*,*,*,*,*],
        [*,*,*,*,*],
        [*,*,*,*,*],
        [*,*,*,*,*]
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

    toString(){
        
        let output = "";
        let temp_row = "";
        let current_cell;

        for (let Y = 0; Y < this.grid.length; Y++) {

            for (let X = 0; X < this.grid[Y].length; X++){
                switch (this.grid[Y][X]){
                    case true:
                        current_cell = FILLED_CELL;
                        break;
                    default:
                        current_cell = EMPTY_CELL;
                }
                temp_row += " " + current_cell;
            }

            output += temp_row.trim() + "\n";
            temp_row = "";
        }

        return output;
    }
}


module.exports = Screen;