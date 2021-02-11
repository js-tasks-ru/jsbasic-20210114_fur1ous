/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(users, age){

  let newUser = [];

  for (let item of users) {
    if (item.age <= age) {
      newUser.push(item);
    }
  }

  let userOld = newUser.map(item => {
    return `${item.name}, ${item.balance}`
  });

  return userOld.join('\n');

};
