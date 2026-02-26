//nullish coalescing operator //useful when we have to provide default value to a variable and also in data handling

/* ?? is called the Nullish Coalescing Operator, introduced in ES2020.

It returns the right-hand side value only when the left-hand side is null or undefined — nothing else.

javascript

let value = null ?? "default";
console.log(value); // "default"

let value2 = undefined ?? "fallback";
console.log(value2); // "fallback"

let value3 = 0 ?? "fallback";
console.log(value3); // 0  ← important!

let value4 = "" ?? "fallback";
console.log(value4); // ""  ← important!

How it differs from || (OR operator):

|| treats all falsy values (0, "", false, null, undefined, NaN) as "empty" and returns the right side. But ?? only cares about null and undefined.

javascript

// OR operator
let a = 0 || "default";    // "default" (0 is falsy)

// Nullish Coalescing
let b = 0 ?? "default";    // 0 (0 is NOT null/undefined)*/

let a = null, b = 10;
console.log(a ?? b);
//output: 10

//Example
let user = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    }
};
console.log(user.address.city);
//output: New York
console.log(user.address.zip);
//output: 10001
console.log(user.address.state);
//output: undefined
console.log(user.address.state ?? "Unknown");
//output: Unknown