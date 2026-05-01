function wrapResponse<T>(statusCode: number, data: T): { statusCode: number; data: T } {
    return { statusCode: statusCode, data: data };
}

let userResp = wrapResponse<string>(200, "admin");
console.log(userResp);

let flagResp = wrapResponse<boolean>(200, true);
console.log(flagResp);

let countResp = wrapResponse<number>(200, 42);
console.log(countResp);

//-----------------------

//Function to add two numbers or concatenate two strings
function add<T>(a: T, b: T): T {
    return (a as any) + (b as any); //This tells TypeScript to allow the addition while still keeping the function signature generic.
    //return a+b;//Error-Operator '+' cannot be applied to types 'T' and 'T' because it couldn't guarantee that the generic type T would support addition. For example, if T were a boolean or an object, a + b would fail.
    //as alias is used to tell the compiler to treat the variable as a different type. As any is a supertype of all types, it can be used to cast any type to any other type.
}

let sum = add<number>(10, 20);
console.log(sum);
let concat = add<string>("Sameer", "Sharma");
console.log(concat);
let alpha = add<string>("Sameer", "28");
console.log(alpha);