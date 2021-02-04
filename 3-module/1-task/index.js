/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [ vasya, petya, masha ];

function namify(users) {
  let usersName=[];

  for (let user of users) {
    usersName.push(user.name);
  }
  return usersName;
}

let names = namify(users); // ['Вася', 'Петя', 'Маша']
