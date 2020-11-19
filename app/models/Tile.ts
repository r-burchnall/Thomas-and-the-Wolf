import {Direction} from "./Direction";
import {Position} from "./Position";

export class Tile extends Position {
    borders: string

    private readonly availableDirections: Direction[] = [];

    constructor(row: number, column: number, borders: string) {
        super(row, column)
        this.borders = borders;

        this.availableDirections = Tile.AssertAvailableDirections(this.borders)
    }

    GetAvailableDirections(): Direction[] {
        return this.availableDirections;
    }

    CanMove(direction: Direction): boolean {
        return this.availableDirections.indexOf(direction) > 0
    }

    private static AssertAvailableDirections(borders: string): Direction[] {
        const top = 't';
        const left = 'l';
        const bottom = 'b';
        const right = 'r';

        const availableDirections: Direction[] = []
        if (!borders.toLowerCase().includes(top)) {
            availableDirections.push(Direction.Up);
        }
        if (!borders.toLowerCase().includes(left)) {
            availableDirections.push(Direction.Left);
        }
        if (!borders.toLowerCase().includes(bottom)) {
            availableDirections.push(Direction.Down);
        }
        if (!borders.toLowerCase().includes(right)) {
            availableDirections.push(Direction.Right);
        }

        return availableDirections
    }
}
