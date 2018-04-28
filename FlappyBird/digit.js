import React from 'react';
import { StyleSheet, Image, Button,  Text, View , TextInput ,Alert,
Animated, TouchableWithoutFeedback , Dimensions, ImageBackground} from 'react-native';
export class Digit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var src = require("./images/flappybird_00.png");
    var t = this.props.d;
    switch(t) {
    case 0:
        src = require("./images/flappybird_00.png");
        break;
    case 1:
        src = require("./images/flappybird_01.png");
        break;
    case 2:
        src = require("./images/flappybird_02.png");
        break;
    case 3:
        src = require("./images/flappybird_03.png");
        break;
    case 4:
        src = require("./images/flappybird_04.png");
        break;
    case 5:
        src = require("./images/flappybird_05.png");
        break;
    case 6:
        src = require("./images/flappybird_06.png");
        break;
    case 7:
        src = require("./images/flappybird_07.png");
        break;
    case 8:
        src = require("./images/flappybird_08.png");
        break;
    case 9:
        src = require("./images/flappybird_09.png");
        break;
    }
    // alert("asdf");
    return (
      <Image source ={src} style = {styles.digit}/>
    );
  }
}   
const styles = StyleSheet.create({
  digit: {
    // height: 100,
    // position: 'absolute',
    width: null,
    resizeMode: 'stretch',
    // resizeMode: 'stretch',
    flex: 1,
  }
});
