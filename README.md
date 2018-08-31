# minesweeper-copy

The following is a quick overview of the game:

The objective is to successfully navigate (or, "clear") a grid of squares without encountering any hidden mines (bombs).

Clicking on a square reveals what is underneath the square.

If a square reveals a mine, the game is over, and you lose.

If a square does not reveal a mine, one of two possible things can happen:

1)A digit will appear in the square. This digit represents the number of adjacent squares that contain a mine.

2)Nothing will appear in the square. In this case, the square will clear and become blank. Adjacent squares will then be recursively revealed.

If you want to get a feel for the game by playing it first, try it out here.
