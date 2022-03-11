import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over !</BodyText>
      <View style={styles.imageContainer}>
        {/*
        example of network images
        <Image
          style={styles.image}
          source={{
            uri: `https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg`,
          }}
        /> */}
        <Image style={styles.image} source={require('../assets/success.png')} />
      </View>
      <BodyText>NumberOfRounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was : {props.userNumber}</BodyText>
      <MainButton onPress={props.restartGame}> NEW GAME </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: { width: '100%', height: '100%' },
});

export default GameOverScreen;
