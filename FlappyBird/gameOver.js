import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {PlayAgain} from './playAgain';
export class GameOver extends React.Component {
	constructor(props) {
		super(props);
	}
	onPress =() =>{
		this.props.playAgain();
	}
	render() {
		return (
			<View style ={styles.container} >
				<Image style = {styles.image1} source = {require("./images/flappybird_gameover.png")}/>
				<Image style = {styles.image2} source = {require("./images/flappybird_score-board.png")}/>
				<PlayAgain style = {styles.image3} onPress={this.onPress}/>
			</View>
			);
	}
}
const styles = StyleSheet.create({
	container: {
		flex:1,
	},
	image1: {
		// height: 100,
		// flex: 1,
		height: "15%",
		resizeMode: 'stretch',
	},
	image2: {
		// height: 100,
		// flex: 1,
		height: "25%",
		resizeMode: 'stretch',
	},
	image3: {

		alignItems: 'center',
		resizeMode: 'stretch' , 
	}
});