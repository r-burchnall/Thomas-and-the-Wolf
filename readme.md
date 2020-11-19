# Thomas and the Wolf
This is a puzzle where the aim of the game is to escape from the wolf. 
The wolf by default has an advantage as it can move faster than thomas,
however our daring hero has greater intelligence than the wolf... and walls.

## Rules
- The grid contains walls - neither Thomas, nor the wolf can pass through walls
- Thomas can move one space or can chose not to move for his turn
- The wolf can move up to two spaces towards Thomas
- If the wolf and Thomas are on the same row, the wolf will only try to move horizontally towards Thomas
- If the wolf and Thomas are on the same column, the wolf will only try to move vertically towards Thomas
- If the wolf and Thomas are on different rows and columns, the wolf will move in whichever direction isn't blocked and moves it closer to Thomas
- If the wolf cannot move in any direction towards Thomas (e.g. due to walls), it will forfeit its turn and remain stationary
- Neither Thomas, nor the wolf can move diagonally - they can only move up, down, left and right
- The game is won if Thomas escapes the grid (i.e. by reaching 71 in the example above)
- The game is lost if the wolf reaches Thomas during its turn

## Project Details
This is a Node.js application. It can be run by compiling the typescript and executing
the resultant main.js file. Puzzles are read in from the root of the node process. The expected filename is
`puzzleSetup.json`. The program is capable of solving multiple problems from the same file.

### So why was it built this way
The brief left the implementation up for adaptation. It is possible to use the 
recursive back tracking algorithm to determine the way out of the maze.

The project has not been built in a way to leverage the process stack in order to determine the way out using this
algorithm. It has been purposefully built in a way to allow more algorithms or even player input.

### Note
Sadly due to time constrains and other commitments, I have not been able to complete the automated approach to solving 
this game. I have however produced a solid framework in which completing the `AttemptToMove` method on `Thomas` should 
result in a functional program returning the class `PuzzleResult`.
