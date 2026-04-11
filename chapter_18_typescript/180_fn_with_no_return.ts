// Incase there is nothing to return from a function, use void
// It is optional to use void but good to use
function sayHello(msg: string): void {
    console.log(msg);
}

// Function annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// never - function never returns (throws or infinite loop)
// It is used when a function will never return anything
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) { }
}