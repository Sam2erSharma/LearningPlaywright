//types of literals

let count = 10;
let negative = -10;
let floating = 10.5;
let h = 0xFF; //hexadecimal
let o = 0o77; //octal
let b = 0b1111; //binary

//double quotes
let str1 = "Hello";
let str2 = "Hi, it's me";
//single quotes
let str3 = 'She said "WHAT"?';
console.log(str3);//output: She said "WHAT"?

//Template literals
//template literals are used to create strings with embedded expressions
//template literals are also used to create multi-line strings
let first_name = `Sameer`;
//let full_name = `Hi, ${first_name} Sharma`;
//console.log(first_name); //output: Sameer Sharma
let last_name = `Sharma`;

let full_name = `${first_name} ${last_name}`;
console.log(full_name); //output: Sameer Sharma
let multi_line = `Hello
World`;
console.log(multi_line); //output: Hello
//World

let math = `2+2 = ${2 + 2}`;
console.log(math); //output: 2+2 = 4

//Store path of file
// single '\' doesn't work. It gets removed from the output. We need to use double '\' or use template literals
//Example 1:
let path = `C:\\Users\\Sameer\\Documents\\file.txt`;
console.log(path);
//output: C:\Users\Sameer\Documents\file.txt

//Example 2:
let path1 = `C:/Users/Sameer/Documents/file.txt`;
console.log(path1);
//output: C:/Users/Sameer/Documents/file.txt

//Store URL
let url = "https://www.google.com/login";
console.log(url);
//output: https://www.google.com/login

//NOTE: // is used for Urls and \\ is used for paths.

//1. String literals
//2. Number literals
//3. Boolean literals
//4. Object literals
//5. Array literals
//6. Function literals
//7. Regular expression literals
//8. Null literal
//9. Undefined literal
//10. Symbol literal
//11. BigInt literal

//1. String literals
let str = "Hello";
console.log(str);
//output: Hello
//Edge case: 
let empty_string = "";
console.log(empty_string);
//output: 
let space_string = " ";
console.log(space_string);
//output:  
let tab_string = "\t";
console.log(tab_string);
//output: 	
let newline_string = "\n";
console.log(newline_string);
//output: 

//2. Number literals
let num = 10;
console.log(num);
//output: 10

//3. Boolean literals
let bool = true;
console.log(bool);
//output: true

//4. Object literals
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(obj);
//output: { name: 'John', age: 30, city: 'New York' }

//5. Array literals
let arr = [1, 2, 3, 4, 5];
console.log(arr);
//output: [ 1, 2, 3, 4, 5 ]

//6. Function literals
let func = function () {
    console.log("Hello");
};
console.log(func);
//output: [Function: func]

//7. Regular expression literals
let regex = /abc/;
console.log(regex);
//output: /abc/

//8. Null literal
let nullVal = null;
console.log(nullVal);
//output: null

//9. Undefined literal
let undefinedVal = undefined;
console.log(undefinedVal);
//output: undefined

//10. Symbol literal
let sym = Symbol("description");
console.log(sym);
//output: Symbol(description)

//11. BigInt literal
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
//output: 1234567890123456789012345678901234567890n