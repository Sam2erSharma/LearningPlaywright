//Searching in array
let result = ["pass", "fail", "pass", "error", "fail"];

//indexOf() method returns the index of the first occurrence of the element or if not found it returns -1
//returns first occurrence from starting or -1
console.log(result.indexOf("fail"));//1
console.log(result.indexOf("skip"));//-1

//lastIndexOf() method returns the index of the last occurrence of the element or if not found it returns -1
//returns last occurrence from end or -1
console.log(result.lastIndexOf("fail"));//4
console.log(result.lastIndexOf("skip"));//-1

//includes() method returns true if the element is found in the array, otherwise false
//returns true if element is found or false
console.log(result.includes("fail"));//true
console.log(result.includes("skip"));//false

//find() method returns the first element that satisfies the condition
//returns first matching element or undefined
console.log(result.find(element => element === "fail"));//fail
console.log(result.find(element => element === "skip"));//undefined

let num = [10, 25, 30, 45]
console.log(num.find(n => n > 20));//25,30 and 45 all are greater than 20 but it returns only first matching element. Hence, answer will be 25.

//findIndex() method returns the index of the first element that satisfies the condition
//returns index of first matching element or -1
console.log(num.findIndex(n => n > 20));//1


//findLast() method returns the last element that satisfies the condition
//returns last element that satisfies the condition
console.log(num.findLast(n => n > 20));//45

//findLastIndex() method returns the index of the last element that satisfies the condition
//returns index of last element that satisfies the condition
console.log(num.findLastIndex(n => n > 20));//3

//search() method searches for the element in the array and returns the index of the first occurrence of the element or if not found it returns -1
//returns first occurrence from starting or -1
console.log(result.search("fail"));//1
console.log(result.search("skip"));//-1

