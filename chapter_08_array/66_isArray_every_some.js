//Checking if it is array or not

// let result = [1, 2, 3, 4, 5];
// console.log(Array.isArray(result));//true

let result = Array.isArray([1, 2, 3]);
console.log(result);//true

let result2 = Array.isArray("hello");
console.log(result2);//false

//Every - checks if every element satisfies the condition
let num = [1, 2, 3, 4, 5];
console.log(num.every(n => n > 0));//true
console.log(num.every(n => n > 1));//false

let num2 = [80, 90, 85].every(n => n < 70);
console.log(num2);//false

//Some - checks if some element satisfies the condition; atleast one element must pass
let num3 = [1, 2, 3, 4, 5].some(n => n > 3);
console.log(num3);//true

let num4 = [1, 2, 3, 4, 5].some(n => n > 10);
console.log(num4);//false
