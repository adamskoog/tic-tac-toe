import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    color: #000;
`;

function Headline(): React.ReactElement {

    return (
        <Container>
            <Title>Welcome to Tic-Tac-Toe</Title>
        </Container>
    );
}

export default Headline;
