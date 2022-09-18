import React from 'react';
import styled from 'styled-components';

import { GAME_STATE, TURN, SYMBOLS } from '../../util/constants';
import { Fonts, Colors } from '../util/globalStyle';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    height: 110px;
    width: 100%;
    padding: 15px;
    color: ${Colors.cream};
    background-color: ${Colors.mediumGreen};
    border-bottom: 2px solid ${Colors.darkGreen};
`;

const Text = styled.h2`
    span {
        font-family: ${Fonts.CrystalRadioKit};
    }
`;

const Button = styled.button`
    color: ${Colors.cream};
    font-size: 16px;
    font-weight: bold;
    background-color: ${Colors.lightGreen};
    border: 2px solid ${Colors.darkGreen};
    border-radius: 5px;
    padding: 10px 15px;
`;

type Props = {
    gameState: string,
    turn: string,
    resetGame: () => void
}

const getTurnSymbol = (turn: string): string => {
    if (turn === TURN.X) return SYMBOLS.X;
    return SYMBOLS.O;
};

function InfoBoard({ gameState, turn, resetGame }: Props): React.ReactElement {

    let GameText;
    if (gameState === GAME_STATE.IN_PROGRESS) {
        GameText = <Text><span>{getTurnSymbol(turn)}</span>{`'s Turn`}</Text>;
    } else if (gameState === GAME_STATE.TIE) {
        GameText = <Text>The match is a <span>DRAW!!</span></Text>
    } else {
        GameText = <Text><span>{gameState}</span> is the WINNER!!</Text>
    }

    return (
        <Container>
            {GameText}
            <Button onClick={resetGame}>Reset</Button>
        </Container>
    );
}

export default InfoBoard;
