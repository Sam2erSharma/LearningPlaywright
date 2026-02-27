let a = 10;
console.log(++a + a++);
console.log(a);
// Exp and result table
/*
line no | expression    | a | result
   1    | let a = 10    | 10| undefined
   2    | console.log   | 12| 22
   3    | console.log(a)| 12| 12
*/

let x = 10;
console.log(++x + ++x);
console.log(x);
// Exp and result table
/*
line no | expression    | x | result
   1    | let x = 10    | 10| undefined
   2    | console.log   | 12| 23
   3    | console.log(x)| 12| 12
*/