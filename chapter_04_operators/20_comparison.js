//comparison operators
//==, !=, ===, !==, >, <, >=, <=, !
let a = 10, b = 3;
console.log(a > b);
//output: true
console.log(a < b);
//output: false
console.log(a >= b);
//output: true
console.log(a <= b);
//output: false
console.log(a == b);
//output: false
console.log(a != b);
//output: true

console.log(a === b);//strict equality operator ; checks whether the two values are equal and of the same type
//output: false 
console.log(a !== b);//strict inequality operator ; checks whether the two values are not equal or not of the same type
//output: true

console.log(5 == "5");
//output: true
console.log(5 === "5");
//output: false
console.log(5 != "5");
//output: false //why? loose equality operator checks only value not type
console.log(5 !== "5");
//output: true //why? strict inequality operator checks value and type