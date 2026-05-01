//Log Decorator
//Most of the time decorators in Playwright we are going to use as a logging purpose. Log basically means to print the information in the log.

//In this example, we have a Log decorator that is applied to the add method of the Calculator class.
//The Log decorator is a function that takes three arguments: target, methodName, and descriptor.
//The target is the class that the method belongs to.
//The methodName is the name of the method that is being decorated.
//The descriptor is the property descriptor of the method.


function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Called ${methodName} with args:`, args);
        return original.apply(this, args);
    };
}

class Calculator {
    @Log
    add(a: number, b: number) {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(2, 3);