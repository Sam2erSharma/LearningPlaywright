//7. What is the output ?

const obj = {
    env: "staging",
    getEnv: () => {
        return this.env;//this refers to the global object in non-strict mode and undefined in strict mode
    }
};
console.log(obj.getEnv());


//a) "staging"
// b) undefined
// c) null
// d) TypeError
//Answer: b - undefined - arrow function does not have its own this context

//---------------------------------------------------
//8. What does this return?

function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
console.log([1, 2, 3].map(double).map(addOne));//Here map means it will iterate over the array and apply the function to each element
//[1,2,3].map(double) returns [2,4,6]. [2,4,6].map(addOne) returns [3,5,7]


//a)[2, 4, 6]
// b)[3, 5, 7]
// c)[2, 3, 4]
// d)[4, 6, 8]
//Answer: b - [3, 5, 7] - map is used

//---------------------------------------------------
//9. What is the output ?

function run(fn) {
    return fn("Login");//here fn is a callback function and it is called with the argument "Login"
}
console.log(run(name => `Running: ${name}`));//here name is a parameter and it is assigned the value "Login"


//a) TypeError
// b) "Running: Login"
// c) undefined
// d) "name => Running: name"
//Answer: b - "Running: Login" - callback function is used

//------------------------------------------------------
//10. What is the output ?

function outer() {
    let x = 10;
    function inner() {
        let x = 20;
        return x;//returns 20
    }
    return x + inner();//returns 10 + 20 = 30
}
console.log(outer());


//a) 20 b) 30 c) 40 d) 10
//Answer: b - 30 - closure is used
