//Use export keyword to export the variables, functions, classes, objects and file.
export let BASE_URL = "https://app.vwo.com";

export function formatUpperCaseString(sname) {
    return sname.toUpperCase();
}

let fname = "Sameer"; //Since this is not exported, it cannot be imported in another file.