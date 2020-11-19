import {Thomas} from "./Thomas";
import {Tile} from "./Tile";
import {config} from "dotenv";
import {Direction} from "./Direction";
import {ThomasWasCaught} from "../exceptions/ThomasWasCaught";
import {Movable} from "./Movable";
import {IWolf} from "../Interfaces/IWolf";


export class Wolf extends Movable implements IWolf {
    constructor(row: number, column: number, numberOfMoves: number, moves: Direction[], currentMoves: Direction[]) {
        super(row, column, numberOfMoves, moves, currentMoves);
        config();
        this.numberOfMoves = parseInt(process.env.WOLF_MOVES ?? '1')
    }

    AttemptToMove(layout: Tile[], thomas: Thomas) {
        if(thomas.hasEscaped) return; //Thomas has already escaped. It is over.
        const rowDelta = this.row - thomas.row;
        const colDelta = this.column - thomas.column;

        // Same row, only move horizontal
        if(rowDelta == 0){
            if(colDelta > 0)
                this.currentMoves.push(this.DesireMove(layout, Direction.Left))
            else if (colDelta < 0)
                this.currentMoves.push(this.DesireMove(layout, Direction.Right))
            else
                throw new ThomasWasCaught()
        }
        // Same col, only move vertically
        else if(colDelta == 0) {
            if(rowDelta > 0)
                this.currentMoves.push(this.DesireMove(layout, Direction.Up))
            else if (rowDelta < 0)
                this.currentMoves.push(this.DesireMove(layout, Direction.Down))
            else
                throw new ThomasWasCaught()
        }
        // Diff row and col, move in any available direction to thomas
        else{
            const tile = layout.find(i => i.column == this.column && i.row == this.row);
            if(tile) {
                const availableDirection = tile.GetAvailableDirections()
                if(availableDirection.length == 0) {
                    // If no available rows Go nowhere
                    this.currentMoves.push(this.DesireMove(layout, Direction.None))
                } else {
                    if(colDelta > 0 && availableDirection.includes(Direction.Left))
                        this.currentMoves.push(this.DesireMove(layout, Direction.Left))
                    else if (colDelta < 0 && availableDirection.includes(Direction.Right))
                        this.currentMoves.push(this.DesireMove(layout, Direction.Right))
                    else if(rowDelta > 0 && availableDirection.includes(Direction.Up))
                        this.currentMoves.push(this.DesireMove(layout, Direction.Up))
                    else if (rowDelta < 0 && availableDirection.includes(Direction.Down))
                        this.currentMoves.push(this.DesireMove(layout, Direction.Down))
                }
            } else {
                throw new Error("Attempting to get positions for a tile that doesn't exist")
            }
        }
    }

}
