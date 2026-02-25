//null- intentional absence of value
//undefined- absence of value or not yet assigned.

let a = null;
console.log(a);
//output: null
console.log(typeof a); //typeof is used to find the type of a variable. 
// It is a unary operator. It returns the type of a variable as a string.
//output: object

//let b = undefined;
let b; //undefined by default
console.log(b);
//output: undefined
console.log(typeof b);
//output: undefined

//Example of typeof operator
console.log(typeof 10);
//output: number
console.log(typeof "Hello");
//output: string
console.log(typeof true);
//output: boolean
console.log(typeof null);
//output: object
console.log(typeof undefined);
//output: undefined
console.log(typeof {});
//output: object
console.log(typeof []);
//output: object
console.log(typeof function () { });
//output: function
console.log(typeof /abc/);
//output: object
console.log(typeof Symbol("description"));
//output: symbol
console.log(typeof 1234567890123456789012345678901234567890n);
//output: bigint