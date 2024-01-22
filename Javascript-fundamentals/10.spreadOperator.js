// Spread operator spreads out the values to another place, it basically just copies the values from one place and place it somewhere else
let a = {name: 'kd', age: 29, company: {first: 'accent', second: 'HH'}};
let b = {...a}
console.log(b)


// array spread
let arr1 = [1, 2, 4, 5, 6]
let arr2 = ['a', 'b']
let res = [...arr1, ...arr2]
console.log(res)
