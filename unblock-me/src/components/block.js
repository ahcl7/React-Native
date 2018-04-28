import React from 'react';
import { PanResponder, Image, Animated, StyleSheet, Text, View 
				} from 'react-native';
import * as cos from './../helpers/service.js';
import {getCorrectPoint, getSegment} from './../helpers/helper.js';
export class Block extends React.Component{
	constructor(props) {
		super(props);
		this.animate = null;
		this.index = this.props.index;
		this.block = this.props.blocks[this.index];
		this.state = {
			pos: this.block.pos,
			type: this.block.type,
			len: this.block.len,
			lastPos: this.block.pos,
		}
	}
	get =(seg, x) => {
		if (x<seg.l) return seg.l;
		if (x>seg.r) return seg.r;
		return x;
	}
	_onMove = (evt , gestureState) => {
		var cox = (this.state.type == 1) ? 0 : 1;
		var coy = 1-cox;

		this.setState({pos: {x:this.get(this.segx,this.state.lastPos.x + cox * gestureState.dx / cos.unit),
					y: this.get(this.segy,this.state.lastPos.y + coy * gestureState.dy/cos.unit)}});
	}
	
	update = (callback) => {
		// this.animate = new Animated.ValueXY(this.state.pos);
		var cr = getCorrectPoint(this.state.pos, this.state.type);
		// console.log(cr);
		this.setState({pos: cr});
		this.setState({lastPos: cr});
		callback(cr);
		// Animated.timing(this.animate, {
		// 	toValue: cr,
		// 	duration: 50,	
		// }).start(() => {});
	}
	_onRelease = (evt , gestureState) => {
		// var cox = (this.state.type == 1) ? 0 : 1;
		// var coy = 1-cox;
		this.update((pos)=> {
			this.props.onChange(this.index, pos);
		});
	}
	_onStart = (evt, gestureState) => {
		this.segx = getSegment(this.props.blocks, this.index);
		this.segy = this.segx;
		if (this.state.type==1) this.segx = {l:0, r: cos.maxLen};
		else this.segy = {l: 0 , r: cos.maxLen};
		console.log(this.segx);
		console.log(this.segy);
	}
	componentWillMount() {
		console.log("aksdfkjahsdkjfhkasdhf");
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onPanResponderGrant: this._onStart,
			onPanResponderMove: this._onMove,
			onPanResponderRelease: this._onRelease,
		});
	}
	initState = (nextProps) => {
		console.log("on block change");
		// console.log(this.props.blocks[this.props.index].pos);
		this.index = nextProps.index;
		this.block = nextProps.blocks[this.props.index];
		this.setState({
			pos: this.block.pos,
			type: this.block.type,
			len: this.block.len,
			lastPos: this.block.pos,
		});
	}
	componentWillReceiveProps(nextProps) {
		this.initState(nextProps);
	}
	render() {
		const {pos, type, len} = this.state;
		var w = len, h = 1;
		if (type ==1) {
			w = 1;
			h = len;
		} 
		const style1 = (this.animate) ? this.animate.getTranslateTransform() : {};
		var src = (type == 0) ? require("./../../img/block_hor.png"):
			((type == 1) ? require("./../../img/block_ver.png") : 
				require("./../../img/block_red.png"));
		return (
				<Image source = {src} style = {[{
					width: w * cos.unit,
					height: h * cos.unit,
					position: 'absolute',
					left: pos.x * cos.unit,
					top: pos.y * cos.unit,
					resizeMode: 'stretch',
					borderRadius: 5,
				}]} 
				{...this._panResponder.panHandlers}/>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		borderRadius: 15,
	},
});