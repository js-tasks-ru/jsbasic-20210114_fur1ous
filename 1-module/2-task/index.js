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

  console.log(name.length);

  if (Boolean(name) != null) {
    console.log( 'Пустое значение');
  }
  else  if( name.length < 4) {
    console.log( 'Мало букв' );
  }
  else  if( name.includes(' ')) {
    console.log( 'Пробел в имени' );
  }
  else {
    console.log('Проверка прошла');
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
