import {Position} from "./Position";
import {Tile} from "./Tile";
import {config} from 'dotenv'
import {Direction} from "./Direction";
import {Movable} from "./Movable";
import {IThomas} from "../Interfaces/IThomas";

export class Thomas extends Movable implements IThomas {
    private EscapeRow = 1;
    private EscapeCol = 1;
    hasEscaped = false;

    constructor(row: number, column: number, numberOfMoves: number, moves: Direction[], currentMoves: Direction[]) {
        super(row, column, numberOfMoves, moves, currentMoves);
        config();
        this.numberOfMoves = parseInt(process.env.THOMAS_MOVES ?? '1')
        this.EscapeRow = parseInt(process.env.ESCAPE_ROW ?? '1')
        this.EscapeCol = parseInt(process.env.ESCAPE_COLUMN ?? '1')
    }

    AttemptToMove(layout: Tile[]) {
        //Thomas can either now take input or do an algoithm.


        this.CheckForEscape();
    }

    private CheckForEscape() {
        if(this.row == 7 && this.column == 1) {
            this.hasEscaped = true;
        }
    }
}
