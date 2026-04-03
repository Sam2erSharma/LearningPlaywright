//A callback is simply a function that you give to another function, saying "Hey, when you're done, run this."
//Think of it like this -> you go to a restaurant, give your phone number(callback), and say "Call me when my table is ready." You don't wait at the door. You go shopping. When the table is ready, they CALL YOU BACK. That's a callback.

//In QA terms -> when Playwright clicks a button, it waits for the page to load, THEN runs your assertion. That assertion is a callback.

function placeOrder(item, callback) {
    console.log("Order placed: " + item);
    callback();//callback function and argument name can be anything but should always be same.
}

//first way to call callback function
function print() {
    console.log("Normal function callback: Order is ready! Pick it up.");
}
placeOrder("Burger", print);//here print is callback function

//second way to call callback function using anonymous function
placeOrder("Burger", function () {//anonymous function is a function that doesn't have a name. A new function is created at the time of calling 
    console.log("Anonymous function callback: Order is ready! Pick it up.");
});

//third way to call callback function using arrow function
placeOrder("Burger", () => {
    console.log("Arrow function callback: Order is ready! Pick it up.");
});

//if there are multiple callbacks, then it will depend on the order of execution.