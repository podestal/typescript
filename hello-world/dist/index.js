"use strict";
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
let numbers = [];
let user = [1, 'luis'];
let mySize = 2;
console.log(mySize);
const calculateTaxVoid = (income) => {
    console.log('This fnc does not return anything', income);
};
const calculateTax = (income, taxYear = 2022) => {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
};
console.log('Tax calculation without year: $.', calculateTax(10000));
console.log('Tax calculation with year: $.', calculateTax(10000, 2020));
let employee = {
    id: 1,
    name: "Luis",
    retire: (date) => console.log(date)
};
console.log('Employee', employee);
const kgToLbs = (weigh) => {
    if (typeof weigh === 'number') {
        return weigh * 2.2;
    }
    else {
        return parseInt(weigh) * 2.2;
    }
};
console.log('Kg to Lbs', kgToLbs(40));
console.log('Kg to Lbs', kgToLbs('40'));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
const greet = (name) => {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('Hola');
    }
};
greet(undefined);
const getCustomer = (id) => {
    return id === 0 ? null : { birthday: new Date() };
};
let customer = getCustomer(10);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, 'Luis', 0);
account.deposit(100);
console.log('balance', account.balance);
console.log(account);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Luis';
seats.A2 = 'Raul';
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let rideOne = new Ride();
rideOne.start();
let rideTwo = new Ride();
rideTwo.start();
console.log('Active rides:', Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking test');
    }
}
let student = new Student(1, 'Luis', 'Rodriguez');
console.log(student.fullName);
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
let teacher = new Teacher('Jonh', 'Smith');
console.log(teacher.fullName);
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair('1', 'a');
const wrapInArray = (value) => {
    return value;
};
console.log(wrapInArray('hola'));
console.log(wrapInArray(1));
//# sourceMappingURL=index.js.map