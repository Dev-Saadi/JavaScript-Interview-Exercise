import { useState } from "react";

const initialBoard = () => Array(9).fill(null);
const useTictactoe = () => {
  const [board, setboard] = useState(initialBoard());
  const [isXNext, setisXNext] = useState(true);

  const WinningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WinningPatterns.length; i++) {
      const [a, b, c] = WinningPatterns[i];

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    //check Winner
    const winner = calculateWinner(board);
    console.log(winner);

    if (winner || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setboard(newBoard);
    setisXNext(!isXNext);
  };

  const statusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) {
      return `Player ${winner} wins!`;
    }

    if (!board.includes(null)) {
      return `Its a Draw`;
    }

    return `Player ${isXNext ? "X" : "O"} turn`;
  };

  const resetGame = () => {
    setboard(initialBoard());
    setisXNext(true);
  };

  return { board, calculateWinner, handleClick, statusMessage, resetGame };
};

export default useTictactoe;
