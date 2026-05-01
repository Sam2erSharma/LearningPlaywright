//Type Assertion as alias
//as alias is used to tell the compiler to treat the variable as a different type. As any is a supertype of all types, it can be used to cast any type to any other type.

//- Type assertions tell TypeScript "I know the type — trust me." It doesn't change data at runtime. It just tells the compiler to treat a value as a specific type.
//- Two syntaxes: value as Type (recommended) and value(older).Always use as.

let data: unknown = "hello";
let len = (data as string).length;
console.log(len);

//--------------------------
let rawResponse: unknown = {
    status: 200,
    body: { user: "admin", role: "tester" }
};

interface UserResponse {
    status: number;
    body: { user: string; role: string };
}

let response = rawResponse as UserResponse;
console.log("Status:", response.status);
console.log("User:", response.body.user);
console.log("Role:", response.body.role);

//--------------------------------
let element: unknown = {
    tagName: "Button",
    textContent: "Submit",
    id: "submit-btn",
    disabled: false
}

interface elementI { tagName: string, textContent: string, id: string, disabled: boolean };


let button = element as elementI


console.log("Tag:", button.tagName);
console.log("Text:", button.textContent);
console.log("ID:", button.id);
console.log("Disabled:", button.disabled);
