let url = "https://staging.vwo.com/api/login?retry=true";

//includes() - returns true if the string contains the specified substring
url.includes("staging"); //true
url.includes("prod"); //false

//startsWith() - returns true if the string starts with the specified substring
url.startsWith("https"); //true
url.startsWith("http"); //true
url.startsWith("http://"); //false

//endsWith() - returns true if the string ends with the specified substring
url.endsWith("true"); //true
url.endsWith("false"); //false

//indexOf() - returns the index of the first occurrence of the specified substring
console.log(url.indexOf("staging")); //8 //
url.indexOf("prod"); //-1 //-1 if not found

//lastIndexOf() - returns the index of the last occurrence of the specified substring
console.log(url.lastIndexOf("a"));//24

//search() - accepts regex and returns the index of the first match
console.log(url.search(/login/));//28
console.log(url.search("prod")); //-1

//match() - accepts regex and returns the first match
url.match("staging"); //["staging", index: 11, input: "https://staging.vwo.com/api/login?retry=true", groups: undefined]
url.match("prod"); //null

//replace() - replaces the first occurrence of the specified substring
url.replace("staging", "prod"); //"https://prod.vwo.com/api/login?retry=true"
url.replace("prod", "staging"); //"https://staging.vwo.com/api/login?retry=true"

url.split("?"); //["https://staging.vwo.com/api/login", "retry=true"]
url.split("/"); //["https:", "", "staging.vwo.com", "api", "login?retry=true"]

url.startsWith("https") && url.includes("staging") && url.endsWith("true"); //true