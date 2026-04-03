//Asynchronous Callback are those callbacks which are not executed immediately.

//Asynchronous = runs in the background, doesn't wait for it to finish. (eg- neft/rtgs)
//The program continues to the next line without waiting for it to finish.

//Asynchronous = "I'll do this later, you carry on."

//Real - world QA example: When you send an API request, you don't freeze your entire test suite waiting for the response. The request goes out, your code continues, and when the response arrives, THEN the callback runs.
//To simulate async behavior in plain JS, we use `setTimeout(callback, milliseconds)`. 
//Think of it as setting an alarm — "run this function after X milliseconds."

//Example:
console.log("1. Starting the test...");

setTimeout(() => {//setTimeout(callback, delay)
    console.log("2. Loading test data..."); // This runs AFTER the page loads
}, 2000);

console.log("3. Clicking the login button..."); // This runs IMMEDIATELY

//Output:
//1. Starting the test...
//3. Clicking the login button...
//2. Loading test data...
//-----------------------------------------------------------

console.log("Test 1: started");

setTimeout(function () {
    console.log("Test 2: API response received");
}, 2000);

console.log("Test 3: moving to next test");

// Output:

// Test 1: started
// Test 3: moving to next test
// Test 2: API response received     ← appears after 2 seconds

//---------------------------------------------------------

//**Why does Test 3 print before Test 2?**
//Because `setTimeout` is async — it says "run this after 2 seconds" and JavaScript immediately moves to the next line.It does NOT wait.

//This is exactly what happens in real testing:

//- Playwright's `page.goto()`  sends a request (async)
//- API calls with `fetch()`  are async
//- Database queries are async

