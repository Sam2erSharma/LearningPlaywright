//interface extends interface and class implements interface

interface Executable {
    name: string;
    run(): void;
    getStatus(): string;
    //interface always have incomplete functions, we can either complete them in object or in class
}

class TestCase implements Executable { //class implements interface means class must have all the properties and methods of the interface
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): void {
        console.log("[RUN] " + this.name);
    }
    getStatus(): string {
        return "PASS";
    }
}

let tc: Executable = new TestCase("Verify login redirect");
tc.run();
console.log("Call:", tc.getStatus());