//Optional and Readonly Properties in Interface
//- Optional properties: Properties that are not required. Marked with a ?
//- Readonly properties: Properties that cannot be changed after creation. Marked with a readonly

interface User {
    name: string;
    age: number;
    email?: string; // Optional property
    readonly id: number; // Readonly property
}

let user: User = {
    name: "John",
    age: 30,
    id: 1
};

console.log(user);
// { name: 'John', age: 30, id: 1 }

user.email = "[EMAIL_ADDRESS]"; // Optional property can be added
console.log(user);
// { name: 'John', age: 30, id: 1, email: [EMAIL_ADDRESS]' }

//user.id = 2; // Readonly property cannot be changed
// Compile time Error: Cannot assign to 'id' because it is a read-only property.

//--------------------------------------------------------

// Interface with optional and readonly for API response
interface APIResponse {
    readonly statusCode: number;
    body: string;
    headers?: object; //Optional
    responseTime?: number;
}

// Readonly - can't modify the readonly
// ? - optional

let response: APIResponse = {
    statusCode: 200,
    body: '{"user": "admin"}',
};

console.log("Status:", response.statusCode); //200
console.log("Body:", response.body); //{"user": "admin"}
console.log("Headers:", response.headers); //undefined

console.log(" ---------------------------")

interface Point {
    readonly x: number;
    readonly y: number;
}
const point: Point = { x: 10, y: 20 };
// point.x = 5; This is not possible. 

// Readonly Array is also possible
interface Data {
    readonly items: readonly number[];
}