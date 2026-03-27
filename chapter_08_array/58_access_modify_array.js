let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);// pass
console.log(statuses[2]);// skip
//.at() method is used to access elements from the end of the array
console.log(statuses.at(-1));//last element
//output: skip

console.log(statuses.at(-2));//second last element
//output: fail

console.log(statuses.at(-3));//third last element
//output: pass

console.log(statuses.at(-4));//fourth last element
//output: undefined

//Modiying
statuses[1] = "blocked";
console.log(statuses);//[ 'pass', 'blocked', 'skip' ]
