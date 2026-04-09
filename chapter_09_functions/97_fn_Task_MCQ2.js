// 4. What does this function return?

function analyze(scores = []) {
    return scores.filter(s => s >= 70).length;//filter returns an array of elements that satisfy the condition //output is length of the array which in this case is 0.
}
analyze();


// a) undefined
// b) 0
// c) null
// d) TypeError

//Answer: b - 0 - default parameter is used

//-----------------------------------------------

// 5. What is the output ?

function makeCounter() {
    let count = 0;
    return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());
// a) 1
// b) 2
// c) 3
// d) 0
//Answer: c - 3 - closure is used

//-----------------------------------------------

//6. Which is a pure function?
// a) function log(msg) { console.log(msg); }
// b) function add(a, b) { return a + b; }
// c) function getTime() { return Date.now(); }
// d) function push(arr, val) { arr.push(val); return arr; }
//Answer: b - pure function is a function that returns the same output for the same input and has no side effects.
