import React, { useEffect, useState } from "react";
import "./style.css";
import { SelectBoard, SelectPos, SelectRow, SelectWord } from "../../store/board/board.selector";


import { useSelector } from "react-redux";


interface IProps {
  val: string;
  squareIdx: number;
}

const Square: React.FC<IProps> = (props) => {
  const { val, squareIdx } = props;
  //Redux state

    const position = useSelector(SelectPos);
    const row = useSelector(SelectRow);
    const correctWord = useSelector(SelectWord);
  //State
  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);

  let wordLastIndex = 4;
  let currentPos =
    position === 5
      ? wordLastIndex
      : position > 5 && position % 5 === 0
      ? wordLastIndex
      : (position % 5) - 1;


  useEffect(() => {
    if (correctWord[currentPos] === val) {
      setCorrect(true);
    } else if (!correct && val !== "" && correctWord.includes(val)) {
      setAlmost(true);
    } else if (!correct && val !== "" && !correctWord.includes(val)) {
      setWrong(true);
    }
    return () => {
      setCorrect(false);
      setAlmost(false);
      setWrong(false);
    };
  }, [val]);

  const status: any = Math.floor(squareIdx/5) < row && (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");

  return (
      <div className="square" id={status}>{val}</div>
  );
};

export default Square;