//Synchronous Callback are those callbacks which are executed immediately.

//Synchronous = runs immediately, line by line, top to bottom.  (eg- UPI/IMPS)
//The program WAITS for it to finish before moving to the next line.

//Every forEach, map, filter you've used — those are sync callbacks.

let testResults = ["pass", "fail", "pass", "skip"];
testResults.forEach(function (result, index) { //anonymous function
    console.log("Test " + index + " -> " + result);
});

