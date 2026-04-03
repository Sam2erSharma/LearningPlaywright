let str = "hello";
str[0] = "H";
//Will this change the value of str?
console.log(str);//hello

//Answer- no because strings are immutable
//we can not change the value of a string
//we can only create a new string with the new value

let upper = str.toUpperCase();
console.log(str);//hello
//str is still "hello" because strings are immutable
//upper is a new string with the value "HELLO"
console.log(upper);//HELLO
