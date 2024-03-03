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
//# sourceMappingURL=index.js.map