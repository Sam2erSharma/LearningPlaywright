class Student {
    static collegeName = "PW AT Batch";

    constructor(name) {
        this.name = name;
    }
    static display() {
        console.log(this.name + " are part of the ", Student.collegeName)
    }
}

let s1 = new Student("Sameer");
let s2 = new Student("Anil");
let s3 = new Student("Anmol");
let s4 = new Student("Seema");

console.log(Student.collegeName);
console.log(s1.name);
console.log(s3.name);