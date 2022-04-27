import { createReducer } from "@reduxjs/toolkit";
import {boardType} from "../../models/BoardType";
import {decPos, incPos, incRow, setBoard,setKey} from "./board.action"
import wordList from "../../../src/utils/words.json";

let randomNum = Math.floor(Math.random() * wordList.words.length);




type InitialState = {
    board: boardType;
  };


const initialState:boardType= {
    board:
    ["", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", ""],
    pos: 0,
    row: 0,
    key: "",
    correctWord: wordList.words[randomNum].toUpperCase(),
    
}



export const boardReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(setBoard, (state, action) => {
        state.board = action.payload;
      })
      .addCase(incPos, (state, action) => {
            state.pos++;
        })
    
      .addCase(decPos, (state, action) => {
            state.pos--;
        })
      .addCase(incRow, (state, action) => {
            state.row++;
        })
        .addCase(setKey, (state,action) => {
          state.key=action.payload
        })
   
        
      });








