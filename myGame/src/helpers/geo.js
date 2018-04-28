
const eps = 1e-4;


export function sub(A,B){
	return {x: A.x - B.x, y: A.y - B.y};
}
export function flash(A, dir, k) {
	return ({x: A.x + dir.x * k , y:A.y + dir.y * k});
}

export function mul(A,B)  {
	return A.x * B.y - A.y * B.x;
}

export function sqr(x)  { return x * x; }

export function sizeVt(A)  {
	return Math.sqrt(sqr(A.x) + sqr(A.y));
}


export function ccw(A,B,C)  {
	var AB = sub(B,A);
	var AC = sub(C,A);
	return (mul(AB,AC));
}
export function distance(A,B)  {
	return Math.sqrt(sqr(A.x - B.x) + sqr(A.y - B.y));
}

export function equal(A,B)  {
	return (Math.abs(A-B) < eps);
}

export function inline(A,B,C)  { //check C is between A and B
	return equal(distance(A,C) + distance(C,B),
				distance(A,B));	
}

export function inside(O , p)  {
	var n = p.length;
	p.push(p[0]);
	console.log(p);
	var res = false;
	for(var i=0; i<n; i++) {
		if (inline( p[i] , p[i+1], O)) {
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
		if (equal(A.y , O.y) || equal(A.y , O.y)) {
			O.y += 2 * eps;
		}
		if ((O.y > B.y) && Math.disToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLinedisToLineabs(O.y - B.y) > eps) continue;
		if ((O.y < A.y) && Math.abs(O.y - A.y) > eps) continue;
		if ((O.x < Math.min(A.x, B.x))) {
			res ^= 1;
			continue;
		}
		if ((O.x > Math.max(A.x, B.x))) {
			continue;
		}
		res ^= ((mul (sub (A,B) , sub(O,A))) <= eps);
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

export function getIntersec (A, B, C ,dir){ //get intersec of AB and C->dir
	// console.log(this);
	var a = (A.y - B.y);
	var b = (B.x - A.x);
	var c = -(A.x * a + A.y * b);
	var k = - (c + a * C.x + b * C.y) / (a * dir.x + b *dir.y);
	// if (k<0) return {ok: false, intersec: null};
	var D = flash(C, dir , k);
	return {ok: (k>0), intersec: D};
}
export function getSymmetric(M, A, B)  { //lay diem doi xung cua M qua AB
	var H = getIntersec(A ,B , M , {x : A.y - B.y , y: B.x - A.x}).intersec;
	var _M = {
		x: H.x * 2 - M.x,
		y: H.y * 2 - M.y
	}
	return _M;
}
export function move(A, dir , v)  {
	var k = (v / Math.sqrt(sqr(dir.x) + sqr(dir.y)));
	return ({x: A.x + dir.x * k , y: A.y + dir.y *k });
}
export function disToLine(A, B, M) { //distance _|_from M to AB
	var a = (A.y - B.y);
	var b = (B.x - A.x);
	var c = -(A.x * a + A.y * b);
	return Math.abs(a * M.x + b * M.y + c) / (Math.sqrt(sqr(a) + sqr(b)));
}