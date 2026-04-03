//Higher Order function: A function that returns another function or takes a function as an argument.

function runWithLogging(testfn, testName) {//testfn is a function passed as an argument
    console.log(`Starting ${testName}`);
    let result = testfn();//calling the function passed as an argument
    console.log(`Finished ${testName} -> ${result}`);
    return result;
}
function loginTest() {
    return "Login Test Passed";
}
runWithLogging(loginTest, "Login Test");//passing loginTest function as an argument to runWithLogging function

//------------------------------------------------------------------------------

function makeMultiplier(factor) {
    return function (number) {
        return number * factor;
    }
}

let double = makeMultiplier(2);
console.log(double(5)); //10

let triple = makeMultiplier(3);
console.log(triple(5)); //15*/