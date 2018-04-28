import { maxW  , radius} from './service';

// import { convexHull, getIntersec, inline, getSymmetric ,
// 			sub } from './geo';
var geo = require("./geo.js");
function genSquare() {
	var res = [];
	res.push({x: 0, y:0});
	res.push({x: maxW, y: 0});
	res.push({x: maxW, y: maxW});
	res.push({x: 0, y:maxW});
	return res;
}
function genRect() {
	var res = [];
	res.push({x: 0, y:0});
	res.push({x: maxW, y: 0});
	res.push({x: maxW, y: maxW});
	res.push({x: 0, y:maxW});
	return res;
}
function genRectKhuyet() {
	var res = genRect();
	var x = Math.random() * maxW;
	var y = Math.random() * maxW;
	var k = Math.floor(Math.random() * 4);
	console.log(k);
	if (k==0) {
		res[0] = {x: x , y :0};
		res[4] = {x: 0 , y :y};
		res[5] = {x: x , y : y};
	} else {
		if (k==1) {
			res[k] = {x: x, y:0};
			res.splice(k+1, 0 , {x: x, y :y});
			res.splice(k+2, 0, {x:maxW, y: y});
		} else
		if (k==2) {
			res[k] = {x: maxW, y:y};
			res.splice(k+1, 0 , {x: x, y :y});
			res.splice(k+2, 0, {x:x, y: maxW});
		}else 
		if (k==3) {
			res[k] = {x: x, y:maxW};
			res.splice(k+1, 0 , {x: x, y :y});
			res.splice(k+2, 0, {x:0, y: y});
		}
	}
	return res;
}                      
export function gen5edge() {
	var res = genRect();
	var x = Math.random() * maxW;
	var y = Math.random() * maxW;
	var k = Math.floor(Math.random() * 4);
	if (k==0) {
		res[k] = {x: x, y: 0};
		res.push({x: 0 , y:y});
	}
	if (k==1) {
		res[k] = {x: x, y: 0};
		res.splice(k+1, 0, {x: maxW, y: y});
	}
	if (k==2) {
		res[k] = {x: maxW, y: y};
		res.splice(k+1, 0, {x: x, y: maxW});
	}
	if (k==3) {
		res[k] = {x: x, y: maxW};
		res.splice(k+1, 0, {x: 0, y: y});
	}
	return res;
}
                          

function toRadian(x) {
	return (x / 180) * Math.PI;
}                                                                                                                                                                 
function genPolygon() {
	var n = 5;
	var angel = [];
	var x0 = maxW / 2;
	var y0 = maxW / 2;
	var r = maxW / 2;
	var res = [];
	var last = 0;
	var least = 360 / (n+1);
	var opt = 360 / (n  * (n+1));
	for(var i = 0; i< n;i++) {
		last = last + least + Math.random() * opt;
		angel.push(last);
	}
	angel.sort(function(a,b) {
		return (a - b);
	});
	console.log(angel);

	for(var i =0; i<n;i++) {
		res.push({x: x0 + r * Math.sin(toRadian(angel[i])),
				  y: y0 + r * Math.cos(toRadian(angel[i]))});
	}
	return res;
}
export function genBoard(level) {
	if (level < 5) {
		return genSquare();
	} 
	if (level < 10) {
		return genRect();
	}
	if (level < 15) {
		return genRectKhuyet();
	}
	if (level < 20) {
		return gen5edge();
	}
	if (level < 25) {
		return genPolygon();
	}
}

export function check(p, a , C , dir, maxTouch, tt, to){
	if (dir == {x:0, y:0}) return false;
	var n = p.length;
	p.push(p[0]);
	// console.log(p);
	var m = a.length;
	var mark = [];
	for(var i =0 ; i<m; i++) {
		mark.push(false);
	}
	var cnt = 0;
	maxTouch++;
	to.push(C);
	while (maxTouch > 0) {
		maxTouch --;
		// console.log("pt");
		// console.log(C);
		// console.log("dir");
		// console.log(dir);
		for(var i = 0; i< n;i++) if ((tt.lenght ==0) || (tt[tt.length-1] !=i))
		{
			var A = p[i];
			var B = p[i+1];
			var rs = geo.getIntersec(A,B,C,dir);
			var ok = rs.ok;
			var D  = rs.intersec;
			// console.log(rs);
			if (ok && geo.inline(A,B,D)) {
				tt.push(i);
				// console.log(i);
				var _C = geo.getSymmetric(C,A,B);
				// console.log(_C);
				for(var j=0; j<m; j++) {
					if (!mark[j]) {
						if (geo.inline(C , D , a[j])) {
							mark[j] = true;
							cnt++;
						}
					}
				}
				var b = geo.disToLine(A,B, C);
				var d = geo.distance(C,D);
				// C = D;
				// to.push(C);
				dir = geo.sub(D , _C);
				var dirtmp = geo.sub(C,D);
				var dolon =  radius / b;
				console.log(dolon); 
				C = geo.flash(D, dirtmp, dolon);
				// C = D;
				to.push(C);
				break;
			}
		}
	}
	p.pop();
	return cnt == m;
}
export function ptoString(p) {
	var n = p.length;
	var res = "";
	for(var i =0 ;i< n;i++) {
		res = res + " " + p[i].x + "," + p[i].y;
	}
	return res;
}