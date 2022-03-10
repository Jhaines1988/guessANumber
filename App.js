import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOver';
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const configureNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        restartGame={configureNewGame}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title='Guess A Number!' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
});
