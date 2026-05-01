/*- `readonly` makes a property UNCHANGEABLE after it's set. You can assign it in the declaration or constructor, but nowhere else.
- It's different from `const`. `const` is for variables. `readonly` is for class properties and interface fields.
- `readonly` works with all access modifiers — `public readonly`, `private readonly`, `protected readonly`.
- Real QA use: Test configs like`baseURL`, `apiKey`, or`timeout` that should be set once and never accidentally changed during test execution.
*/

class PlaywrightConfig {
    readonly baseURL: string;
    readonly timeout: number;
    readonly retries: number;

    constructor(url: string, timeout: number, retries: number) {
        this.baseURL = url;
        this.timeout = timeout;
        this.retries = retries;
    }
    showConfig(): void {
        console.log("URL: " + this.baseURL);
        console.log("Timeout: " + this.timeout + "ms");
        console.log("Retries: " + this.retries);
    }
}

let config = new PlaywrightConfig("https://staging.app.com", 30000, 2);
config.showConfig();

// config.baseURL = "https://other.com"; //Error: Cannot assign to 'baseURL' because it is a read-only property.

