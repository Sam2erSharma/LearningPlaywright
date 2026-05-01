//TS date types: public, private, protected
//public: accessible from anywhere
//private: accessible only within the class
//protected: accessible within the class and its subclasses

/*
- TypeScript has three access modifiers that control WHO can access class members. 
- JavaScript only has public (default) and `#private` (ES2022). 
- TypeScript adds `protected` -> which JavaScript completely lacks.
- `public` means accessible everywhere  inside the class, in child classes, and from outside. This is the default.
- `private` means accessible ONLY inside the class where it's defined. Not even child classes can access it. Enforced at COMPILE time only.
- `protected`  means accessible inside the class AND in child classes, but NOT from outside. Perfect for Page Object Model ,BasePage can have protected methods that child pages use, but test files cannot access directly.
*/

class APIClient {
    public baseURL: string;
    private apiKey: string;
    protected timeout: number;

    constructor(baseURL: string, apiKey: string, timeout: number) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.timeout = timeout;
    }

    private getAuthHeader(): string {
        return "Bearer " + this.apiKey;
    }

    public sendRequest(path: string): void {
        console.log("GET " + this.baseURL + path);
        console.log("Auth: " + this.getAuthHeader());
        console.log("Timeout: " + this.timeout + "ms");
    }

}

class UserAPIClient extends APIClient {
    getUsers(): void {
        console.log("Fetching users (timeout: " + this.timeout + "ms)");//protected can be accessed in child class
        console.log("URL: " + this.baseURL + "/users");
    }
}

let client = new APIClient("https://api.staging.com", "key_secret_123", 5000);
console.log("Base URL:", client.baseURL);
client.sendRequest("/health");

//Output:
//Base URL: https://api.staging.com
//GET https://api.staging.com/health
//Auth: Bearer key_secret_123
//Timeout: 5000ms