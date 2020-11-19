import {Movable} from "../models/Movable";
import {Tile} from "../models/Tile";
import {Thomas} from "../models/Thomas";

export interface IWolf extends Movable{
    AttemptToMove(layout: Tile[], thomas: Thomas): void;
}
