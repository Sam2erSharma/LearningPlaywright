//Method in Interface
//- Interfaces can also define methods (functions) that an object must implement.
//It not only defines the properties but also the behavior of the object.
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply: (a: number, b: number) => number;  // Alternative syntax; Arrow function can also be used for return type
}

const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b
}

console.log(calc.add(2, 3)); //5
console.log(calc.subtract(5, 2)); //3
console.log(calc.multiply(2, 3)); //6