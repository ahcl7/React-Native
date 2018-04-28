import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
export class PlayAgain extends React.Component {
	constructor(props) {
		super(props);
	}
	onPress = () => {
		this.props.onPress();
	}
	render() {
		return (
			<TouchableOpacity style = {styles.container}
			onPress={this.onPress}> 
				<View style = {styles.container} >
					<Image source = {require("./images/flappybird_play.png")}
					style = {styles.image} /> 
				</View>
			</TouchableOpacity>
			);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center', 
	},
	Image: {
		flex: 1,
		alignSelf: 'center',
	}
});