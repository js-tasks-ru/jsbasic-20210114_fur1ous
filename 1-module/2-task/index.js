/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
function isValid(name) {

  if (!name || 0 === name.length || name.length < 4 || name.includes(' ')) {
    return false;
  }
  else {
    return true;
  }
}
