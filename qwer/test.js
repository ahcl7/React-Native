export function add(first,second) {
  return first + second;
}
function check(n) {
  for(var i=2;i<Math.sqrt(n);i++) {
    if (n%i==0) return false;
  }
  return true;
}
export function nt(n) {
  var a = [];
  // a.push(1);
  return a;
  for(var i = 2;i<n;i++) {
    if (check(i)) {
      a.join(i);
    }
  }
  return a;
}
