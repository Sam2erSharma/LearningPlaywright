// TDZ - temporal dead zone
console.log(b); //output: ReferenceError: Cannot access 'b' before initialization
let b = "Sameer"; //output: undefined ; let is hoisted ; as soon as let is declared it is in TDZ(TDZ starts from top of the scope till the declaration of the variable)
console.log(b); //output: Sameer; let allows to redeclare the variable.