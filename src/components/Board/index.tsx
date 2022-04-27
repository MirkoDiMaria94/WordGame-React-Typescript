import React from "react";
import KeyBoard from "../Keyboard/index"
import Square from "../Square/index";
import "./style.css";

interface IProps {
  board: string[];
}

const Board: React.FC<IProps> = (props) => {
  const { board } = props;
  return (
    <>
      <div className="board">
        {board.map((square, idx) => {
          return (
              <>
              <Square val={square} squareIdx={idx} />
              </>
          )
        })}
      </div>
      <div className="keyboard">
          <KeyBoard/>
      </div>
    </>
  );
};

export default Board;