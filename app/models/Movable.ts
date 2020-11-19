import {Position} from "./Position";
import {Direction} from "./Direction";
import {Tile} from "./Tile";
import {InvertDirection} from "../helpers/Helpers";

export class Movable extends Position {
    numberOfMoves: number;
    moves: Direction[] = [];
    currentMoves: Direction[] = [];


    constructor(row: number, column: number, numberOfMoves: number, moves: Direction[], currentMoves: Direction[]) {
        super(row, column);
        this.numberOfMoves = numberOfMoves;
        this.moves = moves;
        this.currentMoves = currentMoves;
    }

    Backtrack(layout: Tile[]): void {
        const movesToUndo = this.currentMoves.reverse();
        for (let move of movesToUndo) {
            this.ApplyDirection(layout, InvertDirection(move))
        }
    }

    ConfirmMove(layout: Tile[]): void {
        for (let move of this.currentMoves) {
            this.ApplyDirection(layout, move);
        }
        this.currentMoves = [];
    }

    private ApplyDirection(layout: Tile[], direction: Direction): void {
        let tile = null;
        switch (direction) {
            case Direction.Up:
                tile = layout.find(i => i.column == this.column && i.row == this.row - 1)
                break;
            case Direction.Right:
                tile = layout.find(i => i.column == this.column + 1 && i.row == this.row)
                break;
            case Direction.Left:
                tile = layout.find(i => i.column == this.column - 1 && i.row == this.row)
                break;
            case Direction.Down:
                tile = layout.find(i => i.column == this.column && i.row == this.row + 1)
                break;
            case Direction.None:
            default:
                break;
        }

        if (tile) {
            this.row = tile.row;
            this.column = tile.column;
        } else {
            throw Error("Attempting to move to tile does not exist")
        }

        this.moves.push(direction)
    }

    protected DesireMove(layout: Tile[], desiredDirection: Direction): Direction {
        const currentTile = layout.find(i => i.column == this.column && i.row == this.row)
        if (currentTile) {
            if (currentTile.CanMove(desiredDirection)) {
                return desiredDirection;
            } else {
                return Direction.None;
            }
        } else {
            throw Error("The wolf is on a tile that doesn't exist")
        }
    }
}
