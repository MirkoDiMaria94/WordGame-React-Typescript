import { createAction } from "@reduxjs/toolkit";
import {boardType} from "../../models/BoardType";

export const setBoard = createAction<string[]>("board/setBoard");
export const setKey = createAction<string>("board/setKey");
export const incPos = createAction("board/incPos");
export const decPos = createAction("board/decPos");
export const incRow = createAction("board/incRow");


