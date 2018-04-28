import React from 'react';
import { StyleSheet, Image, Button,  Text, View , TextInput ,Alert,
Animated, TouchableNativeFeedback, TouchableOpacity , Dimensions, setInteval} from 'react-native';
export class Pipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: this.props.x,
      y: this.props.y,
      height: this.props.height,
      up: this.props.isUp,
    }
  }
  // componen
  render () {
    const {x,y,up} = this.state;
    var src = (up) ? require("./images/pipe-up.png") :
                     require("./images/pipe-down.png");
    return (
      <Image source ={src}
      style = {{
        resizeMode: 'stretch',
        height: parseInt(this.props.height) ,
        width: parseInt(this.props.width),
        position: 'absolute',
        bottom:0,
        left:0,
        zIndex: 2,
        transform: [
          {translateX: parseInt(this.props.x)},
          {translateY: parseInt(-this.props.y)}
        ]
      }} />
    );
  }
}
