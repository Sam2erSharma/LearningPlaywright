//Hierarchial Inheritance -> A -> B, A -> C ; 1 father 2 sons

/*class Father {

}

class Son1 extends Father {

}
class Son2 extends Father {

}
*/

class Father {
    constructor() {
        this.car = "BMW";
    }
}

class Son1 extends Father {
    constructor() {
        super();
    }
}

class Son2 extends Father {
    constructor() {
        super();
    }
}

let f = new Father();
let s1 = new Son1();
let s2 = new Son2();

console.log(f.car);
console.log(s1.car);
console.log(s2.car);

//Output:
//BMW
//BMW
//BMW

