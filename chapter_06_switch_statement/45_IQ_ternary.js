//Nested ternary operator
//acts as switch case
let status = "active";
let result = status === "active" ? "User is Active"
    : status === "inactive" ? "User is Inactive"
        : "Unknown";
console.log(result);
//output: User is Active
//NOTE: Ternary operator is used to replace switch case.