/*
У нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:
var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"
};
"Послуги" можуть додаватися по ходу роботи:
services['Розбити скло'] = "200 грн";

Умови виконання:
створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price
*/

// Об'єкт з послугами та їх вартістю
let services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн",
};
// Додаємо нову послугу
services["Розбити скло"] = "200 грн";

// Обчислюємо загальну вартість послуг
function price() {
    let total = 0;
    for (let service in services) {
        if (typeof services[service] === "string") {
            total += parseInt(services[service]);
        }
    }
    return total;
}

// Обчислюємо мінімальну вартість послуг
function minPrice() {
    let min = Infinity;
    for (let service in services) {
        if (typeof services[service] === "string") {
            let price = parseInt(services[service]);
            if (price < min) {
                min = price;
            }
        }
    }
    return min;
}

// Обчислюємо максимальну вартість послуг
function maxPrice() {
    let max = -Infinity;
    for (let service in services) {
        if (typeof services[service] === "string") {
            let price = parseInt(services[service]);
            if (price > max) {
                max = price;
            }
        }
    }
    return max;
}

// Виводимо результати
console.log("Загальна вартість: " + price() + " грн");
console.log("Мінімальна вартість: " + minPrice() + " грн");
console.log("Максимальна вартість: " + maxPrice() + " грн");
