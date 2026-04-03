function runTest(name, status, duration) {
    return `${name}: ${status} in ${duration}ms`;
}

console.log(runTest("Login", "pass", 1000)); //Login: pass in 1000ms
