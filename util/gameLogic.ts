import { CELL_VALUES, GAME_STATE, TURN, WIN_STATES } from './constants';

export const updateGameState = (index: number, turn: string, state: Array<string>): Array<string> => {
    return state.map((item, arrIndex) => {
        if (arrIndex !== index) {
          // This isn't the item we care about - keep it as-is
          return item
        }
    
        // Otherwise, this is the one we want - return an updated value
        return turn;
    });
};

export const updateTurn = (turn: string): string => {
    return (turn === TURN.X) ? TURN.O : TURN.X;
};

export const checkGameState = (gameBoard: Array<string>, turn: string): string => {

    // check for a win by the current turn.
    let isWinner = false;
    for (let i = 0; i < WIN_STATES.length; i++) {
        isWinner = WIN_STATES[i].every(state => gameBoard[state] === turn);
        if (isWinner) break;
    };

    if (isWinner) {
        if (turn === TURN.X) return GAME_STATE.X;
        else return GAME_STATE.O;
    }

    // If no winner - we need to check for a draw.
    const isTie = gameBoard.every((item) => item !== CELL_VALUES.EMPTY);
    if (isTie) return GAME_STATE.TIE;

    // No win or draw state - keep going.
    return GAME_STATE.IN_PROGRESS;
};