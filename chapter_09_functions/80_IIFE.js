//Immediately invoked function expression (IIFE)
//IIFE is a function that is executed immediately after it is defined. No need to call it explicitly.
//Syntax: (function () {
// code to be executed
//})()
//Example:
(function () {//removed the function name and wrapped the function in parentheses ()() to make it an expression
    console.log("Hello World");
})();//call the function immediately

//IIFE with arguments
(function (name) {
    console.log("Hello " + name);
})("Sameer");

//IIFE with return value
(function (a, b) {
    return a + b;
})(1, 2);

//IIFE with arrow function
(() => {
    console.log("Hello World");
})();
