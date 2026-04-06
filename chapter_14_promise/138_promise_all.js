//Promise.all() - used to handle multiple promises in parallel/ run multiple promises together.
//Promise.all() takes an array of promises as an argument.

let checkAuth = Promise.resolve("Auth Ok"); //
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All checks:", results);
})//output: All checks: [ 'Auth Ok', 'DB OK', 'Cache OK' ]

//------------------------------
//Promise.all() returns a promise that resolves when all the promises in the array have resolved.
//Promise.all() returns a promise that rejects when any of the promises in the array have rejected.

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
])
    .then(function (r) { console.log(r); })
    .catch(function (err) { console.log("Failed:", err); });