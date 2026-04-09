import { LoginPage } from "./Loginpage.js";

let page = new LoginPage();
page.open();
page.login("admin");
//Output:
//Opening Login Page
//admin logged in