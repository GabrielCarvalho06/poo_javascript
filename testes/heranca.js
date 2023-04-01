class Person {

    age = 0;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} diz OI`);
    }
}

class Student extends Person {


    constructor(name, matricula) {
        super(name);
        this.matricula = matricula;
    }

    sayHello() {
        super.sayHi();
    }
}

let p1 = new Student("Gabriel", 1);
p1.age = 20;

p1.sayHello();