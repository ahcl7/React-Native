import React from 'react';
import { StyleSheet, Text, View, Alert, Button, TextInput, ScrollView, Image } from 'react-native';
import {add, nt} from './test';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text : 'Content',
      inputText: ''
    };
  }

  render() {
    return (
      <View style = {styles.asdf}>
          <Text name = 'te' style = {{fontSize:50}}>  {this.state.text} </Text>
          <TextInput style={{width:200,height:40}} placeholder='input' onChangeText={
            (text)=>{this.setState({inputText:text});}} />
          <Button style={{width:50,height:50}} onPress={()=>{this.setState({text:this.state.inputText});}} title='Enter' />
	<Text> fuck that </Text>
	 <Text> sao gio lai dc </Text>
	   <Text> ngon vai dai </Text>
	    <Text> ok ! </Text>
	   <Text> thu cai coi </Text>
		<Text> sao deo tu cap nhat </Text>
	    <Text> thu lai cai nua </Text>
	    <Text> watchman ngon vai noi </Text>
	    </View>

    );
  }
}

const styles = StyleSheet.create({
  asdf: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
