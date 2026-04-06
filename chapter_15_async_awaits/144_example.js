async function getTestResults() {
    return "Pass";
}
//async function always returns a promise
getTestResults().then(function (result) {
    console.log(result);
});

async function runTest() {
    let result1 = await Promise.resolve("Login Test: Pass");
    console.log(result1);
    let result2 = await Promise.resolve("Dashboard Test: Pass");
    console.log(result2);
}
runTest();

//whenever there is a function use async and when there is no function use await