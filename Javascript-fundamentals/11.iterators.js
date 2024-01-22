// iterator functions in JS are higher order function that help you traverse the array

// forEach -> Does not return anything, just goes through the array, the callback function inside takes two arguments
// the value and its index

const numbers = [1, 2, 3, 4, 5, 6]
numbers.forEach((item, index) => {
    console.log(item * 2)
})

// map is like for each but it generally returns a value for eeach entry. It finally returns a new array with new values
const mapOutput = numbers.map((item,index) => {
    return item * index
})

console.log(mapOutput)

// filter is like map, you can filter the values you want in an array and return it in a new array
// why we use filter over map in cases where we want to filter out values is that
// if we filter out values using map, it will return undefined in the array, if we just need only the filtered values use filter

const filterOutput = numbers.filter((item, index) => {
    return index % 2 == 0
})
console.log(filterOutput); // [ 1, 3, 5 ]

// find -> returns