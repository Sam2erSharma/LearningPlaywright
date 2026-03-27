//Arrow function (ES6) is a concise way to write a function expression.
//ES6 = ECMAScript 6 (latest version of javascript)
//Syntax: const functionName = (parameters) => { function body }

//Arrow function generally used when we have single line of code in function body.

//Example of Function expression
const greet = function (name) {//function expression
    return `Hello ${name}`;
}
console.log(greet("Sameer"));

//Example of Arrow function
const greetArrow = (name) => `Hello ${name}`;//if function has only one statement, we can omit the curly braces and return keyword
console.log(greetArrow("Sameer"));

//Convert function expression to arrow function - remove function and return keywords and add => after parameters, also remove {}.
//Example:
const add = function (a, b) {
    return a + b;
}
console.log(add(1, 2));

//Arrow function
const addArrow = (a, b) => a + b;
console.log(addArrow(1, 2));

const doubleit = (num) => num * 2;
console.log(doubleit(10));

//no parameters are requried
const getEnv = () => "QA";
console.log(getEnv());//QA

//Arrow function with multiple statements
//In case of multi line arrow function, we need to use curly braces and return keyword
const greetMulti = (name) => {
    console.log("Hello " + name);
    return `Hello ${name}`;
}
console.log(greetMulti("Sameer"));

const result = (score) => {
    if (score >= 70) {
        return "pass";
    } else {
        return "fail";
    }
}
console.log(result(85));
