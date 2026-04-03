//Object keys can be altered or modified even if declared with const

const user = {
    name: "Sameer",
    age: 33,
    email: "sameer@example.com"
};
console.log(user);

//Accessing properties
console.log(user.name);
console.log(user["age"]);

//Dynamic property access - when key is stored in a variable 
let key = "email";
console.log(user[key]);//sameer@example.com //Key is a variable so it should be in square brackets and not in double quotes.

//Adding/Modifying properties
user.city = "Delhi";
console.log(user);//{ name: 'Sameer', age: 33, email: 'sameer@example.com', city: 'Delhi' }
user.age = 34;
console.log(user);//{ name: 'Sameer', age: 34, email: 'sameer@example.com', city: 'Delhi' }

//Deleting properties
delete user.city;
console.log(user);//{ name: 'Sameer', age: 33, email: 'sameer@example.com' }

//Check if property exists
console.log(user.hasOwnProperty("city"));//false
console.log(user.hasOwnProperty("name"));//true

