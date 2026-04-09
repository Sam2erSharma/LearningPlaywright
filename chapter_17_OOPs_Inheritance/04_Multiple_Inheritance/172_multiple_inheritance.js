//Multiple Inheritance -> A -> C and B -> C
//In JS, multiple inheritance is not directly supported. But we can achieve it using mixins or by using multiple inheritance.
//mixin is a way to add functionality to a class without using inheritance.
//mixin — functions that wrap a class and add behavior.

// class C extends A, B { }  // ❌ SyntaxError

// Mixin concept can help you to perform the multiple inheritance. 

// Mixin 1: Adds logging ability
let LoggerMixin = function (Base) { //Base i.e. TestCase, is the class that is passed to the mixin. 
    return class extends Base {//it is a function that extends the Base class and adds new functionality (print log message in this case).
        log(msg) {
            console.log("[Log] " + msg);
        }
    }
}

// Mixin 2: Adds screenshot ability
let ScreenshotMixin = function (Base) {
    return class extends Base {
        takeScreenshot() {
            console.log("[SCREENSHOT] captured");
        }
    };
};

// Base class
class TestCase {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log("Running: " + this.name);
    }
}

// Apply BOTH mixins
class SmartTest extends ScreenshotMixin(LoggerMixin(TestCase)) {
    constructor(name) {
        super(name);
    }
}

let t = new SmartTest("Login Flow");
t.run();
t.log("Test started");
t.takeScreenshot();
