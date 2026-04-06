/*Question 1
let p = new Promise(function (resolve, reject) {
    resolve(42);
});

p.then(function (value) {
    console.log("Answer:", value);
});
Output: Answer: 42
*/
//-----------------------------------------------------------
/*Question 2
let p = new Promise(function (resolve, reject) {
    reject("Something broke");
});

p.catch(function (err) {
    console.log("Caught:", err);
});
Output: Caught: Something broke
*/
//-----------------------------------------------------------
/*Question 3
let p = Promise.resolve(5);

p.then(function (val) {
    return val * 10;
}).then(function (val) {
    console.log("Result:", val);
});
Output: Result: 50
*/
//-----------------------------------------------------------
/*Question 4
Promise.resolve(1)
    .then(function (val) {
        console.log(val);
        return val + 1;
    })
    .then(function (val) {
        console.log(val);
        return val + 1;
    })
    .then(function (val) {
        console.log(val);
    });
Output: 1
Output: 2
Output: 3
*/
//-----------------------------------------------------------
/*Question 5
Promise.resolve("start")
    .then(function (val) {
        console.log(val);
        throw new Error("Broke at step 2");
    })
    .then(function () { // This will NOT run because the previous step threw an error
        console.log("This will NOT run");
    })
    .catch(function (err) {
        console.log("Caught:", err.message);
    });
Output: start
Output: Caught: Broke at step 2
*/
//-----------------------------------------------------------
/*Question 6
Promise.reject("Test failed")
    .then(function (data) {
        console.log("Data:", data);
    })
    .catch(function (err) {
        console.log("Error:", err);
    })
    .finally(function () {
        console.log("Cleanup done");
    });
Output: Error: Test failed
Output: Cleanup done
*/
//-----------------------------------------------------------
/*Question 7
Promise.resolve("Quick win").then(function (msg) {
    console.log(msg);
});

Promise.reject("Quick loss").catch(function (msg) {
    console.log(msg);
});
Output: Quick win
Output: Quick loss
*/
//-----------------------------------------------------------
/*Question 8
let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Logout: PASS");

Promise.all([t1, t2, t3]).then(function (results) {
    console.log(results);
});
Output: ["Login: PASS", "Search: PASS", "Logout: PASS"]
*/
//------------------------------------------------------------
/*Question 9
let t1 = Promise.resolve("PASS");
let t2 = Promise.reject("FAIL");
let t3 = Promise.resolve("PASS");

Promise.all([t1, t2, t3])
    .then(function (r) { console.log("All:", r); })
    .catch(function (err) { console.log("Stopped:", err); });
Output: Stopped: FAIL
*/
//------------------------------------------------------------
/*Question 10

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + " → " + val);
    });
});
Output: 
fulfilled → API 200
rejected → API 500
fulfilled → API 201
*/