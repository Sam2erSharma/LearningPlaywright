//Encapsulation -> Bundling of data members and member functions into a single unit.
//Encapsulation is a mechanism of wrapping data (variables) and the code acting on the data (methods) together as a single unit.
//Encapsulation is also known as data hiding.
//Syntax: class ClassName {
//  private_variable;
//  public_method(){
//    private_variable = value;
//  }
//}

//Encapsulation -> Hide the Internals, Expose the Controls
//Encapsulation -> Private or hidden variables must only be accessed using getter and setter methods.

class Person {
    // Hide private variables
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1
        this.#child2 = ch2;
    }

    getChild1() {//getter //used to access private variable
        return this.#child1;
    }

    setChild1(changed_name) {//setter //used to modify private variable
        this.#child1 = changed_name;
    }


}

let p = new Person("Pramod", "Vrad", "Jenny");

console.log(p.name);
// console.log(p.#child1);
console.log(p.getChild1());
p.setChild1("VIRAD");
console.log(p.getChild1());