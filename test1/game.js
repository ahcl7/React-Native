import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export  class Game extends React.Component {
  render() {
	const style = {
    		left: this.props.x,
    		top: this.props.y,
    	}
    return (
    	
      <Image source = {require("./img/test.png")}
      		style = {[styles.image, {
				left: this.props.x,
				top: 100,
      		}]} />
    );
  }
}
const styles = StyleSheet.create({
	image: {
		position: 'absolute',
		width: 100,
		height: 100,
	}
});