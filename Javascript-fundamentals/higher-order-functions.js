// higher order function - Used in functional programming, its a simple function that can take other functions as arguments

function higherOrderFunction(func){
    console.log("calling og function");

    func();

    console.log("ending og function")
}

function myFunc(){
    console.log("invoking function inside function");
}

higherOrderFunction(myFunc);    