import React from 'react';
import styled from 'styled-components';

import { Fonts, Colors } from '@/components/util/globalStyle';

const Container = styled.header`
    font-family: ${Fonts.CrystalRadioKit};
    display: flex;
    justify-content: center;

    color: ${Colors.cream};
    background-color: ${Colors.darkGreen};

    width: 100%;
    padding: 15px;
`;

const Title = styled.h1`
    font-size: 64px;
`;

function Header(): React.ReactElement {

    return (
        <Container>
            <Title>Tic-Tac-Toe</Title>
        </Container>
    );
}

export default Header;
