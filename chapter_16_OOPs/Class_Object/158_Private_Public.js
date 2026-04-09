//Public -> Accessible from anywhere
//Private -> Accessible only within the class
//Syntax: #variable_name
//~Protected~ ( It is not supported in JS/TS)

//Private Fields (#) — Hidden Data
//Prefix a field with `#` and it becomes INVISIBLE outside the class. Nobody can read or change it directly.

class Credentials {
    #apiKey;//private field
    //user;//public field //optional to declare here. We can directly use it in constructor.

    constructor(user, key) {
        this.user = user; // public
        this.#apiKey = key;
    }
    // Custom function made by us to access the private field
    getAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "scret_key_1234");
console.log(cred.user); //output: admin
// console.log(cred.apiKey); //output: undefined
// console.log(cred.#apiKey); //output: Syntaxerror

console.log(cred.getAuthHeader()); //only by calling the method, we can access the private field i.e. apikey in the above example.
//output: Bearer scret_key_1234

// cred.apiKey is undefined
// (it doesn't exist).
// cred.#apiKey would throw a SyntaxError.
// The ONLY way to access it is through the public method getAuthHeader()
