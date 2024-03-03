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
//# sourceMappingURL=index.js.map