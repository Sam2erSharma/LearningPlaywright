//Error handling - Try/Catch
//try/catch is used to handle errors in async/await
//if any error occurs in the try block, the catch block will be executed

// With Promises you use .catch().
//  With async/await you use try/catch — exactly like regular JavaScript error handling.

async function testAPI() {
    try {
        let result = await Promise.reject("503 Service Unavailable");
        console.log('Result', result);// this line will not execute because of the error. Incase of resolve, this line will execute
    } catch (error) {
        console.log('Error', error);// this line will execute because of the error
    } finally {
        console.log("Clean up!!")
    }
}

testAPI();
//output:
// Error 503 Service Unavailable
// Clean up!!

// try/catch/finally maps directly to .then()/.catch()/.finally() — same logic, cleaner syntax.
