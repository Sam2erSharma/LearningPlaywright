//import { BASE_URL, formatTestName } from "../utils.js";
//import { BASE_URL, formatUpperCaseString } from "../testutil.js";
//We can import multiple files in a single file but we cannot import same variable or function name i.e. BASE_URL in this case.

//To import same variable name from multiple files we can use alias.
//Syntax: import { variable_name as alias_name } from "file_path";
import { BASE_URL as bul_util, formatTestName } from "../utils.js";
import { BASE_URL as bul_testtul, formatUpperCaseString } from "../testutil.js";

console.log(bul_util);
console.log(bul_testtul);
console.log(formatTestName("login"));
//Output:
//https://api.staging.com
//https://api.staging.com
//TC_LOGIN