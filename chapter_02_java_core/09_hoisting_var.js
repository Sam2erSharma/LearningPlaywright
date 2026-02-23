//Phase 1:
console.log(a); //output: ReferenceError: a is not defined.
var a = "Sameer"; //output: undefined ; var is hoisted.
console.log(a); //output: Sameer; var allows to redeclare the variable.

//Phase 2: Execution Phase
//console.log(b);
//let b = "Sameer";
//output: ReferenceError: Cannot access 'b' before initialization
//console.log(b);

/*Phase 1: Memory Creation Phase
console.log(a); //automatically value of a will be defined as "undefined" that is why when we execute the code it will print "undefined"
var a = "Sameer";
*/

//NOTE: Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the compilation phase.
//NOTE: Hoisting only occurs if you use the variable before declaration.
//var is hoisted and initialized with undefined.
//let and const are hoisted but not initialized with undefined.