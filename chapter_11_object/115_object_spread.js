const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

//Copying object
const copy = { ...obj1 }; // shallow copy
console.log(copy);//{ a: 1, b: 2 }

//Merging objects
const merge = { ...obj1, ...obj2 };
console.log(merge);//{ a: 1, b: 2, c: 3, d: 4 }

//Adding new properties
const add = { ...obj1, c: 3 };
console.log(add);//{ a: 1, b: 2, c: 3 }

//Updating properties
const update = { ...obj1, a: 3 };
console.log(update);//{ a: 3, b: 2 }
