'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
/**
 * In the 1st function, variable x is assigned to 9 and its increment
 * 9 to 10, but as x is a constant variable when 
 * console.log calls for x, the function prints out the const variable value which is 9.
 * 
 * In the 2nd function, variable y is an object and function changes the value of 9 using key x . 
 * It increment it to 10 and assign it to x. when the console.log calls for y, 
variable y finds the x and the value 10 which is assigned to it.

*/
