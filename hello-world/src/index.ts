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

