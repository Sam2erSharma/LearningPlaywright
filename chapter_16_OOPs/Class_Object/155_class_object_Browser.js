class TestCase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display() {//display is the method of the class.
        // Function vs Method -> method is functions but inside the class
        console.log(this.name + " → " + this.status + " → " + this.priority);
    }
}

let loginTest_ref = new TestCase("Login Test", "PASS", "P0");//loginTest is the reference and new TestCase() is the object.
let signupTest_ref = new TestCase("Signup Test", "FAIL", "P1");

loginTest_ref.display();

// Function vs Method
// method is functions but inside the class