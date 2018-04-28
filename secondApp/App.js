import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

class Greeting extends React.Component {
	render() {
		return (
				<View>
					<Text> Xin chao {this.props.name} </Text>
				</View>
		       );
	}
}
class Blink extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showText : true };
		setInterval(() => {
			this.setState(previousState => {
				return {showText: !previousState.showText };
			});
		}, 1000);
	}
	render() {
		let display = this.state.showText ? this.props.text : "";
		return (
				<Text> {display} </Text>
		       );
	}
}

export default class App extends React.Component {
    constructor(props) {
	    super(props);
	    this.state = {text : ""};
	}
    render() {
    return (
      <View style={styles.container}>
      	<Greeting name = 'Duong'/>
	<Greeting name = 'Huy' />
	<Greeting name = 'An' />
	<Greeting name = "dmclgt" />
	<Blink text = 'tinh yeu em mang cuon mat di bao nhieu cau ca' />
	<TextInput style={{height:40}} placeholder="Type here to translate" onChangeText={(text)=>this.setState({text})} />
	<Text style={{padding: 10, fontSize: 42}}>
	          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
		          </Text>
      <Button onPress={()=>{Alert.alert("qwer")};
	      	}}
		title="Press me" />
	 </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
