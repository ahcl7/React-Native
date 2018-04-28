import {add} from './md1';

export function sum(n) {
  var ans = 0;
  for(var i=0;i<n;i++) {
    ans = add(ans,i);
  }
  return ans;
}
