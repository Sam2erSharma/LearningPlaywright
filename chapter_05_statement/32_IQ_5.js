/* 
Q:** What is the difference between `if(x == 5)` and`if(x === 5)` in testing ?

Always use`**===**`(strict equality) in tests. `==` does type coercion: `"5" == 5` is true but `"5" === 5` is false.In QA, strict equality catches type bugs.
*/

let x = 5;
if (x == "5")
    console.log("True");
else
    console.log("False");
//output: True

let x1 = 5;
if (x1 === "5")
    console.log("True");
else
    console.log("False");
//output: False
