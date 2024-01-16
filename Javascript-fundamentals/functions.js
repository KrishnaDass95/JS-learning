// functions are used to do a specific task, its for repetitive task, its a reusbale piece of code
// can be written in two ways

function sum1(num1, num2){ // num1, num2 is a parameter
    return num1 + num2 // return is statment for returning a value from a function  
}

const sum2 = (num1, num2) => { // assigning a 
    return num1 + num2;
}

console.log(sum1(100,200));

console.log(sum2(22,33))