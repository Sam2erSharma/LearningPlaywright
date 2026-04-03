const ENV = {
    BASE_URL: "https://staging.myapp.com",
    TIMEOUT: 10000,
    RETRIES: 2,
    BROWSER: "chrome"
}

const EXPECTED_RESPONSE = {
    statusCode: 200,
    body: {
        user: { role: "admin", active: true }
    }
}