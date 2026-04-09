//Closure: A function bundled with its lexical environment (scope)
//A closure is when a function **remembers** variables from its outer scope even after the outer function has finished executing.

//Example:
function outer() {
    let name = "Sameer";
    console.log("Outer function executed");
    function inner() {
        console.log(name);//can access outer scope
    }
    return inner;
}
outer(); //this returns inner function
//function is then assigned to a variable closure which is then called as a function (inner).
//inner() - cannot call inner function directly.
let closure = outer(); //created a closure
closure(); //called the inner function

// The Core Idea- A Closure is when an inner function has access to the outer function's variables even after the outer function has returned or finished working.
