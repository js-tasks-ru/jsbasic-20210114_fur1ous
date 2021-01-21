/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
function isValid(name) {

  if (Boolean(name) === null) {
    alert( 'Пустое значение');
  }
  else  if( name.length < 4) {
    alert( 'Мало букв' );
  }
  else  if( name.includes(' ')) {
    alert( 'Пробел в имени' );
  }
  else {
    return true;
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();
