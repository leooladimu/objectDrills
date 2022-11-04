/*******************************************************************************

You work at a grocery store, and items over $10 are getting a 20% discount.
Write a function that takes in an array of grocery items and returns an array
of grocery items that qualify for the sale. Include their new sale price.

Example:

groceryItems = [
            {name: "eggs", price: 6},
            {name: "bread", price: 5},
            {name: "milk", price: 4},
            {name: "walnuts", price: 15}
            ];
console.log(applySale(groceryItems)); // [ {name: "walnuts", price: 12} ]

*******************************************************************************/

const applySale = (items) => {
    let arr = [];
    items.forEach(obj => {
        if (obj.price > 10) {
            arr.push(obj);
        }
    });
    return arr;
}

groceryItems = [
    {name: "eggs", price: 6},
    {name: "bread", price: 5},
    {name: "milk", price: 4},
    {name: "walnuts", price: 15}
    ];
console.log(applySale(groceryItems)); // [ {name: "walnuts", price: 12} ]
