// BUILT IN TYPES

let sales: number = 123_456_789;
let course: string = 'TypeScript'
let is_published: boolean = true
let level: any

// ARRAYS

// let numbers: number[] = [1, 2, 4]
let numbers: number[] = []

// TUPLES: fixed length array
let user: [number, string] = [1, 'luis']

// ENUMS
 const enum Size { Small = 1, Medium = 2, Large = 3 }
 let mySize: Size = Size.Medium
 console.log(mySize);

//  FUNCTIONS

const calculateTaxVoid = ( income: number): void => {
    console.log('This fnc does not return anything', income);
    
}

const calculateTax = (income: number, taxYear= 2022): number => {
    if (taxYear < 2022) {
        return income * 1.2
    }
    return income * 1.3
}

console.log('Tax calculation without year: $.', calculateTax(10_000))
console.log('Tax calculation with year: $.', calculateTax(10_000, 2020))

// OBJECTS

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1, 
    name: "Luis",
    retire: (date: Date) => console.log(date)
}

console.log('Employee', employee, );

// UNION TYPES

const kgToLbs = (weigh: number | string): number => {
    if (typeof weigh === 'number') {
        return weigh * 2.2
    } else {
        return parseInt(weigh) * 2.2
    }
}

console.log('Kg to Lbs', kgToLbs(40));
console.log('Kg to Lbs', kgToLbs('40'));

// INTERSECTION TYPES

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable | Resizable 
// this is an intersection type

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// LITERAL TYPES

// literal (exact, specific)
type Quantity = 50 | 100
let quantity: Quantity= 50

type Metric = 'cm' | 'inch'

// NULLABLE TYPES

const greet = (name: string | null | undefined): void  => {
    if (name) {
        console.log(name.toUpperCase())
    } else {
        console.log('Hola')
        
    }
}

greet(undefined)

// OPTIONAL CHAINING

type Customer = {
    birthday: Date
}

const getCustomer = (id: number): Customer | null => {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(10)
console.log(customer?.birthday);

// NULLISH COALESCING OPERATOR

let speed: number | null = null
let ride ={
    // the same as:
    // speed: speed !== null ? speed : 30
    speed: speed ?? 30
}

// OOP

class Account {

    nickname?: string

    constructor(
        public readonly id: number, 
        public owner: string, 
        private _balance: number) {
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Invalid amount')
        }
        this._balance += amount
    }

    // private calculateTax() {

    // }

    get balance(): number {
        return this._balance
    }

    // set balance(value: number) {
    //     if (value < 0) {
    //         throw new Error('Inavlid value')
    //     }
    //     this._balance = value
    // }
}

let account = new Account(1, 'Luis', 0)
account.deposit(100)
console.log('balance', account.balance);
console.log(account);

// INDEX SIGNATURES

class SeatAssignment {
    // index signature
    [seatNumber: string] : string
}

let seats = new SeatAssignment()
seats.A1 = 'Luis'
seats.A2 = 'Raul'

// STATIC MEMBERS

class Ride {
    private static _activeRides: number = 0

    start() { Ride._activeRides++ }

    stop() { Ride._activeRides-- }

    static get activeRides() {
        return Ride._activeRides
    }
}

let rideOne = new Ride()
rideOne.start()

let rideTwo = new Ride()
rideTwo.start()

console.log('Active rides:', Ride.activeRides)
// console.log(rideTwo.activeRides)

// INHERITANCE

class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName
    }

    walk() {
        console.log('Walking')
        
    }
}

class Student extends Person {
    constructor(
        public studentId: number,
        firstName: string,
        lastName: string
    ) {
        super(firstName, lastName
    )}

    takeTest() {
        console.log('Taking test');
        
    }
}


let student = new Student(1, 'Luis', 'Rodriguez')
console.log(student.fullName);

// METHOD OVERRIDING

class Teacher extends Person {

    override get fullName() {
        return 'Professor ' + super.fullName
    }

}

let teacher = new Teacher('Jonh', 'Smith')
console.log(teacher.fullName)

