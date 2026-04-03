//Transforming string

let str = "Hello, World!";

//toLowerCase() - converts the string to lowercase
console.log(str.toLowerCase()); //"hello, world!"

//toUpperCase() - converts the string to uppercase
console.log(str.toUpperCase()); //"HELLO, WORLD!"

//trim() - removes whitespace from both ends of the string
console.log(str.trim()); //"Hello, World!"

//trimStart() - removes whitespace from the beginning of the string
console.log(str.trimStart()); //"Hello, World!"

//trimEnd() - removes whitespace from the end of the string
console.log(str.trimEnd()); //"Hello, World!"

//replace() - replaces the first occurrence of the specified substring
console.log(str.replace("Hello", "Hi")); //"Hi, World!"

let msg = "Test: Fail, Retry: Fail";
console.log(msg.replace("Fail", "Pass")); //"Test: Pass, Retry: Fail" //only first occurrence is replaced
//regrex with replace
console.log(msg.replace(/Fail/g, "Pass")); //"Test: Pass, Retry: Pass" //replace all with regex

//replaceAll() - replaces all occurrences of the specified substring
console.log(msg.replaceAll("Fail", "Pass")); //"Test: Pass, Retry: Pass"

//concat() - concatenates two or more strings
console.log(str.concat(" How are you?")); //"Hello, World! How are you?"
//"Hello".concat(" World!");
//"Hello" + " World!";
//`${'Hello'} ${'World'}`;

//split() - splits the string into an array of substrings
"pass,fail,skip".split(","); //["pass","fail","skip"]
"hello".split(""); //["h","e","l","l","o"]

//join() - joins the elements of an array into a string
"test_Login_Pass_001".split("_").join(" "); //"test Login Pass 001"

//Template Literals (joining with format)
let parts = ["2026", "04", "01"];
let date = parts.join("-");
console.log(date);//"2026-04-01"



