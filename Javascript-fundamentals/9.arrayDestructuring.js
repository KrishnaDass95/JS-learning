// Array Destructuring is unpacking values of an array into variables in a concise way


const person = ["Krishna", "Dass", 28, "HH", "20 crores"]
// long way to extract values
const name = person[0]
const age = person[2]

// easier way to do it as follows
const [fName, lName, mAge, company, salary] = person
console.log(fName, lName, mAge, company, salary)


