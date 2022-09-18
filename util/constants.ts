export const SYMBOLS = {
    X: 'X',
    O: 'O'
}

export const TURN = {
    X: 'x',
    O: 'o'
};

export const CELL_VALUES = {
    X: 'x',
    O: 'o',
    EMPTY: ''
};

export const GAME_STATE = {
    X: `${SYMBOLS.X}`,
    O: `${SYMBOLS.O}`,
    TIE: 'draw',
    IN_PROGRESS: ''
};

export const WIN_STATES: Array<Array<number>> = [
    // Rows
    [0, 1, 2],[3, 4, 5],[6, 7, 8],

    // Columns
    [0, 3, 6],[1, 4, 7],[2, 5, 8],

    // Diagonal
    [0, 4, 8],[2, 4, 6]
];

export const NEW_GAME: Array<string> = ['', '', '', '', '', '', '', '', ''];