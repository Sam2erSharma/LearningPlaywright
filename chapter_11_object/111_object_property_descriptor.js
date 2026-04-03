//Object Property Descriptor - It is used to define the properties of an object
//Every property has hidden attributes called a **property descriptor**. 
//You can inspect them with `Object.getOwnPropertyDescriptor()`.

let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
//Output: { value: 'Login', writable: true, enumerable: true, configurable: true }
//writable - if false then the property cannot be changed
//enumerable - if false then the property will not be included in the object
//configurable - if false then the property cannot be deleted

/*{
    value: "Login",
    writable: true, //can change the value
    enumerable: true, //can be iterated; shows in Object.keys() and for...in loop
    configurable: true //can be deleted or redefined
}*/

