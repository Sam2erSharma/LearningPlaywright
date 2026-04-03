//Extracting substring

let str = "Login_Test_Pass_001"

//slice(start, end-1) - supports negative indexing
console.log(str.slice(0, 5)); //"Login"
console.log(str.slice(11)); //"Pass_001"
console.log(str.slice(-3)); //"001"
//let testNumber = str.slice(-3);
//console.log(testNumber);

//substring(start, end-1) - does not support negative indexing (treats negative index as 0)
console.log(str.substring(6, 10)); //"Test"
console.log(str.substring(-3)); //"Login_Test_Pass_001"

//at() for single char
console.log(str.at(0)); //"L"
console.log(str.at(-1)); //"1"

