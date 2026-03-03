/*
In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

input: isPresent = true, isDisplayed = true, isEnabled = false
output: Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.
*/
let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

if (isPresent === true && isDisplayed === true && isEnabled === true) {
    console.log("Status: READY");
    console.log("Severity: OK");
    console.log("Action: Element is present, displayed, and enabled. Ready for interaction.");
} else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    console.log("Status: DISABLED");
    console.log("Severity: WARNING");
    console.log("Action: Element is visible but disabled. Wait for enable state or check preconditions.");
} else if (isPresent === true && isDisplayed === false && isEnabled === false) {
    console.log("Status: HIDDEN");
    console.log("Severity: WARNING");
    console.log("Action: Element is present but not displayed. Check CSS (display/visibility) or parent elements.");
} else {
    console.log("Status: NOT FOUND");
    console.log("Severity: CRITICAL");
    console.log("Action: Element is not present. Verify locator or page load.");
}
