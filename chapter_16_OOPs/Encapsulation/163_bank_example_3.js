class ICICI {
    #balance;

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}

let sameer = new ICICI("Sameer", 1000);
console.log(sameer.getBalance());
sameer.setBalance(10000000, false);
console.log(sameer.getBalance());

let sameer_father = new ICICI("Sameer", 2000);
console.log(sameer_father.getBalance());
sameer_father.setBalance(300000, true);
console.log(sameer_father.getBalance());