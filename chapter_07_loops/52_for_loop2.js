for (let sameer = 0; sameer < 10; sameer++) {
    console.log(sameer);
}//output: 0 1 2 3 4 5 6 7 8 9

for (let _1 = 0; _1 <= 10; _1++) {
    console.log(_1);
}//output: 0 1 2 3 4 5 6 7 8 9 10

//No output would be generated for the below two examples
/*for (let a; a <= 10; a++) { //no initialization
    console.log(a);
}

for (let b = 0; b > 1; b++) { //false condition
    console.log(b);
}

for (let c = 0; c++;) {//no condition
    console.log(c);//infinite loop
}

for (let i = 0; i > 10) {//no increment
    console.log("hello");//no output
}*/

