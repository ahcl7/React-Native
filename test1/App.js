import React, { Children } from 'react';
import { Image, PanResponder, TouchableWithoutFeedback, Easing, Animated, StyleSheet, Text, View, Button } from 'react-native';
import { Game } from './game.js';
export class Child extends React.Component {
  constructor(props) {
    super(props);
    // console.log("init");
    this.state = {
      x : 0,
    }
  }
  componentWillReceiveProps() {
    this.setState({x: this.props.x});
  }
  render() {
    return (
      <Text> {this.state.x} </Text>
    );
  }
}
export default class App extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      text: 1,
    }
  }
  onPress = () => {
    this.setState({text: this.state.text+1});
    console.log(this.state.text);
  }
  render() {
    return (
      <View style = {styles.container} >
        <Child x = {this.state.text} />
        <Button onPress = {this.onPress} title ="Press Me" />
      </View>        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
