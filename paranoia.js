// Завдання:

/*
В нас є масив обєктів в яких міститься email.

let arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

У нас параноя, ми не довіряємо жодним адресам,
окрім зареєстрованих на доменах gmail.com та yahoo.com.
За допомогою регулярного виразу створіть масив з адресами, гідними довіри.
Постарайтеся також зробити просту валідацію до @
- одне, або два слова які можуть містити (латинські букви, цифри)
яке може бути розділене крапкою.
 */

let arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];

// Регулярний вираз для валідації електронної адреси
let emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

// Створюємо масив для зберігання довірливих електронних адрес
let trustEmail = []
// Перебираємо кожен об'єкт у масиві
for (let i = 0; i < arr.length; i++) {
    let email = arr[i].email;
// Перевіряємо, чи адреса закінчується на gmail.com або yahoo.com
// та чи відповідає формату електронної пошти
    if ((email.endsWith('@gmail.com') || email.endsWith('@yahoo.com')) && emailRegex.test(email)) {
        trustEmail.push(email);
    }
}
// Виводимо на консоль знайдені довіриливі електронні адреси
console.log(trustEmail)