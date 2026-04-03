//Strings are sequence of characters.
//JavaScript provides many methods for string manipulation.
//A string is a sequence of characters used to represent text.
//In testing, strings are everywhere -> URLs, selectors, assertions, response messages, log parsing.

//Single quotes
let a = 'hello';

//double quotes
let b = "hello";

//Template Literals (backticks) - allows expressions & multi-line strings
let name1 = "John";
let message = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(message);//Hello, John! 2 + 2 = 4

//Mutli line string
let report = `
    Test Report
    Status: Pass
    Environment: Staging
`;
console.log(report);

//string () constructor (converts other types to strings)
let num = 123;
let str = String(num);
console.log(str);//"123"

console.log(String(200));//"200"
console.log(String(true));//"true"
console.log(String(null));//"null"
console.log(String(undefined));//"undefined"
console.log(String([1, 2, 3]));//"1,2,3"
console.log(String({ name: "John" }));//"[object Object]"
