import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { genBoard , ptoString} from './../helpers/helper';
import { Ball} from './ball';
import { maxW, maxH } from './../helpers/service.js';
import Svg , {Polygon, Circle, Rect} from 'react-native-svg';
import { Test } from './test';
export class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			board: genBoard(20),
			ball:{
				x : maxW/2-1,
				y : maxW/2-1,
			},
			dir: {
				x : 0,
				y : 0,
			},
			v0: 5,
			isRunning: false,
			// board : genBoard();
			// point : genPoint();
		}
	}
	initState = () => {
		this.setState({ball:{
				x : maxW/2-1,
				y : maxW/2-1}});
	}
	onPress = (evt) => {
		this.initState();
		var p = {x: evt.nativeEvent.locationX,
				 y: evt.nativeEvent.locationY};
		this.setState({dir: {x: p.x - this.state.ball.x , 
							 y: p.y - this.state.ball.y}});
		this.setState({isRunning: true});
	}
	render() {
		const {board, ball, dir, v0} = this.state;
		return (
			<TouchableOpacity style= {styles.container}
				onPress={this.onPress}>
				<View style = {styles.container} >
					<Svg style={styles.drawerContainer} width={maxW} height={maxW}>
						<Polygon
				        points={ptoString(this.state.board)}
				        fill="lime"
				        stroke="purple"
				        strokeWidth="1"
				    	/>
					</Svg>
				<Ball pos={ball} dir={this.state.dir} v0={v0} board={board} 
						isRunning = {this.state.isRunning}/> 				
				</View>
			</TouchableOpacity>
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
  drawerContainer: {
  	flex: 1,
  	position: 'absolute',
  	top: 0,
  	left: 0,
  	backgroundColor: 'red',
  },
  ball: {
  	position: 'absolute',
  	top: 50,
  	left: 0,
  }
});
