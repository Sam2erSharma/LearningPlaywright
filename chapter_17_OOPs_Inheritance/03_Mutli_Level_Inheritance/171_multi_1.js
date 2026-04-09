//Multi-level Inheritance -> A -> B -> C
//A chain where each level inherits from the one above it.

// Grand Father -> Father -> Son
// BasePage -> AuthPape -> AdminPage

class BasePage {
    constructor(name) {
        this.name = name;
    }

    open() {
        console.log("[OPEN] " + this.name);
    }
}


class AuthPage extends BasePage {
    login(user) {
        console.log("[LOGIN] " + user);
    }
}

class AdminPage extends AuthPage {
    constructor() {
        super("Admin Panel");//calls the constructor of the parent class AuthPage
    }

    manageUsers() {
        console.log("[ADMIN] Managing users");
    }
}

let admin = new AdminPage();
admin.open();
admin.login("superadmin");
admin.manageUsers();

//Output:
//[OPEN] Admin Panel
//[LOGIN] superadmin
//[ADMIN] Managing users