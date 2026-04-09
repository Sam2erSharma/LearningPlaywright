// Constructor is a special method that is called when an object is created. It is used to initialize the object.
//Constructor -> The Setup Function, The `constructor()` runs AUTOMATICALLY when you write `new ClassName()`. It sets up the initial values.
//syntax: constructor(parameters){}

//The this Keyword -> `this` refers to the CURRENT OBJECT — the one calling the method.

//Two types of constructor
//1. Default constructor
//2. Param constructor - commonly used.

//JS only allows one constructor in a class. If we try to create more than one constructor, it will throw an error. It doesn't support constructor overloading.
//constructor is optional. If we don't provide a constructor, JS will provide a default constructor.

class Car {
    // Attribute- Variables in class
    constructor(assigned_name) {
        this.name = assigned_name; //name is the attribute of the class.
    }
    drive() {
        console.log("Driving the car " + this.name);
    }
    printDetailsCar() {
        console.log("Details of  the car " + this.name);
    }

}

let hyndai_car = new Car("i10");//new keyword is used to create an object of the class. new Car() calls the constructor and passes the value "i10" to the constructor.
hyndai_car.drive();