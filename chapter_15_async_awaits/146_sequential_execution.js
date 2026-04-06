//When Step 2 depends on Step 1's result, you must run them sequentially and use await.
//When Step 2 does NOT depend on Step 1's result, you can run them in parallel and use Promise.all().

function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name + ": 200 OK");
        }, 10000);
    });
}

async function runSequential() {
    console.log("Starting Test");
    let start = Date.now();
    let result1 = await apiCall("Login");
    console.log(result1);
    let result2 = await apiCall("Dashboard");
    console.log(result2);
    let result3 = await apiCall("Report");
    console.log(result3);
    console.log("Total time taken: " + (Date.now() - start) + " ms");
}
runSequential();
//Output:
// Starting Test
// Login : 200 OK
// Dashboard : 200 OK
// Report : 200 OK
// Total time taken: 30033 ms
