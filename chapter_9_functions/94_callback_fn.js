//Callback function: A function that is passed as an argument to another function and is called back at a later time.

function runTest(testName, callback) { //callback is a function passed as an argument
    let result = "pass";
    //assume some code here and then at the end make a callback.
    callback(testName, result);//calling the function passed as an argument
}
function onComplete(name, result) {//this is the callback function
    console.log(`${name} finished with: ${result}`);
}
runTest("Login Test", onComplete);//passing onComplete function as an argument to runTest function
//output
//Login Test finished with: pass