'use strict';

function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  const newNumbers = numbers.filter(oddNum => oddNum % 2 !== 0);
  
   numbers = newNumbers.map(double => double * 2);
  //console.log(numbers);
  return numbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
