let name1 = "" ? "Has name" : "No name";
console.log(name1);
//output: No name
//NOTE: Empty string is considered as false in ternary operator.

let name2 = "" || "Default";
console.log(name2);
//output: Default
//NOTE: OR operator returns the first truthy value.

let name3 = 0 || "Default";
console.log(name3);
//output: Default

let name4 = 0 && "Default";
console.log(name4);
//output: 0
//NOTE: AND operator returns the first falsy value.

let name5 = "" ? "Default" : "";
console.log(name5);
//output: ""


let name6 = 0 ? "Default" : "No name";
console.log(name6);
//output: No name

let name7 = "undefined" ? "Default" : "No name";
console.log(name7);
//output: No name

