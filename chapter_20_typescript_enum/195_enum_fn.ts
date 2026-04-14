enum Severity {
    Low,
    Medium,
    High,
    Critical
}

console.log(Severity.High);//2 (index value)

function needsImmediateAttention(severity: Severity): boolean {
    return severity >= Severity.High;
}

console.log("Low urgent?", needsImmediateAttention(Severity.Low)); //false
console.log("Critical urgent?", needsImmediateAttention(Severity.Critical)); //true
console.log("Severity name:", Severity[2]); //High

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}

console.log(Environment.QA);