//- An abstract class CANNOT be instantiated directly. You cannot write `new AbstractClass()`.
//- It exists ONLY to be extended by child classes.
//- Abstract methods have NO body — just the signature.Every child class MUST provide its own implementation.If a child forgets, TypeScript throws a compile error.

//Two types of classes:
//1. Incomplete/Abstract class: consists of some complete and incomplete methods
//2. Complete/Normal/Concrete class: consists of only complete methods

abstract class BaseTest {//abstract class
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }

    abstract setup(): void;//incomplete method
    abstract execute(): void;//incomplete method
    abstract teardown(): void;//incomplete method
}

class UITest extends BaseTest {//any class that extends abstract class must complete all the abstract methods
    setup(): void {//completing abstract method
        console.log("  Setup: launch browser");
    }
    execute(): void {//completing abstract method
        console.log("  Execute: click buttons, fill forms");
    }
    teardown(): void {//completing abstract method
        console.log("  Teardown: close browser");
    }
}

let test = new UITest("Login Test");
test.setup();
test.execute();
test.teardown();
