//Question 1:
// ✅ Validate URL contains expected environment

let url = "https://staging.myapp.com/dashboard";

console.log(url.includes("staging"));
//Answer- true
console.log(url.startsWith("https"));
//Answer- true
console.log(url.endsWith("/dashboard"));
//Answer- true

//-------------------------------------------

//Question 2:
let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";
let status1 = log.match(/Status: (\d+)/)[1]; //\d+ matches one or more digits. () creates a capturing group.
console.log(status1);
//Answer- 500

//-------------------------------------------
//Question 3:
let env = "staging";
let module1 = "auth";
let count = 7;
let testId = `${env}_${module1}_${String(count).padStart(3, "0")}`;//padStart() is used to pad the string with leading zeros
//padStart(targetLength, padString) - targetLength is the length of the string, padString is the string to pad the string with
console.log(testId);
//Answer- staging_auth_007

//-------------------------------------------
//Question 4:
let actual = " PASS ";
let expected = "pass";
console.log(actual.trim().toLowerCase() === expected);

//Answer- true
//-------------------------------------------
//Question 5:
let testUrl = "https://app.com/search?query=login&page=2&sort=asc";
let params = Object.fromEntries(testUrl.split("?")[1].split("&").map(p => p.split("=")));
//testUrl.split("?") - splits the string into an array of substrings based on the "?" delimiter
//[1] - selects the second element of the array (the part after "?")
//.split("&") - splits the string into an array of substrings based on the "&" delimiter
//.map(p => p.split("=")) - maps each substring to an array of key-value pairs based on the "=" delimiter
//Object.fromEntries() - converts the array of key-value pairs into an object
console.log(params);
//Answer- { query: 'login', page: '2', sort: 'asc' }
//-------------------------------------------
//Question 6:

let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret";
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");//(?<=Bearer ) is a positive lookbehind assertion that matches "Bearer " but does not include it in the match. .+ matches one or more characters after "Bearer "
//replace() - replaces the first occurrence of the specified substring
console.log(masked);
//Answer- Bearer ***REDACTED***
