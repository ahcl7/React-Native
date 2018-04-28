import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export class MoveStatus extends React.Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		const { style } = this.props;
		return (
			<View style = {[styles.container, style]} >
				<Text style = {styles.top} > Moves </Text>
				<Text style = {styles.score} > {this.props.move} </Text>
				<Text style = {styles.bottom}> Record:-- </Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#6B4918',
		borderRadius: 15,
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	top: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white',
	},
	score: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
	},
	bottom: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
	}
	
});