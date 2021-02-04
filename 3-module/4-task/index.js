/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user2 = {
  "balance": "$2,825.65",
  "picture": "https://xxx.it/32x32",
  "age": 27,
  "name": "Boba",
  "gender": "female",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "none"
};

let user3 = {
  "balance": "$825.65",
  "picture": "https://xxx.it/32x32",
  "age": 29,
  "name": "Ira",
  "gender": "female",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "none"
};

// Массив пользователей
let users = [user1, user2, user3];

function showSalary(users, age) {
  let topUser = users.map(item => item.age <= age ? `${item.name}, ${item.balance}` : null).join('\n');

  return topUser;
};

showSalary(users, 30);
