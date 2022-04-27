import { boardType, rootState } from "../../models/BoardType";

export const SelectBoard = (state: rootState) => state.board.board;
export const SelectKey = (state: rootState) => state.board.key;
export const SelectPos = (state: rootState) => state.board.pos;
export const SelectWord = (state: rootState) => state.board.correctWord;
export const SelectRow = (state: rootState) => state.board.row;





