// Basic interface
interface User {
    name: string;
    age?: number;        // Optional
    readonly id: string; // Readonly
}

/* Method
interface Service {
    getData(): Promise<Data>; //Method in interface with Promise return type
}
*/

// Extend
interface Admin extends User {
    role: string;
}

// Implement
//class MyClass implements Interface { }

// Index signature
interface Dict {
    [key: string]: any;
}