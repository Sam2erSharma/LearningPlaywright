//Objects can store functions as values

const calculator = {
    value: 0,
    add(n) {
        this.value += n;//this keyword refers to the object itself
        return this;//returns the object itself; return its own value.
    },
    sub(n) {
        this.value -= n;
        return this;
    }
};

console.log(calculator.add(10).sub(5));
//{ value: 5, add: [Function: add], sub: [Function: sub] }

//Chaining - calling multiple methods on the same object
//We can chain methods if the method returns the object itself

//we can use this keyword:
//1. In object methods
//2. In constructor functions
//3. In arrow functions
//4. In global scope

//--------------------------------------------------------
const user = {
    name: "Sameer",
    saymyName(lastName) {
        this.name += lastName;
        return this.name; //returns the value of name
        // return this; //returns the object itself
    }
}

console.log(user.saymyName("Sharma"));//output: SameerSharma
//console.log(user); //output: { name: 'SameerSharma', saymyName: [Function: saymyName] }