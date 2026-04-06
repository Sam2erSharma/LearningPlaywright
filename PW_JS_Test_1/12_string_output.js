//What is the output of
let str = " PASS ";
console.log(str.trim().toLowerCase());
//Output: pass
//-----------------------------
//What does the below return?
//a)1 b)2 c)3 d)4
console.log("pass,fail,skip".split(",").length);//split() method is used to split the string into an array of substrings based on the specified delimiter
//Output: 3
//-----------------------------
//What is the output of this code ?
//a)hello b)Hello c)H d)error
let str1 = "hello";
str1[0] = "H"; //Strings are immutable in JavaScript, so we cannot change the value of a string
console.log(str1);
//Output: hello
//-----------------------------
//Which expression correctly extracts `"staging"` from `https://staging.example.com` according to the notes?
//a) url.split(".")[0]
// b) url.slice(8, 15) 
// c) url.split("://")[1].split(".")[0] 
// d) Both b and c
let url = "https://staging.example.com";
console.log(url.split("://")[1].split(".")[0]);
//Output: staging
//-----------------------------
//What does `"Error: 404 Not Found".match(/\d+/g)` return?
//a) "404" b) ["404"] c) [404] d) null
let error = "Error: 404 Not Found";
console.log(error.match(/\d+/g));
//Output: ["404"]