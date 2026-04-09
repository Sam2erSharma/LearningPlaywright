//Polymorphism -> comes from Greek — "poly" means many, "morph" means forms. One name, many forms.
//In JS, polymorphism is mainly achieved through method overriding.

//Types of Polymorphism:
//Runtime Polymorphism(Method Overriding)
//Compile - Time Polymorphism (Method Overloading) -> NOT Supported in JS


//Method Overriding -> When a child class has the same method as the parent class, it is called method overriding.
//In method overriding, the child class overrides the method of the parent class.

class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APITest extends BaseTest {
    setup() {
        console.log("APITest: open browser");
    }
}

let test = new APITest();
test.setup(); //Since test is the object of APITest class, it will call the setup method of APITest class.
//Output: APITest: open browser