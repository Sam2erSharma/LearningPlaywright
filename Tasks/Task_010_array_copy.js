// Exercise 3 — Deep vs Shallow Copy(Tricky)

// What is the output and why ? How would you fix it ?

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";// changes the status of the first element in the second array and also in the first array because of shallow copy
console.log(suite1[0].status);

//different between shallow copy and deep copy
//shallow copy - only copies the reference of the object. What changes in one will reflect in the other.
//deep copy - copies the object itself. What changes in one will not reflect in the other.

// Output: fail
// Why: [...suite1] creates a shallow copy. Both suite1 and suite2 point to the same inner object.
// Fix: Use JSON.parse(JSON.stringify(suite1)) for a deep copy.
//fix: Deep copy - need to clone the object inside the array rather then the array itself.
