//1. What is the output ?

console.log(greet("Alice"));
function greet(name) {
    return `Hello, ${name}!`;
}
//Options:
// a) ReferenceError
// b) undefined
// c) "Hello, Alice!"
// d) TypeError

//Answer: c - "Hello, Alice!"

//---------------------------------------------------

// 2. What is the output ?

console.log(getStatus(200));
const getStatus = (code) => code >= 200 ? "ok" : "error";

// a) "ok"
// b) "error"
// c) undefined
// d) ReferenceError

//Answer: d - ReferenceError - function expression and arrow function are not hoisted

//---------------------------------------------------
// 3. What is the output ?

function test(...args) {
    return args.length;
}
test("login", "pass", 200, true);


// a) 1
// b) undefined
// c) 4
// d) TypeError
//Answer: c - 4 - rest parameter is used

