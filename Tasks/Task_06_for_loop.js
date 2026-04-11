//For Loop
//1️⃣ Print "Hello" 5 times
console.log("Print Hello 5 times:")
for (a = 1; a <= 5; a++) {
    console.log("Hello");
}
console.log("\n");

//2️⃣  Print numbers from 1 to 10
console.log("Print numbers from 1 to 10:")
for (b = 1; b <= 10; b++) {
    console.log(b);
}
console.log("\n");
//3️⃣ Print even numbers from 1 to 20
console.log("Print even numbers from 1 to 20:")
for (c = 1; c <= 20; c++) {
    if (c % 2 === 0) {
        console.log(c);
    }
}
console.log("\n");
//4️⃣ Print the sum of first 10 natural numbers
console.log("Print the sum of first 10 natural numbers:")
let sum = 0;
for (d = 1; d <= 10; d++) {
    sum = sum + d;
}
console.log(sum);

console.log("\n");

//5️⃣ Print the multiplication table of 5
console.log("Print the multiplication table of 5:")
let number = 5;
for (count = 1; count <= 10; count++) {
    //let mul = number * count;
    console.log(`${number} * ${count} = ${number * count}`)
}