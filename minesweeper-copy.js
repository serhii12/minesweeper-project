const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '], 
  [' ', ' ', ' ']  
];

const bombBoard = [];

const playerBoard = [];

const printBoard = board => {
  console.log('Current Board:');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

printBoard(board);

board[1][2] = 1;

printBoard(board);

board[1][1] = 'B';

printBoard(board);