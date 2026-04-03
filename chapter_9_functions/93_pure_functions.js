//Pure function: A function that returns the same output for the same input and has no side effects.
//Example 1: no side effects, predictable output
function add(a, b) {
    return a + b;
}
console.log(add(1, 2)); //3
console.log(add(1, 2)); //3
console.log(add(1, 2)); //3

//example 2:
function calculatPassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2) + "%";
}
console.log(calculatPassRate(10, 5)); //50
console.log(calculatPassRate(10, 5)); //50
console.log(calculatPassRate(10, 5)); //50

//Impure function: A function that returns different output for the same input or has side effects.

function isPassing(score) {
    return score >= threshold;
}
let threshold = 50;
console.log(isPassing(threshold)); //true
threshold = 70;
console.log(isPassing(threshold)); //true
//output is true for both cases, but it is still impure function because it depends on external variable threshold.


let x = 10;//external variable
function addX(a) {
    return a + x;//side effect because it depends on external variable x.
}
console.log(addX(1)); //11
console.log(addX(1)); //11
console.log(addX(1)); //11 //output will be same if x is not changed, but it is still impure function because it depends on external variable x.