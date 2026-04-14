// Interface for test hook functions

interface TestHook {
    (testName: string): void;
}

let beforeEachHook: TestHook = function (testName: string): void { //anonymous function is used which has string as parameter and void as return type
    console.log("[BEFORE] Setting up: " + testName);
}

let afterEachHook: TestHook = function (testName: string): void {
    console.log("[AFTER] Tearing down: " + testName);
};
//before and after hook is used to setup and teardown the test.
//In real world scenario, before hook is used to login to the application and after hook is used to logout from the application.
//before and after prefix are used to denote the hook but it is not mandatory to use before and after prefix.

beforeEachHook("Login Test");

// This is where My Test case will be !!

interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500
};

console.log("TC-" + test1.id + ": " + test1.name + " → " + test1.status);


afterEachHook("Login Test");
//[BEFORE] Setting up: Login Test
//TC-1: Login with valid credentials → PASS
//[AFTER] Tearing down: Login Test