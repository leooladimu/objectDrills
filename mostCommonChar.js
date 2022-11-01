const mostCommonChar = (sentence) => {
  let obj = {};
  let string = sentence.split(' ').join('');
  console.log(string);
  for (let i of string) {
      if (!obj[i]) {
          obj[i] = 1
      } else {
          obj[i] = obj[i] + 1
      }
  };
  let charVal = Object.values(obj);
  let mostChar = Math.max(...charVal);
  for (let i in obj) {
      if (obj[i] === mostChar) {
        return i;
      }
  };
  return;
}


// console.log(mostCommonChar("mississippi"));
console.log(mostCommonChar("What is the most common character in this sentence"));
// console.log(mostCommonChar("Cheese"));