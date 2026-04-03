const obj = { a: 1, b: 2, c: 3 };

//Object methods
console.log(Object.keys(obj)); //['a', 'b', 'c'] //returns array of all the keys
console.log(Object.values(obj)); //[1, 2, 3] //returns array of all the values
console.log(Object.entries(obj)); //[['a', 1], ['b', 2], ['c', 3]] //returns array of all the key-value pairs
console.log(Object.getOwnPropertyNames(obj)); //['a', 'b', 'c'] //returns array of all the keys
console.log(Object.getOwnPropertySymbols(obj)); //[] //returns array of all the symbols

const user = { name: "John", age: 30 }
//for...in loop
for (const key in user) {
    console.log(`${key} : ${user[key]}`);
}

//for each
Object.keys(user).forEach((key) => {
    console.log(key); //output: name, age
});

Object.entries(user).forEach(([key, value]) => {
    console.log(`${key} : ${value}`); //output: name : John, age : 30
});

