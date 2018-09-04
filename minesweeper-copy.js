/*
The function should:

Add an empty space (' ') to each column in every row
Add each row to to a larger game board, thereby constructing the player's board
*/
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for (let i = 0; i < numberOfRows; i++) { // for loop iterating through numberOfRows
    const row = []; // Create an empty row array
    for (let j = 0; j < numberOfColumns; j++) { // for loop iterating through numberOfColumns
      row.push(' '); 
    }
    board.push(row); // Push the row onto the board array
  }
  return board; // Return the board array
};
/*
The function should:

Create the game board of the specified size

Add bombs to random squares on the game board

For example, generateBombBoard(5, 9, 14) would result in a 5 x 9 game board (45 total squares) with 14 bombs placed randomly on the board.
*/
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];
  for (let i = 0; i < numberOfRows; i++) { // for loop iterating through numberOfRows
    const row = []; // Create an empty row array
    for (let j = 0; j < numberOfColumns; j++) { // for loop iterating through numberOfColumns
      row.push(null);
    }
    board.push(row); // Push the row onto the board array
  }
  let numberOfBombsPlaced = 0;

  while (numberOfBombs > numberOfBombsPlaced) {
    const randomRowIndex = Math.floor(Math.random() * numberOfRows); // Random row to place the bomb
    const randomColumnIndex = Math.floor(Math.random() * numberOfColumns); // Random column to place the bomb

    if (board[randomRowIndex][randomColumnIndex] !== 'B') { // Check if there is bomb alredy if not place one
      board[randomRowIndex][randomColumnIndex] = 'B';
    } else {
      const newRandomRowIndex = Math.floor(Math.random() * numberOfRows); // Random row to place the bomb
      const newRandomColumnIndex = Math.floor(Math.random() * numberOfColumns); // Random column to place the bomb
      board[newRandomRowIndex][newRandomColumnIndex] = 'B';
    }

    numberOfBombsPlaced++;
  }
  return board; // Return the board array
};

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n')); // This will join together the array of rows with new lines, placing each row on its own line when printed.
};

console.log('Player Board:');
printBoard(generatePlayerBoard(3,4));
console.log('Bomb Board:');
printBoard(generateBombBoard(3,4,5));