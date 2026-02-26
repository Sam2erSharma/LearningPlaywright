let day = 3;
switch (day) {
    case 0:
        console.log("Sunday");
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday");
    default:
        console.log("Invalid day");
}
//output: Wednesday
//Thursday
//Friday
//Saturday
//Invalid day

//NOTE: If break is not used in switch statement, it will execute all the cases from the matching case to the end.
//This is called fall-through.
