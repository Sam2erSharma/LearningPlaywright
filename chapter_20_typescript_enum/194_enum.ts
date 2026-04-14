//Enum in TypeScript
//- Enum is a way to define a set of named constants.
//- It's a way to give more friendly names to sets of numeric values.

/*
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let direction: Direction = Direction.Up;
console.log(direction); // 0
*/
//- An enum (enumeration) is a set of named constants.
//- Instead of using magic strings like `"pass"`, `"fail"`, `"skip"` scattered throughout your test code, you define them ONCE in an enum and use them everywhere.
//- Numeric enums auto-assign numbers starting from 0: `Low=0, Medium=1, High=2` String enums have explicit values: `Pass="PASS", Fail="FAIL"`
//- Prevent typos — `TestStatus.PSAS`  causes a compile error

enum TestStatus {
    Pass = "PASS",
    Fail = "FAIL",
    Skip = "SKIP",
    Pending = "PENDING",
    Blocked = "BLOCKED"
}

console.log(TestStatus.Pass);
//PASS

//-------------------------------------------

//String Enum
//- String enums are used to define a set of named constants.
//- It's a way to give more friendly names to sets of string values.

/*
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let direction: Direction = Direction.Up;
console.log(direction); // "UP"
*/