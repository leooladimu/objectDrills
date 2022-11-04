/***********************************************************************

Write a function `getAverage` using fat arrow syntax that takes in an arbitrary
number of arguments, adds them up and returns a string containing the
average amount with a dollar sign in front.

Hint: Look up `toFixed()` on MDN.

Examples:

getAverage(30, 70); // '$50.00'
getAverage(1.12, 2.23, 3.34, 4.45); // '$2.79'
getAverage(4.99, 9.99, 19.99); // '$11.66'
***********************************************************************/
const getAverage = (...args) => {
  let arg = [...args];
  let num = 0;
  arg.forEach(e => {
    num += e;
  });
  let av = num / arg.length;
  let average = Number.parseFloat(av).toFixed(2);
  return average;
}


console.log(getAverage(30, 70)); // '$50.00'
console.log(getAverage(1.12, 2.23, 3.34, 4.45)); // '$2.79'
console.log(getAverage(4.99, 9.99, 19.99)); // '$11.66'