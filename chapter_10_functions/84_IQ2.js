//Question 1:
//Returns a value
function getStatus(code) {
    if (code >= 200 && code < 300) return "Success";
    if (code >= 400 && code < 500) return "Error";
    if (code >= 500) return "Server Error";
}
console.log(getStatus(200));//Success
console.log(getStatus(404));//Error
console.log(getStatus(500));//Server Error
//-------------------------------------------------------------------
//Question 2:
//Returns nothing -> undefined
function logTest(name) {
    console.log(`Running ${name}`)
    //no return statement
}
let result = logTest("Login");
console.log(result);
//Output: Running Login
//undefined
//-------------------------------------------------------------------
//Question 3: Is this correct?
console.log(greet("Sameer"));

function greet(name) {
    return (`Hello ${name}`);
}
//Output: Hello Sameer
//-------------------------------------------------------------------
//Question 4: Is this correct?

//Function Expression are not hoisted. Hoisting is only possible in case of normal functions like in Example 3.
//Arrow function is also not hoisted.
//const and let are also not hoisted. Only var is hoisted.

console.log(sayHello("Sameer"));

const sayHello = function (name) {
    return (`Hello ${name}`);
}
//Output: ReferenceError: Cannot access 'sayHello' before initialization