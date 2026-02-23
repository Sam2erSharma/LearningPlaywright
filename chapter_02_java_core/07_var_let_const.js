//var - function scope
//function scope means that the variable is available only inside the function.

//Example 1 of function scope
/*
var a = 10; //global scope
console.log(a);
function myFunction() { //definition of function
    var a = 20; //function scope or local scope
    console.log(a);
}
myFunction(); //call of function

//Example 2 of function scope
var a = 10; //global scope
console.log(a);
function myFunction2() { //definition of function
    var a = 20; //function scope or local scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log("example 2:", a);
}
myFunction2();

//Disadvantage of var- variable can be redeclared
*/
//let - block scope
let b = 10;
console.log("first value of b:", b);
function myFunction3() { //definition of function
    let b = 20; //function scope or local scope
    console.log("second value of b:", b);
    if (true) {
        let b = 30;
        console.log("third value of b:", b);
    }
    console.log("fourth value of b:", b);
}
myFunction3();
//let will not allow to redeclare the variable.


const c = 10; //block scope
//value of c cannot be changed or redeclared.
