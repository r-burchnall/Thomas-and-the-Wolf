import {Puzzle} from "../models/Puzzle";
import {ThomasWasCaught} from "../exceptions/ThomasWasCaught";
import {ThomasEscaped} from "../exceptions/ThomasEscaped";
import {PuzzleResult} from "../models/PuzzleResult";
import {OutOfOptions} from "../exceptions/OutOfOptions";

export class PuzzleResolver {

    Solve(puzzle: Puzzle): PuzzleResult {

        while (!puzzle.thomas.hasEscaped) {
            try {
                for (let i = 0; i < puzzle.thomas.numberOfMoves; i++) {
                    puzzle.thomas.AttemptToMove(puzzle.layout);
                }
                for (let i = 0; i < puzzle.wolf.numberOfMoves; i++) {
                    puzzle.wolf.AttemptToMove(puzzle.layout, puzzle.thomas);
                }

                puzzle.thomas.ConfirmMove(puzzle.layout);
                puzzle.wolf.ConfirmMove(puzzle.layout);
            } catch (e) {
                if (e instanceof ThomasWasCaught) {
                    puzzle.thomas.Backtrack(puzzle.layout);
                    puzzle.wolf.Backtrack(puzzle.layout);
                    // statements to handle TypeError exceptions
                }
                if (e instanceof ThomasEscaped) {
                    return new PuzzleResult(puzzle.thomas, puzzle.wolf)
                }
                if (e instanceof OutOfOptions) {
                    break;
                }
            }
        }

        return new PuzzleResult(puzzle.thomas, puzzle.wolf, false)
    }
}
