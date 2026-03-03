/*
After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. Print a test report with total tests, counts, pass rate percentage, and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).

input: testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
output: Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. Review before release.
*/
let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
let passed = 0, failed = 0, skipped = 0;

for (let count = 0; count <= testResults.length - 1; count++) {
    if (testResults[count] === "pass")
        passed++;
    else if (testResults[count] === "fail")
        failed++;
    else
        skipped++;
}
console.log("Total Tests : " + testResults.length);
console.log("Passed : " + passed);
console.log("Failed : " + failed);
console.log("Skipped : " + skipped);
let passRate = (passed / testResults.length) * 100;
console.log("Pass Rate : " + passRate.toFixed(2) + "%");
if (passRate === 100) {
    console.log("VERDICT: Ready for release");
} else if (failed <= 2) {
    console.log("VERDICT: Minor failures. Review before release.");
} else {
    console.log("VERDICT: Major failures. Block release");
}
