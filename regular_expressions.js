/*
Написати регулярний вираз, який допоможе знайти принаймні шість символів
і не містити літери А (великої або малої)
*/

let str = "String without A or a";
let reg = /[^Aa]{6,}/;
let result = reg.test(str);
console.log(result);
