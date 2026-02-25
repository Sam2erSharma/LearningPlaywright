let a = 10, b = 3;
console.log(a, b);
//output: 10 3

//assignment operators
a = b;
console.log(a, b);
//output:   3 3

let sum = a + b;
console.log(sum);
//output: 13

let sub = a - b;
console.log(sub);
//output: 7

let mul = a * b;
console.log(mul);
//output: 30

let div = a / b;//generates quotient
console.log(div);
//output: 3.3333333333333335

let mod = a % b;//generates remainder
console.log(mod);
//output: 1

let pow = a ** b;//generates power; a^b 
console.log(pow);
//output: 1000

let x = 10;
x = x + 1;
console.log(x);
//output: 11

x += 1;//same as x = x + 1 (line 35)
console.log(x);
//output: 12

x -= 1;//same as x = x - 1
console.log(x);
//output: 11

x *= 1;
console.log(x);
//output: 11

x /= 1;
console.log(x);
//output: 11

x %= 1;
console.log(x);
//output: 0

x **= 1;
console.log(x);
//output: 0