//Return value from a function


//Returns nothing - undefined
function logTest(name) {
    console.log(`Running: ${name}`);
}//no return statement

console.log(logTest("Sameer"));//undefined

//Returns multiple values via Array and Object.

function test() {
    return [1, 2, 3, 4];//array
    // return { "name": "Sameer" };//object
}

console.log(test());