let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("Apple");
    case "banana":
        console.log("Banana");
    case "orange":
        console.log("Orange");
    default:
        console.log("Unknown");
}
//output: Banana Orange Unknown
//NOTE: Banana Orange Unknown is printed because there is no break statement in switch case.
