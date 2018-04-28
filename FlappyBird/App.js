import React from 'react';
import { StyleSheet, Image, Button,  Text, View , TextInput ,Alert,
Animated, TouchableWithoutFeedback , Dimensions, ImageBackground} from 'react-native';
import {getScore, genPipes, updatePipes, isDead, numberOfDigit} from './helper';
import {sum} from './md';
import {Bird} from './bird';
import {Pipe} from './pipe';
import {Score} from './score';
import {pipeV, v0, val, maxW, maxH, birdW, birdH, pipeW, baseH, acceleration} from './service';
const tp = 100;
const ok = true;
import {Digit} from './digit';
import {Child} from './Child';
import {GameOver} from './gameOver';
export default class App extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pipes : genPipes().slice(),
      bird : {x: 100, y: maxH/2, v: 0, a: acceleration},
      onPrs: false,
      birdAnimation: 0,
      score: 0,
      curPipe:  0,
      gameOver: false,
      time: 0,
      // aga
    }
  }
  Move() {
    this.setState({time: this.state.time + pipeV});
    this.setState({pipes: updatePipes(this.state.pipes)});
    var tmp = this.state.bird;
    tmp.v = tmp.v - tmp.a;
    tmp.y = Math.max(baseH, tmp.y + tmp.v);
    this.setState({bird: tmp});
    this.setState({birdAnimation: (this.state.birdAnimation+1)%6});
  }
  birdUp() {
    var tmp = this.state.bird;
    tmp.v = v0;
    this.setState({bird: tmp});
  }
  initState() {
    this.setState({
      pipes : genPipes().slice(),
      bird : {x: 100, y: maxH/2, v: 0, a: acceleration},
      onPrs: false,
      birdAnimation: 0,
      score: 0,
      curPipe:  0,
      gameOver: false,
      time:0,
    });
  }
  componentDidMount() {
    var interv  = setInterval(()=>{
        if (isDead(this.state.bird, this.state.pipes)) {
          // this.initState();
          this.setState({gameOver: true});
          clearInterval(interv);
        }
        this.Move();
        if (getScore(this.state.bird, this.state.pipes[this.state.curPipe])) {
          this.setState({curPipe: (this.state.curPipe+2)%6});
          this.setState({score: this.state.score+1});
        }
    },17);
  }
  
  onPressIn =() => {
    this.birdUp();
  }
  playAgain = () => {
    this.initState();
    this.componentDidMount();
  }
  render () {
    const pipe = this.state.pipes.slice();
    const {x,y,v} = this.state.bird;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn}
        style = {styles.image}>
        <View style = {styles.master}>
        <ImageBackground source ={require("./images/bg.png")} style ={styles.image}>


        {
          this.state.pipes.map((pipe , i) => <Pipe key={i}  x={pipe.x} y={pipe.y}
            height={pipe.height} width ={pipeW} isUp={pipe.isUp}/>)
        }
        <Bird birdAnimation={this.state.birdAnimation}
          v = {v} x={x} y={this.state.bird.y} height = {birdH} width = {birdW}/>
        {(!this.state.gameOver) ?
        <View style = {{
          flex:1, 
          top: 100,
          zIndex: 10,
          height: 100,
          width: numberOfDigit(this.state.score)*30,
          alignSelf: 'center',
          }}>
        <Score score={this.state.score}/>
        </View> :
        <View style = {{
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 11,
        // flex: 1,
        top: 100,
        height: maxH - baseH-100,
      }}> 
      <GameOver playAgain={this.playAgain}/>
      </View>}
        </ImageBackground>
  
      <Child time={this.state.time}/>
  </View>
   </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  master: {
    flex:1,

  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  base: {
    position: 'absolute',
    left:0,
    bottom:0,
    width: "100%",
    height: baseH,
    resizeMode: 'stretch',
    zIndex: 1,
  },
  container: {
    // width: "100%",
    // alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button: {
      // position: 'absolute',
      // top: 10
    }
});
