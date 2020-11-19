import {Turn} from "./Turn";
import {config} from "dotenv";
import {Direction} from "./Direction";
import {Thomas} from "./Thomas";
import {Wolf} from "./Wolf";

/**
 * A class containing an ordered list of the turns taken for Thomas to Escape.
 * @property turns  The ordered list of {@link Turn turns} taken.
 * @property escaped  boolean indicating if escape was possible.
 */
export class PuzzleResult {
    turns: Turn[] = [];
    escaped: boolean;

    constructor(thomas: Thomas, wolf: Wolf, escaped: boolean = true) {
        if(escaped) {
            config();
            this.BuildTurnOrder(thomas, wolf)
        }
        this.escaped = escaped;
    }

    private BuildTurnOrder(thomas: Thomas, wolf: Wolf) {
        while (thomas.moves.length > 0 || wolf.moves.length > 0){
            for(let i = 0; i < thomas.numberOfMoves; i++) {
                const dir: Direction = <Direction>thomas.moves.shift()
                if (dir) {
                    this.turns.push(new Turn(false, dir));
                }
            }
            for(let i = 0; i < wolf.numberOfMoves; i++) {
                const dir: Direction = <Direction>wolf.moves.shift()
                if (dir) {
                    this.turns.push(new Turn(false, dir));
                }
            }
        }
    }
}
