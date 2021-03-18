/* eslint-disable no-unused-expressions */

'use strict';

// Constructors use the keyword this
function Dog() {
  // add your code here
  this.name = 'Rupert';
  this.color = 'white';
  this.numLegs = 2;
}

const hound = new Dog();
hound.name;

console.log(hound.name); // Rupert
hound.name = 'Berry';
console.log(hound.name); // Berry
hound.color; // white
hound.numLegs = 2;
// Do not change or remove anything below this line
module.exports = hound;
