import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NextLv} from './nextLv';
import {PrevLv} from './prevLv';
export class LevelSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		const { style } = this.props;
		return(
			<View style = {[styles.container, style]}>
				<Text style = {styles.text}> Puzzle</Text>
				<View style = {styles.containlv} >
					<PrevLv lv = {this.props.curLv} 
						PrevLv = {this.props.PrevLv}
						style = {styles.prevLv} />
					<NextLv lv = {this.props.curLv} 
						NextLv = {this.props.NextLv}
						style = {styles.nextLv} 
						/>
				</View>
				<Text style = {styles.bottom}>
					Beginner
				</Text> 
			</View>
		);
	}
} 
const styles = StyleSheet.create({
	container: {
		borderRadius: 15,
		backgroundColor: "#6B4918",
		flexDirection: "column",
		justifyContent: "space-around",
		// flex: 1,
	},
	text: {
		color: "white",
		fontSize: 40,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	containlv: {
		height: 50,
		alignSelf: 'center',
		width: "100%",
		flexDirection: "row",
		// backgroundColor: "red",
		justifyContent: "space-between",
	},
	nextLv: {
		marginRight: 10,
	},
	prevLv: {
		marginLeft: 10,
	},
	bottom: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		color: "white",
	}
});