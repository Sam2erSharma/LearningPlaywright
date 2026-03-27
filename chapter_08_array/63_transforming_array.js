//map - transform each element and returns new array
//changes the values of original array
let score = [45, 82, 91, 60, 73];
let grades = score.map(s => s >= 70 ? "Pass" : "fail")
console.log(grades);//[ 'fail', 'Pass', 'Pass', 'fail', 'Pass' ]

//filter - returns new array with elements that satisfy/pass the condition
let passed = score.filter(s => s >= 70)
console.log(passed);//[ 82, 91, 73 ]

//reduce - returns single value
let total = score.reduce((sum, s) => sum + s, 0)
console.log(total);//351

//flat - flattens the nested array
//let nested = [[1, 2], [3, 4], [5]]
//console.log(nested.flat());//[1, 2, 3, 4, 5]

let nested = [1, 2, [3, 4], 5, [6, [7, 8]]]
console.log(nested.flat());//[ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]
console.log(nested.flat(2));//[ 1, 2, 3, 4, 5, 6, 7, 8 ]

