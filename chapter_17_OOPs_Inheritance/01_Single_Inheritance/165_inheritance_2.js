class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); //super() is used to call the parent constructor, variables and methods.
        //super() must be called before using this keyword. Without super() it will throw an error.
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " is barking")
    }


}

let dog = new Dog("Diddo", "Labrador");
dog.eat(); //Diddo is eating
dog.sleep(); //Diddo is sleeping
dog.bark(); //Diddo is barking
console.log(dog.breed); //Labrador

//-------------------
/* Key Rules:
- `extends`  → makes a child class
- `super()`  → calls the parent's constructor (MUST be first line in child constructor)
- Child gets ALL parent methods automatically
*/
