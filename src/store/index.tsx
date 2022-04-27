
import {configureStore} from "@reduxjs/toolkit";
import {boardReducer} from "./board/board.reducer";

export const store= configureStore({
    reducer:{
        board: boardReducer
    },
});


export default store;