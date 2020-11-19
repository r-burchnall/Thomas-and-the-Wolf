import {PuzzleContainer} from "./models/PuzzleContainer";
import {PuzzleResolver} from "./services/PuzzleResolver";

export function Main() {
    const filename = "./puzzleSetup.json"
    const puzzleContainer = new PuzzleContainer(filename);
    const puzzleResolver = new PuzzleResolver();
    const results = [];
    for (const puzzle of puzzleContainer.puzzles) {
        results.push(puzzleResolver.Solve(puzzle));
    }

    return results;
}


Main();
