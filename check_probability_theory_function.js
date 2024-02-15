// Створюємо функцію для генерації випадкових чисел
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Створюємо функцію для перевірки теорії ймовірності
function checkProbabilityTheory(count) {
  let evenCount = 0;
  let oddCount = 0;

  // Генеруємо випадкові числа та підраховуємо парні та непарні
  for (let i = 0; i < count; i++) {
    const randomNumber = generateRandomNumber(100, 1000);
    if (randomNumber % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  // Обчислюємо відсоткове співвідношення
  const totalNumbers = evenCount + oddCount;
  const evenPercentage = (evenCount / totalNumbers) * 100;
  const oddPercentage = (oddCount / totalNumbers) * 100;

  // Виводимо інфо в консолі
  console.log("Кількість згенерованих чисел:", totalNumbers);
  console.log("Кількість парних чисел:", evenCount);
  console.log("Кількість непарних чисел:", oddCount);
  console.log(
    "Відсоток парних до непарних:",
    evenPercentage.toFixed(2) + "%",
    oddPercentage.toFixed(2) + "%",
  );
}

// Викликаємо функцію
checkProbabilityTheory(1000);
