// *****
// ****
// ***
// **
// *

let n = 5;
for (let i = n; i >= 1; i--) {
    row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}