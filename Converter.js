/*
Завдання:
Напишіть програму, яка буде приймати два значення, перше це одиниця вимірювання (кілометри, години та кілограми),
друге значення це кількість, а потім переводити ці значення:
кілометри в метри
години в хвилини
кілограми в грами
Зробити вивід отриманої інформації у вигляді - 10 км це 10000 м. 1 г це 60хв. 1 кг. це 1000 грм.

Умови виконання:
- В задачі не обовязково викорисутовувати prompt, можна просто записати значення в зміні
- Обовязково при написані завдання використовуйте switch
- Продумати варіант, якщо буде введена якась інша одиниця виміру
 */

const unit = prompt('Enter the unit of measurement (km, h, kg)')
let value = parseFloat(prompt('Enter the value:'));
let converterValue;

switch (unit) {
    case 'km' :
        converterValue = value * 1000
        console.log(`${value} km it is ${converterValue} m.`);
        break;
    case 'h' :
        converterValue = value * 60;
        console.log(`${value} hour it is ${converterValue} min.`);
        break;
    case 'kg' :
        converterValue = value * 1000;
        console.log(`${value} kg it is ${converterValue} g.`);
        break;
    default:
        console.log('You have selected the wrong unit of measurement! \n' +
            'Select - km, h, kg')
        break;
}
