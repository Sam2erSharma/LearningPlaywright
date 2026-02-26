let value = "5";
switch (value) {
    case 5:
        console.log("Number 5 matched");
        break;
    case "5":
        console.log("String 5 matched");
        break;
    default:
        console.log("Unknown");
}
//output: String 5 matched
//NOTE: Here 5 is a string and 5 is a number so it will print String 5 matched.
//Switch uses strict equality (===) for comparison.
