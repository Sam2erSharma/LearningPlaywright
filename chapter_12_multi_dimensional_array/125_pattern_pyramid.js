//   *
//  ***
// *****

let n = 3;
for (let i = 1; i <= n; i++) {

    let row = "";
    for (let j = 1; j <= n - i; j++) {//print space at the beginning of each row.
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {//print * after space
        row += "*";
    }
    console.log(row);

}