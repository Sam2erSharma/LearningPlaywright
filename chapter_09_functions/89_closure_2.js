function makeCounter(start = 0) {
    let count = start;//this variable is private to the function or "closed over"

    // function increment() {
    //     count++;
    // }
    // function decrement() {
    //     count--;
    // }
    // function getCount() {
    //     return count;
    // }
    // return increment, decrement, getCount;//this will return only the last function i.e. getCount. To return all the functions, we need to return an object. Add curly braces around the functions.

    //Another way to return multiple functions or rewrite this program is:
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getCount() {
            return count;
        }//We can only do this incase of single line functions. If the functions are long, we need to use the first method.
    };
}
let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());//3
counter.decrement();
console.log(counter.getCount());//2