let a = 5;
let b = a++ + ++a; //5 + 7 = 12
let c = a++ + ++a + ++a + ++a + a++; //7 + 9 + 10 + 11 + 11= 48
console.log("The value of b is " + b) //12
console.log("The value of a is " + a) //12
console.log("The value of c is " + c) //48
