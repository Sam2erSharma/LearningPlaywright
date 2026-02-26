let browser = "brave";
switch (browser) {
    case "chrome":
    case "edge":
    case "opera":
    case "brave":
        console.log("Web Browser belongs to Chrome family");
        break;
    case "safari":
        console.log("Web Browser belongs to Safari family");
        break;
    case "firefox":
        console.log("Web Browser belongs to Firefox family");
        break;
    default:
        console.log("Unknown browser");
}