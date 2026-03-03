/*
**Q:** Can I have an else if without a final else? 

**A:** Yes! The final `else` is optional. But in QA automation, always include a final else with a failure message so unexpected conditions are caught instead of silently passing.
*/

console.log(2 ** 3);
//output: 8 ** is exponentiation operator

console.log('5' + 3);
//output: 53 string concatenation

console.log('5' - 3);
//output: 2 type coercion
//
console.log(0 || 'hello');
//output: hello