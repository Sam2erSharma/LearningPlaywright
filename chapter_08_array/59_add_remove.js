let arr = [1, 2, 3];
//add element at the end
arr.push(4);
console.log(arr);//[ 1, 2, 3, 4 ]

//remove element from the end
arr.pop();
console.log(arr);//[ 1, 2, 3 ]

//adding multiple elements at the end
arr.push(4, 5, 6);
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]

//add element at the beginning
arr.unshift(0);
console.log(arr);//[ 0, 1, 2, 3, 4, 5, 6 ]

//remove element from the beginning
arr.shift();
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]

//splice() method is used to add or remove elements from the array
//Syntax: arr.splice(startIndex, deleteCount, item1, item2, ...);
arr.splice(2, 1);//remove 1 element from index 2
console.log(arr);//[ 1, 2, 4, 5, 6 ]//3 is removed

arr.splice(2, 0, 3);//add 3 at index 2
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]

arr.splice(1, 2, 10, 20)// 2 and 3 are removed and 10, 20 are added at index 1.
console.log(arr);//[ 1, 10, 20, 4, 5, 6 ]

arr.splice(1, 0, 2, 3)// 2 and 3 are added at index 1.
console.log(arr);//[ 1, 2, 3, 10, 20, 4, 5, 6 ]
