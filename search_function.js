// Маємо об'єкт з такими даними
const company = {
  name: "Велика Компанія",
  type: "Головна компанія",
  platform: "Платформа для продажу квитків",
  sellsSolution: "Рішення для продажу квитків",
  clients: [
    {
      name: "Клієнт 1",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
      partners: [
        {
          name: "Клієнт 1.1",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
        },
        {
          name: "Клієнт 1.2",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
          partners: [
            {
              name: "Клієнт 1.2.3",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
            },
          ],
        },
      ],
    },
    {
      name: "Клієнт 2",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
    },
  ],
};

/*
Необхідно написати функцію findValueByKey(companyName), яка буде приймати
значення у вигляді companyName та надавати інформацію про цю subCompany.
 */
function findValueByKey(companyName, company) {
  if (company.name === companyName) {
    return company;
  }

  // Шукаємо серед клієнтів
  if (Array.isArray(company.clients)) {
    for (let client of company.clients) {
      const result = findValueByKey(companyName, client);
      if (result) {
        return result;
      }
    }
  }

  // Шукаємо серед партнерів
  if (Array.isArray(company.partners)) {
    for (let partner of company.partners) {
      const result = findValueByKey(companyName, partner);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

// Приклад використання
const companyInfo = findValueByKey("Клієнт 1.1", company);
console.log(companyInfo);
