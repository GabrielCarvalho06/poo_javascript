class Person {
    static hands = 2;
    age = 0;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Oi, meu nome é ${this.name} e tenho ${Person.hands} mãos`);
    }
}

let p1 = new Person("Gabriel")
p1.sayHi();