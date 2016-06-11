//===================
// Pure/not pure functions

var p = 100;
function squareThis(x) { // Pure
  return x * x;
}

// Not pure -- depends on state not in param list
function garbleValue(x) {
  return x * x + p;
}

console.log(squareThis(3));
p = 100000000;
console.log(squareThis(3));

console.log(garbleValue(3));
p = 5;
console.log(garbleValue(3));

//===================
// IIFE Demo
var myCoolObject = {};

(function foo(obj) {
  var x = 'In IIFE-space, no one can hear you scream.';
  console.log('run');
  obj.x = x;
})(myCoolObject)

//foo(myCoolObject);
console.log('myCoolObject.x = ' + myCoolObject.x);
