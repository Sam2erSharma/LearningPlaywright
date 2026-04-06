//.then() - used to handle the success case of a promise.
//.catch() - used to handle the error case of a promise.
//.finally() - used to handle the finally case of a promise.

//Real - world QA analogy: You ordered pizza(Promise).

// .then() — "When the pizza arrives, I'll eat it."
// .catch() — "If the order is cancelled, I'll order something else."
// .finally() — "Whether I get pizza or not, I'll clean the table."

//Syntax:
myPromise
    .then(function (value) {
        // Handle success
    })
    .catch(function (error) {
        // Handle error
    })
    .finally(function () {
        // Handle finally
    });
//----------------------------------
let apiCall = new Promise(function (resolve, reject) {
    resolve({ status: 200, body: "User Data" });
});

apiCall.then(function (response) {
    console.log(response);
    console.log(response.status);
    console.log(response.body);
})

// .then() runs ONLY when the promise resolves successfully.