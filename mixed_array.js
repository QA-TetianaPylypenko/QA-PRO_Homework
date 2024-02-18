function myBlend(arr) {
  arr.sort(function () {
    return Math.random() - 0.5;
  });
}

// Приклад використання
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myBlend(arr);
console.log(arr);
