function greetTester(name, callback) {
    console.log("Welcome " + name);
    callback();
}

greetTester("Dev", function () {
    console.log("Let's start the test");
});
//Output:
//Welcome Dev
//Let's start the test

//---------------------

//callback with parameter
function runTest(testName, callback) {
    let status = "pass";
    callback(testName, status);
}

runTest("Login Test", function (name, result) {
    console.log(name + " -> " + result);
});
//Output:
//Login Test -> pass
//-----------------------

//Sync callback - forEach
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach(function (bug, i) {
    console.log("Bug #" + (i + 1) + ": " + bug);
});
console.log("Total Bugs: " + bugs.length);
//Output:
//Bug #1: UI glitch
//Bug #2: API timeout
//Bug #3: Wrong redirect
//Total Bugs: 3
