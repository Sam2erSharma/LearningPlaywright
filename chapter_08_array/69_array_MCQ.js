//What does ["pass", "fail", "skip"].indexOf("skip") return?
//a) 1
//b) 2
//c) 3
//d) -1
//Answer: b

//--------------------------------------------------------------------------------------

//Which method returns a new array without mutating the original?
//a) push()
//b) splice()
//c) filter()
//d) sort()
//Answer: c

//--------------------------------------------------------------------------------------

//What is the output?
let arr = [1, 2, 3];
let copy = arr; // deepcopy
copy.push(4);
console.log(arr.length);

// a) 3
// b) 4
// c) undefined
// d) Error
//Answer: b `copy` is a reference, not a new array. Both point to the same array

//--------------------------------------------------------------------------------------

//You have`let codes = [200, 404, 500, 201]`.Which correctly checks if ANY request failed(status >= 400) ?

// a)`codes.every(c => c >= 400)`
// b)`codes.includes(c => c >= 400)`
// c)`codes.some(c => c >= 400)`
// d)`codes.find(c => c >= 400) === true`
//Answer: c

//--------------------------------------------------------------------------------------

//What does `[10, 1, 21, 2].sort()` return?

// a)`[1, 2, 10, 21]`
// b)`[1, 10, 2, 21]`
// c)`[21, 10, 2, 1]`
// d)`[10, 1, 21, 2]`
//Answer: b -default sort compares as strings, not numbers.

//--------------------------------------------------------------------------------------

//What is the output ?
// let tests = ["login", "search", "checkout"];
// console.log(tests.at(-1));
// a)`undefined`
// b)`"login"`
// c)`"checkout"`
// d)`-1`
//Answer: c

//--------------------------------------------------------------------------------------

//Which method would you use to turn `["2024", "03", "07"]` into`"2024-03-07"` ?
// a)`concat()`
// b)`join("-")`
// c)`toString()`
// d)`flat()`
//Answer: b

//--------------------------------------------------------------------------------------

//What does `Array.isArray({length: 3, 0: "a"})` return?
// a)`true`
// b)`false`
// c)`undefined`
// d) Error
//Answer: b - it's an array-like object, not an actual array.

//--------------------------------------------------------------------------------------

//What is the output ? (++D)
let results = ["pass", "fail", "pass"];
let counts = results.reduce((acc, r) => {
    acc[r] = (acc[r] || 0) + 1; //string + number = string
    //string||0 = string
    return acc;
}, {});
console.log(counts.pass);
// a) 1
// b) 2
// c) 3
// d) undefined
//Answer: b

