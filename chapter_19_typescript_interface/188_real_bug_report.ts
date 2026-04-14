interface BugReport {
    id: number;
    title: string;
    severity: string;
    stepsToReproduce: string[];//array of strings
}


function logBug(bug: BugReport): void {//we are passing BugReport as an argument to the function
    console.log("BUG- Report -> " + bug.id + " [" + bug.severity + "] " + bug.title);
    bug.stepsToReproduce.forEach(function (step: string, i: number) {//iterating over the array of strings
        console.log("  " + (i + 1) + ". " + step);
    })
}

logBug({
    id: 1,
    title: "VWO login is not working. ",
    severity: "High",
    "stepsToReproduce": ["Step 1 : open the app.vwo.com", "Step2 :  enter invalid credes", "step 3 : verify the error message"]
});

logBug({
    id: 2,
    title: "VWO login is not working with arabic lang ",
    severity: "High",
    "stepsToReproduce": ["Ste1 : open the app.vwo.com", "Step2 :  enter invalid credes", "step3 : verify the error message"]
});

//BUG- Report -> 1 [High] VWO login is not working.
//   1. Step 1 : open the app.vwo.com
//   2. Step 2 :  enter invalid credes
//   3. Step 3 : verify the error message
// BUG- Report -> 2 [High] VWO login is not working with arabic lang
//   1. Step 1 : open the app.vwo.com
//   2. Step 2 :  enter invalid credes
//   3. Step 3 : verify the error message