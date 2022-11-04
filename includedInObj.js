// Check if key is in object
// Write a function includedInObject that accepts an object, obj, and a key
// and returns true if that key exists on the object or false otherwise.

const obj = {
  first: "1",
  second: 2,
  third: "three"
}

const includedInObject = (obj, key) => {
  for (let kee in obj) {
    if (kee === key) {
      return true;
    }
  }
  return false;
}

console.log(includedInObject(obj, 'first'));      // true
console.log(includedInObject(obj, 'second'));     // true
console.log(includedInObject(obj, 'fourth'));     // false

// 
// let objArr = Object.keys(obj);
// if (objArr.includes(key)) {
//   return true;
// }
// return false;