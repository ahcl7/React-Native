import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class Greeting extends React.Component {
  render() {
	  return (
			  <View>
			  	<Text> Hello {this.props.name} </Text>
			</View>
	);
  }
}
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      	<Greeting name = 'duong'/>
	<Greeting name = 'huy'/>
	<Greeting name = 'an'/>
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
