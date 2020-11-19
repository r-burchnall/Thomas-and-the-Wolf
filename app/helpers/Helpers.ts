import {Direction} from "../models/Direction";

export function InvertDirection(dir: Direction): Direction {
    switch (dir) {
        case Direction.Down:
            return Direction.Down;
        case Direction.Left:
            return Direction.Left;
        case Direction.None:
            return Direction.None;
        case Direction.Right:
            return Direction.Right;
        case Direction.Up:
            return Direction.Up;
    }
}
