let status = 0;
switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
    default:
        console.log("Unknown");
}
//output: 0 matched
//NOTE: Here 0 is a number and false is a boolean so it will print 0 matched.
