import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
export class NextLv extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		var c = ">";
		const {style} = this.props;
		return (
			<TouchableWithoutFeedback 
				onPress = {this.props.NextLv}
				style = {[styles.container, style]}>
				
				<View style = {styles.container} >
					<Text style = {styles.text}> {c} </Text>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		width: 50,
		// flex:1,
		// backgroundColor: 'blue',
		alignItems: 'center',
		borderRadius: 100,
		justifyContent: 'center',
		borderWidth: 4,
		borderColor: 'white',
	},
	text: {
		fontSize: 40,
		fontWeight: 'bold',
		color: 'white',
	}
});
