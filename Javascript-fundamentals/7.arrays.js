// contiguous data structure
// defining an array
let arr = [1, 2, 3, 4, 5, {
    nameBro : 'KrishnaDass',
    age: 11
}, null, undefined,]



// common array utility methods and operations in JS
let fruits = ["apple", "banana", "oranges"]
console.log(fruits.push("kiwi"), fruits) // 4 [ 'apple', 'banana', 'oranges', 'kiwi' ] -> Returns length
console.log(fruits.pop(), fruits) // kiwi [ 'apple', 'banana', 'oranges' ] -> Returns the popped element value
console.log(fruits.slice(0, 1), fruits); // [ 'apple' ] [ 'apple', 'banana', 'oranges' ] -> does not slice the original array
console.log(fruits.shift(), fruits);  // apple [ 'banana', 'oranges' ] -> pops the first entry from the list
console.log(fruits.unshift("watermelon", "papaya"), fruits); // 4 [ 'watermelon', 'papaya', 'banana', 'oranges' ] - Pushes elements in the beginning of the array
console.log(fruits.splice(0,1), fruits) // [ 'watermelon' ] [ 'papaya', 'banana', 'oranges' ] -> It removes the element from the array directly
// can also use splice to remove and replace at a particular index
console.log(fruits.splice(2,1, "grapes"), fruits) //[ 'oranges' ] [ 'papaya', 'banana', 'grapes' ]