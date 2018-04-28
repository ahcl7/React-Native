import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Game } from './src/components/game.js';

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Game style = {styles.game} level = '0'/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  game: {
    width: null,
  }
});
