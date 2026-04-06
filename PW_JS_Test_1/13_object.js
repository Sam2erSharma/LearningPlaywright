//What does `console.log(c === d)` print if `c` and `d` are two separate objects with the same values?
//a) true b) false c) undefined d) error
let c = { status: "pass" };
let d = { status: "pass" }
console.log(c === d);//both are different objects in memory location
//Output: false