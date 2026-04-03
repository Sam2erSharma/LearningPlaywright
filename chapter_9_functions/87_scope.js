//Scope in functions
/* Scope: Where variables are accessible 

    - Global scope: Accessible everywhere
    - Function scope: Accessible within function
    - Block scope: Accessible within { } (let, const)
*/
let env = "Staging";//global scope

function setUpConfig() {
    let timeout = 3000;//local scope
    console.log(env);//can access global 
    console.log(timeout);//can access local
}
setUpConfig();
console.log(env);//
console.log(timeout);//Reference error - not accessible outside the function

/*Output-
Staging
3000
Staging
ReferenceError: timeout is not defined
*/

//Nested Scope or Block Scope
function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x);//inner can access outer's variables
    }
    inner();
    console.log(y);//Reference error - not accessible outside the function
}

