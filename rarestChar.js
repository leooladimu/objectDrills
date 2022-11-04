/***********************************************************************
Write a function `rarestChar(string)` that will take a
string as an argument and return the character that appears the
least often. In case of a tie, return any character with the
lowest count. The string will have at least one character.

Examples:

rarestChar("mississippi") // "m"
rarestChar("ananab") // "b"
rarestChar("Cheese") // "C", "h", or "s"
***********************************************************************/

function rarestChar(string) {
    let obj = {};
    for(let i of string) {
        if (!obj[i]) {
            obj[i] = 1;
        } else {
            obj[i] = obj[i] + 1;
        }
    }
    let least = '';
    let arrOfObjs = Object.entries(obj);
    let num = Infinity;
    arrOfObjs.forEach(obz => {
        let val = obz[1];
        let key = obz[0];
        if (val < num) {
            num = val;
            least = key;
        }
    });
    return least;
}
