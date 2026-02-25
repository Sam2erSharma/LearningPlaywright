//nullish coalescing operator //useful when we have to provide default value to a variable and also in data handling
//??
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