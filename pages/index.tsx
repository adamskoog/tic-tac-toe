import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { GlobalStyle, NormalizeGlobalStyle } from '../components/util/globalStyle';

import Header from '../components/Header';
import GameInfo from '../components/GameInfo';
import GameBoard from '../components/GameBoard';

import { GAME_STATE, NEW_GAME, SYMBOLS, TURN } from '../util/constants';
import * as GameLogic from '../util/gameLogic';

const Page = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    flex-grow: 1;
`;

const Home: NextPage = () => {

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

      <NormalizeGlobalStyle />
      <GlobalStyle />

      <Header />
      <Main>
        <GameInfo gameState={gameState} turn={currentTurn} resetGame={resetGame} />
        <GameBoard boardValues={boardValues} gameState={gameState} squareClicked={squareClicked}/>
      </Main>
    </Page>
  )
}

export default Home
