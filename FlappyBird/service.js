'use strict';
import React from 'react';
import {Dimensions} from "react-native";

var tmp = {
  val: 10,
 maxW : Dimensions.get("window").width,
 maxH: Dimensions.get("window").height,
};
tmp.birdH = 40;
tmp.birdW = 40;
tmp.pipeW = 100;
tmp.pipeDis = 150;
tmp.aliveDis = 150;
tmp.v0 = 6;
tmp.pipeV = 4;
tmp.acceleration = 0.35;
tmp.baseH = tmp.maxH / 5;
module.exports = tmp;
