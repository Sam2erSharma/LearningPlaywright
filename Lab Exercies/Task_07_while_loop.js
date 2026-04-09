//While Loop
//1. Print "Playwright" 5 times:
console.log('Print "Playwright" 5 times:');
let a = 1;
while (a <= 5) {
    console.log("Playwright");
    a++;
}

console.log("\n");

//2. Print numbers from 1 to 10:
console.log("Print numbers from 1 to 10:");
let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}

console.log("\n");

//3. Print even numbers from 1 to 20
console.log("Print even numbers from 1 to 20");
let enumber = 1;
while (enumber <= 20) {
    if (enumber % 2 === 0) {
        console.log(enumber);
    }
    enumber++;
}

console.log("\n");

//4. Print sum of first 10 natural numbers
console.log("Print sum of first 10 natural numbers");
let nnum = 1;
let sum = 0;
while (nnum <= 10) {
    sum += nnum;
    nnum++;
}
console.log(sum);

console.log("\n");

//5. Print the multiplication table of 7
console.log("Print the multiplication table of 7");
let number = 7;
let count = 1;
while (count <= 10) {
    let mul = number * count;
    console.log(`${number} * ${count} = ${mul}`);
    count++;
}