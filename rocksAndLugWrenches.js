/***********************************************************************
Write a function `rocksAndLugWrenches(obj)` that takes an object as
an argument and returns an integer representing how many keys and values
in the input object contain the string "lugwrench" or "rock".

For example, `{"fruit": "pinelugwrench", "rock": "juice"}` has two strings
containing "lugwrench" or "rock".

Examples:


***********************************************************************/

const rocksAndLugWrenches = (obj) => {
  let integer = 0;
  for (let key in obj) {
    if (/lugwrench/.test(key) ||
      /rock/.test(key)) {
        integer += 1;
    }
    if (/lugwrench/.test(obj[key]) ||
      /rock/.test(obj[key])) {
        integer += 1;
    }
  }
  console.log(integer);
}


obj1 = {"rock": "fruit", "apple": "fruit", "carrot": "vegetable", "cherry": "fruit"}
rocksAndLugWrenches(obj1) // 1

obj2 = {"alex": "lugwrench", "erin": "pinerock", "cody": "mango", "daniel": "rock"}
rocksAndLugWrenches(obj2) // 3

obj3 = {"lugwrench-juice": "lugwrench", "rock-sauce": "rock", "snrock": "peach-tea"}
rocksAndLugWrenches(obj3) // 5


// var int = 0;
// let keys = Object.keys(obj);
// let vals = Object.values(obj);
// keys.forEach(key => {
//   if (/lugwrench/.test(key) || /rock/.test(key)) {
//     int += 1;
//   }
// });
// vals.forEach(val => {
//   if (/lugwrench/.test(val) || /rock/.test(val)) {
//     int += 1;
//   }
// });
// console.log(int);
// return int;