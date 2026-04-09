//Static variables and methods
//Static variables and methods are not associated with any object. They are associated with the class itself.
//Syntax: static variable_name; or static method_name(){}

// `static` means "belongs to the CLASS, not to individual objects."
// If something is belong to class, it will shared with all the objects.
// Static is something which becomes common to all the objects. If one object changes the value of the static, then other objects will also see the same value.

class TestRunner {
    static totalTests = 0;
    static passCount = 0;

    constructor(name, passed) {
        this.name = name; //non static variables can be accessed using this.variable_name.
        TestRunner.totalTests++; // 1 //to access static variable we use ClassName.variable_name
        if (passed) {
            TestRunner.passCount++;  //1
        }

    }
    non_static_display() {
        return this.name;

    }
    static summary() {
        return TestRunner.passCount + "/" + TestRunner.totalTests + " passed";
    }

}
// Flow of the Amazon Website
new TestRunner("Login", true);
new TestRunner("Signup", false);
new TestRunner("Cart", true);
new TestRunner("Checkout", true);

console.log(TestRunner.summary()); //output: 3/4 passed

// You call static with ClassName.method(), NOT object.method().
