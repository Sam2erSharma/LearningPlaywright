//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution.
//function declarations are hoisted but function expressions and arrow functions are not.

//Example:
console.log(add(1, 2));

function add(a, b) {
    return a + b;
}