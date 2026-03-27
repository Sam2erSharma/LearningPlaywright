let original = [1, 2, 3];
//Copying array (shallow copy) - original array wont change
//method 1: spread operator
let copy1 = [...original];
//console.log(copy1);//[ 1, 2, 3 ]

//method 2: slice()
let copy2 = original.slice();
//console.log(copy2);//[ 1, 2, 3 ]

//method 3: Array.from()
let copy3 = Array.from(original);
//console.log(copy3);//[ 1, 2, 3 ]

//method 4: concat()
let copy4 = original.concat();
//console.log(copy4);//[ 1, 2, 3 ]

copy1.push(4);
console.log(original);//[ 1, 2, 3 ] ; original array wont change
console.log(copy1);//[ 1, 2, 3, 4 ] ; copy array will change

//Deep copy - original array will change
//Mostly used with JSON.parse(JSON.stringify(original))
original.push(99);
console.log(original);//[ 1, 2, 3, 99 ] ; original array will change



