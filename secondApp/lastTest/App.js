import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
	  super(props);
	  this.state = {text: 'te'}
  }
	render() {
    return (
      <View style={styles.container}>
   	<Text> {this.state.text} </Text>
	    <Button onPress={()=>{this.setState({text:"Good night!"});}} title = "app"/>
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
