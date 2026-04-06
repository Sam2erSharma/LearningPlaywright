//Getter and Setter- used to get and set the value of a property
const user = {
    firstName: "Sameer",
    lastName: "Sharma",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");//
    }
}

console.log(user.fullName);//SameerSharma //getter is called here
user.fullName = "John Doe";//setter is called here
console.log(user.fullName);//John Doe