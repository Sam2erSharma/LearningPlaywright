//Promise chaining - when we have multiple promises, we can chain them together using .then() method.
//Promise chaining is used to handle multiple asynchronous operations in a sequential manner.

function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser opened!");
    }); //promise can be returned from a function
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}

openBrowser()
    .then(function (msg) {
        console.log("Step 1 : ", msg);
        return goToLogin();
    }).then(function (msg) {
        console.log("Step 2 : ", msg);
        return enterCredentials();
    }).then(function (msg) {
        console.log("Step 3 : ", msg);
        return clickLogin();
    }).then(function (msg) {
        console.log("Step 4 : ", msg);
    }).catch(function (error) {
        console.log("Error : ", error);
    }).finally(function () {
        console.log("Test completed");
    });

//Compare this to the callback hell version -> completely FLAT, easy to read, ONE `.catch()` handles all errors.

//Difference between callback hell and promise chain:
//callback hell - synchronous
//promise chain - asynchronous

//      Feature           |           Callback Hell         |      Promise Chain
//Syntax/Shape            | Pyramid(Nested right)           | Linear/Flat(one level)
//Error Handling          | Messy (try/catch inside each);  | Clean (single .catch() at the end)
//                        | Handle at every level
//Readability             | Poor; Horrible after 3 levels   | Excellent; Clean and sequential
//Return Value            | Difficult to pass;              | Easy to pass; .then() passes values forward
//                        | can't pass between levels or    |
//                        | to next callback                |
//Cleanup/Maintainability | Difficult-Manual everywhere     | Easy-Single place; .finally() handles cleanup and runs once