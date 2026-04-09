function doWork(work, callback) {
    console.log("Starting work");
    let result = work;
    console.log("Doing work on " + result);
    callback(result);
}
function onComplete(done) {
    console.log(done + " Work completed");
}

doWork("Playwright", onComplete);
