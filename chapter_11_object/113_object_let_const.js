const config = { browser: "chrome", timeout: 3000 };
//Modifying property
config.browser = "firefox";//modified the value of browser
config.timeout = 5000;//modified the value of timeout
config.retry = 2;//added new property
console.log(config);//{ browser: 'firefox', timeout: 5000, retry: 2 }

//config = { browser: "Safari" };
//console.log(config);//TypeError: Assignment to constant variable. //Reassigning is not allowed
//-----------------------------------------------

let config1 = { browser: "chrome", timeout: 3000 };
//Modifying property
config.browser = "firefox";//modified the value of browser
config.timeout = 5000;//modified the value of timeout
config.retry = 2;//added new property
console.log(config);//{ browser: 'firefox', timeout: 5000, retry: 2 }

config = { browser: "Safari" };//reassigning is allowed 
console.log(config);//{ browser: 'Safari' }
//-----------------------------------------------

//const - cannot reassign but can modify the properties
//let - can reassign and can modify the properties