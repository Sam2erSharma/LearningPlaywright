console.log(null == undefined);
//output: true
console.log(null === undefined);//strict equality operator ; checks whether the two values are equal and of the same type
//output: false 
console.log(undefined == "");
//output: false
console.log(undefined === "");
//output: false
console.log(null == 0);
//output: false
console.log(null === 0);
//output: false

//NOTE: == is loose equality operator ; checks whether the two values are equal
console.log(5 == "5");
//output: true

//NOTE: === is strict equality operator ; checks whether the two values are equal and of the same type 
console.log(5 === "5");
//output: false 