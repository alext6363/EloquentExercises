const hashTriangle = (size) => {
  let stringy = "";
  for (let i = 0; i < size; i++) {
    stringy += "#";
    console.log(stringy);
  }
};

const fizzBuzz = (maxNum) => {
  for (let i = 1; i <= maxNum; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

const chessBoard = (boardSize) => {
  let board = "";
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if ((i + j) % 2 === 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
  console.log(board);
};

hashTriangle(7);
fizzBuzz(15);
chessBoard(8);
