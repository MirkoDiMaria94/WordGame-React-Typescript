import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { incPos, setBoard } from '../../store/board/board.action';
import { SelectBoard, SelectPos, SelectRow } from "../../store/board/board.selector";


import "./style.css";

interface IProps {
    letter: string
}

const Key: React.FC<IProps> = (props) => {
    const {letter} = props;
    const position = useSelector(SelectPos);
    const board = useSelector(SelectBoard);
    const row = useSelector(SelectRow);
    const dispatch = useDispatch();
    let currentRow = Math.floor(position/5);
    const chooseLetter = () => {
        if (position >= 30) return;
        if (currentRow > row) return; 
        const newBoard = [...board];
        newBoard[position] = letter;
        dispatch(setBoard(newBoard));
        dispatch(incPos());
    }
  return (
    <div className="letter" onClick={chooseLetter}>
        {letter}
    </div>
  )
}

export default Key