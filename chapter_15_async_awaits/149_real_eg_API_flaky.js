// Flaky Test ->  100 TC, 3 Failed, I want to rerun them 3, these are flaky, it sometimes pass, failed...
//3  I want to re run

// Retry Pattern with Async/Await - REAL QA
let attempt = 0;

function flakyAPI() {
    attempt++;
    if (attempt < 3) {
        return Promise.reject("Attempt " + attempt + ": failed");
    }
    return Promise.resolve("Attempt " + attempt + ": success!");
}



async function retryTesting(maxRetries) {
    for (let i = 1; i <= maxRetries; i++) {
        try {
            let result = await flakyAPI();
            console.log('Pass Promise!, I will exit also', result);
            break; //breaks loop. If we use return here, it will also exit the function.
        }
        catch (error) {
            console.log('Fail Promise!', error);
        }
    }

}

retryTesting(5);
//Output:
//Fail Promise! Attempt 1: failed
//Fail Promise! Attempt 2: failed
//Pass Promise!, I will exit also Attempt 3: success!