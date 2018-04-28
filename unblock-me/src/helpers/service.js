var common = require("./common");
import {Dimensions} from 'react-native';
var cos = {
	maxW: Dimensions.get('window').width,
	maxH: Dimensions.get('window').height,
	speed :3,
	maxLen: common.maxLen,
}
cos.unit = cos.maxW / (cos.maxLen + 0.1);
cos.margin = (cos.maxW - cos.unit * cos.maxLen) / 2;
module.exports = cos;