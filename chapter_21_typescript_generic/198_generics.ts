/*Generics in TypeScript-
- Generic function: function getFirst<T>(arr: T[]): T
- Generic class: class DataStore<T> { private items: T[] = [] }
- Generic interface: interface APIResponse<T> { status: number; data: T }
- Multiple type params: function pair<K, V>(key: K, value: V) 
- Real use: parseResponse<UserData>(res) vs parseResponse<OrderData>(res) — same function, different types 
*/

//TypeScript function without generics
function getString(name: string): string {
    return "Amit";
}
getString("pramod");
// getFirstResult(123); --> Not possible since name is string type and 123 is number type

//Generic function
function getFirstResults<T>(results: T[]): T {
    return results[0]!;// ! is used to tell the compiler that the array is not empty. 
    // it tells the value is not null or undefined
}

//Here T is a placeholder for any type. It can be number, string, boolean, object, etc.
//In the first case, T is replaced by number, so the function will work with numbers.
//In the second case, T is replaced by string, so the function will work with strings.
let firstCode = getFirstResults<number>([200, 404, 500]);
let firstTest = getFirstResults<string>(["Login", "Signup", "Cart"]);


console.log("First code:", firstCode);
console.log("First test:", firstTest);