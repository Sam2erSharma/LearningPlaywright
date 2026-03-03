/*
As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level.

Classification Matrix:
- always + blocker → P0 | always + major → P1 | always + minor → P2
- often + blocker → P1 | often + major → P2 | often + minor → P3
- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

input= frequency = "always", impact = "blocker"
output= Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: blocker Severity: P0 - Critical: Stop release immediately
*/
let frequency = "always";
let impact = "blocker";

if (frequency === "always") {
    if (impact === "blocker") {
        console.log("Severity: P0 - Critical: Stop release immediately");
    } else if (impact === "major") {
        console.log("Severity: P1 - High: Review before release");
    } else {
        console.log("Severity: P2 - Medium: Fix in next sprint");
    }
} else if (frequency === "often") {
    if (impact === "blocker") {
        console.log("Severity: P1 - High: Review before release");
    } else if (impact === "major") {
        console.log("Severity: P2 - Medium: Fix in next sprint");
    } else {
        console.log("Severity: P3 - Low: Fix if time permits");
    }
} else {
    if (impact === "blocker") {
        console.log("Severity: P2 - Medium: Fix in next sprint");
    } else if (impact === "major") {
        console.log("Severity: P3 - Low: Fix if time permits");
    } else {
        console.log("Severity: P4 - Trivial: Fix if time permits");
    }
}


