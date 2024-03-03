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

let employee :{ 
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1, 
    name: "Luis",
    retire: (date: Date) => console.log(date)
}

console.log('Employee', employee, );



 