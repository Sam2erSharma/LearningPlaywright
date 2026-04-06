//What is the output of this code ?
//a) undefined
//b) 0
//c) 3
//d) Typeerror
function retry(testName, maxRetries = 3) {//3 is the default value
    console.log(maxRetries);
}
retry("login-test");
//Output: 3