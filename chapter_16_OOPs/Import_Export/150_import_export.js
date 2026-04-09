//Use import keyword to import the variables and functions
import { BASE_URL, formatUpperCaseString } from "../testutil.js"; //import {} is used to import multiple exports.
//./ is used to import the file from the same directory or folder
//../ is used to import the file from the parent directory or folder
//{} is used to import the named exports

console.log(BASE_URL);
let result = formatUpperCaseString("Sameer");
console.log(result);
//Output:
//https://api.staging.com
//TC_SAMEER