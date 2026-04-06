//Promise is a way to handle asynchronous operations in JavaScript.
//Promise is an object that represents the eventual completion or failure of an asynchronous operation.
//Promise has three states:
//1. Pending - The initial state, neither fulfilled nor rejected.
//2. Fulfilled - The operation completed successfully.
//3. Rejected - The operation failed.

//Promise is a function that takes a callback function as an argument.
//The callback function takes two arguments: resolve and reject.
//resolve and reject are callback functions.

//Promise is enhanced version of callback function with resolve and reject functions. 

//Syntax:
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    // If successful: resolve(value)
    // If failed: reject(error)
});
//------------------------------
// A Promise is JavaScript's way of saying "I'll give you the result later -> either it'll succeed or it'll fail.

//Real - life analogy: You order food on Zomato.The order is a PROMISE.

// - Pending — food is being prepared(not ready yet)
// Fulfilled(Resolved) — food is delivered ✅
// - Rejected — order cancelled ❌

let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Pizza is delivered!");
    } else {
        reject("Order Cancelled!")
    }
})

console.log(order);
// A Promise is an OBJECT. It wraps a value that will be available later.

//new Promise is a constructor that creates a new promise. If we don't use new keyword, it will not create a promise. But without new keyword also we can create a promise and call it with a value

let order1 = Promise.resolve("Pizza is delivered!");
console.log(order1);
