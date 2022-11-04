/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a 
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word 
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/


let apple = 'apple';
console.log(apple.match(/[a-z,-]+=/g));

function appleCounter(appleObj) {
  // let apple = 'apple';
  // console.log(apple.match(/[a-z,-]+=/g));
}

let hasThreeVowels = (string) => {
  let vowels = ["a", "e", "i", "o", "u"]
  let vowelWords = vowels.filter((vowel) => (string.includes(vowel)))
  return vowelWords.length >= 3
}

// const validHexCode = (string) => {
//   if (/^[apple]/gi.test(string)) {
//       return true;
//   }
//   return false;
// }

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

// 
// let obj = { banana: "yay!" };
// appleCounter(obj); // => 0
// 
// let obj1 = { crabapple: "yum!" };
// appleCounter(obj1); // => 1
// 
// let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
// appleCounter(obj2); // => 2
// 
// 
// let obj3 = {
//   crabApple: "yum!",
//   honeyApple: "super yum",
//   banana: "yay",
//   bigapple: "NYC"
// };
// appleCounter(obj3); // => 3