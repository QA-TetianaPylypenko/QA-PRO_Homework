/*
Приклад масиву
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

Потрібно написати функцію myBlend(arr), яка перемішуватиме переданий їй масив.
Не створювати новий масив, вже перемішаний, а саме перемішувати той, який їй передали.
 */

function myBlend(arr) {
  arr.sort(function () {
    return Math.random() - 0.5;
  });
}

// Приклад використання
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myBlend(arr);
console.log(arr);
