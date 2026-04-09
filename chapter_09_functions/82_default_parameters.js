//Default parameters are used to set a default value for a parameter in a function.
//If the argument is not provided, the default value will be used.
//Example:
/*function greet(name = "Sameer") {
    return `Hello ${name}`;
}
console.log(greet());*/

function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} upto ${maxRetries} times with ${delay}ms delay`);
}
retry("Login"); //Retrying Login upto 3 times with 1000ms delay
retry("API Test", 4);//here 4 will be used instead of default value 3.
//Retrying API Test upto 4 times with 1000ms delay

retry("Checkout", 5, 2000); //Retrying Checkout upto 5 times with 2000ms delay
