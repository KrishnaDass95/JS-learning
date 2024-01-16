// Objects are a DS with key value pair and each key is unique

let person = {
    name: 'Krishna',
    age: 200,
    career: 'QA Engineer',
    greet: function (){
        return "HELLO"
    }
}

console.log(`${person.greet()} my name is ${person.name} and my age is ${person.age}`)
// HELLO my name is Krishna and my age is 200
