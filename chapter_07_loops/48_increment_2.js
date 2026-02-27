let a = 10
let b = ++a;
console.log(a);
console.log(b);
// Exp and result table
/*
line no | expression    | a | b
   1    | let a = 10    | 10| undefined
   2    | let b = ++a   | 11| 11
   3    | console.log(a)| 11| 11
   4    | console.log(b)| 11| 11
*/

let a1 = 10;
console.log(a1++ + a1);
// Exp and result table
/*
line no | expression    | a1 | result
   1    | let a1 = 10   | 10 | undefined
   2    | console.log   | 11 | 21
*/