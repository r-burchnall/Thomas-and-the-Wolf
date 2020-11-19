import {Tile} from "./Tile";
import {Wolf} from "./Wolf";
import {Thomas} from "./Thomas";

export class Puzzle {
    name: string;
    layout: Tile[];
    wolf: Wolf;
    thomas: Thomas;

    constructor(name: string, layout: Tile[], wolf: Wolf, thomas: Thomas) {
        this.name = name;
        this.wolf = wolf;
        this.thomas = thomas;

        this.layout = [];
        for(let tile of layout) {
            this.layout.push(new Tile(tile.row, tile.column, tile.borders))
        }
    }

}
