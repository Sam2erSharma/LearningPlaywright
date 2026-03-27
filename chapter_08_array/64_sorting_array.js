//sort - sorts the array
//sorts in ascending order/alphabetical order or lexicographical order

//example 1: sorting strings
let fruits = ["banana", "apple", "orange", "mango"];
console.log(fruits.sort());//[ 'apple', 'banana', 'mango', 'orange' ]

//example 2: sorting numbers
let num = [10, 1, 21, 2]
console.log(num.sort());//[ 1, 10, 2, 21 ] > compares as strings

//example 3: sorting numbers in ascending order
num.sort((a, b) => a - b)
console.log(num);//[ 1, 2, 10, 21 ]

//example 4: sorting numbers in descending order
num.sort((a, b) => b - a)
console.log(num);//[ 21, 10, 2, 1 ]