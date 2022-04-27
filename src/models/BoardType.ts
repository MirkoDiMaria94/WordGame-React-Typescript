export interface boardType {
    board: string[],
    pos: number,
    row: number,
    correctWord: string,
    key: string
}

export interface rootState {
    board: boardType
}