const eps = 1e-5;
var common = require('./common.js');
var block = require("../solver/block");
exports.genBlocks = (level) => {
	var res = [];
	// res.push(new block({x: 0, y: 2},  2,  2));
	// res.push(new block({x: 1, y: 5},  0,  2));
	// res.push(new block({x: 2, y: 0},  1,  3));
	// res.push(new block({x: 3, y: 5},  0,  2));
	// res.push(new block({x: 3, y: 2},  1,  3));
	// res.push(new block({x: 5, y: 2},  1,  2));
	// res.push(new block({x: 1, y: 0},  1,  3));
	console.log(level);
	switch (level) {
		case 0: 
			console.log("go 0");
			res.push(new block({x: 1, y: 2} , 2, 2));
			res.push(new block({x: 0, y: 1} , 1, 2)) ;	
			res.push(new block({x: 0, y: 3} , 1, 2));	
			res.push(new block({x: 1, y: 3} , 0, 2));
			res.push(new block({x: 1, y: 4} , 1, 2));	
			res.push(new block({x: 2, y: 0} , 1, 2));	
			res.push(new block({x: 2, y: 4} , 0, 2));
			res.push(new block({x: 2, y: 5} , 0, 2));	
			res.push(new block({x: 3, y: 0} , 0, 3));	
			res.push(new block({x: 3, y: 1} , 1, 2));
			res.push(new block({x: 4, y: 2} , 1, 3));	
			res.push(new block({x: 4, y: 5} , 0, 2));	
			res.push(new block({x: 5, y: 2} , 1, 3));
			break;
		case 1: {
			console.log("go 1");
			res.push(new block({x: 0, y: 2} , 2, 2));
			res.push(new block({x: 0, y: 0} , 0, 3)) ;	
			res.push(new block({x: 0, y: 3} , 1, 2));	
			res.push(new block({x: 0, y: 5} , 0, 2));
			res.push(new block({x: 1, y: 1} , 0, 2));	
			res.push(new block({x: 1, y: 3} , 1, 2));	
			res.push(new block({x: 2, y: 2} , 1, 2));
			res.push(new block({x: 2, y: 4} , 1, 2));	
			res.push(new block({x: 3, y: 0} , 1, 2));	
			res.push(new block({x: 3, y: 4} , 0, 2));
			res.push(new block({x: 4, y: 0} , 1, 2));	
			res.push(new block({x: 4, y: 3} , 0, 2));	
			break;
		}
		case 2: {
			res.push(new block({x: 1, y: 2} , 2, 2));
			res.push(new block({x: 0, y: 0} , 0, 2)) ;	
			res.push(new block({x: 0, y: 1} , 0, 2));	
			res.push(new block({x: 0, y: 3} , 1, 3));
			res.push(new block({x: 1, y: 3} , 0, 3));	
			res.push(new block({x: 1, y: 5} , 0, 2));	
			res.push(new block({x: 2, y: 0} , 1, 2));
			res.push(new block({x: 3, y: 4} , 1, 2));	
			res.push(new block({x: 4, y: 0} , 0, 2));	
			res.push(new block({x: 4, y: 2} , 1, 3));
			res.push(new block({x: 4, y: 5} , 0, 2));	
			res.push(new block({x: 5, y: 3} , 1, 2));	
			break;	
		}
		case 3: {
			res.push(new block({x: 0, y: 2} , 2, 2));
			res.push(new block({x: 0, y: 4} , 1, 2)) ;	
			res.push(new block({x: 1, y: 4} , 0, 2));	
			res.push(new block({x: 1, y: 5} , 0, 2));
			res.push(new block({x: 2, y: 0} , 1, 3));	
			res.push(new block({x: 2, y: 3} , 0, 3));	
			res.push(new block({x: 3, y: 0} , 0, 2));
			res.push(new block({x: 3, y: 1} , 1, 2));	
			res.push(new block({x: 3, y: 4} , 1, 2));	
			res.push(new block({x: 4, y: 1} , 1, 2));
			res.push(new block({x: 4, y: 5} , 0, 2));	
			res.push(new block({x: 5, y: 2} , 1, 3));	
			break;	
		}
	}
	return res;
}

exports.equal = (a,b) => {
	return Math.abs(a-b) < eps;
}

exports.swap = (pos) => {
	return {x:pos.y , y :pos.x};
}
exports.getCorrectPoint = (pos,type) => {
	return ({x: Math.ceil(pos.x) , y: Math.ceil(pos.y)});
}

update = (A, B, callback) => {
	if (A.type %2 == B.type %2) {
		if (A.type != 1) {
			if (A.pos.y == B.pos.y) {
				if (A.pos.x < B.pos.x) callback(0, B.pos.x - A.len );
				else callback(B.pos.x + B.len, common.maxLen);
			} else {
				callback(0 , common.maxLen);
			}
		} else {
			if (A.pos.x == B.pos.x) {
				if (A.pos.y < B.pos.y) callback(0, B.pos.y - A.len);
				else callback(B.pos.y + B.len , common.maxLen);
			} else {
				callback(0, common.maxLen);
			}
		}	
	} else {
		if (A.type != 1) {
			if (A.pos.y >= B.pos.y && A.pos.y < B.pos.y + B.len) {
				if (A.pos.x < B.pos.x) callback(0, B.pos.x - A.len);
				else callback(B.pos.x + 1, common.maxLen);
			} else {
				callback(0 , common.maxLen);
			}
		} else {
			if (A.pos.x >= B.pos.x && A.pos.x < B.pos.x + B.len) {
				if (A.pos.y < B.pos.y) callback(0, B.pos.y - A.len);
				else callback(B.pos.y + 1 , common.maxLen);
			} else {
				callback(0, common.maxLen);
			}
		}
	}
}
exports.getSegment = (blocks, index) => {	
	// console.log(index);
	var n = blocks.length;
	var min = 0;
	var max = common.maxLen;
	if (blocks[index].type != 2) max -= blocks[index].len; 
	for( var i = 0; i<n; i++) {
		if (i!=index) {
			update(blocks[index], blocks[i] , (mi , ma) => {
				min = Math.max(min , mi);
				max = Math.min(max , ma);
			});
		}
	}
	return ({l: min, r: max});
}