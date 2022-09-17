import React from 'react';
import styled from 'styled-components';
import { TURN, SYMBOLS } from '../util/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

const Text = styled.h2`
    color: #000;
`;
const Button = styled.button`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    background-color: #ff0000;
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px 15px;
`;

type Props = {
    gameState: string,
    turn: string,
    resetGame: () => void
}

const getTurnSymbol = (turn: string): string => {
    if (turn === TURN.X) return SYMBOLS.O;
    return SYMBOLS.O;
};

function InfoBoard({ gameState, turn, resetGame }: Props): React.ReactElement {

    return (
        <Container>
            {(gameState === '') ? (
                <Text>{`${getTurnSymbol(turn)}'s Turn`}</Text>
            ) : (
                <>
                <Text>{gameState}</Text>
                <Button onClick={resetGame}>New Game</Button>
                </>
            )}
        </Container>
    );
}

export default InfoBoard;
