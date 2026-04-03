// n = 3, print the pattern:
// *
// * *
// * * *

let n = 3;
for (let i = 1; i <= n; i++) {
    let row = " ";//add space at the beginning of each row whenever i<n or j>i. This is for the center alignment of the pattern.
    for (let j = 1; j <= i; j++) {
        //row = row + "* ";
        row += "* ";//printing * whenever j<=i and space after *
    }
    console.log(row);//trim() removes the extra space from the start and end of the string.
}