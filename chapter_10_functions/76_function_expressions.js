//Function Expression is a way to define a function as a value and assign it to a variable.
//syntax: const functionName = function (parameters) {
// code to be executed
//}
//Example:
let add = function (a, b) {
    return a + b;
}

//Call a function
console.log(add(1, 2));

//Example 2:
const greet = function (name) {//function expression
    return `Hello ${name}`;
}

//Call a function
console.log(greet("Sameer"));