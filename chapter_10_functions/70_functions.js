//A Function is a reusable block of code that performs a specific task. Instead of repeating the same code again and again, we define it once and call it whenever needed.

//Syntax: function functionName(parameters) {
// code to be executed
//}
//Example: function add(a, b) {
//  return a + b;
//}
//Calling a function: add(1, 2);

let score1 = 85;
let result1 = score1 >= 70 ? "pass" : "fail";
console.log(result1);//pass

let score2 = 60;
let result2 = score2 >= 70 ? "pass" : "fail";
console.log(result2);//fail

//We can write the same code in a function
function checkResult(score) {
    return score >= 70 ? "pass" : "fail";
}
console.log(checkResult(85));//pass
console.log(checkResult(60));//fail
