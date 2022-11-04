/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

const arrayConverter = (array) => {
  let val = 1;
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    for (let j = 0; j < array.length; j++) {
      var nextKey = array[j];
      Object.assign(obj, { [key] : val });
    };
    if (key === nextKey) {
      val += 1;
    }
  };
  return obj;
}


console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}


// const obj = {
//   a: "get",
//   b: "all",
//   c: "of",
//   d: "the",
//   e: "keys"
// }
// 
// let printValuesRefactored = obj => {
//   for (let key in obj) {
//       if (/[abcde]/gi.test(key)) { 
//         console.log(Object.values(obj[key]).join(''))
//       }
//   }
//   return
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;