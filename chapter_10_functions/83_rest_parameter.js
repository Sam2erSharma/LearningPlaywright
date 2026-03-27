//Rest parameter is used to pass multiple arguments to a function.
//Syntax: function functionName(...parameters) {
// code to be executed
//}
//Example:
/*function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));*/

//Example 2:
function logResults(testName, ...results) {
    console.log(`Test: ${testName}`);
    console.log(`Results: ${results.join(", ")}`);
}
logResults("Login", "pass", "fail", "pass", "skip");
//Test: Login
//Results: pass, fail, pass, skip

//Example 3:
function add(a, b, c) {
    return a + b + c;
}
let numb = [1, 2, 3];
console.log(add(...numb));//1,2,3 are passed as arguments and output is 6.

//spread response codes into validator
function hasError(...codes) {
    return codes.some(code => code >= 400);
}
let responseCodes = [200, 201, 404, 500, 404, 200, 503];
console.log(hasError(...responseCodes)); //true
