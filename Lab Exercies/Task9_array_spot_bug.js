// Exercise 2 — Spot the Bug

// What is wrong with this code? Fix it.

let responseTimes = [320, 85, 1200, 450, 99];
// let sorted = responseTimes.sort();
// console.log("Fastest:", sorted[0]);

//Output: 1200
//Why: sort() method sorts the array in ascending order by default, but it compares the elements as strings, not numbers.
//Fix: Use sort((a, b) => a - b) to sort the array in ascending order.
let sorted1 = responseTimes.sort((a, b) => a - b);
console.log("Fastest:", sorted1[0]);//85
