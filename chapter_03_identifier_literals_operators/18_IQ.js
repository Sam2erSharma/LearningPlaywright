console.log(0 == ""); //true
console.log(0 == "0"); //true
console.log(0 == false); //true
console.log("/n/t" == false); //true
console.log(null == undefined); // true


//Rule breakers
console.log(null == 0); // false
console.log(null == false); // false
console.log(null == ""); // false
console.log(undefined == 0); // false
console.log(undefined == false); // false
console.log(undefined == ""); // false
console.log(NaN == NaN); // false //NaN means not a number
console.log("" == null); //false
console.log("" == undefined); //false

//dangerous operators
console.log(0 == ""); //true
console.log(0 == "0"); //true
console.log(0 == false); //true
console.log("/n/t" == false); //true
console.log(null == undefined); // true
console.log("" == "0");//false