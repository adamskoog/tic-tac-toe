import React from 'react';
import styled from 'styled-components';

import Cell from './cell';

import { GAME_STATE } from '../util/constants';

const Container = styled.div<{ size: string, gameState: string }>`
    height: ${props => `${props.size}`};
    width: ${props => `${props.size}`};
    background-color: #000;

    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    cursor: ${props => props.gameState === GAME_STATE.IN_PROGRESS ? 'pointer' : 'default' };
    pointer-events: ${props => props.gameState === GAME_STATE.IN_PROGRESS ? 'unset' : 'none' };
`;

type Props = {
    boardSize: string,
    gameState: string,
    boardValues: Array<string>,
    squareClicked: (index: number) => void
}

function Board({ boardSize, gameState, boardValues, squareClicked }: Props): React.ReactElement {

    return (
        <Container size={boardSize} gameState={gameState}>
            {boardValues.map((cell, index) => (
                <Cell key={index} index={index} value={cell} squareClicked={squareClicked} />
            ))}
        </Container>
    );
}

export default Board;
