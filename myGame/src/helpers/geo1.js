
const eps = 1e-7;


exports.sub = (A,B) =>{
	return {x: A.x - B.x, y: A.y - B.y};
}
exports.flash = (A, dir, k) =>{
	return ({x: A.x + dir.x * k , y:A.y + dir.y * k});
}

exports.mul = (A,B) => {
	return A.x * B.y - A.y * B.x;
}

exports.sqr = (x) => { return x * x; }

exports.sizeVt = (A) => {
	return this.sqr(A.x) + this.sqr(A.y);
}


exports.ccw = (A,B,C) => {
	var AB = this.sub(B,A);
	var AC = this.sub(C,A);
	return (this.mul(AB,AC));
}
exports.distance = (A,B) => {
	return Math.sqrt(this.sqr(A.x - B.x) + this.sqr(A.y - B.y));
}

exports.equal = (A,B) => {
	return (Math.abs(A-B) < eps);
}

exports.inline = (A,B,C) => { //check C is between A and B
	return this.equal(this.distance(A,C) + this.distance(C,B),
				this.distance(A,B));	
}

exports.inside = (O , p) => {
	var n = p.length;
	p.push(p[0]);
	console.log(p);
	var res = false;
	for(var i=0; i<n; i++) {
		if (this.inline( p[i] , p[i+1], O)) {
			console.log(i);
			p.pop();
			return true;
		}
		var A = p[i];
		var B = p[i+1];
		if (A.y > B.y) {
			var tmp = A;
			A = B;
			B = tmp;
		}
		if (this.equal(A.y , O.y) || this.equal(A.y , O.y)) {
			O.y += 2 * eps;
		}
		if ((O.y > B.y) && Math.abs(O.y - B.y) > eps) continue;
		if ((O.y < A.y) && Math.abs(O.y - A.y) > eps) continue;
		if ((O.x < Math.min(A.x, B.x))) {
			res ^= 1;
			continue;
		}
		if ((O.x > Math.max(A.x, B.x))) {
			continue;
		}
		res ^= ((this.mul (this.sub (A,B) , this.sub(O,A))) <= eps);
	}
	p.pop();
	return res;
}


// export function convexHull(p) {
// 	var n = p.length;
// 	dn = [];
// 	up = [];
// 	for(var i =0; i<n;i++) {
// 		while (dn.length > 1 && ccw(dn[dn.length-2] , dn[dn.length-1], a[i]) <=0) dn.pop();
// 		while (up.length > 1 && ccw(up[dn.length-2] , up[dn.length-1], a[i]) <=0) up.pop();
// 		dn.push(a[i]);
// 		up.push(a[i]);
// 	}
// }

exports.getIntersec = (A, B, C ,dir) =>{ //get intersec of AB and C->dir
	// console.log(this);
	var a = (A.y - B.y);
	var b = (B.x - A.x);
	var c = -(A.x * a + A.y * b);
	var k = - (c + a * C.x + b * C.y) / (a * dir.x + b *dir.y);
	// if (k<0) return {ok: false, intersec: null};
	var D = this.flash(C, dir , k);
	return {ok: (k>0), intersec: D};
}
exports.getSymmetric = (M, A, B) => { //lay diem doi xung cua M qua AB
	var H = this.getIntersec(A ,B , M , {x : A.y - B.y , y: B.x - A.x}).intersec;
	var _M = {
		x: H.x * 2 - M.x,
		y: H.y * 2 - M.y
	}
	return _M;
}
exports.move = (A, dir , v) => {
	var k = (v / Math.sqrt(this.sqr(dir.x) + this.sqr(dir.y)));
	return ({x: A.x + dir.x * k , y: A.y + dir.y *k });
}