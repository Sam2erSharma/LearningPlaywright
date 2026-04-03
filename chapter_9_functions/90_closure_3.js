function makeRetryTracker(max) {
    let attempts = 0;
    //function tryAgain(){
    //     attempts++;
    // }
    //     return tryAgain;
    //Another way to write the function, we can directly return the entire function as shown below-
    return function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} has exceeded the maximum number of retries (${max})`;
        }
        return `Attempt ${attempts}/${max} for ${testName}`;
    };
}

let retry = makeRetryTracker(3);
console.log(retry("Login Test"));
console.log(retry("Login Test"));
console.log(retry("Login Test"));
console.log(retry("Login Test"));
//output
//Attempt 1/3 for Login Test
//Attempt 2/3 for Login Test
//Attempt 3/3 for Login Test
//Login Test has exceeded the maximum number of retries (3)