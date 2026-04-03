//Objects in JS - key value pairs
//In JavaScript, an object is a collection of **key-value pairs** stored in **heap memory**. 
//Variables don't hold the object itself  they hold a **reference** (memory address) to it.
//Objects are collections of key - value pairs.They are fundamental to JavaScript and used everywhere.

let student1 = { name: "Sameer", age: 33 };//2 keys and 2 values
let student2 = { name: "Sahil" };//1 key and 1 value
let student3 = { name: "Vivek", age: 43, phone: 91234567890 };//3 keys and 3 values

//Incase of JSON format, keys and values are always in double quotes whereas in JS objects, keys are not in double quotes.
let JSON_student4 = { "name": "Sameer", "age": 33, "phone": 91234567890 };

let a = { status: "pass" };
console.log(a);//{ status: 'pass' }
console.log(a.status);//pass
console.log(a["status"]); //pass
//Both ways are correct to access the value of a key in an object
//but if the key is a variable then we can only use the second way
//let key = "status";
//console.log(a[key]); //pass

//let a1 = { status Id: "pass" }; //key cannot have space in Object

//Key is case sensitive
let a2 = { status: "pass", Status: "fail" };
console.log(a2["status"]); //pass
console.log(a2["Status"]); //fail

let b = a;//b is a reference to a; it copies reference not object
b.status = "fail";
console.log(a.status);//fail
console.log(b.status);//fail

//**In Objects:**  Whenever you assign one object to another object, it will always copy the reference.

//Two separate objects - different memory location
let c = { status: "pass" };
let d = { status: "pass" }
console.log(c === d);//false //because both are different objects in memory location




