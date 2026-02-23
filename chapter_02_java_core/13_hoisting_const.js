const a = "Sameer";
console.log(a);

//Phase 1:
console.log(b); //output: ReferenceError: Cannot access 'b' before initialization
const b = "Sameer"; //output: undefined ; const is hoisted.
console.log(b); //output: Sameer; const allows to redeclare the variable.

//NOTE: const is also hoisted but not initialized with undefined.
//NOTE: const is block scoped.
//NOTE: const cannot be redeclared. 