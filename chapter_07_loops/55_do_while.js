//Do while loop will execute at least once. Even if the condition is false.
//condition will be checked after each run.
let retry = 0;
do {
    console.log("Retry attempt: " + retry);
    retry++;
} while (retry <= 3);