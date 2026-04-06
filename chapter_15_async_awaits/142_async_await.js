/*
Q) What is Async / Await ?
    `async/await` is a cleaner way to write Promises.Instead of chaining`.then().then().then()`, you write code that LOOKS synchronous but works asynchronously.

Asynchronous Programming
    - Async code allows a program to start a long - running task(like fetching data from a file).and continue with other tasks before the first one finishes.
    - Async code prevents the application from freezing, which is critical for user experience.
-------------------------------------
Q)How JavaScript Runs Code?
    - JavaScript executes code one line at a time.
    - Each line must finish before the next line runs.

myDisplayer("A");
myDisplayer("B");
myDisplayer("C");

Output: A B C
-------------------------------
function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();

This example will display "**Hello Goodbye **" because the functions are called in that order:
The examples above are normal ** synchronous flow **.
-------------------------------------
Q) Why Async Code?
    - Some tasks take time to finish (network requests, timers, user input).
    - To stay responsive, JavaScript can use async programming.
    - Asynchronous flow refers to how JavaScript allows certain operations to run in the background and let their results be handled when they are ready.
    - If JavaScript waited for these tasks, the page would freeze.
    - Async code lets the rest of the program continue to run.
    - Async code does not run immediately
    - Timers run after a specified number of milliseconds
    - Events run when triggered by an event
    - Network requests run when the data arrives

Two keywords:
    - async → put before a function to make it return a Promise. (a, f, p)
    - await → pause here, wait for the Promise to finish, then give me the value. (calling of functions)
-------------------------------------------------
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.vwo.com/#/login');
});

test("name of the test", async ({page}) => {
  await page.goto(); // **wait for the Promise to finish,**
  await page.locator(#id); // **wait for the Promise to finish,**
})
---------------------------------------------------
Callback -> Promise -> Async/Await -Stop (Playwright)

Q) Analogy:
    - Promises with ".then()" is like texting instructions.
    - Async/await is like talking face-to-face -> more natural.
*/

//Example of Async/Await

getToken()
    .then(function (token) {
        return getUser(token)
    })
    .then(function (user) {
        console.log(user);
    });

//rough conversion with Async/Await

async function run() {
    let token = await getToken();
    let user = await getUser(token);
    console.log(user);
}

//If the function returns a promise, then await is applied on it and async when calling the function