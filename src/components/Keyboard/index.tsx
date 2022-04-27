import React from "react";
import Key from "../Key/index"
import {useSelector, useDispatch} from "react-redux";
import "./style.css";
import wordList from "../../../src/utils/words.json";
import { decPos, incRow, setBoard } from "../../store/board/board.action";
import { SelectBoard, SelectPos, SelectRow, SelectWord } from "../../store/board/board.selector";

const KeyBoard: React.FC = () => {
  const position = useSelector(SelectPos);
  const board = useSelector(SelectBoard);
  //console.log(board)
  const row = useSelector(SelectRow);
  const correctWord = useSelector(SelectWord);
    console.log(correctWord)
  const dispatch = useDispatch();
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  let allWords: string[] = wordList.words;
 
  let board5Words: string = `${board[position-5]}${board[position-4]}${board[position-3]}${board[position-2]}${board[position-1]}`.toLowerCase();
  const clickBack = () => {
    if (Math.floor((position-1)/5) < row) return;
    const newBoard = [...board];
    newBoard[position-1] = "";
    dispatch(decPos());
    dispatch(setBoard(newBoard));
  }
  const clickEnter = () => {
    if (allWords.includes(board5Words) === false) {
      alert("Parola non valida");
    }
    if(allWords.includes(board5Words)) {
      if (position % 5 === 0 && position !== 0) {
       dispatch(incRow());
    }
  }
    

     
      //console.log(board5Words)
      //console.log(board5Words.includes(correctWord))

    if(position === 30 || ( board5Words.includes(correctWord.toLowerCase()))) {
        console.log(board5Words)
      alert("La Parola corretta è: " + correctWord);
    }
  }
  return (
    <div className="keyboard-container">
      {rows.map((row, idx) => {
        return (
          <div className="row">
              {idx === 2 && (
                  <span className="letter-row" onClick={clickEnter}>
                      Enter
                  </span>
              )
              }
            {row.split(" ").map((letter, idx) => {
              return (
                <div className="letter-row">
                  <Key letter={letter.toUpperCase()} />
                  {letter === "m" && <span onClick={clickBack}> Back </span>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default KeyBoard;