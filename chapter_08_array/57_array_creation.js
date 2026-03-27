//Arrays are used to store multiple values in a single variable.
//In Javascript, arrays are dynamic and can store values of different data types.
//Everything in JS is an object, including arrays.
//Syntax: let arrayName = [value1, value2, value3, ...];
//Example: let fruits = ["apple", "banana", "cherry"];
let fruits = [];//empty array
let fresh_fruits = ["apple", "banana", "cherry"];
//index - 0,1,2.
console.log(fresh_fruits.length);//3
console.log(fresh_fruits[0]);//apple
console.log(fresh_fruits[1]);//banana
console.log(fresh_fruits[2]);//cherry
console.log(fresh_fruits[3]);//undefined

let mixed = [1, "apple", true, null, undefined, 3.14];//In java this is not allowed.

//Creating array
//Array literal (preferred method)
let browsers = ["chrome", "firefox", "edge", "safari"];
console.log(browsers);

//Array constructor
let scores = new Array(3);//creates an array of size 3 with empty slots
console.log(scores);//[ <3 empty items> ]
let scores1 = new Array(10, 20, 30);//creates an array with values 10, 20, 30
console.log(scores1);//[ 10, 20, 30 ]
let scores2 = new Array(10, 20, 30, 40, 50);//creates an array with values 10, 20, 30, 40, 50
console.log(scores2);//[ 10, 20, 30, 40, 50 ]

//Array.of()
let test = Array.of("apple", "banana", "cherry");
console.log(test);//[ 'apple', 'banana', 'cherry' ]

//Array.from()
let test1 = Array.from("apple");
console.log(test1);//[ 'a', 'p', 'p', 'l', 'e' ]


