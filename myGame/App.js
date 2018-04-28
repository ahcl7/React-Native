import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {UserArea} from './src/components/userArea';
// const geo = require("./src/helpers/geo.js");
export default class App extends React.Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <View style={styles.container}>
        {<UserArea />}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
