import React from 'react';
import { StyleSheet, Image, Button,  Text, View , TextInput ,Alert,
Animated, TouchableWithoutFeedback , Dimensions, ImageBackground} from 'react-native';
import {getDigits} from './helper';
import {Digit} from './digit';

export class Score extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let a = getDigits(this.props.score);
    // alert(a.length);
    return (
      <View style = {styles.score}>
        {a.map((x,i) => <Digit key = {i} d={x} />)}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  score: {
    flex:1,
    width:null,
    flexDirection: 'row',
    // position: 'absolute',
  }
});
