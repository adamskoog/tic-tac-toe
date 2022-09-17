import React from 'react';
import styled, { css } from 'styled-components';

import { CELL_VALUES, SYMBOLS } from '../util/constants';

const Container = styled.div<{ value: string }>`
    color: #000;
    background-color: #fff;
    
    cursor: ${props => props.value === CELL_VALUES.EMPTY ? 'pointer' : 'default' };
    pointer-events: ${props => props.value === CELL_VALUES.EMPTY ? 'unset' : 'none' };
`;

const xValueMixin = css`
    &::after {
        content: '${SYMBOLS.X}';
    } 
`;
const yValueMixin = css`
    &::after {
        content: '${SYMBOLS.O}';
    } 
`;

const Symbol = styled.div<{ value: string }>`

    height: 100%;
    width: 100%;
    font-size: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    ${props => {
        if (props.value === CELL_VALUES.X)
            return xValueMixin;
        else if (props.value === CELL_VALUES.O)
            return yValueMixin;
        return '';
    }}
`;

type Props = {
    index: number,
    value: string,
    squareClicked: (index: number) => void
}

function Cell({ index, value, squareClicked }: Props): React.ReactElement {

    return (
        <Container value={value} onClick={() => squareClicked(index)}>
            <Symbol value={value} />
        </Container>

    );
}

export default Cell;
