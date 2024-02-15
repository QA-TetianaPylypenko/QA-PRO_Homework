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
console.log(pad("letters", "+", 2, true)); // ++letters
console.log(pad("letters", "+", 2, false)); // letters++
console.log(pad("letters", "+", 0, true)); // letters
console.log(pad("letters", "+", 0, false)); // letters
