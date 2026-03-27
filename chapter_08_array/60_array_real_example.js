let browser = ["chrome", "firefox", "safari", "opera", "edge"];
console.log(browser.length);//5
console.log(browser);
console.log(browser.pop());//edge removed
console.log(browser.shift());//chrome removed
console.log(browser);//['firefox', 'safari', 'opera']
for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Browser found.")
    }
}