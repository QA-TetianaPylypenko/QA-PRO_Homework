/*
Написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), 
яка приймає чотири аргументи:
- рядок, до якого буде додаватися символ
- символ, який буде додаватися
- скільки додавати символів
- булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, 
а ви вказуєте значення 6, то додаєте тільки один символ
*/

function pad(str, symbol, count, addToStart) {
  if (count <= 0) {
    return str;
  }
  let padding = "";
  for (let i = 0; i < count; i++) {
    padding += symbol;
  }
  if (addToStart) {
    return padding + str;
  } else {
    return str + padding;
  }
}

// Приклад використання
console.log(pad("qwerty", "+", 2, true)); // ++qwerty
console.log(pad("qwerty", "+", 2, false)); // qwerty++
console.log(pad("qwerty", "+", 0, true)); // qwerty
console.log(pad("qwerty", "+", 0, false)); // qwerty
