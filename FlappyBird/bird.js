import React from 'react';
import { TouchableNativeFeedback, StyleSheet, Image, Button,  Text, View , TextInput ,Alert} from 'react-native';
import {v0} from './service';
export class Bird extends React.Component{
 constructor(props) {
   super(props);
   this.state= {
     x:10,
     y:500,
     a: 0.2,
     v:0,
   };
 }
 BirdMove() {
   this.setState({v: this.state.v-this.state.a});
   this.setState({y: Math.max(0,this.state.y+this.state.v)});
 }
 gameOver() {
   alert("game over!");
 }
 moveUp() {
   this.setState({v: 6});
 }
 // componentDidMount() {
 //   var itv = setInterval(()=> {
 //     this.BirdMove();
 //     if (this.state.y ==0) {
 //       this.gameOver();
 //       clearInterval(itv);
 //     }
 //     if (this.props.onPre) {
 //       this.moveUp();
 //     }
 //   }, 17);
 //   //asdf/
 // }
 onPress1 = () => {
   alert("touched!");
 }

 render () {
   const { x, y } = this.state;
   // if (this.props.onPre) {
   //   this.moveUp();
   // }
   var birdAnimation = this.props.birdAnimation;
   var src = (birdAnimation/2==0) ? require("./images/bird1.png"):
   ((birdAnimation/2==1) ? require("./images/bird2.png") :
         require("./images/bird3.png"));
   var ang = Math.max(this.props.v, -v0) * -5 + 'deg';
   return (
        <Image source={src} style = {{
         height:  this.props.height,
         width: this.props.width,
         bottom:  0,
         left: 0,
         position: 'absolute',
         transform: [
             {translateX: parseInt(this.props.x)},
             {translateY: -parseInt(this.props.y)},
             {rotate: ang},

         ],
       }}/>
// </View>
// </TouchableNativeFeedback>
   );
 }
}
