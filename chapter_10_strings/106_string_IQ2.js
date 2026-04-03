//1. What is the output?
let a = { status: "pass" };
let b = a; //b is a reference to a
b.status = "fail"; //objects are directly assigned not copied so both a and b point to the same object.
console.log(a.status);//fail
//a) pass
//b) fail
//c) undefined
//d) TypeError
//Answer- fail - because b is a reference to a
//-------------------------------------------

//2. What is the output?
let str1 = "  PASS  ";
console.log(str1.trim().toLowerCase());
//a) "PASS"
//b) "pass"
//c) "  PASS  "
//d) "  pass  "
//Answer: b - "pass" - because trim() removes whitespace from both ends of the string and toLowerCase() converts the string to lowercase

//-----------------------------------
//3. What does "pass,fail,skip".split(",").length retun?
//a) 1
//b) 2
//c) 3
//d) 4
//Answer: c - 3 - because split(",") splits the string into an array of substrings and length returns the number of elements in the array

//-----------------------------------
//4. Which correctly extracts `"staging"` from this URL ?
let url = "https://staging.example.com";
//a) `url.split(".")[0]`
//b) `url.slice(8, 15)`
//c) `url.split("://")[1].split(".")[0]` //url.split("://") returns ["https", "staging.example.com"]. [1] is "staging.example.com". split(".") returns ["staging", "example", "com"]. [0] is "staging".
//d) Both b and c
//Answer: d - Both b and c - because both methods extract "staging" from the URL

//-----------------------------------

//5. What does this return?
"Error: 404 Not Found".match(/\d+/g); //\d+ is a regex that matches one or more digits. g is a flag that matches all occurrences.
//a) "404"
//b) ["404"]
//c) [404]
//d) null
//Answer: b - ["404"] - because match() returns an array of all matches

//-----------------------------------

//6. How do you convert a string to an array of characters?
//let str = "hello";
//a) str.split("")
//b) str.split(" ")
//c) str.split(",")
//d) str.split("-")
//Answer: a - str.split("") - because split("") splits the string into an array of characters

