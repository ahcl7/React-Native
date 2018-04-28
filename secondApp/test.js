/* @flow */
function getLength(str) {
	  if (str != null) { // Check using != so it captures `undefined` as well
		      return str.length;
		    }
	  return 0;
}
getLength('michael');
getLength(null);
getLength();

