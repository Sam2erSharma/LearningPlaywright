// Default Export -> Export One Main Thing
// We can export only one default export from a file
//Default keyword means main export

export default function log(message) {//default export
    console.log("[LOG] 1 " + message);
}

export function log2(message) {//named export
    console.log("[LOG] " + message);
}