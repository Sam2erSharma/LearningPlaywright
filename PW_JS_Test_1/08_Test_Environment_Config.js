/*
In CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.

Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.
input: envName = "staging"
output: Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror

*/
let envName = "staging";
switch (envName) {
    case "dev":
        const dev_BASE_URL = "https://dev-api.testingacademy.com";
        const dev_API_KEY = "dev_key_xxxx-xxxx";
        const dev_TIMEOUT = 5000;
        let dev_env = "Dev";
        let dev_description = "Development environment";
        console.log("Environment: " + dev_env);
        console.log("Base URL: " + dev_BASE_URL);
        console.log("API Key: " + dev_API_KEY);
        console.log("Timeout: " + dev_TIMEOUT + "ms");
        console.log("Description: " + dev_description);
        break;
    case "staging":
        const stg_BASE_URL = "https://staging-api.testingacademy.com";
        const stg_API_KEY = "stg_key_xxxx-xxxx";
        const stg_TIMEOUT = 8000;
        let stg_env = "Staging";
        let stg_description = "Staging - Pre-production mirror";
        console.log("Environment: " + stg_env);
        console.log("Base URL: " + stg_BASE_URL);
        console.log("API Key: " + stg_API_KEY);
        console.log("Timeout: " + stg_TIMEOUT + "ms");
        console.log("Description: " + stg_description);
        break;
    case "qa":
        const qa_BASE_URL = "https://qa-api.testingacademy.com";
        const qa_API_KEY = "qa_key_xxxx-xxxx";
        const qa_TIMEOUT = 10000;
        let qa_env = "QA";
        let qa_description = "QA environment";
        console.log("Environment: " + qa_env);
        console.log("Base URL: " + qa_BASE_URL);
        console.log("API Key: " + qa_API_KEY);
        console.log("Timeout: " + qa_TIMEOUT + "ms");
        console.log("Description: " + qa_description);
        break;
    case "production/prod":
        const prod_BASE_URL = "https://api.testingacademy.com";
        const prod_API_KEY = "prod_key_xxxx-xxxx";
        const prod_TIMEOUT = 15000;
        let prod_env = "Production";
        let prod_description = "Production environment";
        console.log("Environment: " + prod_env);
        console.log("Base URL: " + prod_BASE_URL);
        console.log("API Key: " + prod_API_KEY);
        console.log("Timeout: " + prod_TIMEOUT + "ms");
        console.log("Description: " + prod_description);
        break;
    default:
        console.log("Environment doesn't exist. Please provide a valid environment name.");
}