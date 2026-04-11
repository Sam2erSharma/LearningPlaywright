//Normal JS code that we have converted into TS in 176_typescript.ts file
let testName = "Login Test";

function add(a, b) {
    return a + b;
}

let big = 123456789012345678901234567890n;

//TypeScript is a superset of JavaScript.

//Type Annotation (:string, :number, :boolean, :any, :object, :array, :tuple, :enum, :void, :null, :undefined) -> variable: type
// Type annotations let TypeScript know EXACTLY what type a variable, parameter, or return value should be.
// If you assign the wrong type, TypeScript catches it BEFORE you run the code -> at compile time.
// In JavaScript, `let timeout = "five"`  is perfectly fine when you meant `5`  — JS doesn't care.
// In TypeScript, if you write`let timeout: number = "five"`, it throws an error immediately.You catch the bug before it ever reaches your test pipeline.

//In TS, it is mandatory to provide type annotation to the variables and function parameters and return type.
//If we don't provide type annotation, it will throw an error.