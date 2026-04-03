/*
1.) Print right angled triangle.

*
**
***
****
*****

*/

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row.trim());
}


/* 
2.) Print inverted pyramid.

*********
 *******
  *****
   ***
    *

*/
console.log("\n");

let x = 3;
for (let i = x; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= (x - i); j++) {//number of spaces is determined by subtracting the current row number from the total number of rows.
        row += " ";
    }
    for (let k = 1; k <= ((2 * i) - 1); k++) {//number of stars is determined by multiplying the current row number by 2 and subtracting 1.
        row += "*";
    }
    console.log(row);
}