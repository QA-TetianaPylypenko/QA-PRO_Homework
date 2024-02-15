// Створюєм об'єкт
let myObject = {
  name: "Archie",
  age: 6,
  gender: "male",
  animal: "dog",
};

// Виводимо інфо про об'єкт
function getInfo(myObject) {
  console.log("name:" + myObject.name);
  console.log("age:" + myObject.age);
  console.log("gender:" + myObject.gender);
  console.log("animal:" + myObject.animal);
  if ("type" in myObject) {
    console.log("type:" + myObject.type);
  }
}

// Викликаємо функцію
getInfo(myObject);

// Додаємо нову властивість
myObject.type = "dachshund";

// Знов викликаємо функцію, для виведення оновленої інфо про об'єкт
getInfo(myObject);
