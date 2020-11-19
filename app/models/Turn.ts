import {Direction} from "./Direction";

/**
 * A wrapper around the direction moved and who moved.
 * @property WasThomas  Boolean to indicate if thomas moved, otherwise it was the wolf.
 * @property direction  The {@link Direction}
 */
export class Turn {
    WasThomas: boolean;
    direction: Direction;

    constructor(WasThomas: boolean, direction: Direction) {
        this.WasThomas = WasThomas;
        this.direction = direction;
    }
}
