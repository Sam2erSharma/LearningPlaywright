//Exercise 1: Basic Inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes a sound");
    }
}

class Dog extends Animal {
    bark() {
        console.log(this.name + " barks");
    }
}

let d = new Dog("Rex");
d.speak();
d.bark();

//Output:
//Rex makes a sound
//Rex barks

console.log("---------------------------------------");

// Exercise 2: super() Calls Parent Constructor

class Vehicle {
    constructor(type) {
        this.type = type;
        console.log("Vehicle: " + type);
    }
}

class Car extends Vehicle {
    constructor(brand) {
        super("Car");
        this.brand = brand;
        console.log("Brand: " + brand);
    }
}

let c = new Car("Tesla");
//Output:
//Vehicle: Car
//Brand: Tesla

console.log("---------------------------------------");

// Exercise 3: Method Overriding — Complete Replace

class Shape {
    area() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.w = w;
        this.h = h;
    }

    area() {
        return this.w * this.h;
    }
}
let r = new Rectangle(5, 3);
console.log("Area:", r.area());

//Output:
//Area: 15

console.log("---------------------------------------");

//Exercise 4: Method Override with super.method()

class Base {
    greet() {
        return "Hello";
    }
}

class Child extends Base {
    greet() {
        return super.greet() + " World";
    }
}

console.log(new Child().greet());

//Output: Hello World

console.log("---------------------------------------");

// Exercise 5: instanceof Check

class Vehicle1 { }
class Car1 extends Vehicle1 { }
class Tesla extends Car1 { }

let t = new Tesla();
//instanceof checks if the object is an instance of the class
//It returns true if the object is an instance of the class, false otherwise.
console.log(t instanceof Tesla);//t got created from Tesla class
console.log(t instanceof Car1);//tesla inherits from Car1 class
console.log(t instanceof Vehicle1);//tesla inherits from Vehicle1 class
console.log(t instanceof Object);//Object is the parent class of all the classes in JavaScript. So it will return true.

//Output:
//true
//true
//true
//true