const user = { name1: "John", age: "34" };

//Basic Deconstructing - extracting properties from an object
const { name1, age } = user;
console.log(name1);//John
console.log(age);//34

//Deconstructing with different variable names
const { name1: userName, age: userAge } = user;
console.log(userName);//John
console.log(userAge);//34

//Deconstructing with default values
const { city = "Delhi" } = user;
console.log(city);//Delhi

