// Write a function `leastFrequentLetter(string)` that will take a
// string as an argument and return the character that appears the
// least often. In case of a tie, return any character with the
// lowest count. The string will have at least one character.



const leastFrequentLetter = (sentence) => {
  let obj = {};
  for (let i of sentence) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i] += 1
    }
  }
  let arrayOfObjects = Object.entries(obj);
  let leastOften = Infinity;
  let solution = '';
  arrayOfObjects.forEach(pair => {
    let val = pair[1];
    let key = pair[0];
    if (val < leastOften) {
      leastOften = val;
      solution = key;
    }
  });
  return solution;
}


// console.log(mostCommonChar("mississippi"));
console.log(leastFrequentLetter("What is the most common character in this sentence"));
// console.log(mostCommonChar("Cheese"));
console.log(leastFrequentLetter("mississippi"));
console.log(leastFrequentLetter("ananab"));
console.log(leastFrequentLetter("Cheese"));
leastFrequentLetter("mississippi") // "m"
leastFrequentLetter("ananab") // "b"
leastFrequentLetter("Cheese") // "C", "h", or "s"

// let obj = {};
// let string = sentence.split(' ').join('');
// console.log(string);
// for (let i of string) {
//     if (!obj[i]) {
//         obj[i] = 1
//     } else {
//         obj[i] = obj[i] + 1
//     }
// };
// let charVal = Object.values(obj);
// let mostChar = Math.max(...charVal);
// for (let i in obj) {
//     if (obj[i] === mostChar) {
//       return i;
//     }
// };
// return;