// Data types and Variables

// Number(all float, int, double), String, Boolean, Null(intentional abscence of any value),
// Undefined(abscene of a defined value), Object(collection of key value pair), Array(ordered data, can be in different DT), Symbol(unique identifier)

// variables - a container to hold value where we can manipulate data
// they can be decalred using var, let and const


let num = 1
let name = "krishna"
let job; // undefined
let isMale = false 
let hasMoney = null
let propertyName1 = {
    pName: "Vintage Prime",
    pCost: 500
}
let propertyName2 = {
    pName: "Purva",
    pCost: 300
}
let arr = [1, 2, 3, 4, 5]
let arr2 = [1, 2, 3, "string", null, {
    key: 'HELLO'
}]

const id = Symbol()
console.log(id)
console.log({num, name, isMale, hasMoney, propertyName1, arr2, id, job})