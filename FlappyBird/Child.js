import React from 'react';
import {Text, Button, StyleSheet, Image} from 'react-native';
import {baseH, maxW} from './service';
export class Child extends React.Component {
	constructor(props) {
		super(props);
	}
	onPress() {
		// alert("asdf");
		this.props.evt(this.props.text+1);

	}
	render() {
		return (
			<Image source = {require("./images/flappybird-bg-brow.png")}
			style = {{
				position: 'absolute',
				height: baseH,
				width: maxW,
				left: -this.props.time%28,
				bottom: 0,
				resizeMode: 'cover',
			}}/>
		);
	}
}