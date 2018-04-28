import React from 'react';
import {Image , ImageBackground, View , Text , StyleSheet} from 'react-native';
import { genBlocks } from '../helpers/helper.js';
import * as cos from './../helpers/service.js';
import {LevelSelect} from './levelSelect';
import {MoveStatus} from './moveStatus';
import {Board} from './board';

export class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			move: 0, 
			level: parseInt(this.props.level),
			blocks : genBlocks(parseInt(this.props.level)),
		}
	}
	onMove = () => {
		this.setState({move: this.state.move+1});
	}
	NextLv = () => {
		console.log("next");
		var nextLv = Math.min(1, this.state.level + 1);
		this.setState({level: nextLv});
		var nextBlocks = genBlocks(nextLv);
		this.setState({blocks: nextBlocks});
		this.setState({move: 0});		
		
	}
	PrevLv = () => {
		console.log("next");
		var nextLv = Math.max(0, this.state.level - 1);
		this.setState({level: nextLv});
		var nextBlocks = genBlocks(nextLv);
		this.setState({blocks: nextBlocks});
		this.setState({move: 0});		
	}
	render() {
		return (
			<ImageBackground style = {styles.container}
				source = {require("./../../img/bg.jpg")}
			>
				<View style = {styles.top}>
					<LevelSelect style =  {styles.levelSelect} 
						curLv = '0' NextLv = {this.NextLv}
						PrevLv = {this.PrevLv}/>
					<MoveStatus style = {styles.moveStatus}
						move = {this.state.move} />
				</View>
				<Board style = {styles.board} 
					blocks = {this.state.blocks}
					onMove = {this.onMove}
					onWin = {this.NextLv}
				/>
			</ImageBackground>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'yellow',
		// width: null,
	},
	top: {
		flexDirection: 'row',
		// backgroundColor: 'violet',
		height: 150,
		width: '100%',
		// margin: cos.margin,
	},
	levelSelect: {
		flex: 2,
		margin: cos.margin,
	},
	moveStatus: {
		flex: 1,
		margin: cos.margin,
		marginRight: cos.margin,
	},
	board: {
		width: cos.unit * cos.maxLen,
		height: cos.unit * cos.maxLen,
		margin: cos.margin,
		marginTop: cos.margin * 3,
	}
});