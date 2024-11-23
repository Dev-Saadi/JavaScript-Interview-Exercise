import React from "react";
import useTictactoe from "../assets/hooks/useTictactoe";

const Tic_tac_toe = () => {
  const { board, calculateWinner, handleClick, statusMessage, resetGame } =
    useTictactoe();

  return (
    <div className="game">
      <div className="status">
        {statusMessage()}
        <button onClick={resetGame} className="reset_button">
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((item, index) => {
          return (
            <div
              onClick={() => handleClick(index)}
              className="cell"
              key={index}
              aria-disabled={item !== index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tic_tac_toe;
