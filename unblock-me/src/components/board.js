import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Block} from './block';
var common = require("./../helpers/common");
export class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blocks: this.props.blocks,
		}
	}
	changeBoard = (board, index, newPos) => {
		// this.setState({blocks: board})

	}
	won= () => {

	}
	changeBlocks = (index, pos) => {
		console.log("update");
		var bls = this.state.blocks;
		bls[index].pos = pos;
		this.setState({blocks: bls});
		this.props.onMove();
		if (this.state.blocks[index].type == 2 && 
			pos.x == common.maxLen) {
			this.props.onWin();
		}
	}
	componentWillReceiveProps(nextProps) {
		console.log("onchange");
		this.setState({blocks: nextProps.blocks});
		this.props = nextProps;
		console.log(nextProps.blocks);
	}
	render() {
		const {blocks} = this.state;
		const {style} = this.props;
		return (
			<View style = {[styles.container, style]}> 
				{blocks.map((block, i)=> 
					<Block key = {i}  index = {i} blocks = {this.state.blocks} 
						onChange = {this.changeBlocks} />
				) }
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#6B4918",
		borderRadius: 15,
	},						
});