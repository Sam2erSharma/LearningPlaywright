//Why does if([]) evaluate to true even thought array is empty?
if ([])
    console.log("True");
else
    console.log("False");
//output: True*/

//Answer:An empty array is an object, and in JavaScript, all objects are considered true.
//In JavaScript, arrays are objects. When an array is converted to a boolean, it is always considered true, regardless of whether it is empty or not. This is because arrays are objects, and all objects are considered true in a boolean context
