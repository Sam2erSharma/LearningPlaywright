//Override keyword
//The override keyword is used to indicate that a method in a child class is overriding a method in its parent class. It is optional but recommended for clarity and type safety.
//override ensures the parent method actually exists and has the same signature. Without it, TypeScript won’t catch typos or signature mismatches.
//If you misspell a method name or change the signature, TypeScript will throw a compile error.

/*- The 'override' keyword explicitly marks that a child method is intentionally overriding a parent method. Without it, overriding is implicit, you use the same name and hope it matches.
- If you misspell the method name, without 'override', TypeScript thinks you're creating a NEW method — no error. With 'override', TypeScript checks the parent actually HAS that method. Typo = compile error.
- Enable "noImplicitOverride": true in tsconfig.json to make override required.
- Real QA use: In large POM hierarchies with 20 + page classes, misspelling 'verifyPageLoaded' as 'verfiyPageLoaded' silently creates a new method — parent's version runs instead. With 'override', TypeScript catches the typo immediately.*/

class Father {
    home(): void {
        console.log("2BHK");
    }
}

class Pramod extends Father {
    home(): void {
        console.log("3BHK");
    }
}

let pramod = new Pramod();
pramod.home();

//----------------------------
class BaseTest {
    setup(): void {
        console.log("[BASE] Open browser");
    }
    teardown(): void {
        console.log("[BASE] Close browser");
    }
}

class LoginTest extends BaseTest {

    override setup(): void {
        console.log("[LoginTest] Open browser");
        console.log("[LoginTest] Maximize");
    }
}

class APITest extends BaseTest {

    override setup(): void {
        console.log("[APITest] No Browser!");
    }
}

let test = new LoginTest();
let apitest = new APITest();
test.setup();
apitest.setup();

