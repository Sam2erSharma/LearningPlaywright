//API Validation Example
let response = 404;
switch (response) {
    case 200:
        console.log("Success");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case 401:
        console.log("Unauthorized");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Internal Server Error");
        break;
    default:
        console.log("Unknown");
}
//output: Success