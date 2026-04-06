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

//openBrowser()
//     .then(function (msg) {
//         console.log("Step 1 : ", msg);
//         return goToLogin();
//     }).then(function (msg) {
//         console.log("Step 2 : ", msg);
//         return enterCredentials();
//     }).then(function (msg) {
//         console.log("Step 3 : ", msg);
//         return clickLogin();
//     }).then(function (msg) {
//         console.log("Step 4 : ", msg);
//     }).catch(function (error) {
//         console.log("Error : ", error);
//     }).finally(function () {
//         console.log("Test completed");
//     });

//Async/Await conversion

async function runLoginFlow() {
    let msg = await openBrowser();
    console.log("Step 1 : ", msg);
    msg = await goToLogin();
    console.log("Step 2 : ", msg);
    msg = await enterCredentials();
    console.log("Step 3 : ", msg);
    msg = await clickLogin();
    console.log("Step 4 : ", msg);
}

runLoginFlow();
//Output:
// Step 1 :  Browser opened!
// Step 2 :  Login page loaded
// Step 3 :  Credentials entered
// Step 4 :  Logged in successfully

//Same output is generated as earlier
//But the code is much cleaner and easier to read
//No need to return the promise from each function
//No need to chain the promises
//No need to use .then() method
//No need to use .catch() method
//No need to use .finally() method