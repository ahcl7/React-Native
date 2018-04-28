import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg , {Polygon, Circle, Rect, Image} from 'react-native-svg';

export class Test extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Image
		        x="5"
		        y="5"
		        width="50%"
		        height="90%"
		        preserveAspectRatio="xMidYMid slice"
		        opacity="1"
		        href={require('./../../images/ball.png')}
		        clipPath="url(#clip)"
		    />
		);
	}
}