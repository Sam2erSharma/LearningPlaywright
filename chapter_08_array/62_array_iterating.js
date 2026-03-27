//iterate- go through each element of array
let test = ["login", "checkout", "search"]

for (let i = 0; i < test.length; i++) {
    console.log(test[i]);//login, checkout, search
}

//for...of loop (cleanest and recommended for values)
for (let t of test) {
    console.log(t);//same output as for loop
}

//forEach() method - no return value
test.forEach((test, index) => {
    console.log(index + " " + test);//0 login, 1 checkout, 2 search
})

//for in loop - returns index
for (let tests in test) {
    console.log("Result of for in:" + tests + "-->" + test[tests]);//Result of for in:0-->login, Result of for in:1-->checkout, Result of for in:2-->search
}

//entries() method - returns an iterator of [index, value] pairs
for (let [i, t] of test.entries()) {
    console.log(i + " " + t);//0 login, 1 checkout, 2 search
}


