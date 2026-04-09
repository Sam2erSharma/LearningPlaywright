//Inheritance means a child class gets everything from its parent class — all properties and methods ( the attributes and behavior also ) for FREE. 
//The child can then ADD new stuff or CHANGE existing stuff.

//Inheritance -> One class acquires the properties of another class.
//Single Inheritance -> One class acquires the properties of another class.
//Syntax: class Child extends Parent {}

class BasePage {
    constructor(pageName) {
        this.pageName = pageName;
    }

    open() {
        console.log("Opening the page ");
    }
    close() {
        console.log("Closing the page ");
    }

}

class LoginPage extends BasePage {//extends keyword is used to inherit the properties of another class.
}

let page = new LoginPage();
page.open();
page.close();

//LoginPage never defined open() or close() — it got them from BasePage. That's inheritance.