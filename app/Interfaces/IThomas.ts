import {Movable} from "../models/Movable";
import {Tile} from "../models/Tile";

export interface IThomas extends Movable{
    AttemptToMove(layout: Tile[]): void;
}
