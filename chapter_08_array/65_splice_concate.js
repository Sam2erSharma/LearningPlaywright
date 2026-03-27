//Slicing & combining arrays
let arr = [1, 2, 3, 4, 5];

//slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
//Syntax: arr.slice(startIndex, endIndex); returns new array, doesnot mutate original array
//if end index is not given, it returns the rest of the array
//actual output is (start index, end index - 1)
console.log(arr.slice(1, 3));//[ 2, 3 ]
console.log(arr.slice(1));//[ 2, 3, 4, 5 ]
console.log(arr.slice());//[ 1, 2, 3, 4, 5 ]

console.log(arr.slice((-2)));//[ 4, 5 ]
console.log(arr.slice((3, 5)));//output= [ 4, 5 ], no error will be thrown if end index is greater than array length

//Concatination method 1:
//concat() method is used to merge two or more arrays
//Syntax: arr.concat(arr2, arr3, ...);
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b, [5, 6]);
console.log(c);//[ 1, 2, 3, 4, 5, 6 ]

//Concatination method 2:
//spread operator (...) is used to merge two or more arrays (modern way)
//Syntax: [...arr1, ...arr2, ...arr3];
console.log([...a, ...b]);//[ 1, 2, 3, 4 ]
console.log([...a, ...b, 5, 6]);//[ 1, 2, 3, 4, 5, 6 ]


//Join - converts array to string
let arr1 = ["apple", "banana", "cherry"];
console.log(arr1.join());//apple,banana,cherry
console.log(arr1.join("|"));//apple|banana|cherry
console.log(arr1.join("-"));//apple-banana-cherry
console.log(arr1.join(""));//applebananacherry
