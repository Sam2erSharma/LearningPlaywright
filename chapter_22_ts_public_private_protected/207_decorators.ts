//Decorators - this is hardly used in real world apps.

//Decorators are special kind of declarations that can be attached to classes, methods, accessors, properties, or parameters using the `@` symbol. They modify behavior without changing original code.
//- Special `@functions` that attach to classes, methods, or propertiesModify behavior without changing original code

//They are functions that run when the class/method/property/parameter is defined.
//Decorators are not a standard part of JavaScript yet, but they are a proposed feature and are widely used in TypeScript.
//To use decorators, you need to enable the "experimentalDecorators" option in your tsconfig.json file.


/*
- Decorators are special functions that ATTACH to classes, methods, or properties using the `@` symbol. They modify behavior without changing original code.
- Special `@functions`  that attach to classes, methods, or propertiesModify behavior without changing original code
*/

function Role(role: string) {
    return function (constructor: Function) {
        constructor.prototype.role = role;//constructor.prototype is similar as this.role in classes.
    };
}

@Role("admin")
class Admin {
}

const admin = new Admin();
console.log((admin as any).role);


