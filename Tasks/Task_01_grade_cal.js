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
let grade;
let score = "@";
if (typeof score !== "number") {
    console.log("Please enter a valid number.");
}
else if (score < 0 || score > 100) {
    console.log("Please enter a valid score between 0 and 100.");
}
else if (score >= 90 && score <= 100) {
    grade = "A";
    console.log(`Score: ${score} and Grade: ${grade}.`);
}
else if (score >= 80 && score <= 89) {
    grade = "B";
    console.log(`Score: ${score} and Grade: ${grade}.`);
}
else if (score >= 70 && score <= 79) {
    grade = "C";
    console.log(`Score: ${score} and Grade: ${grade}.`);
}
else if (score >= 60 && score <= 69) {
    grade = "D";
    console.log(`Score: ${score} and Grade: ${grade}.`);
}
else {
    grade = "F";
    console.log(`Score: ${score} and Grade: ${grade}.`);
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