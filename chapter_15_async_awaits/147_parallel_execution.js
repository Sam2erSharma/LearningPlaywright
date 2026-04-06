
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
    let [r1, r2, r3] = await Promise.all([
        apiCall("login"),
        apiCall("dashboard"),
        apiCall("report")
    ])
    console.log(r1);
    console.log(r2);
    console.log(r3);
    console.log("Total time taken: " + (Date.now() - start) + " ms");
}
runSequential();
//Output:
// Starting Test
// Login: 200 OK
// Dashboard: 200 OK
// Report: 200 OK
// Total time taken: 10020 ms

//--------------------------

//When to use sequential vs parallel?
//                  Use Sequential when:           |         Use Parallel when:
// When Step 2 depends on Step 1's result          | Steps are independent
//Login-> then fetch data from API                 | Health check 5 APIs
//Create user -> then verify or fetch user details | Validate 3 form fields
//Order matters                                    | Order doesn't matter
//await one by one                                 | await Promise.all()


