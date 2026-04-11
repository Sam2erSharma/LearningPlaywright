//Primitve types
let name: string = "Sameer";
let age: number = 25;
// let pi: float = 3.14; // Not valid in TypeScript
let pi: number = 3.14;
let isActive: boolean = true;
let nothing: null = null;
let undefinedVar: undefined = undefined;
let bigNumber: bigint = 12345678901234567890n;
let symbol: symbol = Symbol("Sameer");

//Array
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["John", "Jane"];
let hobbies: string[] = ["Reading", "Coding", "Traveling"];

//Object
let address: { city: string, zip: number } = { city: "Delhi", zip: 110001 };

// Any (avoid when possible)
let anything: any = "hello";

// Unknown (safer than any)
let unknown: unknown = "hello";

// Tuple
let person: [string, number] = ["John", 25];

// Enum
enum Color { Red, Green, Blue };
let myColor: Color = Color.Red;

// console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(hobbies);
// console.log(address);