//Example 1:
switch (x) {
    case a:
        let a1 = 1;
        console.log(a1);
        break;
    case b:
        let b1 = 1;
        console.log(b1);
        break;
}
//output: ReferenceError: a is not defined

//Example 2:
let x = 10;
switch (x) {
    case 10:
        let a1 = 1;
        console.log(a1);
        break;
    case 10:
        let a2 = 2;
        console.log(a2);
        break;
}
//output: 1
//We have duplicate cases in switch statement but it will print only the first matching case.

