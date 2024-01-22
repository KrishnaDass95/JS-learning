// Pure functions are functions that give you same output given the same input, despite the number of times you call it

function add(a, b){
    return a+b;
}
console.log(add(2,3)); //5 
console.log(add(2,3)); //5


// Impure functions -> given same input and output keeps changing everytime you run, its impure function

let total = 0
function addPrice(price){
    total += price;
    return total;
}

console.log(addPrice(10)); // 10
console.log(addPrice(10)); // 20


// applications - reducers are always pure functions