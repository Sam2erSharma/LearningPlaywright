/*✅ Grade Calculator:
Write a program that calculates and displays the letter grade for a given numerical score
(e.g., A, B, C, D, or F) based on the following grading scale:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
*/
//Using If Else
let score = 59;
if (score >= 90 && score <= 100) {
    console.log("Grade : A");
}
else if (score >= 80 && score <= 89) {
    console.log("Grade : B");
}
else if (score >= 70 && score <= 79) {
    console.log("Grade : C");
}
else if (score >= 60 && score <= 69) {
    console.log("Grade : D");
}
else if (score >= 0 && score <= 59) {
    console.log("Grade : F");
}
else {
    console.log("Invalid Grade");
}

//Using Switch Case
/*let score = 29;
let grade;
switch (true) {
    case score >= 90 && score <= 100:
        grade = "A";
        break;
    case score >= 80 && score <= 89:
        grade = "B";
        break;
    case score >= 70 && score <= 79:
        grade = "C";
        break;
    case score >= 60 && score <= 69:
        grade = "D";
        break;
    case score >= 0 && score <= 59:
        grade = "F";
        break;
}
console.log("Grade: " + grade);*/