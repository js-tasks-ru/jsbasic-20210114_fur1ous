/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};

function sumSalary(obj) {
  let sumSal = 0;

  for(let key in obj) {
    if (typeof(obj[key]) === 'number' && obj[key]!== undefined && obj[key]!== Infinity && obj[key]!== -Infinity) {
      sumSal += obj[key];
    }
  }

  return sumSal;
}

sumSalary(salaries);
