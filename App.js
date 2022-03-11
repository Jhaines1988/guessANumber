import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
// import { AppLoadingProps } from 'expo-app-loading';
// import { AppLoading } from 'expo-app-loading';
import AppLoading from 'expo-app-loading';
import Header from './components/header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOver';
// import { useFonts } from 'expo-font';
import { useFonts } from '@expo-google-fonts/inter';
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  // const [dataLoaded, setDataLoaded] = useState(false);

  const [loaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  if (!loaded) {
    return <AppLoading />;
  }
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
