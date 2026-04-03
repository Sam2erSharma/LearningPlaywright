//Iterating through 2D array

let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];
//nested for loop
for (let i = 0; i < testMatrix.length; i++) { //row

    for (let j = 0; j < testMatrix[i].length; j++) { //column
        console.log(testMatrix[i][j] + " ")
    }
    console.log(" "); //new line after each row

}
//Output:
// login
// pass
// 200
//
// checkout
// fail
// 404 
//
// search 
// pass 
// 180 

console.log(" --------- ");

//for...of loop
for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ") //print in same line instead of new line like console.log()
    }
    console.log(); //new line after each row
}
//Output:
// login pass 200 
// checkout fail 404 
// search pass 180 

console.log(" --------- ");

// forEach
testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();
});
//Output:
// login pass 200 
// checkout fail 404 
// search pass 180 

console.log(" --------- ");