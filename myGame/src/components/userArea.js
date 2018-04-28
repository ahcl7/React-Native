import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Game } from './game'
export class UserArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return (
			<View style = {styles.container}> 
				<Game level = '0' />
			</View>
		);
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
