// Exercise 1 : API Response Validation

// You receive an array of API response codes.Write code to:
// Check if ALL responses are successful(200–299)
// Find the FIRST non - success code
// Return all unique error codes
// let responses = [200, 201, 404, 500, 404, 200, 503];

let responses = [200, 201, 404, 500, 404, 200, 503];

//Check if ALL responses are successful(200–299)
let allSuccess = responses.every(r => r >= 200 && r <= 299);
console.log(allSuccess);//false

//Find the FIRST non - success code
let firstNonSuccess = responses.find(r => r >= 400);
console.log(firstNonSuccess);//404

//Return all unique error codes
let uniqueErrorCodes = [...new Set(responses.filter(r => r >= 400))];
console.log(uniqueErrorCodes);//[ 404, 500, 503 ]
