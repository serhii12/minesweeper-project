# minesweeper-terminal-copy

To play Minesweeper, we will create instances of MineSweeperGame in command line.
For example:
In command line, navigate to the src directory and run `node`
Run `.load game.js` to load the contents of this file.
Then create a Game instance and run commands like so:
let game = new Game(3, 3, 3);
game.playMove(0, 1);
game.playMove(1, 2);
When done run `.exit`

The following is a quick overview of the game:

The objective is to successfully navigate (or, "clear") a grid of squares without encountering any hidden mines (bombs).

Clicking on a square reveals what is underneath the square.

If a square reveals a mine, the game is over, and you lose.

If a square does not reveal a mine, one of two possible things can happen:

1)A digit will appear in the square. This digit represents the number of adjacent squares that contain a mine.

2)Nothing will appear in the square. In this case, the square will clear and become blank. Adjacent squares will then be recursively revealed.
