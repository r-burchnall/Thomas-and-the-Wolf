import {Puzzle} from "./Puzzle";
import * as fs  from 'fs';

export class PuzzleContainer {
    puzzles: Puzzle[] = []

    constructor(filename: string) {
        const content = fs.readFileSync(filename).toString("utf8");
        const puzzles = JSON.parse(content).puzzles;

        for(const puzzle of puzzles){
            const p = new Puzzle(puzzle.name, puzzle.layout, puzzle.wolf, puzzle.thomas)
            this.puzzles.push(p)
        }
        console.log("this is the puzzles", this.puzzles);
        // this.puzzles = JSON.parse(content);
    }
}

