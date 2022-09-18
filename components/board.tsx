import React from 'react';
import styled from 'styled-components';

import Cell from './cell';

import { GAME_STATE } from '../util/constants';

const Container = styled.div<{ gameState: string }>`
    aspect-ratio: 1 / 1;
    background-color: #000;

    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    cursor: ${props => props.gameState === GAME_STATE.IN_PROGRESS ? 'pointer' : 'default' };
    pointer-events: ${props => props.gameState === GAME_STATE.IN_PROGRESS ? 'unset' : 'none' };
`;

type Props = {
    gameState: string,
    boardValues: Array<string>,
    squareClicked: (index: number) => void
}

function Board({ gameState, boardValues, squareClicked }: Props): React.ReactElement {

    return (
        <Container gameState={gameState}>
            {boardValues.map((cell, index) => (
                <Cell key={index} index={index} value={cell} squareClicked={squareClicked} />
            ))}
        </Container>
    );
}

export default Board;
