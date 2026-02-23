let x = "global";//global scope

if (true) {
    // TDZ for block-scoped "x" starts here
    console.log(x);   // output: global
}

console.log(x);

//Example 2 - Global value remains until local value is assigned.
let y = "global";//global scope

if (true) {
    // TDZ for block-scoped "x" starts here
    // console.log(x);   // output: ReferenceError (NOT "global"!)
    let y = "block";     // TDZ ends
    //block scope
    //as soon as let is defined it enters in TDZ and line 14 will throw error
    console.log(y);      // output: "block"
}

console.log(y);

//NOTE: If we had used var instead of let in line 14, then output would be "global".
//This is because var is function scoped and it is hoisted.
//But let is block scoped and it is not hoisted.