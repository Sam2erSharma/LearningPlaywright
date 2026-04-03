//Primitive vs Reference

//Primitive data types - call by value
//Primitive types - string, number, boolean, null, undefined, symbol, bigint

//Primitive types are immutable - they cannot be changed
let a = 10;
let b = a;
b = 99;
console.log(a);//10
console.log(b);//99

//Reference types - call by reference; copy reference not object
//Reference types are mutable - they can be changed
//Reference types - object, array, function
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value);//20
console.log(obj2.value);//20