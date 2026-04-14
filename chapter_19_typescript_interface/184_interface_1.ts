//Interface in TypeScript
//- An interface defines the SHAPE of an object. Its like a blueprint or structure that must be followed.
//- what properties it must have and what types those ** properties must be.**
//- It's like a contract. If an object says "I follow this interface," it MUST have all the required properties.
//- Interfaces are used to enforce type safety in TypeScript.
//- Interfaces don't generate any JavaScript code.
//- They exist ONLY at compile time for type checking. After compilation, interfaces completely disappear from the output.

/*
interface User {// defines the shape of the object
  name: string;
  age: number;
  email: string;
}

const user: User = {//creating an object that follows the User interface
//type of object is User which is defined by the interface.
  name: "John",
  age: 30,
  email: "john@example.com"
};

const user2: User = { name: "Jane" };// Missing property - Compile time Error; because age and email are missing
*/
//-------------------------------------------------------

// Real QA use: In Playwright TypeScript projects, you define interfaces for API response shapes.
//  If the backend changes a field name from userName to username,
// TypeScript catches every place in your tests that uses the old name — instantly.

//In Playwright, we mostly use interface instead of class because interface is lightweight and doesn't generate any JavaScript code.

interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500
};

console.log("TC-" + test1.id + ": " + test1.name + " → " + test1.status);
//TC-1: Login with valid credentials → PASS

let test2: TestCase = {
    id: 2,
    name: "Login with invalid password",
    status: "FAIL",
    duration: 3200
};
console.log("TC-" + test2.id + ": " + test2.name + " → " + test2.status);
//TC-2: Login with invalid password → FAIL

// let test3: TestCase = {
//     id: 1,
//     name: "Login with valid credentials",
//     status: "PASS",
// };
// console.log("TC-" + test3.id + ": " + test3.name + " → " + test3.status); //Compile time Error; because duration is missing


