// Написати свою реалізацію функції isNaN

function myIsNaN(value) {
  if (value !== value) {
    return true;
  } else {
    return false;
  }
}

// Приклад використання
console.log(myIsNaN(NaN)); // true
console.log(myIsNaN(235)); // false
console.log(myIsNaN("home")); // false
