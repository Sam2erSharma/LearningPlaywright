/*Question 1: Can we use .then() with async function?
Answer: Yes, we can use .then() with async function.

async function sayHello() {
    return "Hello, there!";
}

sayHello().then(function (msg) {
    console.log(msg);
});//output: Hello, there!
*/
//--------------------------------------
/*Question 2:
async function getStatus() {
    let status = await Promise.resolve(200);
    console.log("Status code is: " + status);
}

getStatus();// Status code is: 200
*/
//--------------------------------------
/*Question 3:
async function riskyTest() {
    try {
        let data = await Promise.reject("Element not found");
        console.log(data);
    } catch (error) {
        console.log("Test failed: " + error);
    }
}

riskyTest();// Test failed: Element not found
*/
//--------------------------------------
/*Question 4:

console.log("A");

async function test() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}
test();
console.log("D");

//Output: A, B, D, C
*/
//--------------------------------------
/*Question 5:
async function apiTest() {
    try {
        let response = await Promise.resolve({ status: 201, body: "Created" });
        console.log("Status:", response.status);
        console.log("Body:", response.body);
    } catch (err) {
        console.log("Error:", err);
    } finally {
        console.log("Test complete");
    }
}

apiTest();
//Output: Status: 201, Body: Created, Test complete
*/
//--------------------------------------
/*Question 6:
async function runAll() {
    let [a, b, c] = await Promise.all([
        Promise.resolve("Login: OK"),
        Promise.resolve("Cart: OK"),
        Promise.resolve("Checkout: OK")
    ]);

    console.log(a);
    console.log(b);
    console.log(c);
}

runAll();//Login: OK, Cart: OK, Checkout: OK
*/
//--------------------------------------
/*Question 7:
async function healthCheck() {
    let results = await Promise.allSettled([
        Promise.resolve("Auth: UP"),
        Promise.reject("DB: DOWN"),
        Promise.resolve("Cache: UP")
    ]);

    results.forEach(function (r) {
        let status = r.status === "fulfilled" ? "✅" : "❌";
        let msg = r.value || r.reason;
        console.log(status + " " + msg);
    });
}

healthCheck();
Output:
✅ Auth: UP
❌ DB: DOWN
✅ Cache: UP

*/
//--------------------------------------
/*Question 8: Using await in for loop
async function checkEndpoints() {
    let endpoints = ["/login", "/users", "/orders"];

    for (let i = 0; i < endpoints.length; i++) {
        let result = await Promise.resolve(endpoints[i] + " → 200");
        console.log(result);
    }

    console.log("All checks done");
}

checkEndpoints();
Output:
/login → 200
/users → 200
/orders → 200
All checks done
*/
//--------------------------------------
/*Question 9: Using async with IIFE(Immediately Invoked)
(async function () {
    let msg = await Promise.resolve("Quick async test");
    console.log(msg);
})();

console.log("Outside");
Output:
Outside
Quick async test
*/
//--------------------------------------
/*Question 10: async functions can return values
async function add(a, b) {
    return a + b;
}

async function main() {
    let result = await add(10, 20);
    console.log("Sum:", result);

    let result2 = await add(result, 30);
    console.log("Total:", result2);
}

main();
Output:
Sum: 30
Total: 60
*/
//--------------------------------------
