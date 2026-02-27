let a = 10;
let b = a--;
console.log(b);
console.log(a);
// Exp and result table
/*
line no | expression    | a | b
   1    | let a = 10    | 10| undefined
   2    | let b = a--   | 9 | 10
   3    | console.log(b)| 9 | 10
   4    | console.log(a)| 9 | 9
*/
