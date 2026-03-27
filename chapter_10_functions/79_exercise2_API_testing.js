//if statusCode >=200 && statusCode <=300)

//Function with argument and return
function checkStatus(statusCode) {
    if (statusCode >= 200 && statusCode <= 300)
        return "Status exists."
    else
        return "Status doesn't exists.";
}
//Function with expression
const checkStatus_exp = function (statusCode) {
    if (statusCode >= 200 && statusCode <= 300)
        return "Status exists."
    else
        return "Status doesn't exists.";
}

//Arrow function
const checkStatus_arrow = (statusCode) => {
    if (statusCode >= 200 && statusCode <= 300)
        return "Status exists."
    else
        return "Status doesn't exists."
}
console.log(checkStatus(200));
console.log(checkStatus_exp(301));
console.log(checkStatus_arrow(300));