import {birdW, baseH, maxH, maxW,pipeDis, pipeW, aliveDis} from './service';
import {pipeV} from './service';

export function genPipes() {
  let res = [];
  var sl = maxW / (pipeW + pipeDis);
  sl = 3;
  var x = maxW * 2 / 3;
  for(var i = 0; i<sl; i++) {
    var height = (maxH-baseH) /3 + Math.random() * (maxH-baseH) * 4 / 15;
    res.push({key: i, x: x , y: baseH , height: height, isUp: true});
    height = maxH - aliveDis - height - baseH;
    res.push({key: i , x: x , y: maxH - height, height: height, isUp: false});
    x += (pipeDis + pipeW);
  }
  return res;
}

export function updatePipes(pipes) {
  var n = pipes.length;
  var Max = -10;
  for(var i =0; i<n;i++) {
    pipes[i].x -= pipeV;
    Max = Math.max(Max,pipes[i].x);
  }
  for(var i=0;i<n;i++) {
    if (pipes[i].x <-pipeW && i%2==0) {
      pipes[i].x = Max + pipeW + pipeDis;
      pipes[i+1].x = Max + pipeW + pipeDis;
      var hei = (maxH-baseH) /3 + Math.random() * (maxH-baseH) * 4 / 15;

      // var hei = 100;
      pipes[i].height = hei;
      hei = maxH - aliveDis - hei - baseH;
      pipes[i+1].y = maxH - hei;
      pipes[i+1].height = hei;
    }
  }
  return pipes;
}
function dis(x,y,x1,y1) {
  return (Math.sqrt((x-x1) * (x-x1) + (y-y1) * (y-y1)));
}
function sqr(x) {
  return x * x;
}
function inter1(bird, x, y, y1) {
  x0 = bird.x + birdW/2;
  y0 = bird.y + birdW/2;
  if (y > y1) {
    var tmp = y;
    y = y1;
    y1 = tmp;
  }
  var r = birdW * 2 / 5;
  var t = (sqr(r) - sqr(x - x0));
  if (t<0) return false;
  var l = -Math.sqrt(t) + y0;
  var r =  Math.sqrt(t) + y0;
  return !(r < y || l> y1);
}
function inter2(bird, y, x, x1) {
  if (x > x1) {
    var tmp = x;
    x =  x1;
    x1 = tmp;
  }
  x0 = bird.x + birdW/2;
  y0 = bird.y + birdW/2;
  var r = birdW *2 / 5;
  var t = (sqr(r) - sqr(y-y0));
  if (t<0) return false;
  var l = -Math.sqrt(t) + x0;
  var r =  Math.sqrt(t) + x0;
  if  ( !(r < x || l>x1))  {
    // alert(x +' ' + x1 + ' ' + l + ' ' + r);
    return true;
  }
  return false;
}
function intersec(bird, pipe) {
  if (inter1(bird, pipe.x, pipe.y , pipe.y + pipe.height)) return true;
  if (inter2(bird, pipe.y, pipe.x, pipe.x + pipeW)) return true;
  if (inter2(bird, pipe.y + pipe.height, pipe.x, pipe.x + pipeW)) return true;
  return false;

}
export function isDead(bird, pipes) {
  if (bird.y <= baseH) return true;
  if (bird.y + birdW >maxH) return true;
  var n = pipes.length;
  for(var i=0;i<n;i++) {
      if (intersec(bird, pipes[i])) return true;
  }
  return false;
}

export function getScore(bird , pipe) {
  return (bird.x >= pipe.x + pipeW);
}
export function numberOfDigit(n) {
  n = parseInt(n);
  // alert(n);
  if (n==0) {
    return 1;
  }
  let sl = 0;
  while (n>0) {
    sl++;
    n = (n - n%10) / 10;
  }
  return sl;
}

export function getDigits(n) {
  n = parseInt(n);
  // alert(n);
  let res = [];
  if (n==0) {
    res.push(0);
    return res;
  }
  let sl = 0;
  while (n>0) {
    sl++;
    res.push(n%10);
    n = (n - n%10) / 10;
  }
  // alert(sl);
  for(var i=0;i<sl/2;i++) {
    var tmp = res[i];
    res[i] = res[sl-i-1];
    res[sl-i-1] = tmp;
  }
  return res;
}
