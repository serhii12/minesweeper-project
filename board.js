export class Board {
  constructor(numberOfRows,numberOfColumns,numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows,numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows,numberOfColumns,numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile (rowIndex,columnIndex) {
    if (this.playerBoard[rowIndex][columnIndex] !== ' ') { // The tile is not empty (already been flipped)
      console.log(`This tile has already been flipped`);
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') { // There is a bomb at that tile
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex,columnIndex);
    }
    this._numberOfTiles--;
  }

  getNumberOfNeighborBombs (rowIndex,columnIndex) {
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
  
    const numberOfRows = this._bombBoard.length; // Check how many rows we have in bombBoard
  
    const numberOfColumns = this._bombBoard[0].length;// Check how many colums we have in bombBoard
  
    let numberOfBombs = 0; // counter
  
    neighborOffsets.forEach(offset => {
     const neighborRowIndex = rowIndex + offset[0];
     const neighborColumnIndex = columnIndex + offset[1];
  
     if (neighborRowIndex >= 0 && 
      neighborRowIndex < numberOfRows && 
      neighborColumnIndex >= 0 && 
      neighborColumnIndex < numberOfColumns) {
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++; // Check around flipTile and get total number of bombs
        }
      }
    });
    return numberOfBombs; // Let player know how many bombs are around;
  }

  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs
  }

  print() {
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n')); // This will join together the array of rows with new lines, placing each row on its own line when printed.
  }

  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    const board = [];
    for (let i = 0; i < numberOfRows; i++) { // for loop iterating through numberOfRows
      const row = []; // Create an empty row array
      for (let j = 0; j < numberOfColumns; j++) { // for loop iterating through numberOfColumns
        row.push(' '); 
      }
      board.push(row); // Push the row onto the board array
    }
    return board; // Return the board array
  }

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
  
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      } 
    }
    return board; // Return the board array
  }
}