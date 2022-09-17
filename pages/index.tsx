import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Headline from '../components/headline';
import InfoBoard from '../components/info';
import Board from '../components/board';

import { GAME_STATE, NEW_GAME, SYMBOLS, TURN } from '../util/constants';
import * as GameLogic from '../util/gameLogic';

const Page = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    background-color: #fff;
`;

const Container = styled.main<{ width: string }>`
    width: ${props => props.width ? props.width : '400px'};
`;

const Home: NextPage = () => {

  const GAME_WIDTH = '400px';
  const [gameState, setGameState] = useState(GAME_STATE.IN_PROGRESS);
  const [boardValues, setBoardValues] = useState(NEW_GAME);
  const [currentTurn, setCurrentTurn] = useState(TURN.X);

  const squareClicked = (index: number) => {
      // update the game board.
      const currentBoard = GameLogic.updateGameState(index, currentTurn, boardValues);
      setBoardValues(currentBoard);

      // check for win state.
      setGameState(GameLogic.checkGameState(currentBoard, currentTurn));

      // update the current turn;
      setCurrentTurn(GameLogic.updateTurn(currentTurn));
  };

  const resetGame = () => {
    setGameState(GAME_STATE.IN_PROGRESS);
    setBoardValues(NEW_GAME);
    setCurrentTurn(TURN.X);
  };

  return (
    <Page>
      <Head>
      <title>{`${SYMBOLS.X}${SYMBOLS.O} Tic-Tac-Toe`}</title>
        <meta name="description" content="Tic-Tac-Toe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container width={GAME_WIDTH}>
        <Headline />
        <Board boardSize={GAME_WIDTH} boardValues={boardValues} gameState={gameState} squareClicked={squareClicked}/>
        <InfoBoard gameState={gameState} turn={currentTurn} resetGame={resetGame} />
      </Container>
    </Page>
  )
}

export default Home
