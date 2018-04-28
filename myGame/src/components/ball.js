import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { maxW, maxH } from './../helpers/service.js';
import { check } from './../helpers/helper.js';
import { move, inline, sub , disToLine} from '../helpers/geo.js';
import { radius } from '../helpers/service.js';
// var geo = require("../helpers/geo.js");
function sqr(x) {
	return x * x;
}
export class Ball extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			board: this.props.board,
			pos: this.props.pos, 
			dir: this.props.dir,
			v0:  this.props.v0,
			radius: radius,
			isRunning: true,
		}
	}
	initState = () => {
		this.setState({
			board: this.props.board,
			pos: this.props.pos, 
			dir: this.props.dir,
			v0:  this.props.v0,
			radius: radius,
			isRunning: true,
		});
	}
	move = () => {
		this.initState();
		var tt = [];
		var to = [];
		const {pos, dir, v0} = this.state;
		var ok = check(this.props.board, [] , pos , dir, 10, tt, to);
		// console.log(this.props.board);
		// console.log(to);
		var n = tt.length;
		// console.log(n);
		var m = this.props.board.length;
		var i = 0;
		var itv = setInterval(() => {
			if (i>=n-1) clearInterval(itv);
			else {
				var cur = tt[i];
				const {pos, dir, v0} = this.state;
				var tmp = move(pos, dir, v0);
				if (disToLine(this.props.board[cur],
						this.props.board[(cur+1) % m], tmp) 
						< this.state.radius){
					i++;
					this.setState({pos: to[i]});
					this.setState({dir: sub(to[i+1], to[i])});
				} else this.setState({pos: tmp});
				if (i>=n-1) clearInterval(itv);
			}
		}, 17);
	}
	render() {
		if (this.props.isRunning) this.move();
		return (
			// <View style = {styles.container} >
				<Image source = {require("./../../images/ball.png")}
				style = {{
					resizeMode: 'stretch',
					width: this.state.radius * 2,
					height: this.state.radius * 2,
					position: 'absolute',
					top: this.state.pos.y - this.state.radius,
					left: this.state.pos.x - this.state.radius,
				}} />
			// </View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		// flex: 1,
		zIndex: 2,
		//backgroundColor: 'black',
	},
});