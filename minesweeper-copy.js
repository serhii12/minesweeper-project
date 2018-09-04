/*
The function should:

1) Add an empty space (' ') to each column in every row
2) Add each row to to a larger game board, thereby constructing the player's board
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

1) Create the game board of the specified size

2) Add bombs to random squares on the game board
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
      numberOfBombsPlaced++;
    } 
  }
  return board; // Return the board array
};



/*
1) The function will determine the size of the game board

2) The function will use the location of the flipped tile

3) Using an array index offset system (more on this later), the function will check all adjacent tiles for bombs
*/
const getNumberOfNeighborBombs = (bombBoard,rowIndex,columnIndex) => {
  const neighborOffsets = [
    [-1,-1],
    [-1,0],
    [-1,1],
    [0,-1],
    [0,1],
    [1,-1],
    [1,0],
    [1,1]
  ];//8 possible offset combintations of neighboring tiles.

  const numberOfRows = bombBoard.length; // Check how many rows we have in bombBoard

  const numberOfColumns = bombBoard[0].length;// Check how many colums we have in bombBoard

  let numberOfBombs = 0; // See how many bombs are around

  neighborOffsets.forEach(offset => {
   const neighborRowIndex = rowIndex + offset[0];
   const neighborColumnIndex = columnIndex + offset[1];

   if (neighborRowIndex >= 0 && 
    neighborRowIndex < numberOfRows && 
    neighborColumnIndex >= 0 && 
    neighborColumnIndex < numberOfColumns) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
      numberOfBombs++; // Check around flipTile and get total number of bombs
      }
    }
  });
  return numberOfBombs; // Let player know how many bombs are around;
};



/* 
The function should explicitly check for two things:

1) If the specified tile has already been flipped

2) If the specified tile has a bomb in it

3) Otherwise, that tile should be updated with the number of neighboring bombs.

*/

const flipTile = (playerBoard,bombBoard,rowIndex,columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' ') { // The tile is not empty (already been flipped)
    console.log(`This tile has already been flipped`);
    return;
  } else if (bombBoard[rowIndex][columnIndex] === 'B') { // There is a bomb at that tile
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard,rowIndex,columnIndex);
  }
};


// Function to print board
const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n')); // This will join together the array of rows with new lines, placing each row on its own line when printed.
};

let playerBoard = generatePlayerBoard(3, 3);
let bombBoard = generateBombBoard(3, 3, 3);

console.log('Player Board:')
printBoard(playerBoard);

console.log('Bomb Board:');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0); // Flip different tiles based on bombBoard to see if neighbors work.

console.log('Updated Player Board:');
// Updated Player Board
printBoard(playerBoard);